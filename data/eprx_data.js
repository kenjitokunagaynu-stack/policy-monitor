// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/27〜2026/11/25）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-26",
  "fetchedAt": "2026-11-25",
  "avgWindowLabel": "過去30日平均（2026/10/27〜2026/11/25）",
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
      "boshu": 1137,
      "ouatsu": 1475.625,
      "saikou": 9.5,
      "heikin": 2.67,
      "boshuAvg30d": 1146.0,
      "heikinAvg30d": 2.396
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1137,
      "ouatsu": 1706.382,
      "saikou": 9,
      "heikin": 2.01,
      "boshuAvg30d": 1146.0,
      "heikinAvg30d": 2.356
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1137,
      "ouatsu": 1678.368,
      "saikou": 9.1,
      "heikin": 1.95,
      "boshuAvg30d": 1146.0,
      "heikinAvg30d": 2.309
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1136,
      "ouatsu": 1758.997,
      "saikou": 9.8,
      "heikin": 1.87,
      "boshuAvg30d": 1145.2,
      "heikinAvg30d": 2.213
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1130,
      "ouatsu": 1752.299,
      "saikou": 9.8,
      "heikin": 1.79,
      "boshuAvg30d": 1139.7,
      "heikinAvg30d": 2.268
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1130,
      "ouatsu": 1671.256,
      "saikou": 9.8,
      "heikin": 2.11,
      "boshuAvg30d": 1139.5,
      "heikinAvg30d": 2.417
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1127,
      "ouatsu": 1676.925,
      "saikou": 9.99,
      "heikin": 2.53,
      "boshuAvg30d": 1148.0,
      "heikinAvg30d": 2.503
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1131,
      "ouatsu": 1571.666,
      "saikou": 9.97,
      "heikin": 2.71,
      "boshuAvg30d": 1151.7,
      "heikinAvg30d": 2.686
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1131,
      "ouatsu": 1466.917,
      "saikou": 9.99,
      "heikin": 2.45,
      "boshuAvg30d": 1152.0,
      "heikinAvg30d": 2.747
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1133,
      "ouatsu": 1498.336,
      "saikou": 9.8,
      "heikin": 2.51,
      "boshuAvg30d": 1153.8,
      "heikinAvg30d": 2.719
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1133,
      "ouatsu": 1560.159,
      "saikou": 9.94,
      "heikin": 2.39,
      "boshuAvg30d": 1153.8,
      "heikinAvg30d": 2.82
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1133,
      "ouatsu": 1625.326,
      "saikou": 9.5,
      "heikin": 2.73,
      "boshuAvg30d": 1153.8,
      "heikinAvg30d": 2.863
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1192,
      "ouatsu": 1313.596,
      "saikou": 10,
      "heikin": 4.7,
      "boshuAvg30d": 1213.0,
      "heikinAvg30d": 3.043
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1217,
      "ouatsu": 1415.053,
      "saikou": 10,
      "heikin": 4.6,
      "boshuAvg30d": 1237.7,
      "heikinAvg30d": 3.152
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1236,
      "ouatsu": 1253.852,
      "saikou": 10,
      "heikin": 4.7,
      "boshuAvg30d": 1257.0,
      "heikinAvg30d": 3.147
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1251,
      "ouatsu": 1292.616,
      "saikou": 10,
      "heikin": 4.87,
      "boshuAvg30d": 1272.7,
      "heikinAvg30d": 2.933
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1251,
      "ouatsu": 1158.353,
      "saikou": 10,
      "heikin": 3.79,
      "boshuAvg30d": 1273.0,
      "heikinAvg30d": 2.782
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1251,
      "ouatsu": 1430.649,
      "saikou": 9.99,
      "heikin": 3.22,
      "boshuAvg30d": 1276.9,
      "heikinAvg30d": 2.843
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1180,
      "ouatsu": 1516.583,
      "saikou": 9.99,
      "heikin": 3.04,
      "boshuAvg30d": 1232.2,
      "heikinAvg30d": 2.75
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1185,
      "ouatsu": 1675.391,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1236.8,
      "heikinAvg30d": 2.717
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1189,
      "ouatsu": 1778.082,
      "saikou": 9.99,
      "heikin": 2.71,
      "boshuAvg30d": 1241.3,
      "heikinAvg30d": 2.733
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1193,
      "ouatsu": 1838.853,
      "saikou": 9.99,
      "heikin": 3.13,
      "boshuAvg30d": 1244.6,
      "heikinAvg30d": 2.735
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1187,
      "ouatsu": 1781.06,
      "saikou": 9.99,
      "heikin": 2.83,
      "boshuAvg30d": 1238.8,
      "heikinAvg30d": 2.67
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1187,
      "ouatsu": 1826.275,
      "saikou": 9.91,
      "heikin": 2.76,
      "boshuAvg30d": 1238.6,
      "heikinAvg30d": 2.807
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1168,
      "ouatsu": 1828.179,
      "saikou": 9.4,
      "heikin": 2.08,
      "boshuAvg30d": 1219.4,
      "heikinAvg30d": 2.623
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1168,
      "ouatsu": 1862.803,
      "saikou": 9.5,
      "heikin": 1.93,
      "boshuAvg30d": 1219.4,
      "heikinAvg30d": 2.688
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1168,
      "ouatsu": 1749.763,
      "saikou": 9.99,
      "heikin": 2.86,
      "boshuAvg30d": 1219.4,
      "heikinAvg30d": 2.782
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1164,
      "ouatsu": 1736.125,
      "saikou": 9.99,
      "heikin": 2.93,
      "boshuAvg30d": 1215.4,
      "heikinAvg30d": 2.838
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1163,
      "ouatsu": 1668.663,
      "saikou": 9.99,
      "heikin": 3.02,
      "boshuAvg30d": 1214.1,
      "heikinAvg30d": 2.929
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1157,
      "ouatsu": 1678.744,
      "saikou": 9.99,
      "heikin": 3.03,
      "boshuAvg30d": 1208.1,
      "heikinAvg30d": 3.064
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1228,
      "ouatsu": 1489.801,
      "saikou": 9.99,
      "heikin": 2.87,
      "boshuAvg30d": 1261.4,
      "heikinAvg30d": 3.209
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1228,
      "ouatsu": 1468.247,
      "saikou": 10,
      "heikin": 4.01,
      "boshuAvg30d": 1261.1,
      "heikinAvg30d": 3.326
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1228,
      "ouatsu": 1420.171,
      "saikou": 10,
      "heikin": 4.32,
      "boshuAvg30d": 1261.0,
      "heikinAvg30d": 3.613
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1226,
      "ouatsu": 1214.6,
      "saikou": 10,
      "heikin": 4.24,
      "boshuAvg30d": 1259.1,
      "heikinAvg30d": 3.718
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1224,
      "ouatsu": 1251.105,
      "saikou": 10,
      "heikin": 4.72,
      "boshuAvg30d": 1252.8,
      "heikinAvg30d": 3.727
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1219,
      "ouatsu": 1370.406,
      "saikou": 10,
      "heikin": 4.89,
      "boshuAvg30d": 1244.0,
      "heikinAvg30d": 3.656
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1215,
      "ouatsu": 1317.168,
      "saikou": 10,
      "heikin": 4.35,
      "boshuAvg30d": 1239.8,
      "heikinAvg30d": 3.484
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1215,
      "ouatsu": 1274.778,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1239.8,
      "heikinAvg30d": 3.387
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1215,
      "ouatsu": 1337.138,
      "saikou": 10,
      "heikin": 3.53,
      "boshuAvg30d": 1239.8,
      "heikinAvg30d": 3.314
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1213,
      "ouatsu": 1337.538,
      "saikou": 10,
      "heikin": 3.53,
      "boshuAvg30d": 1238.3,
      "heikinAvg30d": 3.247
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1206,
      "ouatsu": 1341.604,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1231.1,
      "heikinAvg30d": 3.152
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1206,
      "ouatsu": 1319.37,
      "saikou": 10,
      "heikin": 4.02,
      "boshuAvg30d": 1231.1,
      "heikinAvg30d": 3.15
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1117,
      "ouatsu": 1673.954,
      "saikou": 10,
      "heikin": 4.41,
      "boshuAvg30d": 1144.8,
      "heikinAvg30d": 3.04
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1120,
      "ouatsu": 1458.314,
      "saikou": 10,
      "heikin": 4.58,
      "boshuAvg30d": 1147.8,
      "heikinAvg30d": 2.99
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1119,
      "ouatsu": 1300.78,
      "saikou": 9.99,
      "heikin": 2.85,
      "boshuAvg30d": 1147.2,
      "heikinAvg30d": 3.011
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1112,
      "ouatsu": 1584.271,
      "saikou": 9.8,
      "heikin": 2.79,
      "boshuAvg30d": 1140.5,
      "heikinAvg30d": 2.988
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1104,
      "ouatsu": 1421.613,
      "saikou": 9.99,
      "heikin": 3.22,
      "boshuAvg30d": 1132.7,
      "heikinAvg30d": 2.913
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1096,
      "ouatsu": 1553.915,
      "saikou": 9.99,
      "heikin": 2.99,
      "boshuAvg30d": 1124.2,
      "heikinAvg30d": 2.67
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
        "ouatsu": 43.918,
        "saikou": 9,
        "heikin": 7.11,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 2.845
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 43.918,
        "saikou": 9,
        "heikin": 7.34,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 2.915
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 41.95,
        "saikou": 9.1,
        "heikin": 7.63,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 2.62
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 7.39,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 2.905
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 46.918,
        "saikou": 9.8,
        "heikin": 7.35,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.332
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 46.94,
        "saikou": 9.8,
        "heikin": 7.64,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 2.956
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 50.108,
        "saikou": 9.8,
        "heikin": 7.45,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.335
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 50.108,
        "saikou": 9.8,
        "heikin": 7.42,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.268
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 48.118,
        "saikou": 9.8,
        "heikin": 7.38,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.377
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 46.15,
        "saikou": 9.8,
        "heikin": 7.51,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.186
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 48.118,
        "saikou": 9.8,
        "heikin": 7.16,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.122
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 112.118,
        "saikou": 8.9,
        "heikin": 5.76,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.887
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 47.108,
        "saikou": 9.8,
        "heikin": 7.2,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.339
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 193.408,
        "saikou": 9.91,
        "heikin": 6.28,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.375
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 32.108,
        "saikou": 9.8,
        "heikin": 7.47,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.607
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 80.408,
        "saikou": 9.91,
        "heikin": 9.22,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.36
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 7.13,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.567
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 71.963,
        "saikou": 9.91,
        "heikin": 8.4,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 3.975
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 28.918,
        "saikou": 7.1,
        "heikin": 6.8,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 3.867
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 153.973,
        "saikou": 9.91,
        "heikin": 4.46,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.317
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 114.908,
        "saikou": 9.2,
        "heikin": 2.99,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.391
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 155.963,
        "saikou": 9.91,
        "heikin": 4.85,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.603
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 114.908,
        "saikou": 9.8,
        "heikin": 3,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.689
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 154.013,
        "saikou": 9.91,
        "heikin": 4.86,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.724
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 159.968,
        "saikou": 8.14,
        "heikin": 3.05,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 3.209
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 159.968,
        "saikou": 8.34,
        "heikin": 3.08,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 3.224
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 152.023,
        "saikou": 9.91,
        "heikin": 4.24,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 3.371
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 153.973,
        "saikou": 9.91,
        "heikin": 4.53,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.27
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 112.918,
        "saikou": 7,
        "heikin": 2.42,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.259
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 112.918,
        "saikou": 7,
        "heikin": 1.51,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.439
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 28.918,
        "saikou": 7.1,
        "heikin": 6.8,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.772
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 8.66,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 5.706
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 71.84,
        "saikou": 9.91,
        "heikin": 9.18,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 6.183
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 6.94,
        "saikou": 9.8,
        "heikin": 9.29,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 6.269
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 48.808,
        "saikou": 9.91,
        "heikin": 9.54,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 5.812
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 73.788,
        "saikou": 9.91,
        "heikin": 8.77,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 5.71
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 7.01,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 5.424
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 6.48,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 5.301
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 46.918,
        "saikou": 9.8,
        "heikin": 6.4,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 5.173
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 46.918,
        "saikou": 9.8,
        "heikin": 6.4,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 5.038
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 43.918,
        "saikou": 7.3,
        "heikin": 6.16,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 5.218
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 43.918,
        "saikou": 7.3,
        "heikin": 6.16,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.568
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 144.918,
        "saikou": 5.17,
        "heikin": 5.08,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.682
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 44.95,
        "saikou": 9.8,
        "heikin": 7.74,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.777
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.54,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.653
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.65,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.663
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 29.95,
        "saikou": 9.8,
        "heikin": 9,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.243
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 29.95,
        "saikou": 9.8,
        "heikin": 9.21,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.909
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 67.86,
        "saikou": 3.99,
        "heikin": 2.75,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 4.762
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 69.79,
        "saikou": 3.04,
        "heikin": 2.07,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 5.063
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 66.51,
        "saikou": 3.17,
        "heikin": 2.02,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 5.308
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 69.82,
        "saikou": 3.85,
        "heikin": 2.21,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 5.42
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 69.766,
        "saikou": 3.17,
        "heikin": 1.98,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 5.273
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 67.836,
        "saikou": 3.16,
        "heikin": 1.84,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 4.852
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 86.65,
        "saikou": 3.99,
        "heikin": 2.13,
        "boshuAvg30d": 122.0,
        "heikinAvg30d": 4.762
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 98.82,
        "saikou": 3.99,
        "heikin": 2.32,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 4.295
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 102.818,
        "saikou": 4.19,
        "heikin": 2.24,
        "boshuAvg30d": 122.0,
        "heikinAvg30d": 4.274
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 100.888,
        "saikou": 4.19,
        "heikin": 2.4,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 4.328
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 102.818,
        "saikou": 4.19,
        "heikin": 2.34,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 4.338
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 101.168,
        "saikou": 2.92,
        "heikin": 2.13,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 4.216
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 114.818,
        "saikou": 9.49,
        "heikin": 3.27,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 4.293
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 101.318,
        "saikou": 4.5,
        "heikin": 3.3,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 4.258
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 114.818,
        "saikou": 10,
        "heikin": 4.08,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 4.851
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 125.318,
        "saikou": 5.55,
        "heikin": 4.03,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 4.936
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 126.057,
        "saikou": 7.35,
        "heikin": 3.6,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 4.751
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 123.32,
        "saikou": 4.84,
        "heikin": 3.58,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 5.035
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 124.894,
        "saikou": 8.51,
        "heikin": 4.86,
        "boshuAvg30d": 78.5,
        "heikinAvg30d": 4.652
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 120.9,
        "saikou": 10,
        "heikin": 5.63,
        "boshuAvg30d": 79.4,
        "heikinAvg30d": 4.628
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 141.687,
        "saikou": 6.63,
        "heikin": 5.12,
        "boshuAvg30d": 81.4,
        "heikinAvg30d": 5.018
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 121.235,
        "saikou": 6.63,
        "heikin": 4.88,
        "boshuAvg30d": 82.2,
        "heikinAvg30d": 5.235
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 123.098,
        "saikou": 6.63,
        "heikin": 4.87,
        "boshuAvg30d": 82.4,
        "heikinAvg30d": 5.162
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 123.444,
        "saikou": 6.63,
        "heikin": 4.67,
        "boshuAvg30d": 82.4,
        "heikinAvg30d": 5.315
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 123.098,
        "saikou": 6.86,
        "heikin": 4.6,
        "boshuAvg30d": 77.5,
        "heikinAvg30d": 5.605
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 123.744,
        "saikou": 6.67,
        "heikin": 5.38,
        "boshuAvg30d": 77.5,
        "heikinAvg30d": 5.487
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 127.09,
        "saikou": 6.2,
        "heikin": 3.73,
        "boshuAvg30d": 77.5,
        "heikinAvg30d": 4.623
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 103.09,
        "saikou": 9.03,
        "heikin": 7.05,
        "boshuAvg30d": 76.5,
        "heikinAvg30d": 4.804
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 99.84,
        "saikou": 6.69,
        "heikin": 4.53,
        "boshuAvg30d": 76.5,
        "heikinAvg30d": 4.597
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 126.814,
        "saikou": 4.22,
        "heikin": 3.2,
        "boshuAvg30d": 75.4,
        "heikinAvg30d": 4.073
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 126.814,
        "saikou": 4,
        "heikin": 3.09,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 4.162
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 90.85,
        "saikou": 3.99,
        "heikin": 2.85,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 4.453
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 86.855,
        "saikou": 3.66,
        "heikin": 3.2,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 4.397
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 59.597,
        "saikou": 4.5,
        "heikin": 3.28,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 4.177
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 77.094,
        "saikou": 5.41,
        "heikin": 2.97,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 4.573
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 85.944,
        "saikou": 3.54,
        "heikin": 2.59,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 3.827
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 89.058,
        "saikou": 4.09,
        "heikin": 2.82,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 3.344
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 87.558,
        "saikou": 3.99,
        "heikin": 2.7,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 3.041
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 77.058,
        "saikou": 3.5,
        "heikin": 2.47,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 3.021
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 77.058,
        "saikou": 4.19,
        "heikin": 2.7,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.12
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 98.929,
        "saikou": 3.49,
        "heikin": 1.63,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 3.309
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 90.189,
        "saikou": 3.99,
        "heikin": 2.87,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 3.366
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 92.244,
        "saikou": 3.82,
        "heikin": 2.74,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 3.023
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 90.248,
        "saikou": 4.99,
        "heikin": 3.91,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 3.48
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 88.448,
        "saikou": 2.82,
        "heikin": 2.32,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 3.574
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 88.448,
        "saikou": 2.52,
        "heikin": 2.32,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 4.153
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 86.518,
        "saikou": 2.85,
        "heikin": 2.1,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 4.08
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 83.368,
        "saikou": 3.77,
        "heikin": 2.6,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 4.853
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 215,
        "ouatsu": 480.915,
        "saikou": 4.39,
        "heikin": 1.26,
        "boshuAvg30d": 223.7,
        "heikinAvg30d": 1.653
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 215,
        "ouatsu": 506.792,
        "saikou": 2.7,
        "heikin": 1.49,
        "boshuAvg30d": 223.7,
        "heikinAvg30d": 1.604
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 215,
        "ouatsu": 496.127,
        "saikou": 2.61,
        "heikin": 1.5,
        "boshuAvg30d": 223.7,
        "heikinAvg30d": 1.763
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 215,
        "ouatsu": 577.653,
        "saikou": 2.08,
        "heikin": 1.21,
        "boshuAvg30d": 223.7,
        "heikinAvg30d": 1.375
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 213,
        "ouatsu": 581.164,
        "saikou": 2.25,
        "heikin": 1.28,
        "boshuAvg30d": 221.8,
        "heikinAvg30d": 1.393
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 213,
        "ouatsu": 583.142,
        "saikou": 2.39,
        "heikin": 1.26,
        "boshuAvg30d": 221.7,
        "heikinAvg30d": 1.625
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 211,
        "ouatsu": 563.448,
        "saikou": 2.21,
        "heikin": 1.29,
        "boshuAvg30d": 219.7,
        "heikinAvg30d": 1.565
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 213,
        "ouatsu": 512.509,
        "saikou": 6.4,
        "heikin": 2.32,
        "boshuAvg30d": 221.7,
        "heikinAvg30d": 1.645
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 213,
        "ouatsu": 487.426,
        "saikou": 5.76,
        "heikin": 1.25,
        "boshuAvg30d": 221.7,
        "heikinAvg30d": 1.891
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 214,
        "ouatsu": 503.837,
        "saikou": 3.97,
        "heikin": 1.73,
        "boshuAvg30d": 222.7,
        "heikinAvg30d": 1.718
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 214,
        "ouatsu": 622.584,
        "saikou": 2.37,
        "heikin": 1.34,
        "boshuAvg30d": 222.7,
        "heikinAvg30d": 1.728
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 214,
        "ouatsu": 546.425,
        "saikou": 4.17,
        "heikin": 2.09,
        "boshuAvg30d": 222.7,
        "heikinAvg30d": 1.833
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 234,
        "ouatsu": 414.979,
        "saikou": 9.27,
        "heikin": 4.44,
        "boshuAvg30d": 242.5,
        "heikinAvg30d": 2.304
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 242,
        "ouatsu": 360.517,
        "saikou": 9.86,
        "heikin": 3.89,
        "boshuAvg30d": 250.5,
        "heikinAvg30d": 2.475
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 246,
        "ouatsu": 352.02,
        "saikou": 9.99,
        "heikin": 4.26,
        "boshuAvg30d": 254.7,
        "heikinAvg30d": 2.592
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 251,
        "ouatsu": 328.96,
        "saikou": 9.31,
        "heikin": 3.71,
        "boshuAvg30d": 260.0,
        "heikinAvg30d": 2.37
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 251,
        "ouatsu": 364.962,
        "saikou": 7.52,
        "heikin": 2.57,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 1.882
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 251,
        "ouatsu": 485.932,
        "saikou": 6.57,
        "heikin": 2.93,
        "boshuAvg30d": 264.2,
        "heikinAvg30d": 2.448
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 241,
        "ouatsu": 538.699,
        "saikou": 4.51,
        "heikin": 2.24,
        "boshuAvg30d": 254.5,
        "heikinAvg30d": 1.894
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 241,
        "ouatsu": 541.84,
        "saikou": 2.56,
        "heikin": 1.73,
        "boshuAvg30d": 254.5,
        "heikinAvg30d": 1.895
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 241,
        "ouatsu": 664.03,
        "saikou": 2.79,
        "heikin": 1.15,
        "boshuAvg30d": 254.8,
        "heikinAvg30d": 1.822
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 241,
        "ouatsu": 673.806,
        "saikou": 3.77,
        "heikin": 1.73,
        "boshuAvg30d": 254.7,
        "heikinAvg30d": 1.79
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 238,
        "ouatsu": 650.396,
        "saikou": 3.61,
        "heikin": 1.75,
        "boshuAvg30d": 251.5,
        "heikinAvg30d": 1.862
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 238,
        "ouatsu": 650.696,
        "saikou": 2.62,
        "heikin": 1.69,
        "boshuAvg30d": 251.5,
        "heikinAvg30d": 2.085
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 236,
        "ouatsu": 603.698,
        "saikou": 2.42,
        "heikin": 0.88,
        "boshuAvg30d": 249.3,
        "heikinAvg30d": 1.541
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 236,
        "ouatsu": 599.838,
        "saikou": 2.36,
        "heikin": 0.58,
        "boshuAvg30d": 249.3,
        "heikinAvg30d": 1.556
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 236,
        "ouatsu": 592.269,
        "saikou": 7.77,
        "heikin": 1.69,
        "boshuAvg30d": 249.3,
        "heikinAvg30d": 1.93
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 236,
        "ouatsu": 676.182,
        "saikou": 5.74,
        "heikin": 1.31,
        "boshuAvg30d": 249.0,
        "heikinAvg30d": 1.7
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 235,
        "ouatsu": 521.86,
        "saikou": 3.81,
        "heikin": 1.8,
        "boshuAvg30d": 248.0,
        "heikinAvg30d": 1.885
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 235,
        "ouatsu": 584.878,
        "saikou": 3.46,
        "heikin": 1.8,
        "boshuAvg30d": 247.8,
        "heikinAvg30d": 2.051
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 233,
        "ouatsu": 596.571,
        "saikou": 5.53,
        "heikin": 1.82,
        "boshuAvg30d": 246.2,
        "heikinAvg30d": 2.12
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 233,
        "ouatsu": 556.533,
        "saikou": 2.08,
        "heikin": 1.14,
        "boshuAvg30d": 245.8,
        "heikinAvg30d": 2.028
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 233,
        "ouatsu": 560.506,
        "saikou": 2.26,
        "heikin": 1.3,
        "boshuAvg30d": 245.5,
        "heikinAvg30d": 2.115
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 233,
        "ouatsu": 491.345,
        "saikou": 2.25,
        "heikin": 1.65,
        "boshuAvg30d": 245.5,
        "heikinAvg30d": 2.123
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 233,
        "ouatsu": 450.072,
        "saikou": 8.32,
        "heikin": 1.94,
        "boshuAvg30d": 245.5,
        "heikinAvg30d": 2.039
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 233,
        "ouatsu": 524.543,
        "saikou": 7.75,
        "heikin": 3.18,
        "boshuAvg30d": 241.7,
        "heikinAvg30d": 2.172
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 235,
        "ouatsu": 508.257,
        "saikou": 7.77,
        "heikin": 2.18,
        "boshuAvg30d": 243.8,
        "heikinAvg30d": 2.022
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 235,
        "ouatsu": 473.004,
        "saikou": 7.57,
        "heikin": 1.79,
        "boshuAvg30d": 243.8,
        "heikinAvg30d": 1.926
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 235,
        "ouatsu": 485.451,
        "saikou": 6.76,
        "heikin": 1.39,
        "boshuAvg30d": 243.8,
        "heikinAvg30d": 1.946
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 235,
        "ouatsu": 475.573,
        "saikou": 2.63,
        "heikin": 1.28,
        "boshuAvg30d": 244.2,
        "heikinAvg30d": 1.82
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 234,
        "ouatsu": 470.245,
        "saikou": 7.03,
        "heikin": 1.74,
        "boshuAvg30d": 243.0,
        "heikinAvg30d": 1.901
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 234,
        "ouatsu": 432.827,
        "saikou": 6.59,
        "heikin": 1.45,
        "boshuAvg30d": 243.0,
        "heikinAvg30d": 2.039
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 233,
        "ouatsu": 556.088,
        "saikou": 5.77,
        "heikin": 1.9,
        "boshuAvg30d": 242.2,
        "heikinAvg30d": 1.85
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 233,
        "ouatsu": 475.651,
        "saikou": 6.68,
        "heikin": 2.7,
        "boshuAvg30d": 242.2,
        "heikinAvg30d": 1.819
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 233,
        "ouatsu": 406.002,
        "saikou": 3.45,
        "heikin": 1.69,
        "boshuAvg30d": 242.2,
        "heikinAvg30d": 1.973
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 231,
        "ouatsu": 496.736,
        "saikou": 6.36,
        "heikin": 2.52,
        "boshuAvg30d": 240.2,
        "heikinAvg30d": 2.048
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 229,
        "ouatsu": 471.25,
        "saikou": 6.36,
        "heikin": 2.85,
        "boshuAvg30d": 238.5,
        "heikinAvg30d": 2.301
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 228,
        "ouatsu": 475.311,
        "saikou": 6.46,
        "heikin": 2.33,
        "boshuAvg30d": 236.8,
        "heikinAvg30d": 2.097
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 122,
        "ouatsu": 290.688,
        "saikou": 6.7,
        "heikin": 3.32,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 1.977
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 122,
        "ouatsu": 465.708,
        "saikou": 3.05,
        "heikin": 2.33,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 1.952
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 122,
        "ouatsu": 480.515,
        "saikou": 3.01,
        "heikin": 2.37,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 1.967
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 478.413,
        "saikou": 3.16,
        "heikin": 2.46,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 2.015
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 121,
        "ouatsu": 460.559,
        "saikou": 2.68,
        "heikin": 2.12,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.055
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 441.119,
        "saikou": 7,
        "heikin": 2.63,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.03
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 351.891,
        "saikou": 7.21,
        "heikin": 2.67,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.961
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 270.427,
        "saikou": 6.43,
        "heikin": 2.36,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.938
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 119,
        "ouatsu": 179.767,
        "saikou": 6.91,
        "heikin": 2.53,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 1.833
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 119,
        "ouatsu": 213.164,
        "saikou": 6.67,
        "heikin": 3.02,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 1.865
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 119,
        "ouatsu": 149.849,
        "saikou": 6.83,
        "heikin": 2.6,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 1.82
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 119,
        "ouatsu": 231.776,
        "saikou": 6.87,
        "heikin": 3.19,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 1.823
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 132.784,
        "saikou": 9,
        "heikin": 2.77,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 2.053
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 128.89,
        "saikou": 9,
        "heikin": 2.73,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 2.048
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 137,
        "ouatsu": 124.911,
        "saikou": 9,
        "heikin": 2.72,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 2.242
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 139,
        "ouatsu": 123.411,
        "saikou": 9,
        "heikin": 2.74,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 2.303
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 139,
        "ouatsu": 125.401,
        "saikou": 9,
        "heikin": 2.82,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 2.258
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 139,
        "ouatsu": 127.4,
        "saikou": 8.05,
        "heikin": 2.93,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 2.407
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 236.68,
        "saikou": 9,
        "heikin": 3.57,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 2.336
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 353.226,
        "saikou": 9,
        "heikin": 2.65,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 2.678
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 144,
        "ouatsu": 405.196,
        "saikou": 9,
        "heikin": 2.87,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 2.749
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 144,
        "ouatsu": 440.541,
        "saikou": 9,
        "heikin": 2.9,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 2.76
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 143,
        "ouatsu": 442.503,
        "saikou": 9,
        "heikin": 2.65,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 2.737
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 142,
        "ouatsu": 444.147,
        "saikou": 9,
        "heikin": 2.68,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 3.05
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 138,
        "ouatsu": 446.002,
        "saikou": 7.5,
        "heikin": 2.7,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 3.379
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 138,
        "ouatsu": 457.924,
        "saikou": 6.98,
        "heikin": 2.52,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 3.351
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 138,
        "ouatsu": 419.206,
        "saikou": 9.47,
        "heikin": 2.28,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 2.613
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 138,
        "ouatsu": 329.342,
        "saikou": 9.47,
        "heikin": 1.89,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 2.606
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 138,
        "ouatsu": 433.229,
        "saikou": 9.47,
        "heikin": 2.87,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 2.642
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 138,
        "ouatsu": 369.944,
        "saikou": 9.47,
        "heikin": 3.38,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 2.697
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 136,
        "ouatsu": 125.425,
        "saikou": 9.47,
        "heikin": 3.49,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 2.929
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 136,
        "ouatsu": 166.869,
        "saikou": 9.47,
        "heikin": 2.84,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 2.883
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 136,
        "ouatsu": 111.568,
        "saikou": 9.47,
        "heikin": 3.36,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 2.888
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 135,
        "ouatsu": 121.028,
        "saikou": 9.47,
        "heikin": 5.09,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.385
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 135,
        "ouatsu": 117.071,
        "saikou": 9.47,
        "heikin": 5.12,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.264
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 134,
        "ouatsu": 117.573,
        "saikou": 9.47,
        "heikin": 3.87,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 2.893
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 132,
        "ouatsu": 121.053,
        "saikou": 9.47,
        "heikin": 4.86,
        "boshuAvg30d": 161.2,
        "heikinAvg30d": 2.778
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 132,
        "ouatsu": 123.012,
        "saikou": 9.47,
        "heikin": 4.78,
        "boshuAvg30d": 161.2,
        "heikinAvg30d": 2.749
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 132,
        "ouatsu": 166.465,
        "saikou": 9.37,
        "heikin": 2.83,
        "boshuAvg30d": 161.2,
        "heikinAvg30d": 2.271
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 132,
        "ouatsu": 170.345,
        "saikou": 9.37,
        "heikin": 2.78,
        "boshuAvg30d": 161.2,
        "heikinAvg30d": 2.339
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 132,
        "ouatsu": 154.358,
        "saikou": 9.37,
        "heikin": 2.89,
        "boshuAvg30d": 161.2,
        "heikinAvg30d": 2.14
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 132,
        "ouatsu": 140.627,
        "saikou": 9.37,
        "heikin": 2.76,
        "boshuAvg30d": 161.2,
        "heikinAvg30d": 2.047
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 134,
        "ouatsu": 148.312,
        "saikou": 9.37,
        "heikin": 2.58,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 1.928
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 134,
        "ouatsu": 156.305,
        "saikou": 9.37,
        "heikin": 2.64,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 2.217
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 134,
        "ouatsu": 168.265,
        "saikou": 9.37,
        "heikin": 2.57,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 2.176
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 336.59,
        "saikou": 9.37,
        "heikin": 2.71,
        "boshuAvg30d": 161.4,
        "heikinAvg30d": 2.162
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 210.505,
        "saikou": 9.37,
        "heikin": 2.6,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 2.076
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 316.842,
        "saikou": 9.37,
        "heikin": 2.21,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 2.041
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 7.75,
        "heikin": 7.54,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 4.265
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 3.818
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 3.154
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 3.658
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 3.761
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 3.555
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 5.102
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 8.82,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 4.567
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.73,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 3.827
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.45,
        "heikin": 8.6,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 5.052
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 8.9,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 4.996
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.45,
        "heikin": 8.68,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 4.644
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.45,
        "heikin": 8.6,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 5.218
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.4,
        "heikin": 8.68,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 4.921
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.92,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 5.609
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.85,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 4.617
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 5.384
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 5.07
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.582
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.732
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 6.405
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 6.664
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 6.264
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 6.127
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 4.69
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.375
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 6.638
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.733
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 6.798
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 6.605
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.3,
        "heikinAvg30d": 6.857
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.3,
        "heikinAvg30d": 7.145
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.5,
        "heikinAvg30d": 6.887
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.5,
        "heikinAvg30d": 6.234
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.5,
        "heikinAvg30d": 6.617
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.5,
        "heikinAvg30d": 6.415
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.3,
        "heikinAvg30d": 5.675
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.3,
        "heikinAvg30d": 6.432
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.65,
        "boshuAvg30d": 69.3,
        "heikinAvg30d": 5.572
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.92,
        "boshuAvg30d": 69.3,
        "heikinAvg30d": 6.097
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 5.125
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 5.615
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.73,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 5.345
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.58,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 5.347
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.7,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 5.799
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 5.518
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.82,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 5.576
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.82,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 4.207
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 88.928,
        "saikou": 8.99,
        "heikin": 3.89,
        "boshuAvg30d": 220.1,
        "heikinAvg30d": 3.125
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 98.064,
        "saikou": 2.98,
        "heikin": 2.56,
        "boshuAvg30d": 220.1,
        "heikinAvg30d": 2.343
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 96.104,
        "saikou": 2.98,
        "heikin": 2.56,
        "boshuAvg30d": 220.1,
        "heikinAvg30d": 2.199
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 97.954,
        "saikou": 2.94,
        "heikin": 2.54,
        "boshuAvg30d": 220.1,
        "heikinAvg30d": 2.208
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 99.952,
        "saikou": 2.42,
        "heikin": 2.42,
        "boshuAvg30d": 219.1,
        "heikinAvg30d": 2.725
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 99.952,
        "saikou": 3.94,
        "heikin": 2.48,
        "boshuAvg30d": 219.1,
        "heikinAvg30d": 3.15
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 115.694,
        "saikou": 9.97,
        "heikin": 5.74,
        "boshuAvg30d": 219.1,
        "heikinAvg30d": 3.402
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 115.694,
        "saikou": 9.97,
        "heikin": 5.84,
        "boshuAvg30d": 219.1,
        "heikinAvg30d": 3.674
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 115.741,
        "saikou": 8.99,
        "heikin": 5.75,
        "boshuAvg30d": 220.1,
        "heikinAvg30d": 3.405
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 113.891,
        "saikou": 8.99,
        "heikin": 5.18,
        "boshuAvg30d": 220.1,
        "heikinAvg30d": 3.178
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 113.891,
        "saikou": 9.94,
        "heikin": 5.16,
        "boshuAvg30d": 220.1,
        "heikinAvg30d": 3.194
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 113.891,
        "saikou": 8.99,
        "heikin": 5.19,
        "boshuAvg30d": 220.1,
        "heikinAvg30d": 3.205
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 117.681,
        "saikou": 9.49,
        "heikin": 5.85,
        "boshuAvg30d": 230.3,
        "heikinAvg30d": 3.227
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 117.681,
        "saikou": 9.44,
        "heikin": 5.85,
        "boshuAvg30d": 234.3,
        "heikinAvg30d": 3.34
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.88,
        "heikin": 6.25,
        "boshuAvg30d": 239.3,
        "heikinAvg30d": 4.093
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 117.681,
        "saikou": 9.73,
        "heikin": 6.26,
        "boshuAvg30d": 241.4,
        "heikinAvg30d": 4.281
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.29,
        "boshuAvg30d": 241.4,
        "heikinAvg30d": 4.187
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.37,
        "boshuAvg30d": 241.4,
        "heikinAvg30d": 4.556
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 115.703,
        "saikou": 9.99,
        "heikin": 6.32,
        "boshuAvg30d": 251.7,
        "heikinAvg30d": 4.818
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 115.703,
        "saikou": 9.98,
        "heikin": 6.48,
        "boshuAvg30d": 251.7,
        "heikinAvg30d": 4.674
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 109.851,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 251.7,
        "heikinAvg30d": 4.456
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 109.851,
        "saikou": 9.99,
        "heikin": 6.4,
        "boshuAvg30d": 250.7,
        "heikinAvg30d": 4.404
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 111.836,
        "saikou": 9.99,
        "heikin": 6.4,
        "boshuAvg30d": 248.9,
        "heikinAvg30d": 4.289
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 113.814,
        "saikou": 9.04,
        "heikin": 5.28,
        "boshuAvg30d": 249.7,
        "heikinAvg30d": 4.108
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 105.822,
        "saikou": 8.98,
        "heikin": 3.47,
        "boshuAvg30d": 247.9,
        "heikinAvg30d": 3.666
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 113.814,
        "saikou": 6.38,
        "heikin": 2.58,
        "boshuAvg30d": 247.9,
        "heikinAvg30d": 3.725
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 113.814,
        "saikou": 9.98,
        "heikin": 6.46,
        "boshuAvg30d": 247.9,
        "heikinAvg30d": 4.48
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.98,
        "heikin": 6.47,
        "boshuAvg30d": 247.9,
        "heikinAvg30d": 4.497
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.57,
        "boshuAvg30d": 247.9,
        "heikinAvg30d": 4.975
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.57,
        "boshuAvg30d": 247.9,
        "heikinAvg30d": 4.863
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.98,
        "heikin": 6.41,
        "boshuAvg30d": 247.7,
        "heikinAvg30d": 4.802
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.42,
        "boshuAvg30d": 247.7,
        "heikinAvg30d": 4.944
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.56,
        "boshuAvg30d": 247.7,
        "heikinAvg30d": 4.725
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.95,
        "heikin": 6,
        "boshuAvg30d": 247.7,
        "heikinAvg30d": 4.209
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.32,
        "boshuAvg30d": 243.4,
        "heikinAvg30d": 4.513
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.41,
        "boshuAvg30d": 242.4,
        "heikinAvg30d": 4.428
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 115.721,
        "saikou": 9.99,
        "heikin": 6.12,
        "boshuAvg30d": 240.4,
        "heikinAvg30d": 4.296
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 115.721,
        "saikou": 9.99,
        "heikin": 6.15,
        "boshuAvg30d": 240.4,
        "heikinAvg30d": 4.297
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 240.4,
        "heikinAvg30d": 4.261
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 5.73,
        "boshuAvg30d": 239.4,
        "heikinAvg30d": 3.659
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 115.696,
        "saikou": 9.99,
        "heikin": 6.08,
        "boshuAvg30d": 238.4,
        "heikinAvg30d": 4.115
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 115.696,
        "saikou": 9.99,
        "heikin": 6.09,
        "boshuAvg30d": 239.2,
        "heikinAvg30d": 4.182
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 117.681,
        "saikou": 9.49,
        "heikin": 6.01,
        "boshuAvg30d": 239.2,
        "heikinAvg30d": 4.01
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 117.681,
        "saikou": 9.19,
        "heikin": 5.98,
        "boshuAvg30d": 239.2,
        "heikinAvg30d": 4.003
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 117.681,
        "saikou": 8.99,
        "heikin": 6.02,
        "boshuAvg30d": 239.2,
        "heikinAvg30d": 3.992
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 117.681,
        "saikou": 8.79,
        "heikin": 4.29,
        "boshuAvg30d": 237.4,
        "heikinAvg30d": 4.046
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.14,
        "boshuAvg30d": 236.2,
        "heikinAvg30d": 3.858
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.42,
        "boshuAvg30d": 234.2,
        "heikinAvg30d": 3.397
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 211.605,
        "saikou": 9.5,
        "heikin": 4.1,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.311
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 210.018,
        "saikou": 2.49,
        "heikin": 1.76,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.406
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 220.708,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.315
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 222.698,
        "saikou": 2.29,
        "heikin": 1.45,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.021
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 198.832,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.05
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 135.197,
        "saikou": 6.38,
        "heikin": 2.71,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.228
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 82.983,
        "saikou": 9.4,
        "heikin": 4.59,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.536
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 95.727,
        "saikou": 9.5,
        "heikin": 6.14,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 2.904
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 85.007,
        "saikou": 9.5,
        "heikin": 6.03,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 2.89
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 59.351,
        "saikou": 9.5,
        "heikin": 7.29,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 2.863
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 59.351,
        "saikou": 9.5,
        "heikin": 7.84,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 3.171
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 59.351,
        "saikou": 9.5,
        "heikin": 7.59,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 3.022
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 7.78,
        "boshuAvg30d": 124.2,
        "heikinAvg30d": 3.149
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 7.79,
        "boshuAvg30d": 125.2,
        "heikinAvg30d": 3.488
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 8.09,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 3.27
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 75.975,
        "saikou": 9.5,
        "heikin": 8.13,
        "boshuAvg30d": 126.3,
        "heikinAvg30d": 2.929
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 8.61,
        "boshuAvg30d": 126.3,
        "heikinAvg30d": 2.875
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 7.78,
        "boshuAvg30d": 126.3,
        "heikinAvg30d": 2.37
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 75.93,
        "saikou": 9.5,
        "heikin": 6.29,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 2.594
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 101.991,
        "saikou": 9.5,
        "heikin": 5.98,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 2.41
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 93.101,
        "saikou": 9.5,
        "heikin": 5.94,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.405
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 101.991,
        "saikou": 9.5,
        "heikin": 6.01,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.279
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 101.991,
        "saikou": 9.98,
        "heikin": 6.02,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.16
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 101.991,
        "saikou": 9.5,
        "heikin": 5.21,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.181
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 101.991,
        "saikou": 6.38,
        "heikin": 3.4,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 2.1
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 101.991,
        "saikou": 6.38,
        "heikin": 3.48,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 2.226
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 101.991,
        "saikou": 9.5,
        "heikin": 6.01,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 2.318
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 101.991,
        "saikou": 9.5,
        "heikin": 5.99,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 2.323
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 101.991,
        "saikou": 9.5,
        "heikin": 6,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 2.281
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 70.375,
        "saikou": 9.5,
        "heikin": 7.67,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 2.501
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 88.188,
        "saikou": 9.5,
        "heikin": 6.65,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 2.824
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 88.188,
        "saikou": 9.5,
        "heikin": 6.92,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 3.187
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 72.467,
        "saikou": 9.5,
        "heikin": 7.5,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 3.625
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 8.02,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 4.156
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 75.975,
        "saikou": 9.91,
        "heikin": 8.57,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 4.642
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 75.975,
        "saikou": 9.5,
        "heikin": 8.19,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 4.381
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 55.491,
        "saikou": 9.5,
        "heikin": 8.48,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 4.329
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 55.491,
        "saikou": 9.5,
        "heikin": 8.03,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 3.918
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 55.491,
        "saikou": 9.5,
        "heikin": 7.96,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 3.902
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 57.481,
        "saikou": 9.5,
        "heikin": 8.02,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 3.71
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 57.481,
        "saikou": 9.5,
        "heikin": 7.95,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 3.919
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 91.176,
        "saikou": 9.5,
        "heikin": 6.7,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 3.984
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 141.421,
        "saikou": 9.52,
        "heikin": 8.53,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 3.586
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 121.189,
        "saikou": 9.5,
        "heikin": 6.94,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 3.418
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 91.176,
        "saikou": 9.5,
        "heikin": 5.93,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 3.171
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 192.92,
        "saikou": 7.91,
        "heikin": 3.43,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 2.917
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 207.325,
        "saikou": 9.98,
        "heikin": 3.82,
        "boshuAvg30d": 124.3,
        "heikinAvg30d": 2.984
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 216.215,
        "saikou": 9.98,
        "heikin": 3.54,
        "boshuAvg30d": 124.3,
        "heikinAvg30d": 2.412
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 7.99,
        "heikin": 1.41,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.783
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 189.8,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.753
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 189.8,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.72
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 189.8,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.677
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.696
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.728
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 7.99,
        "heikin": 1.41,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.774
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 173.8,
        "saikou": 7.55,
        "heikin": 0.96,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.767
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 186.343,
        "saikou": 7.99,
        "heikin": 1.36,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.781
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 186.343,
        "saikou": 7.99,
        "heikin": 1.4,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.815
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 186.343,
        "saikou": 7.99,
        "heikin": 1.36,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.838
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 7.99,
        "heikin": 1.4,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.819
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 155.343,
        "saikou": 7.99,
        "heikin": 1.33,
        "boshuAvg30d": 42.3,
        "heikinAvg30d": 0.911
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 181.343,
        "saikou": 7.99,
        "heikin": 1.4,
        "boshuAvg30d": 43.2,
        "heikinAvg30d": 0.858
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 181.343,
        "saikou": 7.99,
        "heikin": 1.4,
        "boshuAvg30d": 44.2,
        "heikinAvg30d": 0.857
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 155.8,
        "saikou": 7.55,
        "heikin": 0.88,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.884
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 155.8,
        "saikou": 6.5,
        "heikin": 0.86,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.887
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 169.8,
        "saikou": 8.5,
        "heikin": 0.97,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.792
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 156.8,
        "saikou": 7.55,
        "heikin": 0.86,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 0.92
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 7.55,
        "heikin": 0.82,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.889
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 6.6,
        "heikin": 0.79,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.901
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 8.5,
        "heikin": 0.84,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.916
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 8.5,
        "heikin": 0.84,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.959
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 7.55,
        "heikin": 0.82,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.951
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.977
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.979
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 7.55,
        "heikin": 0.82,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.946
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 142.8,
        "saikou": 7.55,
        "heikin": 0.82,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.926
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 142.8,
        "saikou": 8.5,
        "heikin": 0.84,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 0.923
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 155.8,
        "saikou": 8.95,
        "heikin": 0.92,
        "boshuAvg30d": 46.3,
        "heikinAvg30d": 0.917
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 142.8,
        "saikou": 6.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.999
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 155.8,
        "saikou": 8,
        "heikin": 0.89,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.941
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 144.8,
        "saikou": 7.95,
        "heikin": 0.84,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 1.087
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 143.8,
        "saikou": 7.95,
        "heikin": 0.83,
        "boshuAvg30d": 43.2,
        "heikinAvg30d": 1.08
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 143.8,
        "saikou": 6.6,
        "heikin": 0.8,
        "boshuAvg30d": 42.3,
        "heikinAvg30d": 1.068
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 142.8,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 42.2,
        "heikinAvg30d": 1.077
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 144.8,
        "saikou": 7.95,
        "heikin": 0.84,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.071
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 143.8,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.034
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 143.8,
        "saikou": 6.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.086
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 156.343,
        "saikou": 9.99,
        "heikin": 1.44,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.115
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 155.343,
        "saikou": 9.99,
        "heikin": 1.5,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.108
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 155.343,
        "saikou": 9.99,
        "heikin": 1.51,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.094
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 9.99,
        "heikin": 1.53,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.985
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 9.99,
        "heikin": 1.53,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.909
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 9.99,
        "heikin": 1.54,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.874
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 6.1,
        "heikin": 1.01,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.837
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 9.99,
        "heikin": 1.54,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.89
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 9.99,
        "heikin": 1.5,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.829
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 86.47,
        "saikou": 3.15,
        "heikin": 1.43,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.768
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 118.394,
        "saikou": 4.97,
        "heikin": 2.63,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.513
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 82.756,
        "saikou": 5.07,
        "heikin": 1.89,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.296
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 74.851,
        "saikou": 2.44,
        "heikin": 1.55,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.164
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 89.867,
        "saikou": 2.16,
        "heikin": 1.27,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 3.871
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 91.829,
        "saikou": 1.76,
        "heikin": 1.14,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.207
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 223.91,
        "saikou": 5.51,
        "heikin": 1.1,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.417
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 250.683,
        "saikou": 1.33,
        "heikin": 0.58,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.681
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 257.799,
        "saikou": 1.33,
        "heikin": 0.57,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.712
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 270.814,
        "saikou": 1.33,
        "heikin": 0.57,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.013
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 273.307,
        "saikou": 1.33,
        "heikin": 0.56,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.226
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 271.356,
        "saikou": 1.33,
        "heikin": 0.58,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.345
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 270.504,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.283
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 271.517,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 5.43
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 270.592,
        "saikou": 10,
        "heikin": 6.88,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 4.495
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 281.165,
        "saikou": 10,
        "heikin": 6.77,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 3.936
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 177.165,
        "saikou": 10,
        "heikin": 5.68,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 3.943
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 274.174,
        "saikou": 6.96,
        "heikin": 1.02,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 3.709
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 235.061,
        "saikou": 4.71,
        "heikin": 1.5,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 3.565
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 141.06,
        "saikou": 4.16,
        "heikin": 3.28,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 3.326
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 102.611,
        "saikou": 5.49,
        "heikin": 4.43,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.369
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 88.768,
        "saikou": 7,
        "heikin": 3.26,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 3.23
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 89.63,
        "saikou": 9,
        "heikin": 2.31,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 2.786
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 91.472,
        "saikou": 9.2,
        "heikin": 2.02,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 2.713
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 140.902,
        "saikou": 9.4,
        "heikin": 1.75,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 2.608
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 158.826,
        "saikou": 9.5,
        "heikin": 2.53,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 2.654
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 96.672,
        "saikou": 9.6,
        "heikin": 2.44,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 3.243
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 107.168,
        "saikou": 6.62,
        "heikin": 3.87,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 3.841
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 134.446,
        "saikou": 4.31,
        "heikin": 3.43,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 4.3
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 136.436,
        "saikou": 4.94,
        "heikin": 3.92,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 4.796
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 259.506,
        "saikou": 5,
        "heikin": 1.25,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 4.972
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 254.52,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 5.316
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 250.556,
        "saikou": 10,
        "heikin": 7.99,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 6.037
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 213.83,
        "saikou": 10,
        "heikin": 8.15,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 6.4
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 216.706,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 6.483
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 228.204,
        "saikou": 10,
        "heikin": 7.59,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 6.646
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 246.972,
        "saikou": 10,
        "heikin": 7.3,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.67
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 240.376,
        "saikou": 10,
        "heikin": 5.3,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.378
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 240.376,
        "saikou": 10,
        "heikin": 5.45,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.339
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 232.241,
        "saikou": 10,
        "heikin": 5.57,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.286
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 241.736,
        "saikou": 10,
        "heikin": 5.28,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.887
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 245.696,
        "saikou": 10,
        "heikin": 7.32,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.973
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 254.049,
        "saikou": 10,
        "heikin": 7.23,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 5.817
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 233.049,
        "saikou": 10,
        "heikin": 8.11,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.35
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 178.049,
        "saikou": 4,
        "heikin": 1.64,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.262
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 100.737,
        "saikou": 5.19,
        "heikin": 3.73,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.198
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 93.143,
        "saikou": 2.21,
        "heikin": 1.35,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.045
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 109.307,
        "saikou": 4.84,
        "heikin": 2.61,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 4.455
      }
    ]
  }
};
