// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/02〜2026/08/31）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-01",
  "fetchedAt": "2026-09-01",
  "avgWindowLabel": "過去30日平均（2026/08/02〜2026/08/31）",
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
      "ouatsu": 1789.294,
      "saikou": 15,
      "heikin": 3.53,
      "boshuAvg30d": 1417.8,
      "heikinAvg30d": 3.451
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1545,
      "ouatsu": 1775.723,
      "saikou": 15,
      "heikin": 3.69,
      "boshuAvg30d": 1417.8,
      "heikinAvg30d": 3.547
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1545,
      "ouatsu": 1929.788,
      "saikou": 15,
      "heikin": 3.48,
      "boshuAvg30d": 1417.8,
      "heikinAvg30d": 3.628
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1545,
      "ouatsu": 1913.035,
      "saikou": 15,
      "heikin": 3.33,
      "boshuAvg30d": 1415.8,
      "heikinAvg30d": 3.609
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1540,
      "ouatsu": 1867.226,
      "saikou": 15,
      "heikin": 3.44,
      "boshuAvg30d": 1410.8,
      "heikinAvg30d": 3.577
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1539,
      "ouatsu": 1910.729,
      "saikou": 15,
      "heikin": 3.46,
      "boshuAvg30d": 1408.8,
      "heikinAvg30d": 3.636
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1539,
      "ouatsu": 2056.07,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1441.2,
      "heikinAvg30d": 3.591
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1540,
      "ouatsu": 2063.361,
      "saikou": 15,
      "heikin": 3.51,
      "boshuAvg30d": 1442.2,
      "heikinAvg30d": 3.669
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1543,
      "ouatsu": 2032.486,
      "saikou": 15,
      "heikin": 3.51,
      "boshuAvg30d": 1446.2,
      "heikinAvg30d": 3.668
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1543,
      "ouatsu": 2036.924,
      "saikou": 15,
      "heikin": 3.5,
      "boshuAvg30d": 1447.2,
      "heikinAvg30d": 3.576
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1543,
      "ouatsu": 1983.375,
      "saikou": 15,
      "heikin": 3.77,
      "boshuAvg30d": 1446.8,
      "heikinAvg30d": 3.608
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1543,
      "ouatsu": 1973.698,
      "saikou": 15,
      "heikin": 3.86,
      "boshuAvg30d": 1446.8,
      "heikinAvg30d": 3.562
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1609,
      "ouatsu": 1963.063,
      "saikou": 15,
      "heikin": 3.98,
      "boshuAvg30d": 1512.6,
      "heikinAvg30d": 4.209
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1630,
      "ouatsu": 1932.861,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1535.6,
      "heikinAvg30d": 4.322
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1653,
      "ouatsu": 1885.285,
      "saikou": 15,
      "heikin": 3.26,
      "boshuAvg30d": 1558.6,
      "heikinAvg30d": 4.402
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1671,
      "ouatsu": 1893.102,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1573.5,
      "heikinAvg30d": 4.41
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1672,
      "ouatsu": 2194.282,
      "saikou": 15,
      "heikin": 3.62,
      "boshuAvg30d": 1573.5,
      "heikinAvg30d": 4.593
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1672,
      "ouatsu": 2136.099,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1573.5,
      "heikinAvg30d": 4.742
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1609,
      "ouatsu": 1817.563,
      "saikou": 15,
      "heikin": 4.12,
      "boshuAvg30d": 1548.6,
      "heikinAvg30d": 4.667
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1613,
      "ouatsu": 2054.812,
      "saikou": 15,
      "heikin": 3.45,
      "boshuAvg30d": 1553.6,
      "heikinAvg30d": 4.542
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1621,
      "ouatsu": 1990.678,
      "saikou": 15,
      "heikin": 4.14,
      "boshuAvg30d": 1560.2,
      "heikinAvg30d": 4.299
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1621,
      "ouatsu": 2074.321,
      "saikou": 15,
      "heikin": 3.71,
      "boshuAvg30d": 1560.2,
      "heikinAvg30d": 4.343
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1618,
      "ouatsu": 2028.194,
      "saikou": 15,
      "heikin": 3.91,
      "boshuAvg30d": 1555.2,
      "heikinAvg30d": 4.263
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1617,
      "ouatsu": 1974.226,
      "saikou": 15,
      "heikin": 4.24,
      "boshuAvg30d": 1555.2,
      "heikinAvg30d": 4.307
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1610,
      "ouatsu": 2156.438,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1548.3,
      "heikinAvg30d": 4.097
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1610,
      "ouatsu": 2131.814,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1548.3,
      "heikinAvg30d": 4.12
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1610,
      "ouatsu": 2408.379,
      "saikou": 10,
      "heikin": 3.41,
      "boshuAvg30d": 1548.8,
      "heikinAvg30d": 4.236
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1604,
      "ouatsu": 2227.927,
      "saikou": 10,
      "heikin": 4.28,
      "boshuAvg30d": 1542.8,
      "heikinAvg30d": 4.429
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1599,
      "ouatsu": 2083.54,
      "saikou": 10,
      "heikin": 4.15,
      "boshuAvg30d": 1540.8,
      "heikinAvg30d": 4.662
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1592,
      "ouatsu": 2268.786,
      "saikou": 11.05,
      "heikin": 4.11,
      "boshuAvg30d": 1536.8,
      "heikinAvg30d": 4.93
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1649,
      "ouatsu": 2284.167,
      "saikou": 10,
      "heikin": 3.98,
      "boshuAvg30d": 1558.5,
      "heikinAvg30d": 4.915
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1649,
      "ouatsu": 2227.72,
      "saikou": 11.63,
      "heikin": 4.03,
      "boshuAvg30d": 1558.5,
      "heikinAvg30d": 5.223
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1649,
      "ouatsu": 2077.02,
      "saikou": 12.55,
      "heikin": 4.67,
      "boshuAvg30d": 1559.1,
      "heikinAvg30d": 5.284
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1647,
      "ouatsu": 2012.517,
      "saikou": 13.05,
      "heikin": 5.47,
      "boshuAvg30d": 1554.1,
      "heikinAvg30d": 5.5
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1643,
      "ouatsu": 2092.596,
      "saikou": 13.19,
      "heikin": 5.92,
      "boshuAvg30d": 1551.7,
      "heikinAvg30d": 5.548
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1639,
      "ouatsu": 1895.476,
      "saikou": 13.19,
      "heikin": 5.47,
      "boshuAvg30d": 1547.7,
      "heikinAvg30d": 5.507
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1631,
      "ouatsu": 2080.832,
      "saikou": 12.9,
      "heikin": 5.54,
      "boshuAvg30d": 1538.7,
      "heikinAvg30d": 5.61
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1631,
      "ouatsu": 1972.045,
      "saikou": 10.4,
      "heikin": 4.82,
      "boshuAvg30d": 1537.7,
      "heikinAvg30d": 5.472
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1632,
      "ouatsu": 1925.647,
      "saikou": 9.99,
      "heikin": 4.8,
      "boshuAvg30d": 1537.7,
      "heikinAvg30d": 5.229
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1631,
      "ouatsu": 2106.322,
      "saikou": 9.99,
      "heikin": 4.15,
      "boshuAvg30d": 1537.7,
      "heikinAvg30d": 4.986
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1626,
      "ouatsu": 2123.204,
      "saikou": 9.99,
      "heikin": 3.74,
      "boshuAvg30d": 1532.7,
      "heikinAvg30d": 4.565
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1622,
      "ouatsu": 2076.381,
      "saikou": 15,
      "heikin": 3.57,
      "boshuAvg30d": 1531.7,
      "heikinAvg30d": 4.262
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1529,
      "ouatsu": 1996.097,
      "saikou": 9.8,
      "heikin": 3.31,
      "boshuAvg30d": 1440.6,
      "heikinAvg30d": 3.87
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1532,
      "ouatsu": 1895.131,
      "saikou": 10,
      "heikin": 3.95,
      "boshuAvg30d": 1443.6,
      "heikinAvg30d": 4.687
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1533,
      "ouatsu": 1888.6,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1445.4,
      "heikinAvg30d": 4.433
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1526,
      "ouatsu": 1985.147,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1439.4,
      "heikinAvg30d": 3.946
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1519,
      "ouatsu": 1896.504,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1430.4,
      "heikinAvg30d": 4.06
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1511,
      "ouatsu": 2063.651,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1421.4,
      "heikinAvg30d": 4.016
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
        "ouatsu": 118.658,
        "saikou": 2.5,
        "heikin": 1.16,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.517
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 118.658,
        "saikou": 2.5,
        "heikin": 1.26,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.447
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 161.558,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.227
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 116.708,
        "saikou": 3.99,
        "heikin": 1.47,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.537
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 177.838,
        "saikou": 9.9,
        "heikin": 1.11,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.349
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 156.668,
        "saikou": 9.95,
        "heikin": 2.12,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.353
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 185.648,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.896
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 194.008,
        "saikou": 1.64,
        "heikin": 1.07,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.203
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 170.558,
        "saikou": 6,
        "heikin": 1.11,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.491
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 172.758,
        "saikou": 2.23,
        "heikin": 1.14,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.281
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 148.798,
        "saikou": 6,
        "heikin": 1.18,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.375
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 152.068,
        "saikou": 1.01,
        "heikin": 0.94,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.853
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 128.658,
        "saikou": 9.95,
        "heikin": 2.22,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.214
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 152.668,
        "saikou": 9.8,
        "heikin": 2.58,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.048
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 156.708,
        "saikou": 9.95,
        "heikin": 1.85,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.804
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 154.718,
        "saikou": 9.1,
        "heikin": 2.55,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.866
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 222.808,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.613
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 201.518,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.153
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 158.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.858
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 167.658,
        "saikou": 1.01,
        "heikin": 0.79,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.802
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 154.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.794
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 163.398,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.165
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 163.398,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.028
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 161.43,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.016
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 167.338,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.86
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 167.338,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.719
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 177.338,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.006
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 165.37,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.322
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 163.398,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.446
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.621
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.647
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 154.74,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.99
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 153.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.618
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 151.7,
        "saikou": 1.33,
        "heikin": 1.26,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.945
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 95.04,
        "saikou": 1.33,
        "heikin": 1.33,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.585
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 87.75,
        "saikou": 1.39,
        "heikin": 1.39,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.006
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 93.658,
        "saikou": 1.32,
        "heikin": 1.3,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 3.963
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 154.458,
        "saikou": 1.41,
        "heikin": 1.33,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 3.698
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 154.74,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 3.633
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 152.75,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 3.09
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 154.7,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.976
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 164.7,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.072
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 189.74,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.905
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 164.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.583
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 188.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.537
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 203.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.049
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 164.718,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.914
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 235.174,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.684
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 79.309,
        "saikou": 15,
        "heikin": 6.91,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 8.58
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 79.309,
        "saikou": 15,
        "heikin": 7.91,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 8.89
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 95.191,
        "saikou": 15,
        "heikin": 9.46,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 9.988
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 95.191,
        "saikou": 15,
        "heikin": 9.48,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 10.032
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 93.193,
        "saikou": 15,
        "heikin": 9.29,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 9.755
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 93.193,
        "saikou": 15,
        "heikin": 9.43,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 9.784
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 108.191,
        "saikou": 10,
        "heikin": 8.03,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.865
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 109.691,
        "saikou": 15,
        "heikin": 8.12,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.85
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 111.69,
        "saikou": 15,
        "heikin": 8.15,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.786
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 111.69,
        "saikou": 15,
        "heikin": 7.95,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.587
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 111.69,
        "saikou": 15,
        "heikin": 8.14,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.544
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 111.69,
        "saikou": 15,
        "heikin": 8.51,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 9.956
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 111.69,
        "saikou": 15,
        "heikin": 8.51,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 10.538
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 90.19,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 183.0,
        "heikinAvg30d": 10.848
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 91.69,
        "saikou": 15,
        "heikin": 9.29,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 11.009
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 90.19,
        "saikou": 10,
        "heikin": 9.2,
        "boshuAvg30d": 191.0,
        "heikinAvg30d": 11.162
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 113.69,
        "saikou": 15,
        "heikin": 8.69,
        "boshuAvg30d": 191.0,
        "heikinAvg30d": 11.406
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 112.19,
        "saikou": 10,
        "heikin": 8.53,
        "boshuAvg30d": 191.0,
        "heikinAvg30d": 11.142
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 112.36,
        "saikou": 15,
        "heikin": 8.56,
        "boshuAvg30d": 160.1,
        "heikinAvg30d": 10.21
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 112.36,
        "saikou": 15,
        "heikin": 8.56,
        "boshuAvg30d": 161.1,
        "heikinAvg30d": 10.396
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 112.36,
        "saikou": 15,
        "heikin": 8.43,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 10.065
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 101.69,
        "saikou": 15,
        "heikin": 8.72,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 10.39
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 112.406,
        "saikou": 15,
        "heikin": 8.3,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 10.257
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 99.836,
        "saikou": 15,
        "heikin": 8.97,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 10.454
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 97.225,
        "saikou": 10,
        "heikin": 8.68,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 10.351
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 99.19,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 10.363
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 115.686,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 9.871
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 115.686,
        "saikou": 10,
        "heikin": 8.22,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 9.745
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 93.686,
        "saikou": 10,
        "heikin": 9.11,
        "boshuAvg30d": 161.3,
        "heikinAvg30d": 10.458
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 93.686,
        "saikou": 10,
        "heikin": 9.28,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 10.457
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 113.686,
        "saikou": 10,
        "heikin": 8.83,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 10.693
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 113.686,
        "saikou": 9.49,
        "heikin": 7.49,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 10.441
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 113.686,
        "saikou": 9.49,
        "heikin": 6.88,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 9.884
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 112.186,
        "saikou": 10,
        "heikin": 6.99,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 9.113
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 113.686,
        "saikou": 10,
        "heikin": 7.3,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 8.468
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 112.186,
        "saikou": 10,
        "heikin": 6.86,
        "boshuAvg30d": 184.0,
        "heikinAvg30d": 8.482
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 109.725,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 8.345
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 110.19,
        "saikou": 10,
        "heikin": 6.8,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 8.211
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 111.69,
        "saikou": 9.99,
        "heikin": 7.46,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 8.303
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 111.69,
        "saikou": 9.99,
        "heikin": 7.82,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 8.628
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 111.69,
        "saikou": 9.99,
        "heikin": 7.75,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 8.917
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 111.69,
        "saikou": 15,
        "heikin": 8.14,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 9.17
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 97.19,
        "saikou": 9.49,
        "heikin": 6.74,
        "boshuAvg30d": 94.9,
        "heikinAvg30d": 8.681
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 111.69,
        "saikou": 9.99,
        "heikin": 7.3,
        "boshuAvg30d": 94.9,
        "heikinAvg30d": 9.112
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 111.69,
        "saikou": 9.99,
        "heikin": 7.08,
        "boshuAvg30d": 94.9,
        "heikinAvg30d": 9.509
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 111.69,
        "saikou": 9.99,
        "heikin": 8.21,
        "boshuAvg30d": 93.9,
        "heikinAvg30d": 8.786
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 111.69,
        "saikou": 9.99,
        "heikin": 7.87,
        "boshuAvg30d": 92.9,
        "heikinAvg30d": 8.973
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 110.19,
        "saikou": 9.99,
        "heikin": 7.17,
        "boshuAvg30d": 91.9,
        "heikinAvg30d": 9.36
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 539,
        "ouatsu": 503.029,
        "saikou": 10,
        "heikin": 4.04,
        "boshuAvg30d": 551.0,
        "heikinAvg30d": 3.999
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 539,
        "ouatsu": 489.807,
        "saikou": 10,
        "heikin": 4.05,
        "boshuAvg30d": 551.0,
        "heikinAvg30d": 3.88
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 539,
        "ouatsu": 545.244,
        "saikou": 10,
        "heikin": 3.93,
        "boshuAvg30d": 551.0,
        "heikinAvg30d": 3.88
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 539,
        "ouatsu": 555.197,
        "saikou": 10,
        "heikin": 3.71,
        "boshuAvg30d": 550.0,
        "heikinAvg30d": 3.614
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 537,
        "ouatsu": 510.149,
        "saikou": 10,
        "heikin": 3.55,
        "boshuAvg30d": 548.0,
        "heikinAvg30d": 3.517
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 537,
        "ouatsu": 526.373,
        "saikou": 9.9,
        "heikin": 3.54,
        "boshuAvg30d": 548.0,
        "heikinAvg30d": 3.511
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 536,
        "ouatsu": 557.314,
        "saikou": 9.9,
        "heikin": 3.37,
        "boshuAvg30d": 546.0,
        "heikinAvg30d": 3.405
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 537,
        "ouatsu": 553.874,
        "saikou": 9.98,
        "heikin": 3.67,
        "boshuAvg30d": 547.0,
        "heikinAvg30d": 3.437
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 538,
        "ouatsu": 535.053,
        "saikou": 9.9,
        "heikin": 3.65,
        "boshuAvg30d": 548.0,
        "heikinAvg30d": 3.491
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 538,
        "ouatsu": 559.164,
        "saikou": 10,
        "heikin": 3.48,
        "boshuAvg30d": 549.0,
        "heikinAvg30d": 3.415
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 538,
        "ouatsu": 553.077,
        "saikou": 10,
        "heikin": 3.95,
        "boshuAvg30d": 548.6,
        "heikinAvg30d": 3.519
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 538,
        "ouatsu": 544.7,
        "saikou": 10,
        "heikin": 3.75,
        "boshuAvg30d": 548.6,
        "heikinAvg30d": 3.512
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 559,
        "ouatsu": 565.877,
        "saikou": 10,
        "heikin": 3.9,
        "boshuAvg30d": 569.6,
        "heikinAvg30d": 4.063
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 567,
        "ouatsu": 531.158,
        "saikou": 10,
        "heikin": 4.27,
        "boshuAvg30d": 577.6,
        "heikinAvg30d": 4.278
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 572,
        "ouatsu": 425.058,
        "saikou": 10,
        "heikin": 3.75,
        "boshuAvg30d": 584.6,
        "heikinAvg30d": 4.276
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 577,
        "ouatsu": 425.058,
        "saikou": 10,
        "heikin": 3.91,
        "boshuAvg30d": 589.5,
        "heikinAvg30d": 4.263
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 577,
        "ouatsu": 637.035,
        "saikou": 10,
        "heikin": 4.49,
        "boshuAvg30d": 589.5,
        "heikinAvg30d": 4.465
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 577,
        "ouatsu": 544.987,
        "saikou": 10,
        "heikin": 5.01,
        "boshuAvg30d": 589.5,
        "heikinAvg30d": 4.435
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 568,
        "ouatsu": 592.207,
        "saikou": 10,
        "heikin": 4.48,
        "boshuAvg30d": 579.5,
        "heikinAvg30d": 4.519
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 568,
        "ouatsu": 574.561,
        "saikou": 10,
        "heikin": 4.61,
        "boshuAvg30d": 579.5,
        "heikinAvg30d": 4.327
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 568,
        "ouatsu": 589.276,
        "saikou": 10,
        "heikin": 4.36,
        "boshuAvg30d": 579.0,
        "heikinAvg30d": 4.075
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 567,
        "ouatsu": 573.206,
        "saikou": 10,
        "heikin": 4.31,
        "boshuAvg30d": 578.0,
        "heikinAvg30d": 4.145
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 564,
        "ouatsu": 513.337,
        "saikou": 10,
        "heikin": 4.99,
        "boshuAvg30d": 575.0,
        "heikinAvg30d": 4.184
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 564,
        "ouatsu": 565.939,
        "saikou": 9.99,
        "heikin": 4.71,
        "boshuAvg30d": 575.0,
        "heikinAvg30d": 4.143
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 563,
        "ouatsu": 663.815,
        "saikou": 9.98,
        "heikin": 3.94,
        "boshuAvg30d": 574.0,
        "heikinAvg30d": 4.039
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 563,
        "ouatsu": 681.244,
        "saikou": 9.89,
        "heikin": 3.82,
        "boshuAvg30d": 574.0,
        "heikinAvg30d": 4.027
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 563,
        "ouatsu": 772.433,
        "saikou": 7.62,
        "heikin": 3.34,
        "boshuAvg30d": 574.5,
        "heikinAvg30d": 3.985
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 562,
        "ouatsu": 695.703,
        "saikou": 9.89,
        "heikin": 4.26,
        "boshuAvg30d": 573.5,
        "heikinAvg30d": 3.982
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 561,
        "ouatsu": 777.242,
        "saikou": 10,
        "heikin": 3.76,
        "boshuAvg30d": 573.5,
        "heikinAvg30d": 4.248
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 561,
        "ouatsu": 729.614,
        "saikou": 10,
        "heikin": 3.62,
        "boshuAvg30d": 573.5,
        "heikinAvg30d": 4.527
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 560,
        "ouatsu": 764.675,
        "saikou": 9.8,
        "heikin": 3.9,
        "boshuAvg30d": 572.5,
        "heikinAvg30d": 4.478
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 560,
        "ouatsu": 828.371,
        "saikou": 9.7,
        "heikin": 3.52,
        "boshuAvg30d": 572.5,
        "heikinAvg30d": 4.777
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 560,
        "ouatsu": 791.057,
        "saikou": 9.79,
        "heikin": 3.94,
        "boshuAvg30d": 572.0,
        "heikinAvg30d": 5.033
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 560,
        "ouatsu": 739.175,
        "saikou": 10,
        "heikin": 4.7,
        "boshuAvg30d": 572.0,
        "heikinAvg30d": 5.241
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 560,
        "ouatsu": 754.402,
        "saikou": 10,
        "heikin": 4.38,
        "boshuAvg30d": 571.7,
        "heikinAvg30d": 5.368
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 560,
        "ouatsu": 721.571,
        "saikou": 10,
        "heikin": 4.83,
        "boshuAvg30d": 571.7,
        "heikinAvg30d": 5.356
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 562,
        "ouatsu": 792.301,
        "saikou": 10,
        "heikin": 4.68,
        "boshuAvg30d": 574.7,
        "heikinAvg30d": 5.203
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 562,
        "ouatsu": 710.692,
        "saikou": 10,
        "heikin": 4.56,
        "boshuAvg30d": 573.7,
        "heikinAvg30d": 5.032
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 563,
        "ouatsu": 665.568,
        "saikou": 9.99,
        "heikin": 5.07,
        "boshuAvg30d": 573.7,
        "heikinAvg30d": 4.81
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 563,
        "ouatsu": 676.839,
        "saikou": 9.99,
        "heikin": 4.71,
        "boshuAvg30d": 573.7,
        "heikinAvg30d": 4.556
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 561,
        "ouatsu": 695.771,
        "saikou": 9.99,
        "heikin": 4.33,
        "boshuAvg30d": 572.7,
        "heikinAvg30d": 4.092
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 561,
        "ouatsu": 627.298,
        "saikou": 10,
        "heikin": 4.66,
        "boshuAvg30d": 572.7,
        "heikinAvg30d": 3.996
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 560,
        "ouatsu": 638.526,
        "saikou": 9.8,
        "heikin": 4.3,
        "boshuAvg30d": 572.7,
        "heikinAvg30d": 3.587
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 560,
        "ouatsu": 518.94,
        "saikou": 10,
        "heikin": 5.53,
        "boshuAvg30d": 572.7,
        "heikinAvg30d": 4.714
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 560,
        "ouatsu": 389.852,
        "saikou": 10,
        "heikin": 3.34,
        "boshuAvg30d": 573.5,
        "heikinAvg30d": 4.385
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 558,
        "ouatsu": 507.158,
        "saikou": 10,
        "heikin": 4.23,
        "boshuAvg30d": 571.5,
        "heikinAvg30d": 3.885
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 556,
        "ouatsu": 523.416,
        "saikou": 10,
        "heikin": 4.36,
        "boshuAvg30d": 568.5,
        "heikinAvg30d": 4.168
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 555,
        "ouatsu": 534.204,
        "saikou": 10,
        "heikin": 4.5,
        "boshuAvg30d": 566.5,
        "heikinAvg30d": 4.279
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 238,
        "ouatsu": 322.463,
        "saikou": 7.99,
        "heikin": 2.33,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 5.076
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 238,
        "ouatsu": 334.32,
        "saikou": 7.99,
        "heikin": 2.35,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 4.931
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 238,
        "ouatsu": 375.755,
        "saikou": 7.3,
        "heikin": 2,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 4.947
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 238,
        "ouatsu": 394.124,
        "saikou": 7,
        "heikin": 1.7,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 5.176
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 237,
        "ouatsu": 344.119,
        "saikou": 7.99,
        "heikin": 2.86,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.761
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 237,
        "ouatsu": 380.04,
        "saikou": 7.99,
        "heikin": 2.6,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.74
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 237,
        "ouatsu": 414.883,
        "saikou": 7.99,
        "heikin": 2.97,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.485
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 237,
        "ouatsu": 431.125,
        "saikou": 7.99,
        "heikin": 3.25,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.344
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 237,
        "ouatsu": 433.025,
        "saikou": 7.99,
        "heikin": 3.25,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.338
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 237,
        "ouatsu": 414.935,
        "saikou": 7.99,
        "heikin": 3.44,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.272
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 237,
        "ouatsu": 403.086,
        "saikou": 7.99,
        "heikin": 3.11,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 4.873
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 237,
        "ouatsu": 387.204,
        "saikou": 8,
        "heikin": 3.22,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 5.266
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 247,
        "ouatsu": 386.844,
        "saikou": 8,
        "heikin": 3.49,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 6.094
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 250,
        "ouatsu": 390.82,
        "saikou": 7.5,
        "heikin": 2.07,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 6.288
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 253,
        "ouatsu": 391.82,
        "saikou": 7.29,
        "heikin": 1.44,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 6.448
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 255,
        "ouatsu": 406.925,
        "saikou": 8.5,
        "heikin": 3.06,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 6.527
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 255,
        "ouatsu": 418.385,
        "saikou": 8.5,
        "heikin": 2.54,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 6.684
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 255,
        "ouatsu": 465.722,
        "saikou": 7.99,
        "heikin": 1.56,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 6.644
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 259,
        "ouatsu": 294.67,
        "saikou": 9.48,
        "heikin": 3.41,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.758
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 259,
        "ouatsu": 455.565,
        "saikou": 7.99,
        "heikin": 1.56,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.676
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 260,
        "ouatsu": 339.579,
        "saikou": 9.48,
        "heikin": 3.15,
        "boshuAvg30d": 162.0,
        "heikinAvg30d": 6.584
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 259,
        "ouatsu": 464.18,
        "saikou": 7.99,
        "heikin": 1.57,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.609
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 258,
        "ouatsu": 467.206,
        "saikou": 7.99,
        "heikin": 1.42,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 6.421
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 257,
        "ouatsu": 375.174,
        "saikou": 9.89,
        "heikin": 2.72,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 6.469
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 254,
        "ouatsu": 376.424,
        "saikou": 9,
        "heikin": 3.31,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.331
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 254,
        "ouatsu": 378.422,
        "saikou": 8.9,
        "heikin": 3.29,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.393
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 254,
        "ouatsu": 477.759,
        "saikou": 7.99,
        "heikin": 1.49,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.668
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 254,
        "ouatsu": 428.594,
        "saikou": 8.9,
        "heikin": 3.13,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.716
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 253,
        "ouatsu": 490.702,
        "saikou": 8,
        "heikin": 3.35,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.747
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 253,
        "ouatsu": 472.481,
        "saikou": 8,
        "heikin": 3.58,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 6.644
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 252,
        "ouatsu": 464.597,
        "saikou": 8.7,
        "heikin": 3.84,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 6.453
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 252,
        "ouatsu": 425.422,
        "saikou": 8.8,
        "heikin": 3.84,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 6.28
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 252,
        "ouatsu": 431.027,
        "saikou": 7.99,
        "heikin": 5.06,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 5.847
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 252,
        "ouatsu": 437.029,
        "saikou": 7.99,
        "heikin": 6.4,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 5.766
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 252,
        "ouatsu": 432.041,
        "saikou": 8.09,
        "heikin": 6.56,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 5.237
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 252,
        "ouatsu": 427.542,
        "saikou": 7.99,
        "heikin": 6.4,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 4.88
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 250,
        "ouatsu": 407.17,
        "saikou": 7.83,
        "heikin": 6.15,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.504
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 250,
        "ouatsu": 409.168,
        "saikou": 7.85,
        "heikin": 4.43,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.056
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 250,
        "ouatsu": 417.052,
        "saikou": 7.83,
        "heikin": 3.38,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.854
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 250,
        "ouatsu": 417.052,
        "saikou": 6.21,
        "heikin": 2.86,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.959
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 250,
        "ouatsu": 417.052,
        "saikou": 6.14,
        "heikin": 2.29,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.324
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 250,
        "ouatsu": 417.052,
        "saikou": 1.96,
        "heikin": 1.87,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.289
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 250,
        "ouatsu": 413.072,
        "saikou": 5.2,
        "heikin": 1.77,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 4.393
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 251,
        "ouatsu": 413.072,
        "saikou": 5.9,
        "heikin": 1.12,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 5.623
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 251,
        "ouatsu": 402.46,
        "saikou": 3.16,
        "heikin": 1.02,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 5.765
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 250,
        "ouatsu": 340.701,
        "saikou": 7.83,
        "heikin": 1.83,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 5.577
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 249,
        "ouatsu": 338.105,
        "saikou": 7.99,
        "heikin": 2.19,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 5.806
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 246,
        "ouatsu": 429.36,
        "saikou": 2.46,
        "heikin": 2.03,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 5.784
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 75.93,
        "saikou": 1.38,
        "heikin": 0.77,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.256
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 77.929,
        "saikou": 2.83,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.153
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 73.367,
        "saikou": 1.38,
        "heikin": 0.77,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.664
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 71.341,
        "saikou": 0.6,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.237
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 67.379,
        "saikou": 0.6,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.416
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 77.929,
        "saikou": 0.6,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 4.235
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 77.929,
        "saikou": 0.46,
        "heikin": 0.42,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.664
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 77.929,
        "saikou": 0.43,
        "heikin": 0.41,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.503
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 77.929,
        "saikou": 0.43,
        "heikin": 0.41,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.413
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 75.93,
        "saikou": 0.61,
        "heikin": 0.48,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.874
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 67.669,
        "saikou": 2.3,
        "heikin": 0.86,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.186
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 65.957,
        "saikou": 2.73,
        "heikin": 0.81,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.514
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 52.929,
        "saikou": 2.73,
        "heikin": 1.28,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 5.145
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 52.929,
        "saikou": 0.61,
        "heikin": 0.48,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 5.177
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 52.929,
        "saikou": 0.65,
        "heikin": 0.49,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 6.049
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 52.929,
        "saikou": 8.5,
        "heikin": 1.21,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.948
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 52.929,
        "saikou": 8.3,
        "heikin": 1.92,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 6.207
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 52.929,
        "saikou": 4.4,
        "heikin": 2.26,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 7.021
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 33.929,
        "saikou": 9.9,
        "heikin": 1.94,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.492
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 33.929,
        "saikou": 1.17,
        "heikin": 1.17,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 7.424
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 33.929,
        "saikou": 9.5,
        "heikin": 1.95,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.932
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 33.929,
        "saikou": 0.98,
        "heikin": 0.98,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 7.282
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 33.929,
        "saikou": 1.21,
        "heikin": 1.21,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.411
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 33.929,
        "saikou": 9.9,
        "heikin": 2.08,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.541
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 33.929,
        "saikou": 9.7,
        "heikin": 1.44,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.821
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 33.929,
        "saikou": 9.5,
        "heikin": 1.42,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.752
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 33.929,
        "saikou": 1.47,
        "heikin": 1.47,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 7.186
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 33.929,
        "saikou": 4.45,
        "heikin": 4.45,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.399
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 26.087,
        "saikou": 4.52,
        "heikin": 4.52,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.667
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 26.099,
        "saikou": 5.23,
        "heikin": 5.23,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.623
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 33.929,
        "saikou": 5.95,
        "heikin": 5.95,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.484
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 6.767
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.841
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.731
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 7.5,
        "heikin": 7.21,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.124
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 7.4,
        "heikin": 7.4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.881
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 7.578
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 7.4,
        "heikin": 7.4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 7.059
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.929,
        "saikou": 7.5,
        "heikin": 7.21,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.552
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 33.929,
        "saikou": 7.07,
        "heikin": 7.07,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.79
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 33.929,
        "saikou": 6.2,
        "heikin": 5.75,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.294
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 33.929,
        "saikou": 5.15,
        "heikin": 5.15,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 4.757
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.398
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.18
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 5.338
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 5.682
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 6.038
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 3.929,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 5.555
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 88.034,
        "saikou": 1.33,
        "heikin": 1.33,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.096
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 93.971,
        "saikou": 1.33,
        "heikin": 1.33,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 3.017
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 92.011,
        "saikou": 1.33,
        "heikin": 1.33,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.67
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 90.024,
        "saikou": 1.33,
        "heikin": 1.33,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.71
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 88.026,
        "saikou": 1.33,
        "heikin": 1.33,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.744
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 88.026,
        "saikou": 1.33,
        "heikin": 1.33,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 3.02
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 95.92,
        "saikou": 1.37,
        "heikin": 1.33,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.379
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 95.92,
        "saikou": 1.33,
        "heikin": 1.33,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.845
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 88.074,
        "saikou": 1.39,
        "heikin": 1.34,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.4
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 91.962,
        "saikou": 1.33,
        "heikin": 1.33,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.224
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 80.92,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.359
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 95.92,
        "saikou": 1.33,
        "heikin": 1.33,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.205
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 95.92,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 4.974
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 99.787,
        "saikou": 3.42,
        "heikin": 3.42,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.903
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 99.787,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 5.035
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 99.787,
        "saikou": 6.99,
        "heikin": 4.3,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 5.274
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 97.878,
        "saikou": 6.99,
        "heikin": 4.28,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.171
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 97.878,
        "saikou": 7.88,
        "heikin": 4.49,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 6.437
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 97.878,
        "saikou": 12.5,
        "heikin": 6.52,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 6.109
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 97.878,
        "saikou": 7.88,
        "heikin": 4.49,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 6.079
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 97.878,
        "saikou": 12.5,
        "heikin": 6.38,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 5.604
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 97.878,
        "saikou": 6.99,
        "heikin": 4.28,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 5.527
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 97.878,
        "saikou": 6.99,
        "heikin": 4.28,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.492
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 97.878,
        "saikou": 10,
        "heikin": 6.17,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 5.599
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 97.878,
        "saikou": 10,
        "heikin": 6.07,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 6.144
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 97.878,
        "saikou": 10,
        "heikin": 5.96,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.698
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 97.878,
        "saikou": 6.99,
        "heikin": 4.28,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.615
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 143.141,
        "saikou": 6.99,
        "heikin": 5.13,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 5.797
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 94.011,
        "saikou": 6.99,
        "heikin": 4.28,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.769
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 94.011,
        "saikou": 6.99,
        "heikin": 4.28,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.563
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 94.011,
        "saikou": 6.99,
        "heikin": 4.28,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.405
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 94.011,
        "saikou": 3.42,
        "heikin": 3.42,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.368
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 94.011,
        "saikou": 6.99,
        "heikin": 4.28,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.045
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 97.878,
        "saikou": 6.99,
        "heikin": 4.28,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.251
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 97.878,
        "saikou": 6.49,
        "heikin": 4.16,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 4.586
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 97.878,
        "saikou": 6.97,
        "heikin": 4.49,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 4.528
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 92.051,
        "saikou": 7,
        "heikin": 4.77,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.502
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 92.051,
        "saikou": 7,
        "heikin": 4.76,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.305
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 46.586,
        "saikou": 6.99,
        "heikin": 6.98,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.194
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 94.011,
        "saikou": 6.55,
        "heikin": 3.69,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 4.267
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 94.011,
        "saikou": 6.47,
        "heikin": 3.52,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 3.937
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 94.011,
        "saikou": 3.42,
        "heikin": 3.42,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 3.948
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 94.011,
        "saikou": 3.96,
        "heikin": 3.46,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 3.658
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 94.011,
        "saikou": 3.42,
        "heikin": 3.42,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 3.888
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 94.011,
        "saikou": 3.42,
        "heikin": 3.42,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 3.396
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 94.011,
        "saikou": 4.2,
        "heikin": 3.47,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.47
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 94.011,
        "saikou": 3.42,
        "heikin": 3.42,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 4.048
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 94.011,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.833
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 185.24,
        "saikou": 6.34,
        "heikin": 5.4,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.826
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 185.24,
        "saikou": 6.89,
        "heikin": 6.72,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 3.099
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 171.437,
        "saikou": 5.42,
        "heikin": 5.37,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 3.049
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 175.227,
        "saikou": 4.64,
        "heikin": 4.59,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.91
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 175.227,
        "saikou": 4.64,
        "heikin": 4.59,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.884
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 175.227,
        "saikou": 4.64,
        "heikin": 4.59,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.929
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 192.086,
        "saikou": 4.5,
        "heikin": 4.45,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.922
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 192.086,
        "saikou": 4.47,
        "heikin": 4.42,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 3.0
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 192.086,
        "saikou": 4.47,
        "heikin": 4.42,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.947
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 192.086,
        "saikou": 4.64,
        "heikin": 4.59,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 3.007
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 192.086,
        "saikou": 5.5,
        "heikin": 5.4,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 3.25
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 192.086,
        "saikou": 6.79,
        "heikin": 6.74,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 3.016
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 192.086,
        "saikou": 6.79,
        "heikin": 6.74,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 3.232
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 192.086,
        "saikou": 4.64,
        "heikin": 4.54,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 2.763
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 192.086,
        "saikou": 4.69,
        "heikin": 4.61,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.791
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 192.086,
        "saikou": 5.42,
        "heikin": 5.37,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.707
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 180.148,
        "saikou": 2.97,
        "heikin": 2.92,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.937
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 185.816,
        "saikou": 3.3,
        "heikin": 3.15,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 3.595
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 190.286,
        "saikou": 2.1,
        "heikin": 2.05,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.539
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 190.286,
        "saikou": 1.95,
        "heikin": 1.9,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 3.051
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 190.286,
        "saikou": 3,
        "heikin": 1.54,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.821
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 178.348,
        "saikou": 3.39,
        "heikin": 1.64,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.695
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 178.348,
        "saikou": 3.27,
        "heikin": 1.92,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.532
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 178.348,
        "saikou": 3.42,
        "heikin": 1.94,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.65
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 257.85,
        "saikou": 1.95,
        "heikin": 1.35,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.969
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 257.85,
        "saikou": 1.95,
        "heikin": 1.35,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.929
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 257.85,
        "saikou": 7.33,
        "heikin": 3.49,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 2.371
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 257.85,
        "saikou": 7.7,
        "heikin": 3.66,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.965
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 96.26,
        "saikou": 7,
        "heikin": 4.08,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.854
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 309.763,
        "saikou": 4.13,
        "heikin": 2.28,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.445
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 187.137,
        "saikou": 6.17,
        "heikin": 2.79,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 4.663
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 187.137,
        "saikou": 7.97,
        "heikin": 3.68,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 5.967
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 36.739,
        "saikou": 7,
        "heikin": 6.29,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 6.258
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 36.739,
        "saikou": 7,
        "heikin": 6.29,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 7.356
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 36.739,
        "saikou": 7,
        "heikin": 6.29,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 8.293
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 36.739,
        "saikou": 7,
        "heikin": 6.29,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 8.345
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 34.749,
        "saikou": 7,
        "heikin": 6.29,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 8.407
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 34.749,
        "saikou": 7,
        "heikin": 6.29,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 8.563
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 96.462,
        "saikou": 9.47,
        "heikin": 8.01,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 8.131
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 188.442,
        "saikou": 8.08,
        "heikin": 2.89,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 7.621
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 188.442,
        "saikou": 6.71,
        "heikin": 2.42,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 7.352
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 188.442,
        "saikou": 6.14,
        "heikin": 1.89,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 6.636
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 116.28,
        "saikou": 6.75,
        "heikin": 4.36,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 5.776
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 144.422,
        "saikou": 7.14,
        "heikin": 5.42,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 5.264
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 253.651,
        "saikou": 8.73,
        "heikin": 8,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 4.278
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 253.651,
        "saikou": 10,
        "heikin": 8.4,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 3.76
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 190.286,
        "saikou": 8.16,
        "heikin": 8.05,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 3.586
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 190.286,
        "saikou": 7.53,
        "heikin": 7.39,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.897
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.621
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 2.3,
        "heikin": 0.79,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.607
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.606
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 214.473,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.559
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 214.473,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.54
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 214.473,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 39.0,
        "heikinAvg30d": 0.542
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 211.473,
        "saikou": 1.7,
        "heikin": 0.71,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.685
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 199.93,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.672
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 211.473,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.671
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 211.473,
        "saikou": 1.7,
        "heikin": 0.73,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.668
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 211.473,
        "saikou": 2.3,
        "heikin": 0.79,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.684
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 211.473,
        "saikou": 2.3,
        "heikin": 0.79,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.679
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.87,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.611
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.87,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.623
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.86,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.648
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 214.473,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.64
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 214.473,
        "saikou": 1.07,
        "heikin": 0.43,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.646
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 214.473,
        "saikou": 1.07,
        "heikin": 0.42,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.703
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 127.973,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 1.177
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 127.973,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 1.171
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.115
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.091
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.125
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 1.182
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 1.6,
        "heikin": 0.98,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.234
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 89.43,
        "saikou": 1.6,
        "heikin": 0.94,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.138
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.031
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 66.973,
        "saikou": 0.36,
        "heikin": 0.36,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.977
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 66.973,
        "saikou": 4.15,
        "heikin": 1.17,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.987
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 119.473,
        "saikou": 0.55,
        "heikin": 0.38,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.94
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 180.473,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.087
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 180.473,
        "saikou": 4,
        "heikin": 0.87,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.002
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 168.93,
        "saikou": 5.5,
        "heikin": 0.91,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.979
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 168.93,
        "saikou": 5,
        "heikin": 0.9,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 168.93,
        "saikou": 6,
        "heikin": 0.91,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.041
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 168.93,
        "saikou": 6.5,
        "heikin": 0.92,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.921
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 168.93,
        "saikou": 5,
        "heikin": 0.9,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.965
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 180.473,
        "saikou": 4.5,
        "heikin": 0.89,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.924
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 180.473,
        "saikou": 5,
        "heikin": 0.9,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.962
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 180.473,
        "saikou": 5,
        "heikin": 0.9,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.974
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 176.473,
        "saikou": 4,
        "heikin": 0.86,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.883
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 180.473,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.855
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 4,
        "heikin": 0.97,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.916
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 4,
        "heikin": 1,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.894
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 4,
        "heikin": 0.78,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.814
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 214.473,
        "saikou": 4,
        "heikin": 0.9,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.655
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.86,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.609
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 214.473,
        "saikou": 2.5,
        "heikin": 0.86,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.596
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 202.158,
        "saikou": 7.13,
        "heikin": 6.28,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.42
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 182.016,
        "saikou": 6.65,
        "heikin": 6.14,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.393
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 200.752,
        "saikou": 6.23,
        "heikin": 5.72,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.178
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 200.75,
        "saikou": 5.98,
        "heikin": 5.47,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.428
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 196.822,
        "saikou": 6.41,
        "heikin": 5.9,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.291
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 198.8,
        "saikou": 6.13,
        "heikin": 5.62,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.325
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 212.626,
        "saikou": 6.32,
        "heikin": 5.81,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.058
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 208.798,
        "saikou": 6.37,
        "heikin": 5.86,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.16
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 212.598,
        "saikou": 6.13,
        "heikin": 5.63,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.121
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 206.926,
        "saikou": 6.37,
        "heikin": 5.87,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.08
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 214.576,
        "saikou": 6.65,
        "heikin": 6.12,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.034
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 212.6,
        "saikou": 6.65,
        "heikin": 6.09,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 3.808
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 214.586,
        "saikou": 6.6,
        "heikin": 5.65,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 3.489
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 208.75,
        "saikou": 6.13,
        "heikin": 5.36,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 3.358
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 260.734,
        "saikou": 6.1,
        "heikin": 5.45,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 3.658
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 256.936,
        "saikou": 6.12,
        "heikin": 5.78,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 3.616
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 256.936,
        "saikou": 6.67,
        "heikin": 6.23,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 3.657
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 260.586,
        "saikou": 7.32,
        "heikin": 6.91,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 4.212
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 209.602,
        "saikou": 7.4,
        "heikin": 6.49,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.174
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 294.602,
        "saikou": 7.3,
        "heikin": 5.72,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 4.038
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 383.222,
        "saikou": 6.66,
        "heikin": 6.02,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.843
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 372.262,
        "saikou": 6.66,
        "heikin": 6.14,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.784
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 372.262,
        "saikou": 6.86,
        "heikin": 6.29,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.868
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 372.262,
        "saikou": 6.73,
        "heikin": 6.27,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.95
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 372.549,
        "saikou": 5.36,
        "heikin": 5.01,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.455
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 326.533,
        "saikou": 5.32,
        "heikin": 4.96,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.733
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 374.533,
        "saikou": 6.92,
        "heikin": 6.29,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.977
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 320.681,
        "saikou": 7.37,
        "heikin": 6.85,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 4.599
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 275.181,
        "saikou": 8.3,
        "heikin": 7.41,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 5.314
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 266.951,
        "saikou": 11.05,
        "heikin": 10.72,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 5.966
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 288.951,
        "saikou": 9.86,
        "heikin": 9.05,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 5.301
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 239.951,
        "saikou": 11.63,
        "heikin": 9.95,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 6.561
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 283.951,
        "saikou": 12.55,
        "heikin": 9.48,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 6.912
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 264.951,
        "saikou": 13.05,
        "heikin": 11,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 7.287
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 389.951,
        "saikou": 13.19,
        "heikin": 11.66,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.096
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 238.951,
        "saikou": 13.19,
        "heikin": 10.73,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.454
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 378.319,
        "saikou": 12.9,
        "heikin": 11.14,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 7.703
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 276.335,
        "saikou": 10.4,
        "heikin": 9.23,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 7.691
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 249.147,
        "saikou": 9.24,
        "heikin": 8.03,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 6.889
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 251.136,
        "saikou": 7.95,
        "heikin": 6.84,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 6.298
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 251.136,
        "saikou": 6.69,
        "heikin": 5.95,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.49
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 258.786,
        "saikou": 4.9,
        "heikin": 4.4,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.622
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 255.876,
        "saikou": 4.34,
        "heikin": 4,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.219
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 256.876,
        "saikou": 6.53,
        "heikin": 5.78,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.395
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 256.876,
        "saikou": 5.04,
        "heikin": 4.52,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.146
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 255.876,
        "saikou": 4.34,
        "heikin": 3.98,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.387
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 255.876,
        "saikou": 4.15,
        "heikin": 3.91,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 4.364
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 252.024,
        "saikou": 3.63,
        "heikin": 3.45,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 3.819
      }
    ]
  }
};
