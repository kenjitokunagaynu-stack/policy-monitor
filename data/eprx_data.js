// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/14〜2026/09/12）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-13",
  "fetchedAt": "2026-09-13",
  "avgWindowLabel": "過去30日平均（2026/08/14〜2026/09/12）",
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
      "boshu": 1362,
      "ouatsu": 1277.887,
      "saikou": 10,
      "heikin": 2.05,
      "boshuAvg30d": 1446.4,
      "heikinAvg30d": 3.24
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1362,
      "ouatsu": 1429.521,
      "saikou": 10,
      "heikin": 1.92,
      "boshuAvg30d": 1446.4,
      "heikinAvg30d": 3.197
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1362,
      "ouatsu": 1547.388,
      "saikou": 10,
      "heikin": 1.95,
      "boshuAvg30d": 1446.4,
      "heikinAvg30d": 3.272
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1362,
      "ouatsu": 1470.522,
      "saikou": 10,
      "heikin": 2.26,
      "boshuAvg30d": 1445.2,
      "heikinAvg30d": 3.265
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1357,
      "ouatsu": 1444.669,
      "saikou": 10,
      "heikin": 2.34,
      "boshuAvg30d": 1440.2,
      "heikinAvg30d": 3.274
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1356,
      "ouatsu": 1343.388,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1438.6,
      "heikinAvg30d": 3.342
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1356,
      "ouatsu": 1426.731,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1454.6,
      "heikinAvg30d": 3.342
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1357,
      "ouatsu": 1451.071,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1455.6,
      "heikinAvg30d": 3.423
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1360,
      "ouatsu": 1432.331,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1459.2,
      "heikinAvg30d": 3.431
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1360,
      "ouatsu": 1452.949,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1459.8,
      "heikinAvg30d": 3.39
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1360,
      "ouatsu": 1423.351,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1459.8,
      "heikinAvg30d": 3.493
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1360,
      "ouatsu": 1423.929,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1459.8,
      "heikinAvg30d": 3.395
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1426,
      "ouatsu": 1415.033,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1524.0,
      "heikinAvg30d": 3.829
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1447,
      "ouatsu": 1445.357,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1546.2,
      "heikinAvg30d": 3.855
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1470,
      "ouatsu": 1452.617,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1569.2,
      "heikinAvg30d": 3.891
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1488,
      "ouatsu": 1507.529,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1585.2,
      "heikinAvg30d": 3.876
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1489,
      "ouatsu": 1539.343,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1585.6,
      "heikinAvg30d": 4.148
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1489,
      "ouatsu": 1505.12,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1585.6,
      "heikinAvg30d": 4.425
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1426,
      "ouatsu": 1418.4,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1547.4,
      "heikinAvg30d": 4.364
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1430,
      "ouatsu": 1403.552,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1552.0,
      "heikinAvg30d": 4.214
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1438,
      "ouatsu": 1413.772,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1558.9,
      "heikinAvg30d": 4.041
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1438,
      "ouatsu": 1360.666,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1558.9,
      "heikinAvg30d": 4.07
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1435,
      "ouatsu": 1408.358,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1554.7,
      "heikinAvg30d": 4.038
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1434,
      "ouatsu": 1442.414,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1554.3,
      "heikinAvg30d": 4.063
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1427,
      "ouatsu": 1371.616,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1549.1,
      "heikinAvg30d": 3.867
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1427,
      "ouatsu": 1421.234,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1549.1,
      "heikinAvg30d": 3.867
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1427,
      "ouatsu": 1482.46,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1546.6,
      "heikinAvg30d": 4.091
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1421,
      "ouatsu": 1528.163,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1540.6,
      "heikinAvg30d": 4.329
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1416,
      "ouatsu": 1630.771,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1537.4,
      "heikinAvg30d": 4.566
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1409,
      "ouatsu": 1619.77,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1532.2,
      "heikinAvg30d": 4.655
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1466,
      "ouatsu": 1559.572,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1567.4,
      "heikinAvg30d": 4.603
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1466,
      "ouatsu": 1471.976,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1567.4,
      "heikinAvg30d": 4.946
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1466,
      "ouatsu": 1526.785,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1567.6,
      "heikinAvg30d": 4.981
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1464,
      "ouatsu": 1678.266,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1563.8,
      "heikinAvg30d": 5.224
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1460,
      "ouatsu": 1721.813,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1561.0,
      "heikinAvg30d": 5.235
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1456,
      "ouatsu": 1605.839,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1557.0,
      "heikinAvg30d": 5.189
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1448,
      "ouatsu": 1595.873,
      "saikou": 10,
      "heikin": 3.87,
      "boshuAvg30d": 1548.4,
      "heikinAvg30d": 5.273
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1448,
      "ouatsu": 1639.841,
      "saikou": 10,
      "heikin": 3.79,
      "boshuAvg30d": 1547.8,
      "heikinAvg30d": 5.065
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1449,
      "ouatsu": 1801.283,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1548.2,
      "heikinAvg30d": 4.858
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1448,
      "ouatsu": 1788.132,
      "saikou": 10,
      "heikin": 3.88,
      "boshuAvg30d": 1547.8,
      "heikinAvg30d": 4.607
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1443,
      "ouatsu": 1718.442,
      "saikou": 10,
      "heikin": 3.9,
      "boshuAvg30d": 1542.8,
      "heikinAvg30d": 4.268
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1439,
      "ouatsu": 1658.802,
      "saikou": 10,
      "heikin": 3.8,
      "boshuAvg30d": 1540.6,
      "heikinAvg30d": 4.003
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1346,
      "ouatsu": 1682.788,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1452.7,
      "heikinAvg30d": 3.635
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1349,
      "ouatsu": 1691.088,
      "saikou": 10,
      "heikin": 3.77,
      "boshuAvg30d": 1455.7,
      "heikinAvg30d": 4.266
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1350,
      "ouatsu": 1590.155,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1456.7,
      "heikinAvg30d": 3.955
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1343,
      "ouatsu": 1651.025,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1450.3,
      "heikinAvg30d": 3.668
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1336,
      "ouatsu": 1610.261,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1442.1,
      "heikinAvg30d": 3.75
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1328,
      "ouatsu": 1635.733,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1433.5,
      "heikinAvg30d": 3.718
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
        "ouatsu": 152.658,
        "saikou": 2.09,
        "heikin": 1.1,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.322
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 118.658,
        "saikou": 4,
        "heikin": 1.08,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.308
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 194.268,
        "saikou": 1.01,
        "heikin": 0.93,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.113
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 143.708,
        "saikou": 1.01,
        "heikin": 0.92,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.36
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 168.058,
        "saikou": 9.8,
        "heikin": 1.9,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.248
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 170.008,
        "saikou": 6,
        "heikin": 1.66,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.357
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 158.608,
        "saikou": 6.65,
        "heikin": 1.65,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.697
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 202.168,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.967
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 160.558,
        "saikou": 4.35,
        "heikin": 1.2,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.344
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 202.168,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.024
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 173.968,
        "saikou": 5.85,
        "heikin": 1.79,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.253
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 175.958,
        "saikou": 9.85,
        "heikin": 2.2,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.85
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 158.658,
        "saikou": 8.25,
        "heikin": 2.66,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.309
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 202.218,
        "saikou": 8,
        "heikin": 1.23,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.952
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 190.708,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.775
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 190.708,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.87
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 233.848,
        "saikou": 1,
        "heikin": 0.74,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.504
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 201.798,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.95
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 118.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.685
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 116.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.74
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 159.848,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.607
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 116.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.833
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 159.83,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.866
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 197.88,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.72
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 152.75,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.598
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 199.848,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.605
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.113
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 190.708,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.467
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 233.848,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.343
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 221.798,
        "saikou": 1.01,
        "heikin": 0.98,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.43
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 158.658,
        "saikou": 8.85,
        "heikin": 1.86,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 3.288
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 156.708,
        "saikou": 8.85,
        "heikin": 2,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.848
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 199.848,
        "saikou": 4,
        "heikin": 1.03,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.743
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 158.658,
        "saikou": 8.85,
        "heikin": 1.65,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.926
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 176.798,
        "saikou": 1.16,
        "heikin": 1.09,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 3.441
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 134.83,
        "saikou": 1.56,
        "heikin": 1.36,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 3.654
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 89.74,
        "saikou": 4,
        "heikin": 1.46,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 3.56
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 116.708,
        "saikou": 4,
        "heikin": 1.13,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 3.233
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 159.848,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 3.234
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 116.708,
        "saikou": 4,
        "heikin": 1.13,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.708
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 159.848,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.763
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 156.708,
        "saikou": 4,
        "heikin": 1.17,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.918
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 205.008,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.666
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 205.008,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.344
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.129
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 156.708,
        "saikou": 8,
        "heikin": 1.66,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.776
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 206.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.628
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 205.008,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.348
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 36.539,
        "saikou": 10,
        "heikin": 9.91,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 8.233
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 36.539,
        "saikou": 10,
        "heikin": 9.91,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 8.471
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 64.991,
        "saikou": 10,
        "heikin": 9.12,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 9.394
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 64.991,
        "saikou": 10,
        "heikin": 9.12,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 9.308
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 62.993,
        "saikou": 10,
        "heikin": 9.11,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 9.265
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 62.993,
        "saikou": 10,
        "heikin": 9.11,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 9.27
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 77.991,
        "saikou": 10,
        "heikin": 9.03,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 9.209
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 79.491,
        "saikou": 10,
        "heikin": 8.64,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 9.188
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 8.56,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 9.167
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 8.6,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 9.056
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 8.57,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 8.958
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 9.131
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 8.89,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 9.426
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 91.99,
        "saikou": 10,
        "heikin": 9.16,
        "boshuAvg30d": 185.0,
        "heikinAvg30d": 9.822
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 115.49,
        "saikou": 10,
        "heikin": 8.7,
        "boshuAvg30d": 190.4,
        "heikinAvg30d": 10.07
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 113.99,
        "saikou": 10,
        "heikin": 8.69,
        "boshuAvg30d": 193.8,
        "heikinAvg30d": 10.022
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 115.49,
        "saikou": 10,
        "heikin": 8.71,
        "boshuAvg30d": 193.8,
        "heikinAvg30d": 10.04
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 113.99,
        "saikou": 10,
        "heikin": 8.7,
        "boshuAvg30d": 193.8,
        "heikinAvg30d": 9.817
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.73,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 9.068
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 9.162
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.73,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 9.007
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.71,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 9.086
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 9.046
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 114.14,
        "saikou": 10,
        "heikin": 8.73,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 9.24
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 111.725,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 9.207
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 113.69,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 9.162
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.7,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 8.663
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 8.738
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.7,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 9.47
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.68,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 9.513
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.7,
        "boshuAvg30d": 191.6,
        "heikinAvg30d": 9.537
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 191.6,
        "heikinAvg30d": 9.163
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 191.6,
        "heikinAvg30d": 8.923
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 115.986,
        "saikou": 10,
        "heikin": 7.42,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 8.358
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 95.486,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 7.865
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 93.986,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 8.126
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 184.4,
        "heikinAvg30d": 8.097
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 91.99,
        "saikou": 10,
        "heikin": 8.28,
        "boshuAvg30d": 184.4,
        "heikinAvg30d": 8.015
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 184.4,
        "heikinAvg30d": 8.16
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 8.31,
        "boshuAvg30d": 184.0,
        "heikinAvg30d": 8.407
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 8.31,
        "boshuAvg30d": 183.4,
        "heikinAvg30d": 8.604
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 8.38,
        "boshuAvg30d": 184.0,
        "heikinAvg30d": 8.842
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 79.56,
        "saikou": 10,
        "heikin": 9.1,
        "boshuAvg30d": 99.7,
        "heikinAvg30d": 8.661
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 79.56,
        "saikou": 10,
        "heikin": 9.1,
        "boshuAvg30d": 99.7,
        "heikinAvg30d": 8.813
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 99.7,
        "heikinAvg30d": 9.162
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 8.37,
        "boshuAvg30d": 98.7,
        "heikinAvg30d": 8.616
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 8.38,
        "boshuAvg30d": 97.7,
        "heikinAvg30d": 8.634
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 78.09,
        "saikou": 10,
        "heikin": 9.09,
        "boshuAvg30d": 96.7,
        "heikinAvg30d": 8.989
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 539,
        "ouatsu": 343.526,
        "saikou": 9.47,
        "heikin": 2.3,
        "boshuAvg30d": 544.8,
        "heikinAvg30d": 3.865
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 539,
        "ouatsu": 364.176,
        "saikou": 9.47,
        "heikin": 2.38,
        "boshuAvg30d": 544.8,
        "heikinAvg30d": 3.645
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 539,
        "ouatsu": 364.593,
        "saikou": 9.47,
        "heikin": 2.42,
        "boshuAvg30d": 544.8,
        "heikinAvg30d": 3.67
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 539,
        "ouatsu": 346.127,
        "saikou": 9.39,
        "heikin": 2.85,
        "boshuAvg30d": 544.2,
        "heikinAvg30d": 3.491
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 537,
        "ouatsu": 334.155,
        "saikou": 9.47,
        "heikin": 2.66,
        "boshuAvg30d": 542.2,
        "heikinAvg30d": 3.457
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 537,
        "ouatsu": 334.515,
        "saikou": 9.39,
        "heikin": 2.65,
        "boshuAvg30d": 542.2,
        "heikinAvg30d": 3.455
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 536,
        "ouatsu": 348.589,
        "saikou": 9.39,
        "heikin": 2.55,
        "boshuAvg30d": 540.6,
        "heikinAvg30d": 3.288
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 537,
        "ouatsu": 347.04,
        "saikou": 9.39,
        "heikin": 2.51,
        "boshuAvg30d": 541.6,
        "heikinAvg30d": 3.433
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 538,
        "ouatsu": 348.74,
        "saikou": 9.39,
        "heikin": 2.37,
        "boshuAvg30d": 542.6,
        "heikinAvg30d": 3.426
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 538,
        "ouatsu": 350.748,
        "saikou": 9.39,
        "heikin": 2.33,
        "boshuAvg30d": 543.2,
        "heikinAvg30d": 3.383
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 538,
        "ouatsu": 350.748,
        "saikou": 9.39,
        "heikin": 2.3,
        "boshuAvg30d": 543.2,
        "heikinAvg30d": 3.518
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 538,
        "ouatsu": 350.748,
        "saikou": 9.39,
        "heikin": 2.3,
        "boshuAvg30d": 543.2,
        "heikinAvg30d": 3.428
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 559,
        "ouatsu": 356.652,
        "saikou": 9.39,
        "heikin": 2.78,
        "boshuAvg30d": 564.2,
        "heikinAvg30d": 3.848
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 567,
        "ouatsu": 356.652,
        "saikou": 9.47,
        "heikin": 2.92,
        "boshuAvg30d": 572.2,
        "heikinAvg30d": 3.988
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 572,
        "ouatsu": 356.652,
        "saikou": 9.47,
        "heikin": 3,
        "boshuAvg30d": 578.4,
        "heikinAvg30d": 4.085
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 577,
        "ouatsu": 356.598,
        "saikou": 9.5,
        "heikin": 3.06,
        "boshuAvg30d": 583.3,
        "heikinAvg30d": 4.07
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 577,
        "ouatsu": 355.7,
        "saikou": 9.5,
        "heikin": 3.11,
        "boshuAvg30d": 583.3,
        "heikinAvg30d": 4.504
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 577,
        "ouatsu": 385.16,
        "saikou": 9.5,
        "heikin": 2.89,
        "boshuAvg30d": 583.3,
        "heikinAvg30d": 4.653
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 568,
        "ouatsu": 369.802,
        "saikou": 9.47,
        "heikin": 2.92,
        "boshuAvg30d": 576.7,
        "heikinAvg30d": 4.689
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 568,
        "ouatsu": 368.902,
        "saikou": 9.47,
        "heikin": 2.92,
        "boshuAvg30d": 576.7,
        "heikinAvg30d": 4.395
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 568,
        "ouatsu": 336.141,
        "saikou": 9.47,
        "heikin": 3.19,
        "boshuAvg30d": 576.2,
        "heikinAvg30d": 4.08
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 567,
        "ouatsu": 338.137,
        "saikou": 9.47,
        "heikin": 2.85,
        "boshuAvg30d": 575.2,
        "heikinAvg30d": 4.118
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 564,
        "ouatsu": 351.489,
        "saikou": 9.47,
        "heikin": 3.4,
        "boshuAvg30d": 572.2,
        "heikinAvg30d": 4.233
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 564,
        "ouatsu": 351.489,
        "saikou": 9.47,
        "heikin": 3.39,
        "boshuAvg30d": 572.2,
        "heikinAvg30d": 4.262
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 563,
        "ouatsu": 346.284,
        "saikou": 9.47,
        "heikin": 3.42,
        "boshuAvg30d": 571.2,
        "heikinAvg30d": 4.079
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 563,
        "ouatsu": 346.284,
        "saikou": 9.47,
        "heikin": 3.32,
        "boshuAvg30d": 571.2,
        "heikinAvg30d": 4.136
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 563,
        "ouatsu": 346.284,
        "saikou": 9.47,
        "heikin": 3.24,
        "boshuAvg30d": 568.7,
        "heikinAvg30d": 4.174
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 562,
        "ouatsu": 361.284,
        "saikou": 9.47,
        "heikin": 2.93,
        "boshuAvg30d": 567.7,
        "heikinAvg30d": 4.26
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 561,
        "ouatsu": 361.284,
        "saikou": 9.47,
        "heikin": 2.88,
        "boshuAvg30d": 567.3,
        "heikinAvg30d": 4.541
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 561,
        "ouatsu": 361.284,
        "saikou": 9.47,
        "heikin": 2.87,
        "boshuAvg30d": 567.3,
        "heikinAvg30d": 4.559
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 560,
        "ouatsu": 365.28,
        "saikou": 9.39,
        "heikin": 2.83,
        "boshuAvg30d": 566.3,
        "heikinAvg30d": 4.497
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 560,
        "ouatsu": 365.28,
        "saikou": 9.47,
        "heikin": 2.74,
        "boshuAvg30d": 566.3,
        "heikinAvg30d": 4.783
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 560,
        "ouatsu": 407.28,
        "saikou": 9.39,
        "heikin": 2.99,
        "boshuAvg30d": 565.8,
        "heikinAvg30d": 4.981
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 560,
        "ouatsu": 457.28,
        "saikou": 9.47,
        "heikin": 2.95,
        "boshuAvg30d": 565.8,
        "heikinAvg30d": 5.102
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 560,
        "ouatsu": 488.005,
        "saikou": 9.47,
        "heikin": 3.42,
        "boshuAvg30d": 565.8,
        "heikinAvg30d": 5.21
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 560,
        "ouatsu": 443.213,
        "saikou": 9.47,
        "heikin": 3.97,
        "boshuAvg30d": 565.8,
        "heikinAvg30d": 5.181
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 562,
        "ouatsu": 404.007,
        "saikou": 9.47,
        "heikin": 4.36,
        "boshuAvg30d": 568.4,
        "heikinAvg30d": 5.06
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 562,
        "ouatsu": 428.592,
        "saikou": 9.47,
        "heikin": 4.33,
        "boshuAvg30d": 567.8,
        "heikinAvg30d": 4.807
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 563,
        "ouatsu": 554.249,
        "saikou": 9.47,
        "heikin": 4.45,
        "boshuAvg30d": 568.2,
        "heikinAvg30d": 4.748
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 563,
        "ouatsu": 517.171,
        "saikou": 9.47,
        "heikin": 4.53,
        "boshuAvg30d": 568.2,
        "heikinAvg30d": 4.542
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 561,
        "ouatsu": 472.065,
        "saikou": 9.47,
        "heikin": 4.7,
        "boshuAvg30d": 566.8,
        "heikinAvg30d": 4.042
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 561,
        "ouatsu": 437.425,
        "saikou": 9.47,
        "heikin": 4.24,
        "boshuAvg30d": 566.8,
        "heikinAvg30d": 4.046
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 560,
        "ouatsu": 413.084,
        "saikou": 9.47,
        "heikin": 4.48,
        "boshuAvg30d": 566.4,
        "heikinAvg30d": 3.664
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 560,
        "ouatsu": 413.084,
        "saikou": 9.47,
        "heikin": 4.86,
        "boshuAvg30d": 566.4,
        "heikinAvg30d": 4.627
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 560,
        "ouatsu": 413.084,
        "saikou": 9.47,
        "heikin": 4.72,
        "boshuAvg30d": 566.4,
        "heikinAvg30d": 4.141
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 558,
        "ouatsu": 411.128,
        "saikou": 9.47,
        "heikin": 4.69,
        "boshuAvg30d": 564.4,
        "heikinAvg30d": 3.883
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 556,
        "ouatsu": 413.084,
        "saikou": 9.47,
        "heikin": 4.78,
        "boshuAvg30d": 561.8,
        "heikinAvg30d": 4.195
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 555,
        "ouatsu": 409.424,
        "saikou": 9.47,
        "heikin": 3.58,
        "boshuAvg30d": 560.2,
        "heikinAvg30d": 4.244
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 138.435,
        "saikou": 5.1,
        "heikin": 1.9,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.588
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 150.198,
        "saikou": 2.88,
        "heikin": 1.08,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.311
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 169.614,
        "saikou": 2.99,
        "heikin": 1.48,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.419
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 189.833,
        "saikou": 2.98,
        "heikin": 1.17,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.399
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 173.974,
        "saikou": 2.9,
        "heikin": 1.1,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.844
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 161.683,
        "saikou": 4.38,
        "heikin": 2.01,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.906
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 183.35,
        "saikou": 3.5,
        "heikin": 1.93,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.715
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 179.55,
        "saikou": 3.4,
        "heikin": 2.06,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.698
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 183.35,
        "saikou": 4.5,
        "heikin": 2.06,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.762
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 183.35,
        "saikou": 4.5,
        "heikin": 2.14,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.615
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 185.34,
        "saikou": 4.5,
        "heikin": 2.42,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.463
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 183.84,
        "saikou": 4.5,
        "heikin": 2.39,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.574
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 185.34,
        "saikou": 4.2,
        "heikin": 2.24,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 3.873
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 177.456,
        "saikou": 5.1,
        "heikin": 2.19,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 3.895
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 177.456,
        "saikou": 4.5,
        "heikin": 2.35,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 4.174
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 185.34,
        "saikou": 4.2,
        "heikin": 2.18,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 4.233
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 185.34,
        "saikou": 4.44,
        "heikin": 2.3,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 4.605
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 185.34,
        "saikou": 4.5,
        "heikin": 2.47,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 4.668
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 152.008,
        "saikou": 5.1,
        "heikin": 3.02,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 4.96
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 142.008,
        "saikou": 6.49,
        "heikin": 3.01,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 4.914
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 145.332,
        "saikou": 7.59,
        "heikin": 3.34,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 4.917
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 145.332,
        "saikou": 7.59,
        "heikin": 3.31,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 4.987
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 136.532,
        "saikou": 6.76,
        "heikin": 3.02,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.611
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 136.532,
        "saikou": 6.59,
        "heikin": 2.91,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.57
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 140.001,
        "saikou": 5.73,
        "heikin": 2.73,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 4.535
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 141.999,
        "saikou": 5.1,
        "heikin": 2.76,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 4.591
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 186.628,
        "saikou": 4.2,
        "heikin": 2.28,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 4.831
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 186.628,
        "saikou": 4.5,
        "heikin": 2.34,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 5.033
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 190.508,
        "saikou": 4.5,
        "heikin": 2.33,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 5.164
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 190.508,
        "saikou": 4.5,
        "heikin": 2.33,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 4.919
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 194.43,
        "saikou": 4.5,
        "heikin": 2.09,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 4.748
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 212.651,
        "saikou": 7.59,
        "heikin": 2.13,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 4.817
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 188.32,
        "saikou": 7.59,
        "heikin": 2.47,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 4.707
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 140.32,
        "saikou": 4.2,
        "heikin": 3.31,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 4.813
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 207.452,
        "saikou": 4.06,
        "heikin": 2.18,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 4.434
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 207.738,
        "saikou": 4.06,
        "heikin": 1.96,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 4.137
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 221.165,
        "saikou": 4.06,
        "heikin": 2.1,
        "boshuAvg30d": 161.6,
        "heikinAvg30d": 4.596
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 211.354,
        "saikou": 4.06,
        "heikin": 1.9,
        "boshuAvg30d": 161.6,
        "heikinAvg30d": 4.103
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 228.537,
        "saikou": 3.88,
        "heikin": 2,
        "boshuAvg30d": 161.6,
        "heikinAvg30d": 3.758
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 232.125,
        "saikou": 2.99,
        "heikin": 2.4,
        "boshuAvg30d": 161.6,
        "heikinAvg30d": 3.745
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 232.125,
        "saikou": 4,
        "heikin": 2.39,
        "boshuAvg30d": 161.6,
        "heikinAvg30d": 3.505
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 230.265,
        "saikou": 3,
        "heikin": 2.43,
        "boshuAvg30d": 161.6,
        "heikinAvg30d": 3.284
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 218.985,
        "saikou": 2.99,
        "heikin": 2.07,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 3.31
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 226.285,
        "saikou": 3.01,
        "heikin": 2.15,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 3.976
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 197.176,
        "saikou": 2.99,
        "heikin": 2.28,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 3.903
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 197.176,
        "saikou": 2.99,
        "heikin": 1.83,
        "boshuAvg30d": 161.6,
        "heikinAvg30d": 3.875
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 199.036,
        "saikou": 3.13,
        "heikin": 1.85,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 3.957
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 193.776,
        "saikou": 2.99,
        "heikin": 1.5,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 3.975
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.85,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.815
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.85,
        "heikin": 0.59,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.673
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.85,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.549
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 61.93,
        "saikou": 2.75,
        "heikin": 0.46,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.741
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.6,
        "heikin": 0.46,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.33
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.8,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.011
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.85,
        "heikin": 0.52,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.681
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.79,
        "heikin": 0.77,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.434
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.85,
        "heikin": 0.54,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.539
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.79,
        "heikin": 1.7,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.117
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 63.84,
        "saikou": 2.85,
        "heikin": 1.78,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.437
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.85,
        "heikin": 1.18,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.733
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 63.928,
        "saikou": 2,
        "heikin": 1.75,
        "boshuAvg30d": 56.4,
        "heikinAvg30d": 3.822
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 63.928,
        "saikou": 3.3,
        "heikin": 1.3,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.76
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 4.05,
        "heikin": 3.41,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 4.165
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.7,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.049
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 4.801
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 5.32,
        "heikin": 5.14,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 5.749
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.8,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.384
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.8,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.105
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.8,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.577
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.514
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.19,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.303
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.21,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.452
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 2.25,
        "heikin": 0.45,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.204
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 5.6,
        "heikin": 0.55,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.028
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.72,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.538
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 5.6,
        "heikin": 0.55,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.395
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.601
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.743
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 5.017
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 5.8,
        "heikin": 1.43,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 5.613
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 1.61,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.863
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.6,
        "heikin": 5.6,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.87
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.8,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.847
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.85,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.379
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.21,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.819
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.75,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.34
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.588
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.7,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.753
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 3.69,
        "heikin": 3.42,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.12
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.654
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.6,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.482
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.695
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.493
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 58.4,
        "heikinAvg30d": 3.77
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 3.713
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 63.928,
        "saikou": 2.5,
        "heikin": 0.56,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.412
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 31.075,
        "saikou": 3,
        "heikin": 2.85,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 1.943
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 157.679,
        "saikou": 2.9,
        "heikin": 1.43,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 2.294
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 138.951,
        "saikou": 2.97,
        "heikin": 1.8,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 2.182
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 109.102,
        "saikou": 2.97,
        "heikin": 2.06,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 2.207
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 89.469,
        "saikou": 2.95,
        "heikin": 2.45,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.241
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 89.469,
        "saikou": 3,
        "heikin": 2.48,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.393
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.5,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.269
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.53,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.49
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.51,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 2.014
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.52,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 2.061
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.53,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 2.331
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.52,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 2.068
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.52,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 4.024
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.54,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 3.993
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 104.624,
        "saikou": 3,
        "heikin": 2.43,
        "boshuAvg30d": 155.6,
        "heikinAvg30d": 3.781
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 3.64,
        "heikin": 2.54,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 4.069
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.54,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 4.869
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 103.221,
        "saikou": 5,
        "heikin": 3.11,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.283
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 5,
        "heikin": 3.22,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 5.047
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 6.95,
        "heikin": 3.66,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 5.103
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 6.97,
        "heikin": 3.8,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 5.025
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 6.95,
        "heikin": 3.82,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 4.931
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 6,
        "heikin": 3.67,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 4.823
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 6,
        "heikin": 3.5,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 4.747
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 6,
        "heikin": 3.33,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 5.666
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 99.78,
        "saikou": 6,
        "heikin": 3.3,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 4.654
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 6.45,
        "heikin": 3.28,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 4.714
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 101.778,
        "saikou": 6,
        "heikin": 3.31,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 4.899
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 119.918,
        "saikou": 5,
        "heikin": 2.79,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 4.775
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 5,
        "heikin": 3.18,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 4.439
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 4.95,
        "heikin": 2.86,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.161
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.29,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.212
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.25,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.149
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.25,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.486
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 5.97,
        "heikin": 3.42,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.13
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.14,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 4.045
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 3,
        "heikin": 2.37,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 4.024
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 3,
        "heikin": 2.37,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 3.815
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 103.221,
        "saikou": 3,
        "heikin": 2.39,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 3.855
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 103.221,
        "saikou": 3,
        "heikin": 2.53,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 3.708
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 103.221,
        "saikou": 3,
        "heikin": 2.53,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.342
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 103.221,
        "saikou": 3,
        "heikin": 2.46,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 3.482
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.97,
        "heikin": 2.39,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 3.211
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.53,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 3.354
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.97,
        "heikin": 2.5,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 3.098
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 142.907,
        "saikou": 3,
        "heikin": 1.8,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.22
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 124.077,
        "saikou": 3,
        "heikin": 2.01,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.526
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 94.121,
        "saikou": 2.97,
        "heikin": 2.52,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 4.342
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 155.483,
        "saikou": 3,
        "heikin": 1.34,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.077
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 155.483,
        "saikou": 2.9,
        "heikin": 1.38,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.341
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 155.483,
        "saikou": 2.9,
        "heikin": 1.03,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.29
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 159.273,
        "saikou": 2.91,
        "heikin": 0.91,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.111
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 159.512,
        "saikou": 2.9,
        "heikin": 0.92,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.086
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 63.234,
        "saikou": 4,
        "heikin": 1.65,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.17
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 80.093,
        "saikou": 4,
        "heikin": 2.14,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.211
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 80.093,
        "saikou": 4,
        "heikin": 2.14,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.27
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 80.093,
        "saikou": 4,
        "heikin": 2.16,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.211
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 80.093,
        "saikou": 4,
        "heikin": 2.14,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.336
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 80.093,
        "saikou": 3.75,
        "heikin": 2.1,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.605
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 80.093,
        "saikou": 4,
        "heikin": 2.12,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.512
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 80.093,
        "saikou": 4,
        "heikin": 2.14,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 3.8
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 80.093,
        "saikou": 4.03,
        "heikin": 2.16,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 3.277
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 80.093,
        "saikou": 4.84,
        "heikin": 2.18,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 3.093
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 80.093,
        "saikou": 3.49,
        "heikin": 1.9,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.975
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 68.165,
        "saikou": 3,
        "heikin": 1.71,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.973
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 68.165,
        "saikou": 4,
        "heikin": 2,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 4.039
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 80.093,
        "saikou": 4.17,
        "heikin": 2.17,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.784
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 80.093,
        "saikou": 5.1,
        "heikin": 2.57,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.37
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 80.093,
        "saikou": 5,
        "heikin": 2.64,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 3.15
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 80.093,
        "saikou": 5.46,
        "heikin": 2.65,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.118
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 80.093,
        "saikou": 5.34,
        "heikin": 2.65,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.076
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 80.093,
        "saikou": 5,
        "heikin": 2.34,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.063
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 80.093,
        "saikou": 5,
        "heikin": 2.55,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.314
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 80.093,
        "saikou": 5,
        "heikin": 2.55,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.209
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 80.093,
        "saikou": 5,
        "heikin": 2.56,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.867
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 80.093,
        "saikou": 5.05,
        "heikin": 2.57,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.333
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 80.093,
        "saikou": 4,
        "heikin": 2.05,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.504
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 80.093,
        "saikou": 4,
        "heikin": 2.05,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 4.001
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 80.093,
        "saikou": 4,
        "heikin": 1.81,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.796
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 80.093,
        "saikou": 6.97,
        "heikin": 2.55,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.015
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 80.093,
        "saikou": 6.97,
        "heikin": 2.63,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.124
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 203.264,
        "saikou": 5,
        "heikin": 2.06,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.876
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 193.264,
        "saikou": 5.96,
        "heikin": 2.1,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.59
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 188.264,
        "saikou": 5,
        "heikin": 2.45,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.527
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 212.562,
        "saikou": 7.03,
        "heikin": 4.12,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.836
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 212.323,
        "saikou": 6.78,
        "heikin": 3.99,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.893
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 212.323,
        "saikou": 6.78,
        "heikin": 4,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.582
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 214.313,
        "saikou": 6.78,
        "heikin": 3.96,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.147
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 214.313,
        "saikou": 6.52,
        "heikin": 3.86,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.845
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 214.313,
        "saikou": 6.62,
        "heikin": 3.8,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 6.091
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 214.313,
        "saikou": 5.98,
        "heikin": 3.5,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 5.387
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 214.313,
        "saikou": 5.86,
        "heikin": 3.39,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 4.995
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 188.859,
        "saikou": 5.5,
        "heikin": 3.68,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 4.344
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 176.132,
        "saikou": 3.62,
        "heikin": 2.77,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 3.947
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 176.132,
        "saikou": 3.36,
        "heikin": 2.39,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.876
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 174.332,
        "saikou": 1.82,
        "heikin": 1.29,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 3.038
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.763
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.797
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.8
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.765
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.734
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 39.4,
        "heikinAvg30d": 0.749
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.908
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 199.86,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.887
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.894
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.916
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.917
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.896
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.88
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.856
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.903
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.785
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.762
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.805
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 1,
        "boshuAvg30d": 46.4,
        "heikinAvg30d": 1.027
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 46.4,
        "heikinAvg30d": 1.036
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.991
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 1.06,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.002
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 1,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.038
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.059
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 124.903,
        "saikou": 1.6,
        "heikin": 1.4,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.094
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 124.903,
        "saikou": 1.6,
        "heikin": 1.23,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.021
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.947
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.4,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.902
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.27,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.928
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.27,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.84
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.27,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.915
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.38,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.916
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 168.403,
        "saikou": 1.6,
        "heikin": 1.15,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.922
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.855
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.848
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 1.01,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.839
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 1.01,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.813
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.82
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.852
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.846
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.819
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.693
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.729
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.703
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 221.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.673
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 202.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.698
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 225.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.743
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 167.84,
        "saikou": 4,
        "heikin": 2.13,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 4.199
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 171.457,
        "saikou": 2.9,
        "heikin": 1.86,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 4.034
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 184.157,
        "saikou": 3,
        "heikin": 1.32,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 3.852
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 184.155,
        "saikou": 3,
        "heikin": 2.55,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 4.011
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 181.177,
        "saikou": 3,
        "heikin": 2.53,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.881
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 186.155,
        "saikou": 3.09,
        "heikin": 2.82,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.917
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 203.415,
        "saikou": 3.1,
        "heikin": 2.81,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.894
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 199.587,
        "saikou": 3.7,
        "heikin": 3.22,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.954
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 203.415,
        "saikou": 3.7,
        "heikin": 3.21,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 3.947
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 203.415,
        "saikou": 4.54,
        "heikin": 3.74,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 3.988
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 200.115,
        "saikou": 4.89,
        "heikin": 3.99,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 3.996
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 200.115,
        "saikou": 4.53,
        "heikin": 3.73,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 3.755
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 200.115,
        "saikou": 3.55,
        "heikin": 3.09,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 3.617
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 196.263,
        "saikou": 3,
        "heikin": 2.42,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 3.559
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 246.263,
        "saikou": 3,
        "heikin": 2.1,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 3.758
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 300.115,
        "saikou": 3,
        "heikin": 1.64,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 3.76
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 300.115,
        "saikou": 3,
        "heikin": 1.63,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 3.987
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 266.115,
        "saikou": 3,
        "heikin": 1.63,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 4.823
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 266.151,
        "saikou": 3,
        "heikin": 1.47,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 4.731
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 266.151,
        "saikou": 3,
        "heikin": 1.3,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 4.684
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 262.668,
        "saikou": 3.5,
        "heikin": 1.27,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 4.557
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 250.724,
        "saikou": 4.5,
        "heikin": 1.88,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 4.595
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 250.724,
        "saikou": 4.7,
        "heikin": 1.28,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 4.599
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 248.726,
        "saikou": 4.52,
        "heikin": 1.28,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 4.719
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 250.709,
        "saikou": 4.4,
        "heikin": 1.24,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 4.106
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 250.709,
        "saikou": 4.4,
        "heikin": 1.36,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 4.265
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 252.707,
        "saikou": 4.4,
        "heikin": 1.42,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 4.71
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 248.855,
        "saikou": 4.74,
        "heikin": 1.8,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 5.338
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 286.303,
        "saikou": 4.2,
        "heikin": 1.31,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 5.97
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 304.049,
        "saikou": 4.19,
        "heikin": 1.47,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 6.586
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 299.073,
        "saikou": 3.9,
        "heikin": 1.53,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.196
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 199.073,
        "saikou": 4.4,
        "heikin": 2.5,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 7.085
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 202.073,
        "saikou": 4.19,
        "heikin": 2.75,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 7.16
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 345.073,
        "saikou": 6.04,
        "heikin": 4.05,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 7.501
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 280.123,
        "saikou": 6.92,
        "heikin": 4.67,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 7.126
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 280.123,
        "saikou": 7.03,
        "heikin": 4.6,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 7.343
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 317.282,
        "saikou": 4.88,
        "heikin": 4.44,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 7.52
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 319.282,
        "saikou": 4.74,
        "heikin": 4.34,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 7.253
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 291.284,
        "saikou": 7.18,
        "heikin": 4.54,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.566
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 352.773,
        "saikou": 4.26,
        "heikin": 3.88,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.958
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 285.049,
        "saikou": 6.92,
        "heikin": 4.4,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.243
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 265.049,
        "saikou": 6.52,
        "heikin": 4.38,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.448
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 260.153,
        "saikou": 6.22,
        "heikin": 4.24,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.015
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 261.153,
        "saikou": 6.25,
        "heikin": 4.25,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 5.038
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 261.153,
        "saikou": 5.74,
        "heikin": 3.9,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 4.728
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 260.153,
        "saikou": 3.6,
        "heikin": 2.36,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.032
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 203.153,
        "saikou": 3.19,
        "heikin": 2.86,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 3.977
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 191.651,
        "saikou": 3,
        "heikin": 2.2,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 3.416
      }
    ]
  }
};
