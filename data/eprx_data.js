// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/22〜2026/11/20）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-21",
  "fetchedAt": "2026-11-21",
  "avgWindowLabel": "過去30日平均（2026/10/22〜2026/11/20）",
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
      "boshu": 993,
      "ouatsu": 1506.911,
      "saikou": 9.5,
      "heikin": 2.22,
      "boshuAvg30d": 1139.9,
      "heikinAvg30d": 2.512
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 993,
      "ouatsu": 1599.78,
      "saikou": 9.91,
      "heikin": 1.85,
      "boshuAvg30d": 1139.9,
      "heikinAvg30d": 2.518
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 993,
      "ouatsu": 1709.338,
      "saikou": 7.26,
      "heikin": 1.63,
      "boshuAvg30d": 1139.9,
      "heikinAvg30d": 2.502
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 992,
      "ouatsu": 1784.336,
      "saikou": 8,
      "heikin": 1.7,
      "boshuAvg30d": 1139.3,
      "heikinAvg30d": 2.384
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 986,
      "ouatsu": 1744.241,
      "saikou": 8.95,
      "heikin": 1.68,
      "boshuAvg30d": 1134.3,
      "heikinAvg30d": 2.435
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 986,
      "ouatsu": 1541.405,
      "saikou": 9.98,
      "heikin": 2.24,
      "boshuAvg30d": 1133.9,
      "heikinAvg30d": 2.522
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1069,
      "ouatsu": 1717.312,
      "saikou": 8.44,
      "heikin": 2.01,
      "boshuAvg30d": 1139.5,
      "heikinAvg30d": 2.603
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1073,
      "ouatsu": 1706.455,
      "saikou": 9.5,
      "heikin": 2.14,
      "boshuAvg30d": 1142.9,
      "heikinAvg30d": 2.858
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1073,
      "ouatsu": 1768.926,
      "saikou": 9.2,
      "heikin": 1.93,
      "boshuAvg30d": 1143.5,
      "heikinAvg30d": 2.937
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1075,
      "ouatsu": 1806.924,
      "saikou": 8.5,
      "heikin": 1.94,
      "boshuAvg30d": 1145.2,
      "heikinAvg30d": 2.96
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1075,
      "ouatsu": 1836.32,
      "saikou": 7.98,
      "heikin": 2.11,
      "boshuAvg30d": 1145.2,
      "heikinAvg30d": 3.019
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1075,
      "ouatsu": 1698.176,
      "saikou": 8.5,
      "heikin": 2.86,
      "boshuAvg30d": 1145.2,
      "heikinAvg30d": 3.022
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1134,
      "ouatsu": 1802.538,
      "saikou": 8.19,
      "heikin": 2.93,
      "boshuAvg30d": 1204.5,
      "heikinAvg30d": 3.145
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1159,
      "ouatsu": 1838.828,
      "saikou": 8.54,
      "heikin": 3.21,
      "boshuAvg30d": 1228.9,
      "heikinAvg30d": 3.217
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1178,
      "ouatsu": 1546.246,
      "saikou": 9.88,
      "heikin": 3.32,
      "boshuAvg30d": 1248.5,
      "heikinAvg30d": 3.172
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1193,
      "ouatsu": 1535.988,
      "saikou": 9.91,
      "heikin": 3.02,
      "boshuAvg30d": 1264.5,
      "heikinAvg30d": 2.995
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1193,
      "ouatsu": 1787.343,
      "saikou": 9.98,
      "heikin": 2.49,
      "boshuAvg30d": 1264.9,
      "heikinAvg30d": 2.808
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1193,
      "ouatsu": 1683.72,
      "saikou": 9.8,
      "heikin": 2.7,
      "boshuAvg30d": 1268.7,
      "heikinAvg30d": 2.854
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1208,
      "ouatsu": 1593.591,
      "saikou": 9.98,
      "heikin": 2.72,
      "boshuAvg30d": 1221.7,
      "heikinAvg30d": 2.783
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1213,
      "ouatsu": 1605.441,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1226.0,
      "heikinAvg30d": 2.734
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1217,
      "ouatsu": 1565.893,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1230.6,
      "heikinAvg30d": 2.689
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1221,
      "ouatsu": 1519.706,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1233.3,
      "heikinAvg30d": 2.727
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1215,
      "ouatsu": 1509.381,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1227.9,
      "heikinAvg30d": 2.711
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1215,
      "ouatsu": 1545.162,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1227.6,
      "heikinAvg30d": 2.763
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1196,
      "ouatsu": 1413.268,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1208.3,
      "heikinAvg30d": 2.623
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1196,
      "ouatsu": 1542.637,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1208.3,
      "heikinAvg30d": 2.678
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1196,
      "ouatsu": 1573.973,
      "saikou": 9.99,
      "heikin": 3.57,
      "boshuAvg30d": 1208.3,
      "heikinAvg30d": 2.749
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1192,
      "ouatsu": 1555.36,
      "saikou": 9.9,
      "heikin": 2.92,
      "boshuAvg30d": 1204.6,
      "heikinAvg30d": 2.838
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1191,
      "ouatsu": 1633.256,
      "saikou": 9.99,
      "heikin": 3.33,
      "boshuAvg30d": 1202.9,
      "heikinAvg30d": 2.918
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1185,
      "ouatsu": 1504.704,
      "saikou": 9.99,
      "heikin": 2.88,
      "boshuAvg30d": 1196.9,
      "heikinAvg30d": 3.06
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1170,
      "ouatsu": 1565.176,
      "saikou": 9.99,
      "heikin": 3.05,
      "boshuAvg30d": 1252.3,
      "heikinAvg30d": 3.232
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1170,
      "ouatsu": 1512.344,
      "saikou": 9.99,
      "heikin": 3.18,
      "boshuAvg30d": 1252.0,
      "heikinAvg30d": 3.36
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1170,
      "ouatsu": 1430.445,
      "saikou": 9.99,
      "heikin": 3.77,
      "boshuAvg30d": 1252.0,
      "heikinAvg30d": 3.582
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1168,
      "ouatsu": 1642.148,
      "saikou": 10,
      "heikin": 4.77,
      "boshuAvg30d": 1250.3,
      "heikinAvg30d": 3.676
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1166,
      "ouatsu": 1693.024,
      "saikou": 10,
      "heikin": 4.83,
      "boshuAvg30d": 1242.0,
      "heikinAvg30d": 3.633
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1161,
      "ouatsu": 1594.288,
      "saikou": 10,
      "heikin": 4.65,
      "boshuAvg30d": 1233.2,
      "heikinAvg30d": 3.599
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1157,
      "ouatsu": 1630.857,
      "saikou": 10,
      "heikin": 4.64,
      "boshuAvg30d": 1227.8,
      "heikinAvg30d": 3.456
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1157,
      "ouatsu": 1657.203,
      "saikou": 10,
      "heikin": 4.51,
      "boshuAvg30d": 1227.8,
      "heikinAvg30d": 3.427
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1157,
      "ouatsu": 1774.323,
      "saikou": 10,
      "heikin": 4.54,
      "boshuAvg30d": 1227.8,
      "heikinAvg30d": 3.279
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1155,
      "ouatsu": 1718.117,
      "saikou": 10,
      "heikin": 4.56,
      "boshuAvg30d": 1226.5,
      "heikinAvg30d": 3.186
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1148,
      "ouatsu": 1710.223,
      "saikou": 10,
      "heikin": 4.61,
      "boshuAvg30d": 1219.2,
      "heikinAvg30d": 3.111
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1148,
      "ouatsu": 1782.664,
      "saikou": 10,
      "heikin": 4.42,
      "boshuAvg30d": 1219.2,
      "heikinAvg30d": 3.08
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1059,
      "ouatsu": 1743.638,
      "saikou": 9.54,
      "heikin": 3.73,
      "boshuAvg30d": 1132.7,
      "heikinAvg30d": 3.004
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1062,
      "ouatsu": 1576.767,
      "saikou": 9.8,
      "heikin": 3.33,
      "boshuAvg30d": 1135.7,
      "heikinAvg30d": 2.933
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1061,
      "ouatsu": 1597.883,
      "saikou": 9.8,
      "heikin": 3.44,
      "boshuAvg30d": 1138.4,
      "heikinAvg30d": 2.963
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1054,
      "ouatsu": 1527.417,
      "saikou": 9.9,
      "heikin": 2.85,
      "boshuAvg30d": 1129.0,
      "heikinAvg30d": 2.915
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1046,
      "ouatsu": 1540.343,
      "saikou": 9.5,
      "heikin": 2.61,
      "boshuAvg30d": 1121.0,
      "heikinAvg30d": 2.914
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1038,
      "ouatsu": 1527.78,
      "saikou": 9.8,
      "heikin": 2.65,
      "boshuAvg30d": 1112.7,
      "heikinAvg30d": 2.658
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
        "ouatsu": 127.94,
        "saikou": 8.88,
        "heikin": 1.92,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 2.583
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 146.758,
        "saikou": 9.91,
        "heikin": 2.02,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 2.709
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 127.918,
        "saikou": 4.99,
        "heikin": 1.06,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 2.531
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 146.758,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 2.711
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 149.758,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 2.859
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 130.918,
        "saikou": 9,
        "heikin": 1.37,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 2.464
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 130.15,
        "saikou": 4.99,
        "heikin": 1.4,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 2.729
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 132.118,
        "saikou": 2.43,
        "heikin": 1.03,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.646
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 129.168,
        "saikou": 9.2,
        "heikin": 2.89,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.534
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 190.168,
        "saikou": 3.74,
        "heikin": 2.71,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.506
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 190.168,
        "saikou": 3.74,
        "heikin": 2.71,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.492
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 190.168,
        "saikou": 3.74,
        "heikin": 2.77,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.346
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 195.168,
        "saikou": 3.74,
        "heikin": 2.63,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 3.819
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 253.498,
        "saikou": 3.74,
        "heikin": 2.68,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.87
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 131.108,
        "saikou": 9.8,
        "heikin": 2.97,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.078
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 175.458,
        "saikou": 9.91,
        "heikin": 3.21,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.955
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 139.908,
        "saikou": 8.8,
        "heikin": 2.4,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.187
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 225.248,
        "saikou": 9.8,
        "heikin": 3.47,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.62
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 127.918,
        "saikou": 7.4,
        "heikin": 3.15,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.435
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 164.988,
        "saikou": 7.5,
        "heikin": 3.66,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.024
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 9,
        "heikin": 3.4,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 2.981
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 114.908,
        "saikou": 9.8,
        "heikin": 3.53,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 3.123
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 161.248,
        "saikou": 9.91,
        "heikin": 5.35,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 3.313
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 161.248,
        "saikou": 9.91,
        "heikin": 5.42,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 3.112
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 9,
        "heikin": 3.29,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 2.971
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 9,
        "heikin": 3.29,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 2.8
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 171.218,
        "saikou": 9.91,
        "heikin": 4.73,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.183
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 122.918,
        "saikou": 9,
        "heikin": 3.32,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 3.937
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 237.268,
        "saikou": 3.75,
        "heikin": 2.65,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.961
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 203.968,
        "saikou": 3.75,
        "heikin": 2.84,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.23
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 169.968,
        "saikou": 3.8,
        "heikin": 3.3,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.407
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 158.968,
        "saikou": 5.3,
        "heikin": 4.64,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 5.13
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 46.94,
        "saikou": 9.8,
        "heikin": 7.24,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 5.689
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 154.24,
        "saikou": 10,
        "heikin": 9.59,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 5.614
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 154.24,
        "saikou": 10,
        "heikin": 9.6,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.992
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 104.718,
        "saikou": 9.91,
        "heikin": 6.62,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 5.059
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 117.908,
        "saikou": 9.3,
        "heikin": 6.66,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.715
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 115.918,
        "saikou": 6.55,
        "heikin": 6.43,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.737
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 204.218,
        "saikou": 7.6,
        "heikin": 6.7,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.587
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 177.908,
        "saikou": 7.6,
        "heikin": 6.62,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.579
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 188.908,
        "saikou": 7.6,
        "heikin": 6.82,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 4.525
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 237.208,
        "saikou": 7.6,
        "heikin": 6.52,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.791
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 230.208,
        "saikou": 7.6,
        "heikin": 6.83,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.858
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 101.908,
        "saikou": 9.8,
        "heikin": 5.79,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.929
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 115.998,
        "saikou": 9.8,
        "heikin": 5.6,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.717
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 84.918,
        "saikou": 9.8,
        "heikin": 4.52,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.711
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 124.708,
        "saikou": 9.2,
        "heikin": 3.34,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.338
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 122.708,
        "saikou": 9.8,
        "heikin": 3.51,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.241
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 38,
        "ouatsu": 57.998,
        "saikou": 7.35,
        "heikin": 4.93,
        "boshuAvg30d": 113.4,
        "heikinAvg30d": 5.092
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 38,
        "ouatsu": 61.828,
        "saikou": 7.35,
        "heikin": 4.2,
        "boshuAvg30d": 113.4,
        "heikinAvg30d": 5.278
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 38,
        "ouatsu": 77.876,
        "saikou": 7.26,
        "heikin": 5.05,
        "boshuAvg30d": 113.4,
        "heikinAvg30d": 5.52
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 38,
        "ouatsu": 79.836,
        "saikou": 7.35,
        "heikin": 5.03,
        "boshuAvg30d": 113.4,
        "heikinAvg30d": 5.634
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 38,
        "ouatsu": 72.538,
        "saikou": 7.35,
        "heikin": 4.83,
        "boshuAvg30d": 113.4,
        "heikinAvg30d": 5.523
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 38,
        "ouatsu": 72.508,
        "saikou": 7.35,
        "heikin": 4.66,
        "boshuAvg30d": 113.4,
        "heikinAvg30d": 5.249
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 93.416,
        "saikou": 7.26,
        "heikin": 4.59,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 5.163
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 108.836,
        "saikou": 5.66,
        "heikin": 2.83,
        "boshuAvg30d": 121.7,
        "heikinAvg30d": 4.786
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 112.834,
        "saikou": 5.61,
        "heikin": 3.03,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 4.69
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 110.904,
        "saikou": 5.48,
        "heikin": 3.76,
        "boshuAvg30d": 121.7,
        "heikinAvg30d": 4.724
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 112.834,
        "saikou": 5.48,
        "heikin": 3.06,
        "boshuAvg30d": 121.7,
        "heikinAvg30d": 4.762
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 99.184,
        "saikou": 5.07,
        "heikin": 2.91,
        "boshuAvg30d": 121.7,
        "heikinAvg30d": 4.657
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 100.834,
        "saikou": 5.48,
        "heikin": 3.27,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 4.702
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 89.33,
        "saikou": 4.85,
        "heikin": 3.68,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 4.605
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 113.856,
        "saikou": 5.48,
        "heikin": 3.72,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 5.237
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 113.33,
        "saikou": 5.93,
        "heikin": 4.19,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 5.256
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 112.834,
        "saikou": 6.06,
        "heikin": 3.79,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 5.083
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 99.334,
        "saikou": 4.67,
        "heikin": 4.22,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 5.224
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 126.866,
        "saikou": 9.68,
        "heikin": 5.74,
        "boshuAvg30d": 75.0,
        "heikinAvg30d": 4.827
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 126.532,
        "saikou": 10,
        "heikin": 4.75,
        "boshuAvg30d": 75.7,
        "heikinAvg30d": 4.862
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 120.595,
        "saikou": 10,
        "heikin": 5.6,
        "boshuAvg30d": 77.7,
        "heikinAvg30d": 4.954
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 124.907,
        "saikou": 10,
        "heikin": 5.82,
        "boshuAvg30d": 78.3,
        "heikinAvg30d": 5.259
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 128.862,
        "saikou": 10,
        "heikin": 5.63,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 5.248
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 127.212,
        "saikou": 10,
        "heikin": 5.63,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 5.32
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 147,
        "ouatsu": 126.866,
        "saikou": 10,
        "heikin": 5.51,
        "boshuAvg30d": 74.0,
        "heikinAvg30d": 5.63
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 147,
        "ouatsu": 126.866,
        "saikou": 10,
        "heikin": 5.11,
        "boshuAvg30d": 74.0,
        "heikinAvg30d": 5.507
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 147,
        "ouatsu": 104.862,
        "saikou": 9.68,
        "heikin": 5.38,
        "boshuAvg30d": 74.0,
        "heikinAvg30d": 4.614
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 146,
        "ouatsu": 104.826,
        "saikou": 6.02,
        "heikin": 4.14,
        "boshuAvg30d": 73.0,
        "heikinAvg30d": 5.028
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 146,
        "ouatsu": 104.826,
        "saikou": 5.5,
        "heikin": 3.64,
        "boshuAvg30d": 73.0,
        "heikinAvg30d": 4.782
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 145,
        "ouatsu": 104.826,
        "saikou": 2.84,
        "heikin": 2.31,
        "boshuAvg30d": 71.7,
        "heikinAvg30d": 4.384
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 80.826,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 4.659
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 80.862,
        "saikou": 3.99,
        "heikin": 3.25,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 4.504
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 104.862,
        "saikou": 4.77,
        "heikin": 3.57,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 4.421
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 77.366,
        "saikou": 4.03,
        "heikin": 3.56,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 4.267
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 78.866,
        "saikou": 4.2,
        "heikin": 3.52,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 4.576
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 77.712,
        "saikou": 3.99,
        "heikin": 3.46,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 3.949
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 78.83,
        "saikou": 3.99,
        "heikin": 3.09,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 3.476
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 75.365,
        "saikou": 3.99,
        "heikin": 2.93,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 3.165
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 76.865,
        "saikou": 3.99,
        "heikin": 3.02,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 3.096
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 76.834,
        "saikou": 3.99,
        "heikin": 3.04,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 3.339
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 58.379,
        "saikou": 3.99,
        "heikin": 3.46,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 3.392
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 84.879,
        "saikou": 3.99,
        "heikin": 2.42,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 3.476
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 66.26,
        "saikou": 3.99,
        "heikin": 2.37,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 3.332
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 66.26,
        "saikou": 3.5,
        "heikin": 2.33,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 3.733
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 64.264,
        "saikou": 3.06,
        "heikin": 1.8,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 3.765
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 88.264,
        "saikou": 4.07,
        "heikin": 2.32,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 4.423
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 86.334,
        "saikou": 4.07,
        "heikin": 2.27,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 4.348
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 95.184,
        "saikou": 4.19,
        "heikin": 2.47,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 5.1
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 157,
        "ouatsu": 458.594,
        "saikou": 2.21,
        "heikin": 1.04,
        "boshuAvg30d": 235.5,
        "heikinAvg30d": 2.01
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 157,
        "ouatsu": 483.32,
        "saikou": 5.65,
        "heikin": 1.01,
        "boshuAvg30d": 235.5,
        "heikinAvg30d": 2.039
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 157,
        "ouatsu": 560.636,
        "saikou": 5.14,
        "heikin": 0.99,
        "boshuAvg30d": 235.5,
        "heikinAvg30d": 2.24
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 157,
        "ouatsu": 628.729,
        "saikou": 1.86,
        "heikin": 0.88,
        "boshuAvg30d": 235.5,
        "heikinAvg30d": 1.765
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 155,
        "ouatsu": 630.712,
        "saikou": 1.46,
        "heikin": 0.71,
        "boshuAvg30d": 233.8,
        "heikinAvg30d": 1.823
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 155,
        "ouatsu": 530.937,
        "saikou": 1.51,
        "heikin": 0.71,
        "boshuAvg30d": 233.5,
        "heikinAvg30d": 1.906
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 153,
        "ouatsu": 540.958,
        "saikou": 1.46,
        "heikin": 0.88,
        "boshuAvg30d": 231.5,
        "heikinAvg30d": 1.821
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 155,
        "ouatsu": 554.157,
        "saikou": 1.5,
        "heikin": 0.82,
        "boshuAvg30d": 233.5,
        "heikinAvg30d": 2.03
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 155,
        "ouatsu": 537.381,
        "saikou": 1.44,
        "heikin": 0.75,
        "boshuAvg30d": 233.5,
        "heikinAvg30d": 2.28
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 156,
        "ouatsu": 562.172,
        "saikou": 1.19,
        "heikin": 0.64,
        "boshuAvg30d": 234.5,
        "heikinAvg30d": 2.097
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 156,
        "ouatsu": 559.134,
        "saikou": 1.68,
        "heikin": 0.98,
        "boshuAvg30d": 234.5,
        "heikinAvg30d": 2.138
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 156,
        "ouatsu": 477.42,
        "saikou": 2.58,
        "heikin": 1.43,
        "boshuAvg30d": 234.5,
        "heikinAvg30d": 2.241
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 176,
        "ouatsu": 550.773,
        "saikou": 3.64,
        "heikin": 1.75,
        "boshuAvg30d": 254.2,
        "heikinAvg30d": 2.512
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 184,
        "ouatsu": 540.213,
        "saikou": 4.31,
        "heikin": 2.19,
        "boshuAvg30d": 262.2,
        "heikinAvg30d": 2.685
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 188,
        "ouatsu": 409.169,
        "saikou": 3.89,
        "heikin": 2.3,
        "boshuAvg30d": 266.5,
        "heikinAvg30d": 2.697
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 193,
        "ouatsu": 375.72,
        "saikou": 3.39,
        "heikin": 1.92,
        "boshuAvg30d": 271.8,
        "heikinAvg30d": 2.605
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 193,
        "ouatsu": 657.585,
        "saikou": 1.91,
        "heikin": 1,
        "boshuAvg30d": 272.2,
        "heikinAvg30d": 2.116
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 193,
        "ouatsu": 472.005,
        "saikou": 3.01,
        "heikin": 1.1,
        "boshuAvg30d": 276.0,
        "heikinAvg30d": 2.596
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 183,
        "ouatsu": 531.974,
        "saikou": 2.59,
        "heikin": 0.8,
        "boshuAvg30d": 266.7,
        "heikinAvg30d": 2.081
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 183,
        "ouatsu": 502.376,
        "saikou": 3,
        "heikin": 0.86,
        "boshuAvg30d": 266.7,
        "heikinAvg30d": 2.078
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 183,
        "ouatsu": 493.21,
        "saikou": 2.1,
        "heikin": 0.68,
        "boshuAvg30d": 267.0,
        "heikinAvg30d": 2.02
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 183,
        "ouatsu": 469.125,
        "saikou": 3,
        "heikin": 0.87,
        "boshuAvg30d": 266.7,
        "heikinAvg30d": 1.978
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 402.895,
        "saikou": 4.9,
        "heikin": 1.56,
        "boshuAvg30d": 263.6,
        "heikinAvg30d": 2.081
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 404.134,
        "saikou": 5.2,
        "heikin": 1.75,
        "boshuAvg30d": 263.6,
        "heikinAvg30d": 2.31
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 178,
        "ouatsu": 383.078,
        "saikou": 5.2,
        "heikin": 1.61,
        "boshuAvg30d": 261.3,
        "heikinAvg30d": 1.848
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 178,
        "ouatsu": 436.708,
        "saikou": 4.39,
        "heikin": 1.14,
        "boshuAvg30d": 261.3,
        "heikinAvg30d": 1.871
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 178,
        "ouatsu": 442.518,
        "saikou": 3.91,
        "heikin": 1.32,
        "boshuAvg30d": 261.3,
        "heikinAvg30d": 2.064
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 446.743,
        "saikou": 2.96,
        "heikin": 1.17,
        "boshuAvg30d": 261.0,
        "heikinAvg30d": 1.91
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 177,
        "ouatsu": 449.938,
        "saikou": 4.86,
        "heikin": 1.59,
        "boshuAvg30d": 260.0,
        "heikinAvg30d": 2.114
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 177,
        "ouatsu": 434.117,
        "saikou": 2.6,
        "heikin": 0.98,
        "boshuAvg30d": 259.6,
        "heikinAvg30d": 2.169
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 175,
        "ouatsu": 481.166,
        "saikou": 2.59,
        "heikin": 1.44,
        "boshuAvg30d": 258.0,
        "heikinAvg30d": 2.25
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 175,
        "ouatsu": 465.621,
        "saikou": 2.72,
        "heikin": 1.32,
        "boshuAvg30d": 257.7,
        "heikinAvg30d": 2.209
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 175,
        "ouatsu": 452.547,
        "saikou": 2.04,
        "heikin": 1.22,
        "boshuAvg30d": 257.4,
        "heikinAvg30d": 2.226
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 175,
        "ouatsu": 484.307,
        "saikou": 5.31,
        "heikin": 2.52,
        "boshuAvg30d": 257.4,
        "heikinAvg30d": 2.204
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 175,
        "ouatsu": 494.99,
        "saikou": 5.19,
        "heikin": 2.21,
        "boshuAvg30d": 255.4,
        "heikinAvg30d": 2.123
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 175,
        "ouatsu": 474.787,
        "saikou": 4.92,
        "heikin": 2.33,
        "boshuAvg30d": 251.5,
        "heikinAvg30d": 2.251
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 177,
        "ouatsu": 480.104,
        "saikou": 4.83,
        "heikin": 1.56,
        "boshuAvg30d": 252.8,
        "heikinAvg30d": 2.247
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 177,
        "ouatsu": 507.817,
        "saikou": 4.78,
        "heikin": 1.6,
        "boshuAvg30d": 252.8,
        "heikinAvg30d": 2.128
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 177,
        "ouatsu": 507.473,
        "saikou": 4.91,
        "heikin": 1.23,
        "boshuAvg30d": 252.8,
        "heikinAvg30d": 2.17
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 177,
        "ouatsu": 507.747,
        "saikou": 4.17,
        "heikin": 1.49,
        "boshuAvg30d": 253.2,
        "heikinAvg30d": 1.954
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 176,
        "ouatsu": 507.917,
        "saikou": 4.77,
        "heikin": 1.68,
        "boshuAvg30d": 251.8,
        "heikinAvg30d": 1.955
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 176,
        "ouatsu": 504.101,
        "saikou": 3.92,
        "heikin": 1.3,
        "boshuAvg30d": 251.8,
        "heikinAvg30d": 2.143
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 175,
        "ouatsu": 481.116,
        "saikou": 1.15,
        "heikin": 0.61,
        "boshuAvg30d": 251.2,
        "heikinAvg30d": 1.981
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 175,
        "ouatsu": 472.76,
        "saikou": 3.96,
        "heikin": 0.78,
        "boshuAvg30d": 251.2,
        "heikinAvg30d": 1.938
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 175,
        "ouatsu": 499.35,
        "saikou": 4.19,
        "heikin": 0.85,
        "boshuAvg30d": 254.2,
        "heikinAvg30d": 2.223
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 173,
        "ouatsu": 482.641,
        "saikou": 3.04,
        "heikin": 1,
        "boshuAvg30d": 249.2,
        "heikinAvg30d": 2.119
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 171,
        "ouatsu": 408.686,
        "saikou": 5.46,
        "heikin": 1.36,
        "boshuAvg30d": 247.5,
        "heikinAvg30d": 2.488
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 374.194,
        "saikou": 6.02,
        "heikin": 2.5,
        "boshuAvg30d": 245.8,
        "heikinAvg30d": 2.316
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 122,
        "ouatsu": 318.313,
        "saikou": 6.25,
        "heikin": 2.34,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.814
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 122,
        "ouatsu": 300.178,
        "saikou": 5.51,
        "heikin": 1.77,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.928
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 122,
        "ouatsu": 278.07,
        "saikou": 5.72,
        "heikin": 1.21,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.965
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 314.075,
        "saikou": 5.54,
        "heikin": 1.69,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.995
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 121,
        "ouatsu": 298.066,
        "saikou": 5.3,
        "heikin": 1.63,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 2.015
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 305.9,
        "saikou": 6.25,
        "heikin": 1.8,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.0
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 325.811,
        "saikou": 5.58,
        "heikin": 1.88,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.92
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 296.675,
        "saikou": 6.16,
        "heikin": 2.17,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.887
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 119,
        "ouatsu": 304.275,
        "saikou": 5.64,
        "heikin": 2.29,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.797
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 119,
        "ouatsu": 286.363,
        "saikou": 5.19,
        "heikin": 2.18,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.838
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 119,
        "ouatsu": 292.349,
        "saikou": 5.86,
        "heikin": 2.26,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.723
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 119,
        "ouatsu": 288.949,
        "saikou": 5.36,
        "heikin": 2.12,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.694
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 314.158,
        "saikou": 7,
        "heikin": 2.5,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 1.892
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 308.284,
        "saikou": 7,
        "heikin": 2.73,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 1.841
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 137,
        "ouatsu": 289.329,
        "saikou": 7,
        "heikin": 2.51,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 2.131
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 139,
        "ouatsu": 289.719,
        "saikou": 7,
        "heikin": 2.28,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 2.176
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 139,
        "ouatsu": 268.641,
        "saikou": 7,
        "heikin": 2.54,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 2.207
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 139,
        "ouatsu": 227.464,
        "saikou": 7,
        "heikin": 2.17,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 2.257
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 166.696,
        "saikou": 7,
        "heikin": 1.63,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.394
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 168.586,
        "saikou": 7.6,
        "heikin": 4.1,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.448
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 144,
        "ouatsu": 162.571,
        "saikou": 9.47,
        "heikin": 4.49,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.486
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 144,
        "ouatsu": 164.616,
        "saikou": 9.57,
        "heikin": 3.94,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.527
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 143,
        "ouatsu": 136.952,
        "saikou": 9.57,
        "heikin": 3.24,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 2.639
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 142,
        "ouatsu": 166.692,
        "saikou": 9.57,
        "heikin": 3.51,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 2.863
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 138,
        "ouatsu": 162.674,
        "saikou": 9.57,
        "heikin": 4.74,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 3.085
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 138,
        "ouatsu": 172.515,
        "saikou": 9.57,
        "heikin": 4.94,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 3.068
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 138,
        "ouatsu": 136.911,
        "saikou": 9.47,
        "heikin": 3.11,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 2.445
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 138,
        "ouatsu": 153.163,
        "saikou": 9.47,
        "heikin": 2.76,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 2.553
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 138,
        "ouatsu": 172.577,
        "saikou": 9.47,
        "heikin": 2.78,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 2.552
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 138,
        "ouatsu": 184.589,
        "saikou": 9.47,
        "heikin": 2.85,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 2.539
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 136,
        "ouatsu": 196.663,
        "saikou": 9.47,
        "heikin": 3.29,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 2.788
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 136,
        "ouatsu": 266.735,
        "saikou": 9.47,
        "heikin": 2.85,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 2.877
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 136,
        "ouatsu": 242.325,
        "saikou": 9.68,
        "heikin": 3.39,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 2.823
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 135,
        "ouatsu": 306.632,
        "saikou": 9.68,
        "heikin": 4.39,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 3.096
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 135,
        "ouatsu": 330.848,
        "saikou": 6.39,
        "heikin": 3.55,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 2.974
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 134,
        "ouatsu": 329.38,
        "saikou": 9.51,
        "heikin": 4.03,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 2.716
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 132,
        "ouatsu": 338.718,
        "saikou": 9.38,
        "heikin": 4.34,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.481
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 132,
        "ouatsu": 338.718,
        "saikou": 9.47,
        "heikin": 4.38,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.496
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 132,
        "ouatsu": 352.548,
        "saikou": 9.32,
        "heikin": 3.86,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.116
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 132,
        "ouatsu": 336.448,
        "saikou": 10,
        "heikin": 3.64,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.152
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 132,
        "ouatsu": 328.785,
        "saikou": 9.84,
        "heikin": 4.18,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 1.941
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 132,
        "ouatsu": 318.943,
        "saikou": 9.95,
        "heikin": 4.19,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 1.852
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 134,
        "ouatsu": 326.628,
        "saikou": 8.78,
        "heikin": 2.79,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 1.786
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 134,
        "ouatsu": 340.413,
        "saikou": 8.78,
        "heikin": 2.97,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 1.915
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 134,
        "ouatsu": 319.023,
        "saikou": 8.78,
        "heikin": 2.9,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 1.938
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 319.023,
        "saikou": 8.78,
        "heikin": 2.5,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 2.024
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 317.123,
        "saikou": 8.78,
        "heikin": 2.35,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 1.899
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 311.863,
        "saikou": 8.78,
        "heikin": 2.37,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 1.949
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 8,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.401
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 6.71,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 2.891
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 2.622
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.043
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.32,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.875
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 7.98,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 2.849
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 8,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.951
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 6.17,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.575
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 5.73,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.434
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 6.73,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.807
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 4.95,
        "heikin": 4.95,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.986
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 5.25,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.629
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 5.16,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 4.234
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 5.29,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.865
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 5.47,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 4.586
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.46,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.043
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 8.9,
        "heikin": 8.44,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.234
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.46,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.235
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.05,
        "heikin": 8.51,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.076
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 8,
        "heikin": 7.27,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.277
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 5.929
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 6.075
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 5.773
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 5.523
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 3.815
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.41
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.729
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.941
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 6.006
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.84
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 6.436
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 7.029
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.0,
        "heikinAvg30d": 6.264
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.0,
        "heikinAvg30d": 6.166
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.0,
        "heikinAvg30d": 6.214
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.0,
        "heikinAvg30d": 6.106
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.328
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.45,
        "heikin": 9.45,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.962
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.207
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.45,
        "heikin": 9.45,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.391
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.66
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 4.647
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 4.793
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 8.77,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 4.464
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.4,
        "heikin": 9.4,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 4.597
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.41,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 4.377
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 8.77,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 4.401
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 3.231
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 79.155,
        "saikou": 8.99,
        "heikin": 5.15,
        "boshuAvg30d": 199.1,
        "heikinAvg30d": 2.677
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 140.861,
        "saikou": 8.98,
        "heikin": 2.67,
        "boshuAvg30d": 199.1,
        "heikinAvg30d": 2.087
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 172.332,
        "saikou": 4.44,
        "heikin": 1.92,
        "boshuAvg30d": 199.1,
        "heikinAvg30d": 1.98
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 148.645,
        "saikou": 8,
        "heikin": 2.55,
        "boshuAvg30d": 199.1,
        "heikinAvg30d": 2.029
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 147.706,
        "saikou": 8.8,
        "heikin": 2.68,
        "boshuAvg30d": 198.1,
        "heikinAvg30d": 2.355
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 101.384,
        "saikou": 9.98,
        "heikin": 6.01,
        "boshuAvg30d": 198.1,
        "heikinAvg30d": 2.732
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 115.257,
        "saikou": 8.44,
        "heikin": 4.84,
        "boshuAvg30d": 198.1,
        "heikinAvg30d": 2.885
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 115.257,
        "saikou": 8.99,
        "heikin": 5.68,
        "boshuAvg30d": 198.1,
        "heikinAvg30d": 3.164
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 115.257,
        "saikou": 8.03,
        "heikin": 4.64,
        "boshuAvg30d": 199.1,
        "heikinAvg30d": 3.094
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 113.317,
        "saikou": 8.07,
        "heikin": 4.65,
        "boshuAvg30d": 199.1,
        "heikinAvg30d": 2.894
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 113.317,
        "saikou": 7.3,
        "heikin": 2.02,
        "boshuAvg30d": 199.1,
        "heikinAvg30d": 2.842
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 113.317,
        "saikou": 8,
        "heikin": 4.62,
        "boshuAvg30d": 199.1,
        "heikinAvg30d": 2.903
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 115.257,
        "saikou": 7.3,
        "heikin": 3.93,
        "boshuAvg30d": 209.4,
        "heikinAvg30d": 2.926
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 115.257,
        "saikou": 8.49,
        "heikin": 4.7,
        "boshuAvg30d": 213.4,
        "heikinAvg30d": 3.009
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 115.257,
        "saikou": 9.88,
        "heikin": 6.23,
        "boshuAvg30d": 218.4,
        "heikinAvg30d": 3.546
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.73,
        "heikin": 6.43,
        "boshuAvg30d": 220.8,
        "heikinAvg30d": 3.681
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 138.738,
        "saikou": 9.98,
        "heikin": 5.43,
        "boshuAvg30d": 220.8,
        "heikinAvg30d": 3.603
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 8.99,
        "heikin": 6.34,
        "boshuAvg30d": 220.8,
        "heikinAvg30d": 4.112
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 119.124,
        "saikou": 9.98,
        "heikin": 6.48,
        "boshuAvg30d": 230.7,
        "heikinAvg30d": 4.213
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 117.132,
        "saikou": 9.98,
        "heikin": 6.24,
        "boshuAvg30d": 230.7,
        "heikinAvg30d": 4.049
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 156.158,
        "saikou": 9.99,
        "heikin": 5.07,
        "boshuAvg30d": 230.7,
        "heikinAvg30d": 3.94
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 157.263,
        "saikou": 9.99,
        "heikin": 5.04,
        "boshuAvg30d": 229.7,
        "heikinAvg30d": 3.965
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 176.239,
        "saikou": 9.99,
        "heikin": 4.62,
        "boshuAvg30d": 228.0,
        "heikinAvg30d": 3.924
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 182.691,
        "saikou": 9.99,
        "heikin": 4.47,
        "boshuAvg30d": 228.7,
        "heikinAvg30d": 3.681
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 184.623,
        "saikou": 9.99,
        "heikin": 4.42,
        "boshuAvg30d": 227.0,
        "heikinAvg30d": 3.16
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 186.621,
        "saikou": 9.99,
        "heikin": 4.47,
        "boshuAvg30d": 227.0,
        "heikinAvg30d": 3.267
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 184.751,
        "saikou": 9.99,
        "heikin": 4.43,
        "boshuAvg30d": 227.0,
        "heikinAvg30d": 3.969
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 200.033,
        "saikou": 9.07,
        "heikin": 3.16,
        "boshuAvg30d": 227.0,
        "heikinAvg30d": 3.965
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.81,
        "boshuAvg30d": 227.0,
        "heikinAvg30d": 4.288
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.83,
        "boshuAvg30d": 227.0,
        "heikinAvg30d": 4.124
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 186.295,
        "saikou": 9.98,
        "heikin": 5.76,
        "boshuAvg30d": 226.7,
        "heikinAvg30d": 4.351
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.98,
        "heikin": 6.61,
        "boshuAvg30d": 226.7,
        "heikinAvg30d": 4.441
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.98,
        "heikin": 6.79,
        "boshuAvg30d": 226.7,
        "heikinAvg30d": 4.118
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 8.94,
        "heikin": 5.2,
        "boshuAvg30d": 226.7,
        "heikinAvg30d": 3.737
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 8.94,
        "heikin": 5.63,
        "boshuAvg30d": 222.4,
        "heikinAvg30d": 3.942
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 119.124,
        "saikou": 9,
        "heikin": 6.4,
        "boshuAvg30d": 221.4,
        "heikinAvg30d": 3.831
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 9,
        "heikin": 6.24,
        "boshuAvg30d": 219.4,
        "heikinAvg30d": 3.75
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 9,
        "heikin": 6.23,
        "boshuAvg30d": 219.4,
        "heikinAvg30d": 3.702
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 119.124,
        "saikou": 8.99,
        "heikin": 6.43,
        "boshuAvg30d": 219.4,
        "heikinAvg30d": 3.658
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9.49,
        "heikin": 6.01,
        "boshuAvg30d": 218.4,
        "heikinAvg30d": 3.125
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 117.139,
        "saikou": 9.4,
        "heikin": 6.15,
        "boshuAvg30d": 217.4,
        "heikinAvg30d": 3.588
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 117.139,
        "saikou": 8.99,
        "heikin": 5.84,
        "boshuAvg30d": 218.1,
        "heikinAvg30d": 3.635
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 8.44,
        "heikin": 4.91,
        "boshuAvg30d": 218.1,
        "heikinAvg30d": 3.465
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9,
        "heikin": 6.31,
        "boshuAvg30d": 218.1,
        "heikinAvg30d": 3.461
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9,
        "heikin": 6.43,
        "boshuAvg30d": 218.1,
        "heikinAvg30d": 3.41
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 119.124,
        "saikou": 9.49,
        "heikin": 6.52,
        "boshuAvg30d": 216.4,
        "heikinAvg30d": 3.349
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 119.124,
        "saikou": 9.4,
        "heikin": 6.47,
        "boshuAvg30d": 215.1,
        "heikinAvg30d": 3.259
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 117.126,
        "saikou": 9.48,
        "heikin": 6.09,
        "boshuAvg30d": 213.1,
        "heikinAvg30d": 2.696
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 186.687,
        "saikou": 9.5,
        "heikin": 2.76,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 2.119
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 186.687,
        "saikou": 6.45,
        "heikin": 2.22,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 2.298
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 186.687,
        "saikou": 7,
        "heikin": 2.19,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 2.155
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 188.677,
        "saikou": 7.1,
        "heikin": 2.28,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 2.046
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 164.811,
        "saikou": 7.11,
        "heikin": 2.28,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 2.054
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 104.108,
        "saikou": 9.47,
        "heikin": 3.61,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 2.104
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 134.555,
        "saikou": 7.98,
        "heikin": 4.38,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 2.368
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 144.618,
        "saikou": 9.5,
        "heikin": 5.02,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 2.781
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 133.496,
        "saikou": 7.98,
        "heikin": 4.31,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 2.896
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 110.923,
        "saikou": 8.5,
        "heikin": 5.4,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 2.925
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 110.923,
        "saikou": 7.98,
        "heikin": 4.91,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 3.112
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 110.923,
        "saikou": 8.5,
        "heikin": 4.93,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 2.911
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 108.053,
        "saikou": 7.1,
        "heikin": 4.78,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 3.007
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 114.487,
        "saikou": 7.98,
        "heikin": 5.01,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 3.256
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 127.288,
        "saikou": 9.5,
        "heikin": 6.21,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.764
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 141.748,
        "saikou": 9.5,
        "heikin": 4.93,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.486
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 141.748,
        "saikou": 9.5,
        "heikin": 4.52,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.316
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 192.656,
        "saikou": 9.5,
        "heikin": 3.33,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.251
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 167.202,
        "saikou": 9.5,
        "heikin": 4.02,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.511
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 129.798,
        "saikou": 9.5,
        "heikin": 4.22,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.346
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 141.748,
        "saikou": 9.5,
        "heikin": 4.52,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 2.138
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 133.794,
        "saikou": 9.5,
        "heikin": 4.33,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 2.213
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 133.794,
        "saikou": 9.5,
        "heikin": 4.31,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 2.083
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 133.794,
        "saikou": 9.5,
        "heikin": 4.33,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 2.063
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 133.794,
        "saikou": 9.5,
        "heikin": 4.34,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 1.934
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 135.754,
        "saikou": 4.75,
        "heikin": 1.93,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.148
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 141.748,
        "saikou": 9.5,
        "heikin": 4.64,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.078
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 141.748,
        "saikou": 9.5,
        "heikin": 4.51,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.219
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 141.748,
        "saikou": 9.5,
        "heikin": 4.52,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.345
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 141.748,
        "saikou": 9.5,
        "heikin": 4.61,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.628
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 154.475,
        "saikou": 9.5,
        "heikin": 4.34,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.817
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 131.159,
        "saikou": 9.5,
        "heikin": 5.09,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.913
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 141.748,
        "saikou": 9.5,
        "heikin": 5.63,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.266
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 130.626,
        "saikou": 7.98,
        "heikin": 5.06,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.906
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 108.053,
        "saikou": 7.81,
        "heikin": 5.94,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 4.256
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 108.053,
        "saikou": 9.1,
        "heikin": 7.59,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.911
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 108.933,
        "saikou": 9.5,
        "heikin": 8.37,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.84
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 108.933,
        "saikou": 9.56,
        "heikin": 7.65,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.595
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 108.933,
        "saikou": 9.5,
        "heikin": 7.95,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.48
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 110.923,
        "saikou": 9.5,
        "heikin": 7.5,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.212
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 109.123,
        "saikou": 9.02,
        "heikin": 7.61,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 3.536
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 110.923,
        "saikou": 8.98,
        "heikin": 8.28,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 3.434
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 110.923,
        "saikou": 7.38,
        "heikin": 5.71,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 3.296
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 110.923,
        "saikou": 7.98,
        "heikin": 5.22,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 3.114
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 110.923,
        "saikou": 9.5,
        "heikin": 5.16,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.957
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 144.618,
        "saikou": 9.5,
        "heikin": 4.35,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.46
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 195.526,
        "saikou": 9.5,
        "heikin": 3.05,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 2.59
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 195.526,
        "saikou": 7.98,
        "heikin": 2.19,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 2.051
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 7.95,
        "heikin": 1.22,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.702
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 5.4,
        "heikin": 1.17,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.663
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 6.35,
        "heikin": 1.17,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.627
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 5.95,
        "heikin": 1.17,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.592
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 7.3,
        "heikin": 1.22,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.603
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 7.15,
        "heikin": 1.22,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.655
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 7.95,
        "heikin": 1.23,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.699
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 173.8,
        "saikou": 7.95,
        "heikin": 0.98,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.723
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 6.05,
        "heikin": 1.16,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.737
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 4.49,
        "heikin": 1.06,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.759
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 6.25,
        "heikin": 1.19,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.772
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 7.95,
        "heikin": 1.23,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.742
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 188.343,
        "saikou": 4.99,
        "heikin": 1.1,
        "boshuAvg30d": 42.7,
        "heikinAvg30d": 0.87
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 188.343,
        "saikou": 7.55,
        "heikin": 1.23,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.815
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 188.343,
        "saikou": 7.95,
        "heikin": 1.23,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.811
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 7.55,
        "heikin": 1.23,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.844
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 6.5,
        "heikin": 1.21,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.842
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 8.95,
        "heikin": 1.25,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.77
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 1.14,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.925
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 7.55,
        "heikin": 1.13,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.908
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.942
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.939
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.957
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.964
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.976
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.974
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.55,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.963
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 7.55,
        "heikin": 1.13,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.911
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 8.8,
        "heikin": 1.16,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.945
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 154.343,
        "saikou": 7.99,
        "heikin": 1.3,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 0.931
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 7.99,
        "heikin": 1.33,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 1.016
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 8.95,
        "heikin": 1.39,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.984
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 8.99,
        "heikin": 1.44,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 1.143
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 0.83,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 1.123
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 6.85,
        "heikin": 0.8,
        "boshuAvg30d": 42.7,
        "heikinAvg30d": 1.149
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 42.3,
        "heikinAvg30d": 1.166
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 0.83,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.171
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.14
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 6.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.145
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.171
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.55,
        "heikin": 0.82,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.161
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 0.83,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.147
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 6.8,
        "heikin": 1.27,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.869
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 6.8,
        "heikin": 1.27,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.801
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 6.6,
        "heikin": 1.27,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.767
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 6.25,
        "heikin": 1.23,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.712
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 7.55,
        "heikin": 1.23,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.769
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 6.35,
        "heikin": 1.19,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.735
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 85.983,
        "saikou": 1.7,
        "heikin": 1.4,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.423
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 87.907,
        "saikou": 1.5,
        "heikin": 1.37,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.21
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 115.576,
        "saikou": 4.46,
        "heikin": 2.37,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.9
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 87.373,
        "saikou": 1.5,
        "heikin": 1.32,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.827
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 88.409,
        "saikou": 1.5,
        "heikin": 1.14,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.655
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 103.409,
        "saikou": 5.43,
        "heikin": 2.03,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.856
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 187.924,
        "saikou": 5.44,
        "heikin": 0.86,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.142
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 177.096,
        "saikou": 1.44,
        "heikin": 0.66,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.472
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 247.274,
        "saikou": 1.44,
        "heikin": 0.58,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.563
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 243.836,
        "saikou": 1.44,
        "heikin": 0.57,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.877
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 268.354,
        "saikou": 7.18,
        "heikin": 2.32,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 6.021
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 228.974,
        "saikou": 7.32,
        "heikin": 5.35,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 6.003
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 226.054,
        "saikou": 8.19,
        "heikin": 5.92,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 5.872
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 225.518,
        "saikou": 8.54,
        "heikin": 6.12,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 6.004
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 167.998,
        "saikou": 7.98,
        "heikin": 4.7,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.1
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 128.648,
        "saikou": 5.02,
        "heikin": 2.12,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 4.526
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 135.648,
        "saikou": 3.43,
        "heikin": 1.8,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 4.403
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 155.648,
        "saikou": 7.95,
        "heikin": 4.08,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 4.115
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 195.57,
        "saikou": 6.59,
        "heikin": 4.47,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 3.99
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 237.788,
        "saikou": 9.51,
        "heikin": 1,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 3.655
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 220.452,
        "saikou": 8.8,
        "heikin": 1.72,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.5
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 196.852,
        "saikou": 5.7,
        "heikin": 1.37,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 3.525
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 211.15,
        "saikou": 8.8,
        "heikin": 1.42,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 3.196
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 211.15,
        "saikou": 9.1,
        "heikin": 1.44,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 3.0
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 151.074,
        "saikou": 9.4,
        "heikin": 2.16,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.092
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 213.014,
        "saikou": 9.7,
        "heikin": 1.58,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.174
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 233.724,
        "saikou": 7.1,
        "heikin": 4.6,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.696
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 227.688,
        "saikou": 9.2,
        "heikin": 4.51,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.207
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 249.534,
        "saikou": 7.1,
        "heikin": 5.2,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.48
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 159.534,
        "saikou": 8.04,
        "heikin": 4.71,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 5.081
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 137.542,
        "saikou": 5,
        "heikin": 2.89,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 5.331
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 131.634,
        "saikou": 5.96,
        "heikin": 3.25,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 5.745
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 164.658,
        "saikou": 9.36,
        "heikin": 5.63,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 6.27
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 211.612,
        "saikou": 9.54,
        "heikin": 7.57,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 6.671
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 248.662,
        "saikou": 9.83,
        "heikin": 8.26,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 6.78
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 222.273,
        "saikou": 10,
        "heikin": 8.41,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 6.909
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 230.959,
        "saikou": 10,
        "heikin": 8.48,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.982
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 235.047,
        "saikou": 10,
        "heikin": 8.25,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.825
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 246.921,
        "saikou": 10,
        "heikin": 8.53,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.512
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 230.892,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.322
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 241.731,
        "saikou": 10,
        "heikin": 7.98,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 6.298
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 251.23,
        "saikou": 10,
        "heikin": 7.98,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 6.333
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 217.138,
        "saikou": 9.54,
        "heikin": 7.05,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.224
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 173.138,
        "saikou": 8.04,
        "heikin": 5.11,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.768
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 176.96,
        "saikou": 8.64,
        "heikin": 5.47,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.728
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 96.588,
        "saikou": 7.1,
        "heikin": 1.67,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.888
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 96.601,
        "saikou": 3.21,
        "heikin": 1.53,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.733
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 118.938,
        "saikou": 4.43,
        "heikin": 2.52,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.048
      }
    ]
  }
};
