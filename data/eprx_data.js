// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/25〜2026/09/23）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-24",
  "fetchedAt": "2026-09-24",
  "avgWindowLabel": "過去30日平均（2026/08/25〜2026/09/23）",
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
      "boshu": 1249,
      "ouatsu": 1286.907,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1390.6,
      "heikinAvg30d": 2.88
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1249,
      "ouatsu": 1382.807,
      "saikou": 10,
      "heikin": 2.53,
      "boshuAvg30d": 1390.6,
      "heikinAvg30d": 2.813
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1249,
      "ouatsu": 1483.454,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1390.6,
      "heikinAvg30d": 2.901
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1249,
      "ouatsu": 1421.386,
      "saikou": 10,
      "heikin": 2.53,
      "boshuAvg30d": 1390.1,
      "heikinAvg30d": 2.883
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1244,
      "ouatsu": 1385.629,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1385.1,
      "heikinAvg30d": 2.912
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1243,
      "ouatsu": 1475.819,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1383.9,
      "heikinAvg30d": 2.928
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1243,
      "ouatsu": 1641.138,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1392.0,
      "heikinAvg30d": 2.992
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1244,
      "ouatsu": 1548.91,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1393.0,
      "heikinAvg30d": 3.062
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1247,
      "ouatsu": 1656.765,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1396.2,
      "heikinAvg30d": 3.125
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1247,
      "ouatsu": 1637.297,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1396.5,
      "heikinAvg30d": 3.116
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1247,
      "ouatsu": 1620.238,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1396.5,
      "heikinAvg30d": 3.198
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1247,
      "ouatsu": 1661.442,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1396.5,
      "heikinAvg30d": 3.174
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1313,
      "ouatsu": 1800.991,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1461.8,
      "heikinAvg30d": 3.439
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1635.782,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1483.2,
      "heikinAvg30d": 3.342
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1357,
      "ouatsu": 1590.118,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1506.2,
      "heikinAvg30d": 3.369
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1375,
      "ouatsu": 1660.808,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1523.3,
      "heikinAvg30d": 3.363
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1376,
      "ouatsu": 1519.894,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1524.1,
      "heikinAvg30d": 3.59
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1376,
      "ouatsu": 1522.249,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1524.1,
      "heikinAvg30d": 3.812
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1313,
      "ouatsu": 1450.04,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1477.9,
      "heikinAvg30d": 3.816
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1317,
      "ouatsu": 1402.291,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1482.2,
      "heikinAvg30d": 3.737
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1325,
      "ouatsu": 1286.649,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1489.9,
      "heikinAvg30d": 3.721
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1325,
      "ouatsu": 1386.482,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1489.9,
      "heikinAvg30d": 3.758
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1322,
      "ouatsu": 1382.914,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1486.5,
      "heikinAvg30d": 3.675
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1321,
      "ouatsu": 1429.418,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1485.7,
      "heikinAvg30d": 3.661
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1314,
      "ouatsu": 1425.603,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1476.5,
      "heikinAvg30d": 3.488
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1314,
      "ouatsu": 1445.767,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1476.5,
      "heikinAvg30d": 3.486
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1314,
      "ouatsu": 1272.78,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1474.0,
      "heikinAvg30d": 3.771
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1318,
      "ouatsu": 1369.43,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1468.0,
      "heikinAvg30d": 3.97
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1313,
      "ouatsu": 1342.757,
      "saikou": 10,
      "heikin": 4.03,
      "boshuAvg30d": 1463.7,
      "heikinAvg30d": 4.075
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1306,
      "ouatsu": 1365.35,
      "saikou": 10,
      "heikin": 4.14,
      "boshuAvg30d": 1457.4,
      "heikinAvg30d": 4.056
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1363,
      "ouatsu": 1443.375,
      "saikou": 10,
      "heikin": 3.73,
      "boshuAvg30d": 1503.4,
      "heikinAvg30d": 4.068
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1363,
      "ouatsu": 1475.17,
      "saikou": 10,
      "heikin": 4.35,
      "boshuAvg30d": 1503.4,
      "heikinAvg30d": 4.262
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1363,
      "ouatsu": 1618.173,
      "saikou": 10,
      "heikin": 5.26,
      "boshuAvg30d": 1503.2,
      "heikinAvg30d": 4.325
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1359,
      "ouatsu": 1625.146,
      "saikou": 10,
      "heikin": 5.29,
      "boshuAvg30d": 1500.5,
      "heikinAvg30d": 4.526
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1347,
      "ouatsu": 1481.773,
      "saikou": 10,
      "heikin": 5.9,
      "boshuAvg30d": 1493.1,
      "heikinAvg30d": 4.612
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1343,
      "ouatsu": 1465.954,
      "saikou": 10,
      "heikin": 5.86,
      "boshuAvg30d": 1489.1,
      "heikinAvg30d": 4.576
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1335,
      "ouatsu": 1682.307,
      "saikou": 10,
      "heikin": 6.04,
      "boshuAvg30d": 1480.8,
      "heikinAvg30d": 4.608
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1335,
      "ouatsu": 1621.218,
      "saikou": 10,
      "heikin": 6.05,
      "boshuAvg30d": 1480.6,
      "heikinAvg30d": 4.495
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1336,
      "ouatsu": 1691.304,
      "saikou": 10,
      "heikin": 5.96,
      "boshuAvg30d": 1481.0,
      "heikinAvg30d": 4.326
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1335,
      "ouatsu": 1687.923,
      "saikou": 10,
      "heikin": 5.74,
      "boshuAvg30d": 1480.2,
      "heikinAvg30d": 4.12
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1330,
      "ouatsu": 1768.615,
      "saikou": 10,
      "heikin": 5.47,
      "boshuAvg30d": 1475.2,
      "heikinAvg30d": 3.941
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1326,
      "ouatsu": 1719.067,
      "saikou": 10,
      "heikin": 5.57,
      "boshuAvg30d": 1471.9,
      "heikinAvg30d": 3.787
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1233,
      "ouatsu": 1777.97,
      "saikou": 10,
      "heikin": 4.42,
      "boshuAvg30d": 1384.4,
      "heikinAvg30d": 3.49
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1236,
      "ouatsu": 1742.853,
      "saikou": 10,
      "heikin": 4.95,
      "boshuAvg30d": 1387.4,
      "heikinAvg30d": 3.82
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1237,
      "ouatsu": 1733.566,
      "saikou": 9.49,
      "heikin": 4.41,
      "boshuAvg30d": 1388.4,
      "heikinAvg30d": 3.541
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1230,
      "ouatsu": 1864.136,
      "saikou": 10,
      "heikin": 4.48,
      "boshuAvg30d": 1381.7,
      "heikinAvg30d": 3.445
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1223,
      "ouatsu": 1822.743,
      "saikou": 10,
      "heikin": 4.5,
      "boshuAvg30d": 1374.2,
      "heikinAvg30d": 3.439
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1215,
      "ouatsu": 1741.277,
      "saikou": 10,
      "heikin": 4.19,
      "boshuAvg30d": 1366.0,
      "heikinAvg30d": 3.253
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
        "ouatsu": 153.961,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.07
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 197.208,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.026
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 175.058,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.07
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.028
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 154.908,
        "saikou": 3.15,
        "heikin": 1.05,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.333
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 189.517,
        "saikou": 3.95,
        "heikin": 1.12,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.402
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 226.567,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.496
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.618
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 224.008,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.946
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.725
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 207.823,
        "saikou": 1.01,
        "heikin": 0.93,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.652
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 191.958,
        "saikou": 9.65,
        "heikin": 0.92,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.773
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 234.148,
        "saikou": 3.95,
        "heikin": 1.15,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.294
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 203.018,
        "saikou": 3.95,
        "heikin": 1.13,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.77
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.662
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 189.058,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.698
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 148.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.062
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 183.517,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.263
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 1.174
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 181.567,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 1.268
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 1.2
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 223.488,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 1.247
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 184.99,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 1.134
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 184.99,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 1.125
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 209.917,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 1.176
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 207.927,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 1.12
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 173.945,
        "saikou": 8,
        "heikin": 1.89,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 1.68
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 207.945,
        "saikou": 3.95,
        "heikin": 1.37,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 1.777
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 211.885,
        "saikou": 8,
        "heikin": 2.7,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.604
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 188.908,
        "saikou": 9.91,
        "heikin": 2.4,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.764
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 232.513,
        "saikou": 1.01,
        "heikin": 0.9,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.121
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 151.958,
        "saikou": 8.85,
        "heikin": 2.78,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.061
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 112.958,
        "saikou": 8,
        "heikin": 6.28,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.401
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 157.3,
        "saikou": 10,
        "heikin": 6.52,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.106
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 87.958,
        "saikou": 8.02,
        "heikin": 7.77,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.807
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 87.958,
        "saikou": 6.02,
        "heikin": 5.85,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.584
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 134.29,
        "saikou": 10,
        "heikin": 6.63,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.547
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 150.99,
        "saikou": 10,
        "heikin": 7.91,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.426
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 196.033,
        "saikou": 10,
        "heikin": 6.35,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.33
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 9.11,
        "heikin": 7.08,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.1
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 197.961,
        "saikou": 6.81,
        "heikin": 4.88,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.505
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 154.908,
        "saikou": 6.81,
        "heikin": 5.6,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.743
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 198.001,
        "saikou": 4.16,
        "heikin": 2.92,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.479
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 152.958,
        "saikou": 8,
        "heikin": 6.18,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.855
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 199.268,
        "saikou": 6.06,
        "heikin": 3.85,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.475
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 201.258,
        "saikou": 5.59,
        "heikin": 3.55,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.383
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 154.908,
        "saikou": 6.52,
        "heikin": 4.9,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.094
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 242.208,
        "saikou": 5.01,
        "heikin": 3.37,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.611
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 50.439,
        "saikou": 10,
        "heikin": 6.76,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 8.385
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 50.439,
        "saikou": 10,
        "heikin": 6.77,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 8.665
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 80.987,
        "saikou": 10,
        "heikin": 7.71,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 9.03
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 80.987,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 8.993
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 78.989,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 8.947
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 78.989,
        "saikou": 10,
        "heikin": 7.67,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 8.961
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 93.987,
        "saikou": 10,
        "heikin": 7.87,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 8.91
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 95.487,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 8.912
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.85,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 8.882
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 8.822
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 8.744
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.81,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 8.847
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 181.6,
        "heikinAvg30d": 8.957
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 95.986,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 186.8,
        "heikinAvg30d": 9.26
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 192.6,
        "heikinAvg30d": 9.333
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 95.986,
        "saikou": 10,
        "heikin": 8.16,
        "boshuAvg30d": 196.4,
        "heikinAvg30d": 9.232
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.48,
        "boshuAvg30d": 196.4,
        "heikinAvg30d": 9.274
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.47,
        "boshuAvg30d": 196.4,
        "heikinAvg30d": 9.063
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 84.134,
        "saikou": 10,
        "heikin": 9.48,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 8.339
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 106.134,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 8.462
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 8.274
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 9.28,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 8.283
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 130.134,
        "saikou": 10,
        "heikin": 9.08,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 8.294
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 132.132,
        "saikou": 10,
        "heikin": 9.12,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 8.419
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 127.721,
        "saikou": 10,
        "heikin": 9.22,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 8.511
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 127.721,
        "saikou": 10,
        "heikin": 9.16,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 8.527
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 133.482,
        "saikou": 10,
        "heikin": 9.03,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 8.126
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 133.482,
        "saikou": 10,
        "heikin": 9,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 8.148
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 121.482,
        "saikou": 10,
        "heikin": 9.03,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 8.577
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 121.482,
        "saikou": 10,
        "heikin": 9.02,
        "boshuAvg30d": 136.3,
        "heikinAvg30d": 8.546
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 75.482,
        "saikou": 10,
        "heikin": 8.55,
        "boshuAvg30d": 193.1,
        "heikinAvg30d": 8.88
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 63.482,
        "saikou": 10,
        "heikin": 9.3,
        "boshuAvg30d": 193.1,
        "heikinAvg30d": 8.37
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 63.482,
        "saikou": 10,
        "heikin": 9.3,
        "boshuAvg30d": 193.1,
        "heikinAvg30d": 8.175
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 61.982,
        "saikou": 10,
        "heikin": 9.28,
        "boshuAvg30d": 191.8,
        "heikinAvg30d": 7.893
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 63.482,
        "saikou": 10,
        "heikin": 9.3,
        "boshuAvg30d": 189.8,
        "heikinAvg30d": 7.809
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 60.017,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 187.8,
        "heikinAvg30d": 7.831
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 59.521,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 186.6,
        "heikinAvg30d": 7.772
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 59.986,
        "saikou": 10,
        "heikin": 9.26,
        "boshuAvg30d": 186.6,
        "heikinAvg30d": 7.813
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 186.6,
        "heikinAvg30d": 8.029
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 8.305
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 185.6,
        "heikinAvg30d": 8.508
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 8.692
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 101.6,
        "heikinAvg30d": 8.559
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 101.6,
        "heikinAvg30d": 8.699
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 107.486,
        "saikou": 9.49,
        "heikin": 6.43,
        "boshuAvg30d": 101.6,
        "heikinAvg30d": 8.766
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 103.656,
        "saikou": 9.4,
        "heikin": 6.4,
        "boshuAvg30d": 100.6,
        "heikinAvg30d": 8.907
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 103.656,
        "saikou": 9.4,
        "heikin": 6.37,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 8.917
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 7.54,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 8.926
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 426,
        "ouatsu": 251.977,
        "saikou": 9.27,
        "heikin": 4.01,
        "boshuAvg30d": 510.5,
        "heikinAvg30d": 3.578
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 426,
        "ouatsu": 288.699,
        "saikou": 9.27,
        "heikin": 3.61,
        "boshuAvg30d": 510.5,
        "heikinAvg30d": 3.411
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 426,
        "ouatsu": 344.844,
        "saikou": 9.27,
        "heikin": 3.35,
        "boshuAvg30d": 510.5,
        "heikinAvg30d": 3.333
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 426,
        "ouatsu": 328.281,
        "saikou": 9.27,
        "heikin": 3.32,
        "boshuAvg30d": 510.2,
        "heikinAvg30d": 3.237
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 424,
        "ouatsu": 314.313,
        "saikou": 9.27,
        "heikin": 3.29,
        "boshuAvg30d": 508.2,
        "heikinAvg30d": 3.182
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 424,
        "ouatsu": 315.909,
        "saikou": 9.27,
        "heikin": 3.37,
        "boshuAvg30d": 508.2,
        "heikinAvg30d": 3.151
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 423,
        "ouatsu": 386.176,
        "saikou": 9.27,
        "heikin": 3.13,
        "boshuAvg30d": 507.0,
        "heikinAvg30d": 3.089
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 424,
        "ouatsu": 346.978,
        "saikou": 9.27,
        "heikin": 3.27,
        "boshuAvg30d": 508.0,
        "heikinAvg30d": 3.223
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 425,
        "ouatsu": 401.713,
        "saikou": 9.27,
        "heikin": 3.03,
        "boshuAvg30d": 509.0,
        "heikinAvg30d": 3.191
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 425,
        "ouatsu": 413.788,
        "saikou": 9.27,
        "heikin": 3.21,
        "boshuAvg30d": 509.2,
        "heikinAvg30d": 3.205
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 425,
        "ouatsu": 395.391,
        "saikou": 9.27,
        "heikin": 3.35,
        "boshuAvg30d": 509.2,
        "heikinAvg30d": 3.263
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 425,
        "ouatsu": 367.006,
        "saikou": 9.27,
        "heikin": 3.54,
        "boshuAvg30d": 509.2,
        "heikinAvg30d": 3.271
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 446,
        "ouatsu": 456.264,
        "saikou": 9.27,
        "heikin": 3.74,
        "boshuAvg30d": 530.2,
        "heikinAvg30d": 3.657
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 454,
        "ouatsu": 436.162,
        "saikou": 9.27,
        "heikin": 3.94,
        "boshuAvg30d": 538.2,
        "heikinAvg30d": 3.714
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 459,
        "ouatsu": 436.162,
        "saikou": 9.27,
        "heikin": 4.11,
        "boshuAvg30d": 543.7,
        "heikinAvg30d": 3.82
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 464,
        "ouatsu": 460.704,
        "saikou": 9.27,
        "heikin": 4.01,
        "boshuAvg30d": 548.5,
        "heikinAvg30d": 3.823
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 464,
        "ouatsu": 422.758,
        "saikou": 9.27,
        "heikin": 4.23,
        "boshuAvg30d": 548.5,
        "heikinAvg30d": 4.165
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 464,
        "ouatsu": 381.066,
        "saikou": 9.27,
        "heikin": 4.18,
        "boshuAvg30d": 548.5,
        "heikinAvg30d": 4.396
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 455,
        "ouatsu": 426.158,
        "saikou": 9.27,
        "heikin": 4.25,
        "boshuAvg30d": 542.2,
        "heikinAvg30d": 4.237
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 455,
        "ouatsu": 403.118,
        "saikou": 9.27,
        "heikin": 3.94,
        "boshuAvg30d": 542.2,
        "heikinAvg30d": 4.112
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 455,
        "ouatsu": 355.686,
        "saikou": 9.27,
        "heikin": 3.75,
        "boshuAvg30d": 542.2,
        "heikinAvg30d": 3.942
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 454,
        "ouatsu": 380.271,
        "saikou": 9.27,
        "heikin": 3.75,
        "boshuAvg30d": 541.2,
        "heikinAvg30d": 4.003
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 451,
        "ouatsu": 378.906,
        "saikou": 9.27,
        "heikin": 3.72,
        "boshuAvg30d": 538.2,
        "heikinAvg30d": 4.052
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 451,
        "ouatsu": 375.106,
        "saikou": 9.27,
        "heikin": 3.76,
        "boshuAvg30d": 538.2,
        "heikinAvg30d": 4.059
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 450,
        "ouatsu": 346.863,
        "saikou": 9.27,
        "heikin": 3.49,
        "boshuAvg30d": 537.2,
        "heikinAvg30d": 3.832
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 450,
        "ouatsu": 346.863,
        "saikou": 9.27,
        "heikin": 3.62,
        "boshuAvg30d": 537.2,
        "heikinAvg30d": 3.891
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 450,
        "ouatsu": 243.466,
        "saikou": 9.27,
        "heikin": 4.49,
        "boshuAvg30d": 534.7,
        "heikinAvg30d": 4.067
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 459,
        "ouatsu": 235.072,
        "saikou": 9.27,
        "heikin": 4.45,
        "boshuAvg30d": 533.7,
        "heikinAvg30d": 4.269
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 458,
        "ouatsu": 203.7,
        "saikou": 9.27,
        "heikin": 5.75,
        "boshuAvg30d": 532.9,
        "heikinAvg30d": 4.392
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 458,
        "ouatsu": 218.123,
        "saikou": 9.27,
        "heikin": 4.63,
        "boshuAvg30d": 532.9,
        "heikinAvg30d": 4.234
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 457,
        "ouatsu": 187.261,
        "saikou": 9.27,
        "heikin": 5.66,
        "boshuAvg30d": 531.9,
        "heikinAvg30d": 4.244
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 457,
        "ouatsu": 231.348,
        "saikou": 9.27,
        "heikin": 5.78,
        "boshuAvg30d": 531.9,
        "heikinAvg30d": 4.34
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 457,
        "ouatsu": 328.029,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 531.5,
        "heikinAvg30d": 4.474
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 455,
        "ouatsu": 328.029,
        "saikou": 10,
        "heikin": 8.76,
        "boshuAvg30d": 531.5,
        "heikinAvg30d": 4.646
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 447,
        "ouatsu": 346.666,
        "saikou": 10,
        "heikin": 8.44,
        "boshuAvg30d": 527.6,
        "heikinAvg30d": 4.773
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 447,
        "ouatsu": 341.016,
        "saikou": 10,
        "heikin": 8.38,
        "boshuAvg30d": 527.6,
        "heikinAvg30d": 4.649
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 449,
        "ouatsu": 352.709,
        "saikou": 10,
        "heikin": 8.5,
        "boshuAvg30d": 529.8,
        "heikinAvg30d": 4.633
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 449,
        "ouatsu": 334.277,
        "saikou": 10,
        "heikin": 8.73,
        "boshuAvg30d": 529.6,
        "heikinAvg30d": 4.473
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 450,
        "ouatsu": 341.008,
        "saikou": 10,
        "heikin": 8.96,
        "boshuAvg30d": 530.0,
        "heikinAvg30d": 4.377
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 450,
        "ouatsu": 334.601,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 530.0,
        "heikinAvg30d": 4.346
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 448,
        "ouatsu": 314.767,
        "saikou": 10,
        "heikin": 8.64,
        "boshuAvg30d": 528.2,
        "heikinAvg30d": 3.997
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 448,
        "ouatsu": 318.81,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 528.2,
        "heikinAvg30d": 4.039
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 447,
        "ouatsu": 316.777,
        "saikou": 9.38,
        "heikin": 7.91,
        "boshuAvg30d": 527.5,
        "heikinAvg30d": 3.776
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 447,
        "ouatsu": 363.286,
        "saikou": 10,
        "heikin": 7.67,
        "boshuAvg30d": 527.5,
        "heikinAvg30d": 4.49
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 447,
        "ouatsu": 305.446,
        "saikou": 9.27,
        "heikin": 6.54,
        "boshuAvg30d": 527.5,
        "heikinAvg30d": 4.08
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 445,
        "ouatsu": 407.79,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 525.5,
        "heikinAvg30d": 4.045
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 443,
        "ouatsu": 404.977,
        "saikou": 10,
        "heikin": 6.64,
        "boshuAvg30d": 523.2,
        "heikinAvg30d": 4.209
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 442,
        "ouatsu": 247.883,
        "saikou": 10,
        "heikin": 8.16,
        "boshuAvg30d": 522.0,
        "heikinAvg30d": 3.943
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 211.029,
        "saikou": 2.77,
        "heikin": 2.68,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 2.237
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 222.713,
        "saikou": 2.71,
        "heikin": 2.61,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 2.113
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 242.129,
        "saikou": 2.7,
        "heikin": 2.59,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 2.104
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 225.906,
        "saikou": 2.7,
        "heikin": 2.54,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 2.245
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 202.161,
        "saikou": 2.5,
        "heikin": 2.21,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 2.425
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 228.213,
        "saikou": 2.57,
        "heikin": 2.42,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 2.516
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 253.868,
        "saikou": 2.65,
        "heikin": 2.46,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 2.403
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 248.168,
        "saikou": 2.75,
        "heikin": 2.57,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 2.507
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 253.868,
        "saikou": 2.74,
        "heikin": 2.61,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 2.573
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 253.868,
        "saikou": 2.7,
        "heikin": 2.55,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 2.429
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 255.858,
        "saikou": 2.75,
        "heikin": 2.66,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 2.472
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 254.358,
        "saikou": 2.75,
        "heikin": 2.61,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 2.437
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 255.858,
        "saikou": 2.77,
        "heikin": 2.62,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 2.581
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 247.974,
        "saikou": 2.79,
        "heikin": 2.71,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.479
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 247.974,
        "saikou": 2.79,
        "heikin": 2.7,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 2.588
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 255.858,
        "saikou": 2.79,
        "heikin": 2.49,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 2.641
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 252.359,
        "saikou": 2.8,
        "heikin": 2.73,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 3.113
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 254.349,
        "saikou": 2.89,
        "heikin": 2.73,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 3.163
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 219.027,
        "saikou": 4.03,
        "heikin": 2.97,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.569
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 221.017,
        "saikou": 4.08,
        "heikin": 3.02,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.561
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 206.13,
        "saikou": 7.59,
        "heikin": 3.5,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.729
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 206.13,
        "saikou": 4.99,
        "heikin": 3.25,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.771
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 211.996,
        "saikou": 5.07,
        "heikin": 3.33,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 3.505
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 211.996,
        "saikou": 7.59,
        "heikin": 3.48,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 3.299
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 204.784,
        "saikou": 3.84,
        "heikin": 3.05,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 3.26
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 223.005,
        "saikou": 3.88,
        "heikin": 2.95,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 3.26
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 226.718,
        "saikou": 3.85,
        "heikin": 2.85,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 3.465
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 285.396,
        "saikou": 4.03,
        "heikin": 2.49,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 3.62
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 306.481,
        "saikou": 4.41,
        "heikin": 2.84,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 3.794
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 288.391,
        "saikou": 5.01,
        "heikin": 3.21,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 3.721
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 268.21,
        "saikou": 6.32,
        "heikin": 3.6,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.54
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 350.252,
        "saikou": 6.62,
        "heikin": 3.15,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.617
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 429.352,
        "saikou": 3.02,
        "heikin": 2.35,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.58
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 427.754,
        "saikou": 3.77,
        "heikin": 2.17,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 3.834
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 343.576,
        "saikou": 4,
        "heikin": 3.33,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.766
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 340.077,
        "saikou": 3.88,
        "heikin": 3.22,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.541
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 344.883,
        "saikou": 3.57,
        "heikin": 3.05,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 3.508
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 429.061,
        "saikou": 2.8,
        "heikin": 1.97,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 3.336
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 435.094,
        "saikou": 2.79,
        "heikin": 1.99,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.982
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 435.094,
        "saikou": 2.79,
        "heikin": 2.51,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.977
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 429.128,
        "saikou": 2.76,
        "heikin": 1.87,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 3.019
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 410.092,
        "saikou": 2.75,
        "heikin": 1.89,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.827
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 412.835,
        "saikou": 2.8,
        "heikin": 1.91,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.686
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 414.695,
        "saikou": 2.8,
        "heikin": 2.1,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.971
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 405.495,
        "saikou": 2.8,
        "heikin": 2.3,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.702
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 405.495,
        "saikou": 2.8,
        "heikin": 2.18,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.81
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 405.495,
        "saikou": 2.77,
        "heikin": 2.18,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 2.899
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 403.995,
        "saikou": 2.65,
        "heikin": 1.5,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.903
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 1.35,
        "heikin": 0.44,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.15
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.1,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.399
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 1.7,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.433
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.55,
        "heikin": 0.51,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.69
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.4,
        "heikin": 0.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.977
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 1.5,
        "heikin": 0.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.523
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.45,
        "heikin": 0.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.699
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.55,
        "heikin": 0.46,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.845
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.65,
        "heikin": 0.52,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.677
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 1.05,
        "heikin": 0.98,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.424
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 43.75,
        "saikou": 2.24,
        "heikin": 2.11,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.505
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2,
        "heikin": 1.77,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.455
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 50.828,
        "saikou": 2.24,
        "heikin": 2.13,
        "boshuAvg30d": 56.8,
        "heikinAvg30d": 2.136
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 31.032,
        "saikou": 2.59,
        "heikin": 0.66,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.577
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 63.928,
        "saikou": 2.55,
        "heikin": 0.46,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.922
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 63.928,
        "saikou": 2.6,
        "heikin": 0.46,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.938
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 63.928,
        "saikou": 1.65,
        "heikin": 0.43,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.791
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 3.543
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.718
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.52,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.916
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 6,
        "heikin": 3.73,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.471
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 6.96,
        "heikin": 3.58,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.815
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.41
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 6.896,
        "saikou": 4.2,
        "heikin": 3.66,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.383
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 5.986,
        "saikou": 6,
        "heikin": 4.09,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.447
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 8.019,
        "saikou": 3.5,
        "heikin": 3.26,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.181
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 11.708,
        "saikou": 6,
        "heikin": 3.58,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.653
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.528
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 2.89,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.704
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 4.56,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.535
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 7.574,
        "saikou": 5.5,
        "heikin": 3.59,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 3.538
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.8,
        "heikin": 3.86,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 3.797
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.45,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.236
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.29,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.658
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 3.87,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.197
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 9.688,
        "saikou": 9.62,
        "heikin": 8.13,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.711
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.082
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.75,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.802
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.822
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.68,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.205
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 12.874,
        "saikou": 4.05,
        "heikin": 3.51,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.15
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 19.872,
        "saikou": 3.57,
        "heikin": 3.34,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.95
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.27,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.534
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.27,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.68
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.723
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 12.158,
        "saikou": 2.3,
        "heikin": 2.14,
        "boshuAvg30d": 58.8,
        "heikinAvg30d": 2.133
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 28.928,
        "saikou": 2.5,
        "heikin": 0.66,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 2.234
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 63.928,
        "saikou": 2.5,
        "heikin": 0.51,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.766
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 80.407,
        "saikou": 2.5,
        "heikin": 2.37,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.013
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 97.405,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 1.866
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 95.445,
        "saikou": 2.5,
        "heikin": 2.37,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 1.981
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 91.467,
        "saikou": 2.5,
        "heikin": 2.37,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 1.942
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 87.471,
        "saikou": 2.5,
        "heikin": 2.37,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.041
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 113.414,
        "saikou": 2.5,
        "heikin": 1.8,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 2.016
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 97.911,
        "saikou": 2.5,
        "heikin": 2.41,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.026
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 99.354,
        "saikou": 2.5,
        "heikin": 2.37,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.082
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 2.5,
        "heikin": 2.37,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.01
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 97.911,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.035
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 102.522,
        "saikou": 2.5,
        "heikin": 2.29,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.092
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 117.598,
        "saikou": 2.44,
        "heikin": 1.93,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.015
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.93,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 2.732
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 99.354,
        "saikou": 2.79,
        "heikin": 2.45,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.687
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 84.354,
        "saikou": 2.79,
        "heikin": 2.45,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.613
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 112.166,
        "saikou": 2.8,
        "heikin": 1.98,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 2.909
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 88.221,
        "saikou": 2.8,
        "heikin": 2.48,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 3.631
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 88.221,
        "saikou": 2.9,
        "heikin": 2.49,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 3.67
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 88.221,
        "saikou": 4,
        "heikin": 2.9,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 3.824
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 86.223,
        "saikou": 4,
        "heikin": 2.74,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 3.885
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 105.831,
        "saikou": 6.47,
        "heikin": 2.59,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 4.189
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 125.445,
        "saikou": 5.97,
        "heikin": 2.41,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 4.115
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 191.651,
        "saikou": 5.95,
        "heikin": 1.92,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 3.929
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 202.089,
        "saikou": 5.5,
        "heikin": 1.69,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 3.739
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 161.54,
        "saikou": 5.47,
        "heikin": 1.64,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 4.249
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 161.54,
        "saikou": 3.95,
        "heikin": 1.13,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 3.569
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 99.78,
        "saikou": 6.44,
        "heikin": 3.34,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 3.79
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 101.778,
        "saikou": 4,
        "heikin": 2.91,
        "boshuAvg30d": 154.9,
        "heikinAvg30d": 3.759
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 101.778,
        "saikou": 4.94,
        "heikin": 3.25,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 3.79
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 4.94,
        "heikin": 3.13,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 3.586
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 4.94,
        "heikin": 3.05,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.419
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 5.97,
        "heikin": 2.96,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.527
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 4,
        "heikin": 2.61,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.648
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 2.97,
        "heikin": 2.52,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.865
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 4.94,
        "heikin": 2.89,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.751
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 103.221,
        "saikou": 4.97,
        "heikin": 2.57,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 3.541
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 2.95,
        "heikin": 2.54,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.364
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 2.8,
        "heikin": 2.43,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.32
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 99.838,
        "saikou": 2.79,
        "heikin": 2.44,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.429
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 95.971,
        "saikou": 2.79,
        "heikin": 2.44,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.259
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 97.414,
        "saikou": 2.5,
        "heikin": 2.37,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.937
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 97.414,
        "saikou": 2.52,
        "heikin": 2.41,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.1
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.94,
        "heikin": 2.4,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.979
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 97.911,
        "saikou": 2.94,
        "heikin": 2.49,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.977
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.95,
        "heikin": 2.55,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.952
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 99.354,
        "saikou": 2.97,
        "heikin": 2.46,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 2.94
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 99.354,
        "saikou": 2.48,
        "heikin": 2.38,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.882
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 99.354,
        "saikou": 2.37,
        "heikin": 2.34,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.828
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 170.208,
        "saikou": 2.5,
        "heikin": 1.39,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.27
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.5,
        "heikin": 0.88,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.457
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.5,
        "heikin": 1.19,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.615
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.5,
        "heikin": 1.2,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.519
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.5,
        "heikin": 1.14,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.442
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.5,
        "heikin": 1.23,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.451
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.5,
        "heikin": 1.28,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.533
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.5,
        "heikin": 1.28,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.644
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.5,
        "heikin": 1.3,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.554
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.5,
        "heikin": 1.9,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.759
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 3.54,
        "heikin": 2.71,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.049
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 3.13,
        "heikin": 2.44,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.978
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 178.13,
        "saikou": 3.54,
        "heikin": 2.73,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 3.456
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 178.13,
        "saikou": 2.79,
        "heikin": 1.35,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 2.793
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.79,
        "heikin": 1.24,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.66
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.3,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.616
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 2.8,
        "heikin": 1.35,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.553
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 2.8,
        "heikin": 1.34,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.405
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 1.58,
        "heikin": 1.09,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.348
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 1.51,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.001
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 67.979,
        "saikou": 5,
        "heikin": 2.42,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.952
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 67.979,
        "saikou": 4.29,
        "heikin": 2.27,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.869
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 82.091,
        "saikou": 4.07,
        "heikin": 2.15,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.818
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 82.091,
        "saikou": 4,
        "heikin": 2.13,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.834
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 82.091,
        "saikou": 4,
        "heikin": 1.77,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.255
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 82.091,
        "saikou": 2.8,
        "heikin": 1.47,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.056
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 82.091,
        "saikou": 4,
        "heikin": 2,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.783
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 82.091,
        "saikou": 2.8,
        "heikin": 1.11,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.024
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 82.091,
        "saikou": 4,
        "heikin": 2.08,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.168
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 78.139,
        "saikou": 4,
        "heikin": 2.17,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.221
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 2.73,
        "heikin": 1.35,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.982
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 193.997,
        "saikou": 2.96,
        "heikin": 2.31,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.736
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 197.219,
        "saikou": 4,
        "heikin": 1.47,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.637
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 192.948,
        "saikou": 2.99,
        "heikin": 2.11,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.908
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 97.958,
        "saikou": 4,
        "heikin": 1.97,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.179
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 97.958,
        "saikou": 4.02,
        "heikin": 3,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.445
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 192.007,
        "saikou": 6.7,
        "heikin": 4.35,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.604
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 192.007,
        "saikou": 6.7,
        "heikin": 4.37,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.734
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 190.207,
        "saikou": 5.61,
        "heikin": 3.78,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.401
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 192.197,
        "saikou": 5.07,
        "heikin": 3.46,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.947
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 193.997,
        "saikou": 5.54,
        "heikin": 3.82,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.724
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 193.997,
        "saikou": 5.06,
        "heikin": 3.41,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 4.17
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 193.997,
        "saikou": 4.89,
        "heikin": 3.26,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 4.002
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 193.997,
        "saikou": 4.63,
        "heikin": 3.16,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.959
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 193.997,
        "saikou": 4.45,
        "heikin": 3.07,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.743
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 190.857,
        "saikou": 3.54,
        "heikin": 2.57,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.421
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 190.857,
        "saikou": 2,
        "heikin": 1.11,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.352
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 190.857,
        "saikou": 2.13,
        "heikin": 0.75,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.346
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 136.973,
        "saikou": 2.5,
        "heikin": 0.9,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.873
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 136.973,
        "saikou": 1.7,
        "heikin": 0.75,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.891
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 137.973,
        "saikou": 2.5,
        "heikin": 0.91,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.899
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 136.973,
        "saikou": 2.5,
        "heikin": 0.9,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.867
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 136.973,
        "saikou": 2.5,
        "heikin": 0.9,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.846
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 136.973,
        "saikou": 1.7,
        "heikin": 0.75,
        "boshuAvg30d": 39.8,
        "heikinAvg30d": 0.858
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 133.973,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.998
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 123.43,
        "saikou": 1.7,
        "heikin": 0.77,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.945
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 132.973,
        "saikou": 2.5,
        "heikin": 0.91,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.977
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 132.973,
        "saikou": 2.5,
        "heikin": 0.91,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.018
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 133.973,
        "saikou": 2.5,
        "heikin": 0.91,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.004
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 133.973,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 144.973,
        "saikou": 2.5,
        "heikin": 0.95,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 0.99
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 145.973,
        "saikou": 2.5,
        "heikin": 0.95,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 0.99
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 136.973,
        "saikou": 2.5,
        "heikin": 0.9,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 1.037
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 136.973,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.904
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 134.973,
        "saikou": 2.5,
        "heikin": 0.89,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.874
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 134.973,
        "saikou": 2.8,
        "heikin": 0.91,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.941
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 100.973,
        "saikou": 2.5,
        "heikin": 1.04,
        "boshuAvg30d": 46.8,
        "heikinAvg30d": 0.998
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 123.973,
        "saikou": 2.85,
        "heikin": 1.19,
        "boshuAvg30d": 46.8,
        "heikinAvg30d": 0.976
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 1.6,
        "heikin": 1.4,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 0.989
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.011
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 1.6,
        "heikin": 1.4,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 0.998
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 1.6,
        "heikin": 1.22,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.0
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.199
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 0.81,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.146
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.473,
        "saikou": 3.8,
        "heikin": 0.75,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.01
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.036
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.15,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.022
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 190.473,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.964
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.989
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.988
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.921
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 156.473,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.998
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 156.473,
        "saikou": 1.6,
        "heikin": 1.1,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.021
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 157.473,
        "saikou": 1.6,
        "heikin": 1.3,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.997
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.22,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.991
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.06,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.034
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.021
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.005
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.001
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.785
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.812
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.804
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.783
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 201.473,
        "saikou": 1.07,
        "heikin": 0.56,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.807
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.846
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 167.985,
        "saikou": 7.41,
        "heikin": 6.56,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 3.923
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 167.961,
        "saikou": 5.56,
        "heikin": 4.94,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 3.689
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 185.609,
        "saikou": 5.28,
        "heikin": 4.62,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 3.435
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 185.615,
        "saikou": 3.94,
        "heikin": 3.48,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 3.436
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 185.615,
        "saikou": 3.81,
        "heikin": 3.4,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 3.329
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 187.605,
        "saikou": 4.45,
        "heikin": 3.94,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 3.387
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 206.598,
        "saikou": 4.52,
        "heikin": 3.96,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 3.541
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 201.477,
        "saikou": 6.6,
        "heikin": 5.46,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 3.605
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 205.305,
        "saikou": 7.31,
        "heikin": 6.05,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.674
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 205.305,
        "saikou": 7.73,
        "heikin": 6.7,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.888
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 205.305,
        "saikou": 7.94,
        "heikin": 6.7,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.937
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 257.005,
        "saikou": 7.74,
        "heikin": 6.88,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.727
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 260.005,
        "saikou": 7.6,
        "heikin": 6.79,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 3.574
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 198.153,
        "saikou": 6.55,
        "heikin": 5.04,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 3.423
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 198.153,
        "saikou": 4.6,
        "heikin": 3.78,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 3.332
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 168.005,
        "saikou": 4.36,
        "heikin": 3.47,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 3.451
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 159.057,
        "saikou": 4.56,
        "heikin": 3.66,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 3.83
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 168.005,
        "saikou": 5.28,
        "heikin": 3.96,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 4.529
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 162.511,
        "saikou": 4.52,
        "heikin": 3.6,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 4.548
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 96.511,
        "saikou": 3.17,
        "heikin": 2.74,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 4.496
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 91.08,
        "saikou": 3,
        "heikin": 2.76,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 4.377
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 112.134,
        "saikou": 4,
        "heikin": 2.78,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 4.519
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 75.245,
        "saikou": 4.38,
        "heikin": 3.31,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.481
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 110.145,
        "saikou": 4.02,
        "heikin": 2.66,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.551
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 110.228,
        "saikou": 3.89,
        "heikin": 2.29,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 3.992
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 112.128,
        "saikou": 3.99,
        "heikin": 2.53,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 4.12
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 147.117,
        "saikou": 3.9,
        "heikin": 2.75,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 4.554
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 143.265,
        "saikou": 4.34,
        "heikin": 3.53,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 5.127
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 134.939,
        "saikou": 4.38,
        "heikin": 3.73,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 5.707
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 186.685,
        "saikou": 7.18,
        "heikin": 5.44,
        "boshuAvg30d": 174.9,
        "heikinAvg30d": 5.997
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 200.511,
        "saikou": 8.25,
        "heikin": 6.16,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.749
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 200.511,
        "saikou": 10,
        "heikin": 7.84,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.64
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 203.511,
        "saikou": 10,
        "heikin": 7.37,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.826
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 173.511,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 7.081
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 278.511,
        "saikou": 10,
        "heikin": 7.8,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 6.729
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 269.546,
        "saikou": 10,
        "heikin": 7.81,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.871
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 336.235,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 6.9
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 196.235,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 6.611
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 210.237,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 6.15
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 258.215,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 5.456
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 261.515,
        "saikou": 9.87,
        "heikin": 7.56,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.942
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 263.015,
        "saikou": 10,
        "heikin": 7.56,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.583
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 258.119,
        "saikou": 8.7,
        "heikin": 4.33,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.339
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 221.119,
        "saikou": 8.94,
        "heikin": 5.09,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.661
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 231.119,
        "saikou": 8.98,
        "heikin": 5.74,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.437
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 233.095,
        "saikou": 8.56,
        "heikin": 5.27,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 3.823
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 233.095,
        "saikou": 8.47,
        "heikin": 6.3,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 3.72
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 221.593,
        "saikou": 8.22,
        "heikin": 6.29,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 3.17
      }
    ]
  }
};
