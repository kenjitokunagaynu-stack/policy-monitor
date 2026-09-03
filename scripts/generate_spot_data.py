#!/usr/bin/env python3
"""Builds data/spot_data.js from the combined JEPX spot-market CSV produced by
spot_fetch_and_process.sh. Pure data formatting/statistics, no AI/LLM involved.
Usage: generate_spot_data.py <meta.env> <output spot_data.js path>
"""
import datetime
import json
import sys

AREA_ORDER = ["北海道", "東北", "東京", "中部", "北陸", "関西", "中国", "四国", "九州"]
# CSV column index (0-based) for each series: system price + 9 area prices, in file order.
SERIES_COLUMNS = [("national", 5)] + [(name, 6 + i) for i, name in enumerate(AREA_ORDER)]
HISTORY_DAYS = 30


def read_env(path):
    env = {}
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or "=" not in line:
                continue
            k, v = line.split("=", 1)
            env[k] = v
    return env


def block_label(i):
    total_min = (i - 1) * 30
    h1, m1 = divmod(total_min, 60)
    h2, m2 = divmod(total_min + 30, 60)
    return "%02d:%02d~%02d:%02d" % (h1, m1, h2, m2)


def shift_date(date_str, delta_days):
    d = datetime.date.fromisoformat(date_str) + datetime.timedelta(days=delta_days)
    return d.isoformat()


def read_csv(path):
    """Returns {series_name: {date_iso: {block_int: price_float}}}."""
    data = {name: {} for name, _ in SERIES_COLUMNS}
    with open(path, encoding="utf-8") as f:
        next(f, None)  # header
        for line in f:
            parts = line.rstrip("\n").split(",")
            if len(parts) < 15:
                continue
            date_raw, block_raw = parts[0], parts[1]
            try:
                date_iso = date_raw.replace("/", "-")
                datetime.date.fromisoformat(date_iso)
                block = int(block_raw)
            except ValueError:
                continue
            for name, col in SERIES_COLUMNS:
                try:
                    price = float(parts[col])
                except (ValueError, IndexError):
                    continue
                data[name].setdefault(date_iso, {})[block] = price
    return data


def spread_3h(series, date_iso, min_block, max_block):
    """3-hour value spread: avg of the 3 blocks before + 3 after the day's max-price
    block, minus the same for the min-price block (excludes the peak/trough block
    itself). Looks across the day boundary using the previous/next day's data."""
    prev_blocks = series.get(shift_date(date_iso, -1), {})
    cur_blocks = series.get(date_iso, {})
    next_blocks = series.get(shift_date(date_iso, 1), {})
    seq = [prev_blocks.get(b) for b in range(1, 49)] \
        + [cur_blocks.get(b) for b in range(1, 49)] \
        + [next_blocks.get(b) for b in range(1, 49)]

    def window_avg(center_block):
        pos = 48 + (center_block - 1)
        window = seq[pos - 3:pos] + seq[pos + 1:pos + 4]
        window = [v for v in window if v is not None]
        return sum(window) / len(window) if window else None

    low_avg = window_avg(min_block)
    high_avg = window_avg(max_block)
    if low_avg is None or high_avg is None:
        return None, None, None
    return high_avg - low_avg, low_avg, high_avg


def day_stats(series, date_iso):
    blocks = series.get(date_iso, {})
    if len(blocks) < 48:
        return None
    prices = [blocks[b] for b in range(1, 49)]
    avg = sum(prices) / 48
    max_price = max(prices)
    min_price = min(prices)
    max_block = prices.index(max_price) + 1
    min_block = prices.index(min_price) + 1
    spread, low_avg, high_avg = spread_3h(series, date_iso, min_block, max_block)
    return {
        "prices": prices, "avg": avg,
        "max": max_price, "maxBlock": max_block,
        "min": min_price, "minBlock": min_block,
        "spread3h": spread, "spreadLowAvg": low_avg, "spreadHighAvg": high_avg,
    }


