// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/28〜2026/09/26）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-27",
  "fetchedAt": "2026-09-27",
  "avgWindowLabel": "過去30日平均（2026/08/28〜2026/09/26）",
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
      "ouatsu": 1394.185,
      "saikou": 10,
      "heikin": 2.41,
      "boshuAvg30d": 1365.6,
      "heikinAvg30d": 2.829
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1249,
      "ouatsu": 1417.039,
      "saikou": 10,
      "heikin": 1.98,
      "boshuAvg30d": 1365.6,
      "heikinAvg30d": 2.777
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1249,
      "ouatsu": 1595.443,
      "saikou": 10,
      "heikin": 2.23,
      "boshuAvg30d": 1365.6,
      "heikinAvg30d": 2.863
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1249,
      "ouatsu": 1649.548,
      "saikou": 10,
      "heikin": 2.14,
      "boshuAvg30d": 1365.3,
      "heikinAvg30d": 2.849
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1244,
      "ouatsu": 1567.752,
      "saikou": 10,
      "heikin": 2.13,
      "boshuAvg30d": 1360.3,
      "heikinAvg30d": 2.862
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1243,
      "ouatsu": 1536.762,
      "saikou": 10,
      "heikin": 2.36,
      "boshuAvg30d": 1359.2,
      "heikinAvg30d": 2.896
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1243,
      "ouatsu": 1549.948,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1364.7,
      "heikinAvg30d": 2.929
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1244,
      "ouatsu": 1444.474,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1365.7,
      "heikinAvg30d": 3.004
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1247,
      "ouatsu": 1561.85,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1368.8,
      "heikinAvg30d": 3.069
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1247,
      "ouatsu": 1466.062,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1368.9,
      "heikinAvg30d": 3.082
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1247,
      "ouatsu": 1594.699,
      "saikou": 10,
      "heikin": 2.57,
      "boshuAvg30d": 1368.9,
      "heikinAvg30d": 3.179
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1247,
      "ouatsu": 1648.569,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1368.9,
      "heikinAvg30d": 3.17
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1313,
      "ouatsu": 1628.559,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1434.5,
      "heikinAvg30d": 3.381
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1560.908,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1455.8,
      "heikinAvg30d": 3.269
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1357,
      "ouatsu": 1672.504,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1478.8,
      "heikinAvg30d": 3.288
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1375,
      "ouatsu": 1801.03,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1496.3,
      "heikinAvg30d": 3.238
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1376,
      "ouatsu": 1654.865,
      "saikou": 10,
      "heikin": 2.34,
      "boshuAvg30d": 1497.1,
      "heikinAvg30d": 3.445
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1376,
      "ouatsu": 1700.743,
      "saikou": 10,
      "heikin": 2.4,
      "boshuAvg30d": 1497.1,
      "heikinAvg30d": 3.63
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1313,
      "ouatsu": 1604.139,
      "saikou": 10,
      "heikin": 2.36,
      "boshuAvg30d": 1448.3,
      "heikinAvg30d": 3.69
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1317,
      "ouatsu": 1596.632,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1452.5,
      "heikinAvg30d": 3.617
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1325,
      "ouatsu": 1618.582,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1460.3,
      "heikinAvg30d": 3.628
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1325,
      "ouatsu": 1502.771,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1460.3,
      "heikinAvg30d": 3.656
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1322,
      "ouatsu": 1520.955,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1457.1,
      "heikinAvg30d": 3.572
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1321,
      "ouatsu": 1515.092,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1456.2,
      "heikinAvg30d": 3.535
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1314,
      "ouatsu": 1480.651,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1446.7,
      "heikinAvg30d": 3.407
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1314,
      "ouatsu": 1497.701,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1446.7,
      "heikinAvg30d": 3.4
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1314,
      "ouatsu": 1609.214,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1443.7,
      "heikinAvg30d": 3.561
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1308,
      "ouatsu": 1626.214,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1438.1,
      "heikinAvg30d": 3.719
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1303,
      "ouatsu": 1681.944,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1433.5,
      "heikinAvg30d": 3.813
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1296,
      "ouatsu": 1611.633,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1426.9,
      "heikinAvg30d": 3.818
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1353,
      "ouatsu": 1579.021,
      "saikou": 10,
      "heikin": 2.82,
      "boshuAvg30d": 1475.5,
      "heikinAvg30d": 3.772
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1353,
      "ouatsu": 1530.829,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1475.5,
      "heikinAvg30d": 3.953
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1353,
      "ouatsu": 1329.456,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1475.7,
      "heikinAvg30d": 3.96
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1351,
      "ouatsu": 1346.847,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1473.2,
      "heikinAvg30d": 4.128
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1347,
      "ouatsu": 1733.117,
      "saikou": 10,
      "heikin": 3.87,
      "boshuAvg30d": 1465.3,
      "heikinAvg30d": 4.242
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1343,
      "ouatsu": 1709.965,
      "saikou": 10,
      "heikin": 4.04,
      "boshuAvg30d": 1461.3,
      "heikinAvg30d": 4.202
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1335,
      "ouatsu": 1716.31,
      "saikou": 10,
      "heikin": 4.14,
      "boshuAvg30d": 1453.2,
      "heikinAvg30d": 4.285
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1335,
      "ouatsu": 1735.04,
      "saikou": 10,
      "heikin": 4.07,
      "boshuAvg30d": 1453.1,
      "heikinAvg30d": 4.202
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1336,
      "ouatsu": 1806.78,
      "saikou": 10,
      "heikin": 4.66,
      "boshuAvg30d": 1453.6,
      "heikinAvg30d": 4.071
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1335,
      "ouatsu": 1891.746,
      "saikou": 10,
      "heikin": 4.28,
      "boshuAvg30d": 1452.7,
      "heikinAvg30d": 3.938
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1330,
      "ouatsu": 1836.519,
      "saikou": 10,
      "heikin": 4.24,
      "boshuAvg30d": 1447.7,
      "heikinAvg30d": 3.835
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1326,
      "ouatsu": 1955.263,
      "saikou": 10,
      "heikin": 4.09,
      "boshuAvg30d": 1444.1,
      "heikinAvg30d": 3.775
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1233,
      "ouatsu": 1825.765,
      "saikou": 9.4,
      "heikin": 4.16,
      "boshuAvg30d": 1356.7,
      "heikinAvg30d": 3.492
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1236,
      "ouatsu": 1887.227,
      "saikou": 9.4,
      "heikin": 3.93,
      "boshuAvg30d": 1359.7,
      "heikinAvg30d": 3.649
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1237,
      "ouatsu": 1810.968,
      "saikou": 9.4,
      "heikin": 4.01,
      "boshuAvg30d": 1360.7,
      "heikinAvg30d": 3.46
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1230,
      "ouatsu": 1775.792,
      "saikou": 9.4,
      "heikin": 3.53,
      "boshuAvg30d": 1353.8,
      "heikinAvg30d": 3.415
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1223,
      "ouatsu": 1784.323,
      "saikou": 9.4,
      "heikin": 3.38,
      "boshuAvg30d": 1346.6,
      "heikinAvg30d": 3.423
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1215,
      "ouatsu": 1732.388,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1338.4,
      "heikinAvg30d": 3.217
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
        "saikou": 1.01,
        "heikin": 0.94,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.018
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 151.958,
        "saikou": 1.01,
        "heikin": 0.9,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 0.976
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 180.058,
        "saikou": 3.85,
        "heikin": 1.4,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.037
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 200.258,
        "saikou": 1.01,
        "heikin": 0.93,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 0.995
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 193.908,
        "saikou": 3.15,
        "heikin": 1.06,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.283
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 216.308,
        "saikou": 3.55,
        "heikin": 1.08,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.425
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 3.95,
        "heikin": 1.15,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.396
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.415
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 239.308,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.72
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.488
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 198.358,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.519
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 237.358,
        "saikou": 1.01,
        "heikin": 0.89,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.738
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 193.908,
        "saikou": 3.95,
        "heikin": 1.39,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.087
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 200.308,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.591
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.93,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.41
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 232.358,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.423
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 186.94,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 0.975
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 232.34,
        "saikou": 1,
        "heikin": 0.94,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.046
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 184.99,
        "saikou": 1.01,
        "heikin": 0.71,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 0.931
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.73,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 0.976
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 234.308,
        "saikou": 1,
        "heikin": 0.72,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 1.021
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 146.94,
        "saikou": 1.01,
        "heikin": 0.73,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 1.026
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 158.358,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 0.919
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 158.358,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 0.958
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 146.918,
        "saikou": 1.01,
        "heikin": 0.73,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 1.034
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 146.918,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 0.963
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 232.358,
        "saikou": 1,
        "heikin": 0.72,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 1.252
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.72,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 1.292
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 234.308,
        "saikou": 1,
        "heikin": 0.72,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.225
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 208.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.399
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.235
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 233.678,
        "saikou": 8.15,
        "heikin": 1.54,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.62
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 110.99,
        "saikou": 8,
        "heikin": 1.4,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.987
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 152.958,
        "saikou": 5.16,
        "heikin": 1.09,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.859
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 173.358,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.292
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 173.358,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.086
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 127.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.182
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 156.39,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.278
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.908
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 158.358,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.811
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.012
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 237.358,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.821
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.493
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 237.358,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.762
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 0.92,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.464
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 237.358,
        "saikou": 1.01,
        "heikin": 0.92,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.489
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.292
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 198.358,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.503
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 70.509,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 8.323
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 70.509,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 8.583
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 101.057,
        "saikou": 10,
        "heikin": 7.91,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 8.928
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 102.987,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 8.918
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 100.989,
        "saikou": 10,
        "heikin": 8.03,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 8.884
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 100.989,
        "saikou": 10,
        "heikin": 8.03,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 8.936
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 115.987,
        "saikou": 10,
        "heikin": 8.15,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 8.826
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 117.487,
        "saikou": 10,
        "heikin": 8.15,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 8.824
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 8.796
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 83.486,
        "saikou": 10,
        "heikin": 8.23,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 8.748
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 83.486,
        "saikou": 10,
        "heikin": 8.22,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 8.699
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 8.78
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 8.69,
        "boshuAvg30d": 182.2,
        "heikinAvg30d": 8.927
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 105.986,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 187.3,
        "heikinAvg30d": 9.101
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 8.71,
        "boshuAvg30d": 193.2,
        "heikinAvg30d": 9.144
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 105.986,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 197.1,
        "heikinAvg30d": 9.082
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 197.1,
        "heikinAvg30d": 9.137
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 105.986,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 197.1,
        "heikinAvg30d": 8.996
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 108.132,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 8.42
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 108.132,
        "saikou": 10,
        "heikin": 8.83,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 8.412
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 9,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 8.339
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 9.09,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 8.386
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 8.386
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 118.167,
        "saikou": 10,
        "heikin": 9.08,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 8.467
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 117.686,
        "saikou": 10,
        "heikin": 8.83,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 8.578
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 117.686,
        "saikou": 10,
        "heikin": 8.83,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 8.555
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 121.482,
        "saikou": 10,
        "heikin": 8.86,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 8.243
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 133.482,
        "saikou": 10,
        "heikin": 8.44,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 8.269
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 133.482,
        "saikou": 10,
        "heikin": 8.41,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 8.529
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 133.482,
        "saikou": 10,
        "heikin": 8.33,
        "boshuAvg30d": 133.9,
        "heikinAvg30d": 8.394
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 107.484,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 193.5,
        "heikinAvg30d": 8.755
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 85.484,
        "saikou": 10,
        "heikin": 9.26,
        "boshuAvg30d": 193.5,
        "heikinAvg30d": 8.338
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 8.98,
        "boshuAvg30d": 193.5,
        "heikinAvg30d": 7.996
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 59.984,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 192.3,
        "heikinAvg30d": 7.647
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 8.98,
        "boshuAvg30d": 190.3,
        "heikinAvg30d": 7.673
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 59.984,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 188.3,
        "heikinAvg30d": 7.649
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 57.523,
        "saikou": 10,
        "heikin": 8.92,
        "boshuAvg30d": 187.2,
        "heikinAvg30d": 7.605
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 57.988,
        "saikou": 10,
        "heikin": 8.91,
        "boshuAvg30d": 187.2,
        "heikinAvg30d": 7.618
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 59.488,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 187.2,
        "heikinAvg30d": 7.957
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 59.488,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 186.3,
        "heikinAvg30d": 8.256
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 59.488,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 186.2,
        "heikinAvg30d": 8.22
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 186.3,
        "heikinAvg30d": 8.384
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 79.658,
        "saikou": 9.4,
        "heikin": 7.25,
        "boshuAvg30d": 102.1,
        "heikinAvg30d": 8.501
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 81.558,
        "saikou": 9.4,
        "heikin": 7.29,
        "boshuAvg30d": 102.1,
        "heikinAvg30d": 8.649
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 81.558,
        "saikou": 9.4,
        "heikin": 7.31,
        "boshuAvg30d": 102.1,
        "heikinAvg30d": 8.621
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 83.488,
        "saikou": 9.4,
        "heikin": 7.37,
        "boshuAvg30d": 101.1,
        "heikinAvg30d": 8.722
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 81.588,
        "saikou": 9.4,
        "heikin": 7.38,
        "boshuAvg30d": 100.1,
        "heikinAvg30d": 8.83
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 81.988,
        "saikou": 10,
        "heikin": 7.83,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 8.869
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 426,
        "ouatsu": 323.581,
        "saikou": 9.15,
        "heikin": 3.51,
        "boshuAvg30d": 498.3,
        "heikinAvg30d": 3.501
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 426,
        "ouatsu": 318.317,
        "saikou": 9.14,
        "heikin": 3.24,
        "boshuAvg30d": 498.3,
        "heikinAvg30d": 3.392
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 426,
        "ouatsu": 323.978,
        "saikou": 9.1,
        "heikin": 3.11,
        "boshuAvg30d": 498.3,
        "heikinAvg30d": 3.314
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 426,
        "ouatsu": 350.168,
        "saikou": 9.1,
        "heikin": 3.2,
        "boshuAvg30d": 498.1,
        "heikinAvg30d": 3.259
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 424,
        "ouatsu": 306.401,
        "saikou": 9.1,
        "heikin": 3.07,
        "boshuAvg30d": 496.1,
        "heikinAvg30d": 3.232
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 424,
        "ouatsu": 290.924,
        "saikou": 9.1,
        "heikin": 3.3,
        "boshuAvg30d": 496.1,
        "heikinAvg30d": 3.218
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 423,
        "ouatsu": 278.311,
        "saikou": 9.1,
        "heikin": 3.48,
        "boshuAvg30d": 495.0,
        "heikinAvg30d": 3.119
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 424,
        "ouatsu": 211.408,
        "saikou": 9.1,
        "heikin": 4.46,
        "boshuAvg30d": 496.0,
        "heikinAvg30d": 3.267
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 425,
        "ouatsu": 231.364,
        "saikou": 9.1,
        "heikin": 4.11,
        "boshuAvg30d": 497.0,
        "heikinAvg30d": 3.212
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 425,
        "ouatsu": 214.702,
        "saikou": 9.1,
        "heikin": 4.33,
        "boshuAvg30d": 497.1,
        "heikinAvg30d": 3.236
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 425,
        "ouatsu": 337.869,
        "saikou": 9.1,
        "heikin": 2.75,
        "boshuAvg30d": 497.1,
        "heikinAvg30d": 3.299
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 425,
        "ouatsu": 335.969,
        "saikou": 9.1,
        "heikin": 2.72,
        "boshuAvg30d": 497.1,
        "heikinAvg30d": 3.334
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 446,
        "ouatsu": 343.773,
        "saikou": 9.14,
        "heikin": 3.49,
        "boshuAvg30d": 518.1,
        "heikinAvg30d": 3.679
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 454,
        "ouatsu": 357.781,
        "saikou": 9.15,
        "heikin": 3.76,
        "boshuAvg30d": 526.1,
        "heikinAvg30d": 3.72
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 459,
        "ouatsu": 358.773,
        "saikou": 9.15,
        "heikin": 3.97,
        "boshuAvg30d": 531.4,
        "heikinAvg30d": 3.815
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 464,
        "ouatsu": 358.773,
        "saikou": 9.15,
        "heikin": 3.73,
        "boshuAvg30d": 536.3,
        "heikinAvg30d": 3.822
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 464,
        "ouatsu": 323.808,
        "saikou": 9.15,
        "heikin": 3.38,
        "boshuAvg30d": 536.3,
        "heikinAvg30d": 4.201
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 464,
        "ouatsu": 323.808,
        "saikou": 9.15,
        "heikin": 3.36,
        "boshuAvg30d": 536.3,
        "heikinAvg30d": 4.403
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 455,
        "ouatsu": 323.808,
        "saikou": 9.15,
        "heikin": 3.28,
        "boshuAvg30d": 530.1,
        "heikinAvg30d": 4.311
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 455,
        "ouatsu": 342.301,
        "saikou": 9.15,
        "heikin": 4.22,
        "boshuAvg30d": 530.1,
        "heikinAvg30d": 4.207
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 455,
        "ouatsu": 323.236,
        "saikou": 9.15,
        "heikin": 4.18,
        "boshuAvg30d": 530.1,
        "heikinAvg30d": 4.057
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 454,
        "ouatsu": 306.739,
        "saikou": 9.15,
        "heikin": 3.62,
        "boshuAvg30d": 529.1,
        "heikinAvg30d": 4.088
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 451,
        "ouatsu": 307.579,
        "saikou": 9.15,
        "heikin": 4.38,
        "boshuAvg30d": 526.1,
        "heikinAvg30d": 4.145
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 451,
        "ouatsu": 305.679,
        "saikou": 9.15,
        "heikin": 4.43,
        "boshuAvg30d": 526.1,
        "heikinAvg30d": 4.133
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 450,
        "ouatsu": 281.185,
        "saikou": 9.15,
        "heikin": 3.44,
        "boshuAvg30d": 525.1,
        "heikinAvg30d": 3.909
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 450,
        "ouatsu": 299.678,
        "saikou": 9.15,
        "heikin": 4.25,
        "boshuAvg30d": 525.1,
        "heikinAvg30d": 3.943
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 450,
        "ouatsu": 281.185,
        "saikou": 9.15,
        "heikin": 3.49,
        "boshuAvg30d": 522.1,
        "heikinAvg30d": 4.014
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 449,
        "ouatsu": 315.785,
        "saikou": 9.15,
        "heikin": 3.98,
        "boshuAvg30d": 521.5,
        "heikinAvg30d": 4.168
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 448,
        "ouatsu": 315.785,
        "saikou": 9.14,
        "heikin": 3.75,
        "boshuAvg30d": 520.6,
        "heikinAvg30d": 4.28
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 448,
        "ouatsu": 315.785,
        "saikou": 9.14,
        "heikin": 3.8,
        "boshuAvg30d": 520.6,
        "heikinAvg30d": 4.076
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 447,
        "ouatsu": 319.781,
        "saikou": 9.1,
        "heikin": 3.77,
        "boshuAvg30d": 519.6,
        "heikinAvg30d": 4.105
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 447,
        "ouatsu": 319.781,
        "saikou": 9.1,
        "heikin": 3.6,
        "boshuAvg30d": 519.6,
        "heikinAvg30d": 4.089
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 447,
        "ouatsu": 319.781,
        "saikou": 9.1,
        "heikin": 3.84,
        "boshuAvg30d": 519.6,
        "heikinAvg30d": 4.22
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 447,
        "ouatsu": 331.67,
        "saikou": 9.1,
        "heikin": 4.26,
        "boshuAvg30d": 519.5,
        "heikinAvg30d": 4.411
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 447,
        "ouatsu": 356.613,
        "saikou": 9.1,
        "heikin": 4.37,
        "boshuAvg30d": 515.4,
        "heikinAvg30d": 4.519
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 447,
        "ouatsu": 379.135,
        "saikou": 9.14,
        "heikin": 4.47,
        "boshuAvg30d": 515.4,
        "heikinAvg30d": 4.429
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 449,
        "ouatsu": 457.086,
        "saikou": 9.77,
        "heikin": 4.39,
        "boshuAvg30d": 517.5,
        "heikinAvg30d": 4.536
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 449,
        "ouatsu": 441.459,
        "saikou": 9.79,
        "heikin": 4.55,
        "boshuAvg30d": 517.4,
        "heikinAvg30d": 4.404
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 450,
        "ouatsu": 547.195,
        "saikou": 10,
        "heikin": 5.71,
        "boshuAvg30d": 517.9,
        "heikinAvg30d": 4.382
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 450,
        "ouatsu": 531.886,
        "saikou": 9.74,
        "heikin": 5.35,
        "boshuAvg30d": 517.9,
        "heikinAvg30d": 4.294
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 448,
        "ouatsu": 503.607,
        "saikou": 9.23,
        "heikin": 5.3,
        "boshuAvg30d": 516.0,
        "heikinAvg30d": 4.144
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 448,
        "ouatsu": 552.734,
        "saikou": 9.14,
        "heikin": 5,
        "boshuAvg30d": 516.0,
        "heikinAvg30d": 4.237
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 447,
        "ouatsu": 530.912,
        "saikou": 9.15,
        "heikin": 4.95,
        "boshuAvg30d": 515.2,
        "heikinAvg30d": 4.019
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 447,
        "ouatsu": 494.048,
        "saikou": 9.15,
        "heikin": 5.18,
        "boshuAvg30d": 515.2,
        "heikinAvg30d": 4.377
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 447,
        "ouatsu": 494.048,
        "saikou": 9.15,
        "heikin": 5.32,
        "boshuAvg30d": 515.2,
        "heikinAvg30d": 3.971
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 445,
        "ouatsu": 492.492,
        "saikou": 9.15,
        "heikin": 5.12,
        "boshuAvg30d": 513.2,
        "heikinAvg30d": 4.104
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 443,
        "ouatsu": 509.012,
        "saikou": 9.15,
        "heikin": 5.25,
        "boshuAvg30d": 511.0,
        "heikinAvg30d": 4.258
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 442,
        "ouatsu": 464.578,
        "saikou": 9.15,
        "heikin": 4.46,
        "boshuAvg30d": 509.9,
        "heikinAvg30d": 4.065
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 179.417,
        "saikou": 2.35,
        "heikin": 1.33,
        "boshuAvg30d": 104.9,
        "heikinAvg30d": 2.247
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 189.161,
        "saikou": 2,
        "heikin": 0.63,
        "boshuAvg30d": 104.9,
        "heikinAvg30d": 2.187
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 204.738,
        "saikou": 2,
        "heikin": 0.63,
        "boshuAvg30d": 104.9,
        "heikinAvg30d": 2.198
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 208.715,
        "saikou": 2,
        "heikin": 0.63,
        "boshuAvg30d": 104.9,
        "heikinAvg30d": 2.332
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 186.871,
        "saikou": 2,
        "heikin": 0.59,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 2.359
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 190.911,
        "saikou": 1.9,
        "heikin": 0.59,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 2.451
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 222.216,
        "saikou": 1.9,
        "heikin": 0.61,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 2.332
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 216.516,
        "saikou": 2.19,
        "heikin": 1.06,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 2.465
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 222.216,
        "saikou": 2.27,
        "heikin": 1.2,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 2.552
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 222.216,
        "saikou": 2.39,
        "heikin": 1.31,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 2.441
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 222.216,
        "saikou": 2.3,
        "heikin": 1.26,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 2.512
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 220.716,
        "saikou": 2.27,
        "heikin": 1.18,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 2.508
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 222.216,
        "saikou": 2.39,
        "heikin": 1.36,
        "boshuAvg30d": 113.7,
        "heikinAvg30d": 2.569
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 177.963,
        "saikou": 2.39,
        "heikin": 1.25,
        "boshuAvg30d": 116.7,
        "heikinAvg30d": 2.482
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 177.963,
        "saikou": 2.27,
        "heikin": 0.99,
        "boshuAvg30d": 119.7,
        "heikinAvg30d": 2.62
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 185.847,
        "saikou": 2.27,
        "heikin": 0.99,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 2.603
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 184.347,
        "saikou": 2.45,
        "heikin": 1.06,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 2.979
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 184.347,
        "saikou": 2.47,
        "heikin": 1.06,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 3.041
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 147.135,
        "saikou": 2.74,
        "heikin": 1.19,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 3.436
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 151.015,
        "saikou": 3.38,
        "heikin": 1.33,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 3.416
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 108.163,
        "saikou": 3.49,
        "heikin": 2.85,
        "boshuAvg30d": 126.5,
        "heikinAvg30d": 3.537
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 108.163,
        "saikou": 4.27,
        "heikin": 2.97,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 3.598
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 112.139,
        "saikou": 3.86,
        "heikin": 2.94,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 3.374
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 112.139,
        "saikou": 3.77,
        "heikin": 2.83,
        "boshuAvg30d": 123.5,
        "heikinAvg30d": 3.181
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 112.13,
        "saikou": 3.48,
        "heikin": 2.72,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 3.191
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 112.13,
        "saikou": 3.48,
        "heikin": 2.72,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 3.174
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 149.459,
        "saikou": 3.49,
        "heikin": 2.64,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 3.107
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 168.654,
        "saikou": 2.99,
        "heikin": 1.75,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 3.172
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 172.534,
        "saikou": 3.27,
        "heikin": 1.96,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 3.347
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 172.534,
        "saikou": 3.48,
        "heikin": 2.22,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 3.29
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 164.65,
        "saikou": 3.27,
        "heikin": 1.92,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 3.127
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 166.15,
        "saikou": 3.49,
        "heikin": 2.2,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 3.126
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 152.949,
        "saikou": 2.9,
        "heikin": 2.44,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 3.076
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 156.929,
        "saikou": 5.1,
        "heikin": 2.64,
        "boshuAvg30d": 118.7,
        "heikinAvg30d": 3.35
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 419.028,
        "saikou": 3.79,
        "heikin": 2.11,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 3.273
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 360.132,
        "saikou": 3.88,
        "heikin": 2.69,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 2.994
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 361.768,
        "saikou": 2.78,
        "heikin": 2.51,
        "boshuAvg30d": 116.8,
        "heikinAvg30d": 2.947
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 361.768,
        "saikou": 2.8,
        "heikin": 2.32,
        "boshuAvg30d": 116.8,
        "heikinAvg30d": 2.782
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 371.651,
        "saikou": 2.79,
        "heikin": 2.47,
        "boshuAvg30d": 116.8,
        "heikinAvg30d": 2.48
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 416.809,
        "saikou": 2.93,
        "heikin": 2.2,
        "boshuAvg30d": 116.8,
        "heikinAvg30d": 2.52
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 355.675,
        "saikou": 4.15,
        "heikin": 2.46,
        "boshuAvg30d": 116.8,
        "heikinAvg30d": 2.528
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 361.724,
        "saikou": 3.21,
        "heikin": 2.77,
        "boshuAvg30d": 116.8,
        "heikinAvg30d": 2.434
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 305.219,
        "saikou": 2.75,
        "heikin": 2.51,
        "boshuAvg30d": 116.7,
        "heikinAvg30d": 2.331
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 305.219,
        "saikou": 2.79,
        "heikin": 2.51,
        "boshuAvg30d": 117.8,
        "heikinAvg30d": 2.511
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 283.41,
        "saikou": 2.88,
        "heikin": 2.61,
        "boshuAvg30d": 117.8,
        "heikinAvg30d": 2.569
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 283.41,
        "saikou": 3.33,
        "heikin": 2.45,
        "boshuAvg30d": 116.8,
        "heikinAvg30d": 2.646
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 283.41,
        "saikou": 2.75,
        "heikin": 2.32,
        "boshuAvg30d": 115.8,
        "heikinAvg30d": 2.652
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 241.787,
        "saikou": 2.79,
        "heikin": 2.28,
        "boshuAvg30d": 112.9,
        "heikinAvg30d": 2.675
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.65,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.126
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.178
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 80.93,
        "saikou": 0.42,
        "heikin": 0.4,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.043
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.216
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.459
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 1.5,
        "heikin": 0.44,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.026
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 0.42,
        "heikin": 0.4,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.188
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.333
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.305
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 13.202,
        "saikou": 0.61,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.427
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 14.222,
        "saikou": 2,
        "heikin": 0.97,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.497
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 13.79,
        "saikou": 2,
        "heikin": 0.98,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.365
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2,
        "heikin": 0.65,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.714
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 57.928,
        "saikou": 0.42,
        "heikin": 0.41,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.566
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 57.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.697
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.756
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 1.933
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 2.611
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 82.928,
        "saikou": 2.45,
        "heikin": 0.44,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.994
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.018
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.709
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.963
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.863
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.652
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.706
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.836
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.912
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.906
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 82.928,
        "saikou": 0.97,
        "heikin": 0.77,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.969
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 26.196,
        "saikou": 0.89,
        "heikin": 0.46,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.839
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 79.39,
        "saikou": 1.54,
        "heikin": 1.19,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.851
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 0.86,
        "heikin": 0.86,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 3.121
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 8.874,
        "saikou": 3.7,
        "heikin": 1.74,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.591
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 3.05,
        "heikin": 0.82,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.967
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 7.206,
        "saikou": 3.6,
        "heikin": 2.09,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.787
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 4,
        "heikin": 1.19,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.472
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 6.468,
        "saikou": 4,
        "heikin": 2.34,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.604
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 11.928,
        "saikou": 3.75,
        "heikin": 1.61,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.287
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 6.886,
        "saikou": 2.7,
        "heikin": 1.68,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.357
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 11.124,
        "saikou": 2.7,
        "heikin": 1.25,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.707
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 8.458,
        "saikou": 2.25,
        "heikin": 1.46,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.801
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 11.928,
        "saikou": 2.5,
        "heikin": 1.36,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.926
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 11.928,
        "saikou": 2.3,
        "heikin": 1.29,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.129
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.3,
        "heikin": 0.71,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.123
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 11.928,
        "saikou": 2.5,
        "heikin": 1.07,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.868
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.3,
        "heikin": 0.71,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.717
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 47.928,
        "saikou": 2.5,
        "heikin": 0.55,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.682
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 67.22,
        "saikou": 2.5,
        "heikin": 0.51,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.289
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 42.019,
        "saikou": 2.5,
        "heikin": 2.28,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.066
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 95.367,
        "saikou": 1.91,
        "heikin": 1.88,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 1.911
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 143.237,
        "saikou": 1.24,
        "heikin": 0.41,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.046
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 139.259,
        "saikou": 1.24,
        "heikin": 0.41,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.015
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 131.422,
        "saikou": 1.24,
        "heikin": 0.41,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.1
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 89.469,
        "saikou": 1.24,
        "heikin": 1.24,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 2.043
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 99.256,
        "saikou": 1.24,
        "heikin": 1.24,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.116
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 99.256,
        "saikou": 2,
        "heikin": 1.91,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.097
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 99.256,
        "saikou": 2,
        "heikin": 1.91,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.088
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 99.256,
        "saikou": 2,
        "heikin": 1.91,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.128
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 99.256,
        "saikou": 2,
        "heikin": 1.91,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.125
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 97.258,
        "saikou": 2,
        "heikin": 1.91,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 1.981
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 99.256,
        "saikou": 2.4,
        "heikin": 1.96,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.478
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 99.256,
        "saikou": 1.91,
        "heikin": 1.89,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 2.587
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 99.256,
        "saikou": 1.24,
        "heikin": 1.24,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.637
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 147.146,
        "saikou": 1.24,
        "heikin": 0.41,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 2.759
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 99.256,
        "saikou": 1.24,
        "heikin": 1.24,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 3.146
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 99.256,
        "saikou": 1.24,
        "heikin": 1.24,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 3.244
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 103.123,
        "saikou": 2.79,
        "heikin": 2.15,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.37
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 1.91,
        "heikin": 1.89,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.446
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 1.91,
        "heikin": 1.89,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.762
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 1.91,
        "heikin": 1.89,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.693
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 1.91,
        "heikin": 1.89,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.523
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 1.91,
        "heikin": 1.89,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.272
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 1.91,
        "heikin": 1.89,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.508
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 99.78,
        "saikou": 1.91,
        "heikin": 1.91,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.236
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 1.91,
        "heikin": 1.88,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.402
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 101.68,
        "saikou": 2.7,
        "heikin": 2.09,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 3.359
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 101.68,
        "saikou": 2.79,
        "heikin": 2.17,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.388
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 103.123,
        "saikou": 3.47,
        "heikin": 2.23,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.272
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 101.253,
        "saikou": 2.79,
        "heikin": 2.13,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 3.096
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 101.253,
        "saikou": 2.95,
        "heikin": 2.26,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 3.207
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 101.253,
        "saikou": 4,
        "heikin": 2.61,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 3.216
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 101.253,
        "saikou": 4.94,
        "heikin": 2.67,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 3.424
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 101.253,
        "saikou": 4,
        "heikin": 2.23,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 3.416
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 101.253,
        "saikou": 4.94,
        "heikin": 2.37,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 3.241
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 101.163,
        "saikou": 4,
        "heikin": 2.35,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.081
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 101.163,
        "saikou": 4,
        "heikin": 2.28,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.036
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 99.256,
        "saikou": 4.94,
        "heikin": 2.34,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.14
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 99.256,
        "saikou": 2.8,
        "heikin": 2.25,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.943
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 97.258,
        "saikou": 2.8,
        "heikin": 2.24,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.796
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 97.406,
        "saikou": 2.8,
        "heikin": 2.19,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.81
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 97.406,
        "saikou": 2.8,
        "heikin": 2.15,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.845
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 97.406,
        "saikou": 2.8,
        "heikin": 2.17,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.717
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 97.406,
        "saikou": 2.8,
        "heikin": 2.22,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.739
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 97.406,
        "saikou": 2.9,
        "heikin": 2.2,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.739
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 95.963,
        "saikou": 2.8,
        "heikin": 2.17,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.597
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 71.177,
        "saikou": 2.8,
        "heikin": 2.04,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 2.574
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 216.907,
        "saikou": 2.4,
        "heikin": 1.07,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.954
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 216.907,
        "saikou": 1.58,
        "heikin": 0.92,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.133
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 216.907,
        "saikou": 1.84,
        "heikin": 1.57,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.262
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 220.697,
        "saikou": 1.62,
        "heikin": 1.39,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.165
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 220.697,
        "saikou": 1.62,
        "heikin": 1.39,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.113
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 220.697,
        "saikou": 1.62,
        "heikin": 1.39,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.109
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 237.556,
        "saikou": 1.84,
        "heikin": 1.57,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.203
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 237.556,
        "saikou": 2.92,
        "heikin": 2.19,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.319
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 237.556,
        "saikou": 3.53,
        "heikin": 2.61,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.267
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 237.556,
        "saikou": 4.64,
        "heikin": 3.34,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.502
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 237.556,
        "saikou": 4.64,
        "heikin": 3.32,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.799
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 237.556,
        "saikou": 4.64,
        "heikin": 3.34,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.722
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 237.556,
        "saikou": 2.92,
        "heikin": 2.19,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 3.18
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 212.102,
        "saikou": 1.84,
        "heikin": 1.75,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 2.522
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 237.556,
        "saikou": 1.58,
        "heikin": 1.36,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.479
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 237.556,
        "saikou": 1.5,
        "heikin": 1.28,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.312
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 221.642,
        "saikou": 1.58,
        "heikin": 1.19,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.252
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 221.642,
        "saikou": 1.58,
        "heikin": 1.35,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.95
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 237.556,
        "saikou": 2.79,
        "heikin": 1.22,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.985
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 237.556,
        "saikou": 1.58,
        "heikin": 0.54,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.694
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 237.556,
        "saikou": 1.58,
        "heikin": 0.91,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 2.749
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 237.556,
        "saikou": 1.58,
        "heikin": 1.03,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.739
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 237.556,
        "saikou": 1.58,
        "heikin": 1.35,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.634
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 237.556,
        "saikou": 1.67,
        "heikin": 1.43,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.583
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 237.556,
        "saikou": 1.58,
        "heikin": 1.03,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.175
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 237.556,
        "saikou": 2.67,
        "heikin": 1.4,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.052
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 237.556,
        "saikou": 1.58,
        "heikin": 1.21,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.571
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 237.556,
        "saikou": 2.8,
        "heikin": 1.4,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.787
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 237.556,
        "saikou": 2.99,
        "heikin": 2.1,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.002
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 223.138,
        "saikou": 3.06,
        "heikin": 2.17,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.055
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 223.138,
        "saikou": 2.97,
        "heikin": 2.46,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.523
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 223.138,
        "saikou": 4.79,
        "heikin": 3.7,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.134
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 197.684,
        "saikou": 4.03,
        "heikin": 3.62,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.979
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 197.684,
        "saikou": 4,
        "heikin": 2.88,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.246
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 197.684,
        "saikou": 4.52,
        "heikin": 3.98,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.547
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 197.684,
        "saikou": 4.79,
        "heikin": 4.17,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.906
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 195.694,
        "saikou": 4.87,
        "heikin": 4.25,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 5.143
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 195.694,
        "saikou": 4.89,
        "heikin": 4.25,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 5.266
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 195.694,
        "saikou": 4.87,
        "heikin": 4.23,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.938
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 197.684,
        "saikou": 4.79,
        "heikin": 4.18,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.609
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 197.684,
        "saikou": 4.87,
        "heikin": 4.12,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.261
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 197.684,
        "saikou": 4.89,
        "heikin": 4.08,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 3.861
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 197.684,
        "saikou": 4.87,
        "heikin": 4.11,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.667
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 197.684,
        "saikou": 3.55,
        "heikin": 3.18,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.488
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 197.684,
        "saikou": 2.97,
        "heikin": 2.75,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.389
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 197.684,
        "saikou": 2.97,
        "heikin": 2.68,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.124
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 223.138,
        "saikou": 2.8,
        "heikin": 1.68,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 3.02
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 235.756,
        "saikou": 2.9,
        "heikin": 0.82,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.095
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
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.875
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.896
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.5,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.908
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.51,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.88
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.43,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.872
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.61,
        "boshuAvg30d": 39.9,
        "heikinAvg30d": 0.873
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 1.011
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 172.93,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.945
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.992
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.037
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.014
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 2.3,
        "heikin": 0.65,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.014
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 2.3,
        "heikin": 0.65,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.009
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.59,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 1.045
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.909
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.52,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.89
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.51,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.935
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 2.3,
        "heikin": 0.7,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 0.975
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 165.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 0.96
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.978
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.996
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.99
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.988
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.175
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.126
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.007
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 2.5,
        "heikin": 0.82,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.032
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 2.85,
        "heikin": 0.84,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.043
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 2.5,
        "heikin": 0.82,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.938
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 2.5,
        "heikin": 0.82,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.982
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 3,
        "heikin": 0.86,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.011
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.008
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.945
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.978
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.006
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.0
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.012
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.058
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.046
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.013
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.07,
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
        "heikinAvg30d": 0.745
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.776
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.783
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.777
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.797
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.7,
        "heikin": 0.97,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.841
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 137.443,
        "saikou": 4.26,
        "heikin": 3.4,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 3.98
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 104.419,
        "saikou": 2.8,
        "heikin": 2.43,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 3.57
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 157.065,
        "saikou": 2.33,
        "heikin": 2.05,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 3.269
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 157.063,
        "saikou": 2.66,
        "heikin": 2.36,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 3.218
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 157.063,
        "saikou": 2.46,
        "heikin": 2.15,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 3.134
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 157.063,
        "saikou": 4.18,
        "heikin": 3.87,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 3.192
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 176.263,
        "saikou": 4.64,
        "heikin": 4.17,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.356
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 213.435,
        "saikou": 5.86,
        "heikin": 3.53,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.519
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 217.263,
        "saikou": 5.84,
        "heikin": 3.57,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.609
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 217.263,
        "saikou": 5.86,
        "heikin": 3.56,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.85
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 217.263,
        "saikou": 5.73,
        "heikin": 3.47,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.936
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 213.963,
        "saikou": 5.15,
        "heikin": 3.14,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.74
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 213.963,
        "saikou": 4.09,
        "heikin": 2.55,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 3.515
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 162.111,
        "saikou": 2.4,
        "heikin": 1.94,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 3.287
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 259.111,
        "saikou": 2.93,
        "heikin": 2.31,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 3.149
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 262.963,
        "saikou": 2.81,
        "heikin": 2.2,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 3.214
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 260.985,
        "saikou": 2.55,
        "heikin": 1.92,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 3.569
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 262.963,
        "saikou": 2.55,
        "heikin": 1.92,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 4.172
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 262.994,
        "saikou": 2.79,
        "heikin": 1.9,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 4.214
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 261.046,
        "saikou": 2.4,
        "heikin": 1.78,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 4.189
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 257.563,
        "saikou": 2.14,
        "heikin": 1.51,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 4.011
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 245.617,
        "saikou": 2.1,
        "heikin": 1.47,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 4.187
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 247.567,
        "saikou": 2.14,
        "heikin": 1.51,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 4.137
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 245.569,
        "saikou": 2.46,
        "heikin": 1.83,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 4.147
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 247.552,
        "saikou": 2.14,
        "heikin": 1.51,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 3.639
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 247.552,
        "saikou": 2.69,
        "heikin": 2.08,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 3.76
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 249.55,
        "saikou": 1.41,
        "heikin": 1,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 4.189
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 245.698,
        "saikou": 3.6,
        "heikin": 1.52,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 4.712
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 250.198,
        "saikou": 3.8,
        "heikin": 1.84,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 5.17
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 274.944,
        "saikou": 3.35,
        "heikin": 2.65,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 5.502
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 274.944,
        "saikou": 3.04,
        "heikin": 2.39,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 5.423
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 224.944,
        "saikou": 4.84,
        "heikin": 3.42,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.07
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 222.968,
        "saikou": 5.77,
        "heikin": 4.04,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.028
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 169.968,
        "saikou": 5.59,
        "heikin": 4.14,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 6.236
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 263.018,
        "saikou": 7.86,
        "heikin": 5.9,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.998
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 262.018,
        "saikou": 8.12,
        "heikin": 6.12,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.119
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 255.177,
        "saikou": 8.38,
        "heikin": 6.32,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 6.168
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 255.177,
        "saikou": 8.34,
        "heikin": 6.29,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 5.938
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 260.179,
        "saikou": 8.16,
        "heikin": 6.14,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 5.546
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 263.668,
        "saikou": 7.84,
        "heikin": 5.88,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 5.134
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 266.968,
        "saikou": 7.64,
        "heikin": 5.75,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.837
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 259.468,
        "saikou": 7.64,
        "heikin": 5.72,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.592
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 260.577,
        "saikou": 7.63,
        "heikin": 5.71,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.274
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 263.553,
        "saikou": 7.63,
        "heikin": 5.71,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.425
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 263.553,
        "saikou": 7.59,
        "heikin": 5.69,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.351
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 173.553,
        "saikou": 6.09,
        "heikin": 4.38,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 3.859
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 161.903,
        "saikou": 5.84,
        "heikin": 4.22,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 3.806
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 161.051,
        "saikou": 4.47,
        "heikin": 3.5,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 3.318
      }
    ]
  }
};
