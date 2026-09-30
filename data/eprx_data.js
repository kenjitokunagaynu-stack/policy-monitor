// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/31〜2026/09/29）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-30",
  "fetchedAt": "2026-09-30",
  "avgWindowLabel": "過去30日平均（2026/08/31〜2026/09/29）",
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
      "boshu": 1152,
      "ouatsu": 1624.887,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1332.0,
      "heikinAvg30d": 2.768
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1152,
      "ouatsu": 1649.741,
      "saikou": 9.49,
      "heikin": 2.86,
      "boshuAvg30d": 1332.0,
      "heikinAvg30d": 2.702
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1152,
      "ouatsu": 1801.744,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1332.0,
      "heikinAvg30d": 2.801
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1152,
      "ouatsu": 1701.016,
      "saikou": 9.5,
      "heikin": 2.91,
      "boshuAvg30d": 1332.0,
      "heikinAvg30d": 2.765
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1147,
      "ouatsu": 1722.082,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1327.0,
      "heikinAvg30d": 2.773
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1146,
      "ouatsu": 1676.31,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1325.9,
      "heikinAvg30d": 2.825
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1232,
      "ouatsu": 1764.179,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1337.3,
      "heikinAvg30d": 2.881
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1233,
      "ouatsu": 1627.473,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1338.3,
      "heikinAvg30d": 2.961
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1236,
      "ouatsu": 1691.991,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1341.4,
      "heikinAvg30d": 3.013
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1236,
      "ouatsu": 1644.399,
      "saikou": 10,
      "heikin": 3.51,
      "boshuAvg30d": 1341.4,
      "heikinAvg30d": 3.031
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1236,
      "ouatsu": 1647.436,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1341.4,
      "heikinAvg30d": 3.153
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1236,
      "ouatsu": 1672.554,
      "saikou": 10,
      "heikin": 4.09,
      "boshuAvg30d": 1341.4,
      "heikinAvg30d": 3.14
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1302,
      "ouatsu": 1594.998,
      "saikou": 10,
      "heikin": 4.06,
      "boshuAvg30d": 1407.3,
      "heikinAvg30d": 3.314
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1323,
      "ouatsu": 1583.812,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1428.4,
      "heikinAvg30d": 3.172
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1346,
      "ouatsu": 1575.66,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1451.4,
      "heikinAvg30d": 3.148
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1364,
      "ouatsu": 1394.13,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1469.2,
      "heikinAvg30d": 3.114
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1365,
      "ouatsu": 1538.042,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1470.2,
      "heikinAvg30d": 3.352
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1365,
      "ouatsu": 1554.852,
      "saikou": 10,
      "heikin": 3.47,
      "boshuAvg30d": 1470.2,
      "heikinAvg30d": 3.499
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1388,
      "ouatsu": 1515.017,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1427.3,
      "heikinAvg30d": 3.57
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1392,
      "ouatsu": 1544.378,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1431.4,
      "heikinAvg30d": 3.556
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1400,
      "ouatsu": 1512.067,
      "saikou": 10,
      "heikin": 3.69,
      "boshuAvg30d": 1439.3,
      "heikinAvg30d": 3.58
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1400,
      "ouatsu": 1511.298,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1439.3,
      "heikinAvg30d": 3.579
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1397,
      "ouatsu": 1567.343,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1436.3,
      "heikinAvg30d": 3.5
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1396,
      "ouatsu": 1576.106,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1435.3,
      "heikinAvg30d": 3.46
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1389,
      "ouatsu": 1488.771,
      "saikou": 10,
      "heikin": 3.06,
      "boshuAvg30d": 1425.5,
      "heikinAvg30d": 3.378
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1389,
      "ouatsu": 1438.49,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1425.5,
      "heikinAvg30d": 3.352
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1389,
      "ouatsu": 1511.67,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1422.5,
      "heikinAvg30d": 3.494
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1383,
      "ouatsu": 1498.962,
      "saikou": 10,
      "heikin": 3.5,
      "boshuAvg30d": 1416.9,
      "heikinAvg30d": 3.645
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1378,
      "ouatsu": 1714.469,
      "saikou": 10,
      "heikin": 3.71,
      "boshuAvg30d": 1412.0,
      "heikinAvg30d": 3.708
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1371,
      "ouatsu": 1876.995,
      "saikou": 9.5,
      "heikin": 3.7,
      "boshuAvg30d": 1405.1,
      "heikinAvg30d": 3.722
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1342,
      "ouatsu": 1931.432,
      "saikou": 9.4,
      "heikin": 3.52,
      "boshuAvg30d": 1447.8,
      "heikinAvg30d": 3.654
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1342,
      "ouatsu": 1648.748,
      "saikou": 10,
      "heikin": 4.1,
      "boshuAvg30d": 1447.8,
      "heikinAvg30d": 3.815
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1342,
      "ouatsu": 1831.868,
      "saikou": 10,
      "heikin": 4.28,
      "boshuAvg30d": 1447.8,
      "heikinAvg30d": 3.881
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1340,
      "ouatsu": 1806.658,
      "saikou": 10,
      "heikin": 4.81,
      "boshuAvg30d": 1445.7,
      "heikinAvg30d": 4.043
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1336,
      "ouatsu": 1746.974,
      "saikou": 10,
      "heikin": 5.44,
      "boshuAvg30d": 1437.6,
      "heikinAvg30d": 4.137
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1332,
      "ouatsu": 1734.521,
      "saikou": 10,
      "heikin": 5.6,
      "boshuAvg30d": 1433.6,
      "heikinAvg30d": 4.125
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1324,
      "ouatsu": 1678.936,
      "saikou": 10,
      "heikin": 5.79,
      "boshuAvg30d": 1425.6,
      "heikinAvg30d": 4.184
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1324,
      "ouatsu": 1906.641,
      "saikou": 10,
      "heikin": 5.85,
      "boshuAvg30d": 1425.5,
      "heikinAvg30d": 4.115
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1325,
      "ouatsu": 1875.463,
      "saikou": 10,
      "heikin": 4.96,
      "boshuAvg30d": 1426.1,
      "heikinAvg30d": 4.009
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1324,
      "ouatsu": 1867.69,
      "saikou": 10,
      "heikin": 4.92,
      "boshuAvg30d": 1425.2,
      "heikinAvg30d": 3.873
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1319,
      "ouatsu": 1919.358,
      "saikou": 9.81,
      "heikin": 4.49,
      "boshuAvg30d": 1420.2,
      "heikinAvg30d": 3.791
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1315,
      "ouatsu": 1801.025,
      "saikou": 9.49,
      "heikin": 4.44,
      "boshuAvg30d": 1416.3,
      "heikinAvg30d": 3.707
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1222,
      "ouatsu": 1847.599,
      "saikou": 9.4,
      "heikin": 4.04,
      "boshuAvg30d": 1329.0,
      "heikinAvg30d": 3.461
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1225,
      "ouatsu": 1829.574,
      "saikou": 9.34,
      "heikin": 4.03,
      "boshuAvg30d": 1332.0,
      "heikinAvg30d": 3.621
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1226,
      "ouatsu": 1681.996,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1333.0,
      "heikinAvg30d": 3.402
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1219,
      "ouatsu": 1668.534,
      "saikou": 9.4,
      "heikin": 3.96,
      "boshuAvg30d": 1326.0,
      "heikinAvg30d": 3.327
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1212,
      "ouatsu": 1663.529,
      "saikou": 10,
      "heikin": 3.64,
      "boshuAvg30d": 1318.9,
      "heikinAvg30d": 3.329
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1204,
      "ouatsu": 1727.734,
      "saikou": 9.5,
      "heikin": 3.63,
      "boshuAvg30d": 1310.9,
      "heikinAvg30d": 3.16
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
        "ouatsu": 197.408,
        "saikou": 1.01,
        "heikin": 0.91,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.017
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 151.958,
        "saikou": 1.69,
        "heikin": 1.08,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 0.966
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 197.408,
        "saikou": 1.01,
        "heikin": 0.92,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.06
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 0.99
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 200.83,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.277
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 152.958,
        "saikou": 3.55,
        "heikin": 1.36,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.434
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.291
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 162.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.198
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 213.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.472
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.257
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 213.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.334
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.465
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 154.908,
        "saikou": 3.85,
        "heikin": 1.61,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.89
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 153.908,
        "saikou": 6.87,
        "heikin": 1.93,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.544
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 200.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.378
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.443
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 195.258,
        "saikou": 1.01,
        "heikin": 0.79,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 0.932
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 0.982
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 0.918
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 195.688,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 0.934
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 186.94,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 1.007
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 205.608,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 1.017
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 237.208,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 0.919
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 235.258,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 0.955
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 184.95,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 1.041
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 0.966
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 1.243
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 1.255
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 233.208,
        "saikou": 1.01,
        "heikin": 0.89,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.234
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 191.958,
        "saikou": 2.35,
        "heikin": 1.14,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.382
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 162.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.093
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 179.958,
        "saikou": 1.44,
        "heikin": 1.4,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.709
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 179.758,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.12
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 139.948,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.099
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 85.99,
        "saikou": 1.41,
        "heikin": 1.4,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.287
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 136.258,
        "saikou": 1.05,
        "heikin": 1.05,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.087
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 87.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.139
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 110.99,
        "saikou": 3.98,
        "heikin": 3.91,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.147
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 163.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.75
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.618
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.797
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.627
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 197.136,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.335
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 162.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.686
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 207.136,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.316
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 152.958,
        "saikou": 4.02,
        "heikin": 1.23,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.369
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 196.635,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.223
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 152.958,
        "saikou": 5.01,
        "heikin": 1.32,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.315
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 89,
        "ouatsu": 92.181,
        "saikou": 10,
        "heikin": 5.82,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 8.034
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 89,
        "ouatsu": 92.181,
        "saikou": 9.49,
        "heikin": 5.67,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 8.271
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 89,
        "ouatsu": 113.989,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 8.584
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 89,
        "ouatsu": 113.989,
        "saikou": 9.5,
        "heikin": 6.62,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 8.599
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 89,
        "ouatsu": 113.989,
        "saikou": 10,
        "heikin": 7.26,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 8.593
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 89,
        "ouatsu": 113.989,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 8.599
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 113.989,
        "saikou": 10,
        "heikin": 6.67,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 8.508
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 113.989,
        "saikou": 10,
        "heikin": 6.67,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 8.494
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.72,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 8.499
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.65,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 8.466
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 8.425
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 8.464
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.65,
        "boshuAvg30d": 182.8,
        "heikinAvg30d": 8.558
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 187.8,
        "heikinAvg30d": 8.638
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 91.988,
        "saikou": 10,
        "heikin": 7.4,
        "boshuAvg30d": 193.8,
        "heikinAvg30d": 8.67
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 91.988,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 197.8,
        "heikinAvg30d": 8.616
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 91.988,
        "saikou": 10,
        "heikin": 8.7,
        "boshuAvg30d": 197.8,
        "heikinAvg30d": 8.798
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 103.988,
        "saikou": 10,
        "heikin": 8.27,
        "boshuAvg30d": 197.8,
        "heikinAvg30d": 8.708
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 215,
        "ouatsu": 100.64,
        "saikou": 10,
        "heikin": 8.58,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 8.354
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 217,
        "ouatsu": 102.636,
        "saikou": 10,
        "heikin": 8.87,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 8.348
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 220,
        "ouatsu": 102.636,
        "saikou": 10,
        "heikin": 8.89,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 8.324
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 221,
        "ouatsu": 102.636,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 8.329
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 221,
        "ouatsu": 104.634,
        "saikou": 10,
        "heikin": 8.96,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 8.35
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 221,
        "ouatsu": 104.634,
        "saikou": 10,
        "heikin": 8.97,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 8.394
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 222,
        "ouatsu": 100.223,
        "saikou": 10,
        "heikin": 9.13,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 8.528
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 222,
        "ouatsu": 88.223,
        "saikou": 10,
        "heikin": 8.9,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 8.497
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 222,
        "ouatsu": 92.634,
        "saikou": 10,
        "heikin": 8.84,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 8.201
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 219,
        "ouatsu": 92.634,
        "saikou": 10,
        "heikin": 8.31,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 8.231
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 217,
        "ouatsu": 116.634,
        "saikou": 10,
        "heikin": 8.36,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 8.335
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 212,
        "ouatsu": 116.634,
        "saikou": 9.5,
        "heikin": 7.62,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 8.211
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 104.634,
        "saikou": 9.4,
        "heikin": 6.62,
        "boshuAvg30d": 193.9,
        "heikinAvg30d": 8.512
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 82.634,
        "saikou": 10,
        "heikin": 7.01,
        "boshuAvg30d": 193.9,
        "heikinAvg30d": 8.142
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 82.634,
        "saikou": 10,
        "heikin": 6.83,
        "boshuAvg30d": 193.9,
        "heikinAvg30d": 7.982
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 58.634,
        "saikou": 10,
        "heikin": 9.1,
        "boshuAvg30d": 192.8,
        "heikinAvg30d": 7.666
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 59.984,
        "saikou": 10,
        "heikin": 9.12,
        "boshuAvg30d": 190.8,
        "heikinAvg30d": 7.765
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 59.984,
        "saikou": 10,
        "heikin": 9.12,
        "boshuAvg30d": 188.8,
        "heikinAvg30d": 7.666
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 56.023,
        "saikou": 10,
        "heikin": 9.07,
        "boshuAvg30d": 187.8,
        "heikinAvg30d": 7.682
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 57.988,
        "saikou": 10,
        "heikin": 9.09,
        "boshuAvg30d": 187.8,
        "heikinAvg30d": 7.738
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 57.988,
        "saikou": 10,
        "heikin": 9.09,
        "boshuAvg30d": 187.8,
        "heikinAvg30d": 7.884
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 81.988,
        "saikou": 10,
        "heikin": 7.08,
        "boshuAvg30d": 186.8,
        "heikinAvg30d": 8.167
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 81.988,
        "saikou": 9.5,
        "heikin": 7.11,
        "boshuAvg30d": 186.8,
        "heikinAvg30d": 8.058
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 81.988,
        "saikou": 9.49,
        "heikin": 7.08,
        "boshuAvg30d": 186.8,
        "heikinAvg30d": 8.077
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 80.088,
        "saikou": 9.4,
        "heikin": 6.97,
        "boshuAvg30d": 102.6,
        "heikinAvg30d": 8.166
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 103.988,
        "saikou": 9.34,
        "heikin": 6.12,
        "boshuAvg30d": 102.6,
        "heikinAvg30d": 8.317
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 103.988,
        "saikou": 10,
        "heikin": 6.47,
        "boshuAvg30d": 102.6,
        "heikinAvg30d": 8.238
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 102.088,
        "saikou": 9.4,
        "heikin": 6.57,
        "boshuAvg30d": 101.6,
        "heikinAvg30d": 8.361
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 102.088,
        "saikou": 10,
        "heikin": 6.66,
        "boshuAvg30d": 100.6,
        "heikinAvg30d": 8.378
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 103.988,
        "saikou": 9.5,
        "heikin": 7.04,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 8.442
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 415,
        "ouatsu": 422.639,
        "saikou": 9.88,
        "heikin": 4.58,
        "boshuAvg30d": 486.1,
        "heikinAvg30d": 3.485
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 415,
        "ouatsu": 474.367,
        "saikou": 9.05,
        "heikin": 4.42,
        "boshuAvg30d": 486.1,
        "heikinAvg30d": 3.351
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 415,
        "ouatsu": 477.682,
        "saikou": 9.88,
        "heikin": 4.33,
        "boshuAvg30d": 486.1,
        "heikinAvg30d": 3.257
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 415,
        "ouatsu": 483.549,
        "saikou": 9.05,
        "heikin": 4.15,
        "boshuAvg30d": 486.0,
        "heikinAvg30d": 3.269
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 413,
        "ouatsu": 471.577,
        "saikou": 9.88,
        "heikin": 3.87,
        "boshuAvg30d": 484.0,
        "heikinAvg30d": 3.229
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 413,
        "ouatsu": 469.797,
        "saikou": 9.88,
        "heikin": 4.14,
        "boshuAvg30d": 484.0,
        "heikinAvg30d": 3.235
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 412,
        "ouatsu": 481.769,
        "saikou": 9.88,
        "heikin": 4.02,
        "boshuAvg30d": 483.0,
        "heikinAvg30d": 3.161
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 413,
        "ouatsu": 478.329,
        "saikou": 9.88,
        "heikin": 4.41,
        "boshuAvg30d": 484.0,
        "heikinAvg30d": 3.344
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 414,
        "ouatsu": 463.686,
        "saikou": 9.88,
        "heikin": 4.56,
        "boshuAvg30d": 485.0,
        "heikinAvg30d": 3.297
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 414,
        "ouatsu": 503.836,
        "saikou": 9.88,
        "heikin": 4.35,
        "boshuAvg30d": 485.0,
        "heikinAvg30d": 3.32
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 414,
        "ouatsu": 458.166,
        "saikou": 9.88,
        "heikin": 4.62,
        "boshuAvg30d": 485.0,
        "heikinAvg30d": 3.331
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 414,
        "ouatsu": 498.56,
        "saikou": 9.88,
        "heikin": 5.47,
        "boshuAvg30d": 485.0,
        "heikinAvg30d": 3.37
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 435,
        "ouatsu": 491.304,
        "saikou": 9.08,
        "heikin": 4.97,
        "boshuAvg30d": 506.0,
        "heikinAvg30d": 3.761
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 443,
        "ouatsu": 491.308,
        "saikou": 9.09,
        "heikin": 4.76,
        "boshuAvg30d": 514.0,
        "heikinAvg30d": 3.779
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 448,
        "ouatsu": 385.208,
        "saikou": 9.1,
        "heikin": 4.22,
        "boshuAvg30d": 519.1,
        "heikinAvg30d": 3.887
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 453,
        "ouatsu": 349.085,
        "saikou": 9.1,
        "heikin": 4.27,
        "boshuAvg30d": 524.1,
        "heikinAvg30d": 3.883
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 453,
        "ouatsu": 510.251,
        "saikou": 9.1,
        "heikin": 5.17,
        "boshuAvg30d": 524.1,
        "heikinAvg30d": 4.272
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 453,
        "ouatsu": 510.251,
        "saikou": 9.1,
        "heikin": 5.21,
        "boshuAvg30d": 524.1,
        "heikinAvg30d": 4.392
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 444,
        "ouatsu": 519.773,
        "saikou": 9.09,
        "heikin": 4.86,
        "boshuAvg30d": 518.0,
        "heikinAvg30d": 4.362
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 444,
        "ouatsu": 482.868,
        "saikou": 9.09,
        "heikin": 5.35,
        "boshuAvg30d": 518.0,
        "heikinAvg30d": 4.346
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 444,
        "ouatsu": 477.506,
        "saikou": 9.53,
        "heikin": 5.45,
        "boshuAvg30d": 518.0,
        "heikinAvg30d": 4.173
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 443,
        "ouatsu": 458.069,
        "saikou": 9.1,
        "heikin": 4.82,
        "boshuAvg30d": 517.0,
        "heikinAvg30d": 4.138
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 440,
        "ouatsu": 454.735,
        "saikou": 9.08,
        "heikin": 4.77,
        "boshuAvg30d": 514.0,
        "heikinAvg30d": 4.205
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 440,
        "ouatsu": 449.935,
        "saikou": 9.09,
        "heikin": 4.53,
        "boshuAvg30d": 514.0,
        "heikinAvg30d": 4.194
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 439,
        "ouatsu": 434.313,
        "saikou": 9.1,
        "heikin": 3.96,
        "boshuAvg30d": 513.0,
        "heikinAvg30d": 4.012
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 439,
        "ouatsu": 438.209,
        "saikou": 9.1,
        "heikin": 3.97,
        "boshuAvg30d": 513.0,
        "heikinAvg30d": 4.057
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 439,
        "ouatsu": 394.067,
        "saikou": 9.09,
        "heikin": 5.41,
        "boshuAvg30d": 510.0,
        "heikinAvg30d": 4.085
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 438,
        "ouatsu": 400.076,
        "saikou": 9.08,
        "heikin": 6.23,
        "boshuAvg30d": 509.4,
        "heikinAvg30d": 4.296
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 437,
        "ouatsu": 539.481,
        "saikou": 9.09,
        "heikin": 6.13,
        "boshuAvg30d": 508.4,
        "heikinAvg30d": 4.405
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 437,
        "ouatsu": 592.662,
        "saikou": 9.09,
        "heikin": 5.78,
        "boshuAvg30d": 508.4,
        "heikinAvg30d": 4.201
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 436,
        "ouatsu": 651.214,
        "saikou": 9.08,
        "heikin": 5.26,
        "boshuAvg30d": 507.4,
        "heikinAvg30d": 4.188
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 436,
        "ouatsu": 532.62,
        "saikou": 10,
        "heikin": 5.75,
        "boshuAvg30d": 507.4,
        "heikinAvg30d": 4.079
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 436,
        "ouatsu": 569.492,
        "saikou": 10,
        "heikin": 5.73,
        "boshuAvg30d": 507.4,
        "heikinAvg30d": 4.265
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 436,
        "ouatsu": 551.056,
        "saikou": 10,
        "heikin": 5.61,
        "boshuAvg30d": 507.3,
        "heikinAvg30d": 4.446
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 436,
        "ouatsu": 565.719,
        "saikou": 10,
        "heikin": 5.92,
        "boshuAvg30d": 503.2,
        "heikinAvg30d": 4.525
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 436,
        "ouatsu": 530.675,
        "saikou": 10,
        "heikin": 5.79,
        "boshuAvg30d": 503.2,
        "heikinAvg30d": 4.466
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 438,
        "ouatsu": 520.042,
        "saikou": 10,
        "heikin": 5.99,
        "boshuAvg30d": 505.2,
        "heikinAvg30d": 4.584
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 438,
        "ouatsu": 626.976,
        "saikou": 10,
        "heikin": 5.92,
        "boshuAvg30d": 505.2,
        "heikinAvg30d": 4.509
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 439,
        "ouatsu": 610.284,
        "saikou": 10,
        "heikin": 5.36,
        "boshuAvg30d": 505.8,
        "heikinAvg30d": 4.55
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 439,
        "ouatsu": 628.72,
        "saikou": 10,
        "heikin": 5.77,
        "boshuAvg30d": 505.8,
        "heikinAvg30d": 4.426
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 437,
        "ouatsu": 647.477,
        "saikou": 9.81,
        "heikin": 5.5,
        "boshuAvg30d": 503.8,
        "heikinAvg30d": 4.276
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 437,
        "ouatsu": 636.076,
        "saikou": 9.49,
        "heikin": 5.34,
        "boshuAvg30d": 503.8,
        "heikinAvg30d": 4.294
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 436,
        "ouatsu": 596.969,
        "saikou": 9.09,
        "heikin": 5.53,
        "boshuAvg30d": 502.9,
        "heikinAvg30d": 4.088
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 436,
        "ouatsu": 615.405,
        "saikou": 9.09,
        "heikin": 5.28,
        "boshuAvg30d": 502.9,
        "heikinAvg30d": 4.438
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 436,
        "ouatsu": 418.588,
        "saikou": 9.09,
        "heikin": 3.66,
        "boshuAvg30d": 502.9,
        "heikinAvg30d": 3.969
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 434,
        "ouatsu": 464.18,
        "saikou": 9.09,
        "heikin": 5.11,
        "boshuAvg30d": 500.9,
        "heikinAvg30d": 4.113
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 432,
        "ouatsu": 463.058,
        "saikou": 9.08,
        "heikin": 4.78,
        "boshuAvg30d": 498.8,
        "heikinAvg30d": 4.258
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 431,
        "ouatsu": 522.54,
        "saikou": 9.09,
        "heikin": 4.69,
        "boshuAvg30d": 497.8,
        "heikinAvg30d": 4.164
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 163.78,
        "saikou": 2,
        "heikin": 1.77,
        "boshuAvg30d": 89.4,
        "heikinAvg30d": 2.038
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 193.977,
        "saikou": 2.19,
        "heikin": 1.52,
        "boshuAvg30d": 89.4,
        "heikinAvg30d": 1.964
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 234.478,
        "saikou": 2.48,
        "heikin": 1.89,
        "boshuAvg30d": 89.4,
        "heikinAvg30d": 1.968
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 234.478,
        "saikou": 2.46,
        "heikin": 1.78,
        "boshuAvg30d": 89.4,
        "heikinAvg30d": 2.046
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 216.544,
        "saikou": 2.39,
        "heikin": 1.94,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.052
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 220.424,
        "saikou": 2.29,
        "heikin": 1.84,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.099
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 236.338,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.01
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 230.638,
        "saikou": 2.43,
        "heikin": 1.89,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.179
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 236.338,
        "saikou": 2.43,
        "heikin": 1.84,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.306
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 215.141,
        "saikou": 2.53,
        "heikin": 2.06,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.193
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 215.141,
        "saikou": 2.82,
        "heikin": 2.14,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.326
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 215.141,
        "saikou": 2.82,
        "heikin": 2.01,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.28
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 215.141,
        "saikou": 3.72,
        "heikin": 2.38,
        "boshuAvg30d": 98.3,
        "heikinAvg30d": 2.282
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 196.92,
        "saikou": 4.08,
        "heikin": 2.66,
        "boshuAvg30d": 101.3,
        "heikinAvg30d": 2.169
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 215.141,
        "saikou": 3.45,
        "heikin": 2.64,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 2.189
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 169.928,
        "saikou": 3.94,
        "heikin": 2.75,
        "boshuAvg30d": 106.3,
        "heikinAvg30d": 2.182
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 169.928,
        "saikou": 4.17,
        "heikin": 2.9,
        "boshuAvg30d": 106.3,
        "heikinAvg30d": 2.477
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 179.802,
        "saikou": 3.83,
        "heikin": 2.85,
        "boshuAvg30d": 106.3,
        "heikinAvg30d": 2.557
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 175.837,
        "saikou": 4.15,
        "heikin": 3.24,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 2.984
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 141.327,
        "saikou": 4.88,
        "heikin": 3.21,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 2.971
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 137.351,
        "saikou": 4.42,
        "heikin": 3.13,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 3.165
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 137.351,
        "saikou": 4.99,
        "heikin": 3.22,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 3.216
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 163.132,
        "saikou": 4.48,
        "heikin": 2.91,
        "boshuAvg30d": 109.3,
        "heikinAvg30d": 2.986
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 184.034,
        "saikou": 4.33,
        "heikin": 3,
        "boshuAvg30d": 108.3,
        "heikinAvg30d": 2.787
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 165.107,
        "saikou": 6.48,
        "heikin": 2.74,
        "boshuAvg30d": 105.3,
        "heikinAvg30d": 2.852
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 185.924,
        "saikou": 7.07,
        "heikin": 3.02,
        "boshuAvg30d": 105.3,
        "heikinAvg30d": 2.783
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 204.145,
        "saikou": 3.72,
        "heikin": 2.64,
        "boshuAvg30d": 105.3,
        "heikinAvg30d": 2.743
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 215.235,
        "saikou": 3.11,
        "heikin": 2.29,
        "boshuAvg30d": 105.3,
        "heikinAvg30d": 2.798
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 223.255,
        "saikou": 3.52,
        "heikin": 2.35,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 2.949
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 201.382,
        "saikou": 3.49,
        "heikin": 1.9,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 2.957
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 240.271,
        "saikou": 3.1,
        "heikin": 1.62,
        "boshuAvg30d": 103.4,
        "heikinAvg30d": 2.777
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 232.387,
        "saikou": 4,
        "heikin": 2.15,
        "boshuAvg30d": 103.4,
        "heikinAvg30d": 2.73
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 339.746,
        "saikou": 2.9,
        "heikin": 2.32,
        "boshuAvg30d": 103.4,
        "heikinAvg30d": 2.778
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 337.748,
        "saikou": 3.9,
        "heikin": 2.52,
        "boshuAvg30d": 103.3,
        "heikinAvg30d": 3.067
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 335.758,
        "saikou": 4,
        "heikin": 2.54,
        "boshuAvg30d": 103.4,
        "heikinAvg30d": 2.961
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 335.758,
        "saikou": 7.55,
        "heikin": 3.91,
        "boshuAvg30d": 103.4,
        "heikinAvg30d": 2.754
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 335.758,
        "saikou": 7.79,
        "heikin": 4.32,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 2.649
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 335.758,
        "saikou": 6.89,
        "heikin": 3.15,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 2.477
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 337.757,
        "saikou": 2.89,
        "heikin": 2.25,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 2.202
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 337.672,
        "saikou": 2.88,
        "heikin": 2.07,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 2.272
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 330.706,
        "saikou": 2.88,
        "heikin": 1.74,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 2.372
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 324.706,
        "saikou": 3.21,
        "heikin": 1.83,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 2.305
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 304.103,
        "saikou": 2.5,
        "heikin": 1.73,
        "boshuAvg30d": 101.3,
        "heikinAvg30d": 2.147
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 273.13,
        "saikou": 2.68,
        "heikin": 1.97,
        "boshuAvg30d": 102.4,
        "heikinAvg30d": 2.32
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 276.215,
        "saikou": 2.68,
        "heikin": 1.72,
        "boshuAvg30d": 102.4,
        "heikinAvg30d": 2.394
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 276.215,
        "saikou": 2.57,
        "heikin": 1.8,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 2.363
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 271.58,
        "saikou": 2.43,
        "heikin": 1.34,
        "boshuAvg30d": 100.4,
        "heikinAvg30d": 2.361
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 272.455,
        "saikou": 2.47,
        "heikin": 1.57,
        "boshuAvg30d": 97.4,
        "heikinAvg30d": 2.367
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
        "heikinAvg30d": 1.005
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 2.1,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.023
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 1.7,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.036
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 1.85,
        "heikin": 0.44,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.151
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.4,
        "heikin": 0.6,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.356
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 1.7,
        "heikin": 1.67,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 0.972
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.23,
        "heikin": 2.23,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.165
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.9,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.35
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.2,
        "heikin": 1.09,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.271
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.3,
        "heikin": 0.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.397
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2,
        "heikin": 0.94,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.512
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.17,
        "heikin": 2.14,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.419
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.93,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.686
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.45
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 1.89,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.523
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.55,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.596
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 4.17,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.824
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 2.91,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.469
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.14,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.971
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 2.97,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.958
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.62,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.704
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 5.21,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.951
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.874
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.637
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.58,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.56
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.43,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.674
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 3.35,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.469
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.8,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.732
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 3.45,
        "heikin": 0.49,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.651
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 48.772,
        "saikou": 3.45,
        "heikin": 0.52,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.346
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 3.16,
        "heikin": 3.08,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.435
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 3.64,
        "heikin": 3.56,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.703
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 4.41,
        "heikin": 4.29,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.372
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 5.55,
        "heikin": 5.2,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.899
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 7.93,
        "heikin": 7.43,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.269
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 9.26,
        "heikin": 8.69,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.98
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 7.8,
        "heikin": 7.25,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.062
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 9.11,
        "heikin": 8.51,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.724
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 6.68,
        "heikin": 6.18,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.759
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 5.49,
        "heikin": 5.1,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.259
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 5.46,
        "heikin": 5.07,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.427
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 63.928,
        "saikou": 4.63,
        "heikin": 4.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.598
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 28.928,
        "saikou": 4.26,
        "heikin": 4.26,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.903
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 28.928,
        "saikou": 4.42,
        "heikin": 4.13,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.885
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 28.928,
        "saikou": 4.43,
        "heikin": 4.43,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.728
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 28.928,
        "saikou": 4.17,
        "heikin": 4.17,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.543
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 28.928,
        "saikou": 3.48,
        "heikin": 3.48,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.479
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 28.928,
        "saikou": 2.59,
        "heikin": 2.59,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.181
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 89.429,
        "saikou": 1.5,
        "heikin": 1.45,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.073
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 112.065,
        "saikou": 2.2,
        "heikin": 1.57,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.802
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 115.314,
        "saikou": 2.44,
        "heikin": 1.72,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.945
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 91.369,
        "saikou": 2.44,
        "heikin": 2.13,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.846
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 89.469,
        "saikou": 2.44,
        "heikin": 2.1,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.889
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 89.469,
        "saikou": 2.2,
        "heikin": 2.05,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 1.935
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 115.314,
        "saikou": 2.2,
        "heikin": 1.65,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 2.062
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 91.369,
        "saikou": 2.2,
        "heikin": 2.13,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 2.094
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 91.369,
        "saikou": 2.44,
        "heikin": 2.06,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.061
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 91.369,
        "saikou": 2.44,
        "heikin": 2.18,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.123
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 91.369,
        "saikou": 2.47,
        "heikin": 2.24,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.048
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 91.369,
        "saikou": 2.8,
        "heikin": 2.25,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.905
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 91.369,
        "saikou": 2.8,
        "heikin": 2.29,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.147
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 115.314,
        "saikou": 2.8,
        "heikin": 1.9,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.222
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 110.125,
        "saikou": 2.8,
        "heikin": 1.93,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.325
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 110.031,
        "saikou": 2.44,
        "heikin": 1.88,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.389
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 87.529,
        "saikou": 2.78,
        "heikin": 2.41,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.684
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 105.7,
        "saikou": 3.95,
        "heikin": 2.24,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.758
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 91.396,
        "saikou": 3.97,
        "heikin": 2.97,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 2.966
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 91.396,
        "saikou": 3.95,
        "heikin": 2.95,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.004
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 93.381,
        "saikou": 5.95,
        "heikin": 3.46,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.353
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 93.381,
        "saikou": 5.95,
        "heikin": 3.34,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.303
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 93.381,
        "saikou": 5.95,
        "heikin": 3.6,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 3.111
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 91.938,
        "saikou": 3.95,
        "heikin": 3.24,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 2.895
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 89.94,
        "saikou": 4.94,
        "heikin": 3.11,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 2.986
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 91.938,
        "saikou": 5.95,
        "heikin": 3.26,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 2.703
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 91.938,
        "saikou": 3.05,
        "heikin": 2.82,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 3.002
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 93.381,
        "saikou": 3.41,
        "heikin": 2.89,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 2.933
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 91.402,
        "saikou": 3,
        "heikin": 2.68,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 2.961
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 248.016,
        "saikou": 5.23,
        "heikin": 3.6,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 2.858
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 163.856,
        "saikou": 4.97,
        "heikin": 2.94,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.677
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 95.242,
        "saikou": 4,
        "heikin": 2.78,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.788
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 97.221,
        "saikou": 2.79,
        "heikin": 2.41,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.796
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 95.351,
        "saikou": 3.13,
        "heikin": 2.51,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.988
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 95.351,
        "saikou": 4,
        "heikin": 2.67,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 3.031
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 95.351,
        "saikou": 4.94,
        "heikin": 3.33,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 2.945
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 80.351,
        "saikou": 4,
        "heikin": 2.55,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.792
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 80.236,
        "saikou": 4,
        "heikin": 2.65,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.745
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 74.926,
        "saikou": 3.5,
        "heikin": 2.99,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.867
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 73.076,
        "saikou": 2.8,
        "heikin": 2.41,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.604
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 76.369,
        "saikou": 2.8,
        "heikin": 2.36,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.57
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 23.711,
        "saikou": 2.8,
        "heikin": 2.54,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.568
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 72.579,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.616
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 76.369,
        "saikou": 2.3,
        "heikin": 2.27,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.537
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 76.369,
        "saikou": 2.3,
        "heikin": 2.28,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.586
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 76.369,
        "saikou": 2.2,
        "heikin": 2.19,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.483
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 27.094,
        "saikou": 2.2,
        "heikin": 2,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.273
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 74.519,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 2.301
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 222.478,
        "saikou": 1.3,
        "heikin": 0.41,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.905
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 205.351,
        "saikou": 2,
        "heikin": 1.24,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.134
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 205.351,
        "saikou": 1.52,
        "heikin": 1.27,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.252
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 207.151,
        "saikou": 1.52,
        "heikin": 1.27,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.119
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 207.151,
        "saikou": 1.58,
        "heikin": 1.17,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.058
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 207.151,
        "saikou": 1.58,
        "heikin": 1.16,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.167
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 194.039,
        "saikou": 1.43,
        "heikin": 1.2,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.281
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 194.039,
        "saikou": 1.52,
        "heikin": 1.27,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.454
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 174.88,
        "saikou": 2,
        "heikin": 1.46,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.35
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 168.585,
        "saikou": 2,
        "heikin": 1.6,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.595
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 168.585,
        "saikou": 2.41,
        "heikin": 2.28,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.935
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 168.585,
        "saikou": 3.26,
        "heikin": 3.01,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.924
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 168.585,
        "saikou": 4.23,
        "heikin": 3.85,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.202
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 152.671,
        "saikou": 2.9,
        "heikin": 1.51,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 2.503
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 192.237,
        "saikou": 2.9,
        "heikin": 1.22,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.292
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 192.237,
        "saikou": 2.9,
        "heikin": 0.56,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.15
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 192.237,
        "saikou": 2.9,
        "heikin": 0.57,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.102
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 186.44,
        "saikou": 2.9,
        "heikin": 0.57,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.756
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 194.235,
        "saikou": 4,
        "heikin": 0.61,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.685
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 194.235,
        "saikou": 4,
        "heikin": 0.62,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.587
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 181.508,
        "saikou": 4,
        "heikin": 0.63,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 2.706
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 181.508,
        "saikou": 4,
        "heikin": 0.63,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.668
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 181.508,
        "saikou": 4,
        "heikin": 0.64,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.607
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 181.508,
        "saikou": 4,
        "heikin": 0.64,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.572
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 181.508,
        "saikou": 4,
        "heikin": 0.61,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.189
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 181.508,
        "saikou": 4,
        "heikin": 0.61,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.072
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 192.85,
        "saikou": 2.7,
        "heikin": 0.49,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.44
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 192.85,
        "saikou": 2.7,
        "heikin": 0.49,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.478
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 164.261,
        "saikou": 2.7,
        "heikin": 0.52,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.654
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 164.261,
        "saikou": 2.7,
        "heikin": 0.51,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.813
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 164.261,
        "saikou": 3.07,
        "heikin": 0.53,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.24
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 154.669,
        "saikou": 4,
        "heikin": 1.37,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.751
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 161.779,
        "saikou": 2.7,
        "heikin": 1.12,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.55
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 161.779,
        "saikou": 4.97,
        "heikin": 4.04,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.663
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 161.779,
        "saikou": 8.03,
        "heikin": 6.93,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.975
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 160.001,
        "saikou": 7.94,
        "heikin": 7.46,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.267
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 161.779,
        "saikou": 9.15,
        "heikin": 8.03,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.439
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 161.779,
        "saikou": 9.34,
        "heikin": 8.21,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.532
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 177.693,
        "saikou": 8.02,
        "heikin": 6.47,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.253
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 177.693,
        "saikou": 6.82,
        "heikin": 5.47,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.072
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 122.703,
        "saikou": 6.78,
        "heikin": 5.81,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.735
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 122.703,
        "saikou": 5.95,
        "heikin": 5.14,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.339
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 122.703,
        "saikou": 5.77,
        "heikin": 5.23,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.3
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 122.703,
        "saikou": 5.93,
        "heikin": 5.32,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.294
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 122.703,
        "saikou": 5.95,
        "heikin": 5.34,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.108
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 122.703,
        "saikou": 5.69,
        "heikin": 5.17,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.834
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 122.703,
        "saikou": 4.99,
        "heikin": 4.49,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.755
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 120.903,
        "saikou": 4.09,
        "heikin": 3.79,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.01
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.45,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.861
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.89
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.867
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.857
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.861
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 207.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.992
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 172.93,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.933
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.975
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.013
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 172.93,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.997
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 172.93,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.944
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 175.93,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.017
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 175.93,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.997
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 198.93,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.034
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 198.93,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.9
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 175.93,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.887
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 198.93,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.947
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.925
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.939
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.932
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.93
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.927
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.111
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.062
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.997
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 149.93,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.023
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.008
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.906
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.38,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.949
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.985
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 164.93,
        "saikou": 1.6,
        "heikin": 1.38,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.986
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 155.93,
        "saikou": 1.6,
        "heikin": 1.1,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.938
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.981
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.012
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.016
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.027
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.072
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.063
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.022
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.017
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 2.15,
        "heikin": 0.91,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.73
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 2.15,
        "heikin": 0.93,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.756
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 2.15,
        "heikin": 0.94,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.764
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.7,
        "heikin": 0.86,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.777
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 224.473,
        "saikou": 1.7,
        "heikin": 0.86,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.791
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 224.473,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.852
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 162.571,
        "saikou": 5.52,
        "heikin": 5,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 3.852
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 168.441,
        "saikou": 4.55,
        "heikin": 3.61,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 3.395
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 183.121,
        "saikou": 4.57,
        "heikin": 3.83,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 3.071
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 183.121,
        "saikou": 3.92,
        "heikin": 3.27,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 2.947
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 183.121,
        "saikou": 3.92,
        "heikin": 3.21,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 2.876
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 183.121,
        "saikou": 4.55,
        "heikin": 3.65,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 3.032
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 183.121,
        "saikou": 4.62,
        "heikin": 3.75,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.23
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 179.293,
        "saikou": 4.57,
        "heikin": 3.86,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.366
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 183.121,
        "saikou": 6.23,
        "heikin": 4.94,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.47
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 183.121,
        "saikou": 7.3,
        "heikin": 5.83,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.719
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 183.121,
        "saikou": 7.74,
        "heikin": 6.21,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.938
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 177.845,
        "saikou": 7.8,
        "heikin": 6.38,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.73
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 177.845,
        "saikou": 7.41,
        "heikin": 5.5,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 3.461
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 177.845,
        "saikou": 4.45,
        "heikin": 3.51,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 3.266
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 177.845,
        "saikou": 2.8,
        "heikin": 1.74,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 3.115
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 131.045,
        "saikou": 3.1,
        "heikin": 1.73,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 3.27
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 110.993,
        "saikou": 3.1,
        "heikin": 1.62,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 3.705
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 118.855,
        "saikou": 2.8,
        "heikin": 2.08,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 4.274
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 109.37,
        "saikou": 3,
        "heikin": 2.01,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 4.289
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 167.37,
        "saikou": 3,
        "heikin": 1.43,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 4.274
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 163.887,
        "saikou": 4.38,
        "heikin": 1.23,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 4.128
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 163.887,
        "saikou": 4.38,
        "heikin": 1.4,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 4.283
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 163.887,
        "saikou": 4.38,
        "heikin": 1.35,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.218
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 159.941,
        "saikou": 3.89,
        "heikin": 1.27,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.22
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 163.872,
        "saikou": 4.38,
        "heikin": 1.37,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 3.719
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 130.872,
        "saikou": 4.38,
        "heikin": 1.64,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 3.844
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 163.97,
        "saikou": 3.69,
        "heikin": 1.49,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 4.277
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 163.97,
        "saikou": 3.4,
        "heikin": 2.04,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 4.825
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 117.37,
        "saikou": 3.6,
        "heikin": 2.31,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 5.16
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 148.38,
        "saikou": 4.2,
        "heikin": 2.51,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 5.506
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 215.38,
        "saikou": 3.73,
        "heikin": 3.09,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.54
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 165.38,
        "saikou": 7.89,
        "heikin": 5.8,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.103
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 172.38,
        "saikou": 9.26,
        "heikin": 6.73,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.043
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 242.284,
        "saikou": 10,
        "heikin": 7.2,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 6.281
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 236.535,
        "saikou": 10,
        "heikin": 7.23,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 6.015
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 210.636,
        "saikou": 10,
        "heikin": 7.79,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 6.145
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 231.167,
        "saikou": 10,
        "heikin": 8.33,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 6.134
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 327.056,
        "saikou": 9.12,
        "heikin": 7.8,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 5.897
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 236.206,
        "saikou": 10,
        "heikin": 7.2,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 5.532
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 238.182,
        "saikou": 9.57,
        "heikin": 6.44,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 5.085
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 239.506,
        "saikou": 9.06,
        "heikin": 6.07,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 4.864
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 241.482,
        "saikou": 8.67,
        "heikin": 5.79,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 4.651
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 234.62,
        "saikou": 8.05,
        "heikin": 6.2,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 4.446
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 235.62,
        "saikou": 7.9,
        "heikin": 6.03,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.538
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 237.596,
        "saikou": 7.9,
        "heikin": 5.99,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.461
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 234.62,
        "saikou": 7.81,
        "heikin": 6.03,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.965
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 226.97,
        "saikou": 7.76,
        "heikin": 6.13,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.963
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 226.97,
        "saikou": 7.32,
        "heikin": 5.88,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.507
      }
    ]
  }
};
