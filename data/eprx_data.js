// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/18〜2026/09/16）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-17",
  "fetchedAt": "2026-09-17",
  "avgWindowLabel": "過去30日平均（2026/08/18〜2026/09/16）",
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
      "ouatsu": 1397.405,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1446.3,
      "heikinAvg30d": 3.094
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1246,
      "ouatsu": 1515.843,
      "saikou": 10,
      "heikin": 2.53,
      "boshuAvg30d": 1446.3,
      "heikinAvg30d": 3.057
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1246,
      "ouatsu": 1498.807,
      "saikou": 10,
      "heikin": 2.41,
      "boshuAvg30d": 1446.3,
      "heikinAvg30d": 3.137
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1246,
      "ouatsu": 1495.491,
      "saikou": 10,
      "heikin": 2.3,
      "boshuAvg30d": 1445.3,
      "heikinAvg30d": 3.125
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1241,
      "ouatsu": 1529.732,
      "saikou": 10,
      "heikin": 2.28,
      "boshuAvg30d": 1440.3,
      "heikinAvg30d": 3.17
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1240,
      "ouatsu": 1528.364,
      "saikou": 10,
      "heikin": 2.31,
      "boshuAvg30d": 1438.9,
      "heikinAvg30d": 3.208
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1240,
      "ouatsu": 1708.232,
      "saikou": 10,
      "heikin": 2.38,
      "boshuAvg30d": 1446.5,
      "heikinAvg30d": 3.235
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1241,
      "ouatsu": 1643.098,
      "saikou": 10,
      "heikin": 2.45,
      "boshuAvg30d": 1447.5,
      "heikinAvg30d": 3.277
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1244,
      "ouatsu": 1704.622,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1451.0,
      "heikinAvg30d": 3.316
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1244,
      "ouatsu": 1727.436,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1451.5,
      "heikinAvg30d": 3.309
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1244,
      "ouatsu": 1677.064,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1451.5,
      "heikinAvg30d": 3.426
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1244,
      "ouatsu": 1742.599,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1451.5,
      "heikinAvg30d": 3.352
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1310,
      "ouatsu": 1788.153,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1516.1,
      "heikinAvg30d": 3.699
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1331,
      "ouatsu": 1714.353,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1538.0,
      "heikinAvg30d": 3.684
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1354,
      "ouatsu": 1664.161,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1561.0,
      "heikinAvg30d": 3.706
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1372,
      "ouatsu": 1697.153,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1577.6,
      "heikinAvg30d": 3.69
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1373,
      "ouatsu": 1540.623,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1578.1,
      "heikinAvg30d": 3.938
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1373,
      "ouatsu": 1470.822,
      "saikou": 10,
      "heikin": 2.85,
      "boshuAvg30d": 1578.1,
      "heikinAvg30d": 4.198
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1310,
      "ouatsu": 1342.657,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1531.5,
      "heikinAvg30d": 4.151
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1314,
      "ouatsu": 1401.083,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1536.0,
      "heikinAvg30d": 4.036
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1322,
      "ouatsu": 1402.225,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1543.1,
      "heikinAvg30d": 3.898
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1322,
      "ouatsu": 1419.443,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1543.1,
      "heikinAvg30d": 3.939
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1319,
      "ouatsu": 1440.113,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1539.1,
      "heikinAvg30d": 3.869
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1318,
      "ouatsu": 1511.555,
      "saikou": 10,
      "heikin": 3.06,
      "boshuAvg30d": 1538.6,
      "heikinAvg30d": 3.873
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1311,
      "ouatsu": 1597.133,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1530.1,
      "heikinAvg30d": 3.662
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1311,
      "ouatsu": 1627.284,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1530.1,
      "heikinAvg30d": 3.681
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1311,
      "ouatsu": 1573.2,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1527.6,
      "heikinAvg30d": 3.923
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1305,
      "ouatsu": 1655.601,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1521.6,
      "heikinAvg30d": 4.162
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1300,
      "ouatsu": 1644.766,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1518.0,
      "heikinAvg30d": 4.381
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1293,
      "ouatsu": 1771.392,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1512.4,
      "heikinAvg30d": 4.457
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1350,
      "ouatsu": 1633.766,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1558.8,
      "heikinAvg30d": 4.413
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1350,
      "ouatsu": 1685.074,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1558.8,
      "heikinAvg30d": 4.774
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1350,
      "ouatsu": 1981.841,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1558.9,
      "heikinAvg30d": 4.793
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1348,
      "ouatsu": 1954.57,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1555.5,
      "heikinAvg30d": 5.066
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1344,
      "ouatsu": 2057.41,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1548.5,
      "heikinAvg30d": 5.135
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1340,
      "ouatsu": 1886.748,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1544.5,
      "heikinAvg30d": 5.072
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1332,
      "ouatsu": 1851.908,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1536.1,
      "heikinAvg30d": 5.123
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1332,
      "ouatsu": 1837.343,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1535.6,
      "heikinAvg30d": 5.01
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1333,
      "ouatsu": 1922.325,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1536.1,
      "heikinAvg30d": 4.807
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1332,
      "ouatsu": 1711.151,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1535.6,
      "heikinAvg30d": 4.524
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1327,
      "ouatsu": 1756.454,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1530.6,
      "heikinAvg30d": 4.232
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1323,
      "ouatsu": 1709.382,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1528.0,
      "heikinAvg30d": 3.949
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1230,
      "ouatsu": 1722.454,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1440.3,
      "heikinAvg30d": 3.563
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1233,
      "ouatsu": 1758.164,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1443.3,
      "heikinAvg30d": 4.214
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1234,
      "ouatsu": 1674.782,
      "saikou": 9.81,
      "heikin": 3.16,
      "boshuAvg30d": 1444.3,
      "heikinAvg30d": 3.861
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1227,
      "ouatsu": 1747.846,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1437.7,
      "heikinAvg30d": 3.575
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1220,
      "ouatsu": 1699.781,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1429.8,
      "heikinAvg30d": 3.62
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1212,
      "ouatsu": 1733.654,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1421.3,
      "heikinAvg30d": 3.48
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
        "ouatsu": 176.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.302
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 176.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.295
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 126.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.121
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 126.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.322
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 157.158,
        "saikou": 4,
        "heikin": 1.35,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.404
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 128.658,
        "saikou": 4,
        "heikin": 1.39,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.443
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 209.438,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.706
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 166.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.922
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 208.886,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 2.315
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 213.018,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.967
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 158.658,
        "saikou": 5.85,
        "heikin": 1.46,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 2.232
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 158.658,
        "saikou": 9.85,
        "heikin": 1.51,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.874
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 182.808,
        "saikou": 6.1,
        "heikin": 2.1,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.411
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 165.008,
        "saikou": 3.45,
        "heikin": 1.67,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.951
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 137.828,
        "saikou": 3.2,
        "heikin": 1.06,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 1.716
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 128.18,
        "saikou": 7.95,
        "heikin": 1.61,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.913
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 119.968,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.389
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 121.958,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.799
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 136.918,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.492
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 125.95,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 1.625
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 125.968,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 1.456
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 125.968,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 1.766
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 127.918,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 1.692
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 127.918,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 1.572
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 125.968,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.502
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 159.968,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 1.493
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 161.918,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.012
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 187.218,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.425
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 185.468,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.227
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 185.268,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.335
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 85.968,
        "saikou": 0.98,
        "heikin": 0.6,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 3.114
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 41.968,
        "saikou": 0.98,
        "heikin": 0.98,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.751
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 96.688,
        "saikou": 9.91,
        "heikin": 6.73,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.747
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 53.958,
        "saikou": 7.6,
        "heikin": 2.33,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.871
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 55.958,
        "saikou": 9.91,
        "heikin": 8.94,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 3.428
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 11.99,
        "saikou": 8.03,
        "heikin": 7.41,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 3.575
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 64.72,
        "saikou": 9.91,
        "heikin": 7.21,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 3.522
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 73.7,
        "saikou": 9.91,
        "heikin": 7.45,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 3.191
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 123.88,
        "saikou": 6.94,
        "heikin": 2.41,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 3.18
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 75,
        "saikou": 4,
        "heikin": 2.42,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 2.63
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 127.258,
        "saikou": 9.91,
        "heikin": 7.12,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 2.725
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 78.958,
        "saikou": 5.22,
        "heikin": 2.74,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.932
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 78.958,
        "saikou": 5.45,
        "heikin": 1.66,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.617
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 127.258,
        "saikou": 8,
        "heikin": 2.17,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.321
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 164.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.099
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 213.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.765
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 162.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.581
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 215.008,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.323
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 73.109,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 8.242
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 73.109,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 8.449
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 90.989,
        "saikou": 10,
        "heikin": 8.19,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 9.153
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 90.989,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 9.116
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 88.991,
        "saikou": 10,
        "heikin": 8.25,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 9.087
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 88.991,
        "saikou": 10,
        "heikin": 8.29,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 9.089
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 103.989,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 9.045
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 105.489,
        "saikou": 10,
        "heikin": 8.29,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 9.021
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.3,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 8.994
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 8.907
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.31,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 8.81
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 8.943
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.33,
        "boshuAvg30d": 180.2,
        "heikinAvg30d": 9.133
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 93.988,
        "saikou": 10,
        "heikin": 9.28,
        "boshuAvg30d": 185.7,
        "heikinAvg30d": 9.551
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 9.29,
        "boshuAvg30d": 191.2,
        "heikinAvg30d": 9.765
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 92.023,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 194.7,
        "heikinAvg30d": 9.698
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 91.525,
        "saikou": 10,
        "heikin": 9.29,
        "boshuAvg30d": 194.7,
        "heikinAvg30d": 9.731
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 88.027,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 194.7,
        "heikinAvg30d": 9.473
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 90.173,
        "saikou": 10,
        "heikin": 9.29,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 8.717
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 90.173,
        "saikou": 10,
        "heikin": 9.29,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 8.802
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 110.373,
        "saikou": 10,
        "heikin": 8.92,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 8.631
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 110.373,
        "saikou": 10,
        "heikin": 8.91,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 8.706
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 112.173,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 8.636
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 112.173,
        "saikou": 10,
        "heikin": 9.01,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 8.821
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 109.727,
        "saikou": 10,
        "heikin": 9.01,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 8.821
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 109.727,
        "saikou": 10,
        "heikin": 9.01,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 8.798
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 113.523,
        "saikou": 10,
        "heikin": 9.06,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 8.246
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 113.523,
        "saikou": 10,
        "heikin": 9.05,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 8.271
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 113.523,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 139.2,
        "heikinAvg30d": 9.025
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 115.488,
        "saikou": 10,
        "heikin": 8.87,
        "boshuAvg30d": 135.1,
        "heikinAvg30d": 9.06
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 192.1,
        "heikinAvg30d": 9.175
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 117.486,
        "saikou": 10,
        "heikin": 8.71,
        "boshuAvg30d": 192.1,
        "heikinAvg30d": 8.763
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 129.486,
        "saikou": 10,
        "heikin": 7.54,
        "boshuAvg30d": 192.1,
        "heikinAvg30d": 8.491
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 127.986,
        "saikou": 10,
        "heikin": 6.95,
        "boshuAvg30d": 190.7,
        "heikinAvg30d": 8.074
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 109.484,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 188.7,
        "heikinAvg30d": 7.727
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 107.984,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 186.7,
        "heikinAvg30d": 7.945
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 7.65,
        "boshuAvg30d": 185.2,
        "heikinAvg30d": 7.824
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 105.988,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 185.2,
        "heikinAvg30d": 7.849
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 96.818,
        "saikou": 10,
        "heikin": 8.22,
        "boshuAvg30d": 185.2,
        "heikinAvg30d": 8.033
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.33,
        "boshuAvg30d": 184.7,
        "heikinAvg30d": 8.259
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 8.467
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.33,
        "boshuAvg30d": 184.7,
        "heikinAvg30d": 8.64
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 105.558,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 100.4,
        "heikinAvg30d": 8.495
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 103.658,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 100.4,
        "heikinAvg30d": 8.672
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 107.488,
        "saikou": 9.81,
        "heikin": 8.13,
        "boshuAvg30d": 100.4,
        "heikinAvg30d": 8.955
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.13,
        "boshuAvg30d": 99.4,
        "heikinAvg30d": 8.558
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 105.588,
        "saikou": 10,
        "heikin": 8.13,
        "boshuAvg30d": 98.4,
        "heikinAvg30d": 8.528
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 104.088,
        "saikou": 10,
        "heikin": 8.28,
        "boshuAvg30d": 97.4,
        "heikinAvg30d": 8.819
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 423,
        "ouatsu": 373.451,
        "saikou": 9.39,
        "heikin": 2.65,
        "boshuAvg30d": 539.3,
        "heikinAvg30d": 3.767
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 423,
        "ouatsu": 349.491,
        "saikou": 9.39,
        "heikin": 2.71,
        "boshuAvg30d": 539.3,
        "heikinAvg30d": 3.52
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 423,
        "ouatsu": 369.969,
        "saikou": 9.39,
        "heikin": 2.37,
        "boshuAvg30d": 539.3,
        "heikinAvg30d": 3.455
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 423,
        "ouatsu": 349.41,
        "saikou": 9.38,
        "heikin": 2.23,
        "boshuAvg30d": 538.9,
        "heikinAvg30d": 3.327
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 421,
        "ouatsu": 331.664,
        "saikou": 9.38,
        "heikin": 2.2,
        "boshuAvg30d": 536.9,
        "heikinAvg30d": 3.283
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 421,
        "ouatsu": 333.928,
        "saikou": 9.38,
        "heikin": 2.27,
        "boshuAvg30d": 536.9,
        "heikinAvg30d": 3.264
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 420,
        "ouatsu": 351.674,
        "saikou": 9.38,
        "heikin": 2.2,
        "boshuAvg30d": 535.4,
        "heikinAvg30d": 3.181
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 421,
        "ouatsu": 348.234,
        "saikou": 9.38,
        "heikin": 2.23,
        "boshuAvg30d": 536.4,
        "heikinAvg30d": 3.334
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 422,
        "ouatsu": 349.754,
        "saikou": 9.38,
        "heikin": 2.36,
        "boshuAvg30d": 537.4,
        "heikinAvg30d": 3.301
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 422,
        "ouatsu": 335.092,
        "saikou": 9.38,
        "heikin": 2.43,
        "boshuAvg30d": 537.9,
        "heikinAvg30d": 3.273
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 422,
        "ouatsu": 335.092,
        "saikou": 9.38,
        "heikin": 2.42,
        "boshuAvg30d": 537.9,
        "heikinAvg30d": 3.414
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 422,
        "ouatsu": 369.692,
        "saikou": 9.38,
        "heikin": 2.56,
        "boshuAvg30d": 537.9,
        "heikinAvg30d": 3.322
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 443,
        "ouatsu": 375.596,
        "saikou": 9.39,
        "heikin": 3.17,
        "boshuAvg30d": 558.9,
        "heikinAvg30d": 3.716
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 451,
        "ouatsu": 405.596,
        "saikou": 9.39,
        "heikin": 3.01,
        "boshuAvg30d": 566.9,
        "heikinAvg30d": 3.843
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 456,
        "ouatsu": 403.696,
        "saikou": 9.39,
        "heikin": 3.14,
        "boshuAvg30d": 572.8,
        "heikinAvg30d": 3.965
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 461,
        "ouatsu": 405.596,
        "saikou": 9.5,
        "heikin": 3.26,
        "boshuAvg30d": 577.8,
        "heikinAvg30d": 3.917
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 461,
        "ouatsu": 424.094,
        "saikou": 9.5,
        "heikin": 3.5,
        "boshuAvg30d": 577.8,
        "heikinAvg30d": 4.255
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 461,
        "ouatsu": 425.994,
        "saikou": 9.5,
        "heikin": 4.14,
        "boshuAvg30d": 577.8,
        "heikinAvg30d": 4.434
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 452,
        "ouatsu": 395.362,
        "saikou": 9.39,
        "heikin": 3.66,
        "boshuAvg30d": 571.3,
        "heikinAvg30d": 4.388
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 452,
        "ouatsu": 412.451,
        "saikou": 9.39,
        "heikin": 3.82,
        "boshuAvg30d": 571.3,
        "heikinAvg30d": 4.201
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 452,
        "ouatsu": 390.524,
        "saikou": 10,
        "heikin": 4.02,
        "boshuAvg30d": 570.9,
        "heikinAvg30d": 3.873
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 451,
        "ouatsu": 391.524,
        "saikou": 10,
        "heikin": 3.63,
        "boshuAvg30d": 569.9,
        "heikinAvg30d": 3.911
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 448,
        "ouatsu": 403.876,
        "saikou": 10,
        "heikin": 3.71,
        "boshuAvg30d": 566.9,
        "heikinAvg30d": 4.012
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 448,
        "ouatsu": 404.876,
        "saikou": 10,
        "heikin": 3.5,
        "boshuAvg30d": 566.9,
        "heikinAvg30d": 4.053
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 447,
        "ouatsu": 399.679,
        "saikou": 10,
        "heikin": 3.28,
        "boshuAvg30d": 565.9,
        "heikinAvg30d": 3.83
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 447,
        "ouatsu": 397.779,
        "saikou": 10,
        "heikin": 3.31,
        "boshuAvg30d": 565.9,
        "heikinAvg30d": 3.882
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 447,
        "ouatsu": 434.653,
        "saikou": 10,
        "heikin": 3.26,
        "boshuAvg30d": 563.3,
        "heikinAvg30d": 3.987
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 446,
        "ouatsu": 471.532,
        "saikou": 10,
        "heikin": 3.41,
        "boshuAvg30d": 562.3,
        "heikinAvg30d": 4.119
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 445,
        "ouatsu": 451.143,
        "saikou": 9.39,
        "heikin": 3.31,
        "boshuAvg30d": 561.8,
        "heikinAvg30d": 4.387
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 445,
        "ouatsu": 488.126,
        "saikou": 9.39,
        "heikin": 3.28,
        "boshuAvg30d": 561.8,
        "heikinAvg30d": 4.399
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 444,
        "ouatsu": 456.847,
        "saikou": 9.39,
        "heikin": 3.27,
        "boshuAvg30d": 560.8,
        "heikinAvg30d": 4.28
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 444,
        "ouatsu": 535.09,
        "saikou": 9.39,
        "heikin": 3.67,
        "boshuAvg30d": 560.8,
        "heikinAvg30d": 4.634
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 444,
        "ouatsu": 553.641,
        "saikou": 9.39,
        "heikin": 3.69,
        "boshuAvg30d": 560.3,
        "heikinAvg30d": 4.728
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 444,
        "ouatsu": 545.339,
        "saikou": 9.39,
        "heikin": 3.99,
        "boshuAvg30d": 560.3,
        "heikinAvg30d": 4.896
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 444,
        "ouatsu": 599.425,
        "saikou": 9.39,
        "heikin": 3.82,
        "boshuAvg30d": 556.5,
        "heikinAvg30d": 5.065
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 444,
        "ouatsu": 516.968,
        "saikou": 9.39,
        "heikin": 4.02,
        "boshuAvg30d": 556.5,
        "heikinAvg30d": 4.982
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 446,
        "ouatsu": 494.181,
        "saikou": 9.4,
        "heikin": 3.37,
        "boshuAvg30d": 558.9,
        "heikinAvg30d": 4.857
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 446,
        "ouatsu": 449.154,
        "saikou": 9.4,
        "heikin": 3.63,
        "boshuAvg30d": 558.5,
        "heikinAvg30d": 4.7
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 447,
        "ouatsu": 509.037,
        "saikou": 9.4,
        "heikin": 3.39,
        "boshuAvg30d": 559.0,
        "heikinAvg30d": 4.675
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 447,
        "ouatsu": 375.911,
        "saikou": 9.4,
        "heikin": 3.41,
        "boshuAvg30d": 559.0,
        "heikinAvg30d": 4.446
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 445,
        "ouatsu": 416.733,
        "saikou": 9.39,
        "heikin": 3.16,
        "boshuAvg30d": 557.5,
        "heikinAvg30d": 3.979
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 445,
        "ouatsu": 394.011,
        "saikou": 9.39,
        "heikin": 3.15,
        "boshuAvg30d": 557.5,
        "heikinAvg30d": 3.989
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 444,
        "ouatsu": 411.866,
        "saikou": 9.4,
        "heikin": 3.3,
        "boshuAvg30d": 556.9,
        "heikinAvg30d": 3.598
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 444,
        "ouatsu": 432.161,
        "saikou": 9.4,
        "heikin": 3.13,
        "boshuAvg30d": 556.9,
        "heikinAvg30d": 4.652
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 444,
        "ouatsu": 395.212,
        "saikou": 9.4,
        "heikin": 3.59,
        "boshuAvg30d": 556.9,
        "heikinAvg30d": 4.134
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 442,
        "ouatsu": 434.031,
        "saikou": 9.4,
        "heikin": 3.02,
        "boshuAvg30d": 554.9,
        "heikinAvg30d": 3.908
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 440,
        "ouatsu": 434.087,
        "saikou": 9.39,
        "heikin": 2.8,
        "boshuAvg30d": 552.5,
        "heikinAvg30d": 4.197
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 439,
        "ouatsu": 432.287,
        "saikou": 9.39,
        "heikin": 2.79,
        "boshuAvg30d": 551.0,
        "heikinAvg30d": 4.054
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 167.032,
        "saikou": 2.89,
        "heikin": 2.51,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.52
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 231.046,
        "saikou": 2.88,
        "heikin": 2.51,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.372
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 214.151,
        "saikou": 2.9,
        "heikin": 2.11,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.44
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 231.584,
        "saikou": 2.9,
        "heikin": 1.88,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.508
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 255.128,
        "saikou": 2.9,
        "heikin": 1.62,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.795
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 279.996,
        "saikou": 2.9,
        "heikin": 1.69,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.895
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 305.543,
        "saikou": 2.89,
        "heikin": 1.71,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.736
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 301.743,
        "saikou": 2.89,
        "heikin": 1.86,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.732
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 305.543,
        "saikou": 2.89,
        "heikin": 2.05,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.865
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 305.543,
        "saikou": 2.89,
        "heikin": 2.07,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.747
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 309.531,
        "saikou": 2.89,
        "heikin": 2.42,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.608
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 344.342,
        "saikou": 2.89,
        "heikin": 2.49,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.723
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 345.842,
        "saikou": 2.89,
        "heikin": 2.48,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 2.96
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 303.637,
        "saikou": 2.89,
        "heikin": 1.94,
        "boshuAvg30d": 158.1,
        "heikinAvg30d": 2.968
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 303.637,
        "saikou": 2.92,
        "heikin": 2.59,
        "boshuAvg30d": 161.1,
        "heikinAvg30d": 3.21
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 309.531,
        "saikou": 2.89,
        "heikin": 2.63,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 3.203
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 309.531,
        "saikou": 3.14,
        "heikin": 2.39,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 3.655
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 293.105,
        "saikou": 3.34,
        "heikin": 2.26,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 3.802
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 238.421,
        "saikou": 4.15,
        "heikin": 2.27,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 4.102
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 259.724,
        "saikou": 3.89,
        "heikin": 2.61,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 4.066
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 270.308,
        "saikou": 5.1,
        "heikin": 2.89,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.231
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 263.826,
        "saikou": 5.1,
        "heikin": 3.01,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 4.247
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 262.326,
        "saikou": 4.93,
        "heikin": 3.3,
        "boshuAvg30d": 165.7,
        "heikinAvg30d": 3.916
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 260.654,
        "saikou": 4.81,
        "heikin": 3.26,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 3.772
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 291.559,
        "saikou": 3.88,
        "heikin": 2.14,
        "boshuAvg30d": 161.2,
        "heikinAvg30d": 3.697
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 289.61,
        "saikou": 3.88,
        "heikin": 2,
        "boshuAvg30d": 161.2,
        "heikinAvg30d": 3.734
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 240.864,
        "saikou": 4,
        "heikin": 2.95,
        "boshuAvg30d": 161.2,
        "heikinAvg30d": 3.954
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 278.675,
        "saikou": 3.45,
        "heikin": 2.57,
        "boshuAvg30d": 161.2,
        "heikinAvg30d": 4.119
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 272.536,
        "saikou": 3.38,
        "heikin": 2.32,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 4.303
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 335.668,
        "saikou": 3.83,
        "heikin": 2.52,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 4.193
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 331.886,
        "saikou": 2.89,
        "heikin": 1.68,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 3.915
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 348.951,
        "saikou": 3.84,
        "heikin": 1.95,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 4.113
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 413.999,
        "saikou": 2.9,
        "heikin": 1.83,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 4.027
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 412.05,
        "saikou": 2.78,
        "heikin": 1.55,
        "boshuAvg30d": 160.1,
        "heikinAvg30d": 4.142
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 412.05,
        "saikou": 1.7,
        "heikin": 1.43,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 4.009
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 406.552,
        "saikou": 1.61,
        "heikin": 1.29,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 3.78
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 380.983,
        "saikou": 2.78,
        "heikin": 1.27,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 3.953
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 380.983,
        "saikou": 2.8,
        "heikin": 1.43,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 3.801
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 387.145,
        "saikou": 2.25,
        "heikin": 1.22,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 3.336
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 410.128,
        "saikou": 2.88,
        "heikin": 1.32,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 3.34
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 374.008,
        "saikou": 2.88,
        "heikin": 1.59,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 3.336
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 374.008,
        "saikou": 2.8,
        "heikin": 1.46,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 3.059
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 309.051,
        "saikou": 2.88,
        "heikin": 1.66,
        "boshuAvg30d": 158.1,
        "heikinAvg30d": 2.869
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 310.911,
        "saikou": 2.97,
        "heikin": 2.2,
        "boshuAvg30d": 159.6,
        "heikinAvg30d": 3.429
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 282.414,
        "saikou": 2.97,
        "heikin": 2.24,
        "boshuAvg30d": 159.6,
        "heikinAvg30d": 3.162
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 282.414,
        "saikou": 2.89,
        "heikin": 2.46,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 3.103
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 282.414,
        "saikou": 2.91,
        "heikin": 2.35,
        "boshuAvg30d": 157.6,
        "heikinAvg30d": 3.204
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 244.603,
        "saikou": 2.88,
        "heikin": 2.56,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 3.194
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 38.838,
        "saikou": 1.5,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.545
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.1,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.362
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 1.7,
        "heikin": 0.55,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.297
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.55,
        "heikin": 0.67,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.527
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.6,
        "heikin": 0.67,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.211
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 1.5,
        "heikin": 0.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.798
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.65,
        "heikin": 1.56,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.391
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.79,
        "heikin": 0.7,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.227
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 25.584,
        "saikou": 2.65,
        "heikin": 1.12,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.417
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.081
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.314
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.575
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 3.375
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.59,
        "heikin": 2.47,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.311
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 3.762
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.65,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.595
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 10.968,
        "saikou": 1.65,
        "heikin": 1.07,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 4.419
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 2.15,
        "heikin": 2.15,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 5.428
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.145
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.773
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.6,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.724
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 1.35,
        "heikin": 1.35,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.499
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 3.95,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.669
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 3.46,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.668
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 1.3,
        "heikin": 1.3,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.859
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.5,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.783
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.95,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.988
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.574
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.837
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.951
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.75,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 4.23
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.8,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 4.608
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.15,
        "heikin": 2.15,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.145
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.05,
        "heikin": 2.05,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.23
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.552
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.098
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.233
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.873
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
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
        "heikinAvg30d": 4.41
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.93
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.523
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.045
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.093
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.726
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 2.973
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 31.902,
        "saikou": 2.5,
        "heikin": 1.57,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 3.097
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 55.18,
        "saikou": 2.5,
        "heikin": 0.96,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.671
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 38.847,
        "saikou": 2.9,
        "heikin": 2.82,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 1.88
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 125.217,
        "saikou": 2.87,
        "heikin": 1.73,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.151
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 123.257,
        "saikou": 2.95,
        "heikin": 1.83,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.163
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 119.279,
        "saikou": 2.95,
        "heikin": 1.85,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.178
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 117.281,
        "saikou": 2.9,
        "heikin": 1.81,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 2.245
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 117.281,
        "saikou": 2.95,
        "heikin": 1.7,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.331
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 127.166,
        "saikou": 2.9,
        "heikin": 1.76,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 2.25
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 127.166,
        "saikou": 2.9,
        "heikin": 1.78,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 2.362
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.9,
        "heikin": 1.83,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 1.976
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.95,
        "heikin": 2.03,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.119
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.97,
        "heikin": 2.04,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.359
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.89,
        "heikin": 1.63,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 2.197
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 127.166,
        "saikou": 2.89,
        "heikin": 1.63,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 3.531
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 125.723,
        "saikou": 2.89,
        "heikin": 1.6,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 3.492
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 151.111,
        "saikou": 2.95,
        "heikin": 1.67,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.249
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 193.22,
        "saikou": 2.89,
        "heikin": 1.04,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 3.564
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 101.778,
        "saikou": 3,
        "heikin": 2.5,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 4.399
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 101.778,
        "saikou": 2.9,
        "heikin": 2.28,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 4.866
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 4,
        "heikin": 2.69,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.653
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 4,
        "heikin": 2.33,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.757
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 6.45,
        "heikin": 3.3,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.874
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 135.898,
        "saikou": 5.97,
        "heikin": 1.95,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.772
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 136.578,
        "saikou": 3.98,
        "heikin": 1.68,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 4.634
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 156.192,
        "saikou": 4,
        "heikin": 1.66,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 4.526
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 228.025,
        "saikou": 2.89,
        "heikin": 0.91,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 5.361
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 228.025,
        "saikou": 4,
        "heikin": 1.02,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 4.474
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 180.137,
        "saikou": 4,
        "heikin": 1.47,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 4.518
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 133.4,
        "saikou": 3,
        "heikin": 1.52,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 4.502
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 99.354,
        "saikou": 2.89,
        "heikin": 2.1,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 4.551
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 99.354,
        "saikou": 3.5,
        "heikin": 2.31,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 4.187
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2.89,
        "heikin": 2.1,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.012
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2.9,
        "heikin": 2.18,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 3.943
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.013
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.294
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 144.617,
        "saikou": 2,
        "heikin": 1.1,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.106
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.354,
        "saikou": 2,
        "heikin": 1.97,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.93
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 95.951,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 3.825
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 95.951,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 3.77
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 97.911,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 3.867
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 97.911,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 3.711
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 99.354,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 3.372
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.52,
        "heikin": 2.14,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 3.418
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.45,
        "heikin": 2.12,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.124
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 130.967,
        "saikou": 2.95,
        "heikin": 1.79,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.281
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.95,
        "heikin": 2.36,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.086
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 123.299,
        "saikou": 2.9,
        "heikin": 1.7,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 3.061
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 99.354,
        "saikou": 2.9,
        "heikin": 2.28,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 3.212
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 48.139,
        "saikou": 1.26,
        "heikin": 1.26,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.337
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 170.208,
        "saikou": 2.9,
        "heikin": 1.28,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.884
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 170.208,
        "saikou": 1.71,
        "heikin": 1.18,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.204
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 170.208,
        "saikou": 2.89,
        "heikin": 1.16,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.218
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 173.998,
        "saikou": 1.58,
        "heikin": 1.14,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.053
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 173.998,
        "saikou": 1.58,
        "heikin": 1.09,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.055
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 173.998,
        "saikou": 1.58,
        "heikin": 1.14,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.131
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 190.857,
        "saikou": 1.58,
        "heikin": 1.14,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.158
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 190.857,
        "saikou": 1.58,
        "heikin": 1.18,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.204
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 190.857,
        "saikou": 1.7,
        "heikin": 1.35,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.163
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 190.857,
        "saikou": 2.68,
        "heikin": 1.99,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.335
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 190.857,
        "saikou": 3.12,
        "heikin": 2.27,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.584
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 190.857,
        "saikou": 3.54,
        "heikin": 2.54,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.568
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 190.857,
        "saikou": 3.54,
        "heikin": 2.54,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 3.853
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 190.857,
        "saikou": 2.89,
        "heikin": 1.47,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 3.32
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 190.857,
        "saikou": 2.9,
        "heikin": 1.41,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.12
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 190.857,
        "saikou": 2.89,
        "heikin": 0.75,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.015
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 176.931,
        "saikou": 3,
        "heikin": 0.87,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.981
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 3,
        "heikin": 0.91,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.915
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.16,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.734
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.19,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 3.287
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 181.206,
        "saikou": 5,
        "heikin": 1.22,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 3.167
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 181.206,
        "saikou": 4,
        "heikin": 1.17,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.124
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 181.206,
        "saikou": 4,
        "heikin": 1.17,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.049
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 181.206,
        "saikou": 4,
        "heikin": 1.17,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.975
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 181.206,
        "saikou": 4,
        "heikin": 1.12,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.359
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 181.206,
        "saikou": 4,
        "heikin": 1.18,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.267
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 181.206,
        "saikou": 4,
        "heikin": 1.15,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.891
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 181.206,
        "saikou": 3,
        "heikin": 0.84,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.249
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 181.206,
        "saikou": 3,
        "heikin": 1.31,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.411
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 181.206,
        "saikou": 2.89,
        "heikin": 1.22,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.735
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 191.933,
        "saikou": 1.58,
        "heikin": 1.21,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.711
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 191.933,
        "saikou": 6.38,
        "heikin": 2.04,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 5.948
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 277.391,
        "saikou": 2.9,
        "heikin": 1.53,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.082
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 290.601,
        "saikou": 1.58,
        "heikin": 0.74,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.709
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 290.601,
        "saikou": 1.58,
        "heikin": 0.74,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.31
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 290.601,
        "saikou": 1.58,
        "heikin": 0.74,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.311
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 288.611,
        "saikou": 1.58,
        "heikin": 0.74,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.709
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 290.593,
        "saikou": 1.58,
        "heikin": 0.74,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.761
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 290.593,
        "saikou": 1.58,
        "heikin": 0.74,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 7.425
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 290.783,
        "saikou": 1.58,
        "heikin": 0.74,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.986
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 290.783,
        "saikou": 2.89,
        "heikin": 0.87,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 6.653
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 292.583,
        "saikou": 2.68,
        "heikin": 0.81,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 5.898
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 292.583,
        "saikou": 1.58,
        "heikin": 0.74,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 5.406
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 207.125,
        "saikou": 6.38,
        "heikin": 3.73,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 5.017
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 193.322,
        "saikou": 4.22,
        "heikin": 3.19,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 4.401
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 193.322,
        "saikou": 3.54,
        "heikin": 2.74,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.961
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 193.322,
        "saikou": 2.91,
        "heikin": 2.34,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 3.798
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 248.045,
        "saikou": 2.22,
        "heikin": 1.51,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.802
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.762
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.788
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.797
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.75
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.73
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 39.5,
        "heikinAvg30d": 0.752
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.902
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 173.86,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.866
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.88
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.925
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.92
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 185.403,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.896
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.916
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.909
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.943
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.818
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.55,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.8
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.848
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 101.903,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 0.97
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 101.903,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 0.981
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 101.903,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.944
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 101.903,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.98
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 101.903,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.963
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.957
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 154.403,
        "saikou": 3.3,
        "heikin": 1.77,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.028
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 1.58,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.975
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.905
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 154.403,
        "saikou": 3.06,
        "heikin": 2.44,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.93
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 168.403,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.932
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 168.403,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.848
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.49,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.945
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.946
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.915
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.873
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.924
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.863
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.86
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.861
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 2.39,
        "heikin": 0.81,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.861
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 2.39,
        "heikin": 0.81,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.888
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 2.39,
        "heikin": 0.81,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.868
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 154.403,
        "saikou": 2.39,
        "heikin": 0.82,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.851
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.7,
        "heikin": 0.45,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.711
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 202.403,
        "saikou": 1.6,
        "heikin": 0.43,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.736
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.6,
        "heikin": 0.43,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.719
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.7,
        "heikin": 0.53,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.684
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.7,
        "heikin": 0.49,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.705
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 188.403,
        "saikou": 1.7,
        "heikin": 0.53,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.742
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 170.559,
        "saikou": 5.33,
        "heikin": 4.36,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 4.176
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 172.483,
        "saikou": 4.53,
        "heikin": 3.85,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 4.024
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 186.194,
        "saikou": 3.09,
        "heikin": 2.79,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 3.884
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 186.192,
        "saikou": 2.89,
        "heikin": 2.41,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 3.916
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 188.181,
        "saikou": 2.89,
        "heikin": 2.38,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 3.84
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 188.181,
        "saikou": 2.89,
        "heikin": 2.39,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 3.896
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 205.234,
        "saikou": 3.09,
        "heikin": 2.77,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 3.899
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 200.113,
        "saikou": 3.15,
        "heikin": 2.82,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 3.931
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 203.941,
        "saikou": 4.05,
        "heikin": 3.45,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 3.918
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 258.941,
        "saikou": 4.66,
        "heikin": 3.32,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.075
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 258.941,
        "saikou": 5.79,
        "heikin": 4.29,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.127
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 255.065,
        "saikou": 5.79,
        "heikin": 4.46,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 3.959
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 266.065,
        "saikou": 5.68,
        "heikin": 3.95,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 3.886
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 237.213,
        "saikou": 4.79,
        "heikin": 3.44,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 3.719
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 189.213,
        "saikou": 3.8,
        "heikin": 3.32,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 3.783
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 185.415,
        "saikou": 2.89,
        "heikin": 2.73,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 3.84
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 117.425,
        "saikou": 2.9,
        "heikin": 2.43,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 4.19
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 83.425,
        "saikou": 2.9,
        "heikin": 2.78,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 5.01
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 94.601,
        "saikou": 3,
        "heikin": 2.83,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 4.973
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 127.601,
        "saikou": 3,
        "heikin": 2.65,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 4.906
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 120.659,
        "saikou": 3.65,
        "heikin": 2.59,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.7
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 104.817,
        "saikou": 4.5,
        "heikin": 2.82,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.754
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 110.205,
        "saikou": 4.6,
        "heikin": 2.89,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 4.751
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 110.205,
        "saikou": 4.52,
        "heikin": 2.69,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 4.858
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 102.638,
        "saikou": 4.4,
        "heikin": 2.53,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.237
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 102.638,
        "saikou": 4.99,
        "heikin": 2.58,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.403
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 102.568,
        "saikou": 4.1,
        "heikin": 2.41,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.903
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 131.716,
        "saikou": 3.32,
        "heikin": 2.12,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 5.591
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 169.205,
        "saikou": 3.32,
        "heikin": 2.43,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 6.196
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 193.951,
        "saikou": 3.5,
        "heikin": 3.1,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 6.757
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 191.961,
        "saikou": 3.94,
        "heikin": 3.57,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 6.404
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 191.961,
        "saikou": 7.09,
        "heikin": 5.59,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 7.392
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 252.951,
        "saikou": 7.39,
        "heikin": 5.44,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 7.394
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 266.951,
        "saikou": 8.88,
        "heikin": 7.08,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 7.756
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 286.944,
        "saikou": 5.83,
        "heikin": 5.79,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 7.325
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 294.968,
        "saikou": 6.58,
        "heikin": 6.53,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 7.528
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 261.643,
        "saikou": 7.39,
        "heikin": 7.26,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 7.632
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 282.643,
        "saikou": 6.52,
        "heikin": 6.52,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 7.372
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 258.61,
        "saikou": 5.27,
        "heikin": 5.25,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.778
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 195.599,
        "saikou": 4.47,
        "heikin": 4.31,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.052
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 182.499,
        "saikou": 7.03,
        "heikin": 5.01,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.42
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 204.649,
        "saikou": 6.88,
        "heikin": 5.18,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.612
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 232.753,
        "saikou": 6.75,
        "heikin": 5.77,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.205
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 239.753,
        "saikou": 5.79,
        "heikin": 4.7,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.213
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 239.753,
        "saikou": 6,
        "heikin": 4.76,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.858
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 201.753,
        "saikou": 5.5,
        "heikin": 5.17,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.138
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 201.753,
        "saikou": 4.82,
        "heikin": 4.49,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.051
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 197.901,
        "saikou": 4.79,
        "heikin": 4.37,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 3.399
      }
    ]
  }
};
