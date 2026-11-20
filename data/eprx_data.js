// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/21〜2026/11/19）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-20",
  "fetchedAt": "2026-11-20",
  "avgWindowLabel": "過去30日平均（2026/10/21〜2026/11/19）",
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
      "boshu": 993,
      "ouatsu": 1553.536,
      "saikou": 10,
      "heikin": 2.14,
      "boshuAvg30d": 1142.7,
      "heikinAvg30d": 2.569
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 993,
      "ouatsu": 1605.183,
      "saikou": 10,
      "heikin": 2.12,
      "boshuAvg30d": 1142.7,
      "heikinAvg30d": 2.551
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 993,
      "ouatsu": 1582.639,
      "saikou": 10,
      "heikin": 2.19,
      "boshuAvg30d": 1142.7,
      "heikinAvg30d": 2.526
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 992,
      "ouatsu": 1586.074,
      "saikou": 10,
      "heikin": 2.25,
      "boshuAvg30d": 1142.0,
      "heikinAvg30d": 2.44
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 986,
      "ouatsu": 1470.729,
      "saikou": 9.6,
      "heikin": 1.9,
      "boshuAvg30d": 1137.1,
      "heikinAvg30d": 2.495
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 986,
      "ouatsu": 1610.693,
      "saikou": 7.98,
      "heikin": 1.51,
      "boshuAvg30d": 1136.8,
      "heikinAvg30d": 2.595
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1069,
      "ouatsu": 1701.478,
      "saikou": 10,
      "heikin": 1.59,
      "boshuAvg30d": 1139.5,
      "heikinAvg30d": 2.68
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1073,
      "ouatsu": 1675.495,
      "saikou": 9.2,
      "heikin": 1.75,
      "boshuAvg30d": 1142.8,
      "heikinAvg30d": 2.918
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1073,
      "ouatsu": 1618.061,
      "saikou": 9.8,
      "heikin": 1.75,
      "boshuAvg30d": 1143.5,
      "heikinAvg30d": 3.004
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1075,
      "ouatsu": 1649.682,
      "saikou": 9.28,
      "heikin": 1.99,
      "boshuAvg30d": 1145.1,
      "heikinAvg30d": 3.018
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1075,
      "ouatsu": 1557.396,
      "saikou": 9.8,
      "heikin": 1.82,
      "boshuAvg30d": 1145.1,
      "heikinAvg30d": 3.068
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1075,
      "ouatsu": 1832.102,
      "saikou": 9.2,
      "heikin": 1.47,
      "boshuAvg30d": 1145.1,
      "heikinAvg30d": 3.072
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1134,
      "ouatsu": 1674.086,
      "saikou": 9.8,
      "heikin": 1.48,
      "boshuAvg30d": 1204.5,
      "heikinAvg30d": 3.199
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1159,
      "ouatsu": 1735.737,
      "saikou": 9.91,
      "heikin": 2.41,
      "boshuAvg30d": 1228.8,
      "heikinAvg30d": 3.243
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1178,
      "ouatsu": 1671.056,
      "saikou": 9.8,
      "heikin": 2.17,
      "boshuAvg30d": 1248.5,
      "heikinAvg30d": 3.219
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1193,
      "ouatsu": 1541.269,
      "saikou": 9.2,
      "heikin": 2.82,
      "boshuAvg30d": 1264.6,
      "heikinAvg30d": 3.015
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1193,
      "ouatsu": 1792.898,
      "saikou": 9.8,
      "heikin": 2.42,
      "boshuAvg30d": 1264.9,
      "heikinAvg30d": 2.855
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1193,
      "ouatsu": 1606.602,
      "saikou": 8.99,
      "heikin": 2.69,
      "boshuAvg30d": 1268.8,
      "heikinAvg30d": 2.888
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1208,
      "ouatsu": 1650.301,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1218.9,
      "heikinAvg30d": 2.814
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1213,
      "ouatsu": 1854.742,
      "saikou": 9.71,
      "heikin": 2.7,
      "boshuAvg30d": 1223.2,
      "heikinAvg30d": 2.776
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1217,
      "ouatsu": 1812.641,
      "saikou": 9.99,
      "heikin": 3.08,
      "boshuAvg30d": 1227.9,
      "heikinAvg30d": 2.712
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1221,
      "ouatsu": 1710.785,
      "saikou": 9.99,
      "heikin": 3.35,
      "boshuAvg30d": 1230.4,
      "heikinAvg30d": 2.746
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1215,
      "ouatsu": 1660.297,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1225.1,
      "heikinAvg30d": 2.727
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1215,
      "ouatsu": 1682.967,
      "saikou": 10,
      "heikin": 3.73,
      "boshuAvg30d": 1224.8,
      "heikinAvg30d": 2.775
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1196,
      "ouatsu": 1611.676,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1205.4,
      "heikinAvg30d": 2.628
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1196,
      "ouatsu": 1679.792,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1205.4,
      "heikinAvg30d": 2.679
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1196,
      "ouatsu": 1541.713,
      "saikou": 9.99,
      "heikin": 3.32,
      "boshuAvg30d": 1205.4,
      "heikinAvg30d": 2.763
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1192,
      "ouatsu": 1693.198,
      "saikou": 9.99,
      "heikin": 3.1,
      "boshuAvg30d": 1201.8,
      "heikinAvg30d": 2.9
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1191,
      "ouatsu": 1678.696,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1200.1,
      "heikinAvg30d": 2.968
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1185,
      "ouatsu": 1554.49,
      "saikou": 9.99,
      "heikin": 3.12,
      "boshuAvg30d": 1194.1,
      "heikinAvg30d": 3.084
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1170,
      "ouatsu": 1532.578,
      "saikou": 9.99,
      "heikin": 3.51,
      "boshuAvg30d": 1252.1,
      "heikinAvg30d": 3.264
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1170,
      "ouatsu": 1633.73,
      "saikou": 9.99,
      "heikin": 4.37,
      "boshuAvg30d": 1251.8,
      "heikinAvg30d": 3.336
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1170,
      "ouatsu": 1583.932,
      "saikou": 10,
      "heikin": 4.37,
      "boshuAvg30d": 1251.9,
      "heikinAvg30d": 3.562
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1168,
      "ouatsu": 1518.239,
      "saikou": 10,
      "heikin": 3.97,
      "boshuAvg30d": 1250.2,
      "heikinAvg30d": 3.696
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1166,
      "ouatsu": 1546.486,
      "saikou": 9.95,
      "heikin": 4.24,
      "boshuAvg30d": 1241.9,
      "heikinAvg30d": 3.638
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1161,
      "ouatsu": 1547.534,
      "saikou": 9.98,
      "heikin": 3.74,
      "boshuAvg30d": 1233.1,
      "heikinAvg30d": 3.637
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1157,
      "ouatsu": 1608.444,
      "saikou": 9.99,
      "heikin": 3.07,
      "boshuAvg30d": 1227.7,
      "heikinAvg30d": 3.485
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1157,
      "ouatsu": 1712.168,
      "saikou": 9.5,
      "heikin": 2.98,
      "boshuAvg30d": 1227.7,
      "heikinAvg30d": 3.473
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1157,
      "ouatsu": 1701.245,
      "saikou": 9.97,
      "heikin": 2.95,
      "boshuAvg30d": 1227.7,
      "heikinAvg30d": 3.314
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1155,
      "ouatsu": 1734.929,
      "saikou": 9.5,
      "heikin": 2.52,
      "boshuAvg30d": 1226.4,
      "heikinAvg30d": 3.224
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1148,
      "ouatsu": 1640.524,
      "saikou": 9.99,
      "heikin": 2.69,
      "boshuAvg30d": 1219.0,
      "heikinAvg30d": 3.119
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1148,
      "ouatsu": 1605.562,
      "saikou": 9.99,
      "heikin": 2.61,
      "boshuAvg30d": 1219.0,
      "heikinAvg30d": 3.08
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1059,
      "ouatsu": 1674.143,
      "saikou": 9.6,
      "heikin": 2.59,
      "boshuAvg30d": 1132.5,
      "heikinAvg30d": 3.011
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1062,
      "ouatsu": 1657.73,
      "saikou": 9.5,
      "heikin": 3.18,
      "boshuAvg30d": 1135.5,
      "heikinAvg30d": 2.92
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1061,
      "ouatsu": 1508.201,
      "saikou": 9.5,
      "heikin": 3.13,
      "boshuAvg30d": 1138.3,
      "heikinAvg30d": 2.955
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1054,
      "ouatsu": 1578.644,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1129.0,
      "heikinAvg30d": 2.903
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1046,
      "ouatsu": 1627.882,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1121.0,
      "heikinAvg30d": 2.921
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1038,
      "ouatsu": 1568.539,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1112.7,
      "heikinAvg30d": 2.671
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
        "ouatsu": 120.968,
        "saikou": 9.56,
        "heikin": 3.75,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 2.626
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 125.968,
        "saikou": 9.28,
        "heikin": 2.28,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 2.811
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 125.968,
        "saikou": 9.4,
        "heikin": 1.9,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 2.696
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 125.968,
        "saikou": 9.17,
        "heikin": 1.95,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 2.93
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 130.958,
        "saikou": 9.6,
        "heikin": 1.92,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.003
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 128.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 2.639
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 130.168,
        "saikou": 9.28,
        "heikin": 1.74,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 2.867
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 118.168,
        "saikou": 9.2,
        "heikin": 3.22,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.656
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 48.118,
        "saikou": 9.8,
        "heikin": 7.4,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.474
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 112.118,
        "saikou": 9.28,
        "heikin": 4.54,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.469
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 48.118,
        "saikou": 9.8,
        "heikin": 7.19,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.406
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 105.118,
        "saikou": 9.2,
        "heikin": 5.08,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.314
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 58.108,
        "saikou": 9.8,
        "heikin": 6.6,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 3.684
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 123.408,
        "saikou": 9.91,
        "heikin": 7.81,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.739
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 113.108,
        "saikou": 9.8,
        "heikin": 3.32,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.159
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 131.108,
        "saikou": 9.2,
        "heikin": 2.76,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.99
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 148.908,
        "saikou": 9.8,
        "heikin": 3.87,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.263
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 146.908,
        "saikou": 7.05,
        "heikin": 3.19,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.665
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 136.028,
        "saikou": 7.6,
        "heikin": 2.03,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 3.538
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 7.55,
        "heikin": 2.56,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.147
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 144.908,
        "saikou": 9.1,
        "heikin": 3.29,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.043
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 114.908,
        "saikou": 9.2,
        "heikin": 3.05,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 3.239
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 125.918,
        "saikou": 9,
        "heikin": 3.72,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 3.401
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 161.218,
        "saikou": 9.6,
        "heikin": 2.37,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 3.317
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 110.968,
        "saikou": 8.64,
        "heikin": 3.15,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 3.148
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 167.3,
        "saikou": 1.77,
        "heikin": 1.5,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 2.861
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 110.968,
        "saikou": 7.35,
        "heikin": 2.44,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 3.317
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 159.268,
        "saikou": 9.91,
        "heikin": 3.81,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.092
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 101.918,
        "saikou": 9,
        "heikin": 2.26,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.072
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 102.918,
        "saikou": 9,
        "heikin": 3,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.436
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 118.95,
        "saikou": 9,
        "heikin": 5.13,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.541
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 193.218,
        "saikou": 9.33,
        "heikin": 8.37,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 5.14
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 146.908,
        "saikou": 8.28,
        "heikin": 7.47,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 5.721
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 170.908,
        "saikou": 9.53,
        "heikin": 7.86,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 5.64
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 174.208,
        "saikou": 9.33,
        "heikin": 7.3,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.885
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 173.208,
        "saikou": 7.58,
        "heikin": 6.55,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 5.159
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 150.918,
        "saikou": 7.23,
        "heikin": 6.18,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.568
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 159.918,
        "saikou": 7.23,
        "heikin": 6.18,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.822
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 125.918,
        "saikou": 6.33,
        "heikin": 6.11,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.599
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 125.918,
        "saikou": 9.1,
        "heikin": 4.91,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.705
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 122.918,
        "saikou": 9.1,
        "heikin": 4.9,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.439
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 94.918,
        "saikou": 9,
        "heikin": 3.79,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.802
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 115.918,
        "saikou": 9.6,
        "heikin": 2.3,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.827
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 150.958,
        "saikou": 9.35,
        "heikin": 4.07,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.827
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 117.908,
        "saikou": 9.1,
        "heikin": 2.42,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.67
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 150.958,
        "saikou": 9.25,
        "heikin": 3.12,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 3.654
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 150.958,
        "saikou": 9.4,
        "heikin": 2.43,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 3.312
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 152.948,
        "saikou": 9.65,
        "heikin": 3.52,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 3.172
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 38,
        "ouatsu": 70.542,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 116.1,
        "heikinAvg30d": 5.022
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 38,
        "ouatsu": 72.472,
        "saikou": 10,
        "heikin": 8.43,
        "boshuAvg30d": 116.1,
        "heikinAvg30d": 5.18
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 38,
        "ouatsu": 90.42,
        "saikou": 10,
        "heikin": 9.47,
        "boshuAvg30d": 116.1,
        "heikinAvg30d": 5.369
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 38,
        "ouatsu": 92.38,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 116.1,
        "heikinAvg30d": 5.503
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 38,
        "ouatsu": 88.388,
        "saikou": 7.42,
        "heikin": 5.27,
        "boshuAvg30d": 116.1,
        "heikinAvg30d": 5.513
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 38,
        "ouatsu": 86.458,
        "saikou": 7.42,
        "heikin": 4.85,
        "boshuAvg30d": 116.1,
        "heikinAvg30d": 5.254
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 91.424,
        "saikou": 7.4,
        "heikin": 4.77,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.168
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 104.944,
        "saikou": 7.35,
        "heikin": 4.2,
        "boshuAvg30d": 121.4,
        "heikinAvg30d": 4.812
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 108.942,
        "saikou": 6.94,
        "heikin": 4.57,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 4.702
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 107.012,
        "saikou": 6.75,
        "heikin": 3.36,
        "boshuAvg30d": 121.4,
        "heikinAvg30d": 4.785
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 108.942,
        "saikou": 4.78,
        "heikin": 3,
        "boshuAvg30d": 121.4,
        "heikinAvg30d": 4.854
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 107.292,
        "saikou": 4.5,
        "heikin": 2.83,
        "boshuAvg30d": 121.4,
        "heikinAvg30d": 4.761
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 108.942,
        "saikou": 4.5,
        "heikin": 2.99,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 4.809
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 107.442,
        "saikou": 5.11,
        "heikin": 3.49,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 4.671
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 108.942,
        "saikou": 9.7,
        "heikin": 5.39,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 5.27
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 107.442,
        "saikou": 5.92,
        "heikin": 4.07,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 5.334
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 108.942,
        "saikou": 5.92,
        "heikin": 3.53,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 5.169
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 107.442,
        "saikou": 5.92,
        "heikin": 4.24,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 5.281
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 134.938,
        "saikou": 7.56,
        "heikin": 3.45,
        "boshuAvg30d": 72.0,
        "heikinAvg30d": 4.868
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 133.588,
        "saikou": 6.16,
        "heikin": 3.89,
        "boshuAvg30d": 72.6,
        "heikinAvg30d": 4.901
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 127.637,
        "saikou": 6.21,
        "heikin": 4.34,
        "boshuAvg30d": 74.6,
        "heikinAvg30d": 4.973
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 131.019,
        "saikou": 9.89,
        "heikin": 5.62,
        "boshuAvg30d": 75.3,
        "heikinAvg30d": 5.232
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 134.974,
        "saikou": 10,
        "heikin": 6.34,
        "boshuAvg30d": 75.6,
        "heikinAvg30d": 5.203
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 133.324,
        "saikou": 10,
        "heikin": 6.36,
        "boshuAvg30d": 75.6,
        "heikinAvg30d": 5.277
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 147,
        "ouatsu": 134.974,
        "saikou": 10,
        "heikin": 6.38,
        "boshuAvg30d": 71.0,
        "heikinAvg30d": 5.583
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 147,
        "ouatsu": 132.978,
        "saikou": 10,
        "heikin": 5.98,
        "boshuAvg30d": 71.0,
        "heikinAvg30d": 5.466
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 147,
        "ouatsu": 134.938,
        "saikou": 9.7,
        "heikin": 4.81,
        "boshuAvg30d": 71.0,
        "heikinAvg30d": 4.618
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 146,
        "ouatsu": 134.938,
        "saikou": 6.52,
        "heikin": 3.76,
        "boshuAvg30d": 70.0,
        "heikinAvg30d": 4.984
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 146,
        "ouatsu": 98.938,
        "saikou": 5.5,
        "heikin": 2.77,
        "boshuAvg30d": 70.0,
        "heikinAvg30d": 4.89
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 145,
        "ouatsu": 98.938,
        "saikou": 3.49,
        "heikin": 2.59,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 4.484
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 74.938,
        "saikou": 3.5,
        "heikin": 2.87,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 4.759
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 72.942,
        "saikou": 4.44,
        "heikin": 3.08,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 4.555
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 72.978,
        "saikou": 4.77,
        "heikin": 3.48,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 4.462
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 71.442,
        "saikou": 3.83,
        "heikin": 3.12,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 4.308
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 70.977,
        "saikou": 4.15,
        "heikin": 2.99,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 4.621
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 67.827,
        "saikou": 4.64,
        "heikin": 3.27,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.98
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 96.942,
        "saikou": 3.99,
        "heikin": 2.75,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 3.517
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 95.442,
        "saikou": 3.99,
        "heikin": 2.58,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 3.203
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 96.942,
        "saikou": 3.99,
        "heikin": 2.27,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 3.156
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 96.942,
        "saikou": 3.41,
        "heikin": 1.88,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 3.412
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 80.387,
        "saikou": 3.5,
        "heikin": 2.33,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 3.444
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 92.987,
        "saikou": 3.5,
        "heikin": 2.43,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 3.492
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 98.272,
        "saikou": 5.63,
        "heikin": 3.09,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 3.335
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 98.272,
        "saikou": 5.92,
        "heikin": 3.19,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 3.779
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 98.272,
        "saikou": 7.98,
        "heikin": 4.55,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 3.764
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 98.272,
        "saikou": 7.98,
        "heikin": 4.46,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 4.426
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 96.378,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 4.25
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 93.228,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 4.968
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 157,
        "ouatsu": 458.995,
        "saikou": 1.8,
        "heikin": 0.84,
        "boshuAvg30d": 238.7,
        "heikinAvg30d": 2.159
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 157,
        "ouatsu": 416.71,
        "saikou": 1.83,
        "heikin": 0.77,
        "boshuAvg30d": 238.7,
        "heikinAvg30d": 2.109
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 157,
        "ouatsu": 409.24,
        "saikou": 0.66,
        "heikin": 0.43,
        "boshuAvg30d": 238.7,
        "heikinAvg30d": 2.321
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 157,
        "ouatsu": 396.512,
        "saikou": 1.25,
        "heikin": 0.53,
        "boshuAvg30d": 238.7,
        "heikinAvg30d": 1.928
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 155,
        "ouatsu": 389.451,
        "saikou": 0.39,
        "heikin": 0.36,
        "boshuAvg30d": 237.1,
        "heikinAvg30d": 1.985
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 155,
        "ouatsu": 410.749,
        "saikou": 1.19,
        "heikin": 0.56,
        "boshuAvg30d": 236.7,
        "heikinAvg30d": 2.062
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 153,
        "ouatsu": 419.591,
        "saikou": 1.27,
        "heikin": 0.65,
        "boshuAvg30d": 234.7,
        "heikinAvg30d": 1.974
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 155,
        "ouatsu": 443.983,
        "saikou": 1.45,
        "heikin": 0.87,
        "boshuAvg30d": 236.7,
        "heikinAvg30d": 2.175
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 155,
        "ouatsu": 407.237,
        "saikou": 1.55,
        "heikin": 0.9,
        "boshuAvg30d": 236.7,
        "heikinAvg30d": 2.425
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 156,
        "ouatsu": 364.899,
        "saikou": 6.76,
        "heikin": 2.69,
        "boshuAvg30d": 237.7,
        "heikinAvg30d": 2.192
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 156,
        "ouatsu": 379.636,
        "saikou": 6.41,
        "heikin": 2.14,
        "boshuAvg30d": 237.7,
        "heikinAvg30d": 2.169
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 156,
        "ouatsu": 437.069,
        "saikou": 6.21,
        "heikin": 1.5,
        "boshuAvg30d": 237.7,
        "heikinAvg30d": 2.282
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 176,
        "ouatsu": 352.915,
        "saikou": 5.9,
        "heikin": 1.55,
        "boshuAvg30d": 257.3,
        "heikinAvg30d": 2.569
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 184,
        "ouatsu": 374.796,
        "saikou": 5.87,
        "heikin": 2.78,
        "boshuAvg30d": 265.3,
        "heikinAvg30d": 2.709
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 188,
        "ouatsu": 310.916,
        "saikou": 4.58,
        "heikin": 2.84,
        "boshuAvg30d": 269.7,
        "heikinAvg30d": 2.721
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 193,
        "ouatsu": 337.133,
        "saikou": 5.97,
        "heikin": 2.81,
        "boshuAvg30d": 275.0,
        "heikinAvg30d": 2.625
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 193,
        "ouatsu": 561.374,
        "saikou": 2.74,
        "heikin": 1.86,
        "boshuAvg30d": 275.4,
        "heikinAvg30d": 2.196
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 193,
        "ouatsu": 404.382,
        "saikou": 6.7,
        "heikin": 3.14,
        "boshuAvg30d": 279.2,
        "heikinAvg30d": 2.639
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 183,
        "ouatsu": 438.812,
        "saikou": 3.22,
        "heikin": 1.52,
        "boshuAvg30d": 270.0,
        "heikinAvg30d": 2.152
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 183,
        "ouatsu": 590.118,
        "saikou": 3.4,
        "heikin": 1.34,
        "boshuAvg30d": 270.0,
        "heikinAvg30d": 2.17
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 183,
        "ouatsu": 562.016,
        "saikou": 4.06,
        "heikin": 1.49,
        "boshuAvg30d": 270.3,
        "heikinAvg30d": 2.116
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 183,
        "ouatsu": 563.031,
        "saikou": 4.99,
        "heikin": 1.8,
        "boshuAvg30d": 269.9,
        "heikinAvg30d": 2.074
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 550.457,
        "saikou": 5.11,
        "heikin": 1.97,
        "boshuAvg30d": 266.9,
        "heikinAvg30d": 2.165
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 539.057,
        "saikou": 5.2,
        "heikin": 2.28,
        "boshuAvg30d": 266.9,
        "heikinAvg30d": 2.383
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 178,
        "ouatsu": 506.244,
        "saikou": 5.2,
        "heikin": 1.57,
        "boshuAvg30d": 264.5,
        "heikinAvg30d": 1.871
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 178,
        "ouatsu": 510.088,
        "saikou": 5.2,
        "heikin": 1.4,
        "boshuAvg30d": 264.5,
        "heikinAvg30d": 1.902
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 178,
        "ouatsu": 531.286,
        "saikou": 4.39,
        "heikin": 1.78,
        "boshuAvg30d": 264.5,
        "heikinAvg30d": 2.126
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 555.371,
        "saikou": 3.82,
        "heikin": 1.61,
        "boshuAvg30d": 264.2,
        "heikinAvg30d": 1.997
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 177,
        "ouatsu": 560.94,
        "saikou": 6,
        "heikin": 2.52,
        "boshuAvg30d": 263.2,
        "heikinAvg30d": 2.168
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 177,
        "ouatsu": 513.796,
        "saikou": 4.39,
        "heikin": 1.96,
        "boshuAvg30d": 262.8,
        "heikinAvg30d": 2.191
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 175,
        "ouatsu": 510.525,
        "saikou": 3.7,
        "heikin": 1.08,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.291
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 175,
        "ouatsu": 501.624,
        "saikou": 5.68,
        "heikin": 1.54,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 2.234
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 175,
        "ouatsu": 582.803,
        "saikou": 4.76,
        "heikin": 1.66,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.245
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 175,
        "ouatsu": 518.606,
        "saikou": 3.11,
        "heikin": 1.65,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.225
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 175,
        "ouatsu": 529.501,
        "saikou": 6.14,
        "heikin": 1.89,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.136
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 175,
        "ouatsu": 498.092,
        "saikou": 5.1,
        "heikin": 1.41,
        "boshuAvg30d": 254.7,
        "heikinAvg30d": 2.279
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 177,
        "ouatsu": 533.275,
        "saikou": 2.22,
        "heikin": 0.89,
        "boshuAvg30d": 256.1,
        "heikinAvg30d": 2.313
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 177,
        "ouatsu": 614.348,
        "saikou": 4.59,
        "heikin": 1.07,
        "boshuAvg30d": 256.1,
        "heikinAvg30d": 2.221
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 177,
        "ouatsu": 636.77,
        "saikou": 4.52,
        "heikin": 0.99,
        "boshuAvg30d": 256.1,
        "heikinAvg30d": 2.226
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 177,
        "ouatsu": 640.996,
        "saikou": 4.32,
        "heikin": 0.86,
        "boshuAvg30d": 256.4,
        "heikinAvg30d": 2.002
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 176,
        "ouatsu": 597.151,
        "saikou": 4.88,
        "heikin": 1.14,
        "boshuAvg30d": 255.0,
        "heikinAvg30d": 1.977
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 176,
        "ouatsu": 565.413,
        "saikou": 5.05,
        "heikin": 1.43,
        "boshuAvg30d": 255.0,
        "heikinAvg30d": 2.191
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 175,
        "ouatsu": 596.644,
        "saikou": 4.67,
        "heikin": 0.78,
        "boshuAvg30d": 254.4,
        "heikinAvg30d": 2.033
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 175,
        "ouatsu": 538.513,
        "saikou": 2.33,
        "heikin": 1.02,
        "boshuAvg30d": 254.4,
        "heikinAvg30d": 1.981
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 175,
        "ouatsu": 431.197,
        "saikou": 4.02,
        "heikin": 1.13,
        "boshuAvg30d": 257.4,
        "heikinAvg30d": 2.263
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 173,
        "ouatsu": 448.993,
        "saikou": 1.85,
        "heikin": 0.86,
        "boshuAvg30d": 252.4,
        "heikinAvg30d": 2.165
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 171,
        "ouatsu": 502.102,
        "saikou": 6.79,
        "heikin": 1.38,
        "boshuAvg30d": 250.7,
        "heikinAvg30d": 2.598
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 466.077,
        "saikou": 0.83,
        "heikin": 0.57,
        "boshuAvg30d": 249.1,
        "heikinAvg30d": 2.466
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 122,
        "ouatsu": 378.677,
        "saikou": 5.87,
        "heikin": 1.86,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.83
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 122,
        "ouatsu": 412.467,
        "saikou": 3.02,
        "heikin": 1.72,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.911
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 122,
        "ouatsu": 378.225,
        "saikou": 5.93,
        "heikin": 1.74,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 1.939
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 376.262,
        "saikou": 5.87,
        "heikin": 1.65,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.994
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 121,
        "ouatsu": 351.806,
        "saikou": 8.67,
        "heikin": 1.84,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 2.01
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 402.321,
        "saikou": 2.41,
        "heikin": 1.64,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.992
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 405.007,
        "saikou": 5.95,
        "heikin": 1.56,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.915
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 362.901,
        "saikou": 8.67,
        "heikin": 1.73,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.863
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 119,
        "ouatsu": 422.895,
        "saikou": 6.87,
        "heikin": 1.51,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.776
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 119,
        "ouatsu": 404.983,
        "saikou": 3.31,
        "heikin": 1.38,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.825
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 119,
        "ouatsu": 393.246,
        "saikou": 6.6,
        "heikin": 1.03,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.718
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 119,
        "ouatsu": 428.256,
        "saikou": 0.97,
        "heikin": 0.83,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.693
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 433.546,
        "saikou": 1.47,
        "heikin": 1.11,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 1.893
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 429.572,
        "saikou": 2.57,
        "heikin": 2.04,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 1.813
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 137,
        "ouatsu": 429.572,
        "saikou": 2.64,
        "heikin": 2.11,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 2.135
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 139,
        "ouatsu": 428.072,
        "saikou": 7.13,
        "heikin": 2.16,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 2.184
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 139,
        "ouatsu": 406.162,
        "saikou": 6.74,
        "heikin": 1.86,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 2.211
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 139,
        "ouatsu": 428.162,
        "saikou": 7.13,
        "heikin": 1.47,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 2.274
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 315.639,
        "saikou": 7.13,
        "heikin": 1.76,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.417
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 405.236,
        "saikou": 7.8,
        "heikin": 3.17,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.416
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 144,
        "ouatsu": 379.342,
        "saikou": 9.47,
        "heikin": 3.23,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.45
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 144,
        "ouatsu": 327.953,
        "saikou": 9.57,
        "heikin": 3.77,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 2.472
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 143,
        "ouatsu": 307.782,
        "saikou": 9.57,
        "heikin": 3.67,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 2.582
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 142,
        "ouatsu": 292.737,
        "saikou": 9.57,
        "heikin": 4.83,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 2.774
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 138,
        "ouatsu": 245.752,
        "saikou": 9.57,
        "heikin": 5.34,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 3.007
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 138,
        "ouatsu": 242.782,
        "saikou": 9.57,
        "heikin": 5.31,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 2.989
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 138,
        "ouatsu": 211.297,
        "saikou": 9.47,
        "heikin": 3.53,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 2.42
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 138,
        "ouatsu": 263.81,
        "saikou": 9.47,
        "heikin": 3.13,
        "boshuAvg30d": 162.5,
        "heikinAvg30d": 2.582
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 138,
        "ouatsu": 291.432,
        "saikou": 9.47,
        "heikin": 3.36,
        "boshuAvg30d": 162.5,
        "heikinAvg30d": 2.643
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 138,
        "ouatsu": 294.927,
        "saikou": 9.47,
        "heikin": 3.54,
        "boshuAvg30d": 162.5,
        "heikinAvg30d": 2.551
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 136,
        "ouatsu": 296.925,
        "saikou": 9.47,
        "heikin": 4.29,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 2.767
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 136,
        "ouatsu": 332.387,
        "saikou": 9.47,
        "heikin": 5.06,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 2.827
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 136,
        "ouatsu": 293.045,
        "saikou": 9.95,
        "heikin": 5.52,
        "boshuAvg30d": 160.5,
        "heikinAvg30d": 2.752
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 135,
        "ouatsu": 186.092,
        "saikou": 9.99,
        "heikin": 4.77,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 3.046
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 135,
        "ouatsu": 268.406,
        "saikou": 8.96,
        "heikin": 5.79,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 2.894
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 134,
        "ouatsu": 269.279,
        "saikou": 8.47,
        "heikin": 5.37,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 2.635
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 132,
        "ouatsu": 238.369,
        "saikou": 7.13,
        "heikin": 3.06,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.459
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 132,
        "ouatsu": 238.369,
        "saikou": 6.87,
        "heikin": 3.01,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.474
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 132,
        "ouatsu": 279.807,
        "saikou": 7.13,
        "heikin": 2.3,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.109
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 132,
        "ouatsu": 256.786,
        "saikou": 6.27,
        "heikin": 2.11,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.135
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 132,
        "ouatsu": 252.046,
        "saikou": 7.13,
        "heikin": 2.17,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 1.908
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 132,
        "ouatsu": 240.22,
        "saikou": 6.27,
        "heikin": 2.11,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 1.819
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 134,
        "ouatsu": 249.973,
        "saikou": 6.76,
        "heikin": 2.13,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 1.764
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 134,
        "ouatsu": 300.614,
        "saikou": 8.25,
        "heikin": 3.59,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 1.876
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 134,
        "ouatsu": 291.486,
        "saikou": 8.38,
        "heikin": 3.89,
        "boshuAvg30d": 158.9,
        "heikinAvg30d": 1.892
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 240.787,
        "saikou": 7.67,
        "heikin": 2.29,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 2.02
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 244.675,
        "saikou": 7.67,
        "heikin": 2.14,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 1.908
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 237.515,
        "saikou": 7.67,
        "heikin": 1.74,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 1.964
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 7.724,
        "saikou": 9.74,
        "heikin": 9.02,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 3.16
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.96
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 11.028,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.345
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 23.442,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.771
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.898,
        "saikou": 8.3,
        "heikin": 8.3,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 2.648
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 7.98,
        "heikin": 7.98,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.632
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 3.691
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 3.64
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 3.508
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 3.885
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 4.051
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 3.694
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 4.297
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 3.95
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 4.67
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.123
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.411
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.34
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.18
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.41
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.783
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.967
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.569
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.321
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 3.634
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.194
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.582
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.701
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.799
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.625
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.92,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 6.287
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.87,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 6.904
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.54,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 6.069
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 9.17,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 5.97
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 9.17,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 6.02
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 9.17,
        "boshuAvg30d": 68.9,
        "heikinAvg30d": 5.931
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.106
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 7.95,
        "heikin": 7.95,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.817
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.95,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 4.974
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 6.95,
        "heikin": 6.95,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.25
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.19,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 4.43
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 8.92,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 4.439
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.95,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 4.573
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.86,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 4.245
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.4,
        "heikin": 9.17,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 4.376
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.93,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 4.164
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.75,
        "heikin": 9.25,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 4.171
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.45,
        "heikin": 9.1,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 3.011
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 90.508,
        "saikou": 2.99,
        "heikin": 2.41,
        "boshuAvg30d": 194.9,
        "heikinAvg30d": 2.629
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 101.622,
        "saikou": 3.82,
        "heikin": 2.65,
        "boshuAvg30d": 194.9,
        "heikinAvg30d": 2.034
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 99.662,
        "saikou": 5.68,
        "heikin": 2.95,
        "boshuAvg30d": 194.9,
        "heikinAvg30d": 1.917
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 101.532,
        "saikou": 3.44,
        "heikin": 2.63,
        "boshuAvg30d": 194.9,
        "heikinAvg30d": 1.974
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 101.532,
        "saikou": 8.98,
        "heikin": 4.41,
        "boshuAvg30d": 193.9,
        "heikinAvg30d": 2.243
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 148.664,
        "saikou": 2.37,
        "heikin": 1.3,
        "boshuAvg30d": 193.9,
        "heikinAvg30d": 2.733
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 117.274,
        "saikou": 2.82,
        "heikin": 2.38,
        "boshuAvg30d": 193.9,
        "heikinAvg30d": 2.851
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 117.274,
        "saikou": 4.27,
        "heikin": 2.46,
        "boshuAvg30d": 193.9,
        "heikinAvg30d": 3.132
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 117.274,
        "saikou": 5.32,
        "heikin": 2.5,
        "boshuAvg30d": 194.9,
        "heikinAvg30d": 3.06
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 117.274,
        "saikou": 5.44,
        "heikin": 2.71,
        "boshuAvg30d": 194.9,
        "heikinAvg30d": 2.848
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 117.274,
        "saikou": 4.96,
        "heikin": 1.04,
        "boshuAvg30d": 194.9,
        "heikinAvg30d": 2.853
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 117.274,
        "saikou": 2.37,
        "heikin": 2.37,
        "boshuAvg30d": 194.9,
        "heikinAvg30d": 2.858
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 117.274,
        "saikou": 2.37,
        "heikin": 2.37,
        "boshuAvg30d": 205.3,
        "heikinAvg30d": 2.881
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 117.274,
        "saikou": 2.37,
        "heikin": 2.37,
        "boshuAvg30d": 209.3,
        "heikinAvg30d": 2.968
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 117.274,
        "saikou": 2.82,
        "heikin": 2.38,
        "boshuAvg30d": 214.3,
        "heikinAvg30d": 3.506
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 117.274,
        "saikou": 8.98,
        "heikin": 4.34,
        "boshuAvg30d": 216.6,
        "heikinAvg30d": 3.593
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 117.274,
        "saikou": 8.94,
        "heikin": 3.74,
        "boshuAvg30d": 216.6,
        "heikinAvg30d": 3.532
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 117.274,
        "saikou": 8.99,
        "heikin": 4.9,
        "boshuAvg30d": 216.6,
        "heikinAvg30d": 4.021
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 117.274,
        "saikou": 9.09,
        "heikin": 5.33,
        "boshuAvg30d": 226.5,
        "heikinAvg30d": 4.107
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 117.274,
        "saikou": 6.55,
        "heikin": 2.55,
        "boshuAvg30d": 226.5,
        "heikinAvg30d": 4.047
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 115.289,
        "saikou": 9.99,
        "heikin": 6.42,
        "boshuAvg30d": 226.5,
        "heikinAvg30d": 3.825
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 115.289,
        "saikou": 9.99,
        "heikin": 6.42,
        "boshuAvg30d": 225.5,
        "heikinAvg30d": 3.856
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 117.274,
        "saikou": 9.99,
        "heikin": 6.41,
        "boshuAvg30d": 223.9,
        "heikinAvg30d": 3.815
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 117.274,
        "saikou": 9.99,
        "heikin": 6.41,
        "boshuAvg30d": 224.5,
        "heikinAvg30d": 3.555
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 184.15,
        "saikou": 9.99,
        "heikin": 4.1,
        "boshuAvg30d": 222.9,
        "heikinAvg30d": 3.107
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 191.21,
        "saikou": 9.99,
        "heikin": 4.05,
        "boshuAvg30d": 222.9,
        "heikinAvg30d": 3.227
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 117.274,
        "saikou": 9.99,
        "heikin": 6.41,
        "boshuAvg30d": 222.9,
        "heikinAvg30d": 3.852
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 115.831,
        "saikou": 9.99,
        "heikin": 6.44,
        "boshuAvg30d": 222.9,
        "heikinAvg30d": 3.836
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 115.831,
        "saikou": 9.99,
        "heikin": 6.45,
        "boshuAvg30d": 222.9,
        "heikinAvg30d": 4.154
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 117.274,
        "saikou": 9.99,
        "heikin": 6.4,
        "boshuAvg30d": 222.9,
        "heikinAvg30d": 3.965
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 115.831,
        "saikou": 9.99,
        "heikin": 6.45,
        "boshuAvg30d": 222.5,
        "heikinAvg30d": 4.228
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 162.537,
        "saikou": 9.99,
        "heikin": 6.61,
        "boshuAvg30d": 222.5,
        "heikinAvg30d": 4.312
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 117.274,
        "saikou": 9.98,
        "heikin": 6.4,
        "boshuAvg30d": 222.5,
        "heikinAvg30d": 3.997
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 117.274,
        "saikou": 9.95,
        "heikin": 6.17,
        "boshuAvg30d": 222.5,
        "heikinAvg30d": 3.602
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 117.274,
        "saikou": 9.95,
        "heikin": 6,
        "boshuAvg30d": 218.2,
        "heikinAvg30d": 3.815
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 113.407,
        "saikou": 9.98,
        "heikin": 6.06,
        "boshuAvg30d": 217.2,
        "heikinAvg30d": 3.725
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 115.314,
        "saikou": 9.98,
        "heikin": 5.8,
        "boshuAvg30d": 215.2,
        "heikinAvg30d": 3.618
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 111.447,
        "saikou": 9,
        "heikin": 5.63,
        "boshuAvg30d": 215.2,
        "heikinAvg30d": 3.578
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 113.407,
        "saikou": 9.97,
        "heikin": 6.04,
        "boshuAvg30d": 215.2,
        "heikinAvg30d": 3.512
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 113.407,
        "saikou": 9.49,
        "heikin": 5.23,
        "boshuAvg30d": 214.2,
        "heikinAvg30d": 3.006
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 111.422,
        "saikou": 9.98,
        "heikin": 5.68,
        "boshuAvg30d": 213.2,
        "heikinAvg30d": 3.454
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 111.422,
        "saikou": 9.4,
        "heikin": 5.61,
        "boshuAvg30d": 213.8,
        "heikinAvg30d": 3.503
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 117.274,
        "saikou": 9.49,
        "heikin": 5.99,
        "boshuAvg30d": 213.8,
        "heikinAvg30d": 3.32
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 117.274,
        "saikou": 9.19,
        "heikin": 6.14,
        "boshuAvg30d": 213.8,
        "heikinAvg30d": 3.313
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 117.274,
        "saikou": 9,
        "heikin": 6.11,
        "boshuAvg30d": 213.8,
        "heikinAvg30d": 3.263
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 117.274,
        "saikou": 9.49,
        "heikin": 6.13,
        "boshuAvg30d": 212.2,
        "heikinAvg30d": 3.199
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 113.407,
        "saikou": 9.69,
        "heikin": 6.11,
        "boshuAvg30d": 210.8,
        "heikinAvg30d": 3.105
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 111.409,
        "saikou": 9.68,
        "heikin": 5.96,
        "boshuAvg30d": 208.8,
        "heikinAvg30d": 2.552
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 148.506,
        "saikou": 6.38,
        "heikin": 2.71,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 2.129
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 148.506,
        "saikou": 2.29,
        "heikin": 1.66,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 2.333
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 148.506,
        "saikou": 6.38,
        "heikin": 2.32,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 2.167
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 150.496,
        "saikou": 6.38,
        "heikin": 2.31,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 2.058
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 126.63,
        "saikou": 7.99,
        "heikin": 3,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 2.043
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 126.63,
        "saikou": 2.29,
        "heikin": 1.66,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 2.137
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 143.518,
        "saikou": 2.29,
        "heikin": 1.67,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 2.401
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 169.184,
        "saikou": 7.59,
        "heikin": 2.43,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 2.789
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 169.184,
        "saikou": 6.38,
        "heikin": 2.56,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 2.899
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 168.987,
        "saikou": 2.29,
        "heikin": 2.12,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 2.943
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 168.987,
        "saikou": 6.38,
        "heikin": 2.74,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 3.109
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 168.987,
        "saikou": 2.29,
        "heikin": 2.26,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 2.925
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 166.117,
        "saikou": 2.29,
        "heikin": 2.26,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 3.022
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 166.117,
        "saikou": 2.29,
        "heikin": 2.24,
        "boshuAvg30d": 132.6,
        "heikinAvg30d": 3.272
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 166.117,
        "saikou": 2.29,
        "heikin": 2.28,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 2.777
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 166.117,
        "saikou": 8.5,
        "heikin": 6.09,
        "boshuAvg30d": 133.9,
        "heikinAvg30d": 2.372
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 166.117,
        "saikou": 8.14,
        "heikin": 4.45,
        "boshuAvg30d": 133.9,
        "heikinAvg30d": 2.261
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 152.314,
        "saikou": 8.5,
        "heikin": 4.07,
        "boshuAvg30d": 133.9,
        "heikinAvg30d": 2.2
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 152.511,
        "saikou": 9,
        "heikin": 3.8,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 2.49
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 152.511,
        "saikou": 8.27,
        "heikin": 2.51,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 2.375
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 144.557,
        "saikou": 2.7,
        "heikin": 1.68,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 2.189
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 144.557,
        "saikou": 3.99,
        "heikin": 1.72,
        "boshuAvg30d": 139.9,
        "heikinAvg30d": 2.262
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 128.69,
        "saikou": 2.7,
        "heikin": 1.71,
        "boshuAvg30d": 139.9,
        "heikinAvg30d": 2.126
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 128.69,
        "saikou": 8,
        "heikin": 3,
        "boshuAvg30d": 139.9,
        "heikinAvg30d": 2.063
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 126.692,
        "saikou": 2.29,
        "heikin": 1.68,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 1.976
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 128.69,
        "saikou": 2.29,
        "heikin": 1.68,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 2.19
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 136.644,
        "saikou": 8.15,
        "heikin": 2.86,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 2.081
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 136.644,
        "saikou": 2.71,
        "heikin": 1.72,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 2.265
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 152.511,
        "saikou": 3.5,
        "heikin": 1.71,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 2.342
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 152.511,
        "saikou": 9.5,
        "heikin": 4.32,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 2.536
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 155.192,
        "saikou": 9.5,
        "heikin": 6.02,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 2.672
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 124.665,
        "saikou": 9.5,
        "heikin": 7.43,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 2.725
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 124.665,
        "saikou": 9.5,
        "heikin": 7.9,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 3.095
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 122.628,
        "saikou": 9.5,
        "heikin": 8.1,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 3.724
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 110.862,
        "saikou": 9.5,
        "heikin": 7.47,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 4.099
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 110.862,
        "saikou": 9.5,
        "heikin": 7.19,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 3.775
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 111.742,
        "saikou": 9.5,
        "heikin": 7.38,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 3.688
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 111.742,
        "saikou": 9.5,
        "heikin": 6.96,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 3.437
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 111.742,
        "saikou": 9.5,
        "heikin": 7.32,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 3.289
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 113.732,
        "saikou": 9.5,
        "heikin": 6.81,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 3.039
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 113.732,
        "saikou": 9.5,
        "heikin": 7.12,
        "boshuAvg30d": 134.9,
        "heikinAvg30d": 3.363
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 113.732,
        "saikou": 9.5,
        "heikin": 7.34,
        "boshuAvg30d": 134.9,
        "heikinAvg30d": 3.24
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 113.732,
        "saikou": 9.5,
        "heikin": 7.16,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 3.121
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 113.732,
        "saikou": 9.5,
        "heikin": 7.18,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 2.938
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 113.732,
        "saikou": 9.5,
        "heikin": 7.12,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 2.783
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 161.23,
        "saikou": 9.5,
        "heikin": 5.96,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 2.35
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 161.23,
        "saikou": 9.5,
        "heikin": 6.22,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 2.472
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 161.23,
        "saikou": 9.5,
        "heikin": 5.07,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.946
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 7.95,
        "heikin": 1.12,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.697
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 5.4,
        "heikin": 0.9,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.665
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 4.49,
        "heikin": 1.11,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.607
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 4.49,
        "heikin": 1.11,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.572
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 7.3,
        "heikin": 1.23,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.58
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.643
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.68,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.698
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 186.8,
        "saikou": 7.95,
        "heikin": 0.81,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.717
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.49,
        "heikin": 1.01,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.725
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.49,
        "heikin": 1.03,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.746
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.99,
        "heikin": 1.09,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.757
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.89,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.734
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 42.7,
        "heikinAvg30d": 0.867
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 155.343,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.815
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.812
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 154.343,
        "saikou": 7.55,
        "heikin": 0.82,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.839
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 154.343,
        "saikou": 6.5,
        "heikin": 0.79,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.839
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 120.343,
        "saikou": 8.99,
        "heikin": 1.26,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.751
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 8.99,
        "heikin": 1.44,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.902
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.912
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.944
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.944
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.962
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.88,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.979
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.977
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 4.99,
        "heikin": 1.07,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.952
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.915
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 4.99,
        "heikin": 0.93,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.939
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 168.343,
        "saikou": 7.99,
        "heikin": 1.28,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 0.912
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 9.49,
        "heikin": 1.44,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 1.017
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 9.49,
        "heikin": 1.5,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.983
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 10,
        "heikin": 1.51,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 1.134
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 10,
        "heikin": 1.51,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 1.117
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 155.343,
        "saikou": 8.99,
        "heikin": 1.41,
        "boshuAvg30d": 42.7,
        "heikinAvg30d": 1.151
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 8.99,
        "heikin": 1.36,
        "boshuAvg30d": 42.4,
        "heikinAvg30d": 1.17
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 156.343,
        "saikou": 7.99,
        "heikin": 1.37,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.175
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 155.343,
        "saikou": 7.99,
        "heikin": 1.29,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.145
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 6.99,
        "heikin": 1.19,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.154
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 6.99,
        "heikin": 1.21,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.18
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 156.343,
        "saikou": 7.55,
        "heikin": 1.28,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.168
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 7.95,
        "heikin": 1.32,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.155
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 6.8,
        "heikin": 1.3,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.861
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 6.8,
        "heikin": 1.27,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.794
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 6.6,
        "heikin": 1.24,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.759
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 10,
        "heikin": 1.52,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.696
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 10,
        "heikin": 1.55,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.75
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 6.35,
        "heikin": 1.14,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.729
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 76.273,
        "saikou": 2.35,
        "heikin": 1.48,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.589
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 124.195,
        "saikou": 9.88,
        "heikin": 5.04,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.252
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 118.247,
        "saikou": 9.69,
        "heikin": 4.8,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.952
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 118.139,
        "saikou": 10,
        "heikin": 4.89,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.875
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 76.723,
        "saikou": 1.8,
        "heikin": 1.22,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.824
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 76.662,
        "saikou": 1.8,
        "heikin": 1.21,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 5.026
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 167.255,
        "saikou": 4.19,
        "heikin": 1.53,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.301
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 168.343,
        "saikou": 4.42,
        "heikin": 1.62,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.632
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 142.17,
        "saikou": 1.47,
        "heikin": 0.75,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.751
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 172.168,
        "saikou": 1.47,
        "heikin": 0.64,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.068
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 138.952,
        "saikou": 1.47,
        "heikin": 0.73,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.219
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 265.865,
        "saikou": 1.47,
        "heikin": 0.55,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.195
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 265.943,
        "saikou": 1.47,
        "heikin": 0.57,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.077
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 257.887,
        "saikou": 1.47,
        "heikin": 0.6,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 6.201
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 266.886,
        "saikou": 1.47,
        "heikin": 0.58,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.285
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 95.882,
        "saikou": 1.47,
        "heikin": 1.13,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 4.691
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 125.88,
        "saikou": 5.94,
        "heikin": 2.61,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 4.531
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 125.879,
        "saikou": 5.7,
        "heikin": 2.58,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 4.245
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 196.858,
        "saikou": 10,
        "heikin": 5.76,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 4.018
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 184.856,
        "saikou": 9.71,
        "heikin": 5.69,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 3.704
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 167.651,
        "saikou": 9,
        "heikin": 5.9,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.51
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 155.787,
        "saikou": 9,
        "heikin": 6.08,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 3.501
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 148.504,
        "saikou": 8.83,
        "heikin": 6.02,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 3.204
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 152.426,
        "saikou": 8.95,
        "heikin": 6.1,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 3.038
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 144.655,
        "saikou": 9.99,
        "heikin": 4.96,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.176
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 148.503,
        "saikou": 9.5,
        "heikin": 5.2,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.25
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 141.065,
        "saikou": 9.99,
        "heikin": 6.37,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.693
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 169.095,
        "saikou": 9.22,
        "heikin": 6.12,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.273
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 198.885,
        "saikou": 10,
        "heikin": 5.89,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 4.487
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 101.885,
        "saikou": 3.88,
        "heikin": 2.43,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 5.103
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 101.976,
        "saikou": 3.88,
        "heikin": 2.31,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 5.459
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 88.116,
        "saikou": 3.88,
        "heikin": 2.44,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 5.774
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 88.018,
        "saikou": 3.88,
        "heikin": 2.49,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 6.313
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 173.048,
        "saikou": 9.8,
        "heikin": 1.56,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 6.893
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 116.017,
        "saikou": 7.1,
        "heikin": 2.21,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 6.989
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 156.618,
        "saikou": 6.5,
        "heikin": 1.42,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 7.157
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 201.643,
        "saikou": 8,
        "heikin": 1.24,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 7.227
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 221.661,
        "saikou": 7.22,
        "heikin": 1.31,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 7.055
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 178.418,
        "saikou": 8.5,
        "heikin": 1.74,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.701
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 228.907,
        "saikou": 7.5,
        "heikin": 1.41,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.522
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 202.627,
        "saikou": 4.48,
        "heikin": 0.9,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 6.505
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 215.629,
        "saikou": 9.8,
        "heikin": 0.75,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 6.45
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 163.089,
        "saikou": 4.48,
        "heikin": 0.86,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.423
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 119.126,
        "saikou": 1.5,
        "heikin": 0.93,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 5.943
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 119.091,
        "saikou": 1.95,
        "heikin": 0.96,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 5.904
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 155.889,
        "saikou": 9.62,
        "heikin": 2.92,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 5.991
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 153.891,
        "saikou": 8.59,
        "heikin": 2.74,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.847
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 153.891,
        "saikou": 5.99,
        "heikin": 2.11,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 5.164
      }
    ]
  }
};
