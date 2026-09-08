#!/usr/bin/env python3
"""Builds data/eprx_trend_data.js from the multi-fiscal-year combined CSV produced
by eprx_trend_fetch_and_process.sh. For every date and every series (national +
9 areas), computes the day's per-block average/max across its 48 (or however many
are present) blocks:
  avgHeikin  = mean of "平均落札価格（電源属地別）[円/kW・30分]" over the day's blocks
  maxSaikou  = max  of "最高落札価格（電源属地別）[円/kW・30分]" over the day's blocks
  avgBoshu   = mean of "募集量（TSO別）[MW]" over the day's blocks
  avgOuatsu  = mean of "応札量合計（電源属地別）[MW]" over the day's blocks
Pure data formatting/statistics, no AI/LLM involved.
Usage: generate_eprx_trend_data.py <meta.env> <output eprx_trend_data.js path>
"""
import json
import sys

AREA_ORDER = ["北海道", "東北", "東京", "中部", "北陸", "関西", "中国", "四国", "九州"]
AREA_COLUMN = {area: 2 + i for i, area in enumerate(AREA_ORDER)}  # CSV cols 3-11 (0-based 2-10)
NATIONAL_COLUMN = -1  # last column ("合計")

LABEL_BOSHU = "募集量（TSO別）[MW]"
LABEL_OUATSU = "応札量合計（電源属地別）[MW]"
LABEL_SAIKOU = "最高落札価格（電源属地別）[円/kW・30分]"
LABEL_HEIKIN = "平均落札価格（電源属地別）[円/kW・30分]"


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
    try:
        return float(s)
    except (ValueError, TypeError):
        return None


def main():
    meta_path, out_path = sys.argv[1], sys.argv[2]
    env = read_env(meta_path)

    # series_key -> date_iso -> label -> list of per-block values
    series = {"national": {}}
    for area in AREA_ORDER:
        series[area] = {}

    with open(env["COMBINED_CSV"], encoding="utf-8") as f:
        for line in f:
            parts = line.rstrip("\n").split(",")
            if len(parts) < 11:
                continue
            key, label = parts[0], parts[1]
            if label not in (LABEL_BOSHU, LABEL_OUATSU, LABEL_SAIKOU, LABEL_HEIKIN):
                continue
            bpos = key.find("B")
            if bpos != 8:
                continue
            date_raw = key[:8]
            if not (len(date_raw) == 8 and date_raw.isdigit()):
                continue
            date_iso = "%s-%s-%s" % (date_raw[0:4], date_raw[4:6], date_raw[6:8])

            national_val = num(parts[NATIONAL_COLUMN])
            if national_val is not None:
                series["national"].setdefault(date_iso, {}).setdefault(label, []).append(national_val)
            for area in AREA_ORDER:
                col = AREA_COLUMN[area]
                if col < len(parts):
                    v = num(parts[col])
                    if v is not None:
                        series[area].setdefault(date_iso, {}).setdefault(label, []).append(v)

    all_dates = set()
    for s in series.values():
        all_dates.update(s.keys())
    dates = sorted(all_dates)

    def build_arrays(day_map):
        avg_heikin, max_saikou, avg_boshu, avg_ouatsu = [], [], [], []
        for d in dates:
            day = day_map.get(d)
            if not day:
                avg_heikin.append(None); max_saikou.append(None)
                avg_boshu.append(None); avg_ouatsu.append(None)
                continue
            h = day.get(LABEL_HEIKIN)
            s = day.get(LABEL_SAIKOU)
            b = day.get(LABEL_BOSHU)
            o = day.get(LABEL_OUATSU)
            avg_heikin.append(round(sum(h) / len(h), 3) if h else None)
            max_saikou.append(round(max(s), 2) if s else None)
            avg_boshu.append(round(sum(b) / len(b), 1) if b else None)
            avg_ouatsu.append(round(sum(o) / len(o), 1) if o else None)
        return {"avgHeikin": avg_heikin, "maxSaikou": max_saikou, "avgBoshu": avg_boshu, "avgOuatsu": avg_ouatsu}

    national = build_arrays(series["national"])
    areas = {area: build_arrays(series[area]) for area in AREA_ORDER}

    data = {
        "generatedAt": env["FETCHED_AT"],
        "startDate": dates[0] if dates else None,
        "endDate": dates[-1] if dates else None,
        "dates": dates,
        "areaOrder": AREA_ORDER,
        "national": national,
        "areas": areas,
    }

    header = (
        "// 需給調整市場 一次調整力（複合市場）約定結果の推移データ（日次集計、2024年4月〜）\n"
        "// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」\n"
        "//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）\n"
        "// 取得方法: 上記ページのCSV一括ダウンロードリンクからFY2024〜現年度分を1日1回だけ取得\n"
        "//   （GitHub Actions、scripts/eprx_trend_fetch_and_process.sh）。EPRXサイトの利用規約上、\n"
        "//   自動的な大量取得には事前承諾が必要なため、毎日1回のGitHub Actionsワークフロー\n"
        "//   （.github/workflows/eprx-trend-daily.yml）でのみ更新されます。\n"
        "// 各系列は該当日の48コマ（一部欠測日は実際に存在するコマ数）から算出:\n"
        "//   avgHeikin=平均落札価格の日内平均, maxSaikou=最高落札価格の日内最大値,\n"
        "//   avgBoshu=募集量の日内平均, avgOuatsu=応札量合計の日内平均。単位は円/kW・30分およびMW。\n"
        "// dates配列を全系列で共有し、データが無い日はnullで埋めています。\n"
    )

    body = "window.EPRX_TREND_DATA = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n"

    with open(out_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(header)
        f.write(body)

    print("Wrote %s (dates=%d, range=%s..%s)" % (out_path, len(dates), data["startDate"], data["endDate"]))


if __name__ == "__main__":
    main()
