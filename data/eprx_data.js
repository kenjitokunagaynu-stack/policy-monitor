// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/21〜2026/09/19）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-20",
  "fetchedAt": "2026-09-20",
  "avgWindowLabel": "過去30日平均（2026/08/21〜2026/09/19）",
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
      "boshu": 1246,
      "ouatsu": 1168.692,
      "saikou": 10,
      "heikin": 2.32,
      "boshuAvg30d": 1422.3,
      "heikinAvg30d": 2.998
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1246,
      "ouatsu": 1246.72,
      "saikou": 10,
      "heikin": 2.45,
      "boshuAvg30d": 1422.3,
      "heikinAvg30d": 2.934
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1246,
      "ouatsu": 1361.159,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1422.3,
      "heikinAvg30d": 3.022
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1246,
      "ouatsu": 1351.293,
      "saikou": 10,
      "heikin": 2.51,
      "boshuAvg30d": 1421.5,
      "heikinAvg30d": 3.023
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1241,
      "ouatsu": 1368.554,
      "saikou": 10,
      "heikin": 2.36,
      "boshuAvg30d": 1416.5,
      "heikinAvg30d": 3.065
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1240,
      "ouatsu": 1351.195,
      "saikou": 10,
      "heikin": 2.52,
      "boshuAvg30d": 1415.2,
      "heikinAvg30d": 3.101
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1240,
      "ouatsu": 1472.895,
      "saikou": 10,
      "heikin": 2.67,
      "boshuAvg30d": 1423.0,
      "heikinAvg30d": 3.145
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1241,
      "ouatsu": 1409.781,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1424.0,
      "heikinAvg30d": 3.2
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1244,
      "ouatsu": 1468.411,
      "saikou": 10,
      "heikin": 2.82,
      "boshuAvg30d": 1427.4,
      "heikinAvg30d": 3.259
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1244,
      "ouatsu": 1556.407,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1427.8,
      "heikinAvg30d": 3.238
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1244,
      "ouatsu": 1530.4,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1427.8,
      "heikinAvg30d": 3.354
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1244,
      "ouatsu": 1471.949,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1427.8,
      "heikinAvg30d": 3.301
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1310,
      "ouatsu": 1436.749,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1492.7,
      "heikinAvg30d": 3.605
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1331,
      "ouatsu": 1508.328,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1514.4,
      "heikinAvg30d": 3.554
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1354,
      "ouatsu": 1435.768,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1537.4,
      "heikinAvg30d": 3.584
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1372,
      "ouatsu": 1430.25,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1553.9,
      "heikinAvg30d": 3.551
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1373,
      "ouatsu": 1361.174,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1554.6,
      "heikinAvg30d": 3.805
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1373,
      "ouatsu": 1355.114,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1554.6,
      "heikinAvg30d": 4.021
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1310,
      "ouatsu": 1295.223,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1508.2,
      "heikinAvg30d": 3.994
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1314,
      "ouatsu": 1394.365,
      "saikou": 10,
      "heikin": 3.01,
      "boshuAvg30d": 1512.5,
      "heikinAvg30d": 3.901
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1322,
      "ouatsu": 1290.026,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1520.2,
      "heikinAvg30d": 3.799
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1322,
      "ouatsu": 1299.687,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1520.2,
      "heikinAvg30d": 3.826
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1319,
      "ouatsu": 1291.373,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1516.4,
      "heikinAvg30d": 3.761
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1318,
      "ouatsu": 1339.284,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1515.8,
      "heikinAvg30d": 3.76
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1311,
      "ouatsu": 1340.994,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1507.0,
      "heikinAvg30d": 3.577
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1311,
      "ouatsu": 1332.758,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1507.0,
      "heikinAvg30d": 3.574
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1311,
      "ouatsu": 1363.84,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1504.5,
      "heikinAvg30d": 3.876
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1305,
      "ouatsu": 1383.565,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1498.5,
      "heikinAvg30d": 4.124
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1300,
      "ouatsu": 1450.207,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1494.6,
      "heikinAvg30d": 4.255
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1293,
      "ouatsu": 1496.16,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1488.7,
      "heikinAvg30d": 4.331
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1350,
      "ouatsu": 1568.635,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1534.9,
      "heikinAvg30d": 4.305
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1350,
      "ouatsu": 1513.291,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1534.9,
      "heikinAvg30d": 4.6
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1350,
      "ouatsu": 1610.65,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1534.9,
      "heikinAvg30d": 4.605
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1348,
      "ouatsu": 1914.235,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1531.8,
      "heikinAvg30d": 4.889
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1344,
      "ouatsu": 1884.004,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1524.6,
      "heikinAvg30d": 4.952
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1340,
      "ouatsu": 1796.444,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1520.6,
      "heikinAvg30d": 4.86
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1332,
      "ouatsu": 1687.025,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1512.3,
      "heikinAvg30d": 4.864
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1332,
      "ouatsu": 1724.722,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1511.9,
      "heikinAvg30d": 4.75
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1322,
      "ouatsu": 1830.243,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1512.5,
      "heikinAvg30d": 4.572
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1321,
      "ouatsu": 1782.569,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1511.9,
      "heikinAvg30d": 4.35
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1316,
      "ouatsu": 1909.281,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1506.9,
      "heikinAvg30d": 4.114
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1312,
      "ouatsu": 1862.486,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1504.0,
      "heikinAvg30d": 3.892
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1219,
      "ouatsu": 1951.726,
      "saikou": 9.5,
      "heikin": 3.1,
      "boshuAvg30d": 1416.4,
      "heikinAvg30d": 3.536
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1222,
      "ouatsu": 1866.826,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1419.4,
      "heikinAvg30d": 4.053
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1223,
      "ouatsu": 1652.907,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1420.4,
      "heikinAvg30d": 3.767
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1216,
      "ouatsu": 1786.31,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1413.7,
      "heikinAvg30d": 3.568
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1209,
      "ouatsu": 1644.312,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1406.0,
      "heikinAvg30d": 3.612
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1201,
      "ouatsu": 1404,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1397.6,
      "heikinAvg30d": 3.435
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
        "boshu": 64,
        "ouatsu": 114.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.257
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 114.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.248
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 141.058,
        "saikou": 3.95,
        "heikin": 1.73,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.134
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.294
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.4
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 154.908,
        "saikou": 4.4,
        "heikin": 1.64,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.459
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 191.071,
        "saikou": 3.95,
        "heikin": 1.65,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.719
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 150.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.885
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 185.008,
        "saikou": 3.75,
        "heikin": 1.57,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.296
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 201.218,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.917
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 4,
        "heikin": 1.64,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.2
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 9.85,
        "heikin": 3.01,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.941
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 155.148,
        "saikou": 6.05,
        "heikin": 2.37,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.536
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 203.018,
        "saikou": 7.4,
        "heikin": 2.37,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.043
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 152.958,
        "saikou": 8.85,
        "heikin": 2.75,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.869
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 195.058,
        "saikou": 7.95,
        "heikin": 2.62,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.937
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 152.918,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.377
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 153.021,
        "saikou": 3.95,
        "heikin": 1.79,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.661
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 127.958,
        "saikou": 1.01,
        "heikin": 0.99,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.453
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 225.071,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 1.542
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 1.477
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 227.021,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 1.729
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 1.621
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 1.45
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 171.885,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.488
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 169.917,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.416
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 183.967,
        "saikou": 3.95,
        "heikin": 1.28,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.994
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 175.935,
        "saikou": 8.65,
        "heikin": 1.62,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.368
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 177.885,
        "saikou": 3.95,
        "heikin": 1.6,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.09
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 154.908,
        "saikou": 9.91,
        "heikin": 2.51,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.3
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 195.519,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.945
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 152.958,
        "saikou": 8.85,
        "heikin": 3.59,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.576
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 150.968,
        "saikou": 8,
        "heikin": 2.75,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.597
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 201.258,
        "saikou": 3,
        "heikin": 2.19,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.542
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 127.958,
        "saikou": 2.95,
        "heikin": 2.74,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 3.263
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 134.29,
        "saikou": 3.02,
        "heikin": 2.26,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 3.266
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 85.99,
        "saikou": 3.18,
        "heikin": 3.13,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 3.22
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 112.958,
        "saikou": 3.38,
        "heikin": 3.27,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.94
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 159.268,
        "saikou": 3.52,
        "heikin": 2.58,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.814
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 110.968,
        "saikou": 3.17,
        "heikin": 3.12,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.42
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 203.208,
        "saikou": 3.01,
        "heikin": 2.18,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.765
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 154.908,
        "saikou": 3.8,
        "heikin": 2.73,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.889
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 201.258,
        "saikou": 2.95,
        "heikin": 2.1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.568
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 172.458,
        "saikou": 3.95,
        "heikin": 2.82,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.989
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 152.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.859
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.634
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.39
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 152.958,
        "saikou": 9.9,
        "heikin": 2.43,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.21
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 49.109,
        "saikou": 10,
        "heikin": 9.11,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 8.353
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 49.109,
        "saikou": 10,
        "heikin": 9.11,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 8.577
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 68.987,
        "saikou": 10,
        "heikin": 9.2,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 9.126
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 68.987,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 9.1
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 66.989,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 9.082
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 66.989,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 9.095
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 81.987,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 9.043
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 83.487,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 9.015
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.14,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 8.995
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 8.937
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 8.838
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.14,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 8.951
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.17,
        "boshuAvg30d": 180.8,
        "heikinAvg30d": 9.087
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 186.2,
        "heikinAvg30d": 9.467
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.17,
        "boshuAvg30d": 191.8,
        "heikinAvg30d": 9.614
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 195.4,
        "heikinAvg30d": 9.523
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.16,
        "boshuAvg30d": 195.4,
        "heikinAvg30d": 9.551
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.14,
        "boshuAvg30d": 195.4,
        "heikinAvg30d": 9.313
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 7.4,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 8.627
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 8.773
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 8.481
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 8.554
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 8.528
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 8.01,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 8.68
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 115.721,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 8.762
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 117.686,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 8.799
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 121.482,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 8.375
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 97.482,
        "saikou": 10,
        "heikin": 7.42,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 8.4
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 97.482,
        "saikou": 10,
        "heikin": 6.69,
        "boshuAvg30d": 139.9,
        "heikinAvg30d": 8.944
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 97.482,
        "saikou": 10,
        "heikin": 6.61,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 8.92
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 99.482,
        "saikou": 10,
        "heikin": 8.08,
        "boshuAvg30d": 192.5,
        "heikinAvg30d": 9.082
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 7.07,
        "boshuAvg30d": 192.5,
        "heikinAvg30d": 8.689
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 7.19,
        "boshuAvg30d": 192.5,
        "heikinAvg30d": 8.357
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 107.982,
        "saikou": 10,
        "heikin": 6.79,
        "boshuAvg30d": 191.2,
        "heikinAvg30d": 7.922
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 109.482,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 189.2,
        "heikinAvg30d": 7.611
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 107.982,
        "saikou": 10,
        "heikin": 6.78,
        "boshuAvg30d": 187.2,
        "heikinAvg30d": 7.757
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.72,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 7.663
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 104.021,
        "saikou": 10,
        "heikin": 6.56,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 7.698
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.62,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 7.964
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.73,
        "boshuAvg30d": 185.2,
        "heikinAvg30d": 8.33
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.77,
        "boshuAvg30d": 184.8,
        "heikinAvg30d": 8.558
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.79,
        "boshuAvg30d": 185.2,
        "heikinAvg30d": 8.746
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 107.486,
        "saikou": 9.5,
        "heikin": 6.47,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 8.621
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 6.79,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 8.76
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.17,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 8.86
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 83.586,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 99.9,
        "heikinAvg30d": 8.829
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 83.556,
        "saikou": 10,
        "heikin": 9.16,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 8.822
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 97.9,
        "heikinAvg30d": 8.921
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 423,
        "ouatsu": 375.677,
        "saikou": 9.37,
        "heikin": 2.67,
        "boshuAvg30d": 526.8,
        "heikinAvg30d": 3.613
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 423,
        "ouatsu": 384.292,
        "saikou": 9.37,
        "heikin": 3.21,
        "boshuAvg30d": 526.8,
        "heikinAvg30d": 3.404
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 423,
        "ouatsu": 391.881,
        "saikou": 9.35,
        "heikin": 3.21,
        "boshuAvg30d": 526.8,
        "heikinAvg30d": 3.344
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 423,
        "ouatsu": 403.272,
        "saikou": 9.37,
        "heikin": 3.25,
        "boshuAvg30d": 526.5,
        "heikinAvg30d": 3.261
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 421,
        "ouatsu": 371.786,
        "saikou": 9.34,
        "heikin": 3.45,
        "boshuAvg30d": 524.5,
        "heikinAvg30d": 3.204
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 421,
        "ouatsu": 369.794,
        "saikou": 9.3,
        "heikin": 3.45,
        "boshuAvg30d": 524.5,
        "heikinAvg30d": 3.184
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 420,
        "ouatsu": 369.834,
        "saikou": 9.37,
        "heikin": 3.57,
        "boshuAvg30d": 523.1,
        "heikinAvg30d": 3.1
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 421,
        "ouatsu": 366.394,
        "saikou": 9.37,
        "heikin": 3.51,
        "boshuAvg30d": 524.1,
        "heikinAvg30d": 3.266
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 422,
        "ouatsu": 367.914,
        "saikou": 9.37,
        "heikin": 3.59,
        "boshuAvg30d": 525.1,
        "heikinAvg30d": 3.216
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 422,
        "ouatsu": 371.684,
        "saikou": 9.37,
        "heikin": 3.61,
        "boshuAvg30d": 525.5,
        "heikinAvg30d": 3.211
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 422,
        "ouatsu": 371.684,
        "saikou": 9.37,
        "heikin": 3.62,
        "boshuAvg30d": 525.5,
        "heikinAvg30d": 3.312
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 422,
        "ouatsu": 369.784,
        "saikou": 9.3,
        "heikin": 3.61,
        "boshuAvg30d": 525.5,
        "heikinAvg30d": 3.215
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 443,
        "ouatsu": 377.588,
        "saikou": 9.35,
        "heikin": 3.91,
        "boshuAvg30d": 546.5,
        "heikinAvg30d": 3.638
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 451,
        "ouatsu": 392.588,
        "saikou": 9.37,
        "heikin": 3.87,
        "boshuAvg30d": 554.5,
        "heikinAvg30d": 3.738
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 456,
        "ouatsu": 392.588,
        "saikou": 9.37,
        "heikin": 3.81,
        "boshuAvg30d": 560.2,
        "heikinAvg30d": 3.867
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 461,
        "ouatsu": 392.588,
        "saikou": 9.99,
        "heikin": 3.93,
        "boshuAvg30d": 564.8,
        "heikinAvg30d": 3.854
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 461,
        "ouatsu": 394.554,
        "saikou": 9.5,
        "heikin": 3.96,
        "boshuAvg30d": 564.8,
        "heikinAvg30d": 4.209
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 461,
        "ouatsu": 394.554,
        "saikou": 9.5,
        "heikin": 3.84,
        "boshuAvg30d": 564.8,
        "heikinAvg30d": 4.336
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 452,
        "ouatsu": 410.995,
        "saikou": 9.37,
        "heikin": 3.7,
        "boshuAvg30d": 558.5,
        "heikinAvg30d": 4.283
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 452,
        "ouatsu": 410.995,
        "saikou": 9.37,
        "heikin": 3.78,
        "boshuAvg30d": 558.5,
        "heikinAvg30d": 4.134
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 452,
        "ouatsu": 344.945,
        "saikou": 9.37,
        "heikin": 4.33,
        "boshuAvg30d": 558.5,
        "heikinAvg30d": 3.846
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 451,
        "ouatsu": 379.796,
        "saikou": 9.37,
        "heikin": 4.3,
        "boshuAvg30d": 557.5,
        "heikinAvg30d": 3.852
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 448,
        "ouatsu": 411.473,
        "saikou": 9.37,
        "heikin": 3.93,
        "boshuAvg30d": 554.5,
        "heikinAvg30d": 3.963
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 448,
        "ouatsu": 417.647,
        "saikou": 9.37,
        "heikin": 3.85,
        "boshuAvg30d": 554.5,
        "heikinAvg30d": 4.0
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 447,
        "ouatsu": 420.677,
        "saikou": 9.39,
        "heikin": 4.05,
        "boshuAvg30d": 553.5,
        "heikinAvg30d": 3.771
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 447,
        "ouatsu": 430.114,
        "saikou": 9.39,
        "heikin": 3.79,
        "boshuAvg30d": 553.5,
        "heikinAvg30d": 3.837
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 447,
        "ouatsu": 426.525,
        "saikou": 9.37,
        "heikin": 3.8,
        "boshuAvg30d": 550.9,
        "heikinAvg30d": 4.021
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 446,
        "ouatsu": 415.41,
        "saikou": 9.37,
        "heikin": 3.64,
        "boshuAvg30d": 549.9,
        "heikinAvg30d": 4.189
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 445,
        "ouatsu": 458.391,
        "saikou": 9.37,
        "heikin": 3.93,
        "boshuAvg30d": 549.3,
        "heikinAvg30d": 4.319
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 445,
        "ouatsu": 458.391,
        "saikou": 9.37,
        "heikin": 3.89,
        "boshuAvg30d": 549.3,
        "heikinAvg30d": 4.303
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 444,
        "ouatsu": 457.242,
        "saikou": 9.37,
        "heikin": 3.82,
        "boshuAvg30d": 548.3,
        "heikinAvg30d": 4.265
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 444,
        "ouatsu": 458.266,
        "saikou": 9.37,
        "heikin": 3.82,
        "boshuAvg30d": 548.3,
        "heikinAvg30d": 4.507
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 444,
        "ouatsu": 480.825,
        "saikou": 9.37,
        "heikin": 3.7,
        "boshuAvg30d": 547.8,
        "heikinAvg30d": 4.603
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 444,
        "ouatsu": 456.24,
        "saikou": 9.37,
        "heikin": 3.7,
        "boshuAvg30d": 547.8,
        "heikinAvg30d": 4.777
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 444,
        "ouatsu": 480.825,
        "saikou": 9.37,
        "heikin": 3.66,
        "boshuAvg30d": 544.0,
        "heikinAvg30d": 4.93
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 444,
        "ouatsu": 452.49,
        "saikou": 9.37,
        "heikin": 3.63,
        "boshuAvg30d": 544.0,
        "heikinAvg30d": 4.835
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 446,
        "ouatsu": 411.036,
        "saikou": 9.37,
        "heikin": 3.48,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 4.696
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 446,
        "ouatsu": 405.03,
        "saikou": 9.37,
        "heikin": 3.4,
        "boshuAvg30d": 546.0,
        "heikinAvg30d": 4.538
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 436,
        "ouatsu": 394.86,
        "saikou": 9.37,
        "heikin": 3.48,
        "boshuAvg30d": 546.6,
        "heikinAvg30d": 4.495
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 436,
        "ouatsu": 370.31,
        "saikou": 9.99,
        "heikin": 3.67,
        "boshuAvg30d": 546.6,
        "heikinAvg30d": 4.359
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 434,
        "ouatsu": 407.448,
        "saikou": 9.37,
        "heikin": 3.47,
        "boshuAvg30d": 545.0,
        "heikinAvg30d": 3.965
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 434,
        "ouatsu": 407.448,
        "saikou": 9.37,
        "heikin": 3.27,
        "boshuAvg30d": 545.0,
        "heikinAvg30d": 3.998
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 433,
        "ouatsu": 403.272,
        "saikou": 9.37,
        "heikin": 3.53,
        "boshuAvg30d": 544.3,
        "heikinAvg30d": 3.65
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 433,
        "ouatsu": 377.237,
        "saikou": 9.37,
        "heikin": 3.55,
        "boshuAvg30d": 544.3,
        "heikinAvg30d": 4.526
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 433,
        "ouatsu": 267.784,
        "saikou": 9.37,
        "heikin": 4.08,
        "boshuAvg30d": 544.3,
        "heikinAvg30d": 4.148
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 431,
        "ouatsu": 373.791,
        "saikou": 9.37,
        "heikin": 3.5,
        "boshuAvg30d": 542.3,
        "heikinAvg30d": 4.006
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 429,
        "ouatsu": 369.279,
        "saikou": 9.37,
        "heikin": 3.61,
        "boshuAvg30d": 540.0,
        "heikinAvg30d": 4.246
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 428,
        "ouatsu": 386.255,
        "saikou": 9.37,
        "heikin": 3.27,
        "boshuAvg30d": 538.6,
        "heikinAvg30d": 4.027
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 133.528,
        "saikou": 2.89,
        "heikin": 2.16,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.42
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 145.306,
        "saikou": 2.79,
        "heikin": 1.73,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.239
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 170.441,
        "saikou": 2.8,
        "heikin": 1.76,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.331
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 176.278,
        "saikou": 2.8,
        "heikin": 1.73,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.437
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 148.654,
        "saikou": 2.79,
        "heikin": 1.54,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.681
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 158.464,
        "saikou": 2.79,
        "heikin": 1.8,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.768
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 186.019,
        "saikou": 2.79,
        "heikin": 1.89,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.633
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 180.319,
        "saikou": 2.79,
        "heikin": 1.87,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.714
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 186.019,
        "saikou": 2.79,
        "heikin": 1.93,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.825
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 186.019,
        "saikou": 2.78,
        "heikin": 1.47,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.713
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 206.288,
        "saikou": 2.79,
        "heikin": 1.84,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.621
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 204.788,
        "saikou": 2.79,
        "heikin": 1.76,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.728
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 206.288,
        "saikou": 2.8,
        "heikin": 2.09,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.876
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 198.404,
        "saikou": 2.84,
        "heikin": 2.02,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 2.855
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 198.404,
        "saikou": 2.89,
        "heikin": 2.21,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 3.055
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 169.867,
        "saikou": 5.1,
        "heikin": 2.29,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 3.103
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 184.619,
        "saikou": 9.9,
        "heikin": 3.26,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 3.547
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 170.357,
        "saikou": 3.22,
        "heikin": 2.26,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 3.659
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 125.035,
        "saikou": 4.15,
        "heikin": 2.7,
        "boshuAvg30d": 155.6,
        "heikinAvg30d": 3.978
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 129,
        "saikou": 4.88,
        "heikin": 2.63,
        "boshuAvg30d": 155.6,
        "heikinAvg30d": 3.927
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 134.224,
        "saikou": 4.42,
        "heikin": 2.87,
        "boshuAvg30d": 156.6,
        "heikinAvg30d": 4.111
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 134.224,
        "saikou": 4.99,
        "heikin": 2.99,
        "boshuAvg30d": 155.6,
        "heikinAvg30d": 4.126
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 136.21,
        "saikou": 4.48,
        "heikin": 2.95,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 3.805
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 134.32,
        "saikou": 3.99,
        "heikin": 2.85,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 3.635
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 150.493,
        "saikou": 9.87,
        "heikin": 3.71,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.588
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 130.376,
        "saikou": 3.88,
        "heikin": 2.75,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.575
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 167.705,
        "saikou": 3.6,
        "heikin": 2.6,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.875
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 185.984,
        "saikou": 7.45,
        "heikin": 3.19,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 4.024
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 206.195,
        "saikou": 6.01,
        "heikin": 3.2,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 4.175
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 208.055,
        "saikou": 3.83,
        "heikin": 3,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 4.134
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 192.151,
        "saikou": 3.88,
        "heikin": 3.04,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.85
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 193.651,
        "saikou": 3.7,
        "heikin": 2.79,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.99
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 268.998,
        "saikou": 3.52,
        "heikin": 2.86,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.921
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 268.998,
        "saikou": 3.7,
        "heikin": 2.83,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 4.09
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 268.998,
        "saikou": 3.7,
        "heikin": 2.82,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.982
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 263.501,
        "saikou": 3.87,
        "heikin": 2.8,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.774
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 276.035,
        "saikou": 2.8,
        "heikin": 2.44,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.827
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 286.035,
        "saikou": 2.81,
        "heikin": 2.37,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.661
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 314.139,
        "saikou": 2.79,
        "heikin": 2.29,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.241
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 335.336,
        "saikou": 2.79,
        "heikin": 2.51,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.26
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 329.37,
        "saikou": 2.79,
        "heikin": 2.52,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.283
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 327.399,
        "saikou": 2.79,
        "heikin": 2.52,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.037
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 331.356,
        "saikou": 2.5,
        "heikin": 2.23,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 2.868
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 314.291,
        "saikou": 2.78,
        "heikin": 2.44,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.369
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 266.829,
        "saikou": 2.78,
        "heikin": 2.38,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.097
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 258.809,
        "saikou": 2.69,
        "heikin": 2.45,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.113
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 264.969,
        "saikou": 2.62,
        "heikin": 2.37,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 3.27
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 180.896,
        "saikou": 2.8,
        "heikin": 2.45,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 3.234
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.65,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.324
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.1,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.901
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 80.93,
        "saikou": 1.7,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.92
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.55,
        "heikin": 0.56,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.154
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.6,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.769
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 1.5,
        "heikin": 0.44,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.379
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.65,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.297
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.79,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.099
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.65,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.15
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.55,
        "heikin": 0.83,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.909
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2,
        "heikin": 0.48,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.116
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2,
        "heikin": 0.46,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.212
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.93,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 2.671
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.59,
        "heikin": 2.5,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.538
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.67,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 2.929
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.7,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.786
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 3.61,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 3.549
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.45,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 4.58
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 3.97,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.476
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.52,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.766
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.78,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.175
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 5.43,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.552
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.91
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 4.05,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.898
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.78,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.059
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 5.2,
        "heikin": 4.34,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.008
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 3.91,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.209
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.81
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 2.89,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.234
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 4.56,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.082
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 0.6,
        "heikin": 0.4,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 4.083
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 1.85,
        "heikin": 0.42,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 4.519
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 3.7,
        "heikin": 0.53,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.163
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.519
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 0.86,
        "heikin": 0.69,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.58
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 61.79,
        "saikou": 2.41,
        "heikin": 1.67,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.178
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 61.492,
        "saikou": 3.14,
        "heikin": 2.07,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.851
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 52.078,
        "saikou": 2.75,
        "heikin": 1.76,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.553
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 2.35,
        "heikin": 1.83,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.31
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 1.75,
        "heikin": 1.15,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.062
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 82.928,
        "saikou": 2.35,
        "heikin": 1.29,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.929
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 82.928,
        "saikou": 2.75,
        "heikin": 1.81,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.571
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 82.928,
        "saikou": 2.75,
        "heikin": 1.71,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.995
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 82.928,
        "saikou": 2.3,
        "heikin": 1.76,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.102
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 82.928,
        "saikou": 2.5,
        "heikin": 1.77,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.581
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 82.928,
        "saikou": 2.3,
        "heikin": 0.56,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.915
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 82.928,
        "saikou": 1.68,
        "heikin": 1.32,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 3.042
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 2.5,
        "heikin": 0.49,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.516
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 29.044,
        "saikou": 2.87,
        "heikin": 2.73,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 1.879
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 97.482,
        "saikou": 2.8,
        "heikin": 2.3,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 1.982
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 119.467,
        "saikou": 2.8,
        "heikin": 1.77,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 1.991
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 115.489,
        "saikou": 2.8,
        "heikin": 1.73,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 1.996
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 105.556,
        "saikou": 2.8,
        "heikin": 1.79,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.094
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 117.281,
        "saikou": 2.8,
        "heikin": 1.75,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 2.14
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 127.166,
        "saikou": 2.79,
        "heikin": 1.75,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.1
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 127.166,
        "saikou": 2.8,
        "heikin": 1.85,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.206
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.8,
        "heikin": 1.81,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 1.986
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.44,
        "heikin": 1.66,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 2.013
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.79,
        "heikin": 1.62,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 2.168
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.79,
        "heikin": 1.75,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 2.11
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 103.221,
        "saikou": 2.8,
        "heikin": 2.25,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.192
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 127.166,
        "saikou": 2.86,
        "heikin": 1.88,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.093
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 127.166,
        "saikou": 2.86,
        "heikin": 1.98,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.852
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 139.733,
        "saikou": 3.64,
        "heikin": 1.92,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 3.174
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 143.483,
        "saikou": 2.97,
        "heikin": 1.87,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.063
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 151.104,
        "saikou": 4.97,
        "heikin": 1.96,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.438
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 151.104,
        "saikou": 4.97,
        "heikin": 2.12,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.304
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 6.95,
        "heikin": 2.67,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.345
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 121.301,
        "saikou": 6.97,
        "heikin": 2.89,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.545
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 73.876,
        "saikou": 6.95,
        "heikin": 3.48,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.426
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 73.876,
        "saikou": 5.95,
        "heikin": 3,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.205
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 121.301,
        "saikou": 5.97,
        "heikin": 2.37,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.105
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 119.361,
        "saikou": 5.44,
        "heikin": 2.64,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.989
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 119.858,
        "saikou": 5.97,
        "heikin": 2.34,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 3.963
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 6.44,
        "heikin": 3.14,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.097
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 145.801,
        "saikou": 5.97,
        "heikin": 2.01,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 4.11
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 145.801,
        "saikou": 4.97,
        "heikin": 2.19,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.173
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 195.125,
        "saikou": 4,
        "heikin": 1.34,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 3.972
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 147.242,
        "saikou": 4,
        "heikin": 1.54,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.804
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 97.911,
        "saikou": 4,
        "heikin": 2.38,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.76
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4.94,
        "heikin": 2.82,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.923
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 238.678,
        "saikou": 6.77,
        "heikin": 4.01,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 4.19
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 238.678,
        "saikou": 5.97,
        "heikin": 3.68,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.987
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 258.292,
        "saikou": 5.25,
        "heikin": 3.27,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.782
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 236.718,
        "saikou": 4.83,
        "heikin": 3.11,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 3.607
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 256.332,
        "saikou": 5.01,
        "heikin": 3.17,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 3.554
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 258.292,
        "saikou": 5.28,
        "heikin": 3.32,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 3.642
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 258.292,
        "saikou": 5.7,
        "heikin": 3.47,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 3.488
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 258.292,
        "saikou": 5.63,
        "heikin": 3.46,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 3.179
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 258.292,
        "saikou": 5.01,
        "heikin": 3,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.274
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 258.292,
        "saikou": 5,
        "heikin": 2.69,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 3.057
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 258.292,
        "saikou": 5.33,
        "heikin": 3.1,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 3.063
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 258.292,
        "saikou": 5.33,
        "heikin": 3.17,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 3.026
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 258.292,
        "saikou": 6.1,
        "heikin": 3.47,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.93
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 164.918,
        "saikou": 2.06,
        "heikin": 1.05,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 3.093
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 88.125,
        "saikou": 2.8,
        "heikin": 2.24,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 3.156
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 170.208,
        "saikou": 2.8,
        "heikin": 1.13,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.73
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.8,
        "heikin": 1.44,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.933
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.8,
        "heikin": 1.7,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.97
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 159.471,
        "saikou": 2.8,
        "heikin": 1.72,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.839
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 159.471,
        "saikou": 2.8,
        "heikin": 0.76,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.857
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.8,
        "heikin": 1,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.897
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.58,
        "heikin": 1.26,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.962
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.79,
        "heikin": 1.4,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.013
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.4,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.975
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.68,
        "heikin": 1.94,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.144
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 1.7,
        "heikin": 1.44,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.456
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 176.379,
        "saikou": 2.79,
        "heikin": 1.39,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.444
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 178.13,
        "saikou": 4.88,
        "heikin": 3.58,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 3.707
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.93,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 3.102
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.35,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 2.969
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 178.13,
        "saikou": 3.32,
        "heikin": 1.07,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.825
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 2.95,
        "heikin": 0.92,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.77
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 3,
        "heikin": 0.92,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.664
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 4.05,
        "heikin": 1.09,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.576
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 178.13,
        "saikou": 5.67,
        "heikin": 1.21,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.247
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 178.13,
        "saikou": 5.39,
        "heikin": 1.27,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 3.01
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 178.13,
        "saikou": 6.33,
        "heikin": 1.32,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.013
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 178.13,
        "saikou": 5.11,
        "heikin": 1.31,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.995
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 176.33,
        "saikou": 4.91,
        "heikin": 1.17,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.926
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 176.33,
        "saikou": 5.63,
        "heikin": 1.18,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.257
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 176.33,
        "saikou": 5.5,
        "heikin": 1.18,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.146
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 176.33,
        "saikou": 5.07,
        "heikin": 1.15,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.844
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 176.33,
        "saikou": 4.41,
        "heikin": 1.59,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.134
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 176.33,
        "saikou": 4.23,
        "heikin": 1.59,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.347
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 176.33,
        "saikou": 4,
        "heikin": 1.57,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.462
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.49,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.339
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.5,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 5.422
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.15,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 5.458
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 193.12,
        "saikou": 2.79,
        "heikin": 0.65,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 5.998
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 208.12,
        "saikou": 2.79,
        "heikin": 1.61,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.533
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 203.584,
        "saikou": 3.7,
        "heikin": 2.51,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.431
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 201.594,
        "saikou": 4.63,
        "heikin": 3,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.732
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 201.594,
        "saikou": 4.23,
        "heikin": 2.78,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.833
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 201.594,
        "saikou": 3.64,
        "heikin": 2.46,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.592
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 203.584,
        "saikou": 2.79,
        "heikin": 1.96,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.202
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 203.584,
        "saikou": 2.87,
        "heikin": 2.04,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 5.915
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 203.584,
        "saikou": 4.23,
        "heikin": 2.73,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 5.269
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 203.584,
        "saikou": 4.23,
        "heikin": 2.76,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 4.921
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 203.584,
        "saikou": 3.53,
        "heikin": 2.35,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 4.724
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 188.12,
        "saikou": 3.53,
        "heikin": 2.6,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 4.227
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 178.13,
        "saikou": 2,
        "heikin": 1.57,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.815
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.97,
        "heikin": 2.33,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 3.737
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.03,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 2.688
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.775
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.5,
        "heikin": 1.21,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.81
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.5,
        "heikin": 1.21,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.815
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.5,
        "heikin": 1.21,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.765
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 2.79,
        "heikin": 1.25,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.747
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 2.79,
        "heikin": 1.25,
        "boshuAvg30d": 39.6,
        "heikinAvg30d": 0.769
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.92
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 67.93,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.886
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.9
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.944
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.94
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.919
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 134.973,
        "saikou": 2.79,
        "heikin": 0.9,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 0.935
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 134.973,
        "saikou": 2.8,
        "heikin": 0.94,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 0.924
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 134.973,
        "saikou": 2.8,
        "heikin": 0.94,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.982
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 134.973,
        "saikou": 4.3,
        "heikin": 1.08,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.843
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 134.973,
        "saikou": 2.8,
        "heikin": 0.96,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.819
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 134.973,
        "saikou": 2.8,
        "heikin": 0.96,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.882
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 100.973,
        "saikou": 3.1,
        "heikin": 1.16,
        "boshuAvg30d": 46.6,
        "heikinAvg30d": 0.96
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 100.973,
        "saikou": 4.99,
        "heikin": 1.38,
        "boshuAvg30d": 46.6,
        "heikinAvg30d": 0.957
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.19,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.942
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.19,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.984
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 4.1,
        "heikin": 1.2,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.964
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 5.48,
        "heikin": 1.46,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.968
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 7.89,
        "heikin": 1.75,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.156
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 7.89,
        "heikin": 1.75,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.078
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 5.48,
        "heikin": 1.46,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.952
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 1.6,
        "heikin": 0.94,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 1.009
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.49,
        "heikin": 1.21,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.992
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.24,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.898
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 114.973,
        "saikou": 1.7,
        "heikin": 0.96,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.962
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.24,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.975
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 100.973,
        "saikou": 4.19,
        "heikin": 1.32,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.962
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 100.973,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.887
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 100.973,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.946
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 49.473,
        "saikou": 1.6,
        "heikin": 1.56,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.898
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 2.65,
        "heikin": 1.68,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.87
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.871
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.907
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.932
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.898
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.883
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 96.473,
        "saikou": 1.7,
        "heikin": 1.12,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.727
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.76
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.745
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.717
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.732
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.05,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.77
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 130.817,
        "saikou": 4.05,
        "heikin": 3.32,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 4.027
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 132.741,
        "saikou": 3.16,
        "heikin": 2.75,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.859
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 148.441,
        "saikou": 2.8,
        "heikin": 2.31,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.663
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 149.437,
        "saikou": 2.8,
        "heikin": 2.15,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.698
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 147.489,
        "saikou": 2.8,
        "heikin": 1.95,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 3.616
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 157.087,
        "saikou": 2.8,
        "heikin": 2.14,
        "boshuAvg30d": 163.7,
        "heikinAvg30d": 3.673
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 176.287,
        "saikou": 2.8,
        "heikin": 2.27,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 3.734
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 172.459,
        "saikou": 3.37,
        "heikin": 2.88,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 3.762
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 176.287,
        "saikou": 4.08,
        "heikin": 3.28,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.803
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 244.303,
        "saikou": 4.55,
        "heikin": 2.4,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.974
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 246.287,
        "saikou": 4.56,
        "heikin": 2.42,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 4.056
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 192.987,
        "saikou": 3.55,
        "heikin": 2.73,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.92
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 191.987,
        "saikou": 2.8,
        "heikin": 2.03,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 3.801
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 186.135,
        "saikou": 2.8,
        "heikin": 1.74,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 3.593
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 162.135,
        "saikou": 2.8,
        "heikin": 1.82,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 3.611
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 131.987,
        "saikou": 2.89,
        "heikin": 2.08,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 3.628
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 97.009,
        "saikou": 2.89,
        "heikin": 2.65,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 3.975
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 98.987,
        "saikou": 2.89,
        "heikin": 2.65,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 4.741
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 100.968,
        "saikou": 2.89,
        "heikin": 2.68,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 4.728
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 100.968,
        "saikou": 2.89,
        "heikin": 2.68,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 4.649
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 97.485,
        "saikou": 3,
        "heikin": 2.76,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.446
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 81.607,
        "saikou": 4,
        "heikin": 3.08,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.527
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 79.693,
        "saikou": 4.15,
        "heikin": 3.15,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 4.511
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 77.695,
        "saikou": 4.02,
        "heikin": 3.13,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 4.633
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 81.626,
        "saikou": 3.9,
        "heikin": 3.07,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.068
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 83.576,
        "saikou": 3.9,
        "heikin": 3.11,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.201
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 85.574,
        "saikou": 3.9,
        "heikin": 3.08,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.644
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 81.722,
        "saikou": 4.34,
        "heikin": 3.2,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 5.316
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 83.222,
        "saikou": 4.2,
        "heikin": 3.34,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 5.93
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 100.968,
        "saikou": 3.71,
        "heikin": 2.97,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 6.415
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 100.968,
        "saikou": 3.74,
        "heikin": 2.76,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 6.126
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 138.992,
        "saikou": 4.43,
        "heikin": 3.29,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 7.128
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 138.992,
        "saikou": 4.6,
        "heikin": 3.32,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 7.138
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 264.058,
        "saikou": 6.05,
        "heikin": 2.74,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 7.585
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 266.042,
        "saikou": 6.9,
        "heikin": 3.08,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 7.091
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 265.042,
        "saikou": 7.6,
        "heikin": 3.29,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 7.278
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 258.201,
        "saikou": 8.5,
        "heikin": 3.62,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 7.355
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 258.201,
        "saikou": 8.56,
        "heikin": 3.67,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 7.077
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 263.203,
        "saikou": 8.49,
        "heikin": 3.65,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 6.532
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 265.192,
        "saikou": 7.6,
        "heikin": 3.31,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.824
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 268.492,
        "saikou": 7.31,
        "heikin": 3.21,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.229
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 271.968,
        "saikou": 7.45,
        "heikin": 3.27,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.626
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 267.077,
        "saikou": 7.38,
        "heikin": 3.32,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.267
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 268.077,
        "saikou": 6.99,
        "heikin": 3.11,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.019
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 268.077,
        "saikou": 6.23,
        "heikin": 2.79,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.738
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 265.093,
        "saikou": 4.6,
        "heikin": 2.15,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.076
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 265.101,
        "saikou": 5.05,
        "heikin": 2.33,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 3.987
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 168.249,
        "saikou": 3.19,
        "heikin": 2.75,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 3.386
      }
    ]
  }
};
