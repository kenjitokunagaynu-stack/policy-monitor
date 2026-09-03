#!/usr/bin/env bash
# Downloads JEPX spot market settlement CSV(s) (fiscal-year files, current + previous
# if the needed window straddles the April fiscal-year boundary) and hands off a
# combined, CRLF-stripped CSV plus a meta.env to generate_spot_data.py.
set -euo pipefail

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
REFERER="https://www.jepx.jp/electricpower/market-data/spot/"

NOW_JST=$(TZ=Asia/Tokyo date +%Y-%m-%d)
TARGET_DATE=$(date -d "$NOW_JST -1 day" +%Y-%m-%d)
FETCHED_AT=$(TZ=Asia/Tokyo date +%Y-%m-%dT%H:%M:%S+09:00)

# Need enough history for the 30-day trailing average plus +/-1 day buffer so the
# 3-hour value-spread window can look across a day boundary near either edge.
WINDOW_START=$(date -d "$TARGET_DATE -33 day" +%Y-%m-%d)
WINDOW_END=$(date -d "$TARGET_DATE +1 day" +%Y-%m-%d)

fiscal_year() {
  local d="$1" y m
  y=$(date -d "$d" +%Y)
  m=$(date -d "$d" +%m)
  if [ "$((10#$m))" -ge 4 ]; then
    echo "$y"
  else
    echo "$((y - 1))"
  fi
}

FY_START=$(fiscal_year "$WINDOW_START")
FY_END=$(fiscal_year "$WINDOW_END")

WORKDIR=$(mktemp -d)
COMBINED="$WORKDIR/combined.csv"
: > "$COMBINED"

FIRST=1
FY=$FY_START
while [ "$FY" -le "$FY_END" ]; do
  URL="https://www.jepx.jp/js/csv_read.php?dir=spot_summary&file=spot_summary_${FY}.csv"
  OUT="$WORKDIR/spot_summary_${FY}.csv"
  curl -s -L -A "$UA" -e "$REFERER" --max-time 30 "$URL" -o "$OUT" || true
  if [ -s "$OUT" ]; then
    if [ "$FIRST" -eq 1 ]; then
      tr -d '\r' < "$OUT" >> "$COMBINED"
      FIRST=0
    else
      tr -d '\r' < "$OUT" | tail -n +2 >> "$COMBINED"
    fi
  fi
  FY=$((FY + 1))
done

if [ ! -s "$COMBINED" ]; then
  echo "ERROR: no data downloaded from JEPX" >&2
  exit 1
fi

{
  echo "TARGET_DATE=$TARGET_DATE"
  echo "FETCHED_AT=$FETCHED_AT"
  echo "COMBINED_CSV=$COMBINED"
} > "$WORKDIR/meta.env"

echo "WORKDIR_META=$WORKDIR/meta.env"
