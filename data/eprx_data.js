// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/11〜2026/10/10）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-11",
  "fetchedAt": "2026-10-11",
  "avgWindowLabel": "過去30日平均（2026/09/11〜2026/10/10）",
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
      "ouatsu": 1305.858,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1188.2,
      "heikinAvg30d": 2.663
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1349.361,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1188.2,
      "heikinAvg30d": 2.565
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1459.094,
      "saikou": 9.91,
      "heikin": 3.11,
      "boshuAvg30d": 1188.2,
      "heikinAvg30d": 2.596
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1516.684,
      "saikou": 9.91,
      "heikin": 2.63,
      "boshuAvg30d": 1188.2,
      "heikinAvg30d": 2.564
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1450.733,
      "saikou": 9.91,
      "heikin": 3.02,
      "boshuAvg30d": 1183.9,
      "heikinAvg30d": 2.54
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1416.039,
      "saikou": 9.43,
      "heikin": 2.81,
      "boshuAvg30d": 1182.9,
      "heikinAvg30d": 2.661
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1550.095,
      "saikou": 9.91,
      "heikin": 3.48,
      "boshuAvg30d": 1199.1,
      "heikinAvg30d": 2.768
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1551.043,
      "saikou": 7.97,
      "heikin": 3.61,
      "boshuAvg30d": 1200.4,
      "heikinAvg30d": 2.928
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1584.246,
      "saikou": 9.91,
      "heikin": 4,
      "boshuAvg30d": 1203.1,
      "heikinAvg30d": 3.0
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1543.49,
      "saikou": 7.63,
      "heikin": 4.12,
      "boshuAvg30d": 1203.4,
      "heikinAvg30d": 3.115
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1472.18,
      "saikou": 10,
      "heikin": 4.15,
      "boshuAvg30d": 1203.4,
      "heikinAvg30d": 3.211
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1448.377,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1203.4,
      "heikinAvg30d": 3.255
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1491.517,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1267.4,
      "heikinAvg30d": 3.354
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1417.744,
      "saikou": 9.91,
      "heikin": 2.78,
      "boshuAvg30d": 1289.1,
      "heikinAvg30d": 3.162
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1566.276,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1311.4,
      "heikinAvg30d": 2.887
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1482.444,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1329.1,
      "heikinAvg30d": 2.773
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1298.71,
      "saikou": 10,
      "heikin": 2.33,
      "boshuAvg30d": 1329.7,
      "heikinAvg30d": 2.971
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1356.198,
      "saikou": 10,
      "heikin": 2.46,
      "boshuAvg30d": 1329.7,
      "heikinAvg30d": 3.04
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1137,
      "ouatsu": 1393.221,
      "saikou": 10,
      "heikin": 2.01,
      "boshuAvg30d": 1302.6,
      "heikinAvg30d": 3.209
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1140,
      "ouatsu": 1508.89,
      "saikou": 10,
      "heikin": 2.23,
      "boshuAvg30d": 1306.3,
      "heikinAvg30d": 3.232
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1145,
      "ouatsu": 1415.235,
      "saikou": 10,
      "heikin": 2.28,
      "boshuAvg30d": 1313.3,
      "heikinAvg30d": 3.277
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1145,
      "ouatsu": 1444.619,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1313.3,
      "heikinAvg30d": 3.215
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1142,
      "ouatsu": 1438.388,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1310.3,
      "heikinAvg30d": 3.158
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1141,
      "ouatsu": 1410.7,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1309.3,
      "heikinAvg30d": 3.078
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1121,
      "ouatsu": 1379.664,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1295.1,
      "heikinAvg30d": 2.999
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1121,
      "ouatsu": 1424.484,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1295.1,
      "heikinAvg30d": 3.016
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1121,
      "ouatsu": 1465.76,
      "saikou": 10,
      "heikin": 1.9,
      "boshuAvg30d": 1292.1,
      "heikinAvg30d": 3.139
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1119,
      "ouatsu": 1447.781,
      "saikou": 10,
      "heikin": 2.21,
      "boshuAvg30d": 1287.7,
      "heikinAvg30d": 3.162
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1116,
      "ouatsu": 1448.311,
      "saikou": 10,
      "heikin": 2.01,
      "boshuAvg30d": 1283.4,
      "heikinAvg30d": 3.157
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1110,
      "ouatsu": 1484.08,
      "saikou": 10,
      "heikin": 2.37,
      "boshuAvg30d": 1276.7,
      "heikinAvg30d": 3.245
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1328.846,
      "saikou": 10,
      "heikin": 2.51,
      "boshuAvg30d": 1308.1,
      "heikinAvg30d": 3.191
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1310.183,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1308.1,
      "heikinAvg30d": 3.383
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1337.305,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1308.4,
      "heikinAvg30d": 3.66
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1331.845,
      "saikou": 9.91,
      "heikin": 3.94,
      "boshuAvg30d": 1306.7,
      "heikinAvg30d": 3.945
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1241.471,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1299.2,
      "heikinAvg30d": 4.029
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1298.432,
      "saikou": 8.08,
      "heikin": 3.8,
      "boshuAvg30d": 1294.5,
      "heikinAvg30d": 4.09
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1398.262,
      "saikou": 9.91,
      "heikin": 3.8,
      "boshuAvg30d": 1287.5,
      "heikinAvg30d": 4.091
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1651.234,
      "saikou": 8.9,
      "heikin": 3.34,
      "boshuAvg30d": 1287.5,
      "heikinAvg30d": 4.022
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1701.015,
      "saikou": 9.91,
      "heikin": 3.47,
      "boshuAvg30d": 1287.8,
      "heikinAvg30d": 3.911
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1639.808,
      "saikou": 8.8,
      "heikin": 3.26,
      "boshuAvg30d": 1286.8,
      "heikinAvg30d": 3.749
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1656.437,
      "saikou": 9.91,
      "heikin": 3.5,
      "boshuAvg30d": 1280.8,
      "heikinAvg30d": 3.648
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1587.946,
      "saikou": 9.83,
      "heikin": 3.33,
      "boshuAvg30d": 1278.1,
      "heikinAvg30d": 3.563
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1065,
      "ouatsu": 1675.834,
      "saikou": 9.91,
      "heikin": 3.47,
      "boshuAvg30d": 1197.6,
      "heikinAvg30d": 3.399
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1068,
      "ouatsu": 1594.418,
      "saikou": 8.7,
      "heikin": 3.44,
      "boshuAvg30d": 1200.6,
      "heikinAvg30d": 3.528
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1069,
      "ouatsu": 1483.486,
      "saikou": 9.91,
      "heikin": 3.85,
      "boshuAvg30d": 1202.0,
      "heikinAvg30d": 3.374
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1064,
      "ouatsu": 1554.037,
      "saikou": 8.39,
      "heikin": 3.04,
      "boshuAvg30d": 1195.6,
      "heikinAvg30d": 3.248
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1055,
      "ouatsu": 1596.769,
      "saikou": 9.91,
      "heikin": 3.25,
      "boshuAvg30d": 1188.0,
      "heikinAvg30d": 3.208
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1048,
      "ouatsu": 1496.463,
      "saikou": 7.64,
      "heikin": 2.39,
      "boshuAvg30d": 1180.3,
      "heikinAvg30d": 2.96
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
        "ouatsu": 81.468,
        "saikou": 9.91,
        "heikin": 8.22,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.403
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 28.918,
        "saikou": 5,
        "heikin": 4.63,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.152
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 69.518,
        "saikou": 9.91,
        "heikin": 8.58,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.234
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 26.968,
        "saikou": 5.71,
        "heikin": 5.37,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.139
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 73.458,
        "saikou": 9.91,
        "heikin": 8.43,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.406
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 8.3,
        "heikin": 5.52,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.629
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 71.508,
        "saikou": 9.91,
        "heikin": 8.62,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.526
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 28.958,
        "saikou": 7.7,
        "heikin": 6.66,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.354
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 71.468,
        "saikou": 9.91,
        "heikin": 9.44,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.392
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 28.918,
        "saikou": 7.34,
        "heikin": 6.55,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.384
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 69.518,
        "saikou": 9.91,
        "heikin": 8.76,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.508
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 28.958,
        "saikou": 9.89,
        "heikin": 9.07,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.677
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 73.458,
        "saikou": 9.91,
        "heikin": 8.06,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.908
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 112.458,
        "saikou": 9.91,
        "heikin": 7.32,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.799
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 69.908,
        "saikou": 7.09,
        "heikin": 3.91,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.473
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 105.508,
        "saikou": 9.91,
        "heikin": 6.58,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.259
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 65.968,
        "saikou": 7.59,
        "heikin": 3.2,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 0.948
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 69.518,
        "saikou": 9.91,
        "heikin": 6.45,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 0.97
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 28.918,
        "saikou": 1,
        "heikin": 1,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 0.909
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 103.518,
        "saikou": 9.91,
        "heikin": 4.46,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 0.914
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 64.908,
        "saikou": 9.8,
        "heikin": 4.24,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.121
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 103.518,
        "saikou": 9.91,
        "heikin": 4.47,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 0.995
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 64.908,
        "saikou": 9.8,
        "heikin": 4.29,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.026
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 62.958,
        "saikou": 9.8,
        "heikin": 4.35,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.066
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 71.468,
        "saikou": 9.91,
        "heikin": 9.06,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 0.998
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 71.508,
        "saikou": 9.91,
        "heikin": 8.16,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.1
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 30.908,
        "saikou": 6.7,
        "heikin": 4.51,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.219
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 67.55,
        "saikou": 9.91,
        "heikin": 6.61,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.05
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 8.45,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.301
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 105.508,
        "saikou": 9.91,
        "heikin": 6.5,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.468
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 69.908,
        "saikou": 5.35,
        "heikin": 3.3,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.12
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 69.518,
        "saikou": 9.91,
        "heikin": 7.56,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.902
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 28.918,
        "saikou": 7.79,
        "heikin": 6.87,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 3.004
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 69.518,
        "saikou": 9.91,
        "heikin": 8.36,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 3.352
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 1.99,
        "saikou": 8.5,
        "heikin": 8.5,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 3.427
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 0,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 3.477
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 44.5,
        "saikou": 9.91,
        "heikin": 9.69,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 3.159
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 30.908,
        "saikou": 8.9,
        "heikin": 5.56,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 3.24
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 73.458,
        "saikou": 9.91,
        "heikin": 7.89,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 2.649
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 30.908,
        "saikou": 8.8,
        "heikin": 4.56,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 2.537
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 71.468,
        "saikou": 9.91,
        "heikin": 9.52,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 2.253
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 28.918,
        "saikou": 9.83,
        "heikin": 8.9,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.964
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 73.458,
        "saikou": 9.91,
        "heikin": 8.94,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.866
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 8.7,
        "heikin": 7.5,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.306
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 73.458,
        "saikou": 9.91,
        "heikin": 8.81,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.919
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 28.918,
        "saikou": 8.39,
        "heikin": 7.66,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.951
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 71.468,
        "saikou": 9.91,
        "heikin": 8.71,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.916
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 30.908,
        "saikou": 7.64,
        "heikin": 7.02,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.81
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 75.066,
        "saikou": 10,
        "heikin": 4.97,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 7.069
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 75.102,
        "saikou": 10,
        "heikin": 5.54,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 7.329
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 94.98,
        "saikou": 6.59,
        "heikin": 5.31,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 7.411
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 96.94,
        "saikou": 7.01,
        "heikin": 5.68,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 7.48
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 96.94,
        "saikou": 7.01,
        "heikin": 5.66,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 7.524
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 84.94,
        "saikou": 6.82,
        "heikin": 5.9,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 7.595
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 97.904,
        "saikou": 6.28,
        "heikin": 5.56,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 7.574
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 99.404,
        "saikou": 6.25,
        "heikin": 5.45,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 7.512
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 101.403,
        "saikou": 6.06,
        "heikin": 5.26,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 7.489
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 101.403,
        "saikou": 6.13,
        "heikin": 5.36,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 7.463
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 101.403,
        "saikou": 10,
        "heikin": 6.04,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 7.564
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 101.403,
        "saikou": 10,
        "heikin": 6.1,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 7.604
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 101.439,
        "saikou": 10,
        "heikin": 6.81,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 7.708
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 87.939,
        "saikou": 8.56,
        "heikin": 7.14,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 7.829
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 101.439,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 8.017
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 111.939,
        "saikou": 10,
        "heikin": 7.49,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 8.164
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 113.439,
        "saikou": 10,
        "heikin": 7.87,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 8.449
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 111.939,
        "saikou": 10,
        "heikin": 8.23,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 8.349
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 115.435,
        "saikou": 10,
        "heikin": 8.43,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 8.228
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 115.435,
        "saikou": 10,
        "heikin": 8.49,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 8.349
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 111.48,
        "saikou": 10,
        "heikin": 8.55,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 8.342
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 100.81,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 8.403
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 104.765,
        "saikou": 10,
        "heikin": 8.64,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 8.414
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 104.765,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 8.379
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 100.768,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 8.437
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 102.769,
        "saikou": 10,
        "heikin": 8.51,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 8.357
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 114.085,
        "saikou": 10,
        "heikin": 8.45,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 8.076
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 113.439,
        "saikou": 10,
        "heikin": 8.51,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 7.816
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 101.439,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 7.827
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 103.435,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 7.146
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 91.435,
        "saikou": 10,
        "heikin": 6.82,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 7.394
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 91.435,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 6.891
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 79.399,
        "saikou": 10,
        "heikin": 4.38,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 6.914
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 77.899,
        "saikou": 6.94,
        "heikin": 4.17,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 6.853
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 65.403,
        "saikou": 10,
        "heikin": 4.39,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 6.777
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 63.903,
        "saikou": 4.79,
        "heikin": 3.96,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 6.479
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 65.403,
        "saikou": 4.79,
        "heikin": 3.82,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.628
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 61.938,
        "saikou": 4.06,
        "heikin": 3.82,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.356
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 54.733,
        "saikou": 3.37,
        "heikin": 3.37,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.504
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 54.733,
        "saikou": 4.29,
        "heikin": 3.95,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 6.608
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 49.428,
        "saikou": 4,
        "heikin": 3.89,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 6.576
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 50.778,
        "saikou": 4.29,
        "heikin": 3.92,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 6.664
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 53.383,
        "saikou": 3.79,
        "heikin": 3.56,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 6.831
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 53.383,
        "saikou": 3.19,
        "heikin": 3.19,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 6.887
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 66.733,
        "saikou": 4.73,
        "heikin": 4.23,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 6.957
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 63.483,
        "saikou": 5.41,
        "heikin": 4.38,
        "boshuAvg30d": 88.5,
        "heikinAvg30d": 6.911
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 63.483,
        "saikou": 5.49,
        "heikin": 4.91,
        "boshuAvg30d": 87.1,
        "heikinAvg30d": 7.072
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 87.333,
        "saikou": 5.87,
        "heikin": 4.51,
        "boshuAvg30d": 86.5,
        "heikinAvg30d": 7.296
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 301.109,
        "saikou": 6.6,
        "heikin": 5.02,
        "boshuAvg30d": 387.0,
        "heikinAvg30d": 3.484
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 297.907,
        "saikou": 8.5,
        "heikin": 5.79,
        "boshuAvg30d": 387.0,
        "heikinAvg30d": 3.477
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 362.618,
        "saikou": 8.86,
        "heikin": 5.04,
        "boshuAvg30d": 387.0,
        "heikinAvg30d": 3.321
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 422.876,
        "saikou": 9.91,
        "heikin": 4.62,
        "boshuAvg30d": 387.0,
        "heikinAvg30d": 3.319
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 410.904,
        "saikou": 9.91,
        "heikin": 4.51,
        "boshuAvg30d": 385.3,
        "heikinAvg30d": 3.238
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 392.466,
        "saikou": 9.43,
        "heikin": 4.64,
        "boshuAvg30d": 385.0,
        "heikinAvg30d": 3.27
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 402.344,
        "saikou": 8.04,
        "heikin": 5.27,
        "boshuAvg30d": 383.6,
        "heikinAvg30d": 3.275
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 404.583,
        "saikou": 7.97,
        "heikin": 5.28,
        "boshuAvg30d": 385.0,
        "heikinAvg30d": 3.478
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 369.23,
        "saikou": 7.43,
        "heikin": 5.47,
        "boshuAvg30d": 385.6,
        "heikinAvg30d": 3.569
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 373,
        "saikou": 7.63,
        "heikin": 5.43,
        "boshuAvg30d": 386.0,
        "heikinAvg30d": 3.683
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 266.9,
        "saikou": 5.37,
        "heikin": 4.45,
        "boshuAvg30d": 386.0,
        "heikinAvg30d": 3.598
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 301.057,
        "saikou": 5.43,
        "heikin": 4.79,
        "boshuAvg30d": 386.0,
        "heikinAvg30d": 3.735
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 275.37,
        "saikou": 4.95,
        "heikin": 2.68,
        "boshuAvg30d": 406.3,
        "heikinAvg30d": 3.952
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 299.955,
        "saikou": 6.7,
        "heikin": 3.07,
        "boshuAvg30d": 414.3,
        "heikinAvg30d": 4.127
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 459.155,
        "saikou": 10,
        "heikin": 4.43,
        "boshuAvg30d": 419.3,
        "heikinAvg30d": 3.791
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 299.955,
        "saikou": 6.7,
        "heikin": 2.76,
        "boshuAvg30d": 424.3,
        "heikinAvg30d": 3.642
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 301.921,
        "saikou": 6.7,
        "heikin": 2.76,
        "boshuAvg30d": 424.3,
        "heikinAvg30d": 3.909
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 283.482,
        "saikou": 6.7,
        "heikin": 3,
        "boshuAvg30d": 424.3,
        "heikinAvg30d": 3.933
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 283.482,
        "saikou": 6.7,
        "heikin": 2.99,
        "boshuAvg30d": 421.6,
        "heikinAvg30d": 4.236
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 274.016,
        "saikou": 6.79,
        "heikin": 3.3,
        "boshuAvg30d": 421.6,
        "heikinAvg30d": 4.315
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 239.761,
        "saikou": 7.49,
        "heikin": 3.74,
        "boshuAvg30d": 421.6,
        "heikinAvg30d": 4.238
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 239.761,
        "saikou": 7.49,
        "heikin": 3.79,
        "boshuAvg30d": 420.6,
        "heikinAvg30d": 4.083
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 256.83,
        "saikou": 6.99,
        "heikin": 3.56,
        "boshuAvg30d": 418.0,
        "heikinAvg30d": 4.061
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 252.978,
        "saikou": 6.79,
        "heikin": 3.46,
        "boshuAvg30d": 418.0,
        "heikinAvg30d": 3.959
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 279.419,
        "saikou": 7.2,
        "heikin": 2.96,
        "boshuAvg30d": 416.3,
        "heikinAvg30d": 3.922
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 283.482,
        "saikou": 7.07,
        "heikin": 2.81,
        "boshuAvg30d": 416.3,
        "heikinAvg30d": 3.857
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 301.919,
        "saikou": 6.49,
        "heikin": 2.26,
        "boshuAvg30d": 413.3,
        "heikinAvg30d": 3.977
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 301.919,
        "saikou": 6.95,
        "heikin": 2.29,
        "boshuAvg30d": 413.0,
        "heikinAvg30d": 4.077
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 299.934,
        "saikou": 4.6,
        "heikin": 2.21,
        "boshuAvg30d": 412.0,
        "heikinAvg30d": 3.948
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 301.848,
        "saikou": 5.02,
        "heikin": 2.02,
        "boshuAvg30d": 411.6,
        "heikinAvg30d": 3.841
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 294.03,
        "saikou": 4.54,
        "heikin": 2.78,
        "boshuAvg30d": 410.3,
        "heikinAvg30d": 3.803
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 315.811,
        "saikou": 5.6,
        "heikin": 3.49,
        "boshuAvg30d": 410.3,
        "heikinAvg30d": 3.743
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 322.704,
        "saikou": 5.23,
        "heikin": 2.94,
        "boshuAvg30d": 410.3,
        "heikinAvg30d": 4.062
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 408.828,
        "saikou": 5.42,
        "heikin": 2.85,
        "boshuAvg30d": 410.2,
        "heikinAvg30d": 4.291
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 387.861,
        "saikou": 4.54,
        "heikin": 2.62,
        "boshuAvg30d": 406.1,
        "heikinAvg30d": 4.204
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 433.178,
        "saikou": 6.78,
        "heikin": 3.15,
        "boshuAvg30d": 405.7,
        "heikinAvg30d": 4.134
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 496.035,
        "saikou": 6.44,
        "heikin": 2.44,
        "boshuAvg30d": 408.1,
        "heikinAvg30d": 4.309
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 650.756,
        "saikou": 6.4,
        "heikin": 2.35,
        "boshuAvg30d": 408.1,
        "heikinAvg30d": 4.149
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 653.259,
        "saikou": 4.81,
        "heikin": 2.35,
        "boshuAvg30d": 408.4,
        "heikinAvg30d": 4.148
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 626.821,
        "saikou": 5.48,
        "heikin": 2.35,
        "boshuAvg30d": 408.4,
        "heikinAvg30d": 4.03
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 580.145,
        "saikou": 5.31,
        "heikin": 2.44,
        "boshuAvg30d": 406.4,
        "heikinAvg30d": 4.006
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 597.799,
        "saikou": 5.36,
        "heikin": 2.53,
        "boshuAvg30d": 406.4,
        "heikinAvg30d": 3.946
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 610.781,
        "saikou": 3.9,
        "heikin": 1.96,
        "boshuAvg30d": 405.7,
        "heikinAvg30d": 3.834
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 576.945,
        "saikou": 3.49,
        "heikin": 2.43,
        "boshuAvg30d": 405.7,
        "heikinAvg30d": 4.007
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 444.974,
        "saikou": 5.37,
        "heikin": 2.63,
        "boshuAvg30d": 406.1,
        "heikinAvg30d": 3.694
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 539.398,
        "saikou": 5.34,
        "heikin": 2.41,
        "boshuAvg30d": 404.1,
        "heikinAvg30d": 3.852
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 539.58,
        "saikou": 5.29,
        "heikin": 2.68,
        "boshuAvg30d": 402.1,
        "heikinAvg30d": 3.954
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 545.395,
        "saikou": 5.29,
        "heikin": 2.66,
        "boshuAvg30d": 401.1,
        "heikinAvg30d": 3.948
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 288.941,
        "saikou": 1.9,
        "heikin": 1.03,
        "boshuAvg30d": 72.8,
        "heikinAvg30d": 1.95
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 309.21,
        "saikou": 1.83,
        "heikin": 1.11,
        "boshuAvg30d": 72.8,
        "heikinAvg30d": 1.735
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 331.046,
        "saikou": 1.9,
        "heikin": 1.35,
        "boshuAvg30d": 72.8,
        "heikinAvg30d": 1.755
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 332.958,
        "saikou": 1.87,
        "heikin": 1.29,
        "boshuAvg30d": 72.8,
        "heikinAvg30d": 1.824
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 316.914,
        "saikou": 2.38,
        "heikin": 1.5,
        "boshuAvg30d": 71.8,
        "heikinAvg30d": 1.717
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 320.933,
        "saikou": 1.9,
        "heikin": 1.41,
        "boshuAvg30d": 71.8,
        "heikinAvg30d": 1.748
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 344.646,
        "saikou": 2.2,
        "heikin": 1.27,
        "boshuAvg30d": 71.4,
        "heikinAvg30d": 1.697
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 340.846,
        "saikou": 2.2,
        "heikin": 1.31,
        "boshuAvg30d": 71.4,
        "heikinAvg30d": 1.881
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 346.546,
        "saikou": 1.9,
        "heikin": 1.24,
        "boshuAvg30d": 71.8,
        "heikinAvg30d": 1.936
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 346.546,
        "saikou": 2.8,
        "heikin": 1.5,
        "boshuAvg30d": 71.8,
        "heikinAvg30d": 1.844
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 340.736,
        "saikou": 3.43,
        "heikin": 1.45,
        "boshuAvg30d": 71.8,
        "heikinAvg30d": 1.919
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 339.236,
        "saikou": 3.57,
        "heikin": 1.5,
        "boshuAvg30d": 71.8,
        "heikinAvg30d": 1.946
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 318.927,
        "saikou": 2.4,
        "heikin": 1.46,
        "boshuAvg30d": 81.4,
        "heikinAvg30d": 2.076
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 251.977,
        "saikou": 1.94,
        "heikin": 1.12,
        "boshuAvg30d": 84.8,
        "heikinAvg30d": 2.144
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 251.977,
        "saikou": 2.22,
        "heikin": 1.18,
        "boshuAvg30d": 87.8,
        "heikinAvg30d": 2.129
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 186.788,
        "saikou": 2.14,
        "heikin": 1.2,
        "boshuAvg30d": 89.8,
        "heikinAvg30d": 2.061
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 175.609,
        "saikou": 2.43,
        "heikin": 1.31,
        "boshuAvg30d": 89.8,
        "heikinAvg30d": 2.282
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 187.535,
        "saikou": 2.42,
        "heikin": 1.29,
        "boshuAvg30d": 89.8,
        "heikinAvg30d": 2.324
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 189.425,
        "saikou": 3.24,
        "heikin": 1.78,
        "boshuAvg30d": 94.1,
        "heikinAvg30d": 2.623
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 189.425,
        "saikou": 3.24,
        "heikin": 1.8,
        "boshuAvg30d": 94.1,
        "heikinAvg30d": 2.642
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 182.507,
        "saikou": 3.84,
        "heikin": 1.95,
        "boshuAvg30d": 94.8,
        "heikinAvg30d": 2.914
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 184.497,
        "saikou": 7.48,
        "heikin": 2.56,
        "boshuAvg30d": 94.1,
        "heikinAvg30d": 2.962
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 187.435,
        "saikou": 7.48,
        "heikin": 2.32,
        "boshuAvg30d": 93.1,
        "heikinAvg30d": 2.871
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 175.484,
        "saikou": 7.48,
        "heikin": 2.32,
        "boshuAvg30d": 92.1,
        "heikinAvg30d": 2.796
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 183.457,
        "saikou": 7.48,
        "heikin": 2.28,
        "boshuAvg30d": 88.8,
        "heikinAvg30d": 2.72
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 192.746,
        "saikou": 3.38,
        "heikin": 1.89,
        "boshuAvg30d": 88.8,
        "heikinAvg30d": 2.767
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 196.635,
        "saikou": 3.29,
        "heikin": 1.76,
        "boshuAvg30d": 88.8,
        "heikinAvg30d": 2.634
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 196.635,
        "saikou": 3.2,
        "heikin": 1.71,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.632
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 198.625,
        "saikou": 9.48,
        "heikin": 2.47,
        "boshuAvg30d": 87.8,
        "heikinAvg30d": 2.808
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 198.625,
        "saikou": 9.48,
        "heikin": 2.66,
        "boshuAvg30d": 87.8,
        "heikinAvg30d": 2.878
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 234.377,
        "saikou": 7.48,
        "heikin": 2.09,
        "boshuAvg30d": 86.4,
        "heikinAvg30d": 2.611
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 210.963,
        "saikou": 7.59,
        "heikin": 2.86,
        "boshuAvg30d": 86.4,
        "heikinAvg30d": 2.588
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 242.307,
        "saikou": 3.2,
        "heikin": 2.39,
        "boshuAvg30d": 86.4,
        "heikinAvg30d": 2.413
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 162.504,
        "saikou": 7.48,
        "heikin": 2.72,
        "boshuAvg30d": 86.4,
        "heikinAvg30d": 2.657
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 197.711,
        "saikou": 5.1,
        "heikin": 1.73,
        "boshuAvg30d": 86.4,
        "heikinAvg30d": 2.534
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 223.671,
        "saikou": 2.67,
        "heikin": 2.17,
        "boshuAvg30d": 86.1,
        "heikinAvg30d": 2.499
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 221.284,
        "saikou": 2.92,
        "heikin": 2.04,
        "boshuAvg30d": 84.1,
        "heikinAvg30d": 2.257
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 336.592,
        "saikou": 2.7,
        "heikin": 1.7,
        "boshuAvg30d": 84.1,
        "heikinAvg30d": 2.188
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 343.391,
        "saikou": 2.12,
        "heikin": 1.93,
        "boshuAvg30d": 84.1,
        "heikinAvg30d": 2.006
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 347.193,
        "saikou": 2.61,
        "heikin": 2.17,
        "boshuAvg30d": 84.1,
        "heikinAvg30d": 2.092
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 340.19,
        "saikou": 2.6,
        "heikin": 2.11,
        "boshuAvg30d": 84.1,
        "heikinAvg30d": 2.062
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 319.19,
        "saikou": 2.81,
        "heikin": 2.23,
        "boshuAvg30d": 84.1,
        "heikinAvg30d": 2.098
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 324.118,
        "saikou": 2.64,
        "heikin": 2.13,
        "boshuAvg30d": 84.4,
        "heikinAvg30d": 1.924
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 318.088,
        "saikou": 2.7,
        "heikin": 2.21,
        "boshuAvg30d": 85.4,
        "heikinAvg30d": 2.119
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 253.333,
        "saikou": 4.26,
        "heikin": 2.66,
        "boshuAvg30d": 85.4,
        "heikinAvg30d": 2.151
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 271.554,
        "saikou": 3.86,
        "heikin": 2.2,
        "boshuAvg30d": 84.4,
        "heikinAvg30d": 2.075
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 271.554,
        "saikou": 3.72,
        "heikin": 2.3,
        "boshuAvg30d": 83.4,
        "heikinAvg30d": 2.034
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 270.054,
        "saikou": 3.78,
        "heikin": 2.39,
        "boshuAvg30d": 80.4,
        "heikinAvg30d": 2.038
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 80.93,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 0.824
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 0.996
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.7,
        "heikin": 0.45,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 1.004
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 1.106
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.5,
        "heikin": 0.44,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 1.122
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.5,
        "heikin": 0.44,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 0.945
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 1.154
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 1.11,
        "heikin": 0.8,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 1.396
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 1.29
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.3,
        "heikin": 2.21,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 1.353
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.19,
        "heikin": 2.15,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 1.564
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 10.328,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 1.549
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 47.928,
        "saikou": 3.49,
        "heikin": 2.47,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.707
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 82.928,
        "saikou": 1.1,
        "heikin": 0.83,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.627
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.517
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.546
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.055
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.124
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.35,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.568
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.474
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 3.417
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.626
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 3.137
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.782
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.7,
        "heikin": 3.89,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.255
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.45,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.313
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.449
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.319
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.6,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.218
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.5,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.917
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.45,
        "heikin": 5.27,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.518
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 61.288,
        "saikou": 5.75,
        "heikin": 1.18,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 3.155
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.384
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 2.95,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.426
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.292
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.97,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.049
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.51
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.571
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.571
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.729
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.017
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.779
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.25,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.834
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.899
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.48,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.983
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.668
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.538
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 60.132,
        "saikou": 2.45,
        "heikin": 0.52,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.12
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 94.009,
        "saikou": 1.68,
        "heikin": 1.5,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 1.959
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 163.039,
        "saikou": 1.59,
        "heikin": 0.91,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 1.627
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 122.141,
        "saikou": 1.56,
        "heikin": 1,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 1.543
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 133.163,
        "saikou": 1.55,
        "heikin": 0.99,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 1.487
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 85.738,
        "saikou": 1.55,
        "heikin": 0.91,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.455
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 135.013,
        "saikou": 1.57,
        "heikin": 1,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 1.59
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 142.9,
        "saikou": 1.6,
        "heikin": 1.1,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.732
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 144.898,
        "saikou": 1.49,
        "heikin": 0.95,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.884
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 144.898,
        "saikou": 1.5,
        "heikin": 1.04,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 1.802
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 144.898,
        "saikou": 1.99,
        "heikin": 1.25,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 1.884
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 144.898,
        "saikou": 1.99,
        "heikin": 1.25,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 1.81
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 144.898,
        "saikou": 1.5,
        "heikin": 1.07,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 1.682
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 144.898,
        "saikou": 1.64,
        "heikin": 1.09,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.836
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 144.898,
        "saikou": 1.94,
        "heikin": 1.17,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.753
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 152.018,
        "saikou": 2.02,
        "heikin": 1.2,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 1.868
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 146.463,
        "saikou": 1.49,
        "heikin": 0.53,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 1.903
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 138.921,
        "saikou": 2,
        "heikin": 1.31,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.107
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 129.151,
        "saikou": 2.25,
        "heikin": 1.17,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.375
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 131.138,
        "saikou": 2.58,
        "heikin": 0.71,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 2.599
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 129.695,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 2.538
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 127.71,
        "saikou": 2.5,
        "heikin": 1,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 2.791
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 129.153,
        "saikou": 5.95,
        "heikin": 2.63,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.753
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 131.138,
        "saikou": 5.95,
        "heikin": 2.72,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 2.683
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 131.138,
        "saikou": 3.5,
        "heikin": 2.43,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 2.458
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 123.273,
        "saikou": 3,
        "heikin": 2.15,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.327
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 150.752,
        "saikou": 2.98,
        "heikin": 1.75,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.413
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 163.21,
        "saikou": 2.5,
        "heikin": 0.87,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.714
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 150.752,
        "saikou": 2.7,
        "heikin": 1.71,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 2.519
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 150.752,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.481
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 174.69,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.496
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 149.309,
        "saikou": 3.95,
        "heikin": 1.92,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.439
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 149.309,
        "saikou": 3.95,
        "heikin": 2.07,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.629
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 174.69,
        "saikou": 3.95,
        "heikin": 1.65,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.534
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 124.809,
        "saikou": 2.67,
        "heikin": 1.94,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.574
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 103.208,
        "saikou": 2.63,
        "heikin": 2.12,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.635
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 103.208,
        "saikou": 3.7,
        "heikin": 2.38,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.658
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 97.381,
        "saikou": 2.29,
        "heikin": 1.88,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.394
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 97.381,
        "saikou": 2.42,
        "heikin": 1.87,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.434
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 101.339,
        "saikou": 2,
        "heikin": 1.8,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.493
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 101.339,
        "saikou": 2.21,
        "heikin": 1.72,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.442
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 142.913,
        "saikou": 1.99,
        "heikin": 1.3,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.372
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 118.968,
        "saikou": 1.99,
        "heikin": 1.48,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.349
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2.02,
        "heikin": 1.67,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.259
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2.05,
        "heikin": 1.74,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.312
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 117.233,
        "saikou": 2.05,
        "heikin": 1.55,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.342
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 120.953,
        "saikou": 1.98,
        "heikin": 1.4,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.286
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 120.953,
        "saikou": 1.94,
        "heikin": 1.35,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 1.809
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 99.896,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.949
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 161.656,
        "saikou": 2.29,
        "heikin": 1.61,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.448
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 161.656,
        "saikou": 1.56,
        "heikin": 1.39,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.537
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 163.456,
        "saikou": 2.29,
        "heikin": 1.47,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.619
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 165.446,
        "saikou": 1.56,
        "heikin": 0.9,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.54
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 165.446,
        "saikou": 2.29,
        "heikin": 1.19,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.449
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 165.446,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.618
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.67,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.887
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 182.213,
        "saikou": 2.69,
        "heikin": 2.18,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.116
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 182.213,
        "saikou": 3.1,
        "heikin": 2.38,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.224
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 182.213,
        "saikou": 5.66,
        "heikin": 4.59,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.516
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 182.213,
        "saikou": 5.66,
        "heikin": 4.54,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.764
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 182.213,
        "saikou": 3.24,
        "heikin": 2.46,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.798
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 182.213,
        "saikou": 5.1,
        "heikin": 3.7,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 3.073
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 182.305,
        "saikou": 2.38,
        "heikin": 2.07,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 2.224
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 186.067,
        "saikou": 2.29,
        "heikin": 1.31,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 1.691
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 292.079,
        "saikou": 1.45,
        "heikin": 0.53,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.373
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 196.14,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.521
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 217.861,
        "saikou": 2.29,
        "heikin": 0.99,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.615
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 290.089,
        "saikou": 2.07,
        "heikin": 0.66,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.761
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 290.089,
        "saikou": 1.56,
        "heikin": 0.62,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 1.736
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 290.089,
        "saikou": 1.56,
        "heikin": 0.55,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 1.936
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 290.089,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.848
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 290.089,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.824
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 290.089,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.692
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 290.089,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.557
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 290.089,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.598
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 290.089,
        "saikou": 1.56,
        "heikin": 0.51,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.871
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 240.922,
        "saikou": 1.56,
        "heikin": 0.6,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.727
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 290.089,
        "saikou": 1.56,
        "heikin": 0.62,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.69
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 240.41,
        "saikou": 1.56,
        "heikin": 0.6,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.847
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 180.223,
        "saikou": 2.29,
        "heikin": 1.29,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.141
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 180.223,
        "saikou": 2.7,
        "heikin": 1.62,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.48
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 180.223,
        "saikou": 2.7,
        "heikin": 2.2,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.746
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 180.223,
        "saikou": 6.1,
        "heikin": 4.44,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.359
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 180.223,
        "saikou": 6.2,
        "heikin": 4.51,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.808
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 180.223,
        "saikou": 6.26,
        "heikin": 4.57,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.976
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 180.223,
        "saikou": 6.67,
        "heikin": 4.79,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 4.265
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 180.223,
        "saikou": 6.26,
        "heikin": 4.52,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 4.307
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 180.223,
        "saikou": 6.26,
        "heikin": 4.5,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.997
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 182.213,
        "saikou": 6.23,
        "heikin": 4.45,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.518
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 182.213,
        "saikou": 6.2,
        "heikin": 4.42,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.507
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 182.213,
        "saikou": 6.11,
        "heikin": 4.36,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 3.205
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 182.213,
        "saikou": 6.26,
        "heikin": 4.45,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.375
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 182.213,
        "saikou": 6.23,
        "heikin": 4.95,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.284
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 182.213,
        "saikou": 6.2,
        "heikin": 4.51,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.176
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 182.213,
        "saikou": 3.85,
        "heikin": 2.9,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.703
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 182.213,
        "saikou": 3.1,
        "heikin": 2.41,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.666
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 180.505,
        "saikou": 2.29,
        "heikin": 1.46,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.753
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 123.543,
        "saikou": 1.7,
        "heikin": 0.92,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.815
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 124.543,
        "saikou": 1.55,
        "heikin": 0.65,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.8
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 124.543,
        "saikou": 1.7,
        "heikin": 0.73,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.775
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 147.543,
        "saikou": 1.7,
        "heikin": 0.93,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.761
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 110.543,
        "saikou": 2.29,
        "heikin": 1.23,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.757
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.769
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.55,
        "heikin": 0.81,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.797
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 81,
        "saikou": 1.08,
        "heikin": 0.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.819
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.08,
        "heikin": 0.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.859
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.874
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.848
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.5,
        "heikin": 0.78,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.803
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.34,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.883
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 95.543,
        "saikou": 1.5,
        "heikin": 0.76,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 148.043,
        "saikou": 1.07,
        "heikin": 0.46,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.915
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 171.043,
        "saikou": 1.5,
        "heikin": 0.87,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.863
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 171.043,
        "saikou": 1.99,
        "heikin": 1.19,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.85
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 171.043,
        "saikou": 1.99,
        "heikin": 1.19,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.916
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 171.043,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.072
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 171.043,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.031
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 171.043,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.06
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 171.043,
        "saikou": 1.07,
        "heikin": 0.64,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.015
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 171.043,
        "saikou": 1.07,
        "heikin": 0.64,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.075
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 171.043,
        "saikou": 1.07,
        "heikin": 0.64,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.093
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 118.543,
        "saikou": 1.7,
        "heikin": 0.75,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.198
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 118.543,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.175
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.21,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.109
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.29,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.112
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.107
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.25,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.045
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.27,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.082
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 106.043,
        "saikou": 1.6,
        "heikin": 1.2,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.119
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 48.543,
        "saikou": 1.6,
        "heikin": 1.54,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.136
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 47.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.137
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 47.543,
        "saikou": 2.45,
        "heikin": 1.73,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.285
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 47.543,
        "saikou": 7.98,
        "heikin": 3.19,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.214
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 7.98,
        "heikin": 2.99,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.207
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.95,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.311
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.206
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.233
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 2.2,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.203
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.169
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.7,
        "heikin": 1.64,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.832
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.798
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.828
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.81
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.43,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.837
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.873
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 99.136,
        "saikou": 7.31,
        "heikin": 3.67,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.936
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 106.058,
        "saikou": 6.78,
        "heikin": 3.46,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.405
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 107.864,
        "saikou": 6.61,
        "heikin": 3.39,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.091
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 107.862,
        "saikou": 6.31,
        "heikin": 3.25,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 2.917
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 107.862,
        "saikou": 6.44,
        "heikin": 3.26,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 2.843
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 107.862,
        "saikou": 6.76,
        "heikin": 3.44,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.175
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 168.017,
        "saikou": 6.99,
        "heikin": 4.28,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.482
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 221.213,
        "saikou": 7.23,
        "heikin": 5.07,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.873
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 253.017,
        "saikou": 6.8,
        "heikin": 5.23,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 4.116
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 251.041,
        "saikou": 6.89,
        "heikin": 6.08,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 4.509
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 251.041,
        "saikou": 7.04,
        "heikin": 6.26,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 4.744
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 247.741,
        "saikou": 6.88,
        "heikin": 5.28,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 4.63
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 251.741,
        "saikou": 6.93,
        "heikin": 5.04,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 4.176
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 159.741,
        "saikou": 2.71,
        "heikin": 1.8,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 3.478
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 114.741,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 2.613
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 164.741,
        "saikou": 2.18,
        "heikin": 1.34,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 2.604
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 131.741,
        "saikou": 2.12,
        "heikin": 1.58,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 2.84
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 181.741,
        "saikou": 1.49,
        "heikin": 0.71,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 3.151
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 179.763,
        "saikou": 1.7,
        "heikin": 0.8,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 3.135
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 231.741,
        "saikou": 1.68,
        "heikin": 0.69,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 3.002
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 223.809,
        "saikou": 1.5,
        "heikin": 0.64,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 2.89
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 221.82,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 2.972
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 228.252,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 2.878
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 218.317,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 2.836
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 208.719,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 2.376
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 210.667,
        "saikou": 1,
        "heikin": 0.41,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 2.573
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 227.943,
        "saikou": 1.44,
        "heikin": 0.55,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 2.958
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 235.593,
        "saikou": 1.3,
        "heikin": 0.54,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 3.505
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 235.593,
        "saikou": 1.5,
        "heikin": 0.52,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 3.714
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 218.593,
        "saikou": 2.34,
        "heikin": 1.68,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 4.091
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 168.593,
        "saikou": 3.75,
        "heikin": 2.32,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 4.317
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 125.593,
        "saikou": 6.06,
        "heikin": 3.11,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.02
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 256.593,
        "saikou": 7.09,
        "heikin": 5.27,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.596
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 256.593,
        "saikou": 7.99,
        "heikin": 5.92,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.999
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 253.604,
        "saikou": 7.69,
        "heikin": 6.09,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.01
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 242.778,
        "saikou": 8.08,
        "heikin": 6.3,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 6.221
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 241.965,
        "saikou": 8.34,
        "heikin": 6.43,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 6.242
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 241.965,
        "saikou": 8.12,
        "heikin": 6.15,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 6.103
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 243.141,
        "saikou": 7.68,
        "heikin": 5.86,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.866
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 245.13,
        "saikou": 7.14,
        "heikin": 5.49,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.413
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 238.609,
        "saikou": 7.12,
        "heikin": 5.41,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.407
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 238.609,
        "saikou": 6.98,
        "heikin": 5.32,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.232
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 245.071,
        "saikou": 7.25,
        "heikin": 5.51,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.107
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 246.071,
        "saikou": 7.44,
        "heikin": 5.78,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.066
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 246.071,
        "saikou": 7.79,
        "heikin": 6.04,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.134
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 248.047,
        "saikou": 7.28,
        "heikin": 5.46,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.677
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 248.047,
        "saikou": 7.11,
        "heikin": 5.37,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.566
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 126.697,
        "saikou": 7.05,
        "heikin": 3.56,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 3.796
      }
    ]
  }
};
