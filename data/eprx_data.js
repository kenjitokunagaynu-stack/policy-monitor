// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/03〜2026/09/01）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-02",
  "fetchedAt": "2026-09-02",
  "avgWindowLabel": "過去30日平均（2026/08/03〜2026/09/01）",
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
      "ouatsu": 2006.038,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1421.1,
      "heikinAvg30d": 3.44
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1545,
      "ouatsu": 1962.115,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1421.1,
      "heikinAvg30d": 3.532
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1545,
      "ouatsu": 2071.82,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1421.1,
      "heikinAvg30d": 3.599
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1545,
      "ouatsu": 2066.366,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1419.2,
      "heikinAvg30d": 3.581
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1540,
      "ouatsu": 2093.436,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1414.2,
      "heikinAvg30d": 3.542
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1539,
      "ouatsu": 2086.294,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1412.2,
      "heikinAvg30d": 3.607
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1539,
      "ouatsu": 2151.072,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1444.7,
      "heikinAvg30d": 3.566
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1540,
      "ouatsu": 2109.486,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1445.7,
      "heikinAvg30d": 3.635
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1543,
      "ouatsu": 2127.969,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1449.6,
      "heikinAvg30d": 3.639
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1543,
      "ouatsu": 2176.134,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1450.6,
      "heikinAvg30d": 3.548
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1543,
      "ouatsu": 2128.112,
      "saikou": 10,
      "heikin": 3.47,
      "boshuAvg30d": 1450.2,
      "heikinAvg30d": 3.588
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1543,
      "ouatsu": 2136.544,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1450.2,
      "heikinAvg30d": 3.55
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1609,
      "ouatsu": 2199.226,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1516.1,
      "heikinAvg30d": 4.196
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1630,
      "ouatsu": 2138.071,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1539.1,
      "heikinAvg30d": 4.29
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1653,
      "ouatsu": 1959.259,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1562.1,
      "heikinAvg30d": 4.35
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1671,
      "ouatsu": 1990.036,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1577.1,
      "heikinAvg30d": 4.388
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1672,
      "ouatsu": 2041.383,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1577.1,
      "heikinAvg30d": 4.551
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1672,
      "ouatsu": 2149.722,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1577.1,
      "heikinAvg30d": 4.705
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1609,
      "ouatsu": 2033.091,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1549.4,
      "heikinAvg30d": 4.655
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1613,
      "ouatsu": 1955.152,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1554.4,
      "heikinAvg30d": 4.494
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1621,
      "ouatsu": 1918.164,
      "saikou": 10,
      "heikin": 3.84,
      "boshuAvg30d": 1561.0,
      "heikinAvg30d": 4.28
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1621,
      "ouatsu": 1820.29,
      "saikou": 10,
      "heikin": 3.87,
      "boshuAvg30d": 1561.0,
      "heikinAvg30d": 4.305
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1618,
      "ouatsu": 1934.465,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1556.1,
      "heikinAvg30d": 4.235
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1617,
      "ouatsu": 1933.636,
      "saikou": 10,
      "heikin": 3.77,
      "boshuAvg30d": 1556.0,
      "heikinAvg30d": 4.287
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1610,
      "ouatsu": 1776.232,
      "saikou": 10,
      "heikin": 4.11,
      "boshuAvg30d": 1549.1,
      "heikinAvg30d": 4.065
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1610,
      "ouatsu": 1903.607,
      "saikou": 10,
      "heikin": 3.92,
      "boshuAvg30d": 1549.1,
      "heikinAvg30d": 4.076
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1610,
      "ouatsu": 2037.029,
      "saikou": 10,
      "heikin": 3.95,
      "boshuAvg30d": 1549.5,
      "heikinAvg30d": 4.185
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1604,
      "ouatsu": 1915.068,
      "saikou": 10,
      "heikin": 4.62,
      "boshuAvg30d": 1543.5,
      "heikinAvg30d": 4.391
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1599,
      "ouatsu": 1926.785,
      "saikou": 11.05,
      "heikin": 5.28,
      "boshuAvg30d": 1541.4,
      "heikinAvg30d": 4.629
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1592,
      "ouatsu": 1837.652,
      "saikou": 11.63,
      "heikin": 5.22,
      "boshuAvg30d": 1537.3,
      "heikinAvg30d": 4.887
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1649,
      "ouatsu": 1960.532,
      "saikou": 11.63,
      "heikin": 4.99,
      "boshuAvg30d": 1561.8,
      "heikinAvg30d": 4.867
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1649,
      "ouatsu": 1981.577,
      "saikou": 12,
      "heikin": 5.04,
      "boshuAvg30d": 1561.8,
      "heikinAvg30d": 5.186
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1649,
      "ouatsu": 1742.278,
      "saikou": 10.63,
      "heikin": 5.42,
      "boshuAvg30d": 1562.4,
      "heikinAvg30d": 5.263
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1647,
      "ouatsu": 1837.104,
      "saikou": 16.15,
      "heikin": 7.23,
      "boshuAvg30d": 1557.5,
      "heikinAvg30d": 5.508
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1643,
      "ouatsu": 1854.219,
      "saikou": 14.33,
      "heikin": 6.1,
      "boshuAvg30d": 1555.0,
      "heikinAvg30d": 5.563
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1639,
      "ouatsu": 1765.439,
      "saikou": 16.98,
      "heikin": 5.98,
      "boshuAvg30d": 1551.0,
      "heikinAvg30d": 5.526
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1631,
      "ouatsu": 1734.553,
      "saikou": 14.59,
      "heikin": 5.64,
      "boshuAvg30d": 1542.1,
      "heikinAvg30d": 5.619
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1631,
      "ouatsu": 1791.049,
      "saikou": 13.85,
      "heikin": 5.29,
      "boshuAvg30d": 1541.1,
      "heikinAvg30d": 5.456
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1632,
      "ouatsu": 1916.976,
      "saikou": 10.76,
      "heikin": 4.76,
      "boshuAvg30d": 1541.1,
      "heikinAvg30d": 5.212
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1631,
      "ouatsu": 1786.742,
      "saikou": 10,
      "heikin": 4.33,
      "boshuAvg30d": 1541.1,
      "heikinAvg30d": 4.946
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1626,
      "ouatsu": 1976.376,
      "saikou": 10,
      "heikin": 3.91,
      "boshuAvg30d": 1536.1,
      "heikinAvg30d": 4.508
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1622,
      "ouatsu": 1951.512,
      "saikou": 10,
      "heikin": 3.77,
      "boshuAvg30d": 1535.0,
      "heikinAvg30d": 4.204
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1529,
      "ouatsu": 1913.067,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1441.0,
      "heikinAvg30d": 3.818
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1532,
      "ouatsu": 1843.06,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1444.0,
      "heikinAvg30d": 4.638
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1533,
      "ouatsu": 1925.719,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1445.8,
      "heikinAvg30d": 4.394
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1526,
      "ouatsu": 1922.777,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1439.8,
      "heikinAvg30d": 3.93
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1519,
      "ouatsu": 2011.84,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1430.9,
      "heikinAvg30d": 4.044
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1511,
      "ouatsu": 2008.732,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1421.9,
      "heikinAvg30d": 3.984
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
        "ouatsu": 121.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.506
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 155.658,
        "saikou": 1.01,
        "heikin": 0.79,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.456
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 198.558,
        "saikou": 1,
        "heikin": 0.7,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.23
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 132.708,
        "saikou": 1.01,
        "heikin": 0.93,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.555
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 193.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.355
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 225.858,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.378
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 198.618,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.867
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 198.618,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 2.174
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 247.408,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 2.46
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 202.558,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 2.248
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 245.458,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 2.343
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 243.468,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.85
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 200.658,
        "saikou": 9.95,
        "heikin": 1.62,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.262
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 189.358,
        "saikou": 8.9,
        "heikin": 1.98,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.1
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 119.708,
        "saikou": 9.95,
        "heikin": 1.93,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.839
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 148.408,
        "saikou": 9.05,
        "heikin": 2.65,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.924
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 160.658,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.607
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 198.668,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.152
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 206.508,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.858
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 166.508,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.795
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 157.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.794
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 157.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.165
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 200.6,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.028
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 202.568,
        "saikou": 5.79,
        "heikin": 1.07,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.017
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 161.658,
        "saikou": 9.9,
        "heikin": 1.1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.859
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 198.69,
        "saikou": 9.9,
        "heikin": 0.89,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.718
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 232.258,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.004
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 161.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.322
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 199.318,
        "saikou": 9.9,
        "heikin": 1.28,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.446
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 169.708,
        "saikou": 9.95,
        "heikin": 3.11,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.621
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 165.75,
        "saikou": 3.01,
        "heikin": 1.2,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 3.647
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 167.74,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.998
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 148.54,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.612
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 146.55,
        "saikou": 9.95,
        "heikin": 1.86,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.918
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
        "ouatsu": 121.568,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 4.001
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 94.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 3.946
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 119.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 3.656
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 167.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 3.605
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 157.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 3.064
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 159.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 2.949
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 159.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 2.046
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 157.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.902
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 157.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.58
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 159.668,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.515
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 157.7,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.046
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 194.75,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.893
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 194.75,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.655
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 84.939,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 8.536
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 95.609,
        "saikou": 10,
        "heikin": 9,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 8.842
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 111.491,
        "saikou": 10,
        "heikin": 8.96,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 9.958
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 111.491,
        "saikou": 10,
        "heikin": 9.24,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 10.028
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 109.493,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 9.749
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 109.493,
        "saikou": 10,
        "heikin": 8.03,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 9.789
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 109.991,
        "saikou": 10,
        "heikin": 7.86,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 9.816
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 111.491,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 9.806
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 113.49,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 9.749
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 113.49,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 9.547
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 113.49,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 9.51
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 113.49,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 9.911
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 113.49,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 10.465
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 111.99,
        "saikou": 10,
        "heikin": 9.1,
        "boshuAvg30d": 183.2,
        "heikinAvg30d": 10.782
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 113.49,
        "saikou": 10,
        "heikin": 9.05,
        "boshuAvg30d": 188.2,
        "heikinAvg30d": 10.945
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 113.99,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 191.2,
        "heikinAvg30d": 11.097
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 91.49,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 191.2,
        "heikinAvg30d": 11.313
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 89.99,
        "saikou": 10,
        "heikin": 8.2,
        "boshuAvg30d": 191.2,
        "heikinAvg30d": 11.046
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 104.136,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 157.6,
        "heikinAvg30d": 10.122
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 104.136,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 10.306
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 104.136,
        "saikou": 10,
        "heikin": 7.99,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 9.975
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 104.136,
        "saikou": 10,
        "heikin": 7.99,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 10.29
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 104.136,
        "saikou": 10,
        "heikin": 8.01,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 10.144
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 104.136,
        "saikou": 10,
        "heikin": 8.02,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 10.363
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 99.725,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 10.251
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 101.69,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 10.26
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 105.486,
        "saikou": 10,
        "heikin": 7.3,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 9.749
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 105.486,
        "saikou": 10,
        "heikin": 8.06,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 9.642
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 83.486,
        "saikou": 10,
        "heikin": 8.49,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 10.392
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 71.486,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 155.6,
        "heikinAvg30d": 10.396
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 91.486,
        "saikou": 10,
        "heikin": 8.82,
        "boshuAvg30d": 190.1,
        "heikinAvg30d": 10.563
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 91.486,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 190.1,
        "heikinAvg30d": 10.296
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 79.486,
        "saikou": 10,
        "heikin": 7.62,
        "boshuAvg30d": 190.1,
        "heikinAvg30d": 9.714
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 77.986,
        "saikou": 10,
        "heikin": 7.12,
        "boshuAvg30d": 188.2,
        "heikinAvg30d": 8.963
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 79.486,
        "saikou": 10,
        "heikin": 7.29,
        "boshuAvg30d": 186.2,
        "heikinAvg30d": 8.367
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 77.986,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 8.397
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 75.525,
        "saikou": 10,
        "heikin": 7.47,
        "boshuAvg30d": 182.2,
        "heikinAvg30d": 8.29
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 75.99,
        "saikou": 10,
        "heikin": 7.47,
        "boshuAvg30d": 182.2,
        "heikinAvg30d": 8.192
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 77.49,
        "saikou": 10,
        "heikin": 7.52,
        "boshuAvg30d": 182.2,
        "heikinAvg30d": 8.274
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 57.49,
        "saikou": 10,
        "heikin": 8.87,
        "boshuAvg30d": 182.2,
        "heikinAvg30d": 8.541
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 101.49,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 8.78
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 101.49,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 182.2,
        "heikinAvg30d": 9.054
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 99.59,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 8.586
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 101.49,
        "saikou": 10,
        "heikin": 6.68,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 8.959
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 101.49,
        "saikou": 10,
        "heikin": 7.22,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 9.343
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 101.49,
        "saikou": 10,
        "heikin": 7.53,
        "boshuAvg30d": 91.2,
        "heikinAvg30d": 8.665
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 101.49,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 90.2,
        "heikinAvg30d": 8.829
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 98.06,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 89.2,
        "heikinAvg30d": 9.182
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 539,
        "ouatsu": 612.262,
        "saikou": 9.8,
        "heikin": 3.35,
        "boshuAvg30d": 550.7,
        "heikinAvg30d": 4.015
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 539,
        "ouatsu": 616.771,
        "saikou": 9.7,
        "heikin": 3.26,
        "boshuAvg30d": 550.7,
        "heikinAvg30d": 3.894
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 539,
        "ouatsu": 582.096,
        "saikou": 9.7,
        "heikin": 3.33,
        "boshuAvg30d": 550.7,
        "heikinAvg30d": 3.889
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 539,
        "ouatsu": 630.886,
        "saikou": 9.9,
        "heikin": 3.23,
        "boshuAvg30d": 549.8,
        "heikinAvg30d": 3.62
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 537,
        "ouatsu": 620.538,
        "saikou": 9.9,
        "heikin": 3.91,
        "boshuAvg30d": 547.8,
        "heikinAvg30d": 3.5
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 537,
        "ouatsu": 573.577,
        "saikou": 9.9,
        "heikin": 3.73,
        "boshuAvg30d": 547.8,
        "heikinAvg30d": 3.513
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 536,
        "ouatsu": 608.275,
        "saikou": 9.9,
        "heikin": 3.79,
        "boshuAvg30d": 545.8,
        "heikinAvg30d": 3.405
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 537,
        "ouatsu": 622.983,
        "saikou": 9.9,
        "heikin": 3.98,
        "boshuAvg30d": 546.8,
        "heikinAvg30d": 3.451
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 538,
        "ouatsu": 622.823,
        "saikou": 9.9,
        "heikin": 4,
        "boshuAvg30d": 547.8,
        "heikinAvg30d": 3.508
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 538,
        "ouatsu": 624.311,
        "saikou": 9.9,
        "heikin": 4.01,
        "boshuAvg30d": 548.8,
        "heikinAvg30d": 3.433
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 538,
        "ouatsu": 611.339,
        "saikou": 9.9,
        "heikin": 3.92,
        "boshuAvg30d": 548.3,
        "heikinAvg30d": 3.547
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 538,
        "ouatsu": 610.237,
        "saikou": 9.9,
        "heikin": 4.09,
        "boshuAvg30d": 548.3,
        "heikinAvg30d": 3.519
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 559,
        "ouatsu": 618.216,
        "saikou": 9.9,
        "heikin": 3.84,
        "boshuAvg30d": 569.3,
        "heikinAvg30d": 4.065
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 567,
        "ouatsu": 583.497,
        "saikou": 9.9,
        "heikin": 4.27,
        "boshuAvg30d": 577.3,
        "heikinAvg30d": 4.283
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 572,
        "ouatsu": 491.884,
        "saikou": 9.9,
        "heikin": 3.68,
        "boshuAvg30d": 584.3,
        "heikinAvg30d": 4.259
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 577,
        "ouatsu": 455.011,
        "saikou": 9.98,
        "heikin": 3.61,
        "boshuAvg30d": 589.2,
        "heikinAvg30d": 4.248
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 577,
        "ouatsu": 577.592,
        "saikou": 9.98,
        "heikin": 4.24,
        "boshuAvg30d": 589.2,
        "heikinAvg30d": 4.455
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 577,
        "ouatsu": 560.778,
        "saikou": 9.98,
        "heikin": 4.51,
        "boshuAvg30d": 589.2,
        "heikinAvg30d": 4.46
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 568,
        "ouatsu": 491.438,
        "saikou": 9.9,
        "heikin": 4.87,
        "boshuAvg30d": 579.2,
        "heikinAvg30d": 4.525
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 568,
        "ouatsu": 530.365,
        "saikou": 9.9,
        "heikin": 4.55,
        "boshuAvg30d": 579.2,
        "heikinAvg30d": 4.306
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 568,
        "ouatsu": 535.266,
        "saikou": 9.98,
        "heikin": 4.55,
        "boshuAvg30d": 578.8,
        "heikinAvg30d": 4.075
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 567,
        "ouatsu": 505.958,
        "saikou": 9.98,
        "heikin": 4.54,
        "boshuAvg30d": 577.8,
        "heikinAvg30d": 4.13
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 564,
        "ouatsu": 517.395,
        "saikou": 9.9,
        "heikin": 5.09,
        "boshuAvg30d": 574.8,
        "heikinAvg30d": 4.196
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 564,
        "ouatsu": 545.711,
        "saikou": 9.9,
        "heikin": 4.75,
        "boshuAvg30d": 574.8,
        "heikinAvg30d": 4.153
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 563,
        "ouatsu": 527.018,
        "saikou": 9.98,
        "heikin": 4.9,
        "boshuAvg30d": 573.8,
        "heikinAvg30d": 4.031
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 563,
        "ouatsu": 595.706,
        "saikou": 9.9,
        "heikin": 4.47,
        "boshuAvg30d": 573.8,
        "heikinAvg30d": 4.009
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 563,
        "ouatsu": 600.201,
        "saikou": 9.96,
        "heikin": 5.25,
        "boshuAvg30d": 574.2,
        "heikinAvg30d": 3.932
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 562,
        "ouatsu": 522.454,
        "saikou": 10,
        "heikin": 6.27,
        "boshuAvg30d": 573.2,
        "heikinAvg30d": 3.952
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 561,
        "ouatsu": 541.157,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 573.2,
        "heikinAvg30d": 4.219
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 561,
        "ouatsu": 445.992,
        "saikou": 10,
        "heikin": 6.26,
        "boshuAvg30d": 573.2,
        "heikinAvg30d": 4.488
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 560,
        "ouatsu": 659.996,
        "saikou": 10,
        "heikin": 5.93,
        "boshuAvg30d": 572.2,
        "heikinAvg30d": 4.452
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 560,
        "ouatsu": 657.595,
        "saikou": 10,
        "heikin": 5.81,
        "boshuAvg30d": 572.2,
        "heikinAvg30d": 4.755
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 560,
        "ouatsu": 492.193,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 571.7,
        "heikinAvg30d": 4.999
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 560,
        "ouatsu": 473.756,
        "saikou": 10,
        "heikin": 6.68,
        "boshuAvg30d": 571.7,
        "heikinAvg30d": 5.245
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 560,
        "ouatsu": 542.193,
        "saikou": 10,
        "heikin": 6.36,
        "boshuAvg30d": 571.4,
        "heikinAvg30d": 5.354
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 560,
        "ouatsu": 504.967,
        "saikou": 10,
        "heikin": 5.45,
        "boshuAvg30d": 571.4,
        "heikinAvg30d": 5.411
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 562,
        "ouatsu": 583.657,
        "saikou": 10,
        "heikin": 4.98,
        "boshuAvg30d": 574.3,
        "heikinAvg30d": 5.235
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 562,
        "ouatsu": 602.497,
        "saikou": 10,
        "heikin": 4.83,
        "boshuAvg30d": 573.4,
        "heikinAvg30d": 5.06
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 563,
        "ouatsu": 602.065,
        "saikou": 10,
        "heikin": 5.02,
        "boshuAvg30d": 573.4,
        "heikinAvg30d": 4.843
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 563,
        "ouatsu": 489.54,
        "saikou": 10,
        "heikin": 5.56,
        "boshuAvg30d": 573.4,
        "heikinAvg30d": 4.578
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 561,
        "ouatsu": 631.784,
        "saikou": 9.9,
        "heikin": 4.3,
        "boshuAvg30d": 572.4,
        "heikinAvg30d": 4.099
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 561,
        "ouatsu": 540.793,
        "saikou": 9.9,
        "heikin": 4.92,
        "boshuAvg30d": 572.4,
        "heikinAvg30d": 4.019
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 560,
        "ouatsu": 549.597,
        "saikou": 10,
        "heikin": 4.44,
        "boshuAvg30d": 572.3,
        "heikinAvg30d": 3.611
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 560,
        "ouatsu": 461.027,
        "saikou": 9.9,
        "heikin": 5.63,
        "boshuAvg30d": 572.3,
        "heikinAvg30d": 4.759
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 560,
        "ouatsu": 402.845,
        "saikou": 9.9,
        "heikin": 3.5,
        "boshuAvg30d": 573.1,
        "heikinAvg30d": 4.403
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 558,
        "ouatsu": 444.334,
        "saikou": 9.9,
        "heikin": 4.69,
        "boshuAvg30d": 571.1,
        "heikinAvg30d": 3.913
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 556,
        "ouatsu": 432.224,
        "saikou": 9.9,
        "heikin": 4.98,
        "boshuAvg30d": 568.2,
        "heikinAvg30d": 4.203
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 555,
        "ouatsu": 469.67,
        "saikou": 10,
        "heikin": 4.5,
        "boshuAvg30d": 566.2,
        "heikinAvg30d": 4.283
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 238,
        "ouatsu": 394.501,
        "saikou": 2.73,
        "heikin": 1.89,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 4.986
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 238,
        "ouatsu": 353.203,
        "saikou": 7.89,
        "heikin": 2.59,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 4.832
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 238,
        "ouatsu": 409.119,
        "saikou": 6,
        "heikin": 1.48,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 4.798
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 238,
        "ouatsu": 411.098,
        "saikou": 6,
        "heikin": 1.53,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 4.987
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 237,
        "ouatsu": 393.24,
        "saikou": 6.99,
        "heikin": 1.6,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 5.604
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 237,
        "ouatsu": 399.181,
        "saikou": 6.99,
        "heikin": 1.6,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 5.568
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 237,
        "ouatsu": 418.939,
        "saikou": 6.91,
        "heikin": 1.59,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 5.316
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 237,
        "ouatsu": 399.039,
        "saikou": 6.87,
        "heikin": 1.51,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 5.184
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 237,
        "ouatsu": 353.57,
        "saikou": 7,
        "heikin": 2.53,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 5.178
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 237,
        "ouatsu": 453.069,
        "saikou": 6.99,
        "heikin": 1.59,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 5.107
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 237,
        "ouatsu": 386.17,
        "saikou": 7.34,
        "heikin": 2.98,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 4.735
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 237,
        "ouatsu": 384.67,
        "saikou": 7.5,
        "heikin": 2.98,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 5.1
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 247,
        "ouatsu": 529.697,
        "saikou": 1.83,
        "heikin": 1.56,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 5.89
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 250,
        "ouatsu": 519.913,
        "saikou": 2.79,
        "heikin": 1.63,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 6.025
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 253,
        "ouatsu": 502.848,
        "saikou": 2.56,
        "heikin": 1.62,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 6.16
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 255,
        "ouatsu": 476.602,
        "saikou": 7.79,
        "heikin": 2.67,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 6.302
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 255,
        "ouatsu": 398.114,
        "saikou": 8.4,
        "heikin": 2.85,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 6.437
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 255,
        "ouatsu": 477.068,
        "saikou": 7,
        "heikin": 1.44,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 6.364
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 259,
        "ouatsu": 452.761,
        "saikou": 7.85,
        "heikin": 1.97,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 6.542
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 259,
        "ouatsu": 445.465,
        "saikou": 7.85,
        "heikin": 2,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 6.444
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 260,
        "ouatsu": 380.587,
        "saikou": 8.98,
        "heikin": 2.77,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 6.359
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 259,
        "ouatsu": 360.41,
        "saikou": 8.4,
        "heikin": 2.81,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 6.391
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 258,
        "ouatsu": 437.29,
        "saikou": 7.83,
        "heikin": 2.07,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 6.199
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 257,
        "ouatsu": 410.101,
        "saikou": 8.46,
        "heikin": 2.57,
        "boshuAvg30d": 161.4,
        "heikinAvg30d": 6.295
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 254,
        "ouatsu": 299.322,
        "saikou": 8.4,
        "heikin": 3.36,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 6.173
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 254,
        "ouatsu": 298.3,
        "saikou": 8.4,
        "heikin": 3.36,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 6.236
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 254,
        "ouatsu": 412.801,
        "saikou": 8,
        "heikin": 2.88,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 6.448
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 254,
        "ouatsu": 412.801,
        "saikou": 7.9,
        "heikin": 3.18,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 6.508
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 253,
        "ouatsu": 470.743,
        "saikou": 7.89,
        "heikin": 3.18,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 6.534
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 253,
        "ouatsu": 470.743,
        "saikou": 8,
        "heikin": 3.41,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 6.449
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 252,
        "ouatsu": 462.859,
        "saikou": 7.88,
        "heikin": 3.28,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 6.324
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 252,
        "ouatsu": 462.859,
        "saikou": 7.8,
        "heikin": 3.55,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 6.165
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 252,
        "ouatsu": 468.753,
        "saikou": 7.29,
        "heikin": 4.3,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 5.798
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 252,
        "ouatsu": 451.232,
        "saikou": 7.83,
        "heikin": 5.83,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 5.759
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 252,
        "ouatsu": 453.22,
        "saikou": 7.89,
        "heikin": 5.88,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 5.244
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 252,
        "ouatsu": 448.721,
        "saikou": 7.25,
        "heikin": 5.66,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 4.891
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 250,
        "ouatsu": 436.641,
        "saikou": 7.39,
        "heikin": 5.71,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 5.508
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 250,
        "ouatsu": 443.539,
        "saikou": 6.99,
        "heikin": 5.34,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 5.013
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 250,
        "ouatsu": 451.432,
        "saikou": 6.99,
        "heikin": 3.12,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 4.777
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 250,
        "ouatsu": 444.132,
        "saikou": 5.6,
        "heikin": 2.21,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 4.861
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 250,
        "ouatsu": 442.272,
        "saikou": 5.64,
        "heikin": 2.27,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 4.202
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 250,
        "ouatsu": 439.572,
        "saikou": 3,
        "heikin": 1.74,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 4.157
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 250,
        "ouatsu": 435.592,
        "saikou": 5.1,
        "heikin": 1.86,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 4.23
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 251,
        "ouatsu": 428.292,
        "saikou": 1.13,
        "heikin": 1.02,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 5.435
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 251,
        "ouatsu": 444.292,
        "saikou": 3.67,
        "heikin": 0.91,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 5.578
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 250,
        "ouatsu": 426.373,
        "saikou": 3,
        "heikin": 1.39,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 5.41
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 249,
        "ouatsu": 440.152,
        "saikou": 0.8,
        "heikin": 0.68,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 5.653
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 246,
        "ouatsu": 487.183,
        "saikou": 2.97,
        "heikin": 2.28,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 5.614
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 1.51,
        "heikin": 1.03,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.132
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 0.78,
        "heikin": 0.78,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.923
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.475
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 0.61,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.977
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 0.61,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.182
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.008
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 1.53,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.678
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 1.58,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.25
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 1.61,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.293
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 20.93,
        "saikou": 1.58,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.74
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.3,
        "heikin": 0.8,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.047
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 22.929,
        "saikou": 2.8,
        "heikin": 1.16,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.341
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 22.929,
        "saikou": 2.47,
        "heikin": 2.47,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 4.88
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 22.929,
        "saikou": 0.65,
        "heikin": 0.65,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 4.886
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 22.929,
        "saikou": 0.46,
        "heikin": 0.46,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 5.724
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 22.929,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.64
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 22.929,
        "saikou": 8.3,
        "heikin": 3.87,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.938
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 22.929,
        "saikou": 5.32,
        "heikin": 3.59,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 6.788
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 12.939,
        "saikou": 3.74,
        "heikin": 3.74,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.266
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 14.261,
        "saikou": 7.43,
        "heikin": 4.41,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 7.087
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 9.5,
        "heikin": 4.72,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.706
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 9.5,
        "heikin": 4.72,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.973
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 7.43,
        "heikin": 4.68,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.169
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 4.55,
        "heikin": 4.55,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.327
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 21.261,
        "saikou": 9.7,
        "heikin": 4.87,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.562
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 9.5,
        "heikin": 5.04,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.465
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 7.43,
        "heikin": 6.95,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.893
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 8.07,
        "heikin": 8.05,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.248
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 22.929,
        "saikou": 9.5,
        "heikin": 8.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.518
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.929,
        "saikou": 9.5,
        "heikin": 8.4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.431
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 6.545,
        "saikou": 9.47,
        "heikin": 9.47,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.332
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 15.001,
        "saikou": 7.81,
        "heikin": 7.02,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.425
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 13.123,
        "saikou": 9.88,
        "heikin": 9.56,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.532
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 33.929,
        "saikou": 14.35,
        "heikin": 13.93,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.432
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 33.929,
        "saikou": 14.33,
        "heikin": 13.54,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.097
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 28.679,
        "saikou": 14.58,
        "heikin": 14.58,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.853
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 30.625,
        "saikou": 14.59,
        "heikin": 13.8,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 7.21
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 33.929,
        "saikou": 13.85,
        "heikin": 13.85,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.937
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 33.929,
        "saikou": 7.88,
        "heikin": 7.83,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.424
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 33.929,
        "saikou": 5.57,
        "heikin": 5.57,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.734
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 33.929,
        "saikou": 5.58,
        "heikin": 5.58,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.194
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 33.929,
        "saikou": 4.89,
        "heikin": 4.89,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.62
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.049
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.838
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.03
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 5.382
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 5.747
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 5.297
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 109.697,
        "saikou": 1.33,
        "heikin": 0.8,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 1.916
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 143.033,
        "saikou": 1.33,
        "heikin": 0.61,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 2.909
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 110.979,
        "saikou": 3,
        "heikin": 1.39,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 2.579
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 90.024,
        "saikou": 3,
        "heikin": 2.67,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 2.621
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 88.026,
        "saikou": 3,
        "heikin": 2.67,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 2.642
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 88.026,
        "saikou": 3,
        "heikin": 2.68,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 2.936
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 2.64,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 2.329
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 88.074,
        "saikou": 3,
        "heikin": 1.98,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 2.761
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 88.004,
        "saikou": 1.39,
        "heikin": 1.34,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 2.31
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 1.83,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 2.115
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 80.92,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 2.213
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 1.6,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 2.11
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 4.768
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 4.815
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.927
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 95.92,
        "saikou": 6.99,
        "heikin": 4.06,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 5.233
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 95.92,
        "saikou": 9.97,
        "heikin": 4.85,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 6.103
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 113.754,
        "saikou": 3,
        "heikin": 2.33,
        "boshuAvg30d": 160.8,
        "heikinAvg30d": 6.377
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 7.88,
        "heikin": 3.88,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 6.117
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 7.88,
        "heikin": 3.27,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 6.026
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 10,
        "heikin": 6.04,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 5.615
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 10,
        "heikin": 5.76,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 5.473
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 7.8,
        "heikin": 4.02,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 5.435
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 9,
        "heikin": 4.69,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 5.6
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 99.787,
        "saikou": 10,
        "heikin": 6.17,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 6.139
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 130.831,
        "saikou": 10,
        "heikin": 5.3,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 5.691
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 95.92,
        "saikou": 7.8,
        "heikin": 4.02,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 5.553
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 95.92,
        "saikou": 7.8,
        "heikin": 4.02,
        "boshuAvg30d": 157.9,
        "heikinAvg30d": 5.765
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 80.92,
        "saikou": 10,
        "heikin": 5.06,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 5.695
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 80.92,
        "saikou": 9.44,
        "heikin": 4.26,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 5.488
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 80.92,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 5.331
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 80.92,
        "saikou": 7.8,
        "heikin": 3.1,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 5.264
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 95.92,
        "saikou": 6.99,
        "heikin": 3.9,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 4.969
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 95.92,
        "saikou": 7.8,
        "heikin": 4.01,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 5.181
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 95.92,
        "saikou": 7.8,
        "heikin": 3.91,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 4.519
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.787,
        "saikou": 6.97,
        "heikin": 4.73,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 4.472
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 97.827,
        "saikou": 6.99,
        "heikin": 4.82,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 4.451
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 97.827,
        "saikou": 6.97,
        "heikin": 4.37,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 4.257
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 99.787,
        "saikou": 6.97,
        "heikin": 4.37,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 4.229
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 99.787,
        "saikou": 3.35,
        "heikin": 3.35,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 4.228
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 99.787,
        "saikou": 3.35,
        "heikin": 3.35,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 3.904
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 3.912
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 95.92,
        "saikou": 3.46,
        "heikin": 3.3,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 3.604
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 3.806
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 3.433
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 95.92,
        "saikou": 3.7,
        "heikin": 3.31,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 3.474
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 4.085
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 95.92,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 4.756
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 229.359,
        "saikou": 2.13,
        "heikin": 1.05,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.916
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 175.311,
        "saikou": 6.38,
        "heikin": 4.66,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 3.182
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 175.311,
        "saikou": 6.38,
        "heikin": 4.16,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 3.106
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 205.895,
        "saikou": 4.49,
        "heikin": 2.75,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.969
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 205.895,
        "saikou": 4.49,
        "heikin": 2.75,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.945
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 205.895,
        "saikou": 4.07,
        "heikin": 2.58,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.988
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 222.754,
        "saikou": 4.07,
        "heikin": 2.59,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 2.99
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 210.027,
        "saikou": 4.34,
        "heikin": 3.81,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 3.004
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 210.027,
        "saikou": 6.38,
        "heikin": 4.02,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 2.95
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 194.16,
        "saikou": 6.38,
        "heikin": 4.39,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 3.004
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 194.16,
        "saikou": 6.38,
        "heikin": 4.52,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 3.263
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 194.16,
        "saikou": 6.38,
        "heikin": 4.81,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 3.173
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 194.16,
        "saikou": 6.52,
        "heikin": 5.94,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 3.391
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 194.16,
        "saikou": 6.38,
        "heikin": 4.51,
        "boshuAvg30d": 136.3,
        "heikinAvg30d": 2.881
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 194.16,
        "saikou": 6.38,
        "heikin": 4.38,
        "boshuAvg30d": 137.3,
        "heikinAvg30d": 2.848
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 194.16,
        "saikou": 6.38,
        "heikin": 4.29,
        "boshuAvg30d": 137.3,
        "heikinAvg30d": 2.859
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 216.674,
        "saikou": 6.38,
        "heikin": 2.99,
        "boshuAvg30d": 137.3,
        "heikinAvg30d": 3.007
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 223.529,
        "saikou": 4.54,
        "heikin": 2.44,
        "boshuAvg30d": 137.3,
        "heikinAvg30d": 3.673
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 286.389,
        "saikou": 2.13,
        "heikin": 0.8,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 3.531
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 236.497,
        "saikou": 2.13,
        "heikin": 0.97,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 3.023
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 236.497,
        "saikou": 1.56,
        "heikin": 0.84,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.774
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 224.559,
        "saikou": 4.61,
        "heikin": 1.81,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.648
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 224.559,
        "saikou": 4.4,
        "heikin": 1.56,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.49
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 224.559,
        "saikou": 6.38,
        "heikin": 1.87,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.577
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 226.359,
        "saikou": 2.13,
        "heikin": 1.13,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.929
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 226.359,
        "saikou": 2.44,
        "heikin": 1.33,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.851
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 226.359,
        "saikou": 6.38,
        "heikin": 1.83,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.38
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 260.054,
        "saikou": 6.47,
        "heikin": 2.61,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.96
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 203.914,
        "saikou": 7.7,
        "heikin": 6.19,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.9
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 205.298,
        "saikou": 8.28,
        "heikin": 6.87,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 3.393
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 100.252,
        "saikou": 8.16,
        "heikin": 6.68,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 4.575
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 100.252,
        "saikou": 9.21,
        "heikin": 7.39,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 5.926
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 38.539,
        "saikou": 7,
        "heikin": 5.73,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 6.407
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 38.539,
        "saikou": 7,
        "heikin": 5.73,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 7.464
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 38.539,
        "saikou": 7,
        "heikin": 5.73,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 8.328
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 38.539,
        "saikou": 7,
        "heikin": 5.73,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 8.307
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 36.549,
        "saikou": 7,
        "heikin": 5.73,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 8.321
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 36.549,
        "saikou": 6.98,
        "heikin": 5.61,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 8.474
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 84.15,
        "saikou": 8.89,
        "heikin": 7.87,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 8.105
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 100.252,
        "saikou": 7.82,
        "heikin": 6.51,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 7.43
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 100.252,
        "saikou": 7.83,
        "heikin": 6.52,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 7.146
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 165.296,
        "saikou": 7.12,
        "heikin": 5.07,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 6.423
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 124.787,
        "saikou": 6.75,
        "heikin": 5.47,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 5.678
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 147.75,
        "saikou": 6.38,
        "heikin": 3.89,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 5.202
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 243.641,
        "saikou": 3.17,
        "heikin": 2.52,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 4.41
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 220.097,
        "saikou": 3,
        "heikin": 1.73,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 3.979
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 270.441,
        "saikou": 2.13,
        "heikin": 0.91,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 3.75
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 256.638,
        "saikou": 2.13,
        "heikin": 0.91,
        "boshuAvg30d": 137.3,
        "heikinAvg30d": 3.063
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.87,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.625
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.616
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.85,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.612
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.87,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.566
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.87,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.546
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.85,
        "boshuAvg30d": 39.0,
        "heikinAvg30d": 0.548
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 211.473,
        "saikou": 2.5,
        "heikin": 0.87,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.686
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 199.93,
        "saikou": 2.3,
        "heikin": 0.78,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.673
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 211.473,
        "saikou": 2.5,
        "heikin": 0.87,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.672
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 211.473,
        "saikou": 2.5,
        "heikin": 0.89,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.668
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 211.473,
        "saikou": 2.5,
        "heikin": 0.89,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.687
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 211.473,
        "saikou": 2.5,
        "heikin": 0.89,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.682
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 161.973,
        "saikou": 2.5,
        "heikin": 1.04,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.618
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 161.973,
        "saikou": 2.5,
        "heikin": 1.04,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.631
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 161.973,
        "saikou": 2.5,
        "heikin": 1.02,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.654
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 214.473,
        "saikou": 1.44,
        "heikin": 0.45,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.633
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 214.473,
        "saikou": 1.32,
        "heikin": 0.44,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.637
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 214.473,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.695
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 116.43,
        "saikou": 1.7,
        "heikin": 0.97,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 1.151
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 102.43,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 1.144
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 127.973,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.103
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 4,
        "heikin": 0.95,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.081
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 4,
        "heikin": 0.95,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.121
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 4,
        "heikin": 0.95,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.178
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.23
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 1.6,
        "heikin": 0.94,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.129
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.03
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 1.6,
        "heikin": 0.81,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.948
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 4,
        "heikin": 0.9,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.981
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 4,
        "heikin": 0.68,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.899
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 4.11,
        "heikin": 0.99,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.06
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 4.89,
        "heikin": 1.04,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.977
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 6,
        "heikin": 1.08,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.963
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 141.93,
        "saikou": 5.5,
        "heikin": 0.76,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.909
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 141.93,
        "saikou": 6.5,
        "heikin": 0.78,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.022
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 141.93,
        "saikou": 7,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.901
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 141.93,
        "saikou": 5.5,
        "heikin": 0.76,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.943
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 141.93,
        "saikou": 5,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.902
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 5.5,
        "heikin": 1.07,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.94
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 5.5,
        "heikin": 1.07,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.953
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 4.89,
        "heikin": 1.04,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.86
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 2.5,
        "heikin": 0.8,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.853
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 2.5,
        "heikin": 0.95,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.893
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 2.5,
        "heikin": 0.95,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.873
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.86,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.786
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 214.473,
        "saikou": 4,
        "heikin": 0.87,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.631
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.86,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.601
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 161.973,
        "saikou": 2.5,
        "heikin": 1.02,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.606
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 216.22,
        "saikou": 6,
        "heikin": 4.7,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.451
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 185.128,
        "saikou": 4.41,
        "heikin": 3.96,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.427
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 246.864,
        "saikou": 3.66,
        "heikin": 3.12,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.212
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 246.862,
        "saikou": 4.08,
        "heikin": 3.45,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.447
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 244.884,
        "saikou": 5.66,
        "heikin": 4.53,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 4.301
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 246.862,
        "saikou": 5.55,
        "heikin": 4.46,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 4.337
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 262.173,
        "saikou": 5.91,
        "heikin": 4.77,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.101
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 256.395,
        "saikou": 6.26,
        "heikin": 5.22,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.205
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 258.245,
        "saikou": 5.99,
        "heikin": 5.05,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.159
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 260.223,
        "saikou": 6.11,
        "heikin": 5.01,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.126
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 262.173,
        "saikou": 6.37,
        "heikin": 5.29,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 4.069
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 260.197,
        "saikou": 6.36,
        "heikin": 5.17,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 3.851
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 262.183,
        "saikou": 5.55,
        "heikin": 4.47,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 3.564
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 258.331,
        "saikou": 5.37,
        "heikin": 4.45,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 3.457
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 256.347,
        "saikou": 4.27,
        "heikin": 3.76,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 3.744
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 268.543,
        "saikou": 4.16,
        "heikin": 3.91,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 3.729
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 263.533,
        "saikou": 5.78,
        "heikin": 5.57,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 3.788
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 248.533,
        "saikou": 6.37,
        "heikin": 6.35,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 4.359
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 262.703,
        "saikou": 6.57,
        "heikin": 6.1,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.354
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 255.703,
        "saikou": 6.71,
        "heikin": 6.56,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 4.183
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 253.271,
        "saikou": 6.62,
        "heikin": 6.13,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.984
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 255.363,
        "saikou": 6.47,
        "heikin": 5.68,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.929
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 238.339,
        "saikou": 6.83,
        "heikin": 5.94,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 4.01
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 234.415,
        "saikou": 6.78,
        "heikin": 5.9,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 4.086
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 251.672,
        "saikou": 6.01,
        "heikin": 5.31,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.537
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 239.672,
        "saikou": 6.3,
        "heikin": 5.57,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.792
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 251.645,
        "saikou": 7.14,
        "heikin": 6.45,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 4.098
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 232.793,
        "saikou": 8.21,
        "heikin": 7.9,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 4.712
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 223.345,
        "saikou": 11.05,
        "heikin": 8.82,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 5.446
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 236.103,
        "saikou": 11.63,
        "heikin": 9.99,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 6.185
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 239.251,
        "saikou": 11.63,
        "heikin": 8.61,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 5.496
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 252.251,
        "saikou": 12,
        "heikin": 8.47,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 6.718
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 252.251,
        "saikou": 10.63,
        "heikin": 9.03,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 7.029
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 377.262,
        "saikou": 16.15,
        "heikin": 14.17,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 7.417
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 376.262,
        "saikou": 13.27,
        "heikin": 10.69,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.236
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 303.262,
        "saikou": 16.98,
        "heikin": 13.29,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.519
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 237.131,
        "saikou": 14.18,
        "heikin": 11.44,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 7.793
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 239.12,
        "saikou": 10.86,
        "heikin": 9.33,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 7.71
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 246.932,
        "saikou": 10.76,
        "heikin": 8.76,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.894
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 250.421,
        "saikou": 8.06,
        "heikin": 7.03,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.273
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 253.721,
        "saikou": 5.78,
        "heikin": 5.35,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.448
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 261.371,
        "saikou": 4.74,
        "heikin": 4.46,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 4.543
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 258.461,
        "saikou": 4.32,
        "heikin": 4.07,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 4.138
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 259.461,
        "saikou": 7.46,
        "heikin": 6.7,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.364
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 259.461,
        "saikou": 5.55,
        "heikin": 5.25,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.085
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 258.461,
        "saikou": 4.97,
        "heikin": 4.54,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 4.329
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 258.461,
        "saikou": 4.73,
        "heikin": 4.42,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 4.307
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 240.609,
        "saikou": 3.57,
        "heikin": 3.35,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 3.766
      }
    ]
  }
};
