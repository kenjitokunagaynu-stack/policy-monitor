// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/26〜2026/09/24）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-25",
  "fetchedAt": "2026-09-25",
  "avgWindowLabel": "過去30日平均（2026/08/26〜2026/09/24）",
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
      "ouatsu": 1634.042,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1382.7,
      "heikinAvg30d": 2.86
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1249,
      "ouatsu": 1689.036,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1382.7,
      "heikinAvg30d": 2.787
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1249,
      "ouatsu": 1769.009,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1382.7,
      "heikinAvg30d": 2.877
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1249,
      "ouatsu": 1735.038,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1382.3,
      "heikinAvg30d": 2.849
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1244,
      "ouatsu": 1795.235,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1377.3,
      "heikinAvg30d": 2.874
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1243,
      "ouatsu": 1730.644,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1376.1,
      "heikinAvg30d": 2.893
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1243,
      "ouatsu": 1903.57,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1384.3,
      "heikinAvg30d": 2.952
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1244,
      "ouatsu": 1823.322,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1385.3,
      "heikinAvg30d": 3.028
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1247,
      "ouatsu": 1893.23,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1388.5,
      "heikinAvg30d": 3.089
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1247,
      "ouatsu": 1889.817,
      "saikou": 9.5,
      "heikin": 3.16,
      "boshuAvg30d": 1388.7,
      "heikinAvg30d": 3.097
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1247,
      "ouatsu": 1888.114,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1388.7,
      "heikinAvg30d": 3.185
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1247,
      "ouatsu": 1869.566,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1388.7,
      "heikinAvg30d": 3.166
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1313,
      "ouatsu": 1851.198,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1454.1,
      "heikinAvg30d": 3.419
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1893.362,
      "saikou": 9.4,
      "heikin": 3.14,
      "boshuAvg30d": 1475.5,
      "heikinAvg30d": 3.32
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1357,
      "ouatsu": 1687.503,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1498.5,
      "heikinAvg30d": 3.343
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1375,
      "ouatsu": 1671.988,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1515.7,
      "heikinAvg30d": 3.322
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1376,
      "ouatsu": 1835.289,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1516.5,
      "heikinAvg30d": 3.564
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1376,
      "ouatsu": 1763.22,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1516.5,
      "heikinAvg30d": 3.771
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1313,
      "ouatsu": 1773.959,
      "saikou": 10,
      "heikin": 3.91,
      "boshuAvg30d": 1470.4,
      "heikinAvg30d": 3.802
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1317,
      "ouatsu": 1894.741,
      "saikou": 10,
      "heikin": 3.95,
      "boshuAvg30d": 1474.6,
      "heikinAvg30d": 3.711
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1325,
      "ouatsu": 1989.845,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1482.4,
      "heikinAvg30d": 3.705
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1325,
      "ouatsu": 1948.253,
      "saikou": 10,
      "heikin": 3.57,
      "boshuAvg30d": 1482.4,
      "heikinAvg30d": 3.745
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1322,
      "ouatsu": 1844.875,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1479.0,
      "heikinAvg30d": 3.657
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1321,
      "ouatsu": 1821.958,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1478.2,
      "heikinAvg30d": 3.644
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1314,
      "ouatsu": 1756.64,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1468.9,
      "heikinAvg30d": 3.478
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1314,
      "ouatsu": 1819.51,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1468.9,
      "heikinAvg30d": 3.481
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1314,
      "ouatsu": 1701.555,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1466.4,
      "heikinAvg30d": 3.744
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1308,
      "ouatsu": 1721.757,
      "saikou": 10,
      "heikin": 3.67,
      "boshuAvg30d": 1460.7,
      "heikinAvg30d": 3.902
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1303,
      "ouatsu": 1706.304,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1456.3,
      "heikinAvg30d": 4.001
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1296,
      "ouatsu": 1602.708,
      "saikou": 10,
      "heikin": 3.95,
      "boshuAvg30d": 1449.9,
      "heikinAvg30d": 4.013
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1353,
      "ouatsu": 1615.104,
      "saikou": 10,
      "heikin": 3.74,
      "boshuAvg30d": 1495.8,
      "heikinAvg30d": 3.969
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1353,
      "ouatsu": 1600.966,
      "saikou": 10,
      "heikin": 3.98,
      "boshuAvg30d": 1495.8,
      "heikinAvg30d": 4.152
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1353,
      "ouatsu": 1747.102,
      "saikou": 10,
      "heikin": 4.19,
      "boshuAvg30d": 1495.6,
      "heikinAvg30d": 4.233
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1351,
      "ouatsu": 1659.231,
      "saikou": 10,
      "heikin": 4.52,
      "boshuAvg30d": 1492.9,
      "heikinAvg30d": 4.419
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1347,
      "ouatsu": 1587.249,
      "saikou": 10,
      "heikin": 4.46,
      "boshuAvg30d": 1485.2,
      "heikinAvg30d": 4.528
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1343,
      "ouatsu": 1628.474,
      "saikou": 10,
      "heikin": 4.36,
      "boshuAvg30d": 1481.2,
      "heikinAvg30d": 4.474
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1335,
      "ouatsu": 1618.845,
      "saikou": 10,
      "heikin": 4.32,
      "boshuAvg30d": 1473.0,
      "heikinAvg30d": 4.537
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1335,
      "ouatsu": 1679.879,
      "saikou": 10,
      "heikin": 4.32,
      "boshuAvg30d": 1472.8,
      "heikinAvg30d": 4.453
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1336,
      "ouatsu": 1658.458,
      "saikou": 10,
      "heikin": 4.32,
      "boshuAvg30d": 1473.2,
      "heikinAvg30d": 4.294
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1335,
      "ouatsu": 1664.854,
      "saikou": 10,
      "heikin": 4.25,
      "boshuAvg30d": 1472.4,
      "heikinAvg30d": 4.085
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1330,
      "ouatsu": 1757.734,
      "saikou": 10,
      "heikin": 4.07,
      "boshuAvg30d": 1467.4,
      "heikinAvg30d": 3.93
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1326,
      "ouatsu": 1771.867,
      "saikou": 9.5,
      "heikin": 4.02,
      "boshuAvg30d": 1464.0,
      "heikinAvg30d": 3.815
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1233,
      "ouatsu": 1862.844,
      "saikou": 9.2,
      "heikin": 3.61,
      "boshuAvg30d": 1376.6,
      "heikinAvg30d": 3.512
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1236,
      "ouatsu": 1887.346,
      "saikou": 9.5,
      "heikin": 4.35,
      "boshuAvg30d": 1379.6,
      "heikinAvg30d": 3.777
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1237,
      "ouatsu": 1671.149,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1380.6,
      "heikinAvg30d": 3.536
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1230,
      "ouatsu": 1785.264,
      "saikou": 9.4,
      "heikin": 4.05,
      "boshuAvg30d": 1373.8,
      "heikinAvg30d": 3.46
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1223,
      "ouatsu": 1597.811,
      "saikou": 10,
      "heikin": 4.03,
      "boshuAvg30d": 1366.4,
      "heikinAvg30d": 3.463
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1215,
      "ouatsu": 1559.833,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1358.2,
      "heikinAvg30d": 3.267
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
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.021
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 0.976
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 149.755,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.03
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 0.993
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 203.208,
        "saikou": 2.55,
        "heikin": 2.35,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.253
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 154.908,
        "saikou": 3.95,
        "heikin": 2.51,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.373
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 201.258,
        "saikou": 2.54,
        "heikin": 2.37,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.424
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 2.54,
        "heikin": 2.29,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.521
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 203.208,
        "saikou": 2.54,
        "heikin": 2.35,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.835
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 154.908,
        "saikou": 2.54,
        "heikin": 2.25,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.625
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 185.815,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.617
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 187.805,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.741
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 154.908,
        "saikou": 6.05,
        "heikin": 1.61,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.215
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 219.318,
        "saikou": 3.4,
        "heikin": 1.19,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.721
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 151.958,
        "saikou": 8.85,
        "heikin": 1.54,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.585
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 181.805,
        "saikou": 1,
        "heikin": 0.73,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.62
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 148.908,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.026
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 114.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.158
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 155.458,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 1.081
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 1.135
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 228.296,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 1.094
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 224.356,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 1.104
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 184.968,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 1.006
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 224.356,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 1.042
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 184.968,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 1.108
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 224.356,
        "saikou": 1.01,
        "heikin": 0.91,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 1.057
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 216.87,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 1.595
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 1.551
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 209.935,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.479
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.706
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 170.968,
        "saikou": 1.01,
        "heikin": 0.91,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.741
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 228.758,
        "saikou": 8.8,
        "heikin": 2.54,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.84
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 240.258,
        "saikou": 2.52,
        "heikin": 2.32,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.462
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 150.99,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.129
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 85.99,
        "saikou": 6.27,
        "heikin": 6.27,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.767
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 132.3,
        "saikou": 6.18,
        "heikin": 6.1,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.397
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 87.958,
        "saikou": 4.83,
        "heikin": 4.74,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.503
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 161.258,
        "saikou": 4.83,
        "heikin": 4.58,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.438
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 114.908,
        "saikou": 4.52,
        "heikin": 4.25,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.32
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 163.208,
        "saikou": 4.32,
        "heikin": 3.97,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.093
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 197.374,
        "saikou": 3.7,
        "heikin": 3.44,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.523
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 3.37,
        "heikin": 3.14,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.864
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 152.918,
        "saikou": 2.95,
        "heikin": 2.61,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.511
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 203.208,
        "saikou": 4.16,
        "heikin": 3.81,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.911
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 240.258,
        "saikou": 4.77,
        "heikin": 4.25,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.459
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 152.958,
        "saikou": 4.02,
        "heikin": 3.46,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.412
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 154.908,
        "saikou": 3.79,
        "heikin": 3.25,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.223
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 201.258,
        "saikou": 2.97,
        "heikin": 2.75,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.624
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 64.939,
        "saikou": 10,
        "heikin": 7.26,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 8.376
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 64.939,
        "saikou": 10,
        "heikin": 7.29,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 8.653
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 95.487,
        "saikou": 10,
        "heikin": 7.79,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 9.001
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 95.487,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 8.966
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 93.489,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 8.922
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 93.489,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 8.934
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 93.987,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 8.885
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 95.487,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 8.885
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 8.849
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 9.5,
        "heikin": 7.59,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 8.79
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.74,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 8.715
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 8.814
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.8,
        "boshuAvg30d": 181.8,
        "heikinAvg30d": 8.911
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 95.986,
        "saikou": 9.4,
        "heikin": 7.52,
        "boshuAvg30d": 187.0,
        "heikinAvg30d": 9.142
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 8.53,
        "boshuAvg30d": 192.8,
        "heikinAvg30d": 9.203
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 95.986,
        "saikou": 10,
        "heikin": 8.68,
        "boshuAvg30d": 196.6,
        "heikinAvg30d": 9.111
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 8.51,
        "boshuAvg30d": 196.6,
        "heikinAvg30d": 9.224
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 95.986,
        "saikou": 10,
        "heikin": 9.01,
        "boshuAvg30d": 196.6,
        "heikinAvg30d": 8.987
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 8.79,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 8.354
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 8.446
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 132.132,
        "saikou": 10,
        "heikin": 8.64,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 8.251
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 132.132,
        "saikou": 10,
        "heikin": 9.02,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 8.287
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 132.132,
        "saikou": 10,
        "heikin": 8.9,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 8.284
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 132.132,
        "saikou": 10,
        "heikin": 9.09,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 8.394
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 129.686,
        "saikou": 10,
        "heikin": 9.09,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 8.445
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 129.686,
        "saikou": 10,
        "heikin": 9.22,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 8.459
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 133.482,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 8.124
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 131.517,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 8.166
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 133.482,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 8.515
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 133.482,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 8.462
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 121.482,
        "saikou": 10,
        "heikin": 8.76,
        "boshuAvg30d": 193.2,
        "heikinAvg30d": 8.792
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 8.9,
        "boshuAvg30d": 193.2,
        "heikinAvg30d": 8.323
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 7.1,
        "boshuAvg30d": 193.2,
        "heikinAvg30d": 8.147
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 106.017,
        "saikou": 10,
        "heikin": 6.59,
        "boshuAvg30d": 192.0,
        "heikinAvg30d": 7.812
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 6.69,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 7.732
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 107.982,
        "saikou": 10,
        "heikin": 6.64,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 7.75
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.63,
        "boshuAvg30d": 186.8,
        "heikinAvg30d": 7.685
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 105.986,
        "saikou": 10,
        "heikin": 6.58,
        "boshuAvg30d": 186.8,
        "heikinAvg30d": 7.732
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.63,
        "boshuAvg30d": 186.8,
        "heikinAvg30d": 8.025
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.63,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 8.303
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.67,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 8.391
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 107.486,
        "saikou": 9.5,
        "heikin": 6.59,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 8.568
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 107.486,
        "saikou": 9,
        "heikin": 5.83,
        "boshuAvg30d": 101.7,
        "heikinAvg30d": 8.541
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 107.486,
        "saikou": 9.5,
        "heikin": 7.18,
        "boshuAvg30d": 101.7,
        "heikinAvg30d": 8.668
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.63,
        "boshuAvg30d": 101.7,
        "heikinAvg30d": 8.719
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 105.556,
        "saikou": 9.4,
        "heikin": 6.42,
        "boshuAvg30d": 100.7,
        "heikinAvg30d": 8.831
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 83.556,
        "saikou": 10,
        "heikin": 7.7,
        "boshuAvg30d": 99.7,
        "heikinAvg30d": 8.905
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 98.7,
        "heikinAvg30d": 8.933
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 426,
        "ouatsu": 534,
        "saikou": 9.22,
        "heikin": 4.52,
        "boshuAvg30d": 506.4,
        "heikinAvg30d": 3.54
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 426,
        "ouatsu": 503.419,
        "saikou": 9.22,
        "heikin": 4.53,
        "boshuAvg30d": 506.4,
        "heikinAvg30d": 3.404
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 426,
        "ouatsu": 507.389,
        "saikou": 9.22,
        "heikin": 4.3,
        "boshuAvg30d": 506.4,
        "heikinAvg30d": 3.312
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 426,
        "ouatsu": 514.784,
        "saikou": 9.22,
        "heikin": 4.06,
        "boshuAvg30d": 506.2,
        "heikinAvg30d": 3.213
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 424,
        "ouatsu": 506.703,
        "saikou": 9.22,
        "heikin": 4.08,
        "boshuAvg30d": 504.2,
        "heikinAvg30d": 3.174
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 424,
        "ouatsu": 484.114,
        "saikou": 9.22,
        "heikin": 4.17,
        "boshuAvg30d": 504.2,
        "heikinAvg30d": 3.149
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 423,
        "ouatsu": 520.671,
        "saikou": 9.22,
        "heikin": 4.02,
        "boshuAvg30d": 503.0,
        "heikinAvg30d": 3.075
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 424,
        "ouatsu": 491.861,
        "saikou": 9.21,
        "heikin": 4.12,
        "boshuAvg30d": 504.0,
        "heikinAvg30d": 3.214
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 425,
        "ouatsu": 488.449,
        "saikou": 9.21,
        "heikin": 4.18,
        "boshuAvg30d": 505.0,
        "heikinAvg30d": 3.163
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 425,
        "ouatsu": 556.336,
        "saikou": 9.22,
        "heikin": 3.89,
        "boshuAvg30d": 505.2,
        "heikinAvg30d": 3.194
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 425,
        "ouatsu": 521.736,
        "saikou": 9.22,
        "heikin": 4.01,
        "boshuAvg30d": 505.2,
        "heikinAvg30d": 3.25
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 425,
        "ouatsu": 517.936,
        "saikou": 9.2,
        "heikin": 3.97,
        "boshuAvg30d": 505.2,
        "heikinAvg30d": 3.279
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 446,
        "ouatsu": 578.747,
        "saikou": 9.21,
        "heikin": 4.35,
        "boshuAvg30d": 526.2,
        "heikinAvg30d": 3.657
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 454,
        "ouatsu": 578.747,
        "saikou": 9.22,
        "heikin": 4.3,
        "boshuAvg30d": 534.2,
        "heikinAvg30d": 3.714
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 459,
        "ouatsu": 468.748,
        "saikou": 9.22,
        "heikin": 3.6,
        "boshuAvg30d": 539.6,
        "heikinAvg30d": 3.829
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 464,
        "ouatsu": 418.473,
        "saikou": 9.22,
        "heikin": 3.66,
        "boshuAvg30d": 544.4,
        "heikinAvg30d": 3.835
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 464,
        "ouatsu": 597.238,
        "saikou": 9.22,
        "heikin": 4.88,
        "boshuAvg30d": 544.4,
        "heikinAvg30d": 4.215
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 464,
        "ouatsu": 556.166,
        "saikou": 9.22,
        "heikin": 5.26,
        "boshuAvg30d": 544.4,
        "heikinAvg30d": 4.403
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 455,
        "ouatsu": 604.834,
        "saikou": 9.22,
        "heikin": 5.93,
        "boshuAvg30d": 538.2,
        "heikinAvg30d": 4.289
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 455,
        "ouatsu": 581.863,
        "saikou": 9.22,
        "heikin": 5.97,
        "boshuAvg30d": 538.2,
        "heikinAvg30d": 4.165
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 455,
        "ouatsu": 580.422,
        "saikou": 9.22,
        "heikin": 5.49,
        "boshuAvg30d": 538.2,
        "heikinAvg30d": 3.992
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 454,
        "ouatsu": 551.235,
        "saikou": 10,
        "heikin": 5.47,
        "boshuAvg30d": 537.2,
        "heikinAvg30d": 4.051
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 451,
        "ouatsu": 569.621,
        "saikou": 9.2,
        "heikin": 5.17,
        "boshuAvg30d": 534.2,
        "heikinAvg30d": 4.101
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 451,
        "ouatsu": 542.066,
        "saikou": 9.2,
        "heikin": 4.89,
        "boshuAvg30d": 534.2,
        "heikinAvg30d": 4.115
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 450,
        "ouatsu": 569.366,
        "saikou": 9.2,
        "heikin": 4.44,
        "boshuAvg30d": 533.2,
        "heikinAvg30d": 3.872
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 450,
        "ouatsu": 567.466,
        "saikou": 9.22,
        "heikin": 4.68,
        "boshuAvg30d": 533.2,
        "heikinAvg30d": 3.935
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 450,
        "ouatsu": 567.466,
        "saikou": 9.15,
        "heikin": 4.15,
        "boshuAvg30d": 530.6,
        "heikinAvg30d": 4.097
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 449,
        "ouatsu": 623.341,
        "saikou": 9.22,
        "heikin": 5.27,
        "boshuAvg30d": 530.0,
        "heikinAvg30d": 4.238
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 448,
        "ouatsu": 591.667,
        "saikou": 9.22,
        "heikin": 5.5,
        "boshuAvg30d": 529.2,
        "heikinAvg30d": 4.365
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 448,
        "ouatsu": 514.876,
        "saikou": 9.38,
        "heikin": 6.04,
        "boshuAvg30d": 529.2,
        "heikinAvg30d": 4.188
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 447,
        "ouatsu": 568.3,
        "saikou": 9.38,
        "heikin": 5.53,
        "boshuAvg30d": 528.2,
        "heikinAvg30d": 4.203
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 447,
        "ouatsu": 518.003,
        "saikou": 10,
        "heikin": 5.91,
        "boshuAvg30d": 528.2,
        "heikinAvg30d": 4.299
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 447,
        "ouatsu": 547.885,
        "saikou": 10,
        "heikin": 5.95,
        "boshuAvg30d": 527.7,
        "heikinAvg30d": 4.454
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 447,
        "ouatsu": 534.599,
        "saikou": 10,
        "heikin": 5.98,
        "boshuAvg30d": 527.7,
        "heikinAvg30d": 4.618
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 447,
        "ouatsu": 523.037,
        "saikou": 10,
        "heikin": 5.53,
        "boshuAvg30d": 523.5,
        "heikinAvg30d": 4.764
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 447,
        "ouatsu": 519.287,
        "saikou": 10,
        "heikin": 5.49,
        "boshuAvg30d": 523.5,
        "heikinAvg30d": 4.637
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 449,
        "ouatsu": 539.116,
        "saikou": 10,
        "heikin": 5.77,
        "boshuAvg30d": 525.7,
        "heikinAvg30d": 4.644
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 449,
        "ouatsu": 538.336,
        "saikou": 10,
        "heikin": 5.76,
        "boshuAvg30d": 525.5,
        "heikinAvg30d": 4.526
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 450,
        "ouatsu": 541.759,
        "saikou": 9.72,
        "heikin": 5.73,
        "boshuAvg30d": 526.0,
        "heikinAvg30d": 4.444
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 450,
        "ouatsu": 490.119,
        "saikou": 9.53,
        "heikin": 5.93,
        "boshuAvg30d": 526.0,
        "heikinAvg30d": 4.379
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 448,
        "ouatsu": 535.89,
        "saikou": 9.22,
        "heikin": 5.42,
        "boshuAvg30d": 524.2,
        "heikinAvg30d": 4.123
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 448,
        "ouatsu": 594.738,
        "saikou": 9.22,
        "heikin": 5.36,
        "boshuAvg30d": 524.2,
        "heikinAvg30d": 4.188
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 447,
        "ouatsu": 590.562,
        "saikou": 9.2,
        "heikin": 4.88,
        "boshuAvg30d": 523.4,
        "heikinAvg30d": 3.956
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 447,
        "ouatsu": 528.575,
        "saikou": 9.38,
        "heikin": 5.87,
        "boshuAvg30d": 523.4,
        "heikinAvg30d": 4.506
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 447,
        "ouatsu": 325.177,
        "saikou": 9.22,
        "heikin": 4.37,
        "boshuAvg30d": 523.4,
        "heikinAvg30d": 4.132
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 445,
        "ouatsu": 496.301,
        "saikou": 9.24,
        "heikin": 5.34,
        "boshuAvg30d": 521.4,
        "heikinAvg30d": 4.119
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 443,
        "ouatsu": 444.277,
        "saikou": 9.22,
        "heikin": 5.65,
        "boshuAvg30d": 519.2,
        "heikinAvg30d": 4.257
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 442,
        "ouatsu": 364.77,
        "saikou": 9.22,
        "heikin": 6.08,
        "boshuAvg30d": 518.0,
        "heikinAvg30d": 4.072
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 228.837,
        "saikou": 2.69,
        "heikin": 2.01,
        "boshuAvg30d": 116.7,
        "heikinAvg30d": 2.302
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 273.04,
        "saikou": 2.51,
        "heikin": 2.39,
        "boshuAvg30d": 116.7,
        "heikinAvg30d": 2.168
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 290.458,
        "saikou": 2.54,
        "heikin": 2.38,
        "boshuAvg30d": 116.7,
        "heikinAvg30d": 2.133
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 288.568,
        "saikou": 2.69,
        "heikin": 2.51,
        "boshuAvg30d": 116.7,
        "heikinAvg30d": 2.258
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 268.603,
        "saikou": 2.47,
        "heikin": 2.17,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.384
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 274.812,
        "saikou": 2.5,
        "heikin": 2.15,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.484
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 300.467,
        "saikou": 2.48,
        "heikin": 2.2,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.372
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 312.2,
        "saikou": 2.48,
        "heikin": 2.31,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.496
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 317.9,
        "saikou": 2.5,
        "heikin": 2.34,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.566
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 317.9,
        "saikou": 2.48,
        "heikin": 2.18,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.473
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 319.89,
        "saikou": 2.5,
        "heikin": 2.35,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.527
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 318.39,
        "saikou": 2.48,
        "heikin": 2.41,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.498
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 257.17,
        "saikou": 2.5,
        "heikin": 2.42,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 2.618
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 251.276,
        "saikou": 2.89,
        "heikin": 2.65,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 2.51
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 251.276,
        "saikou": 2.89,
        "heikin": 2.69,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 2.616
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 255.28,
        "saikou": 2.79,
        "heikin": 2.61,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 2.659
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 249.724,
        "saikou": 2.79,
        "heikin": 2.62,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 3.082
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 257.66,
        "saikou": 3.54,
        "heikin": 2.73,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 3.163
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 224.336,
        "saikou": 3.98,
        "heikin": 3.11,
        "boshuAvg30d": 137.1,
        "heikinAvg30d": 3.567
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 226.326,
        "saikou": 3.77,
        "heikin": 2.75,
        "boshuAvg30d": 137.1,
        "heikinAvg30d": 3.56
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 229.65,
        "saikou": 3.6,
        "heikin": 2.71,
        "boshuAvg30d": 138.1,
        "heikinAvg30d": 3.702
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 229.65,
        "saikou": 3.72,
        "heikin": 2.8,
        "boshuAvg30d": 137.1,
        "heikinAvg30d": 3.736
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 233.626,
        "saikou": 4.06,
        "heikin": 3.04,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 3.504
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 231.736,
        "saikou": 3.8,
        "heikin": 3,
        "boshuAvg30d": 135.1,
        "heikinAvg30d": 3.296
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 213.406,
        "saikou": 3.9,
        "heikin": 3.35,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 3.252
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 213.406,
        "saikou": 3.8,
        "heikin": 3.18,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 3.267
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 230.647,
        "saikou": 3.77,
        "heikin": 3.06,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 3.44
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 248.868,
        "saikou": 3.77,
        "heikin": 3,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 3.571
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 213.647,
        "saikou": 3.77,
        "heikin": 3.1,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 3.75
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 206.192,
        "saikou": 3.79,
        "heikin": 2.91,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 3.689
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 200.298,
        "saikou": 4,
        "heikin": 2.91,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 3.517
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 190.668,
        "saikou": 5.1,
        "heikin": 2.51,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 3.546
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 295.422,
        "saikou": 9.88,
        "heikin": 3.39,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 3.446
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 295.324,
        "saikou": 9.7,
        "heikin": 4.64,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 3.691
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 295.324,
        "saikou": 8.8,
        "heikin": 2.87,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 3.669
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 291.825,
        "saikou": 4,
        "heikin": 2.12,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 3.419
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 285.441,
        "saikou": 4.1,
        "heikin": 1.96,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 3.389
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 287.439,
        "saikou": 4.1,
        "heikin": 1.96,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 3.207
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 293.562,
        "saikou": 3.37,
        "heikin": 2.07,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.87
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 313.683,
        "saikou": 5.1,
        "heikin": 2.35,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.904
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 307.717,
        "saikou": 3.19,
        "heikin": 2.36,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.922
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 305.746,
        "saikou": 2.82,
        "heikin": 2.43,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.778
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 309.703,
        "saikou": 2.89,
        "heikin": 2.47,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 2.665
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 311.563,
        "saikou": 2.8,
        "heikin": 2.57,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 2.909
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 284.142,
        "saikou": 2.88,
        "heikin": 2.29,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 2.736
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 302.363,
        "saikou": 3.23,
        "heikin": 2.53,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.804
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 302.363,
        "saikou": 5.1,
        "heikin": 2.65,
        "boshuAvg30d": 127.5,
        "heikinAvg30d": 2.877
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 279.054,
        "saikou": 3.15,
        "heikin": 2.51,
        "boshuAvg30d": 124.7,
        "heikinAvg30d": 2.832
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.65,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.165
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.1,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.162
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 1.7,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.232
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.55,
        "heikin": 0.52,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.44
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.4,
        "heikin": 0.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.708
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 1.5,
        "heikin": 0.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.264
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.45,
        "heikin": 0.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.447
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.594
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.45,
        "heikin": 0.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.527
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.456
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2,
        "heikin": 0.48,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.575
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2,
        "heikin": 0.48,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.514
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 63.928,
        "saikou": 2,
        "heikin": 0.48,
        "boshuAvg30d": 56.8,
        "heikinAvg30d": 1.957
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 63.928,
        "saikou": 2.59,
        "heikin": 0.52,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.599
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 63.928,
        "saikou": 2.79,
        "heikin": 0.53,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.937
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 63.928,
        "saikou": 2.6,
        "heikin": 0.46,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.953
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 63.928,
        "saikou": 1.65,
        "heikin": 0.43,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.501
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 63.928,
        "saikou": 3.2,
        "heikin": 0.48,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 3.256
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.492
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.52,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.621
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 16.294,
        "saikou": 3.14,
        "heikin": 3.14,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.253
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.601
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 9.806,
        "saikou": 3.85,
        "heikin": 3.32,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.25
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.181
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.317
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.5,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.289
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 3.91,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.44
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.328
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 3.6,
        "heikin": 3.09,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.49
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 5.55,
        "heikin": 3.55,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.377
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 3.09,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 3.372
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.8,
        "heikin": 3.86,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 3.616
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.45,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.046
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 20.184,
        "saikou": 4.06,
        "heikin": 3.91,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.46
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 23.288,
        "saikou": 4.15,
        "heikin": 4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.057
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 28.928,
        "saikou": 4.1,
        "heikin": 4.07,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.725
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 4.26,
        "heikin": 4.06,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.905
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 51.944,
        "saikou": 4.16,
        "heikin": 4.02,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.67
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 4.16,
        "heikin": 3.95,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.651
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 49.564,
        "saikou": 3.58,
        "heikin": 3.33,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.004
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 3.75,
        "heikin": 3.5,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.051
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 63.928,
        "saikou": 3.47,
        "heikin": 3.26,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.061
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 36.676,
        "saikou": 3.47,
        "heikin": 3.21,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.483
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 25.356,
        "saikou": 3.12,
        "heikin": 2.99,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.5
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.803
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.27,
        "boshuAvg30d": 58.8,
        "heikinAvg30d": 1.941
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.949
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.493
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 82.405,
        "saikou": 2.5,
        "heikin": 2.09,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.045
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 97.405,
        "saikou": 2.5,
        "heikin": 2.16,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 1.858
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 95.445,
        "saikou": 2.5,
        "heikin": 2.08,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.024
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 91.467,
        "saikou": 2.5,
        "heikin": 2.05,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 1.987
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 89.469,
        "saikou": 2.5,
        "heikin": 2.1,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.085
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 89.469,
        "saikou": 2.5,
        "heikin": 2.05,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 2.032
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 99.354,
        "saikou": 2.49,
        "heikin": 2.08,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.06
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 99.354,
        "saikou": 2.49,
        "heikin": 2.03,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.073
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 2.5,
        "heikin": 2.1,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.042
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 2.49,
        "heikin": 2.11,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.071
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 2.5,
        "heikin": 2.1,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.098
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 93.36,
        "saikou": 2.49,
        "heikin": 2.13,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 1.981
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 99.354,
        "saikou": 2.5,
        "heikin": 2.16,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 2.657
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 99.354,
        "saikou": 2.89,
        "heikin": 2.39,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.665
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 99.354,
        "saikou": 2.97,
        "heikin": 2.4,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 2.612
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 97.911,
        "saikou": 2.7,
        "heikin": 2.11,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.846
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 1.98,
        "heikin": 1.96,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 3.477
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 97.911,
        "saikou": 2.95,
        "heikin": 2.31,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 3.584
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 3.97,
        "heikin": 2.66,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 3.699
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 260.161,
        "saikou": 3.25,
        "heikin": 2.91,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 3.757
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 260.161,
        "saikou": 3.25,
        "heikin": 2.9,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 4.045
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 258.291,
        "saikou": 3.27,
        "heikin": 2.92,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 3.968
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 167.961,
        "saikou": 4.6,
        "heikin": 3.2,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.788
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 161.077,
        "saikou": 3.5,
        "heikin": 1.42,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 3.567
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 161.54,
        "saikou": 3.5,
        "heikin": 0.84,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 4.071
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 185.022,
        "saikou": 3.5,
        "heikin": 1.41,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.472
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 117.518,
        "saikou": 6.44,
        "heikin": 2.75,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.671
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 99.353,
        "saikou": 3.97,
        "heikin": 2.69,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.639
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 99.353,
        "saikou": 4.94,
        "heikin": 2.97,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.673
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 4.94,
        "heikin": 2.94,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.494
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 101.223,
        "saikou": 4.94,
        "heikin": 2.86,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 3.324
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 101.223,
        "saikou": 5.97,
        "heikin": 2.79,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 3.431
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 101.223,
        "saikou": 4.94,
        "heikin": 2.8,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 3.508
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 101.223,
        "saikou": 4.94,
        "heikin": 2.69,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 3.721
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 101.223,
        "saikou": 5,
        "heikin": 2.92,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 3.658
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 101.223,
        "saikou": 4.94,
        "heikin": 2.6,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 3.437
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 99.263,
        "saikou": 2.95,
        "heikin": 2.36,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 3.286
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 99.263,
        "saikou": 4.94,
        "heikin": 2.53,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 3.242
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 95.971,
        "saikou": 4.94,
        "heikin": 2.58,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 3.348
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 95.971,
        "saikou": 2.97,
        "heikin": 2.38,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 3.159
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 95.416,
        "saikou": 2.92,
        "heikin": 2.35,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.919
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 95.971,
        "saikou": 2.8,
        "heikin": 2.24,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.059
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 186.466,
        "saikou": 4.21,
        "heikin": 2.74,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.012
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 238.678,
        "saikou": 3.27,
        "heikin": 2.85,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.898
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 238.678,
        "saikou": 3.26,
        "heikin": 2.89,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.886
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 238.678,
        "saikou": 3.26,
        "heikin": 2.79,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 2.905
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 123.299,
        "saikou": 2.87,
        "heikin": 1.87,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.77
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 141.405,
        "saikou": 2.92,
        "heikin": 1.74,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.679
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 159.469,
        "saikou": 2.4,
        "heikin": 0.88,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.172
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 159.469,
        "saikou": 2.4,
        "heikin": 1.21,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.329
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 159.469,
        "saikou": 2.4,
        "heikin": 1.26,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.508
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 163.259,
        "saikou": 2.49,
        "heikin": 1.28,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.41
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 163.259,
        "saikou": 2.49,
        "heikin": 1.26,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.316
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 163.259,
        "saikou": 2.49,
        "heikin": 1.22,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.318
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 180.118,
        "saikou": 2.4,
        "heikin": 1.2,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.402
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 180.118,
        "saikou": 2.49,
        "heikin": 1.4,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.504
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 180.118,
        "saikou": 2.49,
        "heikin": 1.37,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.414
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 180.118,
        "saikou": 2.4,
        "heikin": 1.28,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.626
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 180.118,
        "saikou": 2.49,
        "heikin": 1.4,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.925
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 180.118,
        "saikou": 2.49,
        "heikin": 1.2,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.852
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 180.118,
        "saikou": 2.49,
        "heikin": 1.41,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 3.335
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 180.118,
        "saikou": 2.8,
        "heikin": 1.23,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 2.685
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 180.118,
        "saikou": 3,
        "heikin": 1.09,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.586
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 180.118,
        "saikou": 2.7,
        "heikin": 1.16,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.45
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 2.44,
        "heikin": 1.08,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.487
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 1.58,
        "heikin": 1.09,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.334
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 180.118,
        "saikou": 1.58,
        "heikin": 1.15,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.228
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 167.391,
        "saikou": 1.58,
        "heikin": 1.17,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.814
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 167.391,
        "saikou": 1.58,
        "heikin": 1.18,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.8
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 180.118,
        "saikou": 1.58,
        "heikin": 1.09,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.784
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 180.118,
        "saikou": 1.58,
        "heikin": 1.06,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.653
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 180.118,
        "saikou": 1.58,
        "heikin": 1.06,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.695
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 180.118,
        "saikou": 1.58,
        "heikin": 0.97,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.216
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 180.118,
        "saikou": 1.58,
        "heikin": 0.97,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.038
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 180.118,
        "saikou": 2.9,
        "heikin": 1.33,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.706
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 180.118,
        "saikou": 2.8,
        "heikin": 1.47,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.862
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 180.118,
        "saikou": 4,
        "heikin": 1.73,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.046
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 180.118,
        "saikou": 4,
        "heikin": 1.69,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.166
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 195.985,
        "saikou": 4,
        "heikin": 1.7,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.777
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 195.985,
        "saikou": 2.79,
        "heikin": 1.52,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.338
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 195.985,
        "saikou": 4,
        "heikin": 2.15,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.308
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 195.985,
        "saikou": 5.15,
        "heikin": 3.55,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.681
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 195.985,
        "saikou": 5.54,
        "heikin": 3.75,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.921
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 195.985,
        "saikou": 5.61,
        "heikin": 3.77,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.29
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 193.995,
        "saikou": 5.58,
        "heikin": 3.76,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.508
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 193.995,
        "saikou": 5.47,
        "heikin": 3.71,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.574
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 192.195,
        "saikou": 5.47,
        "heikin": 3.72,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.211
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 194.185,
        "saikou": 4.89,
        "heikin": 3.42,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.796
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 195.985,
        "saikou": 5.06,
        "heikin": 3.4,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.391
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 195.985,
        "saikou": 4.77,
        "heikin": 3.23,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 3.908
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 195.985,
        "saikou": 4.77,
        "heikin": 3.2,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.735
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 188.432,
        "saikou": 4.76,
        "heikin": 4.2,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.713
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 188.432,
        "saikou": 4.77,
        "heikin": 4.21,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.59
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 188.432,
        "saikou": 4.77,
        "heikin": 4.2,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.294
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 188.432,
        "saikou": 4.12,
        "heikin": 3.63,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 3.247
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 213.886,
        "saikou": 3.68,
        "heikin": 2.96,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.319
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.884
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.895
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.909
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.877
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.861
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 39.8,
        "heikinAvg30d": 0.865
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 207.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 1.003
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 195.93,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.95
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 207.473,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.987
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.028
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.014
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.965
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 1.003
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 1.001
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 1.045
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 2.5,
        "heikin": 0.74,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.906
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 2.5,
        "heikin": 0.74,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.883
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.95
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 46.8,
        "heikinAvg30d": 1.007
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 46.8,
        "heikinAvg30d": 0.991
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.011
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.029
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.019
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 167.473,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.015
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 167.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.201
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 167.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.148
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 167.473,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.01
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 167.473,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.038
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 167.473,
        "saikou": 3.5,
        "heikin": 0.93,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.031
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 3.8,
        "heikin": 0.94,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.939
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 2.5,
        "heikin": 0.82,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.983
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.011
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.009
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.943
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.006
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.032
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.014
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.006
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.044
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.037
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.007
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.003
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.771
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.799
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.8
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 201.473,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.787
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 201.473,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.805
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.843
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 200.033,
        "saikou": 7.39,
        "heikin": 5.23,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 3.956
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 203.405,
        "saikou": 6.76,
        "heikin": 4.93,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 3.67
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 219.605,
        "saikou": 4.85,
        "heikin": 3.45,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 3.413
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 217.114,
        "saikou": 3.94,
        "heikin": 2.77,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 3.377
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 219.103,
        "saikou": 4.08,
        "heikin": 2.87,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 3.277
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 219.192,
        "saikou": 4.31,
        "heikin": 3.03,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 3.342
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 236.314,
        "saikou": 4.51,
        "heikin": 3.17,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 3.499
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 231.486,
        "saikou": 4.6,
        "heikin": 3.28,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 3.621
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 235.314,
        "saikou": 4.58,
        "heikin": 3.23,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.702
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 235.314,
        "saikou": 4.98,
        "heikin": 3.55,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.935
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 235.314,
        "saikou": 6.7,
        "heikin": 4.9,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.978
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 226.07,
        "saikou": 6.82,
        "heikin": 4.99,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.792
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 232.014,
        "saikou": 6.22,
        "heikin": 4.48,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 3.639
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 194.162,
        "saikou": 5.04,
        "heikin": 3.37,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 3.431
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 187.162,
        "saikou": 3.73,
        "heikin": 2.69,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 3.306
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 191.014,
        "saikou": 3.15,
        "heikin": 2.36,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 3.403
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 226.974,
        "saikou": 3.35,
        "heikin": 2.54,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 3.77
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 224.984,
        "saikou": 3.58,
        "heikin": 2.75,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 4.461
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 230.457,
        "saikou": 4.46,
        "heikin": 3.27,
        "boshuAvg30d": 175.6,
        "heikinAvg30d": 4.477
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 228.509,
        "saikou": 4.46,
        "heikin": 3.29,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 4.412
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 222.026,
        "saikou": 3.42,
        "heikin": 2.62,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 4.29
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 215.07,
        "saikou": 4,
        "heikin": 2.68,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 4.445
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 213.17,
        "saikou": 3.98,
        "heikin": 2.21,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 4.419
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 179.072,
        "saikou": 3.5,
        "heikin": 1.75,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 4.459
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 146.155,
        "saikou": 3.1,
        "heikin": 1.39,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 3.912
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 148.055,
        "saikou": 3.97,
        "heikin": 2.36,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 4.042
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 84.053,
        "saikou": 3.9,
        "heikin": 3.27,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 4.473
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 80.201,
        "saikou": 4.14,
        "heikin": 2.99,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 5.054
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 81.701,
        "saikou": 4.1,
        "heikin": 3.39,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 5.579
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 97.458,
        "saikou": 3.4,
        "heikin": 2.82,
        "boshuAvg30d": 174.8,
        "heikinAvg30d": 5.861
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 99.447,
        "saikou": 3.4,
        "heikin": 2.76,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 5.677
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 99.446,
        "saikou": 2.92,
        "heikin": 2.76,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.49
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 99.446,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.656
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 101.436,
        "saikou": 2.79,
        "heikin": 2.63,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.862
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 99.447,
        "saikou": 2.79,
        "heikin": 2.66,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 6.541
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 97.471,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.643
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 88.185,
        "saikou": 2.8,
        "heikin": 2.67,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 6.709
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 88.185,
        "saikou": 2.8,
        "heikin": 2.67,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 6.489
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 95.176,
        "saikou": 2.79,
        "heikin": 2.61,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 6.075
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 97.165,
        "saikou": 2.79,
        "heikin": 2.62,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 5.381
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 100.465,
        "saikou": 2.79,
        "heikin": 2.6,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 4.953
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 101.582,
        "saikou": 2.79,
        "heikin": 2.57,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 4.639
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 95.575,
        "saikou": 2.79,
        "heikin": 2.55,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 4.3
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 96.575,
        "saikou": 2.79,
        "heikin": 2.56,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.579
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 95.575,
        "saikou": 2.79,
        "heikin": 2.6,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.406
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 95.575,
        "saikou": 2.79,
        "heikin": 2.55,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 3.862
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 95.575,
        "saikou": 2.79,
        "heikin": 2.58,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 3.794
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 84.073,
        "saikou": 2.79,
        "heikin": 2.58,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 3.271
      }
    ]
  }
};
