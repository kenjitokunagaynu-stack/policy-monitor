// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/29〜2026/09/27）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-28",
  "fetchedAt": "2026-09-28",
  "avgWindowLabel": "過去30日平均（2026/08/29〜2026/09/27）",
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
  "blocks": [
    {
      "block": 1,
      "label": "00:00~00:30",
      "boshu": 1163,
      "ouatsu": 1522.503,
      "saikou": 10,
      "heikin": 1.82,
      "boshuAvg30d": 1355.6,
      "heikinAvg30d": 2.811
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1163,
      "ouatsu": 1548.5,
      "saikou": 10,
      "heikin": 1.91,
      "boshuAvg30d": 1355.6,
      "heikinAvg30d": 2.745
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1163,
      "ouatsu": 1585.968,
      "saikou": 10,
      "heikin": 2.31,
      "boshuAvg30d": 1355.6,
      "heikinAvg30d": 2.843
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1163,
      "ouatsu": 1647.524,
      "saikou": 10,
      "heikin": 2.14,
      "boshuAvg30d": 1355.4,
      "heikinAvg30d": 2.824
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1158,
      "ouatsu": 1607.895,
      "saikou": 10,
      "heikin": 2.14,
      "boshuAvg30d": 1350.4,
      "heikinAvg30d": 2.839
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1157,
      "ouatsu": 1644.891,
      "saikou": 10,
      "heikin": 2.17,
      "boshuAvg30d": 1349.3,
      "heikinAvg30d": 2.875
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1243,
      "ouatsu": 1711.861,
      "saikou": 10,
      "heikin": 2.18,
      "boshuAvg30d": 1354.9,
      "heikinAvg30d": 2.92
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1244,
      "ouatsu": 1604.9,
      "saikou": 10,
      "heikin": 2.45,
      "boshuAvg30d": 1355.9,
      "heikinAvg30d": 2.997
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1247,
      "ouatsu": 1722.303,
      "saikou": 10,
      "heikin": 2.12,
      "boshuAvg30d": 1359.0,
      "heikinAvg30d": 3.059
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1247,
      "ouatsu": 1673.923,
      "saikou": 10,
      "heikin": 2.17,
      "boshuAvg30d": 1359.1,
      "heikinAvg30d": 3.076
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1247,
      "ouatsu": 1716.094,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1359.1,
      "heikinAvg30d": 3.166
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1247,
      "ouatsu": 1657.914,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1359.1,
      "heikinAvg30d": 3.145
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1313,
      "ouatsu": 1711.378,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1424.8,
      "heikinAvg30d": 3.354
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1704.493,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1446.0,
      "heikinAvg30d": 3.239
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1357,
      "ouatsu": 1865.576,
      "saikou": 10,
      "heikin": 2.46,
      "boshuAvg30d": 1469.0,
      "heikinAvg30d": 3.249
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1375,
      "ouatsu": 1830.003,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1486.6,
      "heikinAvg30d": 3.19
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1376,
      "ouatsu": 1969.965,
      "saikou": 10,
      "heikin": 4.06,
      "boshuAvg30d": 1487.5,
      "heikinAvg30d": 3.389
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1376,
      "ouatsu": 1789.632,
      "saikou": 10,
      "heikin": 4.72,
      "boshuAvg30d": 1487.5,
      "heikinAvg30d": 3.503
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1399,
      "ouatsu": 1852.509,
      "saikou": 10,
      "heikin": 4.84,
      "boshuAvg30d": 1438.7,
      "heikinAvg30d": 3.585
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1403,
      "ouatsu": 1835.012,
      "saikou": 10,
      "heikin": 4.72,
      "boshuAvg30d": 1442.8,
      "heikinAvg30d": 3.54
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1411,
      "ouatsu": 1866.843,
      "saikou": 10,
      "heikin": 4.24,
      "boshuAvg30d": 1450.7,
      "heikinAvg30d": 3.565
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1411,
      "ouatsu": 1830.357,
      "saikou": 10,
      "heikin": 4.49,
      "boshuAvg30d": 1450.7,
      "heikinAvg30d": 3.578
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1408,
      "ouatsu": 2076.105,
      "saikou": 10,
      "heikin": 4.34,
      "boshuAvg30d": 1447.5,
      "heikinAvg30d": 3.498
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1407,
      "ouatsu": 2087.564,
      "saikou": 10,
      "heikin": 4.11,
      "boshuAvg30d": 1446.6,
      "heikinAvg30d": 3.471
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1400,
      "ouatsu": 1830.547,
      "saikou": 10,
      "heikin": 4.52,
      "boshuAvg30d": 1437.1,
      "heikinAvg30d": 3.374
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1400,
      "ouatsu": 1873.502,
      "saikou": 10,
      "heikin": 4.38,
      "boshuAvg30d": 1437.1,
      "heikinAvg30d": 3.346
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1400,
      "ouatsu": 2059.575,
      "saikou": 10,
      "heikin": 4.25,
      "boshuAvg30d": 1434.1,
      "heikinAvg30d": 3.501
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1394,
      "ouatsu": 1872.515,
      "saikou": 10,
      "heikin": 4.88,
      "boshuAvg30d": 1428.4,
      "heikinAvg30d": 3.645
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1389,
      "ouatsu": 1935.495,
      "saikou": 10,
      "heikin": 4.88,
      "boshuAvg30d": 1423.7,
      "heikinAvg30d": 3.715
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1382,
      "ouatsu": 1953.577,
      "saikou": 10,
      "heikin": 4.98,
      "boshuAvg30d": 1417.0,
      "heikinAvg30d": 3.732
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1353,
      "ouatsu": 1935.066,
      "saikou": 10,
      "heikin": 4.66,
      "boshuAvg30d": 1465.6,
      "heikinAvg30d": 3.69
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1353,
      "ouatsu": 1939.779,
      "saikou": 10,
      "heikin": 4.81,
      "boshuAvg30d": 1465.6,
      "heikinAvg30d": 3.855
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1353,
      "ouatsu": 1943.774,
      "saikou": 10,
      "heikin": 5.03,
      "boshuAvg30d": 1465.7,
      "heikinAvg30d": 3.895
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1351,
      "ouatsu": 2058.497,
      "saikou": 10,
      "heikin": 4.99,
      "boshuAvg30d": 1463.3,
      "heikinAvg30d": 4.056
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1347,
      "ouatsu": 2207.827,
      "saikou": 10,
      "heikin": 4.82,
      "boshuAvg30d": 1455.4,
      "heikinAvg30d": 4.175
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1343,
      "ouatsu": 2228.954,
      "saikou": 10,
      "heikin": 4.88,
      "boshuAvg30d": 1451.4,
      "heikinAvg30d": 4.15
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1335,
      "ouatsu": 2080.298,
      "saikou": 10,
      "heikin": 4.55,
      "boshuAvg30d": 1443.3,
      "heikinAvg30d": 4.238
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1335,
      "ouatsu": 2165.073,
      "saikou": 10,
      "heikin": 4.61,
      "boshuAvg30d": 1443.2,
      "heikinAvg30d": 4.165
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1336,
      "ouatsu": 2051.058,
      "saikou": 10,
      "heikin": 4.15,
      "boshuAvg30d": 1443.7,
      "heikinAvg30d": 4.083
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1335,
      "ouatsu": 1999.559,
      "saikou": 10,
      "heikin": 4.27,
      "boshuAvg30d": 1442.8,
      "heikinAvg30d": 3.947
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1330,
      "ouatsu": 1943.087,
      "saikou": 10,
      "heikin": 3.96,
      "boshuAvg30d": 1437.8,
      "heikinAvg30d": 3.87
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1326,
      "ouatsu": 1985.127,
      "saikou": 10,
      "heikin": 3.96,
      "boshuAvg30d": 1434.1,
      "heikinAvg30d": 3.816
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1233,
      "ouatsu": 1930.862,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1346.8,
      "heikinAvg30d": 3.538
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1236,
      "ouatsu": 1883.978,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1349.8,
      "heikinAvg30d": 3.684
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1237,
      "ouatsu": 1909.122,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1350.8,
      "heikinAvg30d": 3.491
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1230,
      "ouatsu": 1967.578,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1343.9,
      "heikinAvg30d": 3.415
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1223,
      "ouatsu": 1674.872,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1336.7,
      "heikinAvg30d": 3.416
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1215,
      "ouatsu": 1762.725,
      "saikou": 9.4,
      "heikin": 3.6,
      "boshuAvg30d": 1328.6,
      "heikinAvg30d": 3.195
    }
  ],
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
        "boshu": 64,
        "ouatsu": 153.908,
        "saikou": 2.93,
        "heikin": 1.16,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.014
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 151.958,
        "saikou": 1.44,
        "heikin": 1.05,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 0.979
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 180.058,
        "saikou": 3.85,
        "heikin": 1.19,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.055
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 200.258,
        "saikou": 1.01,
        "heikin": 0.9,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 0.998
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 193.908,
        "saikou": 3.15,
        "heikin": 1.08,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.282
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 174.358,
        "saikou": 3.55,
        "heikin": 1.11,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.426
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 193.908,
        "saikou": 3.95,
        "heikin": 0.96,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.355
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.314
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.619
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.417
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 201.24,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.449
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 154.908,
        "saikou": 3,
        "heikin": 1.05,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.601
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 186.068,
        "saikou": 3.85,
        "heikin": 1.38,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.043
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 153.908,
        "saikou": 7.4,
        "heikin": 1.65,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.54
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 239.548,
        "saikou": 1.01,
        "heikin": 0.91,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.372
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 152.958,
        "saikou": 7.95,
        "heikin": 1.62,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.42
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 200.548,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 0.976
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 112.958,
        "saikou": 3.95,
        "heikin": 1.11,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 0.971
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 202.498,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 0.927
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 0.972
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 241.498,
        "saikou": 1.01,
        "heikin": 0.89,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 1.017
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 1.023
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 200.548,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 0.926
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 234.548,
        "saikou": 1.01,
        "heikin": 0.9,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 0.965
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 150.95,
        "saikou": 4,
        "heikin": 1.04,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 1.036
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 191.94,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 0.968
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 238.29,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 1.253
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 1.293
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.222
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 174.958,
        "saikou": 9.8,
        "heikin": 1.27,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.394
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 179.908,
        "saikou": 1.84,
        "heikin": 1.63,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.241
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 150.76,
        "saikou": 4.93,
        "heikin": 4.93,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.638
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 114.908,
        "saikou": 4.4,
        "heikin": 4.29,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.002
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 110.99,
        "saikou": 6.95,
        "heikin": 6.58,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.864
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 136.258,
        "saikou": 1.88,
        "heikin": 1.84,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.292
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 176.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.086
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 127.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.182
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 199.268,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.278
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.875
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.774
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.908
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.743
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 191.918,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.451
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 217.168,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.732
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 191.918,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.408
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 219.158,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.463
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.259
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.423
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 89,
        "ouatsu": 84.941,
        "saikou": 10,
        "heikin": 6.46,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 8.294
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 89,
        "ouatsu": 95.611,
        "saikou": 10,
        "heikin": 6.73,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 8.526
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 89,
        "ouatsu": 115.489,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 8.845
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 89,
        "ouatsu": 115.489,
        "saikou": 10,
        "heikin": 7.69,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 8.836
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 89,
        "ouatsu": 115.489,
        "saikou": 10,
        "heikin": 7.59,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 8.822
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 89,
        "ouatsu": 115.489,
        "saikou": 10,
        "heikin": 7.69,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 8.828
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 113.989,
        "saikou": 10,
        "heikin": 7,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 8.747
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 115.489,
        "saikou": 10,
        "heikin": 6.82,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 8.74
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.8,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 8.734
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.79,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 8.691
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.79,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 8.65
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.79,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 8.69
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.71,
        "boshuAvg30d": 182.4,
        "heikinAvg30d": 8.824
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.64,
        "boshuAvg30d": 187.5,
        "heikinAvg30d": 8.994
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.64,
        "boshuAvg30d": 193.4,
        "heikinAvg30d": 9.033
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.52,
        "boshuAvg30d": 197.3,
        "heikinAvg30d": 8.971
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 7.61,
        "boshuAvg30d": 197.3,
        "heikinAvg30d": 9.039
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 103.988,
        "saikou": 10,
        "heikin": 8.46,
        "boshuAvg30d": 197.3,
        "heikinAvg30d": 8.914
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 215,
        "ouatsu": 92.136,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 139.6,
        "heikinAvg30d": 8.477
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 217,
        "ouatsu": 92.136,
        "saikou": 10,
        "heikin": 8.49,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 8.457
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 220,
        "ouatsu": 92.136,
        "saikou": 10,
        "heikin": 8.5,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 8.42
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 221,
        "ouatsu": 92.136,
        "saikou": 10,
        "heikin": 8.53,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 8.46
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 221,
        "ouatsu": 106.134,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 8.461
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 221,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.85,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 8.509
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 222,
        "ouatsu": 125.723,
        "saikou": 10,
        "heikin": 8.39,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 8.622
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 222,
        "ouatsu": 127.688,
        "saikou": 10,
        "heikin": 8.41,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 8.609
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 222,
        "ouatsu": 83.484,
        "saikou": 10,
        "heikin": 8.33,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 8.329
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 219,
        "ouatsu": 73.484,
        "saikou": 10,
        "heikin": 9.12,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 8.321
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 217,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 138.9,
        "heikinAvg30d": 8.433
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 212,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 134.1,
        "heikinAvg30d": 8.293
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 8.99,
        "boshuAvg30d": 193.6,
        "heikinAvg30d": 8.679
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 8.99,
        "boshuAvg30d": 193.6,
        "heikinAvg30d": 8.256
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 8.99,
        "boshuAvg30d": 193.6,
        "heikinAvg30d": 8.071
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 59.984,
        "saikou": 9.5,
        "heikin": 8.65,
        "boshuAvg30d": 192.5,
        "heikinAvg30d": 7.742
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 8.99,
        "boshuAvg30d": 190.5,
        "heikinAvg30d": 7.826
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 59.984,
        "saikou": 10,
        "heikin": 8.97,
        "boshuAvg30d": 188.5,
        "heikinAvg30d": 7.726
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 57.523,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 187.4,
        "heikinAvg30d": 7.757
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 57.988,
        "saikou": 10,
        "heikin": 8.93,
        "boshuAvg30d": 187.4,
        "heikinAvg30d": 7.765
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.06,
        "boshuAvg30d": 187.4,
        "heikinAvg30d": 8.053
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.56,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 8.352
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.57,
        "boshuAvg30d": 186.4,
        "heikinAvg30d": 8.303
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.6,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 8.368
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 79.658,
        "saikou": 10,
        "heikin": 7.64,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 8.442
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 8.593
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.22,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 8.55
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 81.558,
        "saikou": 10,
        "heikin": 7.26,
        "boshuAvg30d": 101.2,
        "heikinAvg30d": 8.672
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.31,
        "boshuAvg30d": 100.2,
        "heikinAvg30d": 8.723
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 81.988,
        "saikou": 9.4,
        "heikin": 6.77,
        "boshuAvg30d": 99.2,
        "heikinAvg30d": 8.766
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 426,
        "ouatsu": 367.95,
        "saikou": 9.9,
        "heikin": 2.53,
        "boshuAvg30d": 494.2,
        "heikinAvg30d": 3.497
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 426,
        "ouatsu": 392.613,
        "saikou": 9.9,
        "heikin": 2.57,
        "boshuAvg30d": 494.2,
        "heikinAvg30d": 3.384
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 426,
        "ouatsu": 396.553,
        "saikou": 9.9,
        "heikin": 2.68,
        "boshuAvg30d": 494.2,
        "heikinAvg30d": 3.299
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 426,
        "ouatsu": 405.994,
        "saikou": 9.9,
        "heikin": 2.69,
        "boshuAvg30d": 494.1,
        "heikinAvg30d": 3.246
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 424,
        "ouatsu": 392.026,
        "saikou": 9.9,
        "heikin": 2.63,
        "boshuAvg30d": 492.1,
        "heikinAvg30d": 3.216
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 424,
        "ouatsu": 394.022,
        "saikou": 9.1,
        "heikin": 2.61,
        "boshuAvg30d": 492.1,
        "heikinAvg30d": 3.207
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 423,
        "ouatsu": 405.994,
        "saikou": 9.1,
        "heikin": 2.4,
        "boshuAvg30d": 491.0,
        "heikinAvg30d": 3.127
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 424,
        "ouatsu": 402.554,
        "saikou": 9.1,
        "heikin": 2.61,
        "boshuAvg30d": 492.0,
        "heikinAvg30d": 3.297
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 425,
        "ouatsu": 369.355,
        "saikou": 9.1,
        "heikin": 2.8,
        "boshuAvg30d": 493.0,
        "heikinAvg30d": 3.239
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 425,
        "ouatsu": 371.225,
        "saikou": 9.1,
        "heikin": 2.76,
        "boshuAvg30d": 493.1,
        "heikinAvg30d": 3.273
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 425,
        "ouatsu": 353.579,
        "saikou": 9.1,
        "heikin": 2.95,
        "boshuAvg30d": 493.1,
        "heikinAvg30d": 3.28
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 425,
        "ouatsu": 334.825,
        "saikou": 9.1,
        "heikin": 3,
        "boshuAvg30d": 493.1,
        "heikinAvg30d": 3.316
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 446,
        "ouatsu": 359.583,
        "saikou": 9.1,
        "heikin": 4.19,
        "boshuAvg30d": 514.1,
        "heikinAvg30d": 3.666
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 454,
        "ouatsu": 379.815,
        "saikou": 9.1,
        "heikin": 4.1,
        "boshuAvg30d": 522.1,
        "heikinAvg30d": 3.711
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 459,
        "ouatsu": 456.872,
        "saikou": 9.1,
        "heikin": 3.72,
        "boshuAvg30d": 527.3,
        "heikinAvg30d": 3.839
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 464,
        "ouatsu": 456.272,
        "saikou": 9.1,
        "heikin": 3.8,
        "boshuAvg30d": 532.2,
        "heikinAvg30d": 3.842
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 464,
        "ouatsu": 527.938,
        "saikou": 9.1,
        "heikin": 4.82,
        "boshuAvg30d": 532.2,
        "heikinAvg30d": 4.22
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 464,
        "ouatsu": 482.868,
        "saikou": 10,
        "heikin": 4.88,
        "boshuAvg30d": 532.2,
        "heikinAvg30d": 4.324
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 455,
        "ouatsu": 480.9,
        "saikou": 10,
        "heikin": 5.35,
        "boshuAvg30d": 526.1,
        "heikinAvg30d": 4.25
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 455,
        "ouatsu": 480.9,
        "saikou": 10,
        "heikin": 5.45,
        "boshuAvg30d": 526.1,
        "heikinAvg30d": 4.214
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 455,
        "ouatsu": 463.635,
        "saikou": 10,
        "heikin": 4.89,
        "boshuAvg30d": 526.1,
        "heikinAvg30d": 4.027
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 454,
        "ouatsu": 463.635,
        "saikou": 10,
        "heikin": 4.92,
        "boshuAvg30d": 525.1,
        "heikinAvg30d": 4.024
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 451,
        "ouatsu": 567.879,
        "saikou": 10,
        "heikin": 4.56,
        "boshuAvg30d": 522.1,
        "heikinAvg30d": 4.107
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 451,
        "ouatsu": 565.979,
        "saikou": 10,
        "heikin": 4.57,
        "boshuAvg30d": 522.1,
        "heikinAvg30d": 4.104
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 450,
        "ouatsu": 527.099,
        "saikou": 10,
        "heikin": 5.09,
        "boshuAvg30d": 521.1,
        "heikinAvg30d": 3.925
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 450,
        "ouatsu": 527.099,
        "saikou": 10,
        "heikin": 5.13,
        "boshuAvg30d": 521.1,
        "heikinAvg30d": 3.944
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 450,
        "ouatsu": 565.269,
        "saikou": 10,
        "heikin": 4.46,
        "boshuAvg30d": 518.1,
        "heikinAvg30d": 4.001
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 449,
        "ouatsu": 535.599,
        "saikou": 10,
        "heikin": 5.69,
        "boshuAvg30d": 517.4,
        "heikinAvg30d": 4.165
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 448,
        "ouatsu": 602.362,
        "saikou": 10,
        "heikin": 6,
        "boshuAvg30d": 516.5,
        "heikinAvg30d": 4.239
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 448,
        "ouatsu": 558.646,
        "saikou": 10,
        "heikin": 5.43,
        "boshuAvg30d": 516.5,
        "heikinAvg30d": 4.071
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 447,
        "ouatsu": 561.572,
        "saikou": 10,
        "heikin": 5.44,
        "boshuAvg30d": 515.5,
        "heikinAvg30d": 4.065
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 447,
        "ouatsu": 587.931,
        "saikou": 10,
        "heikin": 4.68,
        "boshuAvg30d": 515.5,
        "heikinAvg30d": 4.035
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 447,
        "ouatsu": 589.167,
        "saikou": 10,
        "heikin": 5.29,
        "boshuAvg30d": 515.5,
        "heikinAvg30d": 4.187
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 447,
        "ouatsu": 713.308,
        "saikou": 10,
        "heikin": 5,
        "boshuAvg30d": 515.5,
        "heikinAvg30d": 4.391
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 447,
        "ouatsu": 715.48,
        "saikou": 10,
        "heikin": 5.05,
        "boshuAvg30d": 511.3,
        "heikinAvg30d": 4.46
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 447,
        "ouatsu": 711.842,
        "saikou": 10,
        "heikin": 5.2,
        "boshuAvg30d": 511.3,
        "heikinAvg30d": 4.385
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 449,
        "ouatsu": 651.203,
        "saikou": 10,
        "heikin": 4.93,
        "boshuAvg30d": 513.4,
        "heikinAvg30d": 4.499
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 449,
        "ouatsu": 651.203,
        "saikou": 10,
        "heikin": 5.06,
        "boshuAvg30d": 513.3,
        "heikinAvg30d": 4.416
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 450,
        "ouatsu": 610.562,
        "saikou": 10,
        "heikin": 4.42,
        "boshuAvg30d": 513.9,
        "heikinAvg30d": 4.493
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 450,
        "ouatsu": 538.975,
        "saikou": 9.1,
        "heikin": 5.04,
        "boshuAvg30d": 513.9,
        "heikinAvg30d": 4.383
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 448,
        "ouatsu": 569.512,
        "saikou": 9.1,
        "heikin": 4.56,
        "boshuAvg30d": 512.0,
        "heikinAvg30d": 4.237
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 448,
        "ouatsu": 567.253,
        "saikou": 9.1,
        "heikin": 4.61,
        "boshuAvg30d": 512.0,
        "heikinAvg30d": 4.296
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 447,
        "ouatsu": 482.162,
        "saikou": 9.1,
        "heikin": 3.52,
        "boshuAvg30d": 511.1,
        "heikinAvg30d": 4.092
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 447,
        "ouatsu": 471.597,
        "saikou": 9.1,
        "heikin": 3.44,
        "boshuAvg30d": 511.1,
        "heikinAvg30d": 4.466
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 447,
        "ouatsu": 436.997,
        "saikou": 9.1,
        "heikin": 3.38,
        "boshuAvg30d": 511.1,
        "heikinAvg30d": 4.052
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 445,
        "ouatsu": 443.239,
        "saikou": 9.1,
        "heikin": 3.25,
        "boshuAvg30d": 509.1,
        "heikinAvg30d": 4.148
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 443,
        "ouatsu": 434.833,
        "saikou": 9.1,
        "heikin": 3.47,
        "boshuAvg30d": 507.0,
        "heikinAvg30d": 4.287
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 442,
        "ouatsu": 590.022,
        "saikou": 9.1,
        "heikin": 5.61,
        "boshuAvg30d": 505.9,
        "heikinAvg30d": 4.083
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 148.966,
        "saikou": 2,
        "heikin": 0.99,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 2.213
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 160.708,
        "saikou": 1.88,
        "heikin": 0.52,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 2.147
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 178.234,
        "saikou": 1.88,
        "heikin": 0.68,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 2.198
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 178.234,
        "saikou": 1.88,
        "heikin": 0.55,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 2.306
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 158.269,
        "saikou": 1.88,
        "heikin": 0.48,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 2.339
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 164.21,
        "saikou": 1.88,
        "heikin": 0.47,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 2.429
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 187.866,
        "saikou": 1.88,
        "heikin": 0.75,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 2.313
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 182.166,
        "saikou": 2.12,
        "heikin": 1.67,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 2.461
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 230.148,
        "saikou": 2.2,
        "heikin": 1.79,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 2.554
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 230.148,
        "saikou": 2.22,
        "heikin": 1.8,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 2.447
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 241.964,
        "saikou": 2.47,
        "heikin": 2.1,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 2.535
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 240.464,
        "saikou": 2.46,
        "heikin": 2.04,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 2.491
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 241.964,
        "saikou": 2.63,
        "heikin": 2.3,
        "boshuAvg30d": 107.9,
        "heikinAvg30d": 2.567
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 252.359,
        "saikou": 2.79,
        "heikin": 2.47,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 2.488
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 307.64,
        "saikou": 2.39,
        "heikin": 1.5,
        "boshuAvg30d": 113.9,
        "heikinAvg30d": 2.567
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 337.333,
        "saikou": 2.4,
        "heikin": 1.47,
        "boshuAvg30d": 115.8,
        "heikinAvg30d": 2.575
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 378.459,
        "saikou": 2.89,
        "heikin": 1.75,
        "boshuAvg30d": 115.8,
        "heikinAvg30d": 2.904
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 419.834,
        "saikou": 5.69,
        "heikin": 2.84,
        "boshuAvg30d": 115.8,
        "heikinAvg30d": 2.939
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 388.404,
        "saikou": 8.22,
        "heikin": 3.24,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 3.333
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 398.755,
        "saikou": 3.88,
        "heikin": 2.73,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 3.318
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 418.09,
        "saikou": 4.42,
        "heikin": 2.34,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 3.49
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 418.09,
        "saikou": 4.49,
        "heikin": 2.26,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 3.553
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 422.066,
        "saikou": 4.48,
        "heikin": 2.3,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 3.333
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 405.001,
        "saikou": 3.88,
        "heikin": 2.14,
        "boshuAvg30d": 117.8,
        "heikinAvg30d": 3.136
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 429.502,
        "saikou": 4.98,
        "heikin": 2.6,
        "boshuAvg30d": 114.7,
        "heikinAvg30d": 3.165
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 429.502,
        "saikou": 4.89,
        "heikin": 2.62,
        "boshuAvg30d": 114.7,
        "heikinAvg30d": 3.131
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 434.687,
        "saikou": 5.1,
        "heikin": 2.42,
        "boshuAvg30d": 114.7,
        "heikinAvg30d": 3.08
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 408.187,
        "saikou": 3.19,
        "heikin": 2.34,
        "boshuAvg30d": 114.7,
        "heikinAvg30d": 3.116
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 408.187,
        "saikou": 3.49,
        "heikin": 2.58,
        "boshuAvg30d": 113.8,
        "heikinAvg30d": 3.282
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 408.187,
        "saikou": 3.79,
        "heikin": 2.72,
        "boshuAvg30d": 113.8,
        "heikinAvg30d": 3.234
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 383.238,
        "saikou": 2.93,
        "heikin": 2.18,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 3.071
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 382.74,
        "saikou": 2.93,
        "heikin": 2.25,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 3.059
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 390.624,
        "saikou": 2.9,
        "heikin": 2.28,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 3.043
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 390.624,
        "saikou": 2.79,
        "heikin": 2.19,
        "boshuAvg30d": 112.9,
        "heikinAvg30d": 3.315
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 389.124,
        "saikou": 2.79,
        "heikin": 2.06,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 3.203
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 387.125,
        "saikou": 3.99,
        "heikin": 2.53,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 2.962
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 362.176,
        "saikou": 2.79,
        "heikin": 2.12,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 2.896
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 372.176,
        "saikou": 2.8,
        "heikin": 2.16,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 2.715
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 382.197,
        "saikou": 2.89,
        "heikin": 1.7,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 2.429
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 404.006,
        "saikou": 2.75,
        "heikin": 2.48,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 2.476
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 398.04,
        "saikou": 2.79,
        "heikin": 2.53,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 2.568
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 393.991,
        "saikou": 2.75,
        "heikin": 2.32,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 2.505
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 380.883,
        "saikou": 2.5,
        "heikin": 2.07,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 2.352
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 304.638,
        "saikou": 2.86,
        "heikin": 2.11,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 2.515
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 274.87,
        "saikou": 4.31,
        "heikin": 2.9,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 2.582
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 233.058,
        "saikou": 3.18,
        "heikin": 2.55,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 2.624
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 205.058,
        "saikou": 3.95,
        "heikin": 2.47,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 2.646
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 213.964,
        "saikou": 3.04,
        "heikin": 2.62,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 2.659
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.123
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.145
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 18.214,
        "saikou": 1.7,
        "heikin": 1.11,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 0.975
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 26.374,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.19
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.442
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 58.482,
        "saikou": 1.5,
        "heikin": 0.46,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.004
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 0.67,
        "heikin": 0.67,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.163
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 1.81,
        "heikin": 1.81,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.31
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.279
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.404
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 41.814,
        "saikou": 2,
        "heikin": 1.18,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.486
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 37.88,
        "saikou": 2.53,
        "heikin": 2.34,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.354
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 28.928,
        "saikou": 2.33,
        "heikin": 2.28,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.651
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 28.928,
        "saikou": 2.59,
        "heikin": 0.68,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.508
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.621
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 63.928,
        "saikou": 1.44,
        "heikin": 1.36,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.648
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 1.871
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 2.91,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 2.463
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.14,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.844
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 2.89,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.86
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 3.2,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.568
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.818
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.717
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.506
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.1,
        "heikin": 3.1,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.624
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.43,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.707
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.606
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.614
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.53,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.69
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.549
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.597
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.856
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.386
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.994
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.616
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.41,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.255
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.11,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.425
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.23,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.084
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.34,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.173
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.22,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.595
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.25,
        "heikin": 2.22,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.772
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.45,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.949
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.27,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.138
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 5.774,
        "saikou": 2.48,
        "heikin": 2.34,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.047
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.45,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.811
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 63.928,
        "saikou": 2.3,
        "heikin": 0.51,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.646
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 63.928,
        "saikou": 2.5,
        "heikin": 0.51,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.619
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 63.928,
        "saikou": 2.5,
        "heikin": 0.51,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.265
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 95.311,
        "saikou": 1.64,
        "heikin": 1.64,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 2.067
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 95.311,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 1.898
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 95.347,
        "saikou": 1.64,
        "heikin": 1.64,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 2.021
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 115.314,
        "saikou": 1.64,
        "heikin": 0.46,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 1.989
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 113.414,
        "saikou": 1.64,
        "heikin": 0.46,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.077
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 89.469,
        "saikou": 1.64,
        "heikin": 1.64,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 2.041
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 99.256,
        "saikou": 1.64,
        "heikin": 1.64,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.107
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 99.256,
        "saikou": 2,
        "heikin": 1.95,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.115
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 99.256,
        "saikou": 1.64,
        "heikin": 1.64,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 2.103
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 99.256,
        "saikou": 2,
        "heikin": 1.95,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 2.131
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 171.089,
        "saikou": 2.47,
        "heikin": 1.46,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 2.126
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 188.705,
        "saikou": 2.44,
        "heikin": 1.34,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 1.986
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 190.703,
        "saikou": 2.47,
        "heikin": 1.37,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.46
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 190.703,
        "saikou": 2.8,
        "heikin": 1.4,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.525
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 99.256,
        "saikou": 2.44,
        "heikin": 2.38,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 2.556
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 118.87,
        "saikou": 2.4,
        "heikin": 1.8,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 2.647
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 172.864,
        "saikou": 4.25,
        "heikin": 3.15,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 2.959
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 99.256,
        "saikou": 4,
        "heikin": 2.79,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 3.053
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 117.77,
        "saikou": 7.04,
        "heikin": 3.81,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.206
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 3.95,
        "heikin": 3.09,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.279
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 5,
        "heikin": 3.15,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.604
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 4.5,
        "heikin": 2.99,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.554
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 3.98,
        "heikin": 3.14,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 3.367
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 3.95,
        "heikin": 3.17,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.123
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 48.488,
        "saikou": 4.94,
        "heikin": 3.74,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 3.222
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 48.488,
        "saikou": 4.23,
        "heikin": 3.17,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 2.96
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 95.913,
        "saikou": 4.97,
        "heikin": 3.03,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 3.254
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 99.256,
        "saikou": 3.49,
        "heikin": 2.87,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 3.205
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 103.123,
        "saikou": 3.97,
        "heikin": 2.95,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 3.236
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 103.123,
        "saikou": 4.45,
        "heikin": 3.16,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 3.119
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 103.123,
        "saikou": 2.94,
        "heikin": 2.84,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.941
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 103.123,
        "saikou": 2.94,
        "heikin": 2.83,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 3.055
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 103.123,
        "saikou": 2.94,
        "heikin": 2.76,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 3.076
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 103.123,
        "saikou": 2.97,
        "heikin": 2.45,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 3.286
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 101.253,
        "saikou": 2.79,
        "heikin": 2.61,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 3.286
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 101.253,
        "saikou": 4.94,
        "heikin": 2.72,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 3.142
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 99.293,
        "saikou": 2.95,
        "heikin": 2.55,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.985
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 99.293,
        "saikou": 4,
        "heikin": 2.57,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.938
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 101.68,
        "saikou": 4,
        "heikin": 2.55,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 3.073
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 101.68,
        "saikou": 2.79,
        "heikin": 2.47,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.839
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 99.275,
        "saikou": 2.79,
        "heikin": 2.45,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.756
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 101.273,
        "saikou": 2.7,
        "heikin": 2.44,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 2.808
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 101.273,
        "saikou": 2.45,
        "heikin": 2.38,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.841
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 101.273,
        "saikou": 2.94,
        "heikin": 2.48,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.714
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 189.881,
        "saikou": 4.87,
        "heikin": 3.25,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.739
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 240.597,
        "saikou": 4.9,
        "heikin": 3.2,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.684
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 101.273,
        "saikou": 2.7,
        "heikin": 2.41,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.549
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 84.333,
        "saikou": 2.8,
        "heikin": 2.43,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 2.528
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 178.496,
        "saikou": 1.58,
        "heikin": 0.5,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.962
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 178.496,
        "saikou": 1.58,
        "heikin": 0.95,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.141
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 178.496,
        "saikou": 2.66,
        "heikin": 2.17,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.288
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 182.286,
        "saikou": 1.92,
        "heikin": 1.62,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.186
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 182.286,
        "saikou": 1.58,
        "heikin": 1.21,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.135
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 182.286,
        "saikou": 1.58,
        "heikin": 1.2,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.126
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 199.145,
        "saikou": 2.3,
        "heikin": 1.9,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.226
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 199.145,
        "saikou": 3.45,
        "heikin": 2.65,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.364
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 199.145,
        "saikou": 1.58,
        "heikin": 0.66,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.33
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 199.145,
        "saikou": 2,
        "heikin": 0.62,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.581
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 199.145,
        "saikou": 2.67,
        "heikin": 2.2,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.857
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 199.145,
        "saikou": 3.97,
        "heikin": 3.06,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.807
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 199.145,
        "saikou": 3.97,
        "heikin": 3.03,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 3.146
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 199.145,
        "saikou": 2.8,
        "heikin": 1.69,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 2.556
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 199.145,
        "saikou": 1.58,
        "heikin": 0.58,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.393
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 199.145,
        "saikou": 2.87,
        "heikin": 2.32,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.121
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 183.231,
        "saikou": 5.37,
        "heikin": 3.94,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.003
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 183.231,
        "saikou": 8.17,
        "heikin": 5.69,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.617
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 209.883,
        "saikou": 8.99,
        "heikin": 5.64,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.722
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 212.989,
        "saikou": 8.99,
        "heikin": 5.38,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.5
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 192.693,
        "saikou": 7.2,
        "heikin": 6.13,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 2.664
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 192.693,
        "saikou": 7.2,
        "heikin": 6.13,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.635
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 203.583,
        "saikou": 9.97,
        "heikin": 6.36,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.539
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 196.943,
        "saikou": 9.95,
        "heikin": 5.35,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.503
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 195.261,
        "saikou": 7.2,
        "heikin": 5.07,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.12
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 195.261,
        "saikou": 7.08,
        "heikin": 4.95,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.981
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 216.31,
        "saikou": 9.97,
        "heikin": 5.95,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.401
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 195.261,
        "saikou": 6.7,
        "heikin": 4.29,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.508
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 195.261,
        "saikou": 6.2,
        "heikin": 3.79,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.755
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 195.261,
        "saikou": 7.15,
        "heikin": 5.02,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.829
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 193.823,
        "saikou": 8.37,
        "heikin": 4.72,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.246
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 193.823,
        "saikou": 8.17,
        "heikin": 4.61,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.858
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 206.55,
        "saikou": 8.98,
        "heikin": 4.72,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.686
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 206.55,
        "saikou": 9.12,
        "heikin": 4.81,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.925
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 216.31,
        "saikou": 9.9,
        "heikin": 5.71,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.246
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 206.55,
        "saikou": 9.94,
        "heikin": 5.14,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.644
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 206.549,
        "saikou": 8.17,
        "heikin": 4.58,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.867
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 206.549,
        "saikou": 8.17,
        "heikin": 4.58,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.965
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 204.749,
        "saikou": 9.62,
        "heikin": 5.36,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.668
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 206.739,
        "saikou": 7.87,
        "heikin": 4.25,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.391
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 218.151,
        "saikou": 6.09,
        "heikin": 3.55,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.126
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 218.151,
        "saikou": 5.75,
        "heikin": 3.31,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 3.785
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 218.151,
        "saikou": 5.01,
        "heikin": 2.95,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.585
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 218.151,
        "saikou": 4.13,
        "heikin": 2.53,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.367
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 218.151,
        "saikou": 4.02,
        "heikin": 2.47,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.267
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 218.151,
        "saikou": 2,
        "heikin": 1.12,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.015
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 199.145,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.884
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 199.145,
        "saikou": 2.9,
        "heikin": 1.01,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 1.951
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 210.473,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.869
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.891
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.899
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.871
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.86
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.57,
        "boshuAvg30d": 39.9,
        "heikinAvg30d": 0.868
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 1.006
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 172.93,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.939
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.986
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.46,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.031
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.008
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.019
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.01
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.52,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 1.043
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 2.3,
        "heikin": 0.67,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.903
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.886
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.91
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 0.973
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 0.959
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.55,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.975
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.55,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.971
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.966
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.55,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.963
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.151
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.102
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 166.473,
        "saikou": 1.6,
        "heikin": 1.08,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.004
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.034
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.045
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.936
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.982
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.007
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.011
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.941
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.981
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.01
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.01
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.022
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.066
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.057
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.012
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.01
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.742
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.774
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.776
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.78
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 200.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.801
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.859
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 218.53,
        "saikou": 2.32,
        "heikin": 1.73,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 3.904
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 222.402,
        "saikou": 2.15,
        "heikin": 1.56,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 3.459
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 236.104,
        "saikou": 1.89,
        "heikin": 1.32,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 3.16
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 236.102,
        "saikou": 2.21,
        "heikin": 1.63,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 3.104
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 236.102,
        "saikou": 2.26,
        "heikin": 1.69,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 3.019
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 279.102,
        "saikou": 2.29,
        "heikin": 1.93,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 3.15
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 298.302,
        "saikou": 2.36,
        "heikin": 1.98,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.325
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 251.474,
        "saikou": 2.7,
        "heikin": 2.08,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.451
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 255.302,
        "saikou": 2.71,
        "heikin": 2.11,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.551
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 255.302,
        "saikou": 2.96,
        "heikin": 2.31,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.789
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 205.302,
        "saikou": 4.7,
        "heikin": 3.89,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.869
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 200.026,
        "saikou": 5.68,
        "heikin": 4.66,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.653
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 200.026,
        "saikou": 5.78,
        "heikin": 4.65,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 3.4
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 196.174,
        "saikou": 4.82,
        "heikin": 3.79,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 3.169
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 194.226,
        "saikou": 3.56,
        "heikin": 3.12,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 3.05
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 198.036,
        "saikou": 5.9,
        "heikin": 4.99,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 3.094
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 198.036,
        "saikou": 8.28,
        "heikin": 5.99,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 3.452
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 196.096,
        "saikou": 9.64,
        "heikin": 6.87,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 3.957
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 203.517,
        "saikou": 10,
        "heikin": 7.17,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 4.014
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 203.517,
        "saikou": 10,
        "heikin": 7.17,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 4.002
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 204.034,
        "saikou": 10,
        "heikin": 7.3,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 3.859
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 254.138,
        "saikou": 10,
        "heikin": 7.6,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 4.009
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 321.138,
        "saikou": 10,
        "heikin": 7.05,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 3.98
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 312.202,
        "saikou": 7.49,
        "heikin": 6.28,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 4.016
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 196.123,
        "saikou": 8.8,
        "heikin": 6.49,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 3.519
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 196.123,
        "saikou": 8.77,
        "heikin": 6.47,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 3.638
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 255.221,
        "saikou": 9.41,
        "heikin": 6.94,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 4.034
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 250.369,
        "saikou": 10,
        "heikin": 8.22,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 4.558
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 252.769,
        "saikou": 10,
        "heikin": 8.38,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 4.956
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 294.517,
        "saikou": 10,
        "heikin": 8.76,
        "boshuAvg30d": 174.4,
        "heikinAvg30d": 5.311
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 294.517,
        "saikou": 9.63,
        "heikin": 8,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.341
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 302.517,
        "saikou": 10,
        "heikin": 7.83,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.954
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 320.517,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.925
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 316.517,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 6.124
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 430.517,
        "saikou": 9.63,
        "heikin": 7.94,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 5.945
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 428.541,
        "saikou": 9.63,
        "heikin": 7.54,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 6.094
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 418.195,
        "saikou": 9.63,
        "heikin": 8.3,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 6.125
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 421.195,
        "saikou": 9.63,
        "heikin": 8.3,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 5.883
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 358.023,
        "saikou": 7.75,
        "heikin": 6.77,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 5.542
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 306.012,
        "saikou": 6.33,
        "heikin": 5.38,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 5.129
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 262.312,
        "saikou": 6.08,
        "heikin": 5.14,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.88
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 262.312,
        "saikou": 8.05,
        "heikin": 5.19,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.686
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 285.416,
        "saikou": 7.45,
        "heikin": 5.37,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.396
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 294.416,
        "saikou": 7.71,
        "heikin": 5.82,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.529
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 299.416,
        "saikou": 7.73,
        "heikin": 5.76,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.466
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 257.416,
        "saikou": 7.07,
        "heikin": 5.76,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 3.945
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 192.766,
        "saikou": 7.28,
        "heikin": 5.39,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 3.904
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 188.914,
        "saikou": 6.23,
        "heikin": 4.73,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 3.411
      }
    ]
  }
};
