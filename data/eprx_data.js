// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/07〜2026/11/05）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-06",
  "fetchedAt": "2026-11-06",
  "avgWindowLabel": "過去30日平均（2026/10/07〜2026/11/05）",
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
      "boshu": 1366,
      "ouatsu": 1787.359,
      "saikou": 9.99,
      "heikin": 1.87,
      "boshuAvg30d": 1063.7,
      "heikinAvg30d": 3.0
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1366,
      "ouatsu": 1796.386,
      "saikou": 9.99,
      "heikin": 2.2,
      "boshuAvg30d": 1063.7,
      "heikinAvg30d": 2.897
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1366,
      "ouatsu": 1778.227,
      "saikou": 9.38,
      "heikin": 1.86,
      "boshuAvg30d": 1063.7,
      "heikinAvg30d": 2.801
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1365,
      "ouatsu": 1851.955,
      "saikou": 9.91,
      "heikin": 2.02,
      "boshuAvg30d": 1063.5,
      "heikinAvg30d": 2.752
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1359,
      "ouatsu": 1865.553,
      "saikou": 9.99,
      "heikin": 1.99,
      "boshuAvg30d": 1060.0,
      "heikinAvg30d": 2.804
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1359,
      "ouatsu": 1784.68,
      "saikou": 9.38,
      "heikin": 2.17,
      "boshuAvg30d": 1059.2,
      "heikinAvg30d": 2.831
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1356,
      "ouatsu": 1776.742,
      "saikou": 9.8,
      "heikin": 2.04,
      "boshuAvg30d": 1056.2,
      "heikinAvg30d": 3.025
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1360,
      "ouatsu": 1879.365,
      "saikou": 9.91,
      "heikin": 2.76,
      "boshuAvg30d": 1058.5,
      "heikinAvg30d": 3.265
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1360,
      "ouatsu": 1794.803,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1060.2,
      "heikinAvg30d": 3.289
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1362,
      "ouatsu": 1816.372,
      "saikou": 9.91,
      "heikin": 2.58,
      "boshuAvg30d": 1061.3,
      "heikinAvg30d": 3.44
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1362,
      "ouatsu": 1808.137,
      "saikou": 9.91,
      "heikin": 2.8,
      "boshuAvg30d": 1061.3,
      "heikinAvg30d": 3.494
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1362,
      "ouatsu": 1851.213,
      "saikou": 9.91,
      "heikin": 2.96,
      "boshuAvg30d": 1061.3,
      "heikinAvg30d": 3.474
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1421,
      "ouatsu": 1924.144,
      "saikou": 9.27,
      "heikin": 3.13,
      "boshuAvg30d": 1121.2,
      "heikinAvg30d": 3.53
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1446,
      "ouatsu": 1978.982,
      "saikou": 9.99,
      "heikin": 3.29,
      "boshuAvg30d": 1144.5,
      "heikinAvg30d": 3.431
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1465,
      "ouatsu": 1914.344,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1165.2,
      "heikinAvg30d": 3.155
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1480,
      "ouatsu": 1679.871,
      "saikou": 10,
      "heikin": 2.4,
      "boshuAvg30d": 1182.2,
      "heikinAvg30d": 2.885
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1480,
      "ouatsu": 1579.509,
      "saikou": 10,
      "heikin": 2.25,
      "boshuAvg30d": 1182.5,
      "heikinAvg30d": 2.814
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1480,
      "ouatsu": 1711.014,
      "saikou": 9.99,
      "heikin": 2.45,
      "boshuAvg30d": 1186.4,
      "heikinAvg30d": 2.77
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1409,
      "ouatsu": 1568.322,
      "saikou": 9.99,
      "heikin": 2.01,
      "boshuAvg30d": 1140.8,
      "heikinAvg30d": 2.872
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1414,
      "ouatsu": 1626.595,
      "saikou": 9.99,
      "heikin": 2.06,
      "boshuAvg30d": 1144.1,
      "heikinAvg30d": 2.907
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1418,
      "ouatsu": 1650.724,
      "saikou": 9.99,
      "heikin": 1.85,
      "boshuAvg30d": 1146.7,
      "heikinAvg30d": 2.902
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1422,
      "ouatsu": 1707.694,
      "saikou": 9.99,
      "heikin": 1.97,
      "boshuAvg30d": 1147.4,
      "heikinAvg30d": 2.872
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1416,
      "ouatsu": 1565.066,
      "saikou": 9.99,
      "heikin": 1.63,
      "boshuAvg30d": 1143.9,
      "heikinAvg30d": 2.851
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1416,
      "ouatsu": 1566.046,
      "saikou": 9.99,
      "heikin": 1.82,
      "boshuAvg30d": 1143.1,
      "heikinAvg30d": 2.856
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1397,
      "ouatsu": 1553.885,
      "saikou": 10,
      "heikin": 1.61,
      "boshuAvg30d": 1122.9,
      "heikinAvg30d": 2.695
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1397,
      "ouatsu": 1588.364,
      "saikou": 9.99,
      "heikin": 1.49,
      "boshuAvg30d": 1122.9,
      "heikinAvg30d": 2.716
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1397,
      "ouatsu": 1632.775,
      "saikou": 9.99,
      "heikin": 1.79,
      "boshuAvg30d": 1122.9,
      "heikinAvg30d": 2.914
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1393,
      "ouatsu": 1585.988,
      "saikou": 9.99,
      "heikin": 2.08,
      "boshuAvg30d": 1120.2,
      "heikinAvg30d": 3.055
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1392,
      "ouatsu": 1684.591,
      "saikou": 9.99,
      "heikin": 2.16,
      "boshuAvg30d": 1117.6,
      "heikinAvg30d": 3.054
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1386,
      "ouatsu": 1596.116,
      "saikou": 9.99,
      "heikin": 2.6,
      "boshuAvg30d": 1111.6,
      "heikinAvg30d": 3.183
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1457,
      "ouatsu": 1464.826,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1166.9,
      "heikinAvg30d": 3.27
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1457,
      "ouatsu": 1522.463,
      "saikou": 9.99,
      "heikin": 2.64,
      "boshuAvg30d": 1166.6,
      "heikinAvg30d": 3.4
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1457,
      "ouatsu": 1875.979,
      "saikou": 10,
      "heikin": 3.57,
      "boshuAvg30d": 1167.1,
      "heikinAvg30d": 3.773
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1455,
      "ouatsu": 1991.975,
      "saikou": 10,
      "heikin": 4.11,
      "boshuAvg30d": 1166.0,
      "heikinAvg30d": 3.956
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1453,
      "ouatsu": 1956.413,
      "saikou": 10,
      "heikin": 4.25,
      "boshuAvg30d": 1157.7,
      "heikinAvg30d": 3.878
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1448,
      "ouatsu": 1963.98,
      "saikou": 10,
      "heikin": 4.05,
      "boshuAvg30d": 1152.7,
      "heikinAvg30d": 3.918
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1444,
      "ouatsu": 1818.4,
      "saikou": 9.99,
      "heikin": 3.33,
      "boshuAvg30d": 1146.8,
      "heikinAvg30d": 3.735
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1444,
      "ouatsu": 1811.743,
      "saikou": 9.99,
      "heikin": 3.29,
      "boshuAvg30d": 1146.8,
      "heikinAvg30d": 3.745
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1444,
      "ouatsu": 2057.402,
      "saikou": 9.99,
      "heikin": 3.08,
      "boshuAvg30d": 1146.8,
      "heikinAvg30d": 3.544
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1442,
      "ouatsu": 2116.742,
      "saikou": 9.69,
      "heikin": 2.98,
      "boshuAvg30d": 1146.0,
      "heikinAvg30d": 3.416
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1435,
      "ouatsu": 2192.139,
      "saikou": 9.99,
      "heikin": 3.31,
      "boshuAvg30d": 1138.2,
      "heikinAvg30d": 3.336
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1435,
      "ouatsu": 2169.453,
      "saikou": 9.99,
      "heikin": 3.11,
      "boshuAvg30d": 1138.2,
      "heikinAvg30d": 3.275
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1346,
      "ouatsu": 2326.56,
      "saikou": 9.27,
      "heikin": 2.93,
      "boshuAvg30d": 1054.1,
      "heikinAvg30d": 3.18
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1349,
      "ouatsu": 2289.917,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1057.1,
      "heikinAvg30d": 3.192
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1348,
      "ouatsu": 2076.061,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1060.7,
      "heikinAvg30d": 3.226
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1341,
      "ouatsu": 1969.21,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1052.4,
      "heikinAvg30d": 3.071
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1333,
      "ouatsu": 1989.18,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1043.9,
      "heikinAvg30d": 3.113
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1325,
      "ouatsu": 1816.514,
      "saikou": 10,
      "heikin": 2.26,
      "boshuAvg30d": 1036.1,
      "heikinAvg30d": 2.848
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
        "ouatsu": 114.908,
        "saikou": 2.36,
        "heikin": 1.46,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.158
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 117.908,
        "saikou": 6.17,
        "heikin": 1.4,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.196
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 115.958,
        "saikou": 1.63,
        "heikin": 1.03,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.009
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 158.558,
        "saikou": 9.91,
        "heikin": 4.16,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 3.905
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 160.508,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.262
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 4.22,
        "heikin": 1.15,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 3.893
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 108.418,
        "saikou": 9.8,
        "heikin": 1.61,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.212
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 154.058,
        "saikou": 9.91,
        "heikin": 4.49,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.392
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 92.408,
        "saikou": 9.8,
        "heikin": 2.3,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.49
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 133.888,
        "saikou": 9.91,
        "heikin": 4.22,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.268
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 118.838,
        "saikou": 9.91,
        "heikin": 4.73,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.587
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 155.888,
        "saikou": 9.91,
        "heikin": 3.74,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.665
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 194.408,
        "saikou": 3.74,
        "heikin": 2.89,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.51
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 232.968,
        "saikou": 3.73,
        "heikin": 2.44,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.587
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 194.408,
        "saikou": 4.13,
        "heikin": 2.89,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.018
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 127.958,
        "saikou": 7.8,
        "heikin": 2.42,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.156
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 114.908,
        "saikou": 9.44,
        "heikin": 3.02,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.324
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 161.258,
        "saikou": 9.91,
        "heikin": 4.76,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.559
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 122.918,
        "saikou": 7.19,
        "heikin": 3.14,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.715
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 208.268,
        "saikou": 9.91,
        "heikin": 4.82,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 3.649
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 149.95,
        "saikou": 6.2,
        "heikin": 2.54,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.167
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 196.3,
        "saikou": 9.91,
        "heikin": 4.4,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.349
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 149.95,
        "saikou": 7.2,
        "heikin": 2.73,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 4.158
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 159.268,
        "saikou": 7.9,
        "heikin": 4.43,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 4.037
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 126.95,
        "saikou": 9.44,
        "heikin": 3.38,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.908
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 136,
        "saikou": 9.44,
        "heikin": 2.83,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.896
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 110.95,
        "saikou": 9,
        "heikin": 2.93,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.62
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 148.968,
        "saikou": 9.44,
        "heikin": 2.7,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.246
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 212.208,
        "saikou": 8,
        "heikin": 3.47,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.188
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 135.968,
        "saikou": 4.99,
        "heikin": 2.32,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 5.079
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 129.908,
        "saikou": 8,
        "heikin": 2.76,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 4.448
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 114.968,
        "saikou": 8.79,
        "heikin": 3,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 5.221
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 242.218,
        "saikou": 3.73,
        "heikin": 2.6,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 6.257
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 217.258,
        "saikou": 3.73,
        "heikin": 2.65,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 6.233
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 175.908,
        "saikou": 3.73,
        "heikin": 2.91,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 5.644
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 200.958,
        "saikou": 3.73,
        "heikin": 1.88,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 5.779
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 133.95,
        "saikou": 5.5,
        "heikin": 2.07,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 5.466
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 133.99,
        "saikou": 6.21,
        "heikin": 2.35,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 5.614
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 174.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 5.429
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 133.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 5.427
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 171.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 5.258
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 130.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 4.725
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 159.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 4.762
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 128.968,
        "saikou": 4.23,
        "heikin": 2.08,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 4.863
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 164.918,
        "saikou": 1.75,
        "heikin": 1.51,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.872
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 123.968,
        "saikou": 2.6,
        "heikin": 1.82,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.417
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 193.918,
        "saikou": 3.7,
        "heikin": 1.45,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.726
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 154.958,
        "saikou": 3.56,
        "heikin": 1.77,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.138
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 71.582,
        "saikou": 8.88,
        "heikin": 7.24,
        "boshuAvg30d": 119.0,
        "heikinAvg30d": 5.433
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 83.582,
        "saikou": 9.14,
        "heikin": 6.87,
        "boshuAvg30d": 119.0,
        "heikinAvg30d": 5.51
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 90.89,
        "saikou": 9.38,
        "heikin": 5.87,
        "boshuAvg30d": 119.0,
        "heikinAvg30d": 5.561
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 90.92,
        "saikou": 9.2,
        "heikin": 6.93,
        "boshuAvg30d": 119.0,
        "heikinAvg30d": 5.519
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 86.97,
        "saikou": 9.48,
        "heikin": 5.8,
        "boshuAvg30d": 119.0,
        "heikinAvg30d": 5.46
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 86.97,
        "saikou": 9.38,
        "heikin": 5.79,
        "boshuAvg30d": 119.0,
        "heikinAvg30d": 5.439
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 93.25,
        "saikou": 9.2,
        "heikin": 6.93,
        "boshuAvg30d": 118.0,
        "heikinAvg30d": 5.384
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 105.42,
        "saikou": 9.48,
        "heikin": 5.4,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 5.277
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 109.418,
        "saikou": 9.2,
        "heikin": 6.93,
        "boshuAvg30d": 118.0,
        "heikinAvg30d": 5.061
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 109.418,
        "saikou": 9.13,
        "heikin": 6.86,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 5.092
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 109.418,
        "saikou": 9.09,
        "heikin": 6.04,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 5.363
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 109.418,
        "saikou": 9.09,
        "heikin": 5.6,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 5.441
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 107.417,
        "saikou": 8.59,
        "heikin": 5.02,
        "boshuAvg30d": 125.2,
        "heikinAvg30d": 5.659
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 105.917,
        "saikou": 8.65,
        "heikin": 4.86,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 5.7
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 109.418,
        "saikou": 10,
        "heikin": 5.28,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 6.053
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 107.918,
        "saikou": 10,
        "heikin": 6.06,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 6.146
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 109.418,
        "saikou": 10,
        "heikin": 4.95,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 6.088
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 70.568,
        "saikou": 9,
        "heikin": 4.33,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 6.194
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 111.414,
        "saikou": 3.01,
        "heikin": 2.51,
        "boshuAvg30d": 73.0,
        "heikinAvg30d": 6.114
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 111.414,
        "saikou": 3.63,
        "heikin": 2.99,
        "boshuAvg30d": 73.2,
        "heikinAvg30d": 6.15
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 107.459,
        "saikou": 4.16,
        "heikin": 3.14,
        "boshuAvg30d": 72.3,
        "heikinAvg30d": 6.113
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 107.459,
        "saikou": 4.6,
        "heikin": 3.76,
        "boshuAvg30d": 72.5,
        "heikinAvg30d": 6.282
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 96.914,
        "saikou": 4.68,
        "heikin": 3.7,
        "boshuAvg30d": 73.3,
        "heikinAvg30d": 6.26
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 96.914,
        "saikou": 4.68,
        "heikin": 3.73,
        "boshuAvg30d": 73.3,
        "heikinAvg30d": 6.3
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 96.848,
        "saikou": 5.69,
        "heikin": 3.99,
        "boshuAvg30d": 69.1,
        "heikinAvg30d": 6.314
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 109.418,
        "saikou": 5.21,
        "heikin": 3.61,
        "boshuAvg30d": 69.1,
        "heikinAvg30d": 6.34
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 110.064,
        "saikou": 4.65,
        "heikin": 3.48,
        "boshuAvg30d": 69.1,
        "heikinAvg30d": 5.773
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 111.414,
        "saikou": 4.38,
        "heikin": 3.9,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 5.904
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 111.414,
        "saikou": 4.18,
        "heikin": 4.18,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 5.799
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 99.414,
        "saikou": 2.1,
        "heikin": 1.93,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 5.312
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 75.414,
        "saikou": 6,
        "heikin": 4.84,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 5.198
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 111.414,
        "saikou": 8.46,
        "heikin": 5.1,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 4.435
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 109.413,
        "saikou": 7.59,
        "heikin": 5.08,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 4.221
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 107.913,
        "saikou": 7.58,
        "heikin": 5.41,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 4.183
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 109.413,
        "saikou": 7.79,
        "heikin": 5.24,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 4.23
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 109.914,
        "saikou": 7.87,
        "heikin": 4.63,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 4.108
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 109.418,
        "saikou": 8.14,
        "heikin": 5.94,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 3.77
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 107.918,
        "saikou": 8.26,
        "heikin": 5.49,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 3.487
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 109.418,
        "saikou": 8.24,
        "heikin": 5.75,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 3.405
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 107.518,
        "saikou": 8.32,
        "heikin": 6.1,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 3.68
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 92.893,
        "saikou": 7.99,
        "heikin": 4.19,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 3.656
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 94.793,
        "saikou": 8.18,
        "heikin": 4.02,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 3.772
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 97.496,
        "saikou": 8.65,
        "heikin": 5.83,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 4.008
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 95.566,
        "saikou": 10,
        "heikin": 7.41,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 3.979
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 84.916,
        "saikou": 10,
        "heikin": 8.68,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 3.988
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 84.915,
        "saikou": 10,
        "heikin": 9.28,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 4.376
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 72.916,
        "saikou": 10,
        "heikin": 4.25,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 4.427
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 71.416,
        "saikou": 10,
        "heikin": 4.93,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 4.964
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 283,
        "ouatsu": 514.639,
        "saikou": 1.78,
        "heikin": 1.02,
        "boshuAvg30d": 238.0,
        "heikinAvg30d": 3.301
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 283,
        "ouatsu": 499.092,
        "saikou": 3,
        "heikin": 1.45,
        "boshuAvg30d": 238.0,
        "heikinAvg30d": 3.215
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 283,
        "ouatsu": 499.144,
        "saikou": 1.68,
        "heikin": 0.91,
        "boshuAvg30d": 238.0,
        "heikinAvg30d": 3.045
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 283,
        "ouatsu": 512.394,
        "saikou": 1.07,
        "heikin": 0.68,
        "boshuAvg30d": 238.0,
        "heikinAvg30d": 3.041
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 281,
        "ouatsu": 510.396,
        "saikou": 1.3,
        "heikin": 0.61,
        "boshuAvg30d": 236.9,
        "heikinAvg30d": 3.076
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 281,
        "ouatsu": 512.261,
        "saikou": 1.38,
        "heikin": 0.66,
        "boshuAvg30d": 236.0,
        "heikinAvg30d": 2.88
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 279,
        "ouatsu": 518.097,
        "saikou": 1,
        "heikin": 0.66,
        "boshuAvg30d": 234.0,
        "heikinAvg30d": 3.12
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 281,
        "ouatsu": 503.649,
        "saikou": 1.59,
        "heikin": 0.76,
        "boshuAvg30d": 236.0,
        "heikinAvg30d": 3.287
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 281,
        "ouatsu": 454.732,
        "saikou": 10,
        "heikin": 2.83,
        "boshuAvg30d": 236.0,
        "heikinAvg30d": 3.257
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 282,
        "ouatsu": 458.303,
        "saikou": 1,
        "heikin": 0.64,
        "boshuAvg30d": 237.0,
        "heikinAvg30d": 3.387
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 282,
        "ouatsu": 450.909,
        "saikou": 3,
        "heikin": 1.12,
        "boshuAvg30d": 237.0,
        "heikinAvg30d": 3.273
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 282,
        "ouatsu": 467.321,
        "saikou": 7.54,
        "heikin": 1.2,
        "boshuAvg30d": 237.0,
        "heikinAvg30d": 3.482
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 302,
        "ouatsu": 437.48,
        "saikou": 6.25,
        "heikin": 1.38,
        "boshuAvg30d": 256.2,
        "heikinAvg30d": 3.571
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 310,
        "ouatsu": 447.608,
        "saikou": 6.87,
        "heikin": 2.23,
        "boshuAvg30d": 264.2,
        "heikinAvg30d": 3.701
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 314,
        "ouatsu": 525.559,
        "saikou": 2.2,
        "heikin": 1.28,
        "boshuAvg30d": 269.0,
        "heikinAvg30d": 3.474
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 319,
        "ouatsu": 450.024,
        "saikou": 2.4,
        "heikin": 1.04,
        "boshuAvg30d": 274.4,
        "heikinAvg30d": 3.132
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 319,
        "ouatsu": 415.114,
        "saikou": 7.54,
        "heikin": 1.31,
        "boshuAvg30d": 274.7,
        "heikinAvg30d": 2.865
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 319,
        "ouatsu": 421.111,
        "saikou": 7.41,
        "heikin": 1.3,
        "boshuAvg30d": 278.6,
        "heikinAvg30d": 2.928
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 309,
        "ouatsu": 416.028,
        "saikou": 7.47,
        "heikin": 1.14,
        "boshuAvg30d": 270.2,
        "heikinAvg30d": 2.812
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 309,
        "ouatsu": 356.476,
        "saikou": 1.16,
        "heikin": 0.58,
        "boshuAvg30d": 270.2,
        "heikinAvg30d": 2.916
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 309,
        "ouatsu": 418.945,
        "saikou": 7.3,
        "heikin": 1,
        "boshuAvg30d": 270.9,
        "heikinAvg30d": 2.908
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 309,
        "ouatsu": 419.545,
        "saikou": 7.16,
        "heikin": 0.8,
        "boshuAvg30d": 270.0,
        "heikinAvg30d": 2.849
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 306,
        "ouatsu": 358.509,
        "saikou": 2.4,
        "heikin": 0.8,
        "boshuAvg30d": 267.9,
        "heikinAvg30d": 2.877
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 306,
        "ouatsu": 347.737,
        "saikou": 5.04,
        "heikin": 1.12,
        "boshuAvg30d": 267.9,
        "heikinAvg30d": 2.93
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 304,
        "ouatsu": 349.906,
        "saikou": 10,
        "heikin": 1.36,
        "boshuAvg30d": 264.7,
        "heikinAvg30d": 2.685
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 304,
        "ouatsu": 362.753,
        "saikou": 2.36,
        "heikin": 1.04,
        "boshuAvg30d": 264.7,
        "heikinAvg30d": 2.684
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 304,
        "ouatsu": 413.584,
        "saikou": 7.18,
        "heikin": 1.09,
        "boshuAvg30d": 264.7,
        "heikinAvg30d": 2.968
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 304,
        "ouatsu": 438.218,
        "saikou": 7.38,
        "heikin": 1.17,
        "boshuAvg30d": 264.4,
        "heikinAvg30d": 2.889
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 303,
        "ouatsu": 416.456,
        "saikou": 7.29,
        "heikin": 1.21,
        "boshuAvg30d": 263.4,
        "heikinAvg30d": 2.883
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 303,
        "ouatsu": 480.047,
        "saikou": 7.33,
        "heikin": 1.76,
        "boshuAvg30d": 262.5,
        "heikinAvg30d": 2.772
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 301,
        "ouatsu": 471.255,
        "saikou": 6.68,
        "heikin": 1.45,
        "boshuAvg30d": 260.5,
        "heikinAvg30d": 2.682
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 301,
        "ouatsu": 505.522,
        "saikou": 6.71,
        "heikin": 1.41,
        "boshuAvg30d": 260.2,
        "heikinAvg30d": 2.639
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 301,
        "ouatsu": 638.756,
        "saikou": 6.88,
        "heikin": 2.75,
        "boshuAvg30d": 259.9,
        "heikinAvg30d": 2.539
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 301,
        "ouatsu": 632.475,
        "saikou": 6.54,
        "heikin": 1.69,
        "boshuAvg30d": 259.9,
        "heikinAvg30d": 2.543
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 301,
        "ouatsu": 671.191,
        "saikou": 6.29,
        "heikin": 2.02,
        "boshuAvg30d": 257.9,
        "heikinAvg30d": 2.441
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 301,
        "ouatsu": 684.386,
        "saikou": 6.24,
        "heikin": 1.9,
        "boshuAvg30d": 257.9,
        "heikinAvg30d": 2.498
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 303,
        "ouatsu": 742.094,
        "saikou": 4.47,
        "heikin": 1.57,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 2.678
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 303,
        "ouatsu": 739.095,
        "saikou": 5.37,
        "heikin": 1.55,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 2.502
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 303,
        "ouatsu": 719.525,
        "saikou": 5.27,
        "heikin": 1.48,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 2.578
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 303,
        "ouatsu": 685.957,
        "saikou": 4.94,
        "heikin": 1.26,
        "boshuAvg30d": 260.1,
        "heikinAvg30d": 2.422
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 302,
        "ouatsu": 680.722,
        "saikou": 6.82,
        "heikin": 2.8,
        "boshuAvg30d": 258.2,
        "heikinAvg30d": 2.356
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 302,
        "ouatsu": 708.131,
        "saikou": 6.33,
        "heikin": 1.59,
        "boshuAvg30d": 258.2,
        "heikinAvg30d": 2.606
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 301,
        "ouatsu": 674.549,
        "saikou": 4.91,
        "heikin": 1.29,
        "boshuAvg30d": 258.1,
        "heikinAvg30d": 2.327
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 301,
        "ouatsu": 667.762,
        "saikou": 4.78,
        "heikin": 1.38,
        "boshuAvg30d": 258.1,
        "heikinAvg30d": 2.375
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 301,
        "ouatsu": 475.29,
        "saikou": 6.86,
        "heikin": 2.89,
        "boshuAvg30d": 261.1,
        "heikinAvg30d": 2.322
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 299,
        "ouatsu": 572.15,
        "saikou": 6.33,
        "heikin": 1.38,
        "boshuAvg30d": 256.1,
        "heikinAvg30d": 2.429
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 297,
        "ouatsu": 543.822,
        "saikou": 6.85,
        "heikin": 2.61,
        "boshuAvg30d": 254.4,
        "heikinAvg30d": 2.879
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 296,
        "ouatsu": 542.755,
        "saikou": 6.7,
        "heikin": 1.78,
        "boshuAvg30d": 252.7,
        "heikinAvg30d": 2.883
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 243,
        "ouatsu": 374.3,
        "saikou": 9.19,
        "heikin": 1.68,
        "boshuAvg30d": 114.4,
        "heikinAvg30d": 1.616
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 243,
        "ouatsu": 358.391,
        "saikou": 9.19,
        "heikin": 1.8,
        "boshuAvg30d": 114.4,
        "heikinAvg30d": 1.561
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 243,
        "ouatsu": 356.407,
        "saikou": 9.19,
        "heikin": 1.82,
        "boshuAvg30d": 114.4,
        "heikinAvg30d": 1.591
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 364.375,
        "saikou": 9.19,
        "heikin": 1.98,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.639
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 242,
        "ouatsu": 377.971,
        "saikou": 9.19,
        "heikin": 2.46,
        "boshuAvg30d": 113.4,
        "heikinAvg30d": 1.622
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 375.987,
        "saikou": 8.88,
        "heikin": 2.42,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 1.586
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 399.824,
        "saikou": 8.88,
        "heikin": 2.27,
        "boshuAvg30d": 112.2,
        "heikinAvg30d": 1.442
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 372.636,
        "saikou": 8.88,
        "heikin": 2.08,
        "boshuAvg30d": 112.2,
        "heikinAvg30d": 1.485
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 240,
        "ouatsu": 376.352,
        "saikou": 8.88,
        "heikin": 2.08,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 1.429
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 240,
        "ouatsu": 362.422,
        "saikou": 8.88,
        "heikin": 2.26,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 1.432
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 240,
        "ouatsu": 364.412,
        "saikou": 8.88,
        "heikin": 2.13,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 1.4
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 240,
        "ouatsu": 359.028,
        "saikou": 9.27,
        "heikin": 2.08,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 1.336
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 366.312,
        "saikou": 9.27,
        "heikin": 2.74,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 1.595
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 255,
        "ouatsu": 366.312,
        "saikou": 9.27,
        "heikin": 2.76,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 1.638
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 258,
        "ouatsu": 354.811,
        "saikou": 9.27,
        "heikin": 3.6,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.901
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 260,
        "ouatsu": 355.295,
        "saikou": 9.62,
        "heikin": 3.76,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 1.984
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 260,
        "ouatsu": 319.023,
        "saikou": 9.27,
        "heikin": 3.58,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 2.013
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 260,
        "ouatsu": 315.045,
        "saikou": 9.49,
        "heikin": 3.88,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 2.178
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 265,
        "ouatsu": 229.412,
        "saikou": 9.49,
        "heikin": 2.47,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 2.617
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 265,
        "ouatsu": 229.412,
        "saikou": 9.49,
        "heikin": 2.62,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 2.608
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 265,
        "ouatsu": 215.633,
        "saikou": 9.49,
        "heikin": 2.73,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 2.743
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 265,
        "ouatsu": 179.507,
        "saikou": 9.49,
        "heikin": 2.54,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 2.754
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 264,
        "ouatsu": 163.614,
        "saikou": 9.49,
        "heikin": 1.95,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 2.62
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 263,
        "ouatsu": 158.73,
        "saikou": 9.49,
        "heikin": 1.97,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 2.651
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 259,
        "ouatsu": 144.777,
        "saikou": 9.49,
        "heikin": 2.2,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 2.559
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 259,
        "ouatsu": 144.695,
        "saikou": 9.49,
        "heikin": 2.2,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 2.509
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 259,
        "ouatsu": 219.996,
        "saikou": 9.49,
        "heikin": 2.07,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 2.517
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 259,
        "ouatsu": 203.303,
        "saikou": 9.49,
        "heikin": 2.38,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 2.614
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 259,
        "ouatsu": 225.451,
        "saikou": 9.49,
        "heikin": 2.13,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 2.831
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 259,
        "ouatsu": 215.447,
        "saikou": 9.69,
        "heikin": 2.13,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 2.763
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 257,
        "ouatsu": 241.142,
        "saikou": 9.69,
        "heikin": 2.93,
        "boshuAvg30d": 127.5,
        "heikinAvg30d": 2.787
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 257,
        "ouatsu": 219.452,
        "saikou": 9.69,
        "heikin": 2.12,
        "boshuAvg30d": 127.5,
        "heikinAvg30d": 2.915
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 257,
        "ouatsu": 218.485,
        "saikou": 9.69,
        "heikin": 2.12,
        "boshuAvg30d": 127.5,
        "heikinAvg30d": 2.763
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 256,
        "ouatsu": 211.032,
        "saikou": 9.69,
        "heikin": 2.54,
        "boshuAvg30d": 127.4,
        "heikinAvg30d": 2.736
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 256,
        "ouatsu": 215.028,
        "saikou": 9.69,
        "heikin": 2.34,
        "boshuAvg30d": 127.4,
        "heikinAvg30d": 2.575
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 255,
        "ouatsu": 199.765,
        "saikou": 9.69,
        "heikin": 2.12,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 2.476
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 253,
        "ouatsu": 228.786,
        "saikou": 9.69,
        "heikin": 2.26,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 2.117
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 253,
        "ouatsu": 222.584,
        "saikou": 9.69,
        "heikin": 2.13,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 2.04
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 253,
        "ouatsu": 267.301,
        "saikou": 9.69,
        "heikin": 2.16,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 1.758
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 253,
        "ouatsu": 281.425,
        "saikou": 9.69,
        "heikin": 2.29,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 1.644
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 253,
        "ouatsu": 328.245,
        "saikou": 9.69,
        "heikin": 2.45,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 1.539
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 253,
        "ouatsu": 317.2,
        "saikou": 9.27,
        "heikin": 2.15,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 1.582
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 255,
        "ouatsu": 330.349,
        "saikou": 9.27,
        "heikin": 2.04,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 1.518
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 255,
        "ouatsu": 337.177,
        "saikou": 3.01,
        "heikin": 1.98,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 1.729
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 255,
        "ouatsu": 333.293,
        "saikou": 2.91,
        "heikin": 1.97,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 1.724
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 327.66,
        "saikou": 8.88,
        "heikin": 2.25,
        "boshuAvg30d": 125.2,
        "heikinAvg30d": 1.797
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 325.76,
        "saikou": 9.27,
        "heikin": 2.19,
        "boshuAvg30d": 124.2,
        "heikinAvg30d": 1.674
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 321.873,
        "saikou": 9.27,
        "heikin": 2.61,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 1.751
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.55,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.341
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.15,
        "heikin": 2.05,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.275
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 1.93,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.279
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 1.93,
        "saikou": 2.35,
        "heikin": 2.35,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.17
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.65,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.311
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.361
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.5,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.746
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.93,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 2.091
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.945
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.65,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 2.09
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.07,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 2.377
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 10.754,
        "saikou": 3.69,
        "heikin": 3.16,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 2.208
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.35,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.975
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.061
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.9,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.512
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 3.25,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.123
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.7,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.094
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.35,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.926
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.25,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.354
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.68,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.73
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.53,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.493
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.29,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.83
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5,
        "heikin": 4.85,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 3.697
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5,
        "heikin": 4.85,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 3.576
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 63.928,
        "saikou": 5.3,
        "heikin": 0.69,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 2.323
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 63.928,
        "saikou": 4.75,
        "heikin": 0.65,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 2.071
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.05,
        "heikin": 5.9,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.78
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.73,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.339
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.15,
        "heikin": 5,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.881
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.45,
        "heikin": 4.3,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.772
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 6.45,
        "heikin": 6.3,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 5.019
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 7.35,
        "heikin": 7.25,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 5.833
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.65,
        "heikin": 4.5,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.59
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.35,
        "heikin": 4.15,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.139
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 4.2,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.137
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 4.2,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.482
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.64,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 3.623
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.35,
        "heikin": 3.94,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.224
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.6,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 3.19
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 3.465
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.52,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.797
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.45,
        "heikin": 3.14,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.6
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.7,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.628
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.4,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.606
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 2.9,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.827
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 2.9,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.371
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.55,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.183
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 7.722,
        "saikou": 2.66,
        "heikin": 2.54,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.669
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 184.496,
        "saikou": 9.99,
        "heikin": 1.22,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 1.215
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 220.179,
        "saikou": 9.99,
        "heikin": 1.09,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 1.022
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 203.464,
        "saikou": 1.3,
        "heikin": 0.61,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 0.964
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 194.358,
        "saikou": 1.44,
        "heikin": 0.71,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 0.961
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 217.21,
        "saikou": 9.99,
        "heikin": 1.12,
        "boshuAvg30d": 135.1,
        "heikinAvg30d": 0.954
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 184.171,
        "saikou": 1.99,
        "heikin": 0.98,
        "boshuAvg30d": 135.1,
        "heikinAvg30d": 1.165
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 109.277,
        "saikou": 1.99,
        "heikin": 1.43,
        "boshuAvg30d": 135.1,
        "heikinAvg30d": 1.312
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 113.265,
        "saikou": 1.99,
        "heikin": 1.59,
        "boshuAvg30d": 135.1,
        "heikinAvg30d": 1.512
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 113.265,
        "saikou": 1.99,
        "heikin": 1.58,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 1.474
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 113.265,
        "saikou": 1.99,
        "heikin": 1.54,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 1.509
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 117.132,
        "saikou": 1.99,
        "heikin": 1.56,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 1.513
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 117.132,
        "saikou": 1.99,
        "heikin": 1.48,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 1.426
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 117.132,
        "saikou": 1.99,
        "heikin": 1.48,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.482
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 1.9,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 1.474
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 2.33,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 1.562
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 2.38,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 1.601
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 2.39,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 1.598
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 3.21,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 2.147
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 3.56,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 2.209
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 156.36,
        "saikou": 9.99,
        "heikin": 2.87,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 2.272
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 191.727,
        "saikou": 9.99,
        "heikin": 2.28,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 2.2
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 227.776,
        "saikou": 9.99,
        "heikin": 1.95,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 2.334
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 231.372,
        "saikou": 9.99,
        "heikin": 1.93,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 2.385
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 231.626,
        "saikou": 9.99,
        "heikin": 1.73,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 2.106
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 239.604,
        "saikou": 9.99,
        "heikin": 1.67,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 1.846
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 241.602,
        "saikou": 9.99,
        "heikin": 1.63,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 1.921
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 202.657,
        "saikou": 9.99,
        "heikin": 1.77,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 2.369
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 116.606,
        "saikou": 9.99,
        "heikin": 3.2,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 2.228
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 125.743,
        "saikou": 9.99,
        "heikin": 3.29,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 2.344
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 102.132,
        "saikou": 9.99,
        "heikin": 3.73,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 2.116
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 102.132,
        "saikou": 9.99,
        "heikin": 3.74,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 2.432
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 102.132,
        "saikou": 9.99,
        "heikin": 3.75,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 2.615
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 102.132,
        "saikou": 9.99,
        "heikin": 3.76,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 2.592
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 96.146,
        "saikou": 9.99,
        "heikin": 3.32,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 2.15
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 96.146,
        "saikou": 9.99,
        "heikin": 3.38,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 2.21
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 96.146,
        "saikou": 9.99,
        "heikin": 3.39,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 2.471
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 90.893,
        "saikou": 9.99,
        "heikin": 3.04,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 1.922
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 90.893,
        "saikou": 9.99,
        "heikin": 2.89,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 1.917
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 207.395,
        "saikou": 9.99,
        "heikin": 4.45,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 1.696
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 321.284,
        "saikou": 4.34,
        "heikin": 4,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 1.686
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 319.299,
        "saikou": 9.99,
        "heikin": 3.72,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 1.668
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 319.299,
        "saikou": 9.99,
        "heikin": 3.97,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 1.694
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 336.284,
        "saikou": 9,
        "heikin": 3.32,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 1.68
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 336.284,
        "saikou": 3.9,
        "heikin": 3.17,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 1.748
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 336.284,
        "saikou": 3.9,
        "heikin": 3.17,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 1.744
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 160.357,
        "saikou": 9,
        "heikin": 1.61,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 1.613
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 174.254,
        "saikou": 9.99,
        "heikin": 1.7,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 1.455
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 125.206,
        "saikou": 1.99,
        "heikin": 1.35,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 1.592
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 143,
        "ouatsu": 167.919,
        "saikou": 7.99,
        "heikin": 2.6,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.361
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 143,
        "ouatsu": 167.919,
        "saikou": 7.99,
        "heikin": 3.8,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.493
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 143,
        "ouatsu": 167.919,
        "saikou": 7.99,
        "heikin": 2.57,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.209
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 143,
        "ouatsu": 169.909,
        "saikou": 7.99,
        "heikin": 2.55,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.04
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 143,
        "ouatsu": 171.709,
        "saikou": 7.99,
        "heikin": 2.8,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.093
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 143,
        "ouatsu": 171.709,
        "saikou": 7.99,
        "heikin": 3.75,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.319
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 143,
        "ouatsu": 190.561,
        "saikou": 7.99,
        "heikin": 2.42,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.473
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 144,
        "ouatsu": 188.761,
        "saikou": 7.99,
        "heikin": 2.52,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.781
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 144,
        "ouatsu": 188.761,
        "saikou": 7.99,
        "heikin": 2.52,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 3.046
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 144,
        "ouatsu": 187.761,
        "saikou": 5.13,
        "heikin": 2.86,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 3.395
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 144,
        "ouatsu": 189.561,
        "saikou": 5.13,
        "heikin": 2.74,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 3.252
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 144,
        "ouatsu": 189.561,
        "saikou": 7.99,
        "heikin": 2.8,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 3.064
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 146,
        "ouatsu": 194.356,
        "saikou": 7.99,
        "heikin": 2.85,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.063
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 147,
        "ouatsu": 194.356,
        "saikou": 7.99,
        "heikin": 2.85,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.857
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 147,
        "ouatsu": 194.356,
        "saikou": 4.23,
        "heikin": 2.43,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.093
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 148,
        "ouatsu": 192.884,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.832
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 148,
        "ouatsu": 192.884,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.882
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 148,
        "ouatsu": 192.884,
        "saikou": 1.56,
        "heikin": 1.43,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.886
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 177.802,
        "saikou": 2.29,
        "heikin": 1.47,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.025
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 152,
        "ouatsu": 187.407,
        "saikou": 2.29,
        "heikin": 1.13,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.074
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 153,
        "ouatsu": 189.752,
        "saikou": 1.56,
        "heikin": 0.87,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.669
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 154,
        "ouatsu": 201.823,
        "saikou": 1.56,
        "heikin": 0.78,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.736
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 154,
        "ouatsu": 201.823,
        "saikou": 1.56,
        "heikin": 0.78,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.599
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 154,
        "ouatsu": 213.773,
        "saikou": 1.56,
        "heikin": 0.78,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.74
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 151,
        "ouatsu": 177.802,
        "saikou": 1.56,
        "heikin": 0.78,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.57
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 151,
        "ouatsu": 177.802,
        "saikou": 1.56,
        "heikin": 0.78,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.789
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 151,
        "ouatsu": 204.256,
        "saikou": 1.56,
        "heikin": 1.04,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.824
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 151,
        "ouatsu": 192.211,
        "saikou": 2.29,
        "heikin": 1.11,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.922
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 151,
        "ouatsu": 204.161,
        "saikou": 2.29,
        "heikin": 1.1,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.975
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 150,
        "ouatsu": 184.952,
        "saikou": 2.29,
        "heikin": 1.49,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.068
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 150,
        "ouatsu": 200.819,
        "saikou": 7.98,
        "heikin": 2.29,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.207
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 150,
        "ouatsu": 200.819,
        "saikou": 7.98,
        "heikin": 2.28,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.463
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 150,
        "ouatsu": 200.819,
        "saikou": 7.98,
        "heikin": 3.11,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.005
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 150,
        "ouatsu": 200.819,
        "saikou": 7.17,
        "heikin": 4.96,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.692
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 150,
        "ouatsu": 179.271,
        "saikou": 7.17,
        "heikin": 4.82,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.863
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 150,
        "ouatsu": 179.271,
        "saikou": 7.98,
        "heikin": 4.75,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.94
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 150,
        "ouatsu": 178.281,
        "saikou": 7.4,
        "heikin": 5,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.933
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 150,
        "ouatsu": 178.281,
        "saikou": 7.16,
        "heikin": 4.75,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.883
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 150,
        "ouatsu": 210.113,
        "saikou": 7.17,
        "heikin": 4.82,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.634
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 150,
        "ouatsu": 212.103,
        "saikou": 7.17,
        "heikin": 4.41,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.406
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 149,
        "ouatsu": 212.103,
        "saikou": 6.59,
        "heikin": 4.47,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.778
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 149,
        "ouatsu": 212.103,
        "saikou": 6.07,
        "heikin": 3.73,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.671
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 240.91,
        "saikou": 6.07,
        "heikin": 4.7,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 3.684
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 236.106,
        "saikou": 6.07,
        "heikin": 4.39,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 3.526
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 207.306,
        "saikou": 7.09,
        "heikin": 4.28,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 3.449
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 147,
        "ouatsu": 207.306,
        "saikou": 5.13,
        "heikin": 3.09,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.964
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 146,
        "ouatsu": 207.306,
        "saikou": 5.13,
        "heikin": 2.92,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.876
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 146,
        "ouatsu": 207.306,
        "saikou": 7.99,
        "heikin": 2.68,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.083
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.823
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 210.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.789
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 209.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.754
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.757
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 209.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.759
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 210.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.738
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 205.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.755
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 194.8,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.772
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 206.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.809
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 205.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.862
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 204.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.846
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 205.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.796
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 207.343,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.965
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 207.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 0.87
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 176.3,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.809
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 177.3,
        "saikou": 1.7,
        "heikin": 0.6,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.841
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 178.3,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.806
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 178.3,
        "saikou": 1.7,
        "heikin": 0.77,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.821
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 151.3,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.044
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.001
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 160.3,
        "saikou": 1.7,
        "heikin": 0.58,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.038
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.86,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.979
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.997
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.99
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.009
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 156.3,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.009
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.042
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.49,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.103
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 147.3,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.048
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 113.3,
        "saikou": 1.7,
        "heikin": 1,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.116
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 113.3,
        "saikou": 1.7,
        "heikin": 1,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.128
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 113.3,
        "saikou": 1.95,
        "heikin": 1.02,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.357
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 113.3,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 1.489
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 113.3,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 1.549
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 113.3,
        "saikou": 2.85,
        "heikin": 1.05,
        "boshuAvg30d": 42.8,
        "heikinAvg30d": 1.624
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 113.3,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.57
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 113.3,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.528
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 113.3,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.478
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 113.3,
        "saikou": 1.7,
        "heikin": 1.01,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.486
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 124.843,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.457
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 124.843,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.42
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.002
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.924
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 210.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.9
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.821
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 211.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.894
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.88
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 131.244,
        "saikou": 7.32,
        "heikin": 4.53,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.39
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 135.044,
        "saikou": 7.69,
        "heikin": 4.91,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.088
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 133.172,
        "saikou": 6.64,
        "heikin": 4.09,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.045
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 135.168,
        "saikou": 6.64,
        "heikin": 4.07,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.884
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 127.518,
        "saikou": 5.71,
        "heikin": 3.68,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.887
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 123.353,
        "saikou": 6.64,
        "heikin": 4.3,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.2
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 148.044,
        "saikou": 7.98,
        "heikin": 4.8,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.511
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 242.848,
        "saikou": 7.69,
        "heikin": 5.91,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.117
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 249.596,
        "saikou": 8.05,
        "heikin": 6.11,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.164
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 242.044,
        "saikou": 8.03,
        "heikin": 5.81,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.367
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 249.596,
        "saikou": 8.09,
        "heikin": 6.12,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.646
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 236.768,
        "saikou": 8.3,
        "heikin": 6.34,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.473
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 295.768,
        "saikou": 8.33,
        "heikin": 6.71,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 6.175
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 303.418,
        "saikou": 8.3,
        "heikin": 6.7,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.757
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 244.418,
        "saikou": 7.83,
        "heikin": 5.95,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 4.803
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 153.418,
        "saikou": 5.27,
        "heikin": 3.24,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 4.164
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 134.788,
        "saikou": 2.28,
        "heikin": 1.74,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 3.996
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 250.788,
        "saikou": 1.6,
        "heikin": 1.28,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 3.861
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 238.388,
        "saikou": 3.26,
        "heikin": 2.46,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.788
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 213.03,
        "saikou": 2.34,
        "heikin": 1.99,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.773
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 213.03,
        "saikou": 2.77,
        "heikin": 2.44,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 3.527
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 211.056,
        "saikou": 2.11,
        "heikin": 1.89,
        "boshuAvg30d": 181.7,
        "heikinAvg30d": 3.493
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 198.656,
        "saikou": 1.91,
        "heikin": 1.69,
        "boshuAvg30d": 181.7,
        "heikinAvg30d": 3.285
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 193.77,
        "saikou": 1.34,
        "heikin": 1.21,
        "boshuAvg30d": 181.7,
        "heikinAvg30d": 3.285
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 193.77,
        "saikou": 0.6,
        "heikin": 0.41,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.138
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 191.866,
        "saikou": 0.72,
        "heikin": 0.42,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.228
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 211.04,
        "saikou": 2.89,
        "heikin": 2.65,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.825
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 211.04,
        "saikou": 4.19,
        "heikin": 3.74,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 4.385
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 224.93,
        "saikou": 3.93,
        "heikin": 3.33,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 4.306
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 226.928,
        "saikou": 7.84,
        "heikin": 6.41,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.963
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 126.928,
        "saikou": 10,
        "heikin": 5.89,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 5.362
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 150.928,
        "saikou": 9.69,
        "heikin": 6.45,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 5.446
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 246.928,
        "saikou": 10,
        "heikin": 7.98,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 6.521
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 409.104,
        "saikou": 10,
        "heikin": 8.92,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 7.115
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 392.228,
        "saikou": 10,
        "heikin": 9.03,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 7.241
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 376.312,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 7.335
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 217.75,
        "saikou": 9.72,
        "heikin": 8.63,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 7.298
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 221.754,
        "saikou": 9.58,
        "heikin": 8.61,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 7.315
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 251.504,
        "saikou": 9.54,
        "heikin": 7.42,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.955
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 257.259,
        "saikou": 9.31,
        "heikin": 6.46,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.571
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 258.188,
        "saikou": 9.37,
        "heikin": 7.37,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.734
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 258.188,
        "saikou": 9.02,
        "heikin": 6.31,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.403
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 258.783,
        "saikou": 8.95,
        "heikin": 6.26,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.31
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 259.783,
        "saikou": 8.28,
        "heikin": 5.86,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.185
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 259.783,
        "saikou": 9.09,
        "heikin": 6.37,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.336
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 264.583,
        "saikou": 8.28,
        "heikin": 5.83,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.087
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 255.933,
        "saikou": 8.28,
        "heikin": 5.9,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 5.883
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 160.935,
        "saikou": 5.28,
        "heikin": 3.38,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 5.246
      }
    ]
  }
};
