// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/23〜2026/09/21）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-22",
  "fetchedAt": "2026-09-22",
  "avgWindowLabel": "過去30日平均（2026/08/23〜2026/09/21）",
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
      "ouatsu": 1207.043,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1406.4,
      "heikinAvg30d": 2.927
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1249,
      "ouatsu": 1258.666,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1406.4,
      "heikinAvg30d": 2.867
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1249,
      "ouatsu": 1448.137,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1406.4,
      "heikinAvg30d": 2.961
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1249,
      "ouatsu": 1438.244,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1405.8,
      "heikinAvg30d": 2.963
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1244,
      "ouatsu": 1434.42,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1400.8,
      "heikinAvg30d": 3.0
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1243,
      "ouatsu": 1477.369,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1399.5,
      "heikinAvg30d": 3.033
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1243,
      "ouatsu": 1512.317,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1407.5,
      "heikinAvg30d": 3.085
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1244,
      "ouatsu": 1504.563,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1408.5,
      "heikinAvg30d": 3.144
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1247,
      "ouatsu": 1561.003,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1411.8,
      "heikinAvg30d": 3.185
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1247,
      "ouatsu": 1544.998,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1412.1,
      "heikinAvg30d": 3.166
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1247,
      "ouatsu": 1577.121,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1412.1,
      "heikinAvg30d": 3.267
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1247,
      "ouatsu": 1646.658,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1412.1,
      "heikinAvg30d": 3.227
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1313,
      "ouatsu": 1695.201,
      "saikou": 10,
      "heikin": 3.5,
      "boshuAvg30d": 1477.2,
      "heikinAvg30d": 3.533
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1612.707,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1498.8,
      "heikinAvg30d": 3.463
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1357,
      "ouatsu": 1533.747,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1521.8,
      "heikinAvg30d": 3.481
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1375,
      "ouatsu": 1535.055,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1538.6,
      "heikinAvg30d": 3.464
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1376,
      "ouatsu": 1430.334,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1539.3,
      "heikinAvg30d": 3.705
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1376,
      "ouatsu": 1467.611,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1539.3,
      "heikinAvg30d": 3.918
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1313,
      "ouatsu": 1363.139,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1493.0,
      "heikinAvg30d": 3.918
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1317,
      "ouatsu": 1294.432,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1497.3,
      "heikinAvg30d": 3.814
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1325,
      "ouatsu": 1268.356,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1505.0,
      "heikinAvg30d": 3.756
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1325,
      "ouatsu": 1269.192,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1505.0,
      "heikinAvg30d": 3.776
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1322,
      "ouatsu": 1255.289,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1501.4,
      "heikinAvg30d": 3.733
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1321,
      "ouatsu": 1234.555,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1500.7,
      "heikinAvg30d": 3.717
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1314,
      "ouatsu": 1257.024,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1491.7,
      "heikinAvg30d": 3.535
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1314,
      "ouatsu": 1270.66,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1491.7,
      "heikinAvg30d": 3.522
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1314,
      "ouatsu": 1283.632,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1489.2,
      "heikinAvg30d": 3.83
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1308,
      "ouatsu": 1306.527,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1483.2,
      "heikinAvg30d": 4.039
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1303,
      "ouatsu": 1324.266,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1479.1,
      "heikinAvg30d": 4.141
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1296,
      "ouatsu": 1501.209,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1473.0,
      "heikinAvg30d": 4.192
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1353,
      "ouatsu": 1454.786,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1519.1,
      "heikinAvg30d": 4.183
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1353,
      "ouatsu": 1395.283,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1519.1,
      "heikinAvg30d": 4.468
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1353,
      "ouatsu": 1430.291,
      "saikou": 10,
      "heikin": 3.57,
      "boshuAvg30d": 1519.0,
      "heikinAvg30d": 4.471
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1351,
      "ouatsu": 1681.459,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1516.1,
      "heikinAvg30d": 4.703
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1347,
      "ouatsu": 1617.689,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1508.8,
      "heikinAvg30d": 4.802
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1343,
      "ouatsu": 1573.49,
      "saikou": 10,
      "heikin": 4.31,
      "boshuAvg30d": 1504.8,
      "heikinAvg30d": 4.724
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1335,
      "ouatsu": 1541.542,
      "saikou": 10,
      "heikin": 4.56,
      "boshuAvg30d": 1496.5,
      "heikinAvg30d": 4.738
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1335,
      "ouatsu": 1577.389,
      "saikou": 10,
      "heikin": 4.48,
      "boshuAvg30d": 1496.2,
      "heikinAvg30d": 4.627
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1336,
      "ouatsu": 1716.427,
      "saikou": 10,
      "heikin": 4.52,
      "boshuAvg30d": 1496.5,
      "heikinAvg30d": 4.464
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1335,
      "ouatsu": 1659.549,
      "saikou": 10,
      "heikin": 4.13,
      "boshuAvg30d": 1495.8,
      "heikinAvg30d": 4.267
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1330,
      "ouatsu": 1755.683,
      "saikou": 10,
      "heikin": 3.85,
      "boshuAvg30d": 1490.8,
      "heikinAvg30d": 4.04
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1326,
      "ouatsu": 1711.754,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1487.7,
      "heikinAvg30d": 3.85
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1233,
      "ouatsu": 1796.824,
      "saikou": 10,
      "heikin": 3.57,
      "boshuAvg30d": 1400.2,
      "heikinAvg30d": 3.51
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1236,
      "ouatsu": 1647.598,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1403.2,
      "heikinAvg30d": 3.965
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1237,
      "ouatsu": 1599.539,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1404.2,
      "heikinAvg30d": 3.698
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1230,
      "ouatsu": 1683.173,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1397.5,
      "heikinAvg30d": 3.527
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1223,
      "ouatsu": 1622.076,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1389.9,
      "heikinAvg30d": 3.528
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1215,
      "ouatsu": 1560.495,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1381.6,
      "heikinAvg30d": 3.343
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
        "ouatsu": 236.208,
        "saikou": 1,
        "heikin": 0.74,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.159
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 148.908,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.134
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 180.521,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.12
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 195.258,
        "saikou": 1,
        "heikin": 0.68,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.168
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.68,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.379
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 222.471,
        "saikou": 1.01,
        "heikin": 0.93,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.431
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 186.521,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.599
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.759
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 185.008,
        "saikou": 3.75,
        "heikin": 1.38,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.051
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 184.918,
        "saikou": 1.01,
        "heikin": 0.97,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.76
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 195.566,
        "saikou": 1.01,
        "heikin": 0.77,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.842
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.862
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 229.148,
        "saikou": 1.01,
        "heikin": 0.79,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.434
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 237.018,
        "saikou": 1.01,
        "heikin": 0.75,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.935
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.75,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.789
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 229.058,
        "saikou": 1.01,
        "heikin": 0.75,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.874
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.7,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.226
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 222.471,
        "saikou": 1.01,
        "heikin": 0.72,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.537
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 1.333
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 180.521,
        "saikou": 1.01,
        "heikin": 0.7,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 1.417
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 190.906,
        "saikou": 1.01,
        "heikin": 0.79,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 1.331
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 184.469,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 1.432
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 148.956,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 1.503
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 1.335
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 171.885,
        "saikou": 4,
        "heikin": 1.93,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 1.353
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 211.885,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 1.261
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 209.935,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 1.894
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 209.935,
        "saikou": 8.85,
        "heikin": 1.58,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 2.224
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 211.885,
        "saikou": 8,
        "heikin": 2.71,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.992
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.007
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 227.513,
        "saikou": 1,
        "heikin": 0.67,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.631
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.437
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 152.958,
        "saikou": 8,
        "heikin": 2.51,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.538
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 263.258,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.425
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 166.958,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 3.085
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 176.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.923
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 127.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.952
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.781
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 161.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.624
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 151.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.324
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 200.218,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.684
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 153.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.855
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 198.29,
        "saikou": 2.97,
        "heikin": 2.11,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.53
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 169.39,
        "saikou": 4.56,
        "heikin": 4.38,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.886
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 151.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.692
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 242.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.543
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.266
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.839
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 36.509,
        "saikou": 10,
        "heikin": 9.91,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 8.397
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 38.439,
        "saikou": 10,
        "heikin": 9.89,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 8.653
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 58.317,
        "saikou": 10,
        "heikin": 9.72,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 9.119
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 58.317,
        "saikou": 10,
        "heikin": 9.72,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 9.088
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 66.989,
        "saikou": 10,
        "heikin": 9.28,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 9.058
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 66.989,
        "saikou": 10,
        "heikin": 9.28,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 9.069
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 81.987,
        "saikou": 10,
        "heikin": 9.22,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 9.015
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 83.487,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 8.982
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 8.972
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 8.916
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 8.823
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 8.93
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.24,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 9.026
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 9.411
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.24,
        "boshuAvg30d": 192.2,
        "heikinAvg30d": 9.501
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 195.9,
        "heikinAvg30d": 9.407
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 195.9,
        "heikinAvg30d": 9.466
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 195.9,
        "heikinAvg30d": 9.271
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 8.509
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 8.587
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 8.362
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 8.385
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 8.359
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 8.521
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 91.721,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 8.585
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 91.721,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 8.623
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 97.482,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 8.218
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 85.482,
        "saikou": 10,
        "heikin": 8.46,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 8.267
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 85.482,
        "saikou": 10,
        "heikin": 8.46,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 8.754
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 85.482,
        "saikou": 10,
        "heikin": 8.46,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 8.739
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 87.482,
        "saikou": 10,
        "heikin": 9.25,
        "boshuAvg30d": 192.8,
        "heikinAvg30d": 8.954
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 87.482,
        "saikou": 10,
        "heikin": 9.25,
        "boshuAvg30d": 192.8,
        "heikinAvg30d": 8.511
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 87.482,
        "saikou": 10,
        "heikin": 9.25,
        "boshuAvg30d": 192.8,
        "heikinAvg30d": 8.269
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 85.982,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 191.5,
        "heikinAvg30d": 7.908
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 87.482,
        "saikou": 10,
        "heikin": 9.25,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 7.817
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 85.982,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 187.5,
        "heikinAvg30d": 7.828
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 8.8,
        "boshuAvg30d": 186.2,
        "heikinAvg30d": 7.79
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 105.986,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 186.2,
        "heikinAvg30d": 7.814
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.55,
        "boshuAvg30d": 186.2,
        "heikinAvg30d": 7.984
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.33,
        "boshuAvg30d": 185.5,
        "heikinAvg30d": 8.373
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.31,
        "boshuAvg30d": 185.2,
        "heikinAvg30d": 8.574
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.3,
        "boshuAvg30d": 185.5,
        "heikinAvg30d": 8.758
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.33,
        "boshuAvg30d": 101.2,
        "heikinAvg30d": 8.571
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 95.521,
        "saikou": 10,
        "heikin": 7.48,
        "boshuAvg30d": 101.2,
        "heikinAvg30d": 8.782
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 101.2,
        "heikinAvg30d": 8.797
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 83.586,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 100.2,
        "heikinAvg30d": 8.875
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 99.2,
        "heikinAvg30d": 8.881
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 73.316,
        "saikou": 10,
        "heikin": 9.55,
        "boshuAvg30d": 98.2,
        "heikinAvg30d": 8.948
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 426,
        "ouatsu": 215.034,
        "saikou": 9.9,
        "heikin": 3.85,
        "boshuAvg30d": 518.6,
        "heikinAvg30d": 3.553
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 426,
        "ouatsu": 316.41,
        "saikou": 9.9,
        "heikin": 3.54,
        "boshuAvg30d": 518.6,
        "heikinAvg30d": 3.367
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 426,
        "ouatsu": 397.27,
        "saikou": 9.9,
        "heikin": 3.09,
        "boshuAvg30d": 518.6,
        "heikinAvg30d": 3.314
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 426,
        "ouatsu": 386.074,
        "saikou": 9.9,
        "heikin": 3.05,
        "boshuAvg30d": 518.3,
        "heikinAvg30d": 3.236
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 424,
        "ouatsu": 395.983,
        "saikou": 9.9,
        "heikin": 2.86,
        "boshuAvg30d": 516.3,
        "heikinAvg30d": 3.192
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 424,
        "ouatsu": 387.624,
        "saikou": 9.9,
        "heikin": 2.93,
        "boshuAvg30d": 516.3,
        "heikinAvg30d": 3.165
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 423,
        "ouatsu": 372.936,
        "saikou": 9.9,
        "heikin": 2.95,
        "boshuAvg30d": 515.0,
        "heikinAvg30d": 3.1
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 424,
        "ouatsu": 401.595,
        "saikou": 9.9,
        "heikin": 3.05,
        "boshuAvg30d": 516.0,
        "heikinAvg30d": 3.267
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 425,
        "ouatsu": 402.915,
        "saikou": 9.9,
        "heikin": 3.47,
        "boshuAvg30d": 517.0,
        "heikinAvg30d": 3.218
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 425,
        "ouatsu": 386,
        "saikou": 9.9,
        "heikin": 3.34,
        "boshuAvg30d": 517.3,
        "heikinAvg30d": 3.204
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 425,
        "ouatsu": 406.485,
        "saikou": 9.9,
        "heikin": 3.4,
        "boshuAvg30d": 517.3,
        "heikinAvg30d": 3.303
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 425,
        "ouatsu": 386.151,
        "saikou": 9.28,
        "heikin": 4.89,
        "boshuAvg30d": 517.3,
        "heikinAvg30d": 3.214
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 446,
        "ouatsu": 377.272,
        "saikou": 9.9,
        "heikin": 4.83,
        "boshuAvg30d": 538.3,
        "heikinAvg30d": 3.63
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 454,
        "ouatsu": 364.989,
        "saikou": 9.9,
        "heikin": 3.84,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 3.714
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 459,
        "ouatsu": 399.589,
        "saikou": 9.9,
        "heikin": 3.88,
        "boshuAvg30d": 551.9,
        "heikinAvg30d": 3.84
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 464,
        "ouatsu": 381.152,
        "saikou": 9.9,
        "heikin": 3.71,
        "boshuAvg30d": 556.6,
        "heikinAvg30d": 3.847
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 464,
        "ouatsu": 383.118,
        "saikou": 9.9,
        "heikin": 3.7,
        "boshuAvg30d": 556.6,
        "heikinAvg30d": 4.186
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 464,
        "ouatsu": 383.118,
        "saikou": 9.9,
        "heikin": 3.72,
        "boshuAvg30d": 556.6,
        "heikinAvg30d": 4.356
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 455,
        "ouatsu": 362.63,
        "saikou": 9.9,
        "heikin": 3.7,
        "boshuAvg30d": 550.3,
        "heikinAvg30d": 4.311
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 455,
        "ouatsu": 362.63,
        "saikou": 9.9,
        "heikin": 3.63,
        "boshuAvg30d": 550.3,
        "heikinAvg30d": 4.144
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 455,
        "ouatsu": 300.485,
        "saikou": 9.9,
        "heikin": 4.47,
        "boshuAvg30d": 550.3,
        "heikinAvg30d": 3.885
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 454,
        "ouatsu": 325.07,
        "saikou": 9.9,
        "heikin": 4.51,
        "boshuAvg30d": 549.3,
        "heikinAvg30d": 3.902
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 451,
        "ouatsu": 299.114,
        "saikou": 9.9,
        "heikin": 4.26,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 3.985
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 451,
        "ouatsu": 297.214,
        "saikou": 9.28,
        "heikin": 4.15,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 4.005
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 450,
        "ouatsu": 290.73,
        "saikou": 9.9,
        "heikin": 4.25,
        "boshuAvg30d": 545.3,
        "heikinAvg30d": 3.789
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 450,
        "ouatsu": 288.304,
        "saikou": 9.28,
        "heikin": 4.24,
        "boshuAvg30d": 545.3,
        "heikinAvg30d": 3.836
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 450,
        "ouatsu": 291.213,
        "saikou": 9.28,
        "heikin": 3.81,
        "boshuAvg30d": 542.7,
        "heikinAvg30d": 4.043
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 449,
        "ouatsu": 245.437,
        "saikou": 9.28,
        "heikin": 4.53,
        "boshuAvg30d": 541.7,
        "heikinAvg30d": 4.185
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 448,
        "ouatsu": 257.73,
        "saikou": 9.29,
        "heikin": 4.7,
        "boshuAvg30d": 541.0,
        "heikinAvg30d": 4.273
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 448,
        "ouatsu": 388.683,
        "saikou": 9.29,
        "heikin": 4.16,
        "boshuAvg30d": 541.0,
        "heikinAvg30d": 4.275
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 447,
        "ouatsu": 365.067,
        "saikou": 9.29,
        "heikin": 3.85,
        "boshuAvg30d": 540.0,
        "heikinAvg30d": 4.227
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 447,
        "ouatsu": 391.2,
        "saikou": 9.29,
        "heikin": 3.11,
        "boshuAvg30d": 540.0,
        "heikinAvg30d": 4.424
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 447,
        "ouatsu": 374.615,
        "saikou": 10,
        "heikin": 5.04,
        "boshuAvg30d": 539.6,
        "heikinAvg30d": 4.511
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 447,
        "ouatsu": 343.091,
        "saikou": 10,
        "heikin": 6.71,
        "boshuAvg30d": 539.6,
        "heikinAvg30d": 4.671
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 447,
        "ouatsu": 395.121,
        "saikou": 10,
        "heikin": 6.09,
        "boshuAvg30d": 535.7,
        "heikinAvg30d": 4.856
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 447,
        "ouatsu": 374.899,
        "saikou": 10,
        "heikin": 6.71,
        "boshuAvg30d": 535.7,
        "heikinAvg30d": 4.721
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 449,
        "ouatsu": 385.922,
        "saikou": 10,
        "heikin": 6.76,
        "boshuAvg30d": 538.0,
        "heikinAvg30d": 4.632
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 449,
        "ouatsu": 386.454,
        "saikou": 10,
        "heikin": 6.71,
        "boshuAvg30d": 537.7,
        "heikinAvg30d": 4.482
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 450,
        "ouatsu": 489.706,
        "saikou": 10,
        "heikin": 7.27,
        "boshuAvg30d": 538.1,
        "heikinAvg30d": 4.43
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 450,
        "ouatsu": 437.289,
        "saikou": 10,
        "heikin": 6.54,
        "boshuAvg30d": 538.1,
        "heikinAvg30d": 4.353
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 448,
        "ouatsu": 535.629,
        "saikou": 10,
        "heikin": 5.31,
        "boshuAvg30d": 536.4,
        "heikinAvg30d": 3.972
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 448,
        "ouatsu": 536.505,
        "saikou": 10,
        "heikin": 5.07,
        "boshuAvg30d": 536.4,
        "heikinAvg30d": 3.974
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 447,
        "ouatsu": 503.132,
        "saikou": 10,
        "heikin": 5.27,
        "boshuAvg30d": 535.7,
        "heikinAvg30d": 3.662
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 447,
        "ouatsu": 453.539,
        "saikou": 10,
        "heikin": 4.95,
        "boshuAvg30d": 535.7,
        "heikinAvg30d": 4.494
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 447,
        "ouatsu": 435.102,
        "saikou": 10,
        "heikin": 5.2,
        "boshuAvg30d": 535.7,
        "heikinAvg30d": 4.139
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 445,
        "ouatsu": 431.346,
        "saikou": 10,
        "heikin": 5.17,
        "boshuAvg30d": 533.7,
        "heikinAvg30d": 4.04
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 443,
        "ouatsu": 433.302,
        "saikou": 10,
        "heikin": 5.18,
        "boshuAvg30d": 531.4,
        "heikinAvg30d": 4.216
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 442,
        "ouatsu": 455.739,
        "saikou": 9.28,
        "heikin": 5.2,
        "boshuAvg30d": 530.1,
        "heikinAvg30d": 3.972
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 212.831,
        "saikou": 2.88,
        "heikin": 2.77,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.419
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 220.715,
        "saikou": 2.8,
        "heikin": 2.68,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.282
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 242.148,
        "saikou": 2.8,
        "heikin": 2.62,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.291
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 225.906,
        "saikou": 2.82,
        "heikin": 2.65,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.427
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 221.773,
        "saikou": 2.8,
        "heikin": 2.5,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.652
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 231.583,
        "saikou": 2.8,
        "heikin": 2.51,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.741
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 257.238,
        "saikou": 2.78,
        "heikin": 2.51,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.608
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 269.759,
        "saikou": 2.79,
        "heikin": 2.68,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.689
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 275.459,
        "saikou": 2.79,
        "heikin": 2.61,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.764
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 275.459,
        "saikou": 2.76,
        "heikin": 2.43,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.632
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 277.449,
        "saikou": 2.79,
        "heikin": 2.72,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.627
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 257.728,
        "saikou": 2.78,
        "heikin": 2.65,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.634
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 277.449,
        "saikou": 2.79,
        "heikin": 2.63,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.804
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 259.364,
        "saikou": 2.79,
        "heikin": 2.39,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.732
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 259.364,
        "saikou": 2.79,
        "heikin": 1.79,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 2.853
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 245.657,
        "saikou": 2.79,
        "heikin": 1.53,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.934
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 224.834,
        "saikou": 2.89,
        "heikin": 1.86,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.409
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 228.714,
        "saikou": 3.88,
        "heikin": 2.02,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.456
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 195.367,
        "saikou": 4,
        "heikin": 2.11,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.825
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 160.988,
        "saikou": 4.88,
        "heikin": 2.33,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.772
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 166.212,
        "saikou": 4.54,
        "heikin": 2.65,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.948
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 164.237,
        "saikou": 4.99,
        "heikin": 2.74,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.986
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 201.977,
        "saikou": 4.34,
        "heikin": 2.13,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.736
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 185.646,
        "saikou": 3.99,
        "heikin": 2.48,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 3.543
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 166.214,
        "saikou": 3.88,
        "heikin": 2.47,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 3.494
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 166.214,
        "saikou": 3.88,
        "heikin": 2.45,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 3.466
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 221.633,
        "saikou": 5.42,
        "heikin": 2.93,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 3.721
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 231.046,
        "saikou": 4.95,
        "heikin": 3.18,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 3.877
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 232.782,
        "saikou": 5,
        "heikin": 3.01,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 4.049
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 251.003,
        "saikou": 3.49,
        "heikin": 2.54,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 4.006
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 222.034,
        "saikou": 3.88,
        "heikin": 2.58,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.775
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 226.819,
        "saikou": 3.88,
        "heikin": 2.4,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.909
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 270.969,
        "saikou": 2.9,
        "heikin": 2.21,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.837
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 290.188,
        "saikou": 2.88,
        "heikin": 2.52,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 4.016
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 290.188,
        "saikou": 2.86,
        "heikin": 2.75,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.912
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 277.489,
        "saikou": 2.8,
        "heikin": 2.53,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.706
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 271.105,
        "saikou": 2.79,
        "heikin": 2.71,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 3.706
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 271.105,
        "saikou": 2.8,
        "heikin": 2.72,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 3.53
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 277.129,
        "saikou": 2.79,
        "heikin": 2.32,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 3.159
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 278.989,
        "saikou": 2.8,
        "heikin": 2.65,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 3.189
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 282.223,
        "saikou": 2.8,
        "heikin": 2.72,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 3.196
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 280.252,
        "saikou": 2.8,
        "heikin": 2.71,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 3.005
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 284.209,
        "saikou": 2.75,
        "heikin": 2.38,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.811
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 223.441,
        "saikou": 2.79,
        "heikin": 2.64,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.237
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 235.326,
        "saikou": 2.8,
        "heikin": 2.65,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.996
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 235.326,
        "saikou": 2.78,
        "heikin": 2.59,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 3.056
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 235.326,
        "saikou": 2.76,
        "heikin": 2.56,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 3.151
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 233.826,
        "saikou": 2.79,
        "heikin": 1.98,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 3.161
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 2.65,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.305
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 2.1,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.718
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 55.93,
        "saikou": 1.7,
        "heikin": 0.44,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.744
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 2.55,
        "heikin": 0.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.99
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 2.6,
        "heikin": 0.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.302
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 1.5,
        "heikin": 0.46,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.908
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 2.65,
        "heikin": 0.54,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.132
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 2.79,
        "heikin": 0.52,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.949
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 2.65,
        "heikin": 0.54,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.862
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 2.55,
        "heikin": 0.46,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.778
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 2,
        "heikin": 0.51,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.796
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 57.928,
        "saikou": 2,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.976
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 57.928,
        "saikou": 3.32,
        "heikin": 1.55,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 2.493
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 57.928,
        "saikou": 2.59,
        "heikin": 0.53,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.01
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.67,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 2.397
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.7,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.294
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 3.61,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.085
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.45,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 4.018
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 3.97,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.059
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.52,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.497
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.78,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.762
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 5.43,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.109
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.763
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 4.05,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.753
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.78,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.67
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 5.2,
        "heikin": 4.34,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.536
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 3.91,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.049
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.638
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 2.89,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.134
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 4.56,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.879
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 3.09,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 3.691
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.8,
        "heikin": 3.86,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 4.275
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.45,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.708
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 57.928,
        "saikou": 3.55,
        "heikin": 0.59,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.252
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 57.928,
        "saikou": 0.86,
        "heikin": 0.69,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.327
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 57.928,
        "saikou": 2.93,
        "heikin": 1.78,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.035
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 57.928,
        "saikou": 2.93,
        "heikin": 1.78,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.474
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 57.928,
        "saikou": 2.41,
        "heikin": 1.7,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.176
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 57.928,
        "saikou": 2,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.203
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 57.928,
        "saikou": 1.75,
        "heikin": 0.48,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.683
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.27,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.537
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.426
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 57.928,
        "saikou": 2.3,
        "heikin": 0.52,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.764
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 57.928,
        "saikou": 2.3,
        "heikin": 0.52,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.937
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 57.928,
        "saikou": 2.5,
        "heikin": 0.56,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.228
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 57.928,
        "saikou": 2.3,
        "heikin": 0.52,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.639
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 57.928,
        "saikou": 2.5,
        "heikin": 0.53,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 2.806
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.4,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.248
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 74.542,
        "saikou": 2.87,
        "heikin": 2.46,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 1.914
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 97.405,
        "saikou": 2.8,
        "heikin": 2.43,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 1.943
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 119.39,
        "saikou": 2.8,
        "heikin": 1.9,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 2.0
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 115.412,
        "saikou": 2.8,
        "heikin": 1.86,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 1.99
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 105.479,
        "saikou": 2.8,
        "heikin": 1.91,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 2.085
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 113.414,
        "saikou": 2.8,
        "heikin": 1.84,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.131
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.89,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 2.092
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 123.299,
        "saikou": 2.79,
        "heikin": 1.88,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 2.174
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.79,
        "heikin": 1.88,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 1.981
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.93,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 1.996
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.8,
        "heikin": 1.91,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 2.116
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.44,
        "heikin": 1.82,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 2.061
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 108.81,
        "saikou": 2.5,
        "heikin": 2.18,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 3.005
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 127.166,
        "saikou": 2.79,
        "heikin": 1.83,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 2.971
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 127.166,
        "saikou": 2.8,
        "heikin": 1.99,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.788
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 127.166,
        "saikou": 2.8,
        "heikin": 1.99,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 3.052
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 127.166,
        "saikou": 2.86,
        "heikin": 2.1,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 3.939
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 127.166,
        "saikou": 2.95,
        "heikin": 1.96,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.003
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 127.166,
        "saikou": 4,
        "heikin": 2.56,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.121
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 4.5,
        "heikin": 2.79,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.181
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 5,
        "heikin": 2.26,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.405
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 123.725,
        "saikou": 5.95,
        "heikin": 2.49,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.31
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 123.725,
        "saikou": 3.98,
        "heikin": 2.24,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 4.109
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 4.5,
        "heikin": 2.45,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 3.944
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 149.106,
        "saikou": 3.5,
        "heikin": 1.69,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 4.601
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 5.97,
        "heikin": 2.48,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 3.731
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 6.44,
        "heikin": 2.77,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 4.026
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 151.111,
        "saikou": 5.97,
        "heikin": 2.16,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.948
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 151.111,
        "saikou": 4.97,
        "heikin": 2.33,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 3.989
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 151.111,
        "saikou": 3.5,
        "heikin": 1.51,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 3.777
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 149.668,
        "saikou": 2.95,
        "heikin": 1.64,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.626
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 101.778,
        "saikou": 2.9,
        "heikin": 2.53,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.7
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 2.99,
        "heikin": 2.49,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.806
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2.8,
        "heikin": 2.43,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 4.068
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2.79,
        "heikin": 2.41,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.861
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.354,
        "saikou": 2.9,
        "heikin": 2.45,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 3.662
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 2.8,
        "heikin": 2.41,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.484
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 2.8,
        "heikin": 2.42,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.436
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 99.354,
        "saikou": 2.79,
        "heikin": 2.41,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.541
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 99.354,
        "saikou": 2.79,
        "heikin": 2.41,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.396
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 99.354,
        "saikou": 2.79,
        "heikin": 2.41,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 3.115
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.52,
        "heikin": 2.4,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 3.229
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.45,
        "heikin": 2.36,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.021
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.36,
        "heikin": 2.33,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.07
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.79,
        "heikin": 2.34,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.064
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 99.354,
        "saikou": 2.44,
        "heikin": 2.35,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 3.018
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 99.354,
        "saikou": 2.48,
        "heikin": 2.38,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.07
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 91.508,
        "saikou": 2.36,
        "heikin": 2.33,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.028
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.8,
        "heikin": 0.83,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.458
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.8,
        "heikin": 0.84,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.66
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.8,
        "heikin": 1.39,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.771
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.8,
        "heikin": 1.44,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.67
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.605
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.8,
        "heikin": 1.44,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.631
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.58,
        "heikin": 1.45,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.709
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.79,
        "heikin": 1.64,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.795
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.79,
        "heikin": 0.99,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.727
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.68,
        "heikin": 1.46,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.912
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.6,
        "heikin": 1.61,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.201
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.29,
        "heikin": 1.13,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.166
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 178.13,
        "saikou": 4.63,
        "heikin": 3.46,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 3.58
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 178.13,
        "saikou": 2.79,
        "heikin": 1.42,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.967
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.26,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.788
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 0.86,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.709
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 165.894,
        "saikou": 2.8,
        "heikin": 0.89,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.637
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 165.25,
        "saikou": 3,
        "heikin": 0.91,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.47
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 1.08,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.389
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 1.18,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.033
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 179.82,
        "saikou": 5,
        "heikin": 1.25,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.963
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 1.19,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.88
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 1.19,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.902
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 1.19,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.874
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 1.19,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.228
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 1.19,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.067
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 130.653,
        "saikou": 4,
        "heikin": 1.42,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.768
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 1.16,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.034
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.17,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.17
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 2.9,
        "heikin": 0.88,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.309
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 2.9,
        "heikin": 0.9,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 4.195
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 3.44,
        "heikin": 0.91,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.125
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 3.43,
        "heikin": 0.9,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.059
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 198.12,
        "saikou": 2.79,
        "heikin": 1.27,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.394
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 198.12,
        "saikou": 2.79,
        "heikin": 1.73,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.959
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 190.857,
        "saikou": 4.23,
        "heikin": 2.95,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.008
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 188.867,
        "saikou": 4.23,
        "heikin": 2.95,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.21
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 188.867,
        "saikou": 3.7,
        "heikin": 2.65,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.315
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 188.867,
        "saikou": 2.79,
        "heikin": 1.99,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.034
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 190.857,
        "saikou": 2.79,
        "heikin": 1.27,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.699
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 190.857,
        "saikou": 2.79,
        "heikin": 1.21,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.38
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 190.857,
        "saikou": 2.5,
        "heikin": 1.01,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 4.857
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 190.857,
        "saikou": 2.03,
        "heikin": 1.21,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 4.608
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 190.857,
        "saikou": 2.03,
        "heikin": 1.07,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 4.486
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 190.857,
        "saikou": 2.12,
        "heikin": 1.4,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 4.062
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 190.857,
        "saikou": 2,
        "heikin": 1.2,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 3.566
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2,
        "heikin": 1.11,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 3.492
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.13,
        "heikin": 0.76,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.478
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 83.473,
        "saikou": 2.8,
        "heikin": 1.3,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.817
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.5,
        "heikin": 1.24,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.847
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.5,
        "heikin": 1.24,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.856
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 83.473,
        "saikou": 2.8,
        "heikin": 1.3,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.81
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 83.473,
        "saikou": 2.5,
        "heikin": 1.25,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.791
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 83.473,
        "saikou": 2.8,
        "heikin": 1.29,
        "boshuAvg30d": 39.7,
        "heikinAvg30d": 0.805
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 80.473,
        "saikou": 2.5,
        "heikin": 1.28,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.953
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 68.93,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.911
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 80.473,
        "saikou": 2.5,
        "heikin": 1.28,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.928
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 81.473,
        "saikou": 2.5,
        "heikin": 1.28,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.974
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 80.473,
        "saikou": 2.5,
        "heikin": 1.28,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.962
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 131.973,
        "saikou": 1.7,
        "heikin": 0.74,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.946
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 141.973,
        "saikou": 2.5,
        "heikin": 0.93,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.964
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 138.973,
        "saikou": 2.5,
        "heikin": 0.91,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.957
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 134.973,
        "saikou": 2.5,
        "heikin": 0.89,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.012
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 157.973,
        "saikou": 2.5,
        "heikin": 1.01,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.879
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 157.973,
        "saikou": 2.8,
        "heikin": 0.93,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.851
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 157.973,
        "saikou": 3.1,
        "heikin": 1.09,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.914
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 123.973,
        "saikou": 3.1,
        "heikin": 1.25,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 0.976
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 123.973,
        "saikou": 3.5,
        "heikin": 1.29,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 0.951
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 3.8,
        "heikin": 1.31,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.946
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 3.8,
        "heikin": 1.31,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.981
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 4.1,
        "heikin": 1.36,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.969
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 3.8,
        "heikin": 1.09,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.974
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 4.1,
        "heikin": 1.04,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.173
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 4.1,
        "heikin": 1.09,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.111
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 6.67,
        "heikin": 1.61,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.978
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 6.67,
        "heikin": 1.55,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.002
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 4,
        "heikin": 1.34,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.995
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 123.973,
        "saikou": 1.7,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.904
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 123.973,
        "saikou": 3,
        "heikin": 1.21,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.959
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 123.973,
        "saikou": 3.8,
        "heikin": 1.31,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.984
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 123.973,
        "saikou": 1.7,
        "heikin": 1.02,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.973
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 84.473,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.897
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 65.473,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.966
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 65.473,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.964
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 65.473,
        "saikou": 2.65,
        "heikin": 1.67,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.94
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 65.473,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.936
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 66.473,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.98
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 65.473,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.968
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 62.473,
        "saikou": 2.5,
        "heikin": 1.78,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.944
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 62.473,
        "saikou": 2.5,
        "heikin": 1.78,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.941
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 83.473,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.754
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 96.473,
        "saikou": 2.5,
        "heikin": 1.23,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.795
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.5,
        "heikin": 1.24,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.773
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.5,
        "heikin": 1.24,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.744
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.5,
        "heikin": 1.24,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.762
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 105.473,
        "saikou": 2.5,
        "heikin": 1.34,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.807
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 133.037,
        "saikou": 6.6,
        "heikin": 4.8,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 3.89
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 138.907,
        "saikou": 5.7,
        "heikin": 4.23,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 3.652
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 154.607,
        "saikou": 5.85,
        "heikin": 4.31,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 3.428
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 154.605,
        "saikou": 5.57,
        "heikin": 4.15,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 3.449
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 152.616,
        "saikou": 3.6,
        "heikin": 2.99,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 3.382
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 152.616,
        "saikou": 4.47,
        "heikin": 3.5,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 3.447
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 173.805,
        "saikou": 5.55,
        "heikin": 4.22,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 3.525
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 168.477,
        "saikou": 5.85,
        "heikin": 4.29,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 3.581
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 172.305,
        "saikou": 6.07,
        "heikin": 4.42,
        "boshuAvg30d": 165.6,
        "heikinAvg30d": 3.633
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 172.305,
        "saikou": 6.92,
        "heikin": 5.26,
        "boshuAvg30d": 165.6,
        "heikinAvg30d": 3.791
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 172.305,
        "saikou": 7.43,
        "heikin": 5.15,
        "boshuAvg30d": 165.6,
        "heikinAvg30d": 3.881
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 239.005,
        "saikou": 6.92,
        "heikin": 3.53,
        "boshuAvg30d": 165.6,
        "heikinAvg30d": 3.761
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 239.005,
        "saikou": 5.7,
        "heikin": 2.92,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 3.621
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 165.153,
        "saikou": 3.03,
        "heikin": 2.66,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 3.455
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 158.153,
        "saikou": 2.8,
        "heikin": 2,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 3.437
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 128.005,
        "saikou": 2.8,
        "heikin": 1.93,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 3.496
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 93.027,
        "saikou": 2.8,
        "heikin": 2.59,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 3.869
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 95.005,
        "saikou": 2.8,
        "heikin": 2.59,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 4.606
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 87.165,
        "saikou": 2.8,
        "heikin": 2.62,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 4.605
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 85.217,
        "saikou": 2.8,
        "heikin": 2.63,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 4.521
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 81.732,
        "saikou": 3.07,
        "heikin": 2.75,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 4.376
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 67.838,
        "saikou": 4.38,
        "heikin": 3.16,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 4.475
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 77.664,
        "saikou": 4.5,
        "heikin": 3.23,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.449
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 75.716,
        "saikou": 4.38,
        "heikin": 3.22,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.559
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 79.647,
        "saikou": 3.99,
        "heikin": 3.16,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 4.004
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 79.647,
        "saikou": 3.99,
        "heikin": 3.18,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 4.125
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 79.647,
        "saikou": 3.9,
        "heikin": 3.16,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 4.568
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 75.795,
        "saikou": 4.38,
        "heikin": 3.28,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 5.169
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 79.245,
        "saikou": 4.1,
        "heikin": 3.24,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 5.761
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 129.991,
        "saikou": 3.6,
        "heikin": 2.26,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 6.164
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 96.991,
        "saikou": 3.28,
        "heikin": 2.69,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 5.875
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 95.015,
        "saikou": 3.88,
        "heikin": 2.82,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.88
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 135.015,
        "saikou": 7.36,
        "heikin": 4.43,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.97
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 259.065,
        "saikou": 8.99,
        "heikin": 2.53,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 7.283
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 257.065,
        "saikou": 9.32,
        "heikin": 3.9,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.857
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 245.25,
        "saikou": 10,
        "heikin": 4.18,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 7.042
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 239.409,
        "saikou": 10,
        "heikin": 4.28,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 7.1
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 251.224,
        "saikou": 10,
        "heikin": 4.22,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 6.816
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 256.226,
        "saikou": 10,
        "heikin": 4.26,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 6.342
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 258.215,
        "saikou": 9.16,
        "heikin": 3.91,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.67
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 261.515,
        "saikou": 8.55,
        "heikin": 3.7,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.106
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 264.991,
        "saikou": 8.26,
        "heikin": 3.72,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 4.583
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 260.095,
        "saikou": 8.32,
        "heikin": 3.71,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 4.282
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 261.095,
        "saikou": 8.21,
        "heikin": 3.66,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.819
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 261.095,
        "saikou": 7.9,
        "heikin": 3.44,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.59
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 260.095,
        "saikou": 7.47,
        "heikin": 3.32,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 3.924
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 258.119,
        "saikou": 7.32,
        "heikin": 3.3,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 3.813
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 226.617,
        "saikou": 6.07,
        "heikin": 3.07,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 3.226
      }
    ]
  }
};
