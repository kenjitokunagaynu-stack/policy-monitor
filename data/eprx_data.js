// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/08〜2026/10/07）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-08",
  "fetchedAt": "2026-10-08",
  "avgWindowLabel": "過去30日平均（2026/09/08〜2026/10/07）",
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
      "boshu": 1086,
      "ouatsu": 1462.369,
      "saikou": 7.17,
      "heikin": 2.99,
      "boshuAvg30d": 1221.1,
      "heikinAvg30d": 2.71
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1469.59,
      "saikou": 6.87,
      "heikin": 2.44,
      "boshuAvg30d": 1221.1,
      "heikinAvg30d": 2.612
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1547.948,
      "saikou": 6.82,
      "heikin": 2.58,
      "boshuAvg30d": 1221.1,
      "heikinAvg30d": 2.645
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1594.689,
      "saikou": 6.69,
      "heikin": 2.43,
      "boshuAvg30d": 1221.1,
      "heikinAvg30d": 2.608
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1585.714,
      "saikou": 6.59,
      "heikin": 2.52,
      "boshuAvg30d": 1216.6,
      "heikinAvg30d": 2.587
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1577.479,
      "saikou": 6.84,
      "heikin": 2.63,
      "boshuAvg30d": 1215.6,
      "heikinAvg30d": 2.675
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1682.463,
      "saikou": 6.88,
      "heikin": 2.64,
      "boshuAvg30d": 1234.9,
      "heikinAvg30d": 2.792
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1609.248,
      "saikou": 7.64,
      "heikin": 3.45,
      "boshuAvg30d": 1236.2,
      "heikinAvg30d": 2.919
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1680.773,
      "saikou": 7.67,
      "heikin": 3.57,
      "boshuAvg30d": 1238.9,
      "heikinAvg30d": 3.015
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1663.278,
      "saikou": 7.92,
      "heikin": 3.82,
      "boshuAvg30d": 1239.2,
      "heikinAvg30d": 3.093
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1667.007,
      "saikou": 7.75,
      "heikin": 3.79,
      "boshuAvg30d": 1239.2,
      "heikinAvg30d": 3.177
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1543.922,
      "saikou": 10,
      "heikin": 4.14,
      "boshuAvg30d": 1239.2,
      "heikinAvg30d": 3.219
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1509.308,
      "saikou": 9,
      "heikin": 4.2,
      "boshuAvg30d": 1303.8,
      "heikinAvg30d": 3.328
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1756.412,
      "saikou": 9.91,
      "heikin": 3.99,
      "boshuAvg30d": 1325.2,
      "heikinAvg30d": 3.125
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1507.223,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1347.8,
      "heikinAvg30d": 2.968
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1572.288,
      "saikou": 10,
      "heikin": 2.29,
      "boshuAvg30d": 1365.5,
      "heikinAvg30d": 2.862
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1577.474,
      "saikou": 10,
      "heikin": 2.5,
      "boshuAvg30d": 1366.3,
      "heikinAvg30d": 3.055
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1602.399,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1366.3,
      "heikinAvg30d": 3.135
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1223,
      "ouatsu": 1655.957,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1339.7,
      "heikinAvg30d": 3.294
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1226,
      "ouatsu": 1671.396,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1343.4,
      "heikinAvg30d": 3.307
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1231,
      "ouatsu": 1672.582,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1350.7,
      "heikinAvg30d": 3.326
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1231,
      "ouatsu": 1591.705,
      "saikou": 10,
      "heikin": 2.3,
      "boshuAvg30d": 1350.7,
      "heikinAvg30d": 3.305
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1228,
      "ouatsu": 1608.129,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1347.7,
      "heikinAvg30d": 3.251
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1227,
      "ouatsu": 1611.386,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1346.7,
      "heikinAvg30d": 3.174
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1207,
      "ouatsu": 1419.098,
      "saikou": 10,
      "heikin": 2.5,
      "boshuAvg30d": 1333.8,
      "heikinAvg30d": 3.078
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1207,
      "ouatsu": 1463.455,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1333.8,
      "heikinAvg30d": 3.076
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1207,
      "ouatsu": 1384.793,
      "saikou": 10,
      "heikin": 2.52,
      "boshuAvg30d": 1330.8,
      "heikinAvg30d": 3.247
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1205,
      "ouatsu": 1457.436,
      "saikou": 10,
      "heikin": 2.51,
      "boshuAvg30d": 1326.1,
      "heikinAvg30d": 3.271
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1202,
      "ouatsu": 1519.449,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1321.6,
      "heikinAvg30d": 3.303
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1196,
      "ouatsu": 1402.617,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1314.8,
      "heikinAvg30d": 3.369
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1500.583,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1345.2,
      "heikinAvg30d": 3.311
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1492.787,
      "saikou": 6.36,
      "heikin": 2.98,
      "boshuAvg30d": 1345.2,
      "heikinAvg30d": 3.498
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1597.958,
      "saikou": 9.91,
      "heikin": 3.8,
      "boshuAvg30d": 1345.5,
      "heikinAvg30d": 3.68
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1580.812,
      "saikou": 10,
      "heikin": 4.55,
      "boshuAvg30d": 1343.6,
      "heikinAvg30d": 3.917
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1683.338,
      "saikou": 10,
      "heikin": 4.54,
      "boshuAvg30d": 1336.0,
      "heikinAvg30d": 3.991
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1847.975,
      "saikou": 10,
      "heikin": 4.39,
      "boshuAvg30d": 1331.4,
      "heikinAvg30d": 4.038
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1843.053,
      "saikou": 10,
      "heikin": 4.5,
      "boshuAvg30d": 1324.1,
      "heikinAvg30d": 4.079
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1885.788,
      "saikou": 9.57,
      "heikin": 4.12,
      "boshuAvg30d": 1324.1,
      "heikinAvg30d": 4.011
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1914.925,
      "saikou": 9.06,
      "heikin": 3.82,
      "boshuAvg30d": 1324.5,
      "heikinAvg30d": 3.904
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1996.724,
      "saikou": 8.81,
      "heikin": 3.79,
      "boshuAvg30d": 1323.5,
      "heikinAvg30d": 3.73
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1873.685,
      "saikou": 8.65,
      "heikin": 3.38,
      "boshuAvg30d": 1317.8,
      "heikinAvg30d": 3.665
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1863.475,
      "saikou": 7.98,
      "heikin": 2.86,
      "boshuAvg30d": 1314.7,
      "heikinAvg30d": 3.603
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1151,
      "ouatsu": 2028.601,
      "saikou": 7.7,
      "heikin": 2.76,
      "boshuAvg30d": 1236.7,
      "heikinAvg30d": 3.416
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1154,
      "ouatsu": 1953.734,
      "saikou": 8.07,
      "heikin": 2.96,
      "boshuAvg30d": 1239.7,
      "heikinAvg30d": 3.526
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1155,
      "ouatsu": 1739.303,
      "saikou": 8.37,
      "heikin": 3.2,
      "boshuAvg30d": 1241.1,
      "heikinAvg30d": 3.365
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1150,
      "ouatsu": 1859.613,
      "saikou": 8.5,
      "heikin": 3.02,
      "boshuAvg30d": 1234.6,
      "heikinAvg30d": 3.242
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1141,
      "ouatsu": 1880.491,
      "saikou": 8.35,
      "heikin": 3.01,
      "boshuAvg30d": 1227.1,
      "heikinAvg30d": 3.227
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1134,
      "ouatsu": 1794.794,
      "saikou": 7.75,
      "heikin": 2.61,
      "boshuAvg30d": 1219.3,
      "heikinAvg30d": 3.007
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
        "boshu": 48,
        "ouatsu": 143.908,
        "saikou": 6.7,
        "heikin": 1.28,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.264
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 156.958,
        "saikou": 5.2,
        "heikin": 0.93,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.015
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 158.058,
        "saikou": 4.35,
        "heikin": 0.91,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.124
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 141.958,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 0.983
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 198.908,
        "saikou": 1.8,
        "heikin": 1.07,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.24
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 181.958,
        "saikou": 3.34,
        "heikin": 1.25,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.454
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 158.908,
        "saikou": 1.81,
        "heikin": 1.62,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.274
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 142.958,
        "saikou": 2.25,
        "heikin": 1.83,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.121
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 193.208,
        "saikou": 1.94,
        "heikin": 1.78,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.366
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 191.258,
        "saikou": 2,
        "heikin": 1.85,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.184
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 144.908,
        "saikou": 4.75,
        "heikin": 2.01,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.283
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 193.208,
        "saikou": 2.19,
        "heikin": 2.03,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.452
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 144.908,
        "saikou": 6.6,
        "heikin": 1.17,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.791
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 223.968,
        "saikou": 9.91,
        "heikin": 3,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.514
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 169.958,
        "saikou": 8.4,
        "heikin": 1.1,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.447
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 175.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.248
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 142.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 0.901
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 142.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 0.978
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 177.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 0.909
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 176.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 0.921
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 225.278,
        "saikou": 9.91,
        "heikin": 3.28,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 0.995
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 136.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.002
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 185.278,
        "saikou": 9.91,
        "heikin": 3.47,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 0.897
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 183.238,
        "saikou": 9.91,
        "heikin": 3.41,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 0.934
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 140.808,
        "saikou": 2.4,
        "heikin": 0.86,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.006
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 185.228,
        "saikou": 9.91,
        "heikin": 3.91,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 142.94,
        "saikou": 8.3,
        "heikin": 1.15,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.314
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 223.328,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.213
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 178.908,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.262
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 142.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.442
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 230.278,
        "saikou": 9.91,
        "heikin": 2.78,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.087
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 142.958,
        "saikou": 4.2,
        "heikin": 1.07,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.936
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 149.328,
        "saikou": 9.91,
        "heikin": 6.88,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.62
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 130.37,
        "saikou": 9.91,
        "heikin": 8.79,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.845
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 85.99,
        "saikou": 8.23,
        "heikin": 8.17,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 2.888
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 130.518,
        "saikou": 8.23,
        "heikin": 8,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.798
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 89.908,
        "saikou": 7.04,
        "heikin": 6.73,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 2.707
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 145.518,
        "saikou": 5.81,
        "heikin": 5.59,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 2.746
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 144.908,
        "saikou": 5.81,
        "heikin": 5.22,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 2.166
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 185.518,
        "saikou": 5.52,
        "heikin": 5.1,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.987
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 142.918,
        "saikou": 4.35,
        "heikin": 3.96,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.944
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 185.518,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.746
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 142.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.345
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 185.518,
        "saikou": 3.23,
        "heikin": 2.99,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.81
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 142.958,
        "saikou": 6.9,
        "heikin": 2.93,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.386
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 155.468,
        "saikou": 8.5,
        "heikin": 3.31,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.473
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 157.358,
        "saikou": 8.35,
        "heikin": 3.17,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.318
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 155.958,
        "saikou": 7.75,
        "heikin": 2.73,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.318
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 75.164,
        "saikou": 5.91,
        "heikin": 5.18,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 7.282
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 75.164,
        "saikou": 6.14,
        "heikin": 5.43,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 7.581
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 91.114,
        "saikou": 5.99,
        "heikin": 5.07,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 7.7
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 93.044,
        "saikou": 6.13,
        "heikin": 5.45,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 7.771
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 91.046,
        "saikou": 6.2,
        "heikin": 5.51,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 7.822
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 91.046,
        "saikou": 6.01,
        "heikin": 5.55,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 7.856
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 106.044,
        "saikou": 6,
        "heikin": 5.54,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 7.851
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 107.544,
        "saikou": 5.94,
        "heikin": 5.19,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 7.812
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 109.543,
        "saikou": 5.96,
        "heikin": 5.22,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 7.804
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 109.543,
        "saikou": 5.8,
        "heikin": 5.22,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 7.776
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 109.543,
        "saikou": 5.71,
        "heikin": 5.05,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 7.841
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 97.543,
        "saikou": 10,
        "heikin": 6.74,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 7.832
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 97.543,
        "saikou": 9,
        "heikin": 6.81,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 7.921
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 96.043,
        "saikou": 7,
        "heikin": 6.67,
        "boshuAvg30d": 174.2,
        "heikinAvg30d": 8.061
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 109.543,
        "saikou": 10,
        "heikin": 7.32,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 8.221
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 120.043,
        "saikou": 10,
        "heikin": 7.39,
        "boshuAvg30d": 183.1,
        "heikinAvg30d": 8.284
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 121.543,
        "saikou": 10,
        "heikin": 7.84,
        "boshuAvg30d": 183.1,
        "heikinAvg30d": 8.506
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 120.043,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 183.1,
        "heikinAvg30d": 8.373
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 121.541,
        "saikou": 10,
        "heikin": 8.57,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 8.195
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 120.191,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 8.305
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 146,
        "ouatsu": 117.586,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 8.298
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 146,
        "ouatsu": 115.59,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 8.361
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 147,
        "ouatsu": 121.543,
        "saikou": 10,
        "heikin": 8.68,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 8.377
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 147,
        "ouatsu": 121.543,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 8.36
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 143,
        "ouatsu": 108.908,
        "saikou": 10,
        "heikin": 8.77,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 8.414
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 143,
        "ouatsu": 98.873,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 8.337
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 143,
        "ouatsu": 100.869,
        "saikou": 10,
        "heikin": 8.06,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 8.068
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 142,
        "ouatsu": 98.939,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 7.828
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 142,
        "ouatsu": 100.937,
        "saikou": 10,
        "heikin": 7.09,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 7.922
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 140,
        "ouatsu": 88.937,
        "saikou": 10,
        "heikin": 5.85,
        "boshuAvg30d": 137.9,
        "heikinAvg30d": 7.311
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 76.937,
        "saikou": 10,
        "heikin": 5.29,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 7.666
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 76.937,
        "saikou": 6.29,
        "heikin": 4.35,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 7.171
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 65.537,
        "saikou": 4.49,
        "heikin": 4.19,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 7.253
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 62.041,
        "saikou": 5.99,
        "heikin": 4.4,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 7.083
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 61.576,
        "saikou": 5.99,
        "heikin": 4.2,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 7.03
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 49.441,
        "saikou": 4.72,
        "heikin": 4.28,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 6.738
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 50.941,
        "saikou": 4.49,
        "heikin": 4.24,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 6.871
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 48.091,
        "saikou": 4.49,
        "heikin": 4.23,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 6.674
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 49.591,
        "saikou": 4.49,
        "heikin": 4.23,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 6.848
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 49.591,
        "saikou": 4.49,
        "heikin": 4.25,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 7.015
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 58.236,
        "saikou": 4,
        "heikin": 3.65,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 7.0
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 45.636,
        "saikou": 3.99,
        "heikin": 3.99,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 7.056
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 126,
        "ouatsu": 87.541,
        "saikou": 5.46,
        "heikin": 4.63,
        "boshuAvg30d": 98.0,
        "heikinAvg30d": 7.2
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 126,
        "ouatsu": 87.541,
        "saikou": 3.99,
        "heikin": 3.91,
        "boshuAvg30d": 98.0,
        "heikinAvg30d": 7.358
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 126,
        "ouatsu": 111.541,
        "saikou": 5.98,
        "heikin": 4.09,
        "boshuAvg30d": 98.0,
        "heikinAvg30d": 7.385
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 125,
        "ouatsu": 98.941,
        "saikou": 4.82,
        "heikin": 4.1,
        "boshuAvg30d": 97.0,
        "heikinAvg30d": 7.337
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 123,
        "ouatsu": 100.871,
        "saikou": 4.94,
        "heikin": 4.16,
        "boshuAvg30d": 95.8,
        "heikinAvg30d": 7.481
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 123,
        "ouatsu": 110.041,
        "saikou": 5.6,
        "heikin": 4.6,
        "boshuAvg30d": 95.0,
        "heikinAvg30d": 7.692
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 432.568,
        "saikou": 6.94,
        "heikin": 3.96,
        "boshuAvg30d": 414.5,
        "heikinAvg30d": 3.538
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 475.883,
        "saikou": 5.98,
        "heikin": 2.86,
        "boshuAvg30d": 414.5,
        "heikinAvg30d": 3.531
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 465.229,
        "saikou": 5.72,
        "heikin": 3.14,
        "boshuAvg30d": 414.5,
        "heikinAvg30d": 3.357
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 491.087,
        "saikou": 6.04,
        "heikin": 2.8,
        "boshuAvg30d": 414.5,
        "heikinAvg30d": 3.36
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 478.044,
        "saikou": 5.96,
        "heikin": 2.82,
        "boshuAvg30d": 412.7,
        "heikinAvg30d": 3.31
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 466.208,
        "saikou": 5.7,
        "heikin": 2.76,
        "boshuAvg30d": 412.5,
        "heikinAvg30d": 3.315
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 478.178,
        "saikou": 5.7,
        "heikin": 2.68,
        "boshuAvg30d": 411.2,
        "heikinAvg30d": 3.339
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 419.533,
        "saikou": 6.87,
        "heikin": 4.54,
        "boshuAvg30d": 412.5,
        "heikinAvg30d": 3.472
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 417.738,
        "saikou": 6.82,
        "heikin": 4.56,
        "boshuAvg30d": 413.2,
        "heikinAvg30d": 3.538
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 408.801,
        "saikou": 6.63,
        "heikin": 4.72,
        "boshuAvg30d": 413.5,
        "heikinAvg30d": 3.637
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 426.488,
        "saikou": 6.4,
        "heikin": 4.58,
        "boshuAvg30d": 413.5,
        "heikinAvg30d": 3.567
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 333.165,
        "saikou": 6.08,
        "heikin": 5.22,
        "boshuAvg30d": 413.5,
        "heikinAvg30d": 3.679
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 357.179,
        "saikou": 6.64,
        "heikin": 5.97,
        "boshuAvg30d": 434.0,
        "heikinAvg30d": 3.877
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 414.283,
        "saikou": 8.63,
        "heikin": 5.57,
        "boshuAvg30d": 442.0,
        "heikinAvg30d": 4.025
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 443.635,
        "saikou": 10,
        "heikin": 4.45,
        "boshuAvg30d": 447.0,
        "heikinAvg30d": 3.793
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 467.514,
        "saikou": 7.03,
        "heikin": 2.58,
        "boshuAvg30d": 452.0,
        "heikinAvg30d": 3.739
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 481.048,
        "saikou": 6.98,
        "heikin": 2.09,
        "boshuAvg30d": 452.0,
        "heikinAvg30d": 3.995
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 462.616,
        "saikou": 7,
        "heikin": 2.45,
        "boshuAvg30d": 452.0,
        "heikinAvg30d": 4.018
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 460.617,
        "saikou": 10,
        "heikin": 3.99,
        "boshuAvg30d": 449.2,
        "heikinAvg30d": 4.266
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 479.043,
        "saikou": 10,
        "heikin": 3.89,
        "boshuAvg30d": 449.2,
        "heikinAvg30d": 4.319
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 427.061,
        "saikou": 10,
        "heikin": 4.77,
        "boshuAvg30d": 449.2,
        "heikinAvg30d": 4.181
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 363.982,
        "saikou": 7.89,
        "heikin": 2.57,
        "boshuAvg30d": 448.2,
        "heikinAvg30d": 4.104
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 381.078,
        "saikou": 7.49,
        "heikin": 2.41,
        "boshuAvg30d": 445.5,
        "heikinAvg30d": 4.086
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 379.178,
        "saikou": 7.25,
        "heikin": 2.41,
        "boshuAvg30d": 445.5,
        "heikinAvg30d": 4.035
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 373.089,
        "saikou": 10,
        "heikin": 3.31,
        "boshuAvg30d": 444.0,
        "heikinAvg30d": 3.895
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 375.085,
        "saikou": 7.68,
        "heikin": 2.93,
        "boshuAvg30d": 444.0,
        "heikinAvg30d": 3.923
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 320.779,
        "saikou": 10,
        "heikin": 3.36,
        "boshuAvg30d": 441.0,
        "heikinAvg30d": 4.024
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 302.286,
        "saikou": 7.49,
        "heikin": 2.47,
        "boshuAvg30d": 440.6,
        "heikinAvg30d": 4.179
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 318.822,
        "saikou": 5.07,
        "heikin": 2.09,
        "boshuAvg30d": 439.6,
        "heikinAvg30d": 4.16
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 336.509,
        "saikou": 6.35,
        "heikin": 2.43,
        "boshuAvg30d": 439.3,
        "heikinAvg30d": 4.042
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 315.028,
        "saikou": 4.9,
        "heikin": 2.27,
        "boshuAvg30d": 438.1,
        "heikinAvg30d": 4.02
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 498.498,
        "saikou": 5.59,
        "heikin": 3.41,
        "boshuAvg30d": 438.1,
        "heikinAvg30d": 3.896
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 503.425,
        "saikou": 5.14,
        "heikin": 3.54,
        "boshuAvg30d": 438.1,
        "heikinAvg30d": 4.183
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 507.237,
        "saikou": 5.64,
        "heikin": 3.55,
        "boshuAvg30d": 438.0,
        "heikinAvg30d": 4.406
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 669.67,
        "saikou": 7.96,
        "heikin": 3.67,
        "boshuAvg30d": 433.9,
        "heikinAvg30d": 4.325
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 664.409,
        "saikou": 4.9,
        "heikin": 3.18,
        "boshuAvg30d": 433.5,
        "heikinAvg30d": 4.267
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 686.907,
        "saikou": 7.51,
        "heikin": 4.6,
        "boshuAvg30d": 435.8,
        "heikinAvg30d": 4.405
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 663.096,
        "saikou": 6.02,
        "heikin": 3.91,
        "boshuAvg30d": 435.8,
        "heikinAvg30d": 4.31
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 646.686,
        "saikou": 5.79,
        "heikin": 3.71,
        "boshuAvg30d": 436.2,
        "heikinAvg30d": 4.272
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 642.906,
        "saikou": 5.4,
        "heikin": 3.53,
        "boshuAvg30d": 436.2,
        "heikinAvg30d": 4.169
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 566.359,
        "saikou": 4.51,
        "heikin": 2.71,
        "boshuAvg30d": 434.2,
        "heikinAvg30d": 4.143
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 578.635,
        "saikou": 4.52,
        "heikin": 2.67,
        "boshuAvg30d": 434.2,
        "heikinAvg30d": 4.11
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 698.599,
        "saikou": 4.2,
        "heikin": 2.4,
        "boshuAvg30d": 433.4,
        "heikinAvg30d": 3.989
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 578.272,
        "saikou": 4.52,
        "heikin": 2.55,
        "boshuAvg30d": 433.4,
        "heikinAvg30d": 4.172
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 421.057,
        "saikou": 5.39,
        "heikin": 2.67,
        "boshuAvg30d": 433.8,
        "heikinAvg30d": 3.859
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 576.264,
        "saikou": 5.33,
        "heikin": 2.81,
        "boshuAvg30d": 431.8,
        "heikinAvg30d": 3.983
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 577.492,
        "saikou": 4.36,
        "heikin": 2.66,
        "boshuAvg30d": 429.8,
        "heikinAvg30d": 4.072
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 568.124,
        "saikou": 4.74,
        "heikin": 2.93,
        "boshuAvg30d": 428.8,
        "heikinAvg30d": 4.038
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 256.295,
        "saikou": 3.17,
        "heikin": 1.99,
        "boshuAvg30d": 74.3,
        "heikinAvg30d": 1.907
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 252.794,
        "saikou": 3.21,
        "heikin": 2.05,
        "boshuAvg30d": 74.3,
        "heikinAvg30d": 1.746
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 274.62,
        "saikou": 3.19,
        "heikin": 1.97,
        "boshuAvg30d": 74.3,
        "heikinAvg30d": 1.815
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 274.62,
        "saikou": 3.16,
        "heikin": 1.78,
        "boshuAvg30d": 74.3,
        "heikinAvg30d": 1.903
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 258.715,
        "saikou": 2.7,
        "heikin": 1.97,
        "boshuAvg30d": 73.3,
        "heikinAvg30d": 1.796
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 260.705,
        "saikou": 2.81,
        "heikin": 1.82,
        "boshuAvg30d": 73.3,
        "heikinAvg30d": 1.823
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 286.36,
        "saikou": 2.68,
        "heikin": 1.74,
        "boshuAvg30d": 73.1,
        "heikinAvg30d": 1.765
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 259.613,
        "saikou": 3.11,
        "heikin": 2.14,
        "boshuAvg30d": 73.1,
        "heikinAvg30d": 1.949
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 265.313,
        "saikou": 3.24,
        "heikin": 2.21,
        "boshuAvg30d": 73.3,
        "heikinAvg30d": 1.997
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 248.313,
        "saikou": 2.75,
        "heikin": 1.83,
        "boshuAvg30d": 73.3,
        "heikinAvg30d": 1.889
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 248.313,
        "saikou": 3.02,
        "heikin": 1.92,
        "boshuAvg30d": 73.3,
        "heikinAvg30d": 1.984
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 203.919,
        "saikou": 3.07,
        "heikin": 1.62,
        "boshuAvg30d": 73.3,
        "heikinAvg30d": 2.008
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 205.419,
        "saikou": 5,
        "heikin": 1.98,
        "boshuAvg30d": 83.1,
        "heikinAvg30d": 2.137
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 205.419,
        "saikou": 5,
        "heikin": 2.83,
        "boshuAvg30d": 86.3,
        "heikinAvg30d": 2.103
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 187.329,
        "saikou": 3.48,
        "heikin": 2.1,
        "boshuAvg30d": 89.3,
        "heikinAvg30d": 2.167
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 142.22,
        "saikou": 3.48,
        "heikin": 2.01,
        "boshuAvg30d": 91.3,
        "heikinAvg30d": 2.055
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 142.22,
        "saikou": 3.48,
        "heikin": 2.17,
        "boshuAvg30d": 91.3,
        "heikinAvg30d": 2.312
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 150.079,
        "saikou": 4.05,
        "heikin": 2.35,
        "boshuAvg30d": 91.3,
        "heikinAvg30d": 2.382
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 148.089,
        "saikou": 3.93,
        "heikin": 2.81,
        "boshuAvg30d": 95.6,
        "heikinAvg30d": 2.621
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 150.079,
        "saikou": 5.16,
        "heikin": 2.97,
        "boshuAvg30d": 95.6,
        "heikinAvg30d": 2.629
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 142.235,
        "saikou": 7.59,
        "heikin": 3.58,
        "boshuAvg30d": 96.3,
        "heikinAvg30d": 2.858
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 142.235,
        "saikou": 7.54,
        "heikin": 3.75,
        "boshuAvg30d": 95.6,
        "heikinAvg30d": 2.907
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 148.151,
        "saikou": 7.99,
        "heikin": 3.55,
        "boshuAvg30d": 94.6,
        "heikinAvg30d": 2.868
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 155.451,
        "saikou": 8.09,
        "heikin": 3.4,
        "boshuAvg30d": 93.6,
        "heikinAvg30d": 2.756
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 125.983,
        "saikou": 7.98,
        "heikin": 3.08,
        "boshuAvg30d": 90.3,
        "heikinAvg30d": 2.668
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 144.262,
        "saikou": 9.73,
        "heikin": 3.99,
        "boshuAvg30d": 90.3,
        "heikinAvg30d": 2.655
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 127.972,
        "saikou": 7.98,
        "heikin": 3.1,
        "boshuAvg30d": 90.3,
        "heikinAvg30d": 2.549
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 127.972,
        "saikou": 7.98,
        "heikin": 3.18,
        "boshuAvg30d": 90.1,
        "heikinAvg30d": 2.555
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 127.972,
        "saikou": 8.98,
        "heikin": 3.49,
        "boshuAvg30d": 89.3,
        "heikinAvg30d": 2.772
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 127.972,
        "saikou": 8.98,
        "heikin": 3.57,
        "boshuAvg30d": 89.3,
        "heikinAvg30d": 2.803
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 200.224,
        "saikou": 3.48,
        "heikin": 3.1,
        "boshuAvg30d": 88.1,
        "heikinAvg30d": 2.538
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 202.214,
        "saikou": 4.1,
        "heikin": 3.46,
        "boshuAvg30d": 88.1,
        "heikinAvg30d": 2.527
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 268.488,
        "saikou": 3.39,
        "heikin": 2.04,
        "boshuAvg30d": 88.1,
        "heikinAvg30d": 2.463
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 271.982,
        "saikou": 5.1,
        "heikin": 2.59,
        "boshuAvg30d": 88.1,
        "heikinAvg30d": 2.652
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 273.972,
        "saikou": 2.76,
        "heikin": 2.57,
        "boshuAvg30d": 88.1,
        "heikinAvg30d": 2.536
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 429.44,
        "saikou": 2.65,
        "heikin": 2.43,
        "boshuAvg30d": 87.9,
        "heikinAvg30d": 2.479
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 434.528,
        "saikou": 2.3,
        "heikin": 2.01,
        "boshuAvg30d": 85.9,
        "heikinAvg30d": 2.313
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 444.375,
        "saikou": 2.15,
        "heikin": 1.72,
        "boshuAvg30d": 85.9,
        "heikinAvg30d": 2.232
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 446.374,
        "saikou": 2.05,
        "heikin": 1.59,
        "boshuAvg30d": 85.9,
        "heikinAvg30d": 2.055
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 446.374,
        "saikou": 2,
        "heikin": 1.66,
        "boshuAvg30d": 85.9,
        "heikinAvg30d": 2.113
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 438.468,
        "saikou": 2.17,
        "heikin": 1.47,
        "boshuAvg30d": 85.9,
        "heikinAvg30d": 2.163
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 436.608,
        "saikou": 2.12,
        "heikin": 1.3,
        "boshuAvg30d": 85.9,
        "heikinAvg30d": 2.171
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 440.534,
        "saikou": 1.93,
        "heikin": 1.09,
        "boshuAvg30d": 86.1,
        "heikinAvg30d": 2.038
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 442.394,
        "saikou": 2.17,
        "heikin": 1.4,
        "boshuAvg30d": 87.1,
        "heikinAvg30d": 2.215
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 409.568,
        "saikou": 2.39,
        "heikin": 1.39,
        "boshuAvg30d": 87.1,
        "heikinAvg30d": 2.271
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 400.759,
        "saikou": 1.97,
        "heikin": 1.21,
        "boshuAvg30d": 86.1,
        "heikinAvg30d": 2.196
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 410.759,
        "saikou": 1.98,
        "heikin": 1.13,
        "boshuAvg30d": 85.1,
        "heikinAvg30d": 2.18
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 402.103,
        "saikou": 2,
        "heikin": 1.26,
        "boshuAvg30d": 82.1,
        "heikinAvg30d": 2.157
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.55,
        "heikin": 0.59,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 0.972
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2,
        "heikin": 0.67,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 1.089
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.7,
        "heikin": 0.61,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 1.058
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 57.928,
        "saikou": 1.85,
        "heikin": 0.49,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 1.192
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.5,
        "heikin": 0.58,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 1.244
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.5,
        "heikin": 0.58,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 0.975
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.2,
        "heikin": 0.7,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 1.225
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.92,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 1.481
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 1.312
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 1.4
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 5.296,
        "saikou": 1.95,
        "heikin": 1.83,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 1.635
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 1.619
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.95,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.806
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.645
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.598
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 38.928,
        "saikou": 2.4,
        "heikin": 0.59,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.635
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.921
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 38.928,
        "saikou": 3.1,
        "heikin": 3.03,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.07
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 38.928,
        "saikou": 3.13,
        "heikin": 3.05,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.52
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 38.928,
        "saikou": 3.9,
        "heikin": 1.97,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.482
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 38.928,
        "saikou": 5.55,
        "heikin": 1.1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 3.503
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 38.928,
        "saikou": 6.96,
        "heikin": 1.22,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.712
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 38.928,
        "saikou": 3.85,
        "heikin": 0.93,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 3.432
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 38.928,
        "saikou": 3.9,
        "heikin": 0.92,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 3.085
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.1,
        "heikin": 3.59,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.303
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 3.35,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.573
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 38.928,
        "saikou": 5.55,
        "heikin": 0.91,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.585
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 38.928,
        "saikou": 2.75,
        "heikin": 0.63,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.398
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 38.928,
        "saikou": 3.79,
        "heikin": 3.76,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.372
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 36.431,
        "saikou": 3.79,
        "heikin": 3.75,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.852
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.1,
        "heikin": 5.1,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.388
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.6,
        "heikin": 5.6,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.935
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.419
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.478
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.332
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 3.186
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.716
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.576
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.816
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.912
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.135
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 2.051
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 1.94
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 2.007
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 1.998,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 1.986
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 1.763
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.634
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.243
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 95.452,
        "saikou": 2.44,
        "heikin": 1.68,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.988
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 97.392,
        "saikou": 2.44,
        "heikin": 1.67,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.651
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 113.042,
        "saikou": 2.44,
        "heikin": 1.39,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.578
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 111.062,
        "saikou": 2.44,
        "heikin": 1.32,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.515
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 111.062,
        "saikou": 2.44,
        "heikin": 1.21,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.487
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 111.062,
        "saikou": 2.44,
        "heikin": 1.34,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 1.621
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 118.949,
        "saikou": 2.44,
        "heikin": 1.41,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.812
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 120.947,
        "saikou": 2.44,
        "heikin": 1.5,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.931
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 120.947,
        "saikou": 2.44,
        "heikin": 1.5,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.876
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.73,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.952
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.74,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.88
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.743
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 101.339,
        "saikou": 2,
        "heikin": 1.75,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 1.887
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 168.835,
        "saikou": 2.44,
        "heikin": 1.25,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 1.81
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 142.894,
        "saikou": 2.44,
        "heikin": 1.37,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 1.939
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 103.689,
        "saikou": 2.44,
        "heikin": 1.86,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 1.972
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 99.341,
        "saikou": 2.44,
        "heikin": 1.92,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.185
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 101.339,
        "saikou": 3.95,
        "heikin": 2.28,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.409
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 143.839,
        "saikou": 3.95,
        "heikin": 2.21,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 2.638
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 142.632,
        "saikou": 3.95,
        "heikin": 2.15,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 2.567
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 138.389,
        "saikou": 5.95,
        "heikin": 2.38,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 2.845
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 141.206,
        "saikou": 5.95,
        "heikin": 2.35,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.824
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 144.701,
        "saikou": 5.95,
        "heikin": 2.38,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 2.789
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 148.748,
        "saikou": 3.95,
        "heikin": 2.13,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 2.521
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 109.803,
        "saikou": 3.11,
        "heikin": 2.17,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.399
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 103.325,
        "saikou": 5.95,
        "heikin": 3.04,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.381
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 105.323,
        "saikou": 5.95,
        "heikin": 3.08,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.753
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 105.323,
        "saikou": 3,
        "heikin": 2.57,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 2.566
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 103.88,
        "saikou": 4.45,
        "heikin": 2.68,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.548
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 105.75,
        "saikou": 3.4,
        "heikin": 2.45,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.526
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 107.193,
        "saikou": 3.95,
        "heikin": 2.36,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.465
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 107.193,
        "saikou": 3.95,
        "heikin": 2.61,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.633
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 107.193,
        "saikou": 3.95,
        "heikin": 2.45,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.525
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 105.195,
        "saikou": 2.67,
        "heikin": 2.25,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.6
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 103.208,
        "saikou": 3.4,
        "heikin": 2.37,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.638
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 88.208,
        "saikou": 2.6,
        "heikin": 2.31,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.668
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 2.3,
        "heikin": 2.02,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.434
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 2,
        "heikin": 1.84,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.493
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 101.339,
        "saikou": 2,
        "heikin": 1.77,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.566
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 101.339,
        "saikou": 2,
        "heikin": 1.86,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 2.498
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 99.354,
        "saikou": 2.44,
        "heikin": 1.71,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 2.448
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 99.354,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.417
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.319
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.94,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.324
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.88,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.377
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 99.341,
        "saikou": 1.97,
        "heikin": 1.65,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.319
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 101.339,
        "saikou": 1.97,
        "heikin": 1.48,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.864
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 84.896,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.024
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 189.152,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.599
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 173.645,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.653
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 175.325,
        "saikou": 2.29,
        "heikin": 1.55,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.754
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 177.36,
        "saikou": 2.29,
        "heikin": 1.53,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.657
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 177.381,
        "saikou": 2.29,
        "heikin": 1.56,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.575
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 192.942,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.71
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 209.801,
        "saikou": 2.29,
        "heikin": 1.96,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.943
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 209.801,
        "saikou": 2.5,
        "heikin": 2.19,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.145
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 209.801,
        "saikou": 4.55,
        "heikin": 3.36,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.23
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 209.801,
        "saikou": 5.56,
        "heikin": 3.9,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.494
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 209.801,
        "saikou": 5.1,
        "heikin": 3.62,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.743
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 209.801,
        "saikou": 5.56,
        "heikin": 4.03,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.804
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 209.801,
        "saikou": 6.32,
        "heikin": 3.94,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 3.074
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 191.917,
        "saikou": 4.55,
        "heikin": 3.47,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 2.274
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.7,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 1.853
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.592
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.31,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.674
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.36,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.859
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.068
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.07,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.052
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 220.889,
        "saikou": 1.56,
        "heikin": 0.63,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 2.221
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 292.033,
        "saikou": 1.56,
        "heikin": 0.55,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.031
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 223.62,
        "saikou": 1.56,
        "heikin": 0.62,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.041
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 219.47,
        "saikou": 1.56,
        "heikin": 0.51,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.051
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 189.621,
        "saikou": 2.29,
        "heikin": 0.8,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.776
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 185.796,
        "saikou": 2.29,
        "heikin": 0.8,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.778
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 179.177,
        "saikou": 2.29,
        "heikin": 1.07,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.039
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 193.755,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 1.804
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 281.597,
        "saikou": 2.29,
        "heikin": 0.9,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 1.802
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 193.755,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.027
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 186.84,
        "saikou": 2.7,
        "heikin": 1.56,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.349
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 2.76,
        "heikin": 1.78,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.714
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 2.7,
        "heikin": 1.86,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.775
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 5.1,
        "heikin": 3.57,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.332
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 6.33,
        "heikin": 4.18,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.73
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 6.29,
        "heikin": 4.18,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.973
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 189.927,
        "saikou": 6.29,
        "heikin": 4.18,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.262
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 189.927,
        "saikou": 6.11,
        "heikin": 4.08,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.27
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 207.811,
        "saikou": 5.1,
        "heikin": 3.42,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.93
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 209.801,
        "saikou": 5.1,
        "heikin": 3.61,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.528
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 209.801,
        "saikou": 6.11,
        "heikin": 4.38,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.388
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 209.801,
        "saikou": 5.56,
        "heikin": 4.05,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 3.136
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 209.801,
        "saikou": 5.35,
        "heikin": 3.82,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.326
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 209.801,
        "saikou": 4.55,
        "heikin": 3.38,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.222
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 209.801,
        "saikou": 5.07,
        "heikin": 3.67,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.035
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 209.801,
        "saikou": 4.22,
        "heikin": 3.17,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.611
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 207.803,
        "saikou": 4.29,
        "heikin": 3.16,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.664
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 207.803,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.802
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 60.543,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.783
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 60.543,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.794
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 60.543,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.784
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 60.543,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.775
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 60.543,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.773
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 60.543,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.782
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 91.543,
        "saikou": 1.7,
        "heikin": 0.74,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.88
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 80,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.884
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 91.543,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.904
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 78.543,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.922
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 78.543,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.904
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 78.543,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.872
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.927
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.902
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 0.79,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.949
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 118.543,
        "saikou": 1.7,
        "heikin": 1.25,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.87
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 147.043,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.88
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 147.043,
        "saikou": 1.7,
        "heikin": 0.89,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.931
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.08,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 1.032
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.002
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.022
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.984
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.026
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.034
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.166
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.08,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.137
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 0.98,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.08
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.08
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.05
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 0.977
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 89.543,
        "saikou": 1.6,
        "heikin": 1.22,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.023
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 88.543,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.06
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 60.543,
        "saikou": 1.7,
        "heikin": 1.58,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.064
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 60.543,
        "saikou": 1.7,
        "heikin": 1.58,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 1.067
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 47.543,
        "saikou": 8.34,
        "heikin": 3.25,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.144
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 47.543,
        "saikou": 2.2,
        "heikin": 1.63,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.086
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.95,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.134
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.95,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.176
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.14
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.155
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 2.2,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.14
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.138
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.795
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.764
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 79.543,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.789
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 92.543,
        "saikou": 1.7,
        "heikin": 1.18,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.783
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.791
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.843
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 186.359,
        "saikou": 7.17,
        "heikin": 5.08,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 3.993
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 154.283,
        "saikou": 6.87,
        "heikin": 4.39,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 3.382
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 187.089,
        "saikou": 6.82,
        "heikin": 5.05,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 3.023
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 187.087,
        "saikou": 6.69,
        "heikin": 5.08,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 2.799
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 187.087,
        "saikou": 6.59,
        "heikin": 4.9,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 2.719
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 190.087,
        "saikou": 6.84,
        "heikin": 5.55,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 2.977
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 209.752,
        "saikou": 6.88,
        "heikin": 5.98,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.241
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 264.924,
        "saikou": 7.64,
        "heikin": 7.03,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.575
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 268.752,
        "saikou": 7.67,
        "heikin": 6.88,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 3.86
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 311.752,
        "saikou": 7.92,
        "heikin": 7.8,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.237
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 342.776,
        "saikou": 7.75,
        "heikin": 7.52,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.403
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 322.476,
        "saikou": 7.98,
        "heikin": 7.35,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.292
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 294.648,
        "saikou": 7.8,
        "heikin": 5.97,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 3.987
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 357.476,
        "saikou": 7.05,
        "heikin": 6.05,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 3.36
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 163.476,
        "saikou": 2.82,
        "heikin": 2.29,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 2.784
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 213.476,
        "saikou": 3.63,
        "heikin": 1.99,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 2.834
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 247.476,
        "saikou": 3.75,
        "heikin": 3.18,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 3.07
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 247.476,
        "saikou": 3.63,
        "heikin": 3.3,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 3.432
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 237.075,
        "saikou": 3.11,
        "heikin": 2.77,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 3.485
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 235.605,
        "saikou": 2.43,
        "heikin": 2.24,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 3.359
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 226.173,
        "saikou": 1.44,
        "heikin": 0.41,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 3.3
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 224.73,
        "saikou": 1.3,
        "heikin": 0.4,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 3.381
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 228.787,
        "saikou": 1.38,
        "heikin": 0.42,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 3.295
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 228.787,
        "saikou": 1.65,
        "heikin": 0.45,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 3.26
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 230.915,
        "saikou": 1.59,
        "heikin": 0.43,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 2.77
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 230.915,
        "saikou": 1.49,
        "heikin": 0.46,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 2.962
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 232.762,
        "saikou": 1.58,
        "heikin": 0.47,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 3.384
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 230.862,
        "saikou": 3.18,
        "heikin": 2.94,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 3.908
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 232.362,
        "saikou": 3.65,
        "heikin": 3.35,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 4.158
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 234.262,
        "saikou": 6.52,
        "heikin": 5.68,
        "boshuAvg30d": 174.9,
        "heikinAvg30d": 4.491
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 290.612,
        "saikou": 7.26,
        "heikin": 5.4,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 4.714
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 180.599,
        "saikou": 6.36,
        "heikin": 4.57,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 5.324
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 247.599,
        "saikou": 8.81,
        "heikin": 6.65,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 5.589
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 247.599,
        "saikou": 10,
        "heikin": 7.94,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 5.872
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 245.534,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.862
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 242.571,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.045
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 238.123,
        "saikou": 10,
        "heikin": 8.36,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 6.036
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 242.062,
        "saikou": 9.57,
        "heikin": 7.98,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.907
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 266.745,
        "saikou": 9.06,
        "heikin": 7.47,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.679
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 309.724,
        "saikou": 8.81,
        "heikin": 6.98,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.224
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 307.078,
        "saikou": 8.65,
        "heikin": 7.7,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.098
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 256.452,
        "saikou": 7.98,
        "heikin": 6.95,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 4.954
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 262.398,
        "saikou": 7.7,
        "heikin": 7.21,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 4.806
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 263.398,
        "saikou": 8.07,
        "heikin": 7.51,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.731
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 261.498,
        "saikou": 8.37,
        "heikin": 7.89,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.821
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 224.498,
        "saikou": 8.13,
        "heikin": 6.59,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.349
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 226.398,
        "saikou": 8.27,
        "heikin": 6.49,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.386
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 167.398,
        "saikou": 7.31,
        "heikin": 4.74,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 3.763
      }
    ]
  }
};
