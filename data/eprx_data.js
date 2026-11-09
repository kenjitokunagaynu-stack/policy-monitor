// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/10〜2026/11/08）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-09",
  "fetchedAt": "2026-11-09",
  "avgWindowLabel": "過去30日平均（2026/10/10〜2026/11/08）",
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
      "boshu": 1356,
      "ouatsu": 1514.087,
      "saikou": 9.99,
      "heikin": 2.24,
      "boshuAvg30d": 1084.9,
      "heikinAvg30d": 2.917
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1356,
      "ouatsu": 1628.031,
      "saikou": 9.99,
      "heikin": 2.1,
      "boshuAvg30d": 1084.9,
      "heikinAvg30d": 2.874
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1356,
      "ouatsu": 1628.083,
      "saikou": 10,
      "heikin": 2.3,
      "boshuAvg30d": 1084.9,
      "heikinAvg30d": 2.782
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1355,
      "ouatsu": 1550.516,
      "saikou": 10,
      "heikin": 2.05,
      "boshuAvg30d": 1084.6,
      "heikinAvg30d": 2.696
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1349,
      "ouatsu": 1431.21,
      "saikou": 10,
      "heikin": 2.25,
      "boshuAvg30d": 1080.8,
      "heikinAvg30d": 2.756
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1349,
      "ouatsu": 1544.512,
      "saikou": 10,
      "heikin": 2.11,
      "boshuAvg30d": 1080.1,
      "heikinAvg30d": 2.83
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1346,
      "ouatsu": 1581.281,
      "saikou": 9.99,
      "heikin": 2.56,
      "boshuAvg30d": 1077.1,
      "heikinAvg30d": 2.978
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1350,
      "ouatsu": 1610.024,
      "saikou": 9.99,
      "heikin": 2.82,
      "boshuAvg30d": 1079.6,
      "heikinAvg30d": 3.238
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1350,
      "ouatsu": 1660.03,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1081.1,
      "heikinAvg30d": 3.295
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1352,
      "ouatsu": 1753.956,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1082.4,
      "heikinAvg30d": 3.372
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1352,
      "ouatsu": 1782.363,
      "saikou": 10,
      "heikin": 3.06,
      "boshuAvg30d": 1082.4,
      "heikinAvg30d": 3.455
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1352,
      "ouatsu": 1768.772,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1082.4,
      "heikinAvg30d": 3.433
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1411,
      "ouatsu": 1910.621,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1142.1,
      "heikinAvg30d": 3.527
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1436,
      "ouatsu": 1859.97,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1165.6,
      "heikinAvg30d": 3.407
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1455,
      "ouatsu": 1781.102,
      "saikou": 10,
      "heikin": 3.83,
      "boshuAvg30d": 1186.1,
      "heikinAvg30d": 3.175
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1470,
      "ouatsu": 1761.494,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1202.9,
      "heikinAvg30d": 2.884
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1470,
      "ouatsu": 1637.753,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1203.2,
      "heikinAvg30d": 2.779
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1470,
      "ouatsu": 1537.998,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1207.1,
      "heikinAvg30d": 2.752
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1399,
      "ouatsu": 1642.748,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1152.6,
      "heikinAvg30d": 2.783
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1404,
      "ouatsu": 1429.339,
      "saikou": 10,
      "heikin": 2.82,
      "boshuAvg30d": 1156.2,
      "heikinAvg30d": 2.833
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1408,
      "ouatsu": 1447.528,
      "saikou": 10,
      "heikin": 2.67,
      "boshuAvg30d": 1158.7,
      "heikinAvg30d": 2.804
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1412,
      "ouatsu": 1527.049,
      "saikou": 10,
      "heikin": 2.85,
      "boshuAvg30d": 1159.7,
      "heikinAvg30d": 2.809
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1406,
      "ouatsu": 1490.563,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1155.9,
      "heikinAvg30d": 2.759
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1406,
      "ouatsu": 1491.649,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1155.2,
      "heikinAvg30d": 2.778
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1387,
      "ouatsu": 1694.57,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1135.1,
      "heikinAvg30d": 2.624
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1387,
      "ouatsu": 1710.385,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1135.1,
      "heikinAvg30d": 2.636
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1387,
      "ouatsu": 1607.52,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1135.1,
      "heikinAvg30d": 2.835
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1383,
      "ouatsu": 1601.289,
      "saikou": 10,
      "heikin": 3.88,
      "boshuAvg30d": 1132.3,
      "heikinAvg30d": 3.005
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1382,
      "ouatsu": 1542.313,
      "saikou": 10,
      "heikin": 4.02,
      "boshuAvg30d": 1129.8,
      "heikinAvg30d": 3.043
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1376,
      "ouatsu": 1535.852,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1123.8,
      "heikinAvg30d": 3.151
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1447,
      "ouatsu": 1497.92,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1188.3,
      "heikinAvg30d": 3.22
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1447,
      "ouatsu": 1509.666,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1187.9,
      "heikinAvg30d": 3.409
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1447,
      "ouatsu": 1451.152,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1188.4,
      "heikinAvg30d": 3.763
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1445,
      "ouatsu": 1443.033,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1187.1,
      "heikinAvg30d": 3.968
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1443,
      "ouatsu": 1416.201,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1178.8,
      "heikinAvg30d": 3.885
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1438,
      "ouatsu": 1513.822,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1173.8,
      "heikinAvg30d": 3.899
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1434,
      "ouatsu": 1715.424,
      "saikou": 10,
      "heikin": 2.85,
      "boshuAvg30d": 1168.1,
      "heikinAvg30d": 3.707
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1434,
      "ouatsu": 1730.007,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1168.1,
      "heikinAvg30d": 3.721
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1434,
      "ouatsu": 1840.465,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1168.1,
      "heikinAvg30d": 3.524
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1432,
      "ouatsu": 1900.364,
      "saikou": 10,
      "heikin": 2.43,
      "boshuAvg30d": 1167.1,
      "heikinAvg30d": 3.377
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1425,
      "ouatsu": 1796.103,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1159.4,
      "heikinAvg30d": 3.342
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1425,
      "ouatsu": 1852.251,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1159.4,
      "heikinAvg30d": 3.317
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1336,
      "ouatsu": 1675.715,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1069.7,
      "heikinAvg30d": 3.202
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1339,
      "ouatsu": 1733.284,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1072.7,
      "heikinAvg30d": 3.171
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1338,
      "ouatsu": 1767.271,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1076.1,
      "heikinAvg30d": 3.22
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1331,
      "ouatsu": 1994.969,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1067.6,
      "heikinAvg30d": 3.065
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1323,
      "ouatsu": 1894.306,
      "saikou": 10,
      "heikin": 3.06,
      "boshuAvg30d": 1059.2,
      "heikinAvg30d": 3.095
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1315,
      "ouatsu": 1846.909,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1051.3,
      "heikinAvg30d": 2.838
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
        "ouatsu": 131.094,
        "saikou": 2.36,
        "heikin": 1.19,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.11
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 164.218,
        "saikou": 6.17,
        "heikin": 1.24,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.212
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 116.968,
        "saikou": 9.8,
        "heikin": 1.37,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.012
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 148.508,
        "saikou": 1.21,
        "heikin": 1.2,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.013
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 59.908,
        "saikou": 9.8,
        "heikin": 1.58,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.239
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 169.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 3.932
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 124.408,
        "saikou": 9.2,
        "heikin": 1.35,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.188
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 98.458,
        "saikou": 9.8,
        "heikin": 2.96,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.503
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 122.708,
        "saikou": 9.8,
        "heikin": 1.76,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.536
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 122.458,
        "saikou": 9.3,
        "heikin": 1.6,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.349
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 99.708,
        "saikou": 3.35,
        "heikin": 1.79,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.695
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 49.458,
        "saikou": 9.8,
        "heikin": 3.17,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.728
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 156.268,
        "saikou": 9.71,
        "heikin": 3.67,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.63
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 115.458,
        "saikou": 5.36,
        "heikin": 3.96,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.545
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 114.708,
        "saikou": 8.67,
        "heikin": 5.06,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.135
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 194.408,
        "saikou": 8.79,
        "heikin": 7.72,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.334
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 237.268,
        "saikou": 10,
        "heikin": 7.97,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.521
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 190.958,
        "saikou": 10,
        "heikin": 9.56,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.825
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 233.963,
        "saikou": 9.3,
        "heikin": 6.04,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 3.917
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 112.958,
        "saikou": 8.6,
        "heikin": 2.73,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.936
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 114.908,
        "saikou": 9.3,
        "heikin": 2.41,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.269
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 154.013,
        "saikou": 7.6,
        "heikin": 2.32,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 3.63
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 114.908,
        "saikou": 9,
        "heikin": 2.59,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 4.292
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 112.958,
        "saikou": 7,
        "heikin": 2.44,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 4.216
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 153.973,
        "saikou": 9.44,
        "heikin": 2.53,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.194
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 154.013,
        "saikou": 9.8,
        "heikin": 2.54,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.048
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 114.908,
        "saikou": 9,
        "heikin": 2.28,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 3.804
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 135.808,
        "saikou": 10,
        "heikin": 8.24,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.503
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 124.908,
        "saikou": 10,
        "heikin": 9.74,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.443
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 174.958,
        "saikou": 10,
        "heikin": 9.65,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 5.238
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 193.058,
        "saikou": 8.25,
        "heikin": 5.88,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.534
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 114.958,
        "saikou": 8.79,
        "heikin": 5.02,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.357
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 96.918,
        "saikou": 9.8,
        "heikin": 7.07,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.927
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 80.023,
        "saikou": 9.8,
        "heikin": 6.54,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.647
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 72.908,
        "saikou": 9.8,
        "heikin": 3.85,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.177
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 50.958,
        "saikou": 9.8,
        "heikin": 4.08,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.164
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 126.973,
        "saikou": 8.79,
        "heikin": 5.95,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.946
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 172.013,
        "saikou": 4.99,
        "heikin": 3.8,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.22
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 132.908,
        "saikou": 4.99,
        "heikin": 3.52,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.019
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 172.013,
        "saikou": 4.99,
        "heikin": 3.43,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.045
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 148.908,
        "saikou": 3.74,
        "heikin": 3.14,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 5.089
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 223.013,
        "saikou": 3.74,
        "heikin": 2.45,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 4.684
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 50.908,
        "saikou": 9.8,
        "heikin": 3.11,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 4.598
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 78.013,
        "saikou": 9.8,
        "heikin": 2.95,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.572
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 112.908,
        "saikou": 4,
        "heikin": 3.65,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.575
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 177.158,
        "saikou": 5.31,
        "heikin": 3.98,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.172
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 165.918,
        "saikou": 4.9,
        "heikin": 4,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.411
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 191.958,
        "saikou": 4.57,
        "heikin": 3.54,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 3.921
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 86.03,
        "saikou": 7.57,
        "heikin": 5.45,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.548
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 73.46,
        "saikou": 7.72,
        "heikin": 4.89,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.715
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 92.758,
        "saikou": 7.72,
        "heikin": 4.87,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.722
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 93.368,
        "saikou": 10,
        "heikin": 4.98,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.738
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 86.84,
        "saikou": 10,
        "heikin": 5.02,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.586
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 101.34,
        "saikou": 10,
        "heikin": 4.56,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.486
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 91.868,
        "saikou": 7.72,
        "heikin": 5,
        "boshuAvg30d": 118.6,
        "heikinAvg30d": 5.565
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 109.218,
        "saikou": 7.57,
        "heikin": 4.53,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.37
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 102.546,
        "saikou": 10,
        "heikin": 4.84,
        "boshuAvg30d": 118.6,
        "heikinAvg30d": 5.16
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 97.366,
        "saikou": 10,
        "heikin": 4.54,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.338
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 98.716,
        "saikou": 7.19,
        "heikin": 4.47,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.448
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 113.216,
        "saikou": 6.7,
        "heikin": 4.17,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.448
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 113.216,
        "saikou": 6.04,
        "heikin": 3.89,
        "boshuAvg30d": 125.9,
        "heikinAvg30d": 5.648
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 111.716,
        "saikou": 5.1,
        "heikin": 3.05,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 5.623
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 113.18,
        "saikou": 4,
        "heikin": 3.13,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 6.031
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 111.68,
        "saikou": 3.78,
        "heikin": 3,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 5.994
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 89.18,
        "saikou": 10,
        "heikin": 4.87,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 5.835
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 75.68,
        "saikou": 9.49,
        "heikin": 4.4,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 5.957
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 99.281,
        "saikou": 10,
        "heikin": 5.26,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 5.749
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 101.211,
        "saikou": 10,
        "heikin": 5.36,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 5.78
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 100.871,
        "saikou": 10,
        "heikin": 5.34,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 5.732
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 99.221,
        "saikou": 10,
        "heikin": 5.54,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 5.927
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 103.176,
        "saikou": 10,
        "heikin": 5.31,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 5.867
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 103.176,
        "saikou": 10,
        "heikin": 5.31,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 5.921
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 101.18,
        "saikou": 10,
        "heikin": 5.14,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 5.964
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 101.18,
        "saikou": 10,
        "heikin": 5.23,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 6.018
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 79.176,
        "saikou": 3,
        "heikin": 2.26,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 5.505
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 70.156,
        "saikou": 3,
        "heikin": 2.25,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 5.687
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 64.676,
        "saikou": 3,
        "heikin": 2.38,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 5.635
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 64.676,
        "saikou": 4,
        "heikin": 2.95,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 5.128
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 79.176,
        "saikou": 10,
        "heikin": 5.11,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 5.208
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 79.176,
        "saikou": 10,
        "heikin": 6.27,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 4.621
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 79.176,
        "saikou": 10,
        "heikin": 6.21,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 4.443
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 77.676,
        "saikou": 9.5,
        "heikin": 6.02,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 4.348
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 80.826,
        "saikou": 10,
        "heikin": 5.42,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 4.308
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 77.676,
        "saikou": 9.5,
        "heikin": 4.52,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 4.127
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 64.61,
        "saikou": 3.1,
        "heikin": 2.36,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 3.763
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 75.68,
        "saikou": 2.5,
        "heikin": 2.07,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 3.499
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 77.18,
        "saikou": 2.5,
        "heikin": 1.97,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 3.452
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 113.216,
        "saikou": 3.8,
        "heikin": 1.95,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 3.864
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 109.261,
        "saikou": 3.91,
        "heikin": 2.11,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 3.765
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 109.261,
        "saikou": 4.46,
        "heikin": 2.22,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 3.946
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 98.716,
        "saikou": 4.85,
        "heikin": 2.78,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 4.033
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 98.716,
        "saikou": 4.96,
        "heikin": 2.88,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 4.15
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 98.716,
        "saikou": 4.71,
        "heikin": 2.66,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 4.189
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 98.716,
        "saikou": 5.15,
        "heikin": 2.9,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 4.701
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 102.53,
        "saikou": 5.55,
        "heikin": 3.2,
        "boshuAvg30d": 38.9,
        "heikinAvg30d": 4.499
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 95.866,
        "saikou": 5.87,
        "heikin": 3.48,
        "boshuAvg30d": 38.6,
        "heikinAvg30d": 5.172
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 431.845,
        "saikou": 1.78,
        "heikin": 0.89,
        "boshuAvg30d": 239.3,
        "heikinAvg30d": 3.064
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 422.477,
        "saikou": 3,
        "heikin": 1.35,
        "boshuAvg30d": 239.3,
        "heikinAvg30d": 3.073
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 424.586,
        "saikou": 10,
        "heikin": 2.99,
        "boshuAvg30d": 239.3,
        "heikinAvg30d": 2.974
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 310.786,
        "saikou": 1.02,
        "heikin": 0.56,
        "boshuAvg30d": 239.3,
        "heikinAvg30d": 2.824
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 314.628,
        "saikou": 1.11,
        "heikin": 0.58,
        "boshuAvg30d": 238.0,
        "heikinAvg30d": 2.878
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 330.257,
        "saikou": 0.98,
        "heikin": 0.53,
        "boshuAvg30d": 237.3,
        "heikinAvg30d": 2.822
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 336.366,
        "saikou": 0.83,
        "heikin": 0.48,
        "boshuAvg30d": 235.3,
        "heikinAvg30d": 2.896
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 397.468,
        "saikou": 7.73,
        "heikin": 0.89,
        "boshuAvg30d": 237.3,
        "heikinAvg30d": 3.028
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 355.208,
        "saikou": 7.62,
        "heikin": 1.35,
        "boshuAvg30d": 237.3,
        "heikinAvg30d": 3.163
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 424.903,
        "saikou": 6.46,
        "heikin": 1.17,
        "boshuAvg30d": 238.3,
        "heikinAvg30d": 3.033
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 442.821,
        "saikou": 7.17,
        "heikin": 2.26,
        "boshuAvg30d": 238.3,
        "heikinAvg30d": 2.973
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 457.611,
        "saikou": 6.99,
        "heikin": 2.86,
        "boshuAvg30d": 238.3,
        "heikinAvg30d": 3.136
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 487.948,
        "saikou": 2.42,
        "heikin": 1.54,
        "boshuAvg30d": 257.5,
        "heikinAvg30d": 3.318
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 524.821,
        "saikou": 6.96,
        "heikin": 2.53,
        "boshuAvg30d": 265.5,
        "heikinAvg30d": 3.415
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 475.901,
        "saikou": 7.18,
        "heikin": 2.94,
        "boshuAvg30d": 270.3,
        "heikinAvg30d": 3.257
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 527.849,
        "saikou": 7.31,
        "heikin": 3.26,
        "boshuAvg30d": 275.6,
        "heikinAvg30d": 2.985
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 401.865,
        "saikou": 8.55,
        "heikin": 2.7,
        "boshuAvg30d": 275.9,
        "heikinAvg30d": 2.725
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 323.494,
        "saikou": 7,
        "heikin": 2.73,
        "boshuAvg30d": 279.8,
        "heikinAvg30d": 2.825
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 329.773,
        "saikou": 4.56,
        "heikin": 2.74,
        "boshuAvg30d": 271.3,
        "heikinAvg30d": 2.531
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 305.439,
        "saikou": 4.71,
        "heikin": 2.77,
        "boshuAvg30d": 271.3,
        "heikinAvg30d": 2.68
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 297.838,
        "saikou": 4.04,
        "heikin": 2.36,
        "boshuAvg30d": 271.9,
        "heikinAvg30d": 2.658
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 318.321,
        "saikou": 4.25,
        "heikin": 2.66,
        "boshuAvg30d": 271.2,
        "heikinAvg30d": 2.638
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 296,
        "ouatsu": 320.16,
        "saikou": 4.25,
        "heikin": 2.82,
        "boshuAvg30d": 268.9,
        "heikinAvg30d": 2.686
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 296,
        "ouatsu": 329.054,
        "saikou": 4.27,
        "heikin": 3.03,
        "boshuAvg30d": 268.9,
        "heikinAvg30d": 2.77
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 294,
        "ouatsu": 439.04,
        "saikou": 8.35,
        "heikin": 2.86,
        "boshuAvg30d": 265.8,
        "heikinAvg30d": 2.43
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 294,
        "ouatsu": 446.915,
        "saikou": 8.15,
        "heikin": 2.67,
        "boshuAvg30d": 265.8,
        "heikinAvg30d": 2.45
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 294,
        "ouatsu": 457.121,
        "saikou": 9.47,
        "heikin": 4,
        "boshuAvg30d": 265.8,
        "heikinAvg30d": 2.675
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 294,
        "ouatsu": 433.427,
        "saikou": 9.53,
        "heikin": 4.14,
        "boshuAvg30d": 265.5,
        "heikinAvg30d": 2.701
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 293,
        "ouatsu": 397.832,
        "saikou": 9.62,
        "heikin": 4.31,
        "boshuAvg30d": 264.5,
        "heikinAvg30d": 2.814
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 293,
        "ouatsu": 327.042,
        "saikou": 9.1,
        "heikin": 3.19,
        "boshuAvg30d": 263.8,
        "heikinAvg30d": 2.641
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 309.375,
        "saikou": 5.2,
        "heikin": 1.98,
        "boshuAvg30d": 261.8,
        "heikinAvg30d": 2.481
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 324.367,
        "saikou": 8.45,
        "heikin": 2.69,
        "boshuAvg30d": 261.4,
        "heikinAvg30d": 2.484
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 309.999,
        "saikou": 8.58,
        "heikin": 2.54,
        "boshuAvg30d": 261.1,
        "heikinAvg30d": 2.487
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 300.974,
        "saikou": 9.17,
        "heikin": 2.78,
        "boshuAvg30d": 261.1,
        "heikinAvg30d": 2.462
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 283.974,
        "saikou": 2.63,
        "heikin": 1.58,
        "boshuAvg30d": 259.1,
        "heikinAvg30d": 2.326
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 291,
        "ouatsu": 432.048,
        "saikou": 9.8,
        "heikin": 4.91,
        "boshuAvg30d": 259.1,
        "heikinAvg30d": 2.39
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 293,
        "ouatsu": 514.074,
        "saikou": 6.12,
        "heikin": 3.6,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 2.53
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 293,
        "ouatsu": 484.021,
        "saikou": 7.19,
        "heikin": 3.49,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 2.396
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 293,
        "ouatsu": 474.094,
        "saikou": 7.18,
        "heikin": 3.39,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 2.497
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 293,
        "ouatsu": 453.112,
        "saikou": 6.92,
        "heikin": 2.51,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.282
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 292,
        "ouatsu": 460.135,
        "saikou": 7.05,
        "heikin": 2.61,
        "boshuAvg30d": 259.5,
        "heikinAvg30d": 2.298
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 292,
        "ouatsu": 458.438,
        "saikou": 6.93,
        "heikin": 2.44,
        "boshuAvg30d": 259.5,
        "heikinAvg30d": 2.565
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 291,
        "ouatsu": 416.889,
        "saikou": 6.55,
        "heikin": 2.73,
        "boshuAvg30d": 259.2,
        "heikinAvg30d": 2.262
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 291,
        "ouatsu": 512.453,
        "saikou": 7.02,
        "heikin": 2.6,
        "boshuAvg30d": 259.2,
        "heikinAvg30d": 2.261
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 291,
        "ouatsu": 456.057,
        "saikou": 7.04,
        "heikin": 3.21,
        "boshuAvg30d": 262.2,
        "heikinAvg30d": 2.294
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 289,
        "ouatsu": 519.733,
        "saikou": 7.27,
        "heikin": 2.71,
        "boshuAvg30d": 257.2,
        "heikinAvg30d": 2.37
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 287,
        "ouatsu": 450.563,
        "saikou": 6.88,
        "heikin": 2.56,
        "boshuAvg30d": 255.5,
        "heikinAvg30d": 2.854
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 286,
        "ouatsu": 413.895,
        "saikou": 7.28,
        "heikin": 2.4,
        "boshuAvg30d": 253.9,
        "heikinAvg30d": 2.922
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 243,
        "ouatsu": 260.22,
        "saikou": 9.29,
        "heikin": 2.37,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 1.617
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 243,
        "ouatsu": 258.32,
        "saikou": 9.29,
        "heikin": 2.48,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 1.642
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 243,
        "ouatsu": 277.543,
        "saikou": 9.29,
        "heikin": 2.92,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 1.678
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 286.883,
        "saikou": 9.29,
        "heikin": 3.34,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 1.734
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 242,
        "ouatsu": 274.772,
        "saikou": 9.29,
        "heikin": 3.34,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 1.716
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 291.039,
        "saikou": 9.29,
        "heikin": 3.13,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 1.67
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 333.939,
        "saikou": 9.29,
        "heikin": 3.41,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 1.54
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 310.649,
        "saikou": 9.29,
        "heikin": 3.27,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 1.548
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 240,
        "ouatsu": 312.465,
        "saikou": 9.29,
        "heikin": 2.94,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 1.483
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 240,
        "ouatsu": 296.537,
        "saikou": 9.37,
        "heikin": 2.88,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 1.513
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 240,
        "ouatsu": 338.492,
        "saikou": 7.87,
        "heikin": 2.93,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 1.483
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 240,
        "ouatsu": 355.825,
        "saikou": 9.37,
        "heikin": 2.86,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 1.419
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 359.309,
        "saikou": 9.37,
        "heikin": 2.72,
        "boshuAvg30d": 128.2,
        "heikinAvg30d": 1.643
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 255,
        "ouatsu": 361.209,
        "saikou": 9.37,
        "heikin": 1.86,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 1.671
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 258,
        "ouatsu": 364.531,
        "saikou": 9.37,
        "heikin": 2.38,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 1.943
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 260,
        "ouatsu": 365.015,
        "saikou": 9.37,
        "heikin": 2.08,
        "boshuAvg30d": 137.5,
        "heikinAvg30d": 2.012
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 260,
        "ouatsu": 396.11,
        "saikou": 9.37,
        "heikin": 2.31,
        "boshuAvg30d": 137.5,
        "heikinAvg30d": 1.996
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 260,
        "ouatsu": 401.683,
        "saikou": 9.49,
        "heikin": 1.9,
        "boshuAvg30d": 137.5,
        "heikinAvg30d": 2.169
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 265,
        "ouatsu": 401.669,
        "saikou": 9.49,
        "heikin": 2.01,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 2.541
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 265,
        "ouatsu": 401.669,
        "saikou": 9.49,
        "heikin": 2.03,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 2.532
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 265,
        "ouatsu": 393.776,
        "saikou": 9.49,
        "heikin": 1.86,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 2.609
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 265,
        "ouatsu": 397.849,
        "saikou": 9.49,
        "heikin": 2.59,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 2.604
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 264,
        "ouatsu": 393.909,
        "saikou": 9.49,
        "heikin": 2.59,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.455
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 263,
        "ouatsu": 390.025,
        "saikou": 9.49,
        "heikin": 2.67,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.509
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 259,
        "ouatsu": 355.126,
        "saikou": 9.49,
        "heikin": 2.9,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.478
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 259,
        "ouatsu": 359.05,
        "saikou": 9.49,
        "heikin": 2.91,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.402
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 259,
        "ouatsu": 378.782,
        "saikou": 9.49,
        "heikin": 2.22,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.399
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 259,
        "ouatsu": 380.766,
        "saikou": 9.49,
        "heikin": 2.52,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.51
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 259,
        "ouatsu": 382.765,
        "saikou": 9.49,
        "heikin": 2.39,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.676
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 259,
        "ouatsu": 380.781,
        "saikou": 9.69,
        "heikin": 2.37,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.592
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 257,
        "ouatsu": 382.765,
        "saikou": 9.69,
        "heikin": 2.32,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.687
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 257,
        "ouatsu": 414.619,
        "saikou": 9.69,
        "heikin": 2.31,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.8
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 257,
        "ouatsu": 411.013,
        "saikou": 9.69,
        "heikin": 2.57,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.777
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 256,
        "ouatsu": 406.487,
        "saikou": 9.69,
        "heikin": 2.91,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 2.863
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 256,
        "ouatsu": 406.487,
        "saikou": 9.69,
        "heikin": 2.86,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 2.662
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 255,
        "ouatsu": 389.287,
        "saikou": 9.69,
        "heikin": 2.61,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 2.504
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 253,
        "ouatsu": 439.292,
        "saikou": 9.69,
        "heikin": 2.72,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 2.196
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 253,
        "ouatsu": 439.292,
        "saikou": 9.69,
        "heikin": 2.72,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 2.132
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 253,
        "ouatsu": 474.809,
        "saikou": 9.69,
        "heikin": 2.5,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.84
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 253,
        "ouatsu": 474.893,
        "saikou": 9.69,
        "heikin": 2.52,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.736
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 253,
        "ouatsu": 466.888,
        "saikou": 9.69,
        "heikin": 2.37,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.643
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 253,
        "ouatsu": 463.004,
        "saikou": 9.27,
        "heikin": 2.47,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.668
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 255,
        "ouatsu": 470.913,
        "saikou": 9.27,
        "heikin": 2.49,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 1.582
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 255,
        "ouatsu": 472.813,
        "saikou": 9.27,
        "heikin": 2.41,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 1.78
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 255,
        "ouatsu": 470.829,
        "saikou": 9.27,
        "heikin": 2.4,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 1.781
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 472.813,
        "saikou": 9.27,
        "heikin": 2.61,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.858
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 472.813,
        "saikou": 9.27,
        "heikin": 2.52,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 1.724
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 465.529,
        "saikou": 9.27,
        "heikin": 2.73,
        "boshuAvg30d": 127.2,
        "heikinAvg30d": 1.818
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 26.93,
        "saikou": 2.75,
        "heikin": 0.56,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.515
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 2.25,
        "heikin": 0.63,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.346
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 26.93,
        "saikou": 2.05,
        "heikin": 0.56,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.367
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 2.45,
        "heikin": 0.7,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.309
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 28.928,
        "saikou": 1.95,
        "heikin": 0.63,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.399
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 26.472,
        "saikou": 1.5,
        "heikin": 0.59,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.391
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 16.31,
        "saikou": 1.85,
        "heikin": 1.69,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.727
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 13.366,
        "saikou": 1.95,
        "heikin": 1.85,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.092
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.147
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 20.554,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.13
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 18.138,
        "saikou": 10,
        "heikin": 8.3,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.382
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.34,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.33
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.45,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.098
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.02,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.098
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 28.928,
        "saikou": 9.59,
        "heikin": 8.72,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.607
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 25.16,
        "saikou": 10,
        "heikin": 8.97,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.447
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.93,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.94
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 20.295,
        "saikou": 10,
        "heikin": 8.73,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.88
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.35,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.392
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.68,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.725
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.53,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 4.602
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.39,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 4.912
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.1,
        "heikin": 4.95,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 3.813
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.1,
        "heikin": 4.95,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 3.706
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.4,
        "heikin": 5.3,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 2.38
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.85,
        "heikin": 4.7,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 2.115
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.15,
        "heikin": 6.05,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 4.124
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.73,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.343
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.25,
        "heikin": 5.1,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 4.029
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.55,
        "heikin": 4.4,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.757
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 6.55,
        "heikin": 6.4,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 4.945
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 7.45,
        "heikin": 7.35,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 5.731
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 5.05,
        "heikin": 4.74,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 4.775
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.45,
        "heikin": 4.25,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 4.507
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.4,
        "heikin": 4.3,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 4.611
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.4,
        "heikin": 4.3,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 4.933
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 2.89,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 3.842
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.45,
        "heikin": 3.99,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 4.512
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.7,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 3.292
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.75,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 3.642
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 2.94,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.112
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.19,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.104
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4.25,
        "heikin": 3.94,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.999
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.8,
        "heikin": 3.55,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.809
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.09,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.09
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.25,
        "heikin": 3,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.72
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 2.35,
        "heikin": 2.35,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.288
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 1.998,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.834
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 39.035,
        "saikou": 9.99,
        "heikin": 8.27,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.443
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 151.721,
        "saikou": 9.99,
        "heikin": 2.89,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.099
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 170.463,
        "saikou": 9,
        "heikin": 1.8,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 0.944
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 161.22,
        "saikou": 9,
        "heikin": 1.94,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 0.972
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 143.337,
        "saikou": 9.99,
        "heikin": 2.75,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 0.997
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 103.349,
        "saikou": 9.99,
        "heikin": 3.91,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 1.248
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 111.236,
        "saikou": 9.99,
        "heikin": 3.99,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 1.398
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 4.23,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 1.599
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 117.132,
        "saikou": 8.43,
        "heikin": 2.37,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.569
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 117.132,
        "saikou": 1.69,
        "heikin": 1.63,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.577
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 117.132,
        "saikou": 1.79,
        "heikin": 1.68,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.554
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 3.55,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.475
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 136.746,
        "saikou": 1.99,
        "heikin": 1.27,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 1.553
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 117.132,
        "saikou": 9,
        "heikin": 2.4,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 1.594
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 111.146,
        "saikou": 9.2,
        "heikin": 3.97,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 1.739
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.54,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 1.752
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.55,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 1.677
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 5.06,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 2.25
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 5.22,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 2.314
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 5.27,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 2.379
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 113.207,
        "saikou": 9.99,
        "heikin": 5.62,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 2.298
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 111.357,
        "saikou": 9.99,
        "heikin": 5.66,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 2.426
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 111.899,
        "saikou": 9.99,
        "heikin": 5.64,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 2.466
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 111.899,
        "saikou": 9.99,
        "heikin": 5.3,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 2.17
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 113.194,
        "saikou": 9.99,
        "heikin": 5.17,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 1.931
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 115.192,
        "saikou": 9.99,
        "heikin": 5.23,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 1.922
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 5.52,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 2.363
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 5.22,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 2.299
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 5.35,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 2.458
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 162.395,
        "saikou": 9.99,
        "heikin": 3.87,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 2.237
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 5.22,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 2.588
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 102.132,
        "saikou": 9.99,
        "heikin": 5.56,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 2.778
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 102.132,
        "saikou": 9.99,
        "heikin": 5.56,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 2.754
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.91,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 2.371
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 107.279,
        "saikou": 9.99,
        "heikin": 4.42,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 2.402
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.86,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 2.656
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 107.743,
        "saikou": 9.99,
        "heikin": 4.53,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 2.103
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 105.893,
        "saikou": 9.99,
        "heikin": 4.48,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 2.09
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 4.24,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 1.919
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 4.24,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 1.839
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 115.147,
        "saikou": 9.99,
        "heikin": 4.37,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 1.863
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 115.147,
        "saikou": 9.99,
        "heikin": 4.38,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 1.893
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 4.31,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 1.856
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 4.28,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 1.895
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 4.28,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 1.893
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 135.55,
        "saikou": 9.99,
        "heikin": 3.77,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 1.755
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 111.415,
        "saikou": 9.99,
        "heikin": 4.17,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 1.562
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 101.595,
        "saikou": 5,
        "heikin": 2.5,
        "boshuAvg30d": 162.3,
        "heikinAvg30d": 1.602
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 143,
        "ouatsu": 189.461,
        "saikou": 7.99,
        "heikin": 2.15,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.4
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 143,
        "ouatsu": 177.511,
        "saikou": 7.99,
        "heikin": 1.85,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.572
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 143,
        "ouatsu": 179.311,
        "saikou": 7.99,
        "heikin": 1.88,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.256
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 143,
        "ouatsu": 181.301,
        "saikou": 7.99,
        "heikin": 1.87,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.087
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 143,
        "ouatsu": 181.301,
        "saikou": 7.99,
        "heikin": 1.87,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.182
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 143,
        "ouatsu": 181.301,
        "saikou": 7.99,
        "heikin": 1.89,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.417
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 143,
        "ouatsu": 200.153,
        "saikou": 8.6,
        "heikin": 2.42,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.501
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 144,
        "ouatsu": 212.103,
        "saikou": 8.6,
        "heikin": 2.64,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 2.809
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 144,
        "ouatsu": 212.103,
        "saikou": 8.6,
        "heikin": 2.61,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 2.979
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 144,
        "ouatsu": 211.103,
        "saikou": 4.09,
        "heikin": 2.52,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.326
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 144,
        "ouatsu": 211.103,
        "saikou": 5.6,
        "heikin": 3.01,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.208
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 144,
        "ouatsu": 211.103,
        "saikou": 8.6,
        "heikin": 2.43,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 2.998
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 146,
        "ouatsu": 211.103,
        "saikou": 4.64,
        "heikin": 2.72,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 2.999
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 147,
        "ouatsu": 211.103,
        "saikou": 8.6,
        "heikin": 3.67,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.876
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 147,
        "ouatsu": 211.103,
        "saikou": 8.35,
        "heikin": 3.85,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 2.18
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 148,
        "ouatsu": 153.631,
        "saikou": 6.78,
        "heikin": 2.15,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.888
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 148,
        "ouatsu": 153.631,
        "saikou": 6.78,
        "heikin": 2.11,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.922
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 148,
        "ouatsu": 153.631,
        "saikou": 6.78,
        "heikin": 2.11,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.876
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 133.749,
        "saikou": 6.78,
        "heikin": 2.2,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.024
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 152,
        "ouatsu": 133.749,
        "saikou": 6.78,
        "heikin": 2.3,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.091
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 153,
        "ouatsu": 133.749,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.679
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 154,
        "ouatsu": 133.749,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 1.757
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 154,
        "ouatsu": 133.749,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 1.602
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 154,
        "ouatsu": 133.749,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 1.727
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 151,
        "ouatsu": 196.019,
        "saikou": 2.29,
        "heikin": 1.98,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.601
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 151,
        "ouatsu": 196.019,
        "saikou": 6.78,
        "heikin": 2.18,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.795
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 151,
        "ouatsu": 133.749,
        "saikou": 6.78,
        "heikin": 2.33,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.824
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 151,
        "ouatsu": 133.749,
        "saikou": 6.78,
        "heikin": 2.55,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.922
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 151,
        "ouatsu": 133.749,
        "saikou": 6.78,
        "heikin": 2.51,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.995
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 150,
        "ouatsu": 133.749,
        "saikou": 6.78,
        "heikin": 2.54,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.081
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 150,
        "ouatsu": 133.749,
        "saikou": 8.6,
        "heikin": 2.47,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.239
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 150,
        "ouatsu": 133.749,
        "saikou": 5.16,
        "heikin": 1.93,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.492
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 150,
        "ouatsu": 133.749,
        "saikou": 6.5,
        "heikin": 2.56,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.0
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 150,
        "ouatsu": 70.281,
        "saikou": 2.29,
        "heikin": 2.24,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.725
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 150,
        "ouatsu": 70.281,
        "saikou": 8.6,
        "heikin": 3.95,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.918
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 150,
        "ouatsu": 70.281,
        "saikou": 8.6,
        "heikin": 3.52,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.989
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 150,
        "ouatsu": 69.291,
        "saikou": 2.7,
        "heikin": 2.24,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.998
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 150,
        "ouatsu": 69.291,
        "saikou": 2.29,
        "heikin": 2.23,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.924
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 150,
        "ouatsu": 152.641,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.72
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 150,
        "ouatsu": 154.631,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.498
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 149,
        "ouatsu": 154.631,
        "saikou": 7.99,
        "heikin": 2.14,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.813
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 149,
        "ouatsu": 154.631,
        "saikou": 7.99,
        "heikin": 2.14,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.681
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 154.631,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.748
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 154.631,
        "saikou": 7.99,
        "heikin": 2.2,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.567
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 212.103,
        "saikou": 7.99,
        "heikin": 3.03,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.471
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 147,
        "ouatsu": 212.103,
        "saikou": 3.25,
        "heikin": 2.15,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 2.964
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 146,
        "ouatsu": 212.103,
        "saikou": 3.25,
        "heikin": 2.2,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.831
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 146,
        "ouatsu": 199.102,
        "saikou": 3.42,
        "heikin": 2.34,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.111
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.784
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.738
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.694
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.49,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.678
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.68
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.687
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.74
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 186.8,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.744
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.777
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.826
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.819
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.43,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.768
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 148.843,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.95
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 1.3,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.815
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 96.343,
        "saikou": 1.73,
        "heikin": 1.61,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.752
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 96.343,
        "saikou": 5.63,
        "heikin": 2.08,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.78
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 96.343,
        "saikou": 7.36,
        "heikin": 2.32,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.782
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 148.843,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.805
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.036
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 0.992
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.032
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.67,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.976
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.986
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.71,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.993
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.62,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.008
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.012
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.021
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.03
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.96,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.063
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.83,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.012
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.14,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 1.064
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 1.067
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 1.273
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 1.393
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 7.23,
        "heikin": 1.19,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 1.404
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 3.99,
        "heikin": 0.94,
        "boshuAvg30d": 42.7,
        "heikinAvg30d": 1.545
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 3.3,
        "heikin": 0.7,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.511
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.488
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.55,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.426
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.448
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.412
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.402
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.975
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.924
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.88
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.03,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.794
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.867
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.83
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 148.129,
        "saikou": 9.94,
        "heikin": 5.19,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.308
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 150.053,
        "saikou": 6.9,
        "heikin": 3.89,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.029
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 138.181,
        "saikou": 2.83,
        "heikin": 2.02,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.927
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 138.179,
        "saikou": 4.83,
        "heikin": 3.16,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.757
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 140.153,
        "saikou": 5.96,
        "heikin": 3.82,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.762
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 140.153,
        "saikou": 6.11,
        "heikin": 3.89,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.07
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 168.658,
        "saikou": 7.59,
        "heikin": 4.65,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.476
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 164.83,
        "saikou": 8.8,
        "heikin": 5.38,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.115
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 235.597,
        "saikou": 9.87,
        "heikin": 6.93,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.182
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 265.56,
        "saikou": 10,
        "heikin": 7.27,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.319
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 257.91,
        "saikou": 10,
        "heikin": 7.25,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.611
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 262.156,
        "saikou": 10,
        "heikin": 7.28,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.479
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 293.26,
        "saikou": 10,
        "heikin": 7.39,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 6.297
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 293.26,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 5.842
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 265.262,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 4.933
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 176.262,
        "saikou": 10,
        "heikin": 1.68,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 4.165
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 129.282,
        "saikou": 10,
        "heikin": 4.63,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 3.888
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 106.282,
        "saikou": 10,
        "heikin": 2.99,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 3.741
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 155.91,
        "saikou": 10,
        "heikin": 1.56,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 3.764
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 85.91,
        "saikou": 10,
        "heikin": 2.33,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.657
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 121.908,
        "saikou": 10,
        "heikin": 4.52,
        "boshuAvg30d": 180.5,
        "heikinAvg30d": 3.464
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 107.268,
        "saikou": 10,
        "heikin": 4.47,
        "boshuAvg30d": 181.5,
        "heikinAvg30d": 3.426
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 107.491,
        "saikou": 10,
        "heikin": 4.86,
        "boshuAvg30d": 181.5,
        "heikinAvg30d": 3.22
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 105.517,
        "saikou": 10,
        "heikin": 4.92,
        "boshuAvg30d": 181.5,
        "heikinAvg30d": 3.208
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 130.767,
        "saikou": 10,
        "heikin": 6.45,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.129
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 132.745,
        "saikou": 10,
        "heikin": 6.37,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.192
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 121.381,
        "saikou": 10,
        "heikin": 5.25,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.8
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 124.98,
        "saikou": 10,
        "heikin": 4.86,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 4.351
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 149.98,
        "saikou": 10,
        "heikin": 5.72,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 4.208
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 120.98,
        "saikou": 10,
        "heikin": 2.98,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.961
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 163.894,
        "saikou": 10,
        "heikin": 2.37,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.311
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 234.894,
        "saikou": 10,
        "heikin": 1.7,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.594
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 159.894,
        "saikou": 10,
        "heikin": 2.52,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 6.511
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 238.175,
        "saikou": 10,
        "heikin": 1.22,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 7.133
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 236.175,
        "saikou": 10,
        "heikin": 1.54,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 7.276
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 224.155,
        "saikou": 10,
        "heikin": 1.58,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 7.363
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 235.17,
        "saikou": 10,
        "heikin": 1.21,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 7.337
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 225.546,
        "saikou": 10,
        "heikin": 1.22,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 7.343
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 253.43,
        "saikou": 10,
        "heikin": 1.21,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.91
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 257.096,
        "saikou": 10,
        "heikin": 1.24,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.581
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 182.862,
        "saikou": 10,
        "heikin": 1.5,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.675
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 170.486,
        "saikou": 10,
        "heikin": 1.67,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.379
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 161.255,
        "saikou": 10,
        "heikin": 1.66,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.297
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 94.255,
        "saikou": 10,
        "heikin": 3.05,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.113
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 94.255,
        "saikou": 10,
        "heikin": 3.06,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.269
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 173.625,
        "saikou": 10,
        "heikin": 6.62,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.059
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 175.623,
        "saikou": 10,
        "heikin": 6.7,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 5.89
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 175.623,
        "saikou": 10,
        "heikin": 6.18,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.226
      }
    ]
  }
};
