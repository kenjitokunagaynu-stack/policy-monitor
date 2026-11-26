// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/28〜2026/11/26）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-27",
  "fetchedAt": "2026-11-26",
  "avgWindowLabel": "過去30日平均（2026/10/28〜2026/11/26）",
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
      "boshu": 1079,
      "ouatsu": 1805.909,
      "saikou": 9.8,
      "heikin": 2.01,
      "boshuAvg30d": 1153.2,
      "heikinAvg30d": 2.385
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1079,
      "ouatsu": 1929.915,
      "saikou": 9.91,
      "heikin": 2.15,
      "boshuAvg30d": 1153.2,
      "heikinAvg30d": 2.321
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1079,
      "ouatsu": 1874.299,
      "saikou": 9.8,
      "heikin": 1.83,
      "boshuAvg30d": 1153.2,
      "heikinAvg30d": 2.274
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1078,
      "ouatsu": 1997.398,
      "saikou": 9.91,
      "heikin": 1.91,
      "boshuAvg30d": 1152.3,
      "heikinAvg30d": 2.182
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1072,
      "ouatsu": 1817.329,
      "saikou": 9.8,
      "heikin": 1.71,
      "boshuAvg30d": 1146.7,
      "heikinAvg30d": 2.228
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1072,
      "ouatsu": 1767.946,
      "saikou": 9.8,
      "heikin": 1.96,
      "boshuAvg30d": 1146.6,
      "heikinAvg30d": 2.39
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1069,
      "ouatsu": 1828.924,
      "saikou": 9.91,
      "heikin": 2.37,
      "boshuAvg30d": 1155.0,
      "heikinAvg30d": 2.481
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1073,
      "ouatsu": 1650.047,
      "saikou": 9.8,
      "heikin": 2,
      "boshuAvg30d": 1158.8,
      "heikinAvg30d": 2.667
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1073,
      "ouatsu": 1717.716,
      "saikou": 9.91,
      "heikin": 2.18,
      "boshuAvg30d": 1159.0,
      "heikinAvg30d": 2.709
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1075,
      "ouatsu": 1687.298,
      "saikou": 9.8,
      "heikin": 1.98,
      "boshuAvg30d": 1160.9,
      "heikinAvg30d": 2.688
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1075,
      "ouatsu": 1587.434,
      "saikou": 9.91,
      "heikin": 2.4,
      "boshuAvg30d": 1160.9,
      "heikinAvg30d": 2.783
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1075,
      "ouatsu": 1511.271,
      "saikou": 9.91,
      "heikin": 2.51,
      "boshuAvg30d": 1160.9,
      "heikinAvg30d": 2.835
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1134,
      "ouatsu": 1602.959,
      "saikou": 9.99,
      "heikin": 3.18,
      "boshuAvg30d": 1220.0,
      "heikinAvg30d": 3.076
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1159,
      "ouatsu": 1584.408,
      "saikou": 10,
      "heikin": 3.83,
      "boshuAvg30d": 1244.8,
      "heikinAvg30d": 3.208
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1178,
      "ouatsu": 1472.742,
      "saikou": 10,
      "heikin": 3.73,
      "boshuAvg30d": 1264.0,
      "heikinAvg30d": 3.19
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1193,
      "ouatsu": 1708.803,
      "saikou": 10,
      "heikin": 3.86,
      "boshuAvg30d": 1279.6,
      "heikinAvg30d": 2.988
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1193,
      "ouatsu": 1665.855,
      "saikou": 9.9,
      "heikin": 3.68,
      "boshuAvg30d": 1280.0,
      "heikinAvg30d": 2.811
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1193,
      "ouatsu": 1601.141,
      "saikou": 9.91,
      "heikin": 3.01,
      "boshuAvg30d": 1283.8,
      "heikinAvg30d": 2.863
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1122,
      "ouatsu": 1773.451,
      "saikou": 10,
      "heikin": 2.24,
      "boshuAvg30d": 1239.0,
      "heikinAvg30d": 2.759
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1127,
      "ouatsu": 1800.761,
      "saikou": 9.91,
      "heikin": 2.44,
      "boshuAvg30d": 1243.8,
      "heikinAvg30d": 2.731
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1131,
      "ouatsu": 1690.064,
      "saikou": 9.8,
      "heikin": 2.42,
      "boshuAvg30d": 1248.2,
      "heikinAvg30d": 2.736
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1135,
      "ouatsu": 1814.006,
      "saikou": 9.8,
      "heikin": 2.4,
      "boshuAvg30d": 1251.7,
      "heikinAvg30d": 2.749
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1129,
      "ouatsu": 1886.515,
      "saikou": 9.91,
      "heikin": 2.31,
      "boshuAvg30d": 1245.7,
      "heikinAvg30d": 2.695
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1129,
      "ouatsu": 1899.408,
      "saikou": 9.91,
      "heikin": 2.1,
      "boshuAvg30d": 1245.6,
      "heikinAvg30d": 2.834
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1110,
      "ouatsu": 1901.433,
      "saikou": 8.42,
      "heikin": 2.06,
      "boshuAvg30d": 1226.4,
      "heikinAvg30d": 2.646
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1110,
      "ouatsu": 1826.348,
      "saikou": 8.34,
      "heikin": 2.3,
      "boshuAvg30d": 1226.4,
      "heikinAvg30d": 2.703
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1110,
      "ouatsu": 1921.296,
      "saikou": 9.91,
      "heikin": 1.95,
      "boshuAvg30d": 1226.4,
      "heikinAvg30d": 2.799
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1106,
      "ouatsu": 1869.228,
      "saikou": 7.4,
      "heikin": 1.93,
      "boshuAvg30d": 1222.4,
      "heikinAvg30d": 2.859
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1105,
      "ouatsu": 1854.899,
      "saikou": 7,
      "heikin": 2.04,
      "boshuAvg30d": 1221.1,
      "heikinAvg30d": 2.942
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1099,
      "ouatsu": 1828.11,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1215.1,
      "heikinAvg30d": 3.053
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1170,
      "ouatsu": 1551.806,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1268.6,
      "heikinAvg30d": 3.181
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1170,
      "ouatsu": 1753.355,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1268.3,
      "heikinAvg30d": 3.335
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1170,
      "ouatsu": 1720.865,
      "saikou": 9.99,
      "heikin": 3.62,
      "boshuAvg30d": 1268.1,
      "heikinAvg30d": 3.623
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1168,
      "ouatsu": 1585.963,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1266.2,
      "heikinAvg30d": 3.71
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1166,
      "ouatsu": 1557.796,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1259.9,
      "heikinAvg30d": 3.738
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1161,
      "ouatsu": 1591.1,
      "saikou": 10,
      "heikin": 3.79,
      "boshuAvg30d": 1251.1,
      "heikinAvg30d": 3.675
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1157,
      "ouatsu": 1555.216,
      "saikou": 10,
      "heikin": 3.71,
      "boshuAvg30d": 1246.9,
      "heikinAvg30d": 3.498
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1157,
      "ouatsu": 1591.835,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1246.9,
      "heikinAvg30d": 3.372
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1157,
      "ouatsu": 1792.949,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1246.9,
      "heikinAvg30d": 3.29
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1155,
      "ouatsu": 1633.94,
      "saikou": 9.99,
      "heikin": 3.24,
      "boshuAvg30d": 1245.4,
      "heikinAvg30d": 3.232
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1148,
      "ouatsu": 1766.294,
      "saikou": 10,
      "heikin": 3.41,
      "boshuAvg30d": 1238.3,
      "heikinAvg30d": 3.148
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1148,
      "ouatsu": 1731.461,
      "saikou": 10,
      "heikin": 3.5,
      "boshuAvg30d": 1238.3,
      "heikinAvg30d": 3.166
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1059,
      "ouatsu": 1802.136,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1152.0,
      "heikinAvg30d": 3.077
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1062,
      "ouatsu": 1825.457,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1155.0,
      "heikinAvg30d": 3.034
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1061,
      "ouatsu": 1684.815,
      "saikou": 9.8,
      "heikin": 2.93,
      "boshuAvg30d": 1154.3,
      "heikinAvg30d": 2.999
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1054,
      "ouatsu": 1801.344,
      "saikou": 9.8,
      "heikin": 2.39,
      "boshuAvg30d": 1147.5,
      "heikinAvg30d": 2.977
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1046,
      "ouatsu": 1832.685,
      "saikou": 9.8,
      "heikin": 2.72,
      "boshuAvg30d": 1139.7,
      "heikinAvg30d": 2.911
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1038,
      "ouatsu": 1981.536,
      "saikou": 9.8,
      "heikin": 2.3,
      "boshuAvg30d": 1131.2,
      "heikinAvg30d": 2.683
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
        "saikou": 9.8,
        "heikin": 7.23,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 2.95
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 88.408,
        "saikou": 9.91,
        "heikin": 9.02,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 3.04
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 7.51,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 2.744
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 88.408,
        "saikou": 9.91,
        "heikin": 9.03,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 3.041
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 48.908,
        "saikou": 9.8,
        "heikin": 7.44,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.433
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 48.908,
        "saikou": 9.8,
        "heikin": 7.44,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.084
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 92.608,
        "saikou": 9.91,
        "heikin": 8.95,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.471
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 50.108,
        "saikou": 9.8,
        "heikin": 7.53,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.372
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 92.608,
        "saikou": 9.91,
        "heikin": 8.98,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.489
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 50.108,
        "saikou": 9.8,
        "heikin": 7.39,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.301
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 90.618,
        "saikou": 9.91,
        "heikin": 8.86,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.229
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 92.608,
        "saikou": 9.91,
        "heikin": 8.92,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.955
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 47.108,
        "saikou": 9.8,
        "heikin": 7.24,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.438
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 175.02,
        "saikou": 8.87,
        "heikin": 5.94,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.443
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 32.108,
        "saikou": 9.8,
        "heikin": 7.55,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.64
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 80.408,
        "saikou": 9.91,
        "heikin": 9.22,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.394
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 7.13,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.576
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 63.109,
        "saikou": 9.91,
        "heikin": 8.19,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.148
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 72.918,
        "saikou": 7.1,
        "heikin": 3.3,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 4.01
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 112.973,
        "saikou": 9.91,
        "heikin": 5.71,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.429
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 114.908,
        "saikou": 9.8,
        "heikin": 3,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.443
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 114.908,
        "saikou": 9.8,
        "heikin": 3.04,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.716
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 155.963,
        "saikou": 9.91,
        "heikin": 4.82,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.731
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 147.188,
        "saikou": 9.91,
        "heikin": 4.41,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.852
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 110.968,
        "saikou": 8.14,
        "heikin": 2.65,
        "boshuAvg30d": 52.6,
        "heikinAvg30d": 3.269
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 110.968,
        "saikou": 8.34,
        "heikin": 2.69,
        "boshuAvg30d": 52.6,
        "heikinAvg30d": 3.286
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 152.023,
        "saikou": 9.91,
        "heikin": 4.24,
        "boshuAvg30d": 52.6,
        "heikinAvg30d": 3.436
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 110.968,
        "saikou": 7.4,
        "heikin": 2.48,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.335
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 56.918,
        "saikou": 7,
        "heikin": 3.86,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 4.223
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 26.95,
        "saikou": 7,
        "heikin": 6.72,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.321
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 26.95,
        "saikou": 7.1,
        "heikin": 7.09,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.757
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.59,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 5.706
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 64.388,
        "saikou": 9.91,
        "heikin": 8.87,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 6.206
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 8.908,
        "saikou": 9.8,
        "heikin": 8.9,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 6.277
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 39.388,
        "saikou": 9.91,
        "heikin": 9.44,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 5.83
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 64.388,
        "saikou": 9.91,
        "heikin": 8.6,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 5.712
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 7.17,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 5.403
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 6.67,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 5.265
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 146.908,
        "saikou": 4.32,
        "heikin": 4.27,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 5.15
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 48.908,
        "saikou": 9.8,
        "heikin": 6.53,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 5.035
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 43.918,
        "saikou": 7.3,
        "heikin": 6.16,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 5.26
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 43.918,
        "saikou": 7.3,
        "heikin": 6.16,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.638
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 46.918,
        "saikou": 9.8,
        "heikin": 6.39,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.815
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 46.918,
        "saikou": 9.8,
        "heikin": 7.53,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.995
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 29.968,
        "saikou": 9.8,
        "heikin": 8.5,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.902
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 29.968,
        "saikou": 9.8,
        "heikin": 8.62,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 4.902
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 28,
        "saikou": 9.8,
        "heikin": 9,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.507
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 29.968,
        "saikou": 9.8,
        "heikin": 8.79,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 4.169
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 122.19,
        "saikou": 4.5,
        "heikin": 2.87,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 4.733
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 110.19,
        "saikou": 5.94,
        "heikin": 4.17,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 5.007
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 110.19,
        "saikou": 5.86,
        "heikin": 4.03,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 5.244
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 112.15,
        "saikou": 3.39,
        "heikin": 2.6,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 5.364
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 120.366,
        "saikou": 3.91,
        "heikin": 2.5,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 5.213
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 119.016,
        "saikou": 3.8,
        "heikin": 2.43,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 4.781
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 122.65,
        "saikou": 4.12,
        "heikin": 2.6,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 4.7
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 124.15,
        "saikou": 3.73,
        "heikin": 2.53,
        "boshuAvg30d": 123.1,
        "heikinAvg30d": 4.242
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 127.798,
        "saikou": 3.73,
        "heikin": 2.42,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 4.216
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 124.318,
        "saikou": 3.73,
        "heikin": 2.63,
        "boshuAvg30d": 123.1,
        "heikinAvg30d": 4.278
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 126.348,
        "saikou": 4.57,
        "heikin": 2.77,
        "boshuAvg30d": 123.1,
        "heikinAvg30d": 4.286
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 122.798,
        "saikou": 5.66,
        "heikin": 3.33,
        "boshuAvg30d": 123.1,
        "heikinAvg30d": 4.16
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 126.248,
        "saikou": 9.94,
        "heikin": 6,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 4.247
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 96.983,
        "saikou": 9.11,
        "heikin": 5.52,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 4.253
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 138.818,
        "saikou": 7.89,
        "heikin": 4.85,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 4.846
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 135.518,
        "saikou": 4.5,
        "heikin": 3.48,
        "boshuAvg30d": 139.2,
        "heikinAvg30d": 4.957
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 116.148,
        "saikou": 4.84,
        "heikin": 3.7,
        "boshuAvg30d": 139.2,
        "heikinAvg30d": 4.755
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 88.884,
        "saikou": 4.05,
        "heikin": 3.35,
        "boshuAvg30d": 139.2,
        "heikinAvg30d": 5.053
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 116.148,
        "saikou": 4.03,
        "heikin": 3.54,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 4.67
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 92.184,
        "saikou": 2.88,
        "heikin": 2.63,
        "boshuAvg30d": 79.5,
        "heikinAvg30d": 4.627
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 84.399,
        "saikou": 4.01,
        "heikin": 4.01,
        "boshuAvg30d": 81.5,
        "heikinAvg30d": 5.057
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 58.573,
        "saikou": 4.23,
        "heikin": 3.31,
        "boshuAvg30d": 82.4,
        "heikinAvg30d": 5.258
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 64.428,
        "saikou": 4.39,
        "heikin": 3.37,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 5.161
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 58.948,
        "saikou": 4.39,
        "heikin": 3.8,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 5.285
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 58.798,
        "saikou": 4.43,
        "heikin": 3.73,
        "boshuAvg30d": 77.7,
        "heikinAvg30d": 5.5
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 57.448,
        "saikou": 4.43,
        "heikin": 3.79,
        "boshuAvg30d": 77.7,
        "heikinAvg30d": 5.405
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 64.624,
        "saikou": 3.5,
        "heikin": 3.5,
        "boshuAvg30d": 77.7,
        "heikinAvg30d": 4.592
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 66.424,
        "saikou": 2.3,
        "heikin": 1.93,
        "boshuAvg30d": 76.7,
        "heikinAvg30d": 4.926
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 66.388,
        "saikou": 4.16,
        "heikin": 4.16,
        "boshuAvg30d": 76.7,
        "heikinAvg30d": 4.568
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 118.144,
        "saikou": 6.59,
        "heikin": 4.74,
        "boshuAvg30d": 75.5,
        "heikinAvg30d": 4.04
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 94.144,
        "saikou": 3.99,
        "heikin": 3.07,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 4.08
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 113.054,
        "saikou": 3.38,
        "heikin": 2.65,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 4.388
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 100.448,
        "saikou": 6.94,
        "heikin": 5.58,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 4.346
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 57.227,
        "saikou": 6.88,
        "heikin": 4.87,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 4.123
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 60.527,
        "saikou": 6.88,
        "heikin": 4.92,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 4.509
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 59.342,
        "saikou": 6.28,
        "heikin": 4.44,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 3.748
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 64.392,
        "saikou": 6.79,
        "heikin": 4.05,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 3.325
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 62.892,
        "saikou": 6.79,
        "heikin": 4.22,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 3.022
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 60.692,
        "saikou": 6.79,
        "heikin": 4.39,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 2.995
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 60.692,
        "saikou": 6.79,
        "heikin": 4.02,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 3.1
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 98.863,
        "saikou": 6.79,
        "heikin": 4.36,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.241
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 110.863,
        "saikou": 6.26,
        "heikin": 4.16,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.331
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 104.148,
        "saikou": 2.89,
        "heikin": 2.07,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 2.985
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 114.798,
        "saikou": 4.85,
        "heikin": 3.92,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 3.444
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 116.148,
        "saikou": 4.78,
        "heikin": 3.21,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 3.502
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 116.148,
        "saikou": 3.34,
        "heikin": 2.28,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 4.09
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 112.998,
        "saikou": 3.34,
        "heikin": 2.57,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 4.011
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 99.198,
        "saikou": 3.91,
        "heikin": 3.24,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 4.736
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 157,
        "ouatsu": 515.189,
        "saikou": 3.05,
        "heikin": 1.48,
        "boshuAvg30d": 225.4,
        "heikinAvg30d": 1.6
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 157,
        "ouatsu": 509.147,
        "saikou": 3,
        "heikin": 1.45,
        "boshuAvg30d": 225.4,
        "heikinAvg30d": 1.576
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 157,
        "ouatsu": 450.842,
        "saikou": 5.98,
        "heikin": 1.18,
        "boshuAvg30d": 225.4,
        "heikinAvg30d": 1.738
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 157,
        "ouatsu": 527.603,
        "saikou": 2.07,
        "heikin": 1.06,
        "boshuAvg30d": 225.4,
        "heikinAvg30d": 1.333
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 155,
        "ouatsu": 536.753,
        "saikou": 1.97,
        "heikin": 0.98,
        "boshuAvg30d": 223.5,
        "heikinAvg30d": 1.353
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 155,
        "ouatsu": 538.698,
        "saikou": 2.04,
        "heikin": 1,
        "boshuAvg30d": 223.4,
        "heikinAvg30d": 1.599
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 153,
        "ouatsu": 547.465,
        "saikou": 2.12,
        "heikin": 1.07,
        "boshuAvg30d": 221.4,
        "heikinAvg30d": 1.528
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 155,
        "ouatsu": 518.049,
        "saikou": 2.25,
        "heikin": 1.14,
        "boshuAvg30d": 223.4,
        "heikinAvg30d": 1.651
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 155,
        "ouatsu": 499.033,
        "saikou": 2.29,
        "heikin": 1.07,
        "boshuAvg30d": 223.4,
        "heikinAvg30d": 1.846
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 156,
        "ouatsu": 517.471,
        "saikou": 2.12,
        "heikin": 1.06,
        "boshuAvg30d": 224.4,
        "heikinAvg30d": 1.698
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 156,
        "ouatsu": 392.587,
        "saikou": 2.51,
        "heikin": 1.3,
        "boshuAvg30d": 224.4,
        "heikinAvg30d": 1.714
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 156,
        "ouatsu": 325.264,
        "saikou": 3.49,
        "heikin": 1.41,
        "boshuAvg30d": 224.4,
        "heikinAvg30d": 1.843
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 176,
        "ouatsu": 572.978,
        "saikou": 7.81,
        "heikin": 1.28,
        "boshuAvg30d": 244.3,
        "heikinAvg30d": 2.371
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 184,
        "ouatsu": 425.033,
        "saikou": 9.87,
        "heikin": 2.57,
        "boshuAvg30d": 252.3,
        "heikinAvg30d": 2.532
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 188,
        "ouatsu": 421.053,
        "saikou": 3.23,
        "heikin": 2.49,
        "boshuAvg30d": 256.4,
        "heikinAvg30d": 2.656
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 193,
        "ouatsu": 572.265,
        "saikou": 7.46,
        "heikin": 2.62,
        "boshuAvg30d": 261.7,
        "heikinAvg30d": 2.419
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 193,
        "ouatsu": 594.181,
        "saikou": 5.46,
        "heikin": 2.97,
        "boshuAvg30d": 262.1,
        "heikinAvg30d": 1.91
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 193,
        "ouatsu": 515.589,
        "saikou": 6.8,
        "heikin": 3.23,
        "boshuAvg30d": 265.9,
        "heikinAvg30d": 2.468
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 183,
        "ouatsu": 445.257,
        "saikou": 2.33,
        "heikin": 1.69,
        "boshuAvg30d": 256.2,
        "heikinAvg30d": 1.928
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 183,
        "ouatsu": 517.536,
        "saikou": 2.72,
        "heikin": 1.8,
        "boshuAvg30d": 256.2,
        "heikinAvg30d": 1.907
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 183,
        "ouatsu": 550.69,
        "saikou": 2.25,
        "heikin": 0.97,
        "boshuAvg30d": 256.5,
        "heikinAvg30d": 1.789
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 183,
        "ouatsu": 572.842,
        "saikou": 2.28,
        "heikin": 1.48,
        "boshuAvg30d": 256.4,
        "heikinAvg30d": 1.777
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 563.154,
        "saikou": 1.67,
        "heikin": 0.91,
        "boshuAvg30d": 253.1,
        "heikinAvg30d": 1.863
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 551.754,
        "saikou": 2,
        "heikin": 0.76,
        "boshuAvg30d": 253.1,
        "heikinAvg30d": 2.088
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 178,
        "ouatsu": 531.971,
        "saikou": 1.52,
        "heikin": 0.59,
        "boshuAvg30d": 251.0,
        "heikinAvg30d": 1.549
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 178,
        "ouatsu": 558.509,
        "saikou": 1.59,
        "heikin": 0.66,
        "boshuAvg30d": 251.0,
        "heikinAvg30d": 1.55
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 178,
        "ouatsu": 600.806,
        "saikou": 1.81,
        "heikin": 0.79,
        "boshuAvg30d": 251.0,
        "heikinAvg30d": 1.937
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 536.257,
        "saikou": 2.51,
        "heikin": 1.42,
        "boshuAvg30d": 250.7,
        "heikinAvg30d": 1.682
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 177,
        "ouatsu": 544.154,
        "saikou": 2.32,
        "heikin": 1.21,
        "boshuAvg30d": 249.7,
        "heikinAvg30d": 1.88
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 177,
        "ouatsu": 532.44,
        "saikou": 4.13,
        "heikin": 1.49,
        "boshuAvg30d": 249.5,
        "heikinAvg30d": 2.024
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 175,
        "ouatsu": 541.675,
        "saikou": 2.84,
        "heikin": 1.35,
        "boshuAvg30d": 247.9,
        "heikinAvg30d": 2.087
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 175,
        "ouatsu": 684.69,
        "saikou": 1.83,
        "heikin": 1.19,
        "boshuAvg30d": 247.6,
        "heikinAvg30d": 1.996
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 175,
        "ouatsu": 693.335,
        "saikou": 1.83,
        "heikin": 1.01,
        "boshuAvg30d": 247.3,
        "heikinAvg30d": 2.1
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 175,
        "ouatsu": 692.837,
        "saikou": 1.98,
        "heikin": 1.19,
        "boshuAvg30d": 247.3,
        "heikinAvg30d": 2.11
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 175,
        "ouatsu": 660.589,
        "saikou": 2.2,
        "heikin": 1.09,
        "boshuAvg30d": 247.3,
        "heikinAvg30d": 2.036
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 175,
        "ouatsu": 651.264,
        "saikou": 1.47,
        "heikin": 1,
        "boshuAvg30d": 243.4,
        "heikinAvg30d": 2.208
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 177,
        "ouatsu": 642.175,
        "saikou": 2.53,
        "heikin": 1.14,
        "boshuAvg30d": 245.5,
        "heikinAvg30d": 2.004
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 177,
        "ouatsu": 675.49,
        "saikou": 2.07,
        "heikin": 1.11,
        "boshuAvg30d": 245.5,
        "heikinAvg30d": 1.899
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 177,
        "ouatsu": 677.466,
        "saikou": 2.54,
        "heikin": 1.08,
        "boshuAvg30d": 245.5,
        "heikinAvg30d": 1.91
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 177,
        "ouatsu": 679.409,
        "saikou": 2.54,
        "heikin": 1.08,
        "boshuAvg30d": 245.9,
        "heikinAvg30d": 1.795
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 176,
        "ouatsu": 708.257,
        "saikou": 2.53,
        "heikin": 1.1,
        "boshuAvg30d": 244.7,
        "heikinAvg30d": 1.906
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 176,
        "ouatsu": 676.686,
        "saikou": 2.06,
        "heikin": 0.91,
        "boshuAvg30d": 244.7,
        "heikinAvg30d": 2.027
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 175,
        "ouatsu": 651.93,
        "saikou": 5.12,
        "heikin": 0.78,
        "boshuAvg30d": 243.9,
        "heikinAvg30d": 1.855
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 175,
        "ouatsu": 676.391,
        "saikou": 2.2,
        "heikin": 1.11,
        "boshuAvg30d": 243.9,
        "heikinAvg30d": 1.854
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 175,
        "ouatsu": 504.298,
        "saikou": 2.74,
        "heikin": 0.84,
        "boshuAvg30d": 243.9,
        "heikinAvg30d": 1.966
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 173,
        "ouatsu": 588.562,
        "saikou": 2.72,
        "heikin": 1.01,
        "boshuAvg30d": 241.9,
        "heikinAvg30d": 2.074
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 171,
        "ouatsu": 556.402,
        "saikou": 5.62,
        "heikin": 1.35,
        "boshuAvg30d": 240.2,
        "heikinAvg30d": 2.287
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 586.889,
        "saikou": 0.78,
        "heikin": 0.43,
        "boshuAvg30d": 238.5,
        "heikinAvg30d": 2.119
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 122,
        "ouatsu": 509.338,
        "saikou": 3.34,
        "heikin": 2.04,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.058
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 122,
        "ouatsu": 509.338,
        "saikou": 3.03,
        "heikin": 1.71,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 1.991
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 122,
        "ouatsu": 511.328,
        "saikou": 3.21,
        "heikin": 2.03,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.008
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 509.348,
        "saikou": 3.01,
        "heikin": 1.71,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 2.057
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 121,
        "ouatsu": 481.486,
        "saikou": 2.57,
        "heikin": 1.99,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 2.088
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 495.316,
        "saikou": 2.78,
        "heikin": 2.15,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.076
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 517.505,
        "saikou": 3.24,
        "heikin": 2.35,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 2.01
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 429.621,
        "saikou": 6.25,
        "heikin": 1.68,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 1.981
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 119,
        "ouatsu": 438.221,
        "saikou": 7.13,
        "heikin": 1.58,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 1.882
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 119,
        "ouatsu": 434.411,
        "saikou": 8.04,
        "heikin": 1.71,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 1.928
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 119,
        "ouatsu": 418.311,
        "saikou": 6.19,
        "heikin": 1.83,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 1.872
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 119,
        "ouatsu": 414.021,
        "saikou": 5,
        "heikin": 1.73,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 1.898
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 397.561,
        "saikou": 9.27,
        "heikin": 2.41,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 2.113
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 399.317,
        "saikou": 9.27,
        "heikin": 3.33,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 2.105
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 137,
        "ouatsu": 397.337,
        "saikou": 9.27,
        "heikin": 3.4,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 2.291
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 139,
        "ouatsu": 393.947,
        "saikou": 9.27,
        "heikin": 3.22,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 2.349
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 139,
        "ouatsu": 397.827,
        "saikou": 9.27,
        "heikin": 3.43,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 2.313
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 139,
        "ouatsu": 393.841,
        "saikou": 9.27,
        "heikin": 1.61,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 2.466
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 472.349,
        "saikou": 7.89,
        "heikin": 2.56,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 2.399
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 457.174,
        "saikou": 8.1,
        "heikin": 2.51,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 2.704
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 144,
        "ouatsu": 441.711,
        "saikou": 7.97,
        "heikin": 3.02,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 2.76
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 144,
        "ouatsu": 432.712,
        "saikou": 6.82,
        "heikin": 2.41,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 2.771
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 143,
        "ouatsu": 414.053,
        "saikou": 6.22,
        "heikin": 2.57,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 2.754
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 142,
        "ouatsu": 406.593,
        "saikou": 5.43,
        "heikin": 2,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 3.076
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 138,
        "ouatsu": 404.573,
        "saikou": 8.1,
        "heikin": 2.98,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 3.448
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 138,
        "ouatsu": 406.499,
        "saikou": 6.78,
        "heikin": 2.56,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 3.41
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 138,
        "ouatsu": 391.855,
        "saikou": 2.41,
        "heikin": 1.98,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 2.606
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 138,
        "ouatsu": 409.607,
        "saikou": 2.48,
        "heikin": 1.78,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 2.59
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 138,
        "ouatsu": 409.517,
        "saikou": 2.45,
        "heikin": 1.9,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 2.652
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 138,
        "ouatsu": 406.232,
        "saikou": 3.57,
        "heikin": 2.22,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 2.763
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 136,
        "ouatsu": 326.003,
        "saikou": 9.47,
        "heikin": 2.98,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 2.983
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 136,
        "ouatsu": 393.246,
        "saikou": 9.47,
        "heikin": 2.43,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 2.904
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 136,
        "ouatsu": 345.953,
        "saikou": 9.47,
        "heikin": 2.95,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 2.921
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 135,
        "ouatsu": 345.447,
        "saikou": 9.47,
        "heikin": 3.55,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 3.48
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 135,
        "ouatsu": 342.226,
        "saikou": 9.47,
        "heikin": 3.54,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 3.361
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 134,
        "ouatsu": 336.828,
        "saikou": 9.47,
        "heikin": 3.14,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 2.954
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 132,
        "ouatsu": 365.126,
        "saikou": 9.47,
        "heikin": 3.57,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 2.885
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 132,
        "ouatsu": 363.14,
        "saikou": 9.47,
        "heikin": 3.47,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 2.855
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 132,
        "ouatsu": 416.533,
        "saikou": 9.37,
        "heikin": 2.51,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 2.322
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 132,
        "ouatsu": 416.523,
        "saikou": 9.37,
        "heikin": 2.96,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 2.388
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 132,
        "ouatsu": 375.725,
        "saikou": 9.37,
        "heikin": 2.85,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 2.204
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 132,
        "ouatsu": 366.853,
        "saikou": 9.37,
        "heikin": 2.79,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 2.099
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 134,
        "ouatsu": 371.678,
        "saikou": 9.37,
        "heikin": 2.7,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 1.982
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 134,
        "ouatsu": 379.671,
        "saikou": 9.37,
        "heikin": 2.29,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 2.27
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 134,
        "ouatsu": 393.625,
        "saikou": 6.3,
        "heikin": 2.32,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 2.232
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 423.633,
        "saikou": 5.89,
        "heikin": 2.01,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 2.219
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 451.828,
        "saikou": 3.92,
        "heikin": 2.1,
        "boshuAvg30d": 162.5,
        "heikinAvg30d": 2.131
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 465.205,
        "saikou": 2.85,
        "heikin": 1.81,
        "boshuAvg30d": 159.5,
        "heikinAvg30d": 2.07
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 4.503
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 2.95,
        "heikin": 2.95,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 3.793
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 2.95,
        "heikin": 2.95,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 3.059
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 3.645
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 3.67
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 3.535
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 5.397
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 4.822
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 4.096
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 5.251
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 5.196
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 4.838
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 5.411
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.94,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 5.1
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 5.834
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.84
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.588
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.232
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.616
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.78
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 6.562
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 6.821
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 6.438
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 5.969
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 4.677
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.358
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 6.788
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.974
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 6.868
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 6.626
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.5,
        "heikinAvg30d": 6.866
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.5,
        "heikinAvg30d": 7.143
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 6.9
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 6.246
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 6.616
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 6.413
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.5,
        "heikinAvg30d": 5.718
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.5,
        "heikinAvg30d": 6.43
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.5,
        "heikinAvg30d": 5.894
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.5,
        "heikinAvg30d": 6.257
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.308
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 5.824
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 5.521
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 5.518
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 6.015
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 5.417
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 5.799
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 4.48
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 86.95,
        "saikou": 2.88,
        "heikin": 2.83,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 3.219
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 184.574,
        "saikou": 2.98,
        "heikin": 1.45,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 2.404
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 227.795,
        "saikou": 2.88,
        "heikin": 1.14,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 2.261
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 227.675,
        "saikou": 2.82,
        "heikin": 1.19,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 2.269
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 119.47,
        "saikou": 1.59,
        "heikin": 0.42,
        "boshuAvg30d": 223.3,
        "heikinAvg30d": 2.781
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 113.579,
        "saikou": 2.81,
        "heikin": 1.13,
        "boshuAvg30d": 223.3,
        "heikinAvg30d": 3.192
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 115.703,
        "saikou": 2.81,
        "heikin": 2.81,
        "boshuAvg30d": 223.3,
        "heikinAvg30d": 3.549
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 115.703,
        "saikou": 7.48,
        "heikin": 3.96,
        "boshuAvg30d": 223.3,
        "heikinAvg30d": 3.813
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 115.703,
        "saikou": 7.48,
        "heikin": 3.04,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 3.543
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 115.703,
        "saikou": 4.94,
        "heikin": 3.11,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 3.295
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 115.703,
        "saikou": 7.48,
        "heikin": 3.58,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 3.311
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 113.763,
        "saikou": 7.81,
        "heikin": 3.52,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 3.326
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 113.763,
        "saikou": 9.99,
        "heikin": 5.4,
        "boshuAvg30d": 234.4,
        "heikinAvg30d": 3.371
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 113.763,
        "saikou": 9.99,
        "heikin": 5.21,
        "boshuAvg30d": 238.4,
        "heikinAvg30d": 3.484
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 115.703,
        "saikou": 9.44,
        "heikin": 6.26,
        "boshuAvg30d": 243.4,
        "heikinAvg30d": 4.249
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 115.703,
        "saikou": 9,
        "heikin": 6.2,
        "boshuAvg30d": 245.6,
        "heikinAvg30d": 4.436
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 113.833,
        "saikou": 9.39,
        "heikin": 6.12,
        "boshuAvg30d": 245.6,
        "heikinAvg30d": 4.338
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 113.833,
        "saikou": 9.05,
        "heikin": 6.01,
        "boshuAvg30d": 245.6,
        "heikinAvg30d": 4.754
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 113.833,
        "saikou": 6.36,
        "heikin": 2.95,
        "boshuAvg30d": 255.9,
        "heikinAvg30d": 4.944
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 111.836,
        "saikou": 8.99,
        "heikin": 4.72,
        "boshuAvg30d": 255.9,
        "heikinAvg30d": 4.816
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 109.851,
        "saikou": 8.99,
        "heikin": 4.82,
        "boshuAvg30d": 255.9,
        "heikinAvg30d": 4.607
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 198.465,
        "saikou": 5.09,
        "heikin": 4.29,
        "boshuAvg30d": 254.9,
        "heikinAvg30d": 4.553
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 294.45,
        "saikou": 3.91,
        "heikin": 3.68,
        "boshuAvg30d": 253.0,
        "heikinAvg30d": 4.447
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 294.45,
        "saikou": 3.91,
        "heikin": 3.68,
        "boshuAvg30d": 253.9,
        "heikinAvg30d": 4.226
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 273.4,
        "saikou": 8.42,
        "heikin": 4.76,
        "boshuAvg30d": 252.0,
        "heikinAvg30d": 3.748
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 294.45,
        "saikou": 6.04,
        "heikin": 5.28,
        "boshuAvg30d": 252.0,
        "heikinAvg30d": 3.78
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 296.447,
        "saikou": 3.44,
        "heikin": 3.33,
        "boshuAvg30d": 252.0,
        "heikinAvg30d": 4.599
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 296.447,
        "saikou": 3.21,
        "heikin": 3.21,
        "boshuAvg30d": 252.0,
        "heikinAvg30d": 4.637
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 295.447,
        "saikou": 4.04,
        "heikin": 4.04,
        "boshuAvg30d": 252.0,
        "heikinAvg30d": 5.116
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 182.447,
        "saikou": 4.92,
        "heikin": 4.35,
        "boshuAvg30d": 252.0,
        "heikinAvg30d": 5.012
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 113.833,
        "saikou": 9.99,
        "heikin": 6.43,
        "boshuAvg30d": 251.9,
        "heikinAvg30d": 4.921
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 113.833,
        "saikou": 9.48,
        "heikin": 6.41,
        "boshuAvg30d": 251.9,
        "heikinAvg30d": 5.072
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 159.096,
        "saikou": 9.99,
        "heikin": 6.59,
        "boshuAvg30d": 251.9,
        "heikinAvg30d": 4.849
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 113.833,
        "saikou": 9.99,
        "heikin": 6.25,
        "boshuAvg30d": 251.9,
        "heikinAvg30d": 4.342
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 113.833,
        "saikou": 9.45,
        "heikin": 6.23,
        "boshuAvg30d": 247.6,
        "heikinAvg30d": 4.653
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 113.833,
        "saikou": 9.99,
        "heikin": 6.45,
        "boshuAvg30d": 246.6,
        "heikinAvg30d": 4.556
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 111.873,
        "saikou": 9.99,
        "heikin": 6.17,
        "boshuAvg30d": 244.6,
        "heikinAvg30d": 4.437
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 111.873,
        "saikou": 9.99,
        "heikin": 6.18,
        "boshuAvg30d": 244.6,
        "heikinAvg30d": 4.438
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 113.833,
        "saikou": 9.99,
        "heikin": 6.42,
        "boshuAvg30d": 244.6,
        "heikinAvg30d": 4.418
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 113.833,
        "saikou": 9.99,
        "heikin": 5.78,
        "boshuAvg30d": 243.6,
        "heikinAvg30d": 3.793
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 111.848,
        "saikou": 9.45,
        "heikin": 5.84,
        "boshuAvg30d": 242.6,
        "heikinAvg30d": 4.265
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 111.848,
        "saikou": 9.45,
        "heikin": 6.1,
        "boshuAvg30d": 243.5,
        "heikinAvg30d": 4.328
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 113.833,
        "saikou": 8.28,
        "heikin": 3.07,
        "boshuAvg30d": 243.5,
        "heikinAvg30d": 4.158
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 113.833,
        "saikou": 8.2,
        "heikin": 4.51,
        "boshuAvg30d": 243.5,
        "heikinAvg30d": 4.145
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 113.833,
        "saikou": 6.57,
        "heikin": 2.96,
        "boshuAvg30d": 243.5,
        "heikinAvg30d": 4.138
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 113.833,
        "saikou": 2.81,
        "heikin": 2.81,
        "boshuAvg30d": 241.6,
        "heikinAvg30d": 4.136
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 113.833,
        "saikou": 2.81,
        "heikin": 2.81,
        "boshuAvg30d": 240.5,
        "heikinAvg30d": 4.009
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 113.833,
        "saikou": 2.81,
        "heikin": 2.81,
        "boshuAvg30d": 238.5,
        "heikinAvg30d": 3.555
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 196.544,
        "saikou": 2.29,
        "heikin": 1.35,
        "boshuAvg30d": 120.1,
        "heikinAvg30d": 2.37
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 196.544,
        "saikou": 2.29,
        "heikin": 1.22,
        "boshuAvg30d": 120.1,
        "heikinAvg30d": 2.359
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 196.544,
        "saikou": 2.29,
        "heikin": 1.24,
        "boshuAvg30d": 120.1,
        "heikinAvg30d": 2.289
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 198.534,
        "saikou": 2.29,
        "heikin": 1.29,
        "boshuAvg30d": 120.1,
        "heikinAvg30d": 1.994
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 174.668,
        "saikou": 2.29,
        "heikin": 1.24,
        "boshuAvg30d": 120.1,
        "heikinAvg30d": 2.028
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 111.033,
        "saikou": 2.29,
        "heikin": 2.01,
        "boshuAvg30d": 120.1,
        "heikinAvg30d": 2.241
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 80.113,
        "saikou": 2.29,
        "heikin": 2.28,
        "boshuAvg30d": 120.1,
        "heikinAvg30d": 2.575
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 103.979,
        "saikou": 7.11,
        "heikin": 3.93,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 2.995
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 90.176,
        "saikou": 5.38,
        "heikin": 3.02,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 2.964
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 90.176,
        "saikou": 5.38,
        "heikin": 3.02,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 2.956
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 90.176,
        "saikou": 6.34,
        "heikin": 3.26,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 3.266
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 85.724,
        "saikou": 7.69,
        "heikin": 3.81,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 3.113
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 7.97,
        "boshuAvg30d": 122.9,
        "heikinAvg30d": 3.25
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 7.99,
        "boshuAvg30d": 123.9,
        "heikinAvg30d": 3.605
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 8.31,
        "boshuAvg30d": 124.1,
        "heikinAvg30d": 3.459
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 90.176,
        "saikou": 9.5,
        "heikin": 6.65,
        "boshuAvg30d": 125.1,
        "heikinAvg30d": 3.14
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 90.176,
        "saikou": 9.5,
        "heikin": 7.13,
        "boshuAvg30d": 125.1,
        "heikinAvg30d": 3.108
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 107.078,
        "saikou": 7.78,
        "heikin": 4.76,
        "boshuAvg30d": 125.1,
        "heikinAvg30d": 2.583
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 206.325,
        "saikou": 2.29,
        "heikin": 1.35,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.753
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 199.348,
        "saikou": 2.7,
        "heikin": 1.19,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 2.557
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 170.754,
        "saikou": 8.16,
        "heikin": 2.44,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 2.551
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 170.754,
        "saikou": 3.7,
        "heikin": 1.27,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 2.425
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 170.754,
        "saikou": 2.7,
        "heikin": 1.24,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 2.31
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 170.754,
        "saikou": 2.7,
        "heikin": 1.24,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 2.303
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 170.754,
        "saikou": 2.29,
        "heikin": 1.21,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.182
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 170.754,
        "saikou": 6.38,
        "heikin": 1.84,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.298
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 170.754,
        "saikou": 2.29,
        "heikin": 1.21,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.469
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 170.754,
        "saikou": 2.42,
        "heikin": 1.22,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.47
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 170.754,
        "saikou": 2.29,
        "heikin": 1.22,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.427
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 178.186,
        "saikou": 2.7,
        "heikin": 1.34,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.705
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 151.58,
        "saikou": 9.5,
        "heikin": 4.8,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.991
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 103.979,
        "saikou": 9.5,
        "heikin": 6.49,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 3.337
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 92.857,
        "saikou": 9.5,
        "heikin": 7.28,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 3.772
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 8.58,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 4.243
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 8.59,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 4.852
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 8.58,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 4.577
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 54.491,
        "saikou": 9.5,
        "heikin": 8.75,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 4.531
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 54.491,
        "saikou": 9.5,
        "heikin": 8.61,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 4.002
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 54.491,
        "saikou": 9.5,
        "heikin": 8.59,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 3.941
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 56.481,
        "saikou": 9.5,
        "heikin": 8.58,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 3.766
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 90.176,
        "saikou": 9.5,
        "heikin": 6.79,
        "boshuAvg30d": 126.1,
        "heikinAvg30d": 3.978
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 82.796,
        "saikou": 9.5,
        "heikin": 7.21,
        "boshuAvg30d": 126.1,
        "heikinAvg30d": 4.022
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 125.67,
        "saikou": 8.51,
        "heikin": 6.59,
        "boshuAvg30d": 124.1,
        "heikinAvg30d": 3.678
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 103.979,
        "saikou": 7.85,
        "heikin": 5.32,
        "boshuAvg30d": 124.1,
        "heikinAvg30d": 3.47
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 103.979,
        "saikou": 8.11,
        "heikin": 5.92,
        "boshuAvg30d": 124.1,
        "heikinAvg30d": 3.202
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 120.733,
        "saikou": 6.38,
        "heikin": 3.18,
        "boshuAvg30d": 124.1,
        "heikinAvg30d": 2.887
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 103.979,
        "saikou": 2.29,
        "heikin": 2.28,
        "boshuAvg30d": 123.1,
        "heikinAvg30d": 2.967
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 215.215,
        "saikou": 2.29,
        "heikin": 1.37,
        "boshuAvg30d": 123.1,
        "heikinAvg30d": 2.453
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 1.7,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.814
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 2.99,
        "heikin": 1.06,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.766
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 1.7,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.732
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 1.7,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.686
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 1.7,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.708
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 1.7,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.74
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 212.343,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.8
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 200.8,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.778
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 212.343,
        "saikou": 5.7,
        "heikin": 1.03,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.805
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 212.343,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.842
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 212.343,
        "saikou": 5.7,
        "heikin": 1.03,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.858
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 212.343,
        "saikou": 7.6,
        "heikin": 1.02,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.841
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 181.343,
        "saikou": 9.49,
        "heikin": 1.52,
        "boshuAvg30d": 42.3,
        "heikinAvg30d": 0.913
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 181.343,
        "saikou": 9.49,
        "heikin": 1.54,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.851
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 169.8,
        "saikou": 7.6,
        "heikin": 1,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 0.861
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 181.343,
        "saikou": 9.49,
        "heikin": 1.54,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.865
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 181.343,
        "saikou": 9.49,
        "heikin": 1.51,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.88
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 181.343,
        "saikou": 8.5,
        "heikin": 1,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.787
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 181.343,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.924
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 168.343,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.892
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 6.6,
        "heikin": 0.84,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.901
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.953
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.951
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.95
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.926
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.906
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.904
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 46.3,
        "heikinAvg30d": 0.911
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 181.343,
        "saikou": 8.99,
        "heikin": 1.43,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.986
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 9.99,
        "heikin": 1.56,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.94
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 156.343,
        "saikou": 9.99,
        "heikin": 1.56,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 1.059
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 144.8,
        "saikou": 7.95,
        "heikin": 0.89,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 1.052
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 155.8,
        "saikou": 6.6,
        "heikin": 0.91,
        "boshuAvg30d": 42.3,
        "heikinAvg30d": 1.042
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 155.8,
        "saikou": 4.95,
        "heikin": 0.87,
        "boshuAvg30d": 42.1,
        "heikinAvg30d": 1.044
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 161.343,
        "saikou": 9.99,
        "heikin": 1.56,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.043
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 161.343,
        "saikou": 9.99,
        "heikin": 1.49,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.004
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 166.343,
        "saikou": 9.99,
        "heikin": 1.37,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.06
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 166.343,
        "saikou": 9.99,
        "heikin": 1.49,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.11
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 7.55,
        "heikin": 0.93,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.105
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 7.95,
        "heikin": 0.94,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.092
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 6.8,
        "heikin": 1.09,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.984
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 6.6,
        "heikin": 1.09,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.937
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 6.6,
        "heikin": 1.09,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.907
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 5.65,
        "heikin": 1.04,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.853
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.923
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.861
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 110.549,
        "saikou": 4.46,
        "heikin": 2.82,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.591
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 112.473,
        "saikou": 4.35,
        "heikin": 2.72,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.366
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 114.449,
        "saikou": 4.42,
        "heikin": 2.59,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.149
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 116.437,
        "saikou": 4.21,
        "heikin": 2.61,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.009
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 116.437,
        "saikou": 4.31,
        "heikin": 2.5,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 3.707
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 122.155,
        "saikou": 4.63,
        "heikin": 2.35,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.036
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 136.639,
        "saikou": 4.94,
        "heikin": 2.23,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.228
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 103.739,
        "saikou": 3.96,
        "heikin": 1.09,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.463
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 137.936,
        "saikou": 5.4,
        "heikin": 2.52,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.474
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 138.87,
        "saikou": 5.7,
        "heikin": 2.63,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.817
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 137.45,
        "saikou": 6.49,
        "heikin": 2.9,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.994
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 140.852,
        "saikou": 6.88,
        "heikin": 3,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.102
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 103.579,
        "saikou": 3.96,
        "heikin": 1.13,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.275
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 132.57,
        "saikou": 10,
        "heikin": 3.99,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 5.483
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 137.544,
        "saikou": 10,
        "heikin": 4.1,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 4.483
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 135.545,
        "saikou": 10,
        "heikin": 3.96,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 3.944
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 137.541,
        "saikou": 9.53,
        "heikin": 3.78,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 3.914
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 133.566,
        "saikou": 6.53,
        "heikin": 2.83,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 3.525
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 161.38,
        "saikou": 10,
        "heikin": 4.09,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 3.402
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 137.469,
        "saikou": 3.99,
        "heikin": 3.34,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 3.225
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 71.053,
        "saikou": 5.95,
        "heikin": 5.19,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.322
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 119.054,
        "saikou": 6.63,
        "heikin": 5.47,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 3.15
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 77.015,
        "saikou": 5.34,
        "heikin": 2.72,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 2.762
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 123.023,
        "saikou": 5,
        "heikin": 2.48,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 2.689
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 204.271,
        "saikou": 0.85,
        "heikin": 0.41,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 2.594
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 81.022,
        "saikou": 6.1,
        "heikin": 2.64,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 2.662
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 86.546,
        "saikou": 2.67,
        "heikin": 1.74,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 3.198
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 120.53,
        "saikou": 5.98,
        "heikin": 4.05,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 3.829
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 140.48,
        "saikou": 3.99,
        "heikin": 3.28,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 4.251
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 212.47,
        "saikou": 10,
        "heikin": 7.44,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 4.688
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 112.38,
        "saikou": 10,
        "heikin": 4.41,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 4.792
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 141.394,
        "saikou": 10,
        "heikin": 5.54,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 5.355
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 104.547,
        "saikou": 5,
        "heikin": 3.4,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 6.073
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 162.532,
        "saikou": 10,
        "heikin": 7.3,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 6.431
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 125.054,
        "saikou": 10,
        "heikin": 6.92,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.506
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 149.266,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 6.646
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 118.01,
        "saikou": 10,
        "heikin": 7.03,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.655
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 124.8,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.304
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 152.785,
        "saikou": 10,
        "heikin": 7.57,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.272
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 87.853,
        "saikou": 9.7,
        "heikin": 5.73,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.224
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 166.266,
        "saikou": 10,
        "heikin": 6.97,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.807
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 167.256,
        "saikou": 10,
        "heikin": 6.95,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.979
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 168.718,
        "saikou": 10,
        "heikin": 6.67,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.812
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 170.626,
        "saikou": 10,
        "heikin": 6.67,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.382
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 203.723,
        "saikou": 8.8,
        "heikin": 6.46,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.076
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 189.226,
        "saikou": 7.59,
        "heikin": 5.31,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.082
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 260.404,
        "saikou": 7.4,
        "heikin": 5.69,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 4.868
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 265.987,
        "saikou": 6.46,
        "heikin": 5.1,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 4.339
      }
    ]
  }
};
