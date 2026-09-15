// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/16〜2026/09/14）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-15",
  "fetchedAt": "2026-09-15",
  "avgWindowLabel": "過去30日平均（2026/08/16〜2026/09/14）",
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
      "boshu": 1276,
      "ouatsu": 1442.023,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1451.5,
      "heikinAvg30d": 3.169
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1276,
      "ouatsu": 1510.422,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1451.5,
      "heikinAvg30d": 3.131
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1276,
      "ouatsu": 1596.886,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1451.5,
      "heikinAvg30d": 3.213
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1276,
      "ouatsu": 1665.553,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1450.4,
      "heikinAvg30d": 3.202
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1271,
      "ouatsu": 1592.28,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1445.4,
      "heikinAvg30d": 3.228
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1270,
      "ouatsu": 1638.808,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1443.9,
      "heikinAvg30d": 3.294
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1356,
      "ouatsu": 1750.189,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1454.3,
      "heikinAvg30d": 3.292
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1357,
      "ouatsu": 1716.288,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1455.3,
      "heikinAvg30d": 3.354
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1360,
      "ouatsu": 1716.718,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1458.8,
      "heikinAvg30d": 3.365
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1360,
      "ouatsu": 1686.597,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1459.4,
      "heikinAvg30d": 3.353
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1360,
      "ouatsu": 1774.939,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1459.4,
      "heikinAvg30d": 3.455
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1360,
      "ouatsu": 1719.308,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1459.4,
      "heikinAvg30d": 3.366
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1426,
      "ouatsu": 1691.65,
      "saikou": 10,
      "heikin": 3.73,
      "boshuAvg30d": 1523.8,
      "heikinAvg30d": 3.755
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1447,
      "ouatsu": 1750.08,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1545.8,
      "heikinAvg30d": 3.77
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1470,
      "ouatsu": 1811.034,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1568.8,
      "heikinAvg30d": 3.787
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1488,
      "ouatsu": 1845.787,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1585.1,
      "heikinAvg30d": 3.78
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1489,
      "ouatsu": 1803.975,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1585.6,
      "heikinAvg30d": 4.052
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1489,
      "ouatsu": 1708.126,
      "saikou": 10,
      "heikin": 3.74,
      "boshuAvg30d": 1585.6,
      "heikinAvg30d": 4.331
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1512,
      "ouatsu": 1741.586,
      "saikou": 10,
      "heikin": 3.54,
      "boshuAvg30d": 1541.7,
      "heikinAvg30d": 4.289
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1516,
      "ouatsu": 1640.948,
      "saikou": 10,
      "heikin": 3.57,
      "boshuAvg30d": 1546.3,
      "heikinAvg30d": 4.14
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1524,
      "ouatsu": 1809.54,
      "saikou": 10,
      "heikin": 3.84,
      "boshuAvg30d": 1553.3,
      "heikinAvg30d": 3.996
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1524,
      "ouatsu": 1784.382,
      "saikou": 10,
      "heikin": 3.75,
      "boshuAvg30d": 1553.3,
      "heikinAvg30d": 4.024
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1521,
      "ouatsu": 1807.316,
      "saikou": 10,
      "heikin": 3.74,
      "boshuAvg30d": 1549.2,
      "heikinAvg30d": 3.964
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1520,
      "ouatsu": 1802.486,
      "saikou": 10,
      "heikin": 3.51,
      "boshuAvg30d": 1548.8,
      "heikinAvg30d": 3.984
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1427,
      "ouatsu": 1801.806,
      "saikou": 10,
      "heikin": 3.51,
      "boshuAvg30d": 1543.4,
      "heikinAvg30d": 3.787
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1427,
      "ouatsu": 1766.245,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1543.4,
      "heikinAvg30d": 3.795
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1427,
      "ouatsu": 1657.529,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1540.8,
      "heikinAvg30d": 4.025
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1421,
      "ouatsu": 1679.173,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1534.8,
      "heikinAvg30d": 4.274
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1416,
      "ouatsu": 1913.585,
      "saikou": 10,
      "heikin": 3.64,
      "boshuAvg30d": 1531.4,
      "heikinAvg30d": 4.519
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1409,
      "ouatsu": 2003.998,
      "saikou": 10,
      "heikin": 3.74,
      "boshuAvg30d": 1526.0,
      "heikinAvg30d": 4.58
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1466,
      "ouatsu": 1885.599,
      "saikou": 10,
      "heikin": 3.97,
      "boshuAvg30d": 1566.9,
      "heikinAvg30d": 4.531
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1466,
      "ouatsu": 1844.689,
      "saikou": 10,
      "heikin": 3.77,
      "boshuAvg30d": 1566.9,
      "heikinAvg30d": 4.905
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1466,
      "ouatsu": 1788.953,
      "saikou": 10,
      "heikin": 3.96,
      "boshuAvg30d": 1567.0,
      "heikinAvg30d": 4.934
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1464,
      "ouatsu": 1931.029,
      "saikou": 10,
      "heikin": 4.02,
      "boshuAvg30d": 1563.4,
      "heikinAvg30d": 5.179
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1344,
      "ouatsu": 1855.259,
      "saikou": 10,
      "heikin": 4.26,
      "boshuAvg30d": 1560.4,
      "heikinAvg30d": 5.223
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1340,
      "ouatsu": 1855.37,
      "saikou": 10,
      "heikin": 4.05,
      "boshuAvg30d": 1556.4,
      "heikinAvg30d": 5.194
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1332,
      "ouatsu": 1795.335,
      "saikou": 10,
      "heikin": 4.2,
      "boshuAvg30d": 1547.9,
      "heikinAvg30d": 5.252
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1332,
      "ouatsu": 1873.19,
      "saikou": 10,
      "heikin": 4.16,
      "boshuAvg30d": 1547.4,
      "heikinAvg30d": 5.079
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1333,
      "ouatsu": 1795.819,
      "saikou": 10,
      "heikin": 4.01,
      "boshuAvg30d": 1547.8,
      "heikinAvg30d": 4.863
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1332,
      "ouatsu": 1718.977,
      "saikou": 10,
      "heikin": 3.67,
      "boshuAvg30d": 1547.4,
      "heikinAvg30d": 4.593
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1327,
      "ouatsu": 1768.535,
      "saikou": 10,
      "heikin": 3.54,
      "boshuAvg30d": 1542.4,
      "heikinAvg30d": 4.299
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1323,
      "ouatsu": 1767.773,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1540.0,
      "heikinAvg30d": 4.015
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1230,
      "ouatsu": 1690.601,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1452.2,
      "heikinAvg30d": 3.611
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1233,
      "ouatsu": 1551.836,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1455.2,
      "heikinAvg30d": 4.256
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1234,
      "ouatsu": 1645.228,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1456.2,
      "heikinAvg30d": 3.945
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1227,
      "ouatsu": 1710.192,
      "saikou": 9.4,
      "heikin": 3,
      "boshuAvg30d": 1449.7,
      "heikinAvg30d": 3.636
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1220,
      "ouatsu": 1668.443,
      "saikou": 9.89,
      "heikin": 2.96,
      "boshuAvg30d": 1441.6,
      "heikinAvg30d": 3.707
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1212,
      "ouatsu": 1629.57,
      "saikou": 9.84,
      "heikin": 2.49,
      "boshuAvg30d": 1433.1,
      "heikinAvg30d": 3.633
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
        "ouatsu": 166.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.296
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 164.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.295
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 116.708,
        "saikou": 4,
        "heikin": 1.08,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.119
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 175.008,
        "saikou": 1.01,
        "heikin": 0.96,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.324
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 158.658,
        "saikou": 9.8,
        "heikin": 2.61,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.332
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 195.268,
        "saikou": 4.65,
        "heikin": 1.81,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.398
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 171.328,
        "saikou": 5.85,
        "heikin": 1.29,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.689
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 156.618,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.921
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 134.358,
        "saikou": 4,
        "heikin": 1.47,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 2.298
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 116.618,
        "saikou": 4,
        "heikin": 1.12,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.963
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 208.858,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 2.229
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 158.568,
        "saikou": 9.85,
        "heikin": 2.04,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.838
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 154.648,
        "saikou": 8.25,
        "heikin": 3.43,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.29
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 128.658,
        "saikou": 8,
        "heikin": 2.57,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.862
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 203.018,
        "saikou": 8.85,
        "heikin": 1.62,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.675
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 181.708,
        "saikou": 7.95,
        "heikin": 3.48,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.809
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 156.708,
        "saikou": 4,
        "heikin": 1.08,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.386
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 169.908,
        "saikou": 4,
        "heikin": 1.12,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.795
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 158.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.578
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 116.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.622
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 168.758,
        "saikou": 9.91,
        "heikin": 1.81,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.505
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 171.708,
        "saikou": 9.91,
        "heikin": 1.86,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.73
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 158.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.687
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 154.718,
        "saikou": 4.9,
        "heikin": 1.8,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.545
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 152.75,
        "saikou": 8,
        "heikin": 2.51,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.445
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 152.75,
        "saikou": 4.9,
        "heikin": 1.88,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.463
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 166.708,
        "saikou": 8,
        "heikin": 2.62,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.022
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 166.708,
        "saikou": 8.85,
        "heikin": 3.27,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.346
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 156.708,
        "saikou": 8,
        "heikin": 2.65,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.257
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 199.802,
        "saikou": 9.91,
        "heikin": 3.33,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.25
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 3.201
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 196.248,
        "saikou": 8.85,
        "heikin": 1.73,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.738
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 129.658,
        "saikou": 8.85,
        "heikin": 3.29,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.668
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 201.198,
        "saikou": 1.33,
        "heikin": 1.29,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.877
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 93.658,
        "saikou": 1.33,
        "heikin": 1.31,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 3.379
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 136.198,
        "saikou": 1.36,
        "heikin": 1.33,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 3.607
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 91.708,
        "saikou": 4,
        "heikin": 1.17,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 3.515
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 143.28,
        "saikou": 4,
        "heikin": 1.16,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 3.185
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 107.74,
        "saikou": 4,
        "heikin": 1.13,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 3.212
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 116.708,
        "saikou": 4,
        "heikin": 1.11,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 2.687
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 201.198,
        "saikou": 2.54,
        "heikin": 2.32,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 2.747
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 201.198,
        "saikou": 2.05,
        "heikin": 1.89,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.909
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 158.658,
        "saikou": 1.33,
        "heikin": 1.27,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.652
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 158.658,
        "saikou": 1.24,
        "heikin": 1.21,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.327
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 199.248,
        "saikou": 1.21,
        "heikin": 1.17,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.116
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 199.248,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.782
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 156.708,
        "saikou": 4,
        "heikin": 1.03,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.619
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 199.248,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.348
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 89,
        "ouatsu": 61.109,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 8.295
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 89,
        "ouatsu": 61.109,
        "saikou": 10,
        "heikin": 7.21,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 8.495
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 89,
        "ouatsu": 80.987,
        "saikou": 10,
        "heikin": 7.7,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 9.279
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 89,
        "ouatsu": 80.987,
        "saikou": 10,
        "heikin": 7.87,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 9.23
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 89,
        "ouatsu": 78.989,
        "saikou": 10,
        "heikin": 8.15,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 9.195
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 89,
        "ouatsu": 78.989,
        "saikou": 10,
        "heikin": 8.15,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 9.207
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 93.987,
        "saikou": 10,
        "heikin": 8.2,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 9.15
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 95.487,
        "saikou": 10,
        "heikin": 8.12,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 9.131
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 8.2,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 9.093
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 8.12,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 9.009
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 8.912
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 9.058
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 9.29
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 117.986,
        "saikou": 10,
        "heikin": 7.41,
        "boshuAvg30d": 185.3,
        "heikinAvg30d": 9.671
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.5,
        "boshuAvg30d": 190.8,
        "heikinAvg30d": 9.923
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 117.986,
        "saikou": 10,
        "heikin": 6.57,
        "boshuAvg30d": 194.3,
        "heikinAvg30d": 9.899
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 194.3,
        "heikinAvg30d": 9.912
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 105.986,
        "saikou": 10,
        "heikin": 6.61,
        "boshuAvg30d": 194.3,
        "heikinAvg30d": 9.677
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 215,
        "ouatsu": 108.132,
        "saikou": 10,
        "heikin": 6.56,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 8.921
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 217,
        "ouatsu": 108.132,
        "saikou": 10,
        "heikin": 6.58,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 9.015
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 220,
        "ouatsu": 84.132,
        "saikou": 10,
        "heikin": 7.03,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 8.857
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 221,
        "ouatsu": 84.132,
        "saikou": 10,
        "heikin": 7.06,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 8.939
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 221,
        "ouatsu": 108.132,
        "saikou": 10,
        "heikin": 6.77,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 8.88
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 221,
        "ouatsu": 108.132,
        "saikou": 10,
        "heikin": 6.66,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 9.06
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 105.686,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 9.039
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 91.721,
        "saikou": 10,
        "heikin": 7.58,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 9.002
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 85.482,
        "saikou": 10,
        "heikin": 7.1,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 8.497
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 97.482,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 8.579
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 6.29,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 9.312
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 6.27,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 9.324
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 6.41,
        "boshuAvg30d": 191.9,
        "heikinAvg30d": 9.412
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 99.482,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 191.9,
        "heikinAvg30d": 9.006
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 99.482,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 191.9,
        "heikinAvg30d": 8.775
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 97.982,
        "saikou": 10,
        "heikin": 6.39,
        "boshuAvg30d": 190.3,
        "heikinAvg30d": 8.239
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 99.482,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 188.3,
        "heikinAvg30d": 7.773
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 97.982,
        "saikou": 10,
        "heikin": 6.39,
        "boshuAvg30d": 186.3,
        "heikinAvg30d": 8.035
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 95.521,
        "saikou": 10,
        "heikin": 6.38,
        "boshuAvg30d": 184.8,
        "heikinAvg30d": 7.961
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 95.986,
        "saikou": 10,
        "heikin": 6.39,
        "boshuAvg30d": 184.8,
        "heikinAvg30d": 7.893
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 7.23,
        "boshuAvg30d": 184.8,
        "heikinAvg30d": 8.05
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 73.486,
        "saikou": 10,
        "heikin": 8.37,
        "boshuAvg30d": 184.3,
        "heikinAvg30d": 8.295
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 183.8,
        "heikinAvg30d": 8.495
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 8.07,
        "boshuAvg30d": 184.3,
        "heikinAvg30d": 8.725
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.85,
        "boshuAvg30d": 100.1,
        "heikinAvg30d": 8.538
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 95.586,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 100.1,
        "heikinAvg30d": 8.718
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 100.1,
        "heikinAvg30d": 9.042
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 97.486,
        "saikou": 9.4,
        "heikin": 8.05,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 8.484
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 97.486,
        "saikou": 9.89,
        "heikin": 8.27,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 8.517
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 95.986,
        "saikou": 9.84,
        "heikin": 7.7,
        "boshuAvg30d": 97.1,
        "heikinAvg30d": 8.863
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 539,
        "ouatsu": 394.835,
        "saikou": 9.39,
        "heikin": 3.36,
        "boshuAvg30d": 543.8,
        "heikinAvg30d": 3.814
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 539,
        "ouatsu": 348.984,
        "saikou": 9.39,
        "heikin": 3.14,
        "boshuAvg30d": 543.8,
        "heikinAvg30d": 3.588
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 539,
        "ouatsu": 409.516,
        "saikou": 9.39,
        "heikin": 2.84,
        "boshuAvg30d": 543.8,
        "heikinAvg30d": 3.567
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 539,
        "ouatsu": 401.674,
        "saikou": 9.39,
        "heikin": 2.64,
        "boshuAvg30d": 543.3,
        "heikinAvg30d": 3.437
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 537,
        "ouatsu": 389.702,
        "saikou": 9.39,
        "heikin": 2.35,
        "boshuAvg30d": 541.3,
        "heikinAvg30d": 3.404
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 537,
        "ouatsu": 387.802,
        "saikou": 9.39,
        "heikin": 2.29,
        "boshuAvg30d": 541.3,
        "heikinAvg30d": 3.406
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 536,
        "ouatsu": 440.654,
        "saikou": 9.39,
        "heikin": 2.33,
        "boshuAvg30d": 539.7,
        "heikinAvg30d": 3.241
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 537,
        "ouatsu": 439.134,
        "saikou": 9.39,
        "heikin": 2.6,
        "boshuAvg30d": 540.7,
        "heikinAvg30d": 3.382
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 538,
        "ouatsu": 440.654,
        "saikou": 9.39,
        "heikin": 2.49,
        "boshuAvg30d": 541.7,
        "heikinAvg30d": 3.356
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 538,
        "ouatsu": 428.273,
        "saikou": 9.39,
        "heikin": 2.65,
        "boshuAvg30d": 542.3,
        "heikinAvg30d": 3.326
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 538,
        "ouatsu": 428.273,
        "saikou": 9.39,
        "heikin": 2.79,
        "boshuAvg30d": 542.3,
        "heikinAvg30d": 3.456
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 538,
        "ouatsu": 446.71,
        "saikou": 9.39,
        "heikin": 2.75,
        "boshuAvg30d": 542.3,
        "heikinAvg30d": 3.363
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 559,
        "ouatsu": 452.614,
        "saikou": 9.39,
        "heikin": 3.56,
        "boshuAvg30d": 563.3,
        "heikinAvg30d": 3.75
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 567,
        "ouatsu": 503.325,
        "saikou": 9.4,
        "heikin": 3.29,
        "boshuAvg30d": 571.3,
        "heikinAvg30d": 3.891
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 572,
        "ouatsu": 497.222,
        "saikou": 9.4,
        "heikin": 3.6,
        "boshuAvg30d": 577.3,
        "heikinAvg30d": 4.004
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 577,
        "ouatsu": 593.227,
        "saikou": 9.5,
        "heikin": 3.07,
        "boshuAvg30d": 582.2,
        "heikinAvg30d": 4.001
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 577,
        "ouatsu": 509.553,
        "saikou": 9.5,
        "heikin": 3.08,
        "boshuAvg30d": 582.2,
        "heikinAvg30d": 4.425
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 577,
        "ouatsu": 464.944,
        "saikou": 9.5,
        "heikin": 3.53,
        "boshuAvg30d": 582.2,
        "heikinAvg30d": 4.581
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 568,
        "ouatsu": 442.882,
        "saikou": 9.4,
        "heikin": 3.2,
        "boshuAvg30d": 575.7,
        "heikinAvg30d": 4.629
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 568,
        "ouatsu": 417.34,
        "saikou": 9.4,
        "heikin": 3.47,
        "boshuAvg30d": 575.7,
        "heikinAvg30d": 4.333
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 568,
        "ouatsu": 440.086,
        "saikou": 10,
        "heikin": 3.74,
        "boshuAvg30d": 575.3,
        "heikinAvg30d": 4.024
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 567,
        "ouatsu": 440.086,
        "saikou": 10,
        "heikin": 3.81,
        "boshuAvg30d": 574.3,
        "heikinAvg30d": 4.062
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 564,
        "ouatsu": 457.396,
        "saikou": 10,
        "heikin": 4.11,
        "boshuAvg30d": 571.3,
        "heikinAvg30d": 4.168
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 564,
        "ouatsu": 457.396,
        "saikou": 10,
        "heikin": 4.07,
        "boshuAvg30d": 571.3,
        "heikinAvg30d": 4.204
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 563,
        "ouatsu": 482.002,
        "saikou": 10,
        "heikin": 3.3,
        "boshuAvg30d": 570.3,
        "heikinAvg30d": 4.001
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 563,
        "ouatsu": 452.289,
        "saikou": 10,
        "heikin": 3.37,
        "boshuAvg30d": 570.3,
        "heikinAvg30d": 4.056
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 563,
        "ouatsu": 433.85,
        "saikou": 10,
        "heikin": 4.07,
        "boshuAvg30d": 567.7,
        "heikinAvg30d": 4.097
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 562,
        "ouatsu": 451.537,
        "saikou": 10,
        "heikin": 4.42,
        "boshuAvg30d": 566.7,
        "heikinAvg30d": 4.219
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 561,
        "ouatsu": 441.104,
        "saikou": 9.4,
        "heikin": 3.4,
        "boshuAvg30d": 566.2,
        "heikinAvg30d": 4.528
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 561,
        "ouatsu": 441.104,
        "saikou": 9.4,
        "heikin": 3.28,
        "boshuAvg30d": 566.2,
        "heikinAvg30d": 4.55
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 560,
        "ouatsu": 472.013,
        "saikou": 9.39,
        "heikin": 3.74,
        "boshuAvg30d": 565.2,
        "heikinAvg30d": 4.447
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 560,
        "ouatsu": 443.102,
        "saikou": 9.39,
        "heikin": 3.14,
        "boshuAvg30d": 565.2,
        "heikinAvg30d": 4.757
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 560,
        "ouatsu": 461.541,
        "saikou": 9.39,
        "heikin": 3.03,
        "boshuAvg30d": 564.8,
        "heikinAvg30d": 4.875
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 560,
        "ouatsu": 443.048,
        "saikou": 9.39,
        "heikin": 3.35,
        "boshuAvg30d": 564.8,
        "heikinAvg30d": 5.064
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 444,
        "ouatsu": 472.765,
        "saikou": 9.39,
        "heikin": 3.98,
        "boshuAvg30d": 564.8,
        "heikinAvg30d": 5.198
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 444,
        "ouatsu": 428.011,
        "saikou": 9.4,
        "heikin": 3.42,
        "boshuAvg30d": 564.8,
        "heikinAvg30d": 5.188
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 446,
        "ouatsu": 456.57,
        "saikou": 9.4,
        "heikin": 3.88,
        "boshuAvg30d": 567.3,
        "heikinAvg30d": 5.075
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 446,
        "ouatsu": 457.419,
        "saikou": 9.4,
        "heikin": 3.96,
        "boshuAvg30d": 566.8,
        "heikinAvg30d": 4.828
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 447,
        "ouatsu": 453.509,
        "saikou": 9.4,
        "heikin": 3.55,
        "boshuAvg30d": 567.3,
        "heikinAvg30d": 4.776
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 447,
        "ouatsu": 441.724,
        "saikou": 9.4,
        "heikin": 3.29,
        "boshuAvg30d": 567.3,
        "heikinAvg30d": 4.569
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 445,
        "ouatsu": 452.041,
        "saikou": 9.4,
        "heikin": 3.36,
        "boshuAvg30d": 565.8,
        "heikinAvg30d": 4.089
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 445,
        "ouatsu": 462.562,
        "saikou": 9.39,
        "heikin": 3.17,
        "boshuAvg30d": 565.8,
        "heikinAvg30d": 4.064
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 444,
        "ouatsu": 411.778,
        "saikou": 9.4,
        "heikin": 3.13,
        "boshuAvg30d": 565.3,
        "heikinAvg30d": 3.669
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 444,
        "ouatsu": 375.692,
        "saikou": 9.4,
        "heikin": 3.68,
        "boshuAvg30d": 565.3,
        "heikinAvg30d": 4.661
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 444,
        "ouatsu": 430.651,
        "saikou": 9.4,
        "heikin": 3.07,
        "boshuAvg30d": 565.3,
        "heikinAvg30d": 4.191
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 442,
        "ouatsu": 495.415,
        "saikou": 9.4,
        "heikin": 2.87,
        "boshuAvg30d": 563.3,
        "heikinAvg30d": 3.923
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 440,
        "ouatsu": 497.206,
        "saikou": 9.39,
        "heikin": 2.85,
        "boshuAvg30d": 560.8,
        "heikinAvg30d": 4.242
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 439,
        "ouatsu": 470.92,
        "saikou": 9.4,
        "heikin": 2.79,
        "boshuAvg30d": 559.3,
        "heikinAvg30d": 4.226
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 232.72,
        "saikou": 3,
        "heikin": 1.89,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 3.052
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 258.746,
        "saikou": 2.99,
        "heikin": 2.13,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 2.853
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 299.369,
        "saikou": 2.99,
        "heikin": 2.21,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 2.894
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 295.526,
        "saikou": 2.99,
        "heikin": 2.12,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 2.967
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 279.621,
        "saikou": 2.99,
        "heikin": 2.25,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.298
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 287.452,
        "saikou": 2.99,
        "heikin": 2.29,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.4
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 309.119,
        "saikou": 2.99,
        "heikin": 2.47,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.216
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 305.319,
        "saikou": 2.99,
        "heikin": 2.32,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.204
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 309.119,
        "saikou": 2.99,
        "heikin": 2.56,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.293
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 309.119,
        "saikou": 2.99,
        "heikin": 2.45,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.191
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 330.164,
        "saikou": 2.99,
        "heikin": 2.34,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.048
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 328.664,
        "saikou": 2.99,
        "heikin": 2.36,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.169
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 312.022,
        "saikou": 3.88,
        "heikin": 2.55,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 3.417
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 304.138,
        "saikou": 3,
        "heikin": 2.17,
        "boshuAvg30d": 161.6,
        "heikinAvg30d": 3.453
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 322.28,
        "saikou": 3.28,
        "heikin": 1.8,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 3.711
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 309.079,
        "saikou": 3.63,
        "heikin": 1.82,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 3.71
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 347.229,
        "saikou": 2.99,
        "heikin": 1.96,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.119
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 290.865,
        "saikou": 4.4,
        "heikin": 2.63,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.2
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 399.103,
        "saikou": 4.88,
        "heikin": 2.51,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.504
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 384.172,
        "saikou": 4.88,
        "heikin": 2.33,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.456
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 408.846,
        "saikou": 4.42,
        "heikin": 2.03,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 4.599
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 388.029,
        "saikou": 3.48,
        "heikin": 1.79,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.605
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 386.529,
        "saikou": 4.88,
        "heikin": 2.32,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.214
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 384.639,
        "saikou": 4.88,
        "heikin": 2.22,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.142
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 389.957,
        "saikou": 4,
        "heikin": 1.75,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 4.093
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 407.846,
        "saikou": 4,
        "heikin": 2.28,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 4.144
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 404.089,
        "saikou": 3.5,
        "heikin": 2.1,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 4.334
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 397.9,
        "saikou": 2.99,
        "heikin": 1.73,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 4.559
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 480.715,
        "saikou": 4.2,
        "heikin": 2.55,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 4.697
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 488.015,
        "saikou": 4.35,
        "heikin": 2.58,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 4.499
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 472.831,
        "saikou": 4.17,
        "heikin": 2.33,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 4.257
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 479.731,
        "saikou": 3.88,
        "heikin": 2.22,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 4.392
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 486.017,
        "saikou": 3.99,
        "heikin": 2.38,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 4.342
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 486.017,
        "saikou": 3.9,
        "heikin": 2.45,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 4.427
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 478.717,
        "saikou": 4.17,
        "heikin": 2.64,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 4.217
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 482.518,
        "saikou": 4.35,
        "heikin": 2.85,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.981
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 474.136,
        "saikou": 4.35,
        "heikin": 2.59,
        "boshuAvg30d": 162.1,
        "heikinAvg30d": 4.289
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 476.134,
        "saikou": 4.35,
        "heikin": 2.77,
        "boshuAvg30d": 162.1,
        "heikinAvg30d": 3.927
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 482.158,
        "saikou": 4.35,
        "heikin": 2.44,
        "boshuAvg30d": 162.1,
        "heikinAvg30d": 3.448
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 413.154,
        "saikou": 3.09,
        "heikin": 2.36,
        "boshuAvg30d": 162.1,
        "heikinAvg30d": 3.44
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 358.529,
        "saikou": 2.97,
        "heikin": 2.64,
        "boshuAvg30d": 162.1,
        "heikinAvg30d": 3.439
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 325.596,
        "saikou": 2.88,
        "heikin": 2.23,
        "boshuAvg30d": 162.1,
        "heikinAvg30d": 3.214
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 308.644,
        "saikou": 2.3,
        "heikin": 2.16,
        "boshuAvg30d": 161.6,
        "heikinAvg30d": 2.962
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 205.308,
        "saikou": 2.8,
        "heikin": 2.17,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 3.627
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 199.868,
        "saikou": 2.88,
        "heikin": 2.66,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 3.523
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 199.868,
        "saikou": 2.29,
        "heikin": 2.1,
        "boshuAvg30d": 162.1,
        "heikinAvg30d": 3.476
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 199.868,
        "saikou": 2.62,
        "heikin": 2.43,
        "boshuAvg30d": 161.1,
        "heikinAvg30d": 3.501
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 198.368,
        "saikou": 2.88,
        "heikin": 2.33,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 3.524
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 3.1,
        "heikin": 2.18,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.611
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.425
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.387
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.79,
        "heikin": 0.7,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.535
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.48,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.147
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 3,
        "heikin": 2.24,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.819
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.457
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.245
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 3.1,
        "heikin": 2.6,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.378
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.044
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.314
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.571
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 3.386
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.59,
        "heikin": 2.59,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.303
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 3.754
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.65,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.638
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 4.617
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 3.2,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 5.532
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.242
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.884
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.908
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
        "saikou": 4.7,
        "heikin": 4.7,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.567
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.75,
        "heikin": 4.75,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.717
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.017
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.871
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.174
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.838
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.954
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.09
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 4.532
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.5,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 4.996
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 3.2,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.549
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.05,
        "heikin": 3.05,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.614
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.88
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.8,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.472
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.8,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.565
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.213
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.348
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.65,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.415
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.198
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.684
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.227
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.48,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.238
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.057
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 3.364
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 3.284
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.941
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 56.985,
        "saikou": 3,
        "heikin": 1.81,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 1.958
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 119.41,
        "saikou": 3,
        "heikin": 2.16,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.23
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 119.39,
        "saikou": 2.95,
        "heikin": 2.19,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.206
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 115.412,
        "saikou": 2.95,
        "heikin": 2.16,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.207
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 111.416,
        "saikou": 3,
        "heikin": 2.17,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.249
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 113.414,
        "saikou": 3,
        "heikin": 2.19,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.368
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.25,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.274
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.24,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.416
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.24,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.003
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.24,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.138
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 117.356,
        "saikou": 3,
        "heikin": 2.33,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.367
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.69,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.144
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.69,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.794
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 123.299,
        "saikou": 3,
        "heikin": 2.26,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 3.774
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.71,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.538
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 97.911,
        "saikou": 3,
        "heikin": 2.71,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 3.833
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.71,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 4.644
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 101.778,
        "saikou": 5,
        "heikin": 3.09,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.098
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 4,
        "heikin": 2.8,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.874
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 103.733,
        "saikou": 10,
        "heikin": 3.06,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.942
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 3.63,
        "heikin": 2.61,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 5.002
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 3.5,
        "heikin": 2.68,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.878
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 3.98,
        "heikin": 2.75,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 4.748
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 4,
        "heikin": 2.78,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.686
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 119.394,
        "saikou": 4,
        "heikin": 2.25,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 5.68
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 99.78,
        "saikou": 2.48,
        "heikin": 2.48,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 4.649
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 99.78,
        "saikou": 2.95,
        "heikin": 2.52,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 4.668
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 101.778,
        "saikou": 2.95,
        "heikin": 2.53,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 4.755
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 5,
        "heikin": 3.21,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 4.691
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 3.21,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 4.321
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4,
        "heikin": 2.61,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.081
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2.95,
        "heikin": 2.52,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.069
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4,
        "heikin": 2.65,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.113
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4,
        "heikin": 2.79,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.365
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 5,
        "heikin": 3.03,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.118
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 103.221,
        "saikou": 4.95,
        "heikin": 2.73,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 4.034
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 3,
        "heikin": 2.59,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 3.932
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 5,
        "heikin": 3.08,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 3.785
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 99.838,
        "saikou": 4.95,
        "heikin": 2.94,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 3.85
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 99.838,
        "saikou": 3,
        "heikin": 2.71,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 3.694
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 97.414,
        "saikou": 2.95,
        "heikin": 2.68,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.327
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 97.414,
        "saikou": 2.87,
        "heikin": 2.46,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.462
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 97.414,
        "saikou": 2.48,
        "heikin": 2.45,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.169
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 95.971,
        "saikou": 2.48,
        "heikin": 2.48,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.318
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.48,
        "heikin": 2.45,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.079
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 99.354,
        "saikou": 2.48,
        "heikin": 2.45,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.127
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 99.354,
        "saikou": 2.48,
        "heikin": 2.45,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 3.349
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 50.079,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.843
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 3,
        "heikin": 1.66,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.996
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.94,
        "heikin": 1.53,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.299
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.9,
        "heikin": 1.5,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.294
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 159.471,
        "saikou": 2.9,
        "heikin": 1.37,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.11
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 159.471,
        "saikou": 3,
        "heikin": 1.52,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.088
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 159.471,
        "saikou": 3,
        "heikin": 1.57,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.177
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 3,
        "heikin": 1.65,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.225
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.9,
        "heikin": 1.51,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.284
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 3.48,
        "heikin": 1.66,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.243
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 3.4,
        "heikin": 2.59,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.385
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 3.57,
        "heikin": 2.77,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.617
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 3.87,
        "heikin": 2.98,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.565
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 178.13,
        "saikou": 4.69,
        "heikin": 3.47,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 3.873
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 178.13,
        "saikou": 3,
        "heikin": 2.31,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 3.379
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 3.72,
        "heikin": 2.89,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.139
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 178.13,
        "saikou": 3.23,
        "heikin": 2.02,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.029
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 197.899,
        "saikou": 4.7,
        "heikin": 3.26,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.98
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 197.899,
        "saikou": 6.12,
        "heikin": 4.1,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 4.05
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 99.678,
        "saikou": 4,
        "heikin": 3.05,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.84
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 86.951,
        "saikou": 4,
        "heikin": 2.79,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 3.418
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 186.066,
        "saikou": 7.41,
        "heikin": 5.48,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.203
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 190.671,
        "saikou": 6.17,
        "heikin": 4.47,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.176
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 198.793,
        "saikou": 4.24,
        "heikin": 3.19,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.126
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 198.793,
        "saikou": 2.89,
        "heikin": 2.35,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.084
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 185.151,
        "saikou": 4.84,
        "heikin": 3.66,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.398
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 196.993,
        "saikou": 5.22,
        "heikin": 3.79,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.283
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 102.754,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.938
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 102.754,
        "saikou": 3.53,
        "heikin": 2.82,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.391
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 252.841,
        "saikou": 2.22,
        "heikin": 1.49,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.58
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 255.981,
        "saikou": 5,
        "heikin": 1.76,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 4.017
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 227.451,
        "saikou": 6.72,
        "heikin": 4.18,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.89
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 192.012,
        "saikou": 6.47,
        "heikin": 4.56,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.158
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 195.141,
        "saikou": 6.72,
        "heikin": 4.64,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.319
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 193.159,
        "saikou": 7.52,
        "heikin": 5.09,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.951
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 195.155,
        "saikou": 6.78,
        "heikin": 4.6,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.588
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 195.155,
        "saikou": 6.78,
        "heikin": 4.62,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.573
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 193.165,
        "saikou": 6.78,
        "heikin": 4.62,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.949
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 195.147,
        "saikou": 6.72,
        "heikin": 4.6,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 8.007
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 195.147,
        "saikou": 6.72,
        "heikin": 4.59,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.682
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 197.137,
        "saikou": 6.17,
        "heikin": 4.27,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.229
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 197.137,
        "saikou": 5.91,
        "heikin": 4.17,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.892
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 197.137,
        "saikou": 5.86,
        "heikin": 4.06,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 6.119
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 197.137,
        "saikou": 5.86,
        "heikin": 4.06,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 5.456
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 197.137,
        "saikou": 5.65,
        "heikin": 3.93,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 5.043
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 197.137,
        "saikou": 5.69,
        "heikin": 3.96,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 4.398
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 195.337,
        "saikou": 4.96,
        "heikin": 3.52,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.941
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 195.337,
        "saikou": 4.71,
        "heikin": 3.37,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.837
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 195.337,
        "saikou": 1.58,
        "heikin": 1.43,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.957
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 202.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.76
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.789
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.804
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.759
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.737
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 39.5,
        "heikinAvg30d": 0.752
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.907
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 212.86,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.882
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.889
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.921
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.923
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 202.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.898
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 167.403,
        "saikou": 1.6,
        "heikin": 1.03,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.902
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 190.403,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.88
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 190.403,
        "saikou": 1.6,
        "heikin": 1.3,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.922
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 167.403,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.804
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 173.403,
        "saikou": 1.6,
        "heikin": 1.18,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.788
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 172.403,
        "saikou": 1.6,
        "heikin": 1.17,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.829
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 218.403,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 1.012
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 212.403,
        "saikou": 1.07,
        "heikin": 0.51,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 1.006
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 212.403,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.964
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 212.403,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.0
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 212.403,
        "saikou": 1.07,
        "heikin": 0.51,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.986
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 213.403,
        "saikou": 1.07,
        "heikin": 0.43,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.983
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 183.403,
        "saikou": 1.6,
        "heikin": 1.21,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.042
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.006
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.83,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.932
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.91,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.933
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.936
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 204.403,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.849
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 137.903,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.926
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 124.903,
        "saikou": 1.6,
        "heikin": 1.27,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.931
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 107.903,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.913
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 161.403,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.857
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 161.403,
        "saikou": 1.6,
        "heikin": 0.86,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.916
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 163.403,
        "saikou": 1.6,
        "heikin": 0.81,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.858
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 163.403,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.851
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 163.403,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.844
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 165.403,
        "saikou": 1.6,
        "heikin": 1.08,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.843
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 165.403,
        "saikou": 1.6,
        "heikin": 1.08,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.871
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 164.403,
        "saikou": 1.7,
        "heikin": 0.8,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.872
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 178.403,
        "saikou": 1.7,
        "heikin": 0.87,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.843
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 211.403,
        "saikou": 1.7,
        "heikin": 0.8,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.694
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 212.403,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.731
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 217.403,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.702
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 216.403,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.669
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 215.403,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.693
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 216.403,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.738
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 165.604,
        "saikou": 5.81,
        "heikin": 4.69,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 4.156
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 171.393,
        "saikou": 4.52,
        "heikin": 3.76,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 4.039
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 185.104,
        "saikou": 4.05,
        "heikin": 3.45,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 3.864
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 184.144,
        "saikou": 3.12,
        "heikin": 2.82,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 3.962
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 186.092,
        "saikou": 3.11,
        "heikin": 2.82,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.849
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 188.081,
        "saikou": 3.12,
        "heikin": 2.81,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.891
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 205.341,
        "saikou": 3.19,
        "heikin": 2.87,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.892
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 201.513,
        "saikou": 3.54,
        "heikin": 3.1,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.928
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 205.341,
        "saikou": 3.55,
        "heikin": 3.1,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 3.916
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 205.341,
        "saikou": 4.54,
        "heikin": 3.74,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 3.976
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 209.341,
        "saikou": 5.48,
        "heikin": 4.37,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 4.0
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 204.065,
        "saikou": 5.64,
        "heikin": 4.5,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 3.793
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 204.065,
        "saikou": 5.59,
        "heikin": 4.41,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 3.761
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 200.213,
        "saikou": 5.81,
        "heikin": 4.59,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 3.641
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 197.213,
        "saikou": 5.81,
        "heikin": 4.54,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 3.721
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 196.415,
        "saikou": 6.05,
        "heikin": 4.67,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 3.711
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 196.415,
        "saikou": 7.21,
        "heikin": 5.5,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 4.031
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 200.415,
        "saikou": 8.33,
        "heikin": 6.95,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 4.827
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 207.581,
        "saikou": 9.93,
        "heikin": 7.13,
        "boshuAvg30d": 176.6,
        "heikinAvg30d": 4.786
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 207.581,
        "saikou": 9.67,
        "heikin": 7.2,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.729
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 204.098,
        "saikou": 8.85,
        "heikin": 6.62,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 4.542
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 192.202,
        "saikou": 8.9,
        "heikin": 6.74,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 4.597
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 180.254,
        "saikou": 8.72,
        "heikin": 6.51,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 4.586
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 180.254,
        "saikou": 8.51,
        "heikin": 6.37,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 4.702
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 179.535,
        "saikou": 7.46,
        "heikin": 5.72,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 4.115
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 179.535,
        "saikou": 7.38,
        "heikin": 5.68,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 4.284
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 179.535,
        "saikou": 8.36,
        "heikin": 6.3,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 4.77
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 175.683,
        "saikou": 9.11,
        "heikin": 6.83,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 5.47
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 184.183,
        "saikou": 9.91,
        "heikin": 7.54,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 6.069
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 201.929,
        "saikou": 10,
        "heikin": 7.64,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 6.658
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 205.929,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.27
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 205.929,
        "saikou": 10,
        "heikin": 8.15,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 7.28
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 205.929,
        "saikou": 10,
        "heikin": 7.94,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 7.335
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 244.94,
        "saikou": 10,
        "heikin": 8.05,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 7.665
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 246.93,
        "saikou": 10,
        "heikin": 7.49,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 7.262
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 244.954,
        "saikou": 10,
        "heikin": 7.48,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 7.489
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 215.643,
        "saikou": 10,
        "heikin": 7.59,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 7.626
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 236.632,
        "saikou": 10,
        "heikin": 7.34,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 7.378
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 202.61,
        "saikou": 9.45,
        "heikin": 7.13,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.708
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 207.599,
        "saikou": 7.86,
        "heikin": 6.24,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.044
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 208.399,
        "saikou": 7.35,
        "heikin": 6.2,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.395
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 216.049,
        "saikou": 7.07,
        "heikin": 5.86,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.572
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 204.153,
        "saikou": 6.92,
        "heikin": 6.56,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.119
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 207.153,
        "saikou": 6.84,
        "heikin": 6.25,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.159
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 200.153,
        "saikou": 6.45,
        "heikin": 5.59,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 4.842
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 203.153,
        "saikou": 6.04,
        "heikin": 5.71,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.103
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 203.153,
        "saikou": 5.69,
        "heikin": 5.36,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.054
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 199.301,
        "saikou": 3.55,
        "heikin": 3.14,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 3.482
      }
    ]
  }
};
