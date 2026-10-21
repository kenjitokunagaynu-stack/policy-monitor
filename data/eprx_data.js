// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近29日間（本データでは2026/09/21〜2026/10/20）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-21",
  "fetchedAt": "2026-10-21",
  "avgWindowLabel": "過去29日平均（2026/09/21〜2026/10/20）",
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
      "boshu": 1075,
      "ouatsu": 1419.754,
      "saikou": 9.64,
      "heikin": 3.87,
      "boshuAvg30d": 1119.4,
      "heikinAvg30d": 2.998
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1075,
      "ouatsu": 1573.857,
      "saikou": 9.91,
      "heikin": 3.09,
      "boshuAvg30d": 1119.4,
      "heikinAvg30d": 2.899
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1075,
      "ouatsu": 1553.141,
      "saikou": 9.8,
      "heikin": 2.91,
      "boshuAvg30d": 1119.4,
      "heikinAvg30d": 2.828
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1075,
      "ouatsu": 1493.784,
      "saikou": 9.91,
      "heikin": 3.93,
      "boshuAvg30d": 1119.4,
      "heikinAvg30d": 2.754
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1072,
      "ouatsu": 1434.488,
      "saikou": 9.8,
      "heikin": 3.7,
      "boshuAvg30d": 1115.7,
      "heikinAvg30d": 2.784
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1071,
      "ouatsu": 1401.395,
      "saikou": 9.8,
      "heikin": 3.69,
      "boshuAvg30d": 1114.7,
      "heikinAvg30d": 2.846
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1068,
      "ouatsu": 1556.022,
      "saikou": 9.91,
      "heikin": 3.9,
      "boshuAvg30d": 1127.6,
      "heikinAvg30d": 3.029
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1070,
      "ouatsu": 1573.682,
      "saikou": 9.73,
      "heikin": 3.57,
      "boshuAvg30d": 1129.2,
      "heikinAvg30d": 3.228
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1072,
      "ouatsu": 1540.47,
      "saikou": 9.91,
      "heikin": 3.77,
      "boshuAvg30d": 1131.6,
      "heikinAvg30d": 3.281
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1073,
      "ouatsu": 1464.097,
      "saikou": 9.8,
      "heikin": 3.72,
      "boshuAvg30d": 1132.2,
      "heikinAvg30d": 3.479
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1073,
      "ouatsu": 1655.094,
      "saikou": 9.91,
      "heikin": 3.29,
      "boshuAvg30d": 1132.2,
      "heikinAvg30d": 3.541
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1073,
      "ouatsu": 1714.348,
      "saikou": 9.91,
      "heikin": 2.96,
      "boshuAvg30d": 1132.2,
      "heikinAvg30d": 3.553
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1133,
      "ouatsu": 1697.962,
      "saikou": 9.82,
      "heikin": 3.1,
      "boshuAvg30d": 1194.3,
      "heikinAvg30d": 3.597
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1156,
      "ouatsu": 1717.146,
      "saikou": 9.8,
      "heikin": 3.19,
      "boshuAvg30d": 1216.6,
      "heikinAvg30d": 3.418
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1177,
      "ouatsu": 1669.706,
      "saikou": 9.91,
      "heikin": 3.56,
      "boshuAvg30d": 1238.3,
      "heikinAvg30d": 2.993
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1194,
      "ouatsu": 1555.936,
      "saikou": 9.8,
      "heikin": 3.42,
      "boshuAvg30d": 1255.7,
      "heikinAvg30d": 2.79
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1194,
      "ouatsu": 1591.583,
      "saikou": 9.91,
      "heikin": 3.85,
      "boshuAvg30d": 1256.0,
      "heikinAvg30d": 2.992
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1194,
      "ouatsu": 1434.037,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1256.0,
      "heikinAvg30d": 2.981
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1126,
      "ouatsu": 1430.214,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1222.5,
      "heikinAvg30d": 3.241
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1129,
      "ouatsu": 1483.001,
      "saikou": 10,
      "heikin": 3.96,
      "boshuAvg30d": 1225.8,
      "heikinAvg30d": 3.212
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1134,
      "ouatsu": 1376.802,
      "saikou": 9.67,
      "heikin": 3.77,
      "boshuAvg30d": 1229.2,
      "heikinAvg30d": 3.297
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1134,
      "ouatsu": 1375.734,
      "saikou": 10,
      "heikin": 3.91,
      "boshuAvg30d": 1229.2,
      "heikinAvg30d": 3.221
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1131,
      "ouatsu": 1459.241,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1226.2,
      "heikinAvg30d": 3.216
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1130,
      "ouatsu": 1476.816,
      "saikou": 10,
      "heikin": 4.09,
      "boshuAvg30d": 1225.2,
      "heikinAvg30d": 3.168
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1110,
      "ouatsu": 1664.27,
      "saikou": 9.8,
      "heikin": 3.56,
      "boshuAvg30d": 1209.4,
      "heikinAvg30d": 3.04
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1110,
      "ouatsu": 1675.038,
      "saikou": 9.68,
      "heikin": 3.22,
      "boshuAvg30d": 1209.4,
      "heikinAvg30d": 3.063
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1110,
      "ouatsu": 1423.64,
      "saikou": 10,
      "heikin": 3.73,
      "boshuAvg30d": 1209.4,
      "heikinAvg30d": 3.172
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1108,
      "ouatsu": 1450.966,
      "saikou": 10,
      "heikin": 4.94,
      "boshuAvg30d": 1206.3,
      "heikinAvg30d": 3.254
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1105,
      "ouatsu": 1165.134,
      "saikou": 10,
      "heikin": 4.72,
      "boshuAvg30d": 1202.7,
      "heikinAvg30d": 3.245
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1099,
      "ouatsu": 899.588,
      "saikou": 10,
      "heikin": 3.85,
      "boshuAvg30d": 1196.3,
      "heikinAvg30d": 3.279
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1165,
      "ouatsu": 997.096,
      "saikou": 10,
      "heikin": 4.47,
      "boshuAvg30d": 1232.5,
      "heikinAvg30d": 3.197
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1165,
      "ouatsu": 873.55,
      "saikou": 10,
      "heikin": 3.64,
      "boshuAvg30d": 1232.5,
      "heikinAvg30d": 3.431
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1166,
      "ouatsu": 865.263,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1233.2,
      "heikinAvg30d": 3.874
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1165,
      "ouatsu": 957.167,
      "saikou": 10,
      "heikin": 4.58,
      "boshuAvg30d": 1231.8,
      "heikinAvg30d": 4.192
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1163,
      "ouatsu": 1024.373,
      "saikou": 10,
      "heikin": 4.4,
      "boshuAvg30d": 1228.8,
      "heikinAvg30d": 4.231
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1158,
      "ouatsu": 1006.436,
      "saikou": 10,
      "heikin": 4.88,
      "boshuAvg30d": 1223.8,
      "heikinAvg30d": 4.308
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1153,
      "ouatsu": 1116.103,
      "saikou": 10,
      "heikin": 3.95,
      "boshuAvg30d": 1217.7,
      "heikinAvg30d": 4.205
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1153,
      "ouatsu": 1075.508,
      "saikou": 10,
      "heikin": 4.38,
      "boshuAvg30d": 1217.7,
      "heikinAvg30d": 4.107
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1153,
      "ouatsu": 1176.752,
      "saikou": 10,
      "heikin": 3.99,
      "boshuAvg30d": 1218.1,
      "heikinAvg30d": 4.016
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1152,
      "ouatsu": 1138.503,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1217.1,
      "heikinAvg30d": 3.78
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1144,
      "ouatsu": 1183.729,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1210.1,
      "heikinAvg30d": 3.731
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1144,
      "ouatsu": 1337.242,
      "saikou": 9.91,
      "heikin": 2.6,
      "boshuAvg30d": 1208.7,
      "heikinAvg30d": 3.666
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1054,
      "ouatsu": 1464.498,
      "saikou": 9.96,
      "heikin": 2.81,
      "boshuAvg30d": 1129.6,
      "heikinAvg30d": 3.514
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1057,
      "ouatsu": 1631.926,
      "saikou": 9.29,
      "heikin": 2.79,
      "boshuAvg30d": 1132.6,
      "heikinAvg30d": 3.562
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1058,
      "ouatsu": 1498.17,
      "saikou": 9.12,
      "heikin": 2.89,
      "boshuAvg30d": 1133.9,
      "heikinAvg30d": 3.475
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1053,
      "ouatsu": 1627.6,
      "saikou": 9.91,
      "heikin": 2.75,
      "boshuAvg30d": 1128.2,
      "heikinAvg30d": 3.344
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1044,
      "ouatsu": 1490.956,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1119.9,
      "heikinAvg30d": 3.356
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1037,
      "ouatsu": 1582.944,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1112.6,
      "heikinAvg30d": 3.1
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
        "ouatsu": 69.418,
        "saikou": 7.97,
        "heikin": 5.03,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.406
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 104.958,
        "saikou": 9.91,
        "heikin": 5.32,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.24
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 33.418,
        "saikou": 9.8,
        "heikin": 6.84,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.188
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 65.958,
        "saikou": 9.91,
        "heikin": 8.51,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 2.926
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 25.408,
        "saikou": 9.8,
        "heikin": 6.26,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.458
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 25.408,
        "saikou": 9.8,
        "heikin": 6.26,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.352
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 146.948,
        "saikou": 9.91,
        "heikin": 5.88,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.677
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 187.408,
        "saikou": 3.69,
        "heikin": 3.52,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.682
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 145.948,
        "saikou": 9.91,
        "heikin": 5.6,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.781
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 55.408,
        "saikou": 9.8,
        "heikin": 3.42,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.544
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 130.958,
        "saikou": 9.91,
        "heikin": 4.59,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.708
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 147.958,
        "saikou": 9.91,
        "heikin": 4.13,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.862
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 99.408,
        "saikou": 9.8,
        "heikin": 2.54,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.512
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 106.408,
        "saikou": 9.8,
        "heikin": 3.86,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.482
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 154.708,
        "saikou": 9.91,
        "heikin": 5.75,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 2.894
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 106.408,
        "saikou": 9.8,
        "heikin": 3.8,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.924
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 138.718,
        "saikou": 9.91,
        "heikin": 6.14,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.966
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 86.418,
        "saikou": 7.97,
        "heikin": 4.54,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.53
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 104.418,
        "saikou": 7.97,
        "heikin": 5.1,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.75
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 138.958,
        "saikou": 9.91,
        "heikin": 6.27,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 2.362
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 47.94,
        "saikou": 9.67,
        "heikin": 5.14,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 2.962
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 105.45,
        "saikou": 9.91,
        "heikin": 6.52,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.107
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 136.44,
        "saikou": 9.91,
        "heikin": 6.35,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.928
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 69.208,
        "saikou": 9.8,
        "heikin": 8.52,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.716
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 102.94,
        "saikou": 9.8,
        "heikin": 8.48,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 2.735
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 100.95,
        "saikou": 7,
        "heikin": 3.34,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 2.968
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 127.75,
        "saikou": 9.91,
        "heikin": 6.46,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 2.449
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 154.708,
        "saikou": 9.8,
        "heikin": 8.46,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 2.889
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 20.44,
        "saikou": 9.8,
        "heikin": 5.58,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 3.147
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 104.44,
        "saikou": 9.64,
        "heikin": 9.16,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 3.411
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 148.8,
        "saikou": 9.65,
        "heikin": 9.15,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 2.638
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 69.768,
        "saikou": 9.91,
        "heikin": 8.67,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 3.701
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 95.5,
        "saikou": 9.08,
        "heikin": 8.43,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 4.775
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 83.06,
        "saikou": 9.91,
        "heikin": 8.63,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 5.104
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 44.44,
        "saikou": 9.8,
        "heikin": 4.07,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 4.959
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 52.968,
        "saikou": 9.91,
        "heikin": 9.55,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 4.878
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 102.408,
        "saikou": 7,
        "heikin": 1.76,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 4.76
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 67.968,
        "saikou": 9.91,
        "heikin": 8.73,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 4.653
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 162.408,
        "saikou": 6.74,
        "heikin": 6.45,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 4.282
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 65.978,
        "saikou": 9.91,
        "heikin": 8.69,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 4.178
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 58.408,
        "saikou": 7,
        "heikin": 2.33,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 4.117
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 148.968,
        "saikou": 9.91,
        "heikin": 4.12,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 3.819
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 109.408,
        "saikou": 4.99,
        "heikin": 1.38,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 4.046
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 149.978,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 4.369
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 109.408,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 4.226
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 151.968,
        "saikou": 9.91,
        "heikin": 1.41,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.988
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 119.408,
        "saikou": 1.65,
        "heikin": 1.64,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 4.253
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 199.968,
        "saikou": 1.65,
        "heikin": 1.44,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.706
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 82.548,
        "saikou": 8.5,
        "heikin": 5.72,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 6.071
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 82.548,
        "saikou": 7.13,
        "heikin": 5.51,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 6.358
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 100.496,
        "saikou": 7.13,
        "heikin": 4.93,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 6.398
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 102.426,
        "saikou": 7.13,
        "heikin": 5.25,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 6.401
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 98.48,
        "saikou": 7.13,
        "heikin": 4.96,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 6.454
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 98.48,
        "saikou": 7.13,
        "heikin": 4.99,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 6.506
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 100.926,
        "saikou": 7.13,
        "heikin": 4.92,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 6.55
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 102.426,
        "saikou": 7.13,
        "heikin": 4.99,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 6.463
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 106.424,
        "saikou": 7.13,
        "heikin": 4.91,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 6.368
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 104.524,
        "saikou": 7.13,
        "heikin": 5.2,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 6.331
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 94.424,
        "saikou": 7.11,
        "heikin": 5.77,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 6.538
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 94.424,
        "saikou": 7.13,
        "heikin": 5.94,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 6.632
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 94.424,
        "saikou": 7.08,
        "heikin": 6.2,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 6.882
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 92.924,
        "saikou": 7.13,
        "heikin": 5.46,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 7.048
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 82.424,
        "saikou": 7.13,
        "heikin": 6.39,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 7.302
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 80.924,
        "saikou": 9.4,
        "heikin": 6.41,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 7.51
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 82.424,
        "saikou": 6.56,
        "heikin": 6.12,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 7.897
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 68.924,
        "saikou": 6.49,
        "heikin": 5.94,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 7.909
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 72.42,
        "saikou": 4.67,
        "heikin": 4.67,
        "boshuAvg30d": 112.1,
        "heikinAvg30d": 7.778
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 72.42,
        "saikou": 5.94,
        "heikin": 5.06,
        "boshuAvg30d": 112.8,
        "heikinAvg30d": 7.923
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 79.895,
        "saikou": 7.39,
        "heikin": 4.9,
        "boshuAvg30d": 112.2,
        "heikinAvg30d": 7.931
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 79.895,
        "saikou": 7.39,
        "heikin": 4.81,
        "boshuAvg30d": 112.6,
        "heikinAvg30d": 8.034
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 94.52,
        "saikou": 7.39,
        "heikin": 5,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 8.087
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 83.85,
        "saikou": 7.39,
        "heikin": 5.06,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 8.022
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 78.503,
        "saikou": 6.49,
        "heikin": 4.98,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 7.929
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 94.424,
        "saikou": 6.49,
        "heikin": 4.74,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 7.828
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 72.42,
        "saikou": 4.98,
        "heikin": 4.91,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 7.54
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 59.85,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 109.2,
        "heikinAvg30d": 7.236
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 72.42,
        "saikou": 6.49,
        "heikin": 6.03,
        "boshuAvg30d": 108.6,
        "heikinAvg30d": 7.425
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 72.42,
        "saikou": 10,
        "heikin": 5.59,
        "boshuAvg30d": 105.5,
        "heikinAvg30d": 6.522
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 72.384,
        "saikou": 10,
        "heikin": 5.89,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 6.533
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 72.384,
        "saikou": 10,
        "heikin": 4.63,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.835
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 72.384,
        "saikou": 10,
        "heikin": 4.71,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.782
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 68.919,
        "saikou": 9.95,
        "heikin": 4.34,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 5.812
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 72.384,
        "saikou": 10,
        "heikin": 4.34,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 5.69
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 70.884,
        "saikou": 9.95,
        "heikin": 4.22,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 5.342
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 70.424,
        "saikou": 10,
        "heikin": 4,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 5.428
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 68.924,
        "saikou": 9.95,
        "heikin": 3.71,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 5.081
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 59.718,
        "saikou": 10,
        "heikin": 4.06,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 5.07
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 59.754,
        "saikou": 10,
        "heikin": 4.09,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 5.237
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 55.799,
        "saikou": 10,
        "heikin": 3.89,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 5.225
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 53.818,
        "saikou": 2.99,
        "heikin": 2.91,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 5.393
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 56.504,
        "saikou": 4,
        "heikin": 3.18,
        "boshuAvg30d": 71.5,
        "heikinAvg30d": 5.587
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 80.504,
        "saikou": 6.98,
        "heikin": 4.57,
        "boshuAvg30d": 71.5,
        "heikinAvg30d": 5.359
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 93.854,
        "saikou": 7.08,
        "heikin": 4.5,
        "boshuAvg30d": 71.5,
        "heikinAvg30d": 5.589
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 90.574,
        "saikou": 7.13,
        "heikin": 4.53,
        "boshuAvg30d": 70.5,
        "heikinAvg30d": 5.506
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 79.924,
        "saikou": 7.82,
        "heikin": 5.8,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 5.662
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 78.424,
        "saikou": 8.08,
        "heikin": 6.03,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 6.043
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 253,
        "ouatsu": 330.663,
        "saikou": 9.64,
        "heikin": 5.31,
        "boshuAvg30d": 316.4,
        "heikinAvg30d": 3.982
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 253,
        "ouatsu": 461.006,
        "saikou": 5.77,
        "heikin": 2.88,
        "boshuAvg30d": 316.4,
        "heikinAvg30d": 4.01
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 253,
        "ouatsu": 467.442,
        "saikou": 5.76,
        "heikin": 2.87,
        "boshuAvg30d": 316.4,
        "heikinAvg30d": 3.683
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 253,
        "ouatsu": 342.783,
        "saikou": 9.71,
        "heikin": 5.43,
        "boshuAvg30d": 316.4,
        "heikinAvg30d": 3.663
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 252,
        "ouatsu": 348.509,
        "saikou": 9.71,
        "heikin": 5.22,
        "boshuAvg30d": 315.0,
        "heikinAvg30d": 3.634
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 251,
        "ouatsu": 346.589,
        "saikou": 9.71,
        "heikin": 5.23,
        "boshuAvg30d": 314.4,
        "heikinAvg30d": 3.599
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 249,
        "ouatsu": 364.446,
        "saikou": 9.73,
        "heikin": 5.25,
        "boshuAvg30d": 312.7,
        "heikinAvg30d": 3.801
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 251,
        "ouatsu": 362.997,
        "saikou": 9.73,
        "heikin": 5.2,
        "boshuAvg30d": 314.4,
        "heikinAvg30d": 3.894
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 251,
        "ouatsu": 362.532,
        "saikou": 9.74,
        "heikin": 5.25,
        "boshuAvg30d": 314.7,
        "heikinAvg30d": 3.93
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 252,
        "ouatsu": 350.529,
        "saikou": 9.74,
        "heikin": 5.52,
        "boshuAvg30d": 315.4,
        "heikinAvg30d": 4.183
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 252,
        "ouatsu": 461.538,
        "saikou": 5.81,
        "heikin": 3.07,
        "boshuAvg30d": 315.4,
        "heikinAvg30d": 4.131
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 252,
        "ouatsu": 474.311,
        "saikou": 5.78,
        "heikin": 2.74,
        "boshuAvg30d": 315.4,
        "heikinAvg30d": 4.353
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 271,
        "ouatsu": 484.015,
        "saikou": 5.78,
        "heikin": 3.25,
        "boshuAvg30d": 335.1,
        "heikinAvg30d": 4.331
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 279,
        "ouatsu": 498.599,
        "saikou": 5.8,
        "heikin": 3.49,
        "boshuAvg30d": 343.1,
        "heikinAvg30d": 4.572
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 284,
        "ouatsu": 396.347,
        "saikou": 5.78,
        "heikin": 3.57,
        "boshuAvg30d": 348.1,
        "heikinAvg30d": 4.09
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 289,
        "ouatsu": 395.822,
        "saikou": 5.8,
        "heikin": 3.4,
        "boshuAvg30d": 353.1,
        "heikinAvg30d": 3.765
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 289,
        "ouatsu": 523.028,
        "saikou": 8.14,
        "heikin": 4.27,
        "boshuAvg30d": 353.1,
        "heikinAvg30d": 4.012
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 289,
        "ouatsu": 439.657,
        "saikou": 6.63,
        "heikin": 4.43,
        "boshuAvg30d": 353.1,
        "heikinAvg30d": 3.933
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 281,
        "ouatsu": 433.853,
        "saikou": 4.99,
        "heikin": 3.64,
        "boshuAvg30d": 347.8,
        "heikinAvg30d": 4.308
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 281,
        "ouatsu": 475.775,
        "saikou": 6.15,
        "heikin": 4.1,
        "boshuAvg30d": 347.8,
        "heikinAvg30d": 4.37
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 281,
        "ouatsu": 450.968,
        "saikou": 7.55,
        "heikin": 4.38,
        "boshuAvg30d": 348.2,
        "heikinAvg30d": 4.339
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 280,
        "ouatsu": 447.29,
        "saikou": 7.55,
        "heikin": 4.68,
        "boshuAvg30d": 347.2,
        "heikinAvg30d": 4.166
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 278,
        "ouatsu": 462.691,
        "saikou": 7.59,
        "heikin": 4.48,
        "boshuAvg30d": 344.8,
        "heikinAvg30d": 4.135
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 278,
        "ouatsu": 530.003,
        "saikou": 9.57,
        "heikin": 4.46,
        "boshuAvg30d": 344.8,
        "heikinAvg30d": 4.05
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 275,
        "ouatsu": 657.92,
        "saikou": 5.49,
        "heikin": 2.26,
        "boshuAvg30d": 342.2,
        "heikinAvg30d": 3.933
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 275,
        "ouatsu": 633.384,
        "saikou": 5,
        "heikin": 2.34,
        "boshuAvg30d": 342.2,
        "heikinAvg30d": 3.898
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 275,
        "ouatsu": 495.999,
        "saikou": 5.77,
        "heikin": 3.65,
        "boshuAvg30d": 342.2,
        "heikinAvg30d": 3.997
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 275,
        "ouatsu": 372.941,
        "saikou": 5,
        "heikin": 4.21,
        "boshuAvg30d": 342.2,
        "heikinAvg30d": 4.142
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 274,
        "ouatsu": 323.192,
        "saikou": 5.42,
        "heikin": 4.13,
        "boshuAvg30d": 341.2,
        "heikinAvg30d": 4.029
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 163.992,
        "saikou": 5.19,
        "heikin": 2.63,
        "boshuAvg30d": 340.5,
        "heikinAvg30d": 3.774
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 271,
        "ouatsu": 156.282,
        "saikou": 3.5,
        "heikin": 2.31,
        "boshuAvg30d": 338.9,
        "heikinAvg30d": 3.651
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 271,
        "ouatsu": 160.167,
        "saikou": 3.5,
        "heikin": 2.31,
        "boshuAvg30d": 338.9,
        "heikinAvg30d": 3.572
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 271,
        "ouatsu": 158.21,
        "saikou": 3.03,
        "heikin": 2.25,
        "boshuAvg30d": 338.9,
        "heikinAvg30d": 3.83
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 271,
        "ouatsu": 156.29,
        "saikou": 3.08,
        "heikin": 2.28,
        "boshuAvg30d": 338.8,
        "heikinAvg30d": 4.077
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 271,
        "ouatsu": 156.29,
        "saikou": 3.08,
        "heikin": 2.27,
        "boshuAvg30d": 338.5,
        "heikinAvg30d": 3.905
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 271,
        "ouatsu": 150.64,
        "saikou": 3,
        "heikin": 2.25,
        "boshuAvg30d": 338.1,
        "heikinAvg30d": 3.916
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 274,
        "ouatsu": 172.527,
        "saikou": 8.14,
        "heikin": 2.87,
        "boshuAvg30d": 340.8,
        "heikinAvg30d": 4.043
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 274,
        "ouatsu": 209.42,
        "saikou": 8.24,
        "heikin": 3.84,
        "boshuAvg30d": 340.8,
        "heikinAvg30d": 3.856
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 274,
        "ouatsu": 197.255,
        "saikou": 4.64,
        "heikin": 2.68,
        "boshuAvg30d": 341.1,
        "heikinAvg30d": 4.032
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 274,
        "ouatsu": 230.606,
        "saikou": 5,
        "heikin": 2.31,
        "boshuAvg30d": 341.1,
        "heikinAvg30d": 3.784
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 272,
        "ouatsu": 262.252,
        "saikou": 2.9,
        "heikin": 1.79,
        "boshuAvg30d": 339.1,
        "heikinAvg30d": 3.839
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 272,
        "ouatsu": 454.889,
        "saikou": 5.88,
        "heikin": 2.87,
        "boshuAvg30d": 339.1,
        "heikinAvg30d": 3.952
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 272,
        "ouatsu": 450.763,
        "saikou": 5.8,
        "heikin": 2.34,
        "boshuAvg30d": 338.8,
        "heikinAvg30d": 3.655
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 272,
        "ouatsu": 443.299,
        "saikou": 5.82,
        "heikin": 2.31,
        "boshuAvg30d": 338.8,
        "heikinAvg30d": 3.685
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 272,
        "ouatsu": 290.492,
        "saikou": 5.83,
        "heikin": 2.33,
        "boshuAvg30d": 339.2,
        "heikinAvg30d": 3.266
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 270,
        "ouatsu": 390.232,
        "saikou": 5.81,
        "heikin": 2.26,
        "boshuAvg30d": 337.2,
        "heikinAvg30d": 3.579
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 268,
        "ouatsu": 342.415,
        "saikou": 10,
        "heikin": 4.69,
        "boshuAvg30d": 335.2,
        "heikinAvg30d": 3.86
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 267,
        "ouatsu": 357.345,
        "saikou": 10,
        "heikin": 5.07,
        "boshuAvg30d": 334.2,
        "heikinAvg30d": 4.048
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 347.636,
        "saikou": 3.39,
        "heikin": 2.32,
        "boshuAvg30d": 93.8,
        "heikinAvg30d": 1.899
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 318.097,
        "saikou": 2.77,
        "heikin": 1.2,
        "boshuAvg30d": 93.8,
        "heikinAvg30d": 1.724
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 338.091,
        "saikou": 1.75,
        "heikin": 0.96,
        "boshuAvg30d": 93.8,
        "heikinAvg30d": 1.731
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 366.975,
        "saikou": 3.3,
        "heikin": 1.62,
        "boshuAvg30d": 93.8,
        "heikinAvg30d": 1.774
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 355.061,
        "saikou": 2.71,
        "heikin": 1.7,
        "boshuAvg30d": 92.8,
        "heikinAvg30d": 1.676
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 336.077,
        "saikou": 2.8,
        "heikin": 1.41,
        "boshuAvg30d": 92.8,
        "heikinAvg30d": 1.668
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 354.835,
        "saikou": 2.88,
        "heikin": 1.39,
        "boshuAvg30d": 92.1,
        "heikinAvg30d": 1.553
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 335.547,
        "saikou": 3.18,
        "heikin": 1.02,
        "boshuAvg30d": 92.1,
        "heikinAvg30d": 1.708
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 340.263,
        "saikou": 3.3,
        "heikin": 0.9,
        "boshuAvg30d": 92.8,
        "heikinAvg30d": 1.731
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 319.333,
        "saikou": 2.97,
        "heikin": 0.98,
        "boshuAvg30d": 92.8,
        "heikinAvg30d": 1.693
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 321.323,
        "saikou": 3.22,
        "heikin": 0.88,
        "boshuAvg30d": 92.8,
        "heikinAvg30d": 1.77
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 306.839,
        "saikou": 1.75,
        "heikin": 0.8,
        "boshuAvg30d": 92.8,
        "heikinAvg30d": 1.727
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 320.323,
        "saikou": 1.75,
        "heikin": 1.15,
        "boshuAvg30d": 102.1,
        "heikinAvg30d": 1.968
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 320.323,
        "saikou": 4.08,
        "heikin": 1.21,
        "boshuAvg30d": 105.8,
        "heikinAvg30d": 2.024
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 386.645,
        "saikou": 3.6,
        "heikin": 2.23,
        "boshuAvg30d": 108.8,
        "heikinAvg30d": 2.043
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 382.239,
        "saikou": 3.64,
        "heikin": 2.39,
        "boshuAvg30d": 110.8,
        "heikinAvg30d": 2.032
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 310.813,
        "saikou": 5.08,
        "heikin": 1.99,
        "boshuAvg30d": 110.8,
        "heikinAvg30d": 2.159
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 317.224,
        "saikou": 5.35,
        "heikin": 1.96,
        "boshuAvg30d": 110.8,
        "heikinAvg30d": 2.294
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 317.223,
        "saikou": 6.16,
        "heikin": 2.44,
        "boshuAvg30d": 115.4,
        "heikinAvg30d": 2.696
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 317.223,
        "saikou": 5.69,
        "heikin": 2.22,
        "boshuAvg30d": 115.4,
        "heikinAvg30d": 2.678
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 301.525,
        "saikou": 9.25,
        "heikin": 2.15,
        "boshuAvg30d": 115.8,
        "heikinAvg30d": 2.936
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 298.514,
        "saikou": 9.38,
        "heikin": 2.13,
        "boshuAvg30d": 115.4,
        "heikinAvg30d": 3.009
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 301.494,
        "saikou": 9.18,
        "heikin": 1.96,
        "boshuAvg30d": 114.4,
        "heikinAvg30d": 2.875
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 308.309,
        "saikou": 8.97,
        "heikin": 2.16,
        "boshuAvg30d": 113.4,
        "heikinAvg30d": 2.929
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 369.161,
        "saikou": 8.34,
        "heikin": 3.01,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.826
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 371.706,
        "saikou": 8.34,
        "heikin": 2.94,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.847
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 296.135,
        "saikou": 8.34,
        "heikin": 2.78,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.825
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 340.287,
        "saikou": 9.32,
        "heikin": 3.99,
        "boshuAvg30d": 109.1,
        "heikinAvg30d": 2.742
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 359.303,
        "saikou": 9.54,
        "heikin": 6.09,
        "boshuAvg30d": 108.8,
        "heikinAvg30d": 2.904
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 203.307,
        "saikou": 7.85,
        "heikin": 3.9,
        "boshuAvg30d": 108.8,
        "heikinAvg30d": 2.948
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 243.301,
        "saikou": 9.95,
        "heikin": 3.66,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 2.712
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 251.902,
        "saikou": 7.5,
        "heikin": 3.57,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 2.728
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 244.518,
        "saikou": 5,
        "heikin": 3.39,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 2.646
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 246.008,
        "saikou": 5,
        "heikin": 3.29,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 2.786
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 246.008,
        "saikou": 5,
        "heikin": 3.39,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 2.62
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 242.519,
        "saikou": 3.64,
        "heikin": 2.94,
        "boshuAvg30d": 106.4,
        "heikinAvg30d": 2.652
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 251.403,
        "saikou": 2.88,
        "heikin": 2.42,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 2.357
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 251.403,
        "saikou": 5.1,
        "heikin": 2.37,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 2.171
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 239.608,
        "saikou": 5.1,
        "heikin": 2.07,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 2.006
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 253.402,
        "saikou": 5.1,
        "heikin": 1.6,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 1.933
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 243.497,
        "saikou": 5.1,
        "heikin": 1.17,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 1.855
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 241.513,
        "saikou": 5.1,
        "heikin": 1.12,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 1.891
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 249.422,
        "saikou": 5.1,
        "heikin": 1.48,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 1.701
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 379.511,
        "saikou": 3.68,
        "heikin": 2.42,
        "boshuAvg30d": 106.1,
        "heikinAvg30d": 1.941
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 425.782,
        "saikou": 3.49,
        "heikin": 2.52,
        "boshuAvg30d": 106.1,
        "heikinAvg30d": 1.995
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 409.487,
        "saikou": 2.75,
        "heikin": 2.16,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 1.983
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 385.315,
        "saikou": 3.29,
        "heikin": 2.43,
        "boshuAvg30d": 104.1,
        "heikinAvg30d": 1.875
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 380.673,
        "saikou": 2.78,
        "heikin": 2.18,
        "boshuAvg30d": 101.1,
        "heikinAvg30d": 1.954
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.05,
        "heikin": 1.8,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 1.001
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.05,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 1.021
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.68,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 1.089
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.85,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 1.066
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 0.998
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 0.998
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 1.097
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 1.307
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 1.167
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 1.263
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 1.416
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 1.425
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.9,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.729
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.55,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.428
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.457
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.353
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.504
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3.15,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.313
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3.1,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.72
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 3.99,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.807
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.902
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.943
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.216
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.007
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.5,
        "heikin": 4.5,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.369
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.45,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.147
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 3.262
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.812
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.75,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.823
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.5,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.711
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.45,
        "heikin": 5.45,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.318
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.55,
        "heikin": 6.14,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.921
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.68,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 3.009
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.45,
        "heikin": 3.3,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 2.656
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.35,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 2.493
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.93,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 3.52
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.463
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.554
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.391
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.77
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.3,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.992
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.9,
        "heikin": 2.7,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.646
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.35,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.609
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.3,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.688
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.55,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 2.112
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.55,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.6
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.299
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.132
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 146.405,
        "saikou": 1.68,
        "heikin": 0.98,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.612
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 113.693,
        "saikou": 1.46,
        "heikin": 1.07,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.366
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 111.843,
        "saikou": 1.46,
        "heikin": 1.07,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.259
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 126.791,
        "saikou": 1.46,
        "heikin": 0.99,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.184
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 107.699,
        "saikou": 1.46,
        "heikin": 1.03,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.118
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 93.499,
        "saikou": 1.99,
        "heikin": 1.33,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 1.262
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 91.501,
        "saikou": 1.99,
        "heikin": 1.35,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.459
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 103.233,
        "saikou": 1.99,
        "heikin": 1.49,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.648
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 97.487,
        "saikou": 1.99,
        "heikin": 1.48,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.565
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 97.487,
        "saikou": 1.99,
        "heikin": 1.33,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.652
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 97.487,
        "saikou": 1.99,
        "heikin": 1.36,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.596
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 142.75,
        "saikou": 1.99,
        "heikin": 1.01,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.451
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 142.75,
        "saikou": 1.94,
        "heikin": 1.03,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 1.65
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 142.75,
        "saikou": 1.99,
        "heikin": 1.12,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.638
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 152.44,
        "saikou": 2,
        "heikin": 1.18,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 1.673
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 91.501,
        "saikou": 2.2,
        "heikin": 1.69,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 1.672
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 90.058,
        "saikou": 2.22,
        "heikin": 1.61,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 1.767
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 96.044,
        "saikou": 3.95,
        "heikin": 2.16,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.066
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 96.044,
        "saikou": 3,
        "heikin": 2.15,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.33
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 98.041,
        "saikou": 3.95,
        "heikin": 2.49,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.244
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 96.056,
        "saikou": 5.95,
        "heikin": 2.98,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.502
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 96.056,
        "saikou": 5.95,
        "heikin": 3.17,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.545
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 99.981,
        "saikou": 5.95,
        "heikin": 3.14,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.619
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 99.981,
        "saikou": 3,
        "heikin": 2.65,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.421
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 84.981,
        "saikou": 3,
        "heikin": 2.53,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 2.288
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 99.981,
        "saikou": 4.93,
        "heikin": 2.87,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 2.329
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 99.981,
        "saikou": 5.95,
        "heikin": 2.9,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 2.614
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 99.981,
        "saikou": 3,
        "heikin": 2.57,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 2.45
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 99.981,
        "saikou": 4.45,
        "heikin": 2.44,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 2.304
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 99.981,
        "saikou": 3,
        "heikin": 1.65,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 2.204
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 99.981,
        "saikou": 3.95,
        "heikin": 2.75,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.293
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 99.981,
        "saikou": 3.95,
        "heikin": 2.75,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.588
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 99.981,
        "saikou": 3.95,
        "heikin": 2.77,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.434
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 93.995,
        "saikou": 2.44,
        "heikin": 2.12,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.37
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 97.308,
        "saikou": 2.5,
        "heikin": 2.18,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.404
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 82.308,
        "saikou": 3.7,
        "heikin": 2.88,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.567
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 97.308,
        "saikou": 2.2,
        "heikin": 1.84,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.179
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 97.308,
        "saikou": 2.42,
        "heikin": 1.93,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.206
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 103.294,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.193
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 103.294,
        "saikou": 1.99,
        "heikin": 1.65,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 2.137
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 101.309,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.055
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 101.309,
        "saikou": 1.99,
        "heikin": 1.65,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.061
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 103.294,
        "saikou": 1.99,
        "heikin": 1.63,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.028
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 99.427,
        "saikou": 2,
        "heikin": 1.7,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.118
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 99.427,
        "saikou": 2,
        "heikin": 1.7,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.138
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 97.429,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 2.101
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 82.984,
        "saikou": 1.99,
        "heikin": 1.47,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.669
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 99.427,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 1.779
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 43.633,
        "saikou": 6.38,
        "heikin": 3.01,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.927
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 77.328,
        "saikou": 6.38,
        "heikin": 2.7,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.957
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 79.128,
        "saikou": 6.38,
        "heikin": 2.67,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.896
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 79.128,
        "saikou": 6.38,
        "heikin": 2.66,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.772
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 79.128,
        "saikou": 6.38,
        "heikin": 2.66,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.719
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 79.128,
        "saikou": 6.38,
        "heikin": 2.66,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.014
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.66,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.169
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.66,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.513
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.65,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.696
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.66,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.079
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.66,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.029
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.66,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.998
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.71,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 3.176
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.7,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.523
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.66,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.636
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.68,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.331
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 80.128,
        "saikou": 7,
        "heikin": 2.81,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.412
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 74.356,
        "saikou": 7,
        "heikin": 2.52,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.512
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 62.244,
        "saikou": 7,
        "heikin": 3.19,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.694
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 56.288,
        "saikou": 7,
        "heikin": 3.38,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 1.646
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 62.244,
        "saikou": 7,
        "heikin": 3.19,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.592
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 62.244,
        "saikou": 7,
        "heikin": 3.19,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.491
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 62.244,
        "saikou": 6.38,
        "heikin": 3,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.576
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 62.244,
        "saikou": 6.38,
        "heikin": 3,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.639
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 62.244,
        "saikou": 6.38,
        "heikin": 2.93,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.507
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 62.244,
        "saikou": 6.38,
        "heikin": 2.93,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.558
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 62.244,
        "saikou": 6.38,
        "heikin": 2.94,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.878
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 51.122,
        "saikou": 6.38,
        "heikin": 3.12,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.755
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 14.746,
        "saikou": 2.7,
        "heikin": 1.63,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.728
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 14.746,
        "saikou": 2.7,
        "heikin": 1.57,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.659
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 14.746,
        "saikou": 2.73,
        "heikin": 1.67,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 1.99
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 14.746,
        "saikou": 2.86,
        "heikin": 1.78,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.274
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 14.746,
        "saikou": 7,
        "heikin": 2.75,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.593
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 14.746,
        "saikou": 7,
        "heikin": 2.63,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 3.493
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 14.746,
        "saikou": 7,
        "heikin": 2.77,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.047
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 14.746,
        "saikou": 7,
        "heikin": 3.1,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.249
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 14.746,
        "saikou": 7,
        "heikin": 2.83,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.349
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 14.746,
        "saikou": 3.23,
        "heikin": 2.24,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.29
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 32.63,
        "saikou": 2.85,
        "heikin": 1.6,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 3.977
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 32.63,
        "saikou": 3.01,
        "heikin": 1.61,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 3.51
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 66.325,
        "saikou": 2.34,
        "heikin": 1.93,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.675
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 32.63,
        "saikou": 2,
        "heikin": 1.52,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 3.447
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 66.325,
        "saikou": 2.29,
        "heikin": 1.91,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.738
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 66.325,
        "saikou": 2.29,
        "heikin": 1.9,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.422
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 66.325,
        "saikou": 2.29,
        "heikin": 1.89,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.366
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.66,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.869
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 80.128,
        "saikou": 6.38,
        "heikin": 2.68,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.778
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 66.325,
        "saikou": 2.29,
        "heikin": 1.92,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 1.916
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 205.543,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.959
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 216.543,
        "saikou": 1.6,
        "heikin": 0.96,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.913
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.902
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 209.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.899
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 218.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.9
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.886
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.888
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 208,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.913
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.965
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 214.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.999
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.97
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.899
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.952
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.9
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.834
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.841
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.79
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.852
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.13
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.073
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.093
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.001
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.073
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.081
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.01
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.074
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.079
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.108
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.13
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.067
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.09
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 132.043,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.096
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 121.043,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.192
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 117.043,
        "saikou": 1.7,
        "heikin": 1.32,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 1.334
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 182.543,
        "saikou": 1.7,
        "heikin": 1.48,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.462
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 182.543,
        "saikou": 1.7,
        "heikin": 1.48,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.477
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.7,
        "heikin": 1.5,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.461
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.501
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 177.543,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.373
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.372
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.356
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.55,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.339
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.003
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.989
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 1,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.993
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.972
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.016
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 0.96,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.001
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 189.98,
        "saikou": 9.53,
        "heikin": 6.46,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.482
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 195.756,
        "saikou": 9.31,
        "heikin": 6.3,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 3.948
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 196.252,
        "saikou": 9.3,
        "heikin": 6.36,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 3.784
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 196.252,
        "saikou": 9.2,
        "heikin": 6.31,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 3.55
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 197.732,
        "saikou": 9.2,
        "heikin": 6.3,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 3.46
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 195.743,
        "saikou": 9.21,
        "heikin": 6.31,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 3.826
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 193.767,
        "saikou": 9.33,
        "heikin": 6.29,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.115
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 190.015,
        "saikou": 9.52,
        "heikin": 6.42,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.599
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 184.217,
        "saikou": 9.41,
        "heikin": 6.38,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 4.843
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 238.217,
        "saikou": 9.32,
        "heikin": 6.36,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 5.296
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 245.765,
        "saikou": 9.82,
        "heikin": 6.66,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 5.47
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 244.467,
        "saikou": 9.48,
        "heikin": 6.31,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 5.293
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 250.443,
        "saikou": 9.82,
        "heikin": 6.73,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 4.88
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 249.543,
        "saikou": 9.55,
        "heikin": 6.49,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 4.106
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 190.543,
        "saikou": 9.31,
        "heikin": 6.12,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 3.008
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 192.443,
        "saikou": 9.26,
        "heikin": 6.08,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 2.864
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 192.443,
        "saikou": 9.88,
        "heikin": 6.44,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 2.975
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 177.443,
        "saikou": 10,
        "heikin": 6.49,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 3.134
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 170.041,
        "saikou": 10,
        "heikin": 6.58,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 3.178
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 150.325,
        "saikou": 10,
        "heikin": 7.18,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 3.0
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 164.203,
        "saikou": 9.36,
        "heikin": 6.21,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 2.961
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 112.314,
        "saikou": 10,
        "heikin": 5.36,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.009
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 127.9,
        "saikou": 10,
        "heikin": 6.25,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 2.898
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 149.25,
        "saikou": 10,
        "heikin": 7.26,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 2.879
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 134.55,
        "saikou": 9.41,
        "heikin": 7.46,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 2.349
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 138.378,
        "saikou": 9.68,
        "heikin": 7.48,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 2.546
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 95.14,
        "saikou": 10,
        "heikin": 6.27,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 3.012
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 198.106,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 3.561
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 101.081,
        "saikou": 10,
        "heikin": 6.11,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 3.703
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 66.731,
        "saikou": 10,
        "heikin": 3.09,
        "boshuAvg30d": 176.6,
        "heikinAvg30d": 4.234
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 121.631,
        "saikou": 10,
        "heikin": 6.13,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 4.511
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 68.631,
        "saikou": 10,
        "heikin": 3.29,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 5.084
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 54.953,
        "saikou": 10,
        "heikin": 3.78,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 6.139
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 173.178,
        "saikou": 10,
        "heikin": 8.23,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 6.453
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 206.726,
        "saikou": 10,
        "heikin": 8.48,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.602
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 205.9,
        "saikou": 10,
        "heikin": 8.86,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.658
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 214.816,
        "saikou": 10,
        "heikin": 8.57,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.655
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 173.268,
        "saikou": 10,
        "heikin": 8.21,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.613
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 200.368,
        "saikou": 10,
        "heikin": 7.41,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.434
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 200.368,
        "saikou": 10,
        "heikin": 7.41,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 5.997
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 203.668,
        "saikou": 9.79,
        "heikin": 7.11,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 5.933
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 111.644,
        "saikou": 8.97,
        "heikin": 4.26,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 5.678
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 202.311,
        "saikou": 9.96,
        "heikin": 6.84,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 5.54
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 186.411,
        "saikou": 9.29,
        "heikin": 6.18,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 5.52
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 186.411,
        "saikou": 9.12,
        "heikin": 6.24,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 5.725
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 181.311,
        "saikou": 9.12,
        "heikin": 6.01,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.316
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 174.311,
        "saikou": 8.99,
        "heikin": 6.14,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.177
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 174.311,
        "saikou": 8.31,
        "heikin": 5.59,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 4.362
      }
    ]
  }
};
