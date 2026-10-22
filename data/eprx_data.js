// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近29日間（本データでは2026/09/22〜2026/10/21）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-22",
  "fetchedAt": "2026-10-22",
  "avgWindowLabel": "過去29日平均（2026/09/22〜2026/10/21）",
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
      "ouatsu": 1676.046,
      "saikou": 9,
      "heikin": 2.42,
      "boshuAvg30d": 1113.4,
      "heikinAvg30d": 3.043
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1639.25,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1113.4,
      "heikinAvg30d": 2.918
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1640.47,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1113.4,
      "heikinAvg30d": 2.839
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1681.821,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1113.4,
      "heikinAvg30d": 2.799
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1688.021,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1109.8,
      "heikinAvg30d": 2.823
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1724.688,
      "saikou": 7.86,
      "heikin": 2.45,
      "boshuAvg30d": 1108.8,
      "heikinAvg30d": 2.881
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1751.055,
      "saikou": 9,
      "heikin": 2.52,
      "boshuAvg30d": 1121.6,
      "heikinAvg30d": 3.07
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1660.329,
      "saikou": 8.24,
      "heikin": 2.73,
      "boshuAvg30d": 1123.2,
      "heikinAvg30d": 3.257
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1693.545,
      "saikou": 9,
      "heikin": 2.85,
      "boshuAvg30d": 1125.6,
      "heikinAvg30d": 3.316
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1651.506,
      "saikou": 9,
      "heikin": 3.14,
      "boshuAvg30d": 1126.2,
      "heikinAvg30d": 3.517
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1649.541,
      "saikou": 8.87,
      "heikin": 3.02,
      "boshuAvg30d": 1126.2,
      "heikinAvg30d": 3.559
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1619.559,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1126.2,
      "heikinAvg30d": 3.56
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1735.386,
      "saikou": 9,
      "heikin": 3.24,
      "boshuAvg30d": 1188.1,
      "heikinAvg30d": 3.609
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1757.49,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1210.5,
      "heikinAvg30d": 3.423
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1620.577,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1232.1,
      "heikinAvg30d": 3.016
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1667.287,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1249.4,
      "heikinAvg30d": 2.806
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1657.889,
      "saikou": 10,
      "heikin": 2.67,
      "boshuAvg30d": 1249.7,
      "heikinAvg30d": 3.028
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1725.064,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1249.7,
      "heikinAvg30d": 3.009
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1137,
      "ouatsu": 1729.971,
      "saikou": 9.43,
      "heikin": 2.59,
      "boshuAvg30d": 1216.0,
      "heikinAvg30d": 3.263
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1140,
      "ouatsu": 1713.417,
      "saikou": 9.82,
      "heikin": 2.81,
      "boshuAvg30d": 1219.3,
      "heikinAvg30d": 3.26
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1145,
      "ouatsu": 1608.306,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1222.7,
      "heikinAvg30d": 3.317
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1145,
      "ouatsu": 1642.602,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1222.7,
      "heikinAvg30d": 3.253
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1142,
      "ouatsu": 1682.023,
      "saikou": 10,
      "heikin": 2.4,
      "boshuAvg30d": 1219.7,
      "heikinAvg30d": 3.247
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1141,
      "ouatsu": 1788.773,
      "saikou": 10,
      "heikin": 2.12,
      "boshuAvg30d": 1218.7,
      "heikinAvg30d": 3.203
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1121,
      "ouatsu": 1581.263,
      "saikou": 10,
      "heikin": 2.27,
      "boshuAvg30d": 1202.3,
      "heikinAvg30d": 3.059
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1121,
      "ouatsu": 1610.276,
      "saikou": 10,
      "heikin": 2.4,
      "boshuAvg30d": 1202.3,
      "heikinAvg30d": 3.072
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1121,
      "ouatsu": 1617.53,
      "saikou": 10,
      "heikin": 2.28,
      "boshuAvg30d": 1202.3,
      "heikinAvg30d": 3.197
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1119,
      "ouatsu": 1586.18,
      "saikou": 9.82,
      "heikin": 2.15,
      "boshuAvg30d": 1199.4,
      "heikinAvg30d": 3.319
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1116,
      "ouatsu": 1364.088,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1195.8,
      "heikinAvg30d": 3.313
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1110,
      "ouatsu": 1403.87,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1189.5,
      "heikinAvg30d": 3.319
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1409.132,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1226.0,
      "heikinAvg30d": 3.254
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1367.017,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1226.0,
      "heikinAvg30d": 3.464
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1345.61,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1226.7,
      "heikinAvg30d": 3.911
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1384.937,
      "saikou": 10,
      "heikin": 3.41,
      "boshuAvg30d": 1225.3,
      "heikinAvg30d": 4.267
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1564.004,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1222.4,
      "heikinAvg30d": 4.281
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1533.395,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1217.4,
      "heikinAvg30d": 4.38
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1523.663,
      "saikou": 10,
      "heikin": 4.06,
      "boshuAvg30d": 1211.4,
      "heikinAvg30d": 4.232
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1575.569,
      "saikou": 10,
      "heikin": 4.23,
      "boshuAvg30d": 1211.4,
      "heikinAvg30d": 4.146
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1645.201,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1211.8,
      "heikinAvg30d": 4.041
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1523.576,
      "saikou": 9.95,
      "heikin": 3.16,
      "boshuAvg30d": 1210.8,
      "heikinAvg30d": 3.799
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1424.229,
      "saikou": 9.95,
      "heikin": 2.94,
      "boshuAvg30d": 1203.7,
      "heikinAvg30d": 3.724
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1525.564,
      "saikou": 9.11,
      "heikin": 3.03,
      "boshuAvg30d": 1202.4,
      "heikinAvg30d": 3.65
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1065,
      "ouatsu": 1569.075,
      "saikou": 9,
      "heikin": 2.74,
      "boshuAvg30d": 1123.4,
      "heikinAvg30d": 3.514
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1068,
      "ouatsu": 1647.204,
      "saikou": 8.31,
      "heikin": 2.67,
      "boshuAvg30d": 1126.4,
      "heikinAvg30d": 3.563
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1069,
      "ouatsu": 1427.123,
      "saikou": 9,
      "heikin": 2.57,
      "boshuAvg30d": 1127.8,
      "heikinAvg30d": 3.479
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1064,
      "ouatsu": 1616.814,
      "saikou": 8.8,
      "heikin": 2.78,
      "boshuAvg30d": 1122.1,
      "heikinAvg30d": 3.35
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1055,
      "ouatsu": 1585.955,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1113.8,
      "heikinAvg30d": 3.388
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1048,
      "ouatsu": 1753.17,
      "saikou": 9,
      "heikin": 2.56,
      "boshuAvg30d": 1106.4,
      "heikinAvg30d": 3.122
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
        "ouatsu": 143.418,
        "saikou": 9,
        "heikin": 1.71,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.546
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 146.418,
        "saikou": 9,
        "heikin": 1.71,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.391
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 144.45,
        "saikou": 9,
        "heikin": 1.72,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.394
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 144.45,
        "saikou": 9,
        "heikin": 1.72,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.19
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 146.418,
        "saikou": 9,
        "heikin": 1.71,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.644
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 139.418,
        "saikou": 1.58,
        "heikin": 1.56,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.521
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 107.418,
        "saikou": 9,
        "heikin": 1.72,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.844
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 107.418,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.769
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 107.418,
        "saikou": 9,
        "heikin": 1.72,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.916
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 107.418,
        "saikou": 9,
        "heikin": 1.72,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.627
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 145.418,
        "saikou": 1.58,
        "heikin": 1.34,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.829
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 107.418,
        "saikou": 9,
        "heikin": 1.72,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.916
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 116.408,
        "saikou": 9,
        "heikin": 1.84,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 3.538
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 148.958,
        "saikou": 9,
        "heikin": 1.59,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 3.582
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 137.408,
        "saikou": 9,
        "heikin": 1.85,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 3.063
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 184,
        "saikou": 1.57,
        "heikin": 1.38,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 3.026
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 136.45,
        "saikou": 1.58,
        "heikin": 1.57,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 3.144
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 171.968,
        "saikou": 1.57,
        "heikin": 1.29,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 2.657
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 129.418,
        "saikou": 1.58,
        "heikin": 1.44,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.901
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 171.968,
        "saikou": 1.58,
        "heikin": 1.32,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 2.554
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 124.968,
        "saikou": 1.58,
        "heikin": 1.56,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 3.115
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 177.518,
        "saikou": 1.58,
        "heikin": 1.41,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.308
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 134.968,
        "saikou": 1.58,
        "heikin": 1.56,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.122
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 175.55,
        "saikou": 1.58,
        "heikin": 1.42,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.985
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 138.818,
        "saikou": 1.58,
        "heikin": 1.55,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 3.004
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 178.368,
        "saikou": 1.58,
        "heikin": 1.39,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 3.059
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 135.45,
        "saikou": 9,
        "heikin": 1.5,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 2.637
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 137.418,
        "saikou": 1.58,
        "heikin": 1.35,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 3.157
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 180.968,
        "saikou": 9,
        "heikin": 1.28,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 3.314
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 180.968,
        "saikou": 9,
        "heikin": 1.24,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 3.694
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 102.468,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 2.923
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 158.018,
        "saikou": 5.04,
        "heikin": 1.64,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.949
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 100.468,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 5.021
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 90.468,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 5.367
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 144.968,
        "saikou": 1.57,
        "heikin": 1.37,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 5.064
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 159.968,
        "saikou": 1.57,
        "heikin": 1.37,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 5.172
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 117.418,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 4.786
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 107.418,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 4.919
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 232.75,
        "saikou": 1.57,
        "heikin": 1.57,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 4.47
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 184.45,
        "saikou": 1.57,
        "heikin": 1.57,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 4.443
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 162.718,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.163
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 102.45,
        "saikou": 1.57,
        "heikin": 1.57,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.919
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 107.418,
        "saikou": 9,
        "heikin": 1.72,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 4.063
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 107.418,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.374
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 107.418,
        "saikou": 9,
        "heikin": 1.72,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 4.231
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 107.418,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 4.006
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 155.718,
        "saikou": 2.7,
        "heikin": 1.71,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 4.28
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 107.418,
        "saikou": 9,
        "heikin": 1.72,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 3.691
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 55.378,
        "saikou": 8.2,
        "heikin": 6.24,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 5.936
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 55.378,
        "saikou": 7.97,
        "heikin": 6.05,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 6.213
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 75.256,
        "saikou": 7.94,
        "heikin": 6.29,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 6.236
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 75.256,
        "saikou": 7.95,
        "heikin": 5.95,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 6.266
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 71.31,
        "saikou": 7.93,
        "heikin": 6.31,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 6.308
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 73.21,
        "saikou": 7.84,
        "heikin": 5.74,
        "boshuAvg30d": 120.9,
        "heikinAvg30d": 6.361
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 88.806,
        "saikou": 7.93,
        "heikin": 5.95,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 6.408
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 91.656,
        "saikou": 7.84,
        "heikin": 5.74,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 6.323
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 95.654,
        "saikou": 7.83,
        "heikin": 5.37,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 6.225
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 106.324,
        "saikou": 7.71,
        "heikin": 5.36,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 6.199
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 106.324,
        "saikou": 7.7,
        "heikin": 5.89,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 6.425
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 106.324,
        "saikou": 7.63,
        "heikin": 5.78,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 6.526
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 130.324,
        "saikou": 7.51,
        "heikin": 5.62,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 6.783
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 128.824,
        "saikou": 10,
        "heikin": 6.63,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.92
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 142.324,
        "saikou": 10,
        "heikin": 7.64,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 7.206
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 128.824,
        "saikou": 10,
        "heikin": 7.32,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 7.415
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 130.324,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 7.796
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 128.824,
        "saikou": 10,
        "heikin": 8.9,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 7.802
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 118.372,
        "saikou": 9.43,
        "heikin": 7.09,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 7.674
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 118.372,
        "saikou": 9.82,
        "heikin": 7.57,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 7.847
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 126.517,
        "saikou": 10,
        "heikin": 8.4,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 7.847
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 126.517,
        "saikou": 10,
        "heikin": 8.68,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 7.948
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 127.026,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 110.7,
        "heikinAvg30d": 8.006
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 126.38,
        "saikou": 10,
        "heikin": 9.44,
        "boshuAvg30d": 110.7,
        "heikinAvg30d": 7.947
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 124.977,
        "saikou": 10,
        "heikin": 8.33,
        "boshuAvg30d": 108.2,
        "heikinAvg30d": 7.852
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 126.327,
        "saikou": 10,
        "heikin": 8.49,
        "boshuAvg30d": 108.2,
        "heikinAvg30d": 7.741
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 116.323,
        "saikou": 10,
        "heikin": 8.01,
        "boshuAvg30d": 108.2,
        "heikinAvg30d": 7.467
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 120.32,
        "saikou": 9.82,
        "heikin": 8.16,
        "boshuAvg30d": 106.6,
        "heikinAvg30d": 7.072
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 120.32,
        "saikou": 10,
        "heikin": 6.96,
        "boshuAvg30d": 106.0,
        "heikinAvg30d": 7.367
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 120.32,
        "saikou": 10,
        "heikin": 6.36,
        "boshuAvg30d": 103.0,
        "heikinAvg30d": 6.459
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 120.32,
        "saikou": 10,
        "heikin": 6.05,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 6.477
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 96.32,
        "saikou": 10,
        "heikin": 4.68,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 5.752
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 84.32,
        "saikou": 10,
        "heikin": 4.47,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 5.668
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 78.828,
        "saikou": 6.42,
        "heikin": 3.43,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 5.666
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 76.827,
        "saikou": 5.82,
        "heikin": 3.32,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 5.53
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 76.827,
        "saikou": 9.9,
        "heikin": 3.53,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 5.189
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 78.823,
        "saikou": 9.95,
        "heikin": 3.94,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 5.259
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 80.824,
        "saikou": 9.95,
        "heikin": 3.44,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.902
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 80.824,
        "saikou": 9.95,
        "heikin": 3.45,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.914
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 92.824,
        "saikou": 9.95,
        "heikin": 4.74,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 5.076
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 76.969,
        "saikou": 9.95,
        "heikin": 4.22,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 5.062
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 78.299,
        "saikou": 5.96,
        "heikin": 3.64,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 5.195
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 92.254,
        "saikou": 6.61,
        "heikin": 4.13,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 5.426
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 92.205,
        "saikou": 7.7,
        "heikin": 4.96,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 5.204
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 92.254,
        "saikou": 6.84,
        "heikin": 4.34,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 5.467
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 90.297,
        "saikou": 7.47,
        "heikin": 5.21,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 5.369
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 88.974,
        "saikou": 7.45,
        "heikin": 5.78,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 5.568
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 90.019,
        "saikou": 7.94,
        "heikin": 4.69,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 5.951
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 510.649,
        "saikou": 3.19,
        "heikin": 2.28,
        "boshuAvg30d": 310.4,
        "heikinAvg30d": 4.068
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 528.279,
        "saikou": 10,
        "heikin": 4.09,
        "boshuAvg30d": 310.4,
        "heikinAvg30d": 4.012
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 512.911,
        "saikou": 10,
        "heikin": 4.54,
        "boshuAvg30d": 310.4,
        "heikinAvg30d": 3.688
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 499.155,
        "saikou": 10,
        "heikin": 5,
        "boshuAvg30d": 310.4,
        "heikinAvg30d": 3.759
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 523.307,
        "saikou": 10,
        "heikin": 4.39,
        "boshuAvg30d": 309.1,
        "heikinAvg30d": 3.724
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 565.385,
        "saikou": 3.05,
        "heikin": 2.47,
        "boshuAvg30d": 308.4,
        "heikinAvg30d": 3.69
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 586.841,
        "saikou": 3.04,
        "heikin": 2.37,
        "boshuAvg30d": 306.7,
        "heikinAvg30d": 3.879
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 538.939,
        "saikou": 5.8,
        "heikin": 2.49,
        "boshuAvg30d": 308.4,
        "heikinAvg30d": 3.968
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 559.724,
        "saikou": 5.78,
        "heikin": 3.06,
        "boshuAvg30d": 308.7,
        "heikinAvg30d": 4.002
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 510.157,
        "saikou": 5.82,
        "heikin": 2.73,
        "boshuAvg30d": 309.4,
        "heikinAvg30d": 4.266
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 508.425,
        "saikou": 5.8,
        "heikin": 2.8,
        "boshuAvg30d": 309.4,
        "heikinAvg30d": 4.114
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 522.329,
        "saikou": 10,
        "heikin": 4.81,
        "boshuAvg30d": 309.4,
        "heikinAvg30d": 4.328
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 572.586,
        "saikou": 5.81,
        "heikin": 3.19,
        "boshuAvg30d": 329.0,
        "heikinAvg30d": 4.319
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 555.279,
        "saikou": 5.71,
        "heikin": 3.35,
        "boshuAvg30d": 337.0,
        "heikinAvg30d": 4.562
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 499.687,
        "saikou": 5.79,
        "heikin": 2.96,
        "boshuAvg30d": 342.0,
        "heikinAvg30d": 4.079
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 489.875,
        "saikou": 5.82,
        "heikin": 3.14,
        "boshuAvg30d": 347.0,
        "heikinAvg30d": 3.743
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 559.589,
        "saikou": 5.7,
        "heikin": 2.64,
        "boshuAvg30d": 347.0,
        "heikinAvg30d": 4.023
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 559.519,
        "saikou": 5.47,
        "heikin": 2.52,
        "boshuAvg30d": 347.0,
        "heikinAvg30d": 3.956
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 546.365,
        "saikou": 5.47,
        "heikin": 2.61,
        "boshuAvg30d": 341.8,
        "heikinAvg30d": 4.314
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 581.699,
        "saikou": 5.41,
        "heikin": 2.68,
        "boshuAvg30d": 341.8,
        "heikinAvg30d": 4.414
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 547.904,
        "saikou": 5.79,
        "heikin": 2.99,
        "boshuAvg30d": 342.2,
        "heikinAvg30d": 4.368
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 546.736,
        "saikou": 5.79,
        "heikin": 2.97,
        "boshuAvg30d": 341.2,
        "heikinAvg30d": 4.204
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 564.603,
        "saikou": 5.48,
        "heikin": 2.66,
        "boshuAvg30d": 338.9,
        "heikinAvg30d": 4.165
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 574.592,
        "saikou": 4.79,
        "heikin": 2.26,
        "boshuAvg30d": 338.9,
        "heikinAvg30d": 4.078
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 530.015,
        "saikou": 5.72,
        "heikin": 2.35,
        "boshuAvg30d": 336.1,
        "heikinAvg30d": 3.888
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 541.095,
        "saikou": 6.71,
        "heikin": 1.94,
        "boshuAvg30d": 336.1,
        "heikinAvg30d": 3.853
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 501.225,
        "saikou": 4.9,
        "heikin": 2.15,
        "boshuAvg30d": 336.1,
        "heikinAvg30d": 3.998
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 503.241,
        "saikou": 4.9,
        "heikin": 2.12,
        "boshuAvg30d": 336.2,
        "heikinAvg30d": 4.163
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 338.919,
        "saikou": 5.82,
        "heikin": 2.69,
        "boshuAvg30d": 335.2,
        "heikinAvg30d": 4.064
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 315.274,
        "saikou": 5.7,
        "heikin": 3.2,
        "boshuAvg30d": 334.5,
        "heikinAvg30d": 3.759
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 344.592,
        "saikou": 5.71,
        "heikin": 2.96,
        "boshuAvg30d": 332.8,
        "heikinAvg30d": 3.616
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 315.113,
        "saikou": 5.62,
        "heikin": 2.68,
        "boshuAvg30d": 332.8,
        "heikinAvg30d": 3.55
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 288.198,
        "saikou": 6.12,
        "heikin": 2.91,
        "boshuAvg30d": 332.8,
        "heikinAvg30d": 3.819
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 384.361,
        "saikou": 7.18,
        "heikin": 2.45,
        "boshuAvg30d": 332.7,
        "heikinAvg30d": 4.07
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 400.476,
        "saikou": 7.12,
        "heikin": 2.58,
        "boshuAvg30d": 332.4,
        "heikinAvg30d": 3.883
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 395.084,
        "saikou": 7.19,
        "heikin": 2.76,
        "boshuAvg30d": 332.1,
        "heikinAvg30d": 3.909
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 306.998,
        "saikou": 7.22,
        "heikin": 3.55,
        "boshuAvg30d": 334.8,
        "heikinAvg30d": 4.042
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 348.161,
        "saikou": 7.2,
        "heikin": 4.33,
        "boshuAvg30d": 334.8,
        "heikinAvg30d": 3.885
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 328.96,
        "saikou": 6.38,
        "heikin": 3.45,
        "boshuAvg30d": 335.1,
        "heikinAvg30d": 4.013
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 312.086,
        "saikou": 5.68,
        "heikin": 2.66,
        "boshuAvg30d": 335.1,
        "heikinAvg30d": 3.768
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 291.847,
        "saikou": 5.57,
        "heikin": 2.38,
        "boshuAvg30d": 333.1,
        "heikinAvg30d": 3.791
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 451.047,
        "saikou": 6.81,
        "heikin": 3.5,
        "boshuAvg30d": 333.1,
        "heikinAvg30d": 3.943
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 433.739,
        "saikou": 5.72,
        "heikin": 2.37,
        "boshuAvg30d": 332.8,
        "heikinAvg30d": 3.638
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 535.819,
        "saikou": 5.61,
        "heikin": 2,
        "boshuAvg30d": 332.8,
        "heikinAvg30d": 3.667
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 303.48,
        "saikou": 5.59,
        "heikin": 2.11,
        "boshuAvg30d": 333.1,
        "heikinAvg30d": 3.244
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 439.617,
        "saikou": 5.82,
        "heikin": 2.43,
        "boshuAvg30d": 331.1,
        "heikinAvg30d": 3.552
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 359.209,
        "saikou": 10,
        "heikin": 4.74,
        "boshuAvg30d": 329.1,
        "heikinAvg30d": 3.922
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 519.82,
        "saikou": 5.76,
        "heikin": 2.24,
        "boshuAvg30d": 328.1,
        "heikinAvg30d": 4.099
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 298.758,
        "saikou": 2.94,
        "heikin": 1.41,
        "boshuAvg30d": 96.0,
        "heikinAvg30d": 1.892
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 281.775,
        "saikou": 1.75,
        "heikin": 0.82,
        "boshuAvg30d": 96.0,
        "heikinAvg30d": 1.687
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 289.809,
        "saikou": 1.75,
        "heikin": 0.99,
        "boshuAvg30d": 96.0,
        "heikinAvg30d": 1.686
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 291.793,
        "saikou": 1.75,
        "heikin": 0.92,
        "boshuAvg30d": 96.0,
        "heikinAvg30d": 1.724
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 275.879,
        "saikou": 1.75,
        "heikin": 1.03,
        "boshuAvg30d": 95.0,
        "heikinAvg30d": 1.625
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 273.895,
        "saikou": 1.75,
        "heikin": 1.18,
        "boshuAvg30d": 95.0,
        "heikinAvg30d": 1.607
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 309.974,
        "saikou": 3.19,
        "heikin": 1.32,
        "boshuAvg30d": 94.3,
        "heikinAvg30d": 1.526
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 286.586,
        "saikou": 3.41,
        "heikin": 1.21,
        "boshuAvg30d": 94.3,
        "heikinAvg30d": 1.663
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 288.402,
        "saikou": 3.53,
        "heikin": 1.16,
        "boshuAvg30d": 95.0,
        "heikinAvg30d": 1.684
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 274.472,
        "saikou": 3.38,
        "heikin": 1.31,
        "boshuAvg30d": 95.0,
        "heikinAvg30d": 1.657
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 258.241,
        "saikou": 1.75,
        "heikin": 0.91,
        "boshuAvg30d": 95.0,
        "heikinAvg30d": 1.73
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 254.757,
        "saikou": 1.75,
        "heikin": 0.82,
        "boshuAvg30d": 95.0,
        "heikinAvg30d": 1.683
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 278.362,
        "saikou": 3.72,
        "heikin": 1.24,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 1.927
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 278.362,
        "saikou": 5.1,
        "heikin": 1.69,
        "boshuAvg30d": 108.0,
        "heikinAvg30d": 1.952
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 274.38,
        "saikou": 5.1,
        "heikin": 2.08,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 2.033
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 274.864,
        "saikou": 4.36,
        "heikin": 1.86,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 2.02
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 258.633,
        "saikou": 5.71,
        "heikin": 2.7,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 2.14
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 280.171,
        "saikou": 6.23,
        "heikin": 3.09,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 2.27
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 264.032,
        "saikou": 8.44,
        "heikin": 4.07,
        "boshuAvg30d": 117.7,
        "heikinAvg30d": 2.677
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 264.032,
        "saikou": 8.68,
        "heikin": 4.77,
        "boshuAvg30d": 117.7,
        "heikinAvg30d": 2.656
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 175.295,
        "saikou": 9.45,
        "heikin": 4.52,
        "boshuAvg30d": 118.0,
        "heikinAvg30d": 2.908
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 197.394,
        "saikou": 9.98,
        "heikin": 4.1,
        "boshuAvg30d": 117.7,
        "heikinAvg30d": 2.974
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 179.601,
        "saikou": 9.53,
        "heikin": 3.32,
        "boshuAvg30d": 116.7,
        "heikinAvg30d": 2.84
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 179.517,
        "saikou": 9.39,
        "heikin": 3.33,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.904
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 128.339,
        "saikou": 8.93,
        "heikin": 3.57,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 2.826
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 167.697,
        "saikou": 8.93,
        "heikin": 4.14,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 2.852
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 238.88,
        "saikou": 8.74,
        "heikin": 2.51,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 2.83
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 199.804,
        "saikou": 8.74,
        "heikin": 2.46,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 2.798
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 201.704,
        "saikou": 8.35,
        "heikin": 2.28,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 3.028
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 220.532,
        "saikou": 8.35,
        "heikin": 2.02,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 2.992
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 237.206,
        "saikou": 7.93,
        "heikin": 2.01,
        "boshuAvg30d": 109.3,
        "heikinAvg30d": 2.731
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 281.006,
        "saikou": 7.93,
        "heikin": 3.06,
        "boshuAvg30d": 109.3,
        "heikinAvg30d": 2.769
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 363.646,
        "saikou": 7.93,
        "heikin": 3.17,
        "boshuAvg30d": 109.3,
        "heikinAvg30d": 2.68
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 367.13,
        "saikou": 7.93,
        "heikin": 3.15,
        "boshuAvg30d": 109.3,
        "heikinAvg30d": 2.816
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 365.23,
        "saikou": 7.27,
        "heikin": 2.82,
        "boshuAvg30d": 109.3,
        "heikinAvg30d": 2.649
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 359.747,
        "saikou": 7.27,
        "heikin": 2.84,
        "boshuAvg30d": 108.7,
        "heikinAvg30d": 2.677
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 367.125,
        "saikou": 7.27,
        "heikin": 2.52,
        "boshuAvg30d": 106.7,
        "heikinAvg30d": 2.347
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 357.12,
        "saikou": 7.95,
        "heikin": 3.48,
        "boshuAvg30d": 106.7,
        "heikinAvg30d": 2.159
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 337.444,
        "saikou": 3.27,
        "heikin": 2.01,
        "boshuAvg30d": 106.7,
        "heikinAvg30d": 1.986
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 339.428,
        "saikou": 2.49,
        "heikin": 1.61,
        "boshuAvg30d": 106.7,
        "heikinAvg30d": 1.895
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 331.522,
        "saikou": 2.49,
        "heikin": 1.55,
        "boshuAvg30d": 106.7,
        "heikinAvg30d": 1.801
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 329.538,
        "saikou": 2.49,
        "heikin": 1.32,
        "boshuAvg30d": 106.7,
        "heikinAvg30d": 1.837
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 335.448,
        "saikou": 2.89,
        "heikin": 1.35,
        "boshuAvg30d": 107.3,
        "heikinAvg30d": 1.666
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 335.448,
        "saikou": 3.38,
        "heikin": 1.69,
        "boshuAvg30d": 108.3,
        "heikinAvg30d": 1.934
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 333.464,
        "saikou": 2.49,
        "heikin": 1.24,
        "boshuAvg30d": 108.3,
        "heikinAvg30d": 1.99
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 335.448,
        "saikou": 3.45,
        "heikin": 1.67,
        "boshuAvg30d": 107.3,
        "heikinAvg30d": 1.969
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 333.548,
        "saikou": 2.81,
        "heikin": 1.32,
        "boshuAvg30d": 106.3,
        "heikinAvg30d": 1.871
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 312.999,
        "saikou": 2.49,
        "heikin": 1.15,
        "boshuAvg30d": 103.3,
        "heikinAvg30d": 1.936
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.15,
        "heikin": 1.84,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 0.994
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 1.021
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 1.93,
        "saikou": 1.65,
        "heikin": 1.65,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 1.088
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 1.93,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 1.046
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 0.962
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 1.0
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.25,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 1.084
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.15,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 1.282
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 1.155
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.45,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 1.257
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.05,
        "heikin": 2,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 1.459
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.05,
        "heikin": 2,
        "boshuAvg30d": 55.8,
        "heikinAvg30d": 1.477
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.88,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.779
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.6,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.49
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.526
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.419
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.672
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.35,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.404
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.3,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.812
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 3.99,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.927
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.95,
        "heikin": 5.75,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 4.049
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 4.158
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 4.05,
        "heikin": 3.95,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 3.314
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 4.1,
        "heikin": 4,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 3.106
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.6,
        "heikin": 4.55,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.511
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.64,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.241
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 5.65,
        "heikin": 5.6,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.419
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.85,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.878
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 3.95,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.852
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.7,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.707
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.85,
        "heikin": 5.65,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.492
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.65,
        "heikin": 6.19,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 4.118
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.68,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.106
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.45,
        "heikin": 3.3,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 2.756
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.45,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 2.59
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.93,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.528
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.45,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.44
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.65,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.554
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.39
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.805
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.047
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.713
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.45,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.666
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.35,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.743
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.56,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.175
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.6,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.672
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.365
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 60.4,
        "heikinAvg30d": 1.201
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 174.771,
        "saikou": 1.68,
        "heikin": 0.81,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 1.571
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 122.779,
        "saikou": 1.56,
        "heikin": 0.74,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 1.325
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 114.863,
        "saikou": 1.52,
        "heikin": 0.69,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 1.216
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 166.187,
        "saikou": 1.84,
        "heikin": 0.83,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 1.154
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 164.131,
        "saikou": 1.53,
        "heikin": 0.8,
        "boshuAvg30d": 128.2,
        "heikinAvg30d": 1.093
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 175.992,
        "saikou": 1.99,
        "heikin": 1.02,
        "boshuAvg30d": 127.9,
        "heikinAvg30d": 1.246
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 168.33,
        "saikou": 1.99,
        "heikin": 1.06,
        "boshuAvg30d": 128.2,
        "heikinAvg30d": 1.442
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 144.69,
        "saikou": 1.99,
        "heikin": 1.29,
        "boshuAvg30d": 128.2,
        "heikinAvg30d": 1.632
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 144.69,
        "saikou": 1.99,
        "heikin": 1.23,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 1.55
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 99.427,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 1.64
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 99.427,
        "saikou": 1.99,
        "heikin": 1.63,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 1.59
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 99.427,
        "saikou": 1.99,
        "heikin": 1.61,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 1.429
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 99.427,
        "saikou": 2.19,
        "heikin": 1.62,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 1.628
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 144.69,
        "saikou": 2.19,
        "heikin": 1.27,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.608
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 93.441,
        "saikou": 2.19,
        "heikin": 1.9,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 1.648
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 93.441,
        "saikou": 2.2,
        "heikin": 1.92,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 1.661
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 91.998,
        "saikou": 2.22,
        "heikin": 1.92,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 1.752
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 99.981,
        "saikou": 3.95,
        "heikin": 2.79,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 2.066
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 132.114,
        "saikou": 3,
        "heikin": 1.83,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.323
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 168.568,
        "saikou": 3.95,
        "heikin": 1.91,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.251
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 193.721,
        "saikou": 5.95,
        "heikin": 1.81,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.509
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 160.805,
        "saikou": 5.95,
        "heikin": 2.14,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 2.568
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 162.92,
        "saikou": 5.95,
        "heikin": 2.12,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.636
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 200.148,
        "saikou": 3,
        "heikin": 1.56,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.43
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 193.7,
        "saikou": 3,
        "heikin": 1.43,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.27
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 200.148,
        "saikou": 4.93,
        "heikin": 1.64,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.339
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 145.244,
        "saikou": 5.95,
        "heikin": 2.26,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.606
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 120.603,
        "saikou": 3,
        "heikin": 2.26,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.443
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 119.851,
        "saikou": 4.45,
        "heikin": 2.43,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.312
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 99.981,
        "saikou": 3,
        "heikin": 2.58,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.193
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 101.851,
        "saikou": 3.95,
        "heikin": 2.74,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.31
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 101.851,
        "saikou": 3.95,
        "heikin": 2.83,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.59
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 101.851,
        "saikou": 3.95,
        "heikin": 2.85,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.433
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 95.865,
        "saikou": 2.44,
        "heikin": 2.14,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.37
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 97.308,
        "saikou": 2.5,
        "heikin": 2.24,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.404
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 97.308,
        "saikou": 3.7,
        "heikin": 2.77,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.589
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 97.308,
        "saikou": 2.2,
        "heikin": 1.9,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.161
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 97.308,
        "saikou": 2.42,
        "heikin": 1.99,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.193
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 103.294,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.172
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 103.294,
        "saikou": 1.99,
        "heikin": 1.71,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 2.091
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 101.309,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.014
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 97.442,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 2.021
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 99.427,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 1.989
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 99.427,
        "saikou": 2,
        "heikin": 1.77,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 2.072
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 112.597,
        "saikou": 2,
        "heikin": 1.6,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 2.094
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 128.423,
        "saikou": 1.99,
        "heikin": 1.39,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 2.053
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 128.247,
        "saikou": 1.99,
        "heikin": 1.19,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.647
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 199.594,
        "saikou": 1.99,
        "heikin": 1.04,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 1.767
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 95.259,
        "saikou": 2.44,
        "heikin": 2.08,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.993
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 95.259,
        "saikou": 4.7,
        "heikin": 3.46,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.0
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 95.259,
        "saikou": 4.7,
        "heikin": 3.46,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.939
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 97.059,
        "saikou": 4.7,
        "heikin": 3.46,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.814
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 97.059,
        "saikou": 3.4,
        "heikin": 2.83,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.776
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 86.872,
        "saikou": 2.44,
        "heikin": 2.03,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.057
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 81.332,
        "saikou": 5.29,
        "heikin": 3.16,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.206
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 98.059,
        "saikou": 5.99,
        "heikin": 3.22,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.55
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 98.059,
        "saikou": 6.94,
        "heikin": 3.52,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.732
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 96.259,
        "saikou": 8.32,
        "heikin": 4.02,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.119
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 96.259,
        "saikou": 8.33,
        "heikin": 4.03,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.061
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 96.259,
        "saikou": 8.39,
        "heikin": 4.05,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.047
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 96.259,
        "saikou": 8.5,
        "heikin": 4.1,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 3.219
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 96.259,
        "saikou": 6.94,
        "heikin": 3.58,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 2.562
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 67.211,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 1.68
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 96.259,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 1.375
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 87.424,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 1.478
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 88.132,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 1.548
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 176.501,
        "saikou": 2.7,
        "heikin": 1.29,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.748
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 78.177,
        "saikou": 2.7,
        "heikin": 1.92,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 1.722
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 78.177,
        "saikou": 6,
        "heikin": 2.04,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.619
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 78.177,
        "saikou": 6,
        "heikin": 2.04,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.541
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 154.845,
        "saikou": 2.7,
        "heikin": 1.12,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.638
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 176.501,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.682
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 168.547,
        "saikou": 2.7,
        "heikin": 1.03,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.548
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 78.177,
        "saikou": 2.7,
        "heikin": 1.84,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.618
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 156.081,
        "saikou": 2.7,
        "heikin": 1.11,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.936
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 176.501,
        "saikou": 2.7,
        "heikin": 1.03,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.79
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 79.708,
        "saikou": 2.7,
        "heikin": 1.85,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.744
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 78.177,
        "saikou": 2.7,
        "heikin": 1.93,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.66
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 78.177,
        "saikou": 2.7,
        "heikin": 1.94,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 1.99
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 78.177,
        "saikou": 2.7,
        "heikin": 1.93,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.284
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 94.044,
        "saikou": 2.7,
        "heikin": 1.95,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.648
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 78.177,
        "saikou": 7.08,
        "heikin": 4.28,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 3.538
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 91.98,
        "saikou": 7.08,
        "heikin": 4.63,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.083
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 60.246,
        "saikou": 6.38,
        "heikin": 3.42,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.253
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 159.507,
        "saikou": 6.49,
        "heikin": 5.33,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.344
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 177.438,
        "saikou": 6,
        "heikin": 4.14,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.262
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 163.588,
        "saikou": 7.9,
        "heikin": 5.67,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 3.933
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 64.327,
        "saikou": 2.7,
        "heikin": 1.96,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 3.479
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 96.061,
        "saikou": 9.32,
        "heikin": 4.37,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.677
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 96.061,
        "saikou": 7.08,
        "heikin": 3.63,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 3.447
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 96.061,
        "saikou": 7.08,
        "heikin": 3.63,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.744
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 96.061,
        "saikou": 7.08,
        "heikin": 3.62,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.438
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 96.061,
        "saikou": 5.99,
        "heikin": 3.26,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.368
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 109.864,
        "saikou": 6.38,
        "heikin": 3.59,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.916
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 109.864,
        "saikou": 6.38,
        "heikin": 3.57,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.826
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 109.864,
        "saikou": 6.38,
        "heikin": 3.3,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 1.961
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.949
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.902
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.877
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.873
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.41,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.874
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.86
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.866
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 208,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.898
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.948
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.984
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 197.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 196.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.884
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 199.543,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.932
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.877
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.813
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.82
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.769
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 204.043,
        "saikou": 0.38,
        "heikin": 0.38,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.831
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.81,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.086
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.83,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.06
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.079
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 0.996
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.06
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.075
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.003
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.06
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.065
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.83,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.103
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.81,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.124
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.059
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.108
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.112
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.2
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 118.043,
        "saikou": 1.6,
        "heikin": 1.18,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 1.329
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 170.543,
        "saikou": 1.6,
        "heikin": 1.21,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.459
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 168.543,
        "saikou": 1.6,
        "heikin": 1.18,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.458
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 187.543,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.445
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 186.543,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.483
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 169.543,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.353
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.369
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 183.543,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.35
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.338
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.001
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 200.543,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.988
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 200.543,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.989
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.971
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.013
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.993
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 171.342,
        "saikou": 7.79,
        "heikin": 5.45,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 4.583
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 182.891,
        "saikou": 7.64,
        "heikin": 6.12,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 4.082
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 183.449,
        "saikou": 7.6,
        "heikin": 6.11,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.93
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 183.448,
        "saikou": 7.64,
        "heikin": 6.15,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.697
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 183.446,
        "saikou": 7.61,
        "heikin": 6.09,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.605
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 183.445,
        "saikou": 7.86,
        "heikin": 5.36,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.968
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 184.883,
        "saikou": 7.88,
        "heikin": 5.36,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.239
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 181.053,
        "saikou": 8.24,
        "heikin": 5.62,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.728
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 176.127,
        "saikou": 8.59,
        "heikin": 5.82,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.97
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 233.978,
        "saikou": 8.87,
        "heikin": 6,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 5.438
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 233.976,
        "saikou": 8.87,
        "heikin": 6,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 5.606
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 232.574,
        "saikou": 8.89,
        "heikin": 6,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 5.429
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 238.549,
        "saikou": 8.89,
        "heikin": 5.87,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 5.029
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 178.647,
        "saikou": 8.71,
        "heikin": 5.78,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 4.231
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 179.655,
        "saikou": 7.79,
        "heikin": 5.23,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 3.12
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 173.553,
        "saikou": 6.84,
        "heikin": 4.56,
        "boshuAvg30d": 174.4,
        "heikinAvg30d": 2.98
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 219.5,
        "saikou": 4.37,
        "heikin": 2.87,
        "boshuAvg30d": 174.4,
        "heikinAvg30d": 3.104
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 188.498,
        "saikou": 3.27,
        "heikin": 2.13,
        "boshuAvg30d": 174.4,
        "heikinAvg30d": 3.265
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 189.198,
        "saikou": 2.74,
        "heikin": 2.09,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 3.311
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 156.63,
        "saikou": 8.99,
        "heikin": 1.76,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 3.154
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 187.753,
        "saikou": 8.99,
        "heikin": 1.63,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.078
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 181.484,
        "saikou": 8.99,
        "heikin": 1.59,
        "boshuAvg30d": 180.1,
        "heikinAvg30d": 3.085
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 184.089,
        "saikou": 1.71,
        "heikin": 1.31,
        "boshuAvg30d": 180.4,
        "heikinAvg30d": 3.002
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 182.114,
        "saikou": 1.6,
        "heikin": 1.24,
        "boshuAvg30d": 180.4,
        "heikinAvg30d": 3.02
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 122.896,
        "saikou": 1.22,
        "heikin": 0.89,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 2.498
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 144.493,
        "saikou": 1.61,
        "heikin": 1.14,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 2.695
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 150.356,
        "saikou": 5.11,
        "heikin": 1.86,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 3.12
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 154.322,
        "saikou": 8.99,
        "heikin": 2.23,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 3.726
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 148.647,
        "saikou": 8.99,
        "heikin": 2.44,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 3.792
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 214.647,
        "saikou": 8.99,
        "heikin": 3.32,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 4.233
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 250.547,
        "saikou": 7.92,
        "heikin": 6.21,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 4.621
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 162.561,
        "saikou": 8.95,
        "heikin": 6.48,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 5.094
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 173.112,
        "saikou": 10,
        "heikin": 7.67,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 6.117
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 168.137,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 6.654
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 212.744,
        "saikou": 10,
        "heikin": 8.47,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.773
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 211.744,
        "saikou": 10,
        "heikin": 8.49,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.835
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 205.013,
        "saikou": 10,
        "heikin": 8.87,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 6.817
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 216.829,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 6.759
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 224.87,
        "saikou": 10,
        "heikin": 7.07,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 6.554
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 234.696,
        "saikou": 9.61,
        "heikin": 6.76,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 6.126
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 176.332,
        "saikou": 9.38,
        "heikin": 6.39,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 6.048
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 178.256,
        "saikou": 9.11,
        "heikin": 6.2,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 5.704
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 178.257,
        "saikou": 8.88,
        "heikin": 6,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 5.624
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 176.355,
        "saikou": 8.31,
        "heikin": 5.6,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 5.621
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 177.378,
        "saikou": 8.65,
        "heikin": 5.88,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 5.813
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 179.276,
        "saikou": 8.8,
        "heikin": 5.96,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 5.435
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 183.924,
        "saikou": 8.89,
        "heikin": 5.96,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 5.305
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 186.985,
        "saikou": 8.14,
        "heikin": 5.52,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 4.502
      }
    ]
  }
};
