// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/22〜2026/09/20）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-21",
  "fetchedAt": "2026-09-21",
  "avgWindowLabel": "過去30日平均（2026/08/22〜2026/09/20）",
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
      "ouatsu": 1150.357,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1414.3,
      "heikinAvg30d": 2.966
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1249,
      "ouatsu": 1179.803,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1414.3,
      "heikinAvg30d": 2.915
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1249,
      "ouatsu": 1257.19,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1414.3,
      "heikinAvg30d": 3.006
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1249,
      "ouatsu": 1319.807,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1413.6,
      "heikinAvg30d": 3.004
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1244,
      "ouatsu": 1314.013,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1408.6,
      "heikinAvg30d": 3.041
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1243,
      "ouatsu": 1350.408,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1407.3,
      "heikinAvg30d": 3.082
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1243,
      "ouatsu": 1380.705,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1415.2,
      "heikinAvg30d": 3.135
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1244,
      "ouatsu": 1321.831,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1416.2,
      "heikinAvg30d": 3.19
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1247,
      "ouatsu": 1380.474,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1419.5,
      "heikinAvg30d": 3.238
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1247,
      "ouatsu": 1440.07,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1419.9,
      "heikinAvg30d": 3.223
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1247,
      "ouatsu": 1574.918,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1419.9,
      "heikinAvg30d": 3.322
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1247,
      "ouatsu": 1557.363,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1419.9,
      "heikinAvg30d": 3.282
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1313,
      "ouatsu": 1616.88,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1484.9,
      "heikinAvg30d": 3.595
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1503.085,
      "saikou": 10,
      "heikin": 3.06,
      "boshuAvg30d": 1506.5,
      "heikinAvg30d": 3.522
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1357,
      "ouatsu": 1534.741,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1529.5,
      "heikinAvg30d": 3.539
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1375,
      "ouatsu": 1554.077,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1546.2,
      "heikinAvg30d": 3.518
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1376,
      "ouatsu": 1537.675,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1546.9,
      "heikinAvg30d": 3.768
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1376,
      "ouatsu": 1625.168,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1546.9,
      "heikinAvg30d": 3.99
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1313,
      "ouatsu": 1601.805,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1500.5,
      "heikinAvg30d": 3.98
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1317,
      "ouatsu": 1640.552,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1504.9,
      "heikinAvg30d": 3.893
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1325,
      "ouatsu": 1563.28,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1512.5,
      "heikinAvg30d": 3.799
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1325,
      "ouatsu": 1541.526,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1512.5,
      "heikinAvg30d": 3.832
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1322,
      "ouatsu": 1475.715,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1508.9,
      "heikinAvg30d": 3.781
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1321,
      "ouatsu": 1469.626,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1508.2,
      "heikinAvg30d": 3.768
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1314,
      "ouatsu": 1551.459,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1499.3,
      "heikinAvg30d": 3.59
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1314,
      "ouatsu": 1479.442,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1499.3,
      "heikinAvg30d": 3.58
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1314,
      "ouatsu": 1511.842,
      "saikou": 10,
      "heikin": 3.01,
      "boshuAvg30d": 1496.8,
      "heikinAvg30d": 3.878
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1308,
      "ouatsu": 1529.666,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1490.8,
      "heikinAvg30d": 4.088
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1303,
      "ouatsu": 1565.643,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1486.8,
      "heikinAvg30d": 4.21
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1296,
      "ouatsu": 1610.643,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1480.8,
      "heikinAvg30d": 4.261
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1353,
      "ouatsu": 1769.548,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1527.0,
      "heikinAvg30d": 4.251
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1353,
      "ouatsu": 1662.474,
      "saikou": 9.5,
      "heikin": 2.69,
      "boshuAvg30d": 1527.0,
      "heikinAvg30d": 4.545
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1353,
      "ouatsu": 1858.825,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1526.9,
      "heikinAvg30d": 4.549
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1351,
      "ouatsu": 1982.977,
      "saikou": 9.4,
      "heikin": 2.39,
      "boshuAvg30d": 1523.9,
      "heikinAvg30d": 4.807
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1347,
      "ouatsu": 1841.862,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1516.7,
      "heikinAvg30d": 4.871
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1343,
      "ouatsu": 1806.427,
      "saikou": 9.63,
      "heikin": 2.79,
      "boshuAvg30d": 1512.7,
      "heikinAvg30d": 4.795
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1335,
      "ouatsu": 1725.115,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1504.3,
      "heikinAvg30d": 4.809
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1335,
      "ouatsu": 1707.672,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1504.0,
      "heikinAvg30d": 4.695
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1336,
      "ouatsu": 1762.271,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1504.3,
      "heikinAvg30d": 4.523
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1335,
      "ouatsu": 1814.561,
      "saikou": 10,
      "heikin": 3.13,
      "boshuAvg30d": 1503.6,
      "heikinAvg30d": 4.331
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1330,
      "ouatsu": 1947.963,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1498.6,
      "heikinAvg30d": 4.096
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1326,
      "ouatsu": 1957.956,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1495.6,
      "heikinAvg30d": 3.906
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1233,
      "ouatsu": 1913.462,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1408.0,
      "heikinAvg30d": 3.556
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1236,
      "ouatsu": 1884.662,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1411.0,
      "heikinAvg30d": 4.018
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1237,
      "ouatsu": 1768.434,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1412.0,
      "heikinAvg30d": 3.742
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1230,
      "ouatsu": 1919.295,
      "saikou": 10,
      "heikin": 2.58,
      "boshuAvg30d": 1405.4,
      "heikinAvg30d": 3.562
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1223,
      "ouatsu": 1756.018,
      "saikou": 10,
      "heikin": 2.5,
      "boshuAvg30d": 1397.7,
      "heikinAvg30d": 3.569
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1215,
      "ouatsu": 1772.535,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1389.4,
      "heikinAvg30d": 3.409
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
        "ouatsu": 187.961,
        "saikou": 1.01,
        "heikin": 0.96,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.237
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 197.208,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.218
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 175.058,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.136
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.281
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.386
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 189.569,
        "saikou": 3.95,
        "heikin": 1.38,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.466
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 187.619,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.723
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 150.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.859
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 185.008,
        "saikou": 3.75,
        "heikin": 1.68,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.131
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 152.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.872
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 170.813,
        "saikou": 4,
        "heikin": 1.09,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.022
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 9.85,
        "heikin": 2.59,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.865
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 195.148,
        "saikou": 3.95,
        "heikin": 1.81,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.558
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 237.018,
        "saikou": 1.01,
        "heikin": 0.97,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.069
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.927
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 229.058,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.988
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 186.918,
        "saikou": 1.01,
        "heikin": 0.96,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.326
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 223.569,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.687
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 184.968,
        "saikou": 1.01,
        "heikin": 0.7,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.453
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 219.629,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 1.538
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 186.918,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 1.472
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 181.579,
        "saikou": 1.01,
        "heikin": 0.7,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 1.727
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 144.968,
        "saikou": 1.01,
        "heikin": 0.7,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 1.619
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 144.968,
        "saikou": 1.01,
        "heikin": 0.7,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 1.447
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 167.927,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.484
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 169.895,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.412
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 173.945,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 2.004
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 209.935,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 2.389
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 211.885,
        "saikou": 1.01,
        "heikin": 0.74,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.11
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 164.908,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.162
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 232.513,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.833
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 149.99,
        "saikou": 5.42,
        "heikin": 1.48,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.575
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 151.958,
        "saikou": 3.73,
        "heikin": 1.29,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.578
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 200.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.493
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 164.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 3.167
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 136.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.138
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 127.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.15
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.896
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 159.29,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.745
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.446
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 201.218,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.761
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 193.908,
        "saikou": 4,
        "heikin": 1.22,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.921
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 240.258,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.583
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 211.458,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.946
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 191.918,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.784
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 242.208,
        "saikou": 1.01,
        "heikin": 0.89,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.592
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.356
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 191.958,
        "saikou": 9.9,
        "heikin": 1.85,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.054
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 52.939,
        "saikou": 10,
        "heikin": 9.64,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 8.368
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 64.939,
        "saikou": 10,
        "heikin": 9.71,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 8.607
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 84.817,
        "saikou": 10,
        "heikin": 9.64,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 9.121
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 95.487,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 9.086
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 93.489,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 9.074
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 93.489,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 9.088
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 81.987,
        "saikou": 10,
        "heikin": 9.05,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 9.035
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 83.487,
        "saikou": 10,
        "heikin": 9.05,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 9.006
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 8.985
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 8.929
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 8.832
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 8.942
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.07,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 9.078
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 95.986,
        "saikou": 10,
        "heikin": 9.17,
        "boshuAvg30d": 186.3,
        "heikinAvg30d": 9.457
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 192.0,
        "heikinAvg30d": 9.589
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 95.986,
        "saikou": 10,
        "heikin": 9.17,
        "boshuAvg30d": 195.7,
        "heikinAvg30d": 9.501
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.06,
        "boshuAvg30d": 195.7,
        "heikinAvg30d": 9.567
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 195.7,
        "heikinAvg30d": 9.375
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 108.132,
        "saikou": 10,
        "heikin": 7.68,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 8.617
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 7.27,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 8.705
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 7.35,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 8.478
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 7.31,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 8.502
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 7.34,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 8.477
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 8.644
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 115.721,
        "saikou": 10,
        "heikin": 7.19,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 8.706
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 117.686,
        "saikou": 10,
        "heikin": 7.25,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 8.747
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 7.03,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 8.34
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 121.482,
        "saikou": 10,
        "heikin": 7.18,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 8.388
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 8.862
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 105.652,
        "saikou": 10,
        "heikin": 7.44,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 8.854
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 117.652,
        "saikou": 10,
        "heikin": 7.54,
        "boshuAvg30d": 192.7,
        "heikinAvg30d": 9.11
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 121.482,
        "saikou": 9.5,
        "heikin": 7.05,
        "boshuAvg30d": 192.7,
        "heikinAvg30d": 8.684
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 8.02,
        "boshuAvg30d": 192.7,
        "heikinAvg30d": 8.404
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 85.982,
        "saikou": 9.4,
        "heikin": 8.59,
        "boshuAvg30d": 191.3,
        "heikinAvg30d": 7.925
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 87.482,
        "saikou": 10,
        "heikin": 8.98,
        "boshuAvg30d": 189.3,
        "heikinAvg30d": 7.746
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 73.982,
        "saikou": 9.63,
        "heikin": 8.65,
        "boshuAvg30d": 187.3,
        "heikinAvg30d": 7.804
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 71.521,
        "saikou": 10,
        "heikin": 8.89,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 7.747
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 71.986,
        "saikou": 10,
        "heikin": 8.88,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 7.771
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 8.56,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 7.948
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 8.77,
        "boshuAvg30d": 185.3,
        "heikinAvg30d": 8.349
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 185.0,
        "heikinAvg30d": 8.572
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 185.3,
        "heikinAvg30d": 8.746
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.86,
        "boshuAvg30d": 101.1,
        "heikinAvg30d": 8.617
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.06,
        "boshuAvg30d": 101.1,
        "heikinAvg30d": 8.8
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 73.486,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 101.1,
        "heikinAvg30d": 8.837
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 93.656,
        "saikou": 10,
        "heikin": 8.48,
        "boshuAvg30d": 100.1,
        "heikinAvg30d": 8.91
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 107.586,
        "saikou": 10,
        "heikin": 8.52,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 8.923
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 107.986,
        "saikou": 10,
        "heikin": 8.68,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 8.948
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 426,
        "ouatsu": 331.198,
        "saikou": 9.9,
        "heikin": 2.84,
        "boshuAvg30d": 522.7,
        "heikinAvg30d": 3.582
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 426,
        "ouatsu": 339.724,
        "saikou": 9.9,
        "heikin": 2.8,
        "boshuAvg30d": 522.7,
        "heikinAvg30d": 3.402
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 426,
        "ouatsu": 351.215,
        "saikou": 9.9,
        "heikin": 2.72,
        "boshuAvg30d": 522.7,
        "heikinAvg30d": 3.343
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 426,
        "ouatsu": 364.506,
        "saikou": 9.9,
        "heikin": 2.64,
        "boshuAvg30d": 522.3,
        "heikinAvg30d": 3.256
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 424,
        "ouatsu": 350.538,
        "saikou": 9.9,
        "heikin": 2.59,
        "boshuAvg30d": 520.3,
        "heikinAvg30d": 3.214
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 424,
        "ouatsu": 352.534,
        "saikou": 9.9,
        "heikin": 2.59,
        "boshuAvg30d": 520.3,
        "heikinAvg30d": 3.195
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 423,
        "ouatsu": 327.865,
        "saikou": 9.9,
        "heikin": 3.01,
        "boshuAvg30d": 519.0,
        "heikinAvg30d": 3.115
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 424,
        "ouatsu": 326.325,
        "saikou": 9.9,
        "heikin": 3.06,
        "boshuAvg30d": 520.0,
        "heikinAvg30d": 3.283
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 425,
        "ouatsu": 329.758,
        "saikou": 9.9,
        "heikin": 3.14,
        "boshuAvg30d": 521.0,
        "heikinAvg30d": 3.231
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 425,
        "ouatsu": 333.528,
        "saikou": 9.9,
        "heikin": 3.14,
        "boshuAvg30d": 521.3,
        "heikinAvg30d": 3.221
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 425,
        "ouatsu": 374.507,
        "saikou": 9.9,
        "heikin": 3.55,
        "boshuAvg30d": 521.3,
        "heikinAvg30d": 3.316
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 425,
        "ouatsu": 372.607,
        "saikou": 9.29,
        "heikin": 3.49,
        "boshuAvg30d": 521.3,
        "heikinAvg30d": 3.226
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 446,
        "ouatsu": 395.155,
        "saikou": 9.9,
        "heikin": 3.59,
        "boshuAvg30d": 542.3,
        "heikinAvg30d": 3.639
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 454,
        "ouatsu": 397.859,
        "saikou": 9.9,
        "heikin": 3.76,
        "boshuAvg30d": 550.3,
        "heikinAvg30d": 3.729
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 459,
        "ouatsu": 418.075,
        "saikou": 9.9,
        "heikin": 3.9,
        "boshuAvg30d": 556.0,
        "heikinAvg30d": 3.857
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 464,
        "ouatsu": 418.075,
        "saikou": 9.9,
        "heikin": 4.03,
        "boshuAvg30d": 560.7,
        "heikinAvg30d": 3.86
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 464,
        "ouatsu": 454.939,
        "saikou": 9.9,
        "heikin": 3.96,
        "boshuAvg30d": 560.7,
        "heikinAvg30d": 4.2
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 464,
        "ouatsu": 503.313,
        "saikou": 9.9,
        "heikin": 3.77,
        "boshuAvg30d": 560.7,
        "heikinAvg30d": 4.377
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 455,
        "ouatsu": 548.296,
        "saikou": 9.9,
        "heikin": 3.45,
        "boshuAvg30d": 554.3,
        "heikinAvg30d": 4.339
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 455,
        "ouatsu": 511.429,
        "saikou": 9.3,
        "heikin": 2.81,
        "boshuAvg30d": 554.3,
        "heikinAvg30d": 4.19
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 455,
        "ouatsu": 527.077,
        "saikou": 9.9,
        "heikin": 3.55,
        "boshuAvg30d": 554.3,
        "heikinAvg30d": 3.913
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 454,
        "ouatsu": 492.477,
        "saikou": 9.9,
        "heikin": 3.58,
        "boshuAvg30d": 553.3,
        "heikinAvg30d": 3.933
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 451,
        "ouatsu": 509.543,
        "saikou": 9.9,
        "heikin": 3.62,
        "boshuAvg30d": 550.3,
        "heikinAvg30d": 4.023
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 451,
        "ouatsu": 501.53,
        "saikou": 9.3,
        "heikin": 3.66,
        "boshuAvg30d": 550.3,
        "heikinAvg30d": 4.044
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 450,
        "ouatsu": 528.334,
        "saikou": 9.35,
        "heikin": 3.56,
        "boshuAvg30d": 549.3,
        "heikinAvg30d": 3.824
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 450,
        "ouatsu": 528.334,
        "saikou": 9.35,
        "heikin": 3.64,
        "boshuAvg30d": 549.3,
        "heikinAvg30d": 3.87
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 450,
        "ouatsu": 529.079,
        "saikou": 9.9,
        "heikin": 3.6,
        "boshuAvg30d": 546.8,
        "heikinAvg30d": 4.078
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 449,
        "ouatsu": 476.628,
        "saikou": 9.9,
        "heikin": 3.59,
        "boshuAvg30d": 545.8,
        "heikinAvg30d": 4.204
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 448,
        "ouatsu": 494.315,
        "saikou": 9.3,
        "heikin": 3.11,
        "boshuAvg30d": 545.1,
        "heikinAvg30d": 4.31
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 448,
        "ouatsu": 535.228,
        "saikou": 9.3,
        "heikin": 3.07,
        "boshuAvg30d": 545.1,
        "heikinAvg30d": 4.304
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 447,
        "ouatsu": 552.562,
        "saikou": 9.9,
        "heikin": 3.35,
        "boshuAvg30d": 544.1,
        "heikinAvg30d": 4.264
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 447,
        "ouatsu": 576.982,
        "saikou": 9.29,
        "heikin": 2.94,
        "boshuAvg30d": 544.1,
        "heikinAvg30d": 4.485
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 447,
        "ouatsu": 651.921,
        "saikou": 9.9,
        "heikin": 2.57,
        "boshuAvg30d": 543.7,
        "heikinAvg30d": 4.577
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 447,
        "ouatsu": 640.729,
        "saikou": 9.29,
        "heikin": 2.49,
        "boshuAvg30d": 543.7,
        "heikinAvg30d": 4.745
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 447,
        "ouatsu": 546.261,
        "saikou": 9.9,
        "heikin": 2.89,
        "boshuAvg30d": 539.8,
        "heikinAvg30d": 4.9
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 447,
        "ouatsu": 597.55,
        "saikou": 9.3,
        "heikin": 2.44,
        "boshuAvg30d": 539.8,
        "heikinAvg30d": 4.792
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 449,
        "ouatsu": 544.174,
        "saikou": 9.9,
        "heikin": 2.91,
        "boshuAvg30d": 542.1,
        "heikinAvg30d": 4.684
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 449,
        "ouatsu": 499.277,
        "saikou": 9.9,
        "heikin": 2.99,
        "boshuAvg30d": 541.8,
        "heikinAvg30d": 4.531
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 450,
        "ouatsu": 509.233,
        "saikou": 9.9,
        "heikin": 3.23,
        "boshuAvg30d": 542.1,
        "heikinAvg30d": 4.462
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 450,
        "ouatsu": 514.904,
        "saikou": 9.9,
        "heikin": 2.79,
        "boshuAvg30d": 542.1,
        "heikinAvg30d": 4.393
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 448,
        "ouatsu": 475.3,
        "saikou": 9.9,
        "heikin": 3.18,
        "boshuAvg30d": 540.4,
        "heikinAvg30d": 4.0
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 448,
        "ouatsu": 475.098,
        "saikou": 9.9,
        "heikin": 3.13,
        "boshuAvg30d": 540.4,
        "heikinAvg30d": 4.006
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 447,
        "ouatsu": 405.323,
        "saikou": 9.9,
        "heikin": 2.85,
        "boshuAvg30d": 539.8,
        "heikinAvg30d": 3.685
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 447,
        "ouatsu": 405.323,
        "saikou": 9.9,
        "heikin": 2.84,
        "boshuAvg30d": 539.8,
        "heikinAvg30d": 4.524
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 447,
        "ouatsu": 384.835,
        "saikou": 9.9,
        "heikin": 2.96,
        "boshuAvg30d": 539.8,
        "heikinAvg30d": 4.177
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 445,
        "ouatsu": 401.567,
        "saikou": 9.9,
        "heikin": 3.04,
        "boshuAvg30d": 537.8,
        "heikinAvg30d": 4.045
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 443,
        "ouatsu": 413.901,
        "saikou": 9.9,
        "heikin": 2.88,
        "boshuAvg30d": 535.4,
        "heikinAvg30d": 4.229
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 442,
        "ouatsu": 413.004,
        "saikou": 9.3,
        "heikin": 3.6,
        "boshuAvg30d": 534.1,
        "heikinAvg30d": 4.01
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 122.866,
        "saikou": 5.1,
        "heikin": 2.53,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 2.419
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 130.75,
        "saikou": 5.1,
        "heikin": 2.27,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 2.258
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 154.169,
        "saikou": 5.1,
        "heikin": 2.27,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 2.349
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 195.172,
        "saikou": 8.65,
        "heikin": 3.09,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 2.457
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 171.338,
        "saikou": 9.19,
        "heikin": 3.19,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 2.682
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 197.348,
        "saikou": 9.19,
        "heikin": 3.17,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 2.769
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 223.003,
        "saikou": 2.8,
        "heikin": 2.18,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 2.662
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 217.303,
        "saikou": 5.1,
        "heikin": 2.33,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 2.742
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 221.103,
        "saikou": 2.89,
        "heikin": 2.25,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 2.855
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 223.003,
        "saikou": 2.78,
        "heikin": 2.01,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 2.724
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 224.993,
        "saikou": 2.78,
        "heikin": 2.03,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 2.644
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 223.493,
        "saikou": 2.7,
        "heikin": 2.06,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 2.738
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 243.272,
        "saikou": 2.79,
        "heikin": 2.33,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.899
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 235.388,
        "saikou": 5.42,
        "heikin": 3.3,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.828
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 235.388,
        "saikou": 2.89,
        "heikin": 2.52,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 3.013
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 243.272,
        "saikou": 4.88,
        "heikin": 2.74,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 3.084
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 259.993,
        "saikou": 3,
        "heikin": 2.53,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 3.566
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 261.983,
        "saikou": 3.88,
        "heikin": 2.65,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 3.615
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 226.661,
        "saikou": 4.16,
        "heikin": 3.01,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 3.974
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 207.06,
        "saikou": 4.88,
        "heikin": 2.87,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 3.926
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 212.284,
        "saikou": 4.66,
        "heikin": 2.96,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 4.097
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 194.063,
        "saikou": 4.99,
        "heikin": 3.14,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 4.129
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 196.149,
        "saikou": 4.48,
        "heikin": 2.97,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 3.871
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 196.149,
        "saikou": 4.14,
        "heikin": 2.87,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 3.686
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 235.852,
        "saikou": 3.88,
        "heikin": 3.02,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 3.634
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 177.122,
        "saikou": 3.88,
        "heikin": 2.78,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 3.615
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 214.451,
        "saikou": 3.7,
        "heikin": 2.63,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 3.872
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 238.59,
        "saikou": 6.88,
        "heikin": 2.39,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 4.027
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 234.59,
        "saikou": 5.88,
        "heikin": 2.52,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 4.188
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 273.181,
        "saikou": 3.95,
        "heikin": 2.61,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 4.092
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 287.106,
        "saikou": 4.05,
        "heikin": 3.11,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.857
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 288.606,
        "saikou": 3.84,
        "heikin": 2.37,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.999
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 410.602,
        "saikou": 4.88,
        "heikin": 2.41,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.913
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 408.604,
        "saikou": 2.88,
        "heikin": 2.41,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 4.095
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 408.604,
        "saikou": 3.43,
        "heikin": 2.54,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.984
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 395.905,
        "saikou": 3.79,
        "heikin": 2.2,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.783
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 389.521,
        "saikou": 2.79,
        "heikin": 2.72,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.782
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 389.521,
        "saikou": 2.8,
        "heikin": 2.73,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.6
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 397.544,
        "saikou": 2.89,
        "heikin": 2.66,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.224
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 399.404,
        "saikou": 2.88,
        "heikin": 2.7,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.253
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 402.638,
        "saikou": 2.8,
        "heikin": 2.73,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.268
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 400.667,
        "saikou": 2.79,
        "heikin": 2.71,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.079
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 370.494,
        "saikou": 2.79,
        "heikin": 2.49,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.896
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 370.494,
        "saikou": 2.79,
        "heikin": 2.62,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.314
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 361.294,
        "saikou": 2.8,
        "heikin": 2.66,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.059
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 342.376,
        "saikou": 2.78,
        "heikin": 2.59,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.113
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 343.073,
        "saikou": 2.77,
        "heikin": 2.56,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 3.217
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 359.794,
        "saikou": 2.8,
        "heikin": 2.71,
        "boshuAvg30d": 139.9,
        "heikinAvg30d": 3.23
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.01,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.34
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.03,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.917
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 1.93,
        "saikou": 1.7,
        "heikin": 1.7,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.937
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.173
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.502
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.43,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.127
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.55,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.314
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.67,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.116
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.55,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.0
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.55,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.936
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2,
        "heikin": 0.7,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.952
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2,
        "heikin": 0.46,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.227
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 2,
        "heikin": 0.46,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 2.736
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.59,
        "heikin": 0.75,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.305
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 82.928,
        "saikou": 2.79,
        "heikin": 0.5,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 2.702
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 82.928,
        "saikou": 2.8,
        "heikin": 0.5,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.577
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 82.928,
        "saikou": 1.65,
        "heikin": 0.42,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.37
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 82.928,
        "saikou": 3.7,
        "heikin": 0.53,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 4.347
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 82.928,
        "saikou": 2.45,
        "heikin": 0.44,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.342
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 82.928,
        "saikou": 2.6,
        "heikin": 0.49,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.85
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 22.928,
        "saikou": 6,
        "heikin": 1.31,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.051
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 73.264,
        "saikou": 3.85,
        "heikin": 0.48,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.416
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 22.928,
        "saikou": 4.15,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.044
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 22.928,
        "saikou": 4.2,
        "heikin": 1.02,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.033
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 67.134,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.957
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 47.928,
        "saikou": 5.2,
        "heikin": 0.71,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.836
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 22.928,
        "saikou": 6,
        "heikin": 0.99,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.339
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 22.928,
        "saikou": 3.15,
        "heikin": 0.84,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.91
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 2.89,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.33
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.036
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 0.6,
        "heikin": 0.4,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 3.938
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 47.534,
        "saikou": 1.85,
        "heikin": 0.45,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 4.459
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 23.982,
        "saikou": 3.7,
        "heikin": 0.89,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.975
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.46
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 3.6,
        "heikin": 0.55,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.517
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.127
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.02,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.649
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.6,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.336
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.371
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.68,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.874
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 2.35,
        "heikin": 0.71,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.751
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.5,
        "heikin": 0.73,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.631
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.3,
        "heikin": 0.71,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.943
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.3,
        "heikin": 0.71,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.161
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.5,
        "heikin": 0.73,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.447
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 79.112,
        "saikou": 2.3,
        "heikin": 0.48,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.833
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 77.44,
        "saikou": 2.3,
        "heikin": 0.44,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 3.015
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 77.524,
        "saikou": 2.5,
        "heikin": 0.49,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.439
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 74.542,
        "saikou": 2.87,
        "heikin": 2.18,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 1.889
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 95.409,
        "saikou": 2.87,
        "heikin": 2.26,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 1.977
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 95.445,
        "saikou": 2.97,
        "heikin": 2.34,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 1.969
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 115.412,
        "saikou": 2.94,
        "heikin": 1.87,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 1.972
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 105.479,
        "saikou": 2.87,
        "heikin": 1.73,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.072
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 113.414,
        "saikou": 2.86,
        "heikin": 1.78,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.117
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 123.299,
        "saikou": 2.89,
        "heikin": 1.83,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.077
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 123.299,
        "saikou": 2.94,
        "heikin": 1.97,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.186
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.9,
        "heikin": 1.91,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 1.965
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.68,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 1.985
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.54,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.138
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.64,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.084
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.68,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.15
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 127.166,
        "saikou": 2.97,
        "heikin": 2,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 3.039
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 127.166,
        "saikou": 2.86,
        "heikin": 1.92,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.775
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 127.166,
        "saikou": 3.64,
        "heikin": 2.02,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 3.121
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 125.723,
        "saikou": 2.97,
        "heikin": 2.03,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.008
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 125.723,
        "saikou": 4.5,
        "heikin": 2.17,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.153
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 127.166,
        "saikou": 4,
        "heikin": 2.34,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.257
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 6.44,
        "heikin": 2.29,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.317
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 6.44,
        "heikin": 2.78,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.515
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 5.95,
        "heikin": 2.52,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.425
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 5.95,
        "heikin": 2.64,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.223
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 5.97,
        "heikin": 2.39,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.065
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 77.743,
        "saikou": 5.44,
        "heikin": 3.07,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.844
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 77.743,
        "saikou": 5.97,
        "heikin": 2.6,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 3.808
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 6.44,
        "heikin": 3.13,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.12
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 5.97,
        "heikin": 2.78,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 4.06
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 151.111,
        "saikou": 4.97,
        "heikin": 2.2,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.129
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 149.668,
        "saikou": 4.94,
        "heikin": 1.98,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 3.9
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 118.709,
        "saikou": 4.94,
        "heikin": 2.28,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.739
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 101.778,
        "saikou": 4.94,
        "heikin": 2.68,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.722
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 101.778,
        "saikou": 4.94,
        "heikin": 2.78,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.889
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2.8,
        "heikin": 2.14,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 4.125
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 3.47,
        "heikin": 2.17,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.947
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.354,
        "saikou": 2.9,
        "heikin": 2.23,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 3.747
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 4,
        "heikin": 2.36,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.564
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 4,
        "heikin": 2.29,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.516
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 99.354,
        "saikou": 4,
        "heikin": 2.28,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.625
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 186.466,
        "saikou": 4.87,
        "heikin": 2.99,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.458
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 238.678,
        "saikou": 4.25,
        "heikin": 2.83,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.154
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 238.678,
        "saikou": 4.52,
        "heikin": 2.82,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 3.292
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 238.678,
        "saikou": 4.29,
        "heikin": 2.74,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.065
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 238.678,
        "saikou": 4.61,
        "heikin": 3.02,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.081
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 238.678,
        "saikou": 4.34,
        "heikin": 2.95,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.044
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 238.678,
        "saikou": 4.74,
        "heikin": 3.05,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.964
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 99.354,
        "saikou": 2.48,
        "heikin": 2.12,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 3.047
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 90.065,
        "saikou": 2.3,
        "heikin": 1.99,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 3.148
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.8,
        "heikin": 1.07,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.63
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.8,
        "heikin": 1.44,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.839
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.8,
        "heikin": 1.41,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.906
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.8,
        "heikin": 1.44,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.784
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.8,
        "heikin": 1,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.771
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.8,
        "heikin": 1.43,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.819
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.57,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.897
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.9,
        "heikin": 1.6,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.948
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.59,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.91
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.68,
        "heikin": 1.5,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.102
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.6,
        "heikin": 1.75,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.379
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.5,
        "heikin": 1.22,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.367
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 178.13,
        "saikou": 2.73,
        "heikin": 1.46,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 3.706
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 178.13,
        "saikou": 2.9,
        "heikin": 1.57,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 3.03
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.39,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.852
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 178.13,
        "saikou": 2.96,
        "heikin": 1.41,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.716
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 2.9,
        "heikin": 0.91,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.675
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 3,
        "heikin": 1.48,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.471
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.63,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.419
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.18,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.103
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 178.13,
        "saikou": 5,
        "heikin": 2.41,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.918
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 178.13,
        "saikou": 4.86,
        "heikin": 1.74,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.861
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 178.13,
        "saikou": 4.4,
        "heikin": 1.19,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.908
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 178.13,
        "saikou": 4.05,
        "heikin": 1.73,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.863
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 178.13,
        "saikou": 4.58,
        "heikin": 1.73,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.216
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.18,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.101
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.26,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.775
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 2.1,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.998
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.17,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.208
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 4.34,
        "heikin": 1.53,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.314
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.67,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 4.18
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.47,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.167
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.15,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.157
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 203.584,
        "saikou": 2.79,
        "heikin": 1.31,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.68
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 202.743,
        "saikou": 3.2,
        "heikin": 1.72,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.226
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 202.743,
        "saikou": 4.57,
        "heikin": 2.97,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.191
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 200.753,
        "saikou": 4.63,
        "heikin": 2.98,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.485
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 200.753,
        "saikou": 4.63,
        "heikin": 3.06,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.584
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 200.753,
        "saikou": 4.23,
        "heikin": 2.86,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.309
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 202.743,
        "saikou": 3.7,
        "heikin": 2.51,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.967
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 202.743,
        "saikou": 2.8,
        "heikin": 1.88,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.694
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 202.743,
        "saikou": 2.5,
        "heikin": 1.52,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 5.135
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 202.743,
        "saikou": 2.4,
        "heikin": 1.72,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 4.807
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 202.743,
        "saikou": 2.79,
        "heikin": 1.46,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 4.6
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 202.743,
        "saikou": 2.8,
        "heikin": 1.83,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 4.148
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 178.13,
        "saikou": 2.13,
        "heikin": 1.28,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.693
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.08,
        "heikin": 1.28,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 3.62
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.41,
        "heikin": 0.6,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.616
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.794
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.827
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.833
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.783
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.764
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 39.7,
        "heikinAvg30d": 0.786
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 2.8,
        "heikin": 1.3,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.929
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 67.93,
        "saikou": 2.8,
        "heikin": 1.1,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.895
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 2.8,
        "heikin": 1.15,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.909
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.953
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.949
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.93
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 82.473,
        "saikou": 2.5,
        "heikin": 1.21,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.944
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.935
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.992
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.29,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.857
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.29,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.83
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.29,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.892
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 48.473,
        "saikou": 3,
        "heikin": 2.01,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 0.951
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 100.973,
        "saikou": 2.85,
        "heikin": 1.13,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 0.956
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.18,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.945
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 0.95,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.987
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 4.1,
        "heikin": 1.17,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.968
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 0.95,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.98
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 4.1,
        "heikin": 0.96,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.178
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 4.1,
        "heikin": 1.17,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.111
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.16,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.976
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.015
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 2.85,
        "heikin": 0.92,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.006
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 0.95,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.914
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 100.973,
        "saikou": 1.6,
        "heikin": 0.94,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.953
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.01,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.976
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 100.973,
        "saikou": 3.85,
        "heikin": 1.01,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.965
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 62.473,
        "saikou": 1.7,
        "heikin": 1.46,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.875
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.94
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 48.473,
        "saikou": 3.8,
        "heikin": 2.03,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.922
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 2.85,
        "heikin": 1.96,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.9
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 4.1,
        "heikin": 1.96,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.897
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 3.8,
        "heikin": 2.03,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.938
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.945
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 49.473,
        "saikou": 2.8,
        "heikin": 1.65,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.911
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 49.473,
        "saikou": 1.6,
        "heikin": 1.58,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.913
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 97.473,
        "saikou": 1.7,
        "heikin": 1.1,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.747
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 84.473,
        "saikou": 1.6,
        "heikin": 1.08,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.775
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.13,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.76
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 83.473,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.733
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 84.473,
        "saikou": 1.6,
        "heikin": 1.08,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.751
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 105.473,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.789
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 136.969,
        "saikou": 4.46,
        "heikin": 3.53,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 3.959
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 107.891,
        "saikou": 4,
        "heikin": 2.43,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 3.755
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 154.602,
        "saikou": 2.8,
        "heikin": 2.13,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 3.549
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 154.6,
        "saikou": 2.8,
        "heikin": 2.05,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 3.589
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 156.589,
        "saikou": 2.8,
        "heikin": 2.09,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 3.504
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 156.382,
        "saikou": 2.8,
        "heikin": 2.18,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 3.567
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 175.401,
        "saikou": 3.09,
        "heikin": 2.7,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 3.632
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 170.461,
        "saikou": 3.09,
        "heikin": 2.7,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 3.675
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 174.289,
        "saikou": 3.09,
        "heikin": 2.7,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.735
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 260.305,
        "saikou": 4.6,
        "heikin": 2.24,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.869
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 255.289,
        "saikou": 5.55,
        "heikin": 2.71,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.951
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 258.989,
        "saikou": 5.05,
        "heikin": 2.39,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.835
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 230.989,
        "saikou": 4.46,
        "heikin": 2.42,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 3.727
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 126.137,
        "saikou": 3.17,
        "heikin": 2.86,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 3.517
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 126.137,
        "saikou": 3.16,
        "heikin": 2.85,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 3.475
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 96.989,
        "saikou": 2.8,
        "heikin": 2.7,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 3.513
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 95.011,
        "saikou": 2.8,
        "heikin": 2.7,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 3.887
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 96.989,
        "saikou": 2.8,
        "heikin": 2.7,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 4.635
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 97.051,
        "saikou": 2.8,
        "heikin": 2.72,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 4.623
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 95.103,
        "saikou": 2.8,
        "heikin": 2.72,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 4.541
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 89.67,
        "saikou": 3.07,
        "heikin": 2.82,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 4.344
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 75.74,
        "saikou": 4,
        "heikin": 3.16,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 4.435
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 77.724,
        "saikou": 4.38,
        "heikin": 3.23,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.414
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 79.648,
        "saikou": 4.02,
        "heikin": 3.18,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.536
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 79.645,
        "saikou": 4.2,
        "heikin": 3.16,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 3.992
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 81.631,
        "saikou": 3.9,
        "heikin": 3.16,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 4.121
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 81.631,
        "saikou": 3.9,
        "heikin": 3.16,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 4.539
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 77.779,
        "saikou": 4.99,
        "heikin": 3.32,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 5.164
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 81.229,
        "saikou": 6.24,
        "heikin": 3.53,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 5.77
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 98.975,
        "saikou": 6.78,
        "heikin": 3.12,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 6.218
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 98.975,
        "saikou": 6.52,
        "heikin": 2.95,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 5.93
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 96.999,
        "saikou": 6.7,
        "heikin": 3,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.962
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 129.999,
        "saikou": 7.37,
        "heikin": 4.42,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.009
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 259.065,
        "saikou": 8.11,
        "heikin": 2.38,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 7.409
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 261.049,
        "saikou": 8.24,
        "heikin": 3.51,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 6.906
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 248.234,
        "saikou": 8.76,
        "heikin": 3.71,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 7.111
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 241.393,
        "saikou": 9.21,
        "heikin": 3.88,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 7.188
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 243.382,
        "saikou": 9.52,
        "heikin": 3.97,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 6.908
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 258.21,
        "saikou": 9.33,
        "heikin": 3.92,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 6.406
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 260.199,
        "saikou": 8.55,
        "heikin": 3.65,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 5.702
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 247.499,
        "saikou": 8.23,
        "heikin": 3.78,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 5.114
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 266.975,
        "saikou": 8.1,
        "heikin": 3.5,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.591
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 216.079,
        "saikou": 8.16,
        "heikin": 4.4,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.25
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 263.079,
        "saikou": 7.42,
        "heikin": 3.24,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.901
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 210.079,
        "saikou": 6.53,
        "heikin": 3.69,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.646
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 260.095,
        "saikou": 5.55,
        "heikin": 2.56,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 3.987
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 260.103,
        "saikou": 5.26,
        "heikin": 2.44,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 3.874
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 248.601,
        "saikou": 3.2,
        "heikin": 1.53,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 3.314
      }
    ]
  }
};
