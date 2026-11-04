// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/05〜2026/11/03）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-04",
  "fetchedAt": "2026-11-04",
  "avgWindowLabel": "過去30日平均（2026/10/05〜2026/11/03）",
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
      "boshu": 1175,
      "ouatsu": 1604.726,
      "saikou": 9.32,
      "heikin": 2.48,
      "boshuAvg30d": 1048.5,
      "heikinAvg30d": 3.018
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1175,
      "ouatsu": 1625.489,
      "saikou": 10,
      "heikin": 2.27,
      "boshuAvg30d": 1048.5,
      "heikinAvg30d": 2.91
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1175,
      "ouatsu": 1632.848,
      "saikou": 10,
      "heikin": 2.43,
      "boshuAvg30d": 1048.5,
      "heikinAvg30d": 2.818
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1174,
      "ouatsu": 1622.485,
      "saikou": 10,
      "heikin": 2.21,
      "boshuAvg30d": 1048.4,
      "heikinAvg30d": 2.774
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1168,
      "ouatsu": 1690.56,
      "saikou": 9.97,
      "heikin": 1.96,
      "boshuAvg30d": 1045.1,
      "heikinAvg30d": 2.837
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1168,
      "ouatsu": 1593.642,
      "saikou": 9.7,
      "heikin": 2.13,
      "boshuAvg30d": 1044.2,
      "heikinAvg30d": 2.874
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1165,
      "ouatsu": 1704.249,
      "saikou": 9.27,
      "heikin": 2.47,
      "boshuAvg30d": 1044.1,
      "heikinAvg30d": 3.074
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1169,
      "ouatsu": 1672.594,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1046.3,
      "heikinAvg30d": 3.315
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1169,
      "ouatsu": 1733.929,
      "saikou": 9.73,
      "heikin": 2.48,
      "boshuAvg30d": 1048.1,
      "heikinAvg30d": 3.365
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1171,
      "ouatsu": 1721.782,
      "saikou": 9.73,
      "heikin": 2.31,
      "boshuAvg30d": 1049.2,
      "heikinAvg30d": 3.547
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1171,
      "ouatsu": 1683.422,
      "saikou": 9.92,
      "heikin": 2.63,
      "boshuAvg30d": 1049.2,
      "heikinAvg30d": 3.564
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1171,
      "ouatsu": 1727.213,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1049.2,
      "heikinAvg30d": 3.549
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1230,
      "ouatsu": 1598.981,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1109.1,
      "heikinAvg30d": 3.589
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1255,
      "ouatsu": 1673.654,
      "saikou": 10,
      "heikin": 2.43,
      "boshuAvg30d": 1132.3,
      "heikinAvg30d": 3.544
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1274,
      "ouatsu": 1697.983,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1153.1,
      "heikinAvg30d": 3.188
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1289,
      "ouatsu": 1669.874,
      "saikou": 9.73,
      "heikin": 2.88,
      "boshuAvg30d": 1170.2,
      "heikinAvg30d": 2.889
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1289,
      "ouatsu": 1735.917,
      "saikou": 9.44,
      "heikin": 2.41,
      "boshuAvg30d": 1170.5,
      "heikinAvg30d": 2.845
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1289,
      "ouatsu": 1609.318,
      "saikou": 7.93,
      "heikin": 2.54,
      "boshuAvg30d": 1174.4,
      "heikinAvg30d": 2.819
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1347,
      "ouatsu": 1633.476,
      "saikou": 9.39,
      "heikin": 2.59,
      "boshuAvg30d": 1130.5,
      "heikinAvg30d": 2.939
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1352,
      "ouatsu": 1596.879,
      "saikou": 9.39,
      "heikin": 2.54,
      "boshuAvg30d": 1133.7,
      "heikinAvg30d": 2.984
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1356,
      "ouatsu": 1756.389,
      "saikou": 9.39,
      "heikin": 2.41,
      "boshuAvg30d": 1136.3,
      "heikinAvg30d": 2.993
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1360,
      "ouatsu": 1751.281,
      "saikou": 9.39,
      "heikin": 2.23,
      "boshuAvg30d": 1136.7,
      "heikinAvg30d": 2.951
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1354,
      "ouatsu": 1787.749,
      "saikou": 9.39,
      "heikin": 2.34,
      "boshuAvg30d": 1133.4,
      "heikinAvg30d": 2.924
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1354,
      "ouatsu": 1765.786,
      "saikou": 9.39,
      "heikin": 2.32,
      "boshuAvg30d": 1132.5,
      "heikinAvg30d": 2.918
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1335,
      "ouatsu": 1698.396,
      "saikou": 9.44,
      "heikin": 1.88,
      "boshuAvg30d": 1112.3,
      "heikinAvg30d": 2.753
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1335,
      "ouatsu": 1686.983,
      "saikou": 9.44,
      "heikin": 2.01,
      "boshuAvg30d": 1112.3,
      "heikinAvg30d": 2.765
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1335,
      "ouatsu": 1508.82,
      "saikou": 9.8,
      "heikin": 2.43,
      "boshuAvg30d": 1112.3,
      "heikinAvg30d": 2.961
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1331,
      "ouatsu": 1573.732,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1109.8,
      "heikinAvg30d": 3.065
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1330,
      "ouatsu": 1602.574,
      "saikou": 9.81,
      "heikin": 2.67,
      "boshuAvg30d": 1107.0,
      "heikinAvg30d": 3.071
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1324,
      "ouatsu": 1516.574,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1101.0,
      "heikinAvg30d": 3.199
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1395,
      "ouatsu": 1730.035,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1150.3,
      "heikinAvg30d": 3.314
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1395,
      "ouatsu": 1805.597,
      "saikou": 10,
      "heikin": 3.54,
      "boshuAvg30d": 1149.9,
      "heikinAvg30d": 3.421
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1395,
      "ouatsu": 1779.956,
      "saikou": 10,
      "heikin": 3.8,
      "boshuAvg30d": 1150.5,
      "heikinAvg30d": 3.814
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1393,
      "ouatsu": 1692.87,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1149.4,
      "heikinAvg30d": 4.043
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1391,
      "ouatsu": 1713.42,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1141.1,
      "heikinAvg30d": 3.97
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1386,
      "ouatsu": 1684.571,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1136.1,
      "heikinAvg30d": 4.022
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1382,
      "ouatsu": 1619.139,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1130.2,
      "heikinAvg30d": 3.839
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1382,
      "ouatsu": 1682.647,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1130.2,
      "heikinAvg30d": 3.82
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1382,
      "ouatsu": 1775.507,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1130.2,
      "heikinAvg30d": 3.617
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1380,
      "ouatsu": 1738.211,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1129.5,
      "heikinAvg30d": 3.457
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1373,
      "ouatsu": 1515.768,
      "saikou": 10,
      "heikin": 2.52,
      "boshuAvg30d": 1121.6,
      "heikinAvg30d": 3.409
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1373,
      "ouatsu": 1580.964,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1121.6,
      "heikinAvg30d": 3.327
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1284,
      "ouatsu": 1716.382,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1043.1,
      "heikinAvg30d": 3.23
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1287,
      "ouatsu": 1648.909,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1046.1,
      "heikinAvg30d": 3.235
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1286,
      "ouatsu": 1859.427,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1049.9,
      "heikinAvg30d": 3.241
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1279,
      "ouatsu": 1792.24,
      "saikou": 9.71,
      "heikin": 3.12,
      "boshuAvg30d": 1041.7,
      "heikinAvg30d": 3.085
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1271,
      "ouatsu": 1792.574,
      "saikou": 9.47,
      "heikin": 2.93,
      "boshuAvg30d": 1033.2,
      "heikinAvg30d": 3.161
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1263,
      "ouatsu": 1744.817,
      "saikou": 8.32,
      "heikin": 2.39,
      "boshuAvg30d": 1025.4,
      "heikinAvg30d": 2.905
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
        "ouatsu": 114.908,
        "saikou": 2.45,
        "heikin": 2.4,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.16
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 160.39,
        "saikou": 2.3,
        "heikin": 1.85,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.156
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 149.958,
        "saikou": 1.63,
        "heikin": 1.06,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.007
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 115.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 3.905
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 166.208,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.255
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 3.903
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 119.408,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.232
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 136.238,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.342
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 167.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.408
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 165.758,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.258
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 119.408,
        "saikou": 3.35,
        "heikin": 1.04,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.518
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 157.671,
        "saikou": 2.86,
        "heikin": 2.22,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.629
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 116.408,
        "saikou": 5.71,
        "heikin": 4.14,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.391
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 137.778,
        "saikou": 3.89,
        "heikin": 3.6,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.522
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 165.408,
        "saikou": 6.5,
        "heikin": 2.75,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 3.976
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 114.458,
        "saikou": 7.8,
        "heikin": 2.47,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.007
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 183.908,
        "saikou": 9.44,
        "heikin": 2.79,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.103
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 146.958,
        "saikou": 7.5,
        "heikin": 2.81,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.434
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 195.246,
        "saikou": 6.15,
        "heikin": 2.47,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.548
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 144.958,
        "saikou": 8.18,
        "heikin": 2.66,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.531
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 195.246,
        "saikou": 6.2,
        "heikin": 3.27,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 4.046
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 146.958,
        "saikou": 6.8,
        "heikin": 2.63,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 3.178
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 193.256,
        "saikou": 7.2,
        "heikin": 3.4,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 4.018
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 191.306,
        "saikou": 7,
        "heikin": 3.36,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 3.847
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 148.908,
        "saikou": 9.44,
        "heikin": 3.24,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.771
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 191.328,
        "saikou": 9.44,
        "heikin": 3.39,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.699
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 148.908,
        "saikou": 9.8,
        "heikin": 2.79,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.385
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 169.296,
        "saikou": 9.44,
        "heikin": 4.33,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.902
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 163.908,
        "saikou": 3.79,
        "heikin": 2.12,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 3.92
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 203.968,
        "saikou": 4.25,
        "heikin": 2.97,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.853
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 254.246,
        "saikou": 4.24,
        "heikin": 3.67,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 4.162
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 213.296,
        "saikou": 4.74,
        "heikin": 4.47,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 4.992
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 181.94,
        "saikou": 6.52,
        "heikin": 6.21,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 6.205
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 182.508,
        "saikou": 6.51,
        "heikin": 5.33,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 6.336
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 168.918,
        "saikou": 6.09,
        "heikin": 5.95,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 5.807
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 211.508,
        "saikou": 6.3,
        "heikin": 5.33,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 5.997
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 115.918,
        "saikou": 5.5,
        "heikin": 5.39,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 5.635
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 177.968,
        "saikou": 6.21,
        "heikin": 6.08,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 5.714
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 181.208,
        "saikou": 5.88,
        "heikin": 4.98,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 5.49
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 128.968,
        "saikou": 5.93,
        "heikin": 5.82,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 5.366
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 174.25,
        "saikou": 7.57,
        "heikin": 6.04,
        "boshuAvg30d": 46.4,
        "heikinAvg30d": 5.043
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 110.968,
        "saikou": 6.46,
        "heikin": 6.07,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 4.503
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 164.218,
        "saikou": 4.68,
        "heikin": 4.3,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 4.634
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 113.968,
        "saikou": 4.23,
        "heikin": 4.11,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.717
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 164.218,
        "saikou": 3.97,
        "heikin": 3.84,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.748
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 113.968,
        "saikou": 3.72,
        "heikin": 3.49,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.381
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 164.218,
        "saikou": 3.7,
        "heikin": 3.28,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.659
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 127.86,
        "saikou": 2.44,
        "heikin": 2.43,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.058
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 83.39,
        "saikou": 8.19,
        "heikin": 5.08,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 5.529
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 83.39,
        "saikou": 10,
        "heikin": 5.21,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 5.647
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 103.268,
        "saikou": 10,
        "heikin": 5.58,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 5.629
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 105.228,
        "saikou": 10,
        "heikin": 5.41,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 5.596
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 101.34,
        "saikou": 9.97,
        "heikin": 5.22,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 5.557
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 88.77,
        "saikou": 9.7,
        "heikin": 5.56,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 5.516
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 102.378,
        "saikou": 8.32,
        "heikin": 5.03,
        "boshuAvg30d": 117.6,
        "heikinAvg30d": 5.472
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 105.228,
        "saikou": 10,
        "heikin": 4.91,
        "boshuAvg30d": 117.7,
        "heikinAvg30d": 5.372
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 109.226,
        "saikou": 8.32,
        "heikin": 4.89,
        "boshuAvg30d": 117.6,
        "heikinAvg30d": 5.162
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 109.226,
        "saikou": 8.32,
        "heikin": 4.47,
        "boshuAvg30d": 117.7,
        "heikinAvg30d": 5.177
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 107.876,
        "saikou": 8.17,
        "heikin": 4.86,
        "boshuAvg30d": 117.7,
        "heikinAvg30d": 5.429
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 109.226,
        "saikou": 7.81,
        "heikin": 4.63,
        "boshuAvg30d": 117.7,
        "heikinAvg30d": 5.517
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 109.226,
        "saikou": 10,
        "heikin": 4.81,
        "boshuAvg30d": 124.7,
        "heikinAvg30d": 5.749
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 107.726,
        "saikou": 7.25,
        "heikin": 4.27,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 5.848
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 85.226,
        "saikou": 10,
        "heikin": 4.88,
        "boshuAvg30d": 132.6,
        "heikinAvg30d": 6.212
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 83.726,
        "saikou": 5.65,
        "heikin": 3.86,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 6.345
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 85.226,
        "saikou": 4.04,
        "heikin": 3.28,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 6.336
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 83.726,
        "saikou": 4.18,
        "heikin": 3.03,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 6.403
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 100.552,
        "saikou": 4.3,
        "heikin": 3.41,
        "boshuAvg30d": 78.5,
        "heikinAvg30d": 6.239
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 96.722,
        "saikou": 4.63,
        "heikin": 3.63,
        "boshuAvg30d": 78.6,
        "heikinAvg30d": 6.403
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 94.697,
        "saikou": 4.65,
        "heikin": 3.57,
        "boshuAvg30d": 77.7,
        "heikinAvg30d": 6.42
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 92.767,
        "saikou": 4.73,
        "heikin": 3.71,
        "boshuAvg30d": 77.8,
        "heikinAvg30d": 6.58
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 96.722,
        "saikou": 4.72,
        "heikin": 3.7,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 6.566
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 96.722,
        "saikou": 4.73,
        "heikin": 3.76,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 6.598
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 108.95,
        "saikou": 4.77,
        "heikin": 3.44,
        "boshuAvg30d": 74.6,
        "heikinAvg30d": 6.601
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 96.656,
        "saikou": 4.73,
        "heikin": 3.68,
        "boshuAvg30d": 74.6,
        "heikinAvg30d": 6.568
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 99.202,
        "saikou": 4.22,
        "heikin": 3.27,
        "boshuAvg30d": 74.6,
        "heikinAvg30d": 5.906
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 96.722,
        "saikou": 3.88,
        "heikin": 3.36,
        "boshuAvg30d": 73.6,
        "heikinAvg30d": 5.882
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 96.722,
        "saikou": 2.35,
        "heikin": 1.99,
        "boshuAvg30d": 73.6,
        "heikinAvg30d": 5.944
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 96.656,
        "saikou": 10,
        "heikin": 5.92,
        "boshuAvg30d": 71.7,
        "heikinAvg30d": 5.286
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 111.222,
        "saikou": 6,
        "heikin": 3.33,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 5.171
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 111.222,
        "saikou": 9.5,
        "heikin": 3.93,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 4.467
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 85.221,
        "saikou": 9.5,
        "heikin": 4.81,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 4.219
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 85.722,
        "saikou": 9.5,
        "heikin": 4.84,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 4.22
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 87.222,
        "saikou": 9.98,
        "heikin": 5.48,
        "boshuAvg30d": 132.6,
        "heikinAvg30d": 4.293
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 85.722,
        "saikou": 5.06,
        "heikin": 3.72,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 4.185
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 85.226,
        "saikou": 5.06,
        "heikin": 3.18,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 3.876
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 83.726,
        "saikou": 4.42,
        "heikin": 2.96,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 3.56
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 85.226,
        "saikou": 4.76,
        "heikin": 3.06,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 3.412
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 85.226,
        "saikou": 4.76,
        "heikin": 3.14,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 3.749
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 79.27,
        "saikou": 3.19,
        "heikin": 2.55,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 3.705
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 81.271,
        "saikou": 4.18,
        "heikin": 2.78,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 3.887
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 107.326,
        "saikou": 5.91,
        "heikin": 3.53,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 4.085
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 93.376,
        "saikou": 6.44,
        "heikin": 3.98,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 4.015
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 109.226,
        "saikou": 6.67,
        "heikin": 4.18,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 4.02
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 94.726,
        "saikou": 7.05,
        "heikin": 4.28,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 4.388
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 109.226,
        "saikou": 7.62,
        "heikin": 3.57,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.451
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 91.23,
        "saikou": 8.32,
        "heikin": 4.15,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 5.053
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 283,
        "ouatsu": 400.576,
        "saikou": 7.6,
        "heikin": 2.37,
        "boshuAvg30d": 236.8,
        "heikinAvg30d": 3.41
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 283,
        "ouatsu": 358.596,
        "saikou": 7.4,
        "heikin": 2.25,
        "boshuAvg30d": 236.8,
        "heikinAvg30d": 3.344
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 283,
        "ouatsu": 376.22,
        "saikou": 7.74,
        "heikin": 2.07,
        "boshuAvg30d": 236.8,
        "heikinAvg30d": 3.183
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 283,
        "ouatsu": 375.74,
        "saikou": 7.31,
        "heikin": 1.77,
        "boshuAvg30d": 236.8,
        "heikinAvg30d": 3.19
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 281,
        "ouatsu": 399.833,
        "saikou": 7.73,
        "heikin": 1.74,
        "boshuAvg30d": 235.7,
        "heikinAvg30d": 3.224
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 281,
        "ouatsu": 396.773,
        "saikou": 7.86,
        "heikin": 1.89,
        "boshuAvg30d": 234.8,
        "heikinAvg30d": 3.017
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 279,
        "ouatsu": 388.561,
        "saikou": 7.75,
        "heikin": 1.91,
        "boshuAvg30d": 232.8,
        "heikinAvg30d": 3.273
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 281,
        "ouatsu": 374.939,
        "saikou": 7.32,
        "heikin": 1.85,
        "boshuAvg30d": 234.8,
        "heikinAvg30d": 3.426
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 281,
        "ouatsu": 380.996,
        "saikou": 7.76,
        "heikin": 1.72,
        "boshuAvg30d": 234.8,
        "heikinAvg30d": 3.395
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 282,
        "ouatsu": 384.737,
        "saikou": 3.98,
        "heikin": 1.34,
        "boshuAvg30d": 235.8,
        "heikinAvg30d": 3.579
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 282,
        "ouatsu": 401.369,
        "saikou": 3.5,
        "heikin": 1.38,
        "boshuAvg30d": 235.8,
        "heikinAvg30d": 3.47
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 282,
        "ouatsu": 410.47,
        "saikou": 5.76,
        "heikin": 1.73,
        "boshuAvg30d": 235.8,
        "heikinAvg30d": 3.68
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 302,
        "ouatsu": 311.886,
        "saikou": 6.65,
        "heikin": 3.38,
        "boshuAvg30d": 254.9,
        "heikinAvg30d": 3.706
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 310,
        "ouatsu": 407.856,
        "saikou": 6.76,
        "heikin": 2.26,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 4.003
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 314,
        "ouatsu": 437.523,
        "saikou": 6.49,
        "heikin": 2.37,
        "boshuAvg30d": 267.8,
        "heikinAvg30d": 3.61
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 319,
        "ouatsu": 418.741,
        "saikou": 6.68,
        "heikin": 3.24,
        "boshuAvg30d": 273.1,
        "heikinAvg30d": 3.208
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 319,
        "ouatsu": 490.566,
        "saikou": 6.81,
        "heikin": 1.98,
        "boshuAvg30d": 273.4,
        "heikinAvg30d": 3.027
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 319,
        "ouatsu": 510.193,
        "saikou": 6.56,
        "heikin": 2.71,
        "boshuAvg30d": 277.3,
        "heikinAvg30d": 3.11
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 309,
        "ouatsu": 465.846,
        "saikou": 6.47,
        "heikin": 2.48,
        "boshuAvg30d": 269.1,
        "heikinAvg30d": 3.004
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 309,
        "ouatsu": 510.137,
        "saikou": 6.7,
        "heikin": 2.2,
        "boshuAvg30d": 269.1,
        "heikinAvg30d": 3.091
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 309,
        "ouatsu": 482.133,
        "saikou": 7.13,
        "heikin": 1.81,
        "boshuAvg30d": 269.7,
        "heikinAvg30d": 3.07
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 309,
        "ouatsu": 463.638,
        "saikou": 7.12,
        "heikin": 1.83,
        "boshuAvg30d": 268.8,
        "heikinAvg30d": 3.005
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 306,
        "ouatsu": 465.044,
        "saikou": 7.13,
        "heikin": 2.01,
        "boshuAvg30d": 266.7,
        "heikinAvg30d": 3.028
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 306,
        "ouatsu": 459.542,
        "saikou": 7.13,
        "heikin": 2.1,
        "boshuAvg30d": 266.7,
        "heikinAvg30d": 3.066
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 304,
        "ouatsu": 414.026,
        "saikou": 7.2,
        "heikin": 1.25,
        "boshuAvg30d": 263.5,
        "heikinAvg30d": 2.822
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 304,
        "ouatsu": 436.469,
        "saikou": 7.2,
        "heikin": 1.4,
        "boshuAvg30d": 263.5,
        "heikinAvg30d": 2.805
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 304,
        "ouatsu": 387.774,
        "saikou": 7.2,
        "heikin": 2.78,
        "boshuAvg30d": 263.5,
        "heikinAvg30d": 3.073
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 304,
        "ouatsu": 437.934,
        "saikou": 7.2,
        "heikin": 2.78,
        "boshuAvg30d": 263.2,
        "heikinAvg30d": 3.057
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 303,
        "ouatsu": 450.196,
        "saikou": 6.66,
        "heikin": 2.87,
        "boshuAvg30d": 262.2,
        "heikinAvg30d": 3.004
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 303,
        "ouatsu": 436.76,
        "saikou": 6.6,
        "heikin": 2.62,
        "boshuAvg30d": 261.3,
        "heikinAvg30d": 2.855
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 301,
        "ouatsu": 494.964,
        "saikou": 6.54,
        "heikin": 2.58,
        "boshuAvg30d": 259.3,
        "heikinAvg30d": 2.815
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 301,
        "ouatsu": 514.01,
        "saikou": 6.84,
        "heikin": 2.89,
        "boshuAvg30d": 258.9,
        "heikinAvg30d": 2.795
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 301,
        "ouatsu": 508.956,
        "saikou": 6.65,
        "heikin": 3.08,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.764
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 301,
        "ouatsu": 501.158,
        "saikou": 6.65,
        "heikin": 3.01,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.736
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 301,
        "ouatsu": 506.826,
        "saikou": 6.65,
        "heikin": 2.91,
        "boshuAvg30d": 256.6,
        "heikinAvg30d": 2.626
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 301,
        "ouatsu": 503.222,
        "saikou": 6.65,
        "heikin": 2.72,
        "boshuAvg30d": 256.6,
        "heikinAvg30d": 2.65
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 303,
        "ouatsu": 524.061,
        "saikou": 6.65,
        "heikin": 2.56,
        "boshuAvg30d": 258.5,
        "heikinAvg30d": 2.852
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 303,
        "ouatsu": 524.424,
        "saikou": 6.65,
        "heikin": 2.47,
        "boshuAvg30d": 258.5,
        "heikinAvg30d": 2.642
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 303,
        "ouatsu": 528.274,
        "saikou": 6.64,
        "heikin": 2.51,
        "boshuAvg30d": 258.5,
        "heikinAvg30d": 2.699
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 303,
        "ouatsu": 537.255,
        "saikou": 6.63,
        "heikin": 2.75,
        "boshuAvg30d": 258.9,
        "heikinAvg30d": 2.506
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 302,
        "ouatsu": 434.016,
        "saikou": 4.05,
        "heikin": 1.9,
        "boshuAvg30d": 257.0,
        "heikinAvg30d": 2.449
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 302,
        "ouatsu": 550.148,
        "saikou": 6.96,
        "heikin": 2.54,
        "boshuAvg30d": 257.0,
        "heikinAvg30d": 2.676
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 301,
        "ouatsu": 533.161,
        "saikou": 6.62,
        "heikin": 3.31,
        "boshuAvg30d": 256.9,
        "heikinAvg30d": 2.377
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 301,
        "ouatsu": 534.456,
        "saikou": 6.7,
        "heikin": 3.46,
        "boshuAvg30d": 256.9,
        "heikinAvg30d": 2.414
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 301,
        "ouatsu": 550.615,
        "saikou": 6.49,
        "heikin": 2.42,
        "boshuAvg30d": 259.9,
        "heikinAvg30d": 2.366
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 299,
        "ouatsu": 565.958,
        "saikou": 6.66,
        "heikin": 2.94,
        "boshuAvg30d": 254.9,
        "heikinAvg30d": 2.475
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 297,
        "ouatsu": 444.951,
        "saikou": 6.69,
        "heikin": 3.13,
        "boshuAvg30d": 253.2,
        "heikinAvg30d": 3.001
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 296,
        "ouatsu": 449.581,
        "saikou": 7.5,
        "heikin": 2.59,
        "boshuAvg30d": 251.5,
        "heikinAvg30d": 3.086
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 181,
        "ouatsu": 351.987,
        "saikou": 2.88,
        "heikin": 1.25,
        "boshuAvg30d": 108.3,
        "heikinAvg30d": 1.64
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 181,
        "ouatsu": 377.44,
        "saikou": 3.88,
        "heikin": 1.66,
        "boshuAvg30d": 108.3,
        "heikinAvg30d": 1.53
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 181,
        "ouatsu": 377.454,
        "saikou": 3.88,
        "heikin": 1.63,
        "boshuAvg30d": 108.3,
        "heikinAvg30d": 1.56
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 180,
        "ouatsu": 399.647,
        "saikou": 3.53,
        "heikin": 1.7,
        "boshuAvg30d": 108.2,
        "heikinAvg30d": 1.617
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 180,
        "ouatsu": 353.53,
        "saikou": 3.88,
        "heikin": 1.39,
        "boshuAvg30d": 107.3,
        "heikinAvg30d": 1.6
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 179,
        "ouatsu": 330.768,
        "saikou": 3.88,
        "heikin": 1.36,
        "boshuAvg30d": 107.2,
        "heikinAvg30d": 1.571
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 178,
        "ouatsu": 356.603,
        "saikou": 3.88,
        "heikin": 1.31,
        "boshuAvg30d": 106.2,
        "heikinAvg30d": 1.443
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 178,
        "ouatsu": 331.315,
        "saikou": 3.88,
        "heikin": 1.21,
        "boshuAvg30d": 106.2,
        "heikinAvg30d": 1.501
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 178,
        "ouatsu": 336.891,
        "saikou": 3.88,
        "heikin": 1.06,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 1.449
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 178,
        "ouatsu": 339.184,
        "saikou": 3.88,
        "heikin": 1.1,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 1.439
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 178,
        "ouatsu": 341.174,
        "saikou": 1.73,
        "heikin": 0.93,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 1.414
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 178,
        "ouatsu": 337.69,
        "saikou": 1.74,
        "heikin": 0.89,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 1.344
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 188,
        "ouatsu": 401.003,
        "saikou": 3.1,
        "heikin": 1.15,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.603
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 193,
        "ouatsu": 401.003,
        "saikou": 1.87,
        "heikin": 0.78,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 1.672
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 196,
        "ouatsu": 379.193,
        "saikou": 1.92,
        "heikin": 0.98,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 1.941
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 399.503,
        "saikou": 2.01,
        "heikin": 0.93,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 2.033
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 399.503,
        "saikou": 3.99,
        "heikin": 1.78,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 2.039
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 317.475,
        "saikou": 5.88,
        "heikin": 1.54,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 2.193
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 203,
        "ouatsu": 319.428,
        "saikou": 9.39,
        "heikin": 2.02,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 2.648
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 203,
        "ouatsu": 322.527,
        "saikou": 9.39,
        "heikin": 2.15,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 2.671
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 203,
        "ouatsu": 372.548,
        "saikou": 9.39,
        "heikin": 2.54,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 2.791
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 203,
        "ouatsu": 380.56,
        "saikou": 9.39,
        "heikin": 2.36,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 2.776
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 202,
        "ouatsu": 372.645,
        "saikou": 9.39,
        "heikin": 2.35,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 2.636
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 201,
        "ouatsu": 360.264,
        "saikou": 9.39,
        "heikin": 2.26,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 2.676
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 197,
        "ouatsu": 325.603,
        "saikou": 4.69,
        "heikin": 2.24,
        "boshuAvg30d": 124.3,
        "heikinAvg30d": 2.61
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 197,
        "ouatsu": 270.691,
        "saikou": 9.39,
        "heikin": 2.42,
        "boshuAvg30d": 124.3,
        "heikinAvg30d": 2.544
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 197,
        "ouatsu": 311.755,
        "saikou": 9.39,
        "heikin": 1.66,
        "boshuAvg30d": 124.3,
        "heikinAvg30d": 2.613
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 197,
        "ouatsu": 332.604,
        "saikou": 9.39,
        "heikin": 1.72,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 2.702
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 197,
        "ouatsu": 378.31,
        "saikou": 9.39,
        "heikin": 1.73,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 2.933
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 197,
        "ouatsu": 278.347,
        "saikou": 9.49,
        "heikin": 1.9,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 2.852
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 195,
        "ouatsu": 377.66,
        "saikou": 9.49,
        "heikin": 1.84,
        "boshuAvg30d": 121.4,
        "heikinAvg30d": 2.785
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 195,
        "ouatsu": 410.877,
        "saikou": 9.49,
        "heikin": 1.78,
        "boshuAvg30d": 121.4,
        "heikinAvg30d": 2.9
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 195,
        "ouatsu": 360.195,
        "saikou": 9.49,
        "heikin": 1.74,
        "boshuAvg30d": 121.4,
        "heikinAvg30d": 2.764
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 194,
        "ouatsu": 350,
        "saikou": 9.49,
        "heikin": 1.83,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.775
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 194,
        "ouatsu": 340.8,
        "saikou": 9.49,
        "heikin": 1.67,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.613
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 193,
        "ouatsu": 325.496,
        "saikou": 9.49,
        "heikin": 1.52,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 2.521
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 191,
        "ouatsu": 363.991,
        "saikou": 9.49,
        "heikin": 1.42,
        "boshuAvg30d": 118.3,
        "heikinAvg30d": 2.151
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 191,
        "ouatsu": 363.764,
        "saikou": 9.49,
        "heikin": 1.41,
        "boshuAvg30d": 118.3,
        "heikinAvg30d": 2.068
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 191,
        "ouatsu": 410.479,
        "saikou": 9.49,
        "heikin": 1.22,
        "boshuAvg30d": 118.3,
        "heikinAvg30d": 1.763
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 191,
        "ouatsu": 412.463,
        "saikou": 9.49,
        "heikin": 1.29,
        "boshuAvg30d": 118.3,
        "heikinAvg30d": 1.632
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 191,
        "ouatsu": 402.558,
        "saikou": 9.32,
        "heikin": 1.24,
        "boshuAvg30d": 118.3,
        "heikinAvg30d": 1.522
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 191,
        "ouatsu": 400.574,
        "saikou": 9.32,
        "heikin": 1.22,
        "boshuAvg30d": 118.3,
        "heikinAvg30d": 1.57
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 193,
        "ouatsu": 408.483,
        "saikou": 9.32,
        "heikin": 1.21,
        "boshuAvg30d": 119.4,
        "heikinAvg30d": 1.499
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 193,
        "ouatsu": 390.483,
        "saikou": 9.32,
        "heikin": 1.58,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 1.743
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 193,
        "ouatsu": 388.278,
        "saikou": 9.32,
        "heikin": 1.96,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 1.731
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 408.483,
        "saikou": 9.32,
        "heikin": 2.06,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 1.799
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 190,
        "ouatsu": 408.483,
        "saikou": 4.88,
        "heikin": 1.91,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 1.667
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 187,
        "ouatsu": 404.999,
        "saikou": 4.88,
        "heikin": 1.88,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 1.773
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 2.55,
        "heikin": 0.52,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 1.276
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 61.48,
        "saikou": 2.05,
        "heikin": 0.58,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 1.235
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 61.93,
        "saikou": 1.85,
        "heikin": 0.44,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 1.243
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 61.93,
        "saikou": 2.25,
        "heikin": 0.45,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 1.122
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 63.928,
        "saikou": 1.75,
        "heikin": 0.51,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.286
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 1.5,
        "heikin": 0.71,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 1.339
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 1.35,
        "heikin": 0.7,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 1.769
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 1.95,
        "heikin": 0.93,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 2.125
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 0.8,
        "heikin": 0.67,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 1.924
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 0.8,
        "heikin": 0.67,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 2.056
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 9.9,
        "heikin": 9.57,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 2.121
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 7.42,
        "heikin": 7.14,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 2.027
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 9.198,
        "saikou": 2.35,
        "heikin": 1.31,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.991
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 14.004,
        "saikou": 2.15,
        "heikin": 2.15,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 2.064
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 17.936,
        "saikou": 0.49,
        "heikin": 0.49,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.429
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 11.922,
        "saikou": 0.49,
        "heikin": 0.49,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.097
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.65,
        "heikin": 3.65,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 3.049
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.27,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.892
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 28.928,
        "saikou": 3.3,
        "heikin": 2.91,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 3.308
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 28.928,
        "saikou": 4.64,
        "heikin": 4.51,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 3.675
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 28.928,
        "saikou": 5.55,
        "heikin": 4.06,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 4.35
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 28.928,
        "saikou": 6.96,
        "heikin": 4.85,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 4.462
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 25.91,
        "saikou": 4.9,
        "heikin": 4.6,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.512
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 25.758,
        "saikou": 4.9,
        "heikin": 4.25,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.274
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 2.498
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 63.928,
        "saikou": 4.65,
        "heikin": 0.65,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 2.226
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 28.928,
        "saikou": 5.95,
        "heikin": 5.12,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 3.786
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.73,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 3.13
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.05,
        "heikin": 4.9,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 3.787
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.35,
        "heikin": 4.25,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 3.721
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 6.25,
        "heikin": 6.2,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 4.953
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 7.25,
        "heikin": 7.15,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 5.731
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.55,
        "heikin": 4.4,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 4.577
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 4,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 4.144
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 28.928,
        "saikou": 9.59,
        "heikin": 8.84,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 3.814
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 46.752,
        "saikou": 10,
        "heikin": 9.5,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 4.297
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 28.928,
        "saikou": 7.2,
        "heikin": 6.55,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 3.479
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 28.928,
        "saikou": 7.11,
        "heikin": 6.65,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 4.114
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 28.928,
        "saikou": 7.2,
        "heikin": 6.52,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 3.173
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 28.928,
        "saikou": 6.43,
        "heikin": 6.03,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 3.222
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 23.44,
        "saikou": 5.7,
        "heikin": 5.13,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.691
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 27.238,
        "saikou": 5.13,
        "heikin": 4.84,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.419
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.65,
        "heikin": 3.22,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.489
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 16.362,
        "saikou": 5.7,
        "heikin": 5.11,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.469
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 42.828,
        "saikou": 6,
        "heikin": 5.52,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.723
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 52.044,
        "saikou": 5.32,
        "heikin": 4.97,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.269
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 54.804,
        "saikou": 5.32,
        "heikin": 4.96,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.032
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 58.378,
        "saikou": 2.45,
        "heikin": 0.78,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.602
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 125,
        "ouatsu": 149.182,
        "saikou": 1.44,
        "heikin": 0.87,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.259
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 125,
        "ouatsu": 175.521,
        "saikou": 1.69,
        "heikin": 0.82,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.044
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 125,
        "ouatsu": 121.517,
        "saikou": 1.69,
        "heikin": 0.55,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.014
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 125,
        "ouatsu": 119.481,
        "saikou": 1.69,
        "heikin": 0.63,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 0.998
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 161.316,
        "saikou": 1.69,
        "heikin": 0.76,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 0.985
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 152.979,
        "saikou": 1.44,
        "heikin": 0.93,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 1.195
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 124,
        "ouatsu": 97.693,
        "saikou": 1.4,
        "heikin": 1.34,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 1.306
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 101.681,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 1.5
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 125,
        "ouatsu": 101.681,
        "saikou": 1.59,
        "heikin": 1.55,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.466
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 125,
        "ouatsu": 101.681,
        "saikou": 1.59,
        "heikin": 1.43,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.514
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 125,
        "ouatsu": 101.681,
        "saikou": 1.59,
        "heikin": 1.52,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.501
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 125,
        "ouatsu": 101.681,
        "saikou": 1.5,
        "heikin": 1.43,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 1.439
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 135,
        "ouatsu": 101.681,
        "saikou": 1.4,
        "heikin": 1.36,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 1.509
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 139,
        "ouatsu": 121.295,
        "saikou": 1.94,
        "heikin": 1.29,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.485
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 144,
        "ouatsu": 99.562,
        "saikou": 1.94,
        "heikin": 1.7,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.526
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 99.562,
        "saikou": 1.94,
        "heikin": 1.79,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 1.591
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 103.558,
        "saikou": 2.09,
        "heikin": 1.83,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 1.612
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 109.544,
        "saikou": 3.94,
        "heikin": 2.85,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.114
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 107.546,
        "saikou": 3,
        "heikin": 2.49,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 2.186
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 109.544,
        "saikou": 3.94,
        "heikin": 2.83,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 2.216
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 146.781,
        "saikou": 5.94,
        "heikin": 2.28,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 2.238
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 188.47,
        "saikou": 5.94,
        "heikin": 1.81,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 2.406
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 189.012,
        "saikou": 5.94,
        "heikin": 1.79,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 2.448
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 189.012,
        "saikou": 3,
        "heikin": 1.55,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 2.194
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 188.457,
        "saikou": 3,
        "heikin": 1.39,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 1.971
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 192.325,
        "saikou": 3,
        "heikin": 1.35,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.07
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 168.38,
        "saikou": 5.94,
        "heikin": 1.96,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.431
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 129.158,
        "saikou": 3,
        "heikin": 1.87,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.235
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 109.544,
        "saikou": 4.44,
        "heikin": 2.68,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.262
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 109.544,
        "saikou": 3,
        "heikin": 2.35,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 2.056
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 139.807,
        "saikou": 3,
        "heikin": 1.94,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.393
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 94.544,
        "saikou": 3,
        "heikin": 2.67,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.572
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 94.544,
        "saikou": 3,
        "heikin": 2.7,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.516
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 88.558,
        "saikou": 2.38,
        "heikin": 2.08,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.126
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 88.558,
        "saikou": 2.5,
        "heikin": 2.18,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.177
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 88.558,
        "saikou": 2.5,
        "heikin": 2.25,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 2.438
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 85.155,
        "saikou": 1.95,
        "heikin": 1.69,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.873
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 85.155,
        "saikou": 1.91,
        "heikin": 1.65,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.908
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 94.544,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.769
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 94.544,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 1.743
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 92.559,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 1.667
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 90.689,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.689
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 105.677,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.653
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 105.677,
        "saikou": 1.99,
        "heikin": 1.76,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.768
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 105.677,
        "saikou": 1.99,
        "heikin": 1.75,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.749
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 105.677,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 1.587
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 168.51,
        "saikou": 1.99,
        "heikin": 1.19,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 1.409
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 105.677,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 1.601
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 143,
        "ouatsu": 74.176,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.363
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 143,
        "ouatsu": 74.169,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.497
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 143,
        "ouatsu": 75.968,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.212
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 143,
        "ouatsu": 77.97,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.035
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 143,
        "ouatsu": 77.874,
        "saikou": 2.29,
        "heikin": 1.97,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.083
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 143,
        "ouatsu": 77.935,
        "saikou": 2.29,
        "heikin": 2.02,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.334
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 143,
        "ouatsu": 94.632,
        "saikou": 2.29,
        "heikin": 1.97,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.544
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 144,
        "ouatsu": 94.59,
        "saikou": 2.29,
        "heikin": 2.02,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.897
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 144,
        "ouatsu": 94.416,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 3.25
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 144,
        "ouatsu": 75.222,
        "saikou": 2.29,
        "heikin": 1.84,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 3.608
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 144,
        "ouatsu": 69.86,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 3.416
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 144,
        "ouatsu": 69.801,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 3.261
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 146,
        "ouatsu": 68.833,
        "saikou": 2.29,
        "heikin": 1.9,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 3.218
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 147,
        "ouatsu": 74.222,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.033
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 147,
        "ouatsu": 108.863,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.132
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 148,
        "ouatsu": 137.69,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.849
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 148,
        "ouatsu": 105.956,
        "saikou": 2.29,
        "heikin": 1.9,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.957
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 148,
        "ouatsu": 74.222,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.985
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 88.072,
        "saikou": 2.29,
        "heikin": 1.9,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.173
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 152,
        "ouatsu": 72.205,
        "saikou": 2.7,
        "heikin": 1.95,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.203
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 153,
        "ouatsu": 74.198,
        "saikou": 2.29,
        "heikin": 2.01,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 1.777
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 154,
        "ouatsu": 90.065,
        "saikou": 2.29,
        "heikin": 1.9,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.794
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 154,
        "ouatsu": 90.065,
        "saikou": 2.29,
        "heikin": 1.92,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.698
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 154,
        "ouatsu": 90.065,
        "saikou": 2.29,
        "heikin": 1.82,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.792
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 151,
        "ouatsu": 90.065,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 1.59
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 151,
        "ouatsu": 90.065,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 1.835
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 151,
        "ouatsu": 102.015,
        "saikou": 7.98,
        "heikin": 2.04,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 1.939
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 151,
        "ouatsu": 117.882,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 1.911
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 151,
        "ouatsu": 117.882,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 1.973
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 150,
        "ouatsu": 98.287,
        "saikou": 2.57,
        "heikin": 2.07,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.039
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 150,
        "ouatsu": 36.586,
        "saikou": 7.99,
        "heikin": 2.53,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.307
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 150,
        "ouatsu": 69.098,
        "saikou": 7.99,
        "heikin": 2.41,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.456
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 150,
        "ouatsu": 69.098,
        "saikou": 2.9,
        "heikin": 2.36,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.04
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 150,
        "ouatsu": 69.098,
        "saikou": 7.99,
        "heikin": 2.6,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.788
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 150,
        "ouatsu": 57.148,
        "saikou": 7.99,
        "heikin": 2.71,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 4.002
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 150,
        "ouatsu": 57.148,
        "saikou": 2.93,
        "heikin": 2.5,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 4.085
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 150,
        "ouatsu": 56.158,
        "saikou": 2.93,
        "heikin": 2.47,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 4.121
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 150,
        "ouatsu": 56.158,
        "saikou": 2.93,
        "heikin": 2.47,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 4.079
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 150,
        "ouatsu": 74.042,
        "saikou": 2.7,
        "heikin": 1.85,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.824
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 150,
        "ouatsu": 76.032,
        "saikou": 2.7,
        "heikin": 1.84,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 3.594
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 149,
        "ouatsu": 76.032,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.973
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 149,
        "ouatsu": 76.032,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.809
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 76.032,
        "saikou": 2.29,
        "heikin": 1.84,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 3.855
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 76.032,
        "saikou": 2.29,
        "heikin": 1.84,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 3.652
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 76.032,
        "saikou": 2.29,
        "heikin": 1.84,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 3.507
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 147,
        "ouatsu": 76.032,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.997
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 146,
        "ouatsu": 76.032,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.965
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 146,
        "ouatsu": 140.683,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.077
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.38,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.874
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.45,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.828
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.778
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.45,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.782
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.37,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.789
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.36,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.776
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 235.343,
        "saikou": 0.38,
        "heikin": 0.34,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.79
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 222.8,
        "saikou": 0.38,
        "heikin": 0.34,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.821
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 235.343,
        "saikou": 1.55,
        "heikin": 0.41,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.865
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 236.343,
        "saikou": 1.7,
        "heikin": 0.51,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.93
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 235.343,
        "saikou": 1.7,
        "heikin": 0.42,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.903
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 234.343,
        "saikou": 1.7,
        "heikin": 0.39,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.867
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 235.343,
        "saikou": 1.7,
        "heikin": 0.58,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 1.008
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 235.343,
        "saikou": 1.7,
        "heikin": 0.67,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 0.912
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 182.843,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.841
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 182.843,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.852
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 182.843,
        "saikou": 1,
        "heikin": 0.4,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.822
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 182.843,
        "saikou": 1.7,
        "heikin": 0.5,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.851
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 0.87,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.114
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 0.87,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.056
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 0.87,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.091
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 0.77,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.01
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 0.79,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.05
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 148.843,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.062
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 164.843,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.05
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 0.67,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.069
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.064
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.94,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.093
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.94,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.155
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 114.843,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.1
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 137.843,
        "saikou": 1.7,
        "heikin": 1.11,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 1.163
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 0.91,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 1.211
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 101.843,
        "saikou": 1.99,
        "heikin": 0.98,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 1.392
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 101.843,
        "saikou": 6.91,
        "heikin": 1.52,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.52
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 101.843,
        "saikou": 6.91,
        "heikin": 1.56,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 1.615
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 101.843,
        "saikou": 6.91,
        "heikin": 1.57,
        "boshuAvg30d": 42.9,
        "heikinAvg30d": 1.647
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 101.843,
        "saikou": 6.26,
        "heikin": 1.49,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.596
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 101.843,
        "saikou": 3.99,
        "heikin": 1.21,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.612
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 101.843,
        "saikou": 4.96,
        "heikin": 1.3,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.512
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 101.843,
        "saikou": 3.29,
        "heikin": 1.11,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.526
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 101.843,
        "saikou": 3.29,
        "heikin": 1.11,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.498
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 101.843,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.47
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.41,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.061
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 189.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.967
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.952
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 189.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.88
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.951
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.94
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 165.236,
        "saikou": 9.32,
        "heikin": 6.34,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.204
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 133.16,
        "saikou": 9.07,
        "heikin": 5.42,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.951
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 165.19,
        "saikou": 8.74,
        "heikin": 5.96,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.902
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 165.188,
        "saikou": 7.19,
        "heikin": 4.95,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.774
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 165.188,
        "saikou": 6.55,
        "heikin": 4.78,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.796
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 165.188,
        "saikou": 7.58,
        "heikin": 5.87,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.114
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 245.703,
        "saikou": 9.27,
        "heikin": 6.51,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.396
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 241.875,
        "saikou": 9.73,
        "heikin": 9.2,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.922
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 243.74,
        "saikou": 9.73,
        "heikin": 7.11,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.066
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 245.703,
        "saikou": 9.73,
        "heikin": 7.1,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.329
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 242.783,
        "saikou": 9.92,
        "heikin": 7.27,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.559
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 242.403,
        "saikou": 10,
        "heikin": 7.44,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.363
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 245.403,
        "saikou": 10,
        "heikin": 7.53,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 6.083
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 174.427,
        "saikou": 10,
        "heikin": 6.5,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 5.677
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 221.429,
        "saikou": 10,
        "heikin": 7.04,
        "boshuAvg30d": 174.8,
        "heikinAvg30d": 4.645
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 221.429,
        "saikou": 9.73,
        "heikin": 7.51,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 3.941
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 180.429,
        "saikou": 8.8,
        "heikin": 5.77,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 3.821
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 180.429,
        "saikou": 7.93,
        "heikin": 5.33,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 3.761
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 179.015,
        "saikou": 9.24,
        "heikin": 5.38,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.664
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 163.015,
        "saikou": 7.27,
        "heikin": 4.93,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.66
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 213.015,
        "saikou": 4.44,
        "heikin": 3.45,
        "boshuAvg30d": 180.8,
        "heikinAvg30d": 3.534
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 211.052,
        "saikou": 3.93,
        "heikin": 3.08,
        "boshuAvg30d": 181.8,
        "heikinAvg30d": 3.478
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 206.252,
        "saikou": 3.93,
        "heikin": 3.04,
        "boshuAvg30d": 181.8,
        "heikinAvg30d": 3.195
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 204.274,
        "saikou": 4.08,
        "heikin": 3.17,
        "boshuAvg30d": 181.8,
        "heikinAvg30d": 3.256
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 193.616,
        "saikou": 3.36,
        "heikin": 2.73,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 2.971
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 196.678,
        "saikou": 3.83,
        "heikin": 3.09,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.105
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 113.015,
        "saikou": 9.24,
        "heikin": 4.84,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.747
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 171.365,
        "saikou": 10,
        "heikin": 6.48,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 4.326
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 167.241,
        "saikou": 9.81,
        "heikin": 6.45,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 4.227
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 174.241,
        "saikou": 10,
        "heikin": 6.82,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 4.978
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 173.779,
        "saikou": 10,
        "heikin": 6.95,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 5.424
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 286.779,
        "saikou": 10,
        "heikin": 8.43,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 5.453
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 374.231,
        "saikou": 10,
        "heikin": 8.28,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 6.485
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 310.055,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 7.107
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 333.177,
        "saikou": 10,
        "heikin": 7.87,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 7.213
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 264.322,
        "saikou": 10,
        "heikin": 8.15,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 7.34
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 257.859,
        "saikou": 10,
        "heikin": 8.1,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.285
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 260.681,
        "saikou": 10,
        "heikin": 8.36,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.24
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 270.963,
        "saikou": 10,
        "heikin": 8.05,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.965
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 272.952,
        "saikou": 10,
        "heikin": 8.05,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.556
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 131.8,
        "saikou": 10,
        "heikin": 5.57,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.846
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 142.201,
        "saikou": 10,
        "heikin": 6.09,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.453
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 129.214,
        "saikou": 10,
        "heikin": 5.67,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.372
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 129.212,
        "saikou": 10,
        "heikin": 5.61,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.219
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 234.21,
        "saikou": 10,
        "heikin": 7.48,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.322
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 186.009,
        "saikou": 9.71,
        "heikin": 6.48,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.055
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 178.007,
        "saikou": 9.47,
        "heikin": 6.28,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 5.883
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 178.066,
        "saikou": 6.83,
        "heikin": 4.61,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 5.241
      }
    ]
  }
};
