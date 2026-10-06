// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/06〜2026/10/05）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-06",
  "fetchedAt": "2026-10-06",
  "avgWindowLabel": "過去30日平均（2026/09/06〜2026/10/05）",
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
      "ouatsu": 1526.429,
      "saikou": 7.49,
      "heikin": 2.85,
      "boshuAvg30d": 1235.5,
      "heikinAvg30d": 2.681
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1555.588,
      "saikou": 7.19,
      "heikin": 2.4,
      "boshuAvg30d": 1235.5,
      "heikinAvg30d": 2.6
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1586.053,
      "saikou": 6.67,
      "heikin": 2.5,
      "boshuAvg30d": 1235.5,
      "heikinAvg30d": 2.637
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1709.294,
      "saikou": 6.67,
      "heikin": 2.34,
      "boshuAvg30d": 1235.5,
      "heikinAvg30d": 2.605
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1692.08,
      "saikou": 6.67,
      "heikin": 2.4,
      "boshuAvg30d": 1230.8,
      "heikinAvg30d": 2.573
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1577.958,
      "saikou": 6.81,
      "heikin": 2.64,
      "boshuAvg30d": 1229.8,
      "heikinAvg30d": 2.669
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1722.887,
      "saikou": 7,
      "heikin": 2.89,
      "boshuAvg30d": 1249.4,
      "heikinAvg30d": 2.786
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1644.736,
      "saikou": 7.2,
      "heikin": 3.17,
      "boshuAvg30d": 1250.5,
      "heikinAvg30d": 2.898
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1765.228,
      "saikou": 7.25,
      "heikin": 3.39,
      "boshuAvg30d": 1253.4,
      "heikinAvg30d": 2.978
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1643.915,
      "saikou": 7.63,
      "heikin": 3.85,
      "boshuAvg30d": 1253.5,
      "heikinAvg30d": 3.04
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1674.846,
      "saikou": 7.63,
      "heikin": 3.85,
      "boshuAvg30d": 1253.5,
      "heikinAvg30d": 3.128
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1632.897,
      "saikou": 7.63,
      "heikin": 3.94,
      "boshuAvg30d": 1253.5,
      "heikinAvg30d": 3.14
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1726.431,
      "saikou": 7.78,
      "heikin": 3.7,
      "boshuAvg30d": 1318.5,
      "heikinAvg30d": 3.279
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1552.464,
      "saikou": 9.99,
      "heikin": 4.07,
      "boshuAvg30d": 1339.9,
      "heikinAvg30d": 3.061
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1622.682,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1362.5,
      "heikinAvg30d": 2.983
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1465.881,
      "saikou": 9.99,
      "heikin": 2.61,
      "boshuAvg30d": 1380.4,
      "heikinAvg30d": 2.904
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1742.263,
      "saikou": 9.99,
      "heikin": 2.51,
      "boshuAvg30d": 1381.2,
      "heikinAvg30d": 3.102
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1813.678,
      "saikou": 9.68,
      "heikin": 3.02,
      "boshuAvg30d": 1381.2,
      "heikinAvg30d": 3.189
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1223,
      "ouatsu": 1692.388,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1349.2,
      "heikinAvg30d": 3.339
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1226,
      "ouatsu": 1864.023,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1353.0,
      "heikinAvg30d": 3.368
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1231,
      "ouatsu": 1872.771,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1360.5,
      "heikinAvg30d": 3.395
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1231,
      "ouatsu": 1787.422,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1360.5,
      "heikinAvg30d": 3.364
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1228,
      "ouatsu": 1755.043,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1357.5,
      "heikinAvg30d": 3.277
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1227,
      "ouatsu": 1892.565,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1356.5,
      "heikinAvg30d": 3.202
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1207,
      "ouatsu": 1748.961,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1344.5,
      "heikinAvg30d": 3.135
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1207,
      "ouatsu": 1709.537,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1344.5,
      "heikinAvg30d": 3.134
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1207,
      "ouatsu": 1627.609,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1341.5,
      "heikinAvg30d": 3.303
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1205,
      "ouatsu": 1616.618,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1336.5,
      "heikinAvg30d": 3.304
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1202,
      "ouatsu": 1544.613,
      "saikou": 9,
      "heikin": 3.38,
      "boshuAvg30d": 1331.8,
      "heikinAvg30d": 3.354
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1196,
      "ouatsu": 1562.039,
      "saikou": 9.1,
      "heikin": 3.17,
      "boshuAvg30d": 1325.0,
      "heikinAvg30d": 3.415
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1721.031,
      "saikou": 9.98,
      "heikin": 3.59,
      "boshuAvg30d": 1360.5,
      "heikinAvg30d": 3.307
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1402.733,
      "saikou": 10,
      "heikin": 3.92,
      "boshuAvg30d": 1360.5,
      "heikinAvg30d": 3.529
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1617.77,
      "saikou": 10,
      "heikin": 4.95,
      "boshuAvg30d": 1360.7,
      "heikinAvg30d": 3.644
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1549.767,
      "saikou": 10,
      "heikin": 5.37,
      "boshuAvg30d": 1358.8,
      "heikinAvg30d": 3.847
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1489.577,
      "saikou": 10,
      "heikin": 5.31,
      "boshuAvg30d": 1351.0,
      "heikinAvg30d": 3.942
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1579.816,
      "saikou": 10,
      "heikin": 5.61,
      "boshuAvg30d": 1346.5,
      "heikinAvg30d": 3.976
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1562.165,
      "saikou": 10,
      "heikin": 5.18,
      "boshuAvg30d": 1339.0,
      "heikinAvg30d": 4.037
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1534.125,
      "saikou": 10,
      "heikin": 4.77,
      "boshuAvg30d": 1339.0,
      "heikinAvg30d": 3.979
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1835.713,
      "saikou": 10,
      "heikin": 4.57,
      "boshuAvg30d": 1339.4,
      "heikinAvg30d": 3.889
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1892.899,
      "saikou": 10,
      "heikin": 4.16,
      "boshuAvg30d": 1338.4,
      "heikinAvg30d": 3.72
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1966.904,
      "saikou": 8.47,
      "heikin": 3.52,
      "boshuAvg30d": 1332.9,
      "heikinAvg30d": 3.695
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 2024.304,
      "saikou": 8.29,
      "heikin": 3.47,
      "boshuAvg30d": 1329.6,
      "heikinAvg30d": 3.616
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1151,
      "ouatsu": 2002.525,
      "saikou": 8.2,
      "heikin": 3.53,
      "boshuAvg30d": 1245.7,
      "heikinAvg30d": 3.427
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1154,
      "ouatsu": 2029.177,
      "saikou": 7.97,
      "heikin": 3.47,
      "boshuAvg30d": 1248.7,
      "heikinAvg30d": 3.502
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1155,
      "ouatsu": 1818.233,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1250.1,
      "heikinAvg30d": 3.342
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1150,
      "ouatsu": 1963.942,
      "saikou": 7.53,
      "heikin": 3.26,
      "boshuAvg30d": 1243.4,
      "heikinAvg30d": 3.237
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1141,
      "ouatsu": 1805.394,
      "saikou": 7.53,
      "heikin": 3.42,
      "boshuAvg30d": 1236.1,
      "heikinAvg30d": 3.208
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1134,
      "ouatsu": 1671.275,
      "saikou": 8.54,
      "heikin": 3.17,
      "boshuAvg30d": 1228.2,
      "heikinAvg30d": 2.999
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
        "ouatsu": 138.208,
        "saikou": 6.3,
        "heikin": 1.82,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.173
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 171.374,
        "saikou": 1.01,
        "heikin": 0.89,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 0.986
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 126.958,
        "saikou": 1.01,
        "heikin": 0.98,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.094
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 164.458,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 0.978
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 168.908,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.247
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 127.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.457
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 178.208,
        "saikou": 1.22,
        "heikin": 1.13,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.284
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 127.958,
        "saikou": 1.33,
        "heikin": 1.29,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.101
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 178.208,
        "saikou": 1.33,
        "heikin": 1.22,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.361
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 127.958,
        "saikou": 1.64,
        "heikin": 1.55,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.15
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 178.208,
        "saikou": 1.85,
        "heikin": 1.71,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.276
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 129.908,
        "saikou": 3,
        "heikin": 1.83,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.433
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 129.908,
        "saikou": 6.2,
        "heikin": 1.75,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.811
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 178.208,
        "saikou": 6.8,
        "heikin": 3.28,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.429
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 159.008,
        "saikou": 8.8,
        "heikin": 2.96,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.315
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 127.958,
        "saikou": 1.63,
        "heikin": 1.02,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.315
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 206.254,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 0.912
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 206.254,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 0.984
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 168.908,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 0.923
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 161.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 0.948
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 190.208,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.006
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 203.013,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.014
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 123.908,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 0.916
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 164.913,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 0.948
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 89.818,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.019
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 125.685,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 0.968
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 121.94,
        "saikou": 1.01,
        "heikin": 0.96,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.321
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 181.868,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.236
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 166.918,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.27
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 164.968,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.458
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 167.023,
        "saikou": 2.58,
        "heikin": 1.49,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.092
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 127.958,
        "saikou": 4.61,
        "heikin": 4.21,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.864
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 169.013,
        "saikou": 10,
        "heikin": 9,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.343
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 167.045,
        "saikou": 10,
        "heikin": 9.25,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.404
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 85.99,
        "saikou": 10,
        "heikin": 9.88,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 2.439
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 129.013,
        "saikou": 10,
        "heikin": 9.83,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.331
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 87.958,
        "saikou": 9.44,
        "heikin": 9.15,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 2.354
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 124.058,
        "saikou": 8.77,
        "heikin": 8.56,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 2.482
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 87.918,
        "saikou": 6.7,
        "heikin": 6.44,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.933
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 123.958,
        "saikou": 5.69,
        "heikin": 5.49,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.79
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 129.908,
        "saikou": 3.33,
        "heikin": 3.06,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.907
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 127.958,
        "saikou": 2.83,
        "heikin": 2.64,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.664
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 127.958,
        "saikou": 2.55,
        "heikin": 2.39,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.29
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 127.958,
        "saikou": 2.4,
        "heikin": 2.21,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.728
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 127.958,
        "saikou": 2.43,
        "heikin": 2.23,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.29
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 168.458,
        "saikou": 3.42,
        "heikin": 3.12,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.379
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 127.958,
        "saikou": 1.96,
        "heikin": 1.81,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.267
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 176.258,
        "saikou": 1.32,
        "heikin": 1.2,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.308
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 99.064,
        "saikou": 7.49,
        "heikin": 5.28,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 7.536
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 99.064,
        "saikou": 7.19,
        "heikin": 5.4,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 7.827
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 116.944,
        "saikou": 6.67,
        "heikin": 5.44,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 7.961
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 116.944,
        "saikou": 6.67,
        "heikin": 5.32,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 8.021
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 114.946,
        "saikou": 6.67,
        "heikin": 5.38,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 8.065
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 114.946,
        "saikou": 6.69,
        "heikin": 5.46,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 8.107
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 129.944,
        "saikou": 7,
        "heikin": 5.65,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 8.098
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 131.444,
        "saikou": 7,
        "heikin": 5.6,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 8.049
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 133.443,
        "saikou": 7,
        "heikin": 5.68,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 8.044
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 133.443,
        "saikou": 6.17,
        "heikin": 4.9,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 8.02
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 133.443,
        "saikou": 5.99,
        "heikin": 4.74,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 8.064
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 133.443,
        "saikou": 6,
        "heikin": 4.73,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 8.063
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 133.443,
        "saikou": 7.78,
        "heikin": 5.45,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 8.172
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 131.943,
        "saikou": 9.99,
        "heikin": 6.05,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 8.266
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 133.443,
        "saikou": 10,
        "heikin": 6.29,
        "boshuAvg30d": 183.7,
        "heikinAvg30d": 8.384
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 131.943,
        "saikou": 9.99,
        "heikin": 6.32,
        "boshuAvg30d": 187.3,
        "heikinAvg30d": 8.368
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 133.443,
        "saikou": 9.99,
        "heikin": 6.3,
        "boshuAvg30d": 187.3,
        "heikinAvg30d": 8.625
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 131.943,
        "saikou": 7.38,
        "heikin": 5.85,
        "boshuAvg30d": 187.3,
        "heikinAvg30d": 8.548
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 133.441,
        "saikou": 8,
        "heikin": 6.39,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 8.231
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 133.441,
        "saikou": 10,
        "heikin": 7.84,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 8.263
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 146,
        "ouatsu": 129.486,
        "saikou": 10,
        "heikin": 8.23,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 8.298
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 146,
        "ouatsu": 115.49,
        "saikou": 10,
        "heikin": 8.19,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 8.309
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 147,
        "ouatsu": 119.445,
        "saikou": 10,
        "heikin": 8.19,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 8.323
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 147,
        "ouatsu": 119.445,
        "saikou": 10,
        "heikin": 8.3,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 8.33
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 143,
        "ouatsu": 119.445,
        "saikou": 10,
        "heikin": 8.28,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 8.435
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 143,
        "ouatsu": 117.48,
        "saikou": 10,
        "heikin": 8.29,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 8.346
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 143,
        "ouatsu": 97.441,
        "saikou": 10,
        "heikin": 6.82,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 8.079
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 142,
        "ouatsu": 95.511,
        "saikou": 10,
        "heikin": 6.72,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 7.868
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 142,
        "ouatsu": 72.161,
        "saikou": 9,
        "heikin": 6.29,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 8.003
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 140,
        "ouatsu": 85.511,
        "saikou": 5.06,
        "heikin": 4.02,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 7.485
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 64.089,
        "saikou": 4.4,
        "heikin": 4.22,
        "boshuAvg30d": 183.8,
        "heikinAvg30d": 7.902
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 65.439,
        "saikou": 10,
        "heikin": 5.69,
        "boshuAvg30d": 183.8,
        "heikinAvg30d": 7.366
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 65.439,
        "saikou": 10,
        "heikin": 5.68,
        "boshuAvg30d": 183.8,
        "heikinAvg30d": 7.472
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 59.978,
        "saikou": 9.6,
        "heikin": 5.47,
        "boshuAvg30d": 183.0,
        "heikinAvg30d": 7.28
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 63.443,
        "saikou": 10,
        "heikin": 5.57,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 7.208
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 60.013,
        "saikou": 6.49,
        "heikin": 4.18,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 6.955
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 61.513,
        "saikou": 10,
        "heikin": 4.71,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 7.103
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 56.763,
        "saikou": 5.99,
        "heikin": 4.17,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 6.942
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 58.263,
        "saikou": 4.4,
        "heikin": 4.1,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 7.107
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 60.163,
        "saikou": 10,
        "heikin": 4.45,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 7.274
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 80.208,
        "saikou": 4.19,
        "heikin": 3.44,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 7.296
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 71.488,
        "saikou": 4.77,
        "heikin": 4.33,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 7.368
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 126,
        "ouatsu": 99.443,
        "saikou": 5.22,
        "heikin": 4.69,
        "boshuAvg30d": 96.1,
        "heikinAvg30d": 7.506
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 126,
        "ouatsu": 111.443,
        "saikou": 5.38,
        "heikin": 4.65,
        "boshuAvg30d": 96.1,
        "heikinAvg30d": 7.676
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 126,
        "ouatsu": 111.443,
        "saikou": 10,
        "heikin": 5.14,
        "boshuAvg30d": 96.1,
        "heikinAvg30d": 7.676
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 125,
        "ouatsu": 111.443,
        "saikou": 5.63,
        "heikin": 4.8,
        "boshuAvg30d": 95.1,
        "heikinAvg30d": 7.642
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 123,
        "ouatsu": 111.443,
        "saikou": 5.84,
        "heikin": 4.99,
        "boshuAvg30d": 93.9,
        "heikinAvg30d": 7.778
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 123,
        "ouatsu": 109.943,
        "saikou": 6.53,
        "heikin": 5.29,
        "boshuAvg30d": 93.1,
        "heikinAvg30d": 7.952
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 473.605,
        "saikou": 6,
        "heikin": 2.9,
        "boshuAvg30d": 432.8,
        "heikinAvg30d": 3.58
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 470.978,
        "saikou": 6,
        "heikin": 2.66,
        "boshuAvg30d": 432.8,
        "heikinAvg30d": 3.545
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 478.251,
        "saikou": 6,
        "heikin": 2.68,
        "boshuAvg30d": 432.8,
        "heikinAvg30d": 3.363
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 550.099,
        "saikou": 5.98,
        "heikin": 2.57,
        "boshuAvg30d": 432.8,
        "heikinAvg30d": 3.401
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 538.056,
        "saikou": 5.99,
        "heikin": 2.51,
        "boshuAvg30d": 431.0,
        "heikinAvg30d": 3.333
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 503.456,
        "saikou": 6,
        "heikin": 2.65,
        "boshuAvg30d": 430.8,
        "heikinAvg30d": 3.357
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 515.428,
        "saikou": 5.98,
        "heikin": 2.66,
        "boshuAvg30d": 429.6,
        "heikinAvg30d": 3.358
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 510.005,
        "saikou": 5.99,
        "heikin": 2.88,
        "boshuAvg30d": 430.8,
        "heikinAvg30d": 3.518
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 499.86,
        "saikou": 5.99,
        "heikin": 2.84,
        "boshuAvg30d": 431.6,
        "heikinAvg30d": 3.555
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 424.09,
        "saikou": 7.63,
        "heikin": 4.47,
        "boshuAvg30d": 431.8,
        "heikinAvg30d": 3.566
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 404.784,
        "saikou": 7.05,
        "heikin": 4.73,
        "boshuAvg30d": 431.8,
        "heikinAvg30d": 3.493
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 402.884,
        "saikou": 6.85,
        "heikin": 4.89,
        "boshuAvg30d": 431.8,
        "heikinAvg30d": 3.56
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 488.983,
        "saikou": 6.68,
        "heikin": 4.32,
        "boshuAvg30d": 452.5,
        "heikinAvg30d": 3.845
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 238.093,
        "saikou": 9.33,
        "heikin": 7.47,
        "boshuAvg30d": 460.5,
        "heikinAvg30d": 3.871
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 312.773,
        "saikou": 7.49,
        "heikin": 4.19,
        "boshuAvg30d": 465.5,
        "heikinAvg30d": 3.871
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 312.773,
        "saikou": 7.79,
        "heikin": 3.66,
        "boshuAvg30d": 470.5,
        "heikinAvg30d": 3.802
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 500.77,
        "saikou": 7.49,
        "heikin": 3.5,
        "boshuAvg30d": 470.5,
        "heikinAvg30d": 4.115
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 456.76,
        "saikou": 9.68,
        "heikin": 5.07,
        "boshuAvg30d": 470.5,
        "heikinAvg30d": 4.107
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 516.047,
        "saikou": 10,
        "heikin": 4.83,
        "boshuAvg30d": 467.6,
        "heikinAvg30d": 4.327
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 530.667,
        "saikou": 10,
        "heikin": 4.51,
        "boshuAvg30d": 467.6,
        "heikinAvg30d": 4.34
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 520.993,
        "saikou": 10,
        "heikin": 4.12,
        "boshuAvg30d": 467.6,
        "heikinAvg30d": 4.207
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 539.486,
        "saikou": 10,
        "heikin": 3.68,
        "boshuAvg30d": 466.6,
        "heikinAvg30d": 4.131
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 554.855,
        "saikou": 10,
        "heikin": 3.9,
        "boshuAvg30d": 463.8,
        "heikinAvg30d": 4.12
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 552.955,
        "saikou": 10,
        "heikin": 3.86,
        "boshuAvg30d": 463.8,
        "heikinAvg30d": 4.096
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 542.959,
        "saikou": 10,
        "heikin": 3.38,
        "boshuAvg30d": 462.5,
        "heikinAvg30d": 3.933
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 544.955,
        "saikou": 10,
        "heikin": 3.36,
        "boshuAvg30d": 462.5,
        "heikinAvg30d": 3.963
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 510.355,
        "saikou": 10,
        "heikin": 4.19,
        "boshuAvg30d": 459.5,
        "heikinAvg30d": 4.062
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 374.652,
        "saikou": 8.67,
        "heikin": 6.13,
        "boshuAvg30d": 459.0,
        "heikinAvg30d": 4.12
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 443.645,
        "saikou": 6.97,
        "heikin": 4.44,
        "boshuAvg30d": 458.0,
        "heikinAvg30d": 4.192
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 434.217,
        "saikou": 4.99,
        "heikin": 3.66,
        "boshuAvg30d": 457.8,
        "heikinAvg30d": 4.056
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 520.99,
        "saikou": 6.26,
        "heikin": 4.56,
        "boshuAvg30d": 456.6,
        "heikinAvg30d": 3.945
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 327.238,
        "saikou": 6.73,
        "heikin": 5.22,
        "boshuAvg30d": 456.6,
        "heikinAvg30d": 3.874
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 327.238,
        "saikou": 10,
        "heikin": 7.21,
        "boshuAvg30d": 456.6,
        "heikinAvg30d": 4.105
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 310.72,
        "saikou": 10,
        "heikin": 7.3,
        "boshuAvg30d": 456.6,
        "heikinAvg30d": 4.303
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 331.12,
        "saikou": 10,
        "heikin": 7.13,
        "boshuAvg30d": 452.4,
        "heikinAvg30d": 4.233
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 325.456,
        "saikou": 10,
        "heikin": 7.05,
        "boshuAvg30d": 452.1,
        "heikinAvg30d": 4.165
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 337.244,
        "saikou": 8.8,
        "heikin": 6.4,
        "boshuAvg30d": 454.2,
        "heikinAvg30d": 4.323
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 329.639,
        "saikou": 8.13,
        "heikin": 5.82,
        "boshuAvg30d": 454.2,
        "heikinAvg30d": 4.222
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 476.237,
        "saikou": 6.67,
        "heikin": 5.15,
        "boshuAvg30d": 454.7,
        "heikinAvg30d": 4.257
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 363.94,
        "saikou": 5.1,
        "heikin": 4.25,
        "boshuAvg30d": 454.7,
        "heikinAvg30d": 4.158
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 428.457,
        "saikou": 5.31,
        "heikin": 3.61,
        "boshuAvg30d": 452.7,
        "heikinAvg30d": 4.176
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 502.193,
        "saikou": 5.57,
        "heikin": 3.57,
        "boshuAvg30d": 452.7,
        "heikinAvg30d": 4.16
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 429.072,
        "saikou": 5.4,
        "heikin": 4.09,
        "boshuAvg30d": 451.9,
        "heikinAvg30d": 4.014
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 444.7,
        "saikou": 5.83,
        "heikin": 3.85,
        "boshuAvg30d": 451.9,
        "heikinAvg30d": 4.167
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 271.861,
        "saikou": 5.99,
        "heikin": 3.71,
        "boshuAvg30d": 452.2,
        "heikinAvg30d": 3.863
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 408.933,
        "saikou": 6.15,
        "heikin": 3.91,
        "boshuAvg30d": 450.2,
        "heikinAvg30d": 4.011
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 357.83,
        "saikou": 6.72,
        "heikin": 5.23,
        "boshuAvg30d": 448.2,
        "heikinAvg30d": 4.063
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 373.814,
        "saikou": 8.54,
        "heikin": 5.31,
        "boshuAvg30d": 447.2,
        "heikinAvg30d": 4.005
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 197.856,
        "saikou": 5.1,
        "heikin": 2.43,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.859
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 212.97,
        "saikou": 5.1,
        "heikin": 1.84,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.753
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 216.918,
        "saikou": 1.99,
        "heikin": 1.36,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.813
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 216.008,
        "saikou": 2.28,
        "heikin": 1.62,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.892
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 212.974,
        "saikou": 2.26,
        "heikin": 1.75,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.792
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 218.893,
        "saikou": 2.26,
        "heikin": 1.75,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.826
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 244.548,
        "saikou": 2.33,
        "heikin": 1.74,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.791
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 248.574,
        "saikou": 2.2,
        "heikin": 1.74,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.979
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 248.514,
        "saikou": 2.09,
        "heikin": 1.56,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.029
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 251.374,
        "saikou": 1.99,
        "heikin": 1.4,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.935
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 253.364,
        "saikou": 2.01,
        "heikin": 1.33,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.043
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 264.864,
        "saikou": 1.99,
        "heikin": 1.26,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.047
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 244.678,
        "saikou": 5.1,
        "heikin": 1.28,
        "boshuAvg30d": 74.7,
        "heikinAvg30d": 2.102
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 246.538,
        "saikou": 2.39,
        "heikin": 1.59,
        "boshuAvg30d": 77.9,
        "heikinAvg30d": 2.065
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 246.538,
        "saikou": 2.99,
        "heikin": 1.99,
        "boshuAvg30d": 80.9,
        "heikinAvg30d": 2.15
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 200.939,
        "saikou": 5.1,
        "heikin": 1.9,
        "boshuAvg30d": 82.9,
        "heikinAvg30d": 2.049
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 199.439,
        "saikou": 3.48,
        "heikin": 2.01,
        "boshuAvg30d": 82.9,
        "heikinAvg30d": 2.304
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 211.276,
        "saikou": 3.48,
        "heikin": 1.97,
        "boshuAvg30d": 82.9,
        "heikinAvg30d": 2.394
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 209.286,
        "saikou": 3.49,
        "heikin": 2.37,
        "boshuAvg30d": 87.1,
        "heikinAvg30d": 2.708
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 211.276,
        "saikou": 3.49,
        "heikin": 2.67,
        "boshuAvg30d": 87.1,
        "heikinAvg30d": 2.787
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 187.081,
        "saikou": 4.48,
        "heikin": 2.82,
        "boshuAvg30d": 87.9,
        "heikinAvg30d": 3.023
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 168.991,
        "saikou": 4.48,
        "heikin": 2.63,
        "boshuAvg30d": 87.1,
        "heikinAvg30d": 3.085
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 174.907,
        "saikou": 4.48,
        "heikin": 2.58,
        "boshuAvg30d": 86.1,
        "heikinAvg30d": 2.875
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 174.907,
        "saikou": 4.48,
        "heikin": 2.59,
        "boshuAvg30d": 85.1,
        "heikinAvg30d": 2.651
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 149.209,
        "saikou": 4.48,
        "heikin": 2.48,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.71
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 149.209,
        "saikou": 4.48,
        "heikin": 2.48,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.658
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 174.907,
        "saikou": 4.48,
        "heikin": 2.99,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.594
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 174.907,
        "saikou": 4.48,
        "heikin": 3.21,
        "boshuAvg30d": 81.7,
        "heikinAvg30d": 2.596
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 195.992,
        "saikou": 8,
        "heikin": 3.62,
        "boshuAvg30d": 80.9,
        "heikinAvg30d": 2.757
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 152.877,
        "saikou": 4.48,
        "heikin": 3.44,
        "boshuAvg30d": 80.9,
        "heikinAvg30d": 2.794
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 210.05,
        "saikou": 3.49,
        "heikin": 2.48,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.51
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 332.177,
        "saikou": 3.49,
        "heikin": 2.7,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.506
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 465.292,
        "saikou": 5.1,
        "heikin": 3.31,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.485
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 447.627,
        "saikou": 7,
        "heikin": 3.45,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.683
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 447.627,
        "saikou": 4.47,
        "heikin": 3.29,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.597
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 451.346,
        "saikou": 4.05,
        "heikin": 3.11,
        "boshuAvg30d": 79.6,
        "heikinAvg30d": 2.548
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 452.846,
        "saikou": 3.09,
        "heikin": 2.61,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.357
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 463.293,
        "saikou": 5.1,
        "heikin": 2.51,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.268
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 463.293,
        "saikou": 2.67,
        "heikin": 1.99,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.076
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 463.293,
        "saikou": 2.69,
        "heikin": 1.95,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.112
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 455.387,
        "saikou": 2.58,
        "heikin": 1.58,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.204
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 455.387,
        "saikou": 2.75,
        "heikin": 1.63,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.206
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 459.313,
        "saikou": 2.29,
        "heikin": 1.36,
        "boshuAvg30d": 77.7,
        "heikinAvg30d": 2.077
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 459.313,
        "saikou": 2.46,
        "heikin": 1.43,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 2.215
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 421.208,
        "saikou": 3.21,
        "heikin": 1.65,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 2.247
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 381.695,
        "saikou": 2.41,
        "heikin": 1.47,
        "boshuAvg30d": 77.7,
        "heikinAvg30d": 2.22
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 382.267,
        "saikou": 2.29,
        "heikin": 1.47,
        "boshuAvg30d": 76.7,
        "heikinAvg30d": 2.179
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 363.733,
        "saikou": 2.83,
        "heikin": 1.98,
        "boshuAvg30d": 73.7,
        "heikinAvg30d": 2.168
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.65,
        "heikin": 0.68,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 0.929
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 16.934,
        "saikou": 2.1,
        "heikin": 0.78,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 1.053
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 15.284,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 1.028
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 15.946,
        "saikou": 2.55,
        "heikin": 0.84,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 1.135
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.4,
        "heikin": 0.65,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 1.206
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.5,
        "heikin": 0.58,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 0.968
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 1.135
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 1.408
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 1.208
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 1.318
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 1.59
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 1.544
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.95,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.718
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.535
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 2.55,
        "heikin": 0.75,
        "boshuAvg30d": 58.8,
        "heikinAvg30d": 1.539
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 47.928,
        "saikou": 2.6,
        "heikin": 0.56,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.644
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 28.386,
        "saikou": 5.5,
        "heikin": 3.22,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.694
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 2.91,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 2.092
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.4,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.617
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.04,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.574
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 3.603
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.752
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 3.334
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.986
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.4,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.209
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.43,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.49
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.78,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.413
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.8,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.257
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.53,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.184
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.53,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.763
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.086
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.8,
        "heikin": 5.7,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.601
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.185
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.303
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.288
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 3.311
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.791
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.68,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.53
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.34,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.734
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.22,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.855
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.15,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 2.031
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 2.077
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.25,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.903
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.25,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.973
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.6,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.925
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.726
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.668
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 2.5,
        "heikin": 0.67,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.242
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 97.392,
        "saikou": 2.5,
        "heikin": 1.84,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 2.094
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 117.006,
        "saikou": 2.5,
        "heikin": 1.57,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.74
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 122.934,
        "saikou": 2.5,
        "heikin": 1.5,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.669
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 135.013,
        "saikou": 2.5,
        "heikin": 1.36,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.608
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 133.015,
        "saikou": 2.5,
        "heikin": 1.36,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.581
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 91.454,
        "saikou": 2.5,
        "heikin": 1.74,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.698
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 118.955,
        "saikou": 2.44,
        "heikin": 1.49,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.864
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 106.373,
        "saikou": 2.44,
        "heikin": 1.74,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.975
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.77,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.929
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.79,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 2.005
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 2.47,
        "heikin": 1.83,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.918
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.72,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.746
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 120.953,
        "saikou": 2.44,
        "heikin": 1.67,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 1.897
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 168.841,
        "saikou": 2.44,
        "heikin": 1.3,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 1.844
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 168.841,
        "saikou": 2.44,
        "heikin": 1.3,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.968
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 120.953,
        "saikou": 3,
        "heikin": 1.69,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 1.996
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 144.898,
        "saikou": 3,
        "heikin": 1.5,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 2.204
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 101.339,
        "saikou": 3.95,
        "heikin": 2.2,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 2.4
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 105.323,
        "saikou": 3.97,
        "heikin": 2.46,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.607
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 264.261,
        "saikou": 3.95,
        "heikin": 2.77,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.639
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 262.276,
        "saikou": 3.48,
        "heikin": 3,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.928
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 260.833,
        "saikou": 3.86,
        "heikin": 2.88,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.909
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 262.818,
        "saikou": 3.48,
        "heikin": 3,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.807
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 264.261,
        "saikou": 3.48,
        "heikin": 2.86,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.488
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 249.261,
        "saikou": 4.41,
        "heikin": 3.5,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.339
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 173.931,
        "saikou": 6.46,
        "heikin": 4.16,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.284
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 105.323,
        "saikou": 5.95,
        "heikin": 2.8,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.714
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 173.937,
        "saikou": 4.99,
        "heikin": 3.32,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 2.551
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 144.545,
        "saikou": 4.45,
        "heikin": 1.88,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.591
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 105.323,
        "saikou": 3.4,
        "heikin": 2.23,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.516
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 126.807,
        "saikou": 3.95,
        "heikin": 1.94,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.413
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 107.193,
        "saikou": 3.95,
        "heikin": 2.32,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.592
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 107.193,
        "saikou": 3.95,
        "heikin": 2.28,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.488
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 103.752,
        "saikou": 2.79,
        "heikin": 2.12,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.588
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 101.765,
        "saikou": 3.4,
        "heikin": 2.21,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.679
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 88.208,
        "saikou": 3.7,
        "heikin": 2.07,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 2.697
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 2.8,
        "heikin": 2,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.458
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 3.7,
        "heikin": 2.12,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.485
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 189.953,
        "saikou": 5.2,
        "heikin": 3.54,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.533
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 279.891,
        "saikou": 4.09,
        "heikin": 3.31,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.471
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 277.906,
        "saikou": 3.42,
        "heikin": 2.75,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.438
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 277.906,
        "saikou": 3.54,
        "heikin": 2.61,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 2.418
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 279.891,
        "saikou": 3.13,
        "heikin": 2.59,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 2.366
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 279.891,
        "saikou": 3.42,
        "heikin": 2.56,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 2.343
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 279.891,
        "saikou": 3.55,
        "heikin": 1.78,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 2.424
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 279.891,
        "saikou": 5.05,
        "heikin": 2.07,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.319
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 210.398,
        "saikou": 2.11,
        "heikin": 0.91,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.909
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 84.896,
        "saikou": 2.35,
        "heikin": 1.78,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.014
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 215.999,
        "saikou": 2.29,
        "heikin": 2.07,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.57
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 215.963,
        "saikou": 2.29,
        "heikin": 2.07,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.647
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 217.699,
        "saikou": 2.29,
        "heikin": 2.07,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.758
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 219.763,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.638
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 219.816,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.548
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 219.886,
        "saikou": 2.29,
        "heikin": 2.07,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.713
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 236.628,
        "saikou": 4.55,
        "heikin": 3.51,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.915
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 236.577,
        "saikou": 5.35,
        "heikin": 4,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.094
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 236.672,
        "saikou": 5.94,
        "heikin": 4.36,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.114
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 236.535,
        "saikou": 6.35,
        "heikin": 4.61,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.39
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 236.508,
        "saikou": 6.32,
        "heikin": 4.6,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.652
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 236.559,
        "saikou": 6.32,
        "heikin": 4.6,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.686
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 236.566,
        "saikou": 6.26,
        "heikin": 4.58,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.949
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 216.941,
        "saikou": 5.07,
        "heikin": 4.02,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.165
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 211.179,
        "saikou": 2.34,
        "heikin": 1.84,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.831
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 239.893,
        "saikou": 2.29,
        "heikin": 1.55,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.582
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 239.893,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.668
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 289.646,
        "saikou": 2.29,
        "heikin": 1.45,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.924
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 229.891,
        "saikou": 2.29,
        "heikin": 1.04,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.168
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 257.912,
        "saikou": 3,
        "heikin": 0.81,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.198
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 287.656,
        "saikou": 3,
        "heikin": 0.9,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.368
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 204.538,
        "saikou": 3,
        "heikin": 1.14,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.156
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 216.107,
        "saikou": 3.5,
        "heikin": 1.13,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.15
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 292.079,
        "saikou": 2.7,
        "heikin": 0.87,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.077
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 276.212,
        "saikou": 1.56,
        "heikin": 0.48,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.858
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 276.212,
        "saikou": 2.29,
        "heikin": 0.79,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.839
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 289.646,
        "saikou": 2.29,
        "heikin": 0.88,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.132
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 289.646,
        "saikou": 2.29,
        "heikin": 0.89,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 1.959
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 193.755,
        "saikou": 2.7,
        "heikin": 1.16,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 1.966
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 289.646,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.19
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 289.646,
        "saikou": 2.7,
        "heikin": 1.16,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.515
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 3.33,
        "heikin": 1.79,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.89
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 207.784,
        "saikou": 2.7,
        "heikin": 1.85,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.78
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 207.784,
        "saikou": 5.35,
        "heikin": 3.53,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.309
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 255.76,
        "saikou": 6.26,
        "heikin": 4.35,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.704
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 255.76,
        "saikou": 5.94,
        "heikin": 4.19,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.001
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 253.77,
        "saikou": 4.83,
        "heikin": 3.53,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.304
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 253.77,
        "saikou": 6.58,
        "heikin": 4.53,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.258
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 271.654,
        "saikou": 5.38,
        "heikin": 3.74,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.008
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 273.644,
        "saikou": 5.11,
        "heikin": 3.64,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.597
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 273.644,
        "saikou": 6.42,
        "heikin": 3.16,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.415
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 273.644,
        "saikou": 5.78,
        "heikin": 3,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 3.012
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 273.644,
        "saikou": 6.51,
        "heikin": 3.26,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.204
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 273.644,
        "saikou": 5.12,
        "heikin": 2.85,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.089
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 273.644,
        "saikou": 4.9,
        "heikin": 2.8,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.889
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 273.644,
        "saikou": 2.81,
        "heikin": 2.17,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.509
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 273.644,
        "saikou": 4.39,
        "heikin": 2.73,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.594
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 257.777,
        "saikou": 2.57,
        "heikin": 1.6,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.754
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 95.473,
        "saikou": 3.15,
        "heikin": 1.39,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.77
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 95.473,
        "saikou": 1.7,
        "heikin": 1.01,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.794
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 95.473,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.797
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 95.473,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.785
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 95.473,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.779
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 95.473,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.79
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 92.473,
        "saikou": 1.7,
        "heikin": 0.93,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 80.93,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.892
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 92.473,
        "saikou": 1.7,
        "heikin": 1.33,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.906
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 92.473,
        "saikou": 3.15,
        "heikin": 1.69,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.936
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 92.473,
        "saikou": 3.15,
        "heikin": 1.68,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.904
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 92.473,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.87
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 95.473,
        "saikou": 3.15,
        "heikin": 1.41,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.943
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 95.473,
        "saikou": 2.3,
        "heikin": 1.21,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.924
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 95.473,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.983
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 96.473,
        "saikou": 1.7,
        "heikin": 0.8,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.897
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 124.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.896
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 147.973,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.937
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 84.473,
        "saikou": 2.3,
        "heikin": 1.56,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 1.003
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 1.65,
        "heikin": 1.6,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.98
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.998
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.971
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.985
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 84.473,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.991
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 84.473,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.151
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 84.473,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.117
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 84.473,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.052
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 84.473,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.056
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 84.473,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.022
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 84.473,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 0.955
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.991
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.58,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.026
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 82.473,
        "saikou": 1.7,
        "heikin": 1.27,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.017
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 61.473,
        "saikou": 2.5,
        "heikin": 1.77,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 1.003
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 48.473,
        "saikou": 7.14,
        "heikin": 2.91,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.037
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.022
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.07
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 7.58,
        "heikin": 3.02,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.076
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.086
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.104
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.088
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.086
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.715
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.713
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.742
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.748
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.758
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.815
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 185.904,
        "saikou": 7.2,
        "heikin": 5.13,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 3.761
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 155.826,
        "saikou": 7.06,
        "heikin": 4.59,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 3.158
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 195.592,
        "saikou": 6.53,
        "heikin": 4.62,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 2.798
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 195.59,
        "saikou": 6.31,
        "heikin": 4.49,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 2.592
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 185.964,
        "saikou": 6.53,
        "heikin": 4.74,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 2.469
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 182.964,
        "saikou": 6.81,
        "heikin": 4.94,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 2.726
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 202.775,
        "saikou": 6.84,
        "heikin": 4.83,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 3.031
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 198.947,
        "saikou": 7.2,
        "heikin": 5.11,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 3.321
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 270.791,
        "saikou": 7.25,
        "heikin": 5.86,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.581
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 272.775,
        "saikou": 7.56,
        "heikin": 5.99,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.978
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 270.799,
        "saikou": 7.63,
        "heikin": 6.04,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 4.154
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 267.499,
        "saikou": 7.63,
        "heikin": 6.04,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.991
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 272.499,
        "saikou": 7.55,
        "heikin": 5.97,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 3.728
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 272.499,
        "saikou": 7.25,
        "heikin": 5.46,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 3.144
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 272.499,
        "saikou": 5.84,
        "heikin": 4.6,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 2.696
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 187.021,
        "saikou": 3.75,
        "heikin": 3.01,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 2.871
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 164.707,
        "saikou": 3.73,
        "heikin": 2.74,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 3.111
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 264.559,
        "saikou": 5.96,
        "heikin": 4.18,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 3.435
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 241.091,
        "saikou": 3.88,
        "heikin": 3.32,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 3.565
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 239.107,
        "saikou": 3.53,
        "heikin": 3.04,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 3.523
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 229.67,
        "saikou": 3.35,
        "heikin": 2.94,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 3.426
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 229.67,
        "saikou": 3.12,
        "heikin": 2.82,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 3.536
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 237.602,
        "saikou": 3.12,
        "heikin": 2.81,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 3.425
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 235.604,
        "saikou": 2.81,
        "heikin": 2.57,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 3.404
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 233.656,
        "saikou": 0.72,
        "heikin": 0.71,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 2.99
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 233.664,
        "saikou": 1.98,
        "heikin": 1.43,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 3.151
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 239.596,
        "saikou": 3.53,
        "heikin": 3.18,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 3.494
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 237.696,
        "saikou": 6.03,
        "heikin": 5.19,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 3.959
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 239.196,
        "saikou": 6.63,
        "heikin": 5.54,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 4.252
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 241.096,
        "saikou": 9.1,
        "heikin": 7.27,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 4.501
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 277.025,
        "saikou": 9.98,
        "heikin": 7.57,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 4.656
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 185.41,
        "saikou": 9.98,
        "heikin": 6.9,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.436
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 189.41,
        "saikou": 10,
        "heikin": 7.11,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.533
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 187.46,
        "saikou": 10,
        "heikin": 7.13,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 5.864
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 151.471,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 5.801
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 217.619,
        "saikou": 10,
        "heikin": 7.73,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.905
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 215.185,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 5.969
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 152.953,
        "saikou": 10,
        "heikin": 6.55,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 5.853
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 235.994,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 5.548
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 275.609,
        "saikou": 9.13,
        "heikin": 7.01,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 5.145
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 268.993,
        "saikou": 8.47,
        "heikin": 7,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 5.019
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 263.327,
        "saikou": 8.29,
        "heikin": 6.86,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.908
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 267.803,
        "saikou": 8.2,
        "heikin": 6.68,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.723
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 266.827,
        "saikou": 7.97,
        "heikin": 6.71,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.572
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 266.827,
        "saikou": 7.88,
        "heikin": 6.84,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.641
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 274.477,
        "saikou": 7.53,
        "heikin": 5.88,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.192
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 276.453,
        "saikou": 7.53,
        "heikin": 5.9,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.213
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 214.453,
        "saikou": 7.06,
        "heikin": 5.05,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 3.635
      }
    ]
  }
};
