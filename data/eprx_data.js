// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/11〜2026/09/09）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-10",
  "fetchedAt": "2026-09-10",
  "avgWindowLabel": "過去30日平均（2026/08/11〜2026/09/09）",
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
      "boshu": 1362,
      "ouatsu": 1519.459,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1439.4,
      "heikinAvg30d": 3.312
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1362,
      "ouatsu": 1573.245,
      "saikou": 10,
      "heikin": 2.26,
      "boshuAvg30d": 1439.4,
      "heikinAvg30d": 3.322
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1362,
      "ouatsu": 1672.192,
      "saikou": 10,
      "heikin": 2.38,
      "boshuAvg30d": 1439.4,
      "heikinAvg30d": 3.42
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1362,
      "ouatsu": 1602.625,
      "saikou": 10,
      "heikin": 2.53,
      "boshuAvg30d": 1438.0,
      "heikinAvg30d": 3.344
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1357,
      "ouatsu": 1599.496,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1433.0,
      "heikinAvg30d": 3.354
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1356,
      "ouatsu": 1584.441,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1431.3,
      "heikinAvg30d": 3.448
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1356,
      "ouatsu": 1650.779,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1455.7,
      "heikinAvg30d": 3.428
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1357,
      "ouatsu": 1665.103,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1456.7,
      "heikinAvg30d": 3.507
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1360,
      "ouatsu": 1652.711,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1460.4,
      "heikinAvg30d": 3.524
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1360,
      "ouatsu": 1681.194,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1461.1,
      "heikinAvg30d": 3.452
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1360,
      "ouatsu": 1635.895,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1461.1,
      "heikinAvg30d": 3.538
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1360,
      "ouatsu": 1649.05,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1461.1,
      "heikinAvg30d": 3.45
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1426,
      "ouatsu": 1719.786,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1525.0,
      "heikinAvg30d": 3.998
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1447,
      "ouatsu": 1734.697,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1547.4,
      "heikinAvg30d": 4.022
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1470,
      "ouatsu": 1712.426,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1570.4,
      "heikinAvg30d": 4.044
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1488,
      "ouatsu": 1732.386,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1586.0,
      "heikinAvg30d": 4.054
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1489,
      "ouatsu": 1680.898,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1586.3,
      "heikinAvg30d": 4.283
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1489,
      "ouatsu": 1665.015,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1586.3,
      "heikinAvg30d": 4.55
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1512,
      "ouatsu": 1665.074,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1547.7,
      "heikinAvg30d": 4.475
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1516,
      "ouatsu": 1651.343,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1552.4,
      "heikinAvg30d": 4.305
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1524,
      "ouatsu": 1549.198,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1559.3,
      "heikinAvg30d": 4.153
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1524,
      "ouatsu": 1507.529,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1559.3,
      "heikinAvg30d": 4.169
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1521,
      "ouatsu": 1559.667,
      "saikou": 10,
      "heikin": 3.67,
      "boshuAvg30d": 1554.9,
      "heikinAvg30d": 4.127
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1520,
      "ouatsu": 1681.465,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1554.6,
      "heikinAvg30d": 4.192
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1513,
      "ouatsu": 1620.588,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1549.7,
      "heikinAvg30d": 3.977
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1513,
      "ouatsu": 1665.617,
      "saikou": 10,
      "heikin": 2.82,
      "boshuAvg30d": 1549.7,
      "heikinAvg30d": 3.98
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1513,
      "ouatsu": 1705.941,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1550.1,
      "heikinAvg30d": 4.173
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1507,
      "ouatsu": 1680.465,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1544.1,
      "heikinAvg30d": 4.424
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1502,
      "ouatsu": 1753.241,
      "saikou": 10,
      "heikin": 3.72,
      "boshuAvg30d": 1541.2,
      "heikinAvg30d": 4.653
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1495,
      "ouatsu": 1887.424,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1536.3,
      "heikinAvg30d": 4.777
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1466,
      "ouatsu": 1967.484,
      "saikou": 10,
      "heikin": 3.64,
      "boshuAvg30d": 1568.9,
      "heikinAvg30d": 4.758
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1466,
      "ouatsu": 1944.036,
      "saikou": 10,
      "heikin": 3.94,
      "boshuAvg30d": 1568.9,
      "heikinAvg30d": 5.053
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1466,
      "ouatsu": 2017.496,
      "saikou": 10,
      "heikin": 3.97,
      "boshuAvg30d": 1569.2,
      "heikinAvg30d": 5.077
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1464,
      "ouatsu": 1914.249,
      "saikou": 10,
      "heikin": 3.96,
      "boshuAvg30d": 1565.1,
      "heikinAvg30d": 5.308
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1460,
      "ouatsu": 1908.126,
      "saikou": 10,
      "heikin": 4.12,
      "boshuAvg30d": 1562.5,
      "heikinAvg30d": 5.287
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1456,
      "ouatsu": 1946.96,
      "saikou": 10,
      "heikin": 3.86,
      "boshuAvg30d": 1558.5,
      "heikinAvg30d": 5.263
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1448,
      "ouatsu": 1806.451,
      "saikou": 10,
      "heikin": 4.03,
      "boshuAvg30d": 1549.8,
      "heikinAvg30d": 5.341
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1448,
      "ouatsu": 1949.746,
      "saikou": 9.49,
      "heikin": 3.53,
      "boshuAvg30d": 1549.1,
      "heikinAvg30d": 5.144
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1449,
      "ouatsu": 1828.161,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1549.4,
      "heikinAvg30d": 4.919
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1448,
      "ouatsu": 1944.877,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1549.1,
      "heikinAvg30d": 4.669
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1443,
      "ouatsu": 1763.128,
      "saikou": 10,
      "heikin": 3.71,
      "boshuAvg30d": 1544.1,
      "heikinAvg30d": 4.325
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1439,
      "ouatsu": 1834.788,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1542.2,
      "heikinAvg30d": 4.06
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1432,
      "ouatsu": 1785.345,
      "saikou": 10,
      "heikin": 3.85,
      "boshuAvg30d": 1451.4,
      "heikinAvg30d": 3.709
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1435,
      "ouatsu": 1732.399,
      "saikou": 10,
      "heikin": 3.77,
      "boshuAvg30d": 1454.4,
      "heikinAvg30d": 4.331
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1436,
      "ouatsu": 1610.45,
      "saikou": 10,
      "heikin": 3.85,
      "boshuAvg30d": 1455.4,
      "heikinAvg30d": 4.03
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1429,
      "ouatsu": 1695.58,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1449.1,
      "heikinAvg30d": 3.75
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1422,
      "ouatsu": 1618.091,
      "saikou": 10,
      "heikin": 3.54,
      "boshuAvg30d": 1440.7,
      "heikinAvg30d": 3.849
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1414,
      "ouatsu": 1610.462,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1432.0,
      "heikinAvg30d": 3.852
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
        "ouatsu": 128.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.377
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 128.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.338
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 203.558,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.148
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 126.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.405
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 213.508,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.217
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 168.658,
        "saikou": 6.99,
        "heikin": 1.67,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.324
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 168.608,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.767
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 213.458,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.041
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 170.558,
        "saikou": 4.35,
        "heikin": 1.07,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.409
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 215.408,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.087
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 170.558,
        "saikou": 4.02,
        "heikin": 1.09,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.324
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 130.558,
        "saikou": 3.3,
        "heikin": 1.06,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.892
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 157.358,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.499
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 178.418,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.133
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 160.708,
        "saikou": 1.01,
        "heikin": 0.99,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.896
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 189.408,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.098
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 229.408,
        "saikou": 1,
        "heikin": 0.68,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.618
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 202.658,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.175
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 198.7,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.88
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 156.75,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.816
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 196.75,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.745
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 196.75,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 2.091
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 196.75,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.989
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 196.75,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.987
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 200.708,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.825
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 200.708,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.732
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 200.708,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.172
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 180.718,
        "saikou": 1.01,
        "heikin": 0.92,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.497
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 206.108,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.522
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 208.058,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.686
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 168.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 3.636
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 176.708,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 3.088
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 206.178,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.82
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 128.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.988
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 143.128,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 3.494
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 143.128,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 3.729
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 101.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 3.648
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 164.21,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 3.307
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 124.74,
        "saikou": 1.24,
        "heikin": 1.2,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 3.308
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 204.21,
        "saikou": 1.48,
        "heikin": 1.28,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.768
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 164.74,
        "saikou": 1.04,
        "heikin": 1.03,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.826
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 206.16,
        "saikou": 1.13,
        "heikin": 1.07,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.953
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 168.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.691
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 208.128,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.358
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 166.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.166
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 216.178,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.784
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 166.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.649
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 206.178,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.418
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 83.109,
        "saikou": 10,
        "heikin": 7.2,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 8.261
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 83.109,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 8.534
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 96.993,
        "saikou": 10,
        "heikin": 8.11,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 9.566
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 96.993,
        "saikou": 10,
        "heikin": 8.22,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 9.458
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 94.995,
        "saikou": 10,
        "heikin": 8.44,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 9.422
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 94.995,
        "saikou": 10,
        "heikin": 8.19,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 9.433
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 109.993,
        "saikou": 10,
        "heikin": 8.2,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 9.377
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 111.493,
        "saikou": 10,
        "heikin": 8.23,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 9.324
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 8.25,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 9.291
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 8.25,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 9.145
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 9.059
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 8.25,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 9.267
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 113.492,
        "saikou": 10,
        "heikin": 8.25,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 9.622
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 89.992,
        "saikou": 10,
        "heikin": 9.25,
        "boshuAvg30d": 184.5,
        "heikinAvg30d": 9.983
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 91.492,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 189.8,
        "heikinAvg30d": 10.206
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 89.992,
        "saikou": 10,
        "heikin": 9.26,
        "boshuAvg30d": 193.1,
        "heikinAvg30d": 10.188
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 91.492,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 193.1,
        "heikinAvg30d": 10.275
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 89.992,
        "saikou": 10,
        "heikin": 9.26,
        "boshuAvg30d": 193.1,
        "heikinAvg30d": 10.092
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 215,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 9.379
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 217,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 9.483
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 220,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 8.05,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 9.328
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 221,
        "ouatsu": 112.173,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 9.431
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 221,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 7.98,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 9.352
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 221,
        "ouatsu": 114.138,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 9.535
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 222,
        "ouatsu": 111.692,
        "saikou": 10,
        "heikin": 7.98,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 9.492
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 222,
        "ouatsu": 111.692,
        "saikou": 10,
        "heikin": 7.91,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 9.457
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 222,
        "ouatsu": 115.488,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 8.926
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 219,
        "ouatsu": 115.488,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 9.012
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 217,
        "ouatsu": 115.488,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 9.73
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 212,
        "ouatsu": 115.488,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 9.763
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 93.488,
        "saikou": 10,
        "heikin": 9.29,
        "boshuAvg30d": 191.2,
        "heikinAvg30d": 9.754
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 113.488,
        "saikou": 10,
        "heikin": 8.79,
        "boshuAvg30d": 191.2,
        "heikinAvg30d": 9.402
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 113.488,
        "saikou": 10,
        "heikin": 7.94,
        "boshuAvg30d": 191.2,
        "heikinAvg30d": 9.102
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 111.988,
        "saikou": 10,
        "heikin": 7.12,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 8.591
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 113.488,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 187.5,
        "heikinAvg30d": 8.076
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 110.992,
        "saikou": 10,
        "heikin": 6.73,
        "boshuAvg30d": 185.5,
        "heikinAvg30d": 8.285
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 109.527,
        "saikou": 10,
        "heikin": 6.49,
        "boshuAvg30d": 183.8,
        "heikinAvg30d": 8.249
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 109.992,
        "saikou": 9.49,
        "heikin": 7.17,
        "boshuAvg30d": 183.8,
        "heikinAvg30d": 8.123
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 109.592,
        "saikou": 10,
        "heikin": 7.53,
        "boshuAvg30d": 183.8,
        "heikinAvg30d": 8.267
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 111.492,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 183.5,
        "heikinAvg30d": 8.524
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 111.492,
        "saikou": 10,
        "heikin": 8.76,
        "boshuAvg30d": 182.8,
        "heikinAvg30d": 8.681
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 111.492,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 183.5,
        "heikinAvg30d": 8.953
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 183,
        "ouatsu": 111.492,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 96.4,
        "heikinAvg30d": 8.78
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 183,
        "ouatsu": 109.562,
        "saikou": 10,
        "heikin": 9.26,
        "boshuAvg30d": 96.4,
        "heikinAvg30d": 8.924
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 183,
        "ouatsu": 109.562,
        "saikou": 10,
        "heikin": 9.1,
        "boshuAvg30d": 96.4,
        "heikinAvg30d": 9.2
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 182,
        "ouatsu": 109.562,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 95.4,
        "heikinAvg30d": 8.646
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 181,
        "ouatsu": 111.492,
        "saikou": 10,
        "heikin": 9.24,
        "boshuAvg30d": 94.4,
        "heikinAvg30d": 8.679
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 180,
        "ouatsu": 109.992,
        "saikou": 10,
        "heikin": 9.23,
        "boshuAvg30d": 93.4,
        "heikinAvg30d": 9.051
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 539,
        "ouatsu": 458.162,
        "saikou": 9.4,
        "heikin": 3.12,
        "boshuAvg30d": 547.0,
        "heikinAvg30d": 4.028
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 539,
        "ouatsu": 483.071,
        "saikou": 9.4,
        "heikin": 2.49,
        "boshuAvg30d": 547.0,
        "heikinAvg30d": 3.821
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 539,
        "ouatsu": 479.378,
        "saikou": 9.4,
        "heikin": 2.51,
        "boshuAvg30d": 547.0,
        "heikinAvg30d": 3.859
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 539,
        "ouatsu": 489.184,
        "saikou": 9.4,
        "heikin": 2.85,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 3.526
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 537,
        "ouatsu": 445.216,
        "saikou": 9.49,
        "heikin": 3.79,
        "boshuAvg30d": 544.3,
        "heikinAvg30d": 3.471
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 537,
        "ouatsu": 447.092,
        "saikou": 9.4,
        "heikin": 2.96,
        "boshuAvg30d": 544.3,
        "heikinAvg30d": 3.553
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 536,
        "ouatsu": 460.964,
        "saikou": 9.4,
        "heikin": 2.6,
        "boshuAvg30d": 542.6,
        "heikinAvg30d": 3.414
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 537,
        "ouatsu": 459.496,
        "saikou": 9.4,
        "heikin": 2.6,
        "boshuAvg30d": 543.6,
        "heikinAvg30d": 3.508
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 538,
        "ouatsu": 461.016,
        "saikou": 9.4,
        "heikin": 2.62,
        "boshuAvg30d": 544.6,
        "heikinAvg30d": 3.525
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 538,
        "ouatsu": 464.786,
        "saikou": 9.4,
        "heikin": 2.61,
        "boshuAvg30d": 545.3,
        "heikinAvg30d": 3.479
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 538,
        "ouatsu": 464.786,
        "saikou": 9.4,
        "heikin": 2.88,
        "boshuAvg30d": 545.3,
        "heikinAvg30d": 3.628
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 538,
        "ouatsu": 464.786,
        "saikou": 9.4,
        "heikin": 2.62,
        "boshuAvg30d": 545.3,
        "heikinAvg30d": 3.57
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 559,
        "ouatsu": 500.69,
        "saikou": 9.4,
        "heikin": 2.73,
        "boshuAvg30d": 566.3,
        "heikinAvg30d": 4.073
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 567,
        "ouatsu": 500.69,
        "saikou": 9.49,
        "heikin": 2.88,
        "boshuAvg30d": 574.3,
        "heikinAvg30d": 4.217
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 572,
        "ouatsu": 500.69,
        "saikou": 9.49,
        "heikin": 3.5,
        "boshuAvg30d": 580.7,
        "heikinAvg30d": 4.23
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 577,
        "ouatsu": 500.69,
        "saikou": 9.5,
        "heikin": 3.53,
        "boshuAvg30d": 585.5,
        "heikinAvg30d": 4.225
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 577,
        "ouatsu": 460.162,
        "saikou": 9.5,
        "heikin": 4.03,
        "boshuAvg30d": 585.5,
        "heikinAvg30d": 4.621
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 577,
        "ouatsu": 447.563,
        "saikou": 9.5,
        "heikin": 4.49,
        "boshuAvg30d": 585.5,
        "heikinAvg30d": 4.764
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 568,
        "ouatsu": 437.477,
        "saikou": 9.49,
        "heikin": 4.93,
        "boshuAvg30d": 575.8,
        "heikinAvg30d": 4.709
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 568,
        "ouatsu": 437.477,
        "saikou": 9.49,
        "heikin": 5.05,
        "boshuAvg30d": 575.8,
        "heikinAvg30d": 4.416
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 568,
        "ouatsu": 425.853,
        "saikou": 10,
        "heikin": 4.72,
        "boshuAvg30d": 575.3,
        "heikinAvg30d": 4.198
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 567,
        "ouatsu": 403.865,
        "saikou": 10,
        "heikin": 4.88,
        "boshuAvg30d": 574.3,
        "heikinAvg30d": 4.153
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 564,
        "ouatsu": 435.707,
        "saikou": 10,
        "heikin": 4.88,
        "boshuAvg30d": 571.3,
        "heikinAvg30d": 4.29
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 564,
        "ouatsu": 369.989,
        "saikou": 10,
        "heikin": 5.19,
        "boshuAvg30d": 571.3,
        "heikinAvg30d": 4.284
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 563,
        "ouatsu": 326.041,
        "saikou": 10,
        "heikin": 4.92,
        "boshuAvg30d": 570.3,
        "heikinAvg30d": 4.061
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 563,
        "ouatsu": 341.787,
        "saikou": 10,
        "heikin": 4.62,
        "boshuAvg30d": 570.3,
        "heikinAvg30d": 4.147
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 563,
        "ouatsu": 409.139,
        "saikou": 10,
        "heikin": 4.79,
        "boshuAvg30d": 570.8,
        "heikinAvg30d": 4.16
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 562,
        "ouatsu": 409.191,
        "saikou": 10,
        "heikin": 4.79,
        "boshuAvg30d": 569.8,
        "heikinAvg30d": 4.27
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 561,
        "ouatsu": 455.632,
        "saikou": 9.49,
        "heikin": 4.97,
        "boshuAvg30d": 569.5,
        "heikinAvg30d": 4.526
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 561,
        "ouatsu": 548.406,
        "saikou": 9.49,
        "heikin": 4.46,
        "boshuAvg30d": 569.5,
        "heikinAvg30d": 4.571
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 560,
        "ouatsu": 612.8,
        "saikou": 9.4,
        "heikin": 4.46,
        "boshuAvg30d": 568.5,
        "heikinAvg30d": 4.583
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 560,
        "ouatsu": 609.302,
        "saikou": 9.49,
        "heikin": 4.5,
        "boshuAvg30d": 568.5,
        "heikinAvg30d": 4.869
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 560,
        "ouatsu": 611.278,
        "saikou": 9.49,
        "heikin": 4.72,
        "boshuAvg30d": 568.0,
        "heikinAvg30d": 5.105
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 560,
        "ouatsu": 643.707,
        "saikou": 9.49,
        "heikin": 4.37,
        "boshuAvg30d": 568.0,
        "heikinAvg30d": 5.186
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 560,
        "ouatsu": 611.918,
        "saikou": 9.49,
        "heikin": 4.87,
        "boshuAvg30d": 568.0,
        "heikinAvg30d": 5.263
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 560,
        "ouatsu": 656.747,
        "saikou": 9.49,
        "heikin": 4.25,
        "boshuAvg30d": 568.0,
        "heikinAvg30d": 5.272
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 562,
        "ouatsu": 617.772,
        "saikou": 9.49,
        "heikin": 4.65,
        "boshuAvg30d": 570.7,
        "heikinAvg30d": 5.124
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 562,
        "ouatsu": 660.408,
        "saikou": 9.4,
        "heikin": 3.92,
        "boshuAvg30d": 570.0,
        "heikinAvg30d": 4.898
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 563,
        "ouatsu": 560.964,
        "saikou": 9.49,
        "heikin": 4.16,
        "boshuAvg30d": 570.3,
        "heikinAvg30d": 4.822
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 563,
        "ouatsu": 585.389,
        "saikou": 9.49,
        "heikin": 3.83,
        "boshuAvg30d": 570.3,
        "heikinAvg30d": 4.617
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 561,
        "ouatsu": 589.246,
        "saikou": 9.49,
        "heikin": 3.64,
        "boshuAvg30d": 569.0,
        "heikinAvg30d": 4.107
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 561,
        "ouatsu": 575.894,
        "saikou": 9.49,
        "heikin": 3.75,
        "boshuAvg30d": 569.0,
        "heikinAvg30d": 4.102
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 560,
        "ouatsu": 534.223,
        "saikou": 9.49,
        "heikin": 4.17,
        "boshuAvg30d": 568.7,
        "heikinAvg30d": 3.726
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 560,
        "ouatsu": 515.787,
        "saikou": 9.49,
        "heikin": 4.16,
        "boshuAvg30d": 568.7,
        "heikinAvg30d": 4.688
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 560,
        "ouatsu": 461.224,
        "saikou": 9.49,
        "heikin": 4.34,
        "boshuAvg30d": 568.7,
        "heikinAvg30d": 4.234
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 558,
        "ouatsu": 441.622,
        "saikou": 9.49,
        "heikin": 3.96,
        "boshuAvg30d": 566.7,
        "heikinAvg30d": 3.956
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 556,
        "ouatsu": 443.578,
        "saikou": 9.49,
        "heikin": 3.59,
        "boshuAvg30d": 564.0,
        "heikinAvg30d": 4.279
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 555,
        "ouatsu": 443.578,
        "saikou": 9.49,
        "heikin": 3.55,
        "boshuAvg30d": 562.3,
        "heikinAvg30d": 4.342
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 155.785,
        "saikou": 3.88,
        "heikin": 1.92,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 4.307
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 160.228,
        "saikou": 3,
        "heikin": 0.55,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 4.093
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 179.644,
        "saikou": 4,
        "heikin": 1.59,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 4.205
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 197.865,
        "saikou": 4.38,
        "heikin": 1.69,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 4.137
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 155.9,
        "saikou": 4.5,
        "heikin": 1.96,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 4.612
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 183.819,
        "saikou": 4.38,
        "heikin": 1.84,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 4.681
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 207.476,
        "saikou": 3.5,
        "heikin": 1.01,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 4.405
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 203.676,
        "saikou": 4.2,
        "heikin": 2.01,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 4.366
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 207.476,
        "saikou": 3.88,
        "heikin": 1.68,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 4.412
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 207.476,
        "saikou": 3.5,
        "heikin": 1.02,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 4.331
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 209.466,
        "saikou": 3.5,
        "heikin": 2.07,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 4.062
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 207.966,
        "saikou": 3.5,
        "heikin": 1.05,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 4.341
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 227.745,
        "saikou": 3.5,
        "heikin": 1.4,
        "boshuAvg30d": 157.1,
        "heikinAvg30d": 4.709
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 219.951,
        "saikou": 3.88,
        "heikin": 1.53,
        "boshuAvg30d": 160.1,
        "heikinAvg30d": 4.688
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 221.851,
        "saikou": 4.99,
        "heikin": 3.7,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 4.839
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 225.845,
        "saikou": 5,
        "heikin": 4.06,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 4.967
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 244.066,
        "saikou": 4.99,
        "heikin": 3.63,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 5.286
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 246.056,
        "saikou": 4.99,
        "heikin": 3.6,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 5.351
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 176.281,
        "saikou": 5,
        "heikin": 3.65,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.635
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 196.5,
        "saikou": 4.99,
        "heikin": 3.57,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.586
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 141.425,
        "saikou": 8.53,
        "heikin": 4.1,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 5.544
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 141.425,
        "saikou": 8.53,
        "heikin": 4.14,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.6
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 141.905,
        "saikou": 8.53,
        "heikin": 3.95,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 5.247
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 218.546,
        "saikou": 4.68,
        "heikin": 2.33,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 5.265
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 205.692,
        "saikou": 4.85,
        "heikin": 2.82,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 5.25
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 187.55,
        "saikou": 4.2,
        "heikin": 2.57,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 5.288
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 296.568,
        "saikou": 4,
        "heikin": 1.91,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 5.575
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 319.924,
        "saikou": 4.54,
        "heikin": 2.62,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 5.672
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 317.926,
        "saikou": 5,
        "heikin": 3.41,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 5.653
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 379.922,
        "saikou": 4.58,
        "heikin": 2.09,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 5.562
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 409.183,
        "saikou": 3,
        "heikin": 1.8,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 5.485
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 409.183,
        "saikou": 3.88,
        "heikin": 2.07,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 5.379
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 451.197,
        "saikou": 3.88,
        "heikin": 2.08,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 5.244
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 443.497,
        "saikou": 4.2,
        "heikin": 2.09,
        "boshuAvg30d": 162.1,
        "heikinAvg30d": 5.313
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 453.195,
        "saikou": 4.2,
        "heikin": 2.06,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 4.842
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 449.696,
        "saikou": 4.2,
        "heikin": 1.94,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 4.539
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 439.324,
        "saikou": 4.99,
        "heikin": 2.29,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 5.004
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 430.026,
        "saikou": 4.39,
        "heikin": 1.93,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 4.529
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 438.238,
        "saikou": 4.14,
        "heikin": 1.9,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 4.182
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 410.194,
        "saikou": 3.49,
        "heikin": 2.23,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 4.142
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 259.615,
        "saikou": 4.39,
        "heikin": 3.05,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 3.819
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 277.836,
        "saikou": 3.88,
        "heikin": 2.6,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 3.717
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 259.43,
        "saikou": 4.14,
        "heikin": 2.62,
        "boshuAvg30d": 160.1,
        "heikinAvg30d": 3.706
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 233.173,
        "saikou": 4.68,
        "heikin": 3.01,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 4.432
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 189.555,
        "saikou": 5.1,
        "heikin": 3.3,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 4.348
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 171.334,
        "saikou": 4.99,
        "heikin": 3.52,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 4.405
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 171.334,
        "saikou": 5.1,
        "heikin": 3.71,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 4.489
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 169.834,
        "saikou": 4.99,
        "heikin": 2.88,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.683
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 3.38,
        "heikin": 3.14,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.678
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 21.052,
        "saikou": 2.1,
        "heikin": 0.57,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.682
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 1.9,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.543
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.79,
        "heikin": 0.71,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.748
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.8,
        "heikin": 0.7,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.333
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 1.9,
        "heikin": 0.57,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.036
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 1.5,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.593
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 30.268,
        "saikou": 4.3,
        "heikin": 0.75,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.599
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 34.916,
        "saikou": 3.35,
        "heikin": 0.68,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.51
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 40.51,
        "saikou": 2.79,
        "heikin": 0.55,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.006
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.268
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.563
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 3.969
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 36.258,
        "saikou": 2.59,
        "heikin": 0.55,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.707
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 46.852,
        "saikou": 3.2,
        "heikin": 0.61,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 4.099
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 59.416,
        "saikou": 2.8,
        "heikin": 0.55,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.987
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 63.316,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 4.84
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 51.642,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 5.691
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.314
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.02
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.73,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.508
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 8,
        "heikin": 0.83,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.442
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.72,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.243
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.416
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.317
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.124
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.471
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 0.69,
        "heikin": 0.62,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.326
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.79,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.642
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 49.448,
        "saikou": 1.71,
        "heikin": 1.62,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.611
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 28.928,
        "saikou": 1.44,
        "heikin": 1.44,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 5.05
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 5.616
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.199
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.318
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.191
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.98,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.689
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.75,
        "heikin": 4.37,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.235
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.699
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 4.2,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.768
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.15,
        "heikin": 1.95,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.304
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 3.89,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.429
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 3,
        "heikin": 2.75,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.138
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.6,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.99
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.6,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.983
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.55,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.703
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.55,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 4.08
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.55,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 4.135
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 23.482,
        "saikou": 2.5,
        "heikin": 0.86,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.999
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 147.3,
        "saikou": 3,
        "heikin": 1.5,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 1.971
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 172.688,
        "saikou": 2.9,
        "heikin": 1.29,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.58
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 147.3,
        "saikou": 3,
        "heikin": 1.51,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.383
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 120.82,
        "saikou": 3,
        "heikin": 1.7,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.338
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 118.822,
        "saikou": 3,
        "heikin": 1.68,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.431
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 118.822,
        "saikou": 3,
        "heikin": 1.68,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 2.64
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 130.614,
        "saikou": 3,
        "heikin": 1.76,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.328
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 130.614,
        "saikou": 4,
        "heikin": 1.82,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.67
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 130.614,
        "saikou": 4,
        "heikin": 1.77,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.182
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 95.324,
        "saikou": 2.9,
        "heikin": 2.13,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.074
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 80.324,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.303
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 130.614,
        "saikou": 3,
        "heikin": 1.72,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.019
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 174.635,
        "saikou": 2.57,
        "heikin": 1.09,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 4.235
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 169.316,
        "saikou": 3,
        "heikin": 1.3,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 4.2
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 126.747,
        "saikou": 3,
        "heikin": 1.66,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 4.141
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 126.747,
        "saikou": 6.99,
        "heikin": 1.73,
        "boshuAvg30d": 159.5,
        "heikinAvg30d": 4.402
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 95.324,
        "saikou": 4,
        "heikin": 2.33,
        "boshuAvg30d": 159.5,
        "heikinAvg30d": 5.25
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 95.324,
        "saikou": 4,
        "heikin": 2.2,
        "boshuAvg30d": 159.5,
        "heikinAvg30d": 5.623
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 95.324,
        "saikou": 4,
        "heikin": 2.14,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 5.371
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 95.324,
        "saikou": 4,
        "heikin": 2.19,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 5.37
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 95.324,
        "saikou": 6.99,
        "heikin": 3.62,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 5.203
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 93.474,
        "saikou": 6.99,
        "heikin": 3.62,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 5.109
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 93.474,
        "saikou": 6.99,
        "heikin": 3.59,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.997
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 93.474,
        "saikou": 4,
        "heikin": 2.12,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 5.022
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 44.606,
        "saikou": 4,
        "heikin": 3.36,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 5.899
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 92.031,
        "saikou": 4,
        "heikin": 2.12,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.949
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 92.031,
        "saikou": 4,
        "heikin": 2.36,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 5.007
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 93.881,
        "saikou": 4,
        "heikin": 2.42,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 5.098
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 95.324,
        "saikou": 5.5,
        "heikin": 2.87,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 5.018
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 95.324,
        "saikou": 4.5,
        "heikin": 2.23,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.729
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 91.457,
        "saikou": 3,
        "heikin": 2.17,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.505
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 91.457,
        "saikou": 2.95,
        "heikin": 1.95,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.501
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 91.457,
        "saikou": 3.5,
        "heikin": 2.18,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.447
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 91.457,
        "saikou": 3.5,
        "heikin": 2.18,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.746
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 91.457,
        "saikou": 3.5,
        "heikin": 2.18,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.164
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 91.457,
        "saikou": 3.47,
        "heikin": 2.17,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.122
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 89.466,
        "saikou": 3,
        "heikin": 2.12,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 4.12
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 89.466,
        "saikou": 3,
        "heikin": 2.12,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 3.892
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 90.014,
        "saikou": 3,
        "heikin": 2.18,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 3.837
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 90.014,
        "saikou": 3,
        "heikin": 2.24,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 3.756
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 91.457,
        "saikou": 3,
        "heikin": 2.22,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 3.445
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 88.164,
        "saikou": 3,
        "heikin": 2.24,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 3.544
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 89.607,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.329
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 89.607,
        "saikou": 3,
        "heikin": 2.26,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.521
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 105.283,
        "saikou": 3,
        "heikin": 1.98,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.227
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 124.897,
        "saikou": 3,
        "heikin": 1.72,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.411
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 123.454,
        "saikou": 3,
        "heikin": 1.73,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.85
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 86.224,
        "saikou": 3,
        "heikin": 2.27,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 4.641
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 156.403,
        "saikou": 4.69,
        "heikin": 3.61,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.989
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 156.403,
        "saikou": 3,
        "heikin": 1.71,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.307
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 156.403,
        "saikou": 3.65,
        "heikin": 1.64,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.249
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 160.193,
        "saikou": 4,
        "heikin": 1.68,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.088
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 160.193,
        "saikou": 4,
        "heikin": 1.66,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.063
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 160.193,
        "saikou": 3,
        "heikin": 1.7,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.147
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 177.052,
        "saikou": 3,
        "heikin": 1.6,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.126
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 164.325,
        "saikou": 3.14,
        "heikin": 2.01,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.206
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 177.052,
        "saikou": 4,
        "heikin": 1.94,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.128
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 177.052,
        "saikou": 2.13,
        "heikin": 1.54,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.266
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 177.052,
        "saikou": 3.23,
        "heikin": 2.73,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.487
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 177.052,
        "saikou": 3.23,
        "heikin": 2.7,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.374
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 181.27,
        "saikou": 2.73,
        "heikin": 2.32,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 3.722
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 181.27,
        "saikou": 2.13,
        "heikin": 1.56,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 3.168
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 181.27,
        "saikou": 4,
        "heikin": 1.85,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 3.03
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 181.27,
        "saikou": 4,
        "heikin": 1.85,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.962
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 163.126,
        "saikou": 3,
        "heikin": 1.57,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.005
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 163.126,
        "saikou": 4,
        "heikin": 1.66,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.993
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 177.052,
        "saikou": 4,
        "heikin": 1.81,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.783
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 177.052,
        "saikou": 4,
        "heikin": 1.61,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.373
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 84.089,
        "saikou": 10,
        "heikin": 3.12,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.025
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 84.089,
        "saikou": 10,
        "heikin": 3.12,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.991
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 99.956,
        "saikou": 10,
        "heikin": 2.87,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.98
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 212.779,
        "saikou": 3.42,
        "heikin": 1.61,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.089
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 212.779,
        "saikou": 4,
        "heikin": 1.44,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.274
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 212.779,
        "saikou": 4,
        "heikin": 1.59,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.167
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 152.451,
        "saikou": 4,
        "heikin": 1.68,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.815
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 168.559,
        "saikou": 6.38,
        "heikin": 1.57,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.373
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 168.559,
        "saikou": 6.38,
        "heikin": 1.99,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.506
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 154.756,
        "saikou": 4,
        "heikin": 1.07,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.995
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 193.448,
        "saikou": 3,
        "heikin": 1.99,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.76
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 193.448,
        "saikou": 4.5,
        "heikin": 3.11,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 5.877
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 193.448,
        "saikou": 4.69,
        "heikin": 3.36,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 5.929
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 146.476,
        "saikou": 4.69,
        "heikin": 4.34,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 6.756
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 146.476,
        "saikou": 4.69,
        "heikin": 4.34,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.461
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 146.476,
        "saikou": 4.71,
        "heikin": 4.39,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.477
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 144.486,
        "saikou": 4.71,
        "heikin": 4.39,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.718
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 191.458,
        "saikou": 4.89,
        "heikin": 3.55,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.837
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 191.458,
        "saikou": 4.89,
        "heikin": 3.54,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.482
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 193.448,
        "saikou": 4.71,
        "heikin": 3.31,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.043
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 191.648,
        "saikou": 4.28,
        "heikin": 3.13,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 6.754
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 191.648,
        "saikou": 3.79,
        "heikin": 2.72,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 5.959
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 207.251,
        "saikou": 6.38,
        "heikin": 3.5,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 5.464
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 148.458,
        "saikou": 3.97,
        "heikin": 3.53,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 4.996
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 148.458,
        "saikou": 5.55,
        "heikin": 3.38,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 4.309
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 190.311,
        "saikou": 3.65,
        "heikin": 2.83,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 3.906
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 183.865,
        "saikou": 5.55,
        "heikin": 3.48,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.853
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 174.27,
        "saikou": 5.55,
        "heikin": 2.03,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 3.071
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.771
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.799
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.809
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.77
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.739
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 39.3,
        "heikinAvg30d": 0.751
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 167.403,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.915
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 155.86,
        "saikou": 1.6,
        "heikin": 1.21,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.863
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 155.86,
        "saikou": 1.6,
        "heikin": 1.12,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.88
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 167.403,
        "saikou": 1.7,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.916
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 167.403,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.922
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 167.403,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.898
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 167.403,
        "saikou": 2.5,
        "heikin": 0.87,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.853
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 167.403,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.817
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 190.403,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.824
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 204.403,
        "saikou": 1.6,
        "heikin": 1.29,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.74
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.688
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.731
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 1.1,
        "boshuAvg30d": 46.3,
        "heikinAvg30d": 1.047
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 219.403,
        "saikou": 1.6,
        "heikin": 1.13,
        "boshuAvg30d": 46.3,
        "heikinAvg30d": 1.039
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 1.15,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.006
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 1.15,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.02
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 1.15,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.05
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 1.15,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.071
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 221.403,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.124
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 221.403,
        "saikou": 1.6,
        "heikin": 1.12,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.059
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 155.903,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.981
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 155.903,
        "saikou": 1.6,
        "heikin": 1,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.914
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 155.903,
        "saikou": 1.6,
        "heikin": 0.96,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.958
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 143.903,
        "saikou": 1.6,
        "heikin": 0.81,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.854
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.923
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.929
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.917
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.94,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.876
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.917
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.85
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.836
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.808
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.815
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.827
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 1.01,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.82
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.799
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 211.403,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.691
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.73
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.701
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 238.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.675
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 215.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.705
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.742
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 159.711,
        "saikou": 4.97,
        "heikin": 4.12,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 4.165
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 166.633,
        "saikou": 3,
        "heikin": 2.43,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 4.131
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 178.585,
        "saikou": 3,
        "heikin": 2.44,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.967
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 180.531,
        "saikou": 3,
        "heikin": 2.07,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 4.138
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 180.531,
        "saikou": 3,
        "heikin": 1.98,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 3.985
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 180.531,
        "saikou": 3,
        "heikin": 2.06,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 4.044
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 199.741,
        "saikou": 3,
        "heikin": 2.16,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.941
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 195.913,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 4.058
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 201.727,
        "saikou": 3,
        "heikin": 2.4,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 4.0
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 199.743,
        "saikou": 3.4,
        "heikin": 3.03,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 3.975
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 248.886,
        "saikou": 4.24,
        "heikin": 2.62,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 3.921
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 253.251,
        "saikou": 3.56,
        "heikin": 2.29,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 3.669
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 193.265,
        "saikou": 3.36,
        "heikin": 3,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 3.561
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 191.399,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 3.576
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 192.413,
        "saikou": 3.34,
        "heikin": 2.12,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 3.842
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 154.615,
        "saikou": 3.27,
        "heikin": 2.31,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 3.823
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 156.601,
        "saikou": 3,
        "heikin": 2.4,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 4.0
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 191.251,
        "saikou": 3.14,
        "heikin": 2.75,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 4.727
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 190.771,
        "saikou": 3.91,
        "heikin": 3.43,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.66
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 190.771,
        "saikou": 3.62,
        "heikin": 3.25,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 4.574
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 203.288,
        "saikou": 3.95,
        "heikin": 2.93,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 4.484
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 187.422,
        "saikou": 5.2,
        "heikin": 2.88,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 4.482
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 189.406,
        "saikou": 5.2,
        "heikin": 2.91,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 4.482
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 187.458,
        "saikou": 4.58,
        "heikin": 2.52,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 4.635
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 233.739,
        "saikou": 4.5,
        "heikin": 1.63,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 4.076
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 233.739,
        "saikou": 4,
        "heikin": 1.44,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 4.281
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 219.725,
        "saikou": 3.8,
        "heikin": 3.02,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 4.595
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 172.873,
        "saikou": 4.81,
        "heikin": 4.11,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 5.219
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 174.373,
        "saikou": 6.05,
        "heikin": 5.08,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 5.883
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 192.119,
        "saikou": 6.69,
        "heikin": 5.42,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 6.529
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 192.119,
        "saikou": 6.92,
        "heikin": 5.8,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.017
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 192.119,
        "saikou": 7.62,
        "heikin": 6.25,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.949
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 192.119,
        "saikou": 8.03,
        "heikin": 6.54,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.957
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 190.135,
        "saikou": 8.21,
        "heikin": 6.59,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 7.37
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 190.133,
        "saikou": 8.31,
        "heikin": 6.55,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 7.017
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 190.133,
        "saikou": 8.22,
        "heikin": 6.52,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 7.269
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 145.855,
        "saikou": 8.05,
        "heikin": 6.06,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 7.444
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 145.855,
        "saikou": 7.62,
        "heikin": 5.89,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 7.198
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 154.824,
        "saikou": 7.17,
        "heikin": 5.5,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 6.509
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 191.799,
        "saikou": 6.89,
        "heikin": 5.44,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.911
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 196.599,
        "saikou": 6.28,
        "heikin": 4.95,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.218
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 202.263,
        "saikou": 6.31,
        "heikin": 4.88,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 4.424
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 199.353,
        "saikou": 5.6,
        "heikin": 4.44,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 3.99
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 199.353,
        "saikou": 4.82,
        "heikin": 3.94,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 5.004
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 201.329,
        "saikou": 4.61,
        "heikin": 3.8,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 4.761
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 199.345,
        "saikou": 3.85,
        "heikin": 3.32,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 4.07
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 198.329,
        "saikou": 3.85,
        "heikin": 3.3,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 3.996
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 195.501,
        "saikou": 3.6,
        "heikin": 2.34,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 3.468
      }
    ]
  }
};
