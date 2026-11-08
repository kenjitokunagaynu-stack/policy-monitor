// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/09〜2026/11/07）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-08",
  "fetchedAt": "2026-11-08",
  "avgWindowLabel": "過去30日平均（2026/10/09〜2026/11/07）",
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
      "boshu": 1294,
      "ouatsu": 1582.852,
      "saikou": 9.99,
      "heikin": 2.04,
      "boshuAvg30d": 1078.0,
      "heikinAvg30d": 2.936
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1294,
      "ouatsu": 1653.345,
      "saikou": 10,
      "heikin": 2.41,
      "boshuAvg30d": 1078.0,
      "heikinAvg30d": 2.877
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1294,
      "ouatsu": 1692.922,
      "saikou": 10,
      "heikin": 2.67,
      "boshuAvg30d": 1078.0,
      "heikinAvg30d": 2.772
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1293,
      "ouatsu": 1702.444,
      "saikou": 10,
      "heikin": 2.17,
      "boshuAvg30d": 1077.7,
      "heikinAvg30d": 2.713
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1287,
      "ouatsu": 1667.969,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1074.0,
      "heikinAvg30d": 2.762
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1287,
      "ouatsu": 1577.092,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1073.3,
      "heikinAvg30d": 2.828
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1284,
      "ouatsu": 1774.317,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1070.3,
      "heikinAvg30d": 2.997
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1288,
      "ouatsu": 1865.035,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1072.7,
      "heikinAvg30d": 3.242
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1288,
      "ouatsu": 1801.915,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1074.3,
      "heikinAvg30d": 3.285
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1290,
      "ouatsu": 1841.462,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1075.5,
      "heikinAvg30d": 3.389
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1290,
      "ouatsu": 1755.251,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1075.5,
      "heikinAvg30d": 3.46
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1290,
      "ouatsu": 1749.95,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1075.5,
      "heikinAvg30d": 3.43
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1349,
      "ouatsu": 1675.525,
      "saikou": 10,
      "heikin": 4.04,
      "boshuAvg30d": 1135.3,
      "heikinAvg30d": 3.512
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1374,
      "ouatsu": 1590.54,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1158.7,
      "heikinAvg30d": 3.413
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1393,
      "ouatsu": 1639.96,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1179.3,
      "heikinAvg30d": 3.171
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1408,
      "ouatsu": 1534.549,
      "saikou": 10,
      "heikin": 2.3,
      "boshuAvg30d": 1196.1,
      "heikinAvg30d": 2.884
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1408,
      "ouatsu": 1922.878,
      "saikou": 10,
      "heikin": 2.11,
      "boshuAvg30d": 1196.5,
      "heikinAvg30d": 2.804
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1408,
      "ouatsu": 1759.496,
      "saikou": 10,
      "heikin": 2.21,
      "boshuAvg30d": 1200.3,
      "heikinAvg30d": 2.775
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1337,
      "ouatsu": 1597.717,
      "saikou": 10,
      "heikin": 1.77,
      "boshuAvg30d": 1148.8,
      "heikinAvg30d": 2.827
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1342,
      "ouatsu": 1598.466,
      "saikou": 10,
      "heikin": 1.94,
      "boshuAvg30d": 1152.3,
      "heikinAvg30d": 2.875
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1346,
      "ouatsu": 1493.183,
      "saikou": 10,
      "heikin": 1.77,
      "boshuAvg30d": 1154.8,
      "heikinAvg30d": 2.851
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1350,
      "ouatsu": 1512.089,
      "saikou": 10,
      "heikin": 2.04,
      "boshuAvg30d": 1155.8,
      "heikinAvg30d": 2.847
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1344,
      "ouatsu": 1421.872,
      "saikou": 10,
      "heikin": 2.04,
      "boshuAvg30d": 1152.1,
      "heikinAvg30d": 2.795
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1344,
      "ouatsu": 1388.759,
      "saikou": 10,
      "heikin": 1.99,
      "boshuAvg30d": 1151.3,
      "heikinAvg30d": 2.81
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1325,
      "ouatsu": 1388.463,
      "saikou": 10,
      "heikin": 2.15,
      "boshuAvg30d": 1131.2,
      "heikinAvg30d": 2.662
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1325,
      "ouatsu": 1436.674,
      "saikou": 10,
      "heikin": 2.06,
      "boshuAvg30d": 1131.2,
      "heikinAvg30d": 2.673
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1325,
      "ouatsu": 1519.34,
      "saikou": 10,
      "heikin": 1.91,
      "boshuAvg30d": 1131.2,
      "heikinAvg30d": 2.878
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1321,
      "ouatsu": 1561.575,
      "saikou": 10,
      "heikin": 2.06,
      "boshuAvg30d": 1128.4,
      "heikinAvg30d": 3.043
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1320,
      "ouatsu": 1571.034,
      "saikou": 10,
      "heikin": 2.11,
      "boshuAvg30d": 1125.9,
      "heikinAvg30d": 3.054
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1314,
      "ouatsu": 1491.453,
      "saikou": 9.99,
      "heikin": 2.06,
      "boshuAvg30d": 1119.9,
      "heikinAvg30d": 3.172
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1385,
      "ouatsu": 1749.455,
      "saikou": 10,
      "heikin": 2.29,
      "boshuAvg30d": 1181.3,
      "heikinAvg30d": 3.236
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1385,
      "ouatsu": 1681.538,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1181.0,
      "heikinAvg30d": 3.42
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1385,
      "ouatsu": 1589.731,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1181.4,
      "heikinAvg30d": 3.778
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1383,
      "ouatsu": 1733.803,
      "saikou": 10,
      "heikin": 4.29,
      "boshuAvg30d": 1180.2,
      "heikinAvg30d": 3.972
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1381,
      "ouatsu": 1682.159,
      "saikou": 10,
      "heikin": 4.41,
      "boshuAvg30d": 1171.9,
      "heikinAvg30d": 3.879
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1376,
      "ouatsu": 1648.757,
      "saikou": 10,
      "heikin": 4.18,
      "boshuAvg30d": 1166.9,
      "heikinAvg30d": 3.916
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1372,
      "ouatsu": 1783.414,
      "saikou": 10,
      "heikin": 4.22,
      "boshuAvg30d": 1161.1,
      "heikinAvg30d": 3.714
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1372,
      "ouatsu": 1703.805,
      "saikou": 10,
      "heikin": 4.13,
      "boshuAvg30d": 1161.1,
      "heikinAvg30d": 3.719
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1372,
      "ouatsu": 1864.118,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1161.1,
      "heikinAvg30d": 3.532
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1370,
      "ouatsu": 1821.05,
      "saikou": 10,
      "heikin": 4.06,
      "boshuAvg30d": 1160.2,
      "heikinAvg30d": 3.377
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1363,
      "ouatsu": 1857.086,
      "saikou": 10,
      "heikin": 3.69,
      "boshuAvg30d": 1152.5,
      "heikinAvg30d": 3.339
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1363,
      "ouatsu": 1817.428,
      "saikou": 10,
      "heikin": 3.71,
      "boshuAvg30d": 1152.5,
      "heikinAvg30d": 3.307
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1274,
      "ouatsu": 1846.277,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1062.7,
      "heikinAvg30d": 3.202
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1277,
      "ouatsu": 1827.747,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1065.7,
      "heikinAvg30d": 3.19
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1276,
      "ouatsu": 1786.434,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1069.2,
      "heikinAvg30d": 3.241
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1269,
      "ouatsu": 1790.139,
      "saikou": 10,
      "heikin": 3.57,
      "boshuAvg30d": 1060.8,
      "heikinAvg30d": 3.076
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1261,
      "ouatsu": 1726.803,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1052.3,
      "heikinAvg30d": 3.135
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1253,
      "ouatsu": 1636.279,
      "saikou": 9.19,
      "heikin": 2.44,
      "boshuAvg30d": 1044.4,
      "heikinAvg30d": 2.865
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
        "ouatsu": 236.208,
        "saikou": 2.17,
        "heikin": 1.27,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.131
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 151.908,
        "saikou": 2.18,
        "heikin": 2.15,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.226
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 203.258,
        "saikou": 2.17,
        "heikin": 1.69,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.013
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 263.498,
        "saikou": 2.18,
        "heikin": 2.11,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.053
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 235.908,
        "saikou": 2.18,
        "heikin": 2.09,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.262
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 199.958,
        "saikou": 4.28,
        "heikin": 2.36,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 3.919
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 251.708,
        "saikou": 2.17,
        "heikin": 1.72,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.226
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 249.758,
        "saikou": 2.17,
        "heikin": 1.73,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.515
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 242.408,
        "saikou": 3.3,
        "heikin": 2.23,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.529
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 286.768,
        "saikou": 2.17,
        "heikin": 1.73,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.364
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 242.408,
        "saikou": 3.35,
        "heikin": 2.26,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.691
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 240.458,
        "saikou": 2.86,
        "heikin": 2.19,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.732
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 234.408,
        "saikou": 4.28,
        "heikin": 3.12,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.604
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 151.468,
        "saikou": 3.89,
        "heikin": 2.49,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.612
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 203.708,
        "saikou": 8.67,
        "heikin": 3.15,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.068
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 148.458,
        "saikou": 7.8,
        "heikin": 3.14,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.259
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 187.468,
        "saikou": 2.18,
        "heikin": 1.87,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.493
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 146.958,
        "saikou": 8.39,
        "heikin": 3.11,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.748
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 187.468,
        "saikou": 6.15,
        "heikin": 2.47,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.868
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 185.518,
        "saikou": 8.18,
        "heikin": 2.76,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.872
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 142.908,
        "saikou": 9.3,
        "heikin": 2.68,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.209
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 161.258,
        "saikou": 7.65,
        "heikin": 3.01,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 3.557
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 114.908,
        "saikou": 7.2,
        "heikin": 3.41,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 4.207
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 109,
        "saikou": 7,
        "heikin": 3.28,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 4.136
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 163.208,
        "saikou": 9.44,
        "heikin": 3.25,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.114
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 161.258,
        "saikou": 9.44,
        "heikin": 3.18,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.972
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 148.908,
        "saikou": 9,
        "heikin": 3,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.74
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 189.358,
        "saikou": 9.44,
        "heikin": 3.33,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.416
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 176.908,
        "saikou": 9.91,
        "heikin": 3.64,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.351
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 161.958,
        "saikou": 6,
        "heikin": 2.58,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 5.214
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 297.258,
        "saikou": 3,
        "heikin": 2.36,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 4.506
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 248.958,
        "saikou": 4.28,
        "heikin": 2.82,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 5.378
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 206.968,
        "saikou": 4.28,
        "heikin": 2.68,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 6.03
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 230.268,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 5.857
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 175.908,
        "saikou": 4.28,
        "heikin": 1.44,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 5.378
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 173.958,
        "saikou": 1.83,
        "heikin": 1.8,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 5.435
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 249.208,
        "saikou": 1.3,
        "heikin": 1.17,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 5.218
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 177.99,
        "saikou": 5.6,
        "heikin": 2.5,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 5.454
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 243.24,
        "saikou": 2.46,
        "heikin": 1.83,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 5.252
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 192.968,
        "saikou": 4.99,
        "heikin": 2.6,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 5.275
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 242.208,
        "saikou": 2.41,
        "heikin": 1.79,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 5.194
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 191.958,
        "saikou": 3.63,
        "heikin": 2.6,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 4.754
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 228.218,
        "saikou": 2.85,
        "heikin": 2.04,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 4.822
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 247.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.853
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 195.908,
        "saikou": 4.29,
        "heikin": 2.56,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.807
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 193.958,
        "saikou": 4.28,
        "heikin": 2.25,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.384
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 208.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.694
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 193.958,
        "saikou": 4.28,
        "heikin": 2.05,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.145
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 48.88,
        "saikou": 4.09,
        "heikin": 4.09,
        "boshuAvg30d": 119.4,
        "heikinAvg30d": 5.59
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 60.31,
        "saikou": 10,
        "heikin": 7.67,
        "boshuAvg30d": 119.4,
        "heikinAvg30d": 5.646
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 76.26,
        "saikou": 10,
        "heikin": 6.61,
        "boshuAvg30d": 119.4,
        "heikinAvg30d": 5.679
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 76.87,
        "saikou": 10,
        "heikin": 6.64,
        "boshuAvg30d": 119.4,
        "heikinAvg30d": 5.701
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 70.342,
        "saikou": 10,
        "heikin": 6.69,
        "boshuAvg30d": 119.4,
        "heikinAvg30d": 5.547
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 84.842,
        "saikou": 10,
        "heikin": 5.31,
        "boshuAvg30d": 119.4,
        "heikinAvg30d": 5.494
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 91.22,
        "saikou": 10,
        "heikin": 7.87,
        "boshuAvg30d": 118.4,
        "heikinAvg30d": 5.486
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 107.22,
        "saikou": 10,
        "heikin": 6.33,
        "boshuAvg30d": 118.6,
        "heikinAvg30d": 5.331
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 99.218,
        "saikou": 10,
        "heikin": 5.2,
        "boshuAvg30d": 118.4,
        "heikinAvg30d": 5.15
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 84.718,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 118.6,
        "heikinAvg30d": 5.166
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 84.718,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 118.6,
        "heikinAvg30d": 5.39
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 99.218,
        "saikou": 10,
        "heikin": 5.98,
        "boshuAvg30d": 118.6,
        "heikinAvg30d": 5.405
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 99.218,
        "saikou": 10,
        "heikin": 6.07,
        "boshuAvg30d": 125.6,
        "heikinAvg30d": 5.628
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 109.718,
        "saikou": 10,
        "heikin": 5.42,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 5.636
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 111.218,
        "saikou": 10,
        "heikin": 6.06,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 5.985
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 109.718,
        "saikou": 10,
        "heikin": 5.87,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 6.04
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 111.218,
        "saikou": 10,
        "heikin": 5.51,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 5.918
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 109.718,
        "saikou": 10,
        "heikin": 6.03,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 6.044
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 135.284,
        "saikou": 10,
        "heikin": 5.94,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.83
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 125.214,
        "saikou": 10,
        "heikin": 5.75,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 5.872
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 121.259,
        "saikou": 10,
        "heikin": 5.73,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 5.828
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 121.259,
        "saikou": 10,
        "heikin": 5.82,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 6.02
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 111.218,
        "saikou": 7.9,
        "heikin": 5.06,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.985
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 109.217,
        "saikou": 7.89,
        "heikin": 5.1,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 6.036
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 121.217,
        "saikou": 10,
        "heikin": 5.71,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 6.06
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 135.218,
        "saikou": 10,
        "heikin": 6.26,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 6.094
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 137.214,
        "saikou": 10,
        "heikin": 6.12,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 5.558
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 124.548,
        "saikou": 10,
        "heikin": 6.29,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 5.732
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 122.714,
        "saikou": 10,
        "heikin": 6.19,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 5.668
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 98.714,
        "saikou": 5.78,
        "heikin": 4.05,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 5.19
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 89.214,
        "saikou": 10,
        "heikin": 4.96,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 5.217
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 101.214,
        "saikou": 10,
        "heikin": 7.06,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 4.531
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 101.214,
        "saikou": 10,
        "heikin": 5.92,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 4.359
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 99.714,
        "saikou": 9.5,
        "heikin": 5.69,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 4.302
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 99.218,
        "saikou": 9.5,
        "heikin": 5.32,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 4.272
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 97.718,
        "saikou": 9.5,
        "heikin": 4.18,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 4.124
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 97.318,
        "saikou": 4,
        "heikin": 2.68,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 3.809
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 97.718,
        "saikou": 9.49,
        "heikin": 2.99,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 3.506
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 99.218,
        "saikou": 6.42,
        "heikin": 3.05,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 3.466
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 99.218,
        "saikou": 6.42,
        "heikin": 2.98,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 3.875
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 83.263,
        "saikou": 6.42,
        "heikin": 3.03,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 3.8
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 93.913,
        "saikou": 6.42,
        "heikin": 3.11,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 3.978
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 84.718,
        "saikou": 6.43,
        "heikin": 3.19,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 4.081
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 84.718,
        "saikou": 5.49,
        "heikin": 3.45,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 4.166
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 84.718,
        "saikou": 5.57,
        "heikin": 3.48,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 4.208
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 83.368,
        "saikou": 5.66,
        "heikin": 3.54,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 4.728
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 88.548,
        "saikou": 5.28,
        "heikin": 3.36,
        "boshuAvg30d": 38.6,
        "heikinAvg30d": 4.54
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 81.868,
        "saikou": 5.41,
        "heikin": 5.32,
        "boshuAvg30d": 38.4,
        "heikinAvg30d": 5.152
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 481.586,
        "saikou": 1.97,
        "heikin": 0.75,
        "boshuAvg30d": 239.0,
        "heikinAvg30d": 3.126
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 455.154,
        "saikou": 3,
        "heikin": 1.18,
        "boshuAvg30d": 239.0,
        "heikinAvg30d": 3.121
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 427.92,
        "saikou": 10,
        "heikin": 2.92,
        "boshuAvg30d": 239.0,
        "heikinAvg30d": 2.967
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 400.824,
        "saikou": 1,
        "heikin": 0.65,
        "boshuAvg30d": 239.0,
        "heikinAvg30d": 2.9
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 405.666,
        "saikou": 3,
        "heikin": 1.22,
        "boshuAvg30d": 237.7,
        "heikinAvg30d": 2.936
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 406.656,
        "saikou": 10,
        "heikin": 2.93,
        "boshuAvg30d": 237.0,
        "heikinAvg30d": 2.82
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 426.424,
        "saikou": 1,
        "heikin": 0.61,
        "boshuAvg30d": 235.0,
        "heikinAvg30d": 2.98
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 439.957,
        "saikou": 3,
        "heikin": 1.04,
        "boshuAvg30d": 237.0,
        "heikinAvg30d": 3.095
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 389.965,
        "saikou": 10,
        "heikin": 2.91,
        "boshuAvg30d": 237.0,
        "heikinAvg30d": 3.194
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 413.617,
        "saikou": 1,
        "heikin": 0.58,
        "boshuAvg30d": 238.0,
        "heikinAvg30d": 3.141
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 368.776,
        "saikou": 3,
        "heikin": 1.25,
        "boshuAvg30d": 238.0,
        "heikinAvg30d": 3.058
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 349.809,
        "saikou": 7.83,
        "heikin": 1.58,
        "boshuAvg30d": 238.0,
        "heikinAvg30d": 3.212
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 330.277,
        "saikou": 7.7,
        "heikin": 1.83,
        "boshuAvg30d": 257.2,
        "heikinAvg30d": 3.381
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 369.5,
        "saikou": 7.89,
        "heikin": 1.78,
        "boshuAvg30d": 265.2,
        "heikinAvg30d": 3.492
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 376.342,
        "saikou": 7.61,
        "heikin": 1.49,
        "boshuAvg30d": 270.0,
        "heikinAvg30d": 3.317
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 375.349,
        "saikou": 7.67,
        "heikin": 1.88,
        "boshuAvg30d": 275.3,
        "heikinAvg30d": 3.009
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 556.671,
        "saikou": 7.67,
        "heikin": 2.29,
        "boshuAvg30d": 275.6,
        "heikinAvg30d": 2.786
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 377.297,
        "saikou": 7.68,
        "heikin": 2.44,
        "boshuAvg30d": 279.5,
        "heikinAvg30d": 2.886
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 330.21,
        "saikou": 1.34,
        "heikin": 0.61,
        "boshuAvg30d": 271.0,
        "heikinAvg30d": 2.661
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 327.032,
        "saikou": 10,
        "heikin": 1.58,
        "boshuAvg30d": 271.0,
        "heikinAvg30d": 2.787
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 299.839,
        "saikou": 1.82,
        "heikin": 0.64,
        "boshuAvg30d": 271.7,
        "heikinAvg30d": 2.79
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 298.107,
        "saikou": 10,
        "heikin": 1.77,
        "boshuAvg30d": 270.9,
        "heikinAvg30d": 2.732
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 296,
        "ouatsu": 294.041,
        "saikou": 10,
        "heikin": 1.91,
        "boshuAvg30d": 268.7,
        "heikinAvg30d": 2.772
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 296,
        "ouatsu": 282.641,
        "saikou": 10,
        "heikin": 2.06,
        "boshuAvg30d": 268.7,
        "heikinAvg30d": 2.84
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 294,
        "ouatsu": 291.993,
        "saikou": 8.8,
        "heikin": 1.95,
        "boshuAvg30d": 265.6,
        "heikinAvg30d": 2.574
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 294,
        "ouatsu": 297.723,
        "saikou": 2.82,
        "heikin": 0.94,
        "boshuAvg30d": 265.6,
        "heikinAvg30d": 2.569
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 294,
        "ouatsu": 281.881,
        "saikou": 1.29,
        "heikin": 0.66,
        "boshuAvg30d": 265.6,
        "heikinAvg30d": 2.835
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 294,
        "ouatsu": 279.891,
        "saikou": 2.07,
        "heikin": 0.72,
        "boshuAvg30d": 265.2,
        "heikinAvg30d": 2.839
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 293,
        "ouatsu": 287.819,
        "saikou": 3.2,
        "heikin": 0.5,
        "boshuAvg30d": 264.2,
        "heikinAvg30d": 2.881
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 293,
        "ouatsu": 270.172,
        "saikou": 3,
        "heikin": 0.59,
        "boshuAvg30d": 263.5,
        "heikinAvg30d": 2.7
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 307.335,
        "saikou": 1.02,
        "heikin": 0.56,
        "boshuAvg30d": 261.5,
        "heikinAvg30d": 2.546
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 346.73,
        "saikou": 6.74,
        "heikin": 1.28,
        "boshuAvg30d": 261.1,
        "heikinAvg30d": 2.524
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 384.309,
        "saikou": 7.93,
        "heikin": 2.38,
        "boshuAvg30d": 260.8,
        "heikinAvg30d": 2.514
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 379.119,
        "saikou": 5.56,
        "heikin": 2.63,
        "boshuAvg30d": 260.8,
        "heikinAvg30d": 2.5
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 406.538,
        "saikou": 8.54,
        "heikin": 3.31,
        "boshuAvg30d": 258.8,
        "heikinAvg30d": 2.33
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 291,
        "ouatsu": 408.58,
        "saikou": 8.38,
        "heikin": 2.96,
        "boshuAvg30d": 258.8,
        "heikinAvg30d": 2.405
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 293,
        "ouatsu": 445.11,
        "saikou": 6.71,
        "heikin": 3.61,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.537
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 293,
        "ouatsu": 441.457,
        "saikou": 7.88,
        "heikin": 2.61,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.373
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 293,
        "ouatsu": 430.19,
        "saikou": 5.1,
        "heikin": 2.36,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.504
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 293,
        "ouatsu": 435.802,
        "saikou": 6.83,
        "heikin": 3.18,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 2.262
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 292,
        "ouatsu": 425.511,
        "saikou": 7.67,
        "heikin": 2.33,
        "boshuAvg30d": 259.2,
        "heikinAvg30d": 2.309
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 292,
        "ouatsu": 423.563,
        "saikou": 7.13,
        "heikin": 1.99,
        "boshuAvg30d": 259.2,
        "heikinAvg30d": 2.578
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 291,
        "ouatsu": 386.236,
        "saikou": 7.58,
        "heikin": 1.87,
        "boshuAvg30d": 258.9,
        "heikinAvg30d": 2.27
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 291,
        "ouatsu": 355.197,
        "saikou": 7.58,
        "heikin": 1.84,
        "boshuAvg30d": 258.9,
        "heikinAvg30d": 2.28
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 291,
        "ouatsu": 364.692,
        "saikou": 7.58,
        "heikin": 1.83,
        "boshuAvg30d": 261.9,
        "heikinAvg30d": 2.318
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 289,
        "ouatsu": 364.913,
        "saikou": 7.58,
        "heikin": 2.13,
        "boshuAvg30d": 256.9,
        "heikinAvg30d": 2.382
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 287,
        "ouatsu": 346.101,
        "saikou": 3.46,
        "heikin": 1.9,
        "boshuAvg30d": 255.3,
        "heikinAvg30d": 2.891
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 286,
        "ouatsu": 450.488,
        "saikou": 8,
        "heikin": 2.77,
        "boshuAvg30d": 253.6,
        "heikinAvg30d": 2.911
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 181,
        "ouatsu": 227.766,
        "saikou": 9.17,
        "heikin": 2.74,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 1.602
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 181,
        "ouatsu": 249,
        "saikou": 9.08,
        "heikin": 3.91,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 1.553
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 181,
        "ouatsu": 250.914,
        "saikou": 8.79,
        "heikin": 3.45,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 1.603
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 180,
        "ouatsu": 254.886,
        "saikou": 8.39,
        "heikin": 3.44,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 1.66
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 180,
        "ouatsu": 242.775,
        "saikou": 8.8,
        "heikin": 3.36,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 1.652
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 179,
        "ouatsu": 240.791,
        "saikou": 8.78,
        "heikin": 3.36,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 1.611
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 178,
        "ouatsu": 262.866,
        "saikou": 8.47,
        "heikin": 3.42,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.469
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 178,
        "ouatsu": 241.476,
        "saikou": 7.91,
        "heikin": 3.14,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.492
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 178,
        "ouatsu": 243.292,
        "saikou": 7.9,
        "heikin": 3.14,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 1.429
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 178,
        "ouatsu": 227.364,
        "saikou": 8.27,
        "heikin": 3.21,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 1.455
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 178,
        "ouatsu": 229.354,
        "saikou": 7.88,
        "heikin": 3.1,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 1.424
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 178,
        "ouatsu": 225.802,
        "saikou": 7.87,
        "heikin": 3.09,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 1.356
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 188,
        "ouatsu": 212.268,
        "saikou": 9.27,
        "heikin": 3.48,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 1.585
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 193,
        "ouatsu": 212.268,
        "saikou": 9.43,
        "heikin": 3.47,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.607
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 196,
        "ouatsu": 164.89,
        "saikou": 9.27,
        "heikin": 1.95,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 1.944
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 167.302,
        "saikou": 9.27,
        "heikin": 1.67,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.019
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 169.292,
        "saikou": 9.27,
        "heikin": 1.7,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.03
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 167.308,
        "saikou": 9.48,
        "heikin": 1.74,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.208
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 203,
        "ouatsu": 171.29,
        "saikou": 9.48,
        "heikin": 1.87,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.578
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 203,
        "ouatsu": 169.804,
        "saikou": 9.48,
        "heikin": 1.88,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.569
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 203,
        "ouatsu": 150.254,
        "saikou": 9.48,
        "heikin": 1.94,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.68
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 203,
        "ouatsu": 150.345,
        "saikou": 9.68,
        "heikin": 1.93,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.668
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 202,
        "ouatsu": 137.411,
        "saikou": 9.68,
        "heikin": 1.9,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.517
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 201,
        "ouatsu": 133.509,
        "saikou": 9.68,
        "heikin": 1.93,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.549
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 197,
        "ouatsu": 125.542,
        "saikou": 9.68,
        "heikin": 2.95,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.522
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 197,
        "ouatsu": 130.4,
        "saikou": 9.68,
        "heikin": 2.93,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.446
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 197,
        "ouatsu": 160.053,
        "saikou": 9.48,
        "heikin": 1.75,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.456
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 197,
        "ouatsu": 167.301,
        "saikou": 9.48,
        "heikin": 1.89,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.564
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 197,
        "ouatsu": 171.29,
        "saikou": 9.48,
        "heikin": 1.88,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.736
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 197,
        "ouatsu": 169.306,
        "saikou": 9.48,
        "heikin": 1.88,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 2.66
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 195,
        "ouatsu": 171.29,
        "saikou": 9.48,
        "heikin": 1.88,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.742
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 195,
        "ouatsu": 204.892,
        "saikou": 9.48,
        "heikin": 2.13,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.854
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 195,
        "ouatsu": 185.496,
        "saikou": 9.48,
        "heikin": 2.61,
        "boshuAvg30d": 131.7,
        "heikinAvg30d": 2.757
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 194,
        "ouatsu": 150.126,
        "saikou": 9.48,
        "heikin": 5.47,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.771
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 194,
        "ouatsu": 148.236,
        "saikou": 9.48,
        "heikin": 4.29,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.594
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 193,
        "ouatsu": 153.837,
        "saikou": 9.48,
        "heikin": 2.97,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 2.489
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 191,
        "ouatsu": 183.006,
        "saikou": 9.48,
        "heikin": 3.11,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.152
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 191,
        "ouatsu": 186.987,
        "saikou": 9.19,
        "heikin": 2.92,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.097
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 191,
        "ouatsu": 224.394,
        "saikou": 9.19,
        "heikin": 2.73,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.81
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 191,
        "ouatsu": 202.669,
        "saikou": 9.19,
        "heikin": 2.61,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.697
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 191,
        "ouatsu": 218.471,
        "saikou": 9.19,
        "heikin": 2.36,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.612
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 191,
        "ouatsu": 214.587,
        "saikou": 9.19,
        "heikin": 2.37,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.642
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 193,
        "ouatsu": 224.396,
        "saikou": 9.19,
        "heikin": 2.14,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.564
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 193,
        "ouatsu": 224.396,
        "saikou": 9.19,
        "heikin": 2.32,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.751
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 193,
        "ouatsu": 215.112,
        "saikou": 9.19,
        "heikin": 2.31,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.753
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 217.096,
        "saikou": 9.19,
        "heikin": 2.55,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 1.84
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 190,
        "ouatsu": 217.096,
        "saikou": 9.19,
        "heikin": 2.32,
        "boshuAvg30d": 128.2,
        "heikinAvg30d": 1.707
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 187,
        "ouatsu": 211.712,
        "saikou": 9.19,
        "heikin": 2.33,
        "boshuAvg30d": 125.2,
        "heikinAvg30d": 1.794
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 1.93,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.443
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 18.094,
        "saikou": 2.25,
        "heikin": 1.33,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.324
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 4.108,
        "saikou": 2.05,
        "heikin": 1.55,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.336
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.35,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.252
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.85,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.357
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.391
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.54,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.749
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.93,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 2.091
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 2.147
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.75,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 2.115
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.12,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 2.39
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 12.896,
        "saikou": 5.44,
        "heikin": 4.5,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 2.259
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 12.012,
        "saikou": 6.01,
        "heikin": 4.85,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.002
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.8,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.084
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 15.08,
        "saikou": 3.35,
        "heikin": 2.59,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.545
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 31,
        "saikou": 3.55,
        "heikin": 0.92,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.441
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 82.928,
        "saikou": 3.85,
        "heikin": 2.15,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.988
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 82.928,
        "saikou": 3.6,
        "heikin": 1.06,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.955
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.35,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.392
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.68,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.717
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.53,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.49
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.39,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.805
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.1,
        "heikin": 4.95,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 3.719
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.1,
        "heikin": 4.95,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 3.599
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.4,
        "heikin": 5.3,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 2.227
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.85,
        "heikin": 4.7,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.981
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.15,
        "heikin": 6.05,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.953
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.73,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.344
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.25,
        "heikin": 5.1,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.976
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 4.55,
        "heikin": 1.62,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.82
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 82.928,
        "saikou": 6.55,
        "heikin": 1.14,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 5.101
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 47.928,
        "saikou": 7.45,
        "heikin": 0.96,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 5.933
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 5.05,
        "heikin": 1.14,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.737
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 5.282,
        "saikou": 4.45,
        "heikin": 3.71,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.482
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.4,
        "heikin": 4.3,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.468
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.4,
        "heikin": 4.3,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.922
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 9.394,
        "saikou": 4.57,
        "heikin": 3.87,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 3.79
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 7.806,
        "saikou": 4.63,
        "heikin": 4.31,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.368
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 17.16,
        "saikou": 4.63,
        "heikin": 4.19,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 3.219
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 4.37,
        "heikin": 4.26,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 3.5
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 20.546,
        "saikou": 4.63,
        "heikin": 4.31,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.969
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 11.306,
        "saikou": 4.37,
        "heikin": 3.96,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.972
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4.25,
        "heikin": 3.94,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.943
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.8,
        "heikin": 3.55,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.764
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.09,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 3.069
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.25,
        "heikin": 3,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.699
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.6,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.278
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.43,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.753
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 40.885,
        "saikou": 9.99,
        "heikin": 7.1,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.253
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 171.358,
        "saikou": 9.99,
        "heikin": 2.47,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.059
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 181.111,
        "saikou": 9,
        "heikin": 1.58,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 0.932
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 159.003,
        "saikou": 9,
        "heikin": 1.85,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 0.949
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 166.915,
        "saikou": 9.99,
        "heikin": 2.35,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 0.953
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 99.482,
        "saikou": 9.99,
        "heikin": 3.31,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 1.176
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 107.369,
        "saikou": 9.99,
        "heikin": 3.15,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 1.335
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 113.265,
        "saikou": 9.99,
        "heikin": 3.47,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 1.54
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 113.265,
        "saikou": 9.99,
        "heikin": 3.37,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.514
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 113.265,
        "saikou": 9.99,
        "heikin": 3.25,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.526
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 113.265,
        "saikou": 9.99,
        "heikin": 3.3,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.502
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 113.265,
        "saikou": 9.99,
        "heikin": 3.16,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.424
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 65.84,
        "saikou": 9.99,
        "heikin": 4.36,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 1.47
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 3.67,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 1.533
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.02,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 1.665
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 4.07,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 1.681
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 154.705,
        "saikou": 9.99,
        "heikin": 3.04,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 1.64
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.42,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 2.212
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 145.691,
        "saikou": 9.99,
        "heikin": 3.5,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 2.267
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.49,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 2.332
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 158.706,
        "saikou": 9.99,
        "heikin": 3.63,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 2.252
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 156.856,
        "saikou": 9.99,
        "heikin": 3.64,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 2.38
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 155.4,
        "saikou": 9.99,
        "heikin": 3.57,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 2.424
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 147.41,
        "saikou": 9.99,
        "heikin": 3.07,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 2.138
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 135.849,
        "saikou": 9.99,
        "heikin": 3.16,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 1.879
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.37,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 1.909
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.61,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 2.343
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.43,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 2.269
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.55,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 2.429
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.46,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 2.204
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 136.746,
        "saikou": 9.99,
        "heikin": 4,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 2.534
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 4.6,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 2.711
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 4.6,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 2.673
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 226.81,
        "saikou": 9.99,
        "heikin": 5.92,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 2.245
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 241.81,
        "saikou": 8,
        "heikin": 4.9,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 2.307
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 241.81,
        "saikou": 9.99,
        "heikin": 5.15,
        "boshuAvg30d": 166.8,
        "heikinAvg30d": 2.562
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 238.407,
        "saikou": 9.99,
        "heikin": 5.02,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 2.007
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 238.407,
        "saikou": 9.99,
        "heikin": 4.96,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 1.991
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 247.796,
        "saikou": 9.99,
        "heikin": 4.82,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 1.823
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 247.796,
        "saikou": 9.99,
        "heikin": 4.77,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 1.74
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 230.811,
        "saikou": 9.99,
        "heikin": 5.06,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 1.75
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 245.811,
        "saikou": 9.99,
        "heikin": 4.97,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 1.786
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 247.796,
        "saikou": 9.99,
        "heikin": 4.83,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 1.755
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 247.796,
        "saikou": 9.99,
        "heikin": 4.85,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 1.796
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 247.796,
        "saikou": 9.99,
        "heikin": 4.82,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 1.795
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 247.796,
        "saikou": 9.99,
        "heikin": 4.92,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 1.652
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 176.432,
        "saikou": 9.99,
        "heikin": 2.57,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 1.519
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 101.595,
        "saikou": 5,
        "heikin": 2.29,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 1.581
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 143,
        "ouatsu": 196.146,
        "saikou": 7.99,
        "heikin": 2.48,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.398
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 143,
        "ouatsu": 196.146,
        "saikou": 2.53,
        "heikin": 2.2,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.579
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 143,
        "ouatsu": 197.946,
        "saikou": 2.53,
        "heikin": 2.22,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.249
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 143,
        "ouatsu": 199.936,
        "saikou": 2.53,
        "heikin": 2.22,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.08
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 143,
        "ouatsu": 199.936,
        "saikou": 3.65,
        "heikin": 2.83,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.155
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 143,
        "ouatsu": 199.936,
        "saikou": 6.8,
        "heikin": 2.49,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.416
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 143,
        "ouatsu": 218.788,
        "saikou": 5.66,
        "heikin": 4.15,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.48
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 144,
        "ouatsu": 218.788,
        "saikou": 7.27,
        "heikin": 5.11,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 2.783
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 144,
        "ouatsu": 218.788,
        "saikou": 6.83,
        "heikin": 4.85,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 2.968
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 144,
        "ouatsu": 218.788,
        "saikou": 7.17,
        "heikin": 5.05,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 3.307
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 144,
        "ouatsu": 218.788,
        "saikou": 7.17,
        "heikin": 5.05,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 3.182
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 144,
        "ouatsu": 218.788,
        "saikou": 6.59,
        "heikin": 4.68,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 2.988
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 146,
        "ouatsu": 217.788,
        "saikou": 7.17,
        "heikin": 4.5,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.985
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 147,
        "ouatsu": 217.788,
        "saikou": 7,
        "heikin": 3.84,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.839
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 147,
        "ouatsu": 205.838,
        "saikou": 6.78,
        "heikin": 2.65,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 2.148
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 148,
        "ouatsu": 205.838,
        "saikou": 6.78,
        "heikin": 1.77,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.867
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 148,
        "ouatsu": 205.838,
        "saikou": 2.29,
        "heikin": 1.68,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.894
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 148,
        "ouatsu": 205.838,
        "saikou": 1.56,
        "heikin": 0.72,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.883
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 185.956,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.033
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 152,
        "ouatsu": 188.389,
        "saikou": 6.78,
        "heikin": 1.11,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.092
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 153,
        "ouatsu": 188.389,
        "saikou": 6.78,
        "heikin": 1.11,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.69
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 154,
        "ouatsu": 188.389,
        "saikou": 6.78,
        "heikin": 1.11,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 1.755
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 154,
        "ouatsu": 188.389,
        "saikou": 6.78,
        "heikin": 1.11,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 1.602
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 154,
        "ouatsu": 188.389,
        "saikou": 6.78,
        "heikin": 1.11,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 1.735
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 151,
        "ouatsu": 188.389,
        "saikou": 6.78,
        "heikin": 1.13,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.587
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 151,
        "ouatsu": 187.141,
        "saikou": 6.78,
        "heikin": 1.14,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.792
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 151,
        "ouatsu": 200.339,
        "saikou": 2.29,
        "heikin": 1.01,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.839
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 151,
        "ouatsu": 197.906,
        "saikou": 6.78,
        "heikin": 1.46,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.92
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 151,
        "ouatsu": 197.906,
        "saikou": 6.78,
        "heikin": 1.73,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.977
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 150,
        "ouatsu": 197.906,
        "saikou": 6.78,
        "heikin": 1.9,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.062
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 150,
        "ouatsu": 197.906,
        "saikou": 4.42,
        "heikin": 2.07,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.225
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 150,
        "ouatsu": 197.906,
        "saikou": 6.8,
        "heikin": 2.4,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.493
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 150,
        "ouatsu": 197.906,
        "saikou": 7,
        "heikin": 2.52,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.051
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 150,
        "ouatsu": 197.906,
        "saikou": 7,
        "heikin": 4.13,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.718
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 150,
        "ouatsu": 197.906,
        "saikou": 7.43,
        "heikin": 5.18,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.881
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 150,
        "ouatsu": 185.956,
        "saikou": 7.64,
        "heikin": 5.09,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.956
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 150,
        "ouatsu": 184.966,
        "saikou": 7.64,
        "heikin": 5.33,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.977
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 150,
        "ouatsu": 184.966,
        "saikou": 7.64,
        "heikin": 4.92,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.922
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 150,
        "ouatsu": 216.798,
        "saikou": 7.64,
        "heikin": 5.33,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.69
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 150,
        "ouatsu": 206.838,
        "saikou": 7.43,
        "heikin": 5.2,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 3.46
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 149,
        "ouatsu": 218.788,
        "saikou": 7.69,
        "heikin": 5.36,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.786
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 149,
        "ouatsu": 218.788,
        "saikou": 7.43,
        "heikin": 5.2,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.661
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 218.788,
        "saikou": 7.64,
        "heikin": 5.33,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.719
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 218.788,
        "saikou": 7.17,
        "heikin": 5.05,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.557
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 218.788,
        "saikou": 6.59,
        "heikin": 4.7,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.477
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 147,
        "ouatsu": 218.788,
        "saikou": 6.08,
        "heikin": 4.36,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 2.965
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 146,
        "ouatsu": 218.788,
        "saikou": 7,
        "heikin": 3.63,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.855
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 146,
        "ouatsu": 218.788,
        "saikou": 7.99,
        "heikin": 2.27,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.129
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
        "heikinAvg30d": 0.774
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.728
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.699
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.683
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.685
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.684
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 200.343,
        "saikou": 1.6,
        "heikin": 0.94,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.734
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 188.8,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.763
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 187.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.801
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 187.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.853
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.838
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 187.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.786
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 1.03,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.956
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 0.835
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 235.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.777
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 235.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.795
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 258.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.788
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 258.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.814
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.031
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.988
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.029
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.967
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 9.2,
        "heikin": 1.55,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.972
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 9.2,
        "heikin": 1.55,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.989
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 171.843,
        "saikou": 1.99,
        "heikin": 1.23,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.999
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 171.843,
        "saikou": 1.99,
        "heikin": 1.23,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.008
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.17,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.013
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.043
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.088
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.038
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 1.094
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 1.1
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 1.306
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 1.431
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 1.435
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 42.8,
        "heikinAvg30d": 1.577
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.54
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.22,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.501
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.453
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.18,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.462
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.18,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.414
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.14,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.405
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.94
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.35,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.896
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.868
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.779
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.858
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.845
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 148.108,
        "saikou": 9.94,
        "heikin": 3.88,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.335
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 150.032,
        "saikou": 5.33,
        "heikin": 3.5,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.056
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 148.062,
        "saikou": 5.02,
        "heikin": 3.2,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.964
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 140.156,
        "saikou": 5.91,
        "heikin": 3.7,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.786
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 140.156,
        "saikou": 5.78,
        "heikin": 3.69,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.791
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 140.156,
        "saikou": 5.78,
        "heikin": 3.67,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.145
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 211.671,
        "saikou": 7.24,
        "heikin": 5.47,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.531
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 301.843,
        "saikou": 8.12,
        "heikin": 6.85,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.15
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 303.708,
        "saikou": 8.12,
        "heikin": 6.83,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.209
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 305.671,
        "saikou": 8.23,
        "heikin": 6.94,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.36
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 305.671,
        "saikou": 7.24,
        "heikin": 6.06,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.671
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 302.371,
        "saikou": 8.45,
        "heikin": 6.67,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.514
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 302.371,
        "saikou": 8.52,
        "heikin": 6.76,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 6.308
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 206.395,
        "saikou": 7.24,
        "heikin": 5.04,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 5.858
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 216.395,
        "saikou": 3.65,
        "heikin": 2.58,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 4.961
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 150.395,
        "saikou": 2.43,
        "heikin": 0.86,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 4.234
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 196.415,
        "saikou": 2.07,
        "heikin": 0.64,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 3.958
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 250.415,
        "saikou": 1.15,
        "heikin": 0.44,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 3.813
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 213.547,
        "saikou": 0.96,
        "heikin": 0.43,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.794
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 213.547,
        "saikou": 0.8,
        "heikin": 0.43,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.715
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 203.557,
        "saikou": 0.73,
        "heikin": 0.44,
        "boshuAvg30d": 180.5,
        "heikinAvg30d": 3.526
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 207.604,
        "saikou": 0.8,
        "heikin": 0.43,
        "boshuAvg30d": 181.5,
        "heikinAvg30d": 3.486
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 192.234,
        "saikou": 0.6,
        "heikin": 0.42,
        "boshuAvg30d": 181.5,
        "heikinAvg30d": 3.273
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 190.322,
        "saikou": 0.6,
        "heikin": 0.42,
        "boshuAvg30d": 181.5,
        "heikinAvg30d": 3.256
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 186.494,
        "saikou": 0.54,
        "heikin": 0.41,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.133
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 188.472,
        "saikou": 0.6,
        "heikin": 0.42,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.211
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 201.983,
        "saikou": 0.74,
        "heikin": 0.43,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.855
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 213.609,
        "saikou": 1.08,
        "heikin": 0.48,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 4.401
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 225.435,
        "saikou": 0.99,
        "heikin": 0.46,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 4.261
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 125.435,
        "saikou": 5,
        "heikin": 2.52,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.979
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 242.435,
        "saikou": 4.56,
        "heikin": 3.21,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 5.322
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 192.435,
        "saikou": 8.22,
        "heikin": 5.31,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 5.594
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 149.435,
        "saikou": 8.83,
        "heikin": 6.01,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 6.539
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 243.235,
        "saikou": 10,
        "heikin": 6.51,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 7.176
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 241.272,
        "saikou": 10,
        "heikin": 6.4,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 7.326
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 228.627,
        "saikou": 10,
        "heikin": 6.54,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 7.402
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 221.662,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 7.368
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 214.131,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 7.365
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 230.979,
        "saikou": 10,
        "heikin": 5.65,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.981
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 245.488,
        "saikou": 10,
        "heikin": 6.56,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.603
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 250.145,
        "saikou": 10,
        "heikin": 6.22,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.748
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 250.159,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.416
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 250.854,
        "saikou": 10,
        "heikin": 6.5,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.314
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 244.323,
        "saikou": 10,
        "heikin": 6.45,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.157
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 254.149,
        "saikou": 10,
        "heikin": 6.45,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.319
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 258.949,
        "saikou": 10,
        "heikin": 6.32,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.105
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 265.599,
        "saikou": 10,
        "heikin": 6.49,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 5.924
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 172.599,
        "saikou": 6.98,
        "heikin": 4.33,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 5.221
      }
    ]
  }
};
