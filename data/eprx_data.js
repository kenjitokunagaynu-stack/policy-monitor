// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/01〜2026/09/30）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-01",
  "fetchedAt": "2026-10-01",
  "avgWindowLabel": "過去30日平均（2026/09/01〜2026/09/30）",
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
      "boshu": 848,
      "ouatsu": 1473.597,
      "saikou": 7.23,
      "heikin": 1.81,
      "boshuAvg30d": 1318.8,
      "heikinAvg30d": 2.753
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 848,
      "ouatsu": 1460.594,
      "saikou": 8.7,
      "heikin": 1.65,
      "boshuAvg30d": 1318.8,
      "heikinAvg30d": 2.699
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 848,
      "ouatsu": 1561.413,
      "saikou": 6.99,
      "heikin": 1.39,
      "boshuAvg30d": 1318.8,
      "heikinAvg30d": 2.781
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 848,
      "ouatsu": 1587.021,
      "saikou": 7.34,
      "heikin": 1.4,
      "boshuAvg30d": 1318.8,
      "heikinAvg30d": 2.747
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 845,
      "ouatsu": 1636.778,
      "saikou": 7.34,
      "heikin": 1.29,
      "boshuAvg30d": 1313.8,
      "heikinAvg30d": 2.748
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 844,
      "ouatsu": 1643.922,
      "saikou": 7.79,
      "heikin": 1.42,
      "boshuAvg30d": 1312.8,
      "heikinAvg30d": 2.813
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 927,
      "ouatsu": 1650.353,
      "saikou": 9,
      "heikin": 2.2,
      "boshuAvg30d": 1327.2,
      "heikinAvg30d": 2.883
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 929,
      "ouatsu": 1663.397,
      "saikou": 8.8,
      "heikin": 2.24,
      "boshuAvg30d": 1328.2,
      "heikinAvg30d": 2.963
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 931,
      "ouatsu": 1661.562,
      "saikou": 8.55,
      "heikin": 2.75,
      "boshuAvg30d": 1331.2,
      "heikinAvg30d": 2.998
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 932,
      "ouatsu": 1668.182,
      "saikou": 7.72,
      "heikin": 3.35,
      "boshuAvg30d": 1331.2,
      "heikinAvg30d": 3.02
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 932,
      "ouatsu": 1697.818,
      "saikou": 8.62,
      "heikin": 3.19,
      "boshuAvg30d": 1331.2,
      "heikinAvg30d": 3.151
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 932,
      "ouatsu": 1734.739,
      "saikou": 9.65,
      "heikin": 3.04,
      "boshuAvg30d": 1331.2,
      "heikinAvg30d": 3.158
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 992,
      "ouatsu": 1900.922,
      "saikou": 9,
      "heikin": 3.05,
      "boshuAvg30d": 1397.2,
      "heikinAvg30d": 3.313
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1015,
      "ouatsu": 1917.332,
      "saikou": 8.66,
      "heikin": 2.44,
      "boshuAvg30d": 1418.2,
      "heikinAvg30d": 3.143
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1036,
      "ouatsu": 1721.194,
      "saikou": 8.85,
      "heikin": 1.77,
      "boshuAvg30d": 1441.2,
      "heikinAvg30d": 3.083
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1053,
      "ouatsu": 1657.033,
      "saikou": 9.73,
      "heikin": 1.48,
      "boshuAvg30d": 1459.2,
      "heikinAvg30d": 3.047
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1053,
      "ouatsu": 1618.856,
      "saikou": 9.59,
      "heikin": 1.22,
      "boshuAvg30d": 1460.2,
      "heikinAvg30d": 3.284
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1053,
      "ouatsu": 1826.686,
      "saikou": 9.99,
      "heikin": 1.38,
      "boshuAvg30d": 1460.2,
      "heikinAvg30d": 3.445
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1161,
      "ouatsu": 1887.785,
      "saikou": 10,
      "heikin": 2.37,
      "boshuAvg30d": 1420.2,
      "heikinAvg30d": 3.529
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1164,
      "ouatsu": 1849.125,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1424.2,
      "heikinAvg30d": 3.519
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1169,
      "ouatsu": 1902.185,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1432.2,
      "heikinAvg30d": 3.558
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1169,
      "ouatsu": 1744.02,
      "saikou": 10,
      "heikin": 2.52,
      "boshuAvg30d": 1432.2,
      "heikinAvg30d": 3.547
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1166,
      "ouatsu": 1772.401,
      "saikou": 10,
      "heikin": 2.45,
      "boshuAvg30d": 1429.2,
      "heikinAvg30d": 3.469
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1165,
      "ouatsu": 1796.551,
      "saikou": 10,
      "heikin": 2.35,
      "boshuAvg30d": 1428.2,
      "heikinAvg30d": 3.421
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1145,
      "ouatsu": 1779.3,
      "saikou": 10,
      "heikin": 2.45,
      "boshuAvg30d": 1418.4,
      "heikinAvg30d": 3.335
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1145,
      "ouatsu": 1796.614,
      "saikou": 10,
      "heikin": 2.36,
      "boshuAvg30d": 1418.4,
      "heikinAvg30d": 3.316
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1145,
      "ouatsu": 1765.445,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1415.4,
      "heikinAvg30d": 3.464
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1143,
      "ouatsu": 1705.378,
      "saikou": 10,
      "heikin": 2.31,
      "boshuAvg30d": 1409.7,
      "heikinAvg30d": 3.61
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1140,
      "ouatsu": 1814.15,
      "saikou": 10,
      "heikin": 2.28,
      "boshuAvg30d": 1404.7,
      "heikinAvg30d": 3.676
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1134,
      "ouatsu": 1644.654,
      "saikou": 7.11,
      "heikin": 2.77,
      "boshuAvg30d": 1397.7,
      "heikinAvg30d": 3.678
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1114,
      "ouatsu": 1748.804,
      "saikou": 7.34,
      "heikin": 2.34,
      "boshuAvg30d": 1437.5,
      "heikinAvg30d": 3.596
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1114,
      "ouatsu": 1630.717,
      "saikou": 8.62,
      "heikin": 3.36,
      "boshuAvg30d": 1437.5,
      "heikinAvg30d": 3.779
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1115,
      "ouatsu": 1802.18,
      "saikou": 8.22,
      "heikin": 3.5,
      "boshuAvg30d": 1437.5,
      "heikinAvg30d": 3.848
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1114,
      "ouatsu": 1744.599,
      "saikou": 10,
      "heikin": 5.2,
      "boshuAvg30d": 1435.4,
      "heikinAvg30d": 4.021
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1112,
      "ouatsu": 1945.507,
      "saikou": 10,
      "heikin": 4.5,
      "boshuAvg30d": 1427.3,
      "heikinAvg30d": 4.098
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1107,
      "ouatsu": 2046.494,
      "saikou": 10,
      "heikin": 4.67,
      "boshuAvg30d": 1423.3,
      "heikinAvg30d": 4.089
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1102,
      "ouatsu": 1947.241,
      "saikou": 10,
      "heikin": 4.22,
      "boshuAvg30d": 1415.3,
      "heikinAvg30d": 4.168
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1102,
      "ouatsu": 2025.312,
      "saikou": 10,
      "heikin": 4.18,
      "boshuAvg30d": 1415.3,
      "heikinAvg30d": 4.099
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1102,
      "ouatsu": 2031.195,
      "saikou": 10,
      "heikin": 3.97,
      "boshuAvg30d": 1415.9,
      "heikinAvg30d": 3.964
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1101,
      "ouatsu": 1986.298,
      "saikou": 9.68,
      "heikin": 3.19,
      "boshuAvg30d": 1414.9,
      "heikinAvg30d": 3.817
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1093,
      "ouatsu": 1931.096,
      "saikou": 8.88,
      "heikin": 2.67,
      "boshuAvg30d": 1409.9,
      "heikinAvg30d": 3.762
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1093,
      "ouatsu": 2085.829,
      "saikou": 8.25,
      "heikin": 2.64,
      "boshuAvg30d": 1405.9,
      "heikinAvg30d": 3.69
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1003,
      "ouatsu": 2109.978,
      "saikou": 8.86,
      "heikin": 3.17,
      "boshuAvg30d": 1318.7,
      "heikinAvg30d": 3.436
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1006,
      "ouatsu": 2194.67,
      "saikou": 6.36,
      "heikin": 2.99,
      "boshuAvg30d": 1321.7,
      "heikinAvg30d": 3.531
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1007,
      "ouatsu": 2072.024,
      "saikou": 8.4,
      "heikin": 2.74,
      "boshuAvg30d": 1322.7,
      "heikinAvg30d": 3.326
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1002,
      "ouatsu": 2097.788,
      "saikou": 7.42,
      "heikin": 2.84,
      "boshuAvg30d": 1315.7,
      "heikinAvg30d": 3.283
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 993,
      "ouatsu": 2065.115,
      "saikou": 7.2,
      "heikin": 2.99,
      "boshuAvg30d": 1308.7,
      "heikinAvg30d": 3.257
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 986,
      "ouatsu": 1956.007,
      "saikou": 7.5,
      "heikin": 2.72,
      "boshuAvg30d": 1300.7,
      "heikinAvg30d": 3.122
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
        "boshu": 48,
        "ouatsu": 153.908,
        "saikou": 7.23,
        "heikin": 1.51,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.013
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 151.958,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 0.969
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 163.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.06
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 151.958,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 0.986
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 231.708,
        "saikou": 1.01,
        "heikin": 0.89,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.253
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 216.058,
        "saikou": 3.5,
        "heikin": 1.1,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.448
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 154.908,
        "saikou": 3.95,
        "heikin": 1.12,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.257
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.09
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 184.108,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.348
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.131
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 236.308,
        "saikou": 1.01,
        "heikin": 0.91,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.264
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 193.908,
        "saikou": 9.65,
        "heikin": 1.38,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.396
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 242.208,
        "saikou": 3.8,
        "heikin": 1.79,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.853
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 242.208,
        "saikou": 3.35,
        "heikin": 1.49,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.517
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 191.958,
        "saikou": 8.85,
        "heikin": 2.11,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 1.311
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 196.073,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 1.437
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 184.958,
        "saikou": 1.01,
        "heikin": 0.97,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 0.892
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 235.258,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 0.979
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 0.923
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.97,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 0.94
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 232.058,
        "saikou": 1.01,
        "heikin": 0.9,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 1.001
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 1.017
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 165.108,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 0.919
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 197.158,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 148.908,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 1.036
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 189.458,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 0.972
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 148.908,
        "saikou": 8,
        "heikin": 2.04,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 1.248
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 1.254
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 193.908,
        "saikou": 8,
        "heikin": 1.08,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 1.236
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 240.258,
        "saikou": 2.26,
        "heikin": 1.1,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 1.389
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.093
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 159.268,
        "saikou": 4.39,
        "heikin": 4.09,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.723
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 159.268,
        "saikou": 3.97,
        "heikin": 3.68,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.12
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 109,
        "saikou": 7.39,
        "heikin": 7.07,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.099
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 87.958,
        "saikou": 2.42,
        "heikin": 2.35,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.282
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 134.29,
        "saikou": 5.02,
        "heikin": 4.72,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.084
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 87.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.133
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 159.29,
        "saikou": 4.52,
        "heikin": 4.28,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.239
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 114.908,
        "saikou": 2.42,
        "heikin": 2.32,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.745
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 201.258,
        "saikou": 4.34,
        "heikin": 3.96,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.618
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.792
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 232.458,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.627
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.266
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 191.958,
        "saikou": 4.16,
        "heikin": 2.34,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.67
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 234.408,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.264
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 191.958,
        "saikou": 4.02,
        "heikin": 1.18,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.299
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 234.158,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.21
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 191.958,
        "saikou": 5.01,
        "heikin": 0.96,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 1.296
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 32,
        "ouatsu": 75.881,
        "saikou": 2.74,
        "heikin": 2.74,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 7.877
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 32,
        "ouatsu": 77.811,
        "saikou": 7.49,
        "heikin": 4.55,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 8.11
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 32,
        "ouatsu": 97.689,
        "saikou": 2.99,
        "heikin": 2.99,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 8.451
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 32,
        "ouatsu": 97.689,
        "saikou": 7.34,
        "heikin": 4.37,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 8.442
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 32,
        "ouatsu": 97.689,
        "saikou": 7.34,
        "heikin": 4.29,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 8.458
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 32,
        "ouatsu": 97.689,
        "saikou": 7.49,
        "heikin": 4.6,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 8.445
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 112.189,
        "saikou": 9,
        "heikin": 6.13,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 8.338
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 112.189,
        "saikou": 8.49,
        "heikin": 5.54,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 8.33
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 114.188,
        "saikou": 7.34,
        "heikin": 5.38,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 8.336
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 114.188,
        "saikou": 7.34,
        "heikin": 5.26,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 8.31
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 114.188,
        "saikou": 8.49,
        "heikin": 5.36,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 8.271
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 114.188,
        "saikou": 6.54,
        "heikin": 4.84,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 8.312
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 114.188,
        "saikou": 9,
        "heikin": 6.06,
        "boshuAvg30d": 183.0,
        "heikinAvg30d": 8.419
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 126.188,
        "saikou": 8.49,
        "heikin": 5.31,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 8.52
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 126.188,
        "saikou": 8.55,
        "heikin": 5.52,
        "boshuAvg30d": 194.0,
        "heikinAvg30d": 8.561
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 102.188,
        "saikou": 9.73,
        "heikin": 6.78,
        "boshuAvg30d": 198.0,
        "heikinAvg30d": 8.488
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 102.188,
        "saikou": 9.59,
        "heikin": 6.58,
        "boshuAvg30d": 198.0,
        "heikinAvg30d": 8.717
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 102.188,
        "saikou": 9.99,
        "heikin": 6.87,
        "boshuAvg30d": 198.0,
        "heikinAvg30d": 8.619
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 106.789,
        "saikou": 10,
        "heikin": 7.61,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 8.278
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 106.789,
        "saikou": 10,
        "heikin": 7.71,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 8.281
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 146,
        "ouatsu": 106.789,
        "saikou": 10,
        "heikin": 7.67,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 8.268
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 146,
        "ouatsu": 104.824,
        "saikou": 10,
        "heikin": 8.6,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 8.258
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 147,
        "ouatsu": 106.789,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 8.28
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 147,
        "ouatsu": 106.789,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 8.318
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 143,
        "ouatsu": 106.143,
        "saikou": 10,
        "heikin": 8.46,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 8.447
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 143,
        "ouatsu": 106.143,
        "saikou": 10,
        "heikin": 8.25,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 8.409
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 143,
        "ouatsu": 108.139,
        "saikou": 10,
        "heikin": 7.69,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 8.132
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 142,
        "ouatsu": 108.139,
        "saikou": 10,
        "heikin": 7.38,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 8.147
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 142,
        "ouatsu": 108.139,
        "saikou": 10,
        "heikin": 7.01,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 8.217
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 140,
        "ouatsu": 62.139,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 8.064
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 62.139,
        "saikou": 7.34,
        "heikin": 7.34,
        "boshuAvg30d": 194.0,
        "heikinAvg30d": 8.361
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 62.139,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 194.0,
        "heikinAvg30d": 8.035
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 62.139,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 194.0,
        "heikinAvg30d": 7.894
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 60.174,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 193.0,
        "heikinAvg30d": 7.677
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 62.139,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 191.0,
        "heikinAvg30d": 7.765
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 62.139,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 189.0,
        "heikinAvg30d": 7.669
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 56.188,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 7.682
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 56.188,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 7.74
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 56.188,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 188.0,
        "heikinAvg30d": 7.865
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 56.188,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 187.0,
        "heikinAvg30d": 8.04
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 78.188,
        "saikou": 3.2,
        "heikin": 3.2,
        "boshuAvg30d": 187.0,
        "heikinAvg30d": 7.957
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 114.188,
        "saikou": 3.58,
        "heikin": 2.93,
        "boshuAvg30d": 187.0,
        "heikinAvg30d": 7.959
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 88.288,
        "saikou": 2.59,
        "heikin": 2.59,
        "boshuAvg30d": 102.7,
        "heikinAvg30d": 8.022
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 90.188,
        "saikou": 2.68,
        "heikin": 2.68,
        "boshuAvg30d": 102.7,
        "heikinAvg30d": 8.125
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 90.188,
        "saikou": 7.49,
        "heikin": 4.37,
        "boshuAvg30d": 102.7,
        "heikinAvg30d": 8.093
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 88.258,
        "saikou": 2.43,
        "heikin": 2.43,
        "boshuAvg30d": 101.7,
        "heikinAvg30d": 8.192
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 88.258,
        "saikou": 2.27,
        "heikin": 2.27,
        "boshuAvg30d": 100.7,
        "heikinAvg30d": 8.222
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 114.188,
        "saikou": 2.56,
        "heikin": 2.56,
        "boshuAvg30d": 99.7,
        "heikinAvg30d": 8.35
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 174,
        "ouatsu": 396.507,
        "saikou": 6.7,
        "heikin": 1.47,
        "boshuAvg30d": 481.6,
        "heikinAvg30d": 3.518
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 174,
        "ouatsu": 402.106,
        "saikou": 8.7,
        "heikin": 2.28,
        "boshuAvg30d": 481.6,
        "heikinAvg30d": 3.397
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 174,
        "ouatsu": 421.088,
        "saikou": 6.99,
        "heikin": 1.94,
        "boshuAvg30d": 481.6,
        "heikinAvg30d": 3.297
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 174,
        "ouatsu": 452.087,
        "saikou": 6.99,
        "heikin": 1.74,
        "boshuAvg30d": 481.6,
        "heikinAvg30d": 3.311
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 173,
        "ouatsu": 439.899,
        "saikou": 6.99,
        "heikin": 1.73,
        "boshuAvg30d": 479.6,
        "heikinAvg30d": 3.264
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 172,
        "ouatsu": 453.143,
        "saikou": 7.79,
        "heikin": 1.8,
        "boshuAvg30d": 479.6,
        "heikinAvg30d": 3.279
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 170,
        "ouatsu": 432.295,
        "saikou": 8.98,
        "heikin": 3.35,
        "boshuAvg30d": 478.6,
        "heikinAvg30d": 3.205
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 172,
        "ouatsu": 444.629,
        "saikou": 8.8,
        "heikin": 2.77,
        "boshuAvg30d": 479.6,
        "heikinAvg30d": 3.4
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 172,
        "ouatsu": 388.574,
        "saikou": 8.55,
        "heikin": 4.56,
        "boshuAvg30d": 480.6,
        "heikinAvg30d": 3.356
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 173,
        "ouatsu": 392.344,
        "saikou": 7.72,
        "heikin": 4.94,
        "boshuAvg30d": 480.6,
        "heikinAvg30d": 3.372
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 173,
        "ouatsu": 355.64,
        "saikou": 8.62,
        "heikin": 5.14,
        "boshuAvg30d": 480.6,
        "heikinAvg30d": 3.392
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 173,
        "ouatsu": 396.7,
        "saikou": 7.51,
        "heikin": 3.54,
        "boshuAvg30d": 480.6,
        "heikinAvg30d": 3.46
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 192,
        "ouatsu": 459.708,
        "saikou": 8.98,
        "heikin": 3.23,
        "boshuAvg30d": 501.6,
        "heikinAvg30d": 3.817
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 200,
        "ouatsu": 496.221,
        "saikou": 8.66,
        "heikin": 2.65,
        "boshuAvg30d": 509.6,
        "heikinAvg30d": 3.813
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 205,
        "ouatsu": 496.221,
        "saikou": 6.99,
        "heikin": 1.43,
        "boshuAvg30d": 514.6,
        "heikinAvg30d": 3.889
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 210,
        "ouatsu": 496.221,
        "saikou": 8.66,
        "heikin": 1.39,
        "boshuAvg30d": 519.6,
        "heikinAvg30d": 3.879
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 210,
        "ouatsu": 509.692,
        "saikou": 6.99,
        "heikin": 0.77,
        "boshuAvg30d": 519.6,
        "heikinAvg30d": 4.277
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 210,
        "ouatsu": 528.128,
        "saikou": 6.99,
        "heikin": 0.71,
        "boshuAvg30d": 519.6,
        "heikinAvg30d": 4.431
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 546.623,
        "saikou": 10,
        "heikin": 3.64,
        "boshuAvg30d": 513.6,
        "heikinAvg30d": 4.407
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 528.13,
        "saikou": 10,
        "heikin": 3.92,
        "boshuAvg30d": 513.6,
        "heikinAvg30d": 4.397
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 511.079,
        "saikou": 10,
        "heikin": 3.58,
        "boshuAvg30d": 513.6,
        "heikinAvg30d": 4.241
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 404.979,
        "saikou": 9.1,
        "heikin": 3.12,
        "boshuAvg30d": 512.6,
        "heikinAvg30d": 4.199
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 458.918,
        "saikou": 9.76,
        "heikin": 3.07,
        "boshuAvg30d": 509.6,
        "heikinAvg30d": 4.255
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 457.018,
        "saikou": 9.05,
        "heikin": 2.63,
        "boshuAvg30d": 509.6,
        "heikinAvg30d": 4.232
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 424.205,
        "saikou": 10,
        "heikin": 3.25,
        "boshuAvg30d": 508.6,
        "heikinAvg30d": 4.017
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 406.045,
        "saikou": 9.05,
        "heikin": 3.15,
        "boshuAvg30d": 508.6,
        "heikinAvg30d": 4.068
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 604.064,
        "saikou": 10,
        "heikin": 3.67,
        "boshuAvg30d": 505.6,
        "heikinAvg30d": 4.163
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 624.555,
        "saikou": 8.98,
        "heikin": 2.22,
        "boshuAvg30d": 505.0,
        "heikinAvg30d": 4.39
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 722.977,
        "saikou": 6.45,
        "heikin": 2.21,
        "boshuAvg30d": 504.0,
        "heikinAvg30d": 4.491
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 632.773,
        "saikou": 5.02,
        "heikin": 3.38,
        "boshuAvg30d": 504.0,
        "heikinAvg30d": 4.273
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 708.893,
        "saikou": 6.99,
        "heikin": 2.28,
        "boshuAvg30d": 503.0,
        "heikinAvg30d": 4.234
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 593.752,
        "saikou": 4.93,
        "heikin": 2.8,
        "boshuAvg30d": 503.0,
        "heikinAvg30d": 4.149
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 662.191,
        "saikou": 5.47,
        "heikin": 2.97,
        "boshuAvg30d": 503.0,
        "heikinAvg30d": 4.323
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 570.011,
        "saikou": 10,
        "heikin": 4.69,
        "boshuAvg30d": 502.9,
        "heikinAvg30d": 4.442
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 606.712,
        "saikou": 7.09,
        "heikin": 3.79,
        "boshuAvg30d": 498.8,
        "heikinAvg30d": 4.389
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 631.627,
        "saikou": 6.75,
        "heikin": 3.58,
        "boshuAvg30d": 498.8,
        "heikinAvg30d": 4.356
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 646.981,
        "saikou": 6.36,
        "heikin": 3.29,
        "boshuAvg30d": 500.8,
        "heikinAvg30d": 4.48
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 640.101,
        "saikou": 6.99,
        "heikin": 2.73,
        "boshuAvg30d": 500.8,
        "heikinAvg30d": 4.42
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 634.681,
        "saikou": 5.4,
        "heikin": 2.66,
        "boshuAvg30d": 501.4,
        "heikinAvg30d": 4.465
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 634.681,
        "saikou": 5.49,
        "heikin": 2.87,
        "boshuAvg30d": 501.4,
        "heikinAvg30d": 4.398
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 658.285,
        "saikou": 5.33,
        "heikin": 2.72,
        "boshuAvg30d": 499.4,
        "heikinAvg30d": 4.293
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 688.945,
        "saikou": 4.89,
        "heikin": 2.77,
        "boshuAvg30d": 499.4,
        "heikinAvg30d": 4.321
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 656.252,
        "saikou": 4.43,
        "heikin": 2.32,
        "boshuAvg30d": 498.4,
        "heikinAvg30d": 4.125
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 654.208,
        "saikou": 5.31,
        "heikin": 2.63,
        "boshuAvg30d": 498.4,
        "heikinAvg30d": 4.323
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 493.297,
        "saikou": 8.4,
        "heikin": 2.59,
        "boshuAvg30d": 498.4,
        "heikinAvg30d": 3.885
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 524.742,
        "saikou": 4.9,
        "heikin": 2.6,
        "boshuAvg30d": 496.4,
        "heikinAvg30d": 4.107
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 547.524,
        "saikou": 5.85,
        "heikin": 3.65,
        "boshuAvg30d": 494.4,
        "heikinAvg30d": 4.153
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 519.909,
        "saikou": 7.5,
        "heikin": 3.17,
        "boshuAvg30d": 493.4,
        "heikinAvg30d": 4.145
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 220.626,
        "saikou": 2.36,
        "heikin": 1.85,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 1.893
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 236.816,
        "saikou": 2.19,
        "heikin": 1.66,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 1.832
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 276.735,
        "saikou": 1.99,
        "heikin": 1.73,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 1.843
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 276.735,
        "saikou": 2.08,
        "heikin": 1.84,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 1.919
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 260.83,
        "saikou": 1.79,
        "heikin": 1.45,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 1.914
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 264.72,
        "saikou": 1.86,
        "heikin": 1.65,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 1.95
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 290.375,
        "saikou": 1.78,
        "heikin": 1.68,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 1.923
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 302.954,
        "saikou": 2.03,
        "heikin": 1.81,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 2.089
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 308.654,
        "saikou": 2.06,
        "heikin": 1.87,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 2.136
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 308.654,
        "saikou": 2.1,
        "heikin": 1.88,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 2.03
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 310.644,
        "saikou": 2.24,
        "heikin": 1.67,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 2.178
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 310.644,
        "saikou": 2.27,
        "heikin": 1.81,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 2.163
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 310.644,
        "saikou": 2.49,
        "heikin": 2.17,
        "boshuAvg30d": 92.5,
        "heikinAvg30d": 2.16
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 292.365,
        "saikou": 2.75,
        "heikin": 2.48,
        "boshuAvg30d": 95.5,
        "heikinAvg30d": 2.055
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 292.365,
        "saikou": 2.39,
        "heikin": 2.22,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 2.073
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 236.492,
        "saikou": 2.39,
        "heikin": 1.76,
        "boshuAvg30d": 100.5,
        "heikinAvg30d": 2.07
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 219.059,
        "saikou": 2.43,
        "heikin": 1.03,
        "boshuAvg30d": 100.5,
        "heikinAvg30d": 2.35
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 160.326,
        "saikou": 2.47,
        "heikin": 1.47,
        "boshuAvg30d": 100.5,
        "heikinAvg30d": 2.456
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 180.495,
        "saikou": 3.49,
        "heikin": 1.56,
        "boshuAvg30d": 104.5,
        "heikinAvg30d": 2.881
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 164.264,
        "saikou": 4,
        "heikin": 2.13,
        "boshuAvg30d": 104.5,
        "heikinAvg30d": 2.884
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 162.263,
        "saikou": 4.4,
        "heikin": 2.19,
        "boshuAvg30d": 105.5,
        "heikinAvg30d": 3.108
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 162.263,
        "saikou": 4.79,
        "heikin": 2.25,
        "boshuAvg30d": 104.5,
        "heikinAvg30d": 3.161
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 166.239,
        "saikou": 3.8,
        "heikin": 2.06,
        "boshuAvg30d": 103.5,
        "heikinAvg30d": 2.931
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 166.239,
        "saikou": 3.88,
        "heikin": 2.17,
        "boshuAvg30d": 102.5,
        "heikinAvg30d": 2.729
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 162.35,
        "saikou": 3.49,
        "heikin": 1.88,
        "boshuAvg30d": 99.5,
        "heikinAvg30d": 2.811
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 162.35,
        "saikou": 3.49,
        "heikin": 1.93,
        "boshuAvg30d": 99.5,
        "heikinAvg30d": 2.731
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 181.485,
        "saikou": 3.5,
        "heikin": 1.87,
        "boshuAvg30d": 99.5,
        "heikinAvg30d": 2.637
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 181.485,
        "saikou": 3.49,
        "heikin": 2.27,
        "boshuAvg30d": 99.5,
        "heikinAvg30d": 2.672
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 181.485,
        "saikou": 3.49,
        "heikin": 3.08,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 2.839
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 173.4,
        "saikou": 4.7,
        "heikin": 3.7,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 2.83
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 197.757,
        "saikou": 5.76,
        "heikin": 3.61,
        "boshuAvg30d": 97.5,
        "heikinAvg30d": 2.651
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 216.55,
        "saikou": 5.43,
        "heikin": 3.09,
        "boshuAvg30d": 97.5,
        "heikinAvg30d": 2.633
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 201.55,
        "saikou": 2.88,
        "heikin": 2.21,
        "boshuAvg30d": 97.5,
        "heikinAvg30d": 2.763
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 292.169,
        "saikou": 4.16,
        "heikin": 2.71,
        "boshuAvg30d": 97.5,
        "heikinAvg30d": 2.978
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 468.221,
        "saikou": 2.69,
        "heikin": 2.27,
        "boshuAvg30d": 97.5,
        "heikinAvg30d": 2.864
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 477.366,
        "saikou": 2.96,
        "heikin": 2.39,
        "boshuAvg30d": 97.5,
        "heikinAvg30d": 2.69
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 476.426,
        "saikou": 2.69,
        "heikin": 1.97,
        "boshuAvg30d": 95.5,
        "heikinAvg30d": 2.639
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 482.347,
        "saikou": 2.69,
        "heikin": 1.96,
        "boshuAvg30d": 95.5,
        "heikinAvg30d": 2.487
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 484.346,
        "saikou": 2.69,
        "heikin": 2.04,
        "boshuAvg30d": 95.5,
        "heikinAvg30d": 2.126
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 471.281,
        "saikou": 2.75,
        "heikin": 2.15,
        "boshuAvg30d": 95.5,
        "heikinAvg30d": 2.103
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 427.506,
        "saikou": 2.69,
        "heikin": 1.76,
        "boshuAvg30d": 95.5,
        "heikinAvg30d": 2.244
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 442.269,
        "saikou": 3.24,
        "heikin": 2.08,
        "boshuAvg30d": 95.5,
        "heikinAvg30d": 2.187
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 341.407,
        "saikou": 2.2,
        "heikin": 0.84,
        "boshuAvg30d": 95.5,
        "heikinAvg30d": 2.066
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 400.579,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 96.5,
        "heikinAvg30d": 2.154
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 415.984,
        "saikou": 1.57,
        "heikin": 0.7,
        "boshuAvg30d": 96.5,
        "heikinAvg30d": 2.216
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 440.069,
        "saikou": 2,
        "heikin": 0.94,
        "boshuAvg30d": 95.5,
        "heikinAvg30d": 2.218
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 442.878,
        "saikou": 2.19,
        "heikin": 0.88,
        "boshuAvg30d": 94.5,
        "heikinAvg30d": 2.193
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 408.748,
        "saikou": 2.2,
        "heikin": 1.52,
        "boshuAvg30d": 91.5,
        "heikinAvg30d": 2.211
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.55,
        "heikin": 0.42,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 0.976
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.1,
        "heikin": 0.66,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 0.996
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.7,
        "heikin": 0.61,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.012
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.85,
        "heikin": 0.52,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.103
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.45,
        "heikin": 0.49,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.318
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.5,
        "heikin": 0.58,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 0.977
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 45.476,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.205
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 1.95,
        "heikin": 0.65,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.365
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 0.8,
        "heikin": 0.62,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.287
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.83,
        "heikin": 0.83,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.394
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.525
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.47
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 15.34,
        "saikou": 3.49,
        "heikin": 3.15,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.688
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 2.77,
        "heikin": 2.72,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.44
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 28.928,
        "saikou": 1.2,
        "heikin": 0.45,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.5
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.608
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.836
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 2.392
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 28.928,
        "saikou": 2.45,
        "heikin": 2.04,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.754
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 28.928,
        "saikou": 3.5,
        "heikin": 0.75,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.678
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.549
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.817
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 10.362,
        "saikou": 0.47,
        "heikin": 0.47,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.709
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 6.36,
        "saikou": 3.9,
        "heikin": 2.57,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.446
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 3.4,
        "heikin": 0.48,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.401
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 60.85,
        "saikou": 3.35,
        "heikin": 0.49,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.483
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.262
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.8,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.52
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.53,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.362
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.53,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.058
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.244
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.8,
        "heikin": 4.35,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.517
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.24
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.767
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.276
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.013
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.032
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.008
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.41,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.965
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 10.018,
        "saikou": 9.68,
        "heikin": 6.75,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.187
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.371
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.461
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.863
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.857
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.789
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.579
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.499
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.222
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 78.506,
        "saikou": 2.2,
        "heikin": 2.07,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.103
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 101.91,
        "saikou": 2.2,
        "heikin": 1.13,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.8
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 99.95,
        "saikou": 1.73,
        "heikin": 0.81,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.86
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 95.972,
        "saikou": 1.73,
        "heikin": 0.81,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.825
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 94.072,
        "saikou": 1.73,
        "heikin": 0.81,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 1.826
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 94.072,
        "saikou": 1.73,
        "heikin": 0.81,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 1.889
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 84.245,
        "saikou": 1.73,
        "heikin": 1.53,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 2.025
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 84.245,
        "saikou": 2,
        "heikin": 1.99,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 2.075
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 84.245,
        "saikou": 2,
        "heikin": 1.75,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.041
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 84.245,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.107
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 84.245,
        "saikou": 2.2,
        "heikin": 2.16,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.024
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 125.806,
        "saikou": 2.2,
        "heikin": 1.04,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.902
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 84.245,
        "saikou": 2.4,
        "heikin": 2.25,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.006
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 151.747,
        "saikou": 2.4,
        "heikin": 1.42,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.071
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 103.859,
        "saikou": 2.4,
        "heikin": 1.84,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 2.187
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 82.345,
        "saikou": 2.2,
        "heikin": 2.19,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 2.236
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 82.345,
        "saikou": 2.2,
        "heikin": 2.19,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 2.522
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 241.283,
        "saikou": 4.74,
        "heikin": 3.37,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 2.586
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 243.707,
        "saikou": 3.76,
        "heikin": 3.08,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.818
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 243.707,
        "saikou": 4.71,
        "heikin": 3.96,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.855
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 243.165,
        "saikou": 4.74,
        "heikin": 3.76,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 3.23
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 258.165,
        "saikou": 5.03,
        "heikin": 3.6,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 3.178
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 260.15,
        "saikou": 4.45,
        "heikin": 3.57,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.989
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 260.15,
        "saikou": 4.47,
        "heikin": 3.68,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.763
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 260.15,
        "saikou": 5.67,
        "heikin": 3.47,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.853
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 260.15,
        "saikou": 4.98,
        "heikin": 3.11,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.579
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 168.377,
        "saikou": 4.31,
        "heikin": 3.53,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.863
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 99.769,
        "saikou": 3.95,
        "heikin": 3.14,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.79
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 99.769,
        "saikou": 4.94,
        "heikin": 3.17,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.841
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 101.212,
        "saikou": 4.45,
        "heikin": 3.17,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.795
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 103.112,
        "saikou": 4,
        "heikin": 2.71,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.638
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 103.112,
        "saikou": 4,
        "heikin": 2.78,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.743
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 103.112,
        "saikou": 4,
        "heikin": 2.72,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.74
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 101.242,
        "saikou": 2.79,
        "heikin": 2.48,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.83
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 101.242,
        "saikou": 2.67,
        "heikin": 2.62,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.901
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 101.242,
        "saikou": 3.02,
        "heikin": 2.85,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 2.859
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 99.282,
        "saikou": 2.45,
        "heikin": 2.43,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.714
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 101.152,
        "saikou": 2.42,
        "heikin": 2.4,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.691
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 99.245,
        "saikou": 1.73,
        "heikin": 1.73,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.823
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 99.245,
        "saikou": 2.79,
        "heikin": 2.41,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.575
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 95.262,
        "saikou": 2.44,
        "heikin": 2.31,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.541
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 118.046,
        "saikou": 3.03,
        "heikin": 2.43,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.511
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 99.245,
        "saikou": 2.2,
        "heikin": 2.16,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.481
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 118.859,
        "saikou": 2.2,
        "heikin": 1.03,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.422
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 99.245,
        "saikou": 1.73,
        "heikin": 1.73,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.472
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 187.859,
        "saikou": 4.11,
        "heikin": 4.02,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.347
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 97.395,
        "saikou": 1.73,
        "heikin": 1.73,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.112
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 80.952,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 2.139
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 119.903,
        "saikou": 2,
        "heikin": 1.34,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.842
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 119.903,
        "saikou": 2.17,
        "heikin": 1.6,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.094
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 119.903,
        "saikou": 1.93,
        "heikin": 1.45,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.171
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 123.693,
        "saikou": 2,
        "heikin": 1.48,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.037
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 123.693,
        "saikou": 1.3,
        "heikin": 1.17,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.973
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 123.693,
        "saikou": 1.45,
        "heikin": 1.44,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.096
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 140.552,
        "saikou": 1.63,
        "heikin": 1.61,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.237
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 140.552,
        "saikou": 2.21,
        "heikin": 2.13,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.396
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 140.552,
        "saikou": 2.25,
        "heikin": 2.17,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.315
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 140.552,
        "saikou": 4.42,
        "heikin": 3.71,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.56
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 140.552,
        "saikou": 4.42,
        "heikin": 3.94,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.876
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 140.552,
        "saikou": 4.91,
        "heikin": 4.01,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.883
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 140.552,
        "saikou": 4.97,
        "heikin": 4.37,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.172
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 124.638,
        "saikou": 4.24,
        "heikin": 4.07,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 2.388
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 124.638,
        "saikou": 2.4,
        "heikin": 1.46,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.175
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 124.638,
        "saikou": 2.2,
        "heikin": 0.42,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.005
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 124.638,
        "saikou": 2.44,
        "heikin": 0.99,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 1.9
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 124.638,
        "saikou": 2.4,
        "heikin": 0.6,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.5
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 224.811,
        "saikou": 2.79,
        "heikin": 0.65,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.5
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 224.811,
        "saikou": 4,
        "heikin": 0.78,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.44
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 224.811,
        "saikou": 4,
        "heikin": 1.25,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 2.583
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 224.811,
        "saikou": 4,
        "heikin": 0.78,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.548
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 224.811,
        "saikou": 3.5,
        "heikin": 0.77,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.491
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 224.811,
        "saikou": 4,
        "heikin": 0.77,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.457
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 237.538,
        "saikou": 2.79,
        "heikin": 0.72,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.071
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 235.54,
        "saikou": 2.7,
        "heikin": 0.69,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.037
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 170.52,
        "saikou": 4,
        "heikin": 1.37,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.411
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 170.52,
        "saikou": 4,
        "heikin": 1.14,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.44
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 170.52,
        "saikou": 4,
        "heikin": 0.81,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.579
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 170.52,
        "saikou": 4,
        "heikin": 1.09,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.731
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 170.52,
        "saikou": 4,
        "heikin": 1.51,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.937
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 74.481,
        "saikou": 4,
        "heikin": 2.14,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.443
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 74.481,
        "saikou": 5.11,
        "heikin": 5.01,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.209
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 170.52,
        "saikou": 9.95,
        "heikin": 9.76,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.537
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 175.852,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.933
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 175.852,
        "saikou": 10,
        "heikin": 9.07,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.244
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 173.862,
        "saikou": 10,
        "heikin": 9.91,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.485
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 173.862,
        "saikou": 10,
        "heikin": 9.91,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.419
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 189.776,
        "saikou": 9.52,
        "heikin": 8.58,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.12
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 42.515,
        "saikou": 2.79,
        "heikin": 2.42,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.854
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 42.515,
        "saikou": 2.43,
        "heikin": 2.07,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.607
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 42.515,
        "saikou": 2.3,
        "heikin": 2.05,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 3.182
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 186.434,
        "saikou": 8.86,
        "heikin": 7.88,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.146
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 186.434,
        "saikou": 5.91,
        "heikin": 5.28,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.146
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 186.434,
        "saikou": 5.36,
        "heikin": 5.01,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.047
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 186.434,
        "saikou": 5.11,
        "heikin": 4.62,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.745
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 186.434,
        "saikou": 5.11,
        "heikin": 4.36,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.678
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 186.434,
        "saikou": 4.56,
        "heikin": 3.95,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.956
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 2.2,
        "heikin": 0.72,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.848
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 187.373,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.866
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 187.373,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.881
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.871
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.861
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.865
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.976
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 172.93,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.928
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.965
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.005
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.989
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.936
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 2.3,
        "heikin": 0.74,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.021
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 2.3,
        "heikin": 0.74,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.998
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.033
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 210.473,
        "saikou": 1.7,
        "heikin": 0.77,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.9
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 187.373,
        "saikou": 1.7,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.888
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 224.373,
        "saikou": 1.7,
        "heikin": 0.8,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.897
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.31,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.936
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.953
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 190.473,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.945
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 190.473,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.944
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 190.473,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.941
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 190.473,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.124
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 190.473,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.082
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 190.473,
        "saikou": 1.7,
        "heikin": 1.27,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.007
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 142.373,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.017
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 142.373,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.013
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 119.373,
        "saikou": 0.36,
        "heikin": 0.36,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.928
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.971
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.983
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.988
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 2,
        "heikin": 0.78,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.945
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.977
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.008
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.013
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.025
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.065
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.051
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.019
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.017
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 201.473,
        "saikou": 1.7,
        "heikin": 0.97,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.731
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 201.473,
        "saikou": 1.7,
        "heikin": 0.77,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.76
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 201.473,
        "saikou": 1.7,
        "heikin": 0.77,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.769
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 205.473,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.774
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 195.473,
        "saikou": 1.7,
        "heikin": 0.74,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.778
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 189.473,
        "saikou": 1.7,
        "heikin": 0.71,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.856
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 157.865,
        "saikou": 6.21,
        "heikin": 4.8,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 3.924
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 159.789,
        "saikou": 3.31,
        "heikin": 2.67,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 3.423
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 172.539,
        "saikou": 1.99,
        "heikin": 1.59,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 3.102
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 178.486,
        "saikou": 2,
        "heikin": 1.59,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 2.962
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 178.486,
        "saikou": 1.8,
        "heikin": 1.52,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 2.908
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 184.146,
        "saikou": 1.84,
        "heikin": 1.56,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 3.085
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 205.84,
        "saikou": 2.93,
        "heikin": 2.38,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 3.295
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 205.012,
        "saikou": 4.5,
        "heikin": 3.65,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 3.431
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 208.84,
        "saikou": 5.86,
        "heikin": 4.79,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.574
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 267.84,
        "saikou": 7.09,
        "heikin": 5.51,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.841
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 267.84,
        "saikou": 6.58,
        "heikin": 4.96,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 4.084
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 264.54,
        "saikou": 6.98,
        "heikin": 5.36,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.878
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 346.564,
        "saikou": 5.41,
        "heikin": 4.81,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 3.591
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 267.564,
        "saikou": 4.37,
        "heikin": 3.3,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 3.319
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 169.564,
        "saikou": 2.4,
        "heikin": 1.46,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 3.061
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 144.675,
        "saikou": 2.32,
        "heikin": 1.69,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 3.207
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 144.675,
        "saikou": 2.4,
        "heikin": 2.1,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 3.604
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 146.564,
        "saikou": 2.62,
        "heikin": 2.15,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 4.166
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 191.051,
        "saikou": 2.79,
        "heikin": 2.05,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 4.171
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 189.065,
        "saikou": 2.79,
        "heikin": 1.7,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 4.142
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 181.619,
        "saikou": 3,
        "heikin": 1.81,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.983
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 181.619,
        "saikou": 3.89,
        "heikin": 1.43,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 4.139
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 189.551,
        "saikou": 3.08,
        "heikin": 1.88,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 4.078
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 187.553,
        "saikou": 3.04,
        "heikin": 1.78,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 4.069
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 185.605,
        "saikou": 3.1,
        "heikin": 1.33,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.597
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 185.605,
        "saikou": 3.43,
        "heikin": 1.38,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.722
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 189.551,
        "saikou": 3.49,
        "heikin": 2.46,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 4.137
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 187.651,
        "saikou": 3.3,
        "heikin": 2.85,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 4.682
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 191.051,
        "saikou": 3.43,
        "heikin": 2.98,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 4.995
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 141.051,
        "saikou": 7.11,
        "heikin": 4.45,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 5.283
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 157.024,
        "saikou": 6.94,
        "heikin": 4.75,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.307
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 264.014,
        "saikou": 8.62,
        "heikin": 6.4,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.928
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 382.038,
        "saikou": 8.22,
        "heikin": 7.21,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.941
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 284.082,
        "saikou": 10,
        "heikin": 9.1,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.241
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 285.982,
        "saikou": 10,
        "heikin": 9.91,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.958
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 318.12,
        "saikou": 9.71,
        "heikin": 7.57,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 6.1
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 260.686,
        "saikou": 9.66,
        "heikin": 8.15,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 6.117
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 266.514,
        "saikou": 8.96,
        "heikin": 7.65,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 5.888
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 269.65,
        "saikou": 8.03,
        "heikin": 6.44,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 5.531
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 317.639,
        "saikou": 9.24,
        "heikin": 6.43,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 5.06
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 317.031,
        "saikou": 8.88,
        "heikin": 6.67,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.866
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 290.007,
        "saikou": 8.25,
        "heikin": 6.29,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.705
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 339.043,
        "saikou": 7.69,
        "heikin": 5.6,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.529
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 347.043,
        "saikou": 6.36,
        "heikin": 5.52,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.524
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 347.067,
        "saikou": 6.41,
        "heikin": 6.19,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.452
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 269.067,
        "saikou": 7.42,
        "heikin": 6.01,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.015
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 269.067,
        "saikou": 7.2,
        "heikin": 5.98,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.014
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 260.417,
        "saikou": 6.41,
        "heikin": 5.21,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 3.528
      }
    ]
  }
};
