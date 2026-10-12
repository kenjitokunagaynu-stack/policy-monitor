// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/12〜2026/10/11）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-12",
  "fetchedAt": "2026-10-12",
  "avgWindowLabel": "過去30日平均（2026/09/12〜2026/10/11）",
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
      "ouatsu": 1332.745,
      "saikou": 9.91,
      "heikin": 3.66,
      "boshuAvg30d": 1179.0,
      "heikinAvg30d": 2.677
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1342.107,
      "saikou": 9.91,
      "heikin": 3.5,
      "boshuAvg30d": 1179.0,
      "heikinAvg30d": 2.57
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1338.464,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1179.0,
      "heikinAvg30d": 2.601
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1357.095,
      "saikou": 9.8,
      "heikin": 2.33,
      "boshuAvg30d": 1179.0,
      "heikinAvg30d": 2.542
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1352.029,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1174.7,
      "heikinAvg30d": 2.535
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1267.496,
      "saikou": 9.95,
      "heikin": 3.17,
      "boshuAvg30d": 1173.7,
      "heikinAvg30d": 2.649
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1393.934,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1189.8,
      "heikinAvg30d": 2.791
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1433.709,
      "saikou": 9.92,
      "heikin": 3.81,
      "boshuAvg30d": 1191.2,
      "heikinAvg30d": 2.947
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1430.764,
      "saikou": 9.89,
      "heikin": 3.11,
      "boshuAvg30d": 1193.8,
      "heikinAvg30d": 3.044
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1531.307,
      "saikou": 9.91,
      "heikin": 3.63,
      "boshuAvg30d": 1194.2,
      "heikinAvg30d": 3.167
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1404.575,
      "saikou": 10,
      "heikin": 4.12,
      "boshuAvg30d": 1194.2,
      "heikinAvg30d": 3.256
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1357.608,
      "saikou": 10,
      "heikin": 3.75,
      "boshuAvg30d": 1194.2,
      "heikinAvg30d": 3.289
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1362.532,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1258.0,
      "heikinAvg30d": 3.374
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1361.931,
      "saikou": 9.99,
      "heikin": 2.98,
      "boshuAvg30d": 1279.7,
      "heikinAvg30d": 3.151
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1495.591,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1302.0,
      "heikinAvg30d": 2.865
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1402.928,
      "saikou": 9.99,
      "heikin": 2.64,
      "boshuAvg30d": 1319.6,
      "heikinAvg30d": 2.742
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1466.817,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1320.3,
      "heikinAvg30d": 2.929
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1371.346,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1320.3,
      "heikinAvg30d": 3.003
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1137,
      "ouatsu": 1513.399,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1290.1,
      "heikinAvg30d": 3.155
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1140,
      "ouatsu": 1431.866,
      "saikou": 10,
      "heikin": 2.5,
      "boshuAvg30d": 1293.7,
      "heikinAvg30d": 3.19
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1145,
      "ouatsu": 1530.001,
      "saikou": 10,
      "heikin": 2.82,
      "boshuAvg30d": 1300.6,
      "heikinAvg30d": 3.239
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1145,
      "ouatsu": 1495.798,
      "saikou": 10,
      "heikin": 2.41,
      "boshuAvg30d": 1300.6,
      "heikinAvg30d": 3.179
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1142,
      "ouatsu": 1567.67,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1297.6,
      "heikinAvg30d": 3.127
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1141,
      "ouatsu": 1492.99,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1296.6,
      "heikinAvg30d": 3.046
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1121,
      "ouatsu": 1402.312,
      "saikou": 10,
      "heikin": 2.82,
      "boshuAvg30d": 1282.0,
      "heikinAvg30d": 2.985
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1121,
      "ouatsu": 1423.179,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1282.0,
      "heikinAvg30d": 2.996
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1121,
      "ouatsu": 1353.54,
      "saikou": 10,
      "heikin": 2.46,
      "boshuAvg30d": 1279.0,
      "heikinAvg30d": 3.088
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1119,
      "ouatsu": 1391.563,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1274.8,
      "heikinAvg30d": 3.12
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1116,
      "ouatsu": 1386.057,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1270.5,
      "heikinAvg30d": 3.102
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1110,
      "ouatsu": 1492.782,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1263.9,
      "heikinAvg30d": 3.204
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1218.089,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1298.4,
      "heikinAvg30d": 3.151
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1567.808,
      "saikou": 8.41,
      "heikin": 2.47,
      "boshuAvg30d": 1298.4,
      "heikinAvg30d": 3.352
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1721.293,
      "saikou": 9.94,
      "heikin": 3.52,
      "boshuAvg30d": 1298.8,
      "heikinAvg30d": 3.636
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1812.101,
      "saikou": 10,
      "heikin": 3.85,
      "boshuAvg30d": 1297.1,
      "heikinAvg30d": 3.954
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1761.433,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1289.7,
      "heikinAvg30d": 4.022
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1884.554,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1284.9,
      "heikinAvg30d": 4.087
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1932.5,
      "saikou": 10,
      "heikin": 3.72,
      "boshuAvg30d": 1278.0,
      "heikinAvg30d": 4.092
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1898.366,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1278.0,
      "heikinAvg30d": 4.007
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1939.914,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1278.3,
      "heikinAvg30d": 3.903
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1941.616,
      "saikou": 9.25,
      "heikin": 3.19,
      "boshuAvg30d": 1277.3,
      "heikinAvg30d": 3.736
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1861.764,
      "saikou": 9.91,
      "heikin": 3.51,
      "boshuAvg30d": 1271.2,
      "heikinAvg30d": 3.645
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1843.44,
      "saikou": 9.83,
      "heikin": 3.32,
      "boshuAvg30d": 1268.7,
      "heikinAvg30d": 3.553
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1065,
      "ouatsu": 1822.937,
      "saikou": 9.91,
      "heikin": 3.5,
      "boshuAvg30d": 1188.2,
      "heikinAvg30d": 3.411
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1068,
      "ouatsu": 1767.21,
      "saikou": 9.8,
      "heikin": 3.24,
      "boshuAvg30d": 1191.2,
      "heikinAvg30d": 3.528
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1069,
      "ouatsu": 1720.013,
      "saikou": 9.79,
      "heikin": 3.54,
      "boshuAvg30d": 1192.6,
      "heikinAvg30d": 3.396
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1064,
      "ouatsu": 1810.243,
      "saikou": 9.69,
      "heikin": 3.29,
      "boshuAvg30d": 1186.3,
      "heikinAvg30d": 3.247
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1055,
      "ouatsu": 1707.102,
      "saikou": 9.91,
      "heikin": 3.13,
      "boshuAvg30d": 1178.6,
      "heikinAvg30d": 3.213
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1048,
      "ouatsu": 1574.616,
      "saikou": 9.8,
      "heikin": 2.44,
      "boshuAvg30d": 1171.0,
      "heikinAvg30d": 2.935
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
        "ouatsu": 57.698,
        "saikou": 9.91,
        "heikin": 7.42,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.643
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 77.218,
        "saikou": 9.91,
        "heikin": 7.93,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.273
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 77.218,
        "saikou": 9.91,
        "heikin": 8.59,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.486
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 5.63,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.284
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 73.458,
        "saikou": 9.91,
        "heikin": 8.51,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.653
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 5.68,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.771
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 6.75,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.78
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 79.208,
        "saikou": 9.91,
        "heikin": 8.68,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.543
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 9.89,
        "heikin": 9.01,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.673
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 79.208,
        "saikou": 9.91,
        "heikin": 8.75,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.569
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 7,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.764
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 9.89,
        "heikin": 9.07,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.945
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 71.458,
        "saikou": 9.91,
        "heikin": 8.06,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 2.114
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 28.918,
        "saikou": 6.09,
        "heikin": 5.73,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.966
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 71.458,
        "saikou": 9.91,
        "heikin": 8.57,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.573
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 9,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.451
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 112.448,
        "saikou": 9.91,
        "heikin": 5.85,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.028
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 28.918,
        "saikou": 5,
        "heikin": 1.27,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.16
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 73.448,
        "saikou": 9.91,
        "heikin": 6.5,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 0.919
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 62.918,
        "saikou": 5,
        "heikin": 0.79,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.029
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 107.448,
        "saikou": 9.91,
        "heikin": 6.62,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.229
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 64.908,
        "saikou": 9.8,
        "heikin": 1.07,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.111
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 107.448,
        "saikou": 9.91,
        "heikin": 6.62,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.146
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 62.918,
        "saikou": 9.8,
        "heikin": 4.29,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.178
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 105.458,
        "saikou": 9.91,
        "heikin": 6.34,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.267
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 87.458,
        "saikou": 9.91,
        "heikin": 6.72,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.349
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 67.918,
        "saikou": 5,
        "heikin": 2.19,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.346
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 110.458,
        "saikou": 9.91,
        "heikin": 4.29,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.242
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 69.908,
        "saikou": 9.8,
        "heikin": 4.17,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.555
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 83.448,
        "saikou": 9.91,
        "heikin": 8.7,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.654
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 5.2,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.197
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 162.448,
        "saikou": 3.82,
        "heikin": 3.75,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 2.12
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 109.908,
        "saikou": 7.79,
        "heikin": 4.22,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 3.201
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 152.448,
        "saikou": 9.91,
        "heikin": 5.69,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 3.597
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 109.908,
        "saikou": 6.81,
        "heikin": 4.53,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 3.677
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 107.94,
        "saikou": 6.59,
        "heikin": 5.95,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 3.443
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 150.49,
        "saikou": 9.91,
        "heikin": 6.73,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 3.449
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 109.908,
        "saikou": 4.37,
        "heikin": 4.29,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 3.392
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 150.468,
        "saikou": 9.91,
        "heikin": 4.71,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.879
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 107.918,
        "saikou": 6,
        "heikin": 3.85,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.655
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 150.468,
        "saikou": 9.91,
        "heikin": 5.75,
        "boshuAvg30d": 56.8,
        "heikinAvg30d": 2.537
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 107.918,
        "saikou": 9.83,
        "heikin": 4.13,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.227
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 83.458,
        "saikou": 9.91,
        "heikin": 8.93,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.13
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 7.57,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.522
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 162.458,
        "saikou": 9.79,
        "heikin": 4.91,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 2.18
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 119.908,
        "saikou": 9.69,
        "heikin": 4.88,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 2.175
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 73.458,
        "saikou": 9.91,
        "heikin": 8.74,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 2.173
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 7.19,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.995
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 89.602,
        "saikou": 7,
        "heikin": 5.62,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 6.932
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 89.602,
        "saikou": 7,
        "heikin": 5.91,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 7.214
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 109.48,
        "saikou": 7.08,
        "heikin": 6.05,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 7.282
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 111.44,
        "saikou": 7.19,
        "heikin": 5.88,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 7.362
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 99.44,
        "saikou": 7.19,
        "heikin": 6.02,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 7.406
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 99.44,
        "saikou": 7.02,
        "heikin": 5.95,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 7.484
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 97.94,
        "saikou": 7.19,
        "heikin": 6.19,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 7.457
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 99.44,
        "saikou": 7.01,
        "heikin": 5.99,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 7.387
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 89.439,
        "saikou": 6.63,
        "heikin": 5.35,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 7.361
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 89.439,
        "saikou": 6.53,
        "heikin": 5.45,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 7.34
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 77.403,
        "saikou": 10,
        "heikin": 6.23,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 7.462
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 89.403,
        "saikou": 10,
        "heikin": 6.23,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 7.532
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 101.439,
        "saikou": 10,
        "heikin": 6.78,
        "boshuAvg30d": 161.4,
        "heikinAvg30d": 7.658
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 99.939,
        "saikou": 9.99,
        "heikin": 6.91,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 7.79
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 101.439,
        "saikou": 7.72,
        "heikin": 6.96,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 8.009
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 87.939,
        "saikou": 9.99,
        "heikin": 7.4,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 8.142
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 101.439,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 8.431
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 87.939,
        "saikou": 10,
        "heikin": 8.08,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 8.384
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 115.435,
        "saikou": 10,
        "heikin": 7.74,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 8.29
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 127.435,
        "saikou": 10,
        "heikin": 7.46,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 8.414
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 123.48,
        "saikou": 10,
        "heikin": 7.67,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 8.407
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 112.81,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 136.2,
        "heikinAvg30d": 8.473
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 112.768,
        "saikou": 10,
        "heikin": 8.21,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 8.467
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 116.765,
        "saikou": 10,
        "heikin": 7.81,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 8.419
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 112.771,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 8.45
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 112.622,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 8.367
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 124.087,
        "saikou": 10,
        "heikin": 7.41,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 8.094
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 101.437,
        "saikou": 10,
        "heikin": 7.12,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 7.849
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 91.435,
        "saikou": 10,
        "heikin": 6.4,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 7.833
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 91.435,
        "saikou": 10,
        "heikin": 4.95,
        "boshuAvg30d": 125.4,
        "heikinAvg30d": 7.118
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 79.399,
        "saikou": 10,
        "heikin": 5.72,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 7.377
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 67.399,
        "saikou": 4.81,
        "heikin": 4.32,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.874
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 67.399,
        "saikou": 5.74,
        "heikin": 3.94,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.827
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 65.899,
        "saikou": 4.39,
        "heikin": 4,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.764
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 67.399,
        "saikou": 4,
        "heikin": 3.95,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 6.694
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 61.938,
        "saikou": 3.98,
        "heikin": 3.9,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 6.383
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 65.403,
        "saikou": 3.99,
        "heikin": 3.7,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 6.495
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 63.903,
        "saikou": 3.4,
        "heikin": 3.39,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 6.22
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 53.383,
        "saikou": 3.37,
        "heikin": 3.37,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 6.347
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 54.733,
        "saikou": 3.21,
        "heikin": 3.21,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 6.468
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 50.778,
        "saikou": 3.04,
        "heikin": 3.04,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 6.432
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 50.778,
        "saikou": 3.19,
        "heikin": 3.19,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 6.517
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 53.383,
        "saikou": 3.98,
        "heikin": 3.75,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 6.668
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 53.383,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 6.692
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 54.733,
        "saikou": 4,
        "heikin": 3.95,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 6.811
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 51.483,
        "saikou": 3.03,
        "heikin": 2.08,
        "boshuAvg30d": 86.6,
        "heikinAvg30d": 6.763
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 51.483,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 85.2,
        "heikinAvg30d": 6.946
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 63.333,
        "saikou": 5.58,
        "heikin": 4.57,
        "boshuAvg30d": 84.6,
        "heikinAvg30d": 7.147
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 341.846,
        "saikou": 8.34,
        "heikin": 5.04,
        "boshuAvg30d": 377.8,
        "heikinAvg30d": 3.549
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 348.491,
        "saikou": 9.18,
        "heikin": 5.24,
        "boshuAvg30d": 377.8,
        "heikinAvg30d": 3.57
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 408.662,
        "saikou": 10,
        "heikin": 4.59,
        "boshuAvg30d": 377.8,
        "heikinAvg30d": 3.368
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 439.314,
        "saikou": 4.8,
        "heikin": 2.38,
        "boshuAvg30d": 377.8,
        "heikinAvg30d": 3.318
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 417.208,
        "saikou": 10,
        "heikin": 4.84,
        "boshuAvg30d": 376.2,
        "heikinAvg30d": 3.235
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 398.772,
        "saikou": 9.95,
        "heikin": 5.19,
        "boshuAvg30d": 375.8,
        "heikinAvg30d": 3.277
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 433.176,
        "saikou": 10,
        "heikin": 4.82,
        "boshuAvg30d": 374.4,
        "heikinAvg30d": 3.346
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 411.3,
        "saikou": 9.92,
        "heikin": 5.2,
        "boshuAvg30d": 375.8,
        "heikinAvg30d": 3.527
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 406.671,
        "saikou": 9.02,
        "heikin": 4.12,
        "boshuAvg30d": 376.4,
        "heikinAvg30d": 3.651
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 434.852,
        "saikou": 8.75,
        "heikin": 4.21,
        "boshuAvg30d": 376.8,
        "heikinAvg30d": 3.768
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 345.156,
        "saikou": 7.83,
        "heikin": 5.56,
        "boshuAvg30d": 376.8,
        "heikinAvg30d": 3.641
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 340.304,
        "saikou": 7.15,
        "heikin": 5.3,
        "boshuAvg30d": 376.8,
        "heikinAvg30d": 3.789
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 269.166,
        "saikou": 5.79,
        "heikin": 4.51,
        "boshuAvg30d": 397.1,
        "heikinAvg30d": 3.921
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 289.664,
        "saikou": 6.69,
        "heikin": 4.26,
        "boshuAvg30d": 405.1,
        "heikinAvg30d": 4.104
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 448.864,
        "saikou": 10,
        "heikin": 5.31,
        "boshuAvg30d": 410.1,
        "heikinAvg30d": 3.815
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 289.664,
        "saikou": 6.7,
        "heikin": 3.31,
        "boshuAvg30d": 415.1,
        "heikinAvg30d": 3.608
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 291.63,
        "saikou": 6.69,
        "heikin": 3.02,
        "boshuAvg30d": 415.1,
        "heikinAvg30d": 3.861
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 291.63,
        "saikou": 6.69,
        "heikin": 3.29,
        "boshuAvg30d": 415.1,
        "heikinAvg30d": 3.896
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 291.63,
        "saikou": 6.69,
        "heikin": 3.31,
        "boshuAvg30d": 412.4,
        "heikinAvg30d": 4.206
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 291.107,
        "saikou": 6.7,
        "heikin": 3.47,
        "boshuAvg30d": 412.4,
        "heikinAvg30d": 4.307
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 273.032,
        "saikou": 7.19,
        "heikin": 3.41,
        "boshuAvg30d": 412.4,
        "heikinAvg30d": 4.247
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 272.008,
        "saikou": 7.19,
        "heikin": 3.11,
        "boshuAvg30d": 411.4,
        "heikinAvg30d": 4.084
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 288.037,
        "saikou": 6.7,
        "heikin": 3.02,
        "boshuAvg30d": 408.8,
        "heikinAvg30d": 4.063
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 283.323,
        "saikou": 6.7,
        "heikin": 3.39,
        "boshuAvg30d": 408.8,
        "heikinAvg30d": 3.951
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 195.007,
        "saikou": 6.9,
        "heikin": 3.9,
        "boshuAvg30d": 407.1,
        "heikinAvg30d": 3.884
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 196.85,
        "saikou": 6.77,
        "heikin": 3.98,
        "boshuAvg30d": 407.1,
        "heikinAvg30d": 3.823
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 196.404,
        "saikou": 6.49,
        "heikin": 3.27,
        "boshuAvg30d": 404.1,
        "heikinAvg30d": 3.916
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 196.404,
        "saikou": 6.49,
        "heikin": 3.45,
        "boshuAvg30d": 403.8,
        "heikinAvg30d": 4.019
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 231.35,
        "saikou": 4.37,
        "heikin": 3.04,
        "boshuAvg30d": 402.8,
        "heikinAvg30d": 3.882
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 244.072,
        "saikou": 5.29,
        "heikin": 3.51,
        "boshuAvg30d": 402.4,
        "heikinAvg30d": 3.774
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 316.815,
        "saikou": 6.98,
        "heikin": 3.67,
        "boshuAvg30d": 401.0,
        "heikinAvg30d": 3.764
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 497.594,
        "saikou": 4.24,
        "heikin": 1.96,
        "boshuAvg30d": 401.0,
        "heikinAvg30d": 3.722
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 511.416,
        "saikou": 5.46,
        "heikin": 2.57,
        "boshuAvg30d": 401.0,
        "heikinAvg30d": 4.03
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 559.365,
        "saikou": 4.59,
        "heikin": 1.86,
        "boshuAvg30d": 401.0,
        "heikinAvg30d": 4.262
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 557.794,
        "saikou": 4.1,
        "heikin": 1.77,
        "boshuAvg30d": 396.8,
        "heikinAvg30d": 4.167
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 661.449,
        "saikou": 4.98,
        "heikin": 2.53,
        "boshuAvg30d": 396.5,
        "heikinAvg30d": 4.108
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 724.34,
        "saikou": 5.39,
        "heikin": 1.78,
        "boshuAvg30d": 398.8,
        "heikinAvg30d": 4.251
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 722.465,
        "saikou": 3.49,
        "heikin": 1.85,
        "boshuAvg30d": 398.8,
        "heikinAvg30d": 4.096
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 719.077,
        "saikou": 3.49,
        "heikin": 2.05,
        "boshuAvg30d": 399.1,
        "heikinAvg30d": 4.091
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 755.198,
        "saikou": 3.45,
        "heikin": 2,
        "boshuAvg30d": 399.1,
        "heikinAvg30d": 3.967
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 651.286,
        "saikou": 5.28,
        "heikin": 2.62,
        "boshuAvg30d": 397.1,
        "heikinAvg30d": 3.953
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 674.512,
        "saikou": 5.27,
        "heikin": 2.65,
        "boshuAvg30d": 397.1,
        "heikinAvg30d": 3.898
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 631.475,
        "saikou": 3.94,
        "heikin": 2,
        "boshuAvg30d": 396.5,
        "heikinAvg30d": 3.78
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 631.165,
        "saikou": 3.45,
        "heikin": 1.8,
        "boshuAvg30d": 396.5,
        "heikinAvg30d": 3.951
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 451.068,
        "saikou": 3.98,
        "heikin": 2.09,
        "boshuAvg30d": 396.8,
        "heikinAvg30d": 3.652
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 543.948,
        "saikou": 3.45,
        "heikin": 2.19,
        "boshuAvg30d": 394.8,
        "heikinAvg30d": 3.815
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 550.06,
        "saikou": 3.45,
        "heikin": 2.05,
        "boshuAvg30d": 392.8,
        "heikinAvg30d": 3.928
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 508.126,
        "saikou": 3.94,
        "heikin": 2.47,
        "boshuAvg30d": 391.8,
        "heikinAvg30d": 3.929
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 196.035,
        "saikou": 2.59,
        "heikin": 1.83,
        "boshuAvg30d": 75.0,
        "heikinAvg30d": 1.971
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 192.177,
        "saikou": 2.45,
        "heikin": 1.72,
        "boshuAvg30d": 75.0,
        "heikinAvg30d": 1.751
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 214.013,
        "saikou": 2.54,
        "heikin": 1.8,
        "boshuAvg30d": 75.0,
        "heikinAvg30d": 1.771
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 215.925,
        "saikou": 2.72,
        "heikin": 1.82,
        "boshuAvg30d": 75.0,
        "heikinAvg30d": 1.84
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 201.91,
        "saikou": 2.4,
        "heikin": 1.67,
        "boshuAvg30d": 74.0,
        "heikinAvg30d": 1.74
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 201.92,
        "saikou": 2.48,
        "heikin": 1.79,
        "boshuAvg30d": 74.0,
        "heikinAvg30d": 1.768
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 227.613,
        "saikou": 2.53,
        "heikin": 1.67,
        "boshuAvg30d": 73.6,
        "heikinAvg30d": 1.721
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 223.813,
        "saikou": 2.89,
        "heikin": 1.72,
        "boshuAvg30d": 73.6,
        "heikinAvg30d": 1.905
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 229.513,
        "saikou": 2.64,
        "heikin": 1.38,
        "boshuAvg30d": 74.0,
        "heikinAvg30d": 1.958
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 229.513,
        "saikou": 2.36,
        "heikin": 1.41,
        "boshuAvg30d": 74.0,
        "heikinAvg30d": 1.874
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 223.703,
        "saikou": 3.24,
        "heikin": 1.61,
        "boshuAvg30d": 74.0,
        "heikinAvg30d": 1.948
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 244.012,
        "saikou": 3.55,
        "heikin": 1.58,
        "boshuAvg30d": 74.0,
        "heikinAvg30d": 1.976
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 245.512,
        "saikou": 3.44,
        "heikin": 2.13,
        "boshuAvg30d": 83.6,
        "heikinAvg30d": 2.091
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 213.282,
        "saikou": 2.71,
        "heikin": 1.76,
        "boshuAvg30d": 87.0,
        "heikinAvg30d": 2.133
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 231.503,
        "saikou": 2.74,
        "heikin": 2.08,
        "boshuAvg30d": 90.0,
        "heikinAvg30d": 2.068
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 193.604,
        "saikou": 2.82,
        "heikin": 2.04,
        "boshuAvg30d": 92.0,
        "heikinAvg30d": 2.022
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 191.625,
        "saikou": 4.47,
        "heikin": 1.76,
        "boshuAvg30d": 92.0,
        "heikinAvg30d": 2.228
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 183.34,
        "saikou": 8.72,
        "heikin": 2.84,
        "boshuAvg30d": 92.0,
        "heikinAvg30d": 2.285
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 185.23,
        "saikou": 9.16,
        "heikin": 4.12,
        "boshuAvg30d": 96.3,
        "heikinAvg30d": 2.605
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 148.861,
        "saikou": 4.47,
        "heikin": 2.75,
        "boshuAvg30d": 96.3,
        "heikinAvg30d": 2.613
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 141.943,
        "saikou": 4.47,
        "heikin": 2.98,
        "boshuAvg30d": 97.0,
        "heikinAvg30d": 2.892
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 141.962,
        "saikou": 7.48,
        "heikin": 3.51,
        "boshuAvg30d": 96.3,
        "heikinAvg30d": 2.95
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 146.89,
        "saikou": 7.48,
        "heikin": 3.17,
        "boshuAvg30d": 95.3,
        "heikinAvg30d": 2.859
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 136.91,
        "saikou": 7.48,
        "heikin": 3.22,
        "boshuAvg30d": 94.3,
        "heikinAvg30d": 2.796
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 141.993,
        "saikou": 7.48,
        "heikin": 3.18,
        "boshuAvg30d": 91.0,
        "heikinAvg30d": 2.756
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 145.862,
        "saikou": 4.47,
        "heikin": 2.82,
        "boshuAvg30d": 91.0,
        "heikinAvg30d": 2.768
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 166.082,
        "saikou": 4.47,
        "heikin": 2.5,
        "boshuAvg30d": 91.0,
        "heikinAvg30d": 2.637
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 166.082,
        "saikou": 4.47,
        "heikin": 2.48,
        "boshuAvg30d": 90.6,
        "heikinAvg30d": 2.603
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 166.082,
        "saikou": 8.48,
        "heikin": 3.1,
        "boshuAvg30d": 90.0,
        "heikinAvg30d": 2.799
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 166.082,
        "saikou": 9.48,
        "heikin": 3.54,
        "boshuAvg30d": 90.0,
        "heikinAvg30d": 2.871
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 219.441,
        "saikou": 7.48,
        "heikin": 3.25,
        "boshuAvg30d": 88.6,
        "heikinAvg30d": 2.581
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 243.841,
        "saikou": 7.48,
        "heikin": 3,
        "boshuAvg30d": 88.6,
        "heikinAvg30d": 2.556
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 418.049,
        "saikou": 4.93,
        "heikin": 2.8,
        "boshuAvg30d": 88.6,
        "heikinAvg30d": 2.391
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 414.749,
        "saikou": 7.48,
        "heikin": 2.96,
        "boshuAvg30d": 88.6,
        "heikinAvg30d": 2.641
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 432.839,
        "saikou": 2.74,
        "heikin": 2.19,
        "boshuAvg30d": 88.6,
        "heikinAvg30d": 2.49
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 419.493,
        "saikou": 2.75,
        "heikin": 2.1,
        "boshuAvg30d": 88.2,
        "heikinAvg30d": 2.471
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 417.191,
        "saikou": 2.73,
        "heikin": 1.96,
        "boshuAvg30d": 86.2,
        "heikinAvg30d": 2.221
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 427.038,
        "saikou": 2.69,
        "heikin": 1.65,
        "boshuAvg30d": 86.2,
        "heikinAvg30d": 2.145
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 433.837,
        "saikou": 2.55,
        "heikin": 1.67,
        "boshuAvg30d": 86.2,
        "heikinAvg30d": 1.975
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 437.639,
        "saikou": 2.14,
        "heikin": 1.74,
        "boshuAvg30d": 86.2,
        "heikinAvg30d": 2.079
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 430.721,
        "saikou": 2.02,
        "heikin": 1.57,
        "boshuAvg30d": 86.2,
        "heikinAvg30d": 2.047
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 430.721,
        "saikou": 2.14,
        "heikin": 1.58,
        "boshuAvg30d": 86.2,
        "heikinAvg30d": 2.097
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 435.649,
        "saikou": 1.92,
        "heikin": 1.51,
        "boshuAvg30d": 86.6,
        "heikinAvg30d": 1.894
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 435.649,
        "saikou": 2,
        "heikin": 1.56,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 2.122
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 435.649,
        "saikou": 5.01,
        "heikin": 1.73,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 2.167
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 435.649,
        "saikou": 4.96,
        "heikin": 1.9,
        "boshuAvg30d": 86.6,
        "heikinAvg30d": 2.082
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 435.649,
        "saikou": 1.98,
        "heikin": 1.51,
        "boshuAvg30d": 85.6,
        "heikinAvg30d": 2.04
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 434.149,
        "saikou": 3.54,
        "heikin": 1.62,
        "boshuAvg30d": 82.6,
        "heikinAvg30d": 2.051
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 66.74,
        "saikou": 3.05,
        "heikin": 2.13,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 0.748
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 0.916
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.7,
        "heikin": 0.61,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 0.924
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 1.85,
        "heikin": 0.51,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 1.034
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 1.5,
        "heikin": 0.48,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 1.066
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.5,
        "heikin": 0.58,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 0.892
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 0.48,
        "heikin": 0.44,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 1.075
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 1.327
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 1.209
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 1.332
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 35.052,
        "saikou": 1.14,
        "heikin": 1.14,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 1.551
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 1.468
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 2,
        "heikin": 0.66,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.723
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 47.928,
        "saikou": 1.28,
        "heikin": 0.9,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.545
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 5.96,
        "heikin": 4.89,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.414
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 82.928,
        "saikou": 4.04,
        "heikin": 2.93,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.512
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 82.928,
        "saikou": 1.59,
        "heikin": 1.2,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 2.006
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 82.928,
        "saikou": 0.89,
        "heikin": 0.67,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.99
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.5
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.325
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 3.452
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.699
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 3.115
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.765
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 4.7,
        "heikin": 0.51,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.385
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 3.55,
        "heikin": 0.53,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.428
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 5.55,
        "heikin": 0.63,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.504
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 4.88,
        "heikin": 4.22,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.28
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 5.87,
        "heikin": 5.21,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.338
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.866
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.45,
        "heikin": 5.27,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.54
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.75,
        "heikin": 5.67,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.02
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.374
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 2.95,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.396
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.239
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.95,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.049
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.441
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.441
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.5
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.656
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.964
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.771
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.814
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.886
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.48,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.982
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.578
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.455
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 26.062,
        "saikou": 2.45,
        "heikin": 0.6,
        "boshuAvg30d": 58.8,
        "heikinAvg30d": 1.054
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 115.156,
        "saikou": 1.94,
        "heikin": 1.37,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.965
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 139.101,
        "saikou": 1.59,
        "heikin": 1.01,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.613
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 123.991,
        "saikou": 1.72,
        "heikin": 1.06,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.526
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 133.073,
        "saikou": 1.73,
        "heikin": 1.04,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.47
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 131.63,
        "saikou": 1.55,
        "heikin": 0.95,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.436
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 133.073,
        "saikou": 1.73,
        "heikin": 1.05,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.574
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 142.9,
        "saikou": 1.63,
        "heikin": 1.12,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.723
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 144.898,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.87
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 168.836,
        "saikou": 1.94,
        "heikin": 1.03,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.795
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 144.898,
        "saikou": 1.49,
        "heikin": 1.07,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.884
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 168.836,
        "saikou": 1.48,
        "heikin": 0.74,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.803
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 168.836,
        "saikou": 1.49,
        "heikin": 0.93,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.679
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 168.836,
        "saikou": 2,
        "heikin": 1.13,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.83
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 168.836,
        "saikou": 1.7,
        "heikin": 0.97,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.745
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 142.9,
        "saikou": 2.02,
        "heikin": 1.25,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 1.838
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 136.963,
        "saikou": 1.7,
        "heikin": 1.17,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 1.847
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 135.054,
        "saikou": 1.57,
        "heikin": 0.59,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.076
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 144.898,
        "saikou": 1.49,
        "heikin": 0.56,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.338
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 144.887,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.548
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 146.885,
        "saikou": 1.57,
        "heikin": 0.43,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.475
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 172.261,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.758
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 171.262,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 2.746
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 173.247,
        "saikou": 3.5,
        "heikin": 1.61,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.707
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 174.69,
        "saikou": 3.4,
        "heikin": 1.62,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.461
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 168.823,
        "saikou": 2.54,
        "heikin": 1.48,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.37
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 174.69,
        "saikou": 2.79,
        "heikin": 1.4,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.439
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 150.752,
        "saikou": 5.95,
        "heikin": 2.29,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.667
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 146.885,
        "saikou": 3,
        "heikin": 1.93,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 2.499
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 170.823,
        "saikou": 2.49,
        "heikin": 1.26,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.421
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 170.823,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.394
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 150.752,
        "saikou": 3.95,
        "heikin": 1.93,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.396
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 150.752,
        "saikou": 3.95,
        "heikin": 2.07,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.587
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 173.247,
        "saikou": 5.88,
        "heikin": 3.24,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.502
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 123.366,
        "saikou": 3.54,
        "heikin": 2.46,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.568
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 103.208,
        "saikou": 2.63,
        "heikin": 2.13,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.6
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 103.208,
        "saikou": 3.7,
        "heikin": 2.4,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 2.652
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 2.29,
        "heikin": 1.88,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.382
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 3.7,
        "heikin": 2.05,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.412
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 105.206,
        "saikou": 2.19,
        "heikin": 1.84,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.43
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 105.206,
        "saikou": 2.21,
        "heikin": 1.72,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 2.424
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 103.221,
        "saikou": 1.99,
        "heikin": 1.71,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.341
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 103.221,
        "saikou": 1.99,
        "heikin": 1.71,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.324
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 105.206,
        "saikou": 2,
        "heikin": 1.64,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.252
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2,
        "heikin": 1.73,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.321
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2.05,
        "heikin": 1.73,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.351
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 144.313,
        "saikou": 1.99,
        "heikin": 1.28,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.285
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 119.51,
        "saikou": 1.97,
        "heikin": 1.42,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 1.803
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 101.339,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.927
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 268.997,
        "saikou": 4.23,
        "heikin": 3.51,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.393
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 268.997,
        "saikou": 2.35,
        "heikin": 2.15,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.475
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 176.773,
        "saikou": 2.29,
        "heikin": 1.56,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.56
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 175.058,
        "saikou": 2.29,
        "heikin": 1.56,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.47
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 175.058,
        "saikou": 2.29,
        "heikin": 1.59,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.399
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 175.058,
        "saikou": 2.29,
        "heikin": 1.98,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.582
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.89,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.835
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 191.917,
        "saikou": 2.85,
        "heikin": 2.29,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.081
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.74,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.195
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 191.917,
        "saikou": 3.3,
        "heikin": 2.57,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.561
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 191.917,
        "saikou": 4.6,
        "heikin": 3.42,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.808
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 191.917,
        "saikou": 3.3,
        "heikin": 2.54,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.771
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.96,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 3.077
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 280.088,
        "saikou": 2.72,
        "heikin": 2.27,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 2.174
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 208.223,
        "saikou": 2.29,
        "heikin": 1.99,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 1.613
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 289.646,
        "saikou": 1.56,
        "heikin": 1.33,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.268
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.484
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.97,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.597
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 292.079,
        "saikou": 1.56,
        "heikin": 1.34,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.721
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 226.97,
        "saikou": 2.29,
        "heikin": 1.48,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 1.706
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 292.079,
        "saikou": 1.56,
        "heikin": 0.93,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 1.901
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 292.079,
        "saikou": 1.56,
        "heikin": 0.79,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.761
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 292.079,
        "saikou": 1.56,
        "heikin": 0.69,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.782
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 271.292,
        "saikou": 1.56,
        "heikin": 0.7,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.667
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 242.912,
        "saikou": 1.56,
        "heikin": 0.6,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.537
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 270.349,
        "saikou": 1.56,
        "heikin": 0.57,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.575
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 193.755,
        "saikou": 1.56,
        "heikin": 0.68,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.851
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 193.755,
        "saikou": 2.29,
        "heikin": 1.05,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.708
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.25,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.656
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 321.38,
        "saikou": 1.56,
        "heikin": 1.29,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.793
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 185.232,
        "saikou": 2.7,
        "heikin": 2,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.123
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 185.232,
        "saikou": 3.07,
        "heikin": 2.19,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.412
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 185.232,
        "saikou": 6.34,
        "heikin": 4.3,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.679
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 185.232,
        "saikou": 6.87,
        "heikin": 4.82,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.366
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 185.232,
        "saikou": 7.31,
        "heikin": 4.9,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.816
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 185.232,
        "saikou": 7.86,
        "heikin": 5.27,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.983
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 183.242,
        "saikou": 7.16,
        "heikin": 4.82,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.281
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 183.242,
        "saikou": 7.38,
        "heikin": 4.95,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.313
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 183.242,
        "saikou": 6.35,
        "heikin": 4.28,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.005
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 185.232,
        "saikou": 6.25,
        "heikin": 4.19,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.543
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 185.232,
        "saikou": 6.4,
        "heikin": 4.27,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.524
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 185.232,
        "saikou": 6.35,
        "heikin": 4.23,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 3.214
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 185.232,
        "saikou": 6.26,
        "heikin": 4.19,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.471
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 185.232,
        "saikou": 6.25,
        "heikin": 4.18,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.324
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 185.232,
        "saikou": 6.26,
        "heikin": 4.5,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.207
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 183.432,
        "saikou": 5.94,
        "heikin": 4.25,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 2.681
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 183.432,
        "saikou": 5.38,
        "heikin": 3.67,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 2.626
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 190.117,
        "saikou": 2.35,
        "heikin": 2.08,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 1.68
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.829
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.805
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 4.76,
        "heikin": 1.46,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.782
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.775
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.781
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.11,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.781
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.805
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 81,
        "saikou": 1.7,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.82
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 105.543,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.86
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 91.543,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 91.543,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.882
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 91.543,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.809
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 111.543,
        "saikou": 1.7,
        "heikin": 1.18,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.885
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 109.543,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.883
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.882
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 128.543,
        "saikou": 1.7,
        "heikin": 1,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.851
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 147.043,
        "saikou": 1.7,
        "heikin": 1.03,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.842
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 147.043,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.909
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 1.23,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.066
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.65,
        "heikin": 1.31,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.021
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 1.23,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.043
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.33,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.991
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.052
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.35,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.07
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.39,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.197
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.39,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.178
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.33,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.123
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 125.043,
        "saikou": 1.7,
        "heikin": 1.33,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.122
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 1.28,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.114
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 114.043,
        "saikou": 1.6,
        "heikin": 1.21,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.05
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 113.043,
        "saikou": 1.7,
        "heikin": 1.01,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.077
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 127.043,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.112
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 77.543,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.14
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 50.543,
        "saikou": 4.76,
        "heikin": 2.29,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 1.158
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 47.543,
        "saikou": 4.76,
        "heikin": 2.12,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.295
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 48.543,
        "saikou": 2.55,
        "heikin": 1.65,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.294
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 50.543,
        "saikou": 2.1,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.28
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 48.543,
        "saikou": 1.95,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.338
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 49.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.233
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 48.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.237
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.209
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 48.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.196
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.6,
        "heikin": 1.58,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.869
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.6,
        "heikin": 1.58,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.832
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.863
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.6,
        "heikin": 1.58,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.847
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 108.543,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.869
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 2.39,
        "heikin": 1.32,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.892
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 101.128,
        "saikou": 7.47,
        "heikin": 3.87,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.976
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 108.05,
        "saikou": 6.99,
        "heikin": 3.65,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.439
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 109.856,
        "saikou": 6.66,
        "heikin": 3.5,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.131
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 107.906,
        "saikou": 6.21,
        "heikin": 3.3,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 2.963
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 109.854,
        "saikou": 6.35,
        "heikin": 3.32,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 2.89
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 109.854,
        "saikou": 6.66,
        "heikin": 3.47,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.227
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 129.009,
        "saikou": 6.63,
        "heikin": 3.35,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.554
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 179.205,
        "saikou": 6.94,
        "heikin": 4.69,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.972
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 185.009,
        "saikou": 7.13,
        "heikin": 4.8,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 4.223
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 247.009,
        "saikou": 7.3,
        "heikin": 5.16,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 4.658
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 240.057,
        "saikou": 7.74,
        "heikin": 5.68,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 4.889
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 177.757,
        "saikou": 7.74,
        "heikin": 5.35,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 4.759
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 179.733,
        "saikou": 7.5,
        "heikin": 5.07,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 4.294
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 123.733,
        "saikou": 6.93,
        "heikin": 3.49,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 3.496
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 112.733,
        "saikou": 5.95,
        "heikin": 3.04,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 2.581
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 162.733,
        "saikou": 4.7,
        "heikin": 2.47,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 2.55
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 212.733,
        "saikou": 4.73,
        "heikin": 3.19,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 2.763
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 212.733,
        "saikou": 4.11,
        "heikin": 2.8,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 3.003
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 214.719,
        "saikou": 3.48,
        "heikin": 2.49,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 2.982
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 231.719,
        "saikou": 2.89,
        "heikin": 2.4,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 2.845
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 223.787,
        "saikou": 3.03,
        "heikin": 2.46,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 2.735
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 221.798,
        "saikou": 3.03,
        "heikin": 2.49,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 2.799
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 228.23,
        "saikou": 2.45,
        "heikin": 2.13,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 2.71
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 228.121,
        "saikou": 2.74,
        "heikin": 2.33,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 2.674
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 216.377,
        "saikou": 2.23,
        "heikin": 1.93,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 2.279
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 216.377,
        "saikou": 2.48,
        "heikin": 2.14,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 2.482
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 235.571,
        "saikou": 2.48,
        "heikin": 2.15,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 2.813
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 268.571,
        "saikou": 4.04,
        "heikin": 3.22,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 3.342
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 268.571,
        "saikou": 4.49,
        "heikin": 3.51,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 3.546
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 218.571,
        "saikou": 8.37,
        "heikin": 5.93,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 3.961
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 118.571,
        "saikou": 7.29,
        "heikin": 3.43,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 4.221
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 129.571,
        "saikou": 8.41,
        "heikin": 4.18,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 4.936
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 174.571,
        "saikou": 9.94,
        "heikin": 6.55,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 5.619
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 256.571,
        "saikou": 10,
        "heikin": 8.13,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.058
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 253.582,
        "saikou": 10,
        "heikin": 7.57,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.054
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 292.823,
        "saikou": 10,
        "heikin": 7.58,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 6.274
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 236.115,
        "saikou": 10,
        "heikin": 7.61,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.319
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 238.091,
        "saikou": 10,
        "heikin": 7.55,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.176
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 241.23,
        "saikou": 10,
        "heikin": 7.51,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.941
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 243.219,
        "saikou": 9.25,
        "heikin": 6.99,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.491
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 238.587,
        "saikou": 8.79,
        "heikin": 6.63,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.472
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 238.587,
        "saikou": 8.53,
        "heikin": 6.45,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.293
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 243.063,
        "saikou": 8.3,
        "heikin": 6.3,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.18
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 244.063,
        "saikou": 8.95,
        "heikin": 6.79,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 5.15
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 244.063,
        "saikou": 9.49,
        "heikin": 7.61,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 5.231
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 232.039,
        "saikou": 8.88,
        "heikin": 7.07,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.773
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 181.039,
        "saikou": 8.86,
        "heikin": 6.41,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.658
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 125.039,
        "saikou": 8.31,
        "heikin": 4.34,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 3.835
      }
    ]
  }
};
