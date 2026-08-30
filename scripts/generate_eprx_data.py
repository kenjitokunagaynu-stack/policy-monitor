#!/usr/bin/env python3
"""Builds data/eprx_data.js from the tab-separated intermediates produced by
eprx_fetch_and_process.sh. Pure data formatting, no AI/LLM involved.
Usage: generate_eprx_data.py <meta.env> <output eprx_data.js path>
"""
import json
import sys


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


def num(s):
    if s is None or s == "":
        return None
    try:
        f = float(s)
        return int(f) if f.is_integer() else f
    except ValueError:
        return None


def read_national_blocks(path):
    blocks = []
    with open(path, encoding="utf-8") as f:
        for line in f:
            parts = line.rstrip("\n").split("\t")
            if len(parts) != 5:
                continue
            i, boshu, ouatsu, saikou, heikin = parts
            blocks.append({"i": int(i), "boshu": num(boshu), "ouatsu": num(ouatsu),
                            "saikou": num(saikou), "heikin": num(heikin)})
    return blocks


def read_national_avg(path):
    avg = {}
    with open(path, encoding="utf-8") as f:
        for line in f:
            parts = line.rstrip("\n").split("\t")
            if len(parts) != 3:
                continue
            i, bavg, havg = parts
            avg[int(i)] = (round(float(bavg), 1), round(float(havg), 3))
    return avg


def read_area_blocks(path):
    areas = {}
    with open(path, encoding="utf-8") as f:
        for line in f:
            parts = line.rstrip("\n").split("\t")
            if len(parts) != 6:
                continue
            area, i, boshu, ouatsu, saikou, heikin = parts
            areas.setdefault(area, {})[int(i)] = {
                "boshu": num(boshu), "ouatsu": num(ouatsu), "saikou": num(saikou), "heikin": num(heikin)
            }
    return areas


def read_area_avg(path):
    avg = {}
    with open(path, encoding="utf-8") as f:
        for line in f:
            parts = line.rstrip("\n").split("\t")
            if len(parts) != 4:
                continue
            area, i, bavg, havg = parts
            avg.setdefault(area, {})[int(i)] = (round(float(bavg), 1), round(float(havg), 3))
    return avg


def block_label(i):
    # Last block ends at "24:00" (not wrapped to "00:00"), matching the existing data convention.
    total_min = (i - 1) * 30
    h1, m1 = divmod(total_min, 60)
    h2, m2 = divmod(total_min + 30, 60)
    return "%02d:%02d~%02d:%02d" % (h1, m1, h2, m2)


def main():
    meta_path, out_path = sys.argv[1], sys.argv[2]
    env = read_env(meta_path)

    national = read_national_blocks(env["NATIONAL_BLOCKS"])
    national_avg = read_national_avg(env["NATIONAL_AVG30D"])
    area_raw = read_area_blocks(env["AREA_BLOCKS"])
    area_avg = read_area_avg(env["AREA_AVG30D"])

    area_order = ["北海道", "東北", "東京", "中部", "北陸", "関西", "中国", "四国", "九州"]

    blocks = []
    for b in national:
        i = b["i"]
        bavg, havg = national_avg.get(i, (None, None))
        blocks.append({
            "block": i, "label": block_label(i),
            "boshu": b["boshu"], "ouatsu": b["ouatsu"], "saikou": b["saikou"], "heikin": b["heikin"],
            "boshuAvg30d": bavg, "heikinAvg30d": havg,
        })

    area_blocks = {}
    for area in area_order:
        rows = area_raw.get(area, {})
        avgs = area_avg.get(area, {})
        arr = []
        for i in range(1, 49):
            r = rows.get(i, {})
            bavg, havg = avgs.get(i, (None, None))
            arr.append({
                "block": i, "label": block_label(i),
                "boshu": r.get("boshu"), "ouatsu": r.get("ouatsu"),
                "saikou": r.get("saikou"), "heikin": r.get("heikin"),
                "boshuAvg30d": bavg, "heikinAvg30d": havg,
            })
        area_blocks[area] = arr

    sample_days = env.get("SAMPLE_DAYS", "30")
    avg_window_label = "過去%s日平均（%s〜%s）" % (sample_days, env["AVG_START_FMT"], env["AVG_END_FMT"])

    data = {
        "product": "一次調整力（複合市場）",
        "targetDate": env["TARGET_ISO"],
        "fetchedAt": env["FETCHED_AT"],
        "avgWindowLabel": avg_window_label,
        "sourceUrl": "https://www.eprx.or.jp/information/results.php",
        "units": {"boshu": "MW", "ouatsu": "MW", "saikou": "円/kW・30分", "heikin": "円/kW・30分"},
        "labels": {
            "boshu": "募集量",
            "ouatsu": "応札量合計（電源属地別）",
            "saikou": "最高落札価格（電源属地別）",
            "heikin": "平均落札価格（電源属地別）",
            "boshuAvg30d": "募集量（過去30日平均）",
            "heikinAvg30d": "平均落札価格（過去30日平均）",
        },
        "blocks": blocks,
        "areaOrder": area_order,
        "areaBlocks": area_blocks,
    }

    header = (
        "// 需給調整市場 一次調整力（複合市場）約定結果データ\n"
        "// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」\n"
        "//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）\n"
        "// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。\n"
        "// boshuAvg30d / heikinAvg30d は対象日を含まない直近%s日間（本データでは%s〜%s）の\n"
        "// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、\n"
        "// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。\n"
    ) % (sample_days, env["AVG_START_FMT"], env["AVG_END_FMT"])

    body = "window.EPRX_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"

    with open(out_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(header)
        f.write(body)

    print("Wrote %s (target=%s, fetchedAt=%s, sampleDays=%s)" % (
        out_path, env["TARGET_ISO"], env["FETCHED_AT"], sample_days))


if __name__ == "__main__":
    main()
