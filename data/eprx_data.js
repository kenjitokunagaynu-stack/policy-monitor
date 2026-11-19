// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/20〜2026/11/18）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-19",
  "fetchedAt": "2026-11-19",
  "avgWindowLabel": "過去30日平均（2026/10/20〜2026/11/18）",
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
      "boshu": 1017,
      "ouatsu": 1618.825,
      "saikou": 9.41,
      "heikin": 2.3,
      "boshuAvg30d": 1142.9,
      "heikinAvg30d": 2.636
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1017,
      "ouatsu": 1608.801,
      "saikou": 9.48,
      "heikin": 2.24,
      "boshuAvg30d": 1142.9,
      "heikinAvg30d": 2.589
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1017,
      "ouatsu": 1647.457,
      "saikou": 9.6,
      "heikin": 2.39,
      "boshuAvg30d": 1142.9,
      "heikinAvg30d": 2.548
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1016,
      "ouatsu": 1658.687,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1142.3,
      "heikinAvg30d": 2.495
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1010,
      "ouatsu": 1626.273,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1137.5,
      "heikinAvg30d": 2.54
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1010,
      "ouatsu": 1529.965,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1137.1,
      "heikinAvg30d": 2.6
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1007,
      "ouatsu": 1635.948,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1139.8,
      "heikinAvg30d": 2.727
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1011,
      "ouatsu": 1595.069,
      "saikou": 10,
      "heikin": 2.52,
      "boshuAvg30d": 1143.0,
      "heikinAvg30d": 2.96
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1011,
      "ouatsu": 1597.846,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1143.8,
      "heikinAvg30d": 3.035
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1013,
      "ouatsu": 1577.736,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1145.4,
      "heikinAvg30d": 3.06
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1013,
      "ouatsu": 1333.057,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1145.4,
      "heikinAvg30d": 3.134
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1013,
      "ouatsu": 1409.678,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1145.4,
      "heikinAvg30d": 3.125
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1072,
      "ouatsu": 1277.104,
      "saikou": 9.9,
      "heikin": 3.27,
      "boshuAvg30d": 1204.8,
      "heikinAvg30d": 3.235
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1097,
      "ouatsu": 1230.321,
      "saikou": 9.91,
      "heikin": 3.91,
      "boshuAvg30d": 1229.0,
      "heikinAvg30d": 3.264
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1116,
      "ouatsu": 1076.001,
      "saikou": 9.9,
      "heikin": 3.23,
      "boshuAvg30d": 1248.8,
      "heikinAvg30d": 3.236
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1131,
      "ouatsu": 1287.163,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1265.0,
      "heikinAvg30d": 3.006
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1131,
      "ouatsu": 1454.013,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1265.3,
      "heikinAvg30d": 2.866
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1131,
      "ouatsu": 1418.855,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1269.2,
      "heikinAvg30d": 2.885
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1146,
      "ouatsu": 1364.55,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1216.6,
      "heikinAvg30d": 2.835
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1151,
      "ouatsu": 1628.895,
      "saikou": 10,
      "heikin": 3.53,
      "boshuAvg30d": 1220.8,
      "heikinAvg30d": 2.8
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1155,
      "ouatsu": 1543.906,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1225.8,
      "heikinAvg30d": 2.743
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1159,
      "ouatsu": 1516.371,
      "saikou": 10,
      "heikin": 3.8,
      "boshuAvg30d": 1228.2,
      "heikinAvg30d": 2.766
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1153,
      "ouatsu": 1474.27,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1223.0,
      "heikinAvg30d": 2.75
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1153,
      "ouatsu": 1541.741,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1222.6,
      "heikinAvg30d": 2.819
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1134,
      "ouatsu": 1461.235,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1202.9,
      "heikinAvg30d": 2.672
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1134,
      "ouatsu": 1485.601,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1202.9,
      "heikinAvg30d": 2.721
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1134,
      "ouatsu": 1561.189,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1202.9,
      "heikinAvg30d": 2.819
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1130,
      "ouatsu": 1399.984,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1199.4,
      "heikinAvg30d": 2.946
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1129,
      "ouatsu": 1399.141,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1197.6,
      "heikinAvg30d": 3.03
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1123,
      "ouatsu": 1290.554,
      "saikou": 9.99,
      "heikin": 3.56,
      "boshuAvg30d": 1191.6,
      "heikinAvg30d": 3.104
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1108,
      "ouatsu": 1340.594,
      "saikou": 9.88,
      "heikin": 3.06,
      "boshuAvg30d": 1252.3,
      "heikinAvg30d": 3.3
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1108,
      "ouatsu": 1535.833,
      "saikou": 9.91,
      "heikin": 3.4,
      "boshuAvg30d": 1252.0,
      "heikinAvg30d": 3.366
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1108,
      "ouatsu": 1685.594,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1252.1,
      "heikinAvg30d": 3.629
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1106,
      "ouatsu": 1606.17,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1250.5,
      "heikinAvg30d": 3.75
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1104,
      "ouatsu": 1715.547,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1242.2,
      "heikinAvg30d": 3.7
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1099,
      "ouatsu": 1577.493,
      "saikou": 10,
      "heikin": 3.53,
      "boshuAvg30d": 1233.3,
      "heikinAvg30d": 3.678
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1095,
      "ouatsu": 1622.484,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1227.9,
      "heikinAvg30d": 3.507
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1095,
      "ouatsu": 1677.377,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1227.9,
      "heikinAvg30d": 3.505
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1095,
      "ouatsu": 1681.975,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1227.9,
      "heikinAvg30d": 3.336
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1093,
      "ouatsu": 1648.15,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1226.7,
      "heikinAvg30d": 3.258
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1086,
      "ouatsu": 1630.809,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1219.3,
      "heikinAvg30d": 3.148
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1086,
      "ouatsu": 1695.267,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1219.3,
      "heikinAvg30d": 3.121
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 997,
      "ouatsu": 1606.919,
      "saikou": 10,
      "heikin": 2.19,
      "boshuAvg30d": 1132.7,
      "heikinAvg30d": 3.059
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1000,
      "ouatsu": 1510.583,
      "saikou": 9.77,
      "heikin": 2.52,
      "boshuAvg30d": 1135.7,
      "heikinAvg30d": 2.973
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 999,
      "ouatsu": 1670.72,
      "saikou": 9.5,
      "heikin": 2.48,
      "boshuAvg30d": 1138.5,
      "heikinAvg30d": 2.989
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 992,
      "ouatsu": 1727.691,
      "saikou": 9.82,
      "heikin": 2.64,
      "boshuAvg30d": 1129.3,
      "heikinAvg30d": 2.957
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 984,
      "ouatsu": 1549.122,
      "saikou": 9.79,
      "heikin": 2.55,
      "boshuAvg30d": 1121.3,
      "heikinAvg30d": 2.973
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 976,
      "ouatsu": 1552.644,
      "saikou": 10,
      "heikin": 2.27,
      "boshuAvg30d": 1113.0,
      "heikinAvg30d": 2.74
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
        "ouatsu": 112.918,
        "saikou": 9.08,
        "heikin": 2.04,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 2.828
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 112.918,
        "saikou": 9.48,
        "heikin": 1.59,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 3.065
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 112.918,
        "saikou": 9.6,
        "heikin": 1.93,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 2.901
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 112.918,
        "saikou": 9.37,
        "heikin": 3.03,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 3.131
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 115.918,
        "saikou": 9.8,
        "heikin": 3.23,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.165
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 115.918,
        "saikou": 9.28,
        "heikin": 2.03,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 2.839
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 115.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.145
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 115.918,
        "saikou": 9.4,
        "heikin": 1.3,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.882
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 115.918,
        "saikou": 9.4,
        "heikin": 1.12,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.75
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 115.918,
        "saikou": 1.35,
        "heikin": 1.35,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.691
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 115.918,
        "saikou": 1.59,
        "heikin": 1.59,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.666
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 115.918,
        "saikou": 1.85,
        "heikin": 1.84,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.567
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 112.918,
        "saikou": 9,
        "heikin": 3.29,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 3.844
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 155.398,
        "saikou": 9.91,
        "heikin": 4.94,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.887
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 112.918,
        "saikou": 9,
        "heikin": 2.76,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.338
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 155.398,
        "saikou": 9.91,
        "heikin": 3.84,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.134
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 112.918,
        "saikou": 9,
        "heikin": 2.88,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.472
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 155.398,
        "saikou": 7.1,
        "heikin": 2.12,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.86
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 122.918,
        "saikou": 7.8,
        "heikin": 2.82,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 3.704
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 194.398,
        "saikou": 7.75,
        "heikin": 2.26,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 3.341
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 151.918,
        "saikou": 9.3,
        "heikin": 2.06,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 3.193
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 155.398,
        "saikou": 9.91,
        "heikin": 4.8,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.302
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 112.918,
        "saikou": 9,
        "heikin": 3.19,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.561
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 189.398,
        "saikou": 6.8,
        "heikin": 2.15,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.51
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 146.918,
        "saikou": 1.74,
        "heikin": 1.73,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 3.31
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 148.908,
        "saikou": 8.64,
        "heikin": 2.16,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 3.058
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 201.268,
        "saikou": 7.55,
        "heikin": 1.87,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 3.565
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 120.968,
        "saikou": 7.9,
        "heikin": 1.85,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 4.289
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 161.258,
        "saikou": 9.91,
        "heikin": 2.19,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.31
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 112.958,
        "saikou": 7.5,
        "heikin": 2.5,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.619
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 114.908,
        "saikou": 1.4,
        "heikin": 1.02,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.776
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 146.358,
        "saikou": 9.91,
        "heikin": 5.1,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 5.282
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 157.358,
        "saikou": 9.91,
        "heikin": 4.23,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 5.891
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 92.908,
        "saikou": 2.41,
        "heikin": 2.39,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 5.752
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 132.358,
        "saikou": 2.57,
        "heikin": 2.54,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 5.082
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 48.358,
        "saikou": 9.91,
        "heikin": 9.52,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 5.145
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 8.9,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.588
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 9.12,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.831
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 82.208,
        "saikou": 9.91,
        "heikin": 9.49,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.552
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 8.9,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.721
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 8.81,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.413
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 112.94,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.081
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 115.94,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.061
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 115.94,
        "saikou": 9.4,
        "heikin": 2.13,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.067
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 174.24,
        "saikou": 9.3,
        "heikin": 2.66,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.848
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 176.208,
        "saikou": 9.45,
        "heikin": 2.55,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 3.878
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 166.908,
        "saikou": 9.6,
        "heikin": 3.65,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.459
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 164.24,
        "saikou": 9.91,
        "heikin": 2.82,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 3.382
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 50.893,
        "saikou": 5.65,
        "heikin": 3.42,
        "boshuAvg30d": 115.9,
        "heikinAvg30d": 5.116
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 61.563,
        "saikou": 5.67,
        "heikin": 2.89,
        "boshuAvg30d": 115.9,
        "heikinAvg30d": 5.285
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 82.791,
        "saikou": 6,
        "heikin": 3.24,
        "boshuAvg30d": 115.9,
        "heikinAvg30d": 5.503
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 84.787,
        "saikou": 10,
        "heikin": 6.86,
        "boshuAvg30d": 115.9,
        "heikinAvg30d": 5.457
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 75.559,
        "saikou": 10,
        "heikin": 9.12,
        "boshuAvg30d": 115.9,
        "heikinAvg30d": 5.414
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 76.909,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 115.9,
        "heikinAvg30d": 5.153
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 97.751,
        "saikou": 6.37,
        "heikin": 3.67,
        "boshuAvg30d": 120.6,
        "heikinAvg30d": 5.271
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 99.251,
        "saikou": 6.35,
        "heikin": 3.61,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 4.923
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 103.249,
        "saikou": 6.26,
        "heikin": 4.37,
        "boshuAvg30d": 120.6,
        "heikinAvg30d": 4.736
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 103.249,
        "saikou": 5.32,
        "heikin": 3.43,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 4.841
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 103.249,
        "saikou": 5.13,
        "heikin": 3.42,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 4.935
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 99.634,
        "saikou": 4.87,
        "heikin": 2.99,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 4.857
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 103.249,
        "saikou": 5.06,
        "heikin": 3.23,
        "boshuAvg30d": 128.2,
        "heikinAvg30d": 4.91
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 101.749,
        "saikou": 5.31,
        "heikin": 3.66,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 4.759
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 103.249,
        "saikou": 9.72,
        "heikin": 6.07,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 5.281
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 101.785,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 137.6,
        "heikinAvg30d": 5.252
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 103.249,
        "saikou": 8.25,
        "heikin": 5.34,
        "boshuAvg30d": 137.6,
        "heikinAvg30d": 5.206
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 113.785,
        "saikou": 10,
        "heikin": 7,
        "boshuAvg30d": 137.6,
        "heikinAvg30d": 5.267
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 113.345,
        "saikou": 10,
        "heikin": 7.07,
        "boshuAvg30d": 69.0,
        "heikinAvg30d": 4.825
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 125.345,
        "saikou": 10,
        "heikin": 5.18,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 4.922
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 114.675,
        "saikou": 10,
        "heikin": 6.07,
        "boshuAvg30d": 71.6,
        "heikinAvg30d": 4.933
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 114.675,
        "saikou": 10,
        "heikin": 6.21,
        "boshuAvg30d": 72.2,
        "heikinAvg30d": 5.181
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 120.626,
        "saikou": 10,
        "heikin": 6.46,
        "boshuAvg30d": 72.6,
        "heikinAvg30d": 5.167
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 118.976,
        "saikou": 10,
        "heikin": 6.76,
        "boshuAvg30d": 72.6,
        "heikinAvg30d": 5.273
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 147,
        "ouatsu": 120.57,
        "saikou": 10,
        "heikin": 7.12,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 5.453
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 147,
        "ouatsu": 122.566,
        "saikou": 10,
        "heikin": 6.12,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 5.387
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 147,
        "ouatsu": 135.232,
        "saikou": 10,
        "heikin": 5.14,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 4.614
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 146,
        "ouatsu": 135.232,
        "saikou": 10,
        "heikin": 5.24,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 5.047
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 146,
        "ouatsu": 137.032,
        "saikou": 10,
        "heikin": 4.92,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.958
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 145,
        "ouatsu": 99,
        "saikou": 6.1,
        "heikin": 4.22,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 4.528
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 100.996,
        "saikou": 3.63,
        "heikin": 3.4,
        "boshuAvg30d": 136.6,
        "heikinAvg30d": 4.847
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 89.032,
        "saikou": 2.07,
        "heikin": 1.76,
        "boshuAvg30d": 136.6,
        "heikinAvg30d": 4.657
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 89.032,
        "saikou": 4.58,
        "heikin": 3.81,
        "boshuAvg30d": 136.6,
        "heikinAvg30d": 4.495
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 87.532,
        "saikou": 4.39,
        "heikin": 3.31,
        "boshuAvg30d": 136.6,
        "heikinAvg30d": 4.345
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 87.036,
        "saikou": 4.39,
        "heikin": 3.64,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 4.646
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 85.882,
        "saikou": 9.7,
        "heikin": 4.13,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 3.985
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 85.035,
        "saikou": 4.83,
        "heikin": 3.16,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 3.55
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 83.535,
        "saikou": 4.39,
        "heikin": 3.04,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 3.227
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 87,
        "saikou": 4.39,
        "heikin": 2.8,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 3.189
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 85.004,
        "saikou": 4.45,
        "heikin": 2.83,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 3.469
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 72.375,
        "saikou": 4.48,
        "heikin": 3.5,
        "boshuAvg30d": 132.6,
        "heikinAvg30d": 3.453
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 83.045,
        "saikou": 4.98,
        "heikin": 3.18,
        "boshuAvg30d": 132.6,
        "heikinAvg30d": 3.526
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 76.33,
        "saikou": 5.93,
        "heikin": 4.79,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 3.335
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 88.33,
        "saikou": 6.59,
        "heikin": 3.82,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 3.809
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 86.334,
        "saikou": 6.09,
        "heikin": 3.68,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 3.806
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 88.33,
        "saikou": 4.73,
        "heikin": 4.24,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 4.433
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 88.33,
        "saikou": 4.95,
        "heikin": 3.8,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 4.282
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 85.216,
        "saikou": 10,
        "heikin": 6.74,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 4.905
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 157,
        "ouatsu": 614.36,
        "saikou": 2.38,
        "heikin": 1.05,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 2.301
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 157,
        "ouatsu": 612.01,
        "saikou": 1.65,
        "heikin": 0.8,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 2.162
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 157,
        "ouatsu": 614.845,
        "saikou": 6.28,
        "heikin": 0.99,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 2.366
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 157,
        "ouatsu": 610.341,
        "saikou": 0.99,
        "heikin": 0.54,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 2.084
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 155,
        "ouatsu": 621.471,
        "saikou": 1.19,
        "heikin": 0.6,
        "boshuAvg30d": 240.7,
        "heikinAvg30d": 2.123
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 155,
        "ouatsu": 573.699,
        "saikou": 5.86,
        "heikin": 2.34,
        "boshuAvg30d": 240.3,
        "heikinAvg30d": 2.078
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 153,
        "ouatsu": 588.545,
        "saikou": 3.46,
        "heikin": 1.72,
        "boshuAvg30d": 238.3,
        "heikinAvg30d": 2.08
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 155,
        "ouatsu": 622.678,
        "saikou": 6.19,
        "heikin": 0.8,
        "boshuAvg30d": 240.3,
        "heikinAvg30d": 2.298
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 155,
        "ouatsu": 610.487,
        "saikou": 0.84,
        "heikin": 0.52,
        "boshuAvg30d": 240.3,
        "heikinAvg30d": 2.493
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 156,
        "ouatsu": 610.002,
        "saikou": 5.68,
        "heikin": 2.09,
        "boshuAvg30d": 241.3,
        "heikinAvg30d": 2.288
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 156,
        "ouatsu": 468.313,
        "saikou": 5.71,
        "heikin": 1.33,
        "boshuAvg30d": 241.3,
        "heikinAvg30d": 2.327
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 156,
        "ouatsu": 463.167,
        "saikou": 2,
        "heikin": 0.87,
        "boshuAvg30d": 241.3,
        "heikinAvg30d": 2.456
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 176,
        "ouatsu": 367.493,
        "saikou": 4.15,
        "heikin": 1.33,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 2.723
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 184,
        "ouatsu": 345.856,
        "saikou": 5.47,
        "heikin": 2.77,
        "boshuAvg30d": 268.9,
        "heikinAvg30d": 2.817
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 188,
        "ouatsu": 378.652,
        "saikou": 4.78,
        "heikin": 2.48,
        "boshuAvg30d": 273.3,
        "heikinAvg30d": 2.791
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 193,
        "ouatsu": 453.218,
        "saikou": 3.76,
        "heikin": 2.11,
        "boshuAvg30d": 278.6,
        "heikinAvg30d": 2.675
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 193,
        "ouatsu": 524.058,
        "saikou": 2.54,
        "heikin": 1.86,
        "boshuAvg30d": 278.9,
        "heikinAvg30d": 2.301
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 193,
        "ouatsu": 466.341,
        "saikou": 3.99,
        "heikin": 2.05,
        "boshuAvg30d": 282.8,
        "heikinAvg30d": 2.699
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 183,
        "ouatsu": 440.795,
        "saikou": 2.58,
        "heikin": 1.57,
        "boshuAvg30d": 273.6,
        "heikinAvg30d": 2.235
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 183,
        "ouatsu": 597.848,
        "saikou": 2.95,
        "heikin": 1.73,
        "boshuAvg30d": 273.6,
        "heikinAvg30d": 2.248
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 183,
        "ouatsu": 596.895,
        "saikou": 2.52,
        "heikin": 1.32,
        "boshuAvg30d": 274.2,
        "heikinAvg30d": 2.231
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 183,
        "ouatsu": 590.288,
        "saikou": 3.33,
        "heikin": 1.73,
        "boshuAvg30d": 273.8,
        "heikinAvg30d": 2.174
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 586.998,
        "saikou": 4.51,
        "heikin": 1.74,
        "boshuAvg30d": 270.9,
        "heikinAvg30d": 2.275
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 573.641,
        "saikou": 5,
        "heikin": 1.73,
        "boshuAvg30d": 270.9,
        "heikinAvg30d": 2.471
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 178,
        "ouatsu": 534.876,
        "saikou": 2.62,
        "heikin": 0.52,
        "boshuAvg30d": 268.1,
        "heikinAvg30d": 1.986
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 178,
        "ouatsu": 550.562,
        "saikou": 1.9,
        "heikin": 0.45,
        "boshuAvg30d": 268.1,
        "heikinAvg30d": 2.021
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 178,
        "ouatsu": 562.154,
        "saikou": 4.78,
        "heikin": 1.42,
        "boshuAvg30d": 268.1,
        "heikinAvg30d": 2.237
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 409.36,
        "saikou": 3.94,
        "heikin": 1.45,
        "boshuAvg30d": 267.8,
        "heikinAvg30d": 2.119
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 177,
        "ouatsu": 412.521,
        "saikou": 7.12,
        "heikin": 2.02,
        "boshuAvg30d": 266.8,
        "heikinAvg30d": 2.317
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 177,
        "ouatsu": 473.885,
        "saikou": 5.81,
        "heikin": 3.6,
        "boshuAvg30d": 266.4,
        "heikinAvg30d": 2.289
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 175,
        "ouatsu": 578.363,
        "saikou": 3.69,
        "heikin": 1.84,
        "boshuAvg30d": 264.8,
        "heikinAvg30d": 2.391
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 175,
        "ouatsu": 696.454,
        "saikou": 2.01,
        "heikin": 0.88,
        "boshuAvg30d": 264.4,
        "heikinAvg30d": 2.282
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 175,
        "ouatsu": 654.654,
        "saikou": 5.6,
        "heikin": 1.41,
        "boshuAvg30d": 264.1,
        "heikinAvg30d": 2.275
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 175,
        "ouatsu": 573.307,
        "saikou": 4.39,
        "heikin": 1.49,
        "boshuAvg30d": 264.1,
        "heikinAvg30d": 2.252
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 175,
        "ouatsu": 631.973,
        "saikou": 4,
        "heikin": 1.26,
        "boshuAvg30d": 262.1,
        "heikinAvg30d": 2.171
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 175,
        "ouatsu": 562.761,
        "saikou": 1.65,
        "heikin": 1.12,
        "boshuAvg30d": 258.3,
        "heikinAvg30d": 2.318
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 177,
        "ouatsu": 556.475,
        "saikou": 1.53,
        "heikin": 0.85,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 2.361
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 177,
        "ouatsu": 597.084,
        "saikou": 1.53,
        "heikin": 0.86,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 2.264
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 177,
        "ouatsu": 570.896,
        "saikou": 1.53,
        "heikin": 0.86,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 2.354
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 177,
        "ouatsu": 574.876,
        "saikou": 1.54,
        "heikin": 0.85,
        "boshuAvg30d": 260.0,
        "heikinAvg30d": 2.132
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 176,
        "ouatsu": 570.782,
        "saikou": 3.55,
        "heikin": 0.89,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.106
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 176,
        "ouatsu": 541.41,
        "saikou": 4.32,
        "heikin": 0.96,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.329
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 175,
        "ouatsu": 471.485,
        "saikou": 1.91,
        "heikin": 0.76,
        "boshuAvg30d": 258.0,
        "heikinAvg30d": 2.184
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 175,
        "ouatsu": 443.616,
        "saikou": 1.92,
        "heikin": 0.65,
        "boshuAvg30d": 258.0,
        "heikinAvg30d": 2.121
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 175,
        "ouatsu": 589.53,
        "saikou": 3.17,
        "heikin": 1.07,
        "boshuAvg30d": 261.0,
        "heikinAvg30d": 2.327
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 173,
        "ouatsu": 566.141,
        "saikou": 1.95,
        "heikin": 0.78,
        "boshuAvg30d": 256.0,
        "heikinAvg30d": 2.318
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 171,
        "ouatsu": 478.719,
        "saikou": 4.11,
        "heikin": 1.07,
        "boshuAvg30d": 254.3,
        "heikinAvg30d": 2.766
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 467.319,
        "saikou": 3.87,
        "heikin": 1.34,
        "boshuAvg30d": 252.7,
        "heikinAvg30d": 2.64
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 60,
        "ouatsu": 318.519,
        "saikou": 4.16,
        "heikin": 2.28,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.8
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 60,
        "ouatsu": 235.295,
        "saikou": 5.67,
        "heikin": 2.3,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.888
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 60,
        "ouatsu": 279.625,
        "saikou": 6.46,
        "heikin": 2.28,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.913
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 264.076,
        "saikou": 6.47,
        "heikin": 2.06,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.975
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 59,
        "ouatsu": 251.965,
        "saikou": 8.34,
        "heikin": 2.46,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 1.976
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 251.965,
        "saikou": 7.54,
        "heikin": 2.75,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.948
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 273.818,
        "saikou": 6.87,
        "heikin": 2.71,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.871
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 244.682,
        "saikou": 5.52,
        "heikin": 2.51,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.828
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 234.061,
        "saikou": 6.14,
        "heikin": 2.44,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.745
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 224.169,
        "saikou": 5.52,
        "heikin": 2.31,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.79
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 224.299,
        "saikou": 6.52,
        "heikin": 2.4,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.688
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 222.759,
        "saikou": 8.67,
        "heikin": 2.79,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.631
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 224.299,
        "saikou": 8.67,
        "heikin": 2.91,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 1.834
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 72,
        "ouatsu": 161.151,
        "saikou": 9.27,
        "heikin": 2.33,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 1.765
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 75,
        "ouatsu": 113.091,
        "saikou": 9.27,
        "heikin": 2.2,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 2.103
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 77,
        "ouatsu": 154.483,
        "saikou": 9.27,
        "heikin": 2.76,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 2.125
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 77,
        "ouatsu": 156.473,
        "saikou": 9.27,
        "heikin": 2.55,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 2.17
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 77,
        "ouatsu": 152.492,
        "saikou": 9.27,
        "heikin": 2.34,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 2.248
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 82,
        "ouatsu": 156.38,
        "saikou": 9.47,
        "heikin": 2.32,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.421
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 82,
        "ouatsu": 167.983,
        "saikou": 9.47,
        "heikin": 2.6,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.411
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 82,
        "ouatsu": 170.019,
        "saikou": 9.47,
        "heikin": 2.68,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.443
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 82,
        "ouatsu": 173.963,
        "saikou": 9.57,
        "heikin": 2.87,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.458
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 81,
        "ouatsu": 185.672,
        "saikou": 9.57,
        "heikin": 3.26,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 2.554
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 80,
        "ouatsu": 191.748,
        "saikou": 9.57,
        "heikin": 3.75,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 2.791
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 76,
        "ouatsu": 167.96,
        "saikou": 9.57,
        "heikin": 4.6,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 2.956
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 76,
        "ouatsu": 177.856,
        "saikou": 9.57,
        "heikin": 4.77,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 2.935
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 76,
        "ouatsu": 191.649,
        "saikou": 9.47,
        "heikin": 3.36,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 2.444
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 76,
        "ouatsu": 209.824,
        "saikou": 9.47,
        "heikin": 3.31,
        "boshuAvg30d": 162.5,
        "heikinAvg30d": 2.559
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 76,
        "ouatsu": 194.286,
        "saikou": 9.47,
        "heikin": 3.56,
        "boshuAvg30d": 162.5,
        "heikinAvg30d": 2.628
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 76,
        "ouatsu": 133.173,
        "saikou": 9.47,
        "heikin": 3.72,
        "boshuAvg30d": 162.5,
        "heikinAvg30d": 2.518
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 74,
        "ouatsu": 144.173,
        "saikou": 9.37,
        "heikin": 3.97,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 2.73
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 74,
        "ouatsu": 205.633,
        "saikou": 9.37,
        "heikin": 4.41,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 2.788
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 74,
        "ouatsu": 395.718,
        "saikou": 6.67,
        "heikin": 2.76,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 2.767
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 73,
        "ouatsu": 420.269,
        "saikou": 6.67,
        "heikin": 2.99,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 3.053
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 73,
        "ouatsu": 422.259,
        "saikou": 6.67,
        "heikin": 3.01,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 2.899
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 72,
        "ouatsu": 397.085,
        "saikou": 6.67,
        "heikin": 2.88,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 2.633
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 406.461,
        "saikou": 6.67,
        "heikin": 2.87,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.443
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 422.245,
        "saikou": 6.67,
        "heikin": 2.74,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.457
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 463.683,
        "saikou": 6.67,
        "heikin": 2.26,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.087
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 463.683,
        "saikou": 6.67,
        "heikin": 2.38,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.089
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 70,
        "ouatsu": 441.818,
        "saikou": 6.67,
        "heikin": 2.21,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 1.869
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 70,
        "ouatsu": 433.836,
        "saikou": 6.67,
        "heikin": 2.17,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 1.78
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 72,
        "ouatsu": 437.771,
        "saikou": 6.67,
        "heikin": 2.29,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 1.72
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 72,
        "ouatsu": 325.519,
        "saikou": 6.67,
        "heikin": 2.17,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 1.837
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 72,
        "ouatsu": 325.233,
        "saikou": 6.67,
        "heikin": 2.41,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 1.852
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 325.233,
        "saikou": 6.67,
        "heikin": 2.4,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 1.996
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 323.343,
        "saikou": 6.67,
        "heikin": 1.81,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 1.891
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 319.943,
        "saikou": 5.69,
        "heikin": 1.33,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 1.972
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 6.54,
        "saikou": 7.36,
        "heikin": 5.31,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 3.041
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 8.79,
        "heikin": 6.26,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 2.818
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 5.96,
        "heikin": 5.87,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 2.205
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 26.9,
        "saikou": 6.12,
        "heikin": 6.03,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 2.632
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 28.898,
        "saikou": 6.22,
        "heikin": 6.22,
        "boshuAvg30d": 58.8,
        "heikinAvg30d": 2.49
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.79,
        "heikin": 8.79,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 2.388
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 3.691
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 14.754,
        "saikou": 10,
        "heikin": 9.82,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 3.312
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 23.844,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 3.248
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.62,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 3.641
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.47,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 3.736
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 22.9,
        "saikou": 10,
        "heikin": 9.71,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 3.37
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.37,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 4.048
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.75,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 3.707
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.37,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 4.441
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.35,
        "heikin": 9.1,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 3.9
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 6.238,
        "saikou": 9.35,
        "heikin": 8.93,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 4.29
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.35,
        "heikin": 9.17,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 4.138
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.43,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 4.955
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 5.212
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 5.636
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 7.47,
        "saikou": 9.99,
        "heikin": 8.3,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 5.914
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 5.366
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 5.12
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 20.998,
        "saikou": 9.99,
        "heikin": 1.3,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 3.59
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 3.862
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 5.251
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 4.461
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 5.467
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.54,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 5.307
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.85,
        "heikin": 9.51,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 5.97
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.35,
        "heikin": 9.27,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 6.595
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 6.34,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 5.981
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 6.53,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 5.753
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 9.07,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 5.828
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 7.66,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 5.807
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 5.183
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 5.817
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.95,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 4.676
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 4.9,
        "heikin": 4.9,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 5.086
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 4.505
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 4.528
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.85,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 4.278
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 8.77,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 3.953
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.86,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 4.164
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.93,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 3.95
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.35,
        "heikin": 9.05,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 3.946
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 5.88,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.897
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 77.219,
        "saikou": 2.79,
        "heikin": 2.79,
        "boshuAvg30d": 190.7,
        "heikinAvg30d": 2.58
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 117.817,
        "saikou": 3.81,
        "heikin": 2.31,
        "boshuAvg30d": 190.7,
        "heikinAvg30d": 1.997
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 90.248,
        "saikou": 8.5,
        "heikin": 3.35,
        "boshuAvg30d": 190.7,
        "heikinAvg30d": 1.847
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 117.708,
        "saikou": 3.94,
        "heikin": 2.33,
        "boshuAvg30d": 190.7,
        "heikinAvg30d": 1.937
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 117.708,
        "saikou": 2.79,
        "heikin": 1.99,
        "boshuAvg30d": 189.7,
        "heikinAvg30d": 2.217
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 94.097,
        "saikou": 9,
        "heikin": 4.66,
        "boshuAvg30d": 189.7,
        "heikinAvg30d": 2.612
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 105.972,
        "saikou": 8.9,
        "heikin": 3.73,
        "boshuAvg30d": 189.7,
        "heikinAvg30d": 2.763
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 105.972,
        "saikou": 9.98,
        "heikin": 5.89,
        "boshuAvg30d": 189.7,
        "heikinAvg30d": 2.982
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 105.972,
        "saikou": 9,
        "heikin": 6.02,
        "boshuAvg30d": 190.7,
        "heikinAvg30d": 2.899
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 102.105,
        "saikou": 9,
        "heikin": 5.3,
        "boshuAvg30d": 190.7,
        "heikinAvg30d": 2.717
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 54.68,
        "saikou": 9.99,
        "heikin": 7.17,
        "boshuAvg30d": 190.7,
        "heikinAvg30d": 2.656
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 54.68,
        "saikou": 9.06,
        "heikin": 8.33,
        "boshuAvg30d": 190.7,
        "heikinAvg30d": 2.62
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 58.547,
        "saikou": 9.62,
        "heikin": 8.99,
        "boshuAvg30d": 201.1,
        "heikinAvg30d": 2.628
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 58.547,
        "saikou": 9.64,
        "heikin": 8.8,
        "boshuAvg30d": 205.1,
        "heikinAvg30d": 2.724
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 58.547,
        "saikou": 9.83,
        "heikin": 8.98,
        "boshuAvg30d": 210.1,
        "heikinAvg30d": 3.264
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 58.547,
        "saikou": 9.79,
        "heikin": 8.87,
        "boshuAvg30d": 212.5,
        "heikinAvg30d": 3.354
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 58.547,
        "saikou": 9.8,
        "heikin": 8.87,
        "boshuAvg30d": 212.5,
        "heikinAvg30d": 3.291
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 58.547,
        "saikou": 9.8,
        "heikin": 8.87,
        "boshuAvg30d": 212.5,
        "heikinAvg30d": 3.799
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 58.547,
        "saikou": 9.99,
        "heikin": 9.32,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 3.866
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 58.547,
        "saikou": 9.99,
        "heikin": 9.32,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 3.82
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 58.547,
        "saikou": 9.99,
        "heikin": 9.32,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 3.613
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 58.547,
        "saikou": 9.99,
        "heikin": 9.32,
        "boshuAvg30d": 221.3,
        "heikinAvg30d": 3.65
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 60.532,
        "saikou": 9.99,
        "heikin": 9.18,
        "boshuAvg30d": 219.7,
        "heikinAvg30d": 3.613
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 60.532,
        "saikou": 9.99,
        "heikin": 9.18,
        "boshuAvg30d": 220.3,
        "heikinAvg30d": 3.338
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 76.151,
        "saikou": 9.99,
        "heikin": 6.47,
        "boshuAvg30d": 218.7,
        "heikinAvg30d": 2.975
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 84.143,
        "saikou": 9.99,
        "heikin": 6.7,
        "boshuAvg30d": 218.7,
        "heikinAvg30d": 3.086
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 60.532,
        "saikou": 9.99,
        "heikin": 9.16,
        "boshuAvg30d": 218.7,
        "heikinAvg30d": 3.624
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 60.532,
        "saikou": 9.99,
        "heikin": 9.17,
        "boshuAvg30d": 218.7,
        "heikinAvg30d": 3.612
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 60.532,
        "saikou": 9.99,
        "heikin": 9.19,
        "boshuAvg30d": 218.7,
        "heikinAvg30d": 3.912
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 60.532,
        "saikou": 9.99,
        "heikin": 8.95,
        "boshuAvg30d": 218.7,
        "heikinAvg30d": 3.753
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 60.532,
        "saikou": 9.88,
        "heikin": 8.92,
        "boshuAvg30d": 218.3,
        "heikinAvg30d": 4.014
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 60.532,
        "saikou": 9.8,
        "heikin": 8.77,
        "boshuAvg30d": 218.3,
        "heikinAvg30d": 4.103
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 104.09,
        "saikou": 9.98,
        "heikin": 5.2,
        "boshuAvg30d": 218.3,
        "heikinAvg30d": 3.908
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 104.09,
        "saikou": 9,
        "heikin": 5.15,
        "boshuAvg30d": 218.3,
        "heikinAvg30d": 3.5
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 107.957,
        "saikou": 9,
        "heikin": 5.85,
        "boshuAvg30d": 214.0,
        "heikinAvg30d": 3.692
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 104.09,
        "saikou": 9,
        "heikin": 4.85,
        "boshuAvg30d": 213.0,
        "heikinAvg30d": 3.655
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 105.997,
        "saikou": 8,
        "heikin": 4.11,
        "boshuAvg30d": 211.0,
        "heikinAvg30d": 3.543
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 105.997,
        "saikou": 8,
        "heikin": 3.89,
        "boshuAvg30d": 211.0,
        "heikinAvg30d": 3.513
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 107.957,
        "saikou": 8.99,
        "heikin": 4.9,
        "boshuAvg30d": 211.0,
        "heikinAvg30d": 3.404
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 104.09,
        "saikou": 5.37,
        "heikin": 3.14,
        "boshuAvg30d": 210.0,
        "heikinAvg30d": 2.958
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 105.972,
        "saikou": 8.4,
        "heikin": 3.09,
        "boshuAvg30d": 209.0,
        "heikinAvg30d": 3.407
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 105.972,
        "saikou": 8.4,
        "heikin": 2.91,
        "boshuAvg30d": 209.6,
        "heikinAvg30d": 3.462
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 107.957,
        "saikou": 8.85,
        "heikin": 4.46,
        "boshuAvg30d": 209.6,
        "heikinAvg30d": 3.224
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 107.957,
        "saikou": 9,
        "heikin": 6,
        "boshuAvg30d": 209.6,
        "heikinAvg30d": 3.17
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 107.957,
        "saikou": 9.41,
        "heikin": 6.05,
        "boshuAvg30d": 209.6,
        "heikinAvg30d": 3.119
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 107.957,
        "saikou": 9,
        "heikin": 5.16,
        "boshuAvg30d": 208.0,
        "heikinAvg30d": 3.083
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 104.09,
        "saikou": 9.79,
        "heikin": 6.03,
        "boshuAvg30d": 206.6,
        "heikinAvg30d": 2.954
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 102.092,
        "saikou": 9.48,
        "heikin": 4.8,
        "boshuAvg30d": 204.6,
        "heikinAvg30d": 2.447
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 74.375,
        "saikou": 6,
        "heikin": 3.22,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 2.114
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 74.375,
        "saikou": 6,
        "heikin": 3.47,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 2.324
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 76.175,
        "saikou": 7.6,
        "heikin": 3.84,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 2.103
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 78.165,
        "saikou": 7.5,
        "heikin": 3.61,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 2.008
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 54.299,
        "saikou": 5,
        "heikin": 2.39,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 2.026
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 67.026,
        "saikou": 7.99,
        "heikin": 3.39,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 2.087
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 85.878,
        "saikou": 8,
        "heikin": 4.26,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 2.318
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 97.017,
        "saikou": 9.5,
        "heikin": 6.31,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 2.637
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 94.147,
        "saikou": 9.5,
        "heikin": 6.23,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 2.749
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 94.147,
        "saikou": 9.5,
        "heikin": 5.8,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 2.809
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 60.452,
        "saikou": 9.5,
        "heikin": 8.25,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 2.893
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 60.452,
        "saikou": 9.5,
        "heikin": 8.25,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 2.709
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 60.452,
        "saikou": 9.5,
        "heikin": 8.55,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.796
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 60.452,
        "saikou": 9.5,
        "heikin": 8.55,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 3.047
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 60.452,
        "saikou": 9.5,
        "heikin": 8.56,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.552
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 112.642,
        "saikou": 9.5,
        "heikin": 5.55,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 2.248
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 161.338,
        "saikou": 9.5,
        "heikin": 4.04,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 2.187
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 167.202,
        "saikou": 9.5,
        "heikin": 3.44,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 2.153
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 154.475,
        "saikou": 9.5,
        "heikin": 4.31,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 2.461
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 138.608,
        "saikou": 9.5,
        "heikin": 4.56,
        "boshuAvg30d": 139.6,
        "heikinAvg30d": 2.365
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 138.608,
        "saikou": 9.5,
        "heikin": 4.43,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 2.107
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 138.608,
        "saikou": 9.5,
        "heikin": 4.48,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.179
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 130.654,
        "saikou": 9.5,
        "heikin": 4.29,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.046
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 130.654,
        "saikou": 9.5,
        "heikin": 4.17,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 1.987
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 130.654,
        "saikou": 9.5,
        "heikin": 4.23,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 1.911
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 130.654,
        "saikou": 9.5,
        "heikin": 4.29,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 2.123
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 130.654,
        "saikou": 9.5,
        "heikin": 4.28,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 2.04
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 138.608,
        "saikou": 9.5,
        "heikin": 4.36,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 2.222
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 138.608,
        "saikou": 9.5,
        "heikin": 4.31,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 2.289
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 167.202,
        "saikou": 9.5,
        "heikin": 3.42,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 2.471
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 141.748,
        "saikou": 9.5,
        "heikin": 4.69,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 2.563
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 107.95,
        "saikou": 9.5,
        "heikin": 4.98,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 2.607
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 96.828,
        "saikou": 9.5,
        "heikin": 5.65,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 2.963
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 52.498,
        "saikou": 9.5,
        "heikin": 5.9,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 3.592
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 52.498,
        "saikou": 9.5,
        "heikin": 6.48,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 3.99
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 52.498,
        "saikou": 3.6,
        "heikin": 3.12,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 3.783
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 53.378,
        "saikou": 8,
        "heikin": 3.93,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 3.64
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 53.378,
        "saikou": 2.7,
        "heikin": 1.72,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 3.441
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 53.378,
        "saikou": 6.31,
        "heikin": 2.75,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 3.247
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 55.368,
        "saikou": 2.7,
        "heikin": 1.93,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 3.023
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 55.368,
        "saikou": 7.59,
        "heikin": 3.42,
        "boshuAvg30d": 136.2,
        "heikinAvg30d": 3.297
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 55.368,
        "saikou": 8,
        "heikin": 5.37,
        "boshuAvg30d": 136.2,
        "heikinAvg30d": 3.11
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 55.368,
        "saikou": 7.21,
        "heikin": 3.79,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.055
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 89.063,
        "saikou": 7.21,
        "heikin": 2.99,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.9
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 91.37,
        "saikou": 9.5,
        "heikin": 4.53,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.692
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 102.866,
        "saikou": 6.81,
        "heikin": 2.8,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.32
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 102.866,
        "saikou": 9.5,
        "heikin": 5.15,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.361
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 102.866,
        "saikou": 9.5,
        "heikin": 3.25,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 1.899
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 4.95,
        "heikin": 1.08,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.679
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 2.99,
        "heikin": 0.85,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.654
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 3.35,
        "heikin": 0.86,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.597
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 3.35,
        "heikin": 0.86,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.561
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 2.99,
        "heikin": 0.83,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.569
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 2.99,
        "heikin": 1.03,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.626
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.95,
        "heikin": 0.98,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.687
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 186.8,
        "saikou": 4.95,
        "heikin": 0.79,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.713
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.7,
        "heikin": 1.08,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.71
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.95,
        "heikin": 1.06,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.733
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.95,
        "heikin": 1.06,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.743
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.95,
        "heikin": 1.08,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.72
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 167.343,
        "saikou": 4.95,
        "heikin": 1.08,
        "boshuAvg30d": 42.8,
        "heikinAvg30d": 0.852
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 4.95,
        "heikin": 1.07,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.8
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 167.343,
        "saikou": 4.95,
        "heikin": 1.07,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.798
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 167.343,
        "saikou": 4.95,
        "heikin": 1.07,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.826
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 154.343,
        "saikou": 4.49,
        "heikin": 1.01,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.821
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 154.343,
        "saikou": 4.7,
        "heikin": 1.02,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.764
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.912
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.918
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.968
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.03,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.944
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.03,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.03,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.952
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.13,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.97
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.967
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.961
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 0.925
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.948
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 115.843,
        "saikou": 3.99,
        "heikin": 1.27,
        "boshuAvg30d": 46.8,
        "heikinAvg30d": 0.898
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 101.843,
        "saikou": 4.95,
        "heikin": 1.35,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 0.994
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 101.843,
        "saikou": 5.99,
        "heikin": 1.49,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 0.956
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 101.843,
        "saikou": 10,
        "heikin": 2.03,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 1.091
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 155.343,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 1.116
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 156.343,
        "saikou": 4.95,
        "heikin": 0.76,
        "boshuAvg30d": 42.8,
        "heikinAvg30d": 1.151
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 155.343,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 42.4,
        "heikinAvg30d": 1.172
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.29,
        "heikin": 1.24,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.171
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.29,
        "heikin": 1.24,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.142
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 6.99,
        "heikin": 1.18,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.152
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 6.99,
        "heikin": 1.21,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.182
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 6.99,
        "heikin": 1.21,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.17
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 6.99,
        "heikin": 1.25,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.157
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 3.75,
        "heikin": 1.01,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.851
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 4.5,
        "heikin": 1.19,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.789
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 4.19,
        "heikin": 1.14,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.756
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 4.19,
        "heikin": 1.1,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.696
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 4.7,
        "heikin": 1.09,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.747
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 3.95,
        "heikin": 1.08,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.725
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 162.658,
        "saikou": 9.41,
        "heikin": 5.29,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.655
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 164.582,
        "saikou": 9.21,
        "heikin": 5.15,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.284
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 160.614,
        "saikou": 9.34,
        "heikin": 5.1,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.978
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 162.449,
        "saikou": 9.1,
        "heikin": 4.98,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.916
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 159.112,
        "saikou": 9.2,
        "heikin": 4.99,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.865
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 145.11,
        "saikou": 9.66,
        "heikin": 5.52,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 5.046
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 165.825,
        "saikou": 10,
        "heikin": 5.55,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.305
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 107.997,
        "saikou": 4.44,
        "heikin": 2.15,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.753
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 111.825,
        "saikou": 4.46,
        "heikin": 2.12,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.873
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 100.905,
        "saikou": 4.99,
        "heikin": 1.96,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.217
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 78.905,
        "saikou": 1.5,
        "heikin": 0.88,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.409
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 171.825,
        "saikou": 7.02,
        "heikin": 4.3,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.274
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 178.905,
        "saikou": 7.67,
        "heikin": 4.84,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.136
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 175.927,
        "saikou": 9.02,
        "heikin": 5.71,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 6.23
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 77.851,
        "saikou": 1.5,
        "heikin": 1.08,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 5.452
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 79.849,
        "saikou": 1.5,
        "heikin": 1.1,
        "boshuAvg30d": 174.8,
        "heikinAvg30d": 4.82
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 176.849,
        "saikou": 10,
        "heikin": 5.36,
        "boshuAvg30d": 174.8,
        "heikinAvg30d": 4.522
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 146.849,
        "saikou": 9.68,
        "heikin": 5.44,
        "boshuAvg30d": 174.8,
        "heikinAvg30d": 4.227
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 146.849,
        "saikou": 9.15,
        "heikin": 5.95,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 4.087
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 174.925,
        "saikou": 8.96,
        "heikin": 5.43,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 3.801
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 155.003,
        "saikou": 8.28,
        "heikin": 5.67,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.598
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 123.079,
        "saikou": 6.99,
        "heikin": 5.86,
        "boshuAvg30d": 180.8,
        "heikinAvg30d": 3.587
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 118.629,
        "saikou": 6.56,
        "heikin": 5.57,
        "boshuAvg30d": 180.8,
        "heikinAvg30d": 3.283
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 118.551,
        "saikou": 7.22,
        "heikin": 4.15,
        "boshuAvg30d": 180.8,
        "heikinAvg30d": 3.181
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 108.765,
        "saikou": 7.5,
        "heikin": 2.71,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.396
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 112.671,
        "saikou": 6.58,
        "heikin": 3.04,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.459
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 121.459,
        "saikou": 8.46,
        "heikin": 6.28,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.771
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 167.219,
        "saikou": 8.97,
        "heikin": 5.78,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 4.372
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 189.163,
        "saikou": 9.46,
        "heikin": 5.53,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 4.586
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 124.063,
        "saikou": 5.1,
        "heikin": 3.35,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 5.175
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 94.133,
        "saikou": 4.48,
        "heikin": 2.52,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 5.615
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 124.133,
        "saikou": 8.82,
        "heikin": 4.45,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 5.901
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 82.173,
        "saikou": 4.48,
        "heikin": 2.38,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 6.513
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 116.325,
        "saikou": 10,
        "heikin": 7.23,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 6.931
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 121.225,
        "saikou": 10,
        "heikin": 7.37,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 7.028
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 167.578,
        "saikou": 10,
        "heikin": 8.14,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 7.167
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 222.989,
        "saikou": 10,
        "heikin": 8.41,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 7.21
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 222.989,
        "saikou": 10,
        "heikin": 8.36,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 7.041
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 158.612,
        "saikou": 10,
        "heikin": 8.2,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.688
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 172.98,
        "saikou": 10,
        "heikin": 8.15,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.501
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 195.345,
        "saikou": 10,
        "heikin": 7.32,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 6.509
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 191.455,
        "saikou": 10,
        "heikin": 7.08,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 6.429
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 122.827,
        "saikou": 10,
        "heikin": 5.25,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.447
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 120.917,
        "saikou": 9.77,
        "heikin": 4.95,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 6.025
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 76.815,
        "saikou": 1.5,
        "heikin": 1.18,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 6.129
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 155.715,
        "saikou": 9.82,
        "heikin": 5.91,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 6.038
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 79.625,
        "saikou": 1.5,
        "heikin": 1.2,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.051
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 105.727,
        "saikou": 6.19,
        "heikin": 2.82,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 5.287
      }
    ]
  }
};
