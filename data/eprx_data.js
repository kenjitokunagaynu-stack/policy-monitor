// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/04〜2026/09/02）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-03",
  "fetchedAt": "2026-09-03",
  "avgWindowLabel": "過去30日平均（2026/08/04〜2026/09/02）",
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
      "boshu": 1545,
      "ouatsu": 1587.249,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1427.3,
      "heikinAvg30d": 3.423
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1545,
      "ouatsu": 1739.953,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1427.3,
      "heikinAvg30d": 3.502
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1545,
      "ouatsu": 1743.02,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1427.3,
      "heikinAvg30d": 3.568
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1545,
      "ouatsu": 1795.835,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1425.4,
      "heikinAvg30d": 3.537
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1540,
      "ouatsu": 1833.6,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1420.4,
      "heikinAvg30d": 3.514
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1539,
      "ouatsu": 1811.209,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1418.5,
      "heikinAvg30d": 3.575
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1539,
      "ouatsu": 1836.563,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1451.0,
      "heikinAvg30d": 3.54
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1540,
      "ouatsu": 1911.948,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1452.0,
      "heikinAvg30d": 3.614
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1543,
      "ouatsu": 1827.754,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1455.9,
      "heikinAvg30d": 3.616
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1543,
      "ouatsu": 1911.773,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1456.9,
      "heikinAvg30d": 3.524
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1543,
      "ouatsu": 1896.286,
      "saikou": 10,
      "heikin": 3.51,
      "boshuAvg30d": 1456.4,
      "heikinAvg30d": 3.57
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1543,
      "ouatsu": 1908.416,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1456.4,
      "heikinAvg30d": 3.53
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1609,
      "ouatsu": 2013.171,
      "saikou": 10,
      "heikin": 3.64,
      "boshuAvg30d": 1519.6,
      "heikinAvg30d": 4.159
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1630,
      "ouatsu": 2037.777,
      "saikou": 10,
      "heikin": 3.77,
      "boshuAvg30d": 1542.5,
      "heikinAvg30d": 4.252
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1653,
      "ouatsu": 1840.12,
      "saikou": 10,
      "heikin": 3.13,
      "boshuAvg30d": 1565.5,
      "heikinAvg30d": 4.291
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1671,
      "ouatsu": 1892.14,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1580.6,
      "heikinAvg30d": 4.332
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1672,
      "ouatsu": 2097.722,
      "saikou": 10.05,
      "heikin": 3.96,
      "boshuAvg30d": 1580.7,
      "heikinAvg30d": 4.49
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1672,
      "ouatsu": 1985.861,
      "saikou": 13.35,
      "heikin": 5.23,
      "boshuAvg30d": 1580.7,
      "heikinAvg30d": 4.66
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1609,
      "ouatsu": 2025.032,
      "saikou": 13.36,
      "heikin": 4.98,
      "boshuAvg30d": 1550.2,
      "heikinAvg30d": 4.61
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1613,
      "ouatsu": 2026.808,
      "saikou": 13.55,
      "heikin": 4.81,
      "boshuAvg30d": 1555.2,
      "heikinAvg30d": 4.451
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1621,
      "ouatsu": 2065.209,
      "saikou": 12.55,
      "heikin": 4.17,
      "boshuAvg30d": 1561.8,
      "heikinAvg30d": 4.266
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1621,
      "ouatsu": 2050.486,
      "saikou": 13.06,
      "heikin": 4.56,
      "boshuAvg30d": 1561.8,
      "heikinAvg30d": 4.275
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1618,
      "ouatsu": 2043.7,
      "saikou": 12.85,
      "heikin": 4.38,
      "boshuAvg30d": 1556.9,
      "heikinAvg30d": 4.217
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1617,
      "ouatsu": 2048.756,
      "saikou": 13.07,
      "heikin": 4.64,
      "boshuAvg30d": 1556.9,
      "heikinAvg30d": 4.282
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1610,
      "ouatsu": 2020.528,
      "saikou": 11.3,
      "heikin": 4.09,
      "boshuAvg30d": 1552.7,
      "heikinAvg30d": 4.09
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1610,
      "ouatsu": 2129.28,
      "saikou": 11.42,
      "heikin": 3.89,
      "boshuAvg30d": 1552.7,
      "heikinAvg30d": 4.095
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1610,
      "ouatsu": 2087.898,
      "saikou": 11.42,
      "heikin": 4.18,
      "boshuAvg30d": 1553.1,
      "heikinAvg30d": 4.207
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1604,
      "ouatsu": 2033.905,
      "saikou": 12.55,
      "heikin": 4.49,
      "boshuAvg30d": 1547.1,
      "heikinAvg30d": 4.422
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1599,
      "ouatsu": 1982.418,
      "saikou": 13.04,
      "heikin": 4.48,
      "boshuAvg30d": 1544.9,
      "heikinAvg30d": 4.684
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1592,
      "ouatsu": 2021.575,
      "saikou": 12.95,
      "heikin": 4.23,
      "boshuAvg30d": 1540.7,
      "heikinAvg30d": 4.925
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1649,
      "ouatsu": 2078.117,
      "saikou": 11.63,
      "heikin": 3.9,
      "boshuAvg30d": 1565.2,
      "heikinAvg30d": 4.863
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1649,
      "ouatsu": 2079.053,
      "saikou": 12.95,
      "heikin": 4.23,
      "boshuAvg30d": 1565.2,
      "heikinAvg30d": 5.188
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1649,
      "ouatsu": 2084.013,
      "saikou": 12.09,
      "heikin": 3.83,
      "boshuAvg30d": 1565.7,
      "heikinAvg30d": 5.276
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1647,
      "ouatsu": 2056.867,
      "saikou": 11.42,
      "heikin": 3.73,
      "boshuAvg30d": 1560.9,
      "heikinAvg30d": 5.588
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1643,
      "ouatsu": 1988.199,
      "saikou": 11.71,
      "heikin": 4.01,
      "boshuAvg30d": 1558.4,
      "heikinAvg30d": 5.597
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1639,
      "ouatsu": 2018.82,
      "saikou": 10.67,
      "heikin": 3.69,
      "boshuAvg30d": 1554.4,
      "heikinAvg30d": 5.574
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1631,
      "ouatsu": 1927.078,
      "saikou": 10.3,
      "heikin": 3.71,
      "boshuAvg30d": 1545.4,
      "heikinAvg30d": 5.674
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1631,
      "ouatsu": 1935.595,
      "saikou": 10.84,
      "heikin": 3.78,
      "boshuAvg30d": 1544.5,
      "heikinAvg30d": 5.498
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1632,
      "ouatsu": 2112.02,
      "saikou": 9.49,
      "heikin": 3.33,
      "boshuAvg30d": 1544.6,
      "heikinAvg30d": 5.234
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1631,
      "ouatsu": 2228.724,
      "saikou": 9.49,
      "heikin": 3.58,
      "boshuAvg30d": 1544.5,
      "heikinAvg30d": 4.962
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1626,
      "ouatsu": 2184.118,
      "saikou": 9.64,
      "heikin": 3.86,
      "boshuAvg30d": 1539.5,
      "heikinAvg30d": 4.499
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1622,
      "ouatsu": 2130.548,
      "saikou": 10,
      "heikin": 3.73,
      "boshuAvg30d": 1538.3,
      "heikinAvg30d": 4.198
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1529,
      "ouatsu": 2106.44,
      "saikou": 9.4,
      "heikin": 3.18,
      "boshuAvg30d": 1444.4,
      "heikinAvg30d": 3.798
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1532,
      "ouatsu": 2035.808,
      "saikou": 9.4,
      "heikin": 3.4,
      "boshuAvg30d": 1447.4,
      "heikinAvg30d": 4.648
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1533,
      "ouatsu": 1933.127,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1449.2,
      "heikinAvg30d": 4.341
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1526,
      "ouatsu": 2105.562,
      "saikou": 9.49,
      "heikin": 3.19,
      "boshuAvg30d": 1443.1,
      "heikinAvg30d": 3.933
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1519,
      "ouatsu": 1922.255,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1434.2,
      "heikinAvg30d": 4.035
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1511,
      "ouatsu": 1997.141,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1425.3,
      "heikinAvg30d": 3.982
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
        "ouatsu": 158.668,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.507
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 158.668,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.45
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 156.718,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.224
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 201.568,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.557
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 198.668,
        "saikou": 9.9,
        "heikin": 0.94,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.358
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 204.518,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.375
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 159.618,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.835
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 204.468,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 2.137
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 163.558,
        "saikou": 5.5,
        "heikin": 1.05,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 2.421
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 218.408,
        "saikou": 1.01,
        "heikin": 0.96,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 2.205
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 161.608,
        "saikou": 5.95,
        "heikin": 1.15,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 2.301
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 159.618,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.844
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 172.892,
        "saikou": 8.95,
        "heikin": 1.98,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.273
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 142.658,
        "saikou": 8.45,
        "heikin": 2.36,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.124
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 170.758,
        "saikou": 8.85,
        "heikin": 0.88,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.856
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 182.758,
        "saikou": 8.85,
        "heikin": 0.91,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.973
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 127.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.6
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 197.518,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.15
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 169.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.862
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 169.508,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.799
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 159.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.798
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 197.518,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.171
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 199.468,
        "saikou": 1.02,
        "heikin": 1.01,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.033
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 206.508,
        "saikou": 5.5,
        "heikin": 1.05,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.024
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 159.708,
        "saikou": 9,
        "heikin": 1.09,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.869
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 199.508,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.72
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 159.668,
        "saikou": 9,
        "heikin": 1.09,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.007
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 201.458,
        "saikou": 1.52,
        "heikin": 1.32,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.314
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 161.658,
        "saikou": 1.56,
        "heikin": 1.55,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.449
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 188.458,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.684
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 157.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 3.615
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 159.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.959
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 165.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.574
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 160.74,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.907
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 92.74,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 3.581
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 134.75,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 3.988
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 94.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 3.945
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 119.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 3.643
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 157.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 3.59
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 155.75,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 3.063
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 159.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 2.949
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 159.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 2.046
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 157.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.902
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 169.708,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.58
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 171.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.515
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 206.508,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.046
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 198.708,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.887
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 198.708,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.649
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 55.209,
        "saikou": 10,
        "heikin": 7.17,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 8.482
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 57.109,
        "saikou": 10,
        "heikin": 7.62,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 8.808
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 72.991,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 9.916
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 72.991,
        "saikou": 10,
        "heikin": 8.06,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 9.995
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 70.993,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 9.706
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 70.993,
        "saikou": 10,
        "heikin": 7.91,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 9.733
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 85.991,
        "saikou": 10,
        "heikin": 8.08,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 9.787
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 87.491,
        "saikou": 10,
        "heikin": 8.11,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 9.778
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 89.49,
        "saikou": 10,
        "heikin": 8.14,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 9.729
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 89.49,
        "saikou": 10,
        "heikin": 8.19,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 9.531
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 89.49,
        "saikou": 10,
        "heikin": 8.19,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 9.482
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 89.49,
        "saikou": 10,
        "heikin": 8.19,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 9.881
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 101.49,
        "saikou": 10,
        "heikin": 8.12,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 10.393
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 111.99,
        "saikou": 10,
        "heikin": 7.56,
        "boshuAvg30d": 183.3,
        "heikinAvg30d": 10.712
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 113.49,
        "saikou": 10,
        "heikin": 7.18,
        "boshuAvg30d": 188.4,
        "heikinAvg30d": 10.871
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 111.99,
        "saikou": 10,
        "heikin": 6.89,
        "boshuAvg30d": 191.5,
        "heikinAvg30d": 10.985
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 113.49,
        "saikou": 10,
        "heikin": 6.93,
        "boshuAvg30d": 191.5,
        "heikinAvg30d": 11.214
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 111.99,
        "saikou": 10,
        "heikin": 6.45,
        "boshuAvg30d": 191.5,
        "heikinAvg30d": 10.972
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 114.136,
        "saikou": 10,
        "heikin": 6.06,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 10.042
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 114.136,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 10.23
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 124.136,
        "saikou": 9.79,
        "heikin": 6.19,
        "boshuAvg30d": 158.1,
        "heikinAvg30d": 9.895
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 124.136,
        "saikou": 9.79,
        "heikin": 6.18,
        "boshuAvg30d": 160.1,
        "heikinAvg30d": 10.181
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 124.136,
        "saikou": 9.49,
        "heikin": 6.13,
        "boshuAvg30d": 160.1,
        "heikinAvg30d": 10.053
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 124.136,
        "saikou": 9.49,
        "heikin": 6.13,
        "boshuAvg30d": 160.1,
        "heikinAvg30d": 10.22
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 119.725,
        "saikou": 9.49,
        "heikin": 6.9,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 10.184
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 119.76,
        "saikou": 9.49,
        "heikin": 6.94,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 10.142
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 125.486,
        "saikou": 9.79,
        "heikin": 5.88,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 9.659
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 125.486,
        "saikou": 9.79,
        "heikin": 6.32,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 9.556
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 115.486,
        "saikou": 9.79,
        "heikin": 6.01,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 10.226
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 115.486,
        "saikou": 10,
        "heikin": 6.23,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 10.282
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 115.486,
        "saikou": 9.49,
        "heikin": 5.41,
        "boshuAvg30d": 190.3,
        "heikinAvg30d": 10.442
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 115.486,
        "saikou": 10,
        "heikin": 5.61,
        "boshuAvg30d": 190.3,
        "heikinAvg30d": 10.153
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 115.486,
        "saikou": 10,
        "heikin": 5.71,
        "boshuAvg30d": 190.3,
        "heikinAvg30d": 9.565
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 113.986,
        "saikou": 10,
        "heikin": 5.64,
        "boshuAvg30d": 188.3,
        "heikinAvg30d": 8.825
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 115.486,
        "saikou": 10,
        "heikin": 6.25,
        "boshuAvg30d": 186.3,
        "heikinAvg30d": 8.253
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 113.986,
        "saikou": 10,
        "heikin": 5.77,
        "boshuAvg30d": 184.3,
        "heikinAvg30d": 8.338
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 111.525,
        "saikou": 10,
        "heikin": 5.74,
        "boshuAvg30d": 182.4,
        "heikinAvg30d": 8.247
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 111.99,
        "saikou": 9.84,
        "heikin": 5.75,
        "boshuAvg30d": 182.4,
        "heikinAvg30d": 8.178
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 113.49,
        "saikou": 9.49,
        "heikin": 6.75,
        "boshuAvg30d": 182.4,
        "heikinAvg30d": 8.264
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 113.49,
        "saikou": 9.49,
        "heikin": 6.94,
        "boshuAvg30d": 182.3,
        "heikinAvg30d": 8.537
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 113.49,
        "saikou": 9.49,
        "heikin": 7.53,
        "boshuAvg30d": 181.4,
        "heikinAvg30d": 8.713
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 113.49,
        "saikou": 10,
        "heikin": 7.79,
        "boshuAvg30d": 182.3,
        "heikinAvg30d": 8.973
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 87.56,
        "saikou": 9.4,
        "heikin": 8.16,
        "boshuAvg30d": 92.3,
        "heikinAvg30d": 8.495
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 89.49,
        "saikou": 9.4,
        "heikin": 7.8,
        "boshuAvg30d": 92.3,
        "heikinAvg30d": 8.807
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 89.49,
        "saikou": 10,
        "heikin": 8.18,
        "boshuAvg30d": 92.3,
        "heikinAvg30d": 9.17
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 89.49,
        "saikou": 9.49,
        "heikin": 8.15,
        "boshuAvg30d": 91.3,
        "heikinAvg30d": 8.492
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 89.49,
        "saikou": 10,
        "heikin": 7.18,
        "boshuAvg30d": 90.3,
        "heikinAvg30d": 8.653
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 87.99,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 89.3,
        "heikinAvg30d": 9.072
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 539,
        "ouatsu": 414.244,
        "saikou": 9.79,
        "heikin": 4.59,
        "boshuAvg30d": 550.4,
        "heikinAvg30d": 4.021
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 539,
        "ouatsu": 456.873,
        "saikou": 9.64,
        "heikin": 4.06,
        "boshuAvg30d": 550.4,
        "heikinAvg30d": 3.902
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 539,
        "ouatsu": 555.977,
        "saikou": 9.5,
        "heikin": 3.94,
        "boshuAvg30d": 550.4,
        "heikinAvg30d": 3.907
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 539,
        "ouatsu": 556.652,
        "saikou": 9.9,
        "heikin": 3.82,
        "boshuAvg30d": 549.5,
        "heikinAvg30d": 3.629
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 537,
        "ouatsu": 533.172,
        "saikou": 9.9,
        "heikin": 3.75,
        "boshuAvg30d": 547.5,
        "heikinAvg30d": 3.541
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 537,
        "ouatsu": 554.08,
        "saikou": 9.9,
        "heikin": 3.69,
        "boshuAvg30d": 547.5,
        "heikinAvg30d": 3.549
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 536,
        "ouatsu": 558.624,
        "saikou": 9.9,
        "heikin": 3.68,
        "boshuAvg30d": 545.6,
        "heikinAvg30d": 3.444
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 537,
        "ouatsu": 541.643,
        "saikou": 9.9,
        "heikin": 3.73,
        "boshuAvg30d": 546.6,
        "heikinAvg30d": 3.492
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 538,
        "ouatsu": 550.276,
        "saikou": 9.9,
        "heikin": 3.88,
        "boshuAvg30d": 547.6,
        "heikinAvg30d": 3.533
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 538,
        "ouatsu": 573.508,
        "saikou": 9.9,
        "heikin": 3.76,
        "boshuAvg30d": 548.5,
        "heikinAvg30d": 3.471
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 538,
        "ouatsu": 557.226,
        "saikou": 9.9,
        "heikin": 3.93,
        "boshuAvg30d": 548.1,
        "heikinAvg30d": 3.58
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 538,
        "ouatsu": 557.226,
        "saikou": 9.9,
        "heikin": 4.17,
        "boshuAvg30d": 548.1,
        "heikinAvg30d": 3.546
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 559,
        "ouatsu": 545.441,
        "saikou": 9.9,
        "heikin": 4.09,
        "boshuAvg30d": 569.1,
        "heikinAvg30d": 4.062
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 567,
        "ouatsu": 553.515,
        "saikou": 9.9,
        "heikin": 4.35,
        "boshuAvg30d": 577.1,
        "heikinAvg30d": 4.281
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 572,
        "ouatsu": 532.153,
        "saikou": 9.9,
        "heikin": 3.29,
        "boshuAvg30d": 583.9,
        "heikinAvg30d": 4.235
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 577,
        "ouatsu": 537.164,
        "saikou": 9.9,
        "heikin": 3.12,
        "boshuAvg30d": 588.9,
        "heikinAvg30d": 4.233
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 577,
        "ouatsu": 724.153,
        "saikou": 10,
        "heikin": 4.29,
        "boshuAvg30d": 588.9,
        "heikinAvg30d": 4.435
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 577,
        "ouatsu": 563.021,
        "saikou": 10,
        "heikin": 6.41,
        "boshuAvg30d": 588.9,
        "heikinAvg30d": 4.483
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 568,
        "ouatsu": 644.508,
        "saikou": 10,
        "heikin": 6.08,
        "boshuAvg30d": 578.9,
        "heikinAvg30d": 4.533
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 568,
        "ouatsu": 644.508,
        "saikou": 10,
        "heikin": 6.19,
        "boshuAvg30d": 578.9,
        "heikinAvg30d": 4.304
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 568,
        "ouatsu": 689.891,
        "saikou": 10,
        "heikin": 4.69,
        "boshuAvg30d": 578.5,
        "heikinAvg30d": 4.096
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 567,
        "ouatsu": 689.891,
        "saikou": 10,
        "heikin": 5,
        "boshuAvg30d": 577.5,
        "heikinAvg30d": 4.105
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 564,
        "ouatsu": 705.323,
        "saikou": 10,
        "heikin": 4.71,
        "boshuAvg30d": 574.5,
        "heikinAvg30d": 4.217
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 564,
        "ouatsu": 705.323,
        "saikou": 10,
        "heikin": 4.96,
        "boshuAvg30d": 574.5,
        "heikinAvg30d": 4.206
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 563,
        "ouatsu": 777.947,
        "saikou": 9.5,
        "heikin": 3.85,
        "boshuAvg30d": 573.5,
        "heikinAvg30d": 4.103
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 563,
        "ouatsu": 777.947,
        "saikou": 9.5,
        "heikin": 4.05,
        "boshuAvg30d": 573.5,
        "heikinAvg30d": 4.072
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 563,
        "ouatsu": 766.667,
        "saikou": 9.74,
        "heikin": 4.63,
        "boshuAvg30d": 573.9,
        "heikinAvg30d": 4.023
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 562,
        "ouatsu": 693.736,
        "saikou": 10,
        "heikin": 4.98,
        "boshuAvg30d": 572.9,
        "heikinAvg30d": 4.061
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 561,
        "ouatsu": 692.547,
        "saikou": 10,
        "heikin": 4.66,
        "boshuAvg30d": 572.9,
        "heikinAvg30d": 4.36
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 561,
        "ouatsu": 681.938,
        "saikou": 10,
        "heikin": 4.02,
        "boshuAvg30d": 572.9,
        "heikinAvg30d": 4.596
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 560,
        "ouatsu": 787.251,
        "saikou": 10,
        "heikin": 3.62,
        "boshuAvg30d": 571.9,
        "heikinAvg30d": 4.515
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 560,
        "ouatsu": 767.562,
        "saikou": 10,
        "heikin": 4.04,
        "boshuAvg30d": 571.9,
        "heikinAvg30d": 4.811
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 560,
        "ouatsu": 767.756,
        "saikou": 10,
        "heikin": 3.37,
        "boshuAvg30d": 571.4,
        "heikinAvg30d": 5.088
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 560,
        "ouatsu": 750.017,
        "saikou": 10,
        "heikin": 3.66,
        "boshuAvg30d": 571.4,
        "heikinAvg30d": 5.344
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 560,
        "ouatsu": 750.469,
        "saikou": 10,
        "heikin": 4.24,
        "boshuAvg30d": 571.1,
        "heikinAvg30d": 5.436
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 560,
        "ouatsu": 707.143,
        "saikou": 10,
        "heikin": 4.33,
        "boshuAvg30d": 571.1,
        "heikinAvg30d": 5.472
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 562,
        "ouatsu": 713.401,
        "saikou": 10,
        "heikin": 4.13,
        "boshuAvg30d": 574.0,
        "heikinAvg30d": 5.306
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 562,
        "ouatsu": 713.843,
        "saikou": 9.85,
        "heikin": 3.84,
        "boshuAvg30d": 573.1,
        "heikinAvg30d": 5.135
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 563,
        "ouatsu": 776.655,
        "saikou": 9.49,
        "heikin": 3.77,
        "boshuAvg30d": 573.1,
        "heikinAvg30d": 4.909
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 563,
        "ouatsu": 747.847,
        "saikou": 9.49,
        "heikin": 3.73,
        "boshuAvg30d": 573.1,
        "heikinAvg30d": 4.655
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 561,
        "ouatsu": 697.384,
        "saikou": 9.64,
        "heikin": 3.96,
        "boshuAvg30d": 572.1,
        "heikinAvg30d": 4.11
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 561,
        "ouatsu": 685.577,
        "saikou": 9.79,
        "heikin": 4,
        "boshuAvg30d": 572.1,
        "heikinAvg30d": 4.054
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 560,
        "ouatsu": 715.367,
        "saikou": 9.34,
        "heikin": 3.14,
        "boshuAvg30d": 572.0,
        "heikinAvg30d": 3.596
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 560,
        "ouatsu": 715.905,
        "saikou": 9.4,
        "heikin": 3.69,
        "boshuAvg30d": 572.0,
        "heikinAvg30d": 4.856
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 560,
        "ouatsu": 539.777,
        "saikou": 9.9,
        "heikin": 3.74,
        "boshuAvg30d": 572.8,
        "heikinAvg30d": 4.397
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 558,
        "ouatsu": 644.281,
        "saikou": 9.49,
        "heikin": 3.69,
        "boshuAvg30d": 570.8,
        "heikinAvg30d": 3.958
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 556,
        "ouatsu": 489.821,
        "saikou": 9.9,
        "heikin": 4.42,
        "boshuAvg30d": 567.9,
        "heikinAvg30d": 4.254
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 555,
        "ouatsu": 566.079,
        "saikou": 9.9,
        "heikin": 4.2,
        "boshuAvg30d": 565.9,
        "heikinAvg30d": 4.328
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 238,
        "ouatsu": 447.446,
        "saikou": 3.21,
        "heikin": 2.29,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.898
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 238,
        "ouatsu": 403.927,
        "saikou": 2.4,
        "heikin": 1.5,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.727
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 238,
        "ouatsu": 382.784,
        "saikou": 6.3,
        "heikin": 1.46,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.628
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 238,
        "ouatsu": 384.673,
        "saikou": 6,
        "heikin": 1.27,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.809
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 237,
        "ouatsu": 473.957,
        "saikou": 3.92,
        "heikin": 1.05,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 5.408
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 237,
        "ouatsu": 409.728,
        "saikou": 6.85,
        "heikin": 1.79,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 5.381
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 237,
        "ouatsu": 418.486,
        "saikou": 6.85,
        "heikin": 1.74,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 5.139
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 237,
        "ouatsu": 483.756,
        "saikou": 3.68,
        "heikin": 0.94,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 4.995
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 237,
        "ouatsu": 419.486,
        "saikou": 6.79,
        "heikin": 1.42,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 5.035
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 237,
        "ouatsu": 418.486,
        "saikou": 6.85,
        "heikin": 1.84,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 4.934
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 237,
        "ouatsu": 420.476,
        "saikou": 6.99,
        "heikin": 1.65,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 4.635
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 237,
        "ouatsu": 418.976,
        "saikou": 6.99,
        "heikin": 1.58,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 4.998
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 247,
        "ouatsu": 531.906,
        "saikou": 2.4,
        "heikin": 1.66,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 5.724
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 250,
        "ouatsu": 537.902,
        "saikou": 3.21,
        "heikin": 1.69,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 5.864
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 253,
        "ouatsu": 422.907,
        "saikou": 6.89,
        "heikin": 1.81,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 6.021
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 255,
        "ouatsu": 405.263,
        "saikou": 6.89,
        "heikin": 1.22,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 6.208
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 255,
        "ouatsu": 453.872,
        "saikou": 7.25,
        "heikin": 2.65,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 6.347
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 255,
        "ouatsu": 457.761,
        "saikou": 7.89,
        "heikin": 3.7,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 6.227
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 259,
        "ouatsu": 477.454,
        "saikou": 7,
        "heikin": 3.53,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 6.415
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 259,
        "ouatsu": 477.454,
        "saikou": 4.73,
        "heikin": 3.01,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 6.316
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 260,
        "ouatsu": 486.744,
        "saikou": 6.87,
        "heikin": 2.76,
        "boshuAvg30d": 166.8,
        "heikinAvg30d": 6.251
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 259,
        "ouatsu": 488.742,
        "saikou": 7.73,
        "heikin": 3.75,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 6.276
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 258,
        "ouatsu": 455.542,
        "saikou": 7.25,
        "heikin": 3.35,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 6.064
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 257,
        "ouatsu": 455.542,
        "saikou": 7.54,
        "heikin": 3.58,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 6.19
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 254,
        "ouatsu": 455.033,
        "saikou": 7.99,
        "heikin": 3.15,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 6.089
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 254,
        "ouatsu": 457.031,
        "saikou": 6.99,
        "heikin": 2.63,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 6.174
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 254,
        "ouatsu": 457.07,
        "saikou": 7,
        "heikin": 2.96,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 6.354
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 254,
        "ouatsu": 457.07,
        "saikou": 6.99,
        "heikin": 2.93,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 6.41
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 253,
        "ouatsu": 455.072,
        "saikou": 6.99,
        "heikin": 2.99,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 6.412
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 253,
        "ouatsu": 455.072,
        "saikou": 6.99,
        "heikin": 2.97,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 6.345
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 252,
        "ouatsu": 449.178,
        "saikou": 7,
        "heikin": 3.11,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 6.268
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 252,
        "ouatsu": 449.178,
        "saikou": 6.99,
        "heikin": 3.26,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 6.153
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 252,
        "ouatsu": 449.762,
        "saikou": 6.99,
        "heikin": 3.17,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 5.804
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 252,
        "ouatsu": 449.762,
        "saikou": 6.99,
        "heikin": 2.12,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 5.809
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 252,
        "ouatsu": 445.962,
        "saikou": 6.99,
        "heikin": 2.48,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 5.307
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 252,
        "ouatsu": 453.563,
        "saikou": 4.31,
        "heikin": 1.35,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 4.981
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 250,
        "ouatsu": 441.203,
        "saikou": 6.99,
        "heikin": 1.98,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.61
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 250,
        "ouatsu": 443.201,
        "saikou": 6.99,
        "heikin": 2.64,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.089
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 250,
        "ouatsu": 453.084,
        "saikou": 6.27,
        "heikin": 1.55,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 4.799
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 250,
        "ouatsu": 445.784,
        "saikou": 0.76,
        "heikin": 0.67,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 4.837
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 250,
        "ouatsu": 454.728,
        "saikou": 3.03,
        "heikin": 1.93,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 4.187
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 250,
        "ouatsu": 425.507,
        "saikou": 3,
        "heikin": 1.63,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 4.153
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 250,
        "ouatsu": 431.527,
        "saikou": 2,
        "heikin": 1.63,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.229
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 251,
        "ouatsu": 344.515,
        "saikou": 5.4,
        "heikin": 1.62,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 5.391
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 251,
        "ouatsu": 396.006,
        "saikou": 5.88,
        "heikin": 1.82,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 5.41
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 250,
        "ouatsu": 426.087,
        "saikou": 4.99,
        "heikin": 1.78,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.324
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 249,
        "ouatsu": 378.04,
        "saikou": 7.49,
        "heikin": 2.76,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 5.555
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 246,
        "ouatsu": 412.727,
        "saikou": 6.99,
        "heikin": 2.64,
        "boshuAvg30d": 155.6,
        "heikinAvg30d": 5.515
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.8,
        "heikin": 1.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.016
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.1,
        "heikin": 0.67,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.682
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 6.1,
        "heikin": 1.31,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.264
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.79,
        "heikin": 0.81,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.723
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 3.929,
        "saikou": 2.79,
        "heikin": 2.79,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.945
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 18.031,
        "saikou": 2.79,
        "heikin": 0.91,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.763
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.79,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.452
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.79,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.0
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.14,
        "heikin": 0.55,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.143
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 20.93,
        "saikou": 2.79,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.598
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 22.309,
        "saikou": 2.79,
        "heikin": 0.77,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.89
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.8,
        "heikin": 0.8,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.18
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.929,
        "saikou": 2.79,
        "heikin": 2.79,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 4.647
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 5.519,
        "saikou": 2.79,
        "heikin": 1.74,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 4.592
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 22.929,
        "saikou": 2.79,
        "heikin": 2.5,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 5.391
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 22.929,
        "saikou": 4.48,
        "heikin": 4.48,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.295
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 22.929,
        "saikou": 7.11,
        "heikin": 7.11,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 5.734
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.929,
        "saikou": 6.29,
        "heikin": 6.29,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 6.599
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.099
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.843
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.572
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.772
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 9.5,
        "heikin": 9.5,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.042
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.196
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 7.94,
        "heikin": 7.94,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.416
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.292
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.783
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.209
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.498
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 12.199,
        "saikou": 5.94,
        "heikin": 5.94,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.344
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 6.298
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 18.697,
        "saikou": 6.42,
        "heikin": 6.42,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 6.659
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.551
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.596
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 5.109,
        "saikou": 5.42,
        "heikin": 5.42,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.282
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 33.929,
        "saikou": 3.8,
        "heikin": 3.8,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.339
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 7.67
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 7.399
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 22.929,
        "saikou": 7.26,
        "heikin": 7.26,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.685
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 22.929,
        "saikou": 5.01,
        "heikin": 5.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.628
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 22.929,
        "saikou": 3.97,
        "heikin": 3.97,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.38
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 22.929,
        "saikou": 2.82,
        "heikin": 2.82,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.783
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 9.785,
        "saikou": 3.22,
        "heikin": 2.58,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.749
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 7.923,
        "saikou": 3,
        "heikin": 2.24,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.838
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 2.79,
        "heikin": 2.79,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.722
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 5.099
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 5.456
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 5.987,
        "saikou": 2.79,
        "heikin": 1.55,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 5.032
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 38.868,
        "saikou": 3,
        "heikin": 2,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 1.942
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 188.638,
        "saikou": 2.58,
        "heikin": 0.86,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 2.784
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 88.221,
        "saikou": 6.5,
        "heikin": 2.88,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 2.498
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 90.024,
        "saikou": 3,
        "heikin": 2.41,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 2.545
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 88.026,
        "saikou": 3,
        "heikin": 2.41,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.566
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 88.026,
        "saikou": 3,
        "heikin": 2.42,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.862
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 95.92,
        "saikou": 6.5,
        "heikin": 2.84,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.29
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 90.053,
        "saikou": 3,
        "heikin": 2.42,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.697
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 91.962,
        "saikou": 6.5,
        "heikin": 2.67,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 2.22
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 95.92,
        "saikou": 6.5,
        "heikin": 2.88,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 2.017
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 80.92,
        "saikou": 3,
        "heikin": 2.68,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 2.176
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 2.38,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 2.024
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 2.67,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 4.743
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 2.67,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 4.81
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 95.92,
        "saikou": 6.99,
        "heikin": 3.35,
        "boshuAvg30d": 157.6,
        "heikinAvg30d": 4.811
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 109.588,
        "saikou": 4.17,
        "heikin": 2.78,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 5.181
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 145.05,
        "saikou": 6.99,
        "heikin": 4.34,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 6.048
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 99.787,
        "saikou": 9.44,
        "heikin": 5,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 6.258
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 2.58,
        "heikin": 2.58,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 6.051
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 3,
        "heikin": 2.61,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 5.947
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 6.99,
        "heikin": 3.55,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 5.63
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 7.5,
        "heikin": 3.82,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 5.472
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 6.99,
        "heikin": 3.6,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.377
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 7.5,
        "heikin": 3.83,
        "boshuAvg30d": 159.7,
        "heikinAvg30d": 5.557
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 52.362,
        "saikou": 7.8,
        "heikin": 7.16,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 6.143
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 6.99,
        "heikin": 3.64,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.679
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 6.99,
        "heikin": 3.6,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.497
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 99.787,
        "saikou": 3,
        "heikin": 2.61,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 5.712
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 6.99,
        "heikin": 2.87,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.661
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 6.99,
        "heikin": 3.54,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.413
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 95.92,
        "saikou": 6.99,
        "heikin": 3.59,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.214
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 99.787,
        "saikou": 6,
        "heikin": 3.18,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.15
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 99.787,
        "saikou": 6.99,
        "heikin": 3.89,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 4.939
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.787,
        "saikou": 6.99,
        "heikin": 3.89,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 5.194
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 99.787,
        "saikou": 6.49,
        "heikin": 3.8,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 4.528
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.787,
        "saikou": 6.49,
        "heikin": 4.01,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.513
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 97.827,
        "saikou": 6.97,
        "heikin": 3.86,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 4.494
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 93.96,
        "saikou": 6.99,
        "heikin": 4.36,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 4.282
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 95.92,
        "saikou": 6,
        "heikin": 3.18,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 4.257
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 95.92,
        "saikou": 2.58,
        "heikin": 2.58,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 4.21
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 95.92,
        "saikou": 2.58,
        "heikin": 2.58,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 3.895
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 2.67,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 3.895
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 2.65,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 3.592
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 2.67,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 3.785
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 2.62,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 3.412
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 95.92,
        "saikou": 2.58,
        "heikin": 2.58,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 3.537
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 95.92,
        "saikou": 2.58,
        "heikin": 2.58,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 4.109
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 138.434,
        "saikou": 3,
        "heikin": 1.73,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 4.826
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 141.696,
        "saikou": 6.38,
        "heikin": 4.96,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 2.85
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 141.696,
        "saikou": 6.38,
        "heikin": 4.38,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 3.215
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 141.696,
        "saikou": 6.38,
        "heikin": 4.54,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 3.133
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 145.486,
        "saikou": 6.38,
        "heikin": 4.49,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 2.945
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 145.486,
        "saikou": 6.38,
        "heikin": 4.93,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 2.932
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 145.486,
        "saikou": 6.38,
        "heikin": 4.55,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 2.969
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 162.345,
        "saikou": 6.98,
        "heikin": 4.31,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.953
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 162.345,
        "saikou": 6.38,
        "heikin": 4.3,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.012
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 162.345,
        "saikou": 6.38,
        "heikin": 3.98,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 2.957
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 162.345,
        "saikou": 6.38,
        "heikin": 4.12,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.019
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 229.623,
        "saikou": 6.38,
        "heikin": 3.84,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.278
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 229.623,
        "saikou": 6.38,
        "heikin": 3.87,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.199
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 229.623,
        "saikou": 6.38,
        "heikin": 4.12,
        "boshuAvg30d": 136.6,
        "heikinAvg30d": 3.458
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 235.481,
        "saikou": 6.38,
        "heikin": 4.35,
        "boshuAvg30d": 137.6,
        "heikinAvg30d": 2.908
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 82.321,
        "saikou": 6.98,
        "heikin": 4.17,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 2.846
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 66.454,
        "saikou": 6.98,
        "heikin": 4.77,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 2.824
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 54.516,
        "saikou": 6.38,
        "heikin": 6.14,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 2.937
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 88.211,
        "saikou": 9.28,
        "heikin": 8.9,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 3.612
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 86.346,
        "saikou": 9.27,
        "heikin": 8.67,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 3.471
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 86.346,
        "saikou": 9.28,
        "heikin": 5.52,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 3.021
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 86.346,
        "saikou": 8.18,
        "heikin": 4.64,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.766
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 50.681,
        "saikou": 9.28,
        "heikin": 6.37,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.674
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 40.713,
        "saikou": 8.33,
        "heikin": 6.57,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.507
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 40.713,
        "saikou": 9.12,
        "heikin": 6.88,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.596
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 40.713,
        "saikou": 7,
        "heikin": 6.02,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.925
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 60.207,
        "saikou": 7,
        "heikin": 5.96,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.85
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 60.207,
        "saikou": 7.47,
        "heikin": 6.23,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.391
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 60.207,
        "saikou": 8.07,
        "heikin": 6.46,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 3.006
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 60.207,
        "saikou": 8.17,
        "heikin": 6.5,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 3.075
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 72.145,
        "saikou": 8.19,
        "heikin": 6.15,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 3.576
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 72.145,
        "saikou": 8.16,
        "heikin": 6.37,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 4.581
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 72.145,
        "saikou": 8.67,
        "heikin": 6.31,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 5.973
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 72.145,
        "saikou": 8.42,
        "heikin": 6.43,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 6.342
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 72.145,
        "saikou": 6.98,
        "heikin": 6.2,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 7.414
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 72.145,
        "saikou": 7.66,
        "heikin": 6.24,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 8.189
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 72.145,
        "saikou": 8.69,
        "heikin": 6.82,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 8.185
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 70.155,
        "saikou": 9.2,
        "heikin": 6.96,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 8.295
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 50.661,
        "saikou": 7.14,
        "heikin": 6.4,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 8.418
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 77.029,
        "saikou": 6.19,
        "heikin": 4.13,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 8.141
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 215.82,
        "saikou": 9.22,
        "heikin": 8.75,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 7.431
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 249.515,
        "saikou": 8.18,
        "heikin": 6.84,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 7.211
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 227.823,
        "saikou": 7.01,
        "heikin": 6.51,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 6.396
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 227.823,
        "saikou": 6.56,
        "heikin": 6.13,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 5.672
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 229.623,
        "saikou": 6.38,
        "heikin": 5.7,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 5.132
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 229.623,
        "saikou": 6.38,
        "heikin": 5.13,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 4.421
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 229.623,
        "saikou": 6.38,
        "heikin": 4.49,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 4.01
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 229.623,
        "saikou": 6.38,
        "heikin": 3.87,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 3.75
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 215.82,
        "saikou": 3.66,
        "heikin": 3.47,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 3.067
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 109.473,
        "saikou": 2.5,
        "heikin": 1.38,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.634
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 109.473,
        "saikou": 2.3,
        "heikin": 1.24,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.625
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 109.473,
        "saikou": 2.5,
        "heikin": 1.38,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.623
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 109.473,
        "saikou": 2.5,
        "heikin": 1.38,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.578
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 109.473,
        "saikou": 2.5,
        "heikin": 1.38,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.558
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 109.473,
        "saikou": 2.5,
        "heikin": 1.38,
        "boshuAvg30d": 39.1,
        "heikinAvg30d": 0.559
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 106.473,
        "saikou": 2.5,
        "heikin": 1.27,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.692
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 94.93,
        "saikou": 2.5,
        "heikin": 1.27,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.676
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 106.473,
        "saikou": 2.5,
        "heikin": 1.2,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.678
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 106.473,
        "saikou": 2.5,
        "heikin": 1.23,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.674
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 106.473,
        "saikou": 2.5,
        "heikin": 1.2,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.693
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 106.473,
        "saikou": 2.5,
        "heikin": 1.2,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.688
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 109.473,
        "saikou": 2.5,
        "heikin": 1.34,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.631
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 109.473,
        "saikou": 2.5,
        "heikin": 1.38,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.644
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 161.973,
        "saikou": 2.5,
        "heikin": 1.05,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 0.669
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 214.473,
        "saikou": 4.89,
        "heikin": 1.01,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 0.629
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 214.473,
        "saikou": 2.3,
        "heikin": 0.86,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 0.629
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 214.473,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 0.687
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 180.473,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 46.1,
        "heikinAvg30d": 1.139
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 180.473,
        "saikou": 4,
        "heikin": 0.88,
        "boshuAvg30d": 46.1,
        "heikinAvg30d": 1.131
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 180.473,
        "saikou": 4,
        "heikin": 0.87,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 1.095
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 166.473,
        "saikou": 4,
        "heikin": 0.81,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 1.072
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 166.473,
        "saikou": 5.34,
        "heikin": 1.12,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 1.106
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 166.473,
        "saikou": 4,
        "heikin": 0.81,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 1.163
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 166.473,
        "saikou": 5.34,
        "heikin": 1.12,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.216
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 166.473,
        "saikou": 5.34,
        "heikin": 1.12,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.115
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 166.473,
        "saikou": 4,
        "heikin": 0.81,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.013
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 166.473,
        "saikou": 4,
        "heikin": 0.81,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.954
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 166.473,
        "saikou": 6.78,
        "heikin": 1.22,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.999
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 6.78,
        "heikin": 1.19,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.91
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 4.11,
        "heikin": 0.99,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.044
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 4.5,
        "heikin": 1,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.964
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 6.5,
        "heikin": 1.03,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.951
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 6.48,
        "heikin": 1.2,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 0.884
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 6.48,
        "heikin": 1.11,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.999
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 153.473,
        "saikou": 6.48,
        "heikin": 1.11,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.878
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 6,
        "heikin": 0.77,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.917
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 5.5,
        "heikin": 0.76,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.876
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 166.473,
        "saikou": 6,
        "heikin": 1.03,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.924
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 180.473,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.937
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 180.473,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.843
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 180.473,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.828
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 2.5,
        "heikin": 0.73,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.869
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 2.5,
        "heikin": 0.73,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.85
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 214.473,
        "saikou": 2.48,
        "heikin": 0.86,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.76
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 214.473,
        "saikou": 2.48,
        "heikin": 0.86,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.644
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 214.473,
        "saikou": 2.48,
        "heikin": 0.84,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.607
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 161.973,
        "saikou": 2.48,
        "heikin": 1,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.614
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 198.716,
        "saikou": 6.87,
        "heikin": 5.52,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 4.466
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 200.64,
        "saikou": 6.57,
        "heikin": 5.56,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 4.412
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 212.231,
        "saikou": 6.57,
        "heikin": 5.34,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 4.201
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 212.039,
        "saikou": 6.22,
        "heikin": 5.05,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 4.432
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 209.896,
        "saikou": 6.57,
        "heikin": 5.32,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 4.306
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 210.874,
        "saikou": 6.57,
        "heikin": 5.32,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 4.346
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 226.177,
        "saikou": 6.57,
        "heikin": 5.31,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.138
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 224.333,
        "saikou": 6.57,
        "heikin": 5.3,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.26
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 221.235,
        "saikou": 6.57,
        "heikin": 5.29,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.208
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 226.213,
        "saikou": 6.55,
        "heikin": 5.26,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.161
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 228.161,
        "saikou": 6.55,
        "heikin": 5.28,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.095
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 228.161,
        "saikou": 6.56,
        "heikin": 5.25,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 3.864
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 222.497,
        "saikou": 6.51,
        "heikin": 5.25,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 3.587
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 245.319,
        "saikou": 6.59,
        "heikin": 5.06,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 3.47
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 237.669,
        "saikou": 7.15,
        "heikin": 5.5,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 3.709
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 241.521,
        "saikou": 7.75,
        "heikin": 5.89,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 3.673
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 241.521,
        "saikou": 10.05,
        "heikin": 8.89,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 3.801
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 249.171,
        "saikou": 13.35,
        "heikin": 12.34,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 4.371
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 248.691,
        "saikou": 13.36,
        "heikin": 10.16,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 4.355
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 250.667,
        "saikou": 13.55,
        "heikin": 9.52,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.211
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 234.235,
        "saikou": 12.55,
        "heikin": 9.62,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 4.011
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 229.329,
        "saikou": 13.06,
        "heikin": 10.09,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.942
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 229.329,
        "saikou": 12.85,
        "heikin": 9.96,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 4.013
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 227.345,
        "saikou": 13.07,
        "heikin": 10.11,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 4.112
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 225.638,
        "saikou": 11.3,
        "heikin": 8.66,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.596
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 244.638,
        "saikou": 11.42,
        "heikin": 8.47,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.855
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 248.611,
        "saikou": 11.42,
        "heikin": 8.47,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 4.172
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 225.759,
        "saikou": 12.55,
        "heikin": 9.46,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 4.8
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 227.259,
        "saikou": 13.04,
        "heikin": 9.71,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 5.557
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 243.017,
        "saikou": 12.95,
        "heikin": 9.34,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 6.314
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 243.017,
        "saikou": 11.63,
        "heikin": 8.55,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 5.582
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 243.017,
        "saikou": 12.95,
        "heikin": 9.46,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 6.763
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 256.017,
        "saikou": 12.09,
        "heikin": 8.77,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 7.079
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 253.028,
        "saikou": 11.42,
        "heikin": 8.3,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 7.599
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 253.028,
        "saikou": 11.71,
        "heikin": 7.78,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.347
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 250.044,
        "saikou": 10.67,
        "heikin": 7.15,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 7.707
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 240.897,
        "saikou": 10.3,
        "heikin": 6.98,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 7.907
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 244.87,
        "saikou": 10.84,
        "heikin": 7.33,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 7.751
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 248.722,
        "saikou": 8.52,
        "heikin": 5.57,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 6.944
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 250.711,
        "saikou": 7.6,
        "heikin": 5.34,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 6.334
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 210.011,
        "saikou": 6.92,
        "heikin": 5.78,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 5.459
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 219.161,
        "saikou": 6.36,
        "heikin": 5.1,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 4.532
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 193.267,
        "saikou": 5.9,
        "heikin": 4.77,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 4.139
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 195.251,
        "saikou": 6.79,
        "heikin": 5.42,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.429
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 192.251,
        "saikou": 6.62,
        "heikin": 5.51,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.103
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 195.251,
        "saikou": 6.25,
        "heikin": 5.14,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 4.36
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 222.251,
        "saikou": 6.92,
        "heikin": 6.16,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 4.331
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 209.423,
        "saikou": 6.54,
        "heikin": 5.39,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 3.762
      }
    ]
  }
};
