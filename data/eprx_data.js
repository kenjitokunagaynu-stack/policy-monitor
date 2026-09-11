// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/12〜2026/09/10）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-11",
  "fetchedAt": "2026-09-11",
  "avgWindowLabel": "過去30日平均（2026/08/12〜2026/09/10）",
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
      "ouatsu": 1537.072,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1441.7,
      "heikinAvg30d": 3.286
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1362,
      "ouatsu": 1512.785,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1441.7,
      "heikinAvg30d": 3.262
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1362,
      "ouatsu": 1583.108,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1441.7,
      "heikinAvg30d": 3.333
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1362,
      "ouatsu": 1523.15,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1440.4,
      "heikinAvg30d": 3.308
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1357,
      "ouatsu": 1550.715,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1435.4,
      "heikinAvg30d": 3.313
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1356,
      "ouatsu": 1589.636,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1433.7,
      "heikinAvg30d": 3.386
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1356,
      "ouatsu": 1679.505,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1455.3,
      "heikinAvg30d": 3.389
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1357,
      "ouatsu": 1642.504,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1456.3,
      "heikinAvg30d": 3.465
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1360,
      "ouatsu": 1787.526,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1460.0,
      "heikinAvg30d": 3.469
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1360,
      "ouatsu": 1774.671,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1460.7,
      "heikinAvg30d": 3.44
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1360,
      "ouatsu": 1612.149,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1460.7,
      "heikinAvg30d": 3.531
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1360,
      "ouatsu": 1743.036,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1460.7,
      "heikinAvg30d": 3.433
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1426,
      "ouatsu": 1645.786,
      "saikou": 10,
      "heikin": 3.01,
      "boshuAvg30d": 1524.7,
      "heikinAvg30d": 3.915
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1447,
      "ouatsu": 1676.582,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1547.0,
      "heikinAvg30d": 3.944
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1470,
      "ouatsu": 1644.284,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1570.0,
      "heikinAvg30d": 3.967
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1488,
      "ouatsu": 1734.602,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1585.8,
      "heikinAvg30d": 3.963
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1489,
      "ouatsu": 1833.542,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1586.1,
      "heikinAvg30d": 4.208
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1489,
      "ouatsu": 1886.083,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1586.1,
      "heikinAvg30d": 4.489
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1512,
      "ouatsu": 2035.527,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1547.6,
      "heikinAvg30d": 4.45
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1516,
      "ouatsu": 1957.895,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1552.2,
      "heikinAvg30d": 4.284
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1524,
      "ouatsu": 1971.06,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1559.1,
      "heikinAvg30d": 4.108
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1524,
      "ouatsu": 1838.439,
      "saikou": 10,
      "heikin": 3.78,
      "boshuAvg30d": 1559.1,
      "heikinAvg30d": 4.14
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1521,
      "ouatsu": 2029.743,
      "saikou": 9.9,
      "heikin": 3.48,
      "boshuAvg30d": 1554.8,
      "heikinAvg30d": 4.119
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1520,
      "ouatsu": 2090.326,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1554.5,
      "heikinAvg30d": 4.165
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1513,
      "ouatsu": 2144.6,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1549.5,
      "heikinAvg30d": 3.945
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1513,
      "ouatsu": 2143.168,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1549.5,
      "heikinAvg30d": 3.944
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1513,
      "ouatsu": 2015.955,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1549.9,
      "heikinAvg30d": 4.148
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1507,
      "ouatsu": 1968.39,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1543.9,
      "heikinAvg30d": 4.413
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1502,
      "ouatsu": 1864.87,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1540.9,
      "heikinAvg30d": 4.661
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1495,
      "ouatsu": 1924.562,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1535.9,
      "heikinAvg30d": 4.754
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1466,
      "ouatsu": 1719.506,
      "saikou": 10,
      "heikin": 3.72,
      "boshuAvg30d": 1568.4,
      "heikinAvg30d": 4.715
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1466,
      "ouatsu": 1659.771,
      "saikou": 10,
      "heikin": 4.09,
      "boshuAvg30d": 1568.4,
      "heikinAvg30d": 5.027
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1466,
      "ouatsu": 1725.541,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1568.7,
      "heikinAvg30d": 5.063
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1464,
      "ouatsu": 1864.45,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1564.7,
      "heikinAvg30d": 5.304
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1460,
      "ouatsu": 1811.583,
      "saikou": 10,
      "heikin": 3.8,
      "boshuAvg30d": 1562.0,
      "heikinAvg30d": 5.312
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1456,
      "ouatsu": 1672.844,
      "saikou": 10,
      "heikin": 3.89,
      "boshuAvg30d": 1558.0,
      "heikinAvg30d": 5.28
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1448,
      "ouatsu": 1692.394,
      "saikou": 10,
      "heikin": 3.78,
      "boshuAvg30d": 1549.3,
      "heikinAvg30d": 5.358
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1448,
      "ouatsu": 1597.48,
      "saikou": 10,
      "heikin": 3.79,
      "boshuAvg30d": 1548.7,
      "heikinAvg30d": 5.14
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1449,
      "ouatsu": 1680.358,
      "saikou": 10,
      "heikin": 3.71,
      "boshuAvg30d": 1549.0,
      "heikinAvg30d": 4.929
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1448,
      "ouatsu": 1692.115,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1548.7,
      "heikinAvg30d": 4.673
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1443,
      "ouatsu": 1771.597,
      "saikou": 10,
      "heikin": 3.57,
      "boshuAvg30d": 1543.7,
      "heikinAvg30d": 4.34
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1439,
      "ouatsu": 1656.313,
      "saikou": 10,
      "heikin": 3.64,
      "boshuAvg30d": 1541.7,
      "heikinAvg30d": 4.055
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1346,
      "ouatsu": 1788.494,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1453.7,
      "heikinAvg30d": 3.712
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1349,
      "ouatsu": 1788.798,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1456.7,
      "heikinAvg30d": 4.339
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1350,
      "ouatsu": 1834.583,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1457.7,
      "heikinAvg30d": 4.021
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1343,
      "ouatsu": 1812.83,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1451.4,
      "heikinAvg30d": 3.743
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1336,
      "ouatsu": 1817.378,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1443.1,
      "heikinAvg30d": 3.83
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1328,
      "ouatsu": 1720.146,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1434.4,
      "heikinAvg30d": 3.807
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
        "ouatsu": 116.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.356
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 116.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.329
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 159.59,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.128
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 114.74,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.385
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 157.999,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.22
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 172.79,
        "saikou": 6.45,
        "heikin": 1.24,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.342
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 158.59,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.769
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 158.59,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.018
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 203.44,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.391
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 203.44,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.087
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 118.59,
        "saikou": 3.5,
        "heikin": 1.08,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.299
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 163.44,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.882
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 116.69,
        "saikou": 8.25,
        "heikin": 1.87,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.449
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 114.74,
        "saikou": 8,
        "heikin": 2.29,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.074
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 188.22,
        "saikou": 1.01,
        "heikin": 0.91,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.9
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 148.74,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.031
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 228.22,
        "saikou": 1,
        "heikin": 0.79,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.609
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 190.69,
        "saikou": 1.01,
        "heikin": 0.76,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.154
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 230.17,
        "saikou": 1,
        "heikin": 0.69,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.875
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 154.22,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.817
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 154.74,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.745
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 154.74,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.012
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 233.59,
        "saikou": 1.01,
        "heikin": 0.68,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.985
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 199.59,
        "saikou": 1.01,
        "heikin": 0.99,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.905
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 192.01,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.737
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 188.74,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.728
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 228,
        "saikou": 1,
        "heikin": 0.69,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.172
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 228,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.5
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 188.74,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.524
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 217.17,
        "saikou": 1.01,
        "heikin": 0.92,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.634
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 156.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.57
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 164.74,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.035
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 197.74,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.807
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 156.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.986
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 171.002,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 3.496
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 91.69,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.714
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 172.6,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.62
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 112.75,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.304
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 197.6,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.295
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 152.75,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.757
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 197.6,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.812
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 112.75,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.946
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 157.6,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.691
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 152.75,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.357
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 199.364,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.164
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 164.7,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.783
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 152.75,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.655
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 152.75,
        "saikou": 9.9,
        "heikin": 1.49,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.398
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 73.644,
        "saikou": 10,
        "heikin": 9.08,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 8.161
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 73.644,
        "saikou": 10,
        "heikin": 9.01,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 8.442
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 89.526,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 9.449
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 89.526,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 9.344
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 87.528,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 9.319
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 87.528,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 9.322
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 88.026,
        "saikou": 10,
        "heikin": 9.07,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 9.284
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 89.526,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 9.236
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 9.08,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 9.215
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 9.086
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 9.08,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 8.984
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 113.525,
        "saikou": 10,
        "heikin": 8.27,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 9.185
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 113.525,
        "saikou": 10,
        "heikin": 8.31,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 9.521
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 112.025,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 184.7,
        "heikinAvg30d": 9.914
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 113.525,
        "saikou": 10,
        "heikin": 8.14,
        "boshuAvg30d": 190.0,
        "heikinAvg30d": 10.141
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 112.025,
        "saikou": 10,
        "heikin": 8.16,
        "boshuAvg30d": 193.3,
        "heikinAvg30d": 10.124
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 113.525,
        "saikou": 10,
        "heikin": 8.43,
        "boshuAvg30d": 193.3,
        "heikinAvg30d": 10.194
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 112.025,
        "saikou": 10,
        "heikin": 7.17,
        "boshuAvg30d": 193.3,
        "heikinAvg30d": 10.002
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 215,
        "ouatsu": 126.171,
        "saikou": 10,
        "heikin": 6.57,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 9.292
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 217,
        "ouatsu": 126.171,
        "saikou": 10,
        "heikin": 6.54,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 9.397
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 220,
        "ouatsu": 126.171,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 9.242
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 221,
        "ouatsu": 126.171,
        "saikou": 10,
        "heikin": 6.58,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 9.342
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 221,
        "ouatsu": 126.171,
        "saikou": 9.9,
        "heikin": 7.06,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 9.267
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 221,
        "ouatsu": 126.171,
        "saikou": 10,
        "heikin": 7.39,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 9.434
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 222,
        "ouatsu": 123.725,
        "saikou": 10,
        "heikin": 8.21,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 9.396
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 222,
        "ouatsu": 123.725,
        "saikou": 10,
        "heikin": 8.21,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 9.359
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 222,
        "ouatsu": 127.521,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 8.837
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 219,
        "ouatsu": 127.521,
        "saikou": 10,
        "heikin": 7.51,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 8.923
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 217,
        "ouatsu": 127.521,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 9.647
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 212,
        "ouatsu": 127.521,
        "saikou": 10,
        "heikin": 7.44,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 9.681
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 127.521,
        "saikou": 10,
        "heikin": 7.33,
        "boshuAvg30d": 191.3,
        "heikinAvg30d": 9.687
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 115.521,
        "saikou": 10,
        "heikin": 6.94,
        "boshuAvg30d": 191.3,
        "heikinAvg30d": 9.318
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 115.521,
        "saikou": 10,
        "heikin": 7,
        "boshuAvg30d": 191.3,
        "heikinAvg30d": 8.989
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 114.021,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 189.7,
        "heikinAvg30d": 8.454
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 115.521,
        "saikou": 10,
        "heikin": 6.88,
        "boshuAvg30d": 187.7,
        "heikinAvg30d": 7.921
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 114.021,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 185.7,
        "heikinAvg30d": 8.139
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 7.81,
        "boshuAvg30d": 184.0,
        "heikinAvg30d": 8.1
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 90.025,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 184.0,
        "heikinAvg30d": 8.002
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 8.07,
        "boshuAvg30d": 184.0,
        "heikinAvg30d": 8.152
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 8.14,
        "boshuAvg30d": 183.7,
        "heikinAvg30d": 8.406
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 8.23,
        "boshuAvg30d": 183.0,
        "heikinAvg30d": 8.594
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 8.35,
        "boshuAvg30d": 183.7,
        "heikinAvg30d": 8.843
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 8.46,
        "boshuAvg30d": 99.4,
        "heikinAvg30d": 8.676
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 89.625,
        "saikou": 10,
        "heikin": 9.06,
        "boshuAvg30d": 99.4,
        "heikinAvg30d": 8.837
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 8.6,
        "boshuAvg30d": 99.4,
        "heikinAvg30d": 9.107
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 8.83,
        "boshuAvg30d": 98.4,
        "heikinAvg30d": 8.557
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 89.625,
        "saikou": 10,
        "heikin": 8.7,
        "boshuAvg30d": 97.4,
        "heikinAvg30d": 8.591
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 88.125,
        "saikou": 10,
        "heikin": 8.96,
        "boshuAvg30d": 96.4,
        "heikinAvg30d": 8.964
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 539,
        "ouatsu": 455.045,
        "saikou": 9.4,
        "heikin": 3.08,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 3.904
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 539,
        "ouatsu": 424.192,
        "saikou": 9.4,
        "heikin": 2.99,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 3.693
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 539,
        "ouatsu": 422.479,
        "saikou": 9.4,
        "heikin": 3.64,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 3.717
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 539,
        "ouatsu": 405.613,
        "saikou": 10,
        "heikin": 4.66,
        "boshuAvg30d": 545.6,
        "heikinAvg30d": 3.506
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 537,
        "ouatsu": 395.591,
        "saikou": 10,
        "heikin": 4.61,
        "boshuAvg30d": 543.6,
        "heikinAvg30d": 3.467
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 537,
        "ouatsu": 395.591,
        "saikou": 9.46,
        "heikin": 4.44,
        "boshuAvg30d": 543.6,
        "heikinAvg30d": 3.469
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 536,
        "ouatsu": 407.563,
        "saikou": 9.4,
        "heikin": 3.16,
        "boshuAvg30d": 542.0,
        "heikinAvg30d": 3.345
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 537,
        "ouatsu": 404.123,
        "saikou": 9.4,
        "heikin": 3.83,
        "boshuAvg30d": 543.0,
        "heikinAvg30d": 3.452
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 538,
        "ouatsu": 405.643,
        "saikou": 9.4,
        "heikin": 3.03,
        "boshuAvg30d": 544.0,
        "heikinAvg30d": 3.471
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 538,
        "ouatsu": 390.981,
        "saikou": 9.4,
        "heikin": 2.87,
        "boshuAvg30d": 544.6,
        "heikinAvg30d": 3.448
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 538,
        "ouatsu": 390.981,
        "saikou": 9.4,
        "heikin": 3.15,
        "boshuAvg30d": 544.6,
        "heikinAvg30d": 3.605
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 538,
        "ouatsu": 390.981,
        "saikou": 9.4,
        "heikin": 3.15,
        "boshuAvg30d": 544.6,
        "heikinAvg30d": 3.521
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 559,
        "ouatsu": 390.981,
        "saikou": 9.4,
        "heikin": 3.61,
        "boshuAvg30d": 565.6,
        "heikinAvg30d": 3.936
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 567,
        "ouatsu": 390.981,
        "saikou": 9.4,
        "heikin": 3.75,
        "boshuAvg30d": 573.6,
        "heikinAvg30d": 4.087
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 572,
        "ouatsu": 419.081,
        "saikou": 9.4,
        "heikin": 3.72,
        "boshuAvg30d": 580.0,
        "heikinAvg30d": 4.118
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 577,
        "ouatsu": 455.581,
        "saikou": 9.5,
        "heikin": 3.78,
        "boshuAvg30d": 584.7,
        "heikinAvg30d": 4.097
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 577,
        "ouatsu": 451.597,
        "saikou": 9.5,
        "heikin": 4.22,
        "boshuAvg30d": 584.7,
        "heikinAvg30d": 4.504
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 577,
        "ouatsu": 536.938,
        "saikou": 9.5,
        "heikin": 4.09,
        "boshuAvg30d": 584.7,
        "heikinAvg30d": 4.673
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 568,
        "ouatsu": 614.795,
        "saikou": 9.4,
        "heikin": 3.88,
        "boshuAvg30d": 575.1,
        "heikinAvg30d": 4.718
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 568,
        "ouatsu": 623.307,
        "saikou": 9.4,
        "heikin": 3.56,
        "boshuAvg30d": 575.1,
        "heikinAvg30d": 4.431
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 568,
        "ouatsu": 633.586,
        "saikou": 10,
        "heikin": 3.48,
        "boshuAvg30d": 574.6,
        "heikinAvg30d": 4.105
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 567,
        "ouatsu": 617.36,
        "saikou": 10,
        "heikin": 3.77,
        "boshuAvg30d": 573.6,
        "heikinAvg30d": 4.131
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 564,
        "ouatsu": 667.6,
        "saikou": 9.4,
        "heikin": 3.51,
        "boshuAvg30d": 570.6,
        "heikinAvg30d": 4.305
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 564,
        "ouatsu": 643.412,
        "saikou": 10,
        "heikin": 3.68,
        "boshuAvg30d": 570.6,
        "heikinAvg30d": 4.326
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 563,
        "ouatsu": 574.636,
        "saikou": 10,
        "heikin": 4.11,
        "boshuAvg30d": 569.6,
        "heikinAvg30d": 4.103
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 563,
        "ouatsu": 614.736,
        "saikou": 10,
        "heikin": 3.84,
        "boshuAvg30d": 569.6,
        "heikinAvg30d": 4.171
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 563,
        "ouatsu": 574.627,
        "saikou": 10,
        "heikin": 4.07,
        "boshuAvg30d": 570.1,
        "heikinAvg30d": 4.184
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 562,
        "ouatsu": 626.427,
        "saikou": 10,
        "heikin": 4.01,
        "boshuAvg30d": 569.1,
        "heikinAvg30d": 4.278
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 561,
        "ouatsu": 574.47,
        "saikou": 9.4,
        "heikin": 4.19,
        "boshuAvg30d": 568.7,
        "heikinAvg30d": 4.541
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 561,
        "ouatsu": 616.47,
        "saikou": 9.4,
        "heikin": 4.01,
        "boshuAvg30d": 568.7,
        "heikinAvg30d": 4.563
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 560,
        "ouatsu": 562.807,
        "saikou": 9.4,
        "heikin": 3.96,
        "boshuAvg30d": 567.7,
        "heikinAvg30d": 4.52
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 560,
        "ouatsu": 524.041,
        "saikou": 9.4,
        "heikin": 4.11,
        "boshuAvg30d": 567.7,
        "heikinAvg30d": 4.838
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 560,
        "ouatsu": 513.827,
        "saikou": 9.4,
        "heikin": 3.9,
        "boshuAvg30d": 567.3,
        "heikinAvg30d": 5.072
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 560,
        "ouatsu": 629.589,
        "saikou": 9.4,
        "heikin": 3.71,
        "boshuAvg30d": 567.3,
        "heikinAvg30d": 5.173
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 560,
        "ouatsu": 629.589,
        "saikou": 9.4,
        "heikin": 3.72,
        "boshuAvg30d": 567.3,
        "heikinAvg30d": 5.295
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 560,
        "ouatsu": 585.739,
        "saikou": 9.4,
        "heikin": 3.94,
        "boshuAvg30d": 567.3,
        "heikinAvg30d": 5.277
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 562,
        "ouatsu": 535.739,
        "saikou": 9.4,
        "heikin": 4.17,
        "boshuAvg30d": 570.0,
        "heikinAvg30d": 5.149
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 562,
        "ouatsu": 529.633,
        "saikou": 9.4,
        "heikin": 3.95,
        "boshuAvg30d": 569.3,
        "heikinAvg30d": 4.887
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 563,
        "ouatsu": 513.471,
        "saikou": 9.4,
        "heikin": 4.04,
        "boshuAvg30d": 569.6,
        "heikinAvg30d": 4.826
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 563,
        "ouatsu": 513.428,
        "saikou": 9.4,
        "heikin": 4.25,
        "boshuAvg30d": 569.6,
        "heikinAvg30d": 4.602
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 561,
        "ouatsu": 515.395,
        "saikou": 9.4,
        "heikin": 4.01,
        "boshuAvg30d": 568.3,
        "heikinAvg30d": 4.097
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 561,
        "ouatsu": 519.155,
        "saikou": 9.4,
        "heikin": 3.96,
        "boshuAvg30d": 568.3,
        "heikinAvg30d": 4.079
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 560,
        "ouatsu": 505.024,
        "saikou": 9.4,
        "heikin": 3.57,
        "boshuAvg30d": 568.0,
        "heikinAvg30d": 3.706
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 560,
        "ouatsu": 482.239,
        "saikou": 9.4,
        "heikin": 4.1,
        "boshuAvg30d": 568.0,
        "heikinAvg30d": 4.685
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 560,
        "ouatsu": 482.282,
        "saikou": 9.4,
        "heikin": 3.9,
        "boshuAvg30d": 568.0,
        "heikinAvg30d": 4.23
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 558,
        "ouatsu": 494.969,
        "saikou": 9.4,
        "heikin": 3.5,
        "boshuAvg30d": 566.0,
        "heikinAvg30d": 3.948
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 556,
        "ouatsu": 506.824,
        "saikou": 9.4,
        "heikin": 3.44,
        "boshuAvg30d": 563.3,
        "heikinAvg30d": 4.25
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 555,
        "ouatsu": 486.587,
        "saikou": 9.4,
        "heikin": 3.25,
        "boshuAvg30d": 561.6,
        "heikinAvg30d": 4.27
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 150.427,
        "saikou": 0.53,
        "heikin": 0.4,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 4.097
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 148.11,
        "saikou": 3,
        "heikin": 0.62,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.845
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 171.512,
        "saikou": 3.4,
        "heikin": 0.86,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.955
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 171.512,
        "saikou": 3,
        "heikin": 0.81,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.935
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 169.836,
        "saikou": 3,
        "heikin": 0.81,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 4.365
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 193.966,
        "saikou": 3,
        "heikin": 0.81,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 4.401
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 217.623,
        "saikou": 3,
        "heikin": 0.57,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 4.147
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 211.963,
        "saikou": 3.4,
        "heikin": 0.59,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 4.133
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 237.354,
        "saikou": 3.08,
        "heikin": 0.58,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 4.162
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 239.214,
        "saikou": 3.4,
        "heikin": 0.58,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 4.112
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 241.204,
        "saikou": 3.4,
        "heikin": 0.59,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.862
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 239.704,
        "saikou": 3.05,
        "heikin": 0.58,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 4.1
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 241.204,
        "saikou": 3.05,
        "heikin": 1.01,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 4.425
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 233.32,
        "saikou": 3.21,
        "heikin": 1.45,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 4.402
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 233.32,
        "saikou": 4,
        "heikin": 3.03,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 4.624
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 324.852,
        "saikou": 3.42,
        "heikin": 2.37,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 4.767
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 397.036,
        "saikou": 4.99,
        "heikin": 2.93,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 5.071
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 403.688,
        "saikou": 4.99,
        "heikin": 2.47,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 5.139
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 370.356,
        "saikou": 4.5,
        "heikin": 2.34,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.424
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 370.356,
        "saikou": 4.88,
        "heikin": 2.67,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.369
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 375.67,
        "saikou": 4.99,
        "heikin": 2.6,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 5.352
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 375.67,
        "saikou": 6,
        "heikin": 2.92,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.409
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 374.249,
        "saikou": 4.99,
        "heikin": 2.69,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 5.05
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 372.359,
        "saikou": 4.5,
        "heikin": 2.31,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 5.023
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 377.726,
        "saikou": 2.37,
        "heikin": 1.2,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 5.023
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 339.464,
        "saikou": 4.1,
        "heikin": 1.86,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 5.055
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 335.158,
        "saikou": 3.9,
        "heikin": 1.66,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 5.322
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 335.158,
        "saikou": 4.99,
        "heikin": 2.57,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 5.494
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 335.158,
        "saikou": 4.99,
        "heikin": 2.72,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 5.531
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 257.941,
        "saikou": 6.8,
        "heikin": 2.87,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 5.364
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 210.733,
        "saikou": 6.8,
        "heikin": 2.98,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 5.215
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 197.584,
        "saikou": 8.47,
        "heikin": 3.84,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 5.173
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 180.568,
        "saikou": 4.99,
        "heikin": 3.06,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 5.048
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 236.247,
        "saikou": 4.39,
        "heikin": 3.22,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 5.122
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 180.568,
        "saikou": 4.99,
        "heikin": 3.05,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 4.686
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 181.467,
        "saikou": 4.68,
        "heikin": 3.02,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 4.372
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 211.997,
        "saikou": 4.99,
        "heikin": 3.13,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 4.844
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 182.557,
        "saikou": 4.99,
        "heikin": 3,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 4.359
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 238.967,
        "saikou": 5.1,
        "heikin": 2.86,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 4.014
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 219.363,
        "saikou": 4.39,
        "heikin": 2.54,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 3.981
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 233.882,
        "saikou": 4,
        "heikin": 2.57,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 3.705
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 238.967,
        "saikou": 3.79,
        "heikin": 2.26,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 3.567
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 227.687,
        "saikou": 4.68,
        "heikin": 3.05,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 3.558
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 234.987,
        "saikou": 3,
        "heikin": 2.12,
        "boshuAvg30d": 162.0,
        "heikinAvg30d": 4.293
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 227.687,
        "saikou": 2.9,
        "heikin": 2.18,
        "boshuAvg30d": 162.0,
        "heikinAvg30d": 4.164
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 227.687,
        "saikou": 3,
        "heikin": 1.99,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 4.222
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 227.687,
        "saikou": 3,
        "heikin": 2.12,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 4.303
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 224.327,
        "saikou": 3.88,
        "heikin": 2.01,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.455
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 20.045,
        "saikou": 2.87,
        "heikin": 2.67,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.783
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.87,
        "heikin": 2.79,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.635
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.87,
        "heikin": 2.84,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.493
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.79,
        "heikin": 2.56,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.698
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.8,
        "heikin": 2.12,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.296
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.4,
        "heikin": 2.02,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.978
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.85,
        "heikin": 2.75,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.609
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 16.398,
        "saikou": 2.87,
        "heikin": 2.86,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.341
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 28.832,
        "saikou": 2.87,
        "heikin": 2.82,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.443
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 25.236,
        "saikou": 2.86,
        "heikin": 2.85,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.024
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 7.162,
        "saikou": 2.85,
        "heikin": 2.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.335
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.89,
        "heikin": 2.82,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.63
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 3.786
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 27.076,
        "saikou": 3.38,
        "heikin": 3.28,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.702
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 28.928,
        "saikou": 3.7,
        "heikin": 3.48,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 4.097
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 28.928,
        "saikou": 3.52,
        "heikin": 3.42,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.983
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 26.174,
        "saikou": 5.5,
        "heikin": 1.48,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 4.831
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 4,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 5.682
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 54.992,
        "saikou": 4.49,
        "heikin": 4.39,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.306
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 4.51,
        "heikin": 4.46,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 6.009
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 4.51,
        "heikin": 4.51,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.51
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 4.51,
        "heikin": 4.51,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.447
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 4.51,
        "heikin": 4.51,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.245
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 50.714,
        "saikou": 4.52,
        "heikin": 4.42,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.407
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.309
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.114
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.461
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.326
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.646
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.02,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.642
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 4.59,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 5.075
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.8,
        "heikin": 5.23,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 5.593
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.174
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.991
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.89,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.908
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.98,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.545
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.75,
        "heikin": 4.37,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 6.108
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.385
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 4.1,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.591
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.19,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.072
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 3.69,
        "heikin": 3.69,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.338
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 3,
        "heikin": 2.75,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.913
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 3.1,
        "heikin": 2.85,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.777
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.6,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.899
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.625
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.9,
        "heikin": 2.7,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 3.881
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 3.903
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.48,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.715
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 180.578,
        "saikou": 2.9,
        "heikin": 1.33,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 1.999
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 180.578,
        "saikou": 2.9,
        "heikin": 1.34,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.554
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 154.68,
        "saikou": 3,
        "heikin": 1.52,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.315
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 150.702,
        "saikou": 3,
        "heikin": 1.5,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.297
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 148.704,
        "saikou": 3,
        "heikin": 1.48,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.277
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 148.704,
        "saikou": 3,
        "heikin": 1.48,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 2.467
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 182.527,
        "saikou": 2.97,
        "heikin": 1.35,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.305
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 182.527,
        "saikou": 2.97,
        "heikin": 1.36,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.605
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 182.527,
        "saikou": 2.9,
        "heikin": 1.24,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.08
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 182.527,
        "saikou": 2.9,
        "heikin": 1.23,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.099
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 143.589,
        "saikou": 3,
        "heikin": 1.47,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.317
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 182.527,
        "saikou": 2.9,
        "heikin": 1.17,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.024
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 182.527,
        "saikou": 2.9,
        "heikin": 1.27,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 4.118
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 182.534,
        "saikou": 3,
        "heikin": 1.42,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 4.089
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 106.29,
        "saikou": 3,
        "heikin": 2.09,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 3.993
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.22,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 4.278
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 5.12
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 4,
        "heikin": 2.29,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 5.496
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 99.354,
        "saikou": 4,
        "heikin": 2.24,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 5.249
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 99.354,
        "saikou": 4,
        "heikin": 2.28,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 5.246
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 99.354,
        "saikou": 3.63,
        "heikin": 1.99,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 5.135
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 99.354,
        "saikou": 6,
        "heikin": 2.82,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 5.042
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 99.354,
        "saikou": 3.98,
        "heikin": 2.01,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.931
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 4,
        "heikin": 2.34,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 4.907
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 200.235,
        "saikou": 2.95,
        "heikin": 0.88,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 5.823
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 200.235,
        "saikou": 3,
        "heikin": 0.95,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.824
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 101.778,
        "saikou": 4,
        "heikin": 2.28,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.888
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 4,
        "heikin": 2.33,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 5.1
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 4.75,
        "heikin": 2.17,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 5.001
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 7.77,
        "heikin": 3.47,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 4.605
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 6.99,
        "heikin": 3.22,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.37
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 6.99,
        "heikin": 3.31,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.421
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 5.97,
        "heikin": 2.61,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.335
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 3.5,
        "heikin": 2.11,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.677
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 6.99,
        "heikin": 3.18,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.202
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.354,
        "saikou": 5,
        "heikin": 2.58,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.155
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 5,
        "heikin": 2.24,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 4.13
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 5,
        "heikin": 2.51,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 3.902
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 50.563,
        "saikou": 5,
        "heikin": 3.69,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 3.849
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 99.838,
        "saikou": 3,
        "heikin": 2.24,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 3.771
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 101.281,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 3.448
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 99.838,
        "saikou": 3,
        "heikin": 2.25,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.558
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 126.589,
        "saikou": 3,
        "heikin": 1.87,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 3.316
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 175.793,
        "saikou": 3,
        "heikin": 1.48,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 3.487
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 201.678,
        "saikou": 2.95,
        "heikin": 1.28,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 3.137
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 186.002,
        "saikou": 3,
        "heikin": 1.43,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 3.365
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 172.445,
        "saikou": 3,
        "heikin": 1.52,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.73
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 103.221,
        "saikou": 3,
        "heikin": 2.3,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 4.551
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 4.18,
        "heikin": 3.25,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.069
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 4.18,
        "heikin": 3.25,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.306
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 4.18,
        "heikin": 3.22,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.248
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 3.83,
        "heikin": 3.01,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.084
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 3.33,
        "heikin": 2.68,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.059
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 3.33,
        "heikin": 2.68,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.141
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 4.15,
        "heikin": 3.22,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.124
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 4.18,
        "heikin": 3.23,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.199
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 4.18,
        "heikin": 3.24,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.109
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 4.16,
        "heikin": 3.22,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.27
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 4.16,
        "heikin": 3.22,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.534
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 177.289,
        "saikou": 4.2,
        "heikin": 3.28,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.423
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 177.289,
        "saikou": 4.68,
        "heikin": 3.57,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 3.734
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 178.13,
        "saikou": 4.69,
        "heikin": 3.56,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 3.169
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 4.83,
        "heikin": 3.65,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 3.017
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 178.13,
        "saikou": 4.83,
        "heikin": 3.67,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.956
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 157.644,
        "saikou": 2.97,
        "heikin": 2.18,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.981
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 171.818,
        "saikou": 3,
        "heikin": 1.52,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 4.023
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 168.543,
        "saikou": 3,
        "heikin": 1.87,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.821
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 184.413,
        "saikou": 4,
        "heikin": 1.54,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 3.394
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 187.948,
        "saikou": 4,
        "heikin": 1.61,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 3.107
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 91.447,
        "saikou": 5,
        "heikin": 3,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.075
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 155.082,
        "saikou": 5,
        "heikin": 1.65,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.056
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 252.038,
        "saikou": 1.56,
        "heikin": 1.13,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.117
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 250.238,
        "saikou": 1.38,
        "heikin": 0.99,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.292
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 250.238,
        "saikou": 1.56,
        "heikin": 1.08,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.185
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 265.841,
        "saikou": 1.56,
        "heikin": 1.1,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.839
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 168.885,
        "saikou": 4,
        "heikin": 1.16,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.406
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 155.082,
        "saikou": 5,
        "heikin": 1.64,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 3.551
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 203.815,
        "saikou": 5,
        "heikin": 2.21,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 4.012
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 191.11,
        "saikou": 3,
        "heikin": 1.81,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.808
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 191.107,
        "saikou": 4.89,
        "heikin": 3.68,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 5.927
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 191.107,
        "saikou": 5.58,
        "heikin": 4.2,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 6.026
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 189.125,
        "saikou": 5.73,
        "heikin": 4.22,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 6.855
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 189.125,
        "saikou": 6.97,
        "heikin": 4.26,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.573
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 189.125,
        "saikou": 6.97,
        "heikin": 4.37,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.557
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 187.135,
        "saikou": 5.89,
        "heikin": 4.33,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.809
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 189.117,
        "saikou": 5.83,
        "heikin": 4.33,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.87
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 189.117,
        "saikou": 5.64,
        "heikin": 4.25,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.542
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 191.107,
        "saikou": 4.89,
        "heikin": 3.72,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 7.101
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 204.91,
        "saikou": 6.38,
        "heikin": 3.92,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 6.804
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 184.41,
        "saikou": 5.58,
        "heikin": 4.09,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.987
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 216.311,
        "saikou": 3.83,
        "heikin": 1.58,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 5.491
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 175.646,
        "saikou": 4.89,
        "heikin": 3.73,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 5.031
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 177.289,
        "saikou": 4.71,
        "heikin": 3.58,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 4.33
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 177.289,
        "saikou": 4.69,
        "heikin": 3.56,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 3.942
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 177.289,
        "saikou": 4.83,
        "heikin": 3.61,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.877
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 176.33,
        "saikou": 4.95,
        "heikin": 3.63,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 3.072
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.765
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.803
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.805
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.77
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.739
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 39.3,
        "heikinAvg30d": 0.753
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 224.403,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.913
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 212.86,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.888
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 212.86,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.896
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 216.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.921
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.92
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.899
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 171.403,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.862
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 190.403,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.823
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 190.403,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.851
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 204.403,
        "saikou": 1.6,
        "heikin": 1.21,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.762
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.714
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.759
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.3,
        "boshuAvg30d": 46.3,
        "heikinAvg30d": 1.03
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.37,
        "boshuAvg30d": 46.3,
        "heikinAvg30d": 1.032
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.991
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 168.403,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.005
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 168.403,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.04
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 168.403,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.069
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.109
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.049
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.81,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.963
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.9
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 0.98,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.941
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 208.403,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.834
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.912
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.899
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 165.403,
        "saikou": 1.6,
        "heikin": 1.06,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.86
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.908
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.849
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
        "heikin": 0.79,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.817
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.825
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 177.403,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.826
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.822
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
        "heikinAvg30d": 0.731
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.702
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 216.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.674
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 238.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.702
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 238.403,
        "saikou": 1.07,
        "heikin": 0.47,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.742
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 158.759,
        "saikou": 2.9,
        "heikin": 2.46,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.233
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 158.759,
        "saikou": 2.99,
        "heikin": 2.46,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.115
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 174.509,
        "saikou": 3,
        "heikin": 2.19,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.937
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 176.455,
        "saikou": 3,
        "heikin": 1.87,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.088
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 176.455,
        "saikou": 3,
        "heikin": 1.86,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.938
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 176.455,
        "saikou": 3,
        "heikin": 1.89,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.999
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 193.715,
        "saikou": 2.98,
        "heikin": 2.1,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.913
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 188.387,
        "saikou": 2.99,
        "heikin": 2.12,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 4.026
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 247.215,
        "saikou": 3.14,
        "heikin": 2.02,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 3.979
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 247.215,
        "saikou": 2.89,
        "heikin": 1.61,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 4.034
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 239.565,
        "saikou": 2.99,
        "heikin": 1.91,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 3.969
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 245.239,
        "saikou": 2.89,
        "heikin": 1.4,
        "boshuAvg30d": 166.3,
        "heikinAvg30d": 3.718
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 248.239,
        "saikou": 2.94,
        "heikin": 1.52,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 3.608
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 247.373,
        "saikou": 2.01,
        "heikin": 1.26,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 3.6
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 186.387,
        "saikou": 3,
        "heikin": 2.17,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 3.825
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 182.589,
        "saikou": 3.36,
        "heikin": 2.96,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 3.81
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 182.589,
        "saikou": 4.75,
        "heikin": 3.91,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 3.983
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 190.239,
        "saikou": 6.77,
        "heikin": 5.15,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 4.769
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 193.743,
        "saikou": 7.19,
        "heikin": 5.37,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 4.706
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 193.743,
        "saikou": 7.25,
        "heikin": 5.4,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.654
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 187.26,
        "saikou": 7.04,
        "heikin": 5.31,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.527
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 176.366,
        "saikou": 7.04,
        "heikin": 5.56,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.547
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 176.366,
        "saikou": 6.76,
        "heikin": 5.42,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 4.549
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 174.418,
        "saikou": 6.49,
        "heikin": 5.25,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 4.687
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 213.699,
        "saikou": 3.6,
        "heikin": 3.29,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.099
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 213.699,
        "saikou": 3.37,
        "heikin": 3.15,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.278
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 170.699,
        "saikou": 6.05,
        "heikin": 4.9,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.649
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 166.847,
        "saikou": 6.72,
        "heikin": 5.44,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 5.292
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 168.347,
        "saikou": 6.84,
        "heikin": 5.57,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 5.991
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 186.093,
        "saikou": 7.04,
        "heikin": 5.57,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 6.656
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 186.093,
        "saikou": 6.47,
        "heikin": 5.19,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 6.168
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 186.093,
        "saikou": 7.04,
        "heikin": 5.63,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 7.026
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 246.093,
        "saikou": 6.88,
        "heikin": 4.58,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 7.145
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 270.093,
        "saikou": 7.17,
        "heikin": 4.16,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.51
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 245.093,
        "saikou": 7.31,
        "heikin": 4.78,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 7.193
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 253.117,
        "saikou": 7.23,
        "heikin": 4.71,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 7.456
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 233.806,
        "saikou": 7.17,
        "heikin": 4.12,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 7.613
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 233.806,
        "saikou": 6.97,
        "heikin": 3.96,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 7.356
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 240.784,
        "saikou": 6.5,
        "heikin": 3.61,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.67
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 242.773,
        "saikou": 5.84,
        "heikin": 3.13,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.079
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 245.673,
        "saikou": 5.39,
        "heikin": 3.44,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.37
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 251.337,
        "saikou": 5.71,
        "heikin": 3.47,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.573
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 248.427,
        "saikou": 5.37,
        "heikin": 3.33,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.125
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 249.427,
        "saikou": 5.3,
        "heikin": 3.27,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.123
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 249.427,
        "saikou": 5.01,
        "heikin": 3.15,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 4.834
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 250.327,
        "saikou": 4.2,
        "heikin": 2.59,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.141
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 248.427,
        "saikou": 4.24,
        "heikin": 2.62,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.069
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 246.475,
        "saikou": 3.9,
        "heikin": 2.38,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 3.515
      }
    ]
  }
};
