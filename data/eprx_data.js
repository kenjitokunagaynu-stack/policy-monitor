// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/15〜2026/11/13）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-14",
  "fetchedAt": "2026-11-14",
  "avgWindowLabel": "過去30日平均（2026/10/15〜2026/11/13）",
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
      "boshu": 1316,
      "ouatsu": 1411.793,
      "saikou": 9.99,
      "heikin": 2.63,
      "boshuAvg30d": 1124.6,
      "heikinAvg30d": 2.831
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1316,
      "ouatsu": 1454.019,
      "saikou": 9.99,
      "heikin": 2.33,
      "boshuAvg30d": 1124.6,
      "heikinAvg30d": 2.78
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1316,
      "ouatsu": 1451.699,
      "saikou": 9.99,
      "heikin": 2.29,
      "boshuAvg30d": 1124.6,
      "heikinAvg30d": 2.696
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1315,
      "ouatsu": 1514.9,
      "saikou": 9.99,
      "heikin": 2.32,
      "boshuAvg30d": 1124.1,
      "heikinAvg30d": 2.649
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1309,
      "ouatsu": 1452.628,
      "saikou": 9.99,
      "heikin": 2.38,
      "boshuAvg30d": 1119.8,
      "heikinAvg30d": 2.707
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1309,
      "ouatsu": 1493.628,
      "saikou": 9.99,
      "heikin": 2.37,
      "boshuAvg30d": 1119.3,
      "heikinAvg30d": 2.769
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1306,
      "ouatsu": 1749.285,
      "saikou": 9.99,
      "heikin": 2.35,
      "boshuAvg30d": 1116.3,
      "heikinAvg30d": 2.911
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1310,
      "ouatsu": 1601.074,
      "saikou": 9.99,
      "heikin": 2.21,
      "boshuAvg30d": 1119.1,
      "heikinAvg30d": 3.136
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1310,
      "ouatsu": 1632.019,
      "saikou": 9.99,
      "heikin": 2.45,
      "boshuAvg30d": 1120.3,
      "heikinAvg30d": 3.212
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1312,
      "ouatsu": 1518.949,
      "saikou": 9.99,
      "heikin": 2.31,
      "boshuAvg30d": 1121.7,
      "heikinAvg30d": 3.253
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1312,
      "ouatsu": 1545.904,
      "saikou": 9.99,
      "heikin": 2.6,
      "boshuAvg30d": 1121.7,
      "heikinAvg30d": 3.303
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1312,
      "ouatsu": 1555.368,
      "saikou": 9.99,
      "heikin": 2.4,
      "boshuAvg30d": 1121.7,
      "heikinAvg30d": 3.341
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1371,
      "ouatsu": 1472.832,
      "saikou": 9.99,
      "heikin": 2.69,
      "boshuAvg30d": 1181.3,
      "heikinAvg30d": 3.435
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1396,
      "ouatsu": 1519.169,
      "saikou": 9.99,
      "heikin": 3.33,
      "boshuAvg30d": 1205.1,
      "heikinAvg30d": 3.413
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1415,
      "ouatsu": 1427.86,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1225.3,
      "heikinAvg30d": 3.214
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1430,
      "ouatsu": 1537.767,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1241.7,
      "heikinAvg30d": 2.957
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1430,
      "ouatsu": 1599.143,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1242.1,
      "heikinAvg30d": 2.84
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1430,
      "ouatsu": 1365.553,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1245.9,
      "heikinAvg30d": 2.837
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1359,
      "ouatsu": 1327.647,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1188.1,
      "heikinAvg30d": 2.806
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1364,
      "ouatsu": 1278.123,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1192.0,
      "heikinAvg30d": 2.821
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1368,
      "ouatsu": 1188.615,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1197.2,
      "heikinAvg30d": 2.791
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1372,
      "ouatsu": 1176.353,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1198.9,
      "heikinAvg30d": 2.822
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1366,
      "ouatsu": 1192.042,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1194.6,
      "heikinAvg30d": 2.749
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1366,
      "ouatsu": 1071.7,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1194.0,
      "heikinAvg30d": 2.826
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1347,
      "ouatsu": 1091.488,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1174.1,
      "heikinAvg30d": 2.644
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1347,
      "ouatsu": 1030.664,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1174.1,
      "heikinAvg30d": 2.675
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1347,
      "ouatsu": 1095.785,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1174.1,
      "heikinAvg30d": 2.812
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1343,
      "ouatsu": 1185.99,
      "saikou": 10,
      "heikin": 2.43,
      "boshuAvg30d": 1170.9,
      "heikinAvg30d": 2.977
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1342,
      "ouatsu": 1148.826,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1168.8,
      "heikinAvg30d": 3.075
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1336,
      "ouatsu": 1198.869,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1162.8,
      "heikinAvg30d": 3.123
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1407,
      "ouatsu": 1241.931,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1228.1,
      "heikinAvg30d": 3.272
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1407,
      "ouatsu": 1325.499,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1227.8,
      "heikinAvg30d": 3.42
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1407,
      "ouatsu": 1333.818,
      "saikou": 10,
      "heikin": 3.78,
      "boshuAvg30d": 1228.0,
      "heikinAvg30d": 3.707
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1405,
      "ouatsu": 1226.363,
      "saikou": 9.99,
      "heikin": 4.02,
      "boshuAvg30d": 1226.6,
      "heikinAvg30d": 3.838
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1403,
      "ouatsu": 1296.351,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1218.3,
      "heikinAvg30d": 3.775
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1398,
      "ouatsu": 1322.824,
      "saikou": 9.99,
      "heikin": 3.49,
      "boshuAvg30d": 1213.3,
      "heikinAvg30d": 3.782
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1394,
      "ouatsu": 1239.635,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1207.7,
      "heikinAvg30d": 3.611
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1394,
      "ouatsu": 1345.774,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1207.7,
      "heikinAvg30d": 3.628
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1394,
      "ouatsu": 1390.461,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1207.7,
      "heikinAvg30d": 3.418
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1392,
      "ouatsu": 1364.413,
      "saikou": 10,
      "heikin": 2.42,
      "boshuAvg30d": 1206.6,
      "heikinAvg30d": 3.349
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1385,
      "ouatsu": 1588.206,
      "saikou": 9.99,
      "heikin": 3.07,
      "boshuAvg30d": 1199.1,
      "heikinAvg30d": 3.269
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1385,
      "ouatsu": 1524.902,
      "saikou": 9.99,
      "heikin": 3.11,
      "boshuAvg30d": 1199.1,
      "heikinAvg30d": 3.223
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1296,
      "ouatsu": 1486.509,
      "saikou": 9.99,
      "heikin": 2.88,
      "boshuAvg30d": 1109.5,
      "heikinAvg30d": 3.139
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1299,
      "ouatsu": 1502.424,
      "saikou": 9.99,
      "heikin": 3.07,
      "boshuAvg30d": 1112.5,
      "heikinAvg30d": 3.074
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1298,
      "ouatsu": 1364.886,
      "saikou": 9.99,
      "heikin": 2.68,
      "boshuAvg30d": 1115.6,
      "heikinAvg30d": 3.134
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1291,
      "ouatsu": 1473.521,
      "saikou": 9.99,
      "heikin": 2.43,
      "boshuAvg30d": 1106.8,
      "heikinAvg30d": 3.076
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1283,
      "ouatsu": 1486.523,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1098.5,
      "heikinAvg30d": 3.093
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1275,
      "ouatsu": 1478.219,
      "saikou": 9.99,
      "heikin": 2.39,
      "boshuAvg30d": 1090.4,
      "heikinAvg30d": 2.891
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
        "ouatsu": 129.908,
        "saikou": 9.48,
        "heikin": 1.99,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.518
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 172.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.773
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 127.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.499
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 160.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.744
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 132.908,
        "saikou": 6,
        "heikin": 1.37,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 3.841
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 130.918,
        "saikou": 9.48,
        "heikin": 1.5,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 3.459
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 170.258,
        "saikou": 9.91,
        "heikin": 2.32,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 3.754
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 134.108,
        "saikou": 9.6,
        "heikin": 2.15,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.366
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 182.408,
        "saikou": 9.91,
        "heikin": 4.63,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.09
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 132.118,
        "saikou": 9.48,
        "heikin": 3.06,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.013
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 180.418,
        "saikou": 9.91,
        "heikin": 4.22,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.135
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 182.408,
        "saikou": 2.7,
        "heikin": 1.51,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.209
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 129.14,
        "saikou": 9.48,
        "heikin": 3.6,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.244
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 171.49,
        "saikou": 9.91,
        "heikin": 5.29,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.366
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 131.108,
        "saikou": 8.47,
        "heikin": 2.8,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.262
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 206.118,
        "saikou": 8.05,
        "heikin": 4.17,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.252
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 153.908,
        "saikou": 9.2,
        "heikin": 4.19,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.752
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 129.908,
        "saikou": 7.85,
        "heikin": 3.27,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.195
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 154.908,
        "saikou": 9.5,
        "heikin": 2.55,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 4.09
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 124.918,
        "saikou": 7.95,
        "heikin": 3.78,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 3.885
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 143.908,
        "saikou": 9.5,
        "heikin": 3.11,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 3.773
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 153.908,
        "saikou": 7.8,
        "heikin": 2.82,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 3.703
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 202.208,
        "saikou": 9.5,
        "heikin": 3.72,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 3.884
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 127.918,
        "saikou": 9.91,
        "heikin": 3.88,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 3.938
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 151.918,
        "saikou": 9.04,
        "heikin": 2.76,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 3.774
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 9.04,
        "heikin": 3.58,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 3.607
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 157.918,
        "saikou": 7.75,
        "heikin": 4.18,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 3.704
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 202.208,
        "saikou": 8.1,
        "heikin": 2.35,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.521
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 124.908,
        "saikou": 7.8,
        "heikin": 3.3,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.528
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 139.908,
        "saikou": 7.7,
        "heikin": 3.23,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 5.05
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 129.908,
        "saikou": 7.8,
        "heikin": 2.18,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 4.916
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 132.908,
        "saikou": 9.5,
        "heikin": 3.18,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 5.584
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 197.208,
        "saikou": 9.91,
        "heikin": 5.48,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 6.135
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 101.24,
        "saikou": 9.91,
        "heikin": 7.54,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 5.71
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 80.94,
        "saikou": 9.8,
        "heikin": 4.24,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 5.221
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 136.208,
        "saikou": 9.91,
        "heikin": 6.09,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 5.293
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 126.908,
        "saikou": 9.5,
        "heikin": 3.56,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 4.771
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 174.158,
        "saikou": 3.58,
        "heikin": 3.04,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 5.047
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 144.918,
        "saikou": 9.5,
        "heikin": 3.25,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 4.848
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 117.918,
        "saikou": 9.5,
        "heikin": 2.39,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 5.1
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 210.208,
        "saikou": 6,
        "heikin": 2.97,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 4.833
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 160.908,
        "saikou": 3.74,
        "heikin": 2.88,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.46
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 123.808,
        "saikou": 9.91,
        "heikin": 5.03,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.222
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 131.208,
        "saikou": 9.91,
        "heikin": 6.77,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.323
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 132.908,
        "saikou": 9.6,
        "heikin": 2.12,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.464
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 117.908,
        "saikou": 9.71,
        "heikin": 2.69,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.243
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 141.208,
        "saikou": 9.91,
        "heikin": 5.6,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 3.77
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 166.208,
        "saikou": 9.91,
        "heikin": 2.78,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.846
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 46.034,
        "saikou": 7.66,
        "heikin": 5.24,
        "boshuAvg30d": 120.6,
        "heikinAvg30d": 5.317
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 60.534,
        "saikou": 8,
        "heikin": 4.24,
        "boshuAvg30d": 120.6,
        "heikinAvg30d": 5.456
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 80.412,
        "saikou": 8.09,
        "heikin": 6.24,
        "boshuAvg30d": 120.6,
        "heikinAvg30d": 5.466
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 82.372,
        "saikou": 8.23,
        "heikin": 4.36,
        "boshuAvg30d": 120.6,
        "heikinAvg30d": 5.527
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 74.494,
        "saikou": 8.2,
        "heikin": 6.64,
        "boshuAvg30d": 120.6,
        "heikinAvg30d": 5.327
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 74.494,
        "saikou": 8.12,
        "heikin": 6.56,
        "boshuAvg30d": 120.6,
        "heikinAvg30d": 5.151
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 95.372,
        "saikou": 8.12,
        "heikin": 6.56,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.343
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 96.872,
        "saikou": 7.93,
        "heikin": 6.38,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.105
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 96.872,
        "saikou": 7.35,
        "heikin": 4.58,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 4.899
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 94.942,
        "saikou": 7.27,
        "heikin": 3.69,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.068
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 96.872,
        "saikou": 6.98,
        "heikin": 4.07,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.215
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 95.222,
        "saikou": 6.97,
        "heikin": 4.08,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.138
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 108.872,
        "saikou": 6.57,
        "heikin": 3.97,
        "boshuAvg30d": 127.0,
        "heikinAvg30d": 5.318
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 107.372,
        "saikou": 6.57,
        "heikin": 3.91,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 5.143
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 108.872,
        "saikou": 10,
        "heikin": 4.7,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 5.477
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 107.372,
        "saikou": 10,
        "heikin": 5.95,
        "boshuAvg30d": 136.6,
        "heikinAvg30d": 5.457
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 108.872,
        "saikou": 10,
        "heikin": 5.88,
        "boshuAvg30d": 136.6,
        "heikinAvg30d": 5.432
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 106.022,
        "saikou": 10,
        "heikin": 5.41,
        "boshuAvg30d": 136.6,
        "heikinAvg30d": 5.541
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 122.868,
        "saikou": 10,
        "heikin": 4.15,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 5.233
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 122.868,
        "saikou": 10,
        "heikin": 5.4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.369
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 118.913,
        "saikou": 10,
        "heikin": 5.46,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 5.312
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 116.917,
        "saikou": 10,
        "heikin": 5.79,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 5.455
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 110.298,
        "saikou": 10,
        "heikin": 5.99,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 5.422
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 106.718,
        "saikou": 10,
        "heikin": 6.04,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 5.51
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 108.368,
        "saikou": 10,
        "heikin": 6.09,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 5.74
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 108.368,
        "saikou": 10,
        "heikin": 5.9,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 5.66
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 122.868,
        "saikou": 10,
        "heikin": 4.16,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 5.024
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 124.864,
        "saikou": 10,
        "heikin": 4.03,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 5.358
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 102.194,
        "saikou": 10,
        "heikin": 5.17,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 5.311
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 124.864,
        "saikou": 10,
        "heikin": 5.18,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.835
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 112.864,
        "saikou": 10,
        "heikin": 5.35,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 5.027
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 110.868,
        "saikou": 10,
        "heikin": 6.26,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 4.574
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 110.868,
        "saikou": 10,
        "heikin": 5.6,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 4.417
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 109.368,
        "saikou": 9.5,
        "heikin": 5.06,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 4.239
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 108.867,
        "saikou": 10,
        "heikin": 5.76,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 4.379
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 107.713,
        "saikou": 7.05,
        "heikin": 3.87,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 3.949
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 108.872,
        "saikou": 10,
        "heikin": 3.56,
        "boshuAvg30d": 132.6,
        "heikinAvg30d": 3.507
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 109.368,
        "saikou": 7.78,
        "heikin": 3.44,
        "boshuAvg30d": 132.6,
        "heikinAvg30d": 3.204
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 110.868,
        "saikou": 10,
        "heikin": 3.54,
        "boshuAvg30d": 132.6,
        "heikinAvg30d": 3.17
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 110.868,
        "saikou": 10,
        "heikin": 3.54,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 3.577
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 96.243,
        "saikou": 7.32,
        "heikin": 5.23,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 3.492
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 106.913,
        "saikou": 7.07,
        "heikin": 3.65,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 3.686
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 83.018,
        "saikou": 7.03,
        "heikin": 3.46,
        "boshuAvg30d": 42.6,
        "heikinAvg30d": 3.636
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 83.018,
        "saikou": 8.26,
        "heikin": 4.08,
        "boshuAvg30d": 42.6,
        "heikinAvg30d": 4.004
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 84.368,
        "saikou": 8.63,
        "heikin": 4.16,
        "boshuAvg30d": 42.6,
        "heikinAvg30d": 3.89
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 84.368,
        "saikou": 8.13,
        "heikin": 3.96,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 4.599
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 84.368,
        "saikou": 8.72,
        "heikin": 4.31,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 4.462
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 81.218,
        "saikou": 9.07,
        "heikin": 4.61,
        "boshuAvg30d": 39.6,
        "heikinAvg30d": 4.989
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 458.608,
        "saikou": 4.96,
        "heikin": 2,
        "boshuAvg30d": 240.8,
        "heikinAvg30d": 2.644
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 452.82,
        "saikou": 5.1,
        "heikin": 1.94,
        "boshuAvg30d": 240.8,
        "heikinAvg30d": 2.601
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 458.62,
        "saikou": 6.19,
        "heikin": 1.98,
        "boshuAvg30d": 240.8,
        "heikinAvg30d": 2.67
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 468.02,
        "saikou": 6.59,
        "heikin": 2.07,
        "boshuAvg30d": 240.8,
        "heikinAvg30d": 2.456
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 471.6,
        "saikou": 6.48,
        "heikin": 2,
        "boshuAvg30d": 239.3,
        "heikinAvg30d": 2.491
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 473.59,
        "saikou": 6.27,
        "heikin": 1.95,
        "boshuAvg30d": 238.8,
        "heikinAvg30d": 2.406
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 477.709,
        "saikou": 6.27,
        "heikin": 1.89,
        "boshuAvg30d": 236.8,
        "heikinAvg30d": 2.446
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 476.449,
        "saikou": 5.7,
        "heikin": 1.76,
        "boshuAvg30d": 238.8,
        "heikinAvg30d": 2.563
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 458.271,
        "saikou": 4.05,
        "heikin": 1.42,
        "boshuAvg30d": 238.8,
        "heikinAvg30d": 2.817
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 452.948,
        "saikou": 8.22,
        "heikin": 1.48,
        "boshuAvg30d": 239.8,
        "heikinAvg30d": 2.645
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 426.623,
        "saikou": 7.75,
        "heikin": 2.04,
        "boshuAvg30d": 239.8,
        "heikinAvg30d": 2.606
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 401.515,
        "saikou": 6.97,
        "heikin": 2.18,
        "boshuAvg30d": 239.8,
        "heikinAvg30d": 2.848
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 366.333,
        "saikou": 6.64,
        "heikin": 2.97,
        "boshuAvg30d": 259.2,
        "heikinAvg30d": 3.123
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 410.942,
        "saikou": 7.09,
        "heikin": 3.17,
        "boshuAvg30d": 267.2,
        "heikinAvg30d": 3.159
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 366.212,
        "saikou": 7.57,
        "heikin": 2.75,
        "boshuAvg30d": 271.8,
        "heikinAvg30d": 3.021
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 372.932,
        "saikou": 7.62,
        "heikin": 2.23,
        "boshuAvg30d": 277.1,
        "heikinAvg30d": 2.874
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 558.054,
        "saikou": 8,
        "heikin": 3.24,
        "boshuAvg30d": 277.4,
        "heikinAvg30d": 2.523
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 370.921,
        "saikou": 7.5,
        "heikin": 3.03,
        "boshuAvg30d": 281.3,
        "heikinAvg30d": 2.722
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 357.485,
        "saikou": 7.73,
        "heikin": 3.04,
        "boshuAvg30d": 272.4,
        "heikinAvg30d": 2.377
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 357.096,
        "saikou": 7.52,
        "heikin": 3.92,
        "boshuAvg30d": 272.4,
        "heikinAvg30d": 2.504
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 307.706,
        "saikou": 9.9,
        "heikin": 2.87,
        "boshuAvg30d": 273.1,
        "heikinAvg30d": 2.52
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 293.855,
        "saikou": 7.65,
        "heikin": 2,
        "boshuAvg30d": 272.5,
        "heikinAvg30d": 2.516
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 296,
        "ouatsu": 286.581,
        "saikou": 7.65,
        "heikin": 1.86,
        "boshuAvg30d": 270.1,
        "heikinAvg30d": 2.559
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 296,
        "ouatsu": 262.94,
        "saikou": 9.9,
        "heikin": 2.37,
        "boshuAvg30d": 270.1,
        "heikinAvg30d": 2.738
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 294,
        "ouatsu": 270.364,
        "saikou": 9.9,
        "heikin": 2.27,
        "boshuAvg30d": 267.2,
        "heikinAvg30d": 2.22
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 294,
        "ouatsu": 241.026,
        "saikou": 9.9,
        "heikin": 1.71,
        "boshuAvg30d": 267.2,
        "heikinAvg30d": 2.25
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 294,
        "ouatsu": 243.393,
        "saikou": 9.9,
        "heikin": 1.47,
        "boshuAvg30d": 267.2,
        "heikinAvg30d": 2.391
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 294,
        "ouatsu": 256.627,
        "saikou": 9.9,
        "heikin": 0.77,
        "boshuAvg30d": 266.8,
        "heikinAvg30d": 2.433
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 293,
        "ouatsu": 284.833,
        "saikou": 9.9,
        "heikin": 1.31,
        "boshuAvg30d": 265.8,
        "heikinAvg30d": 2.697
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 293,
        "ouatsu": 277.649,
        "saikou": 9.9,
        "heikin": 1.01,
        "boshuAvg30d": 265.3,
        "heikinAvg30d": 2.522
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 350.138,
        "saikou": 6.98,
        "heikin": 4.15,
        "boshuAvg30d": 263.3,
        "heikinAvg30d": 2.399
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 416.984,
        "saikou": 8.35,
        "heikin": 3.11,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 2.396
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 397.443,
        "saikou": 7.25,
        "heikin": 3.47,
        "boshuAvg30d": 262.6,
        "heikinAvg30d": 2.333
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 368.925,
        "saikou": 6.65,
        "heikin": 3.94,
        "boshuAvg30d": 262.6,
        "heikinAvg30d": 2.305
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 363.125,
        "saikou": 7.09,
        "heikin": 3.56,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.121
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 291,
        "ouatsu": 384.602,
        "saikou": 8.16,
        "heikin": 2.89,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.33
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 293,
        "ouatsu": 372.495,
        "saikou": 2.06,
        "heikin": 1.08,
        "boshuAvg30d": 262.2,
        "heikinAvg30d": 2.509
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 293,
        "ouatsu": 366.761,
        "saikou": 4.61,
        "heikin": 1.14,
        "boshuAvg30d": 262.2,
        "heikinAvg30d": 2.43
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 293,
        "ouatsu": 371.818,
        "saikou": 2.38,
        "heikin": 1.18,
        "boshuAvg30d": 262.2,
        "heikinAvg30d": 2.47
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 293,
        "ouatsu": 361.256,
        "saikou": 1.58,
        "heikin": 0.72,
        "boshuAvg30d": 262.5,
        "heikinAvg30d": 2.307
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 292,
        "ouatsu": 540.8,
        "saikou": 7.93,
        "heikin": 2.61,
        "boshuAvg30d": 261.0,
        "heikinAvg30d": 2.255
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 292,
        "ouatsu": 511.082,
        "saikou": 7.5,
        "heikin": 2.83,
        "boshuAvg30d": 261.0,
        "heikinAvg30d": 2.469
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 291,
        "ouatsu": 542.587,
        "saikou": 6.94,
        "heikin": 2,
        "boshuAvg30d": 260.5,
        "heikinAvg30d": 2.31
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 291,
        "ouatsu": 543.164,
        "saikou": 7.28,
        "heikin": 2.13,
        "boshuAvg30d": 260.5,
        "heikinAvg30d": 2.239
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 291,
        "ouatsu": 369.514,
        "saikou": 6.7,
        "heikin": 2.34,
        "boshuAvg30d": 263.5,
        "heikinAvg30d": 2.36
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 289,
        "ouatsu": 494.799,
        "saikou": 7.52,
        "heikin": 1.92,
        "boshuAvg30d": 258.5,
        "heikinAvg30d": 2.412
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 287,
        "ouatsu": 482.525,
        "saikou": 7.47,
        "heikin": 2.59,
        "boshuAvg30d": 256.9,
        "heikinAvg30d": 2.838
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 286,
        "ouatsu": 474.932,
        "saikou": 7.91,
        "heikin": 2.06,
        "boshuAvg30d": 255.2,
        "heikinAvg30d": 2.841
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 243,
        "ouatsu": 289.307,
        "saikou": 9.29,
        "heikin": 2.86,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.775
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 243,
        "ouatsu": 307.586,
        "saikou": 9.29,
        "heikin": 2.52,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.821
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 243,
        "ouatsu": 307.586,
        "saikou": 9.29,
        "heikin": 2.47,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.862
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 309.574,
        "saikou": 9.29,
        "heikin": 2.53,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.923
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 242,
        "ouatsu": 297.463,
        "saikou": 9.29,
        "heikin": 2.75,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 1.94
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 297.463,
        "saikou": 9.29,
        "heikin": 2.72,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 1.884
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 321.314,
        "saikou": 9.29,
        "heikin": 2.61,
        "boshuAvg30d": 138.4,
        "heikinAvg30d": 1.767
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 296.124,
        "saikou": 9.29,
        "heikin": 2.45,
        "boshuAvg30d": 138.4,
        "heikinAvg30d": 1.729
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 240,
        "ouatsu": 303.724,
        "saikou": 9.29,
        "heikin": 2.51,
        "boshuAvg30d": 138.9,
        "heikinAvg30d": 1.64
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 240,
        "ouatsu": 285.812,
        "saikou": 9.37,
        "heikin": 2.78,
        "boshuAvg30d": 138.9,
        "heikinAvg30d": 1.687
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 240,
        "ouatsu": 285.942,
        "saikou": 9.37,
        "heikin": 2.55,
        "boshuAvg30d": 138.9,
        "heikinAvg30d": 1.597
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 240,
        "ouatsu": 282.474,
        "saikou": 9.37,
        "heikin": 2.6,
        "boshuAvg30d": 138.9,
        "heikinAvg30d": 1.537
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 284.014,
        "saikou": 9.37,
        "heikin": 2.76,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.781
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 255,
        "ouatsu": 281.99,
        "saikou": 9.37,
        "heikin": 2.94,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 1.767
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 258,
        "ouatsu": 281.9,
        "saikou": 9.37,
        "heikin": 3.2,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 2.082
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 260,
        "ouatsu": 282.328,
        "saikou": 9.37,
        "heikin": 3.69,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 2.119
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 260,
        "ouatsu": 198.292,
        "saikou": 9.37,
        "heikin": 2.59,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 2.191
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 260,
        "ouatsu": 196.402,
        "saikou": 9.49,
        "heikin": 2.76,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 2.3
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 265,
        "ouatsu": 198.4,
        "saikou": 9.49,
        "heikin": 2.84,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 2.59
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 265,
        "ouatsu": 187.255,
        "saikou": 9.49,
        "heikin": 3.05,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 2.564
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 265,
        "ouatsu": 173.406,
        "saikou": 9.49,
        "heikin": 3.45,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 2.595
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 265,
        "ouatsu": 175.405,
        "saikou": 9.49,
        "heikin": 3.45,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 2.605
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 264,
        "ouatsu": 185.165,
        "saikou": 9.49,
        "heikin": 4.39,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 2.563
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 263,
        "ouatsu": 166.976,
        "saikou": 9.58,
        "heikin": 4.94,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 2.682
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 259,
        "ouatsu": 169.423,
        "saikou": 9.49,
        "heikin": 6.1,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 2.75
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 259,
        "ouatsu": 166.273,
        "saikou": 9.49,
        "heikin": 6.13,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 2.685
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 259,
        "ouatsu": 144.798,
        "saikou": 9.49,
        "heikin": 2.89,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 2.496
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 259,
        "ouatsu": 161.922,
        "saikou": 9.49,
        "heikin": 3.04,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.591
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 259,
        "ouatsu": 165.919,
        "saikou": 9.49,
        "heikin": 3.03,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.677
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 259,
        "ouatsu": 165.919,
        "saikou": 9.69,
        "heikin": 3.28,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.58
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 257,
        "ouatsu": 164.019,
        "saikou": 9.69,
        "heikin": 3.31,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.751
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 257,
        "ouatsu": 201.421,
        "saikou": 9.69,
        "heikin": 2.76,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.818
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 257,
        "ouatsu": 153.921,
        "saikou": 9.69,
        "heikin": 3.31,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.755
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 256,
        "ouatsu": 153.523,
        "saikou": 9.69,
        "heikin": 4.96,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.912
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 256,
        "ouatsu": 165.563,
        "saikou": 9.69,
        "heikin": 4.42,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.808
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 255,
        "ouatsu": 146.383,
        "saikou": 9.69,
        "heikin": 4.22,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.601
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 253,
        "ouatsu": 153.723,
        "saikou": 9.69,
        "heikin": 4.47,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 2.359
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 253,
        "ouatsu": 180.47,
        "saikou": 9.69,
        "heikin": 4.34,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 2.337
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 253,
        "ouatsu": 217.962,
        "saikou": 9.69,
        "heikin": 3.31,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 1.976
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 253,
        "ouatsu": 235.027,
        "saikou": 9.69,
        "heikin": 3.98,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 1.923
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 253,
        "ouatsu": 223.223,
        "saikou": 9.69,
        "heikin": 3.61,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 1.785
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 253,
        "ouatsu": 219.227,
        "saikou": 9.27,
        "heikin": 3.35,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 1.724
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 255,
        "ouatsu": 211.983,
        "saikou": 9.27,
        "heikin": 2.79,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.657
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 255,
        "ouatsu": 213.982,
        "saikou": 9.27,
        "heikin": 2.84,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 1.797
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 255,
        "ouatsu": 213.982,
        "saikou": 9.27,
        "heikin": 2.84,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 1.85
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 208.544,
        "saikou": 9.27,
        "heikin": 2.5,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.947
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 208.544,
        "saikou": 9.27,
        "heikin": 2.38,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 1.883
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 205.144,
        "saikou": 9.27,
        "heikin": 2.41,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 1.944
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.33,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.131
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.876
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.613
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 8.98,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.809
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.72,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.899
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.59,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.785
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.41,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.387
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.83,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.494
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.619
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.87,
        "heikin": 5.71,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 3.128
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.83,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 3.227
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.16,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.832
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.37,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.73
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.24,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 3.073
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.87,
        "heikin": 5.84,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.513
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.54,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.288
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.73
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.45
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 3.832
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.221
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 4.985
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 5.42
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 4.098,
        "saikou": 9.99,
        "heikin": 9.94,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 4.351
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 4.224
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 2.535
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 2.718
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 4.098,
        "saikou": 9.99,
        "heikin": 9.94,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.664
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 3.48
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.502
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.303
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 4.098,
        "saikou": 9.99,
        "heikin": 9.94,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.487
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 7.838,
        "saikou": 9.99,
        "heikin": 8.83,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 6.237
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.234
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.164
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 8.45,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.303
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 8.45,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.365
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 7.87,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.441
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 7.59,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.151
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 6.45,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 3.821
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 6.5,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.362
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 8.14,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.698
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 7.72,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.757
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.8,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.739
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.72,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.438
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 7.468,
        "saikou": 9.99,
        "heikin": 8.59,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.435
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.24,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.029
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.914
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 7.88,
        "saikou": 9.99,
        "heikin": 5.76,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.378
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 107.795,
        "saikou": 9.99,
        "heikin": 6.21,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 2.071
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 109.238,
        "saikou": 9.99,
        "heikin": 6.15,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 1.354
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 105.28,
        "saikou": 9.99,
        "heikin": 5.93,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 1.07
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 105.262,
        "saikou": 9.99,
        "heikin": 5.91,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 1.158
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 105.262,
        "saikou": 9.99,
        "heikin": 6.02,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 1.32
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 105.262,
        "saikou": 9.99,
        "heikin": 6.04,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 1.652
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 1.806
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.4,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 2.119
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 109.48,
        "saikou": 9.99,
        "heikin": 6.18,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 1.882
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 109.48,
        "saikou": 9.99,
        "heikin": 6.18,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 1.805
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 109.48,
        "saikou": 9.99,
        "heikin": 5.91,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 1.767
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 109.48,
        "saikou": 9.99,
        "heikin": 6.16,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 1.782
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 94.48,
        "saikou": 9.99,
        "heikin": 5.45,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 1.758
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 113.27,
        "saikou": 9.99,
        "heikin": 6.12,
        "boshuAvg30d": 184.3,
        "heikinAvg30d": 1.769
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.4,
        "boshuAvg30d": 189.3,
        "heikinAvg30d": 2.21
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.41,
        "boshuAvg30d": 191.8,
        "heikinAvg30d": 2.334
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 191.8,
        "heikinAvg30d": 2.207
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 191.8,
        "heikinAvg30d": 2.804
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 117.137,
        "saikou": 10,
        "heikin": 6.4,
        "boshuAvg30d": 201.3,
        "heikinAvg30d": 2.877
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 201.3,
        "heikinAvg30d": 2.906
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 113.709,
        "saikou": 9.99,
        "heikin": 6.49,
        "boshuAvg30d": 201.3,
        "heikinAvg30d": 2.755
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 113.709,
        "saikou": 9.99,
        "heikin": 6.49,
        "boshuAvg30d": 200.3,
        "heikinAvg30d": 2.834
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 198.9,
        "heikinAvg30d": 2.805
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 199.3,
        "heikinAvg30d": 2.497
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 105.319,
        "saikou": 9.98,
        "heikin": 6.01,
        "boshuAvg30d": 197.9,
        "heikinAvg30d": 2.307
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 107.317,
        "saikou": 9.98,
        "heikin": 6.06,
        "boshuAvg30d": 197.9,
        "heikinAvg30d": 2.363
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 197.9,
        "heikinAvg30d": 2.785
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 117.137,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 197.9,
        "heikinAvg30d": 2.771
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 117.137,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 197.9,
        "heikinAvg30d": 3.068
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 115.694,
        "saikou": 10,
        "heikin": 6.46,
        "boshuAvg30d": 197.9,
        "heikinAvg30d": 2.793
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 115.694,
        "saikou": 10,
        "heikin": 6.44,
        "boshuAvg30d": 197.3,
        "heikinAvg30d": 3.102
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 117.137,
        "saikou": 10,
        "heikin": 6.4,
        "boshuAvg30d": 197.3,
        "heikinAvg30d": 3.265
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 117.137,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 197.3,
        "heikinAvg30d": 3.318
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.42,
        "boshuAvg30d": 197.3,
        "heikinAvg30d": 2.888
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.28,
        "boshuAvg30d": 193.0,
        "heikinAvg30d": 2.854
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.42,
        "boshuAvg30d": 192.0,
        "heikinAvg30d": 3.109
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 115.177,
        "saikou": 9.99,
        "heikin": 6.36,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 2.582
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 115.177,
        "saikou": 10,
        "heikin": 6.37,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 2.559
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.42,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 2.396
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.38,
        "boshuAvg30d": 189.0,
        "heikinAvg30d": 2.257
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 115.152,
        "saikou": 9.99,
        "heikin": 6.44,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 2.39
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 115.152,
        "saikou": 9.99,
        "heikin": 6.44,
        "boshuAvg30d": 188.4,
        "heikinAvg30d": 2.439
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.41,
        "boshuAvg30d": 188.4,
        "heikinAvg30d": 2.349
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.38,
        "boshuAvg30d": 188.4,
        "heikinAvg30d": 2.297
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 188.4,
        "heikinAvg30d": 2.256
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.39,
        "boshuAvg30d": 187.0,
        "heikinAvg30d": 2.131
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 117.137,
        "saikou": 10,
        "heikin": 6.41,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 2.05
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 103.527,
        "saikou": 9.98,
        "heikin": 5.41,
        "boshuAvg30d": 183.4,
        "heikinAvg30d": 1.803
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 100.981,
        "saikou": 7.99,
        "heikin": 3.05,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.191
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 72.387,
        "saikou": 6.79,
        "heikin": 2.12,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.408
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 81.138,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.139
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 92.044,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.011
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 74.181,
        "saikou": 2.29,
        "heikin": 1.88,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.045
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 74.181,
        "saikou": 2.29,
        "heikin": 1.91,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.228
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 141.26,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.389
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 71.51,
        "saikou": 2.29,
        "heikin": 1.44,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.693
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 95.029,
        "saikou": 2.29,
        "heikin": 1.95,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.819
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 61.334,
        "saikou": 1,
        "heikin": 1,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 3.011
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 61.334,
        "saikou": 6.99,
        "heikin": 2.95,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.899
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 61.334,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.762
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 81.037,
        "saikou": 2.29,
        "heikin": 1.82,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 2.761
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 92.159,
        "saikou": 7.98,
        "heikin": 4.5,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.921
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 121.685,
        "saikou": 7.98,
        "heikin": 2.84,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.229
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 158.934,
        "saikou": 7.98,
        "heikin": 2.19,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 1.951
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 158.934,
        "saikou": 7.98,
        "heikin": 2.14,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 1.995
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 146.207,
        "saikou": 7.98,
        "heikin": 2.29,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 1.901
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 98.875,
        "saikou": 7.98,
        "heikin": 1.75,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.078
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 98.875,
        "saikou": 6.79,
        "heikin": 1.75,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.128
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 98.875,
        "saikou": 6.79,
        "heikin": 1.72,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 1.742
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 90.921,
        "saikou": 6.79,
        "heikin": 1.95,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 1.821
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 90.921,
        "saikou": 6.79,
        "heikin": 1.75,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 1.714
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 90.921,
        "saikou": 6.79,
        "heikin": 1.76,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 1.82
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 90.921,
        "saikou": 6.79,
        "heikin": 1.76,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.697
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 90.921,
        "saikou": 6.79,
        "heikin": 2.26,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.926
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 98.875,
        "saikou": 6.79,
        "heikin": 1.85,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.93
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 86.148,
        "saikou": 7.98,
        "heikin": 2.66,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.03
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 98.875,
        "saikou": 7.98,
        "heikin": 2.49,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.137
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 98.875,
        "saikou": 7.98,
        "heikin": 1.93,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.2
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 86.148,
        "saikou": 7.98,
        "heikin": 2.2,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.257
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 70.281,
        "saikou": 6.79,
        "heikin": 2.36,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.474
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 70.281,
        "saikou": 7.98,
        "heikin": 2.32,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.785
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 36.586,
        "saikou": 7.98,
        "heikin": 1.66,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.512
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 28.632,
        "saikou": 8.59,
        "heikin": 5.85,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.68
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 28.632,
        "saikou": 8.59,
        "heikin": 5.91,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.616
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 27.53,
        "saikou": 7,
        "heikin": 3.6,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.562
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 27.53,
        "saikou": 1,
        "heikin": 1,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.443
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 49.408,
        "saikou": 1.5,
        "heikin": 1.25,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.191
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 51.398,
        "saikou": 1,
        "heikin": 1,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.046
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 85.093,
        "saikou": 2.29,
        "heikin": 1.94,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 3.358
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 85.093,
        "saikou": 2.29,
        "heikin": 1.94,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 3.214
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 71.529,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.228
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 71.468,
        "saikou": 2.29,
        "heikin": 1.62,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.107
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 100.96,
        "saikou": 2.29,
        "heikin": 1.73,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.983
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 151.868,
        "saikou": 6.99,
        "heikin": 1.05,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.571
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 151.868,
        "saikou": 7.98,
        "heikin": 2.22,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.53
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 151.868,
        "saikou": 7.99,
        "heikin": 2.22,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.002
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 189.8,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.677
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 189.8,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.657
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.65,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.595
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.57,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.584
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.67,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.589
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.74,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.616
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.4,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.71
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 186.8,
        "saikou": 1.7,
        "heikin": 0.68,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.735
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.48,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.731
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.54,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.755
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 2.49,
        "heikin": 0.8,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.759
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.68,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.739
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.64,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.861
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.73,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 0.8
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.73,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.779
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.73,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.812
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.73,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.81
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.73,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.772
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.965
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.94
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.984
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.93
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.95
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.978
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.988
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.999
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.986
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.975
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.998
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.79,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.934
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 1.0
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.79,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 1.01
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.79,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 1.142
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 3.99,
        "heikin": 0.96,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 1.203
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 167.343,
        "saikou": 3.99,
        "heikin": 1.02,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 1.222
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 167.343,
        "saikou": 3.99,
        "heikin": 0.99,
        "boshuAvg30d": 42.6,
        "heikinAvg30d": 1.254
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 5.49,
        "heikin": 1.11,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.289
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.24
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.243
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.283
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 3.99,
        "heikin": 1.01,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.252
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 3.99,
        "heikin": 0.96,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.25
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.91,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.849
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.805
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.86,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.756
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.693
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.746
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 189.8,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.75
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 85.462,
        "saikou": 7.96,
        "heikin": 3.7,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.829
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 87.496,
        "saikou": 7.78,
        "heikin": 2.68,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.361
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 87.502,
        "saikou": 7.77,
        "heikin": 2.47,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.149
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 91.479,
        "saikou": 7.73,
        "heikin": 2.39,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.012
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 91.479,
        "saikou": 7.8,
        "heikin": 2.42,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.143
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 132.479,
        "saikou": 8.32,
        "heikin": 1.74,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.425
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 223.994,
        "saikou": 8.78,
        "heikin": 1.32,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.794
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 218.176,
        "saikou": 8.85,
        "heikin": 1.23,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.334
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 183.994,
        "saikou": 8.99,
        "heikin": 1.46,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.457
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 180.074,
        "saikou": 8.97,
        "heikin": 1.43,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.592
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 182.994,
        "saikou": 8.96,
        "heikin": 1.51,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.754
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 220.694,
        "saikou": 8.78,
        "heikin": 1.4,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.669
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 216.715,
        "saikou": 8.85,
        "heikin": 1.3,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.54
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 149.705,
        "saikou": 8.78,
        "heikin": 1.83,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 6.422
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 108.705,
        "saikou": 8.6,
        "heikin": 2.48,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 5.366
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 100.705,
        "saikou": 7.06,
        "heikin": 1.69,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 4.608
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 111.705,
        "saikou": 7.29,
        "heikin": 2.23,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 4.304
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 106.715,
        "saikou": 5.07,
        "heikin": 1.77,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 4.077
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 106.733,
        "saikou": 4.71,
        "heikin": 2.03,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 3.823
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 98.733,
        "saikou": 6.99,
        "heikin": 1.12,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 3.523
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 73.857,
        "saikou": 8,
        "heikin": 1.06,
        "boshuAvg30d": 180.1,
        "heikinAvg30d": 3.443
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 73.397,
        "saikou": 8,
        "heikin": 1.75,
        "boshuAvg30d": 181.1,
        "heikinAvg30d": 3.361
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 41.291,
        "saikou": 1.38,
        "heikin": 0.9,
        "boshuAvg30d": 181.1,
        "heikinAvg30d": 3.094
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 40.849,
        "saikou": 1.39,
        "heikin": 0.91,
        "boshuAvg30d": 181.1,
        "heikinAvg30d": 3.104
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 36.934,
        "saikou": 9.8,
        "heikin": 1.24,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.2
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 45.6,
        "saikou": 2.64,
        "heikin": 1.02,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.238
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 52.355,
        "saikou": 1.49,
        "heikin": 0.94,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.68
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 78.843,
        "saikou": 6.51,
        "heikin": 1.41,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 4.247
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 96.719,
        "saikou": 7.36,
        "heikin": 1.38,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 4.312
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 104.719,
        "saikou": 8.38,
        "heikin": 3.23,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.998
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 111.719,
        "saikou": 8.94,
        "heikin": 4.1,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 5.523
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 100.719,
        "saikou": 7.56,
        "heikin": 3.87,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 5.863
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 115.719,
        "saikou": 8.85,
        "heikin": 3.85,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 6.549
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 168.343,
        "saikou": 8.98,
        "heikin": 2.41,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 7.093
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 241.846,
        "saikou": 9.8,
        "heikin": 1.58,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 7.213
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 211.908,
        "saikou": 8.85,
        "heikin": 1.43,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 7.301
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 144.689,
        "saikou": 8.15,
        "heikin": 2.34,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 7.278
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 182.069,
        "saikou": 9.8,
        "heikin": 1.6,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 7.168
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 188.109,
        "saikou": 9.8,
        "heikin": 1.9,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.75
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 180.568,
        "saikou": 7.99,
        "heikin": 1.47,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.504
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 127.246,
        "saikou": 9.8,
        "heikin": 2.46,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.574
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 136.286,
        "saikou": 9.8,
        "heikin": 3.15,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.371
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 131.206,
        "saikou": 8.72,
        "heikin": 2.94,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.404
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 137.206,
        "saikou": 8.05,
        "heikin": 2.62,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.095
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 137.206,
        "saikou": 8.05,
        "heikin": 2.68,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.271
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 93.656,
        "saikou": 7.06,
        "heikin": 3.15,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.227
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 95.632,
        "saikou": 6.94,
        "heikin": 2.96,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 6.326
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 97.642,
        "saikou": 6.56,
        "heikin": 1.76,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 5.615
      }
    ]
  }
};
