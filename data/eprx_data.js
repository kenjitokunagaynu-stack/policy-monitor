// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/10〜2026/09/08）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-09",
  "fetchedAt": "2026-09-09",
  "avgWindowLabel": "過去30日平均（2026/08/10〜2026/09/08）",
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
      "boshu": 1338,
      "ouatsu": 1517.638,
      "saikou": 9.5,
      "heikin": 3.14,
      "boshuAvg30d": 1437.9,
      "heikinAvg30d": 3.308
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1338,
      "ouatsu": 1411.416,
      "saikou": 9.5,
      "heikin": 3.42,
      "boshuAvg30d": 1437.9,
      "heikinAvg30d": 3.319
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1338,
      "ouatsu": 1621.238,
      "saikou": 9.49,
      "heikin": 3.31,
      "boshuAvg30d": 1437.9,
      "heikinAvg30d": 3.429
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1338,
      "ouatsu": 1605.553,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1436.4,
      "heikinAvg30d": 3.345
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1333,
      "ouatsu": 1566.185,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1431.4,
      "heikinAvg30d": 3.352
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1332,
      "ouatsu": 1594.079,
      "saikou": 9.5,
      "heikin": 3.15,
      "boshuAvg30d": 1429.7,
      "heikinAvg30d": 3.451
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1418,
      "ouatsu": 1619.485,
      "saikou": 10,
      "heikin": 3.51,
      "boshuAvg30d": 1454.0,
      "heikinAvg30d": 3.422
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1419,
      "ouatsu": 1633.224,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1455.0,
      "heikinAvg30d": 3.502
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1422,
      "ouatsu": 1626.745,
      "saikou": 10,
      "heikin": 3.69,
      "boshuAvg30d": 1458.7,
      "heikinAvg30d": 3.513
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1422,
      "ouatsu": 1630.085,
      "saikou": 10,
      "heikin": 3.72,
      "boshuAvg30d": 1459.5,
      "heikinAvg30d": 3.432
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1422,
      "ouatsu": 1648.91,
      "saikou": 10,
      "heikin": 3.83,
      "boshuAvg30d": 1459.0,
      "heikinAvg30d": 3.519
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1422,
      "ouatsu": 1574.046,
      "saikou": 10,
      "heikin": 3.96,
      "boshuAvg30d": 1459.0,
      "heikinAvg30d": 3.429
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1488,
      "ouatsu": 1603.468,
      "saikou": 10,
      "heikin": 4.21,
      "boshuAvg30d": 1522.8,
      "heikinAvg30d": 3.992
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1509,
      "ouatsu": 1712.208,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1545.3,
      "heikinAvg30d": 4.062
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1532,
      "ouatsu": 1687.232,
      "saikou": 10,
      "heikin": 3.86,
      "boshuAvg30d": 1568.3,
      "heikinAvg30d": 4.062
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1550,
      "ouatsu": 1806.913,
      "saikou": 10,
      "heikin": 3.8,
      "boshuAvg30d": 1584.2,
      "heikinAvg30d": 4.08
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1551,
      "ouatsu": 1902.615,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1584.5,
      "heikinAvg30d": 4.331
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1551,
      "ouatsu": 2045.859,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1584.5,
      "heikinAvg30d": 4.591
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1574,
      "ouatsu": 1916.335,
      "saikou": 10,
      "heikin": 3.92,
      "boshuAvg30d": 1545.8,
      "heikinAvg30d": 4.521
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1578,
      "ouatsu": 1950.199,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1550.6,
      "heikinAvg30d": 4.351
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1586,
      "ouatsu": 1980.268,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1557.4,
      "heikinAvg30d": 4.194
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1586,
      "ouatsu": 1986.634,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1557.4,
      "heikinAvg30d": 4.212
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1583,
      "ouatsu": 2046.113,
      "saikou": 10,
      "heikin": 3.83,
      "boshuAvg30d": 1552.9,
      "heikinAvg30d": 4.155
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1582,
      "ouatsu": 2055.51,
      "saikou": 10,
      "heikin": 4.01,
      "boshuAvg30d": 1552.7,
      "heikinAvg30d": 4.219
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1575,
      "ouatsu": 2240.057,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1547.9,
      "heikinAvg30d": 4.003
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1575,
      "ouatsu": 2286.776,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1547.9,
      "heikinAvg30d": 4.012
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1575,
      "ouatsu": 2228.015,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1548.3,
      "heikinAvg30d": 4.203
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1569,
      "ouatsu": 2216.962,
      "saikou": 10,
      "heikin": 3.54,
      "boshuAvg30d": 1542.3,
      "heikinAvg30d": 4.445
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1564,
      "ouatsu": 2172.375,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1539.5,
      "heikinAvg30d": 4.673
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1557,
      "ouatsu": 2202.702,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1534.7,
      "heikinAvg30d": 4.826
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1528,
      "ouatsu": 2133.01,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1567.4,
      "heikinAvg30d": 4.815
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1528,
      "ouatsu": 2242.51,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1567.4,
      "heikinAvg30d": 5.105
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1528,
      "ouatsu": 2294.353,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1567.7,
      "heikinAvg30d": 5.136
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1526,
      "ouatsu": 2184.387,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1563.5,
      "heikinAvg30d": 5.361
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1522,
      "ouatsu": 2220.33,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1560.9,
      "heikinAvg30d": 5.345
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1518,
      "ouatsu": 2169.397,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1556.9,
      "heikinAvg30d": 5.308
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1510,
      "ouatsu": 2034.759,
      "saikou": 10,
      "heikin": 3.69,
      "boshuAvg30d": 1548.2,
      "heikinAvg30d": 5.381
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1510,
      "ouatsu": 2027.37,
      "saikou": 10,
      "heikin": 3.83,
      "boshuAvg30d": 1547.5,
      "heikinAvg30d": 5.175
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1511,
      "ouatsu": 2067.177,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1547.7,
      "heikinAvg30d": 4.958
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1510,
      "ouatsu": 2015.27,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1547.5,
      "heikinAvg30d": 4.703
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1505,
      "ouatsu": 1955.32,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1542.5,
      "heikinAvg30d": 4.347
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1501,
      "ouatsu": 1897.684,
      "saikou": 10,
      "heikin": 3.92,
      "boshuAvg30d": 1540.7,
      "heikinAvg30d": 4.065
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1494,
      "ouatsu": 1935.439,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1446.9,
      "heikinAvg30d": 3.746
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1497,
      "ouatsu": 1887.99,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1449.9,
      "heikinAvg30d": 4.369
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1498,
      "ouatsu": 1901.449,
      "saikou": 10,
      "heikin": 3.47,
      "boshuAvg30d": 1450.9,
      "heikinAvg30d": 4.067
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1491,
      "ouatsu": 1959.371,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1444.7,
      "heikinAvg30d": 3.791
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1484,
      "ouatsu": 1950.352,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1436.2,
      "heikinAvg30d": 3.885
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1476,
      "ouatsu": 1807.696,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1427.5,
      "heikinAvg30d": 3.888
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
        "ouatsu": 163.518,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.377
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 118.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.352
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 161.568,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.148
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 118.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.42
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 128.668,
        "saikou": 2.5,
        "heikin": 1,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.217
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 175.508,
        "saikou": 7.99,
        "heikin": 1.09,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.319
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 172.558,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.766
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 207.408,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 2.04
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 205.458,
        "saikou": 5.5,
        "heikin": 1.09,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 2.429
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 160.608,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 2.087
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 205.458,
        "saikou": 5.95,
        "heikin": 1.12,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 2.344
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 127.358,
        "saikou": 3.83,
        "heikin": 1.04,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.915
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 158.668,
        "saikou": 8.25,
        "heikin": 2.03,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.46
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 196.158,
        "saikou": 1.08,
        "heikin": 1.05,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.199
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 156.718,
        "saikou": 8.85,
        "heikin": 1.9,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.866
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 129.948,
        "saikou": 7.95,
        "heikin": 1.8,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.066
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 160.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.61
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 200.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.166
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 158.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.872
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 154.35,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.808
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 156.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.737
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 156.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.083
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 158.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.981
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 158.668,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.981
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 156.718,
        "saikou": 8,
        "heikin": 1.08,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.817
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 156.718,
        "saikou": 8,
        "heikin": 1.08,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.721
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 201.668,
        "saikou": 8,
        "heikin": 1.08,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.161
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 203.54,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.497
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 160.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.522
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 168.708,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.679
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 156.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 3.723
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 158.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 3.134
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 201.54,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.845
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 116.7,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 3.001
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 134.6,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 3.508
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 136.59,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 3.747
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 93.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 3.666
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 118.69,
        "saikou": 2.4,
        "heikin": 2.2,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 3.294
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 201.59,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 3.331
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 158.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 2.778
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 205.508,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 2.846
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 158.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.953
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 203.558,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.705
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 166.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.365
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 182.068,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.197
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 203.518,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.801
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 156.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.649
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 204.2,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.44
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 89,
        "ouatsu": 97.609,
        "saikou": 9.5,
        "heikin": 6.58,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 8.363
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 89,
        "ouatsu": 97.609,
        "saikou": 9.5,
        "heikin": 6.56,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 8.655
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 89,
        "ouatsu": 111.493,
        "saikou": 9.49,
        "heikin": 6.86,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 9.714
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 89,
        "ouatsu": 111.493,
        "saikou": 10,
        "heikin": 7.33,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 9.56
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 89,
        "ouatsu": 109.495,
        "saikou": 10,
        "heikin": 7.48,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 9.519
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 89,
        "ouatsu": 109.495,
        "saikou": 9.5,
        "heikin": 7.08,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 9.542
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 109.993,
        "saikou": 10,
        "heikin": 7.44,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 9.478
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 111.493,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 9.428
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 7.62,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 9.379
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 7.7,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 9.227
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 9.152
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 7.21,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 9.364
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 7.22,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 9.731
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 111.992,
        "saikou": 10,
        "heikin": 7.57,
        "boshuAvg30d": 184.3,
        "heikinAvg30d": 10.124
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 7.61,
        "boshuAvg30d": 189.6,
        "heikinAvg30d": 10.326
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 111.992,
        "saikou": 10,
        "heikin": 7.64,
        "boshuAvg30d": 192.9,
        "heikinAvg30d": 10.314
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 192.9,
        "heikinAvg30d": 10.433
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 111.992,
        "saikou": 10,
        "heikin": 7.56,
        "boshuAvg30d": 192.9,
        "heikinAvg30d": 10.202
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 215,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 7.62,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 9.498
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 217,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 7.69,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 9.628
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 220,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 8.01,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 9.444
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 221,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 7.98,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 9.529
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 221,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 9.452
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 221,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 9.635
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 222,
        "ouatsu": 109.727,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 9.59
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 222,
        "ouatsu": 111.692,
        "saikou": 10,
        "heikin": 8.58,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 9.555
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 222,
        "ouatsu": 115.488,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 9.016
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 219,
        "ouatsu": 115.488,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 9.102
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 217,
        "ouatsu": 115.488,
        "saikou": 10,
        "heikin": 7.86,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 9.825
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 212,
        "ouatsu": 115.488,
        "saikou": 10,
        "heikin": 7.84,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 9.886
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 111.488,
        "saikou": 10,
        "heikin": 7.55,
        "boshuAvg30d": 191.1,
        "heikinAvg30d": 9.924
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 99.488,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 191.1,
        "heikinAvg30d": 9.561
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 77.488,
        "saikou": 10,
        "heikin": 8.11,
        "boshuAvg30d": 191.1,
        "heikinAvg30d": 9.224
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 111.988,
        "saikou": 10,
        "heikin": 6.99,
        "boshuAvg30d": 189.3,
        "heikinAvg30d": 8.701
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 113.488,
        "saikou": 10,
        "heikin": 7.31,
        "boshuAvg30d": 187.3,
        "heikinAvg30d": 8.149
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 111.988,
        "saikou": 10,
        "heikin": 7.42,
        "boshuAvg30d": 185.3,
        "heikinAvg30d": 8.319
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 109.527,
        "saikou": 10,
        "heikin": 7.23,
        "boshuAvg30d": 183.6,
        "heikinAvg30d": 8.26
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 109.992,
        "saikou": 10,
        "heikin": 7.73,
        "boshuAvg30d": 183.6,
        "heikinAvg30d": 8.147
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 83.662,
        "saikou": 10,
        "heikin": 7.85,
        "boshuAvg30d": 183.6,
        "heikinAvg30d": 8.295
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 75.492,
        "saikou": 10,
        "heikin": 8.44,
        "boshuAvg30d": 183.3,
        "heikinAvg30d": 8.538
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 99.492,
        "saikou": 10,
        "heikin": 8.39,
        "boshuAvg30d": 182.6,
        "heikinAvg30d": 8.702
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 111.492,
        "saikou": 10,
        "heikin": 8.07,
        "boshuAvg30d": 183.3,
        "heikinAvg30d": 8.987
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 183,
        "ouatsu": 107.662,
        "saikou": 10,
        "heikin": 8.2,
        "boshuAvg30d": 93.3,
        "heikinAvg30d": 8.848
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 183,
        "ouatsu": 107.662,
        "saikou": 10,
        "heikin": 8.91,
        "boshuAvg30d": 93.3,
        "heikinAvg30d": 8.959
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 183,
        "ouatsu": 111.492,
        "saikou": 10,
        "heikin": 8.01,
        "boshuAvg30d": 93.3,
        "heikinAvg30d": 9.264
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 182,
        "ouatsu": 111.492,
        "saikou": 10,
        "heikin": 8.1,
        "boshuAvg30d": 92.3,
        "heikinAvg30d": 8.713
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 181,
        "ouatsu": 111.492,
        "saikou": 10,
        "heikin": 8.01,
        "boshuAvg30d": 91.3,
        "heikinAvg30d": 8.754
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 180,
        "ouatsu": 109.992,
        "saikou": 10,
        "heikin": 8.13,
        "boshuAvg30d": 90.3,
        "heikinAvg30d": 9.127
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 539,
        "ouatsu": 460.483,
        "saikou": 9.47,
        "heikin": 3.78,
        "boshuAvg30d": 547.8,
        "heikinAvg30d": 4.018
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 539,
        "ouatsu": 409.898,
        "saikou": 9.47,
        "heikin": 4.06,
        "boshuAvg30d": 547.8,
        "heikinAvg30d": 3.826
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 539,
        "ouatsu": 466.983,
        "saikou": 9.47,
        "heikin": 3.86,
        "boshuAvg30d": 547.8,
        "heikinAvg30d": 3.901
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 539,
        "ouatsu": 474.85,
        "saikou": 9.47,
        "heikin": 3.66,
        "boshuAvg30d": 547.0,
        "heikinAvg30d": 3.514
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 537,
        "ouatsu": 432.878,
        "saikou": 9.47,
        "heikin": 3.75,
        "boshuAvg30d": 545.0,
        "heikinAvg30d": 3.45
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 537,
        "ouatsu": 432.878,
        "saikou": 9.47,
        "heikin": 3.69,
        "boshuAvg30d": 545.0,
        "heikinAvg30d": 3.534
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 536,
        "ouatsu": 444.85,
        "saikou": 9.47,
        "heikin": 3.72,
        "boshuAvg30d": 543.3,
        "heikinAvg30d": 3.394
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 537,
        "ouatsu": 441.41,
        "saikou": 9.47,
        "heikin": 3.77,
        "boshuAvg30d": 544.3,
        "heikinAvg30d": 3.493
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 538,
        "ouatsu": 442.93,
        "saikou": 9.47,
        "heikin": 3.9,
        "boshuAvg30d": 545.3,
        "heikinAvg30d": 3.507
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 538,
        "ouatsu": 444.8,
        "saikou": 9.47,
        "heikin": 4.03,
        "boshuAvg30d": 546.0,
        "heikinAvg30d": 3.448
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 538,
        "ouatsu": 375.559,
        "saikou": 9.47,
        "heikin": 4.4,
        "boshuAvg30d": 545.6,
        "heikinAvg30d": 3.586
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 538,
        "ouatsu": 377.165,
        "saikou": 9.47,
        "heikin": 4.84,
        "boshuAvg30d": 545.6,
        "heikinAvg30d": 3.522
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 559,
        "ouatsu": 407.827,
        "saikou": 9.47,
        "heikin": 4.92,
        "boshuAvg30d": 566.6,
        "heikinAvg30d": 4.045
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 567,
        "ouatsu": 437.827,
        "saikou": 9.49,
        "heikin": 4.7,
        "boshuAvg30d": 574.6,
        "heikinAvg30d": 4.231
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 572,
        "ouatsu": 411.246,
        "saikou": 9.49,
        "heikin": 5.11,
        "boshuAvg30d": 581.1,
        "heikinAvg30d": 4.207
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 577,
        "ouatsu": 431.737,
        "saikou": 9.5,
        "heikin": 5.14,
        "boshuAvg30d": 586.2,
        "heikinAvg30d": 4.202
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 577,
        "ouatsu": 515.938,
        "saikou": 9.5,
        "heikin": 4.76,
        "boshuAvg30d": 586.2,
        "heikinAvg30d": 4.612
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 577,
        "ouatsu": 632.281,
        "saikou": 10,
        "heikin": 4.09,
        "boshuAvg30d": 586.2,
        "heikinAvg30d": 4.768
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 568,
        "ouatsu": 602.742,
        "saikou": 10,
        "heikin": 4.6,
        "boshuAvg30d": 576.5,
        "heikinAvg30d": 4.732
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 568,
        "ouatsu": 621.181,
        "saikou": 10,
        "heikin": 4.02,
        "boshuAvg30d": 576.5,
        "heikinAvg30d": 4.444
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 568,
        "ouatsu": 604.073,
        "saikou": 10,
        "heikin": 3.81,
        "boshuAvg30d": 576.0,
        "heikinAvg30d": 4.222
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 567,
        "ouatsu": 638.673,
        "saikou": 10,
        "heikin": 3.75,
        "boshuAvg30d": 575.0,
        "heikinAvg30d": 4.204
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 564,
        "ouatsu": 654.011,
        "saikou": 10,
        "heikin": 3.93,
        "boshuAvg30d": 572.0,
        "heikinAvg30d": 4.339
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 564,
        "ouatsu": 654.011,
        "saikou": 10,
        "heikin": 3.95,
        "boshuAvg30d": 572.0,
        "heikinAvg30d": 4.336
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 563,
        "ouatsu": 680.777,
        "saikou": 10,
        "heikin": 3.67,
        "boshuAvg30d": 571.0,
        "heikinAvg30d": 4.117
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 563,
        "ouatsu": 678.877,
        "saikou": 10,
        "heikin": 3.51,
        "boshuAvg30d": 571.0,
        "heikinAvg30d": 4.193
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 563,
        "ouatsu": 680.657,
        "saikou": 10,
        "heikin": 3.77,
        "boshuAvg30d": 571.5,
        "heikinAvg30d": 4.2
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 562,
        "ouatsu": 680.657,
        "saikou": 10,
        "heikin": 3.82,
        "boshuAvg30d": 570.5,
        "heikinAvg30d": 4.276
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 561,
        "ouatsu": 678.7,
        "saikou": 10,
        "heikin": 3.83,
        "boshuAvg30d": 570.2,
        "heikinAvg30d": 4.528
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 561,
        "ouatsu": 644.1,
        "saikou": 10,
        "heikin": 4.11,
        "boshuAvg30d": 570.2,
        "heikinAvg30d": 4.589
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 560,
        "ouatsu": 613.377,
        "saikou": 10,
        "heikin": 4.11,
        "boshuAvg30d": 569.2,
        "heikinAvg30d": 4.592
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 560,
        "ouatsu": 682.696,
        "saikou": 10,
        "heikin": 3.62,
        "boshuAvg30d": 569.2,
        "heikinAvg30d": 4.897
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 560,
        "ouatsu": 682.696,
        "saikou": 10,
        "heikin": 3.64,
        "boshuAvg30d": 568.8,
        "heikinAvg30d": 5.135
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 560,
        "ouatsu": 682.696,
        "saikou": 10,
        "heikin": 3.95,
        "boshuAvg30d": 568.8,
        "heikinAvg30d": 5.208
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 560,
        "ouatsu": 680.896,
        "saikou": 10,
        "heikin": 3.96,
        "boshuAvg30d": 568.8,
        "heikinAvg30d": 5.283
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 560,
        "ouatsu": 658.558,
        "saikou": 9.49,
        "heikin": 3.89,
        "boshuAvg30d": 568.8,
        "heikinAvg30d": 5.282
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 562,
        "ouatsu": 667.164,
        "saikou": 9.49,
        "heikin": 3.63,
        "boshuAvg30d": 571.5,
        "heikinAvg30d": 5.138
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 562,
        "ouatsu": 650.303,
        "saikou": 9.49,
        "heikin": 3.94,
        "boshuAvg30d": 570.8,
        "heikinAvg30d": 4.906
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 563,
        "ouatsu": 586.624,
        "saikou": 9.49,
        "heikin": 3.9,
        "boshuAvg30d": 571.0,
        "heikinAvg30d": 4.834
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 563,
        "ouatsu": 541.592,
        "saikou": 9.49,
        "heikin": 4.58,
        "boshuAvg30d": 571.0,
        "heikinAvg30d": 4.614
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 561,
        "ouatsu": 484.809,
        "saikou": 9.49,
        "heikin": 4.33,
        "boshuAvg30d": 569.8,
        "heikinAvg30d": 4.108
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 561,
        "ouatsu": 488.064,
        "saikou": 9.47,
        "heikin": 4.69,
        "boshuAvg30d": 569.8,
        "heikinAvg30d": 4.084
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 560,
        "ouatsu": 533.76,
        "saikou": 9.49,
        "heikin": 3.86,
        "boshuAvg30d": 569.5,
        "heikinAvg30d": 3.736
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 560,
        "ouatsu": 531.852,
        "saikou": 9.49,
        "heikin": 3.96,
        "boshuAvg30d": 569.5,
        "heikinAvg30d": 4.697
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 560,
        "ouatsu": 531.852,
        "saikou": 9.49,
        "heikin": 3.95,
        "boshuAvg30d": 569.5,
        "heikinAvg30d": 4.239
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 558,
        "ouatsu": 537.91,
        "saikou": 9.49,
        "heikin": 3.84,
        "boshuAvg30d": 567.5,
        "heikinAvg30d": 3.964
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 556,
        "ouatsu": 571.022,
        "saikou": 9.49,
        "heikin": 3.79,
        "boshuAvg30d": 564.8,
        "heikinAvg30d": 4.29
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 555,
        "ouatsu": 571.416,
        "saikou": 9.49,
        "heikin": 3.77,
        "boshuAvg30d": 563.0,
        "heikinAvg30d": 4.358
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 117,
        "ouatsu": 223.582,
        "saikou": 2.68,
        "heikin": 1.44,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.56
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 117,
        "ouatsu": 287.975,
        "saikou": 4.5,
        "heikin": 2.07,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.28
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 117,
        "ouatsu": 325.612,
        "saikou": 4.5,
        "heikin": 2.48,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.122
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 117,
        "ouatsu": 325.612,
        "saikou": 4.2,
        "heikin": 2.49,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.344
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 116,
        "ouatsu": 307.754,
        "saikou": 4.5,
        "heikin": 2.47,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 4.797
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 116,
        "ouatsu": 311.805,
        "saikou": 4.68,
        "heikin": 2.52,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 4.891
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 116,
        "ouatsu": 335.354,
        "saikou": 4.88,
        "heikin": 2.84,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 4.567
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 116,
        "ouatsu": 331.554,
        "saikou": 4.88,
        "heikin": 2.74,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 4.534
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 116,
        "ouatsu": 335.354,
        "saikou": 4.88,
        "heikin": 2.93,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 4.573
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 116,
        "ouatsu": 356.439,
        "saikou": 4.69,
        "heikin": 2.58,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 4.489
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 116,
        "ouatsu": 377.347,
        "saikou": 4.88,
        "heikin": 2.9,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 4.248
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 116,
        "ouatsu": 375.847,
        "saikou": 4.88,
        "heikin": 2.87,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 4.536
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 126,
        "ouatsu": 398.164,
        "saikou": 4.99,
        "heikin": 3.15,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 4.887
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 390.28,
        "saikou": 3.59,
        "heikin": 1.57,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.944
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 441.475,
        "saikou": 3,
        "heikin": 0.87,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 5.13
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 498.583,
        "saikou": 1.02,
        "heikin": 0.75,
        "boshuAvg30d": 162.0,
        "heikinAvg30d": 5.266
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 480.304,
        "saikou": 3.94,
        "heikin": 1.19,
        "boshuAvg30d": 162.0,
        "heikinAvg30d": 5.554
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 441.219,
        "saikou": 4.99,
        "heikin": 2.54,
        "boshuAvg30d": 162.0,
        "heikinAvg30d": 5.57
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 138,
        "ouatsu": 386.73,
        "saikou": 1.85,
        "heikin": 1.74,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 5.889
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 138,
        "ouatsu": 406.473,
        "saikou": 1.63,
        "heikin": 1.55,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 5.853
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 139,
        "ouatsu": 420.789,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 5.806
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 138,
        "ouatsu": 413.785,
        "saikou": 1.66,
        "heikin": 1.57,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 5.872
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 137,
        "ouatsu": 422.179,
        "saikou": 6,
        "heikin": 2.67,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 5.488
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 136,
        "ouatsu": 422.179,
        "saikou": 6,
        "heikin": 2.66,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 5.491
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 133,
        "ouatsu": 474.532,
        "saikou": 5.88,
        "heikin": 2.45,
        "boshuAvg30d": 160.2,
        "heikinAvg30d": 5.48
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 133,
        "ouatsu": 476.53,
        "saikou": 5.88,
        "heikin": 2.66,
        "boshuAvg30d": 160.2,
        "heikinAvg30d": 5.504
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 133,
        "ouatsu": 511.861,
        "saikou": 4.89,
        "heikin": 2.35,
        "boshuAvg30d": 160.2,
        "heikinAvg30d": 5.808
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 511.861,
        "saikou": 4.88,
        "heikin": 2.26,
        "boshuAvg30d": 160.2,
        "heikinAvg30d": 5.904
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 132,
        "ouatsu": 511.861,
        "saikou": 5.88,
        "heikin": 3.04,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 5.865
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 132,
        "ouatsu": 509.863,
        "saikou": 5,
        "heikin": 2.98,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 5.778
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 131,
        "ouatsu": 501.979,
        "saikou": 4.59,
        "heikin": 2.16,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 5.739
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 131,
        "ouatsu": 501.979,
        "saikou": 5,
        "heikin": 3.03,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 5.567
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 131,
        "ouatsu": 507.873,
        "saikou": 4.99,
        "heikin": 2.7,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 5.388
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 131,
        "ouatsu": 501.451,
        "saikou": 4.8,
        "heikin": 2.2,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 5.465
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 131,
        "ouatsu": 494.551,
        "saikou": 4.68,
        "heikin": 2.05,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 4.985
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 491.052,
        "saikou": 4.39,
        "heikin": 1.85,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 4.698
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 129,
        "ouatsu": 482.67,
        "saikou": 4.99,
        "heikin": 2.39,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 5.158
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 129,
        "ouatsu": 482.67,
        "saikou": 4.99,
        "heikin": 2.21,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 4.672
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 129,
        "ouatsu": 497.863,
        "saikou": 4.99,
        "heikin": 2.18,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 4.312
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 129,
        "ouatsu": 490.563,
        "saikou": 4.23,
        "heikin": 1.25,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 4.265
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 453.548,
        "saikou": 4.99,
        "heikin": 2.54,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 3.834
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 420.175,
        "saikou": 3.9,
        "heikin": 2.1,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 3.79
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 129,
        "ouatsu": 347.895,
        "saikou": 4.39,
        "heikin": 2.56,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 3.877
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 130,
        "ouatsu": 286.351,
        "saikou": 4.38,
        "heikin": 2.61,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 4.593
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 130,
        "ouatsu": 264.542,
        "saikou": 4.2,
        "heikin": 2.74,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 4.493
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 129,
        "ouatsu": 264.542,
        "saikou": 4.5,
        "heikin": 2.81,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 4.554
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 128,
        "ouatsu": 262.682,
        "saikou": 4.68,
        "heikin": 2.82,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 4.709
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 125,
        "ouatsu": 261.182,
        "saikou": 4.2,
        "heikin": 2.83,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 4.893
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.692
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 12.326,
        "saikou": 2.95,
        "heikin": 1.89,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.677
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 9.2,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.552
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.13,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.751
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.65,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.304
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.06
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 2.68,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.582
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 3.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.561
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 3.05,
        "heikin": 2.59,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.511
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.16,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.99
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 4.4,
        "heikin": 3.18,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.252
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 4.55,
        "heikin": 3.25,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.532
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 4.95,
        "heikin": 3.45,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 3.927
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 2.94,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.695
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 2.94,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 4.167
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.8,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.047
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 4.927
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 5.788
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.409
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.118
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.607
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.672
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.98,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.17
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.98,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.292
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.587
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 5.95,
        "heikin": 5.95,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.012
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.566
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.449
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.98,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.573
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.773
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 5.188
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.8,
        "heikin": 5.8,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 5.613
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.75,
        "heikin": 4.75,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.238
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.5,
        "heikin": 4.5,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.383
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.5,
        "heikin": 4.5,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.26
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.805
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.6,
        "heikin": 4.29,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.366
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.914
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.85,
        "heikin": 4.52,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.818
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.8,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.45
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.84,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.496
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 3,
        "heikin": 2.75,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.227
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.53,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.082
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.53,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.068
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.48,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.784
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.48,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 4.139
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.48,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 4.159
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 24.702,
        "saikou": 2.5,
        "heikin": 0.72,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 4.068
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 93.505,
        "saikou": 2.9,
        "heikin": 2.18,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 1.941
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 93.505,
        "saikou": 3,
        "heikin": 2.31,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.554
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 109.181,
        "saikou": 3,
        "heikin": 2.04,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.382
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 132.151,
        "saikou": 3,
        "heikin": 1.69,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.349
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 146.764,
        "saikou": 2.97,
        "heikin": 1.5,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.448
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 122.819,
        "saikou": 3,
        "heikin": 1.74,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.631
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 114.997,
        "saikou": 4,
        "heikin": 2.13,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.33
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 114.997,
        "saikou": 4,
        "heikin": 2.12,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.666
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 99.321,
        "saikou": 4,
        "heikin": 2.4,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.147
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 114.997,
        "saikou": 4,
        "heikin": 2.13,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.069
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 84.321,
        "saikou": 4,
        "heikin": 2.38,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.297
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 99.321,
        "saikou": 4,
        "heikin": 2.36,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.012
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 95.454,
        "saikou": 3,
        "heikin": 2.35,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 4.35
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 95.454,
        "saikou": 3,
        "heikin": 2.36,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 4.316
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 95.454,
        "saikou": 3,
        "heikin": 2.32,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 4.184
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 95.454,
        "saikou": 2.95,
        "heikin": 2.15,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 4.534
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 99.321,
        "saikou": 4,
        "heikin": 2.34,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 5.379
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 144.584,
        "saikou": 4,
        "heikin": 1.41,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 5.774
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 99.321,
        "saikou": 1.92,
        "heikin": 1.9,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.503
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 99.321,
        "saikou": 1.92,
        "heikin": 1.82,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.469
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 99.321,
        "saikou": 1.92,
        "heikin": 1.88,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.3
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 97.471,
        "saikou": 1.92,
        "heikin": 1.9,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.201
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 97.471,
        "saikou": 6,
        "heikin": 3.17,
        "boshuAvg30d": 157.9,
        "heikinAvg30d": 5.029
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 99.321,
        "saikou": 6,
        "heikin": 3.17,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.114
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 145.081,
        "saikou": 5.5,
        "heikin": 1.8,
        "boshuAvg30d": 157.9,
        "heikinAvg30d": 5.956
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 162.845,
        "saikou": 6,
        "heikin": 1.81,
        "boshuAvg30d": 157.9,
        "heikinAvg30d": 5.092
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 97.968,
        "saikou": 4,
        "heikin": 2.19,
        "boshuAvg30d": 157.9,
        "heikinAvg30d": 5.135
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 101.261,
        "saikou": 4,
        "heikin": 2.2,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 5.225
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 146.524,
        "saikou": 6.99,
        "heikin": 2.52,
        "boshuAvg30d": 157.9,
        "heikinAvg30d": 5.134
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 187.73,
        "saikou": 5.5,
        "heikin": 1.48,
        "boshuAvg30d": 157.9,
        "heikinAvg30d": 4.881
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 194.713,
        "saikou": 3,
        "heikin": 1.05,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.672
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 190.853,
        "saikou": 5,
        "heikin": 1.54,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.658
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 142.657,
        "saikou": 3,
        "heikin": 1.34,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.595
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 97.394,
        "saikou": 3,
        "heikin": 2.08,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.864
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 142.657,
        "saikou": 3,
        "heikin": 1.34,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.284
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 97.394,
        "saikou": 2.95,
        "heikin": 2.01,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.219
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 2.95,
        "heikin": 2.01,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 4.201
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 2.95,
        "heikin": 2.01,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 3.946
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 95.951,
        "saikou": 5,
        "heikin": 2.2,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 3.886
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 95.951,
        "saikou": 3,
        "heikin": 2.33,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 3.806
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 97.394,
        "saikou": 3,
        "heikin": 2.31,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 3.456
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 95.544,
        "saikou": 3,
        "heikin": 2.31,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 3.555
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 95.544,
        "saikou": 3,
        "heikin": 2.31,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.376
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 154.779,
        "saikou": 3,
        "heikin": 1.59,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.557
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 154.779,
        "saikou": 3,
        "heikin": 1.59,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.24
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 174.177,
        "saikou": 3,
        "heikin": 1.45,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.495
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 178.722,
        "saikou": 3,
        "heikin": 1.42,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.004
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 95.544,
        "saikou": 2.95,
        "heikin": 2.3,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 4.732
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 156.403,
        "saikou": 4.95,
        "heikin": 3.87,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.91
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 156.403,
        "saikou": 5.64,
        "heikin": 4.19,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.217
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 156.403,
        "saikou": 5.49,
        "heikin": 4.13,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.176
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 160.193,
        "saikou": 4.95,
        "heikin": 3.78,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.018
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 160.193,
        "saikou": 4.83,
        "heikin": 3.77,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.003
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 160.193,
        "saikou": 4.95,
        "heikin": 3.75,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.1
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 177.052,
        "saikou": 4.95,
        "heikin": 3.8,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.081
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 177.052,
        "saikou": 4.95,
        "heikin": 3.72,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.163
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 177.052,
        "saikou": 5.06,
        "heikin": 3.85,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.078
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 177.052,
        "saikou": 5.49,
        "heikin": 4.03,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.192
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 177.052,
        "saikou": 5.64,
        "heikin": 4.17,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.409
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 167.158,
        "saikou": 5.64,
        "heikin": 4.27,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.29
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 167.158,
        "saikou": 5.83,
        "heikin": 4.4,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 3.646
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 167.158,
        "saikou": 5.78,
        "heikin": 4.43,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 3.091
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 167.158,
        "saikou": 5.78,
        "heikin": 4.43,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.951
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 167.158,
        "saikou": 5.64,
        "heikin": 4.52,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.878
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 183.211,
        "saikou": 3,
        "heikin": 1.87,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.051
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 170.484,
        "saikou": 5.67,
        "heikin": 4.4,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.978
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 168.543,
        "saikou": 6.75,
        "heikin": 5.58,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.713
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 168.543,
        "saikou": 7.06,
        "heikin": 5.82,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.268
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 150.57,
        "saikou": 3.2,
        "heikin": 2.81,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.043
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 145.031,
        "saikou": 4.7,
        "heikin": 2.63,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.97
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 178.834,
        "saikou": 6.38,
        "heikin": 3.79,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.926
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 186.339,
        "saikou": 7.45,
        "heikin": 6.15,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.972
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 218.073,
        "saikou": 1.64,
        "heikin": 1.61,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.273
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 237.965,
        "saikou": 1.56,
        "heikin": 1.44,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.171
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 204.27,
        "saikou": 1.64,
        "heikin": 1.61,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.846
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 191.904,
        "saikou": 2.29,
        "heikin": 1.28,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.433
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 195.393,
        "saikou": 2.29,
        "heikin": 1.15,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.59
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 197.304,
        "saikou": 1.56,
        "heikin": 0.7,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 4.149
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 200.277,
        "saikou": 2.73,
        "heikin": 2.32,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.834
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 200.277,
        "saikou": 4,
        "heikin": 3.09,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 5.976
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 190.59,
        "saikou": 4,
        "heikin": 1.25,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 6.079
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 188.608,
        "saikou": 4,
        "heikin": 1.23,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 6.926
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 178.618,
        "saikou": 4,
        "heikin": 1.2,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.665
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 198.295,
        "saikou": 5.89,
        "heikin": 4.23,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.608
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 190.091,
        "saikou": 6.14,
        "heikin": 4.46,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.855
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 192.109,
        "saikou": 5.83,
        "heikin": 4.28,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.938
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 198.287,
        "saikou": 5,
        "heikin": 2.59,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.624
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 247.775,
        "saikou": 4,
        "heikin": 2.23,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.193
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 214.08,
        "saikou": 4,
        "heikin": 2.21,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 6.897
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 214.08,
        "saikou": 5.48,
        "heikin": 3.83,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.034
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 200.277,
        "saikou": 5.06,
        "heikin": 3.61,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 5.546
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 179.885,
        "saikou": 4.69,
        "heikin": 3.39,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 5.072
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 193.997,
        "saikou": 4.69,
        "heikin": 3.27,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 4.376
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 193.997,
        "saikou": 3.65,
        "heikin": 2.72,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.965
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 193.997,
        "saikou": 3.65,
        "heikin": 1.87,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.891
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 192.197,
        "saikou": 2.13,
        "heikin": 1.46,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 3.116
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 148.903,
        "saikou": 2.6,
        "heikin": 0.97,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.764
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 96.403,
        "saikou": 2.95,
        "heikin": 1.41,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.775
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 96.403,
        "saikou": 2.6,
        "heikin": 1.36,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.787
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 96.403,
        "saikou": 2.6,
        "heikin": 1.36,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.748
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 96.403,
        "saikou": 2.95,
        "heikin": 1.39,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.706
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 96.403,
        "saikou": 2.6,
        "heikin": 1.37,
        "boshuAvg30d": 39.3,
        "heikinAvg30d": 0.72
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 62.403,
        "saikou": 4.6,
        "heikin": 1.98,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.871
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 50.86,
        "saikou": 2.75,
        "heikin": 1.7,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.828
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 50.86,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.852
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 62.403,
        "saikou": 3.75,
        "heikin": 1.91,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 62.403,
        "saikou": 3.75,
        "heikin": 1.93,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.881
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 62.403,
        "saikou": 3.75,
        "heikin": 1.91,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.857
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 62.403,
        "saikou": 3.75,
        "heikin": 1.92,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.81
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 114.903,
        "saikou": 3.45,
        "heikin": 1.19,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.798
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 114.903,
        "saikou": 3.2,
        "heikin": 1.13,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.808
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 181.403,
        "saikou": 2.5,
        "heikin": 0.95,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.73
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 2.5,
        "heikin": 0.82,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.682
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 2.5,
        "heikin": 0.84,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.725
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 188.403,
        "saikou": 2.8,
        "heikin": 0.62,
        "boshuAvg30d": 46.3,
        "heikinAvg30d": 1.06
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 188.403,
        "saikou": 1.7,
        "heikin": 0.63,
        "boshuAvg30d": 46.3,
        "heikinAvg30d": 1.053
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 188.403,
        "saikou": 1.7,
        "heikin": 0.63,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.013
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 188.403,
        "saikou": 1.7,
        "heikin": 0.63,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.026
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.059
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.44,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.081
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.129
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.061
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.985
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.913
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.967
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.55,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.931
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.919
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.876
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.93
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.863
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.845
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.821
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.823
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.833
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.823
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.8
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.722
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.76
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.731
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 215.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.707
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 215.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.709
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 154.903,
        "saikou": 2.75,
        "heikin": 0.99,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.727
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 169.707,
        "saikou": 4.99,
        "heikin": 4.15,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 4.136
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 138.629,
        "saikou": 5.86,
        "heikin": 4.45,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 4.076
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 184.395,
        "saikou": 4.67,
        "heikin": 3.89,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 3.923
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 182.215,
        "saikou": 4.43,
        "heikin": 3.71,
        "boshuAvg30d": 165.2,
        "heikinAvg30d": 4.137
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 180.102,
        "saikou": 3.39,
        "heikin": 2.99,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 4.003
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 181.05,
        "saikou": 3.4,
        "heikin": 2.99,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 4.064
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 198.35,
        "saikou": 4.44,
        "heikin": 3.72,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.938
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 194.522,
        "saikou": 4.56,
        "heikin": 3.81,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 4.049
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 198.35,
        "saikou": 4.78,
        "heikin": 3.94,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 3.992
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 196.366,
        "saikou": 5.36,
        "heikin": 4.33,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 3.963
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 249.35,
        "saikou": 5.81,
        "heikin": 3.9,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 3.93
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 247.374,
        "saikou": 5.84,
        "heikin": 3.91,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 3.662
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 196.374,
        "saikou": 6.21,
        "heikin": 4.83,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 3.504
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 194.508,
        "saikou": 6.22,
        "heikin": 4.91,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 3.494
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 182.858,
        "saikou": 6.47,
        "heikin": 5.1,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 3.758
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 186.71,
        "saikou": 6.74,
        "heikin": 5.34,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 3.744
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 191.36,
        "saikou": 6.98,
        "heikin": 5.24,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 3.938
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 186.71,
        "saikou": 7.85,
        "heikin": 6.34,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 4.64
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 193.862,
        "saikou": 8.37,
        "heikin": 6.12,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 4.561
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 193.862,
        "saikou": 8.14,
        "heikin": 5.99,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.475
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 242.328,
        "saikou": 7.73,
        "heikin": 5.77,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 4.357
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 228.487,
        "saikou": 7.93,
        "heikin": 6.07,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 4.333
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 228.481,
        "saikou": 8.13,
        "heikin": 6.28,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 4.322
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 228.523,
        "saikou": 7.82,
        "heikin": 6.07,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 4.492
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 265.818,
        "saikou": 6.7,
        "heikin": 5.76,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 3.938
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 272.818,
        "saikou": 6.6,
        "heikin": 5.68,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 4.146
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 226.772,
        "saikou": 8.17,
        "heikin": 6.71,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 4.438
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 222.92,
        "saikou": 8.73,
        "heikin": 6.68,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 5.089
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 174.42,
        "saikou": 9.05,
        "heikin": 7.1,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 5.767
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 190.178,
        "saikou": 9.36,
        "heikin": 7.07,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 6.453
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 196.127,
        "saikou": 8.35,
        "heikin": 7.93,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 5.852
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 250.178,
        "saikou": 8.94,
        "heikin": 6.38,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 6.835
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 333.178,
        "saikou": 5.34,
        "heikin": 4.89,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 6.912
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 327.219,
        "saikou": 5.86,
        "heikin": 5.31,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 7.33
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 317.189,
        "saikou": 4.88,
        "heikin": 4.51,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 7.008
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 317.189,
        "saikou": 8.33,
        "heikin": 4.5,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 7.262
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 235.892,
        "saikou": 8.67,
        "heikin": 5.2,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 7.415
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 217.881,
        "saikou": 8.1,
        "heikin": 5.18,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 7.169
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 244.869,
        "saikou": 7.8,
        "heikin": 5.09,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 6.473
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 246.858,
        "saikou": 7.51,
        "heikin": 4.77,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 5.865
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 242.158,
        "saikou": 6.9,
        "heikin": 4.47,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 5.181
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 251.308,
        "saikou": 6.69,
        "heikin": 4.26,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 4.383
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 254.412,
        "saikou": 5.66,
        "heikin": 3.59,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 3.995
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 255.412,
        "saikou": 5.84,
        "heikin": 3.72,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 5.04
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 257.388,
        "saikou": 5.85,
        "heikin": 3.74,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 4.792
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 254.404,
        "saikou": 5.34,
        "heikin": 3.44,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 4.122
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 256.388,
        "saikou": 5.86,
        "heikin": 3.76,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 4.033
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 193.56,
        "saikou": 4.47,
        "heikin": 3.93,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 3.469
      }
    ]
  }
};
