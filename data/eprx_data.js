// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/11〜2026/11/09）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-10",
  "fetchedAt": "2026-11-10",
  "avgWindowLabel": "過去30日平均（2026/10/11〜2026/11/09）",
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
      "boshu": 1316,
      "ouatsu": 1689.683,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1093.9,
      "heikinAvg30d": 2.911
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1316,
      "ouatsu": 1714.235,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1093.9,
      "heikinAvg30d": 2.854
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1316,
      "ouatsu": 1649.092,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1093.9,
      "heikinAvg30d": 2.769
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1315,
      "ouatsu": 1639.534,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1093.6,
      "heikinAvg30d": 2.675
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1309,
      "ouatsu": 1626.816,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1089.7,
      "heikinAvg30d": 2.739
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1309,
      "ouatsu": 1711.188,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1089.0,
      "heikinAvg30d": 2.784
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1306,
      "ouatsu": 1790.719,
      "saikou": 10,
      "heikin": 2.42,
      "boshuAvg30d": 1086.0,
      "heikinAvg30d": 2.956
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1310,
      "ouatsu": 1707.801,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1088.6,
      "heikinAvg30d": 3.223
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1310,
      "ouatsu": 1652.087,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1090.0,
      "heikinAvg30d": 3.296
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1312,
      "ouatsu": 1743.184,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1091.3,
      "heikinAvg30d": 3.356
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1312,
      "ouatsu": 1614.642,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1091.3,
      "heikinAvg30d": 3.416
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1312,
      "ouatsu": 1658.718,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1091.3,
      "heikinAvg30d": 3.415
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1371,
      "ouatsu": 1698.115,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1151.0,
      "heikinAvg30d": 3.497
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1396,
      "ouatsu": 1655.578,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1174.6,
      "heikinAvg30d": 3.41
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1415,
      "ouatsu": 1751.621,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1195.0,
      "heikinAvg30d": 3.208
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1430,
      "ouatsu": 1622.644,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1211.7,
      "heikinAvg30d": 2.895
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1430,
      "ouatsu": 1698.161,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1212.1,
      "heikinAvg30d": 2.814
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1430,
      "ouatsu": 1522.172,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1215.9,
      "heikinAvg30d": 2.783
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1359,
      "ouatsu": 1534.685,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1161.4,
      "heikinAvg30d": 2.802
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1364,
      "ouatsu": 1534.558,
      "saikou": 9.99,
      "heikin": 2.42,
      "boshuAvg30d": 1165.0,
      "heikinAvg30d": 2.834
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1368,
      "ouatsu": 1680.905,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1167.4,
      "heikinAvg30d": 2.794
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1372,
      "ouatsu": 1751.196,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1168.6,
      "heikinAvg30d": 2.814
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1366,
      "ouatsu": 1583.553,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1164.7,
      "heikinAvg30d": 2.76
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1366,
      "ouatsu": 1554.011,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1164.0,
      "heikinAvg30d": 2.786
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1347,
      "ouatsu": 1604.875,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1144.0,
      "heikinAvg30d": 2.648
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1347,
      "ouatsu": 1629.01,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1144.0,
      "heikinAvg30d": 2.661
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1347,
      "ouatsu": 1656.631,
      "saikou": 9.99,
      "heikin": 2.32,
      "boshuAvg30d": 1144.0,
      "heikinAvg30d": 2.858
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1343,
      "ouatsu": 1477.163,
      "saikou": 9.99,
      "heikin": 2.83,
      "boshuAvg30d": 1141.1,
      "heikinAvg30d": 3.051
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1342,
      "ouatsu": 1455.414,
      "saikou": 9.99,
      "heikin": 3,
      "boshuAvg30d": 1138.7,
      "heikinAvg30d": 3.091
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1336,
      "ouatsu": 1563.798,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1132.7,
      "heikinAvg30d": 3.178
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1407,
      "ouatsu": 1504.219,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1197.3,
      "heikinAvg30d": 3.265
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1407,
      "ouatsu": 1524.245,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1197.0,
      "heikinAvg30d": 3.43
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1407,
      "ouatsu": 1575.49,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1197.4,
      "heikinAvg30d": 3.748
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1405,
      "ouatsu": 1491.76,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1196.1,
      "heikinAvg30d": 3.935
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1403,
      "ouatsu": 1508.597,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1187.8,
      "heikinAvg30d": 3.836
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1398,
      "ouatsu": 1414.825,
      "saikou": 10,
      "heikin": 2.36,
      "boshuAvg30d": 1182.8,
      "heikinAvg30d": 3.865
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1394,
      "ouatsu": 1515.192,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1177.1,
      "heikinAvg30d": 3.672
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1394,
      "ouatsu": 1527.545,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1177.1,
      "heikinAvg30d": 3.683
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1394,
      "ouatsu": 1674.868,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1177.1,
      "heikinAvg30d": 3.48
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1392,
      "ouatsu": 1804.669,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1176.1,
      "heikinAvg30d": 3.331
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1385,
      "ouatsu": 1734.434,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1168.4,
      "heikinAvg30d": 3.3
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1385,
      "ouatsu": 1607.552,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1168.4,
      "heikinAvg30d": 3.27
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1296,
      "ouatsu": 1666.661,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1078.7,
      "heikinAvg30d": 3.154
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1299,
      "ouatsu": 1727.755,
      "saikou": 10,
      "heikin": 2.46,
      "boshuAvg30d": 1081.7,
      "heikinAvg30d": 3.134
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1298,
      "ouatsu": 1888.965,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1085.1,
      "heikinAvg30d": 3.202
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1291,
      "ouatsu": 1902.385,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1076.5,
      "heikinAvg30d": 3.064
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1283,
      "ouatsu": 1797.631,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1068.1,
      "heikinAvg30d": 3.116
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1275,
      "ouatsu": 1762.491,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1060.2,
      "heikinAvg30d": 2.845
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
        "ouatsu": 148.973,
        "saikou": 9.91,
        "heikin": 4.63,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 4.004
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 144.598,
        "saikou": 9.91,
        "heikin": 4.63,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 4.132
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 112.958,
        "saikou": 9.8,
        "heikin": 2.05,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.935
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 105.958,
        "saikou": 9.8,
        "heikin": 3.41,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.921
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 126.963,
        "saikou": 9.91,
        "heikin": 4.61,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.154
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 132.638,
        "saikou": 9.91,
        "heikin": 4.72,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 3.687
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 106.408,
        "saikou": 9.8,
        "heikin": 2.48,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 3.978
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 79.513,
        "saikou": 9.91,
        "heikin": 8.2,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.352
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 54.408,
        "saikou": 9.8,
        "heikin": 3.44,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.464
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 79.513,
        "saikou": 9.91,
        "heikin": 6.72,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.196
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 40.408,
        "saikou": 9.8,
        "heikin": 3.86,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.454
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 79.513,
        "saikou": 9.91,
        "heikin": 6.85,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.577
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 32.408,
        "saikou": 9.2,
        "heikin": 5.58,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.591
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 30.458,
        "saikou": 9.8,
        "heikin": 3.97,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.532
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 71.495,
        "saikou": 9.91,
        "heikin": 9.25,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.223
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 32.408,
        "saikou": 8,
        "heikin": 7.09,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.505
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 68.023,
        "saikou": 9.91,
        "heikin": 9.48,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.722
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 28.958,
        "saikou": 9.8,
        "heikin": 7.21,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.116
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 71.963,
        "saikou": 9.91,
        "heikin": 8.3,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.089
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 112.958,
        "saikou": 9.8,
        "heikin": 2.75,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 3.994
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 8,
        "heikin": 2.28,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 4.268
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 162.023,
        "saikou": 9.91,
        "heikin": 4.71,
        "boshuAvg30d": 52.6,
        "heikinAvg30d": 3.675
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 122.918,
        "saikou": 9,
        "heikin": 2.87,
        "boshuAvg30d": 52.6,
        "heikinAvg30d": 4.298
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 120.968,
        "saikou": 7,
        "heikin": 2.73,
        "boshuAvg30d": 52.6,
        "heikinAvg30d": 4.216
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 122.918,
        "saikou": 9.44,
        "heikin": 3.33,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.25
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 120.968,
        "saikou": 9.44,
        "heikin": 3.32,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.056
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 8,
        "heikin": 2.42,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 3.816
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 69.973,
        "saikou": 9.91,
        "heikin": 9.44,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.749
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 43.918,
        "saikou": 9.91,
        "heikin": 7.74,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.649
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 84.973,
        "saikou": 9.91,
        "heikin": 7.37,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 5.47
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 43.918,
        "saikou": 8,
        "heikin": 6.48,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.653
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 46.918,
        "saikou": 9.8,
        "heikin": 7.28,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 5.468
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 74.963,
        "saikou": 9.91,
        "heikin": 9.12,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 5.891
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 6.94,
        "saikou": 9.8,
        "heikin": 9.29,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 5.574
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 52.995,
        "saikou": 9.91,
        "heikin": 9.25,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 5.057
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 11.94,
        "saikou": 9.8,
        "heikin": 6.96,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.974
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 94.963,
        "saikou": 9.91,
        "heikin": 7.66,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.892
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 49.968,
        "saikou": 9.8,
        "heikin": 5.73,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 5.081
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 66.908,
        "saikou": 9.8,
        "heikin": 5.65,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.851
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 219.023,
        "saikou": 10,
        "heikin": 9.13,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.914
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 202.908,
        "saikou": 10,
        "heikin": 9.22,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 4.922
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 169.013,
        "saikou": 10,
        "heikin": 9.06,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 4.486
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 117.908,
        "saikou": 9.84,
        "heikin": 8.32,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 4.387
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 135.013,
        "saikou": 9.91,
        "heikin": 8.77,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.405
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 167.908,
        "saikou": 10,
        "heikin": 9.16,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.464
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 205.023,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.056
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 69.908,
        "saikou": 9.8,
        "heikin": 5.44,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.256
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 106.023,
        "saikou": 9.91,
        "heikin": 6.56,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 3.807
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 72.88,
        "saikou": 6.29,
        "heikin": 3.97,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.568
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 60.31,
        "saikou": 6.46,
        "heikin": 4.24,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.713
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 78.258,
        "saikou": 6.45,
        "heikin": 4.01,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.715
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 80.218,
        "saikou": 6.52,
        "heikin": 4.47,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.738
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 72.34,
        "saikou": 6.52,
        "heikin": 4.15,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.587
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 86.84,
        "saikou": 6.55,
        "heikin": 3.54,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.459
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 93.218,
        "saikou": 6.49,
        "heikin": 4.44,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 5.576
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 109.218,
        "saikou": 6.33,
        "heikin": 4.29,
        "boshuAvg30d": 119.1,
        "heikinAvg30d": 5.364
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 102.546,
        "saikou": 6.07,
        "heikin": 3.7,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 5.166
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 98.716,
        "saikou": 6.07,
        "heikin": 3.87,
        "boshuAvg30d": 119.1,
        "heikinAvg30d": 5.325
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 98.716,
        "saikou": 10,
        "heikin": 4.33,
        "boshuAvg30d": 119.1,
        "heikinAvg30d": 5.428
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 113.216,
        "saikou": 7,
        "heikin": 4.01,
        "boshuAvg30d": 119.1,
        "heikinAvg30d": 5.394
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 113.216,
        "saikou": 5.54,
        "heikin": 3.67,
        "boshuAvg30d": 126.1,
        "heikinAvg30d": 5.58
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 111.716,
        "saikou": 4.85,
        "heikin": 2.82,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 5.501
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 113.216,
        "saikou": 4.56,
        "heikin": 2.61,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 5.866
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 111.716,
        "saikou": 5.65,
        "heikin": 3.27,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 5.829
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 113.216,
        "saikou": 10,
        "heikin": 4.11,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 5.723
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 111.716,
        "saikou": 9.49,
        "heikin": 4.01,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 5.837
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 137.282,
        "saikou": 6.89,
        "heikin": 3.36,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 5.645
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 139.212,
        "saikou": 8.17,
        "heikin": 4.11,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 5.673
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 136.907,
        "saikou": 10,
        "heikin": 5.21,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 5.616
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 135.257,
        "saikou": 10,
        "heikin": 5.75,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 5.817
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 139.212,
        "saikou": 10,
        "heikin": 6.52,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 5.752
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 139.212,
        "saikou": 10,
        "heikin": 6.49,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 5.807
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 138.866,
        "saikou": 10,
        "heikin": 8.82,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 5.847
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 137.216,
        "saikou": 10,
        "heikin": 6.46,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 5.904
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 139.212,
        "saikou": 8.62,
        "heikin": 4.09,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 5.312
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 128.542,
        "saikou": 8.07,
        "heikin": 4.34,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 5.5
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 126.362,
        "saikou": 5.09,
        "heikin": 3.26,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 5.474
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 124.676,
        "saikou": 6.44,
        "heikin": 3.93,
        "boshuAvg30d": 58.4,
        "heikinAvg30d": 5.014
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 103.176,
        "saikou": 4.73,
        "heikin": 3.51,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 5.186
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 80.826,
        "saikou": 10,
        "heikin": 5.19,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 4.656
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 79.176,
        "saikou": 5.97,
        "heikin": 3.72,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 4.499
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 77.676,
        "saikou": 7.31,
        "heikin": 3.73,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 4.408
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 79.176,
        "saikou": 9.5,
        "heikin": 5.9,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 4.349
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 79.326,
        "saikou": 5.53,
        "heikin": 2.26,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 4.138
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 62.645,
        "saikou": 2.5,
        "heikin": 2.21,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 3.712
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 73.715,
        "saikou": 3,
        "heikin": 1.92,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 3.43
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 77.18,
        "saikou": 3,
        "heikin": 1.66,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 3.372
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 77.18,
        "saikou": 3,
        "heikin": 1.32,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 3.786
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 73.225,
        "saikou": 2.5,
        "heikin": 2.06,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 3.678
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 73.225,
        "saikou": 10,
        "heikin": 2.65,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 3.864
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 61.33,
        "saikou": 0.99,
        "heikin": 0.67,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 3.952
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 61.33,
        "saikou": 0.69,
        "heikin": 0.69,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 4.102
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 61.33,
        "saikou": 2.5,
        "heikin": 1.26,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 4.138
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 74.716,
        "saikou": 4.58,
        "heikin": 2.94,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 4.66
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 90.546,
        "saikou": 4.9,
        "heikin": 2.69,
        "boshuAvg30d": 39.1,
        "heikinAvg30d": 4.462
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 85.216,
        "saikou": 5.21,
        "heikin": 3.15,
        "boshuAvg30d": 38.8,
        "heikinAvg30d": 5.143
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 524.09,
        "saikou": 1.82,
        "heikin": 1.19,
        "boshuAvg30d": 239.6,
        "heikinAvg30d": 2.998
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 494.088,
        "saikou": 7.16,
        "heikin": 1.93,
        "boshuAvg30d": 239.6,
        "heikinAvg30d": 3.002
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 476.402,
        "saikou": 7.82,
        "heikin": 3.9,
        "boshuAvg30d": 239.6,
        "heikinAvg30d": 2.958
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 464.962,
        "saikou": 7.2,
        "heikin": 2.04,
        "boshuAvg30d": 239.6,
        "heikinAvg30d": 2.729
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 437.528,
        "saikou": 7.28,
        "heikin": 2.7,
        "boshuAvg30d": 238.3,
        "heikinAvg30d": 2.78
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 486.579,
        "saikou": 8.11,
        "heikin": 2.66,
        "boshuAvg30d": 237.6,
        "heikinAvg30d": 2.709
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 516.973,
        "saikou": 7.58,
        "heikin": 0.95,
        "boshuAvg30d": 235.6,
        "heikinAvg30d": 2.812
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 487.273,
        "saikou": 3,
        "heikin": 1.54,
        "boshuAvg30d": 237.6,
        "heikinAvg30d": 2.947
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 448.081,
        "saikou": 7.09,
        "heikin": 2.86,
        "boshuAvg30d": 237.6,
        "heikinAvg30d": 3.097
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 447.311,
        "saikou": 7.12,
        "heikin": 1.21,
        "boshuAvg30d": 238.6,
        "heikinAvg30d": 2.947
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 338.699,
        "saikou": 6.59,
        "heikin": 1.52,
        "boshuAvg30d": 238.6,
        "heikinAvg30d": 2.911
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 353.287,
        "saikou": 7.17,
        "heikin": 2.62,
        "boshuAvg30d": 238.6,
        "heikinAvg30d": 3.085
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 406.374,
        "saikou": 7.27,
        "heikin": 2.58,
        "boshuAvg30d": 257.9,
        "heikinAvg30d": 3.21
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 452.846,
        "saikou": 7.12,
        "heikin": 2.68,
        "boshuAvg30d": 265.9,
        "heikinAvg30d": 3.325
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 464.376,
        "saikou": 6.92,
        "heikin": 2.71,
        "boshuAvg30d": 270.6,
        "heikinAvg30d": 3.188
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 420.802,
        "saikou": 6.97,
        "heikin": 2.71,
        "boshuAvg30d": 275.9,
        "heikinAvg30d": 2.933
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 463.115,
        "saikou": 7.1,
        "heikin": 2.68,
        "boshuAvg30d": 276.2,
        "heikinAvg30d": 2.66
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 329.347,
        "saikou": 5.6,
        "heikin": 1.93,
        "boshuAvg30d": 280.1,
        "heikinAvg30d": 2.756
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 323.552,
        "saikou": 2.95,
        "heikin": 1.73,
        "boshuAvg30d": 271.5,
        "heikinAvg30d": 2.455
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 291.241,
        "saikou": 8,
        "heikin": 1.57,
        "boshuAvg30d": 271.5,
        "heikinAvg30d": 2.603
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 433.941,
        "saikou": 8,
        "heikin": 2.89,
        "boshuAvg30d": 272.1,
        "heikinAvg30d": 2.557
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 458.591,
        "saikou": 8,
        "heikin": 2.4,
        "boshuAvg30d": 271.4,
        "heikinAvg30d": 2.548
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 296,
        "ouatsu": 485.086,
        "saikou": 7.81,
        "heikin": 2.5,
        "boshuAvg30d": 269.1,
        "heikinAvg30d": 2.585
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 296,
        "ouatsu": 455.091,
        "saikou": 8,
        "heikin": 2.48,
        "boshuAvg30d": 269.1,
        "heikinAvg30d": 2.711
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 294,
        "ouatsu": 583.677,
        "saikou": 7,
        "heikin": 1.3,
        "boshuAvg30d": 266.1,
        "heikinAvg30d": 2.377
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 294,
        "ouatsu": 604.148,
        "saikou": 2.01,
        "heikin": 1.37,
        "boshuAvg30d": 266.1,
        "heikinAvg30d": 2.401
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 294,
        "ouatsu": 622.502,
        "saikou": 2.51,
        "heikin": 1.6,
        "boshuAvg30d": 266.1,
        "heikinAvg30d": 2.678
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 294,
        "ouatsu": 459.702,
        "saikou": 7.68,
        "heikin": 1.99,
        "boshuAvg30d": 265.8,
        "heikinAvg30d": 2.707
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 293,
        "ouatsu": 505.953,
        "saikou": 7.07,
        "heikin": 3.37,
        "boshuAvg30d": 264.8,
        "heikinAvg30d": 2.837
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 293,
        "ouatsu": 531.689,
        "saikou": 7.08,
        "heikin": 2.53,
        "boshuAvg30d": 264.1,
        "heikinAvg30d": 2.618
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 571.961,
        "saikou": 6.09,
        "heikin": 1.57,
        "boshuAvg30d": 262.1,
        "heikinAvg30d": 2.489
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 561.992,
        "saikou": 5.88,
        "heikin": 2.5,
        "boshuAvg30d": 261.7,
        "heikinAvg30d": 2.492
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 525.717,
        "saikou": 7.27,
        "heikin": 2.39,
        "boshuAvg30d": 261.4,
        "heikinAvg30d": 2.487
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 506.594,
        "saikou": 7.41,
        "heikin": 2.34,
        "boshuAvg30d": 261.4,
        "heikinAvg30d": 2.468
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 486.88,
        "saikou": 4.57,
        "heikin": 1.85,
        "boshuAvg30d": 259.4,
        "heikinAvg30d": 2.281
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 291,
        "ouatsu": 526.902,
        "saikou": 6.56,
        "heikin": 2.34,
        "boshuAvg30d": 259.4,
        "heikinAvg30d": 2.477
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 293,
        "ouatsu": 546.176,
        "saikou": 6.61,
        "heikin": 2.28,
        "boshuAvg30d": 261.1,
        "heikinAvg30d": 2.567
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 293,
        "ouatsu": 548.633,
        "saikou": 7.92,
        "heikin": 3.12,
        "boshuAvg30d": 261.1,
        "heikinAvg30d": 2.44
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 293,
        "ouatsu": 609.497,
        "saikou": 6.89,
        "heikin": 3.25,
        "boshuAvg30d": 261.1,
        "heikinAvg30d": 2.519
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 293,
        "ouatsu": 582.128,
        "saikou": 7.98,
        "heikin": 3.73,
        "boshuAvg30d": 261.5,
        "heikinAvg30d": 2.279
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 292,
        "ouatsu": 538.555,
        "saikou": 8.26,
        "heikin": 3.32,
        "boshuAvg30d": 259.8,
        "heikinAvg30d": 2.299
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 292,
        "ouatsu": 442.523,
        "saikou": 8.73,
        "heikin": 2.95,
        "boshuAvg30d": 259.8,
        "heikinAvg30d": 2.559
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 291,
        "ouatsu": 590.346,
        "saikou": 6.13,
        "heikin": 2.28,
        "boshuAvg30d": 259.5,
        "heikinAvg30d": 2.257
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 291,
        "ouatsu": 557.663,
        "saikou": 6.1,
        "heikin": 1.54,
        "boshuAvg30d": 259.5,
        "heikinAvg30d": 2.264
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 291,
        "ouatsu": 629.173,
        "saikou": 7.46,
        "heikin": 2.95,
        "boshuAvg30d": 262.5,
        "heikinAvg30d": 2.319
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 289,
        "ouatsu": 654.308,
        "saikou": 7.14,
        "heikin": 2.52,
        "boshuAvg30d": 257.5,
        "heikinAvg30d": 2.376
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 287,
        "ouatsu": 635.049,
        "saikou": 7.08,
        "heikin": 2.94,
        "boshuAvg30d": 255.8,
        "heikinAvg30d": 2.852
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 286,
        "ouatsu": 584.673,
        "saikou": 7.07,
        "heikin": 3.01,
        "boshuAvg30d": 254.1,
        "heikinAvg30d": 2.876
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 243,
        "ouatsu": 403.718,
        "saikou": 9.29,
        "heikin": 1.84,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 1.634
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 243,
        "ouatsu": 404.932,
        "saikou": 9.29,
        "heikin": 2.17,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 1.686
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 243,
        "ouatsu": 404.848,
        "saikou": 9.29,
        "heikin": 2.15,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 1.731
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 408.82,
        "saikou": 9.29,
        "heikin": 2.1,
        "boshuAvg30d": 124.2,
        "heikinAvg30d": 1.799
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 242,
        "ouatsu": 398.707,
        "saikou": 9.29,
        "heikin": 2.21,
        "boshuAvg30d": 123.5,
        "heikinAvg30d": 1.785
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 394.863,
        "saikou": 9.29,
        "heikin": 2.24,
        "boshuAvg30d": 123.2,
        "heikinAvg30d": 1.73
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 418.798,
        "saikou": 9.29,
        "heikin": 2.18,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 1.608
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 395.508,
        "saikou": 9.29,
        "heikin": 2.13,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 1.607
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 240,
        "ouatsu": 399.224,
        "saikou": 9.29,
        "heikin": 2.03,
        "boshuAvg30d": 122.9,
        "heikinAvg30d": 1.528
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 240,
        "ouatsu": 383.296,
        "saikou": 9.37,
        "heikin": 2.07,
        "boshuAvg30d": 122.9,
        "heikinAvg30d": 1.557
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 240,
        "ouatsu": 389.046,
        "saikou": 9.37,
        "heikin": 1.94,
        "boshuAvg30d": 122.9,
        "heikinAvg30d": 1.529
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 240,
        "ouatsu": 381.762,
        "saikou": 9.37,
        "heikin": 1.91,
        "boshuAvg30d": 122.9,
        "heikinAvg30d": 1.463
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 423.176,
        "saikou": 9.37,
        "heikin": 2.65,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.684
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 255,
        "ouatsu": 423.176,
        "saikou": 9.37,
        "heikin": 2.4,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 1.67
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 258,
        "ouatsu": 419.198,
        "saikou": 9.37,
        "heikin": 2.44,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 1.955
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 260,
        "ouatsu": 412.382,
        "saikou": 9.37,
        "heikin": 2.4,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 1.979
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 260,
        "ouatsu": 439.893,
        "saikou": 9.37,
        "heikin": 2.4,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 1.999
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 260,
        "ouatsu": 437.909,
        "saikou": 9.49,
        "heikin": 2.38,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.163
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 265,
        "ouatsu": 443.851,
        "saikou": 9.49,
        "heikin": 2.57,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.522
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 265,
        "ouatsu": 441.951,
        "saikou": 9.49,
        "heikin": 2.62,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.516
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 265,
        "ouatsu": 429.408,
        "saikou": 9.49,
        "heikin": 2.91,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.578
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 265,
        "ouatsu": 434.271,
        "saikou": 9.49,
        "heikin": 3.5,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.593
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 264,
        "ouatsu": 317.04,
        "saikou": 9.49,
        "heikin": 3.28,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 2.453
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 263,
        "ouatsu": 313.156,
        "saikou": 9.49,
        "heikin": 3.79,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.51
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 259,
        "ouatsu": 237.352,
        "saikou": 9.49,
        "heikin": 4.75,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.487
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 259,
        "ouatsu": 241.178,
        "saikou": 9.59,
        "heikin": 4.39,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.4
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 259,
        "ouatsu": 245.873,
        "saikou": 9.49,
        "heikin": 2.97,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.375
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 259,
        "ouatsu": 247.857,
        "saikou": 9.49,
        "heikin": 2.81,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 2.497
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 259,
        "ouatsu": 202.118,
        "saikou": 9.49,
        "heikin": 1.85,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 2.656
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 259,
        "ouatsu": 200.134,
        "saikou": 9.69,
        "heikin": 1.9,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 2.571
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 257,
        "ouatsu": 240.221,
        "saikou": 9.69,
        "heikin": 2.53,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 2.69
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 257,
        "ouatsu": 270.566,
        "saikou": 9.69,
        "heikin": 2.21,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 2.786
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 257,
        "ouatsu": 231.082,
        "saikou": 9.69,
        "heikin": 2.19,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 2.778
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 256,
        "ouatsu": 219.674,
        "saikou": 9.69,
        "heikin": 2.81,
        "boshuAvg30d": 137.5,
        "heikinAvg30d": 2.883
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 256,
        "ouatsu": 231.675,
        "saikou": 9.69,
        "heikin": 2.92,
        "boshuAvg30d": 137.5,
        "heikinAvg30d": 2.685
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 255,
        "ouatsu": 217.381,
        "saikou": 9.69,
        "heikin": 2.55,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.515
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 253,
        "ouatsu": 236.671,
        "saikou": 9.69,
        "heikin": 2.65,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.219
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 253,
        "ouatsu": 253.459,
        "saikou": 9.69,
        "heikin": 2.63,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.149
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 253,
        "ouatsu": 288.976,
        "saikou": 9.69,
        "heikin": 2.24,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 1.858
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 253,
        "ouatsu": 290.06,
        "saikou": 9.69,
        "heikin": 2.39,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 1.765
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 253,
        "ouatsu": 282.154,
        "saikou": 9.69,
        "heikin": 2.01,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 1.664
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 253,
        "ouatsu": 264.07,
        "saikou": 9.27,
        "heikin": 1.53,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 1.691
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 255,
        "ouatsu": 269.98,
        "saikou": 9.27,
        "heikin": 1.59,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 1.619
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 255,
        "ouatsu": 269.98,
        "saikou": 9.27,
        "heikin": 1.57,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 1.803
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 255,
        "ouatsu": 289.081,
        "saikou": 9.27,
        "heikin": 2.14,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 1.804
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 291.065,
        "saikou": 9.27,
        "heikin": 2.53,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 1.892
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 289.165,
        "saikou": 9.27,
        "heikin": 2.42,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 1.762
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 282.284,
        "saikou": 9.27,
        "heikin": 2.4,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.864
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 0,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.517
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 2.05,
        "heikin": 2.05,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.354
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 0,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.365
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 2.25,
        "heikin": 2.25,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.311
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 1.998,
        "saikou": 1.75,
        "heikin": 1.75,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.401
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 1.5,
        "heikin": 1.5,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.392
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 1.25,
        "heikin": 1.25,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.76
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 2.132
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 2.206
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 2.404
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 2.594
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 1.9,
        "heikin": 1.9,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 2.343
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 1.998,
        "saikou": 2.35,
        "heikin": 2.35,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.116
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.375
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 3.15,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.884
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.4,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 2.666
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.75,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 3.194
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.45,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 3.152
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.35,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 3.485
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.68,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 3.828
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.53,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.762
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.39,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 5.097
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.1,
        "heikin": 4.95,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 3.957
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.1,
        "heikin": 4.95,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 3.85
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.4,
        "heikin": 5.3,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 2.538
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.85,
        "heikin": 4.7,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 2.259
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.15,
        "heikin": 6.05,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 4.313
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.73,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 3.409
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.25,
        "heikin": 5.1,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 4.173
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.55,
        "heikin": 4.4,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 3.873
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 6.55,
        "heikin": 6.4,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 5.145
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 7.45,
        "heikin": 7.35,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 5.787
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 5.05,
        "heikin": 4.74,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 4.933
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.45,
        "heikin": 4.25,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 4.649
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.4,
        "heikin": 4.3,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 4.754
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.4,
        "heikin": 4.3,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 4.919
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 2.89,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 3.862
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.45,
        "heikin": 3.99,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 4.525
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.7,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 3.316
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.75,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 3.767
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 2.94,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 3.14
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.19,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 3.21
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4.25,
        "heikin": 3.94,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 3.057
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.8,
        "heikin": 3.55,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.927
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.09,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 3.11
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.25,
        "heikin": 3,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.742
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 4.39,
        "heikin": 3.35,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.29
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.39,
        "heikin": 3.4,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.902
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 39.035,
        "saikou": 9.99,
        "heikin": 8.45,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 1.665
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 103.4,
        "saikou": 9.99,
        "heikin": 4.14,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 1.151
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 75.685,
        "saikou": 9,
        "heikin": 2.34,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 0.962
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 74.649,
        "saikou": 9,
        "heikin": 3.7,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 0.997
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 86.351,
        "saikou": 9.99,
        "heikin": 4.34,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.051
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 105.341,
        "saikou": 9.99,
        "heikin": 3.89,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.332
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 113.228,
        "saikou": 9.99,
        "heikin": 4.09,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.478
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.31,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.685
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 115.257,
        "saikou": 9.99,
        "heikin": 3.79,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 1.598
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 113.814,
        "saikou": 9.99,
        "heikin": 3.43,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 1.58
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 3.65,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 1.569
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 3.98,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 1.552
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 3.52,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 1.56
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 3.87,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 1.64
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.53,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 1.832
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.64,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 1.858
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.64,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 1.782
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.1,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 2.358
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.18,
        "boshuAvg30d": 184.5,
        "heikinAvg30d": 2.408
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.23,
        "boshuAvg30d": 184.5,
        "heikinAvg30d": 2.475
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 117.139,
        "saikou": 9.99,
        "heikin": 5.53,
        "boshuAvg30d": 184.5,
        "heikinAvg30d": 2.397
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 115.289,
        "saikou": 9.99,
        "heikin": 5.57,
        "boshuAvg30d": 183.5,
        "heikinAvg30d": 2.527
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 117.274,
        "saikou": 9.99,
        "heikin": 5.51,
        "boshuAvg30d": 182.2,
        "heikinAvg30d": 2.565
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 117.274,
        "saikou": 9.99,
        "heikin": 5.19,
        "boshuAvg30d": 182.5,
        "heikinAvg30d": 2.267
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 115.276,
        "saikou": 9.99,
        "heikin": 5.12,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 2.03
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.15,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 2.071
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.47,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 2.51
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.18,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 2.409
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.3,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 2.575
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 164.387,
        "saikou": 9.99,
        "heikin": 3.86,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 2.307
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 5.21,
        "boshuAvg30d": 180.5,
        "heikinAvg30d": 2.715
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 102.681,
        "saikou": 9.99,
        "heikin": 5.54,
        "boshuAvg30d": 180.5,
        "heikinAvg30d": 2.9
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 104.124,
        "saikou": 9.99,
        "heikin": 5.51,
        "boshuAvg30d": 180.5,
        "heikinAvg30d": 2.878
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.91,
        "boshuAvg30d": 180.5,
        "heikinAvg30d": 2.462
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 109.276,
        "saikou": 9.99,
        "heikin": 4.81,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 2.48
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 5.03,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 2.739
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 109.186,
        "saikou": 9.99,
        "heikin": 4.62,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 2.19
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 109.186,
        "saikou": 9.99,
        "heikin": 4.54,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 2.184
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.44,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 2.006
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.49,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 1.923
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 117.139,
        "saikou": 9.99,
        "heikin": 4.56,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 1.966
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 117.139,
        "saikou": 9.99,
        "heikin": 4.56,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 1.99
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.52,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 1.944
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.52,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 1.997
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.52,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 1.995
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 4.52,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 1.842
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 113.814,
        "saikou": 9.99,
        "heikin": 4.39,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 1.663
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 102.144,
        "saikou": 5,
        "heikin": 2.55,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 1.635
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 141.547,
        "saikou": 7,
        "heikin": 1.91,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 2.404
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 141.547,
        "saikou": 7,
        "heikin": 1.82,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 2.572
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 141.547,
        "saikou": 6.8,
        "heikin": 1.82,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 2.259
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 143.537,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 2.09
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 143.537,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 2.189
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 143.537,
        "saikou": 3.94,
        "heikin": 1.93,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 2.412
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 164.189,
        "saikou": 2.76,
        "heikin": 1.85,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 2.509
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 154.631,
        "saikou": 3.44,
        "heikin": 1.93,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 2.82
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 154.631,
        "saikou": 3.35,
        "heikin": 1.92,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 3.0
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 154.631,
        "saikou": 1.56,
        "heikin": 1.51,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 3.341
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 164.189,
        "saikou": 1.56,
        "heikin": 1.51,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 3.179
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 164.189,
        "saikou": 1.56,
        "heikin": 1.54,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 2.996
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 153.631,
        "saikou": 1.56,
        "heikin": 1.54,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.992
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 153.631,
        "saikou": 3.22,
        "heikin": 1.93,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 2.931
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 153.631,
        "saikou": 2.76,
        "heikin": 1.65,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.254
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 153.631,
        "saikou": 2.73,
        "heikin": 1.86,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 1.919
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 163.189,
        "saikou": 2.62,
        "heikin": 1.86,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 1.968
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 163.189,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 1.913
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 151.382,
        "saikou": 1.56,
        "heikin": 1.2,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.069
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 149.895,
        "saikou": 1.56,
        "heikin": 0.89,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.136
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 149.895,
        "saikou": 1.61,
        "heikin": 0.98,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.721
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 143.62,
        "saikou": 1.56,
        "heikin": 1.08,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 1.791
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 143.62,
        "saikou": 2.7,
        "heikin": 2.13,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 1.636
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 149.895,
        "saikou": 2.7,
        "heikin": 1.31,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 1.762
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 149.895,
        "saikou": 1.56,
        "heikin": 0.97,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 1.654
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 149.895,
        "saikou": 2.29,
        "heikin": 1.28,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 1.853
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 149.895,
        "saikou": 3.69,
        "heikin": 1.65,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 1.863
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 149.895,
        "saikou": 4.5,
        "heikin": 1.4,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 1.969
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 149.895,
        "saikou": 4.38,
        "heikin": 1.59,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.052
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 149.895,
        "saikou": 6.78,
        "heikin": 2.17,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.118
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 153.218,
        "saikou": 6.78,
        "heikin": 2.23,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.298
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 153.218,
        "saikou": 6.78,
        "heikin": 2.56,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.504
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 151.382,
        "saikou": 4.94,
        "heikin": 2.51,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.012
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 117.882,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.657
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 133.749,
        "saikou": 2.29,
        "heikin": 1.92,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.89
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 133.749,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.913
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 134.629,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.894
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 153.76,
        "saikou": 2.7,
        "heikin": 1.7,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.826
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 154.511,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.608
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 156.501,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.406
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 156.501,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 3.713
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 175.632,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 3.58
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 93.033,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 3.635
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 169.705,
        "saikou": 2.29,
        "heikin": 2.24,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 3.485
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 207.409,
        "saikou": 1.56,
        "heikin": 1.04,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 3.443
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 207.409,
        "saikou": 1.56,
        "heikin": 1.06,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 2.957
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 207.409,
        "saikou": 1.56,
        "heikin": 0.84,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.829
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 207.409,
        "saikou": 1.56,
        "heikin": 1.04,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.15
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.782
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.736
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.698
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.675
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.681
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.691
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 1.24,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.756
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 186.8,
        "saikou": 1.6,
        "heikin": 1.54,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.755
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.765
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.811
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.807
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.762
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.94
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.824
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.13,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.777
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.42,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.823
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.834
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.791
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.61,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.018
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.98,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 0.984
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.008
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.949
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.73,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.96
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.968
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 0.98
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 0.987
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.005
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.015
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.052
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 1.07,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.991
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.22,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 1.058
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 1.045
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 1.02,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 1.242
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 1.362
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 1.389
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 42.7,
        "heikinAvg30d": 1.469
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.481
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 4.99,
        "heikin": 0.96,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.392
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.391
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.42
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.5,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.383
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.49,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.375
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.951
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.906
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.862
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.797
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.861
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.828
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 158.097,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.401
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 162.019,
        "saikou": 10,
        "heikin": 6.28,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.016
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 158.051,
        "saikou": 10,
        "heikin": 6.25,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.851
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 158.049,
        "saikou": 10,
        "heikin": 6.23,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.698
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 158.049,
        "saikou": 10,
        "heikin": 6.27,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.732
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 158.049,
        "saikou": 10,
        "heikin": 6.3,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.035
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 177.564,
        "saikou": 10,
        "heikin": 6.07,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.465
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 173.736,
        "saikou": 10,
        "heikin": 6.13,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.126
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 177.599,
        "saikou": 10,
        "heikin": 6.12,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.261
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 265.562,
        "saikou": 10,
        "heikin": 3.92,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.405
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 265.562,
        "saikou": 10,
        "heikin": 3.95,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.626
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 260.286,
        "saikou": 10,
        "heikin": 4.04,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.5
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 261.288,
        "saikou": 10,
        "heikin": 3.98,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 6.356
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 174.286,
        "saikou": 10,
        "heikin": 6.21,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 5.962
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 213.288,
        "saikou": 10,
        "heikin": 4.88,
        "boshuAvg30d": 174.4,
        "heikinAvg30d": 5.136
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 175.288,
        "saikou": 10,
        "heikin": 6.22,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 4.191
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 134.308,
        "saikou": 10,
        "heikin": 4.95,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 4.011
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 126.658,
        "saikou": 10,
        "heikin": 4.89,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 3.791
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 82.26,
        "saikou": 10,
        "heikin": 2.84,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 3.777
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 74.906,
        "saikou": 9.9,
        "heikin": 2.32,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.713
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 95.426,
        "saikou": 9.48,
        "heikin": 4.03,
        "boshuAvg30d": 180.4,
        "heikinAvg30d": 3.596
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 96.874,
        "saikou": 6.43,
        "heikin": 2.88,
        "boshuAvg30d": 181.4,
        "heikinAvg30d": 3.551
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 53.132,
        "saikou": 5.13,
        "heikin": 1,
        "boshuAvg30d": 181.4,
        "heikinAvg30d": 3.361
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 53.144,
        "saikou": 3.8,
        "heikin": 0.89,
        "boshuAvg30d": 181.4,
        "heikinAvg30d": 3.352
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 51.62,
        "saikou": 1,
        "heikin": 0.73,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.327
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 51.21,
        "saikou": 1,
        "heikin": 0.74,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.385
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 61.836,
        "saikou": 2.29,
        "heikin": 0.86,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.912
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 96.799,
        "saikou": 6.12,
        "heikin": 2.88,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 4.447
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 102.773,
        "saikou": 9.5,
        "heikin": 4.01,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 4.337
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 102.773,
        "saikou": 10,
        "heikin": 5.1,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 4.993
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 102.773,
        "saikou": 10,
        "heikin": 5.32,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.355
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 136.773,
        "saikou": 10,
        "heikin": 6.68,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.576
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 237.775,
        "saikou": 10,
        "heikin": 5.79,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 6.386
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 293.577,
        "saikou": 10,
        "heikin": 7.19,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 6.937
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 256.575,
        "saikou": 10,
        "heikin": 5.07,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 7.114
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 176.11,
        "saikou": 10,
        "heikin": 1.76,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 7.157
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 172.651,
        "saikou": 10,
        "heikin": 1.62,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 7.137
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 180.553,
        "saikou": 10,
        "heikin": 1.58,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 7.144
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 200.401,
        "saikou": 10,
        "heikin": 1.71,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.717
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 202.382,
        "saikou": 10,
        "heikin": 1.85,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.421
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 205.681,
        "saikou": 10,
        "heikin": 1.52,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.509
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 207.679,
        "saikou": 10,
        "heikin": 1.53,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.221
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 209.669,
        "saikou": 10,
        "heikin": 1.54,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.152
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 209.669,
        "saikou": 10,
        "heikin": 1.51,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.006
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 209.669,
        "saikou": 10,
        "heikin": 1.52,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.181
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 145.469,
        "saikou": 10,
        "heikin": 2.35,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.092
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 186.469,
        "saikou": 10,
        "heikin": 5.57,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 6.048
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 189.471,
        "saikou": 10,
        "heikin": 5.58,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.305
      }
    ]
  }
};
