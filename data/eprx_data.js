// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/15〜2026/09/13）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-14",
  "fetchedAt": "2026-09-14",
  "avgWindowLabel": "過去30日平均（2026/08/15〜2026/09/13）",
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
      "ouatsu": 1373.78,
      "saikou": 10,
      "heikin": 2.1,
      "boshuAvg30d": 1448.7,
      "heikinAvg30d": 3.212
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1362,
      "ouatsu": 1460.691,
      "saikou": 10,
      "heikin": 2.29,
      "boshuAvg30d": 1448.7,
      "heikinAvg30d": 3.166
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1362,
      "ouatsu": 1436.429,
      "saikou": 10,
      "heikin": 2.5,
      "boshuAvg30d": 1448.7,
      "heikinAvg30d": 3.225
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1362,
      "ouatsu": 1451.332,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1447.6,
      "heikinAvg30d": 3.215
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1357,
      "ouatsu": 1483.425,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1442.6,
      "heikinAvg30d": 3.233
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1356,
      "ouatsu": 1473.67,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1441.0,
      "heikinAvg30d": 3.306
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1356,
      "ouatsu": 1512.134,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1454.2,
      "heikinAvg30d": 3.307
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1357,
      "ouatsu": 1567.316,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1455.2,
      "heikinAvg30d": 3.383
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1360,
      "ouatsu": 1550.286,
      "saikou": 10,
      "heikin": 2.82,
      "boshuAvg30d": 1458.8,
      "heikinAvg30d": 3.389
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1360,
      "ouatsu": 1580.068,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1459.4,
      "heikinAvg30d": 3.371
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1360,
      "ouatsu": 1561.676,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1459.4,
      "heikinAvg30d": 3.473
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1360,
      "ouatsu": 1523.188,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1459.4,
      "heikinAvg30d": 3.382
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1426,
      "ouatsu": 1520.032,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1523.7,
      "heikinAvg30d": 3.793
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1447,
      "ouatsu": 1579.754,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1545.8,
      "heikinAvg30d": 3.808
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1470,
      "ouatsu": 1648.983,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1568.8,
      "heikinAvg30d": 3.834
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1488,
      "ouatsu": 1731.838,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1585.0,
      "heikinAvg30d": 3.821
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1489,
      "ouatsu": 1643.615,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1585.4,
      "heikinAvg30d": 4.083
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1489,
      "ouatsu": 1579.088,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1585.4,
      "heikinAvg30d": 4.361
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1426,
      "ouatsu": 1557.784,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1544.3,
      "heikinAvg30d": 4.308
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1430,
      "ouatsu": 1536.803,
      "saikou": 10,
      "heikin": 3.53,
      "boshuAvg30d": 1548.9,
      "heikinAvg30d": 4.16
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1438,
      "ouatsu": 1477.98,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1555.9,
      "heikinAvg30d": 3.992
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1438,
      "ouatsu": 1487.417,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1555.9,
      "heikinAvg30d": 4.026
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1435,
      "ouatsu": 1587.971,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1551.8,
      "heikinAvg30d": 3.982
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1434,
      "ouatsu": 1533.829,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1551.3,
      "heikinAvg30d": 4.006
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1427,
      "ouatsu": 1497.944,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1546.0,
      "heikinAvg30d": 3.823
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1427,
      "ouatsu": 1557.236,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1546.0,
      "heikinAvg30d": 3.821
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1427,
      "ouatsu": 1641.158,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1543.5,
      "heikinAvg30d": 4.044
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1421,
      "ouatsu": 1870.926,
      "saikou": 10,
      "heikin": 3.73,
      "boshuAvg30d": 1537.5,
      "heikinAvg30d": 4.282
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1416,
      "ouatsu": 1998.694,
      "saikou": 10,
      "heikin": 4.28,
      "boshuAvg30d": 1534.2,
      "heikinAvg30d": 4.519
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1409,
      "ouatsu": 1999.688,
      "saikou": 10,
      "heikin": 4.38,
      "boshuAvg30d": 1528.9,
      "heikinAvg30d": 4.594
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1466,
      "ouatsu": 1962.356,
      "saikou": 10,
      "heikin": 4.64,
      "boshuAvg30d": 1566.9,
      "heikinAvg30d": 4.531
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1466,
      "ouatsu": 1959.869,
      "saikou": 10,
      "heikin": 5.06,
      "boshuAvg30d": 1566.9,
      "heikinAvg30d": 4.894
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1466,
      "ouatsu": 1963.301,
      "saikou": 10,
      "heikin": 5.07,
      "boshuAvg30d": 1567.1,
      "heikinAvg30d": 4.924
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1464,
      "ouatsu": 1923.498,
      "saikou": 10,
      "heikin": 5.04,
      "boshuAvg30d": 1563.4,
      "heikinAvg30d": 5.177
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1460,
      "ouatsu": 1968.765,
      "saikou": 10,
      "heikin": 5.02,
      "boshuAvg30d": 1560.5,
      "heikinAvg30d": 5.194
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1456,
      "ouatsu": 1970.279,
      "saikou": 10,
      "heikin": 5.05,
      "boshuAvg30d": 1556.5,
      "heikinAvg30d": 5.151
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1448,
      "ouatsu": 2009.244,
      "saikou": 10,
      "heikin": 4.6,
      "boshuAvg30d": 1547.9,
      "heikinAvg30d": 5.253
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1448,
      "ouatsu": 2014.773,
      "saikou": 10,
      "heikin": 4.84,
      "boshuAvg30d": 1547.4,
      "heikinAvg30d": 5.041
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1449,
      "ouatsu": 2078.661,
      "saikou": 10,
      "heikin": 4.57,
      "boshuAvg30d": 1547.8,
      "heikinAvg30d": 4.845
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1448,
      "ouatsu": 2009.337,
      "saikou": 9.77,
      "heikin": 4.34,
      "boshuAvg30d": 1547.4,
      "heikinAvg30d": 4.588
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1443,
      "ouatsu": 2013.447,
      "saikou": 10,
      "heikin": 4.23,
      "boshuAvg30d": 1542.4,
      "heikinAvg30d": 4.261
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1439,
      "ouatsu": 2107.906,
      "saikou": 10,
      "heikin": 4.02,
      "boshuAvg30d": 1540.1,
      "heikinAvg30d": 3.987
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1346,
      "ouatsu": 2021.032,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1452.2,
      "heikinAvg30d": 3.609
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1349,
      "ouatsu": 1913.73,
      "saikou": 10,
      "heikin": 4.11,
      "boshuAvg30d": 1455.2,
      "heikinAvg30d": 4.242
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1350,
      "ouatsu": 1894.899,
      "saikou": 10,
      "heikin": 4.01,
      "boshuAvg30d": 1456.2,
      "heikinAvg30d": 3.934
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1343,
      "ouatsu": 1846.37,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1449.8,
      "heikinAvg30d": 3.637
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1336,
      "ouatsu": 1823.407,
      "saikou": 10,
      "heikin": 3.89,
      "boshuAvg30d": 1441.7,
      "heikinAvg30d": 3.721
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1328,
      "ouatsu": 1985.079,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1433.1,
      "heikinAvg30d": 3.655
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
        "ouatsu": 116.668,
        "saikou": 4,
        "heikin": 1.06,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.31
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 160.886,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.303
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 116.708,
        "saikou": 4,
        "heikin": 1.1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.115
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 114.74,
        "saikou": 4,
        "heikin": 1.09,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.343
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 168.058,
        "saikou": 9.9,
        "heikin": 2.63,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.278
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 170.008,
        "saikou": 6.4,
        "heikin": 2.09,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.37
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 158.608,
        "saikou": 6.65,
        "heikin": 1.64,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.689
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 200.278,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.938
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 160.558,
        "saikou": 4.35,
        "heikin": 1.26,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.325
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 200.278,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.995
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 173.968,
        "saikou": 5.85,
        "heikin": 1.46,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.245
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 164.218,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.862
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 118.658,
        "saikou": 8.25,
        "heikin": 2.82,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.306
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 118.658,
        "saikou": 8,
        "heikin": 2.77,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.895
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 158.378,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.719
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 116.708,
        "saikou": 7.95,
        "heikin": 2.59,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.806
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 198.4,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.44
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 156.708,
        "saikou": 4,
        "heikin": 1.32,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.85
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 202.318,
        "saikou": 1.3,
        "heikin": 1.14,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.629
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 160.368,
        "saikou": 1.35,
        "heikin": 1.18,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.688
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 158.658,
        "saikou": 1.4,
        "heikin": 1.27,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.549
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 158.658,
        "saikou": 1.4,
        "heikin": 1.27,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.776
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 205.008,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.773
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.631
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 204.968,
        "saikou": 4,
        "heikin": 1.06,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.534
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 158.658,
        "saikou": 4.9,
        "heikin": 1.87,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.521
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 156.708,
        "saikou": 8,
        "heikin": 2.51,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.042
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 205.008,
        "saikou": 8.85,
        "heikin": 1.13,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.38
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 204.99,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.297
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 158.658,
        "saikou": 4,
        "heikin": 1.12,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.344
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 189.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 3.255
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 205.008,
        "saikou": 1.4,
        "heikin": 1.14,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.803
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.7
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 163.04,
        "saikou": 1.13,
        "heikin": 1.08,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.907
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 89.74,
        "saikou": 1.11,
        "heikin": 1.11,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 3.411
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 89.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 3.64
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 134.208,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 3.547
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 116.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 3.214
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 197.218,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 3.215
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 158.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.687
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 207.128,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.747
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 197.128,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.91
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 205.178,
        "saikou": 1.01,
        "heikin": 0.96,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.653
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 166.708,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.329
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 199.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.116
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 166.708,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.784
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.619
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 156.708,
        "saikou": 9.9,
        "heikin": 1.44,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.334
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 63.009,
        "saikou": 10,
        "heikin": 9.45,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 8.225
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 63.009,
        "saikou": 10,
        "heikin": 9.55,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 8.433
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 91.524,
        "saikou": 10,
        "heikin": 9.32,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 9.295
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 93.489,
        "saikou": 10,
        "heikin": 9.33,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 9.23
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 91.491,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 9.193
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 91.491,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 9.204
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 91.989,
        "saikou": 10,
        "heikin": 9.13,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 9.149
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 93.489,
        "saikou": 10,
        "heikin": 9.1,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 9.125
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 8.6,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 9.105
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 9.09,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 9.0
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 9.09,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 8.9
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 9.069
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 9.325
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 8.14,
        "boshuAvg30d": 185.2,
        "heikinAvg30d": 9.731
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 8.33,
        "boshuAvg30d": 190.6,
        "heikinAvg30d": 9.974
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 8.48,
        "boshuAvg30d": 194.0,
        "heikinAvg30d": 9.942
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 8.77,
        "boshuAvg30d": 194.0,
        "heikinAvg30d": 9.976
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 8.58,
        "boshuAvg30d": 194.0,
        "heikinAvg30d": 9.748
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 8.997
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.71,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 9.087
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 8.929
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 9.007
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 8.961
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 90.142,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 9.147
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 89.692,
        "saikou": 10,
        "heikin": 8.76,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 9.121
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 115.688,
        "saikou": 10,
        "heikin": 8.76,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 9.083
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 119.484,
        "saikou": 10,
        "heikin": 8.8,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 8.582
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 119.484,
        "saikou": 10,
        "heikin": 8.57,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 8.661
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 119.484,
        "saikou": 10,
        "heikin": 8.54,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 9.395
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 119.484,
        "saikou": 10,
        "heikin": 7.42,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 9.44
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 85.484,
        "saikou": 9.89,
        "heikin": 9.14,
        "boshuAvg30d": 191.7,
        "heikinAvg30d": 9.471
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 85.484,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 191.7,
        "heikinAvg30d": 9.078
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 8.97,
        "boshuAvg30d": 191.7,
        "heikinAvg30d": 8.833
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 59.984,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 190.2,
        "heikinAvg30d": 8.26
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 73.484,
        "saikou": 10,
        "heikin": 7.71,
        "boshuAvg30d": 188.2,
        "heikinAvg30d": 7.823
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 71.984,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 186.2,
        "heikinAvg30d": 8.083
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 81.523,
        "saikou": 10,
        "heikin": 6.93,
        "boshuAvg30d": 184.6,
        "heikinAvg30d": 8.054
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 81.988,
        "saikou": 10,
        "heikin": 6.89,
        "boshuAvg30d": 184.6,
        "heikinAvg30d": 7.985
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 71.488,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 184.6,
        "heikinAvg30d": 8.119
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 71.488,
        "saikou": 9.4,
        "heikin": 7.74,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 8.374
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 71.488,
        "saikou": 10,
        "heikin": 8.15,
        "boshuAvg30d": 183.6,
        "heikinAvg30d": 8.56
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 8.3,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 8.785
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 8.31,
        "boshuAvg30d": 99.9,
        "heikinAvg30d": 8.601
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 8.84,
        "boshuAvg30d": 99.9,
        "heikinAvg30d": 8.774
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.42,
        "boshuAvg30d": 99.9,
        "heikinAvg30d": 9.091
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 81.588,
        "saikou": 10,
        "heikin": 7.46,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 8.531
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 81.588,
        "saikou": 10,
        "heikin": 7.83,
        "boshuAvg30d": 97.9,
        "heikinAvg30d": 8.549
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 80.088,
        "saikou": 10,
        "heikin": 7.94,
        "boshuAvg30d": 96.9,
        "heikinAvg30d": 8.903
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 539,
        "ouatsu": 346.775,
        "saikou": 9.47,
        "heikin": 2.25,
        "boshuAvg30d": 544.1,
        "heikinAvg30d": 3.841
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 539,
        "ouatsu": 374.822,
        "saikou": 9.47,
        "heikin": 2.21,
        "boshuAvg30d": 544.1,
        "heikinAvg30d": 3.616
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 539,
        "ouatsu": 347.082,
        "saikou": 9.47,
        "heikin": 2.36,
        "boshuAvg30d": 544.1,
        "heikinAvg30d": 3.621
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 539,
        "ouatsu": 364.068,
        "saikou": 9.39,
        "heikin": 2.34,
        "boshuAvg30d": 543.5,
        "heikinAvg30d": 3.47
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 537,
        "ouatsu": 346.526,
        "saikou": 9.47,
        "heikin": 2.29,
        "boshuAvg30d": 541.5,
        "heikinAvg30d": 3.436
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 537,
        "ouatsu": 328.88,
        "saikou": 9.47,
        "heikin": 2.4,
        "boshuAvg30d": 541.5,
        "heikinAvg30d": 3.434
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 536,
        "ouatsu": 346.782,
        "saikou": 9.39,
        "heikin": 2.37,
        "boshuAvg30d": 540.0,
        "heikinAvg30d": 3.268
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 537,
        "ouatsu": 361.168,
        "saikou": 9.39,
        "heikin": 2.24,
        "boshuAvg30d": 541.0,
        "heikinAvg30d": 3.411
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 538,
        "ouatsu": 362.688,
        "saikou": 9.39,
        "heikin": 2.19,
        "boshuAvg30d": 542.0,
        "heikinAvg30d": 3.389
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 538,
        "ouatsu": 352.75,
        "saikou": 9.39,
        "heikin": 2.31,
        "boshuAvg30d": 542.5,
        "heikinAvg30d": 3.354
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 538,
        "ouatsu": 352.75,
        "saikou": 9.39,
        "heikin": 2.31,
        "boshuAvg30d": 542.5,
        "heikinAvg30d": 3.491
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 538,
        "ouatsu": 352.75,
        "saikou": 9.39,
        "heikin": 2.21,
        "boshuAvg30d": 542.5,
        "heikinAvg30d": 3.396
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 559,
        "ouatsu": 358.654,
        "saikou": 9.47,
        "heikin": 2.84,
        "boshuAvg30d": 563.5,
        "heikinAvg30d": 3.798
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 567,
        "ouatsu": 358.654,
        "saikou": 9.47,
        "heikin": 2.91,
        "boshuAvg30d": 571.5,
        "heikinAvg30d": 3.936
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 572,
        "ouatsu": 388.654,
        "saikou": 9.47,
        "heikin": 2.76,
        "boshuAvg30d": 577.7,
        "heikinAvg30d": 4.046
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 577,
        "ouatsu": 497.593,
        "saikou": 9.5,
        "heikin": 3.24,
        "boshuAvg30d": 582.5,
        "heikinAvg30d": 4.03
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 577,
        "ouatsu": 391.493,
        "saikou": 9.5,
        "heikin": 3.61,
        "boshuAvg30d": 582.5,
        "heikinAvg30d": 4.45
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 577,
        "ouatsu": 386.246,
        "saikou": 9.5,
        "heikin": 3.44,
        "boshuAvg30d": 582.5,
        "heikinAvg30d": 4.609
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 568,
        "ouatsu": 335.225,
        "saikou": 9.47,
        "heikin": 4.51,
        "boshuAvg30d": 576.0,
        "heikinAvg30d": 4.626
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 568,
        "ouatsu": 345.627,
        "saikou": 9.47,
        "heikin": 4.19,
        "boshuAvg30d": 576.0,
        "heikinAvg30d": 4.339
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 568,
        "ouatsu": 313.213,
        "saikou": 9.47,
        "heikin": 3.74,
        "boshuAvg30d": 575.5,
        "heikinAvg30d": 4.036
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 567,
        "ouatsu": 296.567,
        "saikou": 9.47,
        "heikin": 4.04,
        "boshuAvg30d": 574.5,
        "heikinAvg30d": 4.067
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 564,
        "ouatsu": 327.265,
        "saikou": 9.47,
        "heikin": 4.03,
        "boshuAvg30d": 571.5,
        "heikinAvg30d": 4.202
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 564,
        "ouatsu": 345.702,
        "saikou": 9.47,
        "heikin": 3.96,
        "boshuAvg30d": 571.5,
        "heikinAvg30d": 4.239
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 563,
        "ouatsu": 334.755,
        "saikou": 9.47,
        "heikin": 3.44,
        "boshuAvg30d": 570.5,
        "heikinAvg30d": 4.056
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 563,
        "ouatsu": 353.191,
        "saikou": 9.47,
        "heikin": 3.39,
        "boshuAvg30d": 570.5,
        "heikinAvg30d": 4.11
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 563,
        "ouatsu": 336.705,
        "saikou": 9.47,
        "heikin": 3.82,
        "boshuAvg30d": 568.0,
        "heikinAvg30d": 4.137
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 562,
        "ouatsu": 543.241,
        "saikou": 9.47,
        "heikin": 4.15,
        "boshuAvg30d": 567.0,
        "heikinAvg30d": 4.223
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 561,
        "ouatsu": 649.341,
        "saikou": 9.47,
        "heikin": 5.04,
        "boshuAvg30d": 566.5,
        "heikinAvg30d": 4.5
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 561,
        "ouatsu": 714.708,
        "saikou": 10,
        "heikin": 5.27,
        "boshuAvg30d": 566.5,
        "heikinAvg30d": 4.515
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 560,
        "ouatsu": 700.413,
        "saikou": 9.47,
        "heikin": 4.69,
        "boshuAvg30d": 565.5,
        "heikinAvg30d": 4.433
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 560,
        "ouatsu": 681.977,
        "saikou": 10,
        "heikin": 5.42,
        "boshuAvg30d": 565.5,
        "heikinAvg30d": 4.719
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 560,
        "ouatsu": 630.986,
        "saikou": 10,
        "heikin": 4.79,
        "boshuAvg30d": 565.1,
        "heikinAvg30d": 4.86
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 560,
        "ouatsu": 594.112,
        "saikou": 10,
        "heikin": 5.02,
        "boshuAvg30d": 565.1,
        "heikinAvg30d": 5.045
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 560,
        "ouatsu": 612.549,
        "saikou": 10,
        "heikin": 4.78,
        "boshuAvg30d": 565.1,
        "heikinAvg30d": 5.186
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 560,
        "ouatsu": 649.472,
        "saikou": 10,
        "heikin": 4.91,
        "boshuAvg30d": 565.1,
        "heikinAvg30d": 5.17
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 562,
        "ouatsu": 696.644,
        "saikou": 10,
        "heikin": 4.28,
        "boshuAvg30d": 567.7,
        "heikinAvg30d": 5.068
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 562,
        "ouatsu": 678.208,
        "saikou": 10,
        "heikin": 4.24,
        "boshuAvg30d": 567.1,
        "heikinAvg30d": 4.82
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 563,
        "ouatsu": 672.524,
        "saikou": 10,
        "heikin": 4.3,
        "boshuAvg30d": 567.5,
        "heikinAvg30d": 4.77
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 563,
        "ouatsu": 735.993,
        "saikou": 9.46,
        "heikin": 4.39,
        "boshuAvg30d": 567.5,
        "heikinAvg30d": 4.548
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 561,
        "ouatsu": 636.9,
        "saikou": 9.47,
        "heikin": 4.65,
        "boshuAvg30d": 566.1,
        "heikinAvg30d": 4.063
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 561,
        "ouatsu": 673.573,
        "saikou": 9.47,
        "heikin": 4.44,
        "boshuAvg30d": 566.1,
        "heikinAvg30d": 4.038
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 560,
        "ouatsu": 603.96,
        "saikou": 9.47,
        "heikin": 4.06,
        "boshuAvg30d": 565.7,
        "heikinAvg30d": 3.659
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 560,
        "ouatsu": 578.415,
        "saikou": 10,
        "heikin": 4.18,
        "boshuAvg30d": 565.7,
        "heikinAvg30d": 4.647
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 560,
        "ouatsu": 531.328,
        "saikou": 10,
        "heikin": 4.43,
        "boshuAvg30d": 565.7,
        "heikinAvg30d": 4.16
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 558,
        "ouatsu": 518.931,
        "saikou": 9.47,
        "heikin": 4.19,
        "boshuAvg30d": 563.7,
        "heikinAvg30d": 3.898
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 556,
        "ouatsu": 516.684,
        "saikou": 9.47,
        "heikin": 4.28,
        "boshuAvg30d": 561.1,
        "heikinAvg30d": 4.223
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 555,
        "ouatsu": 571.044,
        "saikou": 9.47,
        "heikin": 4.08,
        "boshuAvg30d": 559.5,
        "heikinAvg30d": 4.195
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 156.01,
        "saikou": 2.99,
        "heikin": 1.2,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 3.339
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 163.894,
        "saikou": 3,
        "heikin": 2.08,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 3.102
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 187.306,
        "saikou": 2.99,
        "heikin": 1.77,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 3.159
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 185.416,
        "saikou": 2.99,
        "heikin": 1.77,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 3.168
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 185.729,
        "saikou": 3,
        "heikin": 1.62,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.566
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 191.67,
        "saikou": 3,
        "heikin": 1.68,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.659
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 213.337,
        "saikou": 2.99,
        "heikin": 1.75,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.471
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 227.627,
        "saikou": 2.99,
        "heikin": 1.75,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.459
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 231.427,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.527
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 231.427,
        "saikou": 2.99,
        "heikin": 1.68,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.445
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 235.407,
        "saikou": 2.99,
        "heikin": 1.63,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.302
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 233.907,
        "saikou": 2.99,
        "heikin": 2.25,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.407
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 235.407,
        "saikou": 3.88,
        "heikin": 2.21,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 3.675
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 235.543,
        "saikou": 3.88,
        "heikin": 2.95,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 3.689
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 235.543,
        "saikou": 3.99,
        "heikin": 2.36,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.969
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 243.427,
        "saikou": 3.88,
        "heikin": 2.09,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.973
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 241.439,
        "saikou": 4.49,
        "heikin": 3.09,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 4.349
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 243.429,
        "saikou": 4.5,
        "heikin": 3.4,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 4.42
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 230.306,
        "saikou": 4.93,
        "heikin": 3.26,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 4.728
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 230.306,
        "saikou": 5.1,
        "heikin": 3.25,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 4.682
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 211.417,
        "saikou": 5.84,
        "heikin": 3.53,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 4.706
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 254.205,
        "saikou": 4.99,
        "heikin": 3.1,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 4.775
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 270.926,
        "saikou": 4.93,
        "heikin": 2.92,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.391
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 269.036,
        "saikou": 4.5,
        "heikin": 2.88,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.351
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 254.184,
        "saikou": 5.73,
        "heikin": 3.12,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 4.312
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 314.354,
        "saikou": 5.1,
        "heikin": 2.96,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 4.369
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 349.529,
        "saikou": 3.88,
        "heikin": 1.63,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 4.593
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 328.612,
        "saikou": 4.26,
        "heikin": 2.53,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 4.797
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 350.307,
        "saikou": 4.26,
        "heikin": 2.77,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 4.928
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 332.086,
        "saikou": 3.99,
        "heikin": 2.7,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 4.683
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 322.204,
        "saikou": 4.5,
        "heikin": 2.74,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 4.493
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 314.904,
        "saikou": 4.39,
        "heikin": 2.93,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 4.569
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 450.739,
        "saikou": 4.5,
        "heikin": 3.05,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 4.525
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 447.978,
        "saikou": 4.2,
        "heikin": 3.09,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 4.611
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 444.608,
        "saikou": 4.06,
        "heikin": 3.06,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 4.198
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 442.707,
        "saikou": 4.06,
        "heikin": 2.96,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 3.962
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 434.725,
        "saikou": 4.06,
        "heikin": 2.82,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 4.443
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 434.725,
        "saikou": 4.06,
        "heikin": 2.9,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 3.9
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 442.748,
        "saikou": 4.13,
        "heikin": 2.71,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 3.606
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 442.748,
        "saikou": 2.99,
        "heikin": 2.1,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 3.605
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 442.748,
        "saikou": 3,
        "heikin": 2.03,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 3.39
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 474.006,
        "saikou": 4.09,
        "heikin": 3.05,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 3.142
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 413.543,
        "saikou": 3,
        "heikin": 2.21,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 3.12
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 395.577,
        "saikou": 7.82,
        "heikin": 2.7,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 3.776
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 371.212,
        "saikou": 3,
        "heikin": 2.43,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 3.712
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 354.147,
        "saikou": 3.46,
        "heikin": 2.31,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 3.671
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 343.825,
        "saikou": 3.13,
        "heikin": 2.32,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 3.751
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 365.609,
        "saikou": 3,
        "heikin": 2.92,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 3.756
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
        "heikinAvg30d": 1.761
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.613
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.526
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.77,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.71
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.6,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.303
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.14,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.986
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.16,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.652
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.7,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.428
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.52
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.7,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.138
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.42,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.425
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.42,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.713
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.93,
        "boshuAvg30d": 56.4,
        "heikinAvg30d": 3.605
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 2.94,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.513
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.79,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 3.978
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.7,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.856
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 4.926
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 5.865
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.533
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.241
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.8,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.715
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.683
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.35,
        "heikin": 4.35,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.422
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.4,
        "heikin": 4.4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.571
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.16,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.169
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.8,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.993
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.508
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.129
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.284
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.433
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 4.696
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 5.337
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.858
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.938
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.88
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.85,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.344
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.21,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.762
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 7.4,
        "heikin": 5.61,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.292
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 3.32,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.511
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.7,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.651
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3.15,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.093
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.604
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.09,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.431
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.466
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.282
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 3.25,
        "heikin": 2.87,
        "boshuAvg30d": 58.4,
        "heikinAvg30d": 3.561
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 3.501
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.149
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 78.469,
        "saikou": 2.9,
        "heikin": 2.75,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 2.01
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 141.359,
        "saikou": 3,
        "heikin": 1.93,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 2.306
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 119.39,
        "saikou": 3,
        "heikin": 2.31,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 2.144
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 115.412,
        "saikou": 3,
        "heikin": 2.3,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 2.146
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 113.414,
        "saikou": 3,
        "heikin": 2.28,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 2.204
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 113.414,
        "saikou": 3,
        "heikin": 2.28,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.341
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 123.299,
        "saikou": 2.97,
        "heikin": 2.31,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 2.234
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.33,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 2.427
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.33,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 1.963
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.33,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 2.095
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 147.237,
        "saikou": 2.97,
        "heikin": 1.98,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 2.334
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.33,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 2.108
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.34,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.895
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 147.237,
        "saikou": 3,
        "heikin": 2.03,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 3.872
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 147.244,
        "saikou": 3,
        "heikin": 2.03,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 3.65
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 147.244,
        "saikou": 3,
        "heikin": 2.01,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 3.94
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.35,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 4.74
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 103.221,
        "saikou": 5,
        "heikin": 3.19,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 5.173
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 4.95,
        "heikin": 3.17,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.95
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 4,
        "heikin": 3.01,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 5.022
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 6.5,
        "heikin": 3.76,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.954
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 4,
        "heikin": 2.8,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.871
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 4,
        "heikin": 2.87,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.738
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 4,
        "heikin": 2.98,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.672
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 52.355,
        "saikou": 6,
        "heikin": 4.69,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 5.573
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 52.355,
        "saikou": 6,
        "heikin": 4.35,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.554
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 129.742,
        "saikou": 3,
        "heikin": 2.72,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.627
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 142.443,
        "saikou": 5.49,
        "heikin": 3.8,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.802
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 166.388,
        "saikou": 6.21,
        "heikin": 4.12,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.725
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 4,
        "heikin": 2.93,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.394
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 144.617,
        "saikou": 5.25,
        "heikin": 4.03,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.079
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4,
        "heikin": 2.91,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.105
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4.95,
        "heikin": 3.15,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.118
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4.95,
        "heikin": 3,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.396
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.23,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.111
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.34,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 4.008
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 99.391,
        "saikou": 5,
        "heikin": 3.29,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 3.962
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 99.391,
        "saikou": 5.47,
        "heikin": 3.48,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 3.755
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 99.928,
        "saikou": 5.97,
        "heikin": 3.42,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 3.801
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 99.928,
        "saikou": 3,
        "heikin": 2.82,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 3.695
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 101.371,
        "saikou": 3,
        "heikin": 2.8,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 3.298
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 103.221,
        "saikou": 3,
        "heikin": 2.74,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 3.439
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.7,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 3.139
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.8,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 3.286
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.8,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 3.049
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.7,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.134
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.7,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 3.416
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 188.238,
        "saikou": 3,
        "heikin": 1.63,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 4.133
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 155.483,
        "saikou": 2.9,
        "heikin": 0.85,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.054
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 155.483,
        "saikou": 2.9,
        "heikin": 1.33,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.335
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 155.483,
        "saikou": 3,
        "heikin": 1.37,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.288
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 159.273,
        "saikou": 3,
        "heikin": 1.37,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.103
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 159.273,
        "saikou": 3,
        "heikin": 1.46,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.078
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 159.273,
        "saikou": 3,
        "heikin": 1.61,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.187
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 2.9,
        "heikin": 2.03,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.222
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 3.53,
        "heikin": 2.74,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.276
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 3.53,
        "heikin": 2.76,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.219
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 3.53,
        "heikin": 2.75,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.364
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 3.86,
        "heikin": 2.97,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.594
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 4.7,
        "heikin": 3.52,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.521
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 176.132,
        "saikou": 4.84,
        "heikin": 3.57,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 3.83
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 176.132,
        "saikou": 4.22,
        "heikin": 3.19,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 3.317
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 176.132,
        "saikou": 4,
        "heikin": 2.83,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 3.094
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 176.132,
        "saikou": 3.19,
        "heikin": 1.63,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.003
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 138.75,
        "saikou": 3,
        "heikin": 1.94,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.943
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 138.75,
        "saikou": 4,
        "heikin": 2.08,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 4.013
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 150.678,
        "saikou": 4,
        "heikin": 1.91,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.809
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 156.243,
        "saikou": 5,
        "heikin": 1.88,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.377
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 147.916,
        "saikou": 5,
        "heikin": 2.09,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 3.181
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 148.105,
        "saikou": 5,
        "heikin": 2.11,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.152
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 156.838,
        "saikou": 4,
        "heikin": 1.7,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.106
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 157.493,
        "saikou": 3.42,
        "heikin": 1.69,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.059
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 176.132,
        "saikou": 4,
        "heikin": 1.22,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.374
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 176.132,
        "saikou": 4,
        "heikin": 1.15,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.262
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 176.132,
        "saikou": 3,
        "heikin": 1.18,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.916
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 176.132,
        "saikou": 4,
        "heikin": 1.34,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.374
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 150.678,
        "saikou": 4,
        "heikin": 2.13,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.53
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 198.279,
        "saikou": 3,
        "heikin": 2.25,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 4.018
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 150.678,
        "saikou": 7.01,
        "heikin": 5.73,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.768
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 203.89,
        "saikou": 7.47,
        "heikin": 6.87,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.01
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 189.778,
        "saikou": 8.89,
        "heikin": 8.12,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.167
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 189.778,
        "saikou": 8.89,
        "heikin": 8.11,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.838
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 189.778,
        "saikou": 7.48,
        "heikin": 6.86,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.538
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 189.778,
        "saikou": 7.2,
        "heikin": 6.74,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.486
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 187.788,
        "saikou": 7.47,
        "heikin": 6.97,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.845
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 187.788,
        "saikou": 8.45,
        "heikin": 7.62,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.887
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 187.788,
        "saikou": 7.2,
        "heikin": 6.63,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.593
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 136.566,
        "saikou": 7.01,
        "heikin": 6.16,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 7.151
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 186.556,
        "saikou": 6.22,
        "heikin": 4.8,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 6.847
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 200.084,
        "saikou": 3.79,
        "heikin": 2,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 6.126
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 191.999,
        "saikou": 5.69,
        "heikin": 3.83,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 5.391
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 150.678,
        "saikou": 5.55,
        "heikin": 4.09,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 4.981
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 160.749,
        "saikou": 5.5,
        "heikin": 4.16,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 4.339
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 176.132,
        "saikou": 4.96,
        "heikin": 3.55,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.929
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 175.738,
        "saikou": 4.96,
        "heikin": 3.59,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.85
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 175.758,
        "saikou": 4.7,
        "heikin": 3.54,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 2.974
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
        "heikinAvg30d": 0.761
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 225.403,
        "saikou": 1.07,
        "heikin": 0.46,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.79
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 225.403,
        "saikou": 1.07,
        "heikin": 0.46,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.803
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 225.403,
        "saikou": 1.07,
        "heikin": 0.46,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.766
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 225.403,
        "saikou": 1.07,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.735
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 225.403,
        "saikou": 1.07,
        "heikin": 0.46,
        "boshuAvg30d": 39.4,
        "heikinAvg30d": 0.75
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 191.403,
        "saikou": 1.07,
        "heikin": 0.55,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.905
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 179.86,
        "saikou": 1.07,
        "heikin": 0.6,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.884
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 191.403,
        "saikou": 1.07,
        "heikin": 0.55,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.892
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 191.403,
        "saikou": 1.07,
        "heikin": 0.55,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.919
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 171.403,
        "saikou": 1.07,
        "heikin": 0.55,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.92
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 171.403,
        "saikou": 1.07,
        "heikin": 0.55,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.896
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 206.403,
        "saikou": 1.07,
        "heikin": 0.46,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.907
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 225.403,
        "saikou": 1.07,
        "heikin": 0.52,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.883
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 225.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.928
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 238.403,
        "saikou": 1.07,
        "heikin": 0.48,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.811
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 236.403,
        "saikou": 1.07,
        "heikin": 0.48,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.788
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 238.403,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.831
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 212.403,
        "saikou": 1.6,
        "heikin": 0.83,
        "boshuAvg30d": 46.4,
        "heikinAvg30d": 1.016
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 219.403,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 46.4,
        "heikinAvg30d": 1.029
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 225.403,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.973
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 222.403,
        "saikou": 1.7,
        "heikin": 1.11,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.004
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 222.403,
        "saikou": 1.7,
        "heikin": 1.11,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.018
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 225.403,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.026
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 203.403,
        "saikou": 1.7,
        "heikin": 1.53,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.063
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 204.403,
        "saikou": 1.7,
        "heikin": 1.52,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.016
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 190.403,
        "saikou": 1.6,
        "heikin": 1.4,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.924
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.944
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 175.403,
        "saikou": 1.6,
        "heikin": 1.35,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.857
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 159.403,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.937
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 159.403,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.936
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 164.403,
        "saikou": 1.6,
        "heikin": 1.31,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 163.403,
        "saikou": 1.6,
        "heikin": 1.3,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.862
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 172.403,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.914
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 171.403,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.834
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 170.403,
        "saikou": 1.6,
        "heikin": 1.49,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.846
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 170.403,
        "saikou": 1.6,
        "heikin": 1.49,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.819
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 156.403,
        "saikou": 1.6,
        "heikin": 1.35,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.824
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 156.403,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.856
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 156.403,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.855
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 156.403,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.829
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.693
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.73
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 238.403,
        "saikou": 1.07,
        "heikin": 0.48,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.704
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 238.403,
        "saikou": 1.07,
        "heikin": 0.42,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.672
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 238.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.695
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 238.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.741
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 168.035,
        "saikou": 3,
        "heikin": 2.07,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 4.19
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 171.907,
        "saikou": 3,
        "heikin": 2.46,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 4.052
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 189.605,
        "saikou": 3,
        "heikin": 2.27,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 3.812
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 189.603,
        "saikou": 3,
        "heikin": 2.09,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 3.959
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 189.603,
        "saikou": 3,
        "heikin": 2.19,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.832
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 189.603,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.874
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 206.656,
        "saikou": 3.11,
        "heikin": 2.8,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.869
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 201.535,
        "saikou": 3.19,
        "heikin": 2.87,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.928
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 205.363,
        "saikou": 3.69,
        "heikin": 3.19,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 3.919
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 205.363,
        "saikou": 3.11,
        "heikin": 2.8,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 3.977
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 205.363,
        "saikou": 3.2,
        "heikin": 2.87,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 4.01
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 202.063,
        "saikou": 3.69,
        "heikin": 3.17,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 3.783
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 202.063,
        "saikou": 4.45,
        "heikin": 3.68,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 3.69
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 198.211,
        "saikou": 3.55,
        "heikin": 3.11,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 3.613
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 196.213,
        "saikou": 3,
        "heikin": 2.46,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 3.713
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 192.415,
        "saikou": 3,
        "heikin": 2.12,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 3.718
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 192.415,
        "saikou": 3.26,
        "heikin": 2.89,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 3.961
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 192.415,
        "saikou": 3.55,
        "heikin": 3.08,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 4.772
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 201.571,
        "saikou": 5.33,
        "heikin": 4.22,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 4.685
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 201.571,
        "saikou": 5.05,
        "heikin": 4.05,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 4.644
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 198.088,
        "saikou": 3.41,
        "heikin": 3.05,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 4.521
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 184.194,
        "saikou": 4.5,
        "heikin": 2.99,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 4.577
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 182.246,
        "saikou": 4.74,
        "heikin": 3.08,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.551
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 184.194,
        "saikou": 4.4,
        "heikin": 3.08,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.665
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 178.527,
        "saikou": 4.2,
        "heikin": 2.47,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 4.075
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 178.527,
        "saikou": 4.99,
        "heikin": 3.01,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 4.23
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 178.527,
        "saikou": 4.99,
        "heikin": 3.96,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 4.682
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 174.675,
        "saikou": 7.29,
        "heikin": 5.67,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 5.335
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 176.175,
        "saikou": 8.29,
        "heikin": 6.38,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 5.936
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 193.921,
        "saikou": 10,
        "heikin": 7.49,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 6.519
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 205.921,
        "saikou": 10,
        "heikin": 7.58,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.131
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 205.921,
        "saikou": 10,
        "heikin": 7.79,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 7.15
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 205.921,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 7.22
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 201.921,
        "saikou": 10,
        "heikin": 7.74,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 7.537
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 282.921,
        "saikou": 10,
        "heikin": 8.05,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 7.135
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 251.935,
        "saikou": 10,
        "heikin": 8.07,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 7.34
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 200.634,
        "saikou": 10,
        "heikin": 7.87,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 7.512
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 241.634,
        "saikou": 10,
        "heikin": 7.81,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 7.248
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 246.636,
        "saikou": 10,
        "heikin": 7.52,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.58
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 203.625,
        "saikou": 9.77,
        "heikin": 7.27,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.937
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 206.925,
        "saikou": 8.74,
        "heikin": 6.65,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.277
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 216.075,
        "saikou": 8.55,
        "heikin": 6.41,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.475
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 208.179,
        "saikou": 7.67,
        "heikin": 5.8,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.048
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 211.179,
        "saikou": 8.55,
        "heikin": 6.4,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.054
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 207.179,
        "saikou": 8.55,
        "heikin": 6.43,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 4.74
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 207.179,
        "saikou": 7.62,
        "heikin": 5.78,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.015
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 207.179,
        "saikou": 7.38,
        "heikin": 5.6,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 3.981
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 205.303,
        "saikou": 6.96,
        "heikin": 5.47,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 3.421
      }
    ]
  }
};
