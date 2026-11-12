// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/13〜2026/11/11）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-12",
  "fetchedAt": "2026-11-12",
  "avgWindowLabel": "過去30日平均（2026/10/13〜2026/11/11）",
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
      "ouatsu": 1464.656,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1109.2,
      "heikinAvg30d": 2.865
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1316,
      "ouatsu": 1617.619,
      "saikou": 10,
      "heikin": 2.82,
      "boshuAvg30d": 1109.2,
      "heikinAvg30d": 2.822
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1316,
      "ouatsu": 1729.739,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1109.2,
      "heikinAvg30d": 2.747
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1315,
      "ouatsu": 1740.219,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1108.9,
      "heikinAvg30d": 2.679
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1309,
      "ouatsu": 1737.318,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1104.8,
      "heikinAvg30d": 2.733
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1309,
      "ouatsu": 1649.744,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1104.1,
      "heikinAvg30d": 2.778
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1306,
      "ouatsu": 1743.049,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1101.1,
      "heikinAvg30d": 2.917
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1310,
      "ouatsu": 1689.756,
      "saikou": 10,
      "heikin": 2.58,
      "boshuAvg30d": 1103.9,
      "heikinAvg30d": 3.182
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1310,
      "ouatsu": 1699.93,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1105.1,
      "heikinAvg30d": 3.259
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1312,
      "ouatsu": 1711.875,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1106.5,
      "heikinAvg30d": 3.303
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1312,
      "ouatsu": 1683.797,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1106.5,
      "heikinAvg30d": 3.334
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1312,
      "ouatsu": 1702.804,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1106.5,
      "heikinAvg30d": 3.39
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1371,
      "ouatsu": 1732.411,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1166.1,
      "heikinAvg30d": 3.472
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1396,
      "ouatsu": 1798.006,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1189.9,
      "heikinAvg30d": 3.42
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1415,
      "ouatsu": 1687.728,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1210.1,
      "heikinAvg30d": 3.228
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1430,
      "ouatsu": 1743.977,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1226.7,
      "heikinAvg30d": 2.938
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1430,
      "ouatsu": 1848.156,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1227.1,
      "heikinAvg30d": 2.843
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1430,
      "ouatsu": 1941.415,
      "saikou": 9.99,
      "heikin": 2.87,
      "boshuAvg30d": 1230.9,
      "heikinAvg30d": 2.808
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1359,
      "ouatsu": 1771.746,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1176.2,
      "heikinAvg30d": 2.822
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1364,
      "ouatsu": 1644.129,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1179.9,
      "heikinAvg30d": 2.837
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1368,
      "ouatsu": 1526.119,
      "saikou": 9.99,
      "heikin": 2.14,
      "boshuAvg30d": 1182.3,
      "heikinAvg30d": 2.811
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1372,
      "ouatsu": 1539.344,
      "saikou": 10,
      "heikin": 2.85,
      "boshuAvg30d": 1183.8,
      "heikinAvg30d": 2.808
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1366,
      "ouatsu": 1497.918,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1179.7,
      "heikinAvg30d": 2.753
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1366,
      "ouatsu": 1541.375,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1179.0,
      "heikinAvg30d": 2.809
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1347,
      "ouatsu": 1418.249,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1159.1,
      "heikinAvg30d": 2.63
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1347,
      "ouatsu": 1405.016,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1159.1,
      "heikinAvg30d": 2.658
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1347,
      "ouatsu": 1464.028,
      "saikou": 10,
      "heikin": 2.09,
      "boshuAvg30d": 1159.1,
      "heikinAvg30d": 2.856
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1343,
      "ouatsu": 1369.089,
      "saikou": 9.99,
      "heikin": 2.44,
      "boshuAvg30d": 1156.0,
      "heikinAvg30d": 3.042
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1342,
      "ouatsu": 1251.545,
      "saikou": 9.99,
      "heikin": 3.15,
      "boshuAvg30d": 1153.7,
      "heikinAvg30d": 3.115
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1336,
      "ouatsu": 1276.94,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1147.7,
      "heikinAvg30d": 3.166
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1407,
      "ouatsu": 1513.331,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1212.7,
      "heikinAvg30d": 3.268
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1407,
      "ouatsu": 1674.537,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1212.4,
      "heikinAvg30d": 3.459
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1407,
      "ouatsu": 1661.829,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1212.7,
      "heikinAvg30d": 3.759
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1405,
      "ouatsu": 1474.347,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1211.3,
      "heikinAvg30d": 3.905
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1403,
      "ouatsu": 1491.07,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1203.0,
      "heikinAvg30d": 3.823
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1398,
      "ouatsu": 1468.462,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1198.0,
      "heikinAvg30d": 3.814
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1394,
      "ouatsu": 1554.487,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1192.4,
      "heikinAvg30d": 3.629
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1394,
      "ouatsu": 1568.035,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1192.4,
      "heikinAvg30d": 3.671
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1394,
      "ouatsu": 1703.777,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1192.4,
      "heikinAvg30d": 3.46
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1392,
      "ouatsu": 1725.034,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1191.4,
      "heikinAvg30d": 3.357
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1385,
      "ouatsu": 1759.037,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1183.7,
      "heikinAvg30d": 3.292
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1385,
      "ouatsu": 1712.186,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1183.7,
      "heikinAvg30d": 3.261
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1296,
      "ouatsu": 1659.643,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1094.1,
      "heikinAvg30d": 3.117
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1299,
      "ouatsu": 1719.022,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1097.1,
      "heikinAvg30d": 3.087
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1298,
      "ouatsu": 1756.273,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1100.4,
      "heikinAvg30d": 3.153
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1291,
      "ouatsu": 1802.426,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1091.6,
      "heikinAvg30d": 3.067
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1283,
      "ouatsu": 1636.235,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1083.3,
      "heikinAvg30d": 3.105
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1275,
      "ouatsu": 1548.195,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1075.3,
      "heikinAvg30d": 2.883
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
        "ouatsu": 79.94,
        "saikou": 9.59,
        "heikin": 3.54,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.771
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 115.065,
        "saikou": 9.91,
        "heikin": 6.59,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 4.065
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 79.94,
        "saikou": 9.8,
        "heikin": 6.25,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.732
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 116.065,
        "saikou": 9.91,
        "heikin": 6.53,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.854
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 59.94,
        "saikou": 9.8,
        "heikin": 7.4,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.048
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 57.94,
        "saikou": 9.59,
        "heikin": 4.66,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 3.63
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 84.265,
        "saikou": 9.91,
        "heikin": 9.13,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 3.788
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 48.14,
        "saikou": 9.8,
        "heikin": 8.43,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.408
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 84.265,
        "saikou": 9.91,
        "heikin": 9.34,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.214
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 48.14,
        "saikou": 9.8,
        "heikin": 8.16,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.196
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 105.265,
        "saikou": 9.91,
        "heikin": 6.44,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.278
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 120.265,
        "saikou": 9.91,
        "heikin": 6.1,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.415
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 81.14,
        "saikou": 9.59,
        "heikin": 4.89,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.397
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 147.265,
        "saikou": 9.91,
        "heikin": 6.33,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.386
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 129.14,
        "saikou": 9.59,
        "heikin": 5.66,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.409
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 165.265,
        "saikou": 9.91,
        "heikin": 5.62,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.451
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 127.94,
        "saikou": 9.59,
        "heikin": 3.29,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 5.051
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 149.065,
        "saikou": 7.5,
        "heikin": 2.11,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.341
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 120.95,
        "saikou": 6.15,
        "heikin": 2.83,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 4.393
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 147.075,
        "saikou": 9.91,
        "heikin": 4.8,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.005
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 110.95,
        "saikou": 9.59,
        "heikin": 3.03,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.13
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 147.075,
        "saikou": 9.91,
        "heikin": 4.8,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.729
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 110.95,
        "saikou": 8,
        "heikin": 3.23,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 4.156
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 143.42,
        "saikou": 8,
        "heikin": 3.69,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 4.133
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 120.95,
        "saikou": 9.44,
        "heikin": 3.59,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.958
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 120.95,
        "saikou": 9.44,
        "heikin": 3.59,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.782
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 109,
        "saikou": 9,
        "heikin": 2.84,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.771
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 109,
        "saikou": 8.5,
        "heikin": 2.73,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.834
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 26.95,
        "saikou": 8,
        "heikin": 8,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.753
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 41.95,
        "saikou": 8,
        "heikin": 6.09,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 5.412
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 41.95,
        "saikou": 8,
        "heikin": 7.27,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.827
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 44.95,
        "saikou": 9.8,
        "heikin": 7.96,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 5.589
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 65.95,
        "saikou": 9.91,
        "heikin": 7.55,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 6.066
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 6.94,
        "saikou": 9.8,
        "heikin": 9.71,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 5.641
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 42.94,
        "saikou": 9.8,
        "heikin": 7.36,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 5.187
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 42.94,
        "saikou": 9.8,
        "heikin": 7.27,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 5.268
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 46.94,
        "saikou": 9.8,
        "heikin": 6.24,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.799
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 46.94,
        "saikou": 9.8,
        "heikin": 6.01,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 5.132
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 83.09,
        "saikou": 9.91,
        "heikin": 7.61,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.868
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 46.94,
        "saikou": 9.8,
        "heikin": 6,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 5.18
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 78.1,
        "saikou": 9.91,
        "heikin": 7.29,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 4.874
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 41.95,
        "saikou": 9.59,
        "heikin": 4.75,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.584
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 66.1,
        "saikou": 9.91,
        "heikin": 7.61,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.211
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 29.95,
        "saikou": 9.8,
        "heikin": 5.14,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.362
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 66.1,
        "saikou": 9.91,
        "heikin": 7.44,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.554
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 66.1,
        "saikou": 9.91,
        "heikin": 7.55,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.19
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 29.95,
        "saikou": 9.8,
        "heikin": 4.69,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.015
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 96.1,
        "saikou": 9.91,
        "heikin": 5.35,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.792
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 72.405,
        "saikou": 4.81,
        "heikin": 2.61,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 5.45
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 59.835,
        "saikou": 10,
        "heikin": 2.93,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 5.573
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 77.783,
        "saikou": 4.76,
        "heikin": 2.62,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 5.577
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 79.743,
        "saikou": 4.76,
        "heikin": 3.03,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 5.607
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 70.065,
        "saikou": 4.91,
        "heikin": 2.82,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 5.44
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 84.565,
        "saikou": 4.88,
        "heikin": 2.66,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 5.279
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 92.743,
        "saikou": 7,
        "heikin": 3.76,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 5.429
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 108.743,
        "saikou": 5.2,
        "heikin": 2.99,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.215
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 90.071,
        "saikou": 5.2,
        "heikin": 3.07,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 5.026
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 86.241,
        "saikou": 4.87,
        "heikin": 2.92,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.187
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 62.241,
        "saikou": 7,
        "heikin": 4.43,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.278
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 75.091,
        "saikou": 4,
        "heikin": 3.31,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 5.218
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 76.741,
        "saikou": 7,
        "heikin": 4.38,
        "boshuAvg30d": 126.6,
        "heikinAvg30d": 5.375
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 75.241,
        "saikou": 4,
        "heikin": 3.25,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 5.262
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 76.741,
        "saikou": 4,
        "heikin": 3.29,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 5.602
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 111.241,
        "saikou": 4.5,
        "heikin": 3.11,
        "boshuAvg30d": 136.2,
        "heikinAvg30d": 5.563
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 124.741,
        "saikou": 8.67,
        "heikin": 5.28,
        "boshuAvg30d": 136.2,
        "heikinAvg30d": 5.433
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 97.396,
        "saikou": 9.66,
        "heikin": 4.64,
        "boshuAvg30d": 136.2,
        "heikinAvg30d": 5.547
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 133.162,
        "saikou": 10,
        "heikin": 3.38,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 5.336
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 135.092,
        "saikou": 10,
        "heikin": 3.67,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 5.442
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 108.91,
        "saikou": 3.75,
        "heikin": 3.04,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 5.396
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 108.91,
        "saikou": 4.32,
        "heikin": 3.31,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 5.567
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 110.546,
        "saikou": 8.99,
        "heikin": 3.78,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 5.525
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 108.896,
        "saikou": 8.99,
        "heikin": 3.85,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 5.587
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 109.546,
        "saikou": 8.99,
        "heikin": 5.28,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 5.785
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 110.896,
        "saikou": 8.99,
        "heikin": 3.47,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 5.735
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 136.831,
        "saikou": 10,
        "heikin": 4.4,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 5.067
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 126.222,
        "saikou": 7.53,
        "heikin": 5.21,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 5.237
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 134.392,
        "saikou": 8.9,
        "heikin": 6.4,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 5.237
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 122.392,
        "saikou": 10,
        "heikin": 6.02,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 4.865
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 112.892,
        "saikou": 10,
        "heikin": 4.9,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 5.001
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 88.892,
        "saikou": 4.99,
        "heikin": 3.3,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 4.598
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 74.896,
        "saikou": 4.54,
        "heikin": 3.34,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 4.467
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 75.365,
        "saikou": 2.59,
        "heikin": 2.23,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 4.364
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 76.865,
        "saikou": 9.5,
        "heikin": 3.84,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 4.392
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 75.711,
        "saikou": 4,
        "heikin": 2.52,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 4.032
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 64.295,
        "saikou": 2.5,
        "heikin": 2.11,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 3.608
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 75.365,
        "saikou": 2.5,
        "heikin": 1.76,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 3.314
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 76.865,
        "saikou": 2.49,
        "heikin": 1.67,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 3.261
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 88.865,
        "saikou": 4.27,
        "heikin": 2.59,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 3.639
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 84.91,
        "saikou": 4.62,
        "heikin": 2.52,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 3.576
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 84.91,
        "saikou": 4.61,
        "heikin": 2.58,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 3.789
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 73.015,
        "saikou": 2.74,
        "heikin": 2.21,
        "boshuAvg30d": 42.2,
        "heikinAvg30d": 3.75
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 97.015,
        "saikou": 2.92,
        "heikin": 2.65,
        "boshuAvg30d": 42.2,
        "heikinAvg30d": 4.042
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 98.365,
        "saikou": 3.08,
        "heikin": 2.7,
        "boshuAvg30d": 42.2,
        "heikinAvg30d": 3.95
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 98.365,
        "saikou": 3.23,
        "heikin": 2.29,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 4.603
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 102.195,
        "saikou": 4.94,
        "heikin": 2.53,
        "boshuAvg30d": 39.6,
        "heikinAvg30d": 4.469
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 95.215,
        "saikou": 5.74,
        "heikin": 3.32,
        "boshuAvg30d": 39.2,
        "heikinAvg30d": 5.035
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 377.468,
        "saikou": 7.13,
        "heikin": 2.43,
        "boshuAvg30d": 240.2,
        "heikinAvg30d": 2.763
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 351.118,
        "saikou": 6.92,
        "heikin": 2.45,
        "boshuAvg30d": 240.2,
        "heikinAvg30d": 2.767
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 444.605,
        "saikou": 6.77,
        "heikin": 2.03,
        "boshuAvg30d": 240.2,
        "heikinAvg30d": 2.833
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 433.055,
        "saikou": 6.76,
        "heikin": 1.97,
        "boshuAvg30d": 240.2,
        "heikinAvg30d": 2.626
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 491.839,
        "saikou": 7.17,
        "heikin": 2.39,
        "boshuAvg30d": 238.8,
        "heikinAvg30d": 2.622
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 446.727,
        "saikou": 7.09,
        "heikin": 2.78,
        "boshuAvg30d": 238.2,
        "heikinAvg30d": 2.529
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 471.315,
        "saikou": 7.21,
        "heikin": 2.57,
        "boshuAvg30d": 236.2,
        "heikinAvg30d": 2.57
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 509.662,
        "saikou": 6.63,
        "heikin": 1.83,
        "boshuAvg30d": 238.2,
        "heikinAvg30d": 2.71
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 476.351,
        "saikou": 6.64,
        "heikin": 1.94,
        "boshuAvg30d": 238.2,
        "heikinAvg30d": 2.933
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 444.334,
        "saikou": 7.15,
        "heikin": 2.25,
        "boshuAvg30d": 239.2,
        "heikinAvg30d": 2.723
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 433.692,
        "saikou": 7.22,
        "heikin": 2.21,
        "boshuAvg30d": 239.2,
        "heikinAvg30d": 2.693
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 434.009,
        "saikou": 7.07,
        "heikin": 2.38,
        "boshuAvg30d": 239.2,
        "heikinAvg30d": 2.925
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 385.202,
        "saikou": 6.97,
        "heikin": 2.44,
        "boshuAvg30d": 258.5,
        "heikinAvg30d": 3.165
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 395.566,
        "saikou": 6.68,
        "heikin": 2.23,
        "boshuAvg30d": 266.5,
        "heikinAvg30d": 3.267
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 434.608,
        "saikou": 7.15,
        "heikin": 2.93,
        "boshuAvg30d": 271.2,
        "heikinAvg30d": 3.046
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 441.506,
        "saikou": 7.29,
        "heikin": 2.88,
        "boshuAvg30d": 276.5,
        "heikinAvg30d": 2.917
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 494.943,
        "saikou": 4.49,
        "heikin": 1.52,
        "boshuAvg30d": 276.8,
        "heikinAvg30d": 2.62
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 562.484,
        "saikou": 6.61,
        "heikin": 1.88,
        "boshuAvg30d": 280.7,
        "heikinAvg30d": 2.723
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 541.527,
        "saikou": 7.05,
        "heikin": 1.86,
        "boshuAvg30d": 272.0,
        "heikinAvg30d": 2.356
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 560.776,
        "saikou": 7.67,
        "heikin": 2.15,
        "boshuAvg30d": 272.0,
        "heikinAvg30d": 2.491
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 515.789,
        "saikou": 6.78,
        "heikin": 1.72,
        "boshuAvg30d": 272.6,
        "heikinAvg30d": 2.49
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 477.355,
        "saikou": 10,
        "heikin": 3.41,
        "boshuAvg30d": 272.0,
        "heikinAvg30d": 2.422
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 296,
        "ouatsu": 469.743,
        "saikou": 10,
        "heikin": 3.07,
        "boshuAvg30d": 269.6,
        "heikinAvg30d": 2.485
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 296,
        "ouatsu": 478.358,
        "saikou": 10,
        "heikin": 3.04,
        "boshuAvg30d": 269.6,
        "heikinAvg30d": 2.666
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 294,
        "ouatsu": 403.631,
        "saikou": 10,
        "heikin": 3,
        "boshuAvg30d": 266.6,
        "heikinAvg30d": 2.214
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 294,
        "ouatsu": 422.695,
        "saikou": 10,
        "heikin": 3.06,
        "boshuAvg30d": 266.6,
        "heikinAvg30d": 2.246
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 294,
        "ouatsu": 420.175,
        "saikou": 6.5,
        "heikin": 0.59,
        "boshuAvg30d": 266.6,
        "heikinAvg30d": 2.566
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 294,
        "ouatsu": 355.125,
        "saikou": 3,
        "heikin": 0.78,
        "boshuAvg30d": 266.3,
        "heikinAvg30d": 2.607
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 293,
        "ouatsu": 353.433,
        "saikou": 8.04,
        "heikin": 2.1,
        "boshuAvg30d": 265.3,
        "heikinAvg30d": 2.855
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 293,
        "ouatsu": 323.452,
        "saikou": 7.46,
        "heikin": 1.81,
        "boshuAvg30d": 264.7,
        "heikinAvg30d": 2.591
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 468.633,
        "saikou": 7.05,
        "heikin": 3.2,
        "boshuAvg30d": 262.7,
        "heikinAvg30d": 2.401
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 612.907,
        "saikou": 6.57,
        "heikin": 2.33,
        "boshuAvg30d": 262.3,
        "heikinAvg30d": 2.453
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 666.057,
        "saikou": 4.88,
        "heikin": 1.21,
        "boshuAvg30d": 262.0,
        "heikinAvg30d": 2.451
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 623.708,
        "saikou": 2.67,
        "heikin": 1.27,
        "boshuAvg30d": 262.0,
        "heikinAvg30d": 2.455
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 577.2,
        "saikou": 6.09,
        "heikin": 1.95,
        "boshuAvg30d": 260.0,
        "heikinAvg30d": 2.255
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 291,
        "ouatsu": 569.642,
        "saikou": 5.19,
        "heikin": 1.69,
        "boshuAvg30d": 260.0,
        "heikinAvg30d": 2.443
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 293,
        "ouatsu": 636.783,
        "saikou": 7.02,
        "heikin": 2.5,
        "boshuAvg30d": 261.7,
        "heikinAvg30d": 2.599
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 293,
        "ouatsu": 644.636,
        "saikou": 7.03,
        "heikin": 2.46,
        "boshuAvg30d": 261.7,
        "heikinAvg30d": 2.491
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 293,
        "ouatsu": 638.992,
        "saikou": 7.02,
        "heikin": 2.39,
        "boshuAvg30d": 261.7,
        "heikinAvg30d": 2.535
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 293,
        "ouatsu": 656.793,
        "saikou": 7.29,
        "heikin": 2.57,
        "boshuAvg30d": 262.0,
        "heikinAvg30d": 2.312
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 292,
        "ouatsu": 667.031,
        "saikou": 6.93,
        "heikin": 2.39,
        "boshuAvg30d": 260.4,
        "heikinAvg30d": 2.302
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 292,
        "ouatsu": 661.155,
        "saikou": 7.32,
        "heikin": 2.22,
        "boshuAvg30d": 260.4,
        "heikinAvg30d": 2.551
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 291,
        "ouatsu": 596.309,
        "saikou": 7.14,
        "heikin": 2.8,
        "boshuAvg30d": 260.0,
        "heikinAvg30d": 2.267
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 291,
        "ouatsu": 642.299,
        "saikou": 7.14,
        "heikin": 2.72,
        "boshuAvg30d": 260.0,
        "heikinAvg30d": 2.241
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 291,
        "ouatsu": 609.341,
        "saikou": 6.86,
        "heikin": 2.73,
        "boshuAvg30d": 263.0,
        "heikinAvg30d": 2.329
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 289,
        "ouatsu": 606.473,
        "saikou": 7.08,
        "heikin": 2.99,
        "boshuAvg30d": 258.0,
        "heikinAvg30d": 2.392
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 287,
        "ouatsu": 498.966,
        "saikou": 7.03,
        "heikin": 3.18,
        "boshuAvg30d": 256.3,
        "heikinAvg30d": 2.897
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 286,
        "ouatsu": 387.509,
        "saikou": 7.28,
        "heikin": 2.31,
        "boshuAvg30d": 254.7,
        "heikinAvg30d": 2.891
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 243,
        "ouatsu": 308.776,
        "saikou": 9.29,
        "heikin": 2.34,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 1.7
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 243,
        "ouatsu": 366.696,
        "saikou": 9.29,
        "heikin": 1.8,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 1.749
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 243,
        "ouatsu": 388.821,
        "saikou": 9.29,
        "heikin": 1.96,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 1.78
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 374.572,
        "saikou": 9.29,
        "heikin": 1.76,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.848
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 242,
        "ouatsu": 382.68,
        "saikou": 9.29,
        "heikin": 1.98,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 1.849
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 380.696,
        "saikou": 9.29,
        "heikin": 2.04,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.79
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 382.552,
        "saikou": 9.29,
        "heikin": 1.89,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.678
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 396.448,
        "saikou": 9.29,
        "heikin": 1.76,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.664
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 240,
        "ouatsu": 381.943,
        "saikou": 5.96,
        "heikin": 1.51,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.596
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 240,
        "ouatsu": 384.334,
        "saikou": 9.37,
        "heikin": 1.93,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.629
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 240,
        "ouatsu": 333.113,
        "saikou": 9.37,
        "heikin": 1.31,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.577
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 240,
        "ouatsu": 349.554,
        "saikou": 9.37,
        "heikin": 1.46,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.508
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 420.334,
        "saikou": 9.37,
        "heikin": 1.69,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.741
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 255,
        "ouatsu": 422.234,
        "saikou": 9.37,
        "heikin": 1.91,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.73
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 258,
        "ouatsu": 418.256,
        "saikou": 9.37,
        "heikin": 2.46,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.03
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 260,
        "ouatsu": 391.002,
        "saikou": 9.37,
        "heikin": 2.32,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.057
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 260,
        "ouatsu": 390.091,
        "saikou": 9.37,
        "heikin": 3.55,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.087
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 260,
        "ouatsu": 388.107,
        "saikou": 9.49,
        "heikin": 3.63,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.214
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 265,
        "ouatsu": 386.105,
        "saikou": 9.86,
        "heikin": 3.99,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 2.531
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 265,
        "ouatsu": 206.602,
        "saikou": 9.49,
        "heikin": 2.53,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 2.557
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 265,
        "ouatsu": 196.849,
        "saikou": 9.49,
        "heikin": 2.74,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 2.604
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 265,
        "ouatsu": 189.017,
        "saikou": 9.49,
        "heikin": 2.79,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 2.6
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 264,
        "ouatsu": 194.895,
        "saikou": 9.49,
        "heikin": 3.65,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 2.499
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 263,
        "ouatsu": 190.971,
        "saikou": 9.49,
        "heikin": 4.17,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.591
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 259,
        "ouatsu": 127.462,
        "saikou": 9.49,
        "heikin": 4.11,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.608
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 259,
        "ouatsu": 151.675,
        "saikou": 9.49,
        "heikin": 4.46,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.531
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 259,
        "ouatsu": 194.737,
        "saikou": 9.49,
        "heikin": 3.31,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.417
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 259,
        "ouatsu": 228.312,
        "saikou": 9.49,
        "heikin": 3.25,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.543
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 259,
        "ouatsu": 187.54,
        "saikou": 9.49,
        "heikin": 2.69,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.628
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 259,
        "ouatsu": 187.416,
        "saikou": 9.69,
        "heikin": 2.61,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.53
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 257,
        "ouatsu": 216.469,
        "saikou": 9.69,
        "heikin": 2.53,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.713
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 257,
        "ouatsu": 269.396,
        "saikou": 9.69,
        "heikin": 2.77,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.808
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 257,
        "ouatsu": 228.15,
        "saikou": 9.69,
        "heikin": 3.06,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.815
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 256,
        "ouatsu": 219.948,
        "saikou": 9.69,
        "heikin": 3.46,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.946
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 256,
        "ouatsu": 221.928,
        "saikou": 9.69,
        "heikin": 3.42,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.808
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 255,
        "ouatsu": 228.343,
        "saikou": 9.69,
        "heikin": 3.15,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.605
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 253,
        "ouatsu": 241.639,
        "saikou": 9.69,
        "heikin": 2.96,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 2.324
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 253,
        "ouatsu": 257.491,
        "saikou": 9.69,
        "heikin": 3.01,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 2.274
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 253,
        "ouatsu": 291.001,
        "saikou": 9.69,
        "heikin": 2.51,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 1.936
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 253,
        "ouatsu": 291.085,
        "saikou": 9.69,
        "heikin": 2.85,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 1.844
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 253,
        "ouatsu": 283.17,
        "saikou": 9.69,
        "heikin": 2.35,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 1.725
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 253,
        "ouatsu": 281.186,
        "saikou": 9.27,
        "heikin": 1.88,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 1.707
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 255,
        "ouatsu": 274.005,
        "saikou": 9.27,
        "heikin": 1.8,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 1.643
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 255,
        "ouatsu": 274.005,
        "saikou": 9.27,
        "heikin": 1.8,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.817
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 255,
        "ouatsu": 272.021,
        "saikou": 9.27,
        "heikin": 1.86,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.818
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 274.005,
        "saikou": 9.27,
        "heikin": 1.87,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.932
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 287.105,
        "saikou": 9.27,
        "heikin": 2.62,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 1.81
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 289.741,
        "saikou": 9.27,
        "heikin": 2.27,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 1.902
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 8.79,
        "heikin": 8.79,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.731
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 8.79,
        "heikin": 8.79,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.523
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 7.674,
        "saikou": 8.79,
        "heikin": 4.97,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.397
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.79,
        "heikin": 5.44,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.526
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 12.874,
        "saikou": 8.79,
        "heikin": 5.72,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.61
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 6.006,
        "saikou": 9.59,
        "heikin": 6.65,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.457
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.87,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.943
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.79,
        "heikin": 5.28,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 2.279
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.42,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 2.326
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.42,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 2.599
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.37,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 2.674
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.41,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 2.471
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.4,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.277
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.13,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.552
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.44,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.921
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.47,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.804
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 8.87,
        "heikin": 6.25,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.447
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 8.99,
        "heikin": 6.12,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.375
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 8.99,
        "heikin": 6.07,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 3.707
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.46,
        "heikin": 6.51,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.104
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 8.99,
        "heikin": 7.23,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 4.932
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 8.99,
        "heikin": 7.95,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 5.338
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 8.99,
        "heikin": 6.89,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 4.178
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 8.99,
        "heikin": 6.89,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 4.039
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 47.898,
        "saikou": 8.99,
        "heikin": 0.94,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 2.611
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 22.898,
        "saikou": 8.99,
        "heikin": 1.48,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 2.474
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 8.99,
        "heikin": 7.48,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.512
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 22.898,
        "saikou": 8.99,
        "heikin": 1.31,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 3.461
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 8.99,
        "heikin": 6.97,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.251
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 6.71,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.038
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 7.68,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.26
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 8.25,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 6.061
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 6.81,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 5.004
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 6.61,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 4.809
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 6.68,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 4.859
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 6.68,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 4.943
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 5.79,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 3.993
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 6.71,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.716
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 5.74,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 3.366
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 6.32,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.008
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 5.79,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.243
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 5.99,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.35
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 6.15,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.322
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 6.17,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.133
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 5.71,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.152
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.957
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 5.68,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.55
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 5.53,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.059
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 123.853,
        "saikou": 9.9,
        "heikin": 2.97,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 1.971
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 207.693,
        "saikou": 9.99,
        "heikin": 2.2,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 1.273
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 215.796,
        "saikou": 9.9,
        "heikin": 1.68,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 1.001
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 215.778,
        "saikou": 9.9,
        "heikin": 1.64,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 1.08
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 201.436,
        "saikou": 9.99,
        "heikin": 2.2,
        "boshuAvg30d": 160.3,
        "heikinAvg30d": 1.209
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 142.6,
        "saikou": 9.99,
        "heikin": 2.98,
        "boshuAvg30d": 160.3,
        "heikinAvg30d": 1.482
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 111.25,
        "saikou": 1.66,
        "heikin": 1.61,
        "boshuAvg30d": 160.3,
        "heikinAvg30d": 1.66
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 111.25,
        "saikou": 9,
        "heikin": 3.13,
        "boshuAvg30d": 160.3,
        "heikinAvg30d": 1.926
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 111.25,
        "saikou": 4,
        "heikin": 1.89,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 1.818
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 111.25,
        "saikou": 1.69,
        "heikin": 1.62,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 1.777
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 180.124,
        "saikou": 1.79,
        "heikin": 0.8,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 1.785
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 155.07,
        "saikou": 1.5,
        "heikin": 1.03,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 1.775
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 109.807,
        "saikou": 1.46,
        "heikin": 1.46,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 1.738
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 111.25,
        "saikou": 1.77,
        "heikin": 1.69,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 1.803
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 109.807,
        "saikou": 9.9,
        "heikin": 4.51,
        "boshuAvg30d": 180.9,
        "heikinAvg30d": 2.06
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 111.25,
        "saikou": 9.5,
        "heikin": 4.27,
        "boshuAvg30d": 183.6,
        "heikinAvg30d": 2.115
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 180.124,
        "saikou": 9.99,
        "heikin": 3.19,
        "boshuAvg30d": 183.6,
        "heikinAvg30d": 2.033
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 207.047,
        "saikou": 9.99,
        "heikin": 3.15,
        "boshuAvg30d": 183.6,
        "heikinAvg30d": 2.66
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 154.605,
        "saikou": 9.99,
        "heikin": 3.92,
        "boshuAvg30d": 192.9,
        "heikinAvg30d": 2.724
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 187.792,
        "saikou": 9.99,
        "heikin": 3.34,
        "boshuAvg30d": 192.9,
        "heikinAvg30d": 2.804
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 209.752,
        "saikou": 9.99,
        "heikin": 3.13,
        "boshuAvg30d": 192.9,
        "heikinAvg30d": 2.664
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 204.437,
        "saikou": 9.99,
        "heikin": 3.17,
        "boshuAvg30d": 191.9,
        "heikinAvg30d": 2.741
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 224.455,
        "saikou": 9.99,
        "heikin": 2.97,
        "boshuAvg30d": 190.5,
        "heikinAvg30d": 2.734
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 233.832,
        "saikou": 9.99,
        "heikin": 2.7,
        "boshuAvg30d": 190.9,
        "heikinAvg30d": 2.428
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 212.69,
        "saikou": 9.99,
        "heikin": 2.45,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 2.197
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 220.682,
        "saikou": 9.99,
        "heikin": 2.69,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 2.25
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 211.737,
        "saikou": 9.99,
        "heikin": 3.14,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 2.697
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 111.282,
        "saikou": 9.99,
        "heikin": 5.34,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 2.57
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 5.55,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 2.858
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 5.4,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 2.589
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 182.889,
        "saikou": 9.99,
        "heikin": 3.5,
        "boshuAvg30d": 188.9,
        "heikinAvg30d": 2.939
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 180.621,
        "saikou": 9.99,
        "heikin": 3.52,
        "boshuAvg30d": 188.9,
        "heikinAvg30d": 3.126
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 96.747,
        "saikou": 9.99,
        "heikin": 5.84,
        "boshuAvg30d": 188.9,
        "heikinAvg30d": 3.091
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 98.19,
        "saikou": 9.99,
        "heikin": 5.49,
        "boshuAvg30d": 188.9,
        "heikinAvg30d": 2.649
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 5,
        "boshuAvg30d": 184.6,
        "heikinAvg30d": 2.653
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 5.14,
        "boshuAvg30d": 183.6,
        "heikinAvg30d": 2.906
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 111.23,
        "saikou": 9.99,
        "heikin": 4.75,
        "boshuAvg30d": 181.6,
        "heikinAvg30d": 2.363
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 109.38,
        "saikou": 9.99,
        "heikin": 4.71,
        "boshuAvg30d": 181.6,
        "heikinAvg30d": 2.349
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 4.74,
        "boshuAvg30d": 181.6,
        "heikinAvg30d": 2.19
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 156.603,
        "saikou": 9.99,
        "heikin": 3.56,
        "boshuAvg30d": 180.6,
        "heikinAvg30d": 2.116
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 156.468,
        "saikou": 9.99,
        "heikin": 3.55,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 2.177
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 125.081,
        "saikou": 9.99,
        "heikin": 4.34,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 2.195
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 113.19,
        "saikou": 9.99,
        "heikin": 4.83,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 2.102
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 158.453,
        "saikou": 9,
        "heikin": 2.84,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 2.135
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 113.19,
        "saikou": 1.99,
        "heikin": 1.97,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 2.131
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 136.801,
        "saikou": 1.99,
        "heikin": 1.5,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 2.0
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 109.323,
        "saikou": 9.99,
        "heikin": 4.67,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 1.81
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 132.934,
        "saikou": 9.99,
        "heikin": 3.32,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 1.673
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 165.725,
        "saikou": 1.56,
        "heikin": 1.31,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 2.321
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 165.725,
        "saikou": 1.5,
        "heikin": 0.69,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 2.552
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 167.525,
        "saikou": 1.4,
        "heikin": 0.91,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 2.256
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 169.515,
        "saikou": 1.56,
        "heikin": 1.3,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 2.104
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 167.519,
        "saikou": 1.46,
        "heikin": 0.63,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 2.169
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 180.246,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 2.37
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 226.548,
        "saikou": 2,
        "heikin": 1.17,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 2.465
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 156.509,
        "saikou": 7.99,
        "heikin": 1.92,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 2.786
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 175.64,
        "saikou": 8.45,
        "heikin": 2.49,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 2.94
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 164.518,
        "saikou": 1.56,
        "heikin": 1.52,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 3.165
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 175.64,
        "saikou": 1.56,
        "heikin": 1.52,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 2.977
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 175.64,
        "saikou": 1.56,
        "heikin": 1.52,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 2.893
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 179.093,
        "saikou": 1.56,
        "heikin": 1.28,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 2.896
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 166.366,
        "saikou": 3.84,
        "heikin": 2.57,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 2.929
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 189.094,
        "saikou": 7,
        "heikin": 1.39,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.259
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 134.632,
        "saikou": 7,
        "heikin": 1.73,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 1.981
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 176.237,
        "saikou": 1.5,
        "heikin": 1.23,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 1.989
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 176.237,
        "saikou": 1.49,
        "heikin": 1.05,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 1.918
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 156.347,
        "saikou": 1.8,
        "heikin": 1.51,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.083
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 148.393,
        "saikou": 2.7,
        "heikin": 1.16,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.135
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 152.351,
        "saikou": 2.29,
        "heikin": 1.18,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 1.747
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 189.245,
        "saikou": 6,
        "heikin": 1.06,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 1.83
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 157.812,
        "saikou": 2.29,
        "heikin": 1.38,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 1.707
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 156.347,
        "saikou": 2.29,
        "heikin": 1.39,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 1.804
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 189.245,
        "saikou": 2.29,
        "heikin": 0.92,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 1.688
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 148.393,
        "saikou": 6,
        "heikin": 1.64,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 1.905
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 156.347,
        "saikou": 2.29,
        "heikin": 1.25,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 1.924
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 156.347,
        "saikou": 3.38,
        "heikin": 2.15,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.015
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 156.347,
        "saikou": 4,
        "heikin": 1.88,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.099
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 156.347,
        "saikou": 2.7,
        "heikin": 1.7,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.185
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 156.347,
        "saikou": 2.7,
        "heikin": 1.2,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.333
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 143.62,
        "saikou": 4.35,
        "heikin": 3.07,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.54
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 152.88,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.941
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 125.795,
        "saikou": 2.29,
        "heikin": 2.24,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.568
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 138.522,
        "saikou": 2.29,
        "heikin": 2.24,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.797
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 138.522,
        "saikou": 7,
        "heikin": 3.84,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.703
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 139.402,
        "saikou": 2.29,
        "heikin": 2.14,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.7
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 126.675,
        "saikou": 3.22,
        "heikin": 2.48,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.63
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 186.555,
        "saikou": 7,
        "heikin": 1.75,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.434
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 167.686,
        "saikou": 2.29,
        "heikin": 1.69,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.247
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 167.686,
        "saikou": 9.28,
        "heikin": 2.7,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.545
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 167.686,
        "saikou": 9.28,
        "heikin": 2.7,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.396
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 161.282,
        "saikou": 7.99,
        "heikin": 1.74,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 3.476
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 138.638,
        "saikou": 9.09,
        "heikin": 2.76,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 3.307
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 218.594,
        "saikou": 2.29,
        "heikin": 1.33,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 3.207
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 218.594,
        "saikou": 2.29,
        "heikin": 1.33,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.778
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 216.606,
        "saikou": 1.56,
        "heikin": 0.9,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 2.668
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 216.606,
        "saikou": 1.56,
        "heikin": 1.09,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 2.091
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.745
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.729
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.37,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.672
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.656
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.652
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.68
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.91,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.752
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 186.8,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.784
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.777
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.8
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.91,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.792
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.785
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.905
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 201.343,
        "saikou": 3,
        "heikin": 1.03,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 0.811
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.92,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.79
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.92,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.831
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.816
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.47,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.778
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.993
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.971
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.0
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.952
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.28,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.956
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.22,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.974
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 1.15,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.991
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.997
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 0.83,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.993
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.002
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 1.035
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.75,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.969
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 1.047
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 1.042
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.74,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 1.2
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 1.273
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 1.306
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 142.8,
        "saikou": 2.85,
        "heikin": 0.69,
        "boshuAvg30d": 42.6,
        "heikinAvg30d": 1.35
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 160.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.371
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 161.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.337
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 158.343,
        "saikou": 4.99,
        "heikin": 1,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.315
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 157.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.348
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 3.99,
        "heikin": 0.91,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.31
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 3.99,
        "heikin": 0.96,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.302
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 2.99,
        "heikin": 1.03,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.891
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.99,
        "heikin": 0.97,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.852
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.95,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.805
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.95,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.738
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.804
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.68,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.793
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 146.246,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.636
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 148.244,
        "saikou": 10,
        "heikin": 6.51,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.212
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 146.252,
        "saikou": 10,
        "heikin": 6.41,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.048
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 146.25,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.905
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 149.622,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.961
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 149.621,
        "saikou": 10,
        "heikin": 6.78,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.258
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 172.135,
        "saikou": 10,
        "heikin": 6.24,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.646
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 168.306,
        "saikou": 10,
        "heikin": 6.29,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.22
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 153.169,
        "saikou": 10,
        "heikin": 5.78,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.352
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 245.817,
        "saikou": 10,
        "heikin": 7.17,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.467
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 166.481,
        "saikou": 10,
        "heikin": 6.41,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.622
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 165.934,
        "saikou": 10,
        "heikin": 6.32,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.589
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 249.853,
        "saikou": 10,
        "heikin": 7.32,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 6.41
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 249.843,
        "saikou": 10,
        "heikin": 7.41,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 6.226
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 99.841,
        "saikou": 10,
        "heikin": 3.17,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 5.369
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 158.84,
        "saikou": 10,
        "heikin": 6.02,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 4.479
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 148.839,
        "saikou": 10,
        "heikin": 5.72,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 4.215
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 155.838,
        "saikou": 9.94,
        "heikin": 5.76,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 3.98
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 160.309,
        "saikou": 7.42,
        "heikin": 4.45,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 3.899
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 152.658,
        "saikou": 3.73,
        "heikin": 2.36,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.735
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 125.777,
        "saikou": 1.56,
        "heikin": 1.26,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 3.659
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 117.564,
        "saikou": 2.18,
        "heikin": 0.83,
        "boshuAvg30d": 181.3,
        "heikinAvg30d": 3.583
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 110.776,
        "saikou": 1,
        "heikin": 0.49,
        "boshuAvg30d": 181.3,
        "heikinAvg30d": 3.336
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 110.81,
        "saikou": 1.12,
        "heikin": 0.5,
        "boshuAvg30d": 181.3,
        "heikinAvg30d": 3.317
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 104.984,
        "saikou": 1,
        "heikin": 0.48,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.299
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 104.984,
        "saikou": 2.11,
        "heikin": 0.5,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.35
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 129.46,
        "saikou": 1.55,
        "heikin": 1.22,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.886
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 145.06,
        "saikou": 7,
        "heikin": 2.87,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 4.462
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 160.952,
        "saikou": 7.53,
        "heikin": 4.44,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 4.43
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 160.952,
        "saikou": 10,
        "heikin": 6.3,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 5.009
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 162.91,
        "saikou": 10,
        "heikin": 6.93,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 5.465
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 162.91,
        "saikou": 10,
        "heikin": 6.78,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 5.754
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 205.908,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 6.428
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 166.16,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 6.944
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 162.184,
        "saikou": 10,
        "heikin": 7.91,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 7.067
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 153.416,
        "saikou": 10,
        "heikin": 7.5,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 7.074
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 149.957,
        "saikou": 10,
        "heikin": 7.6,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.988
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 142.307,
        "saikou": 10,
        "heikin": 7.98,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 7.037
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 151.843,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.599
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 155.821,
        "saikou": 10,
        "heikin": 7.73,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.339
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 163.431,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.449
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 178.977,
        "saikou": 10,
        "heikin": 6.9,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.203
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 170.501,
        "saikou": 10,
        "heikin": 6.9,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.143
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 173.421,
        "saikou": 10,
        "heikin": 6.83,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 5.884
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 173.421,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.005
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 196.847,
        "saikou": 10,
        "heikin": 6.96,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.001
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 186.849,
        "saikou": 10,
        "heikin": 7.21,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 6.07
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 124.849,
        "saikou": 10,
        "heikin": 5.09,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 5.472
      }
    ]
  }
};
