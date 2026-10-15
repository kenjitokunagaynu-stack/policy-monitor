// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/15〜2026/10/14）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-15",
  "fetchedAt": "2026-10-15",
  "avgWindowLabel": "過去30日平均（2026/09/15〜2026/10/14）",
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
      "ouatsu": 1317.946,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1151.4,
      "heikinAvg30d": 2.797
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1409.35,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1151.4,
      "heikinAvg30d": 2.688
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1336.807,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1151.4,
      "heikinAvg30d": 2.703
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1366.831,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1151.4,
      "heikinAvg30d": 2.581
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1344.669,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1147.3,
      "heikinAvg30d": 2.599
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1338.482,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1146.3,
      "heikinAvg30d": 2.69
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1511.768,
      "saikou": 9.94,
      "heikin": 3.7,
      "boshuAvg30d": 1162.1,
      "heikinAvg30d": 2.814
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1399.551,
      "saikou": 9.94,
      "heikin": 3.18,
      "boshuAvg30d": 1163.6,
      "heikinAvg30d": 3.023
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1579.515,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1166.1,
      "heikinAvg30d": 3.084
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1498.611,
      "saikou": 9.94,
      "heikin": 4.09,
      "boshuAvg30d": 1166.6,
      "heikinAvg30d": 3.257
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1534.482,
      "saikou": 9.91,
      "heikin": 4.03,
      "boshuAvg30d": 1166.6,
      "heikinAvg30d": 3.323
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1544.476,
      "saikou": 9.91,
      "heikin": 3.93,
      "boshuAvg30d": 1166.6,
      "heikinAvg30d": 3.355
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1578.788,
      "saikou": 9.89,
      "heikin": 3.71,
      "boshuAvg30d": 1229.8,
      "heikinAvg30d": 3.419
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1724.253,
      "saikou": 10,
      "heikin": 4.07,
      "boshuAvg30d": 1251.7,
      "heikinAvg30d": 3.174
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1619.408,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1273.8,
      "heikinAvg30d": 2.895
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1435.797,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1291.3,
      "heikinAvg30d": 2.739
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1464.174,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1291.9,
      "heikinAvg30d": 2.915
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1474.83,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1291.9,
      "heikinAvg30d": 2.953
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1137,
      "ouatsu": 1441.415,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1261.1,
      "heikinAvg30d": 3.143
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1140,
      "ouatsu": 1484.625,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1264.6,
      "heikinAvg30d": 3.144
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1145,
      "ouatsu": 1525.44,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1268.3,
      "heikinAvg30d": 3.196
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1145,
      "ouatsu": 1397.444,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1268.3,
      "heikinAvg30d": 3.11
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1142,
      "ouatsu": 1481.897,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1265.3,
      "heikinAvg30d": 3.102
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1141,
      "ouatsu": 1468.651,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1264.3,
      "heikinAvg30d": 3.011
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1121,
      "ouatsu": 1457.871,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1248.4,
      "heikinAvg30d": 2.939
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1121,
      "ouatsu": 1435.763,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1248.4,
      "heikinAvg30d": 2.934
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1121,
      "ouatsu": 1391.649,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1248.4,
      "heikinAvg30d": 3.033
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1119,
      "ouatsu": 1181.709,
      "saikou": 10,
      "heikin": 3.47,
      "boshuAvg30d": 1244.6,
      "heikinAvg30d": 3.106
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1116,
      "ouatsu": 1287.383,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1240.5,
      "heikinAvg30d": 3.086
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1110,
      "ouatsu": 1499.233,
      "saikou": 9.91,
      "heikin": 3.49,
      "boshuAvg30d": 1234.0,
      "heikinAvg30d": 3.204
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1517.06,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1269.4,
      "heikinAvg30d": 3.116
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1481.478,
      "saikou": 9.89,
      "heikin": 3.42,
      "boshuAvg30d": 1269.4,
      "heikinAvg30d": 3.318
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1468.317,
      "saikou": 10,
      "heikin": 4.05,
      "boshuAvg30d": 1269.9,
      "heikinAvg30d": 3.669
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1352.211,
      "saikou": 10,
      "heikin": 4.52,
      "boshuAvg30d": 1268.3,
      "heikinAvg30d": 3.979
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1558.584,
      "saikou": 10,
      "heikin": 4.67,
      "boshuAvg30d": 1261.1,
      "heikinAvg30d": 4.045
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1488.408,
      "saikou": 10,
      "heikin": 5.03,
      "boshuAvg30d": 1256.2,
      "heikinAvg30d": 4.108
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1354.068,
      "saikou": 10,
      "heikin": 4.24,
      "boshuAvg30d": 1249.6,
      "heikinAvg30d": 4.091
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1435.174,
      "saikou": 10,
      "heikin": 4.55,
      "boshuAvg30d": 1249.6,
      "heikinAvg30d": 3.994
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1485.409,
      "saikou": 9.89,
      "heikin": 3.85,
      "boshuAvg30d": 1249.8,
      "heikinAvg30d": 3.899
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1618.169,
      "saikou": 9.89,
      "heikin": 3.25,
      "boshuAvg30d": 1248.8,
      "heikinAvg30d": 3.689
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1612.806,
      "saikou": 9.91,
      "heikin": 3.42,
      "boshuAvg30d": 1242.4,
      "heikinAvg30d": 3.636
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1561.223,
      "saikou": 9.89,
      "heikin": 3.34,
      "boshuAvg30d": 1240.3,
      "heikinAvg30d": 3.553
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1065,
      "ouatsu": 1549.275,
      "saikou": 9.89,
      "heikin": 3.08,
      "boshuAvg30d": 1160.1,
      "heikinAvg30d": 3.408
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1068,
      "ouatsu": 1543.78,
      "saikou": 9.89,
      "heikin": 2.99,
      "boshuAvg30d": 1163.1,
      "heikinAvg30d": 3.493
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1069,
      "ouatsu": 1379.283,
      "saikou": 9.89,
      "heikin": 3.15,
      "boshuAvg30d": 1164.5,
      "heikinAvg30d": 3.385
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1064,
      "ouatsu": 1487.748,
      "saikou": 9.89,
      "heikin": 2.67,
      "boshuAvg30d": 1158.4,
      "heikinAvg30d": 3.236
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1055,
      "ouatsu": 1380.363,
      "saikou": 9.89,
      "heikin": 3.16,
      "boshuAvg30d": 1150.5,
      "heikinAvg30d": 3.232
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1048,
      "ouatsu": 1424.912,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1143.0,
      "heikinAvg30d": 2.914
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
        "ouatsu": 30.908,
        "saikou": 9.89,
        "heikin": 7.21,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.301
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 112.468,
        "saikou": 9.91,
        "heikin": 6.56,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.015
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 67.958,
        "saikou": 9.8,
        "heikin": 3.88,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.244
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 67.958,
        "saikou": 9.8,
        "heikin": 3.87,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.814
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 112.468,
        "saikou": 9.91,
        "heikin": 6.15,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.312
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 9.89,
        "heikin": 8.2,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.245
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 73.468,
        "saikou": 9.91,
        "heikin": 9.7,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.361
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 28.918,
        "saikou": 9.89,
        "heikin": 9.47,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.323
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 73.468,
        "saikou": 9.91,
        "heikin": 9.73,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.439
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 9.89,
        "heikin": 7.42,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.355
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 73.468,
        "saikou": 9.91,
        "heikin": 9.7,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.369
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 73.468,
        "saikou": 9.91,
        "heikin": 9.73,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.663
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 67.918,
        "saikou": 9.89,
        "heikin": 4.26,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.64
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 112.468,
        "saikou": 9.91,
        "heikin": 6.38,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.405
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 64.908,
        "saikou": 9.89,
        "heikin": 3.82,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.267
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 107.468,
        "saikou": 9.91,
        "heikin": 6.06,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 2.086
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 28.918,
        "saikou": 9.89,
        "heikin": 9.29,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.687
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 73.468,
        "saikou": 9.91,
        "heikin": 9.6,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.411
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 28.918,
        "saikou": 9.89,
        "heikin": 9.48,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.515
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 62.918,
        "saikou": 9.89,
        "heikin": 4.4,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.364
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 105.438,
        "saikou": 9.91,
        "heikin": 5.99,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.947
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 64.908,
        "saikou": 9.89,
        "heikin": 4.83,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.316
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 107.428,
        "saikou": 9.91,
        "heikin": 6.84,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.791
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 107.428,
        "saikou": 9.91,
        "heikin": 6.75,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.632
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 62.918,
        "saikou": 9.89,
        "heikin": 4.72,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.799
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 73.458,
        "saikou": 9.91,
        "heikin": 9.87,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.846
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 30.908,
        "saikou": 9.89,
        "heikin": 5.83,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.514
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 73.468,
        "saikou": 9.91,
        "heikin": 9.74,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.779
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 64.908,
        "saikou": 9.89,
        "heikin": 4.83,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.193
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 110.478,
        "saikou": 9.91,
        "heikin": 6.54,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.489
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 30.908,
        "saikou": 9.89,
        "heikin": 5.99,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 1.552
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 40.908,
        "saikou": 9.89,
        "heikin": 6.19,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 2.639
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 73.468,
        "saikou": 9.91,
        "heikin": 9.14,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 3.731
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 38.918,
        "saikou": 9.89,
        "heikin": 7.71,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 4.158
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 83.468,
        "saikou": 9.91,
        "heikin": 8.19,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 4.259
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 83.468,
        "saikou": 9.91,
        "heikin": 8.96,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 4.072
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 40.908,
        "saikou": 9.89,
        "heikin": 7.88,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 4.073
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 83.468,
        "saikou": 9.91,
        "heikin": 8.55,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 3.901
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 38.918,
        "saikou": 9.89,
        "heikin": 6.85,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 3.408
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 107.918,
        "saikou": 9.89,
        "heikin": 5.1,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 3.155
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 149.918,
        "saikou": 9.91,
        "heikin": 6.17,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 3.218
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 117.918,
        "saikou": 9.89,
        "heikin": 5.13,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.804
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 38.918,
        "saikou": 9.89,
        "heikin": 7.08,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.879
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 28.918,
        "saikou": 9.89,
        "heikin": 8.43,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 3.181
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 30.908,
        "saikou": 9.89,
        "heikin": 9.71,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.855
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 40.908,
        "saikou": 9.89,
        "heikin": 6.58,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.722
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 30.908,
        "saikou": 9.89,
        "heikin": 9.81,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.959
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 40.908,
        "saikou": 9.89,
        "heikin": 6.12,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.494
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 65.047,
        "saikou": 10,
        "heikin": 5.72,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 6.526
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 65.047,
        "saikou": 10,
        "heikin": 5.62,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 6.826
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 82.949,
        "saikou": 10,
        "heikin": 5.32,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 6.902
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 84.909,
        "saikou": 10,
        "heikin": 5.33,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 6.975
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 80.963,
        "saikou": 10,
        "heikin": 5.29,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 7.041
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 80.963,
        "saikou": 10,
        "heikin": 5.49,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 7.111
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 97.909,
        "saikou": 9.94,
        "heikin": 5.82,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 7.107
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 99.409,
        "saikou": 9.94,
        "heikin": 5.24,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 7.028
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 103.407,
        "saikou": 10,
        "heikin": 5.41,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 7.005
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 103.407,
        "saikou": 9.94,
        "heikin": 5.66,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.969
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 103.407,
        "saikou": 8.72,
        "heikin": 5.22,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 7.117
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 103.407,
        "saikou": 8.11,
        "heikin": 5.15,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 7.178
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 103.407,
        "saikou": 8.3,
        "heikin": 5.4,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 7.317
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 101.907,
        "saikou": 10,
        "heikin": 6.17,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 7.488
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 91.407,
        "saikou": 10,
        "heikin": 6.5,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 7.718
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 89.907,
        "saikou": 10,
        "heikin": 6.99,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 7.871
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 91.407,
        "saikou": 10,
        "heikin": 7.41,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 8.197
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 89.907,
        "saikou": 10,
        "heikin": 7.26,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 8.173
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 93.403,
        "saikou": 10,
        "heikin": 8.97,
        "boshuAvg30d": 127.4,
        "heikinAvg30d": 8.031
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 93.403,
        "saikou": 10,
        "heikin": 9.4,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 8.144
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 112.098,
        "saikou": 10,
        "heikin": 6.96,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 8.134
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 100.782,
        "saikou": 10,
        "heikin": 7.08,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 8.234
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 104.737,
        "saikou": 10,
        "heikin": 6.97,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 8.247
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 104.737,
        "saikou": 10,
        "heikin": 7,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 8.166
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 103.387,
        "saikou": 10,
        "heikin": 7.04,
        "boshuAvg30d": 124.9,
        "heikinAvg30d": 8.214
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 103.387,
        "saikou": 10,
        "heikin": 6.96,
        "boshuAvg30d": 124.9,
        "heikinAvg30d": 8.122
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 117.403,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 124.9,
        "heikinAvg30d": 7.78
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 117.403,
        "saikou": 10,
        "heikin": 6.26,
        "boshuAvg30d": 122.9,
        "heikinAvg30d": 7.444
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 117.403,
        "saikou": 10,
        "heikin": 6.08,
        "boshuAvg30d": 121.8,
        "heikinAvg30d": 7.566
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 129.403,
        "saikou": 5.5,
        "heikin": 3.44,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 6.84
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 105.403,
        "saikou": 10,
        "heikin": 4.92,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 6.94
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 81.403,
        "saikou": 4.81,
        "heikin": 3.42,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 6.414
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 93.403,
        "saikou": 3.99,
        "heikin": 3.49,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 6.32
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 77.907,
        "saikou": 5.84,
        "heikin": 3.9,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 6.344
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 79.407,
        "saikou": 5.5,
        "heikin": 4.01,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 6.279
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 65.907,
        "saikou": 3.79,
        "heikin": 3.13,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 5.958
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 79.407,
        "saikou": 4,
        "heikin": 3.45,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 6.085
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 65.907,
        "saikou": 3.1,
        "heikin": 2.99,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 5.786
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 80.737,
        "saikou": 2.99,
        "heikin": 2.55,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 5.873
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 92.737,
        "saikou": 6.78,
        "heikin": 4.05,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 5.977
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 88.782,
        "saikou": 7.22,
        "heikin": 4.19,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 5.952
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 87.432,
        "saikou": 8.48,
        "heikin": 4.4,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 6.053
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 91.387,
        "saikou": 6.92,
        "heikin": 4.11,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 6.212
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 92.737,
        "saikou": 7.38,
        "heikin": 3.75,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 6.06
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 92.737,
        "saikou": 7.22,
        "heikin": 3.91,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 6.369
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 90.837,
        "saikou": 7.24,
        "heikin": 4.05,
        "boshuAvg30d": 80.9,
        "heikinAvg30d": 6.274
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 89.487,
        "saikou": 7.65,
        "heikin": 4.32,
        "boshuAvg30d": 79.4,
        "heikinAvg30d": 6.382
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 89.337,
        "saikou": 10,
        "heikin": 4.57,
        "boshuAvg30d": 78.9,
        "heikinAvg30d": 6.735
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 439.146,
        "saikou": 7.98,
        "heikin": 3.77,
        "boshuAvg30d": 350.3,
        "heikinAvg30d": 3.712
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 440.046,
        "saikou": 8.92,
        "heikin": 4.65,
        "boshuAvg30d": 350.3,
        "heikinAvg30d": 3.759
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 388.627,
        "saikou": 8.5,
        "heikin": 4.77,
        "boshuAvg30d": 350.3,
        "heikinAvg30d": 3.523
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 401.877,
        "saikou": 8.5,
        "heikin": 4.44,
        "boshuAvg30d": 350.3,
        "heikinAvg30d": 3.374
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 406.383,
        "saikou": 7.95,
        "heikin": 4.21,
        "boshuAvg30d": 348.8,
        "heikinAvg30d": 3.359
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 434.753,
        "saikou": 7.95,
        "heikin": 4.38,
        "boshuAvg30d": 348.3,
        "heikinAvg30d": 3.41
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 459.235,
        "saikou": 7.32,
        "heikin": 4.2,
        "boshuAvg30d": 346.8,
        "heikinAvg30d": 3.475
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 463.649,
        "saikou": 5.46,
        "heikin": 2.87,
        "boshuAvg30d": 348.3,
        "heikinAvg30d": 3.67
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 473.018,
        "saikou": 5.47,
        "heikin": 2.93,
        "boshuAvg30d": 348.8,
        "heikinAvg30d": 3.761
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 476.788,
        "saikou": 7.32,
        "heikin": 4.28,
        "boshuAvg30d": 349.3,
        "heikinAvg30d": 3.911
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 437.862,
        "saikou": 6.16,
        "heikin": 3.61,
        "boshuAvg30d": 349.3,
        "heikinAvg30d": 3.821
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 449.21,
        "saikou": 5.58,
        "heikin": 3.08,
        "boshuAvg30d": 349.3,
        "heikinAvg30d": 3.97
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 437.868,
        "saikou": 5.76,
        "heikin": 3.31,
        "boshuAvg30d": 369.4,
        "heikinAvg30d": 4.011
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 497.273,
        "saikou": 6.1,
        "heikin": 3.37,
        "boshuAvg30d": 377.4,
        "heikinAvg30d": 4.222
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 389.393,
        "saikou": 6.13,
        "heikin": 3.29,
        "boshuAvg30d": 382.4,
        "heikinAvg30d": 3.875
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 405.68,
        "saikou": 6.47,
        "heikin": 3.34,
        "boshuAvg30d": 387.4,
        "heikinAvg30d": 3.59
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 562.02,
        "saikou": 6.19,
        "heikin": 3.3,
        "boshuAvg30d": 387.4,
        "heikinAvg30d": 3.79
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 417.269,
        "saikou": 6.47,
        "heikin": 3.5,
        "boshuAvg30d": 387.4,
        "heikinAvg30d": 3.838
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 487.244,
        "saikou": 10,
        "heikin": 4.61,
        "boshuAvg30d": 381.8,
        "heikinAvg30d": 4.09
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 479.887,
        "saikou": 10,
        "heikin": 4.11,
        "boshuAvg30d": 381.8,
        "heikinAvg30d": 4.198
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 487.527,
        "saikou": 10,
        "heikin": 4.49,
        "boshuAvg30d": 381.8,
        "heikinAvg30d": 4.118
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 464.213,
        "saikou": 10,
        "heikin": 4.55,
        "boshuAvg30d": 380.8,
        "heikinAvg30d": 3.941
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 428.622,
        "saikou": 10,
        "heikin": 4.57,
        "boshuAvg30d": 378.3,
        "heikinAvg30d": 3.913
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 425.128,
        "saikou": 10,
        "heikin": 4.4,
        "boshuAvg30d": 378.3,
        "heikinAvg30d": 3.844
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 424.249,
        "saikou": 10,
        "heikin": 3.78,
        "boshuAvg30d": 376.4,
        "heikinAvg30d": 3.78
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 407.259,
        "saikou": 10,
        "heikin": 3.74,
        "boshuAvg30d": 376.4,
        "heikinAvg30d": 3.719
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 406.633,
        "saikou": 10,
        "heikin": 4.14,
        "boshuAvg30d": 376.4,
        "heikinAvg30d": 3.853
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 211.325,
        "saikou": 5.85,
        "heikin": 4.11,
        "boshuAvg30d": 376.2,
        "heikinAvg30d": 3.976
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 321.579,
        "saikou": 6.82,
        "heikin": 2.84,
        "boshuAvg30d": 375.2,
        "heikinAvg30d": 3.831
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 530.038,
        "saikou": 5.51,
        "heikin": 3.47,
        "boshuAvg30d": 374.7,
        "heikinAvg30d": 3.663
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 558.845,
        "saikou": 5.51,
        "heikin": 2.92,
        "boshuAvg30d": 373.2,
        "heikinAvg30d": 3.713
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 587.575,
        "saikou": 5.27,
        "heikin": 2.96,
        "boshuAvg30d": 373.2,
        "heikinAvg30d": 3.629
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 561.96,
        "saikou": 3.89,
        "heikin": 2.22,
        "boshuAvg30d": 373.2,
        "heikinAvg30d": 3.974
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 568.04,
        "saikou": 3.98,
        "heikin": 2.77,
        "boshuAvg30d": 373.2,
        "heikinAvg30d": 4.188
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 569.986,
        "saikou": 4.1,
        "heikin": 2.62,
        "boshuAvg30d": 369.0,
        "heikinAvg30d": 4.104
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 538.574,
        "saikou": 7.86,
        "heikin": 3.64,
        "boshuAvg30d": 368.7,
        "heikinAvg30d": 4.05
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 490.347,
        "saikou": 5.91,
        "heikin": 3.29,
        "boshuAvg30d": 371.1,
        "heikinAvg30d": 4.176
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 532.474,
        "saikou": 6.81,
        "heikin": 4.28,
        "boshuAvg30d": 371.1,
        "heikinAvg30d": 3.992
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 564.076,
        "saikou": 5.87,
        "heikin": 3.93,
        "boshuAvg30d": 371.3,
        "heikinAvg30d": 3.996
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 584.32,
        "saikou": 5.45,
        "heikin": 2.73,
        "boshuAvg30d": 371.3,
        "heikinAvg30d": 3.814
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 550.598,
        "saikou": 5.46,
        "heikin": 3.02,
        "boshuAvg30d": 369.3,
        "heikinAvg30d": 3.834
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 545.349,
        "saikou": 5.95,
        "heikin": 3.32,
        "boshuAvg30d": 369.3,
        "heikinAvg30d": 3.846
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 567.531,
        "saikou": 5.24,
        "heikin": 2.44,
        "boshuAvg30d": 368.8,
        "heikinAvg30d": 3.616
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 566.826,
        "saikou": 5.37,
        "heikin": 2.28,
        "boshuAvg30d": 368.8,
        "heikinAvg30d": 3.772
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 403.323,
        "saikou": 4.45,
        "heikin": 2.49,
        "boshuAvg30d": 369.1,
        "heikinAvg30d": 3.468
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 546.732,
        "saikou": 5.46,
        "heikin": 2.34,
        "boshuAvg30d": 367.1,
        "heikinAvg30d": 3.663
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 463.304,
        "saikou": 5.24,
        "heikin": 3.24,
        "boshuAvg30d": 365.1,
        "heikinAvg30d": 3.856
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 489.559,
        "saikou": 5.21,
        "heikin": 2.45,
        "boshuAvg30d": 364.1,
        "heikinAvg30d": 3.86
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 246.867,
        "saikou": 3.45,
        "heikin": 2.06,
        "boshuAvg30d": 81.6,
        "heikinAvg30d": 1.982
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 231.669,
        "saikou": 3.09,
        "heikin": 1.37,
        "boshuAvg30d": 81.6,
        "heikinAvg30d": 1.789
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 249.509,
        "saikou": 3.22,
        "heikin": 1.36,
        "boshuAvg30d": 81.6,
        "heikinAvg30d": 1.8
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 253.311,
        "saikou": 3.4,
        "heikin": 1.48,
        "boshuAvg30d": 81.6,
        "heikinAvg30d": 1.868
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 231.506,
        "saikou": 2.9,
        "heikin": 1.33,
        "boshuAvg30d": 80.6,
        "heikinAvg30d": 1.747
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 241.296,
        "saikou": 2.9,
        "heikin": 1.34,
        "boshuAvg30d": 80.6,
        "heikinAvg30d": 1.727
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 264.92,
        "saikou": 2.15,
        "heikin": 1.03,
        "boshuAvg30d": 80.1,
        "heikinAvg30d": 1.673
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 270.02,
        "saikou": 2.2,
        "heikin": 1.1,
        "boshuAvg30d": 80.1,
        "heikinAvg30d": 1.867
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 275.72,
        "saikou": 2.06,
        "heikin": 1.24,
        "boshuAvg30d": 80.6,
        "heikinAvg30d": 1.888
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 275.72,
        "saikou": 2.02,
        "heikin": 1.19,
        "boshuAvg30d": 80.6,
        "heikinAvg30d": 1.812
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 278.795,
        "saikou": 1.95,
        "heikin": 1.39,
        "boshuAvg30d": 80.6,
        "heikinAvg30d": 1.894
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 281.295,
        "saikou": 1.95,
        "heikin": 1.48,
        "boshuAvg30d": 80.6,
        "heikinAvg30d": 1.901
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 278.969,
        "saikou": 3.75,
        "heikin": 1.8,
        "boshuAvg30d": 90.1,
        "heikinAvg30d": 2.041
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 278.969,
        "saikou": 1.84,
        "heikin": 1.55,
        "boshuAvg30d": 93.6,
        "heikinAvg30d": 2.048
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 278.969,
        "saikou": 6.08,
        "heikin": 2.76,
        "boshuAvg30d": 96.6,
        "heikinAvg30d": 2.014
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 231.878,
        "saikou": 8.47,
        "heikin": 3,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 2.026
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 172.965,
        "saikou": 8.47,
        "heikin": 3.4,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 2.162
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 182.829,
        "saikou": 8.47,
        "heikin": 3.67,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 2.252
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 184.813,
        "saikou": 9.09,
        "heikin": 4.15,
        "boshuAvg30d": 103.0,
        "heikinAvg30d": 2.623
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 167.38,
        "saikou": 8.47,
        "heikin": 4.09,
        "boshuAvg30d": 103.0,
        "heikinAvg30d": 2.601
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 137.212,
        "saikou": 8.47,
        "heikin": 4.19,
        "boshuAvg30d": 103.6,
        "heikinAvg30d": 2.83
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 123.101,
        "saikou": 8.47,
        "heikin": 3.66,
        "boshuAvg30d": 103.0,
        "heikinAvg30d": 2.91
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 127.089,
        "saikou": 8.47,
        "heikin": 3.51,
        "boshuAvg30d": 102.0,
        "heikinAvg30d": 2.834
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 121.705,
        "saikou": 8.47,
        "heikin": 3.35,
        "boshuAvg30d": 101.0,
        "heikinAvg30d": 2.797
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 116.028,
        "saikou": 9.49,
        "heikin": 3.42,
        "boshuAvg30d": 97.6,
        "heikinAvg30d": 2.717
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 117.928,
        "saikou": 9.49,
        "heikin": 3.61,
        "boshuAvg30d": 97.6,
        "heikinAvg30d": 2.725
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 162.939,
        "saikou": 9.49,
        "heikin": 2.69,
        "boshuAvg30d": 97.6,
        "heikinAvg30d": 2.649
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 168.323,
        "saikou": 9.49,
        "heikin": 3.14,
        "boshuAvg30d": 97.1,
        "heikinAvg30d": 2.594
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 170.317,
        "saikou": 9.49,
        "heikin": 3.34,
        "boshuAvg30d": 96.6,
        "heikinAvg30d": 2.781
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 141.99,
        "saikou": 9.49,
        "heikin": 3.56,
        "boshuAvg30d": 96.6,
        "heikinAvg30d": 2.86
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 166.728,
        "saikou": 9.49,
        "heikin": 3.55,
        "boshuAvg30d": 95.1,
        "heikinAvg30d": 2.577
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 166.728,
        "saikou": 9.49,
        "heikin": 3.59,
        "boshuAvg30d": 95.1,
        "heikinAvg30d": 2.58
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 151.56,
        "saikou": 9.49,
        "heikin": 3.36,
        "boshuAvg30d": 95.1,
        "heikinAvg30d": 2.463
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 148.244,
        "saikou": 9.49,
        "heikin": 2.73,
        "boshuAvg30d": 95.1,
        "heikinAvg30d": 2.668
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 321.182,
        "saikou": 7.85,
        "heikin": 4.26,
        "boshuAvg30d": 95.1,
        "heikinAvg30d": 2.475
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 301.489,
        "saikou": 7.48,
        "heikin": 4.44,
        "boshuAvg30d": 94.6,
        "heikinAvg30d": 2.505
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 327.436,
        "saikou": 5.43,
        "heikin": 3.35,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 2.241
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 339.246,
        "saikou": 5.1,
        "heikin": 2.89,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 2.139
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 357.482,
        "saikou": 3.68,
        "heikin": 2.23,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 1.974
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 361.408,
        "saikou": 2.52,
        "heikin": 1.7,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 2.037
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 353.363,
        "saikou": 2.44,
        "heikin": 1.67,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 1.99
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 351.379,
        "saikou": 2.45,
        "heikin": 1.7,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 1.997
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 340.363,
        "saikou": 2.11,
        "heikin": 1.53,
        "boshuAvg30d": 93.1,
        "heikinAvg30d": 1.802
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 342.223,
        "saikou": 2.42,
        "heikin": 1.6,
        "boshuAvg30d": 94.1,
        "heikinAvg30d": 2.052
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 340.239,
        "saikou": 2.34,
        "heikin": 1.59,
        "boshuAvg30d": 94.1,
        "heikinAvg30d": 2.084
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 342.223,
        "saikou": 2.35,
        "heikin": 1.59,
        "boshuAvg30d": 93.1,
        "heikinAvg30d": 2.08
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 342.223,
        "saikou": 2.38,
        "heikin": 1.63,
        "boshuAvg30d": 92.1,
        "heikinAvg30d": 1.998
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 358.565,
        "saikou": 3.23,
        "heikin": 1.88,
        "boshuAvg30d": 89.1,
        "heikinAvg30d": 2.058
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
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 0.872
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 0.936
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.68,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 0.959
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.85,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 1.032
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 1.086
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 0.936
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 1.146
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 1.336
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 1.17
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 1.247
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 1.444
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 54.9,
        "heikinAvg30d": 1.453
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.9,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.736
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.506
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.389
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.446
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.103
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3.12,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.248
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.05,
        "heikin": 2.69,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.704
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 3.99,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.552
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 3.574
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.978
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 3.179
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.815
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 4.5,
        "heikin": 0.57,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.383
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 3.55,
        "heikin": 0.53,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.347
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.905
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.734
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.6,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.771
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.5,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 3.115
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.45,
        "heikin": 5.27,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.863
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.95,
        "heikin": 5.77,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 3.556
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 63.928,
        "saikou": 6.66,
        "heikin": 6.36,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.722
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 63.928,
        "saikou": 10,
        "heikin": 9.59,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.337
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 63.928,
        "saikou": 10,
        "heikin": 9.55,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.073
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 63.928,
        "saikou": 10,
        "heikin": 9.53,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.928
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.381
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.369
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.442
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.664
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.885
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.611
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.595
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.782
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.989
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.544
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 1.291
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.032
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 117.006,
        "saikou": 1.94,
        "heikin": 1.37,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.833
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 139.148,
        "saikou": 1.94,
        "heikin": 1.12,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.562
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 122.188,
        "saikou": 1.73,
        "heikin": 1.05,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.434
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 131.212,
        "saikou": 1.73,
        "heikin": 1.03,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.365
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 85.785,
        "saikou": 1.73,
        "heikin": 0.92,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.302
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 138.998,
        "saikou": 1.99,
        "heikin": 1.06,
        "boshuAvg30d": 128.6,
        "heikinAvg30d": 1.436
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 143.658,
        "saikou": 1.99,
        "heikin": 1.24,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.596
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 105.324,
        "saikou": 1.99,
        "heikin": 1.58,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.752
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 105.324,
        "saikou": 1.99,
        "heikin": 1.58,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.672
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 105.324,
        "saikou": 1.99,
        "heikin": 1.57,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.761
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 105.324,
        "saikou": 1.99,
        "heikin": 1.57,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.693
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 105.324,
        "saikou": 1.99,
        "heikin": 1.57,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 1.566
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 105.324,
        "saikou": 1.99,
        "heikin": 1.6,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 1.748
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 105.324,
        "saikou": 1.99,
        "heikin": 1.59,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 1.707
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 144.887,
        "saikou": 2.37,
        "heikin": 1.3,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 1.752
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 144.887,
        "saikou": 2.37,
        "heikin": 1.39,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 1.759
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 144.887,
        "saikou": 2.37,
        "heikin": 1.4,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 1.966
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 150.88,
        "saikou": 3.95,
        "heikin": 1.93,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 2.194
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 148.893,
        "saikou": 3.4,
        "heikin": 2.04,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.405
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 148.893,
        "saikou": 3.95,
        "heikin": 2.13,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.323
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 146.908,
        "saikou": 5.95,
        "heikin": 2.26,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.575
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 145.465,
        "saikou": 5.95,
        "heikin": 2.34,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.605
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 171.388,
        "saikou": 5.95,
        "heikin": 2.11,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.617
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 172.831,
        "saikou": 3.4,
        "heikin": 1.88,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.384
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 148.893,
        "saikou": 3,
        "heikin": 1.93,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.217
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 135.763,
        "saikou": 3,
        "heikin": 1.75,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.28
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 150.763,
        "saikou": 5.95,
        "heikin": 2.27,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.602
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 107.204,
        "saikou": 3,
        "heikin": 2.56,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.369
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 107.204,
        "saikou": 4.45,
        "heikin": 2.81,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.303
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 107.204,
        "saikou": 3,
        "heikin": 2.62,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.256
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 107.204,
        "saikou": 3.95,
        "heikin": 2.67,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.267
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 107.204,
        "saikou": 3.95,
        "heikin": 2.77,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.523
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 152.467,
        "saikou": 3.95,
        "heikin": 1.84,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.473
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 86.765,
        "saikou": 2.6,
        "heikin": 2.15,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.481
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 103.752,
        "saikou": 2.6,
        "heikin": 2.18,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.484
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 105.195,
        "saikou": 3.7,
        "heikin": 2.37,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.577
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 103.235,
        "saikou": 2.24,
        "heikin": 1.88,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 2.299
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 99.368,
        "saikou": 2.42,
        "heikin": 1.86,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 2.333
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 105.324,
        "saikou": 2.02,
        "heikin": 1.77,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 2.343
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 128.935,
        "saikou": 1.99,
        "heikin": 1.44,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 2.31
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 126.95,
        "saikou": 1.99,
        "heikin": 1.42,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.226
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 126.95,
        "saikou": 1.99,
        "heikin": 1.42,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.21
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 128.935,
        "saikou": 2,
        "heikin": 1.42,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.153
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 128.935,
        "saikou": 2,
        "heikin": 1.47,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.244
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 128.935,
        "saikou": 2,
        "heikin": 1.47,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.273
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 126.937,
        "saikou": 1.99,
        "heikin": 1.41,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.221
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 105.324,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 1.737
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 103.881,
        "saikou": 1.99,
        "heikin": 1.65,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 1.859
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 172.875,
        "saikou": 2.85,
        "heikin": 2.17,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.6
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 172.875,
        "saikou": 3.06,
        "heikin": 2.34,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.62
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 174.675,
        "saikou": 3.06,
        "heikin": 2.3,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.681
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 176.665,
        "saikou": 3.06,
        "heikin": 2.29,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.585
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 176.665,
        "saikou": 3.06,
        "heikin": 2.28,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.52
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 176.665,
        "saikou": 4.85,
        "heikin": 3.29,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.683
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 193.524,
        "saikou": 3.97,
        "heikin": 2.9,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.861
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 193.524,
        "saikou": 4.28,
        "heikin": 2.95,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.124
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 193.524,
        "saikou": 4.85,
        "heikin": 3.46,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.278
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 161.89,
        "saikou": 7.8,
        "heikin": 5.27,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.689
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 193.524,
        "saikou": 6.26,
        "heikin": 3.84,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.863
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 192.97,
        "saikou": 6.77,
        "heikin": 4.16,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.842
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 193.524,
        "saikou": 7.69,
        "heikin": 4.7,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 3.112
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 193.524,
        "saikou": 8.35,
        "heikin": 5.33,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 2.146
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 216.056,
        "saikou": 2.29,
        "heikin": 1.93,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 1.579
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 200.189,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.277
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 200.189,
        "saikou": 2.29,
        "heikin": 1.46,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.475
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 200.189,
        "saikou": 1.56,
        "heikin": 0.81,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.571
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.1,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 1.651
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.12,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 1.602
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 194.35,
        "saikou": 2.29,
        "heikin": 1.07,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 1.766
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 159.057,
        "saikou": 2.29,
        "heikin": 1.22,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.63
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 194.35,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.649
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 194.35,
        "saikou": 2.29,
        "heikin": 1.05,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.551
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 194.35,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.412
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.459
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.743
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 1.635
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.14,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 1.547
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.58,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.691
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.58,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.021
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 189.493,
        "saikou": 2.29,
        "heikin": 2.06,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.311
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 64.292,
        "saikou": 2.74,
        "heikin": 2.01,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.635
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 53.17,
        "saikou": 2.7,
        "heikin": 1.87,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.344
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 30.597,
        "saikou": 2.7,
        "heikin": 1.76,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.885
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 30.597,
        "saikou": 4,
        "heikin": 1.96,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.087
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 28.607,
        "saikou": 4,
        "heikin": 1.67,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.232
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 28.607,
        "saikou": 4,
        "heikin": 1.67,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.265
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 44.523,
        "saikou": 4,
        "heikin": 1.81,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.985
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 46.513,
        "saikou": 2.7,
        "heikin": 1.71,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.491
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 46.513,
        "saikou": 2,
        "heikin": 1.68,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.564
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 46.513,
        "saikou": 2,
        "heikin": 1.68,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 3.349
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 46.513,
        "saikou": 2,
        "heikin": 1.68,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.643
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 46.513,
        "saikou": 2,
        "heikin": 1.65,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.487
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 46.513,
        "saikou": 2,
        "heikin": 1.65,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.347
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 46.513,
        "saikou": 2,
        "heikin": 1.64,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.804
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 46.513,
        "saikou": 2,
        "heikin": 1.68,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.71
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 78.408,
        "saikou": 2.37,
        "heikin": 1.97,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 1.698
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 1.43,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.946
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 96.543,
        "saikou": 1.7,
        "heikin": 1.38,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.903
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.6,
        "heikin": 1.3,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.892
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.6,
        "heikin": 1.3,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.871
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.6,
        "heikin": 1.3,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.874
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 82.543,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.877
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 48.543,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.878
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 37,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.896
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 48.543,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.951
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 48.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.986
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 48.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.951
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 48.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.882
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 81.543,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.947
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 117.543,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.909
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 117.543,
        "saikou": 1.7,
        "heikin": 0.98,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.887
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 99.543,
        "saikou": 1.7,
        "heikin": 0.93,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.876
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 123.543,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.819
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.855
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.36,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.101
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.7,
        "heikin": 1.17,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.051
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.7,
        "heikin": 1.17,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.066
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.7,
        "heikin": 1.16,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.011
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.7,
        "heikin": 1.16,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.083
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.7,
        "heikin": 1.16,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.086
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.91,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.176
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.7,
        "heikin": 1.17,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.162
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.7,
        "heikin": 1.17,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.097
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.36,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.122
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.36,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.129
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 114.043,
        "saikou": 1.6,
        "heikin": 1.29,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.062
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 114.043,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.078
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 88.543,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.086
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 60.543,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.17
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 60.543,
        "saikou": 10,
        "heikin": 3.2,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 1.238
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 62.543,
        "saikou": 10,
        "heikin": 3.19,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.362
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 48.543,
        "saikou": 8.75,
        "heikin": 3.35,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.389
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 8.75,
        "heikin": 3.36,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.347
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 4.38,
        "heikin": 2.29,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.418
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 3.49,
        "heikin": 2.06,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.318
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 3.49,
        "heikin": 2.06,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.306
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 48.543,
        "saikou": 2.99,
        "heikin": 1.93,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.277
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 49.543,
        "saikou": 2.99,
        "heikin": 1.92,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.259
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 2.49,
        "heikin": 1.76,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.977
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 82.543,
        "saikou": 2.49,
        "heikin": 1.76,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.941
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.972
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 108.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.958
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.987
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 94.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.979
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 147.626,
        "saikou": 7.37,
        "heikin": 4.67,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 4.2
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 147.626,
        "saikou": 6.91,
        "heikin": 4.38,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.654
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 151.43,
        "saikou": 7.11,
        "heikin": 4.51,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.362
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 151.428,
        "saikou": 7.2,
        "heikin": 4.56,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.15
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 151.428,
        "saikou": 7.31,
        "heikin": 4.57,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.018
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 148.428,
        "saikou": 7.66,
        "heikin": 4.72,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.385
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 226.583,
        "saikou": 8.02,
        "heikin": 5.61,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 3.661
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 197.779,
        "saikou": 8.14,
        "heikin": 5.65,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 4.109
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 302.583,
        "saikou": 8.04,
        "heikin": 6.14,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.352
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 292.103,
        "saikou": 8.09,
        "heikin": 6.18,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.83
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 289.631,
        "saikou": 8.09,
        "heikin": 6.18,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 5.077
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 286.331,
        "saikou": 8.2,
        "heikin": 6.26,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.93
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 306.307,
        "saikou": 8.13,
        "heikin": 6.18,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 4.443
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 313.317,
        "saikou": 8.06,
        "heikin": 6.12,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 3.636
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 312.317,
        "saikou": 6.76,
        "heikin": 5.18,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 2.752
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 152.317,
        "saikou": 5.73,
        "heikin": 3.52,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 2.764
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 136.317,
        "saikou": 4.16,
        "heikin": 2.51,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 2.966
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 186.317,
        "saikou": 4.05,
        "heikin": 3.03,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 3.18
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 175.868,
        "saikou": 3.34,
        "heikin": 2.46,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 3.204
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 175.868,
        "saikou": 2.96,
        "heikin": 2.27,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 3.042
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 167.936,
        "saikou": 3.05,
        "heikin": 2.32,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 2.912
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 165.947,
        "saikou": 3,
        "heikin": 2.3,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 2.959
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 174.312,
        "saikou": 2.26,
        "heikin": 1.78,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 2.87
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 168.501,
        "saikou": 2.26,
        "heikin": 1.82,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 2.812
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 155.075,
        "saikou": 1.2,
        "heikin": 0.59,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 2.31
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 162.692,
        "saikou": 1.32,
        "heikin": 0.64,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 2.506
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 166.727,
        "saikou": 3.25,
        "heikin": 2.46,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 2.923
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 181.71,
        "saikou": 4.51,
        "heikin": 3.24,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 3.481
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 183.696,
        "saikou": 3.9,
        "heikin": 2.85,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 3.71
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 179.844,
        "saikou": 7.99,
        "heikin": 5.31,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 4.193
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 247.696,
        "saikou": 9.27,
        "heikin": 7.44,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 4.374
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 215.696,
        "saikou": 8.22,
        "heikin": 6.29,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 5.022
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 246.696,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 5.873
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 254.696,
        "saikou": 10,
        "heikin": 7.83,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 6.188
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 243.721,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.203
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 250.707,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.32
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 232.657,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.368
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 234.633,
        "saikou": 10,
        "heikin": 7.86,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.321
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 242.878,
        "saikou": 9.06,
        "heikin": 7.17,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.08
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 244.867,
        "saikou": 8.06,
        "heikin": 6.43,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.62
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 244.211,
        "saikou": 7.97,
        "heikin": 6.33,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.599
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 232.211,
        "saikou": 7.81,
        "heikin": 6.13,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.4
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 250.157,
        "saikou": 8.06,
        "heikin": 6.26,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.304
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 251.157,
        "saikou": 8.21,
        "heikin": 6.08,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.217
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 251.157,
        "saikou": 8.39,
        "heikin": 6.31,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.332
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 181.127,
        "saikou": 7.97,
        "heikin": 5.46,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 4.961
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 203.133,
        "saikou": 8.31,
        "heikin": 5.76,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 4.796
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 165.783,
        "saikou": 8.11,
        "heikin": 4.93,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 3.955
      }
    ]
  }
};
