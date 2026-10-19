// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近29日間（本データでは2026/09/19〜2026/10/18）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-19",
  "fetchedAt": "2026-10-19",
  "avgWindowLabel": "過去29日平均（2026/09/19〜2026/10/18）",
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
      "boshu": 1024,
      "ouatsu": 1397.886,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1134.7,
      "heikinAvg30d": 2.894
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1024,
      "ouatsu": 1447.877,
      "saikou": 10,
      "heikin": 3.92,
      "boshuAvg30d": 1134.7,
      "heikinAvg30d": 2.822
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1024,
      "ouatsu": 1481.046,
      "saikou": 9.91,
      "heikin": 3.35,
      "boshuAvg30d": 1134.7,
      "heikinAvg30d": 2.798
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1024,
      "ouatsu": 1306.689,
      "saikou": 9.77,
      "heikin": 3.16,
      "boshuAvg30d": 1134.7,
      "heikinAvg30d": 2.691
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1021,
      "ouatsu": 1220.535,
      "saikou": 10,
      "heikin": 3.91,
      "boshuAvg30d": 1130.9,
      "heikinAvg30d": 2.693
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1020,
      "ouatsu": 1203.14,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1129.9,
      "heikinAvg30d": 2.808
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1017,
      "ouatsu": 1331.557,
      "saikou": 9.69,
      "heikin": 3.19,
      "boshuAvg30d": 1143.0,
      "heikinAvg30d": 2.98
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1019,
      "ouatsu": 1292.08,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1144.6,
      "heikinAvg30d": 3.18
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1021,
      "ouatsu": 1288.715,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1147.0,
      "heikinAvg30d": 3.263
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1022,
      "ouatsu": 1345.67,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1147.6,
      "heikinAvg30d": 3.431
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1022,
      "ouatsu": 1188.704,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1147.6,
      "heikinAvg30d": 3.482
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1022,
      "ouatsu": 1131.201,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1147.6,
      "heikinAvg30d": 3.509
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1082,
      "ouatsu": 1272.438,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1210.0,
      "heikinAvg30d": 3.548
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1105,
      "ouatsu": 1255.376,
      "saikou": 9.91,
      "heikin": 3.89,
      "boshuAvg30d": 1232.2,
      "heikinAvg30d": 3.335
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1126,
      "ouatsu": 1239.347,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1254.0,
      "heikinAvg30d": 2.944
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1143,
      "ouatsu": 1250.565,
      "saikou": 9.69,
      "heikin": 3.48,
      "boshuAvg30d": 1271.4,
      "heikinAvg30d": 2.77
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1143,
      "ouatsu": 1444.41,
      "saikou": 10,
      "heikin": 4.17,
      "boshuAvg30d": 1271.9,
      "heikinAvg30d": 2.929
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1143,
      "ouatsu": 1284.51,
      "saikou": 9.8,
      "heikin": 3.49,
      "boshuAvg30d": 1271.9,
      "heikinAvg30d": 2.959
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1075,
      "ouatsu": 1386.201,
      "saikou": 10,
      "heikin": 4.21,
      "boshuAvg30d": 1238.7,
      "heikinAvg30d": 3.155
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1078,
      "ouatsu": 1372.456,
      "saikou": 10,
      "heikin": 4.1,
      "boshuAvg30d": 1242.1,
      "heikinAvg30d": 3.127
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1083,
      "ouatsu": 1358.015,
      "saikou": 10,
      "heikin": 4.73,
      "boshuAvg30d": 1245.4,
      "heikinAvg30d": 3.206
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1083,
      "ouatsu": 1384.336,
      "saikou": 10,
      "heikin": 5.07,
      "boshuAvg30d": 1245.4,
      "heikinAvg30d": 3.116
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1080,
      "ouatsu": 1460.581,
      "saikou": 10,
      "heikin": 5.2,
      "boshuAvg30d": 1242.4,
      "heikinAvg30d": 3.095
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1079,
      "ouatsu": 1362.331,
      "saikou": 10,
      "heikin": 5.2,
      "boshuAvg30d": 1241.4,
      "heikinAvg30d": 3.033
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1059,
      "ouatsu": 1416.948,
      "saikou": 10,
      "heikin": 4.68,
      "boshuAvg30d": 1226.8,
      "heikinAvg30d": 2.959
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1059,
      "ouatsu": 1393.526,
      "saikou": 10,
      "heikin": 4.55,
      "boshuAvg30d": 1226.8,
      "heikinAvg30d": 2.972
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1059,
      "ouatsu": 1295.307,
      "saikou": 10,
      "heikin": 4.86,
      "boshuAvg30d": 1226.8,
      "heikinAvg30d": 3.049
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1057,
      "ouatsu": 1206.671,
      "saikou": 10,
      "heikin": 4.77,
      "boshuAvg30d": 1223.4,
      "heikinAvg30d": 3.127
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1054,
      "ouatsu": 1102.077,
      "saikou": 10,
      "heikin": 4.25,
      "boshuAvg30d": 1219.6,
      "heikinAvg30d": 3.113
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1048,
      "ouatsu": 1083.178,
      "saikou": 10,
      "heikin": 4.03,
      "boshuAvg30d": 1213.2,
      "heikinAvg30d": 3.207
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1114,
      "ouatsu": 1091.129,
      "saikou": 10,
      "heikin": 4.54,
      "boshuAvg30d": 1248.8,
      "heikinAvg30d": 3.085
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1114,
      "ouatsu": 1126.986,
      "saikou": 10,
      "heikin": 4.64,
      "boshuAvg30d": 1248.8,
      "heikinAvg30d": 3.328
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1115,
      "ouatsu": 1139.445,
      "saikou": 10,
      "heikin": 4.86,
      "boshuAvg30d": 1249.4,
      "heikinAvg30d": 3.744
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1114,
      "ouatsu": 1074.073,
      "saikou": 10,
      "heikin": 4.65,
      "boshuAvg30d": 1247.9,
      "heikinAvg30d": 4.088
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1112,
      "ouatsu": 1177.268,
      "saikou": 10,
      "heikin": 4.72,
      "boshuAvg30d": 1244.8,
      "heikinAvg30d": 4.129
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1107,
      "ouatsu": 1105.344,
      "saikou": 10,
      "heikin": 4.77,
      "boshuAvg30d": 1239.8,
      "heikinAvg30d": 4.218
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1102,
      "ouatsu": 1180.238,
      "saikou": 10,
      "heikin": 4.39,
      "boshuAvg30d": 1233.6,
      "heikinAvg30d": 4.149
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1102,
      "ouatsu": 1203.563,
      "saikou": 10,
      "heikin": 4.56,
      "boshuAvg30d": 1233.6,
      "heikinAvg30d": 4.04
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1102,
      "ouatsu": 1233.07,
      "saikou": 10,
      "heikin": 4.34,
      "boshuAvg30d": 1233.6,
      "heikinAvg30d": 3.961
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1101,
      "ouatsu": 1315.013,
      "saikou": 10,
      "heikin": 4.24,
      "boshuAvg30d": 1232.6,
      "heikinAvg30d": 3.728
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1093,
      "ouatsu": 1383.809,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1225.9,
      "heikinAvg30d": 3.691
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1093,
      "ouatsu": 1463.35,
      "saikou": 10,
      "heikin": 4.89,
      "boshuAvg30d": 1224.2,
      "heikinAvg30d": 3.595
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1003,
      "ouatsu": 1493.695,
      "saikou": 10,
      "heikin": 4.39,
      "boshuAvg30d": 1144.8,
      "heikinAvg30d": 3.446
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1006,
      "ouatsu": 1542.962,
      "saikou": 10,
      "heikin": 4.3,
      "boshuAvg30d": 1147.8,
      "heikinAvg30d": 3.504
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1007,
      "ouatsu": 1342.892,
      "saikou": 10,
      "heikin": 4.47,
      "boshuAvg30d": 1149.2,
      "heikinAvg30d": 3.424
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1002,
      "ouatsu": 1454.473,
      "saikou": 10,
      "heikin": 4.02,
      "boshuAvg30d": 1143.4,
      "heikinAvg30d": 3.273
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 993,
      "ouatsu": 1281.087,
      "saikou": 10,
      "heikin": 4.24,
      "boshuAvg30d": 1135.2,
      "heikinAvg30d": 3.282
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 986,
      "ouatsu": 1280.64,
      "saikou": 9.91,
      "heikin": 4.69,
      "boshuAvg30d": 1127.8,
      "heikinAvg30d": 2.986
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
        "ouatsu": 66.188,
        "saikou": 9.91,
        "heikin": 8.51,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 2.903
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 93.718,
        "saikou": 9.91,
        "heikin": 9.35,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 2.669
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 93.718,
        "saikou": 9.91,
        "heikin": 9.35,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 2.704
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 45.418,
        "saikou": 9.77,
        "heikin": 7.86,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 2.411
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 89.908,
        "saikou": 9.91,
        "heikin": 9.31,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 2.927
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 45.418,
        "saikou": 9.69,
        "heikin": 7.85,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 2.92
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 45.418,
        "saikou": 9.69,
        "heikin": 7.85,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 3.211
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 95.708,
        "saikou": 9.91,
        "heikin": 9.39,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 3.149
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.93,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 3.295
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 95.708,
        "saikou": 9.91,
        "heikin": 9.39,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 3.015
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.91,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 3.213
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.93,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 3.476
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 105.708,
        "saikou": 9.91,
        "heikin": 8.87,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 3.099
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 103.718,
        "saikou": 9.91,
        "heikin": 8.4,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 3.036
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 57.408,
        "saikou": 9.8,
        "heikin": 6.62,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.628
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 55.418,
        "saikou": 9.69,
        "heikin": 6.5,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 2.597
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 79.458,
        "saikou": 9.91,
        "heikin": 9.12,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 2.404
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.91,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 2.102
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 101.458,
        "saikou": 9.91,
        "heikin": 9.14,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 2.233
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 7.95,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.874
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 89.958,
        "saikou": 9.91,
        "heikin": 9.19,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 2.546
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 7.91,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 1.736
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 87.958,
        "saikou": 9.91,
        "heikin": 9.18,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.4
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 41.95,
        "saikou": 9.66,
        "heikin": 7.96,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.232
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 94.208,
        "saikou": 9.91,
        "heikin": 9.29,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.282
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 55.908,
        "saikou": 9.8,
        "heikin": 6.73,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.538
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 95.708,
        "saikou": 9.91,
        "heikin": 9.29,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.937
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 105.708,
        "saikou": 9.91,
        "heikin": 8.37,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.457
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 45.458,
        "saikou": 9.8,
        "heikin": 8.07,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.691
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 170.768,
        "saikou": 9.91,
        "heikin": 7.35,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 3.069
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 122.468,
        "saikou": 10,
        "heikin": 9.53,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 2.099
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 124.458,
        "saikou": 9.66,
        "heikin": 8.36,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 3.265
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 172.758,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 4.267
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 97.468,
        "saikou": 10,
        "heikin": 9.25,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 4.701
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 113.958,
        "saikou": 9.8,
        "heikin": 8.36,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 4.509
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 97.468,
        "saikou": 9.36,
        "heikin": 8.7,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 4.377
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 160.908,
        "saikou": 9.78,
        "heikin": 6.68,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 4.345
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 174.708,
        "saikou": 9.91,
        "heikin": 8.48,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 4.184
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 124.418,
        "saikou": 9.78,
        "heikin": 7.49,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 3.869
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 172.758,
        "saikou": 9.91,
        "heikin": 6.97,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 3.757
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 124.458,
        "saikou": 9.69,
        "heikin": 5.93,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.745
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 182.758,
        "saikou": 9.91,
        "heikin": 6.96,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 3.386
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 122.468,
        "saikou": 9.69,
        "heikin": 6.61,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 3.648
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 174.708,
        "saikou": 9.91,
        "heikin": 8.43,
        "boshuAvg30d": 54.6,
        "heikinAvg30d": 3.905
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 126.408,
        "saikou": 9.77,
        "heikin": 8.23,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 3.736
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 174.708,
        "saikou": 9.91,
        "heikin": 8.16,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 3.456
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 126.408,
        "saikou": 9.77,
        "heikin": 9.07,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 3.731
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 103.718,
        "saikou": 9.91,
        "heikin": 9.27,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 3.189
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 93.412,
        "saikou": 8.54,
        "heikin": 7.33,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 6.259
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 91.512,
        "saikou": 8.83,
        "heikin": 7.8,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 6.536
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 115.251,
        "saikou": 9.25,
        "heikin": 6.35,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 6.563
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 115.25,
        "saikou": 8.8,
        "heikin": 6.15,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 6.633
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 111.304,
        "saikou": 10,
        "heikin": 5.84,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 6.672
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 111.304,
        "saikou": 10,
        "heikin": 5.84,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 6.743
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 113.75,
        "saikou": 7.93,
        "heikin": 5.78,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 6.744
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 115.25,
        "saikou": 10,
        "heikin": 5.86,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 6.651
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 119.248,
        "saikou": 10,
        "heikin": 5.78,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 6.614
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 119.248,
        "saikou": 10,
        "heikin": 5.76,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 6.588
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 119.248,
        "saikou": 10,
        "heikin": 6.16,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 6.756
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 119.248,
        "saikou": 10,
        "heikin": 6.05,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 6.853
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 119.248,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 7.06
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 117.748,
        "saikou": 7.67,
        "heikin": 6.46,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 7.221
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 119.248,
        "saikou": 10,
        "heikin": 6.51,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 7.471
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 117.748,
        "saikou": 7.82,
        "heikin": 6.5,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 7.687
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 119.248,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 8.052
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 117.748,
        "saikou": 9,
        "heikin": 6.78,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 8.061
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 121.244,
        "saikou": 7.91,
        "heikin": 5.13,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 7.954
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 121.244,
        "saikou": 7.91,
        "heikin": 5.24,
        "boshuAvg30d": 117.9,
        "heikinAvg30d": 8.091
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 104.819,
        "saikou": 7.93,
        "heikin": 5.73,
        "boshuAvg30d": 117.3,
        "heikinAvg30d": 8.104
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 104.819,
        "saikou": 9,
        "heikin": 6.23,
        "boshuAvg30d": 117.7,
        "heikinAvg30d": 8.196
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 108.674,
        "saikou": 9,
        "heikin": 6.21,
        "boshuAvg30d": 118.3,
        "heikinAvg30d": 8.226
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 119.344,
        "saikou": 9,
        "heikin": 6.14,
        "boshuAvg30d": 118.3,
        "heikinAvg30d": 8.12
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 117.348,
        "saikou": 7.91,
        "heikin": 5.21,
        "boshuAvg30d": 116.4,
        "heikinAvg30d": 8.173
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 119.248,
        "saikou": 7.41,
        "heikin": 5.27,
        "boshuAvg30d": 116.4,
        "heikinAvg30d": 8.053
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 97.244,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 116.4,
        "heikinAvg30d": 7.683
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 71.344,
        "saikou": 10,
        "heikin": 6.19,
        "boshuAvg30d": 114.6,
        "heikinAvg30d": 7.306
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 73.244,
        "saikou": 10,
        "heikin": 6.73,
        "boshuAvg30d": 113.7,
        "heikinAvg30d": 7.416
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 73.244,
        "saikou": 10,
        "heikin": 5.54,
        "boshuAvg30d": 110.5,
        "heikinAvg30d": 6.599
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 73.244,
        "saikou": 10,
        "heikin": 5.83,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 6.67
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 73.244,
        "saikou": 10,
        "heikin": 4.25,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 6.011
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 73.244,
        "saikou": 10,
        "heikin": 4.45,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 5.956
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 71.744,
        "saikou": 10,
        "heikin": 3.91,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 6.02
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 73.244,
        "saikou": 10,
        "heikin": 4.01,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 5.909
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 71.744,
        "saikou": 9.98,
        "heikin": 3.84,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 5.565
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 71.248,
        "saikou": 10,
        "heikin": 3.64,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.692
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 69.748,
        "saikou": 9.98,
        "heikin": 3.25,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.332
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 59.228,
        "saikou": 10,
        "heikin": 3.41,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.35
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 60.578,
        "saikou": 10,
        "heikin": 3.57,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 5.491
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 56.723,
        "saikou": 10,
        "heikin": 3.55,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 5.507
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 53.473,
        "saikou": 10,
        "heikin": 3.5,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 5.635
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 103.398,
        "saikou": 7.2,
        "heikin": 4.76,
        "boshuAvg30d": 75.4,
        "heikinAvg30d": 5.781
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 80.748,
        "saikou": 4,
        "heikin": 2.96,
        "boshuAvg30d": 75.4,
        "heikinAvg30d": 5.62
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 81.328,
        "saikou": 10,
        "heikin": 3.09,
        "boshuAvg30d": 75.4,
        "heikinAvg30d": 5.921
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 81.328,
        "saikou": 4,
        "heikin": 3.1,
        "boshuAvg30d": 74.4,
        "heikinAvg30d": 5.859
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 56.748,
        "saikou": 10,
        "heikin": 3.46,
        "boshuAvg30d": 72.9,
        "heikinAvg30d": 5.993
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 81.178,
        "saikou": 7.06,
        "heikin": 3.85,
        "boshuAvg30d": 72.4,
        "heikinAvg30d": 6.358
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 402.965,
        "saikou": 10,
        "heikin": 4.93,
        "boshuAvg30d": 327.3,
        "heikinAvg30d": 3.845
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 423.969,
        "saikou": 10,
        "heikin": 4.51,
        "boshuAvg30d": 327.3,
        "heikinAvg30d": 3.996
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 426.531,
        "saikou": 3.69,
        "heikin": 2.42,
        "boshuAvg30d": 327.3,
        "heikinAvg30d": 3.729
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 329.124,
        "saikou": 3.59,
        "heikin": 2.26,
        "boshuAvg30d": 327.3,
        "heikinAvg30d": 3.627
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 201.861,
        "saikou": 5.75,
        "heikin": 3.72,
        "boshuAvg30d": 325.9,
        "heikinAvg30d": 3.557
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 230.989,
        "saikou": 5.98,
        "heikin": 3.23,
        "boshuAvg30d": 325.3,
        "heikinAvg30d": 3.606
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 282.235,
        "saikou": 6.68,
        "heikin": 3.11,
        "boshuAvg30d": 323.8,
        "heikinAvg30d": 3.748
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 272.638,
        "saikou": 3.5,
        "heikin": 2.86,
        "boshuAvg30d": 325.3,
        "heikinAvg30d": 3.889
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 273.671,
        "saikou": 3.5,
        "heikin": 2.84,
        "boshuAvg30d": 325.8,
        "heikinAvg30d": 3.984
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 277.711,
        "saikou": 3.6,
        "heikin": 2.7,
        "boshuAvg30d": 326.3,
        "heikinAvg30d": 4.178
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 185.334,
        "saikou": 3.6,
        "heikin": 2.76,
        "boshuAvg30d": 326.3,
        "heikinAvg30d": 4.066
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 133.222,
        "saikou": 3.6,
        "heikin": 3.37,
        "boshuAvg30d": 326.3,
        "heikinAvg30d": 4.262
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 141.026,
        "saikou": 4.37,
        "heikin": 3.78,
        "boshuAvg30d": 346.2,
        "heikinAvg30d": 4.257
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 141.026,
        "saikou": 5.49,
        "heikin": 4.77,
        "boshuAvg30d": 354.2,
        "heikinAvg30d": 4.462
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 177.205,
        "saikou": 5.62,
        "heikin": 4.85,
        "boshuAvg30d": 359.2,
        "heikinAvg30d": 4.033
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 235.933,
        "saikou": 5.89,
        "heikin": 4.67,
        "boshuAvg30d": 364.2,
        "heikinAvg30d": 3.752
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 408.263,
        "saikou": 10,
        "heikin": 6.11,
        "boshuAvg30d": 364.2,
        "heikinAvg30d": 3.921
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 255.544,
        "saikou": 5.94,
        "heikin": 4.1,
        "boshuAvg30d": 364.2,
        "heikinAvg30d": 3.922
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 359.026,
        "saikou": 10,
        "heikin": 5.7,
        "boshuAvg30d": 358.9,
        "heikinAvg30d": 4.227
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 346.464,
        "saikou": 10,
        "heikin": 5.86,
        "boshuAvg30d": 358.9,
        "heikinAvg30d": 4.283
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 362.338,
        "saikou": 10,
        "heikin": 5.52,
        "boshuAvg30d": 358.9,
        "heikinAvg30d": 4.257
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 361.642,
        "saikou": 10,
        "heikin": 5.59,
        "boshuAvg30d": 357.9,
        "heikinAvg30d": 4.075
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 375.948,
        "saikou": 10,
        "heikin": 5.69,
        "boshuAvg30d": 355.4,
        "heikinAvg30d": 4.022
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 339.546,
        "saikou": 10,
        "heikin": 6.12,
        "boshuAvg30d": 355.4,
        "heikinAvg30d": 3.944
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 375.432,
        "saikou": 10,
        "heikin": 4.82,
        "boshuAvg30d": 353.3,
        "heikinAvg30d": 3.901
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 375.125,
        "saikou": 10,
        "heikin": 5.26,
        "boshuAvg30d": 353.3,
        "heikinAvg30d": 3.834
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 277.094,
        "saikou": 5.49,
        "heikin": 4.41,
        "boshuAvg30d": 353.3,
        "heikinAvg30d": 3.955
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 255.973,
        "saikou": 8.13,
        "heikin": 5.41,
        "boshuAvg30d": 353.2,
        "heikinAvg30d": 4.047
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 256.247,
        "saikou": 9.24,
        "heikin": 5.18,
        "boshuAvg30d": 352.2,
        "heikinAvg30d": 3.883
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 170.911,
        "saikou": 5.36,
        "heikin": 2.68,
        "boshuAvg30d": 351.6,
        "heikinAvg30d": 3.716
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 177.778,
        "saikou": 9.61,
        "heikin": 3.38,
        "boshuAvg30d": 350.0,
        "heikinAvg30d": 3.638
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 163.17,
        "saikou": 3.29,
        "heikin": 2.43,
        "boshuAvg30d": 350.0,
        "heikinAvg30d": 3.657
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 163.17,
        "saikou": 3.29,
        "heikin": 2.42,
        "boshuAvg30d": 350.0,
        "heikinAvg30d": 3.914
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 163.17,
        "saikou": 3.29,
        "heikin": 2.44,
        "boshuAvg30d": 350.0,
        "heikinAvg30d": 4.166
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 167.088,
        "saikou": 3.29,
        "heikin": 2.43,
        "boshuAvg30d": 349.7,
        "heikinAvg30d": 3.988
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 163.338,
        "saikou": 3.29,
        "heikin": 2.41,
        "boshuAvg30d": 349.3,
        "heikinAvg30d": 3.994
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 169.145,
        "saikou": 3.29,
        "heikin": 2.43,
        "boshuAvg30d": 351.9,
        "heikinAvg30d": 4.117
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 169.145,
        "saikou": 3.02,
        "heikin": 2.23,
        "boshuAvg30d": 351.9,
        "heikinAvg30d": 3.938
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 198.372,
        "saikou": 6.07,
        "heikin": 2.9,
        "boshuAvg30d": 351.9,
        "heikinAvg30d": 4.008
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 221.026,
        "saikou": 5.93,
        "heikin": 3.19,
        "boshuAvg30d": 351.9,
        "heikinAvg30d": 3.753
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 376.499,
        "saikou": 5.9,
        "heikin": 3.58,
        "boshuAvg30d": 349.9,
        "heikinAvg30d": 3.788
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 372.799,
        "saikou": 10,
        "heikin": 6.44,
        "boshuAvg30d": 349.9,
        "heikinAvg30d": 3.783
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 370.456,
        "saikou": 9.93,
        "heikin": 5.36,
        "boshuAvg30d": 349.5,
        "heikinAvg30d": 3.53
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 321.652,
        "saikou": 6.53,
        "heikin": 3.56,
        "boshuAvg30d": 349.5,
        "heikinAvg30d": 3.668
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 157.3,
        "saikou": 3.29,
        "heikin": 2.25,
        "boshuAvg30d": 349.9,
        "heikinAvg30d": 3.378
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 284.392,
        "saikou": 6.61,
        "heikin": 3.49,
        "boshuAvg30d": 347.9,
        "heikinAvg30d": 3.556
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 222.114,
        "saikou": 3.45,
        "heikin": 3.15,
        "boshuAvg30d": 345.9,
        "heikinAvg30d": 3.826
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 237.934,
        "saikou": 9.59,
        "heikin": 6.41,
        "boshuAvg30d": 344.9,
        "heikinAvg30d": 3.854
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 286.26,
        "saikou": 3.41,
        "heikin": 1.95,
        "boshuAvg30d": 93.5,
        "heikinAvg30d": 1.951
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 284.4,
        "saikou": 5.55,
        "heikin": 2.74,
        "boshuAvg30d": 93.5,
        "heikinAvg30d": 1.719
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 282.416,
        "saikou": 6.49,
        "heikin": 2.99,
        "boshuAvg30d": 93.5,
        "heikinAvg30d": 1.733
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 288.202,
        "saikou": 7.06,
        "heikin": 3.16,
        "boshuAvg30d": 93.5,
        "heikinAvg30d": 1.77
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 274.287,
        "saikou": 8.19,
        "heikin": 3.58,
        "boshuAvg30d": 92.5,
        "heikinAvg30d": 1.661
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 274.203,
        "saikou": 7.03,
        "heikin": 3.11,
        "boshuAvg30d": 92.5,
        "heikinAvg30d": 1.663
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 299.9,
        "saikou": 4.48,
        "heikin": 2.38,
        "boshuAvg30d": 91.9,
        "heikinAvg30d": 1.577
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 274.612,
        "saikou": 4.13,
        "heikin": 2.21,
        "boshuAvg30d": 91.9,
        "heikinAvg30d": 1.739
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 299.145,
        "saikou": 4,
        "heikin": 1.74,
        "boshuAvg30d": 92.5,
        "heikinAvg30d": 1.776
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 302.28,
        "saikou": 4.01,
        "heikin": 2.04,
        "boshuAvg30d": 92.5,
        "heikinAvg30d": 1.714
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 285.991,
        "saikou": 3.49,
        "heikin": 2.04,
        "boshuAvg30d": 92.5,
        "heikinAvg30d": 1.802
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 264.286,
        "saikou": 3.21,
        "heikin": 1.69,
        "boshuAvg30d": 92.5,
        "heikinAvg30d": 1.791
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 325.353,
        "saikou": 4.03,
        "heikin": 2.3,
        "boshuAvg30d": 101.9,
        "heikinAvg30d": 2.007
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 325.353,
        "saikou": 4.1,
        "heikin": 2.43,
        "boshuAvg30d": 105.5,
        "heikinAvg30d": 2.06
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 323.369,
        "saikou": 5.1,
        "heikin": 2.61,
        "boshuAvg30d": 108.5,
        "heikinAvg30d": 2.052
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 321.963,
        "saikou": 4.04,
        "heikin": 2.4,
        "boshuAvg30d": 110.5,
        "heikinAvg30d": 2.081
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 321.916,
        "saikou": 4.19,
        "heikin": 2.41,
        "boshuAvg30d": 110.5,
        "heikinAvg30d": 2.23
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 342.299,
        "saikou": 4.63,
        "heikin": 2.16,
        "boshuAvg30d": 110.5,
        "heikinAvg30d": 2.337
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 344.283,
        "saikou": 6.04,
        "heikin": 3.27,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 2.709
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 344.283,
        "saikou": 6.3,
        "heikin": 3.39,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 2.687
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 313.308,
        "saikou": 6.54,
        "heikin": 3.44,
        "boshuAvg30d": 115.5,
        "heikinAvg30d": 2.954
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 336.373,
        "saikou": 6.62,
        "heikin": 4.14,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 3.01
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 344.288,
        "saikou": 6,
        "heikin": 3.77,
        "boshuAvg30d": 114.1,
        "heikinAvg30d": 2.875
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 321.219,
        "saikou": 5.92,
        "heikin": 3.94,
        "boshuAvg30d": 113.1,
        "heikinAvg30d": 2.857
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 299.514,
        "saikou": 4.02,
        "heikin": 2.95,
        "boshuAvg30d": 109.5,
        "heikinAvg30d": 2.867
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 307.504,
        "saikou": 3.98,
        "heikin": 2.92,
        "boshuAvg30d": 109.5,
        "heikinAvg30d": 2.85
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 325.239,
        "saikou": 9.18,
        "heikin": 4.7,
        "boshuAvg30d": 109.5,
        "heikinAvg30d": 2.716
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 326.067,
        "saikou": 8.95,
        "heikin": 3.85,
        "boshuAvg30d": 108.9,
        "heikinAvg30d": 2.701
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 319.184,
        "saikou": 7,
        "heikin": 3.77,
        "boshuAvg30d": 108.5,
        "heikinAvg30d": 2.867
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 261.754,
        "saikou": 9.01,
        "heikin": 4.08,
        "boshuAvg30d": 108.5,
        "heikinAvg30d": 2.931
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 245.655,
        "saikou": 7.53,
        "heikin": 4.34,
        "boshuAvg30d": 106.9,
        "heikinAvg30d": 2.666
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 245.655,
        "saikou": 4.88,
        "heikin": 3.05,
        "boshuAvg30d": 106.9,
        "heikinAvg30d": 2.716
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 224.357,
        "saikou": 4.63,
        "heikin": 3.26,
        "boshuAvg30d": 106.9,
        "heikinAvg30d": 2.627
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 227.218,
        "saikou": 4.63,
        "heikin": 3.16,
        "boshuAvg30d": 106.9,
        "heikinAvg30d": 2.769
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 236.983,
        "saikou": 9.56,
        "heikin": 3.18,
        "boshuAvg30d": 106.9,
        "heikinAvg30d": 2.61
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 233.494,
        "saikou": 8.93,
        "heikin": 3.05,
        "boshuAvg30d": 106.3,
        "heikinAvg30d": 2.657
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 233.176,
        "saikou": 7.84,
        "heikin": 2.65,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 2.338
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 233.176,
        "saikou": 7.41,
        "heikin": 2.49,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 2.166
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 230.581,
        "saikou": 6.55,
        "heikin": 2.15,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 2.027
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 248.177,
        "saikou": 5.2,
        "heikin": 1.8,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 2.02
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 238.272,
        "saikou": 5.2,
        "heikin": 1.8,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 1.93
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 255.268,
        "saikou": 5.1,
        "heikin": 1.84,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 1.964
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 225.761,
        "saikou": 5.1,
        "heikin": 1.63,
        "boshuAvg30d": 104.9,
        "heikinAvg30d": 1.77
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 343.716,
        "saikou": 4.11,
        "heikin": 2.9,
        "boshuAvg30d": 105.9,
        "heikinAvg30d": 1.982
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 279.892,
        "saikou": 6.41,
        "heikin": 3.68,
        "boshuAvg30d": 105.9,
        "heikinAvg30d": 2.001
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 235.397,
        "saikou": 5.38,
        "heikin": 2.34,
        "boshuAvg30d": 104.9,
        "heikinAvg30d": 2.02
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 238.397,
        "saikou": 5.85,
        "heikin": 2.51,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 1.917
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 250.888,
        "saikou": 3.73,
        "heikin": 2.46,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 1.989
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
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 0.912
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 0.918
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.68,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 1.045
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.85,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 1.041
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 0.997
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 0.961
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 1.124
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 1.348
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 1.056
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 1.163
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 1.43
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 1.439
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.9,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.73
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.427
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.396
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.382
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.461
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3.12,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.348
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.05,
        "heikin": 2.69,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.703
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.644
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.916
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.682
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.109
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.894
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.593
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.319
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 3.219
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.742
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.6,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.813
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.5,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.944
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.45,
        "heikin": 5.27,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 3.164
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.55,
        "heikin": 6.07,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 3.74
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 3.99,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.893
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.45,
        "heikin": 3.3,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.681
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.437
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.93,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.417
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 2.376
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 2.613
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 2.455
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.773
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.25,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.958
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.65,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.607
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.35,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.669
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.3,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.752
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.07
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.529
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.268
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 1.001
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 137.705,
        "saikou": 1.68,
        "heikin": 1.04,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.703
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 140.998,
        "saikou": 1.54,
        "heikin": 0.99,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.447
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 162.981,
        "saikou": 1.56,
        "heikin": 0.89,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.315
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 129.066,
        "saikou": 1.55,
        "heikin": 0.94,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.234
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 133.617,
        "saikou": 1.51,
        "heikin": 0.95,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.158
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 138.998,
        "saikou": 1.99,
        "heikin": 1.02,
        "boshuAvg30d": 128.2,
        "heikinAvg30d": 1.316
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 146.885,
        "saikou": 1.99,
        "heikin": 1.06,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.511
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.5,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.68
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.47,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.601
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.33,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.679
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.36,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.613
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 126.928,
        "saikou": 1.99,
        "heikin": 1.19,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.482
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 126.928,
        "saikou": 2.29,
        "heikin": 1.32,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 1.69
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 126.356,
        "saikou": 2.29,
        "heikin": 1.3,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 1.663
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 120.942,
        "saikou": 2.29,
        "heikin": 1.48,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 1.687
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 101.328,
        "saikou": 2.29,
        "heikin": 1.68,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 1.679
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 101.328,
        "saikou": 2.29,
        "heikin": 1.58,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 1.788
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 107.314,
        "saikou": 3.95,
        "heikin": 2.2,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.062
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 105.327,
        "saikou": 3,
        "heikin": 2.19,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.34
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 109.194,
        "saikou": 3,
        "heikin": 2.27,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.262
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 105.339,
        "saikou": 5.95,
        "heikin": 2.91,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.503
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 105.339,
        "saikou": 5.95,
        "heikin": 3.13,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.569
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 107.324,
        "saikou": 5.95,
        "heikin": 3.12,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.573
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 105.881,
        "saikou": 3,
        "heikin": 2.68,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.4
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 105.881,
        "saikou": 2.8,
        "heikin": 2.5,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.298
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 107.324,
        "saikou": 2.8,
        "heikin": 2.45,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.326
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 107.324,
        "saikou": 5.95,
        "heikin": 2.9,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.596
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 105.881,
        "saikou": 3,
        "heikin": 2.57,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 2.386
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 107.324,
        "saikou": 4.45,
        "heikin": 2.51,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.279
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 105.881,
        "saikou": 3,
        "heikin": 1.77,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.169
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 105.327,
        "saikou": 3.95,
        "heikin": 2.78,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.196
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 107.324,
        "saikou": 3.95,
        "heikin": 2.77,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.543
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 107.324,
        "saikou": 3.95,
        "heikin": 2.67,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.445
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 101.338,
        "saikou": 2.44,
        "heikin": 2.1,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.455
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 103.325,
        "saikou": 2.5,
        "heikin": 2.17,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.487
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 103.325,
        "saikou": 3.7,
        "heikin": 2.75,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.59
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 103.235,
        "saikou": 2.24,
        "heikin": 1.87,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.24
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 103.235,
        "saikou": 2.42,
        "heikin": 1.93,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.262
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 111.181,
        "saikou": 2,
        "heikin": 1.7,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.273
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 111.181,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 2.224
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 109.196,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.139
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 109.196,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.124
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 111.181,
        "saikou": 2,
        "heikin": 1.67,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.097
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 111.181,
        "saikou": 2,
        "heikin": 1.72,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.201
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 107.314,
        "saikou": 2,
        "heikin": 1.72,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.225
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 120.992,
        "saikou": 1.99,
        "heikin": 1.49,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 2.211
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 92.314,
        "saikou": 1.99,
        "heikin": 1.5,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 1.656
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 1.821
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 29.83,
        "saikou": 1.5,
        "heikin": 1.43,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.862
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 29.83,
        "saikou": 1.5,
        "heikin": 1.43,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.888
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 29.83,
        "saikou": 1.5,
        "heikin": 1.43,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.889
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 23.866,
        "saikou": 1.5,
        "heikin": 1.46,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.761
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 31.82,
        "saikou": 1.5,
        "heikin": 1.41,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.685
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 33.62,
        "saikou": 1.5,
        "heikin": 1.41,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.988
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 50.479,
        "saikou": 2,
        "heikin": 1.38,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 2.16
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 50.479,
        "saikou": 2,
        "heikin": 1.37,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 2.511
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 50.479,
        "saikou": 2,
        "heikin": 1.37,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 2.687
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 50.479,
        "saikou": 2,
        "heikin": 1.37,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.101
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 50.479,
        "saikou": 2,
        "heikin": 1.37,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.089
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 50.479,
        "saikou": 2,
        "heikin": 1.37,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.055
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 50.479,
        "saikou": 2,
        "heikin": 1.41,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 3.309
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 50.479,
        "saikou": 2,
        "heikin": 1.48,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.527
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 50.479,
        "saikou": 2,
        "heikin": 1.46,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 1.607
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 50.479,
        "saikou": 2,
        "heikin": 1.48,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 1.291
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 48.491,
        "saikou": 1.5,
        "heikin": 1.46,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 1.379
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 48.491,
        "saikou": 1.5,
        "heikin": 1.43,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 1.474
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 32.595,
        "saikou": 2.7,
        "heikin": 1.47,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 1.616
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 32.595,
        "saikou": 1.45,
        "heikin": 1.43,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 1.548
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 32.595,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 1.628
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 30.597,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 1.524
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 28.599,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 1.612
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 28.599,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 1.67
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 28.599,
        "saikou": 1,
        "heikin": 1,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.475
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 28.599,
        "saikou": 1,
        "heikin": 1,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.535
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 28.599,
        "saikou": 1.45,
        "heikin": 1.27,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.821
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 28.599,
        "saikou": 2.7,
        "heikin": 1.4,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 1.707
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 30.597,
        "saikou": 2.8,
        "heikin": 1.56,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 1.666
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 30.597,
        "saikou": 2.8,
        "heikin": 1.56,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.669
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 40.984,
        "saikou": 6.38,
        "heikin": 2.78,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 1.946
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 30.597,
        "saikou": 2.8,
        "heikin": 1.77,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 2.27
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 30.597,
        "saikou": 3.5,
        "heikin": 1.81,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 2.575
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 30.597,
        "saikou": 3.98,
        "heikin": 3.23,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 3.398
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 64.292,
        "saikou": 4.48,
        "heikin": 3.56,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 3.982
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 30.597,
        "saikou": 4.48,
        "heikin": 3.49,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.213
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 28.607,
        "saikou": 4.48,
        "heikin": 3.49,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.348
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 28.607,
        "saikou": 4.48,
        "heikin": 2.04,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.367
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 46.491,
        "saikou": 3.5,
        "heikin": 1.68,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.066
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 48.481,
        "saikou": 3.5,
        "heikin": 1.58,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 3.579
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 48.481,
        "saikou": 3.5,
        "heikin": 1.57,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.752
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 57.7,
        "saikou": 2.29,
        "heikin": 1.62,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 3.53
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 95.979,
        "saikou": 6.38,
        "heikin": 2.48,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 3.732
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 48.481,
        "saikou": 1.45,
        "heikin": 1.44,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 3.437
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 95.979,
        "saikou": 6.38,
        "heikin": 3.04,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 3.335
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 94.179,
        "saikou": 6.38,
        "heikin": 2.5,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.817
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 95.979,
        "saikou": 6.38,
        "heikin": 2.48,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 2.801
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 48.481,
        "saikou": 2,
        "heikin": 1.5,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 1.88
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
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 1.006
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.959
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 211,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.946
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 211,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.944
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 211,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.947
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 211,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.933
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.923
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 208,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.001
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.036
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.006
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.935
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.984
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 209.543,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.921
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 209.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.883
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 186.543,
        "saikou": 1.7,
        "heikin": 0.63,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.878
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 186.543,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.819
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 186.543,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.853
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 153.543,
        "saikou": 4.99,
        "heikin": 0.82,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 1.171
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.109
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.112
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.034
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.112
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.14
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.143
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.177
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 155,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.131
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 107,
        "saikou": 1.55,
        "heikin": 0.38,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.135
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 107,
        "saikou": 1.55,
        "heikin": 0.38,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.21
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 107,
        "saikou": 1.55,
        "heikin": 0.38,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 1.122
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 141,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.123
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.152
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 141,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.268
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 156.543,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 1.371
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 164.543,
        "saikou": 1.6,
        "heikin": 1.03,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.501
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.548
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 165.543,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.503
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 174.543,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.538
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.41
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.7,
        "heikin": 1.51,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.404
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.7,
        "heikin": 1.51,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.373
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.7,
        "heikin": 1.53,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.361
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.024
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.99
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 236.543,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.005
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 236.543,
        "saikou": 1.07,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.989
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 200.543,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.021
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 202.543,
        "saikou": 1.7,
        "heikin": 0.96,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.01
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 155.055,
        "saikou": 7.87,
        "heikin": 4.9,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 4.331
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 156.979,
        "saikou": 6.97,
        "heikin": 4.33,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 3.832
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 155.391,
        "saikou": 6.62,
        "heikin": 4.1,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 3.657
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 160.835,
        "saikou": 6.87,
        "heikin": 4.27,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 3.399
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 162.81,
        "saikou": 7.55,
        "heikin": 4.63,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 3.29
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 153.68,
        "saikou": 7.64,
        "heikin": 4.72,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 3.686
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 169.419,
        "saikou": 7.77,
        "heikin": 4.79,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 3.99
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 164.151,
        "saikou": 7.91,
        "heikin": 4.89,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.499
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 167.979,
        "saikou": 8.57,
        "heikin": 5.25,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.742
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 169.459,
        "saikou": 8.9,
        "heikin": 5.44,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 5.155
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 169.459,
        "saikou": 9.06,
        "heikin": 5.53,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 5.31
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 166.159,
        "saikou": 9.15,
        "heikin": 5.6,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 5.134
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 177.225,
        "saikou": 9.13,
        "heikin": 5.5,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 4.656
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 177.225,
        "saikou": 9.15,
        "heikin": 5.47,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 3.864
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 177.225,
        "saikou": 9.12,
        "heikin": 5.42,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 2.75
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 177.225,
        "saikou": 8.89,
        "heikin": 5.26,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 2.655
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 175.235,
        "saikou": 8.24,
        "heikin": 4.86,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 2.796
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 175.235,
        "saikou": 9.13,
        "heikin": 5.36,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 2.944
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 164.797,
        "saikou": 9.15,
        "heikin": 5.26,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 2.878
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 214.797,
        "saikou": 9.15,
        "heikin": 5.26,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 2.692
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 193.187,
        "saikou": 10,
        "heikin": 7.29,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 2.584
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 243.187,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 2.605
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 251.319,
        "saikou": 10,
        "heikin": 8.96,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 2.491
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 249.321,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 2.454
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 239.495,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 1.953
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 243.347,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 2.153
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 205.171,
        "saikou": 10,
        "heikin": 7.65,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 2.629
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 202.171,
        "saikou": 10,
        "heikin": 7.55,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 3.183
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 159.095,
        "saikou": 10,
        "heikin": 6.01,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 3.411
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 159.095,
        "saikou": 10,
        "heikin": 6.08,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 4.029
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 180.745,
        "saikou": 10,
        "heikin": 6.58,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 4.209
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 226.067,
        "saikou": 10,
        "heikin": 7.56,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 4.749
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 223.067,
        "saikou": 10,
        "heikin": 7.56,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 5.82
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 222.067,
        "saikou": 10,
        "heikin": 7.54,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.158
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 249.907,
        "saikou": 10,
        "heikin": 7.79,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 6.318
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 248.907,
        "saikou": 10,
        "heikin": 7.81,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.394
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 244.448,
        "saikou": 10,
        "heikin": 7.79,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 6.411
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 246.473,
        "saikou": 10,
        "heikin": 7.83,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 6.375
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 270.328,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 6.194
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 260.341,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.756
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 237.709,
        "saikou": 10,
        "heikin": 7.59,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.697
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 239.685,
        "saikou": 10,
        "heikin": 7.57,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.478
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 237.981,
        "saikou": 10,
        "heikin": 7.54,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.321
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 236.005,
        "saikou": 10,
        "heikin": 7.49,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.279
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 254.2,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.443
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 223.006,
        "saikou": 10,
        "heikin": 7.33,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.029
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 244.656,
        "saikou": 10,
        "heikin": 7.48,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 4.899
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 244.656,
        "saikou": 9.57,
        "heikin": 6.78,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 4.123
      }
    ]
  }
};
