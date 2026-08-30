#!/usr/bin/env bash
# Fetches EPRX's official one-shot CSV bundle (once per fiscal year zip, at most twice per run
# to cover a fiscal-year boundary), extracts national + area-level 48-block data for the latest
# available date, and computes trailing 30-day averages. Writes tab-separated intermediate files
# consumed by scripts/generate_eprx_data.py. No AI/LLM involved — pure mechanical extraction,
# matching the ToS-compliant "one CSV bundle download per day" approach used by the local task.
set -euo pipefail

WORKDIR="$(mktemp -d)"
cd "$WORKDIR"

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

YEAR=$(TZ=Asia/Tokyo date +%Y)
MONTH=$(TZ=Asia/Tokyo date +%m); MONTH=$((10#$MONTH))
if [ "$MONTH" -ge 4 ]; then FY=$YEAR; else FY=$((YEAR - 1)); fi
PREV_FY=$((FY - 1))

download_fy() {
  local fy="$1"
  local out="fy_${fy}.zip"
  local code
  code=$(curl -sS -L -A "$UA" -o "$out" -w "%{http_code}" "https://www.eprx.or.jp/information/files/${fy}_1-0_prompt.zip" || echo "000")
  if [ "$code" = "200" ] && [ -s "$out" ]; then
    mkdir -p "extracted_${fy}"
    unzip -oq "$out" -d "extracted_${fy}"
    return 0
  fi
  rm -f "$out"
  return 1
}

download_fy "$FY" || { echo "ERROR: failed to download FY $FY CSV bundle (HTTP not 200)"; exit 1; }
download_fy "$PREV_FY" || echo "NOTE: FY $PREV_FY bundle unavailable or not needed; continuing with FY $FY only"

COMBINED="$WORKDIR/combined_utf8.csv"
: > "$COMBINED"
shopt -s nullglob
for f in extracted_*/*.csv extracted_*/*.CSV; do
  iconv -f SHIFT_JIS -t UTF-8 "$f" >> "$COMBINED" 2>/dev/null || true
done
shopt -u nullglob

if [ ! -s "$COMBINED" ]; then
  echo "ERROR: no CSV rows found after extraction/conversion"
  exit 1
fi

TARGET_DATE=$(awk -F',' '$1 ~ /^[0-9]{8}B[0-9]+$/ { print substr($1,1,8) }' "$COMBINED" | sort -u | tail -1)
if [ -z "$TARGET_DATE" ]; then
  echo "ERROR: could not determine target date from CSV data"
  exit 1
fi
echo "Target date: $TARGET_DATE"

TARGET_FMT="${TARGET_DATE:0:4}-${TARGET_DATE:4:2}-${TARGET_DATE:6:2}"
START_DATE=$(date -u -d "$TARGET_FMT -30 days" +%Y%m%d)
END_DATE=$(date -u -d "$TARGET_FMT -1 days" +%Y%m%d)
START_FMT=$(date -u -d "$TARGET_FMT -30 days" +%Y/%m/%d)
END_FMT=$(date -u -d "$TARGET_FMT -1 days" +%Y/%m/%d)

SAMPLE_DAYS=$(awk -F',' -v start="$START_DATE" -v end="$END_DATE" \
  '$1 ~ /^[0-9]{8}B[0-9]+$/ { d=substr($1,1,8); if (d>=start && d<=end) print d }' "$COMBINED" \
  | sort -u | wc -l | tr -d ' ')

# Note: block-number extraction below uses index()/substr() rather than gawk's
# match(str, regexp, array) 3-argument extension, since GitHub Actions' default
# `awk` (mawk) does not support it — this must stay portable across awk dialects.

# National 48-block extraction
awk -F',' -v td="$TARGET_DATE" '
$1 ~ "^"td"B" {
  key=$1; label=$2; n=NF; total=$n;
  block = substr(key, index(key, "B") + 1) + 0;
  if (label=="募集量（TSO別）[MW]") boshu[block]=total;
  if (label=="応札量合計（電源属地別）[MW]") ouatsu[block]=total;
  if (label=="最高落札価格（電源属地別）[円/kW・30分]") saikou[block]=total;
  if (label=="平均落札価格（電源属地別）[円/kW・30分]") heikin[block]=total;
}
END { for (i=1;i<=48;i++) printf "%d\t%s\t%s\t%s\t%s\n", i, boshu[i], ouatsu[i], saikou[i], heikin[i]; }
' "$COMBINED" > "$WORKDIR/national_blocks.tsv"

# Area 9x48 extraction
awk -F',' -v td="$TARGET_DATE" '
BEGIN {
  areas["北海道"]=3; areas["東北"]=4; areas["東京"]=5; areas["中部"]=6; areas["北陸"]=7; areas["関西"]=8; areas["中国"]=9; areas["四国"]=10; areas["九州"]=11;
  split("北海道 東北 東京 中部 北陸 関西 中国 四国 九州", arealist, " ");
}
$1 ~ "^"td"B" {
  key=$1; label=$2;
  block = substr(key, index(key, "B") + 1) + 0;
  if (label=="募集量（TSO別）[MW]") { for (a in areas) boshu[a,block]=$(areas[a]); }
  if (label=="応札量合計（電源属地別）[MW]") { for (a in areas) ouatsu[a,block]=$(areas[a]); }
  if (label=="最高落札価格（電源属地別）[円/kW・30分]") { for (a in areas) saikou[a,block]=$(areas[a]); }
  if (label=="平均落札価格（電源属地別）[円/kW・30分]") { for (a in areas) heikin[a,block]=$(areas[a]); }
}
END {
  for (ai=1; ai<=9; ai++) { a=arealist[ai]; for (i=1;i<=48;i++) printf "%s\t%d\t%s\t%s\t%s\t%s\n", a, i, boshu[a,i], ouatsu[a,i], saikou[a,i], heikin[a,i]; }
}
' "$COMBINED" > "$WORKDIR/area_blocks.tsv"

# National 30-day trailing average (boshu, heikin only)
awk -F',' -v start="$START_DATE" -v end="$END_DATE" '
{
  key=$1; label=$2; n=NF; total=$n;
  bpos = index(key, "B");
  if (bpos != 9) next;
  d = substr(key, 1, 8);
  if (d !~ /^[0-9]{8}$/) next;
  block = substr(key, bpos + 1) + 0;
  if (d < start || d > end) next;
  if (label=="募集量（TSO別）[MW]") { bsum[block]+=total; bcnt[block]++; }
  if (label=="平均落札価格（電源属地別）[円/kW・30分]") { hsum[block]+=total; hcnt[block]++; }
}
END {
  for (i=1;i<=48;i++) {
    bavg = (bcnt[i]>0) ? bsum[i]/bcnt[i] : 0;
    havg = (hcnt[i]>0) ? hsum[i]/hcnt[i] : 0;
    printf "%d\t%.1f\t%.3f\n", i, bavg, havg;
  }
}' "$COMBINED" > "$WORKDIR/national_avg30d.tsv"

# Area 30-day trailing average (boshu, heikin only, per area per block)
awk -F',' -v start="$START_DATE" -v end="$END_DATE" '
BEGIN {
  areas["北海道"]=3; areas["東北"]=4; areas["東京"]=5; areas["中部"]=6; areas["北陸"]=7; areas["関西"]=8; areas["中国"]=9; areas["四国"]=10; areas["九州"]=11;
  split("北海道 東北 東京 中部 北陸 関西 中国 四国 九州", arealist, " ");
}
{
  key=$1; label=$2;
  bpos = index(key, "B");
  if (bpos != 9) next;
  d = substr(key, 1, 8);
  if (d !~ /^[0-9]{8}$/) next;
  block = substr(key, bpos + 1) + 0;
  if (d < start || d > end) next;
  if (label=="募集量（TSO別）[MW]") { for (a in areas) { bsum[a,block]+=$(areas[a]); bcnt[a,block]++; } }
  if (label=="平均落札価格（電源属地別）[円/kW・30分]") { for (a in areas) { hsum[a,block]+=$(areas[a]); hcnt[a,block]++; } }
}
END {
  for (ai=1; ai<=9; ai++) { a=arealist[ai];
    for (i=1;i<=48;i++) {
      k=a SUBSEP i;
      bavg = (bcnt[k]>0) ? bsum[k]/bcnt[k] : 0;
      havg = (hcnt[k]>0) ? hsum[k]/hcnt[k] : 0;
      printf "%s\t%d\t%.1f\t%.3f\n", a, i, bavg, havg;
    }
  }
}' "$COMBINED" > "$WORKDIR/area_avg30d.tsv"

FETCHED_AT=$(TZ=Asia/Tokyo date +%Y-%m-%d)
TARGET_ISO="${TARGET_DATE:0:4}-${TARGET_DATE:4:2}-${TARGET_DATE:6:2}"

cat > "$WORKDIR/meta.env" <<EOF
TARGET_ISO=$TARGET_ISO
FETCHED_AT=$FETCHED_AT
SAMPLE_DAYS=$SAMPLE_DAYS
AVG_START_FMT=$START_FMT
AVG_END_FMT=$END_FMT
NATIONAL_BLOCKS=$WORKDIR/national_blocks.tsv
AREA_BLOCKS=$WORKDIR/area_blocks.tsv
NATIONAL_AVG30D=$WORKDIR/national_avg30d.tsv
AREA_AVG30D=$WORKDIR/area_avg30d.tsv
EOF

echo "WORKDIR_META=$WORKDIR/meta.env"
