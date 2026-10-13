// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/13〜2026/10/12）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-13",
  "fetchedAt": "2026-10-13",
  "avgWindowLabel": "過去30日平均（2026/09/13〜2026/10/12）",
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
      "ouatsu": 1233.985,
      "saikou": 10,
      "heikin": 3.54,
      "boshuAvg30d": 1169.8,
      "heikinAvg30d": 2.718
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1223.317,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1169.8,
      "heikinAvg30d": 2.604
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1371.812,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1169.8,
      "heikinAvg30d": 2.63
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1397.977,
      "saikou": 9.8,
      "heikin": 3.13,
      "boshuAvg30d": 1169.8,
      "heikinAvg30d": 2.539
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1483.091,
      "saikou": 9.91,
      "heikin": 3.16,
      "boshuAvg30d": 1165.6,
      "heikinAvg30d": 2.557
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1453.329,
      "saikou": 9.8,
      "heikin": 3.17,
      "boshuAvg30d": 1164.6,
      "heikinAvg30d": 2.664
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1549.307,
      "saikou": 9.8,
      "heikin": 3.06,
      "boshuAvg30d": 1180.6,
      "heikinAvg30d": 2.799
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1579.77,
      "saikou": 9.91,
      "heikin": 3.49,
      "boshuAvg30d": 1182.0,
      "heikinAvg30d": 2.981
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1577.812,
      "saikou": 9.89,
      "heikin": 3.65,
      "boshuAvg30d": 1184.6,
      "heikinAvg30d": 3.05
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1643.086,
      "saikou": 9.91,
      "heikin": 4.05,
      "boshuAvg30d": 1185.0,
      "heikinAvg30d": 3.197
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1488.804,
      "saikou": 9.8,
      "heikin": 3.44,
      "boshuAvg30d": 1185.0,
      "heikinAvg30d": 3.297
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1476.104,
      "saikou": 9.89,
      "heikin": 3.77,
      "boshuAvg30d": 1185.0,
      "heikinAvg30d": 3.319
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1504.87,
      "saikou": 9.91,
      "heikin": 3.8,
      "boshuAvg30d": 1248.6,
      "heikinAvg30d": 3.402
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1465.654,
      "saikou": 9.8,
      "heikin": 3.53,
      "boshuAvg30d": 1270.4,
      "heikinAvg30d": 3.16
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1615.665,
      "saikou": 9.91,
      "heikin": 3.4,
      "boshuAvg30d": 1292.6,
      "heikinAvg30d": 2.876
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1611.202,
      "saikou": 9.8,
      "heikin": 3.11,
      "boshuAvg30d": 1310.2,
      "heikinAvg30d": 2.73
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1617.627,
      "saikou": 9.91,
      "heikin": 3.25,
      "boshuAvg30d": 1310.8,
      "heikinAvg30d": 2.906
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1621.442,
      "saikou": 9.8,
      "heikin": 2.61,
      "boshuAvg30d": 1310.8,
      "heikinAvg30d": 2.976
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1137,
      "ouatsu": 1667.006,
      "saikou": 9.91,
      "heikin": 2.96,
      "boshuAvg30d": 1277.5,
      "heikinAvg30d": 3.137
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1140,
      "ouatsu": 1592.641,
      "saikou": 9.91,
      "heikin": 2.74,
      "boshuAvg30d": 1281.1,
      "heikinAvg30d": 3.153
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1145,
      "ouatsu": 1495.732,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1287.9,
      "heikinAvg30d": 3.214
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1145,
      "ouatsu": 1507.742,
      "saikou": 10,
      "heikin": 2.42,
      "boshuAvg30d": 1287.9,
      "heikinAvg30d": 3.143
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1142,
      "ouatsu": 1606.895,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1284.9,
      "heikinAvg30d": 3.11
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1141,
      "ouatsu": 1539.423,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1283.9,
      "heikinAvg30d": 3.03
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1121,
      "ouatsu": 1529.814,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1268.8,
      "heikinAvg30d": 2.968
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1121,
      "ouatsu": 1549.058,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1268.8,
      "heikinAvg30d": 2.971
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1121,
      "ouatsu": 1429.42,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1268.8,
      "heikinAvg30d": 3.047
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1119,
      "ouatsu": 1516.946,
      "saikou": 9.91,
      "heikin": 3.39,
      "boshuAvg30d": 1264.7,
      "heikinAvg30d": 3.1
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1116,
      "ouatsu": 1347.405,
      "saikou": 9.8,
      "heikin": 3.47,
      "boshuAvg30d": 1260.5,
      "heikinAvg30d": 3.088
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1110,
      "ouatsu": 1232.445,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1253.9,
      "heikinAvg30d": 3.201
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1363.765,
      "saikou": 8.89,
      "heikin": 3.46,
      "boshuAvg30d": 1288.7,
      "heikinAvg30d": 3.136
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1315.917,
      "saikou": 10,
      "heikin": 4.58,
      "boshuAvg30d": 1288.7,
      "heikinAvg30d": 3.324
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1184.896,
      "saikou": 10,
      "heikin": 5.08,
      "boshuAvg30d": 1289.1,
      "heikinAvg30d": 3.659
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1129.268,
      "saikou": 10,
      "heikin": 5.04,
      "boshuAvg30d": 1287.5,
      "heikinAvg30d": 3.968
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1447.643,
      "saikou": 10,
      "heikin": 5.62,
      "boshuAvg30d": 1280.1,
      "heikinAvg30d": 4.029
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1356.937,
      "saikou": 10,
      "heikin": 5.44,
      "boshuAvg30d": 1275.4,
      "heikinAvg30d": 4.118
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1336.108,
      "saikou": 10,
      "heikin": 5.21,
      "boshuAvg30d": 1268.6,
      "heikinAvg30d": 4.112
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1399.072,
      "saikou": 10,
      "heikin": 4.91,
      "boshuAvg30d": 1268.6,
      "heikinAvg30d": 4.016
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1490.203,
      "saikou": 10,
      "heikin": 4.54,
      "boshuAvg30d": 1268.8,
      "heikinAvg30d": 3.911
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1368.204,
      "saikou": 9.91,
      "heikin": 4.23,
      "boshuAvg30d": 1267.8,
      "heikinAvg30d": 3.732
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1295.705,
      "saikou": 9.89,
      "heikin": 4.03,
      "boshuAvg30d": 1261.6,
      "heikinAvg30d": 3.659
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1398.108,
      "saikou": 9.91,
      "heikin": 4.31,
      "boshuAvg30d": 1259.2,
      "heikinAvg30d": 3.56
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1065,
      "ouatsu": 1504.51,
      "saikou": 9.8,
      "heikin": 3.52,
      "boshuAvg30d": 1178.9,
      "heikinAvg30d": 3.435
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1068,
      "ouatsu": 1428.036,
      "saikou": 9.8,
      "heikin": 3.68,
      "boshuAvg30d": 1181.9,
      "heikinAvg30d": 3.534
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1069,
      "ouatsu": 1375.347,
      "saikou": 9.91,
      "heikin": 3.8,
      "boshuAvg30d": 1183.2,
      "heikinAvg30d": 3.414
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1064,
      "ouatsu": 1346.7,
      "saikou": 9.8,
      "heikin": 3.5,
      "boshuAvg30d": 1177.0,
      "heikinAvg30d": 3.259
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1055,
      "ouatsu": 1385.46,
      "saikou": 9.91,
      "heikin": 3.82,
      "boshuAvg30d": 1169.2,
      "heikinAvg30d": 3.225
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1048,
      "ouatsu": 1403.206,
      "saikou": 9.8,
      "heikin": 3.38,
      "boshuAvg30d": 1161.6,
      "heikinAvg30d": 2.928
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
        "ouatsu": 57.72,
        "saikou": 9.91,
        "heikin": 7.84,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 1.857
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 77.24,
        "saikou": 9.91,
        "heikin": 8.16,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 1.503
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 75.25,
        "saikou": 9.91,
        "heikin": 8.79,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 1.739
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 28.94,
        "saikou": 9.8,
        "heikin": 5.94,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 1.439
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 81.49,
        "saikou": 9.91,
        "heikin": 8.74,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 1.876
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 38.94,
        "saikou": 9.8,
        "heikin": 6.64,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 1.907
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 38.94,
        "saikou": 9.8,
        "heikin": 7.63,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.966
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 77.24,
        "saikou": 9.91,
        "heikin": 8.95,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.799
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 38.94,
        "saikou": 9.89,
        "heikin": 9.47,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.934
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 87.24,
        "saikou": 9.91,
        "heikin": 9.08,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.828
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 28.94,
        "saikou": 9.8,
        "heikin": 7.68,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.952
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 28.94,
        "saikou": 9.89,
        "heikin": 9.62,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.204
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 81.45,
        "saikou": 9.91,
        "heikin": 8.38,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.343
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 38.94,
        "saikou": 9.8,
        "heikin": 6.88,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.129
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 81.45,
        "saikou": 9.91,
        "heikin": 8.73,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.832
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 38.94,
        "saikou": 9.8,
        "heikin": 9.24,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.718
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 79.46,
        "saikou": 9.91,
        "heikin": 8.08,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.19
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 38.94,
        "saikou": 9.8,
        "heikin": 1.49,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.169
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 81.45,
        "saikou": 9.91,
        "heikin": 5.98,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.102
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 79.46,
        "saikou": 9.91,
        "heikin": 5.79,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.022
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 26.95,
        "saikou": 9.8,
        "heikin": 9.74,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.416
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 38.94,
        "saikou": 9.8,
        "heikin": 1.7,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.113
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 110.45,
        "saikou": 9.91,
        "heikin": 6.51,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.333
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 67.94,
        "saikou": 9.8,
        "heikin": 4.26,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.287
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 110.45,
        "saikou": 9.91,
        "heikin": 6.23,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.445
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 110.45,
        "saikou": 9.91,
        "heikin": 5.56,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.539
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 75.95,
        "saikou": 5,
        "heikin": 1.99,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.386
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 71.45,
        "saikou": 9.91,
        "heikin": 6.66,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.351
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 28.94,
        "saikou": 9.8,
        "heikin": 9.48,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.67
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 110.45,
        "saikou": 9.91,
        "heikin": 9.81,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.92
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 107.94,
        "saikou": 5.19,
        "heikin": 4.68,
        "boshuAvg30d": 57.2,
        "heikinAvg30d": 1.348
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 148.46,
        "saikou": 9.91,
        "heikin": 7.12,
        "boshuAvg30d": 57.2,
        "heikinAvg30d": 2.212
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 28.94,
        "saikou": 9.8,
        "heikin": 7.74,
        "boshuAvg30d": 57.2,
        "heikinAvg30d": 3.309
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 26.95,
        "saikou": 6.29,
        "heikin": 6.2,
        "boshuAvg30d": 57.2,
        "heikinAvg30d": 3.753
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 150.45,
        "saikou": 9.91,
        "heikin": 8.95,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 3.795
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 107.94,
        "saikou": 9.8,
        "heikin": 8.4,
        "boshuAvg30d": 57.2,
        "heikinAvg30d": 3.608
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 150.45,
        "saikou": 9.91,
        "heikin": 7.87,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 3.64
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 148.46,
        "saikou": 9.91,
        "heikin": 7.55,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 3.501
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 105.95,
        "saikou": 5.73,
        "heikin": 5.67,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 3.003
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 71.45,
        "saikou": 9.91,
        "heikin": 7.9,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 2.75
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 26.95,
        "saikou": 9.89,
        "heikin": 9.54,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 2.695
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 71.45,
        "saikou": 9.91,
        "heikin": 9.74,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 2.329
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 28.94,
        "saikou": 9.8,
        "heikin": 8.41,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 2.395
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 28.94,
        "saikou": 9.8,
        "heikin": 8.02,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 2.73
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 69.46,
        "saikou": 9.91,
        "heikin": 9.03,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.31
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 28.94,
        "saikou": 9.8,
        "heikin": 8.26,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.291
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 81.45,
        "saikou": 9.91,
        "heikin": 9.03,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.431
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 38.94,
        "saikou": 9.8,
        "heikin": 7.65,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.201
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 51.066,
        "saikou": 10,
        "heikin": 5.38,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 6.816
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 51.066,
        "saikou": 10,
        "heikin": 5.57,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 7.106
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 70.944,
        "saikou": 10,
        "heikin": 5.13,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 7.176
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 72.904,
        "saikou": 5.75,
        "heikin": 5.08,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 7.25
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 72.904,
        "saikou": 5.65,
        "heikin": 5.18,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 7.298
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 72.904,
        "saikou": 5.42,
        "heikin": 5.06,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 7.374
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 85.904,
        "saikou": 5.44,
        "heikin": 5.37,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 7.356
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 87.404,
        "saikou": 5.24,
        "heikin": 4.88,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 7.279
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 89.403,
        "saikou": 5.44,
        "heikin": 5.1,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 7.232
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 89.403,
        "saikou": 5.45,
        "heikin": 4.98,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 7.215
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 89.403,
        "saikou": 5.03,
        "heikin": 4.86,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 7.364
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 89.403,
        "saikou": 5.45,
        "heikin": 4.79,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 7.432
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 113.403,
        "saikou": 5.28,
        "heikin": 4.27,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 7.576
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 111.903,
        "saikou": 6.49,
        "heikin": 5.1,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 7.71
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 113.403,
        "saikou": 6.49,
        "heikin": 5.54,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 7.919
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 135.903,
        "saikou": 7,
        "heikin": 5.38,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 8.078
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 137.439,
        "saikou": 6.83,
        "heikin": 5.32,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 8.416
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 135.939,
        "saikou": 7.12,
        "heikin": 5.4,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 8.361
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 115.434,
        "saikou": 7.32,
        "heikin": 4.65,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 8.262
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 103.415,
        "saikou": 7.6,
        "heikin": 4.83,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 8.381
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 100.81,
        "saikou": 10,
        "heikin": 7.26,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 8.388
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 98.814,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 8.458
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 102.769,
        "saikou": 10,
        "heikin": 7.86,
        "boshuAvg30d": 134.1,
        "heikinAvg30d": 8.456
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 102.769,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 134.1,
        "heikinAvg30d": 8.39
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 111.438,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 8.422
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 113.439,
        "saikou": 10,
        "heikin": 7.8,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 8.338
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 115.435,
        "saikou": 8.32,
        "heikin": 5.78,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 8.048
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 115.435,
        "saikou": 7.25,
        "heikin": 4.49,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 7.795
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 91.399,
        "saikou": 6.49,
        "heikin": 5.45,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 7.764
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 79.399,
        "saikou": 10,
        "heikin": 5.41,
        "boshuAvg30d": 123.0,
        "heikinAvg30d": 7.012
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 67.399,
        "saikou": 6.49,
        "heikin": 4.15,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 7.257
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 67.399,
        "saikou": 10,
        "heikin": 4.35,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.707
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 63.438,
        "saikou": 10,
        "heikin": 3.89,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.647
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 63.903,
        "saikou": 6.94,
        "heikin": 3.89,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.619
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 65.403,
        "saikou": 6.94,
        "heikin": 4.05,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 6.549
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 65.899,
        "saikou": 6.94,
        "heikin": 3.83,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 6.234
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 65.403,
        "saikou": 10,
        "heikin": 3.68,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 6.344
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 63.903,
        "saikou": 4.49,
        "heikin": 3.53,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 6.058
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 64.053,
        "saikou": 3.37,
        "heikin": 3.14,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 6.184
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 66.733,
        "saikou": 4.28,
        "heikin": 3.33,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 6.3
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 52.776,
        "saikou": 4,
        "heikin": 3.37,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 6.252
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 76.776,
        "saikou": 5.58,
        "heikin": 3.71,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 6.34
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 91.381,
        "saikou": 5.84,
        "heikin": 4.08,
        "boshuAvg30d": 85.7,
        "heikinAvg30d": 6.495
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 67.381,
        "saikou": 4.21,
        "heikin": 3.4,
        "boshuAvg30d": 85.7,
        "heikinAvg30d": 6.393
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 103.401,
        "saikou": 4.49,
        "heikin": 3.52,
        "boshuAvg30d": 85.7,
        "heikinAvg30d": 6.645
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 89.481,
        "saikou": 4.87,
        "heikin": 3.57,
        "boshuAvg30d": 84.7,
        "heikinAvg30d": 6.529
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 89.481,
        "saikou": 5.03,
        "heikin": 3.65,
        "boshuAvg30d": 83.3,
        "heikinAvg30d": 6.642
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 89.331,
        "saikou": 6.14,
        "heikin": 4.29,
        "boshuAvg30d": 82.7,
        "heikinAvg30d": 6.993
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 337.884,
        "saikou": 6.38,
        "heikin": 4.87,
        "boshuAvg30d": 368.6,
        "heikinAvg30d": 3.62
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 231.927,
        "saikou": 6.38,
        "heikin": 5.46,
        "boshuAvg30d": 368.6,
        "heikinAvg30d": 3.631
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 330.262,
        "saikou": 6.6,
        "heikin": 4.84,
        "boshuAvg30d": 368.6,
        "heikinAvg30d": 3.422
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 382.018,
        "saikou": 6.6,
        "heikin": 4.62,
        "boshuAvg30d": 368.6,
        "heikinAvg30d": 3.294
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 471.104,
        "saikou": 6.31,
        "heikin": 4.05,
        "boshuAvg30d": 367.0,
        "heikinAvg30d": 3.292
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 452.668,
        "saikou": 5.67,
        "heikin": 4.14,
        "boshuAvg30d": 366.6,
        "heikinAvg30d": 3.346
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 468.636,
        "saikou": 5.75,
        "heikin": 4.1,
        "boshuAvg30d": 365.2,
        "heikinAvg30d": 3.402
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 463.246,
        "saikou": 5.49,
        "heikin": 4.22,
        "boshuAvg30d": 366.6,
        "heikinAvg30d": 3.595
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 466.716,
        "saikou": 5.74,
        "heikin": 4.19,
        "boshuAvg30d": 367.2,
        "heikinAvg30d": 3.68
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 466.628,
        "saikou": 5.77,
        "heikin": 4.16,
        "boshuAvg30d": 367.6,
        "heikinAvg30d": 3.801
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 415.191,
        "saikou": 5.46,
        "heikin": 3.89,
        "boshuAvg30d": 367.6,
        "heikinAvg30d": 3.721
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 413.291,
        "saikou": 5.46,
        "heikin": 3.77,
        "boshuAvg30d": 367.6,
        "heikinAvg30d": 3.87
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 396.047,
        "saikou": 5.43,
        "heikin": 4.22,
        "boshuAvg30d": 387.8,
        "heikinAvg30d": 3.975
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 384.227,
        "saikou": 6.39,
        "heikin": 5.07,
        "boshuAvg30d": 395.8,
        "heikinAvg30d": 4.145
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 494.828,
        "saikou": 6.48,
        "heikin": 3.83,
        "boshuAvg30d": 400.8,
        "heikinAvg30d": 3.834
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 476.39,
        "saikou": 6.49,
        "heikin": 3.81,
        "boshuAvg30d": 405.8,
        "heikinAvg30d": 3.558
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 515.66,
        "saikou": 6.47,
        "heikin": 3.26,
        "boshuAvg30d": 405.8,
        "heikinAvg30d": 3.791
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 545.66,
        "saikou": 6.19,
        "heikin": 2.35,
        "boshuAvg30d": 405.8,
        "heikinAvg30d": 3.862
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 584.579,
        "saikou": 5.28,
        "heikin": 2.04,
        "boshuAvg30d": 400.2,
        "heikinAvg30d": 4.17
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 574.959,
        "saikou": 3.41,
        "heikin": 1.84,
        "boshuAvg30d": 400.2,
        "heikinAvg30d": 4.272
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 557.88,
        "saikou": 4.7,
        "heikin": 1.73,
        "boshuAvg30d": 400.2,
        "heikinAvg30d": 4.212
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 559.877,
        "saikou": 4.8,
        "heikin": 1.86,
        "boshuAvg30d": 399.2,
        "heikinAvg30d": 4.038
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 566.353,
        "saikou": 6.4,
        "heikin": 2.67,
        "boshuAvg30d": 396.6,
        "heikinAvg30d": 4.025
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 561.082,
        "saikou": 6.57,
        "heikin": 2.99,
        "boshuAvg30d": 396.6,
        "heikinAvg30d": 3.933
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 559.41,
        "saikou": 6.6,
        "heikin": 2.7,
        "boshuAvg30d": 394.8,
        "heikinAvg30d": 3.864
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 540.077,
        "saikou": 6.49,
        "heikin": 2.67,
        "boshuAvg30d": 394.8,
        "heikinAvg30d": 3.805
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 451.06,
        "saikou": 10,
        "heikin": 4.47,
        "boshuAvg30d": 394.8,
        "heikinAvg30d": 3.872
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 542.123,
        "saikou": 6.33,
        "heikin": 3.58,
        "boshuAvg30d": 394.6,
        "heikinAvg30d": 3.994
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 485.876,
        "saikou": 5.41,
        "heikin": 3.49,
        "boshuAvg30d": 393.6,
        "heikinAvg30d": 3.848
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 344.025,
        "saikou": 8,
        "heikin": 3,
        "boshuAvg30d": 393.2,
        "heikinAvg30d": 3.754
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 432.398,
        "saikou": 5.01,
        "heikin": 3.4,
        "boshuAvg30d": 391.8,
        "heikinAvg30d": 3.75
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 429.077,
        "saikou": 6.74,
        "heikin": 4.67,
        "boshuAvg30d": 391.8,
        "heikinAvg30d": 3.669
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 250.224,
        "saikou": 9.15,
        "heikin": 3.69,
        "boshuAvg30d": 391.8,
        "heikinAvg30d": 4.021
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 250.224,
        "saikou": 8.38,
        "heikin": 3.64,
        "boshuAvg30d": 391.7,
        "heikinAvg30d": 4.214
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 409.386,
        "saikou": 8.07,
        "heikin": 5.14,
        "boshuAvg30d": 387.6,
        "heikinAvg30d": 4.112
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 403.774,
        "saikou": 8,
        "heikin": 5.07,
        "boshuAvg30d": 387.2,
        "heikinAvg30d": 4.083
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 361.443,
        "saikou": 6.38,
        "heikin": 4.74,
        "boshuAvg30d": 389.6,
        "heikinAvg30d": 4.205
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 419.989,
        "saikou": 5.84,
        "heikin": 3.62,
        "boshuAvg30d": 389.6,
        "heikinAvg30d": 4.059
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 502.406,
        "saikou": 6.24,
        "heikin": 4.03,
        "boshuAvg30d": 389.8,
        "heikinAvg30d": 4.059
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 395.62,
        "saikou": 4.4,
        "heikin": 3.28,
        "boshuAvg30d": 389.8,
        "heikinAvg30d": 3.924
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 397.111,
        "saikou": 3.64,
        "heikin": 2.85,
        "boshuAvg30d": 387.8,
        "heikinAvg30d": 3.933
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 421.168,
        "saikou": 6.15,
        "heikin": 3.84,
        "boshuAvg30d": 387.8,
        "heikinAvg30d": 3.879
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 496.313,
        "saikou": 5.15,
        "heikin": 2.52,
        "boshuAvg30d": 387.2,
        "heikinAvg30d": 3.747
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 442.92,
        "saikou": 5.46,
        "heikin": 2.87,
        "boshuAvg30d": 387.2,
        "heikinAvg30d": 3.909
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 293.088,
        "saikou": 4.46,
        "heikin": 2.71,
        "boshuAvg30d": 387.6,
        "heikinAvg30d": 3.621
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 398.905,
        "saikou": 5.47,
        "heikin": 2.89,
        "boshuAvg30d": 385.6,
        "heikinAvg30d": 3.788
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 364.155,
        "saikou": 5.28,
        "heikin": 3.35,
        "boshuAvg30d": 383.6,
        "heikinAvg30d": 3.895
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 383.913,
        "saikou": 7.68,
        "heikin": 4.15,
        "boshuAvg30d": 382.6,
        "heikinAvg30d": 3.887
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 268.495,
        "saikou": 3.73,
        "heikin": 1.61,
        "boshuAvg30d": 77.2,
        "heikinAvg30d": 1.987
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 304.944,
        "saikou": 4.09,
        "heikin": 1.63,
        "boshuAvg30d": 77.2,
        "heikinAvg30d": 1.781
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 324.782,
        "saikou": 3.63,
        "heikin": 1.49,
        "boshuAvg30d": 77.2,
        "heikinAvg30d": 1.8
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 330.484,
        "saikou": 3.86,
        "heikin": 1.62,
        "boshuAvg30d": 77.2,
        "heikinAvg30d": 1.859
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 310.65,
        "saikou": 1.9,
        "heikin": 1.09,
        "boshuAvg30d": 76.2,
        "heikinAvg30d": 1.752
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 316.569,
        "saikou": 1.94,
        "heikin": 1.28,
        "boshuAvg30d": 76.2,
        "heikinAvg30d": 1.763
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 340.282,
        "saikou": 1.9,
        "heikin": 1.25,
        "boshuAvg30d": 75.8,
        "heikinAvg30d": 1.716
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 334.582,
        "saikou": 2.2,
        "heikin": 1.54,
        "boshuAvg30d": 75.8,
        "heikinAvg30d": 1.902
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 340.282,
        "saikou": 1.9,
        "heikin": 1.43,
        "boshuAvg30d": 76.2,
        "heikinAvg30d": 1.943
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 340.282,
        "saikou": 1.79,
        "heikin": 1.24,
        "boshuAvg30d": 76.2,
        "heikinAvg30d": 1.864
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 342.272,
        "saikou": 2.5,
        "heikin": 1.58,
        "boshuAvg30d": 76.2,
        "heikinAvg30d": 1.941
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 340.772,
        "saikou": 2.5,
        "heikin": 1.64,
        "boshuAvg30d": 76.2,
        "heikinAvg30d": 1.965
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 342.272,
        "saikou": 2.34,
        "heikin": 1.72,
        "boshuAvg30d": 85.8,
        "heikinAvg30d": 2.095
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 342.272,
        "saikou": 2.17,
        "heikin": 1.7,
        "boshuAvg30d": 89.2,
        "heikinAvg30d": 2.123
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 342.272,
        "saikou": 3.22,
        "heikin": 1.95,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.06
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 295.173,
        "saikou": 4.32,
        "heikin": 2.21,
        "boshuAvg30d": 94.2,
        "heikinAvg30d": 2.051
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 274.356,
        "saikou": 4.47,
        "heikin": 2.65,
        "boshuAvg30d": 94.2,
        "heikinAvg30d": 2.213
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 284.203,
        "saikou": 4.47,
        "heikin": 2.69,
        "boshuAvg30d": 94.2,
        "heikinAvg30d": 2.297
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 284.203,
        "saikou": 4.76,
        "heikin": 3.28,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 2.64
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 242.793,
        "saikou": 9.48,
        "heikin": 3.67,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 2.602
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 196.633,
        "saikou": 9.48,
        "heikin": 3.62,
        "boshuAvg30d": 99.2,
        "heikinAvg30d": 2.879
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 196.652,
        "saikou": 9.48,
        "heikin": 3.7,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 2.952
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 201.58,
        "saikou": 9.48,
        "heikin": 3.6,
        "boshuAvg30d": 97.6,
        "heikinAvg30d": 2.862
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 185.33,
        "saikou": 10,
        "heikin": 4.02,
        "boshuAvg30d": 96.6,
        "heikinAvg30d": 2.806
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 136.962,
        "saikou": 4.47,
        "heikin": 2.8,
        "boshuAvg30d": 93.2,
        "heikinAvg30d": 2.767
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 176.38,
        "saikou": 4.47,
        "heikin": 2.7,
        "boshuAvg30d": 93.2,
        "heikinAvg30d": 2.766
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 178.379,
        "saikou": 4.47,
        "heikin": 2.84,
        "boshuAvg30d": 93.2,
        "heikinAvg30d": 2.632
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 178.379,
        "saikou": 4.47,
        "heikin": 2.85,
        "boshuAvg30d": 92.8,
        "heikinAvg30d": 2.603
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 160.158,
        "saikou": 4.47,
        "heikin": 2.9,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.812
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 178.379,
        "saikou": 4.47,
        "heikin": 2.45,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.887
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 216.021,
        "saikou": 4.47,
        "heikin": 2.54,
        "boshuAvg30d": 90.8,
        "heikinAvg30d": 2.591
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 197.8,
        "saikou": 4.47,
        "heikin": 3.07,
        "boshuAvg30d": 90.8,
        "heikinAvg30d": 2.568
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 249.986,
        "saikou": 7.53,
        "heikin": 4.49,
        "boshuAvg30d": 90.8,
        "heikinAvg30d": 2.393
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 209.472,
        "saikou": 9.31,
        "heikin": 4.97,
        "boshuAvg30d": 90.8,
        "heikinAvg30d": 2.612
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 211.672,
        "saikou": 6.98,
        "heikin": 3.96,
        "boshuAvg30d": 90.8,
        "heikinAvg30d": 2.422
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 189.126,
        "saikou": 6.54,
        "heikin": 3.84,
        "boshuAvg30d": 90.4,
        "heikinAvg30d": 2.453
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 186.824,
        "saikou": 5.1,
        "heikin": 3.11,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.236
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 204.471,
        "saikou": 5.1,
        "heikin": 2.76,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.151
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 213.671,
        "saikou": 3.42,
        "heikin": 2.4,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 1.997
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 217.473,
        "saikou": 3.22,
        "heikin": 2.27,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.078
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 210.555,
        "saikou": 2.37,
        "heikin": 2.04,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.028
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 210.555,
        "saikou": 2.37,
        "heikin": 2,
        "boshuAvg30d": 88.4,
        "heikinAvg30d": 2.075
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 213.493,
        "saikou": 5.1,
        "heikin": 1.97,
        "boshuAvg30d": 88.8,
        "heikinAvg30d": 1.84
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 259.89,
        "saikou": 4.87,
        "heikin": 2.16,
        "boshuAvg30d": 89.8,
        "heikinAvg30d": 2.077
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 261.493,
        "saikou": 2.2,
        "heikin": 1.96,
        "boshuAvg30d": 89.8,
        "heikinAvg30d": 2.122
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 213.493,
        "saikou": 5.1,
        "heikin": 1.98,
        "boshuAvg30d": 88.8,
        "heikinAvg30d": 2.084
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 213.493,
        "saikou": 4.47,
        "heikin": 2.05,
        "boshuAvg30d": 87.8,
        "heikinAvg30d": 2.031
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 315.734,
        "saikou": 3.6,
        "heikin": 2.75,
        "boshuAvg30d": 84.8,
        "heikinAvg30d": 2.067
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.65,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 0.796
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 0.904
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.68,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 0.927
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.85,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 1.033
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 1.062
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 0.888
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 1.065
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.92,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 1.297
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 1.178
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 1.294
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 1.512
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 1.432
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.95,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 1.703
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 1.554
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 2.55,
        "heikin": 0.75,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.558
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 39.398,
        "saikou": 2.4,
        "heikin": 0.59,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.594
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 2.023
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 2.87,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.991
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.25,
        "heikin": 2.79,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.49
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.5,
        "heikin": 3.46,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.315
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 3.442
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.688
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 3.111
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.761
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.7,
        "heikin": 3.89,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.387
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.45,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.424
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.502
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.398
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.6,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.473
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.5,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.839
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.45,
        "heikin": 5.27,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.693
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.75,
        "heikin": 5.67,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 3.172
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.447
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 2.95,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.327
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.156
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.97,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.052
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.518
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.561
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.566
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.687
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.034
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.687
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.25,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.71
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.802
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.985
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.566
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.375
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.049
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 99.791,
        "saikou": 1.94,
        "heikin": 1.51,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 1.929
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 137.114,
        "saikou": 1.94,
        "heikin": 1.1,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 1.601
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 145.942,
        "saikou": 1.72,
        "heikin": 0.94,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 1.504
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 157.011,
        "saikou": 1.73,
        "heikin": 0.95,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 1.445
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 141.323,
        "saikou": 1.55,
        "heikin": 0.9,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.397
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 133.628,
        "saikou": 1.99,
        "heikin": 1.06,
        "boshuAvg30d": 128.8,
        "heikinAvg30d": 1.525
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 142.911,
        "saikou": 1.99,
        "heikin": 1.21,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.676
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 163.011,
        "saikou": 1.99,
        "heikin": 1.16,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.822
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 170.837,
        "saikou": 1.94,
        "heikin": 1.08,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 1.744
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 146.899,
        "saikou": 1.49,
        "heikin": 1.06,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 1.834
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 103.34,
        "saikou": 1.94,
        "heikin": 1.56,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 1.741
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 103.34,
        "saikou": 1.98,
        "heikin": 1.58,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 1.624
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 103.34,
        "saikou": 2,
        "heikin": 1.64,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 1.782
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 122.954,
        "saikou": 2,
        "heikin": 1.44,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 1.691
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 97.354,
        "saikou": 2.02,
        "heikin": 1.62,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 1.793
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 116.968,
        "saikou": 2.2,
        "heikin": 1.52,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 1.802
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 97.354,
        "saikou": 2.22,
        "heikin": 1.79,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.009
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 103.34,
        "saikou": 3.95,
        "heikin": 2.38,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.253
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 105.327,
        "saikou": 3.4,
        "heikin": 2.41,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.453
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 105.327,
        "saikou": 3.95,
        "heikin": 2.71,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.366
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 122.956,
        "saikou": 5.95,
        "heikin": 2.54,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.655
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 122.956,
        "saikou": 5.95,
        "heikin": 2.58,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 2.65
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 128.808,
        "saikou": 5.95,
        "heikin": 2.6,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 2.655
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 127.365,
        "saikou": 3.4,
        "heikin": 2.31,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 2.43
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 127.365,
        "saikou": 3,
        "heikin": 2.11,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.329
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 113.808,
        "saikou": 3,
        "heikin": 2.06,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.387
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 109.194,
        "saikou": 5.95,
        "heikin": 2.92,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.622
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 109.194,
        "saikou": 3,
        "heikin": 2.45,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 2.444
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 109.194,
        "saikou": 4.45,
        "heikin": 2.66,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.366
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 105.327,
        "saikou": 3.12,
        "heikin": 2.45,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.294
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 109.194,
        "saikou": 3.95,
        "heikin": 2.54,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.353
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 109.194,
        "saikou": 3.95,
        "heikin": 2.65,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.549
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 109.194,
        "saikou": 3,
        "heikin": 2.2,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.53
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 86.765,
        "saikou": 2.6,
        "heikin": 2.15,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.544
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 99.778,
        "saikou": 2.63,
        "heikin": 2.21,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.559
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 101.221,
        "saikou": 3.7,
        "heikin": 2.4,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.638
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 99.261,
        "saikou": 2.29,
        "heikin": 1.88,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.364
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 99.261,
        "saikou": 3.7,
        "heikin": 2.04,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.399
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 107.207,
        "saikou": 2.37,
        "heikin": 1.85,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.417
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 107.207,
        "saikou": 2.21,
        "heikin": 1.73,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 2.397
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 103.224,
        "saikou": 1.99,
        "heikin": 1.71,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.313
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 113.07,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.297
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 130.818,
        "saikou": 2.02,
        "heikin": 1.45,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.224
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 103.34,
        "saikou": 2.05,
        "heikin": 1.74,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.305
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 103.34,
        "saikou": 2.05,
        "heikin": 1.74,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.334
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 103.34,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 2.272
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 103.34,
        "saikou": 1.99,
        "heikin": 1.63,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.797
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 101.897,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.886
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 182.467,
        "saikou": 5.14,
        "heikin": 3.63,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.459
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 179.54,
        "saikou": 5.17,
        "heikin": 3.11,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.497
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 181.34,
        "saikou": 5.14,
        "heikin": 3.07,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.566
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 183.33,
        "saikou": 5.1,
        "heikin": 3.02,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.476
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 183.33,
        "saikou": 5.1,
        "heikin": 3.12,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.406
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 183.33,
        "saikou": 5.17,
        "heikin": 3.08,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.593
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 2.29,
        "heikin": 1.95,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.837
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 5.14,
        "heikin": 2.77,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.087
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 6.23,
        "heikin": 4.58,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.182
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 6.26,
        "heikin": 4.45,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.595
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 3.3,
        "heikin": 2.52,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.853
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 5.94,
        "heikin": 4.24,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.792
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 200.189,
        "saikou": 5.41,
        "heikin": 3.72,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.072
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 200.189,
        "saikou": 3.29,
        "heikin": 2.49,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 2.177
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 200.189,
        "saikou": 2.57,
        "heikin": 2.16,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 1.614
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 200.189,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 1.276
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 200.189,
        "saikou": 2.29,
        "heikin": 1.95,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 1.479
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 198.191,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 1.598
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 180.307,
        "saikou": 2.7,
        "heikin": 1.58,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.692
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 180.307,
        "saikou": 2.29,
        "heikin": 1.37,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 1.667
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 182.229,
        "saikou": 2.29,
        "heikin": 1.74,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 1.842
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 182.229,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.697
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 182.229,
        "saikou": 2.29,
        "heikin": 1.7,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.714
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 182.229,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.61
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 180.307,
        "saikou": 2.29,
        "heikin": 1.37,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.469
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 180.307,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.507
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 180.307,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.786
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 180.307,
        "saikou": 2.29,
        "heikin": 1.69,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.656
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 180.307,
        "saikou": 2.7,
        "heikin": 1.68,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.61
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 180.307,
        "saikou": 2.7,
        "heikin": 1.87,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.749
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 180.307,
        "saikou": 4.3,
        "heikin": 3.22,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.103
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 180.307,
        "saikou": 7.17,
        "heikin": 5.12,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.398
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 183.234,
        "saikou": 8.74,
        "heikin": 5.92,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.733
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 183.234,
        "saikou": 7.94,
        "heikin": 5.43,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.438
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 183.234,
        "saikou": 7.94,
        "heikin": 5.41,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.891
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 183.234,
        "saikou": 8.43,
        "heikin": 5.75,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.089
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 181.244,
        "saikou": 7.86,
        "heikin": 5.39,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.298
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 181.244,
        "saikou": 8.8,
        "heikin": 6.01,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.328
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 199.128,
        "saikou": 8.61,
        "heikin": 5.54,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.982
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 201.118,
        "saikou": 7.4,
        "heikin": 4.77,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.516
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 201.118,
        "saikou": 7.6,
        "heikin": 4.87,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.519
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 201.118,
        "saikou": 7.16,
        "heikin": 4.6,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 3.219
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 201.118,
        "saikou": 7.16,
        "heikin": 4.87,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.542
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 201.118,
        "saikou": 6.78,
        "heikin": 4.29,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.402
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 201.118,
        "saikou": 6.26,
        "heikin": 4,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.296
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 201.118,
        "saikou": 6.25,
        "heikin": 4.22,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 2.728
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 201.118,
        "saikou": 6.25,
        "heikin": 4.05,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 2.659
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 199.318,
        "saikou": 4,
        "heikin": 2.71,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 1.701
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 117.543,
        "saikou": 1.7,
        "heikin": 1.64,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.867
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 117.543,
        "saikou": 1.7,
        "heikin": 1.64,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.82
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 117.543,
        "saikou": 1.7,
        "heikin": 1.64,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.814
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 117.543,
        "saikou": 1.7,
        "heikin": 1.64,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.793
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 96.543,
        "saikou": 1.7,
        "heikin": 1.63,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.799
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 96.543,
        "saikou": 1.7,
        "heikin": 1.65,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.801
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 1.23,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.821
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 82,
        "saikou": 1.7,
        "heikin": 1.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.826
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 93.543,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.881
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 93.543,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.917
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.7,
        "heikin": 1.22,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.895
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 93.543,
        "saikou": 1.7,
        "heikin": 1.63,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.812
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.54,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.904
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 96.543,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.896
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 98.543,
        "saikou": 1.7,
        "heikin": 1.21,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.875
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 100.543,
        "saikou": 1.7,
        "heikin": 1.21,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.859
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 101.543,
        "saikou": 1.7,
        "heikin": 0.92,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.83
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 103.543,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.881
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 112.543,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.081
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.65,
        "heikin": 0.96,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.038
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.059
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 0.96,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.008
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 1.06,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.075
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 1.1,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.087
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 114.043,
        "saikou": 1.6,
        "heikin": 1.33,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.2
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 1.31,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.18
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 114.043,
        "saikou": 1.6,
        "heikin": 1.04,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.123
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.122
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 84.543,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.115
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 70.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.064
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 84.543,
        "saikou": 1.7,
        "heikin": 1.46,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.064
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.092
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.145
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 47.543,
        "saikou": 2.49,
        "heikin": 1.81,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 1.201
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 47.543,
        "saikou": 3.99,
        "heikin": 2.22,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.332
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 47.543,
        "saikou": 5.64,
        "heikin": 2.62,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.323
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 3.99,
        "heikin": 2.2,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.302
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 5.64,
        "heikin": 2.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.36
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 48.543,
        "saikou": 5.64,
        "heikin": 2.56,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.255
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 2.99,
        "heikin": 1.94,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.261
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 2.99,
        "heikin": 1.81,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.24
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 2.99,
        "heikin": 1.7,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.227
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.904
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.869
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.897
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.881
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 108.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 94.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.915
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 115.091,
        "saikou": 8.51,
        "heikin": 4.29,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 4.031
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 120.015,
        "saikou": 8.45,
        "heikin": 4.33,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.49
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 121.821,
        "saikou": 8.33,
        "heikin": 4.26,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.18
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 121.819,
        "saikou": 8.37,
        "heikin": 4.29,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.002
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 121.819,
        "saikou": 8.39,
        "heikin": 4.27,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 2.932
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 154.819,
        "saikou": 8.45,
        "heikin": 5.25,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.275
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 173.974,
        "saikou": 8.45,
        "heikin": 5.14,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 3.594
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 168.17,
        "saikou": 8.45,
        "heikin": 5.15,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.055
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 173.974,
        "saikou": 8.45,
        "heikin": 5.15,
        "boshuAvg30d": 166.6,
        "heikinAvg30d": 4.31
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 214.974,
        "saikou": 8.45,
        "heikin": 5.81,
        "boshuAvg30d": 166.6,
        "heikinAvg30d": 4.77
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 212.998,
        "saikou": 8.45,
        "heikin": 5.81,
        "boshuAvg30d": 166.6,
        "heikinAvg30d": 5.012
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 202.698,
        "saikou": 8.71,
        "heikin": 5.92,
        "boshuAvg30d": 166.6,
        "heikinAvg30d": 4.861
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 168.698,
        "saikou": 8.78,
        "heikin": 5.37,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.39
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 164.698,
        "saikou": 8.45,
        "heikin": 5.04,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 3.554
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 164.698,
        "saikou": 8.12,
        "heikin": 4.88,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 2.634
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 207.698,
        "saikou": 6.98,
        "heikin": 4.16,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 2.603
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 207.698,
        "saikou": 6.59,
        "heikin": 3.95,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 2.825
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 207.698,
        "saikou": 6.32,
        "heikin": 3.82,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 3.046
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 199.235,
        "saikou": 7.7,
        "heikin": 4.58,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 3.01
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 189.409,
        "saikou": 6.41,
        "heikin": 3.85,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 2.87
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 191.303,
        "saikou": 4.76,
        "heikin": 2.75,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 2.76
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 191.303,
        "saikou": 4.3,
        "heikin": 2.5,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 2.833
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 197.735,
        "saikou": 4.01,
        "heikin": 2.2,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 2.738
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 195.737,
        "saikou": 4.01,
        "heikin": 2.27,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 2.709
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 185.911,
        "saikou": 3.3,
        "heikin": 1.72,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 2.303
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 197.626,
        "saikou": 4.08,
        "heikin": 2.22,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 2.504
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 201.124,
        "saikou": 4.81,
        "heikin": 2.71,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 2.827
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 203.087,
        "saikou": 7.78,
        "heikin": 4.58,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 3.384
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 203.06,
        "saikou": 8.68,
        "heikin": 5.17,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 3.593
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 160.087,
        "saikou": 7.97,
        "heikin": 4.62,
        "boshuAvg30d": 175.6,
        "heikinAvg30d": 4.091
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 162.035,
        "saikou": 8.89,
        "heikin": 5.24,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 4.278
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 132.209,
        "saikou": 10,
        "heikin": 5.42,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 5.0
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 248.409,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 5.758
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 257.249,
        "saikou": 10,
        "heikin": 7.79,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.191
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 276.249,
        "saikou": 10,
        "heikin": 7.98,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.233
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 254.272,
        "saikou": 10,
        "heikin": 7.84,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.443
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 240.012,
        "saikou": 10,
        "heikin": 7.86,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.482
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 230.273,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.337
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 245.317,
        "saikou": 10,
        "heikin": 7.63,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.101
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 257.132,
        "saikou": 9.84,
        "heikin": 7.5,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.634
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 252.5,
        "saikou": 9.5,
        "heikin": 7.42,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.618
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 252.5,
        "saikou": 8.33,
        "heikin": 6.56,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.443
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 256.976,
        "saikou": 7.75,
        "heikin": 5.97,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.341
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 238.976,
        "saikou": 8.52,
        "heikin": 6.49,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 5.278
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 257.976,
        "saikou": 9.01,
        "heikin": 6.49,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 5.383
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 212.952,
        "saikou": 8.31,
        "heikin": 6.02,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.911
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 219.952,
        "saikou": 8.31,
        "heikin": 5.86,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.779
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 175.602,
        "saikou": 7.72,
        "heikin": 4.81,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 3.914
      }
    ]
  }
};
