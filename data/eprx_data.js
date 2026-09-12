// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/13〜2026/09/11）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-12",
  "fetchedAt": "2026-09-12",
  "avgWindowLabel": "過去30日平均（2026/08/13〜2026/09/11）",
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
      "ouatsu": 1539.319,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1444.1,
      "heikinAvg30d": 3.278
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1362,
      "ouatsu": 1676.725,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1444.1,
      "heikinAvg30d": 3.228
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1362,
      "ouatsu": 1574.151,
      "saikou": 10,
      "heikin": 2.38,
      "boshuAvg30d": 1444.1,
      "heikinAvg30d": 3.306
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1362,
      "ouatsu": 1587.046,
      "saikou": 10,
      "heikin": 2.41,
      "boshuAvg30d": 1442.8,
      "heikinAvg30d": 3.299
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1357,
      "ouatsu": 1512.031,
      "saikou": 10,
      "heikin": 2.58,
      "boshuAvg30d": 1437.8,
      "heikinAvg30d": 3.299
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1356,
      "ouatsu": 1470.809,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1436.2,
      "heikinAvg30d": 3.366
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1356,
      "ouatsu": 1520.459,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1455.0,
      "heikinAvg30d": 3.36
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1357,
      "ouatsu": 1493.739,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1456.0,
      "heikinAvg30d": 3.439
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1360,
      "ouatsu": 1492.287,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1459.6,
      "heikinAvg30d": 3.443
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1360,
      "ouatsu": 1570.067,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1460.2,
      "heikinAvg30d": 3.399
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1360,
      "ouatsu": 1503.551,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1460.2,
      "heikinAvg30d": 3.509
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1360,
      "ouatsu": 1436.738,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1460.2,
      "heikinAvg30d": 3.405
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1426,
      "ouatsu": 1416.735,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1524.3,
      "heikinAvg30d": 3.861
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1447,
      "ouatsu": 1459.527,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1546.6,
      "heikinAvg30d": 3.89
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1470,
      "ouatsu": 1547.691,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1569.6,
      "heikinAvg30d": 3.925
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1488,
      "ouatsu": 1582.87,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1585.5,
      "heikinAvg30d": 3.924
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1489,
      "ouatsu": 1618.463,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1585.9,
      "heikinAvg30d": 4.183
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1489,
      "ouatsu": 1575.657,
      "saikou": 10,
      "heikin": 3.5,
      "boshuAvg30d": 1585.9,
      "heikinAvg30d": 4.467
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1516,
      "ouatsu": 1523.178,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1547.4,
      "heikinAvg30d": 4.415
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1520,
      "ouatsu": 1515.031,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1552.0,
      "heikinAvg30d": 4.249
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1528,
      "ouatsu": 1515.297,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1559.0,
      "heikinAvg30d": 4.07
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1528,
      "ouatsu": 1562.853,
      "saikou": 10,
      "heikin": 3.5,
      "boshuAvg30d": 1559.0,
      "heikinAvg30d": 4.104
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1525,
      "ouatsu": 1575.981,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1554.7,
      "heikinAvg30d": 4.083
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1524,
      "ouatsu": 1637.564,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1554.3,
      "heikinAvg30d": 4.115
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1517,
      "ouatsu": 1582.627,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1549.2,
      "heikinAvg30d": 3.899
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1517,
      "ouatsu": 1531.085,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1549.2,
      "heikinAvg30d": 3.898
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1427,
      "ouatsu": 1566.964,
      "saikou": 10,
      "heikin": 3.69,
      "boshuAvg30d": 1549.7,
      "heikinAvg30d": 4.118
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1421,
      "ouatsu": 1570.86,
      "saikou": 10,
      "heikin": 3.54,
      "boshuAvg30d": 1543.7,
      "heikinAvg30d": 4.375
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1416,
      "ouatsu": 1588.674,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1540.6,
      "heikinAvg30d": 4.619
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1409,
      "ouatsu": 1620.558,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1535.5,
      "heikinAvg30d": 4.707
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1466,
      "ouatsu": 1572.366,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1567.9,
      "heikinAvg30d": 4.66
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1466,
      "ouatsu": 1517.753,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1567.9,
      "heikinAvg30d": 4.988
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1466,
      "ouatsu": 1645.334,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1568.1,
      "heikinAvg30d": 5.038
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1464,
      "ouatsu": 1469.153,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1564.2,
      "heikinAvg30d": 5.273
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1460,
      "ouatsu": 1516.109,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1561.5,
      "heikinAvg30d": 5.28
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1456,
      "ouatsu": 1649.784,
      "saikou": 10,
      "heikin": 3.01,
      "boshuAvg30d": 1557.5,
      "heikinAvg30d": 5.238
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1448,
      "ouatsu": 1758.033,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1548.9,
      "heikinAvg30d": 5.323
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1448,
      "ouatsu": 1848.442,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1548.2,
      "heikinAvg30d": 5.114
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1449,
      "ouatsu": 1978.487,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1548.6,
      "heikinAvg30d": 4.91
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1448,
      "ouatsu": 1817.136,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1548.2,
      "heikinAvg30d": 4.647
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1443,
      "ouatsu": 1785.224,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1543.2,
      "heikinAvg30d": 4.309
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1439,
      "ouatsu": 1687.851,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1541.1,
      "heikinAvg30d": 4.036
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1346,
      "ouatsu": 1648.729,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1453.2,
      "heikinAvg30d": 3.685
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1349,
      "ouatsu": 1646.395,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1456.2,
      "heikinAvg30d": 4.313
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1350,
      "ouatsu": 1673.251,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1457.2,
      "heikinAvg30d": 3.987
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1343,
      "ouatsu": 1693.651,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1450.9,
      "heikinAvg30d": 3.705
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1336,
      "ouatsu": 1741.454,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1442.6,
      "heikinAvg30d": 3.789
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1328,
      "ouatsu": 1673.164,
      "saikou": 10,
      "heikin": 2.67,
      "boshuAvg30d": 1434.0,
      "heikinAvg30d": 3.769
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
        "ouatsu": 116.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.34
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 159.21,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.322
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 116.708,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.12
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 159.228,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.369
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 158.658,
        "saikou": 9.9,
        "heikin": 1.83,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.22
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 201.178,
        "saikou": 6.4,
        "heikin": 1.61,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.342
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 158.608,
        "saikou": 6.65,
        "heikin": 1.17,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.733
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 201.128,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.991
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 160.558,
        "saikou": 4.35,
        "heikin": 1.2,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.364
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 201.128,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.055
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 160.558,
        "saikou": 5.95,
        "heikin": 1.37,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.271
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 160.558,
        "saikou": 9.95,
        "heikin": 1.31,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.864
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 192.658,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.401
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 240.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.019
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 190.708,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.83
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.926
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 201.038,
        "saikou": 1,
        "heikin": 1,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.551
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 202.988,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.087
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 158.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.794
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.817
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 161.06,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.67
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 163.01,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.902
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 118.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.923
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 163.028,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.793
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 154.718,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.657
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 158.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.662
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 204.978,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.162
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 203.028,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.485
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 190.708,
        "saikou": 1.01,
        "heikin": 0.73,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.435
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 238.978,
        "saikou": 1,
        "heikin": 0.72,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.525
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 192.658,
        "saikou": 1.01,
        "heikin": 0.67,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 3.428
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.917
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 227.408,
        "saikou": 1.01,
        "heikin": 0.98,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.773
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 201.868,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.956
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 131.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 3.484
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 132.91,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 3.681
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 91.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 3.587
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 116.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 3.275
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 159.918,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 3.264
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.742
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 199.918,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.783
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 156.708,
        "saikou": 4,
        "heikin": 1.07,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.932
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 199.918,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.678
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 156.708,
        "saikou": 8,
        "heikin": 1.34,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.35
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 199.918,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.146
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 156.708,
        "saikou": 8,
        "heikin": 1.41,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.77
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 201.868,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.642
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 199.918,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.378
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 57.379,
        "saikou": 10,
        "heikin": 9.1,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 8.185
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 59.309,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 8.426
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 75.191,
        "saikou": 10,
        "heikin": 9.24,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 9.416
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 75.191,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 9.333
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 73.193,
        "saikou": 10,
        "heikin": 9.25,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 9.286
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 73.193,
        "saikou": 10,
        "heikin": 9.26,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 9.29
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 89.991,
        "saikou": 10,
        "heikin": 9.22,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 9.24
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 91.491,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 9.2
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 9.24,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 9.18
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 9.22,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 9.05
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 8.951
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 9.22,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 9.124
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 9.25,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 9.461
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 91.99,
        "saikou": 10,
        "heikin": 9.3,
        "boshuAvg30d": 184.8,
        "heikinAvg30d": 9.858
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 82.82,
        "saikou": 10,
        "heikin": 9.65,
        "boshuAvg30d": 190.2,
        "heikinAvg30d": 10.096
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 91.99,
        "saikou": 10,
        "heikin": 9.3,
        "boshuAvg30d": 193.6,
        "heikinAvg30d": 10.057
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 113.525,
        "saikou": 10,
        "heikin": 8.78,
        "boshuAvg30d": 193.6,
        "heikinAvg30d": 10.116
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 113.99,
        "saikou": 10,
        "heikin": 8.77,
        "boshuAvg30d": 193.6,
        "heikinAvg30d": 9.882
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.58,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 9.15
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.44,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 9.25
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 9.1
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.43,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 9.191
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.52,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 9.135
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 8.68,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 9.32
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 111.76,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 9.301
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 111.76,
        "saikou": 10,
        "heikin": 8.69,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 9.255
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.8,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 8.739
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 8.813
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.49,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 9.543
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.14,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 9.566
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 95.486,
        "saikou": 10,
        "heikin": 9.32,
        "boshuAvg30d": 191.5,
        "heikinAvg30d": 9.579
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 95.486,
        "saikou": 10,
        "heikin": 9.32,
        "boshuAvg30d": 191.5,
        "heikinAvg30d": 9.197
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 95.486,
        "saikou": 10,
        "heikin": 9.32,
        "boshuAvg30d": 191.5,
        "heikinAvg30d": 8.949
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 93.986,
        "saikou": 10,
        "heikin": 8.37,
        "boshuAvg30d": 189.8,
        "heikinAvg30d": 8.41
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 95.486,
        "saikou": 10,
        "heikin": 8.3,
        "boshuAvg30d": 187.8,
        "heikinAvg30d": 7.882
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 93.986,
        "saikou": 10,
        "heikin": 8.37,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 8.132
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 8.24,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 8.121
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 91.99,
        "saikou": 10,
        "heikin": 8.24,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 8.032
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 8.178
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 183.8,
        "heikinAvg30d": 8.428
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 8.44,
        "boshuAvg30d": 183.2,
        "heikinAvg30d": 8.624
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 93.49,
        "saikou": 10,
        "heikin": 8.5,
        "boshuAvg30d": 183.8,
        "heikinAvg30d": 8.865
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 91.56,
        "saikou": 10,
        "heikin": 8.92,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 8.706
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 91.56,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 8.862
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 91.56,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 9.144
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 91.59,
        "saikou": 10,
        "heikin": 9.09,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 8.602
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 91.59,
        "saikou": 10,
        "heikin": 9.12,
        "boshuAvg30d": 97.6,
        "heikinAvg30d": 8.623
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 91.99,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 96.6,
        "heikinAvg30d": 8.963
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 539,
        "ouatsu": 528.059,
        "saikou": 9.4,
        "heikin": 2.89,
        "boshuAvg30d": 545.6,
        "heikinAvg30d": 3.883
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 539,
        "ouatsu": 535.378,
        "saikou": 9.4,
        "heikin": 3.41,
        "boshuAvg30d": 545.6,
        "heikinAvg30d": 3.639
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 539,
        "ouatsu": 429.256,
        "saikou": 9.4,
        "heikin": 2.96,
        "boshuAvg30d": 545.6,
        "heikinAvg30d": 3.682
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 539,
        "ouatsu": 416.105,
        "saikou": 9.4,
        "heikin": 3.09,
        "boshuAvg30d": 544.9,
        "heikinAvg30d": 3.499
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 537,
        "ouatsu": 406.083,
        "saikou": 9.4,
        "heikin": 3.11,
        "boshuAvg30d": 542.9,
        "heikinAvg30d": 3.46
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 537,
        "ouatsu": 406.083,
        "saikou": 9.4,
        "heikin": 3.12,
        "boshuAvg30d": 542.9,
        "heikinAvg30d": 3.458
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 536,
        "ouatsu": 418.055,
        "saikou": 9.4,
        "heikin": 3.13,
        "boshuAvg30d": 541.3,
        "heikinAvg30d": 3.287
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 537,
        "ouatsu": 414.615,
        "saikou": 9.4,
        "heikin": 3.16,
        "boshuAvg30d": 542.3,
        "heikinAvg30d": 3.424
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 538,
        "ouatsu": 418.087,
        "saikou": 9.4,
        "heikin": 3.23,
        "boshuAvg30d": 543.3,
        "heikinAvg30d": 3.417
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 538,
        "ouatsu": 421.857,
        "saikou": 9.4,
        "heikin": 3.21,
        "boshuAvg30d": 543.9,
        "heikinAvg30d": 3.387
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 538,
        "ouatsu": 421.857,
        "saikou": 9.4,
        "heikin": 3.16,
        "boshuAvg30d": 543.9,
        "heikinAvg30d": 3.553
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 538,
        "ouatsu": 387.257,
        "saikou": 9.4,
        "heikin": 2.88,
        "boshuAvg30d": 543.9,
        "heikinAvg30d": 3.466
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 559,
        "ouatsu": 358.442,
        "saikou": 9.4,
        "heikin": 2.87,
        "boshuAvg30d": 564.9,
        "heikinAvg30d": 3.891
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 567,
        "ouatsu": 358.442,
        "saikou": 9.4,
        "heikin": 3.03,
        "boshuAvg30d": 572.9,
        "heikinAvg30d": 4.037
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 572,
        "ouatsu": 464.542,
        "saikou": 10,
        "heikin": 4.73,
        "boshuAvg30d": 579.2,
        "heikinAvg30d": 4.08
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 577,
        "ouatsu": 464.542,
        "saikou": 10,
        "heikin": 4.81,
        "boshuAvg30d": 584.0,
        "heikinAvg30d": 4.063
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 577,
        "ouatsu": 494.542,
        "saikou": 10,
        "heikin": 5.1,
        "boshuAvg30d": 584.0,
        "heikinAvg30d": 4.488
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 577,
        "ouatsu": 494.542,
        "saikou": 9.5,
        "heikin": 4.33,
        "boshuAvg30d": 584.0,
        "heikinAvg30d": 4.662
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 658,
        "ouatsu": 479.542,
        "saikou": 9.52,
        "heikin": 4.39,
        "boshuAvg30d": 574.4,
        "heikinAvg30d": 4.697
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 658,
        "ouatsu": 479.308,
        "saikou": 10,
        "heikin": 4.5,
        "boshuAvg30d": 574.4,
        "heikinAvg30d": 4.399
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 658,
        "ouatsu": 463.677,
        "saikou": 10,
        "heikin": 4.45,
        "boshuAvg30d": 573.9,
        "heikinAvg30d": 4.078
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 657,
        "ouatsu": 463.317,
        "saikou": 10,
        "heikin": 4.48,
        "boshuAvg30d": 572.9,
        "heikinAvg30d": 4.109
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 654,
        "ouatsu": 474.145,
        "saikou": 9.4,
        "heikin": 4.15,
        "boshuAvg30d": 569.9,
        "heikinAvg30d": 4.245
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 654,
        "ouatsu": 474.145,
        "saikou": 9.4,
        "heikin": 3.94,
        "boshuAvg30d": 569.9,
        "heikinAvg30d": 4.27
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 653,
        "ouatsu": 468.94,
        "saikou": 10,
        "heikin": 4.51,
        "boshuAvg30d": 568.9,
        "heikinAvg30d": 4.086
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 653,
        "ouatsu": 468.76,
        "saikou": 10,
        "heikin": 4.53,
        "boshuAvg30d": 568.9,
        "heikinAvg30d": 4.142
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 563,
        "ouatsu": 468.58,
        "saikou": 10,
        "heikin": 4.6,
        "boshuAvg30d": 569.4,
        "heikinAvg30d": 4.165
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 562,
        "ouatsu": 483.58,
        "saikou": 9.4,
        "heikin": 4.2,
        "boshuAvg30d": 568.4,
        "heikinAvg30d": 4.276
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 561,
        "ouatsu": 483.4,
        "saikou": 9.4,
        "heikin": 4.08,
        "boshuAvg30d": 568.0,
        "heikinAvg30d": 4.55
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 561,
        "ouatsu": 483.4,
        "saikou": 9.4,
        "heikin": 4.12,
        "boshuAvg30d": 568.0,
        "heikinAvg30d": 4.565
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 560,
        "ouatsu": 487.396,
        "saikou": 9.4,
        "heikin": 4.09,
        "boshuAvg30d": 567.0,
        "heikinAvg30d": 4.518
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 560,
        "ouatsu": 487.936,
        "saikou": 9.4,
        "heikin": 3.57,
        "boshuAvg30d": 567.0,
        "heikinAvg30d": 4.829
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 560,
        "ouatsu": 488.294,
        "saikou": 9.4,
        "heikin": 2.82,
        "boshuAvg30d": 566.6,
        "heikinAvg30d": 5.061
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 560,
        "ouatsu": 488.116,
        "saikou": 9.4,
        "heikin": 3.32,
        "boshuAvg30d": 566.6,
        "heikinAvg30d": 5.16
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 560,
        "ouatsu": 487.936,
        "saikou": 9.4,
        "heikin": 3.42,
        "boshuAvg30d": 566.6,
        "heikinAvg30d": 5.252
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 560,
        "ouatsu": 486.086,
        "saikou": 9.4,
        "heikin": 3.29,
        "boshuAvg30d": 566.6,
        "heikinAvg30d": 5.228
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 562,
        "ouatsu": 532.842,
        "saikou": 9.4,
        "heikin": 3.17,
        "boshuAvg30d": 569.2,
        "heikinAvg30d": 5.12
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 562,
        "ouatsu": 582.842,
        "saikou": 9.4,
        "heikin": 2.97,
        "boshuAvg30d": 568.6,
        "heikinAvg30d": 4.862
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 563,
        "ouatsu": 583.022,
        "saikou": 9.4,
        "heikin": 3.03,
        "boshuAvg30d": 568.9,
        "heikinAvg30d": 4.816
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 563,
        "ouatsu": 491.202,
        "saikou": 9.4,
        "heikin": 3.27,
        "boshuAvg30d": 568.9,
        "heikinAvg30d": 4.587
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 561,
        "ouatsu": 489.342,
        "saikou": 9.4,
        "heikin": 3.22,
        "boshuAvg30d": 567.6,
        "heikinAvg30d": 4.077
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 561,
        "ouatsu": 483.879,
        "saikou": 9.4,
        "heikin": 3.21,
        "boshuAvg30d": 567.6,
        "heikinAvg30d": 4.078
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 560,
        "ouatsu": 474.262,
        "saikou": 9.4,
        "heikin": 3,
        "boshuAvg30d": 567.2,
        "heikinAvg30d": 3.698
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 560,
        "ouatsu": 485.476,
        "saikou": 9.4,
        "heikin": 3.06,
        "boshuAvg30d": 567.2,
        "heikinAvg30d": 4.693
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 560,
        "ouatsu": 485.476,
        "saikou": 9.4,
        "heikin": 3.03,
        "boshuAvg30d": 567.2,
        "heikinAvg30d": 4.209
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 558,
        "ouatsu": 481.57,
        "saikou": 9.4,
        "heikin": 3.02,
        "boshuAvg30d": 565.2,
        "heikinAvg30d": 3.93
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 556,
        "ouatsu": 485.656,
        "saikou": 9.4,
        "heikin": 3.06,
        "boshuAvg30d": 562.6,
        "heikinAvg30d": 4.238
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 555,
        "ouatsu": 485.656,
        "saikou": 9.4,
        "heikin": 3.71,
        "boshuAvg30d": 560.9,
        "heikinAvg30d": 4.251
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 151.272,
        "saikou": 2.99,
        "heikin": 1.34,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 3.823
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 161.135,
        "saikou": 2.88,
        "heikin": 0.84,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 3.582
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 180.551,
        "saikou": 2.9,
        "heikin": 0.94,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 3.688
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 182.411,
        "saikou": 2.99,
        "heikin": 1.23,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 3.665
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 168.452,
        "saikou": 2.99,
        "heikin": 1.33,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 4.1
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 174.382,
        "saikou": 4.38,
        "heikin": 1.92,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 4.152
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 196.049,
        "saikou": 3.83,
        "heikin": 1.8,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 3.88
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 190.321,
        "saikou": 3.4,
        "heikin": 1.79,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 3.867
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 194.121,
        "saikou": 4.5,
        "heikin": 1.83,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 4.006
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 194.121,
        "saikou": 3,
        "heikin": 1.71,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 3.859
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 195.505,
        "saikou": 4.5,
        "heikin": 1.81,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 3.706
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 185.732,
        "saikou": 4.5,
        "heikin": 1.93,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 3.824
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 187.232,
        "saikou": 4.2,
        "heikin": 2.01,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.133
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 179.348,
        "saikou": 4.19,
        "heikin": 2.08,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 4.163
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 179.348,
        "saikou": 4.5,
        "heikin": 2.32,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 4.438
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 187.232,
        "saikou": 2.99,
        "heikin": 1.17,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.527
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 207.443,
        "saikou": 4.5,
        "heikin": 2.21,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.866
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 189.222,
        "saikou": 4.5,
        "heikin": 2.47,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.917
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 155.965,
        "saikou": 5.1,
        "heikin": 3.05,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.19
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 153.99,
        "saikou": 5.97,
        "heikin": 3.08,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.146
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 157.314,
        "saikou": 7.59,
        "heikin": 3.39,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.13
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 157.314,
        "saikou": 7.59,
        "heikin": 3.43,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.199
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 153.924,
        "saikou": 5.66,
        "heikin": 3.07,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.831
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 146.624,
        "saikou": 5.52,
        "heikin": 2.92,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.793
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 157.293,
        "saikou": 5.1,
        "heikin": 2.83,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 4.76
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 151.991,
        "saikou": 5.1,
        "heikin": 2.86,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 4.813
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 196.62,
        "saikou": 7.59,
        "heikin": 2.65,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 5.06
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 189.32,
        "saikou": 4.5,
        "heikin": 2.48,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 5.264
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 198.52,
        "saikou": 7.59,
        "heikin": 2.71,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 5.342
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 177.437,
        "saikou": 7.59,
        "heikin": 3.08,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 5.139
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 169.553,
        "saikou": 7.59,
        "heikin": 2.96,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 4.982
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 187.774,
        "saikou": 7.59,
        "heikin": 2.63,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 5.007
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 189.573,
        "saikou": 7.59,
        "heikin": 2.73,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 4.884
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 146.334,
        "saikou": 7.59,
        "heikin": 3.81,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 4.971
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 207.098,
        "saikou": 6.04,
        "heikin": 4.24,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 4.533
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 242.903,
        "saikou": 4.2,
        "heikin": 2.63,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 4.221
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 252.611,
        "saikou": 3,
        "heikin": 1.51,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 4.715
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 272.888,
        "saikou": 3,
        "heikin": 1.46,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 4.227
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 288.081,
        "saikou": 2.9,
        "heikin": 1.01,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 3.89
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 280.781,
        "saikou": 2.97,
        "heikin": 1.78,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 3.843
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 241.743,
        "saikou": 3,
        "heikin": 2.12,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 3.602
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 249.043,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 3.388
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 245.193,
        "saikou": 7.59,
        "heikin": 3.13,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 3.392
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 237.893,
        "saikou": 7.08,
        "heikin": 2.91,
        "boshuAvg30d": 162.3,
        "heikinAvg30d": 4.054
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 237.893,
        "saikou": 6.85,
        "heikin": 3.08,
        "boshuAvg30d": 162.3,
        "heikinAvg30d": 3.921
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 237.893,
        "saikou": 3.13,
        "heikin": 1.83,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 3.971
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 237.893,
        "saikou": 2.99,
        "heikin": 1.79,
        "boshuAvg30d": 160.3,
        "heikinAvg30d": 4.055
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 218.211,
        "saikou": 2.9,
        "heikin": 1.12,
        "boshuAvg30d": 157.9,
        "heikinAvg30d": 4.204
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 57.166,
        "saikou": 2.65,
        "heikin": 0.71,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.85
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.65,
        "heikin": 0.73,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.699
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.65,
        "heikin": 0.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.559
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 61.93,
        "saikou": 2.55,
        "heikin": 0.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.755
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.95,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.344
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 62.264,
        "saikou": 2.6,
        "heikin": 0.71,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.021
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 47.322,
        "saikou": 2.65,
        "heikin": 0.74,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.688
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 38.342,
        "saikou": 2.79,
        "heikin": 1.3,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.423
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 41.818,
        "saikou": 2.65,
        "heikin": 1.32,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.519
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 31.258,
        "saikou": 2.79,
        "heikin": 1.54,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.088
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.32,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.406
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 39.788,
        "saikou": 2.65,
        "heikin": 1.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.711
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 49,
        "saikou": 2,
        "heikin": 1.25,
        "boshuAvg30d": 56.4,
        "heikinAvg30d": 3.811
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 56.728,
        "saikou": 3.1,
        "heikin": 0.62,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.775
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 63.928,
        "saikou": 3.85,
        "heikin": 0.57,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 4.182
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 63.928,
        "saikou": 2.8,
        "heikin": 0.47,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.067
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 63.928,
        "saikou": 5.5,
        "heikin": 0.69,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 4.811
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 63.928,
        "saikou": 5.32,
        "heikin": 0.66,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 5.761
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.68,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.393
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.68,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.121
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.68,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.589
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6.96,
        "heikin": 0.71,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.526
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 4.15,
        "heikin": 0.51,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.32
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 4.2,
        "heikin": 0.51,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.468
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 2.05,
        "heikin": 0.44,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.22
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.66,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.041
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.68,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.551
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.68,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.426
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 1.15,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.603
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 57.936,
        "saikou": 6,
        "heikin": 1.21,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.746
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 5.5,
        "heikin": 0.69,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 5.08
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 28.928,
        "saikou": 5.8,
        "heikin": 1.09,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 5.668
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 45.468,
        "saikou": 6,
        "heikin": 1.5,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.129
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.02,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.046
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.78,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.954
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.85,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.544
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.109
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.34
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.588
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.75,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.008
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.34
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.888
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 3.65,
        "heikin": 3.12,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.678
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.814
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.59
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 3.05,
        "heikin": 2.72,
        "boshuAvg30d": 58.4,
        "heikinAvg30d": 3.851
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 3.806
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 62.792,
        "saikou": 2.5,
        "heikin": 0.76,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.7
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 78.5,
        "saikou": 2.9,
        "heikin": 2.43,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 1.998
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 158.972,
        "saikou": 2.9,
        "heikin": 1.37,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 2.364
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 152.026,
        "saikou": 2.97,
        "heikin": 1.7,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 2.219
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 131.902,
        "saikou": 2.97,
        "heikin": 1.79,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 2.237
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 109.083,
        "saikou": 2.95,
        "heikin": 2.11,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.263
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 89.469,
        "saikou": 3,
        "heikin": 2.53,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.411
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.54,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.289
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.58,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.528
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.56,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 2.075
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.57,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 2.034
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.58,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 2.304
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.57,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 1.997
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.57,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 3.982
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.59,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 3.986
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 97.911,
        "saikou": 3,
        "heikin": 2.6,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.854
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 97.911,
        "saikou": 2.95,
        "heikin": 2.52,
        "boshuAvg30d": 159.2,
        "heikinAvg30d": 4.149
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.59,
        "boshuAvg30d": 159.2,
        "heikinAvg30d": 4.991
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.12,
        "boshuAvg30d": 159.2,
        "heikinAvg30d": 5.38
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.24,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 5.131
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 6.95,
        "heikin": 3.69,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 5.13
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 109.06,
        "saikou": 6.97,
        "heikin": 3.47,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 5.054
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 116.97,
        "saikou": 6.95,
        "heikin": 3.28,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 4.96
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 116.97,
        "saikou": 6,
        "heikin": 3.15,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.844
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 141.483,
        "saikou": 6,
        "heikin": 2.53,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 4.804
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 120.837,
        "saikou": 5.45,
        "heikin": 2.71,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 5.701
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 120.837,
        "saikou": 6,
        "heikin": 2.96,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.692
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 6.95,
        "heikin": 3.63,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.778
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 6,
        "heikin": 3.56,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.978
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 122.835,
        "saikou": 5.97,
        "heikin": 2.91,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.875
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 101.778,
        "saikou": 5,
        "heikin": 3.39,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.527
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 101.778,
        "saikou": 5,
        "heikin": 3.22,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 4.265
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.22,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 4.317
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 137.538,
        "saikou": 5,
        "heikin": 2.41,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 4.247
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.19,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 4.563
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 5.97,
        "heikin": 3.36,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 4.175
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.354,
        "saikou": 4.95,
        "heikin": 2.82,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 4.083
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 3,
        "heikin": 2.41,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 4.073
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 3,
        "heikin": 2.44,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 3.863
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 103.221,
        "saikou": 2.95,
        "heikin": 2.23,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 3.91
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 103.221,
        "saikou": 2.95,
        "heikin": 2.54,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 3.742
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 103.221,
        "saikou": 2.95,
        "heikin": 2.54,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 3.386
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 103.221,
        "saikou": 3,
        "heikin": 2.52,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 3.508
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 103.221,
        "saikou": 3,
        "heikin": 2.49,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.259
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 125.183,
        "saikou": 3,
        "heikin": 2.21,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.382
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 122.829,
        "saikou": 3,
        "heikin": 2.24,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.082
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 166.388,
        "saikou": 3,
        "heikin": 1.69,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 3.269
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 164.945,
        "saikou": 2.97,
        "heikin": 1.62,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.581
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 50.563,
        "saikou": 2.95,
        "heikin": 2.91,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 4.434
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 156.865,
        "saikou": 3,
        "heikin": 1.53,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.126
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.9,
        "heikin": 1.49,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.364
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.9,
        "heikin": 1.38,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.298
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.9,
        "heikin": 1.38,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.122
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 135.604,
        "saikou": 2.9,
        "heikin": 1.37,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.097
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 65.232,
        "saikou": 3,
        "heikin": 1.65,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.174
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 94.818,
        "saikou": 4,
        "heikin": 1.84,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.197
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 82.091,
        "saikou": 4,
        "heikin": 2.11,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.25
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 82.091,
        "saikou": 4,
        "heikin": 2.13,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.181
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 82.091,
        "saikou": 3,
        "heikin": 1.56,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.323
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 82.091,
        "saikou": 3.75,
        "heikin": 2.07,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.6
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 82.091,
        "saikou": 3,
        "heikin": 1.89,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.488
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 82.091,
        "saikou": 4,
        "heikin": 2.11,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 3.768
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 82.091,
        "saikou": 4.22,
        "heikin": 2.19,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 3.252
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 94.818,
        "saikou": 5.05,
        "heikin": 1.96,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 3.095
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 82.091,
        "saikou": 2.9,
        "heikin": 1.09,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.006
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 68.165,
        "saikou": 3.1,
        "heikin": 1.72,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.989
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 68.165,
        "saikou": 4,
        "heikin": 1.96,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 4.029
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 82.091,
        "saikou": 4.45,
        "heikin": 2.2,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.786
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 82.091,
        "saikou": 5.19,
        "heikin": 2.63,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.343
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 82.091,
        "saikou": 5,
        "heikin": 2.69,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 3.098
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 82.091,
        "saikou": 5.15,
        "heikin": 2.7,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.109
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 82.091,
        "saikou": 5.44,
        "heikin": 2.71,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.058
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 82.091,
        "saikou": 5,
        "heikin": 2.4,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.073
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 82.091,
        "saikou": 5.24,
        "heikin": 2.63,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.267
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 82.091,
        "saikou": 5,
        "heikin": 2.62,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.159
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 82.091,
        "saikou": 5.43,
        "heikin": 2.63,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.834
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 82.091,
        "saikou": 5.33,
        "heikin": 2.63,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.347
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 82.091,
        "saikou": 5.14,
        "heikin": 2.63,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.513
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 82.091,
        "saikou": 5,
        "heikin": 2.62,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 4.003
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 82.091,
        "saikou": 6.97,
        "heikin": 2.6,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.784
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 82.091,
        "saikou": 6.97,
        "heikin": 2.59,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 5.984
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 82.091,
        "saikou": 6.97,
        "heikin": 2.67,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.101
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 82.091,
        "saikou": 6.97,
        "heikin": 2.67,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.89
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 82.091,
        "saikou": 6.97,
        "heikin": 2.66,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.608
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 82.091,
        "saikou": 4.5,
        "heikin": 2.08,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.562
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 150.473,
        "saikou": 6.26,
        "heikin": 4.3,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.802
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 176.14,
        "saikou": 6.02,
        "heikin": 4.5,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.85
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 176.14,
        "saikou": 6.69,
        "heikin": 4.98,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.528
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 6.69,
        "heikin": 4.98,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.087
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 5.91,
        "heikin": 4.42,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.793
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 178.13,
        "saikou": 5.69,
        "heikin": 4.09,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.012
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 82.091,
        "saikou": 5.55,
        "heikin": 2.07,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 5.436
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 82.091,
        "saikou": 3,
        "heikin": 1.85,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 5.028
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 82.091,
        "saikou": 3,
        "heikin": 1.83,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 4.363
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 164.018,
        "saikou": 3.52,
        "heikin": 2.84,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 3.945
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 164.018,
        "saikou": 3.36,
        "heikin": 2.69,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.88
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 176.33,
        "saikou": 1.72,
        "heikin": 1.46,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 3.091
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 225.403,
        "saikou": 1.07,
        "heikin": 0.46,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.762
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.796
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.799
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.764
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.733
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 39.4,
        "heikinAvg30d": 0.747
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
        "ouatsu": 176.86,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.886
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 199.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.891
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.917
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.897
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.88
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.851
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.877
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 2.25,
        "heikin": 0.77,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.781
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.737
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.78
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 46.4,
        "heikinAvg30d": 1.047
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.81,
        "boshuAvg30d": 46.4,
        "heikinAvg30d": 1.053
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.008
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.83,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.017
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.059
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.83,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.073
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.092
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.32,
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
        "heikinAvg30d": 0.945
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.887
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.27,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.929
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 191.403,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.845
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.915
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.912
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.899
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.848
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 1,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.917
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.849
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.836
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.815
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 1.01,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.825
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.855
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.848
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.821
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.692
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 202.403,
        "saikou": 1.07,
        "heikin": 0.48,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.731
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
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.672
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.47,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.7
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 2.5,
        "heikin": 0.64,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.74
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 167.985,
        "saikou": 3,
        "heikin": 2.21,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 4.263
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 169.909,
        "saikou": 2.9,
        "heikin": 2.11,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 4.092
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 187.607,
        "saikou": 2.9,
        "heikin": 2.03,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 3.904
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 187.605,
        "saikou": 3,
        "heikin": 2.13,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 4.055
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 185.627,
        "saikou": 3,
        "heikin": 2.06,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.921
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 187.605,
        "saikou": 3,
        "heikin": 2.03,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.963
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 204.859,
        "saikou": 3,
        "heikin": 2.16,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.918
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 199.537,
        "saikou": 3,
        "heikin": 2.18,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 4.005
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 203.365,
        "saikou": 3,
        "heikin": 2.18,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 3.988
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 258.365,
        "saikou": 3,
        "heikin": 1.82,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 3.996
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 258.365,
        "saikou": 3,
        "heikin": 1.99,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 4.002
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 200.065,
        "saikou": 3,
        "heikin": 2.28,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 3.737
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 200.065,
        "saikou": 3,
        "heikin": 2.19,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 3.598
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 196.213,
        "saikou": 3,
        "heikin": 1.75,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 3.555
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 196.213,
        "saikou": 3,
        "heikin": 1.44,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 3.818
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 261.065,
        "saikou": 2.98,
        "heikin": 0.86,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 3.859
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 193.065,
        "saikou": 3,
        "heikin": 1.33,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 4.039
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 166.065,
        "saikou": 3,
        "heikin": 1.51,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 4.854
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 159.101,
        "saikou": 3.14,
        "heikin": 1.66,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 4.782
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 157.111,
        "saikou": 3.13,
        "heikin": 1.67,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.71
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 153.628,
        "saikou": 3.66,
        "heikin": 1.71,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 4.586
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 191.684,
        "saikou": 4.5,
        "heikin": 1.49,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 4.632
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 241.726,
        "saikou": 4.9,
        "heikin": 1.3,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 4.65
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 241.726,
        "saikou": 4.52,
        "heikin": 1.3,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 4.777
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 245.657,
        "saikou": 4.4,
        "heikin": 1.21,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 4.132
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 195.657,
        "saikou": 4.4,
        "heikin": 1.46,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 4.305
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 154.655,
        "saikou": 4.4,
        "heikin": 1.75,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 4.746
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 150.803,
        "saikou": 4.94,
        "heikin": 1.95,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 5.374
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 152.303,
        "saikou": 4.99,
        "heikin": 2.09,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 6.039
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 170.049,
        "saikou": 4.4,
        "heikin": 2.04,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 6.704
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 202.073,
        "saikou": 4.4,
        "heikin": 1.73,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.217
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 202.073,
        "saikou": 4.4,
        "heikin": 2.24,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 7.059
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 202.073,
        "saikou": 4.2,
        "heikin": 2.38,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 7.124
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 199.073,
        "saikou": 4.86,
        "heikin": 4.13,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.481
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 254.123,
        "saikou": 4.2,
        "heikin": 2.18,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 7.178
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 354.123,
        "saikou": 4.35,
        "heikin": 2.5,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 7.423
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 379.282,
        "saikou": 2.98,
        "heikin": 2.72,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 7.592
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 348.282,
        "saikou": 2.98,
        "heikin": 2.73,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 7.336
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 416.284,
        "saikou": 2.9,
        "heikin": 2.71,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.643
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 355.273,
        "saikou": 2.94,
        "heikin": 2.72,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.033
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 321.049,
        "saikou": 2.98,
        "heikin": 2.27,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.331
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 265.049,
        "saikou": 2.98,
        "heikin": 1.95,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.545
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 260.153,
        "saikou": 3.05,
        "heikin": 1.48,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.123
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 261.153,
        "saikou": 4.55,
        "heikin": 2.95,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.111
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 261.153,
        "saikou": 4.67,
        "heikin": 3.04,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 4.789
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 203.153,
        "saikou": 3.26,
        "heikin": 2.93,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.088
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 203.153,
        "saikou": 3.09,
        "heikin": 2.79,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.017
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 199.301,
        "saikou": 2.9,
        "heikin": 1.98,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 3.47
      }
    ]
  }
};
