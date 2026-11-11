// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/12〜2026/11/10）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-11",
  "fetchedAt": "2026-11-11",
  "avgWindowLabel": "過去30日平均（2026/10/12〜2026/11/10）",
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
      "boshu": 1316,
      "ouatsu": 1761.281,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1101.6,
      "heikinAvg30d": 2.894
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1316,
      "ouatsu": 1814.294,
      "saikou": 10,
      "heikin": 2.52,
      "boshuAvg30d": 1101.6,
      "heikinAvg30d": 2.855
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1316,
      "ouatsu": 1880.294,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1101.6,
      "heikinAvg30d": 2.767
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1315,
      "ouatsu": 1825.201,
      "saikou": 10,
      "heikin": 2.39,
      "boshuAvg30d": 1101.2,
      "heikinAvg30d": 2.677
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1309,
      "ouatsu": 1870.749,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1097.2,
      "heikinAvg30d": 2.741
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1309,
      "ouatsu": 1825.448,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1096.6,
      "heikinAvg30d": 2.793
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1306,
      "ouatsu": 1810.611,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1093.6,
      "heikinAvg30d": 2.921
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1310,
      "ouatsu": 1772.268,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1096.2,
      "heikinAvg30d": 3.202
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1310,
      "ouatsu": 1715.607,
      "saikou": 10,
      "heikin": 3.01,
      "boshuAvg30d": 1097.6,
      "heikinAvg30d": 3.262
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1312,
      "ouatsu": 1742.568,
      "saikou": 10,
      "heikin": 3.54,
      "boshuAvg30d": 1098.9,
      "heikinAvg30d": 3.306
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1312,
      "ouatsu": 1698.833,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1098.9,
      "heikinAvg30d": 3.364
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1312,
      "ouatsu": 1756.653,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1098.9,
      "heikinAvg30d": 3.395
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1371,
      "ouatsu": 1707.642,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1158.6,
      "heikinAvg30d": 3.476
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1396,
      "ouatsu": 1647.556,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1182.2,
      "heikinAvg30d": 3.416
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1415,
      "ouatsu": 1594.567,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1202.6,
      "heikinAvg30d": 3.23
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1430,
      "ouatsu": 1633.486,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1219.2,
      "heikinAvg30d": 2.919
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1430,
      "ouatsu": 1782.814,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1219.6,
      "heikinAvg30d": 2.842
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1430,
      "ouatsu": 1550.815,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1223.4,
      "heikinAvg30d": 2.794
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1359,
      "ouatsu": 1525.645,
      "saikou": 9.99,
      "heikin": 2.91,
      "boshuAvg30d": 1168.8,
      "heikinAvg30d": 2.823
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1364,
      "ouatsu": 1561.216,
      "saikou": 9.99,
      "heikin": 2.38,
      "boshuAvg30d": 1172.4,
      "heikinAvg30d": 2.841
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1368,
      "ouatsu": 1573.685,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1174.9,
      "heikinAvg30d": 2.817
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1372,
      "ouatsu": 1500.079,
      "saikou": 10,
      "heikin": 1.79,
      "boshuAvg30d": 1176.2,
      "heikinAvg30d": 2.829
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1366,
      "ouatsu": 1568.525,
      "saikou": 10,
      "heikin": 2.17,
      "boshuAvg30d": 1172.2,
      "heikinAvg30d": 2.772
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1366,
      "ouatsu": 1487.773,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1171.5,
      "heikinAvg30d": 2.801
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1347,
      "ouatsu": 1407.567,
      "saikou": 10,
      "heikin": 2.18,
      "boshuAvg30d": 1151.5,
      "heikinAvg30d": 2.651
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1347,
      "ouatsu": 1359.225,
      "saikou": 10,
      "heikin": 2.33,
      "boshuAvg30d": 1151.5,
      "heikinAvg30d": 2.671
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1347,
      "ouatsu": 1504.931,
      "saikou": 9.99,
      "heikin": 1.98,
      "boshuAvg30d": 1151.5,
      "heikinAvg30d": 2.872
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1343,
      "ouatsu": 1306.365,
      "saikou": 9.99,
      "heikin": 2.04,
      "boshuAvg30d": 1148.5,
      "heikinAvg30d": 3.072
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1342,
      "ouatsu": 1343.232,
      "saikou": 9.99,
      "heikin": 2.77,
      "boshuAvg30d": 1146.2,
      "heikinAvg30d": 3.124
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1336,
      "ouatsu": 1450.108,
      "saikou": 9.99,
      "heikin": 2.56,
      "boshuAvg30d": 1140.2,
      "heikinAvg30d": 3.195
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1407,
      "ouatsu": 1536.797,
      "saikou": 10,
      "heikin": 2.85,
      "boshuAvg30d": 1205.0,
      "heikinAvg30d": 3.273
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1407,
      "ouatsu": 1497.032,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1204.7,
      "heikinAvg30d": 3.438
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1407,
      "ouatsu": 1594.1,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1205.0,
      "heikinAvg30d": 3.764
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1405,
      "ouatsu": 1511.402,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1203.7,
      "heikinAvg30d": 3.911
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1403,
      "ouatsu": 1558.909,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1195.4,
      "heikinAvg30d": 3.821
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1398,
      "ouatsu": 1558.592,
      "saikou": 10,
      "heikin": 3.86,
      "boshuAvg30d": 1190.4,
      "heikinAvg30d": 3.817
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1394,
      "ouatsu": 1491.403,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1184.7,
      "heikinAvg30d": 3.632
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1394,
      "ouatsu": 1590.252,
      "saikou": 10,
      "heikin": 3.74,
      "boshuAvg30d": 1184.7,
      "heikinAvg30d": 3.659
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1394,
      "ouatsu": 1720.152,
      "saikou": 10,
      "heikin": 3.51,
      "boshuAvg30d": 1184.7,
      "heikinAvg30d": 3.455
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1392,
      "ouatsu": 1753.706,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1183.7,
      "heikinAvg30d": 3.345
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1385,
      "ouatsu": 1723.054,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1176.1,
      "heikinAvg30d": 3.296
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1385,
      "ouatsu": 1775.027,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1176.1,
      "heikinAvg30d": 3.262
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1296,
      "ouatsu": 1821.575,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1086.4,
      "heikinAvg30d": 3.125
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1299,
      "ouatsu": 1716.085,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1089.4,
      "heikinAvg30d": 3.102
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1298,
      "ouatsu": 1781.905,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1092.7,
      "heikinAvg30d": 3.173
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1291,
      "ouatsu": 1787.511,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1084.1,
      "heikinAvg30d": 3.073
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1283,
      "ouatsu": 1760.589,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1075.7,
      "heikinAvg30d": 3.106
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1275,
      "ouatsu": 1817.702,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1067.7,
      "heikinAvg30d": 2.867
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
        "ouatsu": 45.908,
        "saikou": 9.7,
        "heikin": 4.01,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.885
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 45.908,
        "saikou": 9.7,
        "heikin": 5.92,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 4.132
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 90.463,
        "saikou": 9.91,
        "heikin": 9.02,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.718
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 49.408,
        "saikou": 9.7,
        "heikin": 5.57,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.856
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 93.463,
        "saikou": 9.91,
        "heikin": 9.13,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.027
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 52.408,
        "saikou": 9.7,
        "heikin": 4.79,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 3.66
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 53.908,
        "saikou": 9.7,
        "heikin": 7.18,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 3.774
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 90.383,
        "saikou": 9.91,
        "heikin": 8.81,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.403
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 53.908,
        "saikou": 9.8,
        "heikin": 7.5,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.264
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 86.458,
        "saikou": 9.91,
        "heikin": 8.56,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.202
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 86.458,
        "saikou": 9.91,
        "heikin": 6.62,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.29
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 86.458,
        "saikou": 9.91,
        "heikin": 6.43,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.503
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 47.408,
        "saikou": 9.7,
        "heikin": 4.71,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.509
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 47.408,
        "saikou": 9.7,
        "heikin": 4.69,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.421
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 88.463,
        "saikou": 9.91,
        "heikin": 8.79,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.401
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 47.408,
        "saikou": 9.7,
        "heikin": 6.87,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.522
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 71.963,
        "saikou": 9.91,
        "heikin": 9.45,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.931
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 30.908,
        "saikou": 9.7,
        "heikin": 7.26,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.141
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 71.963,
        "saikou": 9.91,
        "heikin": 8.3,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.333
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 114.908,
        "saikou": 9.7,
        "heikin": 2.84,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.937
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 153.995,
        "saikou": 9.91,
        "heikin": 4.43,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.203
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 110.95,
        "saikou": 8,
        "heikin": 2.44,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.683
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 143.14,
        "saikou": 8,
        "heikin": 3.77,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 4.251
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 144.948,
        "saikou": 8,
        "heikin": 3.41,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 4.162
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 120.95,
        "saikou": 9.44,
        "heikin": 3.31,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 4.059
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 120.95,
        "saikou": 9.44,
        "heikin": 3.34,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.894
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 110.95,
        "saikou": 9,
        "heikin": 2.93,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.746
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 66.918,
        "saikou": 8.5,
        "heikin": 4.01,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.843
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 26.95,
        "saikou": 8,
        "heikin": 8,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 4.625
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 41.95,
        "saikou": 8,
        "heikin": 6.09,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 5.499
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 41.95,
        "saikou": 8,
        "heikin": 7.26,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.759
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 46.918,
        "saikou": 9.8,
        "heikin": 7.66,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 5.458
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 81.86,
        "saikou": 9.91,
        "heikin": 7.23,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 5.966
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 48.908,
        "saikou": 9.8,
        "heikin": 6.77,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 5.605
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 87.328,
        "saikou": 9.91,
        "heikin": 7.68,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 5.082
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 72.328,
        "saikou": 9.91,
        "heikin": 7.8,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 5.206
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 37.408,
        "saikou": 9.8,
        "heikin": 5.99,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.824
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 37.408,
        "saikou": 9.8,
        "heikin": 5.65,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 5.087
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 73.508,
        "saikou": 9.91,
        "heikin": 7.46,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.776
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 86.518,
        "saikou": 9.91,
        "heikin": 7.26,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 5.067
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 49.408,
        "saikou": 9.7,
        "heikin": 4.6,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 4.912
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 85.508,
        "saikou": 9.91,
        "heikin": 6.9,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.492
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 35.418,
        "saikou": 9.8,
        "heikin": 4.26,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.367
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 37.408,
        "saikou": 9.8,
        "heikin": 5.02,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.447
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 68.118,
        "saikou": 9.91,
        "heikin": 7.26,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.476
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 68.118,
        "saikou": 9.91,
        "heikin": 7.37,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 4.107
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 4.78,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.147
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 70.108,
        "saikou": 9.91,
        "heikin": 7.22,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.791
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 111.38,
        "saikou": 5.35,
        "heikin": 3.08,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.535
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 98.81,
        "saikou": 5.03,
        "heikin": 3.01,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.67
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 116.758,
        "saikou": 5.09,
        "heikin": 3.2,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.672
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 118.718,
        "saikou": 5.15,
        "heikin": 3.17,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.698
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 110.84,
        "saikou": 5.15,
        "heikin": 3.11,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.537
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 125.34,
        "saikou": 4.91,
        "heikin": 2.92,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.38
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 91.868,
        "saikou": 5.15,
        "heikin": 2.92,
        "boshuAvg30d": 119.0,
        "heikinAvg30d": 5.538
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 107.868,
        "saikou": 4.89,
        "heikin": 2.68,
        "boshuAvg30d": 119.3,
        "heikinAvg30d": 5.325
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 102.546,
        "saikou": 4.91,
        "heikin": 2.72,
        "boshuAvg30d": 119.0,
        "heikinAvg30d": 5.114
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 98.716,
        "saikou": 4.91,
        "heikin": 2.79,
        "boshuAvg30d": 119.3,
        "heikinAvg30d": 5.275
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 62.716,
        "saikou": 4,
        "heikin": 3.44,
        "boshuAvg30d": 119.3,
        "heikinAvg30d": 5.371
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 77.216,
        "saikou": 4,
        "heikin": 3.04,
        "boshuAvg30d": 119.3,
        "heikinAvg30d": 5.325
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 77.18,
        "saikou": 4.04,
        "heikin": 3.75,
        "boshuAvg30d": 126.3,
        "heikinAvg30d": 5.476
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 75.68,
        "saikou": 7,
        "heikin": 4.05,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 5.357
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 77.216,
        "saikou": 10,
        "heikin": 4.32,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 5.69
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 75.716,
        "saikou": 5.65,
        "heikin": 3.64,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 5.689
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 113.216,
        "saikou": 6.22,
        "heikin": 3.39,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 5.598
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 109.718,
        "saikou": 6.23,
        "heikin": 3.59,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 5.696
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 112.934,
        "saikou": 7.53,
        "heikin": 3.54,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 5.476
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 112.895,
        "saikou": 8.62,
        "heikin": 4.9,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 5.527
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 134.909,
        "saikou": 8.52,
        "heikin": 4.41,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 5.504
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 122.909,
        "saikou": 10,
        "heikin": 3.43,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 5.72
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 124.895,
        "saikou": 10,
        "heikin": 3.53,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 5.681
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 124.895,
        "saikou": 10,
        "heikin": 3.29,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 5.737
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 122.899,
        "saikou": 10,
        "heikin": 5.7,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 5.855
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 122.899,
        "saikou": 10,
        "heikin": 4.8,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 5.835
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 138.893,
        "saikou": 7.49,
        "heikin": 4.41,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 5.167
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 116.223,
        "saikou": 7,
        "heikin": 3.39,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 5.361
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 100.393,
        "saikou": 6.13,
        "heikin": 3.99,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 5.318
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 100.393,
        "saikou": 5.26,
        "heikin": 3.15,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 4.925
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 114.893,
        "saikou": 6,
        "heikin": 3.49,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 5.076
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 78.857,
        "saikou": 5.53,
        "heikin": 3.81,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 4.615
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 76.892,
        "saikou": 5.9,
        "heikin": 3.63,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 4.477
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 75.392,
        "saikou": 4.19,
        "heikin": 3.14,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 4.393
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 78.857,
        "saikou": 7.99,
        "heikin": 3.72,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 4.399
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 77.357,
        "saikou": 4,
        "heikin": 2.43,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 4.081
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 62.641,
        "saikou": 2.5,
        "heikin": 2.19,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 3.658
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 75.556,
        "saikou": 3,
        "heikin": 1.81,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 3.366
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 77.056,
        "saikou": 2.5,
        "heikin": 1.75,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 3.315
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 77.056,
        "saikou": 2.5,
        "heikin": 1.42,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 3.698
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 73.225,
        "saikou": 2.5,
        "heikin": 1.82,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 3.617
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 73.225,
        "saikou": 3.06,
        "heikin": 2.23,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 3.821
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 62.556,
        "saikou": 0.67,
        "heikin": 0.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 3.856
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 61.242,
        "saikou": 0.69,
        "heikin": 0.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 4.019
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 62.556,
        "saikou": 1.86,
        "heikin": 1.26,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 4.039
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 62.556,
        "saikou": 2.5,
        "heikin": 1.79,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 4.612
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 78.422,
        "saikou": 4.11,
        "heikin": 2.44,
        "boshuAvg30d": 39.3,
        "heikinAvg30d": 4.388
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 97.092,
        "saikou": 4.91,
        "heikin": 2.69,
        "boshuAvg30d": 39.0,
        "heikinAvg30d": 5.097
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 553.607,
        "saikou": 3.12,
        "heikin": 1.82,
        "boshuAvg30d": 239.9,
        "heikinAvg30d": 2.87
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 509.128,
        "saikou": 3.36,
        "heikin": 2.06,
        "boshuAvg30d": 239.9,
        "heikinAvg30d": 2.873
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 514.736,
        "saikou": 3.13,
        "heikin": 1.98,
        "boshuAvg30d": 239.9,
        "heikinAvg30d": 2.92
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 497.549,
        "saikou": 3.71,
        "heikin": 1.89,
        "boshuAvg30d": 239.9,
        "heikinAvg30d": 2.643
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 497.333,
        "saikou": 3.84,
        "heikin": 1.91,
        "boshuAvg30d": 238.5,
        "heikinAvg30d": 2.72
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 498.529,
        "saikou": 2.75,
        "heikin": 1.78,
        "boshuAvg30d": 237.9,
        "heikinAvg30d": 2.643
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 493.549,
        "saikou": 3.95,
        "heikin": 1.89,
        "boshuAvg30d": 235.9,
        "heikinAvg30d": 2.668
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 511.059,
        "saikou": 3.09,
        "heikin": 1.83,
        "boshuAvg30d": 237.9,
        "heikinAvg30d": 2.823
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 481.23,
        "saikou": 3.02,
        "heikin": 1.83,
        "boshuAvg30d": 237.9,
        "heikinAvg30d": 3.01
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 452.414,
        "saikou": 2.93,
        "heikin": 1.72,
        "boshuAvg30d": 238.9,
        "heikinAvg30d": 2.806
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 464.622,
        "saikou": 6.62,
        "heikin": 1.97,
        "boshuAvg30d": 238.9,
        "heikinAvg30d": 2.813
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 457.933,
        "saikou": 7.24,
        "heikin": 2.67,
        "boshuAvg30d": 238.9,
        "heikinAvg30d": 3.013
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 447.392,
        "saikou": 7.03,
        "heikin": 3.27,
        "boshuAvg30d": 258.2,
        "heikinAvg30d": 3.207
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 444.012,
        "saikou": 7.02,
        "heikin": 2.91,
        "boshuAvg30d": 266.2,
        "heikinAvg30d": 3.312
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 379.282,
        "saikou": 6.85,
        "heikin": 2.77,
        "boshuAvg30d": 270.9,
        "heikinAvg30d": 3.13
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 439.287,
        "saikou": 6.9,
        "heikin": 2.86,
        "boshuAvg30d": 276.2,
        "heikinAvg30d": 2.932
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 610.39,
        "saikou": 3.32,
        "heikin": 1.88,
        "boshuAvg30d": 276.5,
        "heikinAvg30d": 2.658
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 509.323,
        "saikou": 7.24,
        "heikin": 3.37,
        "boshuAvg30d": 280.4,
        "heikinAvg30d": 2.72
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 517.407,
        "saikou": 7.25,
        "heikin": 1.6,
        "boshuAvg30d": 271.7,
        "heikinAvg30d": 2.413
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 605.939,
        "saikou": 4.93,
        "heikin": 1.84,
        "boshuAvg30d": 271.7,
        "heikinAvg30d": 2.545
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 579.477,
        "saikou": 10,
        "heikin": 2.25,
        "boshuAvg30d": 272.4,
        "heikinAvg30d": 2.529
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 570.485,
        "saikou": 6,
        "heikin": 0.71,
        "boshuAvg30d": 271.7,
        "heikinAvg30d": 2.502
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 296,
        "ouatsu": 561.005,
        "saikou": 3,
        "heikin": 1.06,
        "boshuAvg30d": 269.4,
        "heikinAvg30d": 2.55
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 296,
        "ouatsu": 472.76,
        "saikou": 10,
        "heikin": 3.02,
        "boshuAvg30d": 269.4,
        "heikinAvg30d": 2.679
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 294,
        "ouatsu": 476.396,
        "saikou": 1.93,
        "heikin": 0.67,
        "boshuAvg30d": 266.4,
        "heikinAvg30d": 2.321
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 294,
        "ouatsu": 476.2,
        "saikou": 1.73,
        "heikin": 0.78,
        "boshuAvg30d": 266.4,
        "heikinAvg30d": 2.353
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 294,
        "ouatsu": 493.353,
        "saikou": 0.99,
        "heikin": 0.55,
        "boshuAvg30d": 266.4,
        "heikinAvg30d": 2.656
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 294,
        "ouatsu": 390.453,
        "saikou": 1.38,
        "heikin": 0.74,
        "boshuAvg30d": 266.0,
        "heikinAvg30d": 2.697
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 293,
        "ouatsu": 503.045,
        "saikou": 8.03,
        "heikin": 2.44,
        "boshuAvg30d": 265.0,
        "heikinAvg30d": 2.875
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 293,
        "ouatsu": 560.412,
        "saikou": 4.58,
        "heikin": 2.18,
        "boshuAvg30d": 264.4,
        "heikinAvg30d": 2.635
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 635.402,
        "saikou": 6.31,
        "heikin": 2.23,
        "boshuAvg30d": 262.4,
        "heikinAvg30d": 2.449
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 649.79,
        "saikou": 5.62,
        "heikin": 1.79,
        "boshuAvg30d": 262.0,
        "heikinAvg30d": 2.459
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 648.39,
        "saikou": 6.83,
        "heikin": 2.06,
        "boshuAvg30d": 261.7,
        "heikinAvg30d": 2.468
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 627.321,
        "saikou": 4.21,
        "heikin": 1.97,
        "boshuAvg30d": 261.7,
        "heikinAvg30d": 2.451
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 619.914,
        "saikou": 2.45,
        "heikin": 1.75,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 2.255
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 291,
        "ouatsu": 627.293,
        "saikou": 7.72,
        "heikin": 2.32,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 2.45
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 293,
        "ouatsu": 648.524,
        "saikou": 8.07,
        "heikin": 2.89,
        "boshuAvg30d": 261.4,
        "heikinAvg30d": 2.562
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 293,
        "ouatsu": 627.177,
        "saikou": 7.93,
        "heikin": 2.61,
        "boshuAvg30d": 261.4,
        "heikinAvg30d": 2.466
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 293,
        "ouatsu": 629.442,
        "saikou": 6.88,
        "heikin": 1.64,
        "boshuAvg30d": 261.4,
        "heikinAvg30d": 2.549
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 293,
        "ouatsu": 633.947,
        "saikou": 6.84,
        "heikin": 1.6,
        "boshuAvg30d": 261.7,
        "heikinAvg30d": 2.325
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 292,
        "ouatsu": 647.917,
        "saikou": 7.03,
        "heikin": 1.82,
        "boshuAvg30d": 260.1,
        "heikinAvg30d": 2.329
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 292,
        "ouatsu": 665.774,
        "saikou": 6.63,
        "heikin": 2,
        "boshuAvg30d": 260.1,
        "heikinAvg30d": 2.573
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 291,
        "ouatsu": 665.769,
        "saikou": 6.93,
        "heikin": 1.96,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 2.268
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 291,
        "ouatsu": 650.426,
        "saikou": 6.63,
        "heikin": 2,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 2.235
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 291,
        "ouatsu": 623.477,
        "saikou": 8.09,
        "heikin": 2.05,
        "boshuAvg30d": 262.7,
        "heikinAvg30d": 2.33
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 289,
        "ouatsu": 612.905,
        "saikou": 6.95,
        "heikin": 2.58,
        "boshuAvg30d": 257.7,
        "heikinAvg30d": 2.379
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 287,
        "ouatsu": 603.924,
        "saikou": 7.04,
        "heikin": 3.15,
        "boshuAvg30d": 256.1,
        "heikinAvg30d": 2.861
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 286,
        "ouatsu": 609.687,
        "saikou": 7.2,
        "heikin": 2.56,
        "boshuAvg30d": 254.4,
        "heikinAvg30d": 2.888
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 243,
        "ouatsu": 380.792,
        "saikou": 9.29,
        "heikin": 3,
        "boshuAvg30d": 128.6,
        "heikinAvg30d": 1.661
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 243,
        "ouatsu": 399.031,
        "saikou": 9.29,
        "heikin": 2.53,
        "boshuAvg30d": 128.6,
        "heikinAvg30d": 1.722
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 243,
        "ouatsu": 398.947,
        "saikou": 9.29,
        "heikin": 2.48,
        "boshuAvg30d": 128.6,
        "heikinAvg30d": 1.758
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 402.919,
        "saikou": 9.29,
        "heikin": 2.48,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 1.826
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 242,
        "ouatsu": 388.907,
        "saikou": 9.29,
        "heikin": 2.89,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 1.809
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 386.923,
        "saikou": 9.29,
        "heikin": 2.75,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 1.758
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 408.998,
        "saikou": 9.29,
        "heikin": 2.85,
        "boshuAvg30d": 126.3,
        "heikinAvg30d": 1.639
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 387.608,
        "saikou": 9.29,
        "heikin": 2.6,
        "boshuAvg30d": 126.3,
        "heikinAvg30d": 1.634
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 240,
        "ouatsu": 389.424,
        "saikou": 9.29,
        "heikin": 2.63,
        "boshuAvg30d": 126.9,
        "heikinAvg30d": 1.554
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 240,
        "ouatsu": 373.496,
        "saikou": 9.37,
        "heikin": 3.01,
        "boshuAvg30d": 126.9,
        "heikinAvg30d": 1.576
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 240,
        "ouatsu": 375.486,
        "saikou": 9.37,
        "heikin": 2.55,
        "boshuAvg30d": 126.9,
        "heikinAvg30d": 1.545
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 240,
        "ouatsu": 373.862,
        "saikou": 9.37,
        "heikin": 2.51,
        "boshuAvg30d": 126.9,
        "heikinAvg30d": 1.477
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 377.346,
        "saikou": 9.37,
        "heikin": 2.65,
        "boshuAvg30d": 136.3,
        "heikinAvg30d": 1.724
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 255,
        "ouatsu": 370.046,
        "saikou": 4.94,
        "heikin": 2.27,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.713
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 258,
        "ouatsu": 375.268,
        "saikou": 9.37,
        "heikin": 3.09,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 1.997
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 260,
        "ouatsu": 377.653,
        "saikou": 9.37,
        "heikin": 3.17,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.019
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 260,
        "ouatsu": 343.533,
        "saikou": 9.37,
        "heikin": 3.31,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.035
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 260,
        "ouatsu": 312.444,
        "saikou": 9.49,
        "heikin": 3.27,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.2
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 265,
        "ouatsu": 316.426,
        "saikou": 9.49,
        "heikin": 3.6,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 2.549
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 265,
        "ouatsu": 248.111,
        "saikou": 9.96,
        "heikin": 3.16,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 2.543
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 265,
        "ouatsu": 212.635,
        "saikou": 9.49,
        "heikin": 2.79,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 2.61
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 265,
        "ouatsu": 210.82,
        "saikou": 9.49,
        "heikin": 2.79,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 2.624
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 264,
        "ouatsu": 217.686,
        "saikou": 9.49,
        "heikin": 3.59,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.485
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 263,
        "ouatsu": 209.818,
        "saikou": 9.49,
        "heikin": 4.16,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.559
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 259,
        "ouatsu": 169.329,
        "saikou": 9.49,
        "heikin": 4.33,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.57
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 259,
        "ouatsu": 161.382,
        "saikou": 9.49,
        "heikin": 4.26,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.483
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 259,
        "ouatsu": 204.389,
        "saikou": 9.49,
        "heikin": 2.55,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.415
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 259,
        "ouatsu": 214.326,
        "saikou": 9.49,
        "heikin": 2.75,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.534
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 259,
        "ouatsu": 214.289,
        "saikou": 9.49,
        "heikin": 2.89,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.635
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 259,
        "ouatsu": 212.305,
        "saikou": 9.69,
        "heikin": 3.08,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.546
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 257,
        "ouatsu": 214.289,
        "saikou": 9.69,
        "heikin": 3.51,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 2.704
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 257,
        "ouatsu": 241.995,
        "saikou": 9.69,
        "heikin": 4.29,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 2.765
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 257,
        "ouatsu": 246.651,
        "saikou": 9.69,
        "heikin": 4.13,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 2.771
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 256,
        "ouatsu": 231.155,
        "saikou": 9.69,
        "heikin": 4.78,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 2.886
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 256,
        "ouatsu": 229.176,
        "saikou": 9.69,
        "heikin": 4.7,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 2.725
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 255,
        "ouatsu": 209.982,
        "saikou": 9.69,
        "heikin": 4.4,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 2.528
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 253,
        "ouatsu": 223.278,
        "saikou": 9.69,
        "heikin": 4.5,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 2.24
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 253,
        "ouatsu": 248.05,
        "saikou": 9.69,
        "heikin": 4.48,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 2.18
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 253,
        "ouatsu": 283.559,
        "saikou": 9.69,
        "heikin": 3.7,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 1.869
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 253,
        "ouatsu": 283.643,
        "saikou": 9.69,
        "heikin": 3.87,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 1.773
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 253,
        "ouatsu": 275.728,
        "saikou": 9.69,
        "heikin": 3.49,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 1.661
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 253,
        "ouatsu": 273.744,
        "saikou": 9.27,
        "heikin": 2.76,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 1.668
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 255,
        "ouatsu": 281.563,
        "saikou": 9.27,
        "heikin": 2.76,
        "boshuAvg30d": 139.9,
        "heikinAvg30d": 1.601
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 255,
        "ouatsu": 264.498,
        "saikou": 9.27,
        "heikin": 2.62,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.782
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 255,
        "ouatsu": 262.514,
        "saikou": 9.27,
        "heikin": 2.66,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.787
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 264.498,
        "saikou": 9.27,
        "heikin": 2.75,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 1.903
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 270.618,
        "saikou": 9.27,
        "heikin": 2.82,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 1.766
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 265.234,
        "saikou": 9.27,
        "heikin": 2.74,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 1.865
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 1.93,
        "saikou": 8.95,
        "heikin": 8.95,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.504
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 5.6,
        "heikin": 3.79,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.41
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.15,
        "heikin": 2,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.35
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 8.1,
        "heikin": 5.12,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.373
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 1.93,
        "saikou": 5.45,
        "heikin": 5.45,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.445
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.427
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 5.08,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.789
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 5.4,
        "heikin": 3.65,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 2.17
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 2.267
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 5.77,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 2.42
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 5.6,
        "heikin": 3.74,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 2.587
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.7,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 2.394
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 5.59,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.112
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.9,
        "heikin": 4.3,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.439
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.24,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.976
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 6.05,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.7
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 6.45,
        "heikin": 5.03,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.319
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 4.5,
        "heikin": 3.89,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.267
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 6.03,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.519
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.3,
        "heikin": 4.98,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.951
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.53,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.761
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 7.94,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 5.087
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 7.05,
        "heikin": 5.91,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 3.994
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.2,
        "heikin": 5,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 3.885
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 28.928,
        "saikou": 8.95,
        "heikin": 1.29,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 2.585
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.95,
        "heikin": 5.73,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 2.3
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.25,
        "heikin": 6.1,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 4.329
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 5.8,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.408
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 7.15,
        "heikin": 6.03,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 4.223
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.65,
        "heikin": 4.45,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.903
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 7.58,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 5.183
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 8.25,
        "heikin": 7.74,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 5.992
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 5.15,
        "heikin": 4.79,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 4.967
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 6.46,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 4.692
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 6.7,
        "heikin": 5.43,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 4.788
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.5,
        "heikin": 4.35,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 4.93
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 5.64,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 3.881
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 6.75,
        "heikin": 5.33,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 4.658
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 3.05,
        "heikin": 2.74,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 3.34
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 6.18,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 3.892
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 6.2,
        "heikin": 4.34,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.168
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.65,
        "heikin": 3.5,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.233
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 6.25,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.113
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 6.4,
        "heikin": 4.82,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.972
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.14,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.13
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 8.95,
        "heikin": 5.8,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.842
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.65,
        "heikin": 4.46,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.401
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.43,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.998
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 95.963,
        "saikou": 9.99,
        "heikin": 3.59,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 1.897
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 183.864,
        "saikou": 9,
        "heikin": 1.45,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 1.259
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 186.003,
        "saikou": 8.5,
        "heikin": 0.9,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 1.007
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 180.058,
        "saikou": 1.54,
        "heikin": 0.82,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 1.088
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 205.654,
        "saikou": 9.99,
        "heikin": 2.25,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 1.166
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 185.699,
        "saikou": 9.99,
        "heikin": 2.67,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 1.428
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 152.514,
        "saikou": 9.99,
        "heikin": 3.58,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 1.578
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 1.797
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.9,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 1.689
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.78,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 1.653
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.82,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 1.649
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.71,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 1.649
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 119.124,
        "saikou": 9,
        "heikin": 4.02,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 1.641
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 119.124,
        "saikou": 9,
        "heikin": 3.17,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 1.73
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.75,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 1.943
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.79,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 1.995
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.79,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 1.893
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.67,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 2.489
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 5.39,
        "boshuAvg30d": 188.7,
        "heikinAvg30d": 2.557
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 5.45,
        "boshuAvg30d": 188.7,
        "heikinAvg30d": 2.636
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 170.041,
        "saikou": 9.99,
        "heikin": 3.88,
        "boshuAvg30d": 188.7,
        "heikinAvg30d": 2.548
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 168.191,
        "saikou": 9.99,
        "heikin": 3.89,
        "boshuAvg30d": 187.7,
        "heikinAvg30d": 2.625
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 170.176,
        "saikou": 9.99,
        "heikin": 3.9,
        "boshuAvg30d": 186.4,
        "heikinAvg30d": 2.658
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 170.176,
        "saikou": 9.99,
        "heikin": 3.68,
        "boshuAvg30d": 186.7,
        "heikinAvg30d": 2.359
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 151.142,
        "saikou": 9.5,
        "heikin": 3.51,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 2.129
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 175.197,
        "saikou": 9.99,
        "heikin": 3.37,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 2.184
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 204.393,
        "saikou": 9.99,
        "heikin": 3.31,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 2.663
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 195.637,
        "saikou": 9.99,
        "heikin": 3.28,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 2.525
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 136.801,
        "saikou": 9.99,
        "heikin": 4.84,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 2.738
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 5.38,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 2.423
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 5.38,
        "boshuAvg30d": 184.7,
        "heikinAvg30d": 2.824
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 5.39,
        "boshuAvg30d": 184.7,
        "heikinAvg30d": 3.016
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 98.19,
        "saikou": 9.99,
        "heikin": 5.76,
        "boshuAvg30d": 184.7,
        "heikinAvg30d": 3.007
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 90.212,
        "saikou": 9.99,
        "heikin": 5.1,
        "boshuAvg30d": 184.7,
        "heikinAvg30d": 2.561
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 105.212,
        "saikou": 9.99,
        "heikin": 4.63,
        "boshuAvg30d": 180.4,
        "heikinAvg30d": 2.569
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 105.212,
        "saikou": 9.99,
        "heikin": 4.78,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 2.827
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 103.252,
        "saikou": 9.99,
        "heikin": 4.35,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 2.281
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 99.959,
        "saikou": 9.99,
        "heikin": 4.34,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 2.273
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 111.747,
        "saikou": 9.99,
        "heikin": 4.71,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 2.094
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 4.74,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 2.016
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 111.205,
        "saikou": 9.99,
        "heikin": 4.78,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 2.074
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 111.205,
        "saikou": 9.99,
        "heikin": 4.78,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 2.093
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 158.453,
        "saikou": 9.99,
        "heikin": 3.52,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 2.039
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 182.064,
        "saikou": 9.99,
        "heikin": 3.11,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 2.089
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 201.678,
        "saikou": 9.99,
        "heikin": 2.85,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 2.094
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 195.637,
        "saikou": 9.99,
        "heikin": 2.92,
        "boshuAvg30d": 174.4,
        "heikinAvg30d": 1.946
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 189.92,
        "saikou": 9.99,
        "heikin": 2.8,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 1.764
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 195.784,
        "saikou": 9,
        "heikin": 1.91,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 1.665
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 202.745,
        "saikou": 1.56,
        "heikin": 0.73,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.414
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 202.745,
        "saikou": 1.56,
        "heikin": 1.13,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.586
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 204.545,
        "saikou": 1.56,
        "heikin": 1.12,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.27
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 206.535,
        "saikou": 1.56,
        "heikin": 1.13,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.119
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 204.539,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.209
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 204.539,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.423
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 223.419,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.515
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 185.238,
        "saikou": 1.56,
        "heikin": 1.53,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.811
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 181.983,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.985
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 181.983,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.238
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 181.983,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.078
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 181.983,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.965
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 179.113,
        "saikou": 1.56,
        "heikin": 1.24,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 2.92
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 179.113,
        "saikou": 7,
        "heikin": 2.37,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.926
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 179.113,
        "saikou": 2.15,
        "heikin": 1.79,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.265
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 202.104,
        "saikou": 3.35,
        "heikin": 1.84,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.964
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 173.985,
        "saikou": 2.29,
        "heikin": 1.4,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.994
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 151.809,
        "saikou": 2.29,
        "heikin": 1.33,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.939
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 143.134,
        "saikou": 2.7,
        "heikin": 1.22,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.087
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 149.582,
        "saikou": 2.7,
        "heikin": 1.18,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 2.145
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 149.582,
        "saikou": 7,
        "heikin": 1.28,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 1.735
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 149.582,
        "saikou": 7,
        "heikin": 1.26,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.814
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 195.231,
        "saikou": 7,
        "heikin": 1.09,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.694
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 195.231,
        "saikou": 7,
        "heikin": 1.06,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.792
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 187.277,
        "saikou": 7,
        "heikin": 1.04,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.674
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 142.271,
        "saikou": 7,
        "heikin": 1.25,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.882
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 195.231,
        "saikou": 7,
        "heikin": 1.37,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.901
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 149.582,
        "saikou": 4,
        "heikin": 1.63,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.996
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 149.582,
        "saikou": 4,
        "heikin": 1.69,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.084
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 183.186,
        "saikou": 5.01,
        "heikin": 1.73,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.171
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 170.459,
        "saikou": 5,
        "heikin": 2.11,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.329
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 88.666,
        "saikou": 7,
        "heikin": 2.33,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.536
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 125.501,
        "saikou": 3.86,
        "heikin": 1.86,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.022
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 149.281,
        "saikou": 7.99,
        "heikin": 4.74,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.571
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 149.281,
        "saikou": 6.1,
        "heikin": 4.71,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.803
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 149.281,
        "saikou": 2.29,
        "heikin": 1.97,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.813
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 150.161,
        "saikou": 2.7,
        "heikin": 1.99,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.794
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 150.161,
        "saikou": 2.29,
        "heikin": 1.89,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.732
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 170.051,
        "saikou": 2.29,
        "heikin": 1.99,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.51
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 172.041,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.31
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 172.041,
        "saikou": 2.11,
        "heikin": 2.11,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 3.617
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 172.041,
        "saikou": 2.29,
        "heikin": 1.52,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 3.486
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 175.296,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.563
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 151.927,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.394
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 195.042,
        "saikou": 1.56,
        "heikin": 0.91,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.327
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 213.477,
        "saikou": 1.56,
        "heikin": 0.73,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.895
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 213.477,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.777
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 213.477,
        "saikou": 1.56,
        "heikin": 0.73,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.136
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.38,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.786
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.39,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.749
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.36,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.709
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.36,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.679
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.36,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.675
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.696
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.5,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.77
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 186.8,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.787
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.794
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.807
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.803
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.786
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.915
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.91,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.818
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.89,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.8
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.841
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.827
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.774
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.001
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 0.982
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 103.3,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.01
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 103.3,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.959
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 103.3,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.963
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.1,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.982
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 103.3,
        "saikou": 1.6,
        "heikin": 1.42,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 0.99
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 103.3,
        "saikou": 1.6,
        "heikin": 1.42,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 0.996
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 103.3,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.0
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.007
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.045
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.985
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 1.056
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 2.49,
        "heikin": 0.86,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 1.04
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 2.49,
        "heikin": 0.87,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 1.225
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 1.327
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 142.8,
        "saikou": 3.8,
        "heikin": 0.72,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 1.352
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 42.7,
        "heikinAvg30d": 1.384
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 142.8,
        "saikou": 3.3,
        "heikin": 0.7,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.402
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.37
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.355
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.49,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.388
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.346
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.338
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.75,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.919
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.882
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.836
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.769
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.836
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.817
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 167.613,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.493
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 169.537,
        "saikou": 10,
        "heikin": 6.71,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.11
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 163.571,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.947
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 164.743,
        "saikou": 10,
        "heikin": 6.52,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.798
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 166.74,
        "saikou": 10,
        "heikin": 7.18,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.832
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 166.739,
        "saikou": 10,
        "heikin": 7.3,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.131
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 184.084,
        "saikou": 10,
        "heikin": 7,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.525
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 180.26,
        "saikou": 10,
        "heikin": 6.43,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.162
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 185.121,
        "saikou": 10,
        "heikin": 6.65,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.29
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 228.106,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.333
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 206.173,
        "saikou": 10,
        "heikin": 7.86,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.549
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 257.806,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.459
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 254.808,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 6.32
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 206.902,
        "saikou": 10,
        "heikin": 6.98,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 6.109
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 178.808,
        "saikou": 10,
        "heikin": 6.34,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 5.259
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 174.901,
        "saikou": 10,
        "heikin": 6.22,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 4.354
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 153.31,
        "saikou": 10,
        "heikin": 5.95,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 4.123
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 112.218,
        "saikou": 10,
        "heikin": 4.31,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 3.93
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 131.82,
        "saikou": 6.66,
        "heikin": 4.11,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 3.845
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 97.82,
        "saikou": 2.5,
        "heikin": 1.44,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.767
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 65.818,
        "saikou": 2.25,
        "heikin": 0.95,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 3.709
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 59.914,
        "saikou": 2.12,
        "heikin": 0.96,
        "boshuAvg30d": 181.3,
        "heikinAvg30d": 3.634
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 49.164,
        "saikou": 1,
        "heikin": 0.77,
        "boshuAvg30d": 181.3,
        "heikinAvg30d": 3.382
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 51.174,
        "saikou": 1.24,
        "heikin": 0.77,
        "boshuAvg30d": 181.3,
        "heikinAvg30d": 3.369
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 47.346,
        "saikou": 1,
        "heikin": 0.76,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.338
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 53.098,
        "saikou": 1.05,
        "heikin": 0.76,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.396
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 50.494,
        "saikou": 4,
        "heikin": 1.06,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.922
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 54.455,
        "saikou": 4,
        "heikin": 1.33,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 4.525
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 93.401,
        "saikou": 5.02,
        "heikin": 2.8,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 4.453
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 67.401,
        "saikou": 7.36,
        "heikin": 2.99,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 5.107
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 75.343,
        "saikou": 10,
        "heikin": 3.71,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.455
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 106.345,
        "saikou": 10,
        "heikin": 5.96,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.695
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 145.345,
        "saikou": 10,
        "heikin": 7.3,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 6.403
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 142.405,
        "saikou": 10,
        "heikin": 7.07,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 6.979
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 142.413,
        "saikou": 10,
        "heikin": 7.19,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 7.08
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 158.868,
        "saikou": 10,
        "heikin": 9.64,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 7.006
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 119.411,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.977
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 205.213,
        "saikou": 10,
        "heikin": 8.92,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.991
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 228.061,
        "saikou": 10,
        "heikin": 8.12,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.579
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 229.04,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.3
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 235.259,
        "saikou": 10,
        "heikin": 8.71,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.379
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 235.259,
        "saikou": 10,
        "heikin": 9.69,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.095
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 237.249,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.02
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 163.249,
        "saikou": 10,
        "heikin": 7.38,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 5.864
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 163.249,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.03
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 165.049,
        "saikou": 10,
        "heikin": 7.47,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 5.988
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 165.049,
        "saikou": 10,
        "heikin": 6.86,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 6.055
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 161.049,
        "saikou": 10,
        "heikin": 7.33,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.373
      }
    ]
  }
};
