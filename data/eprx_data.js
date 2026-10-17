// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/17〜2026/10/16）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-17",
  "fetchedAt": "2026-10-17",
  "avgWindowLabel": "過去30日平均（2026/09/17〜2026/10/16）",
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
      "ouatsu": 1607.144,
      "saikou": 10,
      "heikin": 3.98,
      "boshuAvg30d": 1143.8,
      "heikinAvg30d": 2.834
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1579.251,
      "saikou": 10,
      "heikin": 4.01,
      "boshuAvg30d": 1143.8,
      "heikinAvg30d": 2.759
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1622.678,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1143.8,
      "heikinAvg30d": 2.742
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1696.876,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1143.8,
      "heikinAvg30d": 2.645
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1671.421,
      "saikou": 10,
      "heikin": 3.83,
      "boshuAvg30d": 1139.8,
      "heikinAvg30d": 2.641
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1762.576,
      "saikou": 10,
      "heikin": 4.09,
      "boshuAvg30d": 1138.8,
      "heikinAvg30d": 2.741
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1814.72,
      "saikou": 10,
      "heikin": 4.3,
      "boshuAvg30d": 1151.6,
      "heikinAvg30d": 2.902
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1773.189,
      "saikou": 10,
      "heikin": 4.44,
      "boshuAvg30d": 1153.1,
      "heikinAvg30d": 3.094
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1739.704,
      "saikou": 9.8,
      "heikin": 4.5,
      "boshuAvg30d": 1155.6,
      "heikinAvg30d": 3.179
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1759.874,
      "saikou": 9.8,
      "heikin": 4.38,
      "boshuAvg30d": 1156.1,
      "heikinAvg30d": 3.351
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1699.415,
      "saikou": 9.77,
      "heikin": 4.63,
      "boshuAvg30d": 1156.1,
      "heikinAvg30d": 3.406
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1632.585,
      "saikou": 10,
      "heikin": 4.66,
      "boshuAvg30d": 1156.1,
      "heikinAvg30d": 3.435
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1534.577,
      "saikou": 10,
      "heikin": 4.89,
      "boshuAvg30d": 1218.9,
      "heikinAvg30d": 3.465
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1657.584,
      "saikou": 10,
      "heikin": 4.58,
      "boshuAvg30d": 1241.0,
      "heikinAvg30d": 3.263
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1533.226,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1262.9,
      "heikinAvg30d": 2.939
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1631.351,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1280.4,
      "heikinAvg30d": 2.767
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1648.465,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1280.8,
      "heikinAvg30d": 2.931
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1592.057,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1280.8,
      "heikinAvg30d": 2.957
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1137,
      "ouatsu": 1430.552,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1246.8,
      "heikinAvg30d": 3.147
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1140,
      "ouatsu": 1475.582,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1250.3,
      "heikinAvg30d": 3.115
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1145,
      "ouatsu": 1339.896,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1253.8,
      "heikinAvg30d": 3.19
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1145,
      "ouatsu": 1377.49,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1253.8,
      "heikinAvg30d": 3.097
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1142,
      "ouatsu": 1398.814,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1250.8,
      "heikinAvg30d": 3.088
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1141,
      "ouatsu": 1398.53,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1249.8,
      "heikinAvg30d": 3.026
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1121,
      "ouatsu": 1385.919,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1235.9,
      "heikinAvg30d": 2.94
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1121,
      "ouatsu": 1405.769,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1235.9,
      "heikinAvg30d": 2.943
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1121,
      "ouatsu": 1479.693,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1235.9,
      "heikinAvg30d": 3.039
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1119,
      "ouatsu": 1509.463,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1232.4,
      "heikinAvg30d": 3.131
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1116,
      "ouatsu": 1475.065,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1228.4,
      "heikinAvg30d": 3.106
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1110,
      "ouatsu": 1443.692,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1222.0,
      "heikinAvg30d": 3.222
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1533.8,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1258.0,
      "heikinAvg30d": 3.108
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1481.703,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1258.0,
      "heikinAvg30d": 3.342
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1626.997,
      "saikou": 9.8,
      "heikin": 3.42,
      "boshuAvg30d": 1258.5,
      "heikinAvg30d": 3.731
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1726.485,
      "saikou": 8.59,
      "heikin": 3.73,
      "boshuAvg30d": 1257.0,
      "heikinAvg30d": 4.045
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1873.226,
      "saikou": 8.91,
      "heikin": 3.59,
      "boshuAvg30d": 1253.8,
      "heikinAvg30d": 4.098
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1929.198,
      "saikou": 8.91,
      "heikin": 3.6,
      "boshuAvg30d": 1248.9,
      "heikinAvg30d": 4.177
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1881.955,
      "saikou": 8.72,
      "heikin": 3.59,
      "boshuAvg30d": 1242.5,
      "heikinAvg30d": 4.121
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1888.702,
      "saikou": 8.79,
      "heikin": 3.52,
      "boshuAvg30d": 1242.5,
      "heikinAvg30d": 4.02
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1883.447,
      "saikou": 8.74,
      "heikin": 3.48,
      "boshuAvg30d": 1242.6,
      "heikinAvg30d": 3.916
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1801.235,
      "saikou": 9.98,
      "heikin": 3.58,
      "boshuAvg30d": 1241.6,
      "heikinAvg30d": 3.685
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1850.336,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1235.0,
      "heikinAvg30d": 3.651
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1854.406,
      "saikou": 9.77,
      "heikin": 3.74,
      "boshuAvg30d": 1233.1,
      "heikinAvg30d": 3.563
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1065,
      "ouatsu": 2027.998,
      "saikou": 9.91,
      "heikin": 4.02,
      "boshuAvg30d": 1153.2,
      "heikinAvg30d": 3.398
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1068,
      "ouatsu": 1853.784,
      "saikou": 9.8,
      "heikin": 3.51,
      "boshuAvg30d": 1156.2,
      "heikinAvg30d": 3.476
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1069,
      "ouatsu": 1700.059,
      "saikou": 9.91,
      "heikin": 3.84,
      "boshuAvg30d": 1157.5,
      "heikinAvg30d": 3.391
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1064,
      "ouatsu": 1807.83,
      "saikou": 9.91,
      "heikin": 3.64,
      "boshuAvg30d": 1151.6,
      "heikinAvg30d": 3.237
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1055,
      "ouatsu": 1756.25,
      "saikou": 9.77,
      "heikin": 3.59,
      "boshuAvg30d": 1143.5,
      "heikinAvg30d": 3.248
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1048,
      "ouatsu": 1922.971,
      "saikou": 9.91,
      "heikin": 3.78,
      "boshuAvg30d": 1136.1,
      "heikinAvg30d": 2.944
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
        "ouatsu": 86.408,
        "saikou": 9.8,
        "heikin": 5.25,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.698
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.96,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.381
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.26,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.456
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 45.418,
        "saikou": 9.77,
        "heikin": 7.13,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.16
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.96,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.653
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.96,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.652
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.96,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 2.914
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.96,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 2.845
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.01,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 2.994
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 6.66,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 2.759
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 45.418,
        "saikou": 9.77,
        "heikin": 7.88,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 2.936
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.01,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 3.199
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.96,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.868
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 91.908,
        "saikou": 9.91,
        "heikin": 9.33,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.734
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 116.408,
        "saikou": 9.8,
        "heikin": 2.85,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 2.559
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 126.408,
        "saikou": 9.91,
        "heikin": 6.07,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.393
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 84.408,
        "saikou": 9.77,
        "heikin": 4.53,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.228
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 81.408,
        "saikou": 9.77,
        "heikin": 4.57,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.93
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 79.418,
        "saikou": 9.77,
        "heikin": 4.57,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 2.066
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 79.418,
        "saikou": 9.77,
        "heikin": 4.57,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.72
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 72.918,
        "saikou": 9.77,
        "heikin": 4.89,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 2.354
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 77.918,
        "saikou": 9.77,
        "heikin": 4.57,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.582
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 77.918,
        "saikou": 9.77,
        "heikin": 4.57,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.224
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 77.918,
        "saikou": 9.77,
        "heikin": 4.57,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.062
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 75.95,
        "saikou": 9.77,
        "heikin": 4.57,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 2.11
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 77.918,
        "saikou": 9.77,
        "heikin": 4.57,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 2.353
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 79.418,
        "saikou": 9.77,
        "heikin": 2.86,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.831
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 79.418,
        "saikou": 9.8,
        "heikin": 4.61,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 2.272
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 79.418,
        "saikou": 9.77,
        "heikin": 4.56,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 2.505
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 79.418,
        "saikou": 9.8,
        "heikin": 4.6,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 2.876
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 134.708,
        "saikou": 9.91,
        "heikin": 6.51,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 1.866
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 45.418,
        "saikou": 9.77,
        "heikin": 7.88,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 2.96
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 64.308,
        "saikou": 9.8,
        "heikin": 6.97,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 4.151
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 174.708,
        "saikou": 3.95,
        "heikin": 3.95,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 4.524
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 124.44,
        "saikou": 4.05,
        "heikin": 4.05,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 4.555
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 187.908,
        "saikou": 3.73,
        "heikin": 3.73,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 4.387
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 124.418,
        "saikou": 3.73,
        "heikin": 3.73,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 4.359
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 124.418,
        "saikou": 8.79,
        "heikin": 3.99,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 4.213
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 137.6,
        "saikou": 4.99,
        "heikin": 3.96,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.722
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.46,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.497
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 94.208,
        "saikou": 9.91,
        "heikin": 9.4,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 3.578
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 45.418,
        "saikou": 9.77,
        "heikin": 7.88,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.136
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 134.708,
        "saikou": 9.91,
        "heikin": 9.3,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.305
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.38,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 3.635
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 95.708,
        "saikou": 9.91,
        "heikin": 9.36,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 3.369
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 95.708,
        "saikou": 9.91,
        "heikin": 8.9,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 3.11
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 45.418,
        "saikou": 9.77,
        "heikin": 7.88,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 3.412
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 134.708,
        "saikou": 9.91,
        "heikin": 8.57,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.864
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 55.012,
        "saikou": 8.3,
        "heikin": 5.51,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 6.433
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 55.012,
        "saikou": 8.12,
        "heikin": 5.33,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 6.706
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 74.89,
        "saikou": 8.04,
        "heikin": 5.34,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 6.744
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 76.85,
        "saikou": 8.32,
        "heikin": 5.17,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 6.817
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 72.904,
        "saikou": 7.93,
        "heikin": 4.89,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 6.866
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 72.904,
        "saikou": 7.25,
        "heikin": 4.7,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 6.942
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 89.85,
        "saikou": 7.24,
        "heikin": 4.72,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 6.942
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 91.35,
        "saikou": 7.38,
        "heikin": 4.88,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 6.848
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 95.348,
        "saikou": 7.08,
        "heikin": 4.55,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 6.823
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 95.348,
        "saikou": 7.09,
        "heikin": 4.47,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 6.802
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 95.348,
        "saikou": 7.06,
        "heikin": 5.22,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 6.939
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 95.348,
        "saikou": 7.26,
        "heikin": 5.95,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 7.009
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 107.348,
        "saikou": 7.72,
        "heikin": 6.59,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 7.184
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 81.884,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 7.346
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 107.384,
        "saikou": 10,
        "heikin": 7.08,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 7.587
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 117.884,
        "saikou": 10,
        "heikin": 6.9,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 7.8
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 119.384,
        "saikou": 10,
        "heikin": 8.15,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 8.114
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 117.884,
        "saikou": 10,
        "heikin": 8.39,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 8.113
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 119.384,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 8.023
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 109.36,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 120.7,
        "heikinAvg30d": 8.153
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 106.755,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 8.099
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 106.755,
        "saikou": 10,
        "heikin": 8.28,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 8.198
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 110.71,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 8.219
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 108.81,
        "saikou": 10,
        "heikin": 8.24,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 8.141
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 106.518,
        "saikou": 10,
        "heikin": 8.27,
        "boshuAvg30d": 119.7,
        "heikinAvg30d": 8.191
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 106.814,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 119.7,
        "heikinAvg30d": 8.075
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 121.38,
        "saikou": 10,
        "heikin": 8.14,
        "boshuAvg30d": 119.7,
        "heikinAvg30d": 7.725
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 110.71,
        "saikou": 10,
        "heikin": 8.07,
        "boshuAvg30d": 117.7,
        "heikinAvg30d": 7.36
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 121.38,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 116.8,
        "heikinAvg30d": 7.487
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 121.38,
        "saikou": 10,
        "heikin": 8.99,
        "boshuAvg30d": 113.4,
        "heikinAvg30d": 6.653
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 117.38,
        "saikou": 10,
        "heikin": 7.33,
        "boshuAvg30d": 161.5,
        "heikinAvg30d": 6.785
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 117.38,
        "saikou": 10,
        "heikin": 6.47,
        "boshuAvg30d": 161.5,
        "heikinAvg30d": 6.157
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 117.344,
        "saikou": 9.59,
        "heikin": 5.64,
        "boshuAvg30d": 161.5,
        "heikinAvg30d": 6.086
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 127.844,
        "saikou": 8.37,
        "heikin": 4.89,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.138
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 117.344,
        "saikou": 8.27,
        "heikin": 5.04,
        "boshuAvg30d": 159.5,
        "heikinAvg30d": 6.063
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 115.844,
        "saikou": 8.27,
        "heikin": 5.09,
        "boshuAvg30d": 158.1,
        "heikinAvg30d": 5.713
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 115.348,
        "saikou": 8.34,
        "heikin": 4.88,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 5.853
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 125.848,
        "saikou": 8.34,
        "heikin": 4.6,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 5.524
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 125.448,
        "saikou": 8.37,
        "heikin": 4.61,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 5.57
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 114.778,
        "saikou": 9.98,
        "heikin": 4.89,
        "boshuAvg30d": 156.6,
        "heikinAvg30d": 5.7
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 110.823,
        "saikou": 10,
        "heikin": 5.08,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 5.71
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 122.823,
        "saikou": 8.76,
        "heikin": 5.23,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 5.828
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 125.428,
        "saikou": 9.03,
        "heikin": 5.43,
        "boshuAvg30d": 78.1,
        "heikinAvg30d": 5.985
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 125.428,
        "saikou": 9.56,
        "heikin": 6.59,
        "boshuAvg30d": 78.1,
        "heikinAvg30d": 5.79
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 113.998,
        "saikou": 8.37,
        "heikin": 5.6,
        "boshuAvg30d": 78.1,
        "heikinAvg30d": 6.103
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 125.428,
        "saikou": 8.38,
        "heikin": 5.64,
        "boshuAvg30d": 77.1,
        "heikinAvg30d": 6.052
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 125.428,
        "saikou": 9.03,
        "heikin": 5.61,
        "boshuAvg30d": 75.5,
        "heikinAvg30d": 6.173
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 125.278,
        "saikou": 9.72,
        "heikin": 6.14,
        "boshuAvg30d": 75.1,
        "heikinAvg30d": 6.517
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 469.839,
        "saikou": 10,
        "heikin": 4.61,
        "boshuAvg30d": 335.8,
        "heikinAvg30d": 3.727
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 422.529,
        "saikou": 10,
        "heikin": 4.91,
        "boshuAvg30d": 335.8,
        "heikinAvg30d": 3.872
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 470.357,
        "saikou": 10,
        "heikin": 5.03,
        "boshuAvg30d": 335.8,
        "heikinAvg30d": 3.597
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 507.267,
        "saikou": 10,
        "heikin": 5.03,
        "boshuAvg30d": 335.8,
        "heikinAvg30d": 3.502
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 465.752,
        "saikou": 10,
        "heikin": 5.27,
        "boshuAvg30d": 334.4,
        "heikinAvg30d": 3.425
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 495.215,
        "saikou": 10,
        "heikin": 4.94,
        "boshuAvg30d": 333.8,
        "heikinAvg30d": 3.485
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 513.143,
        "saikou": 10,
        "heikin": 5.06,
        "boshuAvg30d": 332.3,
        "heikinAvg30d": 3.615
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 509.703,
        "saikou": 10,
        "heikin": 5.08,
        "boshuAvg30d": 333.8,
        "heikinAvg30d": 3.751
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 511.223,
        "saikou": 9.6,
        "heikin": 4.97,
        "boshuAvg30d": 334.3,
        "heikinAvg30d": 3.849
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 514.993,
        "saikou": 9.62,
        "heikin": 4.98,
        "boshuAvg30d": 334.8,
        "heikinAvg30d": 4.037
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 460.438,
        "saikou": 9.56,
        "heikin": 5.3,
        "boshuAvg30d": 334.8,
        "heikinAvg30d": 3.918
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 440.102,
        "saikou": 10,
        "heikin": 5.7,
        "boshuAvg30d": 334.8,
        "heikinAvg30d": 4.098
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 351.739,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 354.8,
        "heikinAvg30d": 4.098
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 372.213,
        "saikou": 10,
        "heikin": 5.54,
        "boshuAvg30d": 362.8,
        "heikinAvg30d": 4.329
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 372.613,
        "saikou": 10,
        "heikin": 5.09,
        "boshuAvg30d": 367.8,
        "heikinAvg30d": 3.943
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 378.705,
        "saikou": 10,
        "heikin": 4.79,
        "boshuAvg30d": 372.8,
        "heikinAvg30d": 3.69
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 415.39,
        "saikou": 10,
        "heikin": 4.25,
        "boshuAvg30d": 372.8,
        "heikinAvg30d": 3.869
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 415.39,
        "saikou": 10,
        "heikin": 4.29,
        "boshuAvg30d": 372.8,
        "heikinAvg30d": 3.886
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 399.687,
        "saikou": 10,
        "heikin": 4.25,
        "boshuAvg30d": 367.3,
        "heikinAvg30d": 4.154
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 399.687,
        "saikou": 10,
        "heikin": 4.4,
        "boshuAvg30d": 367.3,
        "heikinAvg30d": 4.211
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 345.903,
        "saikou": 10,
        "heikin": 5.47,
        "boshuAvg30d": 367.3,
        "heikinAvg30d": 4.149
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 345.948,
        "saikou": 10,
        "heikin": 5.5,
        "boshuAvg30d": 366.3,
        "heikinAvg30d": 3.963
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 365.013,
        "saikou": 10,
        "heikin": 5.42,
        "boshuAvg30d": 363.8,
        "heikinAvg30d": 3.93
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 365.065,
        "saikou": 10,
        "heikin": 5.43,
        "boshuAvg30d": 363.8,
        "heikinAvg30d": 3.853
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 374.045,
        "saikou": 10,
        "heikin": 5.14,
        "boshuAvg30d": 361.8,
        "heikinAvg30d": 3.807
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 379.974,
        "saikou": 10,
        "heikin": 5.08,
        "boshuAvg30d": 361.8,
        "heikinAvg30d": 3.745
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 400.387,
        "saikou": 10,
        "heikin": 4.95,
        "boshuAvg30d": 361.8,
        "heikinAvg30d": 3.872
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 415.387,
        "saikou": 10,
        "heikin": 4.37,
        "boshuAvg30d": 361.6,
        "heikinAvg30d": 3.987
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 385.387,
        "saikou": 10,
        "heikin": 4.2,
        "boshuAvg30d": 360.6,
        "heikinAvg30d": 3.828
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 415.387,
        "saikou": 10,
        "heikin": 3.92,
        "boshuAvg30d": 360.1,
        "heikinAvg30d": 3.687
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 318.008,
        "saikou": 4.55,
        "heikin": 2.25,
        "boshuAvg30d": 358.6,
        "heikinAvg30d": 3.663
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 405.201,
        "saikou": 5.93,
        "heikin": 3.44,
        "boshuAvg30d": 358.6,
        "heikinAvg30d": 3.648
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 376.995,
        "saikou": 6.09,
        "heikin": 3.18,
        "boshuAvg30d": 358.6,
        "heikinAvg30d": 3.908
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 384.849,
        "saikou": 5.9,
        "heikin": 2.96,
        "boshuAvg30d": 358.5,
        "heikinAvg30d": 4.155
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 601.752,
        "saikou": 5.58,
        "heikin": 2.01,
        "boshuAvg30d": 358.2,
        "heikinAvg30d": 4.025
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 598.002,
        "saikou": 5.6,
        "heikin": 2.08,
        "boshuAvg30d": 357.9,
        "heikinAvg30d": 4.022
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 605.729,
        "saikou": 5.82,
        "heikin": 2.32,
        "boshuAvg30d": 360.4,
        "heikinAvg30d": 4.121
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 603.744,
        "saikou": 5.6,
        "heikin": 2.06,
        "boshuAvg30d": 360.4,
        "heikinAvg30d": 3.967
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 561.744,
        "saikou": 5.82,
        "heikin": 2.34,
        "boshuAvg30d": 360.5,
        "heikinAvg30d": 3.995
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 557.953,
        "saikou": 5.82,
        "heikin": 2.43,
        "boshuAvg30d": 360.5,
        "heikinAvg30d": 3.759
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 559.931,
        "saikou": 5.82,
        "heikin": 2.48,
        "boshuAvg30d": 358.5,
        "heikinAvg30d": 3.784
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 570.819,
        "saikou": 5.78,
        "heikin": 2.5,
        "boshuAvg30d": 358.5,
        "heikinAvg30d": 3.795
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 601.354,
        "saikou": 6.17,
        "heikin": 2.38,
        "boshuAvg30d": 358.0,
        "heikinAvg30d": 3.551
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 565.657,
        "saikou": 3.41,
        "heikin": 2.43,
        "boshuAvg30d": 358.0,
        "heikinAvg30d": 3.673
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 386.71,
        "saikou": 5.76,
        "heikin": 2.49,
        "boshuAvg30d": 358.4,
        "heikinAvg30d": 3.406
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 499.567,
        "saikou": 5.61,
        "heikin": 2.21,
        "boshuAvg30d": 356.4,
        "heikinAvg30d": 3.59
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 486.393,
        "saikou": 5.7,
        "heikin": 2.7,
        "boshuAvg30d": 354.4,
        "heikinAvg30d": 3.82
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 494.027,
        "saikou": 5.98,
        "heikin": 3.07,
        "boshuAvg30d": 353.4,
        "heikinAvg30d": 3.826
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 259.752,
        "saikou": 3.03,
        "heikin": 2.04,
        "boshuAvg30d": 90.0,
        "heikinAvg30d": 1.992
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 258.147,
        "saikou": 3.21,
        "heikin": 1.64,
        "boshuAvg30d": 90.0,
        "heikinAvg30d": 1.751
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 266.294,
        "saikou": 3.25,
        "heikin": 1.66,
        "boshuAvg30d": 90.0,
        "heikinAvg30d": 1.753
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 264.06,
        "saikou": 3.26,
        "heikin": 1.68,
        "boshuAvg30d": 90.0,
        "heikinAvg30d": 1.812
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 279.256,
        "saikou": 3.1,
        "heikin": 1.66,
        "boshuAvg30d": 89.0,
        "heikinAvg30d": 1.704
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 281.162,
        "saikou": 1.91,
        "heikin": 1.22,
        "boshuAvg30d": 89.0,
        "heikinAvg30d": 1.686
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 306.859,
        "saikou": 1.91,
        "heikin": 1.2,
        "boshuAvg30d": 88.5,
        "heikinAvg30d": 1.604
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 281.571,
        "saikou": 1.91,
        "heikin": 1.22,
        "boshuAvg30d": 88.5,
        "heikinAvg30d": 1.795
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 285.287,
        "saikou": 1.91,
        "heikin": 1.32,
        "boshuAvg30d": 89.0,
        "heikinAvg30d": 1.81
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 271.357,
        "saikou": 1.86,
        "heikin": 1.22,
        "boshuAvg30d": 89.0,
        "heikinAvg30d": 1.753
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 271.419,
        "saikou": 1.88,
        "heikin": 1.35,
        "boshuAvg30d": 89.0,
        "heikinAvg30d": 1.846
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 267.935,
        "saikou": 1.88,
        "heikin": 1.32,
        "boshuAvg30d": 89.0,
        "heikinAvg30d": 1.852
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 220.224,
        "saikou": 6.23,
        "heikin": 1.96,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 2.034
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 220.224,
        "saikou": 7.73,
        "heikin": 2.44,
        "boshuAvg30d": 102.0,
        "heikinAvg30d": 2.07
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 162.585,
        "saikou": 5.3,
        "heikin": 2.3,
        "boshuAvg30d": 105.0,
        "heikinAvg30d": 2.061
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 142.985,
        "saikou": 8.47,
        "heikin": 2.31,
        "boshuAvg30d": 107.0,
        "heikinAvg30d": 2.127
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 142.985,
        "saikou": 8.63,
        "heikin": 2.41,
        "boshuAvg30d": 107.0,
        "heikinAvg30d": 2.267
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 133.791,
        "saikou": 8.63,
        "heikin": 2.44,
        "boshuAvg30d": 107.0,
        "heikinAvg30d": 2.332
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 144.975,
        "saikou": 9.25,
        "heikin": 3.22,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 2.723
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 144.975,
        "saikou": 9.49,
        "heikin": 3.18,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 2.687
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 123.886,
        "saikou": 9.49,
        "heikin": 3.43,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 2.959
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 125.867,
        "saikou": 9.49,
        "heikin": 3.45,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 3.023
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 123.894,
        "saikou": 9.49,
        "heikin": 3.26,
        "boshuAvg30d": 110.5,
        "heikinAvg30d": 2.9
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 121.921,
        "saikou": 9.49,
        "heikin": 3.26,
        "boshuAvg30d": 109.5,
        "heikinAvg30d": 2.875
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 108.213,
        "saikou": 9.49,
        "heikin": 3.3,
        "boshuAvg30d": 106.0,
        "heikinAvg30d": 2.844
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 116.092,
        "saikou": 9.49,
        "heikin": 3.29,
        "boshuAvg30d": 106.0,
        "heikinAvg30d": 2.803
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 131.797,
        "saikou": 9.49,
        "heikin": 3.25,
        "boshuAvg30d": 106.0,
        "heikinAvg30d": 2.714
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 133.781,
        "saikou": 9.25,
        "heikin": 3.2,
        "boshuAvg30d": 105.5,
        "heikinAvg30d": 2.688
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 144.975,
        "saikou": 9.25,
        "heikin": 3.32,
        "boshuAvg30d": 105.0,
        "heikinAvg30d": 2.838
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 142.991,
        "saikou": 8.63,
        "heikin": 3.27,
        "boshuAvg30d": 105.0,
        "heikinAvg30d": 2.913
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 215.763,
        "saikou": 8.47,
        "heikin": 2.33,
        "boshuAvg30d": 103.5,
        "heikinAvg30d": 2.662
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 215.763,
        "saikou": 3.08,
        "heikin": 2.5,
        "boshuAvg30d": 103.5,
        "heikinAvg30d": 2.685
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 280.975,
        "saikou": 2.95,
        "heikin": 2.53,
        "boshuAvg30d": 103.5,
        "heikinAvg30d": 2.595
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 282.465,
        "saikou": 2.79,
        "heikin": 2.16,
        "boshuAvg30d": 103.5,
        "heikinAvg30d": 2.749
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 300.744,
        "saikou": 3.08,
        "heikin": 2.03,
        "boshuAvg30d": 103.5,
        "heikinAvg30d": 2.604
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 288.055,
        "saikou": 2.84,
        "heikin": 2.06,
        "boshuAvg30d": 102.9,
        "heikinAvg30d": 2.638
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 315.996,
        "saikou": 3,
        "heikin": 2.13,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 2.341
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 315.996,
        "saikou": 2.84,
        "heikin": 1.98,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 2.169
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 302.211,
        "saikou": 2.53,
        "heikin": 1.79,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 2.011
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 321.797,
        "saikou": 2.72,
        "heikin": 1.99,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 2.012
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 294.672,
        "saikou": 2.71,
        "heikin": 1.85,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 1.941
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 327.341,
        "saikou": 2.55,
        "heikin": 1.88,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 1.964
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 335.25,
        "saikou": 2.66,
        "heikin": 1.86,
        "boshuAvg30d": 101.5,
        "heikinAvg30d": 1.772
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 307.771,
        "saikou": 2.32,
        "heikin": 1.77,
        "boshuAvg30d": 102.5,
        "heikinAvg30d": 2.019
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 305.787,
        "saikou": 2.84,
        "heikin": 1.64,
        "boshuAvg30d": 102.5,
        "heikinAvg30d": 2.044
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 307.771,
        "saikou": 3.12,
        "heikin": 2,
        "boshuAvg30d": 101.5,
        "heikinAvg30d": 2.05
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 305.911,
        "saikou": 3.24,
        "heikin": 1.93,
        "boshuAvg30d": 100.5,
        "heikinAvg30d": 1.953
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 313.487,
        "saikou": 3.06,
        "heikin": 1.88,
        "boshuAvg30d": 97.5,
        "heikinAvg30d": 2.028
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.75,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 0.888
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 0.907
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.68,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 1.026
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.85,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 1.048
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 1.019
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 0.945
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 1.149
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 1.35
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 1.069
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 1.224
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 1.444
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 1.453
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.9,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.736
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.464
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.443
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 57.928,
        "saikou": 2.4,
        "heikin": 0.53,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.495
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 57.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.456
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 57.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.35
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 57.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.763
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 57.928,
        "saikou": 4.3,
        "heikin": 0.63,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.698
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.944
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.425
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.141
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.917
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 1.93,
        "saikou": 4.5,
        "heikin": 4.5,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.497
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.45,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.363
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 3.177
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 57.928,
        "saikou": 2.75,
        "heikin": 0.55,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.822
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 57.928,
        "saikou": 3.75,
        "heikin": 0.61,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.771
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 57.928,
        "saikou": 3.55,
        "heikin": 0.6,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 3.108
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 57.928,
        "saikou": 5.45,
        "heikin": 0.72,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.215
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 57.928,
        "saikou": 6.35,
        "heikin": 0.77,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.827
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 40.492,
        "saikou": 0.5,
        "heikin": 0.44,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.957
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 19.154,
        "saikou": 2.82,
        "heikin": 2.82,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.665
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.381
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.95,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.251
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.407
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.507
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.44
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.734
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 6.674,
        "saikou": 3.33,
        "heikin": 2.61,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.952
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 6.028,
        "saikou": 3.33,
        "heikin": 2.81,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.619
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 11.658,
        "saikou": 3.33,
        "heikin": 2.95,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.669
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 10.48,
        "saikou": 2.63,
        "heikin": 2.47,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.765
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 20.43,
        "saikou": 2.63,
        "heikin": 2.6,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.994
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.553
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 9.084,
        "saikou": 2.3,
        "heikin": 2.15,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.286
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 9.318,
        "saikou": 2.45,
        "heikin": 1.26,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.037
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 102.055,
        "saikou": 1.89,
        "heikin": 1.16,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.764
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 153.266,
        "saikou": 1.46,
        "heikin": 0.76,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.494
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 151.306,
        "saikou": 1.46,
        "heikin": 0.81,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.359
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 159.034,
        "saikou": 1.46,
        "heikin": 0.85,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.287
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 155.155,
        "saikou": 1.46,
        "heikin": 0.73,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.219
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 162.941,
        "saikou": 1.46,
        "heikin": 0.8,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.366
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 122.94,
        "saikou": 1.99,
        "heikin": 1.21,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.538
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 126.928,
        "saikou": 1.99,
        "heikin": 1.34,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.702
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.5,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.619
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.49,
        "heikin": 1.18,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.712
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.48,
        "heikin": 1.26,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.644
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.49,
        "heikin": 1.21,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.503
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 107.314,
        "saikou": 1.89,
        "heikin": 1.32,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 1.686
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 174.811,
        "saikou": 1.94,
        "heikin": 0.94,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.679
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 168.825,
        "saikou": 2.34,
        "heikin": 1.19,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 1.706
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 162.958,
        "saikou": 2.34,
        "heikin": 1.15,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 1.699
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 144.887,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 1.876
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 154.74,
        "saikou": 1.59,
        "heikin": 0.43,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.141
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 152.753,
        "saikou": 2.17,
        "heikin": 1.39,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 2.393
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 152.753,
        "saikou": 3.95,
        "heikin": 1.91,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 2.27
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 131.154,
        "saikou": 5.95,
        "heikin": 2.46,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 2.55
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 129.711,
        "saikou": 5.95,
        "heikin": 2.65,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 2.561
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 131.696,
        "saikou": 5.95,
        "heikin": 2.65,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 2.558
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 133.139,
        "saikou": 3,
        "heikin": 2.27,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 2.38
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 136.917,
        "saikou": 3,
        "heikin": 1.87,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.26
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 146.816,
        "saikou": 4.93,
        "heikin": 2.11,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.263
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 152.753,
        "saikou": 5.95,
        "heikin": 2.11,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.592
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 152.753,
        "saikou": 3,
        "heikin": 1.96,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 2.369
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 126.938,
        "saikou": 4.45,
        "heikin": 2.2,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.255
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 59.899,
        "saikou": 2.98,
        "heikin": 2.26,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.182
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 107.324,
        "saikou": 1.59,
        "heikin": 1.59,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.231
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 107.324,
        "saikou": 3.95,
        "heikin": 2.8,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.536
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 109.194,
        "saikou": 2.5,
        "heikin": 2.32,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.443
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 101.765,
        "saikou": 2.44,
        "heikin": 2.14,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.442
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 103.752,
        "saikou": 2.5,
        "heikin": 2.18,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.441
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 105.195,
        "saikou": 3.7,
        "heikin": 2.64,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.559
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 103.235,
        "saikou": 2.24,
        "heikin": 1.87,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 2.247
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 99.368,
        "saikou": 2.42,
        "heikin": 1.93,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 2.266
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 107.314,
        "saikou": 2,
        "heikin": 1.7,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 2.27
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.23
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 105.329,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.146
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 105.329,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.138
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 107.314,
        "saikou": 2,
        "heikin": 1.66,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.083
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 126.928,
        "saikou": 2,
        "heikin": 1.52,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.17
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 107.314,
        "saikou": 2,
        "heikin": 1.73,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.202
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 105.316,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 2.169
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 111.928,
        "saikou": 1.99,
        "heikin": 1.31,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 1.674
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 153.968,
        "saikou": 1.99,
        "heikin": 1.22,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 1.829
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 173.285,
        "saikou": 5.62,
        "heikin": 4.54,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.746
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 173.285,
        "saikou": 5.62,
        "heikin": 4.69,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.765
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 191.05,
        "saikou": 3.27,
        "heikin": 2.75,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.827
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 222.876,
        "saikou": 2.29,
        "heikin": 1.96,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.724
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 177.075,
        "saikou": 3.31,
        "heikin": 2.91,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.618
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 177.075,
        "saikou": 6.22,
        "heikin": 5.15,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.843
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 193.934,
        "saikou": 6.31,
        "heikin": 5.22,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.01
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 193.934,
        "saikou": 7.16,
        "heikin": 5.87,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.326
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 193.934,
        "saikou": 7.56,
        "heikin": 6.18,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.497
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 193.934,
        "saikou": 6.93,
        "heikin": 4.94,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.972
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 193.934,
        "saikou": 7.16,
        "heikin": 5.09,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.985
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 193.934,
        "saikou": 7.4,
        "heikin": 5.24,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.956
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 193.934,
        "saikou": 6.93,
        "heikin": 4.96,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 3.212
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 193.934,
        "saikou": 6.31,
        "heikin": 5.17,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.379
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 209.801,
        "saikou": 2.29,
        "heikin": 1.68,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 1.624
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 209.801,
        "saikou": 2.29,
        "heikin": 1.22,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 1.285
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 209.801,
        "saikou": 1.56,
        "heikin": 0.78,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 1.385
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 212.234,
        "saikou": 1.56,
        "heikin": 0.81,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 1.479
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 105.619,
        "saikou": 2.29,
        "heikin": 1.68,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 1.611
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 162.636,
        "saikou": 1.56,
        "heikin": 0.94,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 1.572
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 196.348,
        "saikou": 2.7,
        "heikin": 1.08,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 1.643
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 196.348,
        "saikou": 4,
        "heikin": 1.11,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.54
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 196.348,
        "saikou": 2.7,
        "heikin": 1.08,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.624
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 196.348,
        "saikou": 4,
        "heikin": 1.11,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.678
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 196.348,
        "saikou": 2.29,
        "heikin": 1.01,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.486
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 196.348,
        "saikou": 2.29,
        "heikin": 1.01,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.539
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 196.348,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.834
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 196.348,
        "saikou": 1.56,
        "heikin": 0.77,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 1.729
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 193.915,
        "saikou": 2.29,
        "heikin": 1.07,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 1.697
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 193.915,
        "saikou": 2.7,
        "heikin": 1.08,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.701
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 193.915,
        "saikou": 2.29,
        "heikin": 1.1,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 1.99
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 193.915,
        "saikou": 2.7,
        "heikin": 1.55,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.34
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 193.915,
        "saikou": 2.65,
        "heikin": 2.26,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.589
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 193.915,
        "saikou": 6.25,
        "heikin": 4.88,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.272
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 180.481,
        "saikou": 6.93,
        "heikin": 5.26,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.821
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 180.481,
        "saikou": 7.16,
        "heikin": 5.48,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.037
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 178.491,
        "saikou": 6.93,
        "heikin": 5.4,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.167
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 178.491,
        "saikou": 6.93,
        "heikin": 5.05,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.192
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 196.375,
        "saikou": 6.22,
        "heikin": 4.34,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.923
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 198.365,
        "saikou": 6.24,
        "heikin": 4.3,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.43
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 198.365,
        "saikou": 6.93,
        "heikin": 4.68,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.613
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 198.365,
        "saikou": 6.93,
        "heikin": 4.68,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 3.394
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 195.932,
        "saikou": 6.93,
        "heikin": 4.65,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.59
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 195.932,
        "saikou": 6.22,
        "heikin": 4.25,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.417
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 195.932,
        "saikou": 6.22,
        "heikin": 4.45,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.301
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 195.932,
        "saikou": 5.1,
        "heikin": 3.61,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.785
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 195.932,
        "saikou": 5.62,
        "heikin": 4.62,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.72
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 208.379,
        "saikou": 3.71,
        "heikin": 2.87,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 1.824
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.989
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.944
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.932
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.93
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.933
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.919
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 208,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.93
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.987
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.022
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.987
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.917
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.968
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.915
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.877
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.871
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 211.543,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.805
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.845
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 188.543,
        "saikou": 1.7,
        "heikin": 1.24,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.139
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.076
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.089
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.033
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.108
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.135
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.174
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.195
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.129
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.153
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 188.543,
        "saikou": 1.7,
        "heikin": 1.44,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.174
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.23,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.104
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.14,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.095
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.11
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.221
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 1.322
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.448
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.493
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.445
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.478
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.369
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.363
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.333
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.318
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.002
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.978
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.995
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.983
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.013
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.004
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 286.822,
        "saikou": 6.98,
        "heikin": 5.97,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 4.231
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 295.633,
        "saikou": 6.87,
        "heikin": 5.91,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 3.734
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 247.402,
        "saikou": 7.38,
        "heikin": 6.4,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 3.495
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 247.4,
        "saikou": 7.35,
        "heikin": 5.17,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 3.272
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 247.4,
        "saikou": 7.38,
        "heikin": 5.83,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 3.141
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 299.4,
        "saikou": 7.28,
        "heikin": 6.23,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 3.51
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 317.115,
        "saikou": 7.51,
        "heikin": 6.43,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 3.814
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 310.367,
        "saikou": 7.65,
        "heikin": 6.56,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 4.304
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 275.719,
        "saikou": 8.22,
        "heikin": 6.82,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 4.571
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 306.049,
        "saikou": 8.13,
        "heikin": 6.19,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 5.011
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 302.073,
        "saikou": 8.28,
        "heikin": 6.3,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 5.195
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 257.073,
        "saikou": 8.85,
        "heikin": 6.2,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 5.046
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 280.139,
        "saikou": 8.36,
        "heikin": 5.8,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 4.567
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 296.139,
        "saikou": 6.9,
        "heikin": 5.65,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 3.753
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 169.139,
        "saikou": 2.71,
        "heikin": 1.82,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 2.785
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 212.139,
        "saikou": 1.3,
        "heikin": 0.94,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 2.693
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 262.139,
        "saikou": 2.7,
        "heikin": 1.73,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 2.797
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 196.139,
        "saikou": 2.43,
        "heikin": 1.9,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 2.953
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 182.245,
        "saikou": 1.69,
        "heikin": 0.71,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 2.941
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 180.282,
        "saikou": 1.48,
        "heikin": 0.72,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 2.748
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 170.461,
        "saikou": 1.5,
        "heikin": 0.7,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 2.642
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 168.472,
        "saikou": 1.5,
        "heikin": 0.7,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 2.674
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 166.764,
        "saikou": 1.5,
        "heikin": 0.68,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 2.584
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 168.858,
        "saikou": 1.5,
        "heikin": 0.7,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 2.54
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 163.455,
        "saikou": 1.18,
        "heikin": 0.63,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 2.033
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 155.336,
        "saikou": 1.24,
        "heikin": 0.62,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 2.23
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 171.139,
        "saikou": 1.5,
        "heikin": 0.69,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 2.685
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 174.595,
        "saikou": 1.36,
        "heikin": 0.7,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 3.273
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 176.581,
        "saikou": 1.44,
        "heikin": 0.7,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 3.52
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 184.231,
        "saikou": 2.49,
        "heikin": 1.92,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 4.112
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 200.231,
        "saikou": 3.31,
        "heikin": 1.97,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 4.3
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 150.231,
        "saikou": 5.8,
        "heikin": 3.7,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 4.854
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 255.231,
        "saikou": 6.85,
        "heikin": 4.85,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 5.861
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 253.242,
        "saikou": 8.59,
        "heikin": 6.07,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.175
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 252.242,
        "saikou": 8.91,
        "heikin": 6.34,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 6.254
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 261.242,
        "saikou": 8.91,
        "heikin": 6.28,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.357
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 246.267,
        "saikou": 8.72,
        "heikin": 6.18,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 6.425
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 248.366,
        "saikou": 8.58,
        "heikin": 6.11,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 6.386
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 260.284,
        "saikou": 8.74,
        "heikin": 6.14,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 6.126
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 261.149,
        "saikou": 8.25,
        "heikin": 5.8,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.677
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 291.791,
        "saikou": 7.51,
        "heikin": 5.79,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.633
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 289.74,
        "saikou": 7.5,
        "heikin": 5.78,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.434
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 293.811,
        "saikou": 7.52,
        "heikin": 5.61,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.305
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 251.637,
        "saikou": 7.69,
        "heikin": 5.35,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.239
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 251.637,
        "saikou": 8.26,
        "heikin": 5.75,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.402
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 251.637,
        "saikou": 8.07,
        "heikin": 5.49,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 4.995
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 253.613,
        "saikou": 7.88,
        "heikin": 5.67,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 4.856
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 261.263,
        "saikou": 7.6,
        "heikin": 5.33,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 4.101
      }
    ]
  }
};