def build_series_payload(series, target_date, label):
    today = day_stats(series, target_date)
    if today is None:
        return None

    hist_dates = [shift_date(target_date, -k) for k in range(1, HISTORY_DAYS + 1)]
    hist_stats = [s for s in (day_stats(series, d) for d in hist_dates) if s is not None]

    avg30d_by_block = []
    for b in range(1, 49):
        vals = [series.get(d, {}).get(b) for d in hist_dates]
        vals = [v for v in vals if v is not None]
        avg30d_by_block.append(round(sum(vals) / len(vals), 2) if vals else None)

    avg30d_of_avg = sum(s["avg"] for s in hist_stats) / len(hist_stats) if hist_stats else None
    spread_vals = [s["spread3h"] for s in hist_stats if s["spread3h"] is not None]
    avg30d_of_spread = sum(spread_vals) / len(spread_vals) if spread_vals else None

    blocks = []
    for b in range(1, 49):
        blocks.append({
            "block": b, "label": block_label(b),
            "price": round(today["prices"][b - 1], 2),
            "priceAvg30d": avg30d_by_block[b - 1],
        })

    def r2(v):
        return round(v, 2) if v is not None else None

    return {
        "label": label,
        "blocks": blocks,
        "avg": r2(today["avg"]),
        "max": r2(today["max"]), "maxBlock": today["maxBlock"],
        "min": r2(today["min"]), "minBlock": today["minBlock"],
        "spread3h": r2(today["spread3h"]),
        "spreadLowAvg": r2(today["spreadLowAvg"]), "spreadHighAvg": r2(today["spreadHighAvg"]),
        "avg30d": r2(avg30d_of_avg),
        "spread30dAvg": r2(avg30d_of_spread),
        "historyDays": len(hist_stats),
    }


def main():
    meta_path, out_path = sys.argv[1], sys.argv[2]
    env = read_env(meta_path)
    target_date = env["TARGET_DATE"]

    raw = read_csv(env["COMBINED_CSV"])

    national = build_series_payload(raw["national"], target_date, "システムプライス（全国）")
    if national is None:
        print("ERROR: target date %s has incomplete national data (< 48 blocks); aborting without writing output." % target_date, file=sys.stderr)
        sys.exit(1)

    area_blocks_payload = {}
    for area in AREA_ORDER:
        payload = build_series_payload(raw[area], target_date, "エリアプライス（%s）" % area)
        if payload is not None:
            area_blocks_payload[area] = payload

    data = {
        "targetDate": target_date,
        "fetchedAt": env["FETCHED_AT"],
        "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
        "avgWindowLabel": "過去%d日平均" % HISTORY_DAYS,
        "national": national,
        "areaOrder": AREA_ORDER,
        "areaBlocks": area_blocks_payload,
    }

    header = (
        "// 電力卸売市場（スポット市場）価格ウォッチ\n"
        "// 出典: 一般社団法人 日本卸電力取引所（JEPX）スポット市場ページ\n"
        "//   https://www.jepx.jp/electricpower/market-data/spot/ （年度別 約定価格・入札量CSV）\n"
        "// 取得方法: 上記CSVを毎日1回取得（GitHub Actions、scripts/spot_fetch_and_process.sh）。\n"
        "// 対象日は取得実行日の前日（受渡日）。48コマ（30分単位）のシステムプライス（全国）と\n"
        "// エリアプライス（9エリア）を収録。priceAvg30d は対象日を含まない直近30日間の同一コマの単純平均値。\n"
        "// spread3h（3時間値差）は当日の最高値コマ・最低値コマそれぞれの前後3コマ（計6コマ=3時間、\n"
        "// 当該コマ自身は含まない）の平均値の差分。日境界をまたぐ場合は前日・翌日のコマを参照する。\n"
    )

    body = "window.SPOT_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"

    with open(out_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(header)
        f.write(body)

    print("Wrote %s (target=%s, fetchedAt=%s, areas=%d)" % (
        out_path, target_date, env["FETCHED_AT"], len(area_blocks_payload)))


if __name__ == "__main__":
    main()
