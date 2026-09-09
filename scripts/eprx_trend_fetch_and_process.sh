#!/usr/bin/env bash
# Downloads EPRX's official one-shot CSV bundle for EVERY fiscal year from FY2024
# (the earliest year EPRX publishes) through the current fiscal year, and combines
# them into one CSV covering 2024-04-01 through the latest available date. Feeds
# scripts/generate_eprx_trend_data.py, which builds the long-run daily-aggregate
# trend series (theme IV). Same ToS-compliant "one CSV bundle per file per day"
# approach as eprx_fetch_and_process.sh (theme III) -- just more files/year.
set -euo pipefail

WORKDIR="$(mktemp -d)"
cd "$WORKDIR"

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

FIRST_FY=2024
YEAR=$(TZ=Asia/Tokyo date +%Y)
MONTH=$(TZ=Asia/Tokyo date +%m); MONTH=$((10#$MONTH))
if [ "$MONTH" -ge 4 ]; then CUR_FY=$YEAR; else CUR_FY=$((YEAR - 1)); fi

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

FY=$FIRST_FY
DOWNLOADED=0
while [ "$FY" -le "$CUR_FY" ]; do
  if download_fy "$FY"; then
    DOWNLOADED=$((DOWNLOADED + 1))
  else
    echo "NOTE: FY $FY bundle unavailable; skipping"
  fi
  FY=$((FY + 1))
done

if [ "$DOWNLOADED" -eq 0 ]; then
  echo "ERROR: failed to download any fiscal-year CSV bundle" >&2
  exit 1
fi

COMBINED="$WORKDIR/combined_utf8.csv"
: > "$COMBINED"
shopt -s nullglob
for f in extracted_*/*.csv extracted_*/*.CSV; do
  # Same CRLF-stripping fix as eprx_fetch_and_process.sh -- see that script's comment
  # for why this matters (Python's universal-newline mode mangles an embedded \r).
  iconv -f SHIFT_JIS -t UTF-8 "$f" 2>/dev/null | tr -d '\r' >> "$COMBINED" || true
done
shopt -u nullglob

if [ ! -s "$COMBINED" ]; then
  echo "ERROR: no CSV rows found after extraction/conversion" >&2
  exit 1
fi

FETCHED_AT=$(TZ=Asia/Tokyo date +%Y-%m-%dT%H:%M:%S+09:00)

cat > "$WORKDIR/meta.env" <<EOF
FETCHED_AT=$FETCHED_AT
COMBINED_CSV=$COMBINED
EOF

echo "WORKDIR_META=$WORKDIR/meta.env"
