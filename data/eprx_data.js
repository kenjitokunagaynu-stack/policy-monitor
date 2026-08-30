// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/01〜2026/08/30）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-08-31",
  "fetchedAt": "2026-08-30",
  "avgWindowLabel": "過去30日平均（2026/08/01〜2026/08/30）",
  "sourceUrl": "https://www.eprx.or.jp/information/results.php",
  "units": {
    "boshu": "MW",
    "ouatsu": "MW",
    "saikou": "円/kW・30分",
    "heikin": "円/kW・30分"
  },
  "labels": {
    "boshu": "募集量",
    "ouatsu": "応札量合計（電源属地別）",
    "saikou": "最高落札価格（電源属地別）",
    "heikin": "平均落札価格（電源属地別）",
    "boshuAvg30d": "募集量（過去30日平均）",
    "heikinAvg30d": "平均落札価格（過去30日平均）"
  },
  "blocks": [],
  "areaOrder": [
    "北海道",
    "東北",
    "東京",
    "中部",
    "北陸",
    "関西",
    "中国",
    "四国",
    "九州"
  ],
  "areaBlocks": {
    "北海道": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 62,
        "ouatsu": 157.658,
        "saikou": 3.35,
        "heikin": 1.04,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.52
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 62,
        "ouatsu": 157.658,
        "saikou": 2.5,
        "heikin": 0.99,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.448
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 62,
        "ouatsu": 187.509,
        "saikou": 1.95,
        "heikin": 0.9,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.255
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 155.708,
        "saikou": 3.99,
        "heikin": 1.13,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.532
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 61,
        "ouatsu": 216.158,
        "saikou": 14.87,
        "heikin": 1.74,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.344
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 155.668,
        "saikou": 2.5,
        "heikin": 0.94,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.358
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 60,
        "ouatsu": 143.559,
        "saikou": 6.65,
        "heikin": 2.02,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.867
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 60,
        "ouatsu": 143.048,
        "saikou": 14.5,
        "heikin": 4.24,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.112
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 60,
        "ouatsu": 148.068,
        "saikou": 14.2,
        "heikin": 4.73,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.39
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 60,
        "ouatsu": 154.578,
        "saikou": 12.4,
        "heikin": 4.77,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.185
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 60,
        "ouatsu": 158.608,
        "saikou": 10.9,
        "heikin": 3.09,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.343
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 60,
        "ouatsu": 228.108,
        "saikou": 13.45,
        "heikin": 3.07,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.816
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 62,
        "ouatsu": 197.658,
        "saikou": 12,
        "heikin": 2.72,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.233
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 62,
        "ouatsu": 172.418,
        "saikou": 9.85,
        "heikin": 2.74,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.035
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 62,
        "ouatsu": 114.718,
        "saikou": 9.99,
        "heikin": 3.03,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.805
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 63,
        "ouatsu": 153.633,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.935
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 63,
        "ouatsu": 155.668,
        "saikou": 7.85,
        "heikin": 1.99,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.654
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 63,
        "ouatsu": 240.518,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.31
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 63,
        "ouatsu": 197.658,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.944
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 64,
        "ouatsu": 157.658,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.932
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 64,
        "ouatsu": 240.558,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.917
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 64,
        "ouatsu": 195.708,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.166
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 64,
        "ouatsu": 238.568,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.027
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 64,
        "ouatsu": 238.568,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.016
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 63,
        "ouatsu": 197.658,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.952
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 63,
        "ouatsu": 197.658,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.815
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 63,
        "ouatsu": 229.458,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.085
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 63,
        "ouatsu": 197.658,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.326
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 63,
        "ouatsu": 224.458,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.478
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 63,
        "ouatsu": 166.708,
        "saikou": 1.01,
        "heikin": 0.94,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.618
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 61,
        "ouatsu": 190.858,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.741
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 61,
        "ouatsu": 190.858,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.058
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 61,
        "ouatsu": 158.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.665
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 61,
        "ouatsu": 161.518,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.001
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 61,
        "ouatsu": 91.708,
        "saikou": 10.9,
        "heikin": 1.55,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.572
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 61,
        "ouatsu": 134.568,
        "saikou": 2.9,
        "heikin": 1.15,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.006
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 60,
        "ouatsu": 93.658,
        "saikou": 1.17,
        "heikin": 1.17,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 3.987
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 60,
        "ouatsu": 118.658,
        "saikou": 1.13,
        "heikin": 1.13,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 3.721
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 60,
        "ouatsu": 156.758,
        "saikou": 1.17,
        "heikin": 1.17,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 3.656
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 60,
        "ouatsu": 194.768,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 3.12
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 60,
        "ouatsu": 179.188,
        "saikou": 1.16,
        "heikin": 1.14,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.971
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 60,
        "ouatsu": 158.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.1
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 60,
        "ouatsu": 169.718,
        "saikou": 10.9,
        "heikin": 3.06,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.836
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 61,
        "ouatsu": 164.718,
        "saikou": 4.7,
        "heikin": 1.48,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.591
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 62,
        "ouatsu": 206.758,
        "saikou": 12.35,
        "heikin": 2.57,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.485
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 62,
        "ouatsu": 196.758,
        "saikou": 12.35,
        "heikin": 3.33,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.997
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 154.718,
        "saikou": 2.85,
        "heikin": 1.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.923
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 235.229,
        "saikou": 12.3,
        "heikin": 1.88,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.726
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 170,
        "ouatsu": 81.809,
        "saikou": 15,
        "heikin": 10.52,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 8.579
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 170,
        "ouatsu": 81.809,
        "saikou": 15,
        "heikin": 10.51,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 8.902
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 170,
        "ouatsu": 97.691,
        "saikou": 15,
        "heikin": 11.24,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 10.021
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 170,
        "ouatsu": 97.691,
        "saikou": 15,
        "heikin": 11.33,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 10.008
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 170,
        "ouatsu": 83.693,
        "saikou": 15,
        "heikin": 11.31,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 9.73
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 170,
        "ouatsu": 83.693,
        "saikou": 15,
        "heikin": 11.87,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 9.739
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 84.191,
        "saikou": 15,
        "heikin": 11.76,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.831
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 85.691,
        "saikou": 15,
        "heikin": 11.58,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.803
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 99.69,
        "saikou": 15,
        "heikin": 11.61,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.735
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 99.69,
        "saikou": 15,
        "heikin": 11.33,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.524
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 99.69,
        "saikou": 15,
        "heikin": 11.21,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.53
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 99.69,
        "saikou": 15,
        "heikin": 11.17,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.973
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 177,
        "ouatsu": 99.69,
        "saikou": 15,
        "heikin": 10.84,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 10.589
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 183,
        "ouatsu": 98.19,
        "saikou": 15,
        "heikin": 10.28,
        "boshuAvg30d": 183.0,
        "heikinAvg30d": 10.918
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 188,
        "ouatsu": 99.69,
        "saikou": 15,
        "heikin": 10.66,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 11.028
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 191,
        "ouatsu": 98.19,
        "saikou": 15,
        "heikin": 11.71,
        "boshuAvg30d": 191.0,
        "heikinAvg30d": 11.145
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 191,
        "ouatsu": 101.69,
        "saikou": 15,
        "heikin": 11.15,
        "boshuAvg30d": 191.0,
        "heikinAvg30d": 11.408
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 191,
        "ouatsu": 100.19,
        "saikou": 15,
        "heikin": 10.94,
        "boshuAvg30d": 191.0,
        "heikinAvg30d": 11.15
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 120,
        "ouatsu": 102.336,
        "saikou": 15,
        "heikin": 10.87,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 10.215
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 121,
        "ouatsu": 102.336,
        "saikou": 15,
        "heikin": 10.87,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 10.406
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 123,
        "ouatsu": 114.336,
        "saikou": 15,
        "heikin": 10.58,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 10.081
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 125,
        "ouatsu": 103.666,
        "saikou": 15,
        "heikin": 11.08,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 10.416
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 125,
        "ouatsu": 103.666,
        "saikou": 15,
        "heikin": 11.08,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 10.283
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 125,
        "ouatsu": 101.736,
        "saikou": 15,
        "heikin": 11.26,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 10.474
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 128,
        "ouatsu": 95.875,
        "saikou": 15,
        "heikin": 11.56,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 10.344
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 128,
        "ouatsu": 97.84,
        "saikou": 15,
        "heikin": 11.53,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 10.357
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 128,
        "ouatsu": 115.686,
        "saikou": 15,
        "heikin": 10.93,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 9.887
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 126,
        "ouatsu": 115.686,
        "saikou": 15,
        "heikin": 10.81,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.762
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 124,
        "ouatsu": 105.686,
        "saikou": 15,
        "heikin": 11.91,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 10.433
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 121,
        "ouatsu": 105.686,
        "saikou": 15,
        "heikin": 12.04,
        "boshuAvg30d": 161.1,
        "heikinAvg30d": 10.432
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 190,
        "ouatsu": 101.686,
        "saikou": 15,
        "heikin": 11.13,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 10.73
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 190,
        "ouatsu": 101.686,
        "saikou": 15,
        "heikin": 10.2,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 10.484
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 190,
        "ouatsu": 101.686,
        "saikou": 15,
        "heikin": 9.48,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 9.955
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 188,
        "ouatsu": 100.186,
        "saikou": 15,
        "heikin": 8.79,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 9.195
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 186,
        "ouatsu": 101.686,
        "saikou": 15,
        "heikin": 9.13,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 8.473
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 184,
        "ouatsu": 100.186,
        "saikou": 15,
        "heikin": 9.03,
        "boshuAvg30d": 184.0,
        "heikinAvg30d": 8.444
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 182,
        "ouatsu": 97.725,
        "saikou": 15,
        "heikin": 9.05,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 8.296
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 182,
        "ouatsu": 98.19,
        "saikou": 15,
        "heikin": 9.04,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 8.15
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 182,
        "ouatsu": 99.69,
        "saikou": 15,
        "heikin": 9.67,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 8.232
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 182,
        "ouatsu": 89.02,
        "saikou": 15,
        "heikin": 10.89,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 8.53
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 181,
        "ouatsu": 99.69,
        "saikou": 15,
        "heikin": 10.13,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 8.878
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 182,
        "ouatsu": 99.69,
        "saikou": 15,
        "heikin": 10.62,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 9.168
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 92,
        "ouatsu": 73.19,
        "saikou": 15,
        "heikin": 11.27,
        "boshuAvg30d": 97.7,
        "heikinAvg30d": 8.677
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 92,
        "ouatsu": 87.69,
        "saikou": 15,
        "heikin": 11.88,
        "boshuAvg30d": 97.7,
        "heikinAvg30d": 9.124
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 92,
        "ouatsu": 87.69,
        "saikou": 15,
        "heikin": 10.8,
        "boshuAvg30d": 97.7,
        "heikinAvg30d": 9.562
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 91,
        "ouatsu": 87.69,
        "saikou": 15,
        "heikin": 11.64,
        "boshuAvg30d": 96.7,
        "heikinAvg30d": 8.784
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 90,
        "ouatsu": 87.69,
        "saikou": 15,
        "heikin": 11.33,
        "boshuAvg30d": 95.7,
        "heikinAvg30d": 9.01
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 89,
        "ouatsu": 86.19,
        "saikou": 15,
        "heikin": 9.78,
        "boshuAvg30d": 94.7,
        "heikinAvg30d": 9.448
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 548,
        "ouatsu": 315.996,
        "saikou": 14.15,
        "heikin": 3.6,
        "boshuAvg30d": 551.0,
        "heikinAvg30d": 3.996
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 548,
        "ouatsu": 330.229,
        "saikou": 14.15,
        "heikin": 3.05,
        "boshuAvg30d": 551.0,
        "heikinAvg30d": 3.912
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 548,
        "ouatsu": 328.369,
        "saikou": 14.15,
        "heikin": 3.13,
        "boshuAvg30d": 551.0,
        "heikinAvg30d": 3.911
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 547,
        "ouatsu": 339.975,
        "saikou": 14.15,
        "heikin": 2.91,
        "boshuAvg30d": 550.0,
        "heikinAvg30d": 3.645
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 545,
        "ouatsu": 329.894,
        "saikou": 14.15,
        "heikin": 2.81,
        "boshuAvg30d": 548.0,
        "heikinAvg30d": 3.548
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 545,
        "ouatsu": 329.894,
        "saikou": 14.15,
        "heikin": 2.83,
        "boshuAvg30d": 548.0,
        "heikinAvg30d": 3.55
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 543,
        "ouatsu": 343.865,
        "saikou": 13.9,
        "heikin": 2.71,
        "boshuAvg30d": 546.0,
        "heikinAvg30d": 3.439
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 544,
        "ouatsu": 340.425,
        "saikou": 13.99,
        "heikin": 2.74,
        "boshuAvg30d": 547.0,
        "heikinAvg30d": 3.472
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 545,
        "ouatsu": 341.945,
        "saikou": 14.15,
        "heikin": 2.8,
        "boshuAvg30d": 548.0,
        "heikinAvg30d": 3.524
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 546,
        "ouatsu": 345.715,
        "saikou": 14.15,
        "heikin": 2.78,
        "boshuAvg30d": 549.0,
        "heikinAvg30d": 3.461
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 546,
        "ouatsu": 380.315,
        "saikou": 14.15,
        "heikin": 2.77,
        "boshuAvg30d": 548.6,
        "heikinAvg30d": 3.582
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 546,
        "ouatsu": 380.315,
        "saikou": 14.15,
        "heikin": 2.77,
        "boshuAvg30d": 548.6,
        "heikinAvg30d": 3.565
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 567,
        "ouatsu": 386.219,
        "saikou": 14.15,
        "heikin": 3.29,
        "boshuAvg30d": 569.6,
        "heikinAvg30d": 4.117
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 575,
        "ouatsu": 386.219,
        "saikou": 14.15,
        "heikin": 3.75,
        "boshuAvg30d": 577.6,
        "heikinAvg30d": 4.302
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 582,
        "ouatsu": 386.219,
        "saikou": 15,
        "heikin": 4.15,
        "boshuAvg30d": 584.6,
        "heikinAvg30d": 4.289
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 586,
        "ouatsu": 386.219,
        "saikou": 15,
        "heikin": 4.38,
        "boshuAvg30d": 589.5,
        "heikinAvg30d": 4.255
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 586,
        "ouatsu": 431.448,
        "saikou": 14.67,
        "heikin": 5.03,
        "boshuAvg30d": 589.5,
        "heikinAvg30d": 4.437
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 586,
        "ouatsu": 513.257,
        "saikou": 14.15,
        "heikin": 4.05,
        "boshuAvg30d": 589.5,
        "heikinAvg30d": 4.432
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 576,
        "ouatsu": 516.199,
        "saikou": 14.15,
        "heikin": 3.5,
        "boshuAvg30d": 579.5,
        "heikinAvg30d": 4.55
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 576,
        "ouatsu": 569.966,
        "saikou": 14.15,
        "heikin": 3.82,
        "boshuAvg30d": 579.5,
        "heikinAvg30d": 4.349
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 576,
        "ouatsu": 524.462,
        "saikou": 14.15,
        "heikin": 3.41,
        "boshuAvg30d": 579.0,
        "heikinAvg30d": 4.104
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 575,
        "ouatsu": 524.542,
        "saikou": 14.15,
        "heikin": 3.01,
        "boshuAvg30d": 578.0,
        "heikinAvg30d": 4.192
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 572,
        "ouatsu": 541.618,
        "saikou": 14.15,
        "heikin": 3.26,
        "boshuAvg30d": 575.0,
        "heikinAvg30d": 4.217
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 572,
        "ouatsu": 534.614,
        "saikou": 14.15,
        "heikin": 3.41,
        "boshuAvg30d": 575.0,
        "heikinAvg30d": 4.156
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 571,
        "ouatsu": 491.175,
        "saikou": 14.15,
        "heikin": 3.81,
        "boshuAvg30d": 574.0,
        "heikinAvg30d": 4.06
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 571,
        "ouatsu": 491.175,
        "saikou": 14.15,
        "heikin": 3.66,
        "boshuAvg30d": 574.0,
        "heikinAvg30d": 4.04
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 571,
        "ouatsu": 540.755,
        "saikou": 14.15,
        "heikin": 3.08,
        "boshuAvg30d": 574.5,
        "heikinAvg30d": 4.027
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 570,
        "ouatsu": 516.052,
        "saikou": 14.15,
        "heikin": 3.41,
        "boshuAvg30d": 573.5,
        "heikinAvg30d": 3.992
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 570,
        "ouatsu": 536.841,
        "saikou": 14.15,
        "heikin": 3.54,
        "boshuAvg30d": 573.5,
        "heikinAvg30d": 4.281
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 570,
        "ouatsu": 519.152,
        "saikou": 14.15,
        "heikin": 3.64,
        "boshuAvg30d": 573.5,
        "heikinAvg30d": 4.557
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 569,
        "ouatsu": 578.869,
        "saikou": 14.04,
        "heikin": 3.88,
        "boshuAvg30d": 572.5,
        "heikinAvg30d": 4.492
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 569,
        "ouatsu": 536.221,
        "saikou": 14.04,
        "heikin": 3.63,
        "boshuAvg30d": 572.5,
        "heikinAvg30d": 4.786
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 569,
        "ouatsu": 505.461,
        "saikou": 14.15,
        "heikin": 3.98,
        "boshuAvg30d": 572.0,
        "heikinAvg30d": 5.087
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 569,
        "ouatsu": 648.493,
        "saikou": 14.15,
        "heikin": 5.74,
        "boshuAvg30d": 572.0,
        "heikinAvg30d": 5.218
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 569,
        "ouatsu": 286.323,
        "saikou": 14.15,
        "heikin": 10,
        "boshuAvg30d": 571.7,
        "heikinAvg30d": 5.185
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 569,
        "ouatsu": 370.593,
        "saikou": 14.04,
        "heikin": 9.09,
        "boshuAvg30d": 571.7,
        "heikinAvg30d": 5.196
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 572,
        "ouatsu": 307.041,
        "saikou": 14.15,
        "heikin": 9.1,
        "boshuAvg30d": 574.7,
        "heikinAvg30d": 5.066
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 571,
        "ouatsu": 307.537,
        "saikou": 14.15,
        "heikin": 8.6,
        "boshuAvg30d": 573.7,
        "heikinAvg30d": 4.916
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 571,
        "ouatsu": 378.302,
        "saikou": 14.15,
        "heikin": 7.91,
        "boshuAvg30d": 573.7,
        "heikinAvg30d": 4.717
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 571,
        "ouatsu": 378.702,
        "saikou": 14.15,
        "heikin": 6.62,
        "boshuAvg30d": 573.7,
        "heikinAvg30d": 4.483
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 570,
        "ouatsu": 518.23,
        "saikou": 14.15,
        "heikin": 4.99,
        "boshuAvg30d": 572.7,
        "heikinAvg30d": 4.096
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 570,
        "ouatsu": 525.88,
        "saikou": 14.15,
        "heikin": 4.53,
        "boshuAvg30d": 572.7,
        "heikinAvg30d": 3.974
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 570,
        "ouatsu": 519.976,
        "saikou": 14.15,
        "heikin": 4.42,
        "boshuAvg30d": 572.7,
        "heikinAvg30d": 3.598
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 570,
        "ouatsu": 292.105,
        "saikou": 14.15,
        "heikin": 8.74,
        "boshuAvg30d": 572.7,
        "heikinAvg30d": 4.588
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 570,
        "ouatsu": 249.796,
        "saikou": 14.15,
        "heikin": 6.19,
        "boshuAvg30d": 573.5,
        "heikinAvg30d": 4.27
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 568,
        "ouatsu": 430.32,
        "saikou": 14.15,
        "heikin": 5.29,
        "boshuAvg30d": 571.5,
        "heikinAvg30d": 3.832
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 565,
        "ouatsu": 237.481,
        "saikou": 14.15,
        "heikin": 7.93,
        "boshuAvg30d": 568.5,
        "heikinAvg30d": 4.154
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 563,
        "ouatsu": 388.032,
        "saikou": 14.15,
        "heikin": 5.26,
        "boshuAvg30d": 566.5,
        "heikinAvg30d": 4.34
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 231,
        "ouatsu": 149.032,
        "saikou": 14.49,
        "heikin": 6.12,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 5.004
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 231,
        "ouatsu": 150.929,
        "saikou": 8,
        "heikin": 5.46,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 4.946
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 231,
        "ouatsu": 172.627,
        "saikou": 8,
        "heikin": 5.64,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 4.947
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 231,
        "ouatsu": 182.627,
        "saikou": 8,
        "heikin": 5.6,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 5.192
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 230,
        "ouatsu": 164.769,
        "saikou": 11.67,
        "heikin": 6.08,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.774
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 230,
        "ouatsu": 170.71,
        "saikou": 11.67,
        "heikin": 6.3,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.725
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 230,
        "ouatsu": 180.468,
        "saikou": 7.74,
        "heikin": 4.44,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.524
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 230,
        "ouatsu": 200.159,
        "saikou": 7.74,
        "heikin": 4.6,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.391
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 230,
        "ouatsu": 202.059,
        "saikou": 11.67,
        "heikin": 6.95,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.29
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 230,
        "ouatsu": 202.059,
        "saikou": 11.67,
        "heikin": 6.96,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.227
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 230,
        "ouatsu": 202.07,
        "saikou": 11.67,
        "heikin": 6.6,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 4.837
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 230,
        "ouatsu": 200.689,
        "saikou": 11.67,
        "heikin": 5.51,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.279
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 238,
        "ouatsu": 212.189,
        "saikou": 11.67,
        "heikin": 6.03,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 6.126
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 241,
        "ouatsu": 206.165,
        "saikou": 11.67,
        "heikin": 6.08,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 6.41
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 244,
        "ouatsu": 187.886,
        "saikou": 11.67,
        "heikin": 6.13,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 6.573
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 245,
        "ouatsu": 195.77,
        "saikou": 11.67,
        "heikin": 6.09,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 6.637
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 245,
        "ouatsu": 195.77,
        "saikou": 11,
        "heikin": 6.7,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 6.732
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 245,
        "ouatsu": 217.586,
        "saikou": 11,
        "heikin": 5.89,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 6.765
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 249,
        "ouatsu": 210.06,
        "saikou": 11,
        "heikin": 6.32,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.833
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 249,
        "ouatsu": 229.195,
        "saikou": 11,
        "heikin": 5.83,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.788
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 250,
        "ouatsu": 271.746,
        "saikou": 11,
        "heikin": 4.84,
        "boshuAvg30d": 162.0,
        "heikinAvg30d": 6.764
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 249,
        "ouatsu": 296.451,
        "saikou": 11,
        "heikin": 4.87,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.781
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 248,
        "ouatsu": 316.76,
        "saikou": 11,
        "heikin": 4.55,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 6.604
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 247,
        "ouatsu": 337.845,
        "saikou": 11,
        "heikin": 4.73,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 6.64
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 243,
        "ouatsu": 355.478,
        "saikou": 11.67,
        "heikin": 3.97,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.535
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 243,
        "ouatsu": 357.476,
        "saikou": 11.67,
        "heikin": 4.59,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.547
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 243,
        "ouatsu": 337.681,
        "saikou": 11,
        "heikin": 5.83,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.775
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 243,
        "ouatsu": 353.629,
        "saikou": 11.12,
        "heikin": 6.06,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.819
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 243,
        "ouatsu": 426.324,
        "saikou": 11,
        "heikin": 5.63,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.878
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 243,
        "ouatsu": 418.585,
        "saikou": 11,
        "heikin": 5.69,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.725
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 244,
        "ouatsu": 460.297,
        "saikou": 9,
        "heikin": 5.38,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 6.54
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 244,
        "ouatsu": 441.751,
        "saikou": 10.99,
        "heikin": 5.05,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 6.351
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 244,
        "ouatsu": 437.662,
        "saikou": 2.89,
        "heikin": 2.78,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 5.958
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 243,
        "ouatsu": 414.579,
        "saikou": 7.84,
        "heikin": 5.19,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 5.834
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 244,
        "ouatsu": 414.579,
        "saikou": 8,
        "heikin": 5.45,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 5.284
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 244,
        "ouatsu": 403.78,
        "saikou": 8,
        "heikin": 5.83,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 4.899
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 242,
        "ouatsu": 416.461,
        "saikou": 7,
        "heikin": 4.61,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.569
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 242,
        "ouatsu": 414.18,
        "saikou": 6.38,
        "heikin": 2.85,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.168
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 242,
        "ouatsu": 424.78,
        "saikou": 7.59,
        "heikin": 4.54,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.916
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 242,
        "ouatsu": 428.78,
        "saikou": 9.35,
        "heikin": 7.15,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.946
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 242,
        "ouatsu": 443.266,
        "saikou": 7.39,
        "heikin": 5.57,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.356
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 242,
        "ouatsu": 428.78,
        "saikou": 8,
        "heikin": 5.37,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.315
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 241,
        "ouatsu": 325.895,
        "saikou": 11.67,
        "heikin": 4.18,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 4.449
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 243,
        "ouatsu": 365.262,
        "saikou": 11.67,
        "heikin": 6.95,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 5.617
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 243,
        "ouatsu": 243.715,
        "saikou": 11.67,
        "heikin": 7.04,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 5.709
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 242,
        "ouatsu": 170.983,
        "saikou": 11.67,
        "heikin": 6.15,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.58
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 241,
        "ouatsu": 170.983,
        "saikou": 11.67,
        "heikin": 6.37,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 5.812
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 239,
        "ouatsu": 167.623,
        "saikou": 14.49,
        "heikin": 6.24,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 5.791
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 34.36,
        "saikou": 2.49,
        "heikin": 1.26,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.368
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 39.579,
        "saikou": 2.31,
        "heikin": 1.29,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.301
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 8.2,
        "heikin": 1.17,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.847
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 31.807,
        "saikou": 8,
        "heikin": 1.87,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.447
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 8.5,
        "heikin": 1.73,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.616
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 8,
        "heikin": 1.52,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.442
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 82.929,
        "saikou": 2.8,
        "heikin": 1.03,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.903
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 82.929,
        "saikou": 2.8,
        "heikin": 1.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.721
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.8,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.526
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 20.93,
        "saikou": 2.8,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.004
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.3,
        "heikin": 0.57,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.326
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.8,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.694
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 56,
        "ouatsu": 22.929,
        "saikou": 7.5,
        "heikin": 1.87,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 5.394
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 27.797,
        "saikou": 9.5,
        "heikin": 2.72,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 5.405
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 47.073,
        "saikou": 9.5,
        "heikin": 2.59,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 6.307
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 31.639,
        "saikou": 8.5,
        "heikin": 2.21,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 6.226
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 59,
        "ouatsu": 22.929,
        "saikou": 9,
        "heikin": 3.81,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 6.421
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 59,
        "ouatsu": 22.929,
        "saikou": 10.4,
        "heikin": 5.21,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 7.157
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.929,
        "saikou": 9.9,
        "heikin": 9.65,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.468
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.929,
        "saikou": 11.67,
        "heikin": 11.37,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 7.414
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.5,
        "heikin": 9.25,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.922
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.5,
        "heikin": 9.25,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 7.31
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9,
        "heikin": 8.78,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.409
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.9,
        "heikin": 9.65,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.51
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.7,
        "heikin": 9.36,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.827
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.5,
        "heikin": 9.16,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.776
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.9,
        "heikin": 9.56,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 7.207
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.5,
        "heikin": 9.16,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.392
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.5,
        "heikin": 9.16,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.666
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.5,
        "heikin": 9.16,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.685
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 8.8,
        "heikin": 8.8,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.541
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.5,
        "heikin": 9.16,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.797
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 8.5,
        "heikin": 8.24,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.876
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 9.5,
        "heikin": 9.16,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.73
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 7.5,
        "heikin": 7.21,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.15
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 8,
        "heikin": 7.71,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.897
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 8.3,
        "heikin": 8.15,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 7.626
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 7.389
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.862
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 7.75,
        "heikin": 7.26,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.845
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.929,
        "saikou": 6.75,
        "heikin": 6.75,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.362
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 8.5,
        "heikin": 8.5,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.784
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 13.857,
        "saikou": 8.5,
        "heikin": 5.46,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.567
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 17.931,
        "saikou": 7.55,
        "heikin": 4.98,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.354
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 33.929,
        "saikou": 8.5,
        "heikin": 2.61,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.562
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 58,
        "ouatsu": 33.929,
        "saikou": 8.5,
        "heikin": 3.08,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 5.883
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 57,
        "ouatsu": 22.701,
        "saikou": 8,
        "heikin": 2.89,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 6.24
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 33.929,
        "saikou": 9,
        "heikin": 1.35,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 5.782
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 137,
        "ouatsu": 160.625,
        "saikou": 1.78,
        "heikin": 0.56,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.1
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 137,
        "ouatsu": 131.717,
        "saikou": 3,
        "heikin": 1.63,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 3.117
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 137,
        "ouatsu": 40.26,
        "saikou": 12.5,
        "heikin": 4.27,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.661
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 137,
        "ouatsu": 105.306,
        "saikou": 12.5,
        "heikin": 2.77,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.739
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 136,
        "ouatsu": 85.55,
        "saikou": 9.47,
        "heikin": 4.01,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.726
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 135,
        "ouatsu": 87.49,
        "saikou": 9.44,
        "heikin": 3.42,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 3.036
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 136,
        "ouatsu": 95.384,
        "saikou": 6.47,
        "heikin": 2.75,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.408
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 136,
        "ouatsu": 95.384,
        "saikou": 6.94,
        "heikin": 2.71,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.881
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 137,
        "ouatsu": 91.426,
        "saikou": 3,
        "heikin": 2.65,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.446
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 137,
        "ouatsu": 89.517,
        "saikou": 3,
        "heikin": 2.65,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.255
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 137,
        "ouatsu": 80.384,
        "saikou": 3,
        "heikin": 2.96,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.313
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 137,
        "ouatsu": 95.384,
        "saikou": 3,
        "heikin": 2.34,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.242
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 151,
        "ouatsu": 95.384,
        "saikou": 13.85,
        "heikin": 6.51,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 4.963
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 154,
        "ouatsu": 95.384,
        "saikou": 13.85,
        "heikin": 6.43,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.89
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 158,
        "ouatsu": 95.384,
        "saikou": 13.85,
        "heikin": 6.08,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 5.041
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 161,
        "ouatsu": 95.384,
        "saikou": 13.85,
        "heikin": 6.47,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 5.242
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 161,
        "ouatsu": 99.251,
        "saikou": 13.85,
        "heikin": 7.27,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.138
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 161,
        "ouatsu": 99.251,
        "saikou": 13.85,
        "heikin": 7.41,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.401
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 160,
        "ouatsu": 99.251,
        "saikou": 13.85,
        "heikin": 7.41,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 6.071
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 160,
        "ouatsu": 99.251,
        "saikou": 13.85,
        "heikin": 7.41,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 6.034
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 160,
        "ouatsu": 99.251,
        "saikou": 13.85,
        "heikin": 7.13,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 5.569
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 160,
        "ouatsu": 99.251,
        "saikou": 13.85,
        "heikin": 7.08,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 5.49
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 159,
        "ouatsu": 97.808,
        "saikou": 13.85,
        "heikin": 7.25,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.449
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 160,
        "ouatsu": 97.808,
        "saikou": 13.85,
        "heikin": 7.22,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 5.567
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 159,
        "ouatsu": 97.808,
        "saikou": 13.85,
        "heikin": 7.09,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 6.118
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 159,
        "ouatsu": 97.808,
        "saikou": 13.85,
        "heikin": 6.97,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.656
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 159,
        "ouatsu": 136.617,
        "saikou": 13.85,
        "heikin": 6.99,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.573
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 158,
        "ouatsu": 99.251,
        "saikou": 13.85,
        "heikin": 7.19,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 5.745
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 159,
        "ouatsu": 99.251,
        "saikou": 13.5,
        "heikin": 6.28,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.767
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 159,
        "ouatsu": 99.251,
        "saikou": 12.44,
        "heikin": 5.49,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.588
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 159,
        "ouatsu": 99.251,
        "saikou": 6.99,
        "heikin": 4.11,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.476
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 159,
        "ouatsu": 99.251,
        "saikou": 6.99,
        "heikin": 4.11,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.438
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 159,
        "ouatsu": 99.251,
        "saikou": 6.99,
        "heikin": 4.11,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.128
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 159,
        "ouatsu": 99.251,
        "saikou": 13.85,
        "heikin": 7.24,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.222
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 159,
        "ouatsu": 99.251,
        "saikou": 13.85,
        "heikin": 6.56,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 4.572
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 158,
        "ouatsu": 99.251,
        "saikou": 13.85,
        "heikin": 5.89,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 4.538
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 154,
        "ouatsu": 93.424,
        "saikou": 7,
        "heikin": 4.89,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.549
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 154,
        "ouatsu": 93.424,
        "saikou": 6.99,
        "heikin": 4.26,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.311
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 154,
        "ouatsu": 95.384,
        "saikou": 6.99,
        "heikin": 4.31,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.249
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 154,
        "ouatsu": 93.941,
        "saikou": 3.27,
        "heikin": 3.27,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.361
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 153,
        "ouatsu": 95.384,
        "saikou": 3.27,
        "heikin": 3.23,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 4.031
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 153,
        "ouatsu": 93.941,
        "saikou": 6.99,
        "heikin": 4.24,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 4.0
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 152,
        "ouatsu": 95.384,
        "saikou": 13.85,
        "heikin": 6.23,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 3.637
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 152,
        "ouatsu": 95.384,
        "saikou": 13.85,
        "heikin": 5.73,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 3.82
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 152,
        "ouatsu": 95.384,
        "saikou": 13.85,
        "heikin": 5.72,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 3.334
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 151,
        "ouatsu": 95.384,
        "saikou": 13.85,
        "heikin": 6.25,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.364
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 149,
        "ouatsu": 93.941,
        "saikou": 13.85,
        "heikin": 6.84,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 3.943
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 147,
        "ouatsu": 93.941,
        "saikou": 13.85,
        "heikin": 7.04,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.646
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 209.893,
        "saikou": 3.85,
        "heikin": 2.29,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.831
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 197.166,
        "saikou": 3.68,
        "heikin": 2.44,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 3.111
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 197.166,
        "saikou": 6,
        "heikin": 3.7,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 3.017
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 200.956,
        "saikou": 6.38,
        "heikin": 3.71,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.877
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 200.956,
        "saikou": 12.62,
        "heikin": 3.71,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.845
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 200.956,
        "saikou": 6,
        "heikin": 3.29,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.916
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 217.815,
        "saikou": 6.98,
        "heikin": 2.54,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 2.976
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 217.815,
        "saikou": 6,
        "heikin": 3.02,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 3.051
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 217.815,
        "saikou": 4.07,
        "heikin": 2.51,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 3.011
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 217.815,
        "saikou": 6,
        "heikin": 2.64,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 3.076
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 192.361,
        "saikou": 4.22,
        "heikin": 4.04,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 3.234
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 192.361,
        "saikou": 4.46,
        "heikin": 4.24,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 2.989
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 142,
        "ouatsu": 192.361,
        "saikou": 4.97,
        "heikin": 4.74,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 3.171
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 192.361,
        "saikou": 5.34,
        "heikin": 4.97,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.654
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 144,
        "ouatsu": 192.361,
        "saikou": 10.77,
        "heikin": 4.73,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.713
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 192.361,
        "saikou": 10.77,
        "heikin": 4.92,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.65
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 180.423,
        "saikou": 10.77,
        "heikin": 6.63,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.842
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 190.042,
        "saikou": 15,
        "heikin": 8.24,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.426
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 201.98,
        "saikou": 15,
        "heikin": 6.16,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 3.373
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 150,
        "ouatsu": 201.98,
        "saikou": 15,
        "heikin": 5.02,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.924
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 192.086,
        "saikou": 6,
        "heikin": 4.32,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 2.719
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 180.148,
        "saikou": 4.3,
        "heikin": 4.23,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 2.596
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 190.042,
        "saikou": 4.31,
        "heikin": 4.11,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 2.435
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 190.042,
        "saikou": 4.31,
        "heikin": 4.11,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 2.552
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 150,
        "ouatsu": 190.042,
        "saikou": 4.31,
        "heikin": 4.13,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.87
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 150,
        "ouatsu": 190.042,
        "saikou": 2.13,
        "heikin": 1.64,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.933
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 150,
        "ouatsu": 190.042,
        "saikou": 6.98,
        "heikin": 1.35,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.401
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 190.042,
        "saikou": 6.98,
        "heikin": 1.61,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 3.005
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 190.042,
        "saikou": 6.98,
        "heikin": 2.76,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 2.857
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 149,
        "ouatsu": 268.632,
        "saikou": 6.38,
        "heikin": 2.96,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 3.441
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 201.518,
        "saikou": 12,
        "heikin": 9.64,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 4.432
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 201.518,
        "saikou": 12.97,
        "heikin": 10.61,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 5.794
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 201.518,
        "saikou": 14.49,
        "heikin": 11.34,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 6.076
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 38.539,
        "saikou": 14,
        "heikin": 7.83,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 7.236
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 38.539,
        "saikou": 14,
        "heikin": 8.2,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 8.35
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 38.539,
        "saikou": 14,
        "heikin": 8.17,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 8.408
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 36.549,
        "saikou": 10.85,
        "heikin": 6.64,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 8.51
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 199.528,
        "saikou": 14.62,
        "heikin": 11.6,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 8.504
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 197.728,
        "saikou": 13.28,
        "heikin": 10.47,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 8.105
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 199.718,
        "saikou": 14.47,
        "heikin": 12.02,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 7.544
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 201.518,
        "saikou": 12.28,
        "heikin": 9.67,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 7.22
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 148,
        "ouatsu": 201.518,
        "saikou": 12,
        "heikin": 9.85,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 6.398
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 146,
        "ouatsu": 201.518,
        "saikou": 12,
        "heikin": 9.85,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 5.531
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 146,
        "ouatsu": 201.518,
        "saikou": 12,
        "heikin": 9.77,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 5.008
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 146,
        "ouatsu": 215.321,
        "saikou": 9.47,
        "heikin": 7.18,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 4.102
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 146,
        "ouatsu": 201.518,
        "saikou": 9.97,
        "heikin": 7.82,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 3.552
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 145,
        "ouatsu": 201.518,
        "saikou": 9.47,
        "heikin": 6.81,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 3.411
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 201.518,
        "saikou": 7.47,
        "heikin": 5.41,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.787
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 200.473,
        "saikou": 2.5,
        "heikin": 0.82,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.619
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 200.473,
        "saikou": 2.5,
        "heikin": 0.82,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.597
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 200.473,
        "saikou": 2.5,
        "heikin": 0.8,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.596
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 200.473,
        "saikou": 1.6,
        "heikin": 0.4,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.563
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 200.473,
        "saikou": 1.6,
        "heikin": 0.41,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.544
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 39,
        "ouatsu": 200.473,
        "saikou": 1.6,
        "heikin": 0.41,
        "boshuAvg30d": 39.0,
        "heikinAvg30d": 0.545
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 166.473,
        "saikou": 6,
        "heikin": 1.13,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.671
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 154.93,
        "saikou": 2.3,
        "heikin": 0.78,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.669
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 166.473,
        "saikou": 3.3,
        "heikin": 0.95,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.662
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 166.473,
        "saikou": 2.5,
        "heikin": 0.9,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.661
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 166.473,
        "saikou": 2.5,
        "heikin": 0.9,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.67
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 166.473,
        "saikou": 2.5,
        "heikin": 0.9,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.665
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 43,
        "ouatsu": 200.473,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.617
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 200.473,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.624
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 200.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.649
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 44,
        "ouatsu": 200.473,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.642
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 44,
        "ouatsu": 200.473,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.647
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 44,
        "ouatsu": 200.473,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.69
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 46,
        "ouatsu": 211.473,
        "saikou": 1.6,
        "heikin": 1.13,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 1.192
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 46,
        "ouatsu": 197.473,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 1.195
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 47,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.91,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.139
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 47,
        "ouatsu": 172.93,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.089
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 47,
        "ouatsu": 172.93,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.149
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 47,
        "ouatsu": 172.93,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.205
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.94,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.258
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.142
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.043
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.995
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 1.17,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.001
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 166.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.972
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 180.473,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.117
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 180.473,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.028
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 180.473,
        "saikou": 8,
        "heikin": 1.34,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.982
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 168.93,
        "saikou": 5,
        "heikin": 0.89,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.927
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 168.93,
        "saikou": 5.5,
        "heikin": 0.9,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.06
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 168.93,
        "saikou": 6,
        "heikin": 0.91,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.94
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 168.93,
        "saikou": 4.5,
        "heikin": 0.89,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.99
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 168.93,
        "saikou": 4,
        "heikin": 0.87,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.95
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 180.473,
        "saikou": 5.41,
        "heikin": 1.16,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.978
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 180.473,
        "saikou": 5.41,
        "heikin": 1.16,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.99
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 180.473,
        "saikou": 4,
        "heikin": 0.87,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.906
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 180.473,
        "saikou": 1.7,
        "heikin": 0.79,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.858
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.922
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.842
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.677
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 1.7,
        "heikin": 1.26,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.598
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 1.7,
        "heikin": 0.74,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.59
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 166,
        "ouatsu": 183.628,
        "saikou": 3.32,
        "heikin": 2.85,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.503
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 166,
        "ouatsu": 183.536,
        "saikou": 3.19,
        "heikin": 2.76,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.49
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 166,
        "ouatsu": 194.272,
        "saikou": 4,
        "heikin": 2.92,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.231
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 166,
        "ouatsu": 194.124,
        "saikou": 3.7,
        "heikin": 2.82,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.48
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 165,
        "ouatsu": 186.033,
        "saikou": 3.99,
        "heikin": 2.25,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.406
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 165,
        "ouatsu": 185.868,
        "saikou": 4,
        "heikin": 2.04,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.442
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 166,
        "ouatsu": 198.694,
        "saikou": 4,
        "heikin": 1.8,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.168
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 166,
        "ouatsu": 194.866,
        "saikou": 4,
        "heikin": 1.9,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.268
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 167,
        "ouatsu": 206.596,
        "saikou": 4,
        "heikin": 1.83,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.23
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 167,
        "ouatsu": 206.596,
        "saikou": 4,
        "heikin": 2.15,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.178
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 167,
        "ouatsu": 259.596,
        "saikou": 3,
        "heikin": 1.85,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.141
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 167,
        "ouatsu": 257.62,
        "saikou": 3.13,
        "heikin": 1.95,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 3.91
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 170,
        "ouatsu": 252.606,
        "saikou": 3.63,
        "heikin": 1.58,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 3.55
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 171,
        "ouatsu": 248.754,
        "saikou": 4.09,
        "heikin": 1.91,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 3.384
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 172,
        "ouatsu": 198.772,
        "saikou": 4.06,
        "heikin": 3.36,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 3.635
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 173,
        "ouatsu": 204.608,
        "saikou": 4.08,
        "heikin": 3.61,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 3.602
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 173,
        "ouatsu": 204.608,
        "saikou": 5.6,
        "heikin": 4.64,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 3.619
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 173,
        "ouatsu": 200.608,
        "saikou": 6.65,
        "heikin": 5.33,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 4.151
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 178,
        "ouatsu": 201.613,
        "saikou": 7.02,
        "heikin": 5.57,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.073
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 179,
        "ouatsu": 201.613,
        "saikou": 6.88,
        "heikin": 5.39,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 3.952
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 180,
        "ouatsu": 240.281,
        "saikou": 6.65,
        "heikin": 5.6,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.739
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 220.725,
        "saikou": 6.65,
        "heikin": 5.72,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.669
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 220.725,
        "saikou": 6.65,
        "heikin": 5.55,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.779
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 261.777,
        "saikou": 6.44,
        "heikin": 5.8,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.855
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 271.573,
        "saikou": 5.58,
        "heikin": 5.04,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.363
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 271.573,
        "saikou": 5.88,
        "heikin": 5.32,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.66
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 273.557,
        "saikou": 6.47,
        "heikin": 5.68,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.897
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 276.705,
        "saikou": 7.22,
        "heikin": 6.32,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 4.517
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 179,
        "ouatsu": 228.205,
        "saikou": 8.42,
        "heikin": 7.25,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 5.238
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 205.963,
        "saikou": 11.6,
        "heikin": 9.2,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 5.857
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 205.963,
        "saikou": 10.64,
        "heikin": 10.1,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 5.085
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 205.963,
        "saikou": 11.63,
        "heikin": 11.06,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 6.356
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 205.963,
        "saikou": 12.6,
        "heikin": 9.77,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 6.761
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 177.963,
        "saikou": 10.62,
        "heikin": 8.41,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 7.229
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 171,
        "ouatsu": 254.963,
        "saikou": 10.35,
        "heikin": 8.95,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.041
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 271.963,
        "saikou": 10.49,
        "heikin": 9.14,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.433
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 299.197,
        "saikou": 9.83,
        "heikin": 8.84,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 7.701
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 299.197,
        "saikou": 8.92,
        "heikin": 8.07,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 7.74
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 334.033,
        "saikou": 7.86,
        "heikin": 7.23,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 6.933
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 331.998,
        "saikou": 7.86,
        "heikin": 7.18,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 6.336
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 170,
        "ouatsu": 317.998,
        "saikou": 6.51,
        "heikin": 6.02,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.54
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 170,
        "ouatsu": 311.148,
        "saikou": 4.21,
        "heikin": 4.17,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.705
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 286.238,
        "saikou": 3.75,
        "heikin": 3.71,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.325
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 170,
        "ouatsu": 289.538,
        "saikou": 6.51,
        "heikin": 6.46,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.411
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 170,
        "ouatsu": 289.538,
        "saikou": 6.33,
        "heikin": 6.26,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.133
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 170,
        "ouatsu": 285.738,
        "saikou": 4.57,
        "heikin": 4.52,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.416
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 257.238,
        "saikou": 5.14,
        "heikin": 4.59,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.464
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 169,
        "ouatsu": 243.386,
        "saikou": 7.75,
        "heikin": 5.26,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 3.836
      }
    ]
  }
};
