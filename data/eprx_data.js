// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/29〜2026/11/27）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-28",
  "fetchedAt": "2026-11-27",
  "avgWindowLabel": "過去30日平均（2026/10/29〜2026/11/27）",
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
      "boshu": 1079,
      "ouatsu": 1884.739,
      "saikou": 8.58,
      "heikin": 1.79,
      "boshuAvg30d": 1158.0,
      "heikinAvg30d": 2.364
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1079,
      "ouatsu": 1950.459,
      "saikou": 9.92,
      "heikin": 1.81,
      "boshuAvg30d": 1158.0,
      "heikinAvg30d": 2.306
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1079,
      "ouatsu": 1912.135,
      "saikou": 9.1,
      "heikin": 2.01,
      "boshuAvg30d": 1158.0,
      "heikinAvg30d": 2.252
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1078,
      "ouatsu": 1915.538,
      "saikou": 8.87,
      "heikin": 2.04,
      "boshuAvg30d": 1157.1,
      "heikinAvg30d": 2.154
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1072,
      "ouatsu": 1822.765,
      "saikou": 8.7,
      "heikin": 1.8,
      "boshuAvg30d": 1151.4,
      "heikinAvg30d": 2.199
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1072,
      "ouatsu": 1889.327,
      "saikou": 6.42,
      "heikin": 1.93,
      "boshuAvg30d": 1151.3,
      "heikinAvg30d": 2.368
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1069,
      "ouatsu": 2008.515,
      "saikou": 10,
      "heikin": 2.1,
      "boshuAvg30d": 1159.8,
      "heikinAvg30d": 2.443
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1073,
      "ouatsu": 2006.249,
      "saikou": 8.9,
      "heikin": 2.13,
      "boshuAvg30d": 1163.6,
      "heikinAvg30d": 2.628
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1073,
      "ouatsu": 1976.223,
      "saikou": 9,
      "heikin": 2.15,
      "boshuAvg30d": 1163.8,
      "heikinAvg30d": 2.666
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1075,
      "ouatsu": 1771.384,
      "saikou": 9.8,
      "heikin": 2.37,
      "boshuAvg30d": 1165.7,
      "heikinAvg30d": 2.624
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1075,
      "ouatsu": 1758.213,
      "saikou": 9.8,
      "heikin": 2.4,
      "boshuAvg30d": 1165.7,
      "heikinAvg30d": 2.737
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1075,
      "ouatsu": 1914.953,
      "saikou": 8.9,
      "heikin": 2.18,
      "boshuAvg30d": 1165.7,
      "heikinAvg30d": 2.793
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1134,
      "ouatsu": 1997.97,
      "saikou": 9,
      "heikin": 2.33,
      "boshuAvg30d": 1224.8,
      "heikinAvg30d": 3.055
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1159,
      "ouatsu": 1891.299,
      "saikou": 8.87,
      "heikin": 2.34,
      "boshuAvg30d": 1249.6,
      "heikinAvg30d": 3.195
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1178,
      "ouatsu": 2005.734,
      "saikou": 9.91,
      "heikin": 2.72,
      "boshuAvg30d": 1268.8,
      "heikinAvg30d": 3.212
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1193,
      "ouatsu": 2068.126,
      "saikou": 9.8,
      "heikin": 2.55,
      "boshuAvg30d": 1284.3,
      "heikinAvg30d": 3.033
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1193,
      "ouatsu": 2054.594,
      "saikou": 9.91,
      "heikin": 2.46,
      "boshuAvg30d": 1284.3,
      "heikinAvg30d": 2.88
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1193,
      "ouatsu": 1916.761,
      "saikou": 8.2,
      "heikin": 2.35,
      "boshuAvg30d": 1288.2,
      "heikinAvg30d": 2.904
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1122,
      "ouatsu": 1983.948,
      "saikou": 9.91,
      "heikin": 3.28,
      "boshuAvg30d": 1243.3,
      "heikinAvg30d": 2.772
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1127,
      "ouatsu": 2075.942,
      "saikou": 9.9,
      "heikin": 3.66,
      "boshuAvg30d": 1248.1,
      "heikinAvg30d": 2.751
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1131,
      "ouatsu": 2089.404,
      "saikou": 9.91,
      "heikin": 3.67,
      "boshuAvg30d": 1252.5,
      "heikinAvg30d": 2.767
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1135,
      "ouatsu": 1993.091,
      "saikou": 9.91,
      "heikin": 3.3,
      "boshuAvg30d": 1256.1,
      "heikinAvg30d": 2.774
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1129,
      "ouatsu": 1773.927,
      "saikou": 9.99,
      "heikin": 3.29,
      "boshuAvg30d": 1250.0,
      "heikinAvg30d": 2.709
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1129,
      "ouatsu": 1761.889,
      "saikou": 9.99,
      "heikin": 2.7,
      "boshuAvg30d": 1249.9,
      "heikinAvg30d": 2.845
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1110,
      "ouatsu": 1647.047,
      "saikou": 9.99,
      "heikin": 2.41,
      "boshuAvg30d": 1230.8,
      "heikinAvg30d": 2.67
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1110,
      "ouatsu": 1721.568,
      "saikou": 9.99,
      "heikin": 2.81,
      "boshuAvg30d": 1230.8,
      "heikinAvg30d": 2.734
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1110,
      "ouatsu": 1721.638,
      "saikou": 9.99,
      "heikin": 2.62,
      "boshuAvg30d": 1230.8,
      "heikinAvg30d": 2.801
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1106,
      "ouatsu": 1766.399,
      "saikou": 9.98,
      "heikin": 2.97,
      "boshuAvg30d": 1226.7,
      "heikinAvg30d": 2.854
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1105,
      "ouatsu": 1667.569,
      "saikou": 9.99,
      "heikin": 2.54,
      "boshuAvg30d": 1225.5,
      "heikinAvg30d": 2.943
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1099,
      "ouatsu": 1784.548,
      "saikou": 9.99,
      "heikin": 3.19,
      "boshuAvg30d": 1219.5,
      "heikinAvg30d": 3.034
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1170,
      "ouatsu": 1816.841,
      "saikou": 9.47,
      "heikin": 2.97,
      "boshuAvg30d": 1273.1,
      "heikinAvg30d": 3.199
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1170,
      "ouatsu": 1853.822,
      "saikou": 9.47,
      "heikin": 2.63,
      "boshuAvg30d": 1273.1,
      "heikinAvg30d": 3.346
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1170,
      "ouatsu": 1800.969,
      "saikou": 9.91,
      "heikin": 2.97,
      "boshuAvg30d": 1272.9,
      "heikinAvg30d": 3.653
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1168,
      "ouatsu": 1511.523,
      "saikou": 9.99,
      "heikin": 3.8,
      "boshuAvg30d": 1271.0,
      "heikinAvg30d": 3.719
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1166,
      "ouatsu": 1475.646,
      "saikou": 10,
      "heikin": 4.78,
      "boshuAvg30d": 1264.7,
      "heikinAvg30d": 3.747
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1161,
      "ouatsu": 1579.181,
      "saikou": 10,
      "heikin": 3.89,
      "boshuAvg30d": 1255.9,
      "heikinAvg30d": 3.684
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1157,
      "ouatsu": 1588.587,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1251.8,
      "heikinAvg30d": 3.499
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1157,
      "ouatsu": 1606.912,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1251.8,
      "heikinAvg30d": 3.353
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1157,
      "ouatsu": 1737.871,
      "saikou": 9.47,
      "heikin": 2.76,
      "boshuAvg30d": 1251.8,
      "heikinAvg30d": 3.29
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1155,
      "ouatsu": 1750.915,
      "saikou": 9.47,
      "heikin": 2.74,
      "boshuAvg30d": 1250.2,
      "heikinAvg30d": 3.231
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1148,
      "ouatsu": 1591.781,
      "saikou": 9.9,
      "heikin": 3.17,
      "boshuAvg30d": 1243.1,
      "heikinAvg30d": 3.151
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1148,
      "ouatsu": 1731.241,
      "saikou": 9.47,
      "heikin": 2.85,
      "boshuAvg30d": 1243.1,
      "heikinAvg30d": 3.194
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1059,
      "ouatsu": 1765.808,
      "saikou": 9.47,
      "heikin": 2.69,
      "boshuAvg30d": 1156.9,
      "heikinAvg30d": 3.089
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1062,
      "ouatsu": 1852.457,
      "saikou": 9.8,
      "heikin": 2.17,
      "boshuAvg30d": 1159.9,
      "heikinAvg30d": 3.024
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1061,
      "ouatsu": 1824.654,
      "saikou": 8.8,
      "heikin": 2.16,
      "boshuAvg30d": 1159.1,
      "heikinAvg30d": 3.017
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1054,
      "ouatsu": 1733.196,
      "saikou": 8.99,
      "heikin": 2.41,
      "boshuAvg30d": 1152.3,
      "heikinAvg30d": 2.954
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1046,
      "ouatsu": 1845.319,
      "saikou": 8.9,
      "heikin": 1.81,
      "boshuAvg30d": 1144.2,
      "heikinAvg30d": 2.905
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1038,
      "ouatsu": 1839.128,
      "saikou": 10,
      "heikin": 1.58,
      "boshuAvg30d": 1135.9,
      "heikinAvg30d": 2.668
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
        "boshu": 50,
        "ouatsu": 112.918,
        "saikou": 8.58,
        "heikin": 1.89,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 3.132
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 159.95,
        "saikou": 8.98,
        "heikin": 1.5,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 3.274
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 109,
        "saikou": 9.1,
        "heikin": 1.55,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 2.945
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 110.968,
        "saikou": 8.87,
        "heikin": 1.77,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 3.273
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 113.968,
        "saikou": 8.7,
        "heikin": 1.83,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.619
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 113.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.275
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 117.118,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.706
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 117.118,
        "saikou": 8.9,
        "heikin": 2.16,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.59
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 117.118,
        "saikou": 9,
        "heikin": 2.26,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.737
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 80.118,
        "saikou": 9.8,
        "heikin": 4.41,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.513
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 85.118,
        "saikou": 9.8,
        "heikin": 4.28,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.458
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 117.118,
        "saikou": 8.9,
        "heikin": 2.84,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.196
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 114.118,
        "saikou": 9,
        "heikin": 3.92,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.586
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 116.108,
        "saikou": 8.87,
        "heikin": 4.24,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.543
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 154.108,
        "saikou": 9.91,
        "heikin": 5.52,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.848
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 116.108,
        "saikou": 9.8,
        "heikin": 5.36,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.604
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 152.908,
        "saikou": 9.91,
        "heikin": 5.51,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.744
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 114.818,
        "saikou": 6.45,
        "heikin": 4.09,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.346
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 163.118,
        "saikou": 9.91,
        "heikin": 5.07,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 4.062
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 7.05,
        "heikin": 3.95,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 3.541
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 161.218,
        "saikou": 9.91,
        "heikin": 3.85,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 3.491
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 161.218,
        "saikou": 9.91,
        "heikin": 3.9,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 3.751
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 112.918,
        "saikou": 9,
        "heikin": 2.86,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 3.767
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 210.218,
        "saikou": 9.91,
        "heikin": 3.95,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 3.923
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 110.968,
        "saikou": 8.14,
        "heikin": 2.72,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.253
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 156.418,
        "saikou": 9.91,
        "heikin": 4.63,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.275
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 110.968,
        "saikou": 7,
        "heikin": 2.43,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.486
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 165.968,
        "saikou": 9.91,
        "heikin": 4.65,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 4.364
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 137.918,
        "saikou": 7,
        "heikin": 2.8,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.307
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 129.908,
        "saikou": 6.7,
        "heikin": 1.77,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.481
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 129.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.959
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 132.908,
        "saikou": 1.37,
        "heikin": 1.37,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 5.908
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 178.058,
        "saikou": 9.91,
        "heikin": 4.11,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 6.393
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 202.058,
        "saikou": 5.69,
        "heikin": 4.7,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 6.367
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 158.908,
        "saikou": 5.69,
        "heikin": 5.56,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 6.111
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 227.858,
        "saikou": 5.69,
        "heikin": 4.26,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 5.965
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 117.908,
        "saikou": 8.9,
        "heikin": 2.8,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 5.516
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 132.908,
        "saikou": 8,
        "heikin": 2.5,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 5.231
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 130.918,
        "saikou": 4.99,
        "heikin": 2.02,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 5.173
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 130.918,
        "saikou": 7.3,
        "heikin": 2.36,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 5.219
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 129.908,
        "saikou": 4.99,
        "heikin": 2.41,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 5.343
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 129.908,
        "saikou": 2.31,
        "heikin": 2.31,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.81
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 117.908,
        "saikou": 7.3,
        "heikin": 2.89,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.993
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 117.908,
        "saikou": 9.8,
        "heikin": 2.75,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 5.142
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 113.968,
        "saikou": 8.8,
        "heikin": 2.39,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 5.141
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 123.968,
        "saikou": 8.95,
        "heikin": 1.82,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 5.115
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 125.958,
        "saikou": 8.9,
        "heikin": 1.77,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.773
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 164.958,
        "saikou": 9.15,
        "heikin": 1.29,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.428
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 67.89,
        "saikou": 6.31,
        "heikin": 4.96,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 4.611
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 80.496,
        "saikou": 9.92,
        "heikin": 5.1,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 4.93
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 78.56,
        "saikou": 7.03,
        "heikin": 3.75,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 5.177
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 80.52,
        "saikou": 7.04,
        "heikin": 3.47,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 5.247
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 80.436,
        "saikou": 6.87,
        "heikin": 3.26,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 5.098
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 78.536,
        "saikou": 6.42,
        "heikin": 3.32,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 4.662
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 93.62,
        "saikou": 6.31,
        "heikin": 3.45,
        "boshuAvg30d": 122.4,
        "heikinAvg30d": 4.591
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 95.12,
        "saikou": 6.21,
        "heikin": 3.42,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 4.13
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 112.918,
        "saikou": 6.11,
        "heikin": 3.64,
        "boshuAvg30d": 122.4,
        "heikinAvg30d": 4.134
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 112.918,
        "saikou": 5.86,
        "heikin": 4.97,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 4.21
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 111.118,
        "saikou": 5.66,
        "heikin": 3.58,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 4.22
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 109.468,
        "saikou": 5.8,
        "heikin": 3.7,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 4.108
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 112.918,
        "saikou": 5.38,
        "heikin": 3.78,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 4.285
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 111.418,
        "saikou": 5.05,
        "heikin": 3.57,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 4.232
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 112.918,
        "saikou": 5.05,
        "heikin": 3.73,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 4.812
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 111.418,
        "saikou": 3.73,
        "heikin": 2.83,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 4.913
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 112.918,
        "saikou": 4.48,
        "heikin": 2.78,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 4.752
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 99.418,
        "saikou": 4.31,
        "heikin": 2.7,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 5.038
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 123.118,
        "saikou": 5.05,
        "heikin": 2.63,
        "boshuAvg30d": 78.8,
        "heikinAvg30d": 4.595
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 112.448,
        "saikou": 5.38,
        "heikin": 3.21,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 4.545
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 105.137,
        "saikou": 7.02,
        "heikin": 4.08,
        "boshuAvg30d": 81.7,
        "heikinAvg30d": 4.938
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 80.661,
        "saikou": 7.62,
        "heikin": 4.48,
        "boshuAvg30d": 82.6,
        "heikinAvg30d": 5.092
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 86.386,
        "saikou": 8.04,
        "heikin": 4.85,
        "boshuAvg30d": 82.7,
        "heikinAvg30d": 5.06
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 84.766,
        "saikou": 8.35,
        "heikin": 4.94,
        "boshuAvg30d": 82.7,
        "heikinAvg30d": 5.183
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 82.662,
        "saikou": 8.32,
        "heikin": 5.35,
        "boshuAvg30d": 77.8,
        "heikinAvg30d": 5.374
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 80.697,
        "saikou": 8.7,
        "heikin": 5.62,
        "boshuAvg30d": 77.8,
        "heikinAvg30d": 5.283
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 87.138,
        "saikou": 8.32,
        "heikin": 5.01,
        "boshuAvg30d": 77.8,
        "heikinAvg30d": 4.499
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 86.588,
        "saikou": 8.45,
        "heikin": 5.11,
        "boshuAvg30d": 76.8,
        "heikinAvg30d": 4.722
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 81.508,
        "saikou": 8.67,
        "heikin": 5.42,
        "boshuAvg30d": 76.8,
        "heikinAvg30d": 4.474
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 125.114,
        "saikou": 7.67,
        "heikin": 4.72,
        "boshuAvg30d": 75.7,
        "heikinAvg30d": 3.968
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 113.114,
        "saikou": 7.04,
        "heikin": 4,
        "boshuAvg30d": 138.4,
        "heikinAvg30d": 4.076
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 101.15,
        "saikou": 4.9,
        "heikin": 4.32,
        "boshuAvg30d": 138.4,
        "heikinAvg30d": 4.36
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 102.95,
        "saikou": 3.99,
        "heikin": 2.85,
        "boshuAvg30d": 138.4,
        "heikinAvg30d": 4.435
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 73.694,
        "saikou": 3.99,
        "heikin": 1.92,
        "boshuAvg30d": 138.4,
        "heikinAvg30d": 4.191
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 83.197,
        "saikou": 2.88,
        "heikin": 2.1,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 4.539
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 82.048,
        "saikou": 5.32,
        "heikin": 3.16,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 3.74
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 85.162,
        "saikou": 5.38,
        "heikin": 3.35,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 3.342
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 83.662,
        "saikou": 5.56,
        "heikin": 3.68,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 3.056
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 83.362,
        "saikou": 5.75,
        "heikin": 4.39,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 3.031
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 83.362,
        "saikou": 5.53,
        "heikin": 3.23,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 3.121
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 107.163,
        "saikou": 5.34,
        "heikin": 3.57,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 3.297
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 107.163,
        "saikou": 5.38,
        "heikin": 4.05,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 3.373
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 112.918,
        "saikou": 5.5,
        "heikin": 2.76,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 2.917
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 112.918,
        "saikou": 6.21,
        "heikin": 3.35,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 3.449
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 109.088,
        "saikou": 6.17,
        "heikin": 3.16,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 3.512
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 109.088,
        "saikou": 8.29,
        "heikin": 5.99,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 3.998
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 107.738,
        "saikou": 8.02,
        "heikin": 6.44,
        "boshuAvg30d": 46.2,
        "heikinAvg30d": 3.892
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 95.304,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 4.647
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 157,
        "ouatsu": 550.651,
        "saikou": 2.52,
        "heikin": 0.53,
        "boshuAvg30d": 224.8,
        "heikinAvg30d": 1.582
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 157,
        "ouatsu": 576.812,
        "saikou": 1.84,
        "heikin": 1.02,
        "boshuAvg30d": 224.8,
        "heikinAvg30d": 1.546
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 157,
        "ouatsu": 580.562,
        "saikou": 1.9,
        "heikin": 1.03,
        "boshuAvg30d": 224.8,
        "heikinAvg30d": 1.702
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 157,
        "ouatsu": 597.67,
        "saikou": 1.99,
        "heikin": 1.1,
        "boshuAvg30d": 224.8,
        "heikinAvg30d": 1.272
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 155,
        "ouatsu": 601.08,
        "saikou": 1.76,
        "heikin": 0.98,
        "boshuAvg30d": 222.9,
        "heikinAvg30d": 1.304
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 155,
        "ouatsu": 641.011,
        "saikou": 5.07,
        "heikin": 1.18,
        "boshuAvg30d": 222.8,
        "heikinAvg30d": 1.562
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 153,
        "ouatsu": 654.851,
        "saikou": 1.7,
        "heikin": 0.88,
        "boshuAvg30d": 220.8,
        "heikinAvg30d": 1.429
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 155,
        "ouatsu": 645.373,
        "saikou": 1.7,
        "heikin": 0.86,
        "boshuAvg30d": 222.8,
        "heikinAvg30d": 1.604
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 155,
        "ouatsu": 569.287,
        "saikou": 1.91,
        "heikin": 0.81,
        "boshuAvg30d": 222.8,
        "heikinAvg30d": 1.754
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 156,
        "ouatsu": 602.095,
        "saikou": 5,
        "heikin": 0.72,
        "boshuAvg30d": 223.8,
        "heikinAvg30d": 1.596
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 156,
        "ouatsu": 495.248,
        "saikou": 5.18,
        "heikin": 1.58,
        "boshuAvg30d": 223.8,
        "heikinAvg30d": 1.658
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 156,
        "ouatsu": 501.244,
        "saikou": 5.46,
        "heikin": 1.31,
        "boshuAvg30d": 223.8,
        "heikinAvg30d": 1.794
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 176,
        "ouatsu": 542.816,
        "saikou": 2.54,
        "heikin": 1.37,
        "boshuAvg30d": 243.7,
        "heikinAvg30d": 2.331
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 184,
        "ouatsu": 616.654,
        "saikou": 3.02,
        "heikin": 1.45,
        "boshuAvg30d": 251.7,
        "heikinAvg30d": 2.521
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 188,
        "ouatsu": 610.775,
        "saikou": 3.39,
        "heikin": 1.67,
        "boshuAvg30d": 255.8,
        "heikinAvg30d": 2.633
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 193,
        "ouatsu": 627.283,
        "saikou": 2.6,
        "heikin": 1.53,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.425
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 193,
        "ouatsu": 636.358,
        "saikou": 3.57,
        "heikin": 1.45,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 1.972
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 193,
        "ouatsu": 609.336,
        "saikou": 2.29,
        "heikin": 1.62,
        "boshuAvg30d": 265.0,
        "heikinAvg30d": 2.532
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 183,
        "ouatsu": 606.104,
        "saikou": 1.57,
        "heikin": 1.29,
        "boshuAvg30d": 255.2,
        "heikinAvg30d": 1.944
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 183,
        "ouatsu": 713.276,
        "saikou": 2,
        "heikin": 0.89,
        "boshuAvg30d": 255.2,
        "heikinAvg30d": 1.906
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 183,
        "ouatsu": 706.407,
        "saikou": 2.11,
        "heikin": 1.39,
        "boshuAvg30d": 255.5,
        "heikinAvg30d": 1.793
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 183,
        "ouatsu": 667.338,
        "saikou": 1.66,
        "heikin": 0.96,
        "boshuAvg30d": 255.4,
        "heikinAvg30d": 1.798
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 561.973,
        "saikou": 1.47,
        "heikin": 1.07,
        "boshuAvg30d": 252.2,
        "heikinAvg30d": 1.854
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 540.096,
        "saikou": 1.78,
        "heikin": 1.31,
        "boshuAvg30d": 252.2,
        "heikinAvg30d": 2.071
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 178,
        "ouatsu": 520.951,
        "saikou": 0.96,
        "heikin": 0.53,
        "boshuAvg30d": 250.1,
        "heikinAvg30d": 1.548
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 178,
        "ouatsu": 496.936,
        "saikou": 1.03,
        "heikin": 0.53,
        "boshuAvg30d": 250.1,
        "heikinAvg30d": 1.545
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 178,
        "ouatsu": 549.757,
        "saikou": 1.45,
        "heikin": 0.73,
        "boshuAvg30d": 250.1,
        "heikinAvg30d": 1.914
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 525.672,
        "saikou": 1.29,
        "heikin": 0.72,
        "boshuAvg30d": 249.7,
        "heikinAvg30d": 1.653
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 177,
        "ouatsu": 499.255,
        "saikou": 1.27,
        "heikin": 0.84,
        "boshuAvg30d": 248.7,
        "heikinAvg30d": 1.867
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 177,
        "ouatsu": 528.01,
        "saikou": 1.33,
        "heikin": 0.98,
        "boshuAvg30d": 248.6,
        "heikinAvg30d": 1.989
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 175,
        "ouatsu": 562.461,
        "saikou": 1.98,
        "heikin": 0.97,
        "boshuAvg30d": 247.0,
        "heikinAvg30d": 2.07
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 175,
        "ouatsu": 559.532,
        "saikou": 2.54,
        "heikin": 0.66,
        "boshuAvg30d": 247.0,
        "heikinAvg30d": 1.99
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 175,
        "ouatsu": 463.1,
        "saikou": 3.32,
        "heikin": 0.88,
        "boshuAvg30d": 246.7,
        "heikinAvg30d": 2.085
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 175,
        "ouatsu": 381.65,
        "saikou": 1.65,
        "heikin": 0.97,
        "boshuAvg30d": 246.7,
        "heikinAvg30d": 2.098
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 175,
        "ouatsu": 370.187,
        "saikou": 2.43,
        "heikin": 1.22,
        "boshuAvg30d": 246.7,
        "heikinAvg30d": 2.022
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 175,
        "ouatsu": 437.074,
        "saikou": 2.97,
        "heikin": 1.04,
        "boshuAvg30d": 242.8,
        "heikinAvg30d": 2.177
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 177,
        "ouatsu": 588.739,
        "saikou": 2.89,
        "heikin": 0.86,
        "boshuAvg30d": 244.9,
        "heikinAvg30d": 1.971
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 177,
        "ouatsu": 588.748,
        "saikou": 2.64,
        "heikin": 0.92,
        "boshuAvg30d": 244.9,
        "heikinAvg30d": 1.872
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 177,
        "ouatsu": 585.023,
        "saikou": 0.66,
        "heikin": 0.43,
        "boshuAvg30d": 244.9,
        "heikinAvg30d": 1.901
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 177,
        "ouatsu": 558.715,
        "saikou": 2.04,
        "heikin": 0.86,
        "boshuAvg30d": 245.3,
        "heikinAvg30d": 1.788
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 176,
        "ouatsu": 469.337,
        "saikou": 2.83,
        "heikin": 0.72,
        "boshuAvg30d": 244.2,
        "heikinAvg30d": 1.895
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 176,
        "ouatsu": 566.343,
        "saikou": 2.15,
        "heikin": 0.96,
        "boshuAvg30d": 244.2,
        "heikinAvg30d": 2.021
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 175,
        "ouatsu": 578.957,
        "saikou": 0.67,
        "heikin": 0.44,
        "boshuAvg30d": 243.3,
        "heikinAvg30d": 1.841
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 175,
        "ouatsu": 576.959,
        "saikou": 2.51,
        "heikin": 0.67,
        "boshuAvg30d": 243.3,
        "heikinAvg30d": 1.845
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 175,
        "ouatsu": 563.221,
        "saikou": 2.42,
        "heikin": 0.62,
        "boshuAvg30d": 243.3,
        "heikinAvg30d": 1.956
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 173,
        "ouatsu": 560.727,
        "saikou": 0.67,
        "heikin": 0.48,
        "boshuAvg30d": 241.3,
        "heikinAvg30d": 2.068
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 171,
        "ouatsu": 557.48,
        "saikou": 2.53,
        "heikin": 0.67,
        "boshuAvg30d": 239.3,
        "heikinAvg30d": 2.276
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 578.068,
        "saikou": 0.96,
        "heikin": 0.52,
        "boshuAvg30d": 237.9,
        "heikinAvg30d": 2.078
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 122,
        "ouatsu": 431.205,
        "saikou": 2.91,
        "heikin": 1.04,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 2.083
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 122,
        "ouatsu": 325.254,
        "saikou": 1.53,
        "heikin": 0.76,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 2.011
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 122,
        "ouatsu": 333.216,
        "saikou": 1.53,
        "heikin": 0.83,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 2.037
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 335.204,
        "saikou": 1.53,
        "heikin": 0.87,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.076
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 121,
        "ouatsu": 327.125,
        "saikou": 1.4,
        "heikin": 0.81,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 2.116
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 311.341,
        "saikou": 1.4,
        "heikin": 0.94,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.109
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 347.659,
        "saikou": 1.55,
        "heikin": 1.28,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 2.053
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 328.356,
        "saikou": 1.71,
        "heikin": 1.44,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 1.997
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 119,
        "ouatsu": 335.956,
        "saikou": 1.61,
        "heikin": 1.39,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 1.895
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 119,
        "ouatsu": 314.056,
        "saikou": 5,
        "heikin": 1.59,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 1.946
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 119,
        "ouatsu": 316.046,
        "saikou": 1.55,
        "heikin": 0.8,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 1.898
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 119,
        "ouatsu": 309.64,
        "saikou": 1.55,
        "heikin": 0.83,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 1.923
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 396.065,
        "saikou": 1.78,
        "heikin": 1.24,
        "boshuAvg30d": 162.5,
        "heikinAvg30d": 2.134
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 412.213,
        "saikou": 5,
        "heikin": 2.08,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 2.161
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 137,
        "ouatsu": 408.373,
        "saikou": 4.45,
        "heikin": 1.6,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 2.332
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 139,
        "ouatsu": 390.591,
        "saikou": 1.91,
        "heikin": 1.49,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 2.394
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 139,
        "ouatsu": 392.581,
        "saikou": 1.9,
        "heikin": 1.47,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 2.369
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 139,
        "ouatsu": 374.36,
        "saikou": 5.01,
        "heikin": 1.95,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 2.462
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 339.161,
        "saikou": 6.5,
        "heikin": 1.96,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 2.432
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 395.656,
        "saikou": 6.68,
        "heikin": 3.41,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 2.739
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 144,
        "ouatsu": 345.065,
        "saikou": 6.98,
        "heikin": 3.84,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 2.814
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 144,
        "ouatsu": 302.794,
        "saikou": 6.62,
        "heikin": 3.72,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 2.803
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 143,
        "ouatsu": 229.577,
        "saikou": 6.85,
        "heikin": 4.09,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 2.794
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 142,
        "ouatsu": 187.726,
        "saikou": 6.68,
        "heikin": 3.92,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 3.097
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 138,
        "ouatsu": 165.625,
        "saikou": 6.68,
        "heikin": 4.64,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 3.53
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 138,
        "ouatsu": 173.579,
        "saikou": 6.58,
        "heikin": 4.33,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 3.482
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 138,
        "ouatsu": 151.799,
        "saikou": 5.01,
        "heikin": 2.38,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 2.632
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 138,
        "ouatsu": 167.583,
        "saikou": 5.01,
        "heikin": 2.3,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 2.61
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 138,
        "ouatsu": 175.516,
        "saikou": 5.01,
        "heikin": 2.24,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 2.647
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 138,
        "ouatsu": 230.158,
        "saikou": 5.01,
        "heikin": 2.42,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 2.759
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 136,
        "ouatsu": 212.621,
        "saikou": 9.47,
        "heikin": 3.02,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 2.983
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 136,
        "ouatsu": 258.055,
        "saikou": 9.47,
        "heikin": 2.69,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 2.903
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 136,
        "ouatsu": 229.631,
        "saikou": 9.47,
        "heikin": 3.43,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 2.924
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 135,
        "ouatsu": 232.121,
        "saikou": 9.47,
        "heikin": 5.21,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 3.517
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 135,
        "ouatsu": 231.123,
        "saikou": 9.47,
        "heikin": 5.91,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 3.404
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 134,
        "ouatsu": 229.727,
        "saikou": 9.47,
        "heikin": 3.33,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 2.985
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 132,
        "ouatsu": 233.2,
        "saikou": 9.47,
        "heikin": 3.7,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 2.942
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 132,
        "ouatsu": 235.19,
        "saikou": 9.47,
        "heikin": 3.42,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 2.909
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 132,
        "ouatsu": 280.624,
        "saikou": 9.47,
        "heikin": 2.71,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 2.353
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 132,
        "ouatsu": 282.614,
        "saikou": 9.47,
        "heikin": 3.07,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 2.435
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 132,
        "ouatsu": 268.704,
        "saikou": 9.47,
        "heikin": 3.09,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 2.247
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 132,
        "ouatsu": 260.722,
        "saikou": 9.47,
        "heikin": 3.15,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 2.126
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 134,
        "ouatsu": 264.657,
        "saikou": 9.47,
        "heikin": 3.01,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 2.014
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 134,
        "ouatsu": 270.652,
        "saikou": 5,
        "heikin": 2.48,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 2.28
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 134,
        "ouatsu": 278.634,
        "saikou": 5,
        "heikin": 2.66,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 2.253
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 278.634,
        "saikou": 5,
        "heikin": 2.65,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 2.22
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 278.634,
        "saikou": 3.17,
        "heikin": 2.27,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 2.14
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 273.374,
        "saikou": 5,
        "heikin": 2.21,
        "boshuAvg30d": 161.5,
        "heikinAvg30d": 2.066
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 4.48
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 3.87
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 19,
        "saikou": 7.56,
        "heikin": 7.56,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 3.133
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 19,
        "saikou": 7.82,
        "heikin": 7.82,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 3.632
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.649
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 3.516
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 20.998,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 5.35
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 4.757
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 4.015
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 5.159
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 5.109
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 4.742
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 5.631
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 5.295
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 6.027
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 5.051
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 1.998,
        "saikou": 7.8,
        "heikin": 7.8,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 5.753
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 5.077
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 1.998,
        "saikou": 9.05,
        "heikin": 9.05,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 5.493
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 8.886,
        "saikou": 9.9,
        "heikin": 8.96,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 5.689
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 16.932,
        "saikou": 7.21,
        "heikin": 7.21,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 6.549
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 7.434,
        "saikou": 7.17,
        "heikin": 7.17,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 6.808
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 1.998,
        "saikou": 9.99,
        "heikin": 9.99,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 6.425
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 1.998,
        "saikou": 9.99,
        "heikin": 9.99,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.956
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 16.636,
        "saikou": 9.99,
        "heikin": 1.54,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 4.664
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 13.118,
        "saikou": 9.99,
        "heikin": 2.84,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 5.337
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 36.998,
        "saikou": 9.99,
        "heikin": 6.77,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 6.775
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 36.998,
        "saikou": 9.9,
        "heikin": 6.66,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 5.883
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 36.998,
        "saikou": 9.99,
        "heikin": 5.89,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 6.701
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 36.998,
        "saikou": 9.99,
        "heikin": 7.32,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 6.43
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 36.998,
        "saikou": 7.49,
        "heikin": 7.49,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 6.948
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 36.998,
        "saikou": 7.17,
        "heikin": 7.17,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 7.16
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 36.998,
        "saikou": 7.49,
        "heikin": 7.49,
        "boshuAvg30d": 69.7,
        "heikinAvg30d": 6.933
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 28.734,
        "saikou": 9.99,
        "heikin": 9.02,
        "boshuAvg30d": 69.7,
        "heikinAvg30d": 6.366
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 36.998,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 69.7,
        "heikinAvg30d": 6.697
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 36.998,
        "saikou": 9.99,
        "heikin": 9.61,
        "boshuAvg30d": 69.7,
        "heikinAvg30d": 6.612
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 9.99,
        "heikin": 9.99,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 5.805
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 9.45,
        "heikin": 9.45,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 6.444
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 5.917
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 6.256
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 1.998,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 5.383
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 5.907
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 5.279
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 5.275
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 5.871
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 8.95,
        "heikin": 8.95,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 5.294
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 5.665
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 4.395
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 191.861,
        "saikou": 4.53,
        "heikin": 3.64,
        "boshuAvg30d": 228.5,
        "heikinAvg30d": 3.268
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 289.972,
        "saikou": 2.9,
        "heikin": 2.9,
        "boshuAvg30d": 228.5,
        "heikinAvg30d": 2.423
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 284.126,
        "saikou": 3.16,
        "heikin": 3.16,
        "boshuAvg30d": 228.5,
        "heikinAvg30d": 2.274
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 267.11,
        "saikou": 3.04,
        "heikin": 3.04,
        "boshuAvg30d": 228.5,
        "heikinAvg30d": 2.283
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 238.571,
        "saikou": 2.68,
        "heikin": 2.65,
        "boshuAvg30d": 227.5,
        "heikinAvg30d": 2.767
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 285.996,
        "saikou": 2.53,
        "heikin": 2.53,
        "boshuAvg30d": 227.5,
        "heikinAvg30d": 3.186
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 301.738,
        "saikou": 2.42,
        "heikin": 2.42,
        "boshuAvg30d": 227.5,
        "heikinAvg30d": 3.597
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 301.738,
        "saikou": 2.42,
        "heikin": 2.42,
        "boshuAvg30d": 227.5,
        "heikinAvg30d": 3.903
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 297.871,
        "saikou": 2.42,
        "heikin": 2.42,
        "boshuAvg30d": 228.5,
        "heikinAvg30d": 3.604
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 119.124,
        "saikou": 5.78,
        "heikin": 3.18,
        "boshuAvg30d": 228.5,
        "heikinAvg30d": 3.342
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 207.61,
        "saikou": 4.21,
        "heikin": 3.56,
        "boshuAvg30d": 228.5,
        "heikinAvg30d": 3.375
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 301.736,
        "saikou": 3.64,
        "heikin": 3.47,
        "boshuAvg30d": 228.5,
        "heikinAvg30d": 3.391
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 254.311,
        "saikou": 3.64,
        "heikin": 3.58,
        "boshuAvg30d": 238.6,
        "heikinAvg30d": 3.499
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 119.124,
        "saikou": 1.59,
        "heikin": 1.59,
        "boshuAvg30d": 242.6,
        "heikinAvg30d": 3.616
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 207.606,
        "saikou": 4.31,
        "heikin": 3.64,
        "boshuAvg30d": 247.6,
        "heikinAvg30d": 4.407
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 275.103,
        "saikou": 3.45,
        "heikin": 3.25,
        "boshuAvg30d": 249.7,
        "heikinAvg30d": 4.59
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 275.103,
        "saikou": 6.79,
        "heikin": 3.18,
        "boshuAvg30d": 249.7,
        "heikinAvg30d": 4.481
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 275.103,
        "saikou": 8.2,
        "heikin": 3.3,
        "boshuAvg30d": 249.7,
        "heikinAvg30d": 4.871
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 271.236,
        "saikou": 8.99,
        "heikin": 4.52,
        "boshuAvg30d": 260.1,
        "heikinAvg30d": 4.963
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 160.52,
        "saikou": 8.99,
        "heikin": 4.38,
        "boshuAvg30d": 260.1,
        "heikinAvg30d": 4.905
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 182.146,
        "saikou": 8.99,
        "heikin": 3.71,
        "boshuAvg30d": 260.1,
        "heikinAvg30d": 4.743
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 225.705,
        "saikou": 8.99,
        "heikin": 2.64,
        "boshuAvg30d": 259.1,
        "heikinAvg30d": 4.673
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 227.69,
        "saikou": 9.99,
        "heikin": 3.37,
        "boshuAvg30d": 257.2,
        "heikinAvg30d": 4.555
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 227.69,
        "saikou": 9.52,
        "heikin": 3.32,
        "boshuAvg30d": 258.1,
        "heikinAvg30d": 4.334
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 225.692,
        "saikou": 9.48,
        "heikin": 3.06,
        "boshuAvg30d": 256.2,
        "heikinAvg30d": 3.873
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 227.69,
        "saikou": 9.99,
        "heikin": 3.2,
        "boshuAvg30d": 256.2,
        "heikinAvg30d": 3.921
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 231.557,
        "saikou": 9.98,
        "heikin": 3.41,
        "boshuAvg30d": 256.2,
        "heikinAvg30d": 4.639
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 231.557,
        "saikou": 9.98,
        "heikin": 3.36,
        "boshuAvg30d": 256.2,
        "heikinAvg30d": 4.703
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 164.387,
        "saikou": 9.99,
        "heikin": 4.63,
        "boshuAvg30d": 256.2,
        "heikinAvg30d": 5.177
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 164.387,
        "saikou": 9.99,
        "heikin": 4.62,
        "boshuAvg30d": 256.2,
        "heikinAvg30d": 5.086
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 294.715,
        "saikou": 8.98,
        "heikin": 5.14,
        "boshuAvg30d": 256.1,
        "heikinAvg30d": 5.049
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 293.272,
        "saikou": 8.94,
        "heikin": 4.75,
        "boshuAvg30d": 256.1,
        "heikinAvg30d": 5.193
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 294.715,
        "saikou": 8.91,
        "heikin": 4.63,
        "boshuAvg30d": 256.1,
        "heikinAvg30d": 4.974
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 187.736,
        "saikou": 9,
        "heikin": 5.94,
        "boshuAvg30d": 256.1,
        "heikinAvg30d": 4.483
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9,
        "heikin": 5.91,
        "boshuAvg30d": 251.8,
        "heikinAvg30d": 4.788
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 119.124,
        "saikou": 9.09,
        "heikin": 6.07,
        "boshuAvg30d": 250.8,
        "heikinAvg30d": 4.682
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 9,
        "heikin": 5.8,
        "boshuAvg30d": 248.8,
        "heikinAvg30d": 4.581
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 9,
        "heikin": 5.84,
        "boshuAvg30d": 248.8,
        "heikinAvg30d": 4.583
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 164.387,
        "saikou": 9,
        "heikin": 4.12,
        "boshuAvg30d": 248.8,
        "heikinAvg30d": 4.577
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 187.998,
        "saikou": 8.49,
        "heikin": 2.71,
        "boshuAvg30d": 247.8,
        "heikinAvg30d": 3.929
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 147.481,
        "saikou": 9.4,
        "heikin": 4.76,
        "boshuAvg30d": 246.8,
        "heikinAvg30d": 4.404
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 162.402,
        "saikou": 8.99,
        "heikin": 3.65,
        "boshuAvg30d": 247.7,
        "heikinAvg30d": 4.475
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 187.998,
        "saikou": 7.87,
        "heikin": 2.4,
        "boshuAvg30d": 247.7,
        "heikinAvg30d": 4.205
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 227.224,
        "saikou": 2.98,
        "heikin": 1.03,
        "boshuAvg30d": 247.7,
        "heikinAvg30d": 4.236
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 214.875,
        "saikou": 2.98,
        "heikin": 1.06,
        "boshuAvg30d": 247.7,
        "heikinAvg30d": 4.178
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 184.131,
        "saikou": 8.99,
        "heikin": 3.41,
        "boshuAvg30d": 245.8,
        "heikinAvg30d": 4.176
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 184.131,
        "saikou": 2.98,
        "heikin": 1.24,
        "boshuAvg30d": 244.7,
        "heikinAvg30d": 4.049
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 223.357,
        "saikou": 4.31,
        "heikin": 1.07,
        "boshuAvg30d": 242.7,
        "heikinAvg30d": 3.592
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 116.26,
        "saikou": 2.29,
        "heikin": 0.97,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 2.34
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 100.099,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 2.336
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 89.817,
        "saikou": 2.17,
        "heikin": 1.78,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 2.272
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 91.162,
        "saikou": 2.33,
        "heikin": 2.2,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 1.979
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 49.629,
        "saikou": 2.29,
        "heikin": 2.05,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 2.011
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 51.429,
        "saikou": 2.29,
        "heikin": 2.25,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 2.243
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 58.688,
        "saikou": 2.29,
        "heikin": 2.28,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 2.526
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 60.452,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 119.7,
        "heikinAvg30d": 2.996
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 60.452,
        "saikou": 2,
        "heikin": 1.81,
        "boshuAvg30d": 119.7,
        "heikinAvg30d": 2.922
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 60.452,
        "saikou": 5.38,
        "heikin": 4.78,
        "boshuAvg30d": 119.7,
        "heikinAvg30d": 2.906
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 60.452,
        "saikou": 2,
        "heikin": 1.81,
        "boshuAvg30d": 119.7,
        "heikinAvg30d": 3.226
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 97.1,
        "saikou": 2.29,
        "heikin": 2.23,
        "boshuAvg30d": 119.7,
        "heikinAvg30d": 3.085
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 94.147,
        "saikou": 2.29,
        "heikin": 2.24,
        "boshuAvg30d": 121.7,
        "heikinAvg30d": 3.34
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 92.187,
        "saikou": 2.29,
        "heikin": 2.24,
        "boshuAvg30d": 122.7,
        "heikinAvg30d": 3.696
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 92.187,
        "saikou": 2.29,
        "heikin": 2.28,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 3.647
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 87.028,
        "saikou": 2.29,
        "heikin": 2.28,
        "boshuAvg30d": 123.8,
        "heikinAvg30d": 3.31
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 120.781,
        "saikou": 2.29,
        "heikin": 1.9,
        "boshuAvg30d": 123.8,
        "heikinAvg30d": 3.298
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 120.781,
        "saikou": 6.88,
        "heikin": 3.39,
        "boshuAvg30d": 123.8,
        "heikinAvg30d": 2.69
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 120.781,
        "saikou": 9.5,
        "heikin": 3.97,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 2.748
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 122.741,
        "saikou": 9.5,
        "heikin": 4.16,
        "boshuAvg30d": 127.9,
        "heikinAvg30d": 2.568
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 122.741,
        "saikou": 6.75,
        "heikin": 1.97,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 2.606
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 122.741,
        "saikou": 5.98,
        "heikin": 2.77,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 2.417
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 122.741,
        "saikou": 5.98,
        "heikin": 2.73,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 2.324
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 112.751,
        "saikou": 2.7,
        "heikin": 1.73,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 2.286
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 122.741,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 2.197
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 122.741,
        "saikou": 9.5,
        "heikin": 4.21,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 2.334
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 122.741,
        "saikou": 8.48,
        "heikin": 3,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 2.474
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 122.741,
        "saikou": 9.5,
        "heikin": 4.08,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 2.45
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 122.741,
        "saikou": 5.98,
        "heikin": 2.56,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 2.431
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 122.741,
        "saikou": 5.98,
        "heikin": 2.7,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 2.699
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 122.741,
        "saikou": 2.7,
        "heikin": 1.74,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 3.098
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 138.608,
        "saikou": 8.88,
        "heikin": 3.85,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 3.492
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 164.062,
        "saikou": 8.78,
        "heikin": 2.32,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 3.934
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 92.187,
        "saikou": 9.5,
        "heikin": 6.34,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 4.396
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 81.065,
        "saikou": 9.5,
        "heikin": 6.93,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 4.954
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 58.492,
        "saikou": 9.5,
        "heikin": 8.75,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 4.679
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 59.372,
        "saikou": 9.5,
        "heikin": 8.86,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 4.636
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 59.372,
        "saikou": 9.5,
        "heikin": 8.68,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 4.109
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 85.359,
        "saikou": 8.59,
        "heikin": 5.57,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 4.074
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 95.057,
        "saikou": 8.58,
        "heikin": 4.89,
        "boshuAvg30d": 125.8,
        "heikinAvg30d": 3.864
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 61.362,
        "saikou": 9.5,
        "heikin": 8.53,
        "boshuAvg30d": 124.8,
        "heikinAvg30d": 4.055
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 95.057,
        "saikou": 8.59,
        "heikin": 5.35,
        "boshuAvg30d": 124.8,
        "heikinAvg30d": 4.128
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 61.362,
        "saikou": 7.55,
        "heikin": 7.13,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 3.763
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 95.057,
        "saikou": 2.29,
        "heikin": 2.28,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 3.506
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 95.057,
        "saikou": 2.29,
        "heikin": 2.28,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 3.282
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 84.009,
        "saikou": 8.41,
        "heikin": 4.71,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 2.867
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 185.721,
        "saikou": 2.29,
        "heikin": 1.21,
        "boshuAvg30d": 121.8,
        "heikinAvg30d": 2.912
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 190.426,
        "saikou": 5.98,
        "heikin": 1.82,
        "boshuAvg30d": 121.8,
        "heikinAvg30d": 2.39
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.823
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.768
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.743
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.698
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.715
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.755
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.96,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.806
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 186.8,
        "saikou": 1.7,
        "heikin": 0.92,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.784
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.92,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.82
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 2.49,
        "heikin": 1.01,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.848
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 2.49,
        "heikin": 1.01,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.867
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.85
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 201.343,
        "saikou": 1.99,
        "heikin": 0.92,
        "boshuAvg30d": 42.2,
        "heikinAvg30d": 0.911
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 188.343,
        "saikou": 1.99,
        "heikin": 0.88,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.842
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 188.343,
        "saikou": 1.99,
        "heikin": 0.92,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 0.853
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 189.343,
        "saikou": 1.99,
        "heikin": 0.88,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.868
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 189.343,
        "saikou": 6.45,
        "heikin": 1.02,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.887
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 189.343,
        "saikou": 1.6,
        "heikin": 0.86,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.776
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.916
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.884
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.9
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.91
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.943
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.945
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.91,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.91
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 0.892
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.94,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.891
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 46.2,
        "heikinAvg30d": 0.902
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 43.2,
        "heikinAvg30d": 0.99
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 8,
        "heikin": 0.96,
        "boshuAvg30d": 43.2,
        "heikinAvg30d": 0.961
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 1.04,
        "boshuAvg30d": 43.2,
        "heikinAvg30d": 1.054
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 1.04,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 1.021
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 10,
        "heikin": 1.53,
        "boshuAvg30d": 42.2,
        "heikinAvg30d": 1.016
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 10,
        "heikin": 1.49,
        "boshuAvg30d": 42.1,
        "heikinAvg30d": 0.982
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 10,
        "heikin": 1.56,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.038
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 10,
        "heikin": 1.49,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.999
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 6.6,
        "heikin": 0.97,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.052
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.93,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.107
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.55,
        "heikin": 0.99,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.074
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 1,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.05
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 6.8,
        "heikin": 1.08,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.966
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.97,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.92
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.97,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.896
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 5.65,
        "heikin": 1.06,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.865
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.97,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.92
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 6.05,
        "heikin": 0.76,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.858
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 210.613,
        "saikou": 4.95,
        "heikin": 3.52,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.489
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 214.535,
        "saikou": 5.06,
        "heikin": 3.42,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.263
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 216.511,
        "saikou": 5.12,
        "heikin": 3.59,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.051
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 212.561,
        "saikou": 5.12,
        "heikin": 3.64,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 3.913
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 208.615,
        "saikou": 5.28,
        "heikin": 3.53,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 3.605
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 203.705,
        "saikou": 6.13,
        "heikin": 4.22,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 3.921
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 215.5,
        "saikou": 6.06,
        "heikin": 4.04,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.101
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 269.294,
        "saikou": 6.13,
        "heikin": 4.45,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.282
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 282.28,
        "saikou": 6.13,
        "heikin": 4.3,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.343
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 282.28,
        "saikou": 6.12,
        "heikin": 4.58,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.668
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 282.28,
        "saikou": 6.06,
        "heikin": 4.26,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.848
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 278.306,
        "saikou": 5.37,
        "heikin": 3.51,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.957
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 280.254,
        "saikou": 5.63,
        "heikin": 3.9,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.075
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 233.254,
        "saikou": 6.06,
        "heikin": 4.23,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 5.367
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 229.426,
        "saikou": 6.39,
        "heikin": 4.52,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 4.421
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 269.254,
        "saikou": 6.39,
        "heikin": 4.67,
        "boshuAvg30d": 174.2,
        "heikinAvg30d": 3.938
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 172.604,
        "saikou": 6.39,
        "heikin": 3.82,
        "boshuAvg30d": 174.2,
        "heikinAvg30d": 3.98
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 131.604,
        "saikou": 4.36,
        "heikin": 2.76,
        "boshuAvg30d": 174.2,
        "heikinAvg30d": 3.548
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 191.089,
        "saikou": 8.97,
        "heikin": 4.8,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 3.462
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 295.154,
        "saikou": 8.17,
        "heikin": 7.01,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 3.266
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 295.415,
        "saikou": 7.24,
        "heikin": 6.59,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 3.416
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 270.857,
        "saikou": 6.79,
        "heikin": 6.13,
        "boshuAvg30d": 180.2,
        "heikinAvg30d": 3.261
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 276.301,
        "saikou": 6.11,
        "heikin": 5.28,
        "boshuAvg30d": 180.2,
        "heikinAvg30d": 2.786
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 242.301,
        "saikou": 3.43,
        "heikin": 1.99,
        "boshuAvg30d": 180.2,
        "heikinAvg30d": 2.71
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 247.429,
        "saikou": 2.58,
        "heikin": 2.06,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 2.593
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 296.046,
        "saikou": 2.02,
        "heikin": 1.7,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 2.731
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 276.337,
        "saikou": 3.38,
        "heikin": 3.01,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 3.175
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 274.949,
        "saikou": 2.83,
        "heikin": 2.78,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 3.861
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 294.903,
        "saikou": 3.93,
        "heikin": 1.99,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 4.252
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 292.889,
        "saikou": 6.89,
        "heikin": 5.22,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 4.711
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 189.94,
        "saikou": 7.62,
        "heikin": 4.73,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 4.72
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 178.956,
        "saikou": 5,
        "heikin": 3.53,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 5.316
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 177.112,
        "saikou": 5.29,
        "heikin": 3.95,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 6.023
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 159,
        "saikou": 6.27,
        "heikin": 4.71,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 6.442
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 242.144,
        "saikou": 9.8,
        "heikin": 8.06,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.488
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 233.517,
        "saikou": 9.7,
        "heikin": 5.71,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 6.662
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 230.701,
        "saikou": 9.7,
        "heikin": 5.75,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.644
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 233.527,
        "saikou": 9.7,
        "heikin": 5.45,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.288
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 251.857,
        "saikou": 8.8,
        "heikin": 5.19,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.277
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 255.91,
        "saikou": 7.21,
        "heikin": 5.23,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.169
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 251.485,
        "saikou": 6.06,
        "heikin": 5.19,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 5.794
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 253.305,
        "saikou": 5.61,
        "heikin": 4.86,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 6.006
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 251.667,
        "saikou": 5.97,
        "heikin": 4.95,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.835
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 261.398,
        "saikou": 5.19,
        "heikin": 4.3,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.379
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 259.47,
        "saikou": 5.09,
        "heikin": 4.2,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.113
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 202.298,
        "saikou": 4.93,
        "heikin": 3.67,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.027
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 215.316,
        "saikou": 4.7,
        "heikin": 3.34,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 4.837
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 123.3,
        "saikou": 3.93,
        "heikin": 1.75,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 4.305
      }
    ]
  }
};
