// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/06〜2026/11/04）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-05",
  "fetchedAt": "2026-11-05",
  "avgWindowLabel": "過去30日平均（2026/10/06〜2026/11/04）",
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
      "boshu": 1366,
      "ouatsu": 1700.005,
      "saikou": 9.19,
      "heikin": 2.29,
      "boshuAvg30d": 1054.3,
      "heikinAvg30d": 3.018
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1366,
      "ouatsu": 1696.985,
      "saikou": 9.19,
      "heikin": 2.07,
      "boshuAvg30d": 1054.3,
      "heikinAvg30d": 2.908
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1366,
      "ouatsu": 1734.329,
      "saikou": 10,
      "heikin": 1.9,
      "boshuAvg30d": 1054.3,
      "heikinAvg30d": 2.821
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1365,
      "ouatsu": 1746.467,
      "saikou": 9.83,
      "heikin": 1.85,
      "boshuAvg30d": 1054.2,
      "heikinAvg30d": 2.768
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1359,
      "ouatsu": 1792.624,
      "saikou": 9.2,
      "heikin": 1.79,
      "boshuAvg30d": 1050.8,
      "heikinAvg30d": 2.824
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1359,
      "ouatsu": 1754.42,
      "saikou": 9.19,
      "heikin": 1.88,
      "boshuAvg30d": 1049.9,
      "heikinAvg30d": 2.857
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1356,
      "ouatsu": 1865.959,
      "saikou": 9.19,
      "heikin": 2.05,
      "boshuAvg30d": 1046.9,
      "heikinAvg30d": 3.053
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1360,
      "ouatsu": 1806.11,
      "saikou": 9.8,
      "heikin": 2.36,
      "boshuAvg30d": 1049.2,
      "heikinAvg30d": 3.292
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1360,
      "ouatsu": 1700.124,
      "saikou": 9.8,
      "heikin": 2.37,
      "boshuAvg30d": 1050.9,
      "heikinAvg30d": 3.323
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1362,
      "ouatsu": 1704.924,
      "saikou": 9.8,
      "heikin": 2.41,
      "boshuAvg30d": 1052.1,
      "heikinAvg30d": 3.488
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1362,
      "ouatsu": 1677.504,
      "saikou": 9.8,
      "heikin": 2.79,
      "boshuAvg30d": 1052.1,
      "heikinAvg30d": 3.529
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1362,
      "ouatsu": 1736.343,
      "saikou": 9.85,
      "heikin": 2.74,
      "boshuAvg30d": 1052.1,
      "heikinAvg30d": 3.514
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1421,
      "ouatsu": 1821.163,
      "saikou": 9.87,
      "heikin": 2.54,
      "boshuAvg30d": 1111.9,
      "heikinAvg30d": 3.569
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1446,
      "ouatsu": 1877.046,
      "saikou": 10,
      "heikin": 2.43,
      "boshuAvg30d": 1135.2,
      "heikinAvg30d": 3.486
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1465,
      "ouatsu": 1793.606,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1155.9,
      "heikinAvg30d": 3.169
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1480,
      "ouatsu": 1805.546,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1173.0,
      "heikinAvg30d": 2.884
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1480,
      "ouatsu": 1692.492,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1173.3,
      "heikinAvg30d": 2.805
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1480,
      "ouatsu": 1543.381,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1177.2,
      "heikinAvg30d": 2.777
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1409,
      "ouatsu": 1585.62,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1134.6,
      "heikinAvg30d": 2.876
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1414,
      "ouatsu": 1481.481,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1137.9,
      "heikinAvg30d": 2.921
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1418,
      "ouatsu": 1463.307,
      "saikou": 10,
      "heikin": 2.38,
      "boshuAvg30d": 1140.5,
      "heikinAvg30d": 2.923
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1422,
      "ouatsu": 1607.674,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1141.0,
      "heikinAvg30d": 2.881
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1416,
      "ouatsu": 1501.742,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1137.6,
      "heikinAvg30d": 2.867
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1416,
      "ouatsu": 1525.893,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1136.8,
      "heikinAvg30d": 2.86
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1397,
      "ouatsu": 1595.908,
      "saikou": 10,
      "heikin": 2.67,
      "boshuAvg30d": 1116.6,
      "heikinAvg30d": 2.693
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1397,
      "ouatsu": 1588.729,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1116.6,
      "heikinAvg30d": 2.709
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1397,
      "ouatsu": 1659.456,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1116.6,
      "heikinAvg30d": 2.904
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1393,
      "ouatsu": 1582.702,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1114.0,
      "heikinAvg30d": 3.058
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1392,
      "ouatsu": 1531.695,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1111.2,
      "heikinAvg30d": 3.055
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1386,
      "ouatsu": 1635.126,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1105.2,
      "heikinAvg30d": 3.173
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1457,
      "ouatsu": 1499.278,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1157.6,
      "heikinAvg30d": 3.272
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1457,
      "ouatsu": 1489.32,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1157.2,
      "heikinAvg30d": 3.42
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1457,
      "ouatsu": 1527.35,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1157.8,
      "heikinAvg30d": 3.807
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1455,
      "ouatsu": 1477.214,
      "saikou": 10,
      "heikin": 3.47,
      "boshuAvg30d": 1156.7,
      "heikinAvg30d": 4.019
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1453,
      "ouatsu": 1452.11,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1148.4,
      "heikinAvg30d": 3.947
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1448,
      "ouatsu": 1403.787,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1143.4,
      "heikinAvg30d": 4.002
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1444,
      "ouatsu": 1597.389,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1137.5,
      "heikinAvg30d": 3.793
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1444,
      "ouatsu": 1661.34,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1137.5,
      "heikinAvg30d": 3.79
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1444,
      "ouatsu": 1793.362,
      "saikou": 10,
      "heikin": 3.06,
      "boshuAvg30d": 1137.5,
      "heikinAvg30d": 3.595
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1442,
      "ouatsu": 1751.538,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1136.7,
      "heikinAvg30d": 3.443
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1435,
      "ouatsu": 1583.755,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1128.8,
      "heikinAvg30d": 3.357
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1435,
      "ouatsu": 1628.257,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1128.8,
      "heikinAvg30d": 3.289
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1346,
      "ouatsu": 1822.638,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1047.6,
      "heikinAvg30d": 3.19
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1349,
      "ouatsu": 1997.307,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1050.6,
      "heikinAvg30d": 3.212
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1348,
      "ouatsu": 2026.074,
      "saikou": 9.99,
      "heikin": 2.92,
      "boshuAvg30d": 1054.3,
      "heikinAvg30d": 3.243
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1341,
      "ouatsu": 2006.93,
      "saikou": 9.99,
      "heikin": 2.84,
      "boshuAvg30d": 1046.0,
      "heikinAvg30d": 3.085
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1333,
      "ouatsu": 1894.92,
      "saikou": 9.99,
      "heikin": 2.37,
      "boshuAvg30d": 1037.5,
      "heikinAvg30d": 3.148
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1325,
      "ouatsu": 1858.442,
      "saikou": 9.27,
      "heikin": 2.01,
      "boshuAvg30d": 1029.7,
      "heikinAvg30d": 2.887
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
        "boshu": 50,
        "ouatsu": 112.918,
        "saikou": 2.36,
        "heikin": 1.76,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.16
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 115.918,
        "saikou": 1.38,
        "heikin": 1.37,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.18
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 164.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.008
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 113.968,
        "saikou": 7.69,
        "heikin": 1.31,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 3.891
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 166.208,
        "saikou": 3.45,
        "heikin": 1.04,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.255
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 1.24,
        "heikin": 1.23,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 3.885
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 162.708,
        "saikou": 1.15,
        "heikin": 1.09,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.213
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 109.458,
        "saikou": 9.8,
        "heikin": 2.78,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.343
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 33.418,
        "saikou": 9.8,
        "heikin": 3.66,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.409
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 101.968,
        "saikou": 9.8,
        "heikin": 1.84,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.258
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 35.408,
        "saikou": 9.8,
        "heikin": 3.79,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.517
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 106.768,
        "saikou": 4.67,
        "heikin": 1.8,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.666
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 221.708,
        "saikou": 5.71,
        "heikin": 2.93,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.471
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 191.458,
        "saikou": 3.62,
        "heikin": 3.02,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.596
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 194.408,
        "saikou": 4.14,
        "heikin": 3.58,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 3.998
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 238.768,
        "saikou": 4.62,
        "heikin": 3.91,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.06
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 241.208,
        "saikou": 6.52,
        "heikin": 5.69,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.163
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 102.958,
        "saikou": 7.5,
        "heikin": 2.71,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.497
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 146.683,
        "saikou": 9.91,
        "heikin": 4.25,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.602
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 112.958,
        "saikou": 8.18,
        "heikin": 2.72,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 3.586
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 119.908,
        "saikou": 6.39,
        "heikin": 2.24,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.121
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 154.733,
        "saikou": 9.91,
        "heikin": 4.18,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.237
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 119.908,
        "saikou": 7.2,
        "heikin": 2.53,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 4.101
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 151.733,
        "saikou": 9.91,
        "heikin": 4.17,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.925
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 119.908,
        "saikou": 9.44,
        "heikin": 2.73,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 3.851
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 152.743,
        "saikou": 9.91,
        "heikin": 4.39,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 3.783
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 197.908,
        "saikou": 6.88,
        "heikin": 6.43,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 3.437
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 244.258,
        "saikou": 8.5,
        "heikin": 7.74,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.017
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 195.918,
        "saikou": 8.5,
        "heikin": 7.91,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 3.953
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 257.268,
        "saikou": 6.83,
        "heikin": 6.06,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.906
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 177.918,
        "saikou": 7.97,
        "heikin": 7.28,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 4.255
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 149.258,
        "saikou": 8.79,
        "heikin": 7.6,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.108
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 142.208,
        "saikou": 8.41,
        "heikin": 7.2,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 6.317
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 46.99,
        "saikou": 9.8,
        "heikin": 6.43,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 6.327
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 90.24,
        "saikou": 9.8,
        "heikin": 5.59,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.787
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 57.958,
        "saikou": 9.8,
        "heikin": 4,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.974
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 160.299,
        "saikou": 5.79,
        "heikin": 5.42,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.591
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 130.958,
        "saikou": 6.21,
        "heikin": 4.72,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.742
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 169.704,
        "saikou": 4.72,
        "heikin": 4.33,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.499
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 130.958,
        "saikou": 5.93,
        "heikin": 4.78,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.45
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 178.208,
        "saikou": 7.29,
        "heikin": 6.66,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 5.138
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 125.968,
        "saikou": 5.89,
        "heikin": 5.42,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 4.632
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 160.469,
        "saikou": 4.83,
        "heikin": 4.34,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 4.697
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 115.958,
        "saikou": 3.52,
        "heikin": 3.49,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.82
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 158.479,
        "saikou": 3.43,
        "heikin": 3.05,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.844
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 115.958,
        "saikou": 2.86,
        "heikin": 2.79,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.428
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 166.208,
        "saikou": 3.7,
        "heikin": 2.85,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.691
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 197.211,
        "saikou": 3.11,
        "heikin": 2.69,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.088
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 70.882,
        "saikou": 8.58,
        "heikin": 4.63,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 5.454
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 70.882,
        "saikou": 9,
        "heikin": 4.82,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 5.529
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 90.76,
        "saikou": 10,
        "heikin": 5.05,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 5.574
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 92.72,
        "saikou": 9.83,
        "heikin": 4.82,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 5.536
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 86.84,
        "saikou": 9.2,
        "heikin": 4.44,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 5.491
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 72.34,
        "saikou": 9.09,
        "heikin": 4.8,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 5.461
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 105.72,
        "saikou": 9,
        "heikin": 4.73,
        "boshuAvg30d": 117.8,
        "heikinAvg30d": 5.415
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 107.22,
        "saikou": 8.95,
        "heikin": 4.54,
        "boshuAvg30d": 117.9,
        "heikinAvg30d": 5.312
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 111.218,
        "saikou": 8.68,
        "heikin": 4.47,
        "boshuAvg30d": 117.8,
        "heikinAvg30d": 5.102
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 111.218,
        "saikou": 8.65,
        "heikin": 4.44,
        "boshuAvg30d": 117.9,
        "heikinAvg30d": 5.107
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 111.218,
        "saikou": 8.58,
        "heikin": 4.62,
        "boshuAvg30d": 117.9,
        "heikinAvg30d": 5.367
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 111.218,
        "saikou": 8.33,
        "heikin": 4.55,
        "boshuAvg30d": 117.9,
        "heikinAvg30d": 5.447
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 111.218,
        "saikou": 7.89,
        "heikin": 4.49,
        "boshuAvg30d": 124.9,
        "heikinAvg30d": 5.691
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 109.718,
        "saikou": 7.64,
        "heikin": 4.44,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 5.754
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 111.218,
        "saikou": 6.94,
        "heikin": 4.06,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 6.128
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 109.718,
        "saikou": 6.46,
        "heikin": 3.81,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 6.23
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 110.868,
        "saikou": 4.43,
        "heikin": 2.52,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 6.214
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 109.57,
        "saikou": 5.32,
        "heikin": 2.94,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 6.291
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 88.608,
        "saikou": 5.83,
        "heikin": 5.48,
        "boshuAvg30d": 75.7,
        "heikinAvg30d": 6.144
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 86.678,
        "saikou": 6.15,
        "heikin": 4.01,
        "boshuAvg30d": 75.9,
        "heikinAvg30d": 6.278
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 84.689,
        "saikou": 4.48,
        "heikin": 3.42,
        "boshuAvg30d": 75.0,
        "heikinAvg30d": 6.274
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 82.759,
        "saikou": 4.48,
        "heikin": 3.53,
        "boshuAvg30d": 75.1,
        "heikinAvg30d": 6.437
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 86.714,
        "saikou": 4.34,
        "heikin": 3.43,
        "boshuAvg30d": 76.0,
        "heikinAvg30d": 6.418
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 86.714,
        "saikou": 4.34,
        "heikin": 3.44,
        "boshuAvg30d": 76.0,
        "heikinAvg30d": 6.462
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 111.218,
        "saikou": 4.77,
        "heikin": 3.18,
        "boshuAvg30d": 71.9,
        "heikinAvg30d": 6.484
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 110.648,
        "saikou": 5.11,
        "heikin": 3.24,
        "boshuAvg30d": 71.9,
        "heikinAvg30d": 6.508
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 124.95,
        "saikou": 4.53,
        "heikin": 2.88,
        "boshuAvg30d": 71.9,
        "heikinAvg30d": 5.904
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 110.678,
        "saikou": 6.15,
        "heikin": 4.02,
        "boshuAvg30d": 70.9,
        "heikinAvg30d": 5.994
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 109.328,
        "saikou": 6.15,
        "heikin": 4.45,
        "boshuAvg30d": 70.9,
        "heikinAvg30d": 5.86
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 111.294,
        "saikou": 4.48,
        "heikin": 3.27,
        "boshuAvg30d": 69.0,
        "heikinAvg30d": 5.337
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 101.214,
        "saikou": 10,
        "heikin": 4.09,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 5.202
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 101.178,
        "saikou": 4.95,
        "heikin": 3.11,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 4.521
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 101.214,
        "saikou": 9.5,
        "heikin": 4.98,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 4.245
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 99.714,
        "saikou": 5.7,
        "heikin": 3.59,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 4.246
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 101.214,
        "saikou": 5.17,
        "heikin": 3.69,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 4.293
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 111.714,
        "saikou": 5.11,
        "heikin": 2.79,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 4.154
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 111.218,
        "saikou": 4.92,
        "heikin": 2.7,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 3.837
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 109.718,
        "saikou": 6.18,
        "heikin": 3.06,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 3.524
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 109.318,
        "saikou": 6.2,
        "heikin": 3.09,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 3.438
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 111.218,
        "saikou": 6.2,
        "heikin": 3.12,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 3.725
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 107.263,
        "saikou": 3.69,
        "heikin": 2.39,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 3.691
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 107.263,
        "saikou": 5.11,
        "heikin": 2.82,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 3.822
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 107.938,
        "saikou": 6.15,
        "heikin": 3.6,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.045
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 95.368,
        "saikou": 7.12,
        "heikin": 4.29,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 3.991
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 96.718,
        "saikou": 7.47,
        "heikin": 4.54,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.008
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 96.491,
        "saikou": 8,
        "heikin": 4.81,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.375
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 111.218,
        "saikou": 8.32,
        "heikin": 5.42,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 4.412
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 97.148,
        "saikou": 8.65,
        "heikin": 4.04,
        "boshuAvg30d": 46.4,
        "heikinAvg30d": 5.006
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 283,
        "ouatsu": 395.952,
        "saikou": 6.81,
        "heikin": 2.11,
        "boshuAvg30d": 237.4,
        "heikinAvg30d": 3.327
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 283,
        "ouatsu": 409.529,
        "saikou": 7.5,
        "heikin": 1.33,
        "boshuAvg30d": 237.4,
        "heikinAvg30d": 3.259
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 283,
        "ouatsu": 419.312,
        "saikou": 1.51,
        "heikin": 0.95,
        "boshuAvg30d": 237.4,
        "heikinAvg30d": 3.103
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 283,
        "ouatsu": 434.171,
        "saikou": 1.3,
        "heikin": 0.68,
        "boshuAvg30d": 237.4,
        "heikinAvg30d": 3.104
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 281,
        "ouatsu": 436.023,
        "saikou": 1.37,
        "heikin": 0.71,
        "boshuAvg30d": 236.3,
        "heikinAvg30d": 3.136
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 281,
        "ouatsu": 457.933,
        "saikou": 7.15,
        "heikin": 1.02,
        "boshuAvg30d": 235.4,
        "heikinAvg30d": 2.934
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 279,
        "ouatsu": 524.903,
        "saikou": 6.65,
        "heikin": 0.91,
        "boshuAvg30d": 233.4,
        "heikinAvg30d": 3.179
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 281,
        "ouatsu": 547.635,
        "saikou": 7.01,
        "heikin": 1.75,
        "boshuAvg30d": 235.4,
        "heikinAvg30d": 3.324
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 281,
        "ouatsu": 496.637,
        "saikou": 7.01,
        "heikin": 1.89,
        "boshuAvg30d": 235.4,
        "heikinAvg30d": 3.289
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 282,
        "ouatsu": 502.32,
        "saikou": 6.83,
        "heikin": 2.3,
        "boshuAvg30d": 236.4,
        "heikinAvg30d": 3.46
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 282,
        "ouatsu": 498.47,
        "saikou": 6.84,
        "heikin": 2.18,
        "boshuAvg30d": 236.4,
        "heikinAvg30d": 3.358
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 282,
        "ouatsu": 507.633,
        "saikou": 6.85,
        "heikin": 2.28,
        "boshuAvg30d": 236.4,
        "heikinAvg30d": 3.569
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 302,
        "ouatsu": 524.947,
        "saikou": 6.85,
        "heikin": 2.3,
        "boshuAvg30d": 255.5,
        "heikinAvg30d": 3.639
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 310,
        "ouatsu": 578.882,
        "saikou": 6.84,
        "heikin": 2.08,
        "boshuAvg30d": 263.5,
        "heikinAvg30d": 3.881
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 314,
        "ouatsu": 564.203,
        "saikou": 6.69,
        "heikin": 2.38,
        "boshuAvg30d": 268.4,
        "heikinAvg30d": 3.535
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 319,
        "ouatsu": 518.056,
        "saikou": 6.64,
        "heikin": 2.21,
        "boshuAvg30d": 273.7,
        "heikinAvg30d": 3.18
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 319,
        "ouatsu": 424.474,
        "saikou": 5.77,
        "heikin": 1.33,
        "boshuAvg30d": 274.1,
        "heikinAvg30d": 2.938
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 319,
        "ouatsu": 454.604,
        "saikou": 6.43,
        "heikin": 1.9,
        "boshuAvg30d": 277.9,
        "heikinAvg30d": 3.034
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 309,
        "ouatsu": 460.095,
        "saikou": 6.12,
        "heikin": 2.1,
        "boshuAvg30d": 269.7,
        "heikinAvg30d": 2.903
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 309,
        "ouatsu": 432.616,
        "saikou": 6.73,
        "heikin": 2.26,
        "boshuAvg30d": 269.7,
        "heikinAvg30d": 2.991
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 309,
        "ouatsu": 436.959,
        "saikou": 6.72,
        "heikin": 2.49,
        "boshuAvg30d": 270.3,
        "heikinAvg30d": 2.963
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 309,
        "ouatsu": 462.293,
        "saikou": 6.78,
        "heikin": 2.44,
        "boshuAvg30d": 269.4,
        "heikinAvg30d": 2.891
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 306,
        "ouatsu": 414.041,
        "saikou": 6.69,
        "heikin": 2.42,
        "boshuAvg30d": 267.3,
        "heikinAvg30d": 2.926
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 306,
        "ouatsu": 395.717,
        "saikou": 6.69,
        "heikin": 2.45,
        "boshuAvg30d": 267.3,
        "heikinAvg30d": 2.977
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 304,
        "ouatsu": 422.006,
        "saikou": 6.7,
        "heikin": 2.53,
        "boshuAvg30d": 264.1,
        "heikinAvg30d": 2.713
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 304,
        "ouatsu": 424.042,
        "saikou": 6.71,
        "heikin": 2.6,
        "boshuAvg30d": 264.1,
        "heikinAvg30d": 2.709
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 304,
        "ouatsu": 424.211,
        "saikou": 6.71,
        "heikin": 2.29,
        "boshuAvg30d": 264.1,
        "heikinAvg30d": 3.031
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 304,
        "ouatsu": 363.249,
        "saikou": 5.7,
        "heikin": 1.43,
        "boshuAvg30d": 263.8,
        "heikinAvg30d": 3.046
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 303,
        "ouatsu": 401.659,
        "saikou": 5.79,
        "heikin": 1.29,
        "boshuAvg30d": 262.8,
        "heikinAvg30d": 2.988
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 303,
        "ouatsu": 408.932,
        "saikou": 6.72,
        "heikin": 2.21,
        "boshuAvg30d": 261.9,
        "heikinAvg30d": 2.82
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 301,
        "ouatsu": 354.419,
        "saikou": 6.3,
        "heikin": 1.21,
        "boshuAvg30d": 259.9,
        "heikinAvg30d": 2.794
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 301,
        "ouatsu": 408.947,
        "saikou": 5.18,
        "heikin": 1.02,
        "boshuAvg30d": 259.6,
        "heikinAvg30d": 2.779
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 301,
        "ouatsu": 388.95,
        "saikou": 4.88,
        "heikin": 1.15,
        "boshuAvg30d": 259.3,
        "heikinAvg30d": 2.741
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 301,
        "ouatsu": 430.464,
        "saikou": 6.51,
        "heikin": 1.98,
        "boshuAvg30d": 259.3,
        "heikinAvg30d": 2.72
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 301,
        "ouatsu": 442.389,
        "saikou": 6.45,
        "heikin": 1.92,
        "boshuAvg30d": 257.3,
        "heikinAvg30d": 2.615
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 301,
        "ouatsu": 441.862,
        "saikou": 6.72,
        "heikin": 2.27,
        "boshuAvg30d": 257.3,
        "heikinAvg30d": 2.657
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 303,
        "ouatsu": 465.402,
        "saikou": 6.73,
        "heikin": 2.29,
        "boshuAvg30d": 259.1,
        "heikinAvg30d": 2.815
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 303,
        "ouatsu": 505.329,
        "saikou": 6.86,
        "heikin": 2.31,
        "boshuAvg30d": 259.1,
        "heikinAvg30d": 2.619
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 303,
        "ouatsu": 537.172,
        "saikou": 6.87,
        "heikin": 2.22,
        "boshuAvg30d": 259.1,
        "heikinAvg30d": 2.675
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 303,
        "ouatsu": 517.031,
        "saikou": 6.75,
        "heikin": 2.23,
        "boshuAvg30d": 259.5,
        "heikinAvg30d": 2.49
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 302,
        "ouatsu": 452.994,
        "saikou": 6.75,
        "heikin": 2.09,
        "boshuAvg30d": 257.6,
        "heikinAvg30d": 2.407
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 302,
        "ouatsu": 451.002,
        "saikou": 6.72,
        "heikin": 2.32,
        "boshuAvg30d": 257.6,
        "heikinAvg30d": 2.648
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 301,
        "ouatsu": 486.352,
        "saikou": 6.66,
        "heikin": 3,
        "boshuAvg30d": 257.5,
        "heikinAvg30d": 2.364
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 301,
        "ouatsu": 649.919,
        "saikou": 6.68,
        "heikin": 2.55,
        "boshuAvg30d": 257.5,
        "heikinAvg30d": 2.418
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 301,
        "ouatsu": 639.801,
        "saikou": 6.65,
        "heikin": 3,
        "boshuAvg30d": 260.5,
        "heikinAvg30d": 2.346
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 299,
        "ouatsu": 593.154,
        "saikou": 6.74,
        "heikin": 2.69,
        "boshuAvg30d": 255.5,
        "heikinAvg30d": 2.469
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 297,
        "ouatsu": 538.085,
        "saikou": 6.76,
        "heikin": 2.08,
        "boshuAvg30d": 253.8,
        "heikinAvg30d": 2.984
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 296,
        "ouatsu": 528.991,
        "saikou": 1.34,
        "heikin": 0.62,
        "boshuAvg30d": 252.1,
        "heikinAvg30d": 3.04
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 243,
        "ouatsu": 388.62,
        "saikou": 9.19,
        "heikin": 2.01,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 1.63
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 243,
        "ouatsu": 390.566,
        "saikou": 9.19,
        "heikin": 2.3,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 1.546
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 243,
        "ouatsu": 406.803,
        "saikou": 9.19,
        "heikin": 2.24,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 1.562
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 404.875,
        "saikou": 9.19,
        "heikin": 2.31,
        "boshuAvg30d": 110.2,
        "heikinAvg30d": 1.616
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 242,
        "ouatsu": 396.804,
        "saikou": 9.19,
        "heikin": 2.43,
        "boshuAvg30d": 109.3,
        "heikinAvg30d": 1.6
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 394.82,
        "saikou": 9.19,
        "heikin": 2.27,
        "boshuAvg30d": 109.2,
        "heikinAvg30d": 1.569
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 420.655,
        "saikou": 9.19,
        "heikin": 1.98,
        "boshuAvg30d": 108.2,
        "heikinAvg30d": 1.434
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 403.203,
        "saikou": 9.19,
        "heikin": 1.71,
        "boshuAvg30d": 108.2,
        "heikinAvg30d": 1.486
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 240,
        "ouatsu": 404.929,
        "saikou": 9.27,
        "heikin": 1.57,
        "boshuAvg30d": 109.0,
        "heikinAvg30d": 1.428
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 240,
        "ouatsu": 389.001,
        "saikou": 4.07,
        "heikin": 1.7,
        "boshuAvg30d": 109.0,
        "heikinAvg30d": 1.422
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 240,
        "ouatsu": 390.991,
        "saikou": 9.27,
        "heikin": 1.74,
        "boshuAvg30d": 109.0,
        "heikinAvg30d": 1.387
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 240,
        "ouatsu": 385.607,
        "saikou": 9.27,
        "heikin": 1.86,
        "boshuAvg30d": 109.0,
        "heikinAvg30d": 1.316
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 390.991,
        "saikou": 9.27,
        "heikin": 1.76,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 1.579
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 255,
        "ouatsu": 399.011,
        "saikou": 9.27,
        "heikin": 1.51,
        "boshuAvg30d": 122.3,
        "heikinAvg30d": 1.641
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 258,
        "ouatsu": 397.027,
        "saikou": 9.27,
        "heikin": 1.64,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 1.913
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 260,
        "ouatsu": 397.511,
        "saikou": 9.27,
        "heikin": 1.38,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 2.001
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 260,
        "ouatsu": 439.234,
        "saikou": 9.27,
        "heikin": 2.25,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 2.005
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 260,
        "ouatsu": 417.166,
        "saikou": 9.49,
        "heikin": 2.58,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 2.158
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 265,
        "ouatsu": 397.027,
        "saikou": 9.49,
        "heikin": 2.52,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.612
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 265,
        "ouatsu": 337.974,
        "saikou": 9.49,
        "heikin": 1.79,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.637
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 265,
        "ouatsu": 324.157,
        "saikou": 9.49,
        "heikin": 1.82,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.776
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 265,
        "ouatsu": 330.13,
        "saikou": 9.49,
        "heikin": 1.82,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.781
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 264,
        "ouatsu": 330.112,
        "saikou": 9.49,
        "heikin": 1.7,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 2.649
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 263,
        "ouatsu": 332.162,
        "saikou": 9.49,
        "heikin": 1.7,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 2.681
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 259,
        "ouatsu": 312.318,
        "saikou": 9.49,
        "heikin": 1.72,
        "boshuAvg30d": 126.3,
        "heikinAvg30d": 2.585
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 259,
        "ouatsu": 304.32,
        "saikou": 9.49,
        "heikin": 1.69,
        "boshuAvg30d": 126.3,
        "heikinAvg30d": 2.535
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 259,
        "ouatsu": 334.062,
        "saikou": 9.49,
        "heikin": 1.72,
        "boshuAvg30d": 126.3,
        "heikinAvg30d": 2.559
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 259,
        "ouatsu": 355.872,
        "saikou": 9.49,
        "heikin": 1.92,
        "boshuAvg30d": 125.4,
        "heikinAvg30d": 2.657
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 259,
        "ouatsu": 359.059,
        "saikou": 9.49,
        "heikin": 1.98,
        "boshuAvg30d": 125.4,
        "heikinAvg30d": 2.886
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 259,
        "ouatsu": 376.901,
        "saikou": 9.69,
        "heikin": 2.19,
        "boshuAvg30d": 125.4,
        "heikinAvg30d": 2.805
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 257,
        "ouatsu": 446.72,
        "saikou": 9.69,
        "heikin": 3.13,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 2.765
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 257,
        "ouatsu": 464.854,
        "saikou": 9.69,
        "heikin": 3.64,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 2.884
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 257,
        "ouatsu": 431.346,
        "saikou": 9.69,
        "heikin": 3.6,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 2.753
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 256,
        "ouatsu": 420.924,
        "saikou": 9.69,
        "heikin": 2.83,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 2.757
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 256,
        "ouatsu": 420.924,
        "saikou": 9.69,
        "heikin": 2.77,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 2.593
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 255,
        "ouatsu": 403.72,
        "saikou": 9.69,
        "heikin": 2.58,
        "boshuAvg30d": 122.3,
        "heikinAvg30d": 2.494
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 253,
        "ouatsu": 436.815,
        "saikou": 9.69,
        "heikin": 2.45,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 2.122
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 253,
        "ouatsu": 434.817,
        "saikou": 9.69,
        "heikin": 2.47,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 2.041
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 253,
        "ouatsu": 461.058,
        "saikou": 9.69,
        "heikin": 2.22,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 1.751
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 253,
        "ouatsu": 472.242,
        "saikou": 9.69,
        "heikin": 2.34,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 1.631
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 253,
        "ouatsu": 462.337,
        "saikou": 9.69,
        "heikin": 2.16,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 1.52
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 253,
        "ouatsu": 460.353,
        "saikou": 9.27,
        "heikin": 2.05,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 1.568
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 255,
        "ouatsu": 468.262,
        "saikou": 9.27,
        "heikin": 1.96,
        "boshuAvg30d": 121.4,
        "heikinAvg30d": 1.498
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 255,
        "ouatsu": 450.172,
        "saikou": 9.27,
        "heikin": 1.38,
        "boshuAvg30d": 122.3,
        "heikinAvg30d": 1.73
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 255,
        "ouatsu": 448.188,
        "saikou": 9.27,
        "heikin": 1.26,
        "boshuAvg30d": 122.3,
        "heikinAvg30d": 1.737
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 450.172,
        "saikou": 9.27,
        "heikin": 1.36,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 1.801
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 448.312,
        "saikou": 9.27,
        "heikin": 1.12,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 1.685
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 444.788,
        "saikou": 9.27,
        "heikin": 1.29,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 1.774
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.55,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.278
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.15,
        "heikin": 2.05,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.233
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 1.93,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.238
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 1.93,
        "saikou": 2.35,
        "heikin": 2.35,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.119
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.6,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 1.279
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.331
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.35,
        "heikin": 1.2,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.779
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.93,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.091
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.946
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.65,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.078
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.07,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.374
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.24,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.199
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.12,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.97
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.57,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.055
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.75,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.445
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 3.25,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.034
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.7,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.078
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.27,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.914
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.2,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.327
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.68,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.709
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 13.054,
        "saikou": 5.91,
        "heikin": 5.78,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 4.3
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.19,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 4.624
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.9,
        "heikin": 4.8,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 3.537
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.9,
        "heikin": 4.8,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 3.416
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 59.772,
        "saikou": 5.3,
        "heikin": 1.16,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.397
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 23.146,
        "saikou": 4.65,
        "heikin": 1.47,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.136
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 52.056,
        "saikou": 6.19,
        "heikin": 6.02,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.772
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 31.842,
        "saikou": 10,
        "heikin": 9.1,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.129
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.05,
        "heikin": 4.9,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.836
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.35,
        "heikin": 4.25,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.748
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 6.25,
        "heikin": 6.2,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.989
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 7.35,
        "heikin": 7.2,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 5.783
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.55,
        "heikin": 4.4,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 4.567
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 4,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 4.097
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 4.15,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 4.109
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 4.15,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 4.467
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.42,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 3.62
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.35,
        "heikin": 3.94,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.215
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.2,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 3.195
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.5,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 3.423
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.32,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.792
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 3.1,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.58
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.65,
        "heikin": 3.22,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.596
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.45,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.566
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 2.89,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.817
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 2.84,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.354
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.52,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.099
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.43,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.61
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 210.096,
        "saikou": 1.69,
        "heikin": 0.8,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.249
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 206.655,
        "saikou": 1.69,
        "heikin": 0.8,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.048
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 153.729,
        "saikou": 1.69,
        "heikin": 0.54,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 0.996
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 199.278,
        "saikou": 1.69,
        "heikin": 0.61,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 0.986
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 203.296,
        "saikou": 1.69,
        "heikin": 0.65,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 0.978
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 208.116,
        "saikou": 1.99,
        "heikin": 0.89,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.193
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 109.277,
        "saikou": 1.99,
        "heikin": 1.39,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.315
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 113.265,
        "saikou": 1.99,
        "heikin": 1.71,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.513
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 113.265,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.477
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 113.265,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.514
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 113.265,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.519
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 113.265,
        "saikou": 1.99,
        "heikin": 1.5,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.433
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 144.447,
        "saikou": 1.99,
        "heikin": 1.19,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.498
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 172.101,
        "saikou": 1.99,
        "heikin": 1.15,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 1.479
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 150.374,
        "saikou": 2,
        "heikin": 1.39,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.559
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 150.374,
        "saikou": 2.09,
        "heikin": 1.43,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 1.61
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 87.332,
        "saikou": 2.09,
        "heikin": 1.51,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 1.598
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 69.707,
        "saikou": 3.94,
        "heikin": 3.02,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 2.12
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 69.707,
        "saikou": 9.99,
        "heikin": 3.69,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 2.168
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 69.707,
        "saikou": 9.99,
        "heikin": 4,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 2.231
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 89.463,
        "saikou": 5.94,
        "heikin": 2.56,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 2.215
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 128.691,
        "saikou": 5.94,
        "heikin": 1.87,
        "boshuAvg30d": 162.5,
        "heikinAvg30d": 2.368
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 109.619,
        "saikou": 5.94,
        "heikin": 2.2,
        "boshuAvg30d": 161.4,
        "heikinAvg30d": 2.412
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 129.233,
        "saikou": 3,
        "heikin": 1.57,
        "boshuAvg30d": 161.5,
        "heikinAvg30d": 2.149
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 148.178,
        "saikou": 3,
        "heikin": 1.31,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 1.919
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 150.176,
        "saikou": 3,
        "heikin": 1.27,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 2.018
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 91.34,
        "saikou": 5.94,
        "heikin": 2.57,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 2.376
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 112.992,
        "saikou": 9.99,
        "heikin": 3.73,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 2.214
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 97.992,
        "saikou": 9.99,
        "heikin": 4.62,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 2.253
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 112.992,
        "saikou": 9.99,
        "heikin": 4.31,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 2.047
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 67.729,
        "saikou": 9.99,
        "heikin": 3.83,
        "boshuAvg30d": 159.5,
        "heikinAvg30d": 2.369
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 52.729,
        "saikou": 9.99,
        "heikin": 3.8,
        "boshuAvg30d": 159.5,
        "heikinAvg30d": 2.566
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 67.729,
        "saikou": 9.99,
        "heikin": 3.84,
        "boshuAvg30d": 159.5,
        "heikinAvg30d": 2.54
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 61.743,
        "saikou": 9.99,
        "heikin": 3.07,
        "boshuAvg30d": 159.5,
        "heikinAvg30d": 2.118
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 61.743,
        "saikou": 9.99,
        "heikin": 3.26,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 2.175
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 61.743,
        "saikou": 9.99,
        "heikin": 3.3,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.43
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 60.318,
        "saikou": 9.99,
        "heikin": 3.15,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.884
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 60.318,
        "saikou": 9.99,
        "heikin": 3.11,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.884
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 69.707,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.758
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 69.707,
        "saikou": 1.99,
        "heikin": 1.82,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 1.736
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 67.722,
        "saikou": 9.99,
        "heikin": 3.02,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 1.659
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 67.722,
        "saikou": 9.99,
        "heikin": 2.99,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 1.681
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 154.454,
        "saikou": 9.99,
        "heikin": 3.74,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 1.641
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 239.729,
        "saikou": 9.99,
        "heikin": 3.17,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 1.728
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 239.729,
        "saikou": 9.99,
        "heikin": 3.21,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 1.697
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 239.729,
        "saikou": 9.99,
        "heikin": 3.22,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 1.574
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 128.673,
        "saikou": 9.99,
        "heikin": 1.73,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 1.428
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 65.84,
        "saikou": 1.99,
        "heikin": 1.74,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.594
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 143,
        "ouatsu": 120.039,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.37
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 143,
        "ouatsu": 120.039,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.503
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 143,
        "ouatsu": 120.039,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.22
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 143,
        "ouatsu": 122.029,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.042
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 143,
        "ouatsu": 122.029,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.094
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 143,
        "ouatsu": 123.829,
        "saikou": 2.29,
        "heikin": 1.74,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.33
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 143,
        "ouatsu": 142.681,
        "saikou": 2.29,
        "heikin": 1.69,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.533
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 144,
        "ouatsu": 141.681,
        "saikou": 2.29,
        "heikin": 1.69,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 2.858
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 144,
        "ouatsu": 141.681,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 3.134
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 144,
        "ouatsu": 78.213,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 3.487
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 144,
        "ouatsu": 78.213,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 3.344
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 144,
        "ouatsu": 78.213,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 3.156
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 146,
        "ouatsu": 78.213,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 3.154
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 147,
        "ouatsu": 78.213,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 2.929
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 147,
        "ouatsu": 78.213,
        "saikou": 7.99,
        "heikin": 2.01,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.087
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 148,
        "ouatsu": 92.956,
        "saikou": 2.29,
        "heikin": 1.67,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.828
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 148,
        "ouatsu": 78.213,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.88
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 148,
        "ouatsu": 78.213,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.873
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 92.751,
        "saikou": 2.7,
        "heikin": 1.56,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.008
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 152,
        "ouatsu": 121.799,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.04
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 153,
        "ouatsu": 121.799,
        "saikou": 2.7,
        "heikin": 1.8,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 1.639
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 154,
        "ouatsu": 121.799,
        "saikou": 2.7,
        "heikin": 1.73,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.716
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 154,
        "ouatsu": 121.799,
        "saikou": 2.7,
        "heikin": 1.75,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.579
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 154,
        "ouatsu": 121.799,
        "saikou": 2.7,
        "heikin": 1.76,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.71
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 151,
        "ouatsu": 121.799,
        "saikou": 2.7,
        "heikin": 1.75,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.528
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 151,
        "ouatsu": 121.799,
        "saikou": 2.7,
        "heikin": 1.75,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.757
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 151,
        "ouatsu": 133.749,
        "saikou": 2.7,
        "heikin": 1.91,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.79
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 151,
        "ouatsu": 70.281,
        "saikou": 2.7,
        "heikin": 1.91,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.888
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 151,
        "ouatsu": 70.281,
        "saikou": 2.7,
        "heikin": 1.97,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.948
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 150,
        "ouatsu": 70.281,
        "saikou": 7.99,
        "heikin": 2.48,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.02
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 150,
        "ouatsu": 70.281,
        "saikou": 7.99,
        "heikin": 2.55,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.16
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 150,
        "ouatsu": 70.281,
        "saikou": 7.99,
        "heikin": 2.54,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.438
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 150,
        "ouatsu": 70.281,
        "saikou": 7.99,
        "heikin": 2.62,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.979
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 150,
        "ouatsu": 70.281,
        "saikou": 7.99,
        "heikin": 2.71,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.72
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 150,
        "ouatsu": 58.331,
        "saikou": 7.99,
        "heikin": 2.81,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.914
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 150,
        "ouatsu": 58.331,
        "saikou": 7.99,
        "heikin": 2.65,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.992
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 150,
        "ouatsu": 57.341,
        "saikou": 7.99,
        "heikin": 2.6,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.964
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 150,
        "ouatsu": 57.341,
        "saikou": 7.99,
        "heikin": 2.59,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.948
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 150,
        "ouatsu": 77.223,
        "saikou": 7.99,
        "heikin": 2.03,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.691
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 150,
        "ouatsu": 79.213,
        "saikou": 7.99,
        "heikin": 2.01,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.46
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 149,
        "ouatsu": 79.213,
        "saikou": 7.99,
        "heikin": 2,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.817
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 149,
        "ouatsu": 139.512,
        "saikou": 7.99,
        "heikin": 2.61,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.684
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 79.213,
        "saikou": 7.99,
        "heikin": 2,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 3.726
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 79.213,
        "saikou": 7.99,
        "heikin": 2.01,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 3.554
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 79.213,
        "saikou": 7.99,
        "heikin": 2.01,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 3.476
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 147,
        "ouatsu": 142.681,
        "saikou": 7.99,
        "heikin": 2.05,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.968
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 146,
        "ouatsu": 142.681,
        "saikou": 7.99,
        "heikin": 2.05,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.899
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 146,
        "ouatsu": 142.681,
        "saikou": 7.99,
        "heikin": 1.81,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.076
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.37,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.857
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.808
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.759
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.762
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.39,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.767
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.38,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.753
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 200.343,
        "saikou": 1.7,
        "heikin": 0.65,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.764
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 188.8,
        "saikou": 1.7,
        "heikin": 0.71,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.783
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 199.343,
        "saikou": 1.7,
        "heikin": 0.73,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.829
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 210.343,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.893
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 2.04,
        "heikin": 0.78,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.876
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.6,
        "heikin": 0.42,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.831
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 2.04,
        "heikin": 0.75,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.987
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.5,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 0.894
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.827
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 0.86,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.839
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.796
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.96,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.812
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 148.843,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.068
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 148.843,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.026
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 156.3,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.062
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.91,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.977
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.91,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.002
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 147.3,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.022
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 113.3,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.011
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 113.3,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.029
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 113.3,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.029
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 113.3,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.062
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 113.3,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.124
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 113.3,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.069
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 90.3,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.141
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 90.3,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.153
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 90.3,
        "saikou": 1.95,
        "heikin": 0.85,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.371
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 95.3,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.519
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 95.3,
        "saikou": 3,
        "heikin": 0.93,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 1.615
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 91.3,
        "saikou": 2.85,
        "heikin": 0.9,
        "boshuAvg30d": 42.9,
        "heikinAvg30d": 1.647
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 91.3,
        "saikou": 2.9,
        "heikin": 0.9,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.594
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 91.3,
        "saikou": 1.95,
        "heikin": 0.86,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.6
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 91.3,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.503
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 91.3,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.511
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 91.3,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.482
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 90.3,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.454
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 181.8,
        "saikou": 1.6,
        "heikin": 0.41,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.042
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 182.8,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.962
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 176.8,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.936
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 176.8,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.857
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 178.8,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.929
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 197.8,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.915
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 173.227,
        "saikou": 8.07,
        "heikin": 5.71,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.371
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 177.125,
        "saikou": 6.88,
        "heikin": 4.58,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.089
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 175.155,
        "saikou": 6.02,
        "heikin": 4.27,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.056
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 175.153,
        "saikou": 5.95,
        "heikin": 4.21,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.893
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 175.153,
        "saikou": 5.95,
        "heikin": 4.19,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.905
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 175.153,
        "saikou": 6.88,
        "heikin": 4.27,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.222
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 195.744,
        "saikou": 8.74,
        "heikin": 5.87,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.477
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 190.92,
        "saikou": 9.06,
        "heikin": 6.08,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.084
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 195.705,
        "saikou": 9.25,
        "heikin": 6.18,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.153
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 194.668,
        "saikou": 9.36,
        "heikin": 6.21,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.36
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 247.668,
        "saikou": 9.79,
        "heikin": 7.13,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.61
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 244.368,
        "saikou": 9.85,
        "heikin": 7.16,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.436
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 191.368,
        "saikou": 9.87,
        "heikin": 6.47,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 6.158
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 189.392,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.714
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 192.392,
        "saikou": 10,
        "heikin": 6.79,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 4.73
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 192.392,
        "saikou": 10,
        "heikin": 6.77,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 4.038
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 192.392,
        "saikou": 10,
        "heikin": 6.94,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 3.856
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 192.392,
        "saikou": 10,
        "heikin": 6.87,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 3.771
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 177.978,
        "saikou": 10,
        "heikin": 6.8,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.672
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 166.978,
        "saikou": 10,
        "heikin": 6.59,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.655
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 116.978,
        "saikou": 10,
        "heikin": 5.09,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 3.456
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 163.041,
        "saikou": 10,
        "heikin": 6.67,
        "boshuAvg30d": 181.7,
        "heikinAvg30d": 3.365
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 155.321,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 181.7,
        "heikinAvg30d": 3.15
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 157.307,
        "saikou": 10,
        "heikin": 6.77,
        "boshuAvg30d": 181.7,
        "heikinAvg30d": 3.145
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 187.409,
        "saikou": 10,
        "heikin": 7.47,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 2.913
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 188.555,
        "saikou": 10,
        "heikin": 7.46,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.027
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 187.88,
        "saikou": 10,
        "heikin": 6.62,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.71
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 180.23,
        "saikou": 10,
        "heikin": 6.83,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 4.331
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 180.23,
        "saikou": 10,
        "heikin": 6.87,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 4.262
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 180.23,
        "saikou": 10,
        "heikin": 6.94,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.974
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 186.769,
        "saikou": 10,
        "heikin": 7.21,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 5.374
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 147.845,
        "saikou": 10,
        "heikin": 6.65,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 5.455
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 231.394,
        "saikou": 10,
        "heikin": 8.11,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 6.488
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 247.87,
        "saikou": 10,
        "heikin": 7.68,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 7.097
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 178.041,
        "saikou": 10,
        "heikin": 7.11,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 7.218
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 173.231,
        "saikou": 10,
        "heikin": 7.2,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 7.353
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 210.768,
        "saikou": 10,
        "heikin": 7.83,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.297
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 267.631,
        "saikou": 10,
        "heikin": 8.14,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.262
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 273.952,
        "saikou": 10,
        "heikin": 7.68,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.968
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 275.941,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.539
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 140.79,
        "saikou": 10,
        "heikin": 5.79,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.774
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 182.209,
        "saikou": 10,
        "heikin": 6.96,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.4
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 180.222,
        "saikou": 10,
        "heikin": 6.87,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.304
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 180.22,
        "saikou": 10,
        "heikin": 6.7,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.185
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 183.218,
        "saikou": 9.75,
        "heikin": 6.51,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.347
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 188.017,
        "saikou": 9.44,
        "heikin": 6.31,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.073
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 177.015,
        "saikou": 9.28,
        "heikin": 6.12,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 5.876
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 180.055,
        "saikou": 8.27,
        "heikin": 5.53,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 5.23
      }
    ]
  }
};
