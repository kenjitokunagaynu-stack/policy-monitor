// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/17〜2026/09/15）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-16",
  "fetchedAt": "2026-09-16",
  "avgWindowLabel": "過去30日平均（2026/08/17〜2026/09/15）",
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
      "ouatsu": 1551.337,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1451.4,
      "heikinAvg30d": 3.144
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1246,
      "ouatsu": 1622.17,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1451.4,
      "heikinAvg30d": 3.123
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1246,
      "ouatsu": 1743.933,
      "saikou": 10,
      "heikin": 2.46,
      "boshuAvg30d": 1451.4,
      "heikinAvg30d": 3.212
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1246,
      "ouatsu": 1683.792,
      "saikou": 10,
      "heikin": 2.53,
      "boshuAvg30d": 1450.4,
      "heikinAvg30d": 3.192
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1241,
      "ouatsu": 1705.324,
      "saikou": 10,
      "heikin": 2.51,
      "boshuAvg30d": 1445.4,
      "heikinAvg30d": 3.233
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1240,
      "ouatsu": 1735.308,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1443.9,
      "heikinAvg30d": 3.287
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1240,
      "ouatsu": 1799.929,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1454.4,
      "heikinAvg30d": 3.285
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1241,
      "ouatsu": 1807.504,
      "saikou": 10,
      "heikin": 2.53,
      "boshuAvg30d": 1455.4,
      "heikinAvg30d": 3.343
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1244,
      "ouatsu": 1798.043,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1458.9,
      "heikinAvg30d": 3.357
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1244,
      "ouatsu": 1842.363,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1459.4,
      "heikinAvg30d": 3.349
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1244,
      "ouatsu": 1755.104,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1459.4,
      "heikinAvg30d": 3.456
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1244,
      "ouatsu": 1748.254,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1459.4,
      "heikinAvg30d": 3.372
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1310,
      "ouatsu": 1772.34,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1523.9,
      "heikinAvg30d": 3.741
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1331,
      "ouatsu": 1910.45,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1545.9,
      "heikinAvg30d": 3.741
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1354,
      "ouatsu": 1932.253,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1568.9,
      "heikinAvg30d": 3.764
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1372,
      "ouatsu": 1988.749,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1585.3,
      "heikinAvg30d": 3.751
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1373,
      "ouatsu": 1897.541,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1585.8,
      "heikinAvg30d": 3.994
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1373,
      "ouatsu": 1903.628,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1585.8,
      "heikinAvg30d": 4.282
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1310,
      "ouatsu": 1843.135,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1542.0,
      "heikinAvg30d": 4.211
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1314,
      "ouatsu": 1876.295,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1546.5,
      "heikinAvg30d": 4.095
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1322,
      "ouatsu": 1868.162,
      "saikou": 10,
      "heikin": 3.13,
      "boshuAvg30d": 1553.6,
      "heikinAvg30d": 3.973
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1322,
      "ouatsu": 1892.105,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1553.6,
      "heikinAvg30d": 4.0
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1319,
      "ouatsu": 1897.465,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1549.6,
      "heikinAvg30d": 3.932
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1318,
      "ouatsu": 1882.182,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1549.1,
      "heikinAvg30d": 3.938
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1311,
      "ouatsu": 1898.719,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1540.7,
      "heikinAvg30d": 3.736
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1311,
      "ouatsu": 1945.071,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1540.7,
      "heikinAvg30d": 3.744
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1311,
      "ouatsu": 1928.701,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1538.1,
      "heikinAvg30d": 3.98
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1305,
      "ouatsu": 1945.198,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1532.1,
      "heikinAvg30d": 4.226
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1300,
      "ouatsu": 1878.425,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1528.6,
      "heikinAvg30d": 4.464
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1293,
      "ouatsu": 1893.532,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1523.1,
      "heikinAvg30d": 4.535
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1350,
      "ouatsu": 1804.112,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1566.8,
      "heikinAvg30d": 4.495
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1350,
      "ouatsu": 1832.428,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1566.8,
      "heikinAvg30d": 4.863
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1350,
      "ouatsu": 1822.788,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1566.9,
      "heikinAvg30d": 4.894
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1348,
      "ouatsu": 1820.06,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1563.4,
      "heikinAvg30d": 5.146
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1344,
      "ouatsu": 1799.389,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1556.5,
      "heikinAvg30d": 5.191
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1340,
      "ouatsu": 1788.162,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1552.5,
      "heikinAvg30d": 5.158
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1332,
      "ouatsu": 1873.513,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1544.0,
      "heikinAvg30d": 5.211
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1332,
      "ouatsu": 1899.015,
      "saikou": 10,
      "heikin": 3.53,
      "boshuAvg30d": 1543.5,
      "heikinAvg30d": 5.065
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1333,
      "ouatsu": 1849.129,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1544.0,
      "heikinAvg30d": 4.846
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1332,
      "ouatsu": 1899.929,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1543.5,
      "heikinAvg30d": 4.572
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1327,
      "ouatsu": 1779.023,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1538.5,
      "heikinAvg30d": 4.272
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1323,
      "ouatsu": 1770.581,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1536.0,
      "heikinAvg30d": 3.977
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1230,
      "ouatsu": 1760.269,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1448.2,
      "heikinAvg30d": 3.573
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1233,
      "ouatsu": 1793.717,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1451.2,
      "heikinAvg30d": 4.221
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1234,
      "ouatsu": 1728.856,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1452.2,
      "heikinAvg30d": 3.921
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1227,
      "ouatsu": 1691.611,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1445.7,
      "heikinAvg30d": 3.609
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1220,
      "ouatsu": 1591.928,
      "saikou": 10,
      "heikin": 3.13,
      "boshuAvg30d": 1437.7,
      "heikinAvg30d": 3.65
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1212,
      "ouatsu": 1568.833,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1429.2,
      "heikinAvg30d": 3.537
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
        "saikou": 1.23,
        "heikin": 1.19,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.296
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 118.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.295
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 165.008,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.121
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 126.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.322
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 188.058,
        "saikou": 5.34,
        "heikin": 1.55,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.386
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 181.908,
        "saikou": 4.6,
        "heikin": 1.52,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.425
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 168.608,
        "saikou": 6.65,
        "heikin": 1.23,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.699
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 206.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.922
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 170.558,
        "saikou": 3.8,
        "heikin": 1.04,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 2.314
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 211.108,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.967
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 158.568,
        "saikou": 4,
        "heikin": 1.1,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 2.229
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 160.558,
        "saikou": 4,
        "heikin": 1.04,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.872
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 152.698,
        "saikou": 6.15,
        "heikin": 2.21,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.371
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 184.208,
        "saikou": 7.4,
        "heikin": 2.11,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.914
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 152.658,
        "saikou": 3.28,
        "heikin": 1.49,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.7
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 195.958,
        "saikou": 3.12,
        "heikin": 1.47,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.897
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 116.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.388
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 165.008,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.799
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 156.668,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.489
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 190.708,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 1.627
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 175.667,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 1.538
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 175.667,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 1.763
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 173.677,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 1.687
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 154.74,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 1.571
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 182.026,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.495
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 182.026,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.492
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 187.74,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.082
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 182.026,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.422
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 182.026,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.312
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 192.026,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.333
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 162.75,
        "saikou": 1.27,
        "heikin": 1.24,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 3.207
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 182.026,
        "saikou": 1.07,
        "heikin": 1.05,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.764
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 154.74,
        "saikou": 8,
        "heikin": 1.34,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.745
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 180.036,
        "saikou": 5.16,
        "heikin": 4.74,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.887
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 89.74,
        "saikou": 4.85,
        "heikin": 4.73,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.385
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 89.74,
        "saikou": 4.86,
        "heikin": 4.74,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 3.592
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 138.04,
        "saikou": 4.89,
        "heikin": 4.82,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 3.497
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 165.008,
        "saikou": 4.86,
        "heikin": 4.38,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 3.165
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 158.658,
        "saikou": 4.51,
        "heikin": 3.91,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 3.179
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 206.958,
        "saikou": 2.46,
        "heikin": 2.18,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 2.671
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 140.718,
        "saikou": 4,
        "heikin": 1.97,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 2.773
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 203.018,
        "saikou": 1.87,
        "heikin": 1.71,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.939
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 158.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.651
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 206.958,
        "saikou": 1.31,
        "heikin": 1.18,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.334
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 166.708,
        "saikou": 1.35,
        "heikin": 1.29,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.122
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 210.92,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.782
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 158.658,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.62
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 156.708,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.35
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 71.779,
        "saikou": 10,
        "heikin": 7.58,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 8.269
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 75.609,
        "saikou": 10,
        "heikin": 7.79,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 8.476
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 93.489,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 9.207
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 93.489,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 9.178
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 91.491,
        "saikou": 10,
        "heikin": 8.06,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 9.153
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 91.491,
        "saikou": 10,
        "heikin": 8.07,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 9.166
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 91.989,
        "saikou": 10,
        "heikin": 8.06,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 9.112
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 93.489,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 9.087
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 9.052
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 8.965
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 8.08,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 8.863
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 8.06,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 8.996
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 8.12,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 9.201
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 93.988,
        "saikou": 10,
        "heikin": 9.06,
        "boshuAvg30d": 185.5,
        "heikinAvg30d": 9.569
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 9.26,
        "boshuAvg30d": 191.0,
        "heikinAvg30d": 9.804
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 92.023,
        "saikou": 10,
        "heikin": 9.26,
        "boshuAvg30d": 194.5,
        "heikinAvg30d": 9.743
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 93.523,
        "saikou": 10,
        "heikin": 9.29,
        "boshuAvg30d": 194.5,
        "heikinAvg30d": 9.785
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 90.025,
        "saikou": 10,
        "heikin": 9.28,
        "boshuAvg30d": 194.5,
        "heikinAvg30d": 9.525
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 92.171,
        "saikou": 10,
        "heikin": 9.29,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 8.744
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 92.171,
        "saikou": 10,
        "heikin": 9.29,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 8.83
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 114.171,
        "saikou": 10,
        "heikin": 8.71,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 8.679
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 114.171,
        "saikou": 10,
        "heikin": 8.7,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 8.758
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 112.371,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 8.687
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 112.371,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 8.864
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 111.725,
        "saikou": 10,
        "heikin": 8.69,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 8.883
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 111.725,
        "saikou": 10,
        "heikin": 8.69,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 8.843
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 115.521,
        "saikou": 10,
        "heikin": 8.64,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 8.323
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 115.521,
        "saikou": 10,
        "heikin": 7.99,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 8.398
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 93.686,
        "saikou": 10,
        "heikin": 8.93,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 9.121
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 93.686,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 9.156
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 83.486,
        "saikou": 10,
        "heikin": 9.14,
        "boshuAvg30d": 192.0,
        "heikinAvg30d": 9.264
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 83.486,
        "saikou": 10,
        "heikin": 8.4,
        "boshuAvg30d": 192.0,
        "heikinAvg30d": 8.863
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 95.486,
        "saikou": 10,
        "heikin": 7.19,
        "boshuAvg30d": 192.0,
        "heikinAvg30d": 8.608
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 93.986,
        "saikou": 10,
        "heikin": 7.04,
        "boshuAvg30d": 190.5,
        "heikinAvg30d": 8.138
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 95.486,
        "saikou": 10,
        "heikin": 7.19,
        "boshuAvg30d": 188.5,
        "heikinAvg30d": 7.694
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 93.986,
        "saikou": 10,
        "heikin": 7.15,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 7.953
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 7.11,
        "boshuAvg30d": 185.0,
        "heikinAvg30d": 7.886
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 79.99,
        "saikou": 10,
        "heikin": 7.4,
        "boshuAvg30d": 185.0,
        "heikinAvg30d": 7.824
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 7.54,
        "boshuAvg30d": 185.0,
        "heikinAvg30d": 8.005
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 67.56,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 184.5,
        "heikinAvg30d": 8.286
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 8.21,
        "boshuAvg30d": 184.0,
        "heikinAvg30d": 8.461
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 184.5,
        "heikinAvg30d": 8.688
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 79.56,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 100.2,
        "heikinAvg30d": 8.468
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 79.56,
        "saikou": 10,
        "heikin": 8.58,
        "boshuAvg30d": 100.2,
        "heikinAvg30d": 8.64
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 81.49,
        "saikou": 10,
        "heikin": 8.64,
        "boshuAvg30d": 100.2,
        "heikinAvg30d": 9.008
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 77.66,
        "saikou": 10,
        "heikin": 8.78,
        "boshuAvg30d": 99.2,
        "heikinAvg30d": 8.455
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 79.59,
        "saikou": 10,
        "heikin": 8.79,
        "boshuAvg30d": 98.2,
        "heikinAvg30d": 8.488
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 79.99,
        "saikou": 10,
        "heikin": 8.59,
        "boshuAvg30d": 97.2,
        "heikinAvg30d": 8.766
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 423,
        "ouatsu": 388.923,
        "saikou": 9.39,
        "heikin": 2.81,
        "boshuAvg30d": 543.5,
        "heikinAvg30d": 3.828
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 423,
        "ouatsu": 421.333,
        "saikou": 9.39,
        "heikin": 2.7,
        "boshuAvg30d": 543.5,
        "heikinAvg30d": 3.598
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 423,
        "ouatsu": 461.839,
        "saikou": 9.39,
        "heikin": 2.27,
        "boshuAvg30d": 543.5,
        "heikinAvg30d": 3.555
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 423,
        "ouatsu": 441.28,
        "saikou": 9.39,
        "heikin": 2.31,
        "boshuAvg30d": 543.0,
        "heikinAvg30d": 3.422
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 421,
        "ouatsu": 427.312,
        "saikou": 9.39,
        "heikin": 2.29,
        "boshuAvg30d": 541.0,
        "heikinAvg30d": 3.386
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 421,
        "ouatsu": 429.308,
        "saikou": 9.39,
        "heikin": 2.29,
        "boshuAvg30d": 541.0,
        "heikinAvg30d": 3.386
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 420,
        "ouatsu": 441.28,
        "saikou": 9.39,
        "heikin": 2.26,
        "boshuAvg30d": 539.5,
        "heikinAvg30d": 3.225
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 421,
        "ouatsu": 437.84,
        "saikou": 9.39,
        "heikin": 2.35,
        "boshuAvg30d": 540.5,
        "heikinAvg30d": 3.374
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 422,
        "ouatsu": 439.36,
        "saikou": 9.39,
        "heikin": 2.35,
        "boshuAvg30d": 541.5,
        "heikinAvg30d": 3.342
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 422,
        "ouatsu": 443.13,
        "saikou": 9.39,
        "heikin": 2.29,
        "boshuAvg30d": 542.0,
        "heikinAvg30d": 3.317
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 422,
        "ouatsu": 408.411,
        "saikou": 9.39,
        "heikin": 2.44,
        "boshuAvg30d": 542.0,
        "heikinAvg30d": 3.452
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 422,
        "ouatsu": 404.357,
        "saikou": 9.39,
        "heikin": 2.57,
        "boshuAvg30d": 542.0,
        "heikinAvg30d": 3.356
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 443,
        "ouatsu": 434.803,
        "saikou": 9.39,
        "heikin": 3.15,
        "boshuAvg30d": 563.0,
        "heikinAvg30d": 3.749
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 451,
        "ouatsu": 499.772,
        "saikou": 9.4,
        "heikin": 3.19,
        "boshuAvg30d": 571.0,
        "heikinAvg30d": 3.878
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 456,
        "ouatsu": 520.108,
        "saikou": 9.4,
        "heikin": 3.29,
        "boshuAvg30d": 577.0,
        "heikinAvg30d": 3.999
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 461,
        "ouatsu": 540.467,
        "saikou": 9.5,
        "heikin": 3.12,
        "boshuAvg30d": 581.9,
        "heikinAvg30d": 3.957
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 461,
        "ouatsu": 518.489,
        "saikou": 9.5,
        "heikin": 2.78,
        "boshuAvg30d": 581.9,
        "heikinAvg30d": 4.312
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 461,
        "ouatsu": 497.369,
        "saikou": 9.5,
        "heikin": 2.72,
        "boshuAvg30d": 581.9,
        "heikinAvg30d": 4.488
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 452,
        "ouatsu": 476.881,
        "saikou": 9.4,
        "heikin": 3.61,
        "boshuAvg30d": 575.4,
        "heikinAvg30d": 4.411
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 452,
        "ouatsu": 476.881,
        "saikou": 9.4,
        "heikin": 4.31,
        "boshuAvg30d": 575.4,
        "heikinAvg30d": 4.22
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 452,
        "ouatsu": 462.739,
        "saikou": 10,
        "heikin": 3.41,
        "boshuAvg30d": 575.0,
        "heikinAvg30d": 3.901
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 451,
        "ouatsu": 461.739,
        "saikou": 10,
        "heikin": 3.56,
        "boshuAvg30d": 574.0,
        "heikinAvg30d": 3.941
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 448,
        "ouatsu": 478.077,
        "saikou": 10,
        "heikin": 3.61,
        "boshuAvg30d": 571.0,
        "heikinAvg30d": 4.054
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 448,
        "ouatsu": 473.406,
        "saikou": 10,
        "heikin": 3.6,
        "boshuAvg30d": 571.0,
        "heikinAvg30d": 4.091
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 447,
        "ouatsu": 489.809,
        "saikou": 9.39,
        "heikin": 3.23,
        "boshuAvg30d": 570.0,
        "heikinAvg30d": 3.873
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 447,
        "ouatsu": 487.909,
        "saikou": 9.39,
        "heikin": 3.2,
        "boshuAvg30d": 570.0,
        "heikinAvg30d": 3.922
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 447,
        "ouatsu": 463.367,
        "saikou": 10,
        "heikin": 3.19,
        "boshuAvg30d": 567.4,
        "heikinAvg30d": 3.994
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 446,
        "ouatsu": 463.367,
        "saikou": 10,
        "heikin": 3.4,
        "boshuAvg30d": 566.4,
        "heikinAvg30d": 4.149
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 445,
        "ouatsu": 465.081,
        "saikou": 9.39,
        "heikin": 3.29,
        "boshuAvg30d": 565.9,
        "heikinAvg30d": 4.419
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 445,
        "ouatsu": 465.081,
        "saikou": 9.39,
        "heikin": 3.14,
        "boshuAvg30d": 565.9,
        "heikinAvg30d": 4.424
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 444,
        "ouatsu": 495.519,
        "saikou": 9.39,
        "heikin": 3.31,
        "boshuAvg30d": 564.9,
        "heikinAvg30d": 4.292
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 444,
        "ouatsu": 495.519,
        "saikou": 9.39,
        "heikin": 3.23,
        "boshuAvg30d": 564.9,
        "heikinAvg30d": 4.712
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 444,
        "ouatsu": 495.519,
        "saikou": 9.39,
        "heikin": 3.2,
        "boshuAvg30d": 564.5,
        "heikinAvg30d": 4.828
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 444,
        "ouatsu": 470.977,
        "saikou": 9.39,
        "heikin": 3.26,
        "boshuAvg30d": 564.5,
        "heikinAvg30d": 5.011
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 444,
        "ouatsu": 469.077,
        "saikou": 9.39,
        "heikin": 3.07,
        "boshuAvg30d": 560.6,
        "heikinAvg30d": 5.133
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 444,
        "ouatsu": 467.227,
        "saikou": 9.39,
        "heikin": 3.08,
        "boshuAvg30d": 560.6,
        "heikinAvg30d": 5.089
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 446,
        "ouatsu": 475.031,
        "saikou": 9.39,
        "heikin": 3.15,
        "boshuAvg30d": 563.1,
        "heikinAvg30d": 4.966
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 446,
        "ouatsu": 481.141,
        "saikou": 9.39,
        "heikin": 3.42,
        "boshuAvg30d": 562.6,
        "heikinAvg30d": 4.769
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 447,
        "ouatsu": 475.44,
        "saikou": 9.4,
        "heikin": 3.38,
        "boshuAvg30d": 563.1,
        "heikinAvg30d": 4.713
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 447,
        "ouatsu": 501.933,
        "saikou": 9.4,
        "heikin": 3.47,
        "boshuAvg30d": 563.1,
        "heikinAvg30d": 4.484
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 445,
        "ouatsu": 430.584,
        "saikou": 9.39,
        "heikin": 3.42,
        "boshuAvg30d": 561.6,
        "heikinAvg30d": 3.996
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 445,
        "ouatsu": 372.92,
        "saikou": 9.39,
        "heikin": 3.93,
        "boshuAvg30d": 561.6,
        "heikinAvg30d": 3.988
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 444,
        "ouatsu": 385.554,
        "saikou": 9.4,
        "heikin": 3.35,
        "boshuAvg30d": 561.1,
        "heikinAvg30d": 3.612
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 444,
        "ouatsu": 405.797,
        "saikou": 9.4,
        "heikin": 3.58,
        "boshuAvg30d": 561.1,
        "heikinAvg30d": 4.622
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 444,
        "ouatsu": 405.797,
        "saikou": 9.4,
        "heikin": 3.63,
        "boshuAvg30d": 561.1,
        "heikinAvg30d": 4.126
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 442,
        "ouatsu": 405.754,
        "saikou": 9.39,
        "heikin": 3.92,
        "boshuAvg30d": 559.1,
        "heikinAvg30d": 3.872
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 440,
        "ouatsu": 401.904,
        "saikou": 9.39,
        "heikin": 3.89,
        "boshuAvg30d": 556.6,
        "heikinAvg30d": 4.184
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 439,
        "ouatsu": 387.814,
        "saikou": 9.39,
        "heikin": 3.22,
        "boshuAvg30d": 555.1,
        "heikinAvg30d": 4.074
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 323.328,
        "saikou": 2.88,
        "heikin": 2.15,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.764
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 333.21,
        "saikou": 2.88,
        "heikin": 2.1,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.607
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 352.636,
        "saikou": 2.9,
        "heikin": 2.31,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.671
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 352.636,
        "saikou": 2.97,
        "heikin": 2.46,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.73
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 332.78,
        "saikou": 2.9,
        "heikin": 2.22,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 3.054
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 338.721,
        "saikou": 2.9,
        "heikin": 2.13,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 3.165
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 362.378,
        "saikou": 2.89,
        "heikin": 2.07,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.992
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 358.578,
        "saikou": 2.9,
        "heikin": 2.39,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.973
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 383.463,
        "saikou": 2.9,
        "heikin": 2.45,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 3.078
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 383.463,
        "saikou": 2.9,
        "heikin": 2.25,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.97
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 385.453,
        "saikou": 2.9,
        "heikin": 2.22,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.825
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 383.953,
        "saikou": 2.9,
        "heikin": 2.24,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.941
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 385.453,
        "saikou": 2.9,
        "heikin": 2.21,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 3.172
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 377.569,
        "saikou": 2.97,
        "heikin": 1.7,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 3.191
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 377.569,
        "saikou": 2.94,
        "heikin": 1.6,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 3.434
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 422.219,
        "saikou": 2.9,
        "heikin": 1.08,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 3.437
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 509.434,
        "saikou": 2.98,
        "heikin": 1.16,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 3.85
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 493.282,
        "saikou": 2.9,
        "heikin": 1.66,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 3.955
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 459.948,
        "saikou": 1.85,
        "heikin": 1.72,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 4.254
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 463.015,
        "saikou": 2.9,
        "heikin": 2.17,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 4.204
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 466.339,
        "saikou": 2.98,
        "heikin": 1.65,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 4.391
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 461.813,
        "saikou": 3.04,
        "heikin": 1.87,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 4.398
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 464.839,
        "saikou": 4.48,
        "heikin": 2.48,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 4.035
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 462.949,
        "saikou": 3.99,
        "heikin": 1.98,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 3.905
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 468.316,
        "saikou": 3.84,
        "heikin": 1.8,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 3.84
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 466.353,
        "saikou": 4,
        "heikin": 2.13,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 3.903
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 484.629,
        "saikou": 3.88,
        "heikin": 2.33,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 4.087
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 501.694,
        "saikou": 4.03,
        "heikin": 2.33,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 4.298
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 449.609,
        "saikou": 4.03,
        "heikin": 2.39,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 4.464
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 450.499,
        "saikou": 4.2,
        "heikin": 2.46,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 4.321
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 425.515,
        "saikou": 2.57,
        "heikin": 1.61,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 4.011
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 425.515,
        "saikou": 1.8,
        "heikin": 1.57,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 4.193
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 431.434,
        "saikou": 2.9,
        "heikin": 1.48,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 4.099
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 431.434,
        "saikou": 2.98,
        "heikin": 1.55,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 4.191
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 431.434,
        "saikou": 2.99,
        "heikin": 1.61,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 4.048
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 429.533,
        "saikou": 2.69,
        "heikin": 1.23,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 3.864
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 427.502,
        "saikou": 2.99,
        "heikin": 1.35,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 4.076
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 425.504,
        "saikou": 3.88,
        "heikin": 2.35,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 3.843
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 427.674,
        "saikou": 2.9,
        "heikin": 1.43,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 3.357
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 411.432,
        "saikou": 2.99,
        "heikin": 1.97,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 3.35
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 409.442,
        "saikou": 2.91,
        "heikin": 2.37,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 3.334
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 388.357,
        "saikou": 2.84,
        "heikin": 2.27,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 3.041
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 383.777,
        "saikou": 2.51,
        "heikin": 1.94,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 2.848
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 328.918,
        "saikou": 2.99,
        "heikin": 2.41,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 3.424
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 302.022,
        "saikou": 2.9,
        "heikin": 2.37,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 3.339
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 258.404,
        "saikou": 3.34,
        "heikin": 2.51,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 3.261
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 236.595,
        "saikou": 2.99,
        "heikin": 2.63,
        "boshuAvg30d": 161.4,
        "heikinAvg30d": 3.273
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 235.095,
        "saikou": 3.06,
        "heikin": 2.62,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 3.257
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 10.072,
        "saikou": 1.5,
        "heikin": 0.66,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.602
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 17.37,
        "saikou": 2.1,
        "heikin": 0.75,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.416
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 5.02,
        "saikou": 1.7,
        "heikin": 1.34,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.325
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.516
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.48,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.193
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 28.138,
        "saikou": 1.5,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.827
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.65,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.435
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 20.814,
        "saikou": 2.79,
        "heikin": 0.82,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.266
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.65,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.394
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.058
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.309
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.566
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 3.38
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 12.236,
        "saikou": 2.59,
        "heikin": 1.06,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.347
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 24.524,
        "saikou": 2.79,
        "heikin": 0.75,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 3.8
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 28.928,
        "saikou": 2.8,
        "heikin": 0.7,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.683
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 4.575
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 5.594
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.322
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.956
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.895
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.67
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 4.15,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.71
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.846
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 1.3,
        "heikin": 1.3,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.976
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.5,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.828
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.95,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.146
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.798
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.03
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.165
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 4.487
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 5.015
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.56
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.579
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.836
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.459
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.583
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.06,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.079
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.348
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.65,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.355
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.096
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.67
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.18,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.145
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.43,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.236
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.065
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.13,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 3.297
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 3.287
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.791
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 86.272,
        "saikou": 2.87,
        "heikin": 2.58,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 1.88
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 125.217,
        "saikou": 2.87,
        "heikin": 1.97,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.228
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 123.257,
        "saikou": 2.9,
        "heikin": 2.02,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.235
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 119.279,
        "saikou": 2.97,
        "heikin": 2.24,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.24
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 115.283,
        "saikou": 2.9,
        "heikin": 2.09,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 2.292
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 117.281,
        "saikou": 2.9,
        "heikin": 2.02,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 2.401
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 127.166,
        "saikou": 2.9,
        "heikin": 1.98,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 2.317
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 127.166,
        "saikou": 2.95,
        "heikin": 2.17,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 2.44
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.95,
        "heikin": 2.28,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.03
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.9,
        "heikin": 2.18,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.171
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.95,
        "heikin": 2.14,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.404
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.9,
        "heikin": 2.18,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.189
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 127.166,
        "saikou": 2.95,
        "heikin": 2.23,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.672
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 170.725,
        "saikou": 2.97,
        "heikin": 1.63,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.645
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 189.954,
        "saikou": 2.97,
        "heikin": 1.48,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 3.414
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 141,
        "saikou": 2.95,
        "heikin": 1.97,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 3.708
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 103.221,
        "saikou": 2.97,
        "heikin": 2.71,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 4.518
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 101.778,
        "saikou": 2.9,
        "heikin": 2.61,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 4.986
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 1.5,
        "heikin": 1.5,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.81
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 99.274,
        "saikou": 2.9,
        "heikin": 2.58,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.877
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 95.407,
        "saikou": 2.6,
        "heikin": 2.57,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.979
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 140.67,
        "saikou": 4.08,
        "heikin": 3.24,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.844
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 128.481,
        "saikou": 4.65,
        "heikin": 3.4,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.718
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 142.619,
        "saikou": 2.6,
        "heikin": 1.52,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.657
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 110.575,
        "saikou": 2.95,
        "heikin": 0.54,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 5.55
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 160.79,
        "saikou": 4,
        "heikin": 1.63,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.624
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 141.176,
        "saikou": 4,
        "heikin": 2.47,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.633
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 143.174,
        "saikou": 5,
        "heikin": 2.46,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 4.63
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 147.107,
        "saikou": 10,
        "heikin": 3.57,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.636
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 101.844,
        "saikou": 10,
        "heikin": 3.39,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.28
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 101.844,
        "saikou": 10,
        "heikin": 3.42,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.111
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2.6,
        "heikin": 2.54,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 3.972
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2.97,
        "heikin": 2.61,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.051
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2.97,
        "heikin": 2.61,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.327
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2.95,
        "heikin": 2.6,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 4.112
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.354,
        "saikou": 2.9,
        "heikin": 2.6,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 3.986
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 2.95,
        "heikin": 2.69,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 3.879
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 3,
        "heikin": 2.71,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 3.823
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 97.911,
        "saikou": 2.95,
        "heikin": 2.72,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 3.878
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 97.911,
        "saikou": 3,
        "heikin": 2.78,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 3.72
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 99.354,
        "saikou": 2.95,
        "heikin": 2.74,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.352
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 97.911,
        "saikou": 2.6,
        "heikin": 2.56,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 3.422
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.6,
        "heikin": 2.49,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 3.113
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.95,
        "heikin": 2.66,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 3.264
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.95,
        "heikin": 2.63,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 3.116
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 123.046,
        "saikou": 3,
        "heikin": 2.16,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.143
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 99.354,
        "saikou": 2.9,
        "heikin": 2.62,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 3.243
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 97.414,
        "saikou": 2.95,
        "heikin": 2.73,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.589
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 180.941,
        "saikou": 1.58,
        "heikin": 1.1,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.961
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 155.487,
        "saikou": 1.71,
        "heikin": 1.45,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.267
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 155.487,
        "saikou": 2.9,
        "heikin": 1.5,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.273
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 159.277,
        "saikou": 2.9,
        "heikin": 1.33,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.114
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 159.277,
        "saikou": 2.9,
        "heikin": 1.33,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.107
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 159.277,
        "saikou": 2.9,
        "heikin": 1.5,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.16
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 176.136,
        "saikou": 2.9,
        "heikin": 1.66,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.21
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 176.136,
        "saikou": 2.9,
        "heikin": 1.67,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.259
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 176.136,
        "saikou": 2.9,
        "heikin": 1.51,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.223
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 176.136,
        "saikou": 2.94,
        "heikin": 1.35,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.392
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 176.136,
        "saikou": 2.94,
        "heikin": 1.67,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.63
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 176.136,
        "saikou": 2.9,
        "heikin": 2.21,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.589
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 176.136,
        "saikou": 3.43,
        "heikin": 2.68,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 3.889
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 176.136,
        "saikou": 2.9,
        "heikin": 1.44,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 3.389
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 176.136,
        "saikou": 2.9,
        "heikin": 1.31,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.184
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 176.136,
        "saikou": 2.9,
        "heikin": 1.47,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.077
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 162.21,
        "saikou": 3.42,
        "heikin": 2.66,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.995
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 162.21,
        "saikou": 1.58,
        "heikin": 1.02,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 4.084
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 176.136,
        "saikou": 1.58,
        "heikin": 1.02,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.878
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 176.136,
        "saikou": 1.58,
        "heikin": 0.97,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 3.445
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 179.212,
        "saikou": 1.58,
        "heikin": 1.02,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.318
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 179.212,
        "saikou": 3,
        "heikin": 1.2,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.259
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 179.212,
        "saikou": 3,
        "heikin": 1.17,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.168
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 179.212,
        "saikou": 2.89,
        "heikin": 1.12,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.103
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 179.212,
        "saikou": 3,
        "heikin": 1.28,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.465
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 179.212,
        "saikou": 1.58,
        "heikin": 1.21,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.371
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 179.212,
        "saikou": 2.54,
        "heikin": 2.04,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.966
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 179.212,
        "saikou": 1.58,
        "heikin": 1.24,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.394
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 179.212,
        "saikou": 1.71,
        "heikin": 1.45,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.564
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 210.946,
        "saikou": 3,
        "heikin": 1.31,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.985
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 169.548,
        "saikou": 1.56,
        "heikin": 0.71,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.968
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 181.078,
        "saikou": 1.58,
        "heikin": 0.82,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.179
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 193.805,
        "saikou": 1.58,
        "heikin": 0.78,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.343
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 191.823,
        "saikou": 2.99,
        "heikin": 1,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.964
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 191.823,
        "saikou": 2.99,
        "heikin": 1.22,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.558
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 191.823,
        "saikou": 1.63,
        "heikin": 1.04,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.565
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 189.833,
        "saikou": 2.99,
        "heikin": 1.19,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.958
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 191.815,
        "saikou": 4,
        "heikin": 1.38,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 8.004
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 191.815,
        "saikou": 2.99,
        "heikin": 1.06,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.679
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 192.005,
        "saikou": 2.99,
        "heikin": 1.23,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.232
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 192.005,
        "saikou": 1.79,
        "heikin": 1.08,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.902
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 193.805,
        "saikou": 2,
        "heikin": 1.08,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 6.128
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 202.682,
        "saikou": 6.38,
        "heikin": 4,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 5.461
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 208.946,
        "saikou": 6.38,
        "heikin": 4.37,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 5.064
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 195.143,
        "saikou": 5.43,
        "heikin": 3.87,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 4.459
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 195.143,
        "saikou": 4.42,
        "heikin": 3.24,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.995
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 195.143,
        "saikou": 3.73,
        "heikin": 2.81,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.834
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 195.143,
        "saikou": 1.7,
        "heikin": 1.55,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.917
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
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.761
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.785
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.798
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.756
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.736
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 39.5,
        "heikinAvg30d": 0.748
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 198.403,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.906
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 186.86,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.88
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 198.403,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.884
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 198.403,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.92
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 198.403,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.922
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 198.403,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.897
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.916
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.909
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.943
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.818
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.5,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.804
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 201.403,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.847
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 181.403,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 0.991
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 0.997
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.958
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.994
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.978
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.971
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 3.68,
        "heikin": 1.25,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.026
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.985
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.915
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 1.03,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.935
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.934
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 181.403,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.849
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 167.403,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.945
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 167.403,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.949
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.914
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.86
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.866
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.858
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.852
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.856
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.885
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.873
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 2.08,
        "heikin": 0.77,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.852
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 2.5,
        "heikin": 0.74,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.704
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 202.403,
        "saikou": 1.6,
        "heikin": 0.42,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.74
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 215.403,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.711
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 215.403,
        "saikou": 1.7,
        "heikin": 0.67,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.679
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 215.403,
        "saikou": 1.7,
        "heikin": 0.63,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.702
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 215.403,
        "saikou": 1.7,
        "heikin": 0.71,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.736
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 169.961,
        "saikou": 5.74,
        "heikin": 4.97,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 4.168
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 173.883,
        "saikou": 4.52,
        "heikin": 3.84,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 4.039
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 185.794,
        "saikou": 3.46,
        "heikin": 3.05,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 3.92
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 185.792,
        "saikou": 3.11,
        "heikin": 2.79,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 3.97
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 185.792,
        "saikou": 2.99,
        "heikin": 2.7,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 3.87
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 187.781,
        "saikou": 3.09,
        "heikin": 2.77,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 3.914
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 205.041,
        "saikou": 3.19,
        "heikin": 2.85,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.917
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 199.713,
        "saikou": 3.5,
        "heikin": 3.09,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.955
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 203.541,
        "saikou": 3.42,
        "heikin": 3.01,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 3.942
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 203.541,
        "saikou": 4.58,
        "heikin": 3.77,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.021
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 201.551,
        "saikou": 5.06,
        "heikin": 4.3,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.065
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 198.265,
        "saikou": 5.68,
        "heikin": 4.52,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 3.89
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 195.265,
        "saikou": 5.43,
        "heikin": 4.35,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 3.821
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 194.413,
        "saikou": 4.8,
        "heikin": 4,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 3.706
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 194.413,
        "saikou": 4.53,
        "heikin": 3.81,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 3.795
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 190.615,
        "saikou": 5.46,
        "heikin": 4.58,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 3.81
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 188.625,
        "saikou": 6.05,
        "heikin": 5.47,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 4.142
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 188.625,
        "saikou": 7.26,
        "heikin": 5.96,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 4.981
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 192.779,
        "saikou": 7.81,
        "heikin": 5.77,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 4.953
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 192.779,
        "saikou": 7.8,
        "heikin": 5.76,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 4.885
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 189.296,
        "saikou": 7.62,
        "heikin": 5.7,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.685
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 173.502,
        "saikou": 7.45,
        "heikin": 5.75,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.733
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 175.477,
        "saikou": 7.47,
        "heikin": 5.73,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 4.734
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 171.554,
        "saikou": 7.18,
        "heikin": 5.58,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 4.844
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 171.725,
        "saikou": 5.39,
        "heikin": 4.49,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.242
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 171.725,
        "saikou": 5.85,
        "heikin": 4.78,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.407
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 171.725,
        "saikou": 7.42,
        "heikin": 5.68,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.911
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 174.873,
        "saikou": 8.02,
        "heikin": 6.09,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 5.611
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 176.373,
        "saikou": 8.46,
        "heikin": 6.48,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 6.227
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 194.119,
        "saikou": 8.55,
        "heikin": 6.45,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 6.806
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 194.119,
        "saikou": 8.55,
        "heikin": 6.41,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 6.474
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 194.119,
        "saikou": 8.98,
        "heikin": 8.58,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 7.402
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 194.119,
        "saikou": 9.22,
        "heikin": 8.1,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 7.45
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 194.119,
        "saikou": 10,
        "heikin": 8.35,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 7.758
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 264.144,
        "saikou": 9.31,
        "heikin": 6.96,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 7.35
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 258.168,
        "saikou": 9.06,
        "heikin": 7.32,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 7.573
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 295.857,
        "saikou": 9.2,
        "heikin": 6.41,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 7.69
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 299.832,
        "saikou": 8.98,
        "heikin": 5.77,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 7.451
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 257.81,
        "saikou": 8.24,
        "heikin": 6.1,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.798
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 263.799,
        "saikou": 7.54,
        "heikin": 5.09,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.105
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 267.099,
        "saikou": 7.39,
        "heikin": 5.17,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.461
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 274.749,
        "saikou": 6.97,
        "heikin": 5.06,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.619
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 258.353,
        "saikou": 6.42,
        "heikin": 5.02,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.194
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 257.853,
        "saikou": 6.31,
        "heikin": 4.78,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.232
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 259.011,
        "saikou": 5.84,
        "heikin": 4.31,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.91
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 201.353,
        "saikou": 4.67,
        "heikin": 4.34,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.178
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 201.353,
        "saikou": 4.53,
        "heikin": 4.2,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.099
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 197.338,
        "saikou": 3.1,
        "heikin": 2.77,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 3.487
      }
    ]
  }
};
