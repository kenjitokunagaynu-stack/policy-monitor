// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/24〜2026/11/22）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-23",
  "fetchedAt": "2026-11-23",
  "avgWindowLabel": "過去30日平均（2026/10/24〜2026/11/22）",
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
      "boshu": 1017,
      "ouatsu": 1612.493,
      "saikou": 8.88,
      "heikin": 1.89,
      "boshuAvg30d": 1136.6,
      "heikinAvg30d": 2.486
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1017,
      "ouatsu": 1649.03,
      "saikou": 5.41,
      "heikin": 1.66,
      "boshuAvg30d": 1136.6,
      "heikinAvg30d": 2.448
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1017,
      "ouatsu": 1810.453,
      "saikou": 5.19,
      "heikin": 1.6,
      "boshuAvg30d": 1136.6,
      "heikinAvg30d": 2.425
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1016,
      "ouatsu": 1756.913,
      "saikou": 9.91,
      "heikin": 1.71,
      "boshuAvg30d": 1135.9,
      "heikinAvg30d": 2.315
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1010,
      "ouatsu": 1759.097,
      "saikou": 9,
      "heikin": 1.5,
      "boshuAvg30d": 1130.7,
      "heikinAvg30d": 2.363
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1010,
      "ouatsu": 1810.545,
      "saikou": 4.99,
      "heikin": 1.41,
      "boshuAvg30d": 1130.4,
      "heikinAvg30d": 2.509
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1007,
      "ouatsu": 1855.509,
      "saikou": 9.08,
      "heikin": 1.22,
      "boshuAvg30d": 1138.9,
      "heikinAvg30d": 2.585
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1011,
      "ouatsu": 1686.059,
      "saikou": 9.8,
      "heikin": 1.16,
      "boshuAvg30d": 1142.3,
      "heikinAvg30d": 2.815
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1011,
      "ouatsu": 1753.074,
      "saikou": 9.91,
      "heikin": 1.49,
      "boshuAvg30d": 1142.9,
      "heikinAvg30d": 2.871
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1013,
      "ouatsu": 1681.991,
      "saikou": 9.08,
      "heikin": 1.24,
      "boshuAvg30d": 1144.6,
      "heikinAvg30d": 2.877
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1013,
      "ouatsu": 1667.726,
      "saikou": 9.91,
      "heikin": 1.47,
      "boshuAvg30d": 1144.6,
      "heikinAvg30d": 2.955
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1013,
      "ouatsu": 1679.049,
      "saikou": 9.91,
      "heikin": 1.32,
      "boshuAvg30d": 1144.6,
      "heikinAvg30d": 2.959
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1072,
      "ouatsu": 1753.248,
      "saikou": 7.8,
      "heikin": 1.36,
      "boshuAvg30d": 1203.9,
      "heikinAvg30d": 3.12
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1097,
      "ouatsu": 1721.785,
      "saikou": 8.45,
      "heikin": 1.74,
      "boshuAvg30d": 1228.3,
      "heikinAvg30d": 3.211
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1116,
      "ouatsu": 1689.674,
      "saikou": 9.85,
      "heikin": 1.56,
      "boshuAvg30d": 1247.9,
      "heikinAvg30d": 3.182
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1131,
      "ouatsu": 1753.857,
      "saikou": 7.35,
      "heikin": 1.79,
      "boshuAvg30d": 1263.7,
      "heikinAvg30d": 2.98
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1131,
      "ouatsu": 1840.911,
      "saikou": 9.98,
      "heikin": 2.46,
      "boshuAvg30d": 1264.1,
      "heikinAvg30d": 2.815
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1131,
      "ouatsu": 1797.493,
      "saikou": 10,
      "heikin": 2.46,
      "boshuAvg30d": 1267.9,
      "heikinAvg30d": 2.845
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1060,
      "ouatsu": 1721.348,
      "saikou": 10,
      "heikin": 2.52,
      "boshuAvg30d": 1223.5,
      "heikinAvg30d": 2.78
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1065,
      "ouatsu": 1705.405,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1228.0,
      "heikinAvg30d": 2.731
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1069,
      "ouatsu": 1652.358,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1232.6,
      "heikinAvg30d": 2.709
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1073,
      "ouatsu": 1713.68,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1235.5,
      "heikinAvg30d": 2.73
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1067,
      "ouatsu": 1665.508,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1229.9,
      "heikinAvg30d": 2.711
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1067,
      "ouatsu": 1634.441,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1229.7,
      "heikinAvg30d": 2.793
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1048,
      "ouatsu": 1660.698,
      "saikou": 10,
      "heikin": 2.43,
      "boshuAvg30d": 1210.4,
      "heikinAvg30d": 2.648
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1048,
      "ouatsu": 1714.909,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1210.4,
      "heikinAvg30d": 2.718
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1048,
      "ouatsu": 1592.153,
      "saikou": 10,
      "heikin": 2.37,
      "boshuAvg30d": 1210.4,
      "heikinAvg30d": 2.781
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1044,
      "ouatsu": 1644.209,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1206.6,
      "heikinAvg30d": 2.844
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1043,
      "ouatsu": 1677.236,
      "saikou": 9.99,
      "heikin": 2.87,
      "boshuAvg30d": 1205.1,
      "heikinAvg30d": 2.916
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1037,
      "ouatsu": 1542.069,
      "saikou": 9.99,
      "heikin": 3.07,
      "boshuAvg30d": 1199.1,
      "heikinAvg30d": 3.044
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1108,
      "ouatsu": 1818.633,
      "saikou": 10,
      "heikin": 2.37,
      "boshuAvg30d": 1251.9,
      "heikinAvg30d": 3.201
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1108,
      "ouatsu": 1692.252,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1251.6,
      "heikinAvg30d": 3.332
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1108,
      "ouatsu": 1645.164,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1251.5,
      "heikinAvg30d": 3.577
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1106,
      "ouatsu": 1782.781,
      "saikou": 9.26,
      "heikin": 2.63,
      "boshuAvg30d": 1249.8,
      "heikinAvg30d": 3.728
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1104,
      "ouatsu": 1754.68,
      "saikou": 9.19,
      "heikin": 2.8,
      "boshuAvg30d": 1241.5,
      "heikinAvg30d": 3.703
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1099,
      "ouatsu": 1575.862,
      "saikou": 9.19,
      "heikin": 2.21,
      "boshuAvg30d": 1232.6,
      "heikinAvg30d": 3.667
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1095,
      "ouatsu": 1501.079,
      "saikou": 9.99,
      "heikin": 2.17,
      "boshuAvg30d": 1227.4,
      "heikinAvg30d": 3.503
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1095,
      "ouatsu": 1591.13,
      "saikou": 9.45,
      "heikin": 2.15,
      "boshuAvg30d": 1227.4,
      "heikinAvg30d": 3.448
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1095,
      "ouatsu": 1599.66,
      "saikou": 9.3,
      "heikin": 2.17,
      "boshuAvg30d": 1227.4,
      "heikinAvg30d": 3.321
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1093,
      "ouatsu": 1612.492,
      "saikou": 9.85,
      "heikin": 2.24,
      "boshuAvg30d": 1226.0,
      "heikinAvg30d": 3.267
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1086,
      "ouatsu": 1672.008,
      "saikou": 7.94,
      "heikin": 2.22,
      "boshuAvg30d": 1218.7,
      "heikinAvg30d": 3.181
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1086,
      "ouatsu": 1522.842,
      "saikou": 9.99,
      "heikin": 3.02,
      "boshuAvg30d": 1218.7,
      "heikinAvg30d": 3.149
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 997,
      "ouatsu": 1672.597,
      "saikou": 10,
      "heikin": 2.45,
      "boshuAvg30d": 1132.3,
      "heikinAvg30d": 3.05
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1000,
      "ouatsu": 1651.366,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1135.3,
      "heikinAvg30d": 2.967
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 999,
      "ouatsu": 1693.757,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1137.8,
      "heikinAvg30d": 2.999
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 992,
      "ouatsu": 1553.527,
      "saikou": 9.91,
      "heikin": 3.04,
      "boshuAvg30d": 1128.4,
      "heikinAvg30d": 2.929
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 984,
      "ouatsu": 1486.205,
      "saikou": 10,
      "heikin": 2.3,
      "boshuAvg30d": 1120.4,
      "heikinAvg30d": 2.881
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 976,
      "ouatsu": 1527.528,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1112.0,
      "heikinAvg30d": 2.647
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
        "ouatsu": 104.918,
        "saikou": 8.88,
        "heikin": 4.07,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 2.714
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 150.908,
        "saikou": 1.17,
        "heikin": 1.17,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 2.919
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 140.308,
        "saikou": 1.4,
        "heikin": 1.4,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 2.662
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 140.308,
        "saikou": 9.91,
        "heikin": 2.5,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 2.862
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 132.908,
        "saikou": 9,
        "heikin": 2.32,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 2.997
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 158.338,
        "saikou": 4.99,
        "heikin": 2.34,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 2.694
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 134.108,
        "saikou": 9.08,
        "heikin": 2.94,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 2.903
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 134.108,
        "saikou": 9.8,
        "heikin": 3.05,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.827
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 182.408,
        "saikou": 9.91,
        "heikin": 5.19,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.816
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 134.108,
        "saikou": 9.08,
        "heikin": 3.77,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.745
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 179.218,
        "saikou": 9.91,
        "heikin": 4.02,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.656
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 181.208,
        "saikou": 9.91,
        "heikin": 4.03,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.505
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 209.108,
        "saikou": 4.48,
        "heikin": 4,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.033
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 209.108,
        "saikou": 4.52,
        "heikin": 4.47,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.093
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 179.408,
        "saikou": 8.07,
        "heikin": 2.26,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.33
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 180.108,
        "saikou": 7.15,
        "heikin": 2.81,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.041
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 163.908,
        "saikou": 7.65,
        "heikin": 2.7,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.299
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 137.918,
        "saikou": 6.85,
        "heikin": 2.2,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.707
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 168.578,
        "saikou": 6.3,
        "heikin": 3.14,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.546
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 124.908,
        "saikou": 9.8,
        "heikin": 3.1,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 3.166
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 161.658,
        "saikou": 9.91,
        "heikin": 5.41,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 3.156
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 158.108,
        "saikou": 9.7,
        "heikin": 5.26,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.307
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 114.908,
        "saikou": 9.6,
        "heikin": 3.56,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.452
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 162.658,
        "saikou": 9.91,
        "heikin": 5.52,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.325
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 144.918,
        "saikou": 8.44,
        "heikin": 2.7,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 3.032
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 198.268,
        "saikou": 9.91,
        "heikin": 4.13,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 2.949
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 120.968,
        "saikou": 7.15,
        "heikin": 2.88,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 3.325
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 159.258,
        "saikou": 7.7,
        "heikin": 4.05,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.07
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 159.968,
        "saikou": 7.2,
        "heikin": 4.04,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 4.033
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 127.918,
        "saikou": 7,
        "heikin": 1.15,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.327
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 127.918,
        "saikou": 2.43,
        "heikin": 2.43,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.627
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 208.918,
        "saikou": 4.48,
        "heikin": 4.44,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 5.425
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 257.24,
        "saikou": 4.48,
        "heikin": 4.48,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 6.068
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 166.95,
        "saikou": 4.48,
        "heikin": 4.48,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 6.07
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 215.25,
        "saikou": 4.48,
        "heikin": 4.48,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 5.463
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 200.108,
        "saikou": 4.48,
        "heikin": 4.44,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 5.416
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 193.918,
        "saikou": 4.48,
        "heikin": 4.44,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 5.115
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 228.798,
        "saikou": 4.48,
        "heikin": 4.44,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 5.027
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 208.918,
        "saikou": 4.48,
        "heikin": 4.44,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.978
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 239.798,
        "saikou": 4.48,
        "heikin": 4.44,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.911
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 205.918,
        "saikou": 4.48,
        "heikin": 4.44,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.911
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 205.918,
        "saikou": 4.48,
        "heikin": 4.46,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.171
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 257.218,
        "saikou": 4.48,
        "heikin": 4.44,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.239
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 208.918,
        "saikou": 4.48,
        "heikin": 4.44,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.28
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 225.218,
        "saikou": 4.48,
        "heikin": 3.61,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.101
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 164.218,
        "saikou": 9.91,
        "heikin": 5.38,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 4.082
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 113.95,
        "saikou": 9.8,
        "heikin": 3.92,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.628
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 162.25,
        "saikou": 9.45,
        "heikin": 1.44,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.539
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 92.376,
        "saikou": 4.19,
        "heikin": 2.78,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 4.926
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 94.306,
        "saikou": 5.41,
        "heikin": 3.42,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 5.11
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 92.376,
        "saikou": 5.19,
        "heikin": 3.04,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 5.377
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 94.336,
        "saikou": 5.09,
        "heikin": 2.88,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 5.492
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 96.266,
        "saikou": 4.19,
        "heikin": 2.69,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 5.36
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 94.336,
        "saikou": 4.17,
        "heikin": 2.18,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 5.099
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 96.666,
        "saikou": 4.15,
        "heikin": 2.02,
        "boshuAvg30d": 121.4,
        "heikinAvg30d": 5.003
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 108.836,
        "saikou": 4.14,
        "heikin": 1.92,
        "boshuAvg30d": 122.1,
        "heikinAvg30d": 4.585
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 112.834,
        "saikou": 4.12,
        "heikin": 2.04,
        "boshuAvg30d": 121.4,
        "heikinAvg30d": 4.513
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 110.904,
        "saikou": 4.07,
        "heikin": 2.18,
        "boshuAvg30d": 122.1,
        "heikinAvg30d": 4.588
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 112.834,
        "saikou": 4.5,
        "heikin": 2.74,
        "boshuAvg30d": 122.1,
        "heikinAvg30d": 4.612
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 109.834,
        "saikou": 4.07,
        "heikin": 2.29,
        "boshuAvg30d": 122.1,
        "heikinAvg30d": 4.513
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 100.834,
        "saikou": 2.54,
        "heikin": 2.11,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 4.544
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 99.334,
        "saikou": 3.99,
        "heikin": 3.24,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 4.421
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 112.834,
        "saikou": 5.38,
        "heikin": 3.57,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 4.938
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 111.334,
        "saikou": 7.35,
        "heikin": 4.4,
        "boshuAvg30d": 138.4,
        "heikinAvg30d": 5.005
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 112.834,
        "saikou": 7.53,
        "heikin": 4.77,
        "boshuAvg30d": 138.4,
        "heikinAvg30d": 4.811
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 111.37,
        "saikou": 10,
        "heikin": 8.18,
        "boshuAvg30d": 138.4,
        "heikinAvg30d": 5.03
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 124.87,
        "saikou": 10,
        "heikin": 4.98,
        "boshuAvg30d": 78.1,
        "heikinAvg30d": 4.734
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 124.87,
        "saikou": 10,
        "heikin": 5.6,
        "boshuAvg30d": 78.9,
        "heikinAvg30d": 4.721
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 124.907,
        "saikou": 10,
        "heikin": 5.58,
        "boshuAvg30d": 80.9,
        "heikinAvg30d": 4.802
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 97.151,
        "saikou": 10,
        "heikin": 6.07,
        "boshuAvg30d": 81.6,
        "heikinAvg30d": 5.094
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 97.114,
        "saikou": 10,
        "heikin": 8.08,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 5.078
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 95.464,
        "saikou": 10,
        "heikin": 7.86,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 5.149
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 98.808,
        "saikou": 10,
        "heikin": 6.95,
        "boshuAvg30d": 77.1,
        "heikinAvg30d": 5.507
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 99.11,
        "saikou": 10,
        "heikin": 6.95,
        "boshuAvg30d": 77.1,
        "heikinAvg30d": 5.357
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 99.756,
        "saikou": 10,
        "heikin": 5.26,
        "boshuAvg30d": 77.1,
        "heikinAvg30d": 4.497
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 101.106,
        "saikou": 10,
        "heikin": 5.39,
        "boshuAvg30d": 76.1,
        "heikinAvg30d": 4.825
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 99.206,
        "saikou": 9.12,
        "heikin": 4.29,
        "boshuAvg30d": 76.1,
        "heikinAvg30d": 4.602
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 128.826,
        "saikou": 6.33,
        "heikin": 3.8,
        "boshuAvg30d": 74.9,
        "heikinAvg30d": 4.191
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 104.826,
        "saikou": 3.5,
        "heikin": 2.43,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 4.391
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 116.862,
        "saikou": 5.79,
        "heikin": 4.02,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 4.406
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 114.83,
        "saikou": 7.77,
        "heikin": 4.91,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 4.377
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 47.578,
        "saikou": 3.79,
        "heikin": 3.22,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 4.257
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 47.113,
        "saikou": 7.25,
        "heikin": 3.81,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 4.555
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 45.959,
        "saikou": 3.11,
        "heikin": 2.78,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.926
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 51.074,
        "saikou": 3.79,
        "heikin": 2.55,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 3.418
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 49.574,
        "saikou": 3.95,
        "heikin": 2.44,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 3.098
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 63.074,
        "saikou": 3.5,
        "heikin": 2.56,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 3.065
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 63.074,
        "saikou": 3.5,
        "heikin": 2.4,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 3.227
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 72.945,
        "saikou": 3.99,
        "heikin": 3.01,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.351
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 64.205,
        "saikou": 3.99,
        "heikin": 3.38,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.405
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 66.26,
        "saikou": 3.99,
        "heikin": 1.79,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 3.149
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 66.26,
        "saikou": 3.99,
        "heikin": 2.65,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 3.612
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 98.914,
        "saikou": 4.11,
        "heikin": 2.37,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 3.636
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 100.264,
        "saikou": 4.17,
        "heikin": 2.54,
        "boshuAvg30d": 46.3,
        "heikinAvg30d": 4.297
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 98.334,
        "saikou": 4.18,
        "heikin": 2.28,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 4.188
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 95.184,
        "saikou": 5.24,
        "heikin": 2.97,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 4.99
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 157,
        "ouatsu": 494.903,
        "saikou": 5.21,
        "heikin": 0.81,
        "boshuAvg30d": 228.4,
        "heikinAvg30d": 1.908
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 157,
        "ouatsu": 485.241,
        "saikou": 5.21,
        "heikin": 0.93,
        "boshuAvg30d": 228.4,
        "heikinAvg30d": 1.867
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 157,
        "ouatsu": 616.787,
        "saikou": 1.96,
        "heikin": 1.02,
        "boshuAvg30d": 228.4,
        "heikinAvg30d": 2.049
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 157,
        "ouatsu": 624.137,
        "saikou": 1.93,
        "heikin": 1,
        "boshuAvg30d": 228.4,
        "heikinAvg30d": 1.583
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 155,
        "ouatsu": 627.98,
        "saikou": 1.95,
        "heikin": 0.82,
        "boshuAvg30d": 226.6,
        "heikinAvg30d": 1.645
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 155,
        "ouatsu": 633.967,
        "saikou": 1.69,
        "heikin": 0.87,
        "boshuAvg30d": 226.4,
        "heikinAvg30d": 1.791
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 153,
        "ouatsu": 616.231,
        "saikou": 1.54,
        "heikin": 0.78,
        "boshuAvg30d": 224.4,
        "heikinAvg30d": 1.717
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 155,
        "ouatsu": 508.801,
        "saikou": 1.43,
        "heikin": 0.71,
        "boshuAvg30d": 226.4,
        "heikinAvg30d": 1.917
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 155,
        "ouatsu": 472.191,
        "saikou": 1.12,
        "heikin": 0.6,
        "boshuAvg30d": 226.4,
        "heikinAvg30d": 2.138
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 156,
        "ouatsu": 478.172,
        "saikou": 2.81,
        "heikin": 0.89,
        "boshuAvg30d": 227.4,
        "heikinAvg30d": 1.965
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 156,
        "ouatsu": 479.17,
        "saikou": 2.42,
        "heikin": 1.17,
        "boshuAvg30d": 227.4,
        "heikinAvg30d": 2.018
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 156,
        "ouatsu": 449.004,
        "saikou": 2.54,
        "heikin": 0.83,
        "boshuAvg30d": 227.4,
        "heikinAvg30d": 2.024
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 176,
        "ouatsu": 499.673,
        "saikou": 2.62,
        "heikin": 0.91,
        "boshuAvg30d": 247.1,
        "heikinAvg30d": 2.399
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 184,
        "ouatsu": 458.824,
        "saikou": 3.81,
        "heikin": 1.87,
        "boshuAvg30d": 255.1,
        "heikinAvg30d": 2.603
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 188,
        "ouatsu": 428.846,
        "saikou": 5.17,
        "heikin": 2.21,
        "boshuAvg30d": 259.4,
        "heikinAvg30d": 2.637
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 193,
        "ouatsu": 476.679,
        "saikou": 3.72,
        "heikin": 2.11,
        "boshuAvg30d": 264.7,
        "heikinAvg30d": 2.483
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 193,
        "ouatsu": 684.434,
        "saikou": 2.13,
        "heikin": 1.43,
        "boshuAvg30d": 265.0,
        "heikinAvg30d": 2.051
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 193,
        "ouatsu": 557.194,
        "saikou": 6.04,
        "heikin": 3.11,
        "boshuAvg30d": 268.9,
        "heikinAvg30d": 2.501
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 183,
        "ouatsu": 426.241,
        "saikou": 3,
        "heikin": 1.47,
        "boshuAvg30d": 259.4,
        "heikinAvg30d": 1.969
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 183,
        "ouatsu": 505.116,
        "saikou": 2.05,
        "heikin": 1.46,
        "boshuAvg30d": 259.4,
        "heikinAvg30d": 1.964
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 183,
        "ouatsu": 504.401,
        "saikou": 2.07,
        "heikin": 1.52,
        "boshuAvg30d": 259.7,
        "heikinAvg30d": 1.894
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 183,
        "ouatsu": 496.369,
        "saikou": 2.19,
        "heikin": 1.16,
        "boshuAvg30d": 259.5,
        "heikinAvg30d": 1.823
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 498.569,
        "saikou": 1.9,
        "heikin": 1.02,
        "boshuAvg30d": 256.4,
        "heikinAvg30d": 1.966
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 498.347,
        "saikou": 2.16,
        "heikin": 1.26,
        "boshuAvg30d": 256.4,
        "heikinAvg30d": 2.22
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 178,
        "ouatsu": 454.616,
        "saikou": 0.79,
        "heikin": 0.46,
        "boshuAvg30d": 254.1,
        "heikinAvg30d": 1.736
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 178,
        "ouatsu": 468.383,
        "saikou": 1.78,
        "heikin": 0.61,
        "boshuAvg30d": 254.1,
        "heikinAvg30d": 1.829
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 178,
        "ouatsu": 470.778,
        "saikou": 3.25,
        "heikin": 1.48,
        "boshuAvg30d": 254.1,
        "heikinAvg30d": 1.994
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 456.808,
        "saikou": 3.51,
        "heikin": 1.43,
        "boshuAvg30d": 253.8,
        "heikinAvg30d": 1.823
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 177,
        "ouatsu": 476.329,
        "saikou": 3,
        "heikin": 1.4,
        "boshuAvg30d": 252.8,
        "heikinAvg30d": 2.034
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 177,
        "ouatsu": 295.792,
        "saikou": 5.85,
        "heikin": 2.09,
        "boshuAvg30d": 252.5,
        "heikinAvg30d": 2.067
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 175,
        "ouatsu": 459.347,
        "saikou": 3.06,
        "heikin": 1.54,
        "boshuAvg30d": 250.9,
        "heikinAvg30d": 2.146
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 175,
        "ouatsu": 483.218,
        "saikou": 6.68,
        "heikin": 2.17,
        "boshuAvg30d": 250.5,
        "heikinAvg30d": 2.133
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 175,
        "ouatsu": 462.748,
        "saikou": 3.81,
        "heikin": 1.85,
        "boshuAvg30d": 250.2,
        "heikinAvg30d": 2.144
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 175,
        "ouatsu": 606.565,
        "saikou": 5.26,
        "heikin": 1.5,
        "boshuAvg30d": 250.2,
        "heikinAvg30d": 2.18
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 175,
        "ouatsu": 578.004,
        "saikou": 2.62,
        "heikin": 1.41,
        "boshuAvg30d": 248.2,
        "heikinAvg30d": 2.087
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 175,
        "ouatsu": 491.193,
        "saikou": 3.98,
        "heikin": 1.47,
        "boshuAvg30d": 244.4,
        "heikinAvg30d": 2.214
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 177,
        "ouatsu": 429.162,
        "saikou": 3.82,
        "heikin": 1.68,
        "boshuAvg30d": 245.6,
        "heikinAvg30d": 2.109
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 177,
        "ouatsu": 481.825,
        "saikou": 2.67,
        "heikin": 1.3,
        "boshuAvg30d": 245.6,
        "heikinAvg30d": 2.002
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 177,
        "ouatsu": 451.374,
        "saikou": 3.82,
        "heikin": 1.65,
        "boshuAvg30d": 245.6,
        "heikinAvg30d": 2.035
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 177,
        "ouatsu": 436.983,
        "saikou": 3.83,
        "heikin": 1.63,
        "boshuAvg30d": 246.0,
        "heikinAvg30d": 1.865
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 176,
        "ouatsu": 528.729,
        "saikou": 7.34,
        "heikin": 2.04,
        "boshuAvg30d": 244.7,
        "heikinAvg30d": 1.897
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 176,
        "ouatsu": 470.996,
        "saikou": 6.63,
        "heikin": 2.11,
        "boshuAvg30d": 244.7,
        "heikinAvg30d": 2.045
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 175,
        "ouatsu": 487.859,
        "saikou": 2.48,
        "heikin": 1.07,
        "boshuAvg30d": 244.0,
        "heikinAvg30d": 1.881
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 175,
        "ouatsu": 440.432,
        "saikou": 2.01,
        "heikin": 0.91,
        "boshuAvg30d": 244.0,
        "heikinAvg30d": 1.887
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 175,
        "ouatsu": 489.397,
        "saikou": 2.04,
        "heikin": 0.94,
        "boshuAvg30d": 247.0,
        "heikinAvg30d": 2.147
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 173,
        "ouatsu": 420.345,
        "saikou": 7.66,
        "heikin": 2.06,
        "boshuAvg30d": 242.0,
        "heikinAvg30d": 2.059
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 171,
        "ouatsu": 396.252,
        "saikou": 6.53,
        "heikin": 1.45,
        "boshuAvg30d": 240.3,
        "heikinAvg30d": 2.355
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 482.618,
        "saikou": 2.82,
        "heikin": 1.21,
        "boshuAvg30d": 238.6,
        "heikinAvg30d": 2.29
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 60,
        "ouatsu": 349.787,
        "saikou": 3.31,
        "heikin": 1.92,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 1.863
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 60,
        "ouatsu": 391.87,
        "saikou": 3.24,
        "heikin": 1.73,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 1.945
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 60,
        "ouatsu": 395.823,
        "saikou": 3.25,
        "heikin": 1.62,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 1.959
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 391.877,
        "saikou": 3.58,
        "heikin": 1.98,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 2.0
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 59,
        "ouatsu": 379.766,
        "saikou": 3.27,
        "heikin": 1.84,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.026
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 384.617,
        "saikou": 3.57,
        "heikin": 1.59,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.021
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 367.659,
        "saikou": 0.85,
        "heikin": 0.68,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.942
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 334.307,
        "saikou": 3.48,
        "heikin": 0.87,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.928
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 352.913,
        "saikou": 1,
        "heikin": 0.8,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.825
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 341.001,
        "saikou": 1,
        "heikin": 0.67,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.854
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 323.991,
        "saikou": 3.48,
        "heikin": 1.08,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.752
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 322.491,
        "saikou": 1.2,
        "heikin": 1.04,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.73
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 323.991,
        "saikou": 1.48,
        "heikin": 1.11,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 1.944
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 72,
        "ouatsu": 320.017,
        "saikou": 1.61,
        "heikin": 1.22,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 1.871
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 75,
        "ouatsu": 329.217,
        "saikou": 1.8,
        "heikin": 1.32,
        "boshuAvg30d": 162.0,
        "heikinAvg30d": 2.149
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 77,
        "ouatsu": 347.717,
        "saikou": 5,
        "heikin": 1.75,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 2.191
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 77,
        "ouatsu": 343.917,
        "saikou": 3.39,
        "heikin": 1.47,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 2.191
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 77,
        "ouatsu": 351.696,
        "saikou": 5,
        "heikin": 1.89,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 2.232
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 82,
        "ouatsu": 344.444,
        "saikou": 9.17,
        "heikin": 2.11,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 2.291
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 82,
        "ouatsu": 307.689,
        "saikou": 9.17,
        "heikin": 3.29,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 2.487
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 82,
        "ouatsu": 303.71,
        "saikou": 9.17,
        "heikin": 3.42,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 2.556
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 82,
        "ouatsu": 303.719,
        "saikou": 9.17,
        "heikin": 3.56,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 2.595
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 81,
        "ouatsu": 266.63,
        "saikou": 9.17,
        "heikin": 2.41,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 2.637
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 80,
        "ouatsu": 262.699,
        "saikou": 9.17,
        "heikin": 2.97,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 2.9
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 76,
        "ouatsu": 258.779,
        "saikou": 9.17,
        "heikin": 3.51,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 3.194
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 76,
        "ouatsu": 270.61,
        "saikou": 9.17,
        "heikin": 3.49,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 3.187
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 76,
        "ouatsu": 237.597,
        "saikou": 9.17,
        "heikin": 2.22,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 2.488
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 76,
        "ouatsu": 254.589,
        "saikou": 9.17,
        "heikin": 2.3,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 2.532
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 76,
        "ouatsu": 255.021,
        "saikou": 9.17,
        "heikin": 2.34,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 2.543
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 76,
        "ouatsu": 315.733,
        "saikou": 9.17,
        "heikin": 3.03,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 2.552
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 74,
        "ouatsu": 317.469,
        "saikou": 5,
        "heikin": 3.12,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 2.823
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 74,
        "ouatsu": 270.005,
        "saikou": 6.33,
        "heikin": 2.53,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 2.815
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 74,
        "ouatsu": 255.057,
        "saikou": 8.78,
        "heikin": 2.53,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 2.802
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 73,
        "ouatsu": 352.012,
        "saikou": 9.26,
        "heikin": 4.64,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 3.134
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 73,
        "ouatsu": 352.983,
        "saikou": 8.98,
        "heikin": 4.59,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 3.002
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 72,
        "ouatsu": 273.947,
        "saikou": 5,
        "heikin": 2.43,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 2.761
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 268.425,
        "saikou": 5.1,
        "heikin": 2.62,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.564
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 268.425,
        "saikou": 5.1,
        "heikin": 2.43,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.546
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 307.873,
        "saikou": 8.57,
        "heikin": 2.25,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.181
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 309.863,
        "saikou": 8.57,
        "heikin": 2.13,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.236
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 70,
        "ouatsu": 289.992,
        "saikou": 5,
        "heikin": 1.94,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.04
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 70,
        "ouatsu": 278.26,
        "saikou": 8.31,
        "heikin": 2.29,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 1.973
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 72,
        "ouatsu": 285.945,
        "saikou": 8.31,
        "heikin": 2.29,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 1.853
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 72,
        "ouatsu": 386.242,
        "saikou": 8.95,
        "heikin": 5.36,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 1.973
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 72,
        "ouatsu": 257.702,
        "saikou": 8.31,
        "heikin": 2.32,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 1.996
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 259.592,
        "saikou": 8.31,
        "heikin": 2.17,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 2.061
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 259.592,
        "saikou": 5,
        "heikin": 1.58,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 1.938
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 238.548,
        "saikou": 5,
        "heikin": 1.3,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 1.977
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 3.918
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 3.381
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 2.845
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 3.228
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 3.335
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 3.349
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 7.8,
        "heikin": 7.8,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 4.47
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.36,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 3.897
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 7.95,
        "heikin": 7.87,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 3.475
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.05,
        "heikin": 7.92,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 4.283
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 7.95,
        "heikin": 7.87,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 4.353
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 7.95,
        "heikin": 7.87,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 4.006
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 7.8,
        "heikin": 7.53,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 4.605
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 8.45,
        "heikin": 8.12,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 4.282
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.85,
        "heikin": 8.8,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 4.931
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.152
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 8.82,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.599
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.579
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.335
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.289
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 5.91
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 5.987
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 5.863
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 5.614
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 3.87
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 4.539
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.753
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 4.945
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 6.103
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.943
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 6.508
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 7.016
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.93,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 6.438
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 6.056
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 9.19,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 6.13
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 9.07,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 5.972
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.68,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 5.271
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.45,
        "heikin": 8.68,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 6.169
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.3,
        "heikin": 9.12,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 5.188
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.85,
        "heikin": 9.64,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 5.68
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.923
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 4.897
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 9.85,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 4.711
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 4.599
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 21.598,
        "saikou": 10,
        "heikin": 9.89,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 5.153
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.95,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 4.845
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 5.868,
        "saikou": 10,
        "heikin": 9.38,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 4.868
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 9.85,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 3.391
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 90.915,
        "saikou": 2.98,
        "heikin": 2.86,
        "boshuAvg30d": 207.5,
        "heikinAvg30d": 2.894
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 96.095,
        "saikou": 2.98,
        "heikin": 2.88,
        "boshuAvg30d": 207.5,
        "heikinAvg30d": 2.153
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 94.135,
        "saikou": 2.98,
        "heikin": 2.88,
        "boshuAvg30d": 207.5,
        "heikinAvg30d": 2.024
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 101.939,
        "saikou": 2.98,
        "heikin": 2.89,
        "boshuAvg30d": 207.5,
        "heikinAvg30d": 2.082
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 101.939,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 206.5,
        "heikinAvg30d": 2.445
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 101.939,
        "saikou": 2.98,
        "heikin": 2.88,
        "boshuAvg30d": 206.5,
        "heikinAvg30d": 2.944
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 113.814,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 206.5,
        "heikinAvg30d": 3.135
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 113.814,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 206.5,
        "heikinAvg30d": 3.379
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 113.814,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 207.5,
        "heikinAvg30d": 3.203
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 111.816,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 207.5,
        "heikinAvg30d": 2.972
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 64.539,
        "saikou": 4.26,
        "heikin": 2.38,
        "boshuAvg30d": 207.5,
        "heikinAvg30d": 2.821
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 113.814,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 207.5,
        "heikinAvg30d": 3.051
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 113.814,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 217.8,
        "heikinAvg30d": 3.049
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 113.814,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 221.8,
        "heikinAvg30d": 3.167
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 226.8,
        "heikinAvg30d": 3.775
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 117.681,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 229.0,
        "heikinAvg30d": 3.97
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 156.907,
        "saikou": 9.98,
        "heikin": 4.93,
        "boshuAvg30d": 229.0,
        "heikinAvg30d": 3.806
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 117.681,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 229.0,
        "heikinAvg30d": 4.29
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 117.681,
        "saikou": 8.99,
        "heikin": 6.13,
        "boshuAvg30d": 239.1,
        "heikinAvg30d": 4.444
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 117.681,
        "saikou": 9.98,
        "heikin": 6.68,
        "boshuAvg30d": 239.1,
        "heikinAvg30d": 4.311
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 115.696,
        "saikou": 9.99,
        "heikin": 6.74,
        "boshuAvg30d": 239.1,
        "heikinAvg30d": 4.171
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 135.31,
        "saikou": 9.99,
        "heikin": 5.71,
        "boshuAvg30d": 238.1,
        "heikinAvg30d": 4.169
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 137.295,
        "saikou": 9.99,
        "heikin": 5.81,
        "boshuAvg30d": 236.4,
        "heikinAvg30d": 4.071
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 161.24,
        "saikou": 9.99,
        "heikin": 5,
        "boshuAvg30d": 237.1,
        "heikinAvg30d": 3.877
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 159.37,
        "saikou": 9.99,
        "heikin": 4.96,
        "boshuAvg30d": 235.4,
        "heikinAvg30d": 3.392
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 159.37,
        "saikou": 9.99,
        "heikin": 4.96,
        "boshuAvg30d": 235.4,
        "heikinAvg30d": 3.453
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 135.297,
        "saikou": 9.99,
        "heikin": 5.76,
        "boshuAvg30d": 235.4,
        "heikinAvg30d": 4.15
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 137.295,
        "saikou": 9.98,
        "heikin": 5.73,
        "boshuAvg30d": 235.4,
        "heikinAvg30d": 4.125
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 128.581,
        "saikou": 9.99,
        "heikin": 6.18,
        "boshuAvg30d": 235.4,
        "heikinAvg30d": 4.558
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.73,
        "boshuAvg30d": 235.4,
        "heikinAvg30d": 4.406
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 225.781,
        "saikou": 8.98,
        "heikin": 1.7,
        "boshuAvg30d": 235.1,
        "heikinAvg30d": 4.553
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 113.814,
        "saikou": 8.99,
        "heikin": 5.73,
        "boshuAvg30d": 235.1,
        "heikinAvg30d": 4.574
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 113.814,
        "saikou": 9.98,
        "heikin": 6.39,
        "boshuAvg30d": 235.1,
        "heikinAvg30d": 4.337
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 113.814,
        "saikou": 7.12,
        "heikin": 3.69,
        "boshuAvg30d": 235.1,
        "heikinAvg30d": 3.897
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 113.814,
        "saikou": 8.39,
        "heikin": 4.77,
        "boshuAvg30d": 230.8,
        "heikinAvg30d": 4.143
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 113.814,
        "saikou": 8.98,
        "heikin": 5.24,
        "boshuAvg30d": 229.8,
        "heikinAvg30d": 4.048
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 111.854,
        "saikou": 7.6,
        "heikin": 3.18,
        "boshuAvg30d": 227.8,
        "heikinAvg30d": 3.993
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 111.854,
        "saikou": 7.94,
        "heikin": 4.84,
        "boshuAvg30d": 227.8,
        "heikinAvg30d": 3.926
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 113.814,
        "saikou": 8.94,
        "heikin": 4.13,
        "boshuAvg30d": 227.8,
        "heikinAvg30d": 3.864
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 113.814,
        "saikou": 7.88,
        "heikin": 3.99,
        "boshuAvg30d": 226.8,
        "heikinAvg30d": 3.33
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 111.829,
        "saikou": 7.94,
        "heikin": 3.82,
        "boshuAvg30d": 225.8,
        "heikinAvg30d": 3.78
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 111.829,
        "saikou": 9.98,
        "heikin": 5.2,
        "boshuAvg30d": 226.5,
        "heikinAvg30d": 3.819
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 113.814,
        "saikou": 8.44,
        "heikin": 4.91,
        "boshuAvg30d": 226.5,
        "heikinAvg30d": 3.621
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 113.814,
        "saikou": 7.65,
        "heikin": 3.68,
        "boshuAvg30d": 226.5,
        "heikinAvg30d": 3.657
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 113.814,
        "saikou": 8.99,
        "heikin": 4.62,
        "boshuAvg30d": 226.5,
        "heikinAvg30d": 3.614
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 113.814,
        "saikou": 9.49,
        "heikin": 6.15,
        "boshuAvg30d": 224.8,
        "heikinAvg30d": 3.567
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 113.814,
        "saikou": 8.94,
        "heikin": 4.43,
        "boshuAvg30d": 223.5,
        "heikinAvg30d": 3.484
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 113.814,
        "saikou": 9.68,
        "heikin": 6.12,
        "boshuAvg30d": 221.5,
        "heikinAvg30d": 2.911
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 170.886,
        "saikou": 2.97,
        "heikin": 2.15,
        "boshuAvg30d": 125.1,
        "heikinAvg30d": 2.12
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 119.978,
        "saikou": 2.29,
        "heikin": 2.21,
        "boshuAvg30d": 125.1,
        "heikinAvg30d": 2.146
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 160.502,
        "saikou": 2.51,
        "heikin": 2.06,
        "boshuAvg30d": 125.1,
        "heikinAvg30d": 2.053
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 123.768,
        "saikou": 2.29,
        "heikin": 2.22,
        "boshuAvg30d": 125.1,
        "heikinAvg30d": 1.978
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 67.604,
        "saikou": 2.29,
        "heikin": 2.14,
        "boshuAvg30d": 125.1,
        "heikinAvg30d": 1.975
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 73.714,
        "saikou": 2.62,
        "heikin": 2.45,
        "boshuAvg30d": 125.1,
        "heikinAvg30d": 2.166
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 116.765,
        "saikou": 2.8,
        "heikin": 2.56,
        "boshuAvg30d": 125.1,
        "heikinAvg30d": 2.493
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 59.335,
        "saikou": 2,
        "heikin": 1.87,
        "boshuAvg30d": 125.9,
        "heikinAvg30d": 2.842
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 59.335,
        "saikou": 2,
        "heikin": 1.91,
        "boshuAvg30d": 125.9,
        "heikinAvg30d": 2.849
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 59.335,
        "saikou": 2,
        "heikin": 1.91,
        "boshuAvg30d": 125.9,
        "heikinAvg30d": 2.892
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 59.335,
        "saikou": 2,
        "heikin": 1.91,
        "boshuAvg30d": 125.9,
        "heikinAvg30d": 3.063
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 59.335,
        "saikou": 1.99,
        "heikin": 1.88,
        "boshuAvg30d": 125.9,
        "heikinAvg30d": 2.851
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 56.465,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 127.9,
        "heikinAvg30d": 2.949
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 56.465,
        "saikou": 1.52,
        "heikin": 1.52,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 3.241
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 56.465,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 2.939
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 56.465,
        "saikou": 3.75,
        "heikin": 2.66,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 2.615
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 79.038,
        "saikou": 9.5,
        "heikin": 6.28,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 2.422
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 137.761,
        "saikou": 2.29,
        "heikin": 1.92,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 2.293
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 137.761,
        "saikou": 2.7,
        "heikin": 1.88,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 2.602
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 137.761,
        "saikou": 9.5,
        "heikin": 3.69,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 2.422
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 137.761,
        "saikou": 9.5,
        "heikin": 4.34,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 2.277
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 137.761,
        "saikou": 3.99,
        "heikin": 2.2,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 2.294
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 137.761,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 2.178
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 137.761,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 2.161
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 137.761,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 2.045
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 137.761,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 2.155
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 137.761,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 2.197
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 137.761,
        "saikou": 2.71,
        "heikin": 1.89,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 2.327
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 137.761,
        "saikou": 4.04,
        "heikin": 2.25,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 2.365
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 137.761,
        "saikou": 2.7,
        "heikin": 2.02,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 2.611
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 164.291,
        "saikou": 2.29,
        "heikin": 1.66,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 2.761
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 151.564,
        "saikou": 7.98,
        "heikin": 3.73,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 2.959
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 151.564,
        "saikou": 9.5,
        "heikin": 6.7,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 3.247
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 92.841,
        "saikou": 7.84,
        "heikin": 5.2,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 3.858
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 56.465,
        "saikou": 6.99,
        "heikin": 6.05,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 4.288
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 56.465,
        "saikou": 6.99,
        "heikin": 5.95,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 4.037
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 57.345,
        "saikou": 7.98,
        "heikin": 6.63,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 3.927
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 57.345,
        "saikou": 6.99,
        "heikin": 5.88,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 3.665
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 57.345,
        "saikou": 6.99,
        "heikin": 5.91,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 3.532
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 59.335,
        "saikou": 6.99,
        "heikin": 5.92,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 3.406
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 63.969,
        "saikou": 7.53,
        "heikin": 5.97,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 3.631
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 73.138,
        "saikou": 9.5,
        "heikin": 7.79,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 3.591
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 73.138,
        "saikou": 7.58,
        "heikin": 5.08,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 3.362
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 59.335,
        "saikou": 5.98,
        "heikin": 5.1,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 3.145
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 140.631,
        "saikou": 7.88,
        "heikin": 5.12,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 2.93
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 140.631,
        "saikou": 9.5,
        "heikin": 5.02,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 2.557
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 108.002,
        "saikou": 7.98,
        "heikin": 6.12,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 2.628
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 108.412,
        "saikou": 9.5,
        "heikin": 4.87,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.996
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.73
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.693
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.658
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.623
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.638
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.67
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.735
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 173.8,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.739
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.754
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.773
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.79
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.766
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 42.5,
        "heikinAvg30d": 0.898
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.843
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.854
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.883
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 6.5,
        "heikin": 1.27,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.881
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.794
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.935
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.907
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.931
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.943
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.24,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.967
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.3,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.962
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.29,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.966
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.22,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.947
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.93
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.93
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 46.5,
        "heikinAvg30d": 0.932
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 1.015
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 8.95,
        "heikin": 1.01,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.988
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 0.99,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 1.135
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 6.99,
        "heikin": 1.12,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 1.113
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 6.99,
        "heikin": 1.26,
        "boshuAvg30d": 42.5,
        "heikinAvg30d": 1.118
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 42.3,
        "heikinAvg30d": 1.134
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.136
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.096
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 6.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.112
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.49,
        "heikin": 1.25,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.132
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.55,
        "heikin": 1.32,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.118
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 1.33,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.105
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 6.8,
        "heikin": 1.31,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.905
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 6.8,
        "heikin": 1.31,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.834
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 6.6,
        "heikin": 1.3,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.8
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 6.49,
        "heikin": 1.29,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.76
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 202.343,
        "saikou": 7.55,
        "heikin": 1.32,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.817
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 6.05,
        "heikin": 1.25,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.775
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 116.467,
        "saikou": 4.89,
        "heikin": 2.43,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.224
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 120.389,
        "saikou": 4.87,
        "heikin": 2.44,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.916
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 120.279,
        "saikou": 4.87,
        "heikin": 2.44,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.686
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 88.307,
        "saikou": 2,
        "heikin": 1.2,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.58
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 160.393,
        "saikou": 1.39,
        "heikin": 0.71,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 4.343
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 171.393,
        "saikou": 1.39,
        "heikin": 0.67,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 4.665
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 221.025,
        "saikou": 0.98,
        "heikin": 0.53,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.926
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 249.16,
        "saikou": 1.39,
        "heikin": 0.55,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.228
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 270.338,
        "saikou": 1.39,
        "heikin": 0.56,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.303
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 257.414,
        "saikou": 1.39,
        "heikin": 0.56,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.617
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 259.398,
        "saikou": 1.39,
        "heikin": 0.56,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.828
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 254.122,
        "saikou": 2.1,
        "heikin": 0.59,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.913
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 257.122,
        "saikou": 1.84,
        "heikin": 0.58,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 5.83
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 271.982,
        "saikou": 1.85,
        "heikin": 0.58,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 5.988
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 272.982,
        "saikou": 2.01,
        "heikin": 0.59,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 5.029
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 271.632,
        "saikou": 1.39,
        "heikin": 0.56,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 4.445
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 107.632,
        "saikou": 1.39,
        "heikin": 0.95,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 4.388
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 191.632,
        "saikou": 9.88,
        "heikin": 2.82,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 4.129
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 243.532,
        "saikou": 8.55,
        "heikin": 2.33,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 4.03
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 240.682,
        "saikou": 8.5,
        "heikin": 2.89,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 3.607
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 157.527,
        "saikou": 7,
        "heikin": 4.12,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.513
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 238.564,
        "saikou": 4.49,
        "heikin": 1,
        "boshuAvg30d": 180.5,
        "heikinAvg30d": 3.523
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 254.99,
        "saikou": 1.38,
        "heikin": 0.63,
        "boshuAvg30d": 180.5,
        "heikinAvg30d": 3.168
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 158.031,
        "saikou": 1.94,
        "heikin": 0.77,
        "boshuAvg30d": 180.5,
        "heikinAvg30d": 2.958
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 248.205,
        "saikou": 0.98,
        "heikin": 0.52,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.102
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 223.166,
        "saikou": 0.83,
        "heikin": 0.48,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.152
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 231.755,
        "saikou": 1.36,
        "heikin": 0.47,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.656
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 250.694,
        "saikou": 5.32,
        "heikin": 1.62,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 4.152
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 273.672,
        "saikou": 8.24,
        "heikin": 2.58,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 4.44
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 271.66,
        "saikou": 9.46,
        "heikin": 3.56,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 5.025
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 260.76,
        "saikou": 10,
        "heikin": 4,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 5.142
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 189.63,
        "saikou": 10,
        "heikin": 3.45,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 5.582
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 131.67,
        "saikou": 10,
        "heikin": 4.75,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 6.196
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 244.78,
        "saikou": 5,
        "heikin": 1.12,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 6.69
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 232.81,
        "saikou": 7.5,
        "heikin": 1.29,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 6.853
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 236.135,
        "saikou": 5.89,
        "heikin": 1.26,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 6.991
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 231.06,
        "saikou": 7.2,
        "heikin": 1.52,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 7.042
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 235.068,
        "saikou": 5.65,
        "heikin": 1.27,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.872
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 239.021,
        "saikou": 6.86,
        "heikin": 1.44,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.617
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 231.384,
        "saikou": 9,
        "heikin": 1.49,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.562
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 240.385,
        "saikou": 3.99,
        "heikin": 1.07,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 6.385
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 160.255,
        "saikou": 6.86,
        "heikin": 1.64,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 6.435
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 177.122,
        "saikou": 3.99,
        "heikin": 0.9,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.305
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 165.124,
        "saikou": 3.99,
        "heikin": 0.93,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.796
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 158.14,
        "saikou": 3.99,
        "heikin": 1.03,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.716
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 162.422,
        "saikou": 2.27,
        "heikin": 0.95,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.633
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 188.05,
        "saikou": 2.15,
        "heikin": 0.78,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 5.47
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 115.461,
        "saikou": 5.94,
        "heikin": 2.91,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 4.824
      }
    ]
  }
};
