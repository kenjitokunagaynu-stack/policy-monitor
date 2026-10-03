// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/03〜2026/10/02）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-03",
  "fetchedAt": "2026-10-03",
  "avgWindowLabel": "過去30日平均（2026/09/03〜2026/10/02）",
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
      "boshu": 1024,
      "ouatsu": 1536.439,
      "saikou": 7.23,
      "heikin": 2.83,
      "boshuAvg30d": 1278.2,
      "heikinAvg30d": 2.718
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1024,
      "ouatsu": 1566.997,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1278.2,
      "heikinAvg30d": 2.631
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1024,
      "ouatsu": 1631.851,
      "saikou": 8.1,
      "heikin": 2.68,
      "boshuAvg30d": 1278.2,
      "heikinAvg30d": 2.708
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1024,
      "ouatsu": 1633.656,
      "saikou": 8.89,
      "heikin": 2.85,
      "boshuAvg30d": 1278.2,
      "heikinAvg30d": 2.671
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1021,
      "ouatsu": 1658.451,
      "saikou": 9.57,
      "heikin": 2.81,
      "boshuAvg30d": 1273.4,
      "heikinAvg30d": 2.654
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1020,
      "ouatsu": 1609.084,
      "saikou": 8.89,
      "heikin": 2.99,
      "boshuAvg30d": 1272.4,
      "heikinAvg30d": 2.732
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1017,
      "ouatsu": 1677.661,
      "saikou": 8.89,
      "heikin": 3.14,
      "boshuAvg30d": 1289.4,
      "heikinAvg30d": 2.837
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1019,
      "ouatsu": 1692.611,
      "saikou": 8.07,
      "heikin": 3.54,
      "boshuAvg30d": 1290.4,
      "heikinAvg30d": 2.914
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1021,
      "ouatsu": 1797.793,
      "saikou": 8.07,
      "heikin": 3.53,
      "boshuAvg30d": 1293.4,
      "heikinAvg30d": 2.979
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1022,
      "ouatsu": 1765.154,
      "saikou": 7.88,
      "heikin": 3.4,
      "boshuAvg30d": 1293.4,
      "heikinAvg30d": 3.028
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1022,
      "ouatsu": 1719.348,
      "saikou": 8.43,
      "heikin": 3.78,
      "boshuAvg30d": 1293.4,
      "heikinAvg30d": 3.141
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1022,
      "ouatsu": 1736.717,
      "saikou": 8.73,
      "heikin": 3.72,
      "boshuAvg30d": 1293.4,
      "heikinAvg30d": 3.139
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1082,
      "ouatsu": 1787.804,
      "saikou": 10,
      "heikin": 3.98,
      "boshuAvg30d": 1359.0,
      "heikinAvg30d": 3.284
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1105,
      "ouatsu": 1795.482,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1380.2,
      "heikinAvg30d": 3.087
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1126,
      "ouatsu": 1400.182,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1403.0,
      "heikinAvg30d": 3.008
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1143,
      "ouatsu": 1517.317,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1421.0,
      "heikinAvg30d": 2.931
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1143,
      "ouatsu": 1718.684,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1421.9,
      "heikinAvg30d": 3.171
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1143,
      "ouatsu": 1588.807,
      "saikou": 10,
      "heikin": 2.46,
      "boshuAvg30d": 1421.9,
      "heikinAvg30d": 3.345
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1075,
      "ouatsu": 1606.903,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1387.5,
      "heikinAvg30d": 3.439
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1078,
      "ouatsu": 1637.556,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1391.4,
      "heikinAvg30d": 3.47
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1083,
      "ouatsu": 1514.176,
      "saikou": 10,
      "heikin": 2.3,
      "boshuAvg30d": 1399.2,
      "heikinAvg30d": 3.476
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1083,
      "ouatsu": 1462.465,
      "saikou": 10,
      "heikin": 2.31,
      "boshuAvg30d": 1399.2,
      "heikinAvg30d": 3.472
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1080,
      "ouatsu": 1525.686,
      "saikou": 10,
      "heikin": 2.28,
      "boshuAvg30d": 1396.2,
      "heikinAvg30d": 3.393
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1079,
      "ouatsu": 1517.873,
      "saikou": 10,
      "heikin": 2.25,
      "boshuAvg30d": 1395.2,
      "heikinAvg30d": 3.33
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1059,
      "ouatsu": 1494.289,
      "saikou": 10,
      "heikin": 2.13,
      "boshuAvg30d": 1384.5,
      "heikinAvg30d": 3.24
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1059,
      "ouatsu": 1490.485,
      "saikou": 10,
      "heikin": 2.37,
      "boshuAvg30d": 1384.5,
      "heikinAvg30d": 3.227
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1059,
      "ouatsu": 1515.992,
      "saikou": 10,
      "heikin": 2.34,
      "boshuAvg30d": 1381.5,
      "heikinAvg30d": 3.399
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1057,
      "ouatsu": 1519.852,
      "saikou": 10,
      "heikin": 2.13,
      "boshuAvg30d": 1376.1,
      "heikinAvg30d": 3.472
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1054,
      "ouatsu": 1586.477,
      "saikou": 10,
      "heikin": 2.07,
      "boshuAvg30d": 1371.2,
      "heikinAvg30d": 3.515
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1048,
      "ouatsu": 1476.586,
      "saikou": 10,
      "heikin": 2.09,
      "boshuAvg30d": 1364.3,
      "heikinAvg30d": 3.532
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1114,
      "ouatsu": 1580.018,
      "saikou": 10,
      "heikin": 1.63,
      "boshuAvg30d": 1401.8,
      "heikinAvg30d": 3.463
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1114,
      "ouatsu": 1388.572,
      "saikou": 10,
      "heikin": 2.21,
      "boshuAvg30d": 1401.8,
      "heikinAvg30d": 3.678
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1115,
      "ouatsu": 1464.498,
      "saikou": 10,
      "heikin": 2.33,
      "boshuAvg30d": 1401.9,
      "heikinAvg30d": 3.755
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1114,
      "ouatsu": 1507.587,
      "saikou": 9.9,
      "heikin": 3.08,
      "boshuAvg30d": 1399.9,
      "heikinAvg30d": 3.899
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1112,
      "ouatsu": 1414.056,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1391.9,
      "heikinAvg30d": 3.972
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1107,
      "ouatsu": 1538.425,
      "saikou": 8.16,
      "heikin": 3.54,
      "boshuAvg30d": 1387.5,
      "heikinAvg30d": 3.986
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1102,
      "ouatsu": 1699.469,
      "saikou": 8.16,
      "heikin": 3.01,
      "boshuAvg30d": 1379.7,
      "heikinAvg30d": 4.064
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1102,
      "ouatsu": 1840.433,
      "saikou": 8.24,
      "heikin": 3.04,
      "boshuAvg30d": 1379.7,
      "heikinAvg30d": 4.012
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1102,
      "ouatsu": 1841.8,
      "saikou": 7.87,
      "heikin": 3.27,
      "boshuAvg30d": 1380.2,
      "heikinAvg30d": 3.891
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1101,
      "ouatsu": 1879.356,
      "saikou": 7.77,
      "heikin": 3.08,
      "boshuAvg30d": 1379.2,
      "heikinAvg30d": 3.745
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1093,
      "ouatsu": 1802.513,
      "saikou": 8.51,
      "heikin": 2.93,
      "boshuAvg30d": 1374.0,
      "heikinAvg30d": 3.707
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1093,
      "ouatsu": 1767.361,
      "saikou": 9.31,
      "heikin": 3.05,
      "boshuAvg30d": 1370.3,
      "heikinAvg30d": 3.642
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1003,
      "ouatsu": 1707.227,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1283.2,
      "heikinAvg30d": 3.407
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1006,
      "ouatsu": 1687.635,
      "saikou": 10,
      "heikin": 3.53,
      "boshuAvg30d": 1286.2,
      "heikinAvg30d": 3.476
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1007,
      "ouatsu": 1580.162,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1287.6,
      "heikinAvg30d": 3.313
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1002,
      "ouatsu": 1699.816,
      "saikou": 8.37,
      "heikin": 3.41,
      "boshuAvg30d": 1280.7,
      "heikinAvg30d": 3.229
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 993,
      "ouatsu": 1695.265,
      "saikou": 7.34,
      "heikin": 2.98,
      "boshuAvg30d": 1273.6,
      "heikinAvg30d": 3.23
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 986,
      "ouatsu": 1646.996,
      "saikou": 8.19,
      "heikin": 2.74,
      "boshuAvg30d": 1265.7,
      "heikinAvg30d": 3.069
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
        "heikin": 1.62,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.053
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 194.458,
        "saikou": 1.01,
        "heikin": 0.91,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 0.96
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 153.908,
        "saikou": 3.85,
        "heikin": 1.16,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.06
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 151.958,
        "saikou": 1.01,
        "heikin": 0.98,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 0.959
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 213.508,
        "saikou": 1.07,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.243
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 191.958,
        "saikou": 3.5,
        "heikin": 1.27,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.416
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.266
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 152.958,
        "saikou": 1.63,
        "heikin": 1.5,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.089
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 242.208,
        "saikou": 1.63,
        "heikin": 1.36,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.345
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 240.258,
        "saikou": 1.84,
        "heikin": 1.53,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.128
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 193.908,
        "saikou": 1.64,
        "heikin": 1.49,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.26
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 240.258,
        "saikou": 1.27,
        "heikin": 1.16,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.415
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 193.908,
        "saikou": 3.8,
        "heikin": 1.76,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.811
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 214.258,
        "saikou": 6.87,
        "heikin": 1.84,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.442
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.289
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 230.958,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.325
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 0.897
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 198.958,
        "saikou": 1,
        "heikin": 0.99,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 0.974
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 0.913
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 0.94
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 199.108,
        "saikou": 1.01,
        "heikin": 0.99,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 0.992
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 148.858,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 1.013
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 197.208,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 0.914
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 195.258,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 0.942
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.021
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 0.966
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 203.208,
        "saikou": 8,
        "heikin": 1.65,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.282
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.241
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 237.208,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.223
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 186.958,
        "saikou": 9.8,
        "heikin": 2.4,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.317
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 226.908,
        "saikou": 1.01,
        "heikin": 0.73,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.086
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 192.458,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.82
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 170.908,
        "saikou": 7.95,
        "heikin": 1.98,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.223
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 200.258,
        "saikou": 2.21,
        "heikin": 1.92,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.268
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 89.908,
        "saikou": 2.22,
        "heikin": 2.17,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.322
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 134.29,
        "saikou": 2.4,
        "heikin": 2.14,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.195
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 85.99,
        "saikou": 2.51,
        "heikin": 2.51,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.124
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 159.29,
        "saikou": 2.51,
        "heikin": 2.23,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.338
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 152.958,
        "saikou": 2.22,
        "heikin": 2.1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.788
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 195.458,
        "saikou": 1.78,
        "heikin": 1.5,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.716
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 152.958,
        "saikou": 1.45,
        "heikin": 1.38,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.792
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 152.958,
        "saikou": 1.09,
        "heikin": 1.07,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.626
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.256
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 152.958,
        "saikou": 4.16,
        "heikin": 1.4,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.719
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 180.108,
        "saikou": 3.7,
        "heikin": 1.53,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.267
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 191.958,
        "saikou": 4.02,
        "heikin": 1.91,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.31
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 242.208,
        "saikou": 1.95,
        "heikin": 1.61,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.217
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 201.258,
        "saikou": 1.58,
        "heikin": 1.34,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.301
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 95.109,
        "saikou": 7.23,
        "heikin": 4.68,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 7.702
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 95.109,
        "saikou": 10,
        "heikin": 5.3,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 7.939
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 114.987,
        "saikou": 8.1,
        "heikin": 5.36,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 8.164
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 114.987,
        "saikou": 8.89,
        "heikin": 5.67,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 8.192
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 112.989,
        "saikou": 9.56,
        "heikin": 5.92,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 8.222
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 90.989,
        "saikou": 8.89,
        "heikin": 6.49,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 8.245
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 105.987,
        "saikou": 8.89,
        "heikin": 6.55,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 8.24
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 107.487,
        "saikou": 8.07,
        "heikin": 6.32,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 8.207
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 109.486,
        "saikou": 8.07,
        "heikin": 6.34,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 8.204
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 109.486,
        "saikou": 7.58,
        "heikin": 6,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 8.193
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 85.486,
        "saikou": 8.1,
        "heikin": 6.77,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 8.163
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 85.486,
        "saikou": 8.19,
        "heikin": 7.27,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 8.168
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 8.241
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 107.986,
        "saikou": 10,
        "heikin": 8.6,
        "boshuAvg30d": 184.1,
        "heikinAvg30d": 8.314
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 8.76,
        "boshuAvg30d": 189.9,
        "heikinAvg30d": 8.412
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 129.986,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 8.428
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 131.486,
        "saikou": 10,
        "heikin": 9.1,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 8.636
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 129.986,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 8.563
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 111.441,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 8.25
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 113.437,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 8.259
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 113.437,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 8.248
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 113.437,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 8.259
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 113.437,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 8.272
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 111.472,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 8.293
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 107.676,
        "saikou": 10,
        "heikin": 8.78,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 8.447
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 109.641,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 8.405
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 111.507,
        "saikou": 10,
        "heikin": 8.77,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 8.149
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 111.507,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 8.127
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 108.161,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 8.133
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 109.607,
        "saikou": 10,
        "heikin": 6.98,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 7.706
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 88.157,
        "saikou": 10,
        "heikin": 6.58,
        "boshuAvg30d": 189.9,
        "heikinAvg30d": 8.133
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 63.607,
        "saikou": 10,
        "heikin": 5.28,
        "boshuAvg30d": 189.9,
        "heikinAvg30d": 7.623
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 91.437,
        "saikou": 10,
        "heikin": 6.12,
        "boshuAvg30d": 189.9,
        "heikinAvg30d": 7.676
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 89.937,
        "saikou": 9.9,
        "heikin": 5.68,
        "boshuAvg30d": 189.0,
        "heikinAvg30d": 7.47
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 85.611,
        "saikou": 10,
        "heikin": 5.01,
        "boshuAvg30d": 187.1,
        "heikinAvg30d": 7.378
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 84.111,
        "saikou": 5,
        "heikin": 3.85,
        "boshuAvg30d": 185.1,
        "heikinAvg30d": 7.299
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 107.521,
        "saikou": 6.12,
        "heikin": 4.16,
        "boshuAvg30d": 184.1,
        "heikinAvg30d": 7.421
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 102.771,
        "saikou": 6.12,
        "heikin": 3.9,
        "boshuAvg30d": 184.1,
        "heikinAvg30d": 7.41
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 108.136,
        "saikou": 6.79,
        "heikin": 4.28,
        "boshuAvg30d": 184.1,
        "heikinAvg30d": 7.52
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 108.136,
        "saikou": 7.77,
        "heikin": 4.6,
        "boshuAvg30d": 183.2,
        "heikinAvg30d": 7.645
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 108.136,
        "saikou": 8.51,
        "heikin": 4.84,
        "boshuAvg30d": 183.1,
        "heikinAvg30d": 7.7
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 109.486,
        "saikou": 9.31,
        "heikin": 5.42,
        "boshuAvg30d": 183.1,
        "heikinAvg30d": 7.689
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 85.486,
        "saikou": 9.95,
        "heikin": 5.73,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 7.824
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 109.486,
        "saikou": 9.95,
        "heikin": 6.19,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 7.962
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 6.23,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 7.975
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 109.486,
        "saikou": 8.37,
        "heikin": 5.77,
        "boshuAvg30d": 97.9,
        "heikinAvg30d": 7.951
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 109.486,
        "saikou": 7.34,
        "heikin": 5.15,
        "boshuAvg30d": 96.9,
        "heikinAvg30d": 8.095
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 107.986,
        "saikou": 8.19,
        "heikin": 5.66,
        "boshuAvg30d": 95.9,
        "heikinAvg30d": 8.239
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 368.792,
        "saikou": 6.58,
        "heikin": 4.93,
        "boshuAvg30d": 460.3,
        "heikinAvg30d": 3.464
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 355.972,
        "saikou": 6.79,
        "heikin": 5.14,
        "boshuAvg30d": 460.3,
        "heikinAvg30d": 3.397
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 393.246,
        "saikou": 7.72,
        "heikin": 4.86,
        "boshuAvg30d": 460.3,
        "heikinAvg30d": 3.276
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 384.194,
        "saikou": 8.73,
        "heikin": 5.36,
        "boshuAvg30d": 460.3,
        "heikinAvg30d": 3.279
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 373.168,
        "saikou": 9.57,
        "heikin": 5.08,
        "boshuAvg30d": 458.4,
        "heikinAvg30d": 3.215
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 372.168,
        "saikou": 8.73,
        "heikin": 5.24,
        "boshuAvg30d": 458.3,
        "heikinAvg30d": 3.239
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 383.14,
        "saikou": 8.73,
        "heikin": 5.24,
        "boshuAvg30d": 457.2,
        "heikinAvg30d": 3.219
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 379.7,
        "saikou": 7.7,
        "heikin": 5.02,
        "boshuAvg30d": 458.3,
        "heikinAvg30d": 3.383
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 381.22,
        "saikou": 7.7,
        "heikin": 5.06,
        "boshuAvg30d": 459.2,
        "heikinAvg30d": 3.418
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 370.883,
        "saikou": 7.08,
        "heikin": 4.64,
        "boshuAvg30d": 459.3,
        "heikinAvg30d": 3.44
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 371.885,
        "saikou": 7.68,
        "heikin": 4.77,
        "boshuAvg30d": 459.3,
        "heikinAvg30d": 3.465
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 367.983,
        "saikou": 8.73,
        "heikin": 4.76,
        "boshuAvg30d": 459.3,
        "heikinAvg30d": 3.501
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 375.787,
        "saikou": 10,
        "heikin": 4.8,
        "boshuAvg30d": 480.2,
        "heikinAvg30d": 3.835
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 375.787,
        "saikou": 10,
        "heikin": 5.06,
        "boshuAvg30d": 488.2,
        "heikinAvg30d": 3.793
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 273.675,
        "saikou": 7.9,
        "heikin": 3.23,
        "boshuAvg30d": 493.2,
        "heikinAvg30d": 3.805
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 273.681,
        "saikou": 8.2,
        "heikin": 3.54,
        "boshuAvg30d": 498.2,
        "heikinAvg30d": 3.788
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 434.847,
        "saikou": 10,
        "heikin": 5.21,
        "boshuAvg30d": 498.2,
        "heikinAvg30d": 4.176
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 275.647,
        "saikou": 7.9,
        "heikin": 3.46,
        "boshuAvg30d": 498.2,
        "heikinAvg30d": 4.289
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 363.309,
        "saikou": 10,
        "heikin": 5.77,
        "boshuAvg30d": 495.2,
        "heikinAvg30d": 4.381
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 375.793,
        "saikou": 10,
        "heikin": 5.56,
        "boshuAvg30d": 495.2,
        "heikinAvg30d": 4.406
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 253.67,
        "saikou": 8.75,
        "heikin": 3.61,
        "boshuAvg30d": 495.2,
        "heikinAvg30d": 4.259
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 256.182,
        "saikou": 8.72,
        "heikin": 3.6,
        "boshuAvg30d": 494.2,
        "heikinAvg30d": 4.18
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 275.247,
        "saikou": 8.49,
        "heikin": 3.48,
        "boshuAvg30d": 491.3,
        "heikinAvg30d": 4.189
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 273.347,
        "saikou": 8.49,
        "heikin": 3.44,
        "boshuAvg30d": 491.3,
        "heikinAvg30d": 4.178
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 263.351,
        "saikou": 8.5,
        "heikin": 3.42,
        "boshuAvg30d": 490.2,
        "heikinAvg30d": 3.98
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 265.347,
        "saikou": 8.46,
        "heikin": 3.4,
        "boshuAvg30d": 490.2,
        "heikinAvg30d": 4.045
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 265.347,
        "saikou": 8.48,
        "heikin": 3.36,
        "boshuAvg30d": 487.2,
        "heikinAvg30d": 4.141
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 265.747,
        "saikou": 8.44,
        "heikin": 3.35,
        "boshuAvg30d": 486.6,
        "heikinAvg30d": 4.251
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 265.747,
        "saikou": 6.59,
        "heikin": 2.61,
        "boshuAvg30d": 485.6,
        "heikinAvg30d": 4.36
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 263.762,
        "saikou": 6.5,
        "heikin": 2.36,
        "boshuAvg30d": 485.5,
        "heikinAvg30d": 4.17
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 261.875,
        "saikou": 6.5,
        "heikin": 2.43,
        "boshuAvg30d": 484.4,
        "heikinAvg30d": 4.117
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 263.426,
        "saikou": 6.5,
        "heikin": 1.9,
        "boshuAvg30d": 484.4,
        "heikinAvg30d": 4.04
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 263.426,
        "saikou": 6.5,
        "heikin": 2.5,
        "boshuAvg30d": 484.4,
        "heikinAvg30d": 4.212
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 273.996,
        "saikou": 7.92,
        "heikin": 3.9,
        "boshuAvg30d": 484.4,
        "heikinAvg30d": 4.339
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 273.828,
        "saikou": 6.5,
        "heikin": 3.35,
        "boshuAvg30d": 480.2,
        "heikinAvg30d": 4.264
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 459.284,
        "saikou": 6.11,
        "heikin": 3.64,
        "boshuAvg30d": 479.9,
        "heikinAvg30d": 4.232
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 509.09,
        "saikou": 5.63,
        "heikin": 3.22,
        "boshuAvg30d": 481.9,
        "heikinAvg30d": 4.392
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 509.09,
        "saikou": 5.24,
        "heikin": 2.92,
        "boshuAvg30d": 481.9,
        "heikinAvg30d": 4.301
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 465.178,
        "saikou": 6.09,
        "heikin": 3.64,
        "boshuAvg30d": 482.5,
        "heikinAvg30d": 4.322
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 454.863,
        "saikou": 7.33,
        "heikin": 3.51,
        "boshuAvg30d": 482.5,
        "heikinAvg30d": 4.243
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 449.193,
        "saikou": 8.27,
        "heikin": 3.77,
        "boshuAvg30d": 480.5,
        "heikinAvg30d": 4.204
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 431.59,
        "saikou": 9.3,
        "heikin": 3.94,
        "boshuAvg30d": 480.5,
        "heikinAvg30d": 4.208
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 410.854,
        "saikou": 10,
        "heikin": 4.62,
        "boshuAvg30d": 479.6,
        "heikinAvg30d": 3.984
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 380.854,
        "saikou": 10,
        "heikin": 5.36,
        "boshuAvg30d": 479.6,
        "heikinAvg30d": 4.119
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 223.639,
        "saikou": 6.58,
        "heikin": 3.85,
        "boshuAvg30d": 479.9,
        "heikinAvg30d": 3.83
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 310.74,
        "saikou": 8.09,
        "heikin": 5,
        "boshuAvg30d": 477.9,
        "heikinAvg30d": 3.97
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 340.703,
        "saikou": 6.79,
        "heikin": 4.86,
        "boshuAvg30d": 475.9,
        "heikinAvg30d": 4.047
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 316.521,
        "saikou": 7.85,
        "heikin": 4.63,
        "boshuAvg30d": 474.9,
        "heikinAvg30d": 4.035
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 170.083,
        "saikou": 2,
        "heikin": 1.55,
        "boshuAvg30d": 71.6,
        "heikinAvg30d": 1.889
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 166.323,
        "saikou": 2,
        "heikin": 1.55,
        "boshuAvg30d": 71.6,
        "heikinAvg30d": 1.784
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 190.019,
        "saikou": 2,
        "heikin": 1.59,
        "boshuAvg30d": 71.6,
        "heikinAvg30d": 1.831
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 186.18,
        "saikou": 2.05,
        "heikin": 1.84,
        "boshuAvg30d": 71.6,
        "heikinAvg30d": 1.927
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 168.295,
        "saikou": 2.12,
        "heikin": 1.88,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 1.856
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 178.004,
        "saikou": 2.33,
        "heikin": 1.91,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 1.914
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 219.889,
        "saikou": 2.23,
        "heikin": 1.83,
        "boshuAvg30d": 70.5,
        "heikinAvg30d": 1.877
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 216.049,
        "saikou": 1.99,
        "heikin": 1.56,
        "boshuAvg30d": 70.5,
        "heikinAvg30d": 2.047
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 221.749,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 2.065
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 221.749,
        "saikou": 2,
        "heikin": 1.89,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 1.984
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 223.739,
        "saikou": 2.09,
        "heikin": 1.93,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 2.089
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 203.96,
        "saikou": 2.04,
        "heikin": 1.92,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 2.078
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 203.532,
        "saikou": 2.27,
        "heikin": 2.06,
        "boshuAvg30d": 80.5,
        "heikinAvg30d": 2.124
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 185.311,
        "saikou": 2.18,
        "heikin": 1.52,
        "boshuAvg30d": 83.6,
        "heikinAvg30d": 2.082
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 183.451,
        "saikou": 7.14,
        "heikin": 2.56,
        "boshuAvg30d": 86.6,
        "heikinAvg30d": 2.121
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 121.622,
        "saikou": 2.37,
        "heikin": 1.73,
        "boshuAvg30d": 88.6,
        "heikinAvg30d": 2.007
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 120.16,
        "saikou": 3.49,
        "heikin": 2.08,
        "boshuAvg30d": 88.6,
        "heikinAvg30d": 2.279
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 131.997,
        "saikou": 3.48,
        "heikin": 1.98,
        "boshuAvg30d": 88.6,
        "heikinAvg30d": 2.479
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 133.837,
        "saikou": 3.49,
        "heikin": 2.4,
        "boshuAvg30d": 92.7,
        "heikinAvg30d": 2.803
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 135.827,
        "saikou": 3.6,
        "heikin": 2.62,
        "boshuAvg30d": 92.7,
        "heikinAvg30d": 2.881
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 131.851,
        "saikou": 4.48,
        "heikin": 2.88,
        "boshuAvg30d": 93.6,
        "heikinAvg30d": 3.099
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 131.851,
        "saikou": 4.48,
        "heikin": 3.06,
        "boshuAvg30d": 92.7,
        "heikinAvg30d": 3.21
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 135.827,
        "saikou": 4.48,
        "heikin": 2.83,
        "boshuAvg30d": 91.7,
        "heikinAvg30d": 2.998
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 135.827,
        "saikou": 4.48,
        "heikin": 2.83,
        "boshuAvg30d": 90.7,
        "heikinAvg30d": 2.738
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 133.828,
        "saikou": 3.48,
        "heikin": 2.43,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 2.76
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 133.828,
        "saikou": 4.48,
        "heikin": 2.7,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 2.682
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 135.827,
        "saikou": 4.48,
        "heikin": 2.7,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 2.646
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 133.937,
        "saikou": 4.48,
        "heikin": 2.63,
        "boshuAvg30d": 87.5,
        "heikinAvg30d": 2.63
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 135.827,
        "saikou": 4.48,
        "heikin": 2.67,
        "boshuAvg30d": 86.6,
        "heikinAvg30d": 2.827
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 154.048,
        "saikou": 4.48,
        "heikin": 2.39,
        "boshuAvg30d": 86.6,
        "heikinAvg30d": 2.827
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 189.8,
        "saikou": 3.49,
        "heikin": 2.22,
        "boshuAvg30d": 85.5,
        "heikinAvg30d": 2.641
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 173.079,
        "saikou": 5.1,
        "heikin": 2.54,
        "boshuAvg30d": 85.5,
        "heikinAvg30d": 2.604
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 151.27,
        "saikou": 2.77,
        "heikin": 2.54,
        "boshuAvg30d": 85.5,
        "heikinAvg30d": 2.612
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 177.27,
        "saikou": 2.79,
        "heikin": 2.44,
        "boshuAvg30d": 85.5,
        "heikinAvg30d": 2.748
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 227.549,
        "saikou": 3.05,
        "heikin": 2.7,
        "boshuAvg30d": 85.5,
        "heikinAvg30d": 2.609
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 137.924,
        "saikou": 3.58,
        "heikin": 2.66,
        "boshuAvg30d": 85.5,
        "heikinAvg30d": 2.462
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 279.923,
        "saikou": 2.69,
        "heikin": 1.71,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 2.38
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 346.509,
        "saikou": 2.49,
        "heikin": 1.82,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 2.3
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 348.508,
        "saikou": 2.42,
        "heikin": 2.19,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 2.052
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 348.508,
        "saikou": 2.5,
        "heikin": 1.64,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 2.082
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 324.452,
        "saikou": 2.42,
        "heikin": 1.93,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 2.216
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 281.826,
        "saikou": 2.54,
        "heikin": 2.23,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 2.208
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 240.194,
        "saikou": 2.43,
        "heikin": 1.94,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 2.042
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 252.194,
        "saikou": 2.31,
        "heikin": 1.83,
        "boshuAvg30d": 84.5,
        "heikinAvg30d": 2.182
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 255.194,
        "saikou": 2.48,
        "heikin": 1.89,
        "boshuAvg30d": 84.5,
        "heikinAvg30d": 2.251
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 262.003,
        "saikou": 2.3,
        "heikin": 1.96,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 2.208
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 242.177,
        "saikou": 2.43,
        "heikin": 1.85,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 2.203
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 240.677,
        "saikou": 2.25,
        "heikin": 1.99,
        "boshuAvg30d": 79.5,
        "heikinAvg30d": 2.195
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 80.93,
        "saikou": 1.55,
        "heikin": 0.42,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 0.982
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 2,
        "heikin": 0.72,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.038
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.7,
        "heikin": 0.45,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.05
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.85,
        "heikin": 0.42,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.146
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.45,
        "heikin": 0.42,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.347
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 64.456,
        "saikou": 1.5,
        "heikin": 0.46,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.017
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.2,
        "heikin": 0.56,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.188
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.95,
        "heikin": 0.53,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.421
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.278
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 41.36,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.389
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2,
        "heikin": 0.66,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.601
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2,
        "heikin": 0.66,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 1.536
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 2,
        "heikin": 1.02,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.734
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 82.928,
        "saikou": 1.1,
        "heikin": 0.83,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.493
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.504
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.58
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 4.17,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.669
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 2.91,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 2.223
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.4,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.648
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.04,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.533
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.62,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 3.359
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 5.21,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.66
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 3.545
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 3.327
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.72,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.219
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.43,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.3
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.94,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.114
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.8,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.212
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.53,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.062
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.53,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.76
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.907
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.8,
        "heikin": 5.7,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.621
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 54.31,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.168
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 2.75,
        "heikin": 0.79,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.486
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.694
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 17.86,
        "saikou": 4,
        "heikin": 1.15,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 3.408
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 2.4,
        "heikin": 0.73,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.732
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.422
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 46.162,
        "saikou": 2,
        "heikin": 0.85,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.856
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 1.75,
        "heikin": 0.52,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.065
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 47.928,
        "saikou": 2.2,
        "heikin": 0.53,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.14
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 47.586,
        "saikou": 0.8,
        "heikin": 0.62,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 2.21
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.25,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.939
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.25,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.933
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.876
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 2.3,
        "heikin": 0.57,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.657
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 43.356,
        "saikou": 2.3,
        "heikin": 0.88,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.576
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 47.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.305
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 87.6,
        "saikou": 1.98,
        "heikin": 1.31,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.168
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 107.59,
        "saikou": 1.99,
        "heikin": 0.98,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 1.841
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 113.507,
        "saikou": 1.98,
        "heikin": 1.03,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 1.818
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 110.972,
        "saikou": 1.73,
        "heikin": 0.98,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 1.748
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 107.074,
        "saikou": 1.75,
        "heikin": 0.97,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 1.735
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 109.072,
        "saikou": 1.78,
        "heikin": 0.99,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 1.838
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 118.859,
        "saikou": 2,
        "heikin": 1.28,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 2.004
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 118.859,
        "saikou": 2,
        "heikin": 1.43,
        "boshuAvg30d": 130.7,
        "heikinAvg30d": 2.097
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 2,
        "heikin": 1.3,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.051
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 2,
        "heikin": 1.53,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.112
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 2.1,
        "heikin": 1.6,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.066
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 2.06,
        "heikin": 1.54,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 1.861
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 147.5,
        "saikou": 2.1,
        "heikin": 1.34,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.022
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 118.859,
        "saikou": 2.1,
        "heikin": 1.67,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 1.946
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 99.245,
        "saikou": 2.8,
        "heikin": 2.12,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.105
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 116.043,
        "saikou": 2.27,
        "heikin": 1.72,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 2.097
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 135.037,
        "saikou": 1.47,
        "heikin": 0.42,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 2.362
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 145.228,
        "saikou": 3.95,
        "heikin": 1.83,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 2.542
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 145.228,
        "saikou": 3.97,
        "heikin": 1.96,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 2.651
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 145.228,
        "saikou": 3.95,
        "heikin": 1.96,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 2.728
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 143.243,
        "saikou": 5.95,
        "heikin": 2.27,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 3.024
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 143.243,
        "saikou": 5.95,
        "heikin": 2.15,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 3.043
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 125.157,
        "saikou": 5.95,
        "heikin": 2.61,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 2.915
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 125.157,
        "saikou": 3.95,
        "heikin": 2.32,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 2.606
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 123.714,
        "saikou": 2.7,
        "heikin": 1.8,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.645
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 119.847,
        "saikou": 5.95,
        "heikin": 2.5,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.392
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 121.29,
        "saikou": 5.95,
        "heikin": 2.6,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.785
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 140.904,
        "saikou": 3.95,
        "heikin": 1.99,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 2.64
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 140.904,
        "saikou": 2.3,
        "heikin": 1.38,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.686
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 97.345,
        "saikou": 1.47,
        "heikin": 1.47,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.633
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 99.245,
        "saikou": 1.47,
        "heikin": 1.47,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.554
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 103.112,
        "saikou": 2.7,
        "heikin": 2.31,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.712
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 103.112,
        "saikou": 2.49,
        "heikin": 2.25,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.648
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 101.669,
        "saikou": 2.79,
        "heikin": 2.37,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.728
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 101.669,
        "saikou": 2.79,
        "heikin": 2.37,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.815
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 103.112,
        "saikou": 4.94,
        "heikin": 2.87,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 2.743
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 101.152,
        "saikou": 2.65,
        "heikin": 2.22,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.553
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 101.152,
        "saikou": 2.3,
        "heikin": 2.19,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.534
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 103.112,
        "saikou": 2.3,
        "heikin": 2.19,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.579
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 103.112,
        "saikou": 2.5,
        "heikin": 2.29,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.497
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 101.127,
        "saikou": 2.3,
        "heikin": 2.22,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 2.466
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 101.127,
        "saikou": 2.44,
        "heikin": 2.24,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 2.454
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 122.726,
        "saikou": 2.45,
        "heikin": 1.88,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 2.399
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 103.112,
        "saikou": 2.34,
        "heikin": 2.2,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 2.316
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 120.728,
        "saikou": 2.41,
        "heikin": 1.78,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 2.393
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 103.112,
        "saikou": 2.3,
        "heikin": 2.05,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.325
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 103.112,
        "saikou": 2.44,
        "heikin": 2.06,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.018
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 86.669,
        "saikou": 2.19,
        "heikin": 1.87,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 2.109
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 235.21,
        "saikou": 2,
        "heikin": 1.34,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.802
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 213.91,
        "saikou": 2.29,
        "heikin": 2.07,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.841
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 219.817,
        "saikou": 2.29,
        "heikin": 1.45,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.976
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 239,
        "saikou": 2,
        "heikin": 1.36,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.897
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 239,
        "saikou": 2,
        "heikin": 1.3,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.842
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 239,
        "saikou": 2,
        "heikin": 1.36,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.974
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 234.432,
        "saikou": 2.38,
        "heikin": 2.17,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.134
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 244.783,
        "saikou": 1.98,
        "heikin": 1.35,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.315
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 224.125,
        "saikou": 2,
        "heikin": 1.34,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.243
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 222.325,
        "saikou": 2.29,
        "heikin": 1.49,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.524
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 222.325,
        "saikou": 2.38,
        "heikin": 2.23,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.81
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 222.325,
        "saikou": 2.38,
        "heikin": 2.22,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.777
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 244.721,
        "saikou": 4.55,
        "heikin": 3.6,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 3.035
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 206.411,
        "saikou": 2.38,
        "heikin": 2.25,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 2.278
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 230.497,
        "saikou": 2.4,
        "heikin": 1.21,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 1.969
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 241.635,
        "saikou": 2.29,
        "heikin": 0.97,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 1.718
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 279.228,
        "saikou": 1.56,
        "heikin": 0.49,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 1.759
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 240.121,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.355
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 280.16,
        "saikou": 2.95,
        "heikin": 0.91,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.443
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 260.345,
        "saikou": 4,
        "heikin": 0.88,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.387
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 260.345,
        "saikou": 4,
        "heikin": 0.87,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 2.562
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 260.345,
        "saikou": 4,
        "heikin": 0.87,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.476
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 260.345,
        "saikou": 4,
        "heikin": 0.89,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.424
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 260.345,
        "saikou": 4,
        "heikin": 0.89,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.379
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 260.345,
        "saikou": 2.7,
        "heikin": 0.78,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.037
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 260.345,
        "saikou": 2.29,
        "heikin": 0.77,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.997
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 260.345,
        "saikou": 2.29,
        "heikin": 0.77,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.298
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 260.345,
        "saikou": 2.29,
        "heikin": 0.77,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.286
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 278.662,
        "saikou": 2.29,
        "heikin": 0.89,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.28
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 242.912,
        "saikou": 2.29,
        "heikin": 0.87,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.479
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 292.079,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.696
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 242.912,
        "saikou": 2.7,
        "heikin": 1.49,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.195
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 241.635,
        "saikou": 2.49,
        "heikin": 1.58,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.03
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 208.211,
        "saikou": 2.7,
        "heikin": 1.55,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.551
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 193.25,
        "saikou": 2.7,
        "heikin": 2.41,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.01
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 190.383,
        "saikou": 3.7,
        "heikin": 2.49,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.29
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 188.393,
        "saikou": 2.5,
        "heikin": 1.39,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.567
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 188.393,
        "saikou": 2.72,
        "heikin": 2.47,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.502
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 204.307,
        "saikou": 2.71,
        "heikin": 2.43,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.011
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 206.297,
        "saikou": 2.72,
        "heikin": 2.43,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.75
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 206.297,
        "saikou": 2.35,
        "heikin": 1.43,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.506
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 239.992,
        "saikou": 2.38,
        "heikin": 2.18,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.146
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 201.509,
        "saikou": 3.1,
        "heikin": 2.5,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.213
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 207.831,
        "saikou": 2.73,
        "heikin": 2.32,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.139
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 207.831,
        "saikou": 4.55,
        "heikin": 3.16,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.948
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 222.325,
        "saikou": 2.65,
        "heikin": 2.41,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.623
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 222.325,
        "saikou": 2.65,
        "heikin": 2.41,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.643
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 254.059,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 1.872
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.843
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.859
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.875
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.863
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.853
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.859
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 207.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.97
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 195.93,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.938
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.957
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.994
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.976
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.923
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.003
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.98
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.015
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.922
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 210.473,
        "saikou": 1.7,
        "heikin": 0.5,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.908
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.5,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.922
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.95
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.949
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.964
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.94
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.33,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.949
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.33,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.951
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.119
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.085
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.02
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.036
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.995
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 1.7,
        "heikin": 0.88,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.935
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.962
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 156.473,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.968
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.97
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.964
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.991
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.022
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.028
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.042
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.071
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 168.473,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.06
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.03
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.039
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.724
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.737
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.759
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.766
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.782
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.853
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 134.334,
        "saikou": 6.09,
        "heikin": 4.29,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 3.885
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 140.234,
        "saikou": 5.59,
        "heikin": 3.97,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 3.314
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 152.966,
        "saikou": 4.84,
        "heikin": 3.51,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 2.982
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 152.964,
        "saikou": 5.47,
        "heikin": 3.89,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 2.799
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 151.016,
        "saikou": 5.14,
        "heikin": 3.72,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 2.69
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 152.964,
        "saikou": 5.53,
        "heikin": 3.86,
        "boshuAvg30d": 163.4,
        "heikinAvg30d": 2.898
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 181.745,
        "saikou": 5.5,
        "heikin": 3.73,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.133
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 253.917,
        "saikou": 7.38,
        "heikin": 5.88,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.291
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 292.745,
        "saikou": 7.82,
        "heikin": 6.4,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.516
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 255.761,
        "saikou": 7.88,
        "heikin": 6.52,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.834
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 295.745,
        "saikou": 8.43,
        "heikin": 6.66,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 4.022
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 290.445,
        "saikou": 8.25,
        "heikin": 6.51,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.842
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 302.469,
        "saikou": 7.74,
        "heikin": 5.84,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 3.574
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 293.469,
        "saikou": 3.38,
        "heikin": 2.97,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 3.197
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 102.469,
        "saikou": 2.38,
        "heikin": 2.04,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 2.861
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 188.991,
        "saikou": 2.38,
        "heikin": 1.13,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 3.015
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 248.617,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 3.358
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 252.469,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 3.876
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 237.619,
        "saikou": 1.98,
        "heikin": 0.6,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 3.896
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 239.567,
        "saikou": 1.98,
        "heikin": 0.6,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 3.84
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 232.121,
        "saikou": 2.14,
        "heikin": 0.64,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 3.7
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 228.148,
        "saikou": 2.12,
        "heikin": 0.65,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 3.837
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 238.064,
        "saikou": 2.34,
        "heikin": 0.6,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 3.788
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 236.066,
        "saikou": 2.3,
        "heikin": 0.62,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 3.775
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 236.066,
        "saikou": 2.34,
        "heikin": 0.59,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 3.323
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 234.118,
        "saikou": 1.98,
        "heikin": 0.57,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 3.441
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 238.067,
        "saikou": 2.15,
        "heikin": 0.58,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 3.823
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 240.053,
        "saikou": 2.08,
        "heikin": 0.59,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 4.346
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 239.567,
        "saikou": 3.03,
        "heikin": 0.62,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 4.614
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 241.553,
        "saikou": 2.39,
        "heikin": 0.53,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 4.828
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 241.553,
        "saikou": 1.38,
        "heikin": 0.43,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.01
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 189.577,
        "saikou": 4.3,
        "heikin": 3.45,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.692
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 211.927,
        "saikou": 2.59,
        "heikin": 2.1,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.772
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 256.845,
        "saikou": 6.09,
        "heikin": 4.41,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.93
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 242.84,
        "saikou": 7.35,
        "heikin": 5.88,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 5.765
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 257.988,
        "saikou": 8.16,
        "heikin": 6.54,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.783
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 250.999,
        "saikou": 8.16,
        "heikin": 5.85,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 5.836
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 256.827,
        "saikou": 8.24,
        "heikin": 5.99,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 5.717
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 259.966,
        "saikou": 7.87,
        "heikin": 5.86,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 5.375
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 271.581,
        "saikou": 7.35,
        "heikin": 5.27,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.99
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 235.949,
        "saikou": 6.97,
        "heikin": 4.71,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.895
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 226.323,
        "saikou": 6.12,
        "heikin": 4.12,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.794
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 230.799,
        "saikou": 6.12,
        "heikin": 4.07,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.616
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 266.799,
        "saikou": 6.12,
        "heikin": 4.37,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.461
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 268.775,
        "saikou": 6.79,
        "heikin": 4.86,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.496
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 266.791,
        "saikou": 5.88,
        "heikin": 4.21,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.089
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 181.425,
        "saikou": 4.59,
        "heikin": 3.32,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 4.09
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 181.425,
        "saikou": 3.79,
        "heikin": 2.92,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 3.604
      }
    ]
  }
};
