// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/26〜2026/11/24）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-25",
  "fetchedAt": "2026-11-24",
  "avgWindowLabel": "過去30日平均（2026/10/26〜2026/11/24）",
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
      "ouatsu": 1726.187,
      "saikou": 7.99,
      "heikin": 2.11,
      "boshuAvg30d": 1141.2,
      "heikinAvg30d": 2.432
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1079,
      "ouatsu": 1510.316,
      "saikou": 9.97,
      "heikin": 2.26,
      "boshuAvg30d": 1141.2,
      "heikinAvg30d": 2.384
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1079,
      "ouatsu": 1738.762,
      "saikou": 9.64,
      "heikin": 2.16,
      "boshuAvg30d": 1141.2,
      "heikinAvg30d": 2.351
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1078,
      "ouatsu": 1757.566,
      "saikou": 9,
      "heikin": 1.94,
      "boshuAvg30d": 1140.4,
      "heikinAvg30d": 2.258
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1072,
      "ouatsu": 1583.266,
      "saikou": 9.97,
      "heikin": 2.23,
      "boshuAvg30d": 1135.0,
      "heikinAvg30d": 2.307
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1072,
      "ouatsu": 1470.756,
      "saikou": 9.99,
      "heikin": 2.2,
      "boshuAvg30d": 1134.8,
      "heikinAvg30d": 2.419
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1069,
      "ouatsu": 1485.275,
      "saikou": 9.97,
      "heikin": 2.24,
      "boshuAvg30d": 1143.3,
      "heikinAvg30d": 2.509
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1073,
      "ouatsu": 1597.998,
      "saikou": 9.97,
      "heikin": 2.2,
      "boshuAvg30d": 1146.9,
      "heikinAvg30d": 2.719
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1073,
      "ouatsu": 1537.109,
      "saikou": 9.8,
      "heikin": 2.21,
      "boshuAvg30d": 1147.3,
      "heikinAvg30d": 2.779
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1075,
      "ouatsu": 1577.805,
      "saikou": 9.8,
      "heikin": 2.08,
      "boshuAvg30d": 1149.1,
      "heikinAvg30d": 2.754
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1075,
      "ouatsu": 1527.335,
      "saikou": 9.94,
      "heikin": 2.16,
      "boshuAvg30d": 1149.1,
      "heikinAvg30d": 2.848
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1075,
      "ouatsu": 1620.414,
      "saikou": 9.5,
      "heikin": 2.29,
      "boshuAvg30d": 1149.1,
      "heikinAvg30d": 2.882
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1134,
      "ouatsu": 1443.247,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1208.3,
      "heikinAvg30d": 3.035
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1159,
      "ouatsu": 1359.7,
      "saikou": 9.5,
      "heikin": 3.11,
      "boshuAvg30d": 1232.9,
      "heikinAvg30d": 3.143
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1178,
      "ouatsu": 1328.769,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1252.3,
      "heikinAvg30d": 3.141
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1193,
      "ouatsu": 1310.797,
      "saikou": 9.99,
      "heikin": 3.04,
      "boshuAvg30d": 1268.0,
      "heikinAvg30d": 2.934
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1193,
      "ouatsu": 1336.764,
      "saikou": 9.98,
      "heikin": 2.87,
      "boshuAvg30d": 1268.3,
      "heikinAvg30d": 2.794
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1193,
      "ouatsu": 1385.633,
      "saikou": 9.98,
      "heikin": 3.33,
      "boshuAvg30d": 1272.2,
      "heikinAvg30d": 2.839
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1122,
      "ouatsu": 1412.715,
      "saikou": 9.99,
      "heikin": 3.05,
      "boshuAvg30d": 1227.6,
      "heikinAvg30d": 2.777
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1127,
      "ouatsu": 1899.164,
      "saikou": 9.98,
      "heikin": 3.07,
      "boshuAvg30d": 1232.2,
      "heikinAvg30d": 2.762
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1131,
      "ouatsu": 2141.259,
      "saikou": 9.99,
      "heikin": 3.05,
      "boshuAvg30d": 1236.7,
      "heikinAvg30d": 2.769
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1135,
      "ouatsu": 2195.8,
      "saikou": 9.99,
      "heikin": 2.89,
      "boshuAvg30d": 1239.9,
      "heikinAvg30d": 2.77
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1129,
      "ouatsu": 2137.071,
      "saikou": 9.99,
      "heikin": 2.57,
      "boshuAvg30d": 1234.1,
      "heikinAvg30d": 2.705
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1129,
      "ouatsu": 2177.144,
      "saikou": 9.99,
      "heikin": 2.87,
      "boshuAvg30d": 1233.9,
      "heikinAvg30d": 2.814
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1110,
      "ouatsu": 2006.526,
      "saikou": 9.99,
      "heikin": 2.33,
      "boshuAvg30d": 1214.7,
      "heikinAvg30d": 2.647
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1110,
      "ouatsu": 2144.647,
      "saikou": 9.99,
      "heikin": 2.44,
      "boshuAvg30d": 1214.7,
      "heikinAvg30d": 2.723
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1110,
      "ouatsu": 2039.65,
      "saikou": 9.99,
      "heikin": 3.39,
      "boshuAvg30d": 1214.7,
      "heikinAvg30d": 2.787
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1106,
      "ouatsu": 1951.678,
      "saikou": 9.98,
      "heikin": 3.57,
      "boshuAvg30d": 1210.8,
      "heikinAvg30d": 2.855
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1105,
      "ouatsu": 1912.227,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1209.4,
      "heikinAvg30d": 2.929
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1099,
      "ouatsu": 1606.584,
      "saikou": 10,
      "heikin": 4,
      "boshuAvg30d": 1203.4,
      "heikinAvg30d": 3.053
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1170,
      "ouatsu": 1551.213,
      "saikou": 10,
      "heikin": 4.05,
      "boshuAvg30d": 1256.6,
      "heikinAvg30d": 3.205
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1170,
      "ouatsu": 1406.112,
      "saikou": 9.99,
      "heikin": 2.92,
      "boshuAvg30d": 1256.2,
      "heikinAvg30d": 3.363
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1170,
      "ouatsu": 1445.265,
      "saikou": 10,
      "heikin": 3.91,
      "boshuAvg30d": 1256.1,
      "heikinAvg30d": 3.627
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1168,
      "ouatsu": 1256.821,
      "saikou": 10,
      "heikin": 3.77,
      "boshuAvg30d": 1254.3,
      "heikinAvg30d": 3.735
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1166,
      "ouatsu": 1389.527,
      "saikou": 10,
      "heikin": 4.1,
      "boshuAvg30d": 1248.0,
      "heikinAvg30d": 3.724
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1161,
      "ouatsu": 1319.921,
      "saikou": 10,
      "heikin": 4.44,
      "boshuAvg30d": 1239.2,
      "heikinAvg30d": 3.649
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1157,
      "ouatsu": 1344.392,
      "saikou": 10,
      "heikin": 4.13,
      "boshuAvg30d": 1235.0,
      "heikinAvg30d": 3.482
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1157,
      "ouatsu": 1381.2,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1235.0,
      "heikinAvg30d": 3.413
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1157,
      "ouatsu": 1495.832,
      "saikou": 10,
      "heikin": 3.72,
      "boshuAvg30d": 1235.0,
      "heikinAvg30d": 3.32
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1155,
      "ouatsu": 1551.258,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1233.5,
      "heikinAvg30d": 3.259
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1148,
      "ouatsu": 1474.488,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1226.3,
      "heikinAvg30d": 3.158
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1148,
      "ouatsu": 1467.093,
      "saikou": 10,
      "heikin": 3.28,
      "boshuAvg30d": 1226.3,
      "heikinAvg30d": 3.144
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1059,
      "ouatsu": 1485.803,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1140.0,
      "heikinAvg30d": 3.038
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1062,
      "ouatsu": 1414.326,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1143.0,
      "heikinAvg30d": 2.982
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1061,
      "ouatsu": 1497.487,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1142.4,
      "heikinAvg30d": 3.004
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1054,
      "ouatsu": 1399.419,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1135.8,
      "heikinAvg30d": 2.967
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1046,
      "ouatsu": 1377.528,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1127.9,
      "heikinAvg30d": 2.885
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1038,
      "ouatsu": 1402.213,
      "saikou": 9.91,
      "heikin": 3.4,
      "boshuAvg30d": 1119.4,
      "heikinAvg30d": 2.645
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
        "ouatsu": 127.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 2.877
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 127.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 2.961
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 127.918,
        "saikou": 9,
        "heikin": 1.4,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 2.651
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 127.918,
        "saikou": 9,
        "heikin": 2.52,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 2.91
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 54.95,
        "saikou": 9,
        "heikin": 6.23,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.202
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 44.95,
        "saikou": 9.8,
        "heikin": 7.55,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 2.781
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 50.108,
        "saikou": 9.8,
        "heikin": 7.31,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.134
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 48.118,
        "saikou": 9.8,
        "heikin": 7.35,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.08
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 50.108,
        "saikou": 9.8,
        "heikin": 7.51,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.185
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 50.108,
        "saikou": 9.8,
        "heikin": 7.45,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.979
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 48.118,
        "saikou": 9.8,
        "heikin": 7.15,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.944
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 129.108,
        "saikou": 4.87,
        "heikin": 4.8,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.853
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 47.108,
        "saikou": 9.8,
        "heikin": 7.21,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.214
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 126.108,
        "saikou": 9,
        "heikin": 5.76,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.3
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 148.398,
        "saikou": 9.91,
        "heikin": 6.7,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.49
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 67.408,
        "saikou": 9.91,
        "heikin": 9.09,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.156
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 7.13,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.439
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 81.198,
        "saikou": 9.91,
        "heikin": 7.15,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 3.835
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 91.908,
        "saikou": 9.8,
        "heikin": 3.02,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 3.825
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 114.908,
        "saikou": 9.8,
        "heikin": 2.52,
        "boshuAvg30d": 52.6,
        "heikinAvg30d": 3.322
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 187.24,
        "saikou": 9.91,
        "heikin": 2.52,
        "boshuAvg30d": 52.6,
        "heikinAvg30d": 3.426
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 162.198,
        "saikou": 9.91,
        "heikin": 4.96,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 3.58
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 124.908,
        "saikou": 9.8,
        "heikin": 3.53,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 3.667
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 152.198,
        "saikou": 9.91,
        "heikin": 5.3,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 3.646
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 8.14,
        "heikin": 3.12,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 3.176
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 150.208,
        "saikou": 9.91,
        "heikin": 4.8,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 3.139
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 122.918,
        "saikou": 8.5,
        "heikin": 2.9,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 3.394
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 150.208,
        "saikou": 9.91,
        "heikin": 4.15,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 4.249
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 28.918,
        "saikou": 7,
        "heikin": 6.63,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 4.172
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 66.208,
        "saikou": 9.91,
        "heikin": 8.4,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.361
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 6.99,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.803
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 8.54,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 5.682
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 74.963,
        "saikou": 9.8,
        "heikin": 8.71,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 6.181
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 6.94,
        "saikou": 9.8,
        "heikin": 9.29,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 6.247
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 35.56,
        "saikou": 9.8,
        "heikin": 9.4,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 5.697
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 39.618,
        "saikou": 9.8,
        "heikin": 9.32,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 5.692
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 7.01,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 5.36
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 29.968,
        "saikou": 9.8,
        "heikin": 6.38,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 5.329
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 123.968,
        "saikou": 4.87,
        "heikin": 4.82,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 5.191
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 123.968,
        "saikou": 4.87,
        "heikin": 4.82,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 5.079
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 120.968,
        "saikou": 4.87,
        "heikin": 4.82,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 5.167
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 122.918,
        "saikou": 4.87,
        "heikin": 4.82,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.467
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 125.918,
        "saikou": 4.87,
        "heikin": 4.82,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.562
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 46.918,
        "saikou": 9.8,
        "heikin": 7.54,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 4.573
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 76.408,
        "saikou": 9.91,
        "heikin": 9.33,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.399
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 8.72,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 4.413
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 76.408,
        "saikou": 9.91,
        "heikin": 9.37,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.976
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 76.408,
        "saikou": 9.91,
        "heikin": 9.45,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 3.648
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 116.376,
        "saikou": 6.56,
        "heikin": 3.85,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 4.816
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 120.206,
        "saikou": 8.45,
        "heikin": 4.68,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.074
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 116.376,
        "saikou": 6.86,
        "heikin": 4.1,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.339
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 118.336,
        "saikou": 6.86,
        "heikin": 4.03,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.446
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 120.266,
        "saikou": 6.86,
        "heikin": 3.9,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.292
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 96.236,
        "saikou": 5.45,
        "heikin": 3.06,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 4.972
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 94.766,
        "saikou": 4.19,
        "heikin": 2.36,
        "boshuAvg30d": 121.8,
        "heikinAvg30d": 4.868
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 108.836,
        "saikou": 4.19,
        "heikin": 2.04,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 4.413
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 112.834,
        "saikou": 4.17,
        "heikin": 2.13,
        "boshuAvg30d": 121.8,
        "heikinAvg30d": 4.364
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 98.904,
        "saikou": 4.17,
        "heikin": 2.32,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 4.419
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 100.834,
        "saikou": 4.14,
        "heikin": 2.36,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 4.424
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 99.184,
        "saikou": 4.5,
        "heikin": 3.08,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 4.291
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 90.83,
        "saikou": 10,
        "heikin": 3.74,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 4.344
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 75.334,
        "saikou": 4.5,
        "heikin": 3.66,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 4.299
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 90.83,
        "saikou": 10,
        "heikin": 4.59,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 4.876
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 99.332,
        "saikou": 6.2,
        "heikin": 4.2,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 4.972
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 112.832,
        "saikou": 5.48,
        "heikin": 3.76,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 4.794
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 109.336,
        "saikou": 5.48,
        "heikin": 3.33,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 5.082
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 112.832,
        "saikou": 7.53,
        "heikin": 5.36,
        "boshuAvg30d": 78.4,
        "heikinAvg30d": 4.688
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 126.828,
        "saikou": 5.38,
        "heikin": 3.88,
        "boshuAvg30d": 79.2,
        "heikinAvg30d": 4.716
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 122.909,
        "saikou": 9.68,
        "heikin": 7.81,
        "boshuAvg30d": 81.2,
        "heikinAvg30d": 4.875
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 99.135,
        "saikou": 9.68,
        "heikin": 6.02,
        "boshuAvg30d": 82.0,
        "heikinAvg30d": 5.169
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 127.09,
        "saikou": 6.1,
        "heikin": 4,
        "boshuAvg30d": 82.2,
        "heikinAvg30d": 5.168
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 125.44,
        "saikou": 6.35,
        "heikin": 4.74,
        "boshuAvg30d": 82.2,
        "heikinAvg30d": 5.286
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 125.094,
        "saikou": 6.55,
        "heikin": 4.73,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 5.562
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 125.094,
        "saikou": 6.43,
        "heikin": 4.98,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 5.433
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 103.09,
        "saikou": 7.24,
        "heikin": 4.87,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 4.661
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 103.054,
        "saikou": 5.45,
        "heikin": 3.87,
        "boshuAvg30d": 76.4,
        "heikinAvg30d": 4.872
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 103.054,
        "saikou": 4.67,
        "heikin": 3.96,
        "boshuAvg30d": 76.4,
        "heikinAvg30d": 4.57
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 104.812,
        "saikou": 2.98,
        "heikin": 2.44,
        "boshuAvg30d": 75.2,
        "heikinAvg30d": 4.128
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 104.812,
        "saikou": 2.85,
        "heikin": 1.95,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 4.281
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 92.848,
        "saikou": 4.73,
        "heikin": 4.12,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 4.462
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 80.812,
        "saikou": 3.99,
        "heikin": 3.3,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 4.437
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 51.589,
        "saikou": 3.5,
        "heikin": 3.22,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 4.226
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 65.089,
        "saikou": 5.41,
        "heikin": 4.04,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 4.589
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 63.904,
        "saikou": 5.41,
        "heikin": 3.55,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 3.865
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 63.062,
        "saikou": 5.41,
        "heikin": 3.07,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 3.373
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 61.562,
        "saikou": 5.41,
        "heikin": 3.26,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 3.053
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 63.062,
        "saikou": 5.41,
        "heikin": 3.32,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 3.021
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 63.062,
        "saikou": 2.73,
        "heikin": 2.3,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 3.17
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 97.029,
        "saikou": 4.3,
        "heikin": 2.9,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 3.334
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 90.189,
        "saikou": 4.3,
        "heikin": 3.13,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 3.383
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 78.248,
        "saikou": 2.31,
        "heikin": 1.98,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 3.083
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 90.248,
        "saikou": 1.8,
        "heikin": 1.46,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 3.564
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 87.098,
        "saikou": 4.19,
        "heikin": 2.33,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 3.547
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 87.098,
        "saikou": 4.19,
        "heikin": 2.66,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 4.198
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 85.168,
        "saikou": 4.19,
        "heikin": 2.83,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 4.094
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 82.018,
        "saikou": 2.55,
        "heikin": 2.2,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 4.91
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 157,
        "ouatsu": 542.466,
        "saikou": 2.4,
        "heikin": 1.13,
        "boshuAvg30d": 224.2,
        "heikinAvg30d": 1.783
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 157,
        "ouatsu": 500.223,
        "saikou": 3.06,
        "heikin": 1.18,
        "boshuAvg30d": 224.2,
        "heikinAvg30d": 1.74
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 157,
        "ouatsu": 658.462,
        "saikou": 2.28,
        "heikin": 1.07,
        "boshuAvg30d": 224.2,
        "heikinAvg30d": 1.902
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 157,
        "ouatsu": 612.942,
        "saikou": 1.96,
        "heikin": 1.03,
        "boshuAvg30d": 224.2,
        "heikinAvg30d": 1.479
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 155,
        "ouatsu": 613.146,
        "saikou": 2.39,
        "heikin": 1.09,
        "boshuAvg30d": 222.4,
        "heikinAvg30d": 1.535
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 155,
        "ouatsu": 585.434,
        "saikou": 2.51,
        "heikin": 1.34,
        "boshuAvg30d": 222.2,
        "heikinAvg30d": 1.628
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 153,
        "ouatsu": 512.55,
        "saikou": 2.03,
        "heikin": 0.99,
        "boshuAvg30d": 220.2,
        "heikinAvg30d": 1.59
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 155,
        "ouatsu": 537.67,
        "saikou": 2.56,
        "heikin": 1.3,
        "boshuAvg30d": 222.2,
        "heikinAvg30d": 1.742
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 155,
        "ouatsu": 539.505,
        "saikou": 1.99,
        "heikin": 1.02,
        "boshuAvg30d": 222.2,
        "heikinAvg30d": 1.983
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 156,
        "ouatsu": 539.842,
        "saikou": 2.04,
        "heikin": 1.07,
        "boshuAvg30d": 223.2,
        "heikinAvg30d": 1.809
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 156,
        "ouatsu": 499.006,
        "saikou": 2.17,
        "heikin": 1.19,
        "boshuAvg30d": 223.2,
        "heikinAvg30d": 1.811
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 156,
        "ouatsu": 441.628,
        "saikou": 5.39,
        "heikin": 1.56,
        "boshuAvg30d": 223.2,
        "heikinAvg30d": 1.84
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 176,
        "ouatsu": 409.352,
        "saikou": 6.43,
        "heikin": 3.01,
        "boshuAvg30d": 243.0,
        "heikinAvg30d": 2.245
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 184,
        "ouatsu": 263.297,
        "saikou": 3.38,
        "heikin": 2.15,
        "boshuAvg30d": 251.0,
        "heikinAvg30d": 2.489
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 188,
        "ouatsu": 295.622,
        "saikou": 7.47,
        "heikin": 3.16,
        "boshuAvg30d": 255.2,
        "heikinAvg30d": 2.59
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 193,
        "ouatsu": 314.13,
        "saikou": 5.09,
        "heikin": 2.38,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.422
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 193,
        "ouatsu": 566.091,
        "saikou": 2.46,
        "heikin": 1.57,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 1.954
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 193,
        "ouatsu": 505.464,
        "saikou": 2.8,
        "heikin": 1.82,
        "boshuAvg30d": 264.8,
        "heikinAvg30d": 2.476
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 183,
        "ouatsu": 473.469,
        "saikou": 1.98,
        "heikin": 1.49,
        "boshuAvg30d": 255.2,
        "heikinAvg30d": 1.932
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 183,
        "ouatsu": 533.196,
        "saikou": 2.22,
        "heikin": 1.38,
        "boshuAvg30d": 255.2,
        "heikinAvg30d": 1.962
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 183,
        "ouatsu": 675.879,
        "saikou": 2.06,
        "heikin": 0.74,
        "boshuAvg30d": 255.5,
        "heikinAvg30d": 1.904
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 183,
        "ouatsu": 672.883,
        "saikou": 2.61,
        "heikin": 1.45,
        "boshuAvg30d": 255.3,
        "heikinAvg30d": 1.831
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 607.029,
        "saikou": 2.44,
        "heikin": 1.4,
        "boshuAvg30d": 252.1,
        "heikinAvg30d": 1.901
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 657.729,
        "saikou": 2.02,
        "heikin": 1.14,
        "boshuAvg30d": 252.1,
        "heikinAvg30d": 2.146
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 178,
        "ouatsu": 565.129,
        "saikou": 2,
        "heikin": 0.54,
        "boshuAvg30d": 249.9,
        "heikinAvg30d": 1.599
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 178,
        "ouatsu": 600.817,
        "saikou": 0.39,
        "heikin": 0.38,
        "boshuAvg30d": 249.9,
        "heikinAvg30d": 1.674
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 178,
        "ouatsu": 631.805,
        "saikou": 2.91,
        "heikin": 2.1,
        "boshuAvg30d": 249.9,
        "heikinAvg30d": 1.968
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 686.041,
        "saikou": 2.58,
        "heikin": 1.83,
        "boshuAvg30d": 249.6,
        "heikinAvg30d": 1.762
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 177,
        "ouatsu": 738.146,
        "saikou": 1.82,
        "heikin": 1.05,
        "boshuAvg30d": 248.6,
        "heikinAvg30d": 1.974
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 177,
        "ouatsu": 646.46,
        "saikou": 1.88,
        "heikin": 1.27,
        "boshuAvg30d": 248.4,
        "heikinAvg30d": 2.068
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 175,
        "ouatsu": 643.289,
        "saikou": 2.88,
        "heikin": 1.07,
        "boshuAvg30d": 246.7,
        "heikinAvg30d": 2.149
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 175,
        "ouatsu": 567.708,
        "saikou": 1.87,
        "heikin": 0.99,
        "boshuAvg30d": 246.4,
        "heikinAvg30d": 2.113
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 175,
        "ouatsu": 604.234,
        "saikou": 1.9,
        "heikin": 1.11,
        "boshuAvg30d": 246.1,
        "heikinAvg30d": 2.156
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 175,
        "ouatsu": 496.958,
        "saikou": 2.49,
        "heikin": 1.33,
        "boshuAvg30d": 246.1,
        "heikinAvg30d": 2.151
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 175,
        "ouatsu": 582.669,
        "saikou": 2.03,
        "heikin": 1.1,
        "boshuAvg30d": 246.1,
        "heikinAvg30d": 2.082
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 175,
        "ouatsu": 528.116,
        "saikou": 2.77,
        "heikin": 1.38,
        "boshuAvg30d": 242.2,
        "heikinAvg30d": 2.189
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 177,
        "ouatsu": 564.694,
        "saikou": 7.52,
        "heikin": 1.37,
        "boshuAvg30d": 244.4,
        "heikinAvg30d": 2.086
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 177,
        "ouatsu": 590.774,
        "saikou": 7.68,
        "heikin": 1.19,
        "boshuAvg30d": 244.4,
        "heikinAvg30d": 1.979
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 177,
        "ouatsu": 572.996,
        "saikou": 7.64,
        "heikin": 1.15,
        "boshuAvg30d": 244.4,
        "heikinAvg30d": 2.001
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 177,
        "ouatsu": 620.916,
        "saikou": 1.68,
        "heikin": 0.63,
        "boshuAvg30d": 244.8,
        "heikinAvg30d": 1.874
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 176,
        "ouatsu": 517.456,
        "saikou": 7.2,
        "heikin": 1.02,
        "boshuAvg30d": 243.6,
        "heikinAvg30d": 1.93
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 176,
        "ouatsu": 521.275,
        "saikou": 7.21,
        "heikin": 1.23,
        "boshuAvg30d": 243.6,
        "heikinAvg30d": 2.056
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 175,
        "ouatsu": 495.062,
        "saikou": 1.89,
        "heikin": 0.82,
        "boshuAvg30d": 242.8,
        "heikinAvg30d": 1.873
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 175,
        "ouatsu": 483.627,
        "saikou": 7.01,
        "heikin": 1.18,
        "boshuAvg30d": 242.8,
        "heikinAvg30d": 1.835
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 175,
        "ouatsu": 482.156,
        "saikou": 2.69,
        "heikin": 0.96,
        "boshuAvg30d": 242.8,
        "heikinAvg30d": 2.06
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 173,
        "ouatsu": 439.947,
        "saikou": 2.94,
        "heikin": 1.19,
        "boshuAvg30d": 240.8,
        "heikinAvg30d": 2.05
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 171,
        "ouatsu": 435.123,
        "saikou": 1.46,
        "heikin": 0.78,
        "boshuAvg30d": 239.1,
        "heikinAvg30d": 2.322
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 560.457,
        "saikou": 2.04,
        "heikin": 1.03,
        "boshuAvg30d": 237.4,
        "heikinAvg30d": 2.129
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 122,
        "ouatsu": 464.555,
        "saikou": 3.57,
        "heikin": 2.9,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.911
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 122,
        "ouatsu": 264.915,
        "saikou": 7.69,
        "heikin": 2.02,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.952
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 122,
        "ouatsu": 259.004,
        "saikou": 9,
        "heikin": 1.98,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.974
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 309.62,
        "saikou": 7.74,
        "heikin": 1.97,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.039
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 121,
        "ouatsu": 248.882,
        "saikou": 5.86,
        "heikin": 1.96,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.052
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 201.192,
        "saikou": 5.05,
        "heikin": 1.69,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.019
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 260.843,
        "saikou": 6.92,
        "heikin": 1.95,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.94
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 242.49,
        "saikou": 5.23,
        "heikin": 1.7,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.927
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 119,
        "ouatsu": 201.828,
        "saikou": 5.18,
        "heikin": 1.73,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.821
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 119,
        "ouatsu": 234.182,
        "saikou": 5.1,
        "heikin": 1.9,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.845
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 119,
        "ouatsu": 234.107,
        "saikou": 6.44,
        "heikin": 1.93,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.796
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 119,
        "ouatsu": 254.802,
        "saikou": 6.44,
        "heikin": 2.35,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.787
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 276.675,
        "saikou": 6.68,
        "heikin": 3.13,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 1.988
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 274.681,
        "saikou": 9.16,
        "heikin": 4.7,
        "boshuAvg30d": 161.1,
        "heikinAvg30d": 1.921
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 137,
        "ouatsu": 168.981,
        "saikou": 8.14,
        "heikin": 2.81,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 2.181
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 139,
        "ouatsu": 168.566,
        "saikou": 8.13,
        "heikin": 2.82,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 2.248
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 139,
        "ouatsu": 169.656,
        "saikou": 7,
        "heikin": 2.78,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 2.227
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 139,
        "ouatsu": 237.787,
        "saikou": 8.07,
        "heikin": 4.15,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 2.347
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 251.691,
        "saikou": 7,
        "heikin": 3.38,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 2.309
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 425.954,
        "saikou": 8.58,
        "heikin": 2.94,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 2.67
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 144,
        "ouatsu": 383.939,
        "saikou": 7.58,
        "heikin": 2.8,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 2.748
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 144,
        "ouatsu": 430.294,
        "saikou": 2.4,
        "heikin": 1.88,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 2.793
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 143,
        "ouatsu": 438.201,
        "saikou": 1.95,
        "heikin": 1.65,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 2.773
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 142,
        "ouatsu": 436.211,
        "saikou": 2.11,
        "heikin": 1.65,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 3.081
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 138,
        "ouatsu": 441.808,
        "saikou": 2.34,
        "heikin": 1.58,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.413
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 138,
        "ouatsu": 451.702,
        "saikou": 2.33,
        "heikin": 1.75,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.375
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 138,
        "ouatsu": 346.029,
        "saikou": 9.47,
        "heikin": 2.03,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 2.633
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 138,
        "ouatsu": 304.68,
        "saikou": 9.47,
        "heikin": 1.96,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 2.647
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 138,
        "ouatsu": 417.015,
        "saikou": 9.47,
        "heikin": 2.79,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 2.645
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 138,
        "ouatsu": 148.221,
        "saikou": 9.47,
        "heikin": 3.95,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 2.633
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 136,
        "ouatsu": 133.221,
        "saikou": 9.47,
        "heikin": 3.45,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 2.894
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 136,
        "ouatsu": 174.665,
        "saikou": 9.47,
        "heikin": 2.98,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 2.862
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 136,
        "ouatsu": 131.231,
        "saikou": 9.37,
        "heikin": 3.57,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 2.845
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 135,
        "ouatsu": 132.723,
        "saikou": 9.37,
        "heikin": 4.7,
        "boshuAvg30d": 162.1,
        "heikinAvg30d": 3.301
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 135,
        "ouatsu": 130.724,
        "saikou": 9.42,
        "heikin": 4.82,
        "boshuAvg30d": 162.1,
        "heikinAvg30d": 3.176
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 134,
        "ouatsu": 129.228,
        "saikou": 9.37,
        "heikin": 3.85,
        "boshuAvg30d": 161.1,
        "heikinAvg30d": 2.833
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 132,
        "ouatsu": 130.71,
        "saikou": 9.37,
        "heikin": 4.59,
        "boshuAvg30d": 159.1,
        "heikinAvg30d": 2.678
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 132,
        "ouatsu": 132.708,
        "saikou": 9.37,
        "heikin": 4.42,
        "boshuAvg30d": 159.1,
        "heikinAvg30d": 2.655
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 132,
        "ouatsu": 149.168,
        "saikou": 9.37,
        "heikin": 2.43,
        "boshuAvg30d": 159.1,
        "heikinAvg30d": 2.237
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 132,
        "ouatsu": 162.321,
        "saikou": 9.37,
        "heikin": 2.76,
        "boshuAvg30d": 159.1,
        "heikinAvg30d": 2.285
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 132,
        "ouatsu": 150.318,
        "saikou": 9.37,
        "heikin": 2.65,
        "boshuAvg30d": 159.1,
        "heikinAvg30d": 2.084
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 132,
        "ouatsu": 142.466,
        "saikou": 9.37,
        "heikin": 2.63,
        "boshuAvg30d": 159.1,
        "heikinAvg30d": 1.999
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 134,
        "ouatsu": 150.22,
        "saikou": 9.37,
        "heikin": 2.62,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 1.875
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 134,
        "ouatsu": 156.215,
        "saikou": 9.37,
        "heikin": 2.52,
        "boshuAvg30d": 161.1,
        "heikinAvg30d": 2.172
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 134,
        "ouatsu": 172.162,
        "saikou": 9.37,
        "heikin": 2.54,
        "boshuAvg30d": 161.1,
        "heikinAvg30d": 2.124
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 172.162,
        "saikou": 9.37,
        "heikin": 2.66,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 2.107
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 170.272,
        "saikou": 9.37,
        "heikin": 2.68,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 2.019
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 149.228,
        "saikou": 9.37,
        "heikin": 2.34,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 1.998
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 7.35,
        "heikin": 7.35,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 4.046
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 20.9,
        "saikou": 8.95,
        "heikin": 8.8,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 3.547
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 20.9,
        "saikou": 8.41,
        "heikin": 8.05,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 2.903
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 21.782,
        "saikou": 8.25,
        "heikin": 8.25,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 3.396
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.36,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 3.502
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 3.251
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 13.828,
        "saikou": 9.1,
        "heikin": 8.82,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 4.834
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.36,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 4.313
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 7.95,
        "heikin": 7.87,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 3.578
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.05,
        "heikin": 7.92,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 4.807
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 7.95,
        "heikin": 7.87,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 4.749
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 7.95,
        "heikin": 7.87,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 4.397
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 7.8,
        "heikin": 7.53,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 4.982
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 8.45,
        "heikin": 8.12,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 4.664
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.85,
        "heikin": 8.8,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 5.351
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.85,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 4.289
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 8.82,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 5.09
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.36,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 4.791
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 5.552
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 5.707
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 6.389
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 6.65
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 6.24
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 6.103
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 4.359
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 5.044
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 6.306
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 5.403
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 6.766
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 6.607
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.87,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 6.837
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 7.128
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 69.4,
        "heikinAvg30d": 6.854
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 9.05,
        "boshuAvg30d": 69.4,
        "heikinAvg30d": 6.239
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.8,
        "heikin": 9.49,
        "boshuAvg30d": 69.4,
        "heikinAvg30d": 6.634
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.19,
        "heikin": 9.07,
        "boshuAvg30d": 69.4,
        "heikinAvg30d": 6.446
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.68,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 5.686
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.45,
        "heikin": 8.68,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 6.476
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.3,
        "heikin": 9.12,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 5.601
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.85,
        "heikin": 9.64,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 6.109
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.9,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 5.056
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 5.454
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.68,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 5.226
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.86,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 5.199
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.4,
        "heikin": 9.17,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 5.62
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 5.292
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.35,
        "heikin": 9.05,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 5.379
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.45,
        "heikin": 9.1,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 3.917
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 88.928,
        "saikou": 7.8,
        "heikin": 3.69,
        "boshuAvg30d": 215.9,
        "heikinAvg30d": 3.032
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 94.108,
        "saikou": 9.97,
        "heikin": 3.69,
        "boshuAvg30d": 215.9,
        "heikinAvg30d": 2.255
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 92.148,
        "saikou": 9.64,
        "heikin": 3.75,
        "boshuAvg30d": 215.9,
        "heikinAvg30d": 2.108
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 97.954,
        "saikou": 3.9,
        "heikin": 2.73,
        "boshuAvg30d": 215.9,
        "heikinAvg30d": 2.151
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 99.952,
        "saikou": 9.97,
        "heikin": 4.76,
        "boshuAvg30d": 214.9,
        "heikinAvg30d": 2.602
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 99.952,
        "saikou": 9.98,
        "heikin": 4.76,
        "boshuAvg30d": 214.9,
        "heikinAvg30d": 3.036
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 111.827,
        "saikou": 9.97,
        "heikin": 5.7,
        "boshuAvg30d": 214.9,
        "heikinAvg30d": 3.266
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 111.827,
        "saikou": 9.97,
        "heikin": 5.91,
        "boshuAvg30d": 214.9,
        "heikinAvg30d": 3.529
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 109.887,
        "saikou": 8.99,
        "heikin": 5.67,
        "boshuAvg30d": 215.9,
        "heikinAvg30d": 3.269
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 108.037,
        "saikou": 8.99,
        "heikin": 4.71,
        "boshuAvg30d": 215.9,
        "heikinAvg30d": 3.078
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 60.612,
        "saikou": 9.94,
        "heikin": 7.1,
        "boshuAvg30d": 215.9,
        "heikinAvg30d": 3.013
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 108.037,
        "saikou": 8.99,
        "heikin": 4.91,
        "boshuAvg30d": 215.9,
        "heikinAvg30d": 3.095
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 108.037,
        "saikou": 9.44,
        "heikin": 5.05,
        "boshuAvg30d": 226.1,
        "heikinAvg30d": 3.112
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 108.037,
        "saikou": 9.44,
        "heikin": 5.06,
        "boshuAvg30d": 230.1,
        "heikinAvg30d": 3.223
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 115.694,
        "saikou": 9.88,
        "heikin": 6.2,
        "boshuAvg30d": 235.1,
        "heikinAvg30d": 3.948
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 115.694,
        "saikou": 9.73,
        "heikin": 6.13,
        "boshuAvg30d": 237.3,
        "heikinAvg30d": 4.139
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 115.694,
        "saikou": 9.98,
        "heikin": 6.09,
        "boshuAvg30d": 237.3,
        "heikinAvg30d": 4.046
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 115.694,
        "saikou": 9.98,
        "heikin": 6.2,
        "boshuAvg30d": 237.3,
        "heikinAvg30d": 4.438
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 115.694,
        "saikou": 9.98,
        "heikin": 6.2,
        "boshuAvg30d": 247.5,
        "heikinAvg30d": 4.7
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 204.182,
        "saikou": 9.98,
        "heikin": 5.24,
        "boshuAvg30d": 247.5,
        "heikinAvg30d": 4.596
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 296.323,
        "saikou": 3.25,
        "heikin": 3.1,
        "boshuAvg30d": 247.5,
        "heikinAvg30d": 4.459
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 296.323,
        "saikou": 3.34,
        "heikin": 3.17,
        "boshuAvg30d": 246.5,
        "heikinAvg30d": 4.406
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 298.308,
        "saikou": 3.3,
        "heikin": 3.19,
        "boshuAvg30d": 244.7,
        "heikinAvg30d": 4.29
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 298.308,
        "saikou": 3.4,
        "heikin": 3.23,
        "boshuAvg30d": 245.5,
        "heikinAvg30d": 4.091
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 248.885,
        "saikou": 3.62,
        "heikin": 3.62,
        "boshuAvg30d": 243.7,
        "heikinAvg30d": 3.623
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 298.308,
        "saikou": 3.52,
        "heikin": 3.52,
        "boshuAvg30d": 243.7,
        "heikinAvg30d": 3.685
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 297.308,
        "saikou": 9.98,
        "heikin": 4.05,
        "boshuAvg30d": 243.7,
        "heikinAvg30d": 4.421
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 184.308,
        "saikou": 9.98,
        "heikin": 5.49,
        "boshuAvg30d": 243.7,
        "heikinAvg30d": 4.39
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 115.694,
        "saikou": 9.99,
        "heikin": 6.57,
        "boshuAvg30d": 243.7,
        "heikinAvg30d": 4.847
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 115.694,
        "saikou": 9.99,
        "heikin": 6.57,
        "boshuAvg30d": 243.7,
        "heikinAvg30d": 4.724
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 115.694,
        "saikou": 9.98,
        "heikin": 6.48,
        "boshuAvg30d": 243.5,
        "heikinAvg30d": 4.68
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 115.694,
        "saikou": 9.98,
        "heikin": 6.36,
        "boshuAvg30d": 243.5,
        "heikinAvg30d": 4.827
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 115.694,
        "saikou": 9.98,
        "heikin": 6.57,
        "boshuAvg30d": 243.5,
        "heikinAvg30d": 4.601
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 115.694,
        "saikou": 9.95,
        "heikin": 5.98,
        "boshuAvg30d": 243.5,
        "heikinAvg30d": 4.076
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 115.694,
        "saikou": 9.95,
        "heikin": 6.14,
        "boshuAvg30d": 239.2,
        "heikinAvg30d": 4.38
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 115.694,
        "saikou": 9.98,
        "heikin": 6.32,
        "boshuAvg30d": 238.2,
        "heikinAvg30d": 4.287
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 113.734,
        "saikou": 9.98,
        "heikin": 5.89,
        "boshuAvg30d": 236.2,
        "heikinAvg30d": 4.161
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 113.734,
        "saikou": 9.98,
        "heikin": 5.96,
        "boshuAvg30d": 236.2,
        "heikinAvg30d": 4.163
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 115.694,
        "saikou": 9.97,
        "heikin": 6.29,
        "boshuAvg30d": 236.2,
        "heikinAvg30d": 4.104
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 115.694,
        "saikou": 9.49,
        "heikin": 5.49,
        "boshuAvg30d": 235.2,
        "heikinAvg30d": 3.53
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 113.709,
        "saikou": 9.98,
        "heikin": 5.76,
        "boshuAvg30d": 234.2,
        "heikinAvg30d": 3.978
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 113.709,
        "saikou": 9.98,
        "heikin": 5.78,
        "boshuAvg30d": 235.0,
        "heikinAvg30d": 4.046
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 115.694,
        "saikou": 9.49,
        "heikin": 5.95,
        "boshuAvg30d": 235.0,
        "heikinAvg30d": 3.865
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 115.694,
        "saikou": 9.19,
        "heikin": 5.98,
        "boshuAvg30d": 235.0,
        "heikinAvg30d": 3.853
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 115.694,
        "saikou": 9,
        "heikin": 5.95,
        "boshuAvg30d": 235.0,
        "heikinAvg30d": 3.838
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 115.694,
        "saikou": 9.49,
        "heikin": 6.25,
        "boshuAvg30d": 233.2,
        "heikinAvg30d": 3.87
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 115.694,
        "saikou": 9.69,
        "heikin": 5.84,
        "boshuAvg30d": 232.0,
        "heikinAvg30d": 3.696
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 115.694,
        "saikou": 9.68,
        "heikin": 6.37,
        "boshuAvg30d": 230.0,
        "heikinAvg30d": 3.221
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 86.144,
        "saikou": 5.97,
        "heikin": 2.34,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.293
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 86.144,
        "saikou": 9.5,
        "heikin": 4.31,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.321
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 86.144,
        "saikou": 9.5,
        "heikin": 4.3,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.23
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 84.176,
        "saikou": 2.85,
        "heikin": 1.92,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.015
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 64.268,
        "saikou": 7.59,
        "heikin": 2.51,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.025
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 64.268,
        "saikou": 7.21,
        "heikin": 2.55,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.201
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 80.963,
        "saikou": 7.22,
        "heikin": 2.32,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.515
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 103.829,
        "saikou": 9.5,
        "heikin": 3.94,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 2.829
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 103.829,
        "saikou": 9.5,
        "heikin": 3.91,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 2.818
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 90.062,
        "saikou": 9.5,
        "heikin": 4.23,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 2.779
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 90.062,
        "saikou": 9.5,
        "heikin": 4.82,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 3.068
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 90.062,
        "saikou": 9.5,
        "heikin": 4.08,
        "boshuAvg30d": 123.4,
        "heikinAvg30d": 2.943
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 54.497,
        "saikou": 9.5,
        "heikin": 6.35,
        "boshuAvg30d": 125.4,
        "heikinAvg30d": 2.994
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 54.497,
        "saikou": 9.5,
        "heikin": 6.45,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 3.33
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 54.497,
        "saikou": 9.5,
        "heikin": 7.06,
        "boshuAvg30d": 126.6,
        "heikinAvg30d": 3.09
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 88.192,
        "saikou": 9.5,
        "heikin": 6.03,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 2.79
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 88.192,
        "saikou": 9.5,
        "heikin": 6.83,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 2.757
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 86.204,
        "saikou": 9.5,
        "heikin": 4.78,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 2.369
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 100.007,
        "saikou": 9.5,
        "heikin": 5.14,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 2.603
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 106.984,
        "saikou": 6.38,
        "heikin": 2.44,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 2.528
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 100.007,
        "saikou": 6.38,
        "heikin": 3.36,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.465
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 100.007,
        "saikou": 6.38,
        "heikin": 3.46,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 2.361
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 111.89,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 2.258
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 100.505,
        "saikou": 2.29,
        "heikin": 2.12,
        "boshuAvg30d": 133.6,
        "heikinAvg30d": 2.252
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 118.649,
        "saikou": 2.7,
        "heikin": 1.73,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 2.122
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 118.649,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 2.248
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 100.007,
        "saikou": 6.38,
        "heikin": 3.48,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 2.294
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 100.007,
        "saikou": 6.38,
        "heikin": 3.48,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 2.383
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 86.204,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 2.377
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 100.007,
        "saikou": 9.5,
        "heikin": 5.08,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 2.532
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 100.007,
        "saikou": 9.5,
        "heikin": 6.57,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 2.763
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 100.007,
        "saikou": 9.5,
        "heikin": 6.78,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 3.061
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 101.995,
        "saikou": 9.99,
        "heikin": 7.05,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 3.488
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 54.497,
        "saikou": 9.99,
        "heikin": 7.94,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 4.063
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 54.497,
        "saikou": 9.99,
        "heikin": 8.03,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 4.525
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 54.497,
        "saikou": 9.99,
        "heikin": 7.97,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 4.266
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 55.377,
        "saikou": 9.99,
        "heikin": 8.37,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 4.21
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 55.377,
        "saikou": 9.99,
        "heikin": 7.95,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 3.805
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 55.377,
        "saikou": 9.99,
        "heikin": 7.85,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 3.789
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 57.367,
        "saikou": 9.99,
        "heikin": 7.91,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 3.595
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 55.567,
        "saikou": 9.99,
        "heikin": 7.97,
        "boshuAvg30d": 128.6,
        "heikinAvg30d": 3.818
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 55.567,
        "saikou": 9.99,
        "heikin": 8.53,
        "boshuAvg30d": 128.6,
        "heikinAvg30d": 3.864
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 57.367,
        "saikou": 9.99,
        "heikin": 7.62,
        "boshuAvg30d": 126.6,
        "heikinAvg30d": 3.493
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 57.367,
        "saikou": 9.99,
        "heikin": 7.7,
        "boshuAvg30d": 126.6,
        "heikinAvg30d": 3.308
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 91.062,
        "saikou": 9.5,
        "heikin": 5.85,
        "boshuAvg30d": 126.6,
        "heikinAvg30d": 3.099
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 76.803,
        "saikou": 9.5,
        "heikin": 6.63,
        "boshuAvg30d": 126.6,
        "heikinAvg30d": 2.813
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 91.062,
        "saikou": 9.5,
        "heikin": 6.2,
        "boshuAvg30d": 125.6,
        "heikinAvg30d": 2.894
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 91.062,
        "saikou": 9.5,
        "heikin": 6.03,
        "boshuAvg30d": 125.6,
        "heikinAvg30d": 2.28
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 7.99,
        "heikin": 1.1,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.764
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 7.99,
        "heikin": 1.37,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.725
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 7.99,
        "heikin": 1.39,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.691
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 4.99,
        "heikin": 1.14,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.657
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 7.3,
        "heikin": 1.25,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.672
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 215.343,
        "saikou": 7.15,
        "heikin": 1.24,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.704
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 7.95,
        "heikin": 1.25,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.755
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 179.8,
        "saikou": 7.95,
        "heikin": 0.99,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.756
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 191.343,
        "saikou": 6.05,
        "heikin": 1.13,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.765
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 192.343,
        "saikou": 7.95,
        "heikin": 1.23,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.795
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 227.343,
        "saikou": 5.99,
        "heikin": 1.3,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.816
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 228.343,
        "saikou": 7.99,
        "heikin": 1.44,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.793
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 187.8,
        "saikou": 6.6,
        "heikin": 0.99,
        "boshuAvg30d": 42.4,
        "heikinAvg30d": 0.927
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 187.8,
        "saikou": 7.55,
        "heikin": 1,
        "boshuAvg30d": 43.2,
        "heikinAvg30d": 0.873
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 185.8,
        "saikou": 7.95,
        "heikin": 1.01,
        "boshuAvg30d": 44.2,
        "heikinAvg30d": 0.871
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 182.8,
        "saikou": 7.55,
        "heikin": 0.99,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.9
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 147.8,
        "saikou": 6.5,
        "heikin": 0.82,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.909
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 145.8,
        "saikou": 8.95,
        "heikin": 0.87,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.806
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 149.8,
        "saikou": 7.95,
        "heikin": 0.86,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 0.928
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 169.8,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.899
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 6.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.923
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.939
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.971
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.963
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 1.15,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.987
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 1.17,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.988
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.962
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.937
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 0.936
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 155.8,
        "saikou": 5.3,
        "heikin": 0.83,
        "boshuAvg30d": 46.4,
        "heikinAvg30d": 0.927
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 155.8,
        "saikou": 6.6,
        "heikin": 0.86,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 1.01
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 155.8,
        "saikou": 8.95,
        "heikin": 0.92,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.951
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 154.8,
        "saikou": 7.95,
        "heikin": 0.89,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 1.097
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 155.8,
        "saikou": 7.95,
        "heikin": 0.89,
        "boshuAvg30d": 43.2,
        "heikinAvg30d": 1.093
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 154.8,
        "saikou": 6.6,
        "heikin": 0.85,
        "boshuAvg30d": 42.4,
        "heikinAvg30d": 1.089
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 152.8,
        "saikou": 4.95,
        "heikin": 0.8,
        "boshuAvg30d": 42.2,
        "heikinAvg30d": 1.099
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 153.8,
        "saikou": 7.95,
        "heikin": 0.88,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.09
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.8,
        "saikou": 4.95,
        "heikin": 0.81,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.048
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 9.29,
        "heikin": 1.44,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.087
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 9.29,
        "heikin": 1.4,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.118
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 9.29,
        "heikin": 1.46,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.109
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 7.99,
        "heikin": 1.38,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 1.098
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 6.99,
        "heikin": 1.34,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.957
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 199.343,
        "saikou": 6.99,
        "heikin": 1.34,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.883
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 200.343,
        "saikou": 6.99,
        "heikin": 1.33,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.849
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 199.343,
        "saikou": 7.99,
        "heikin": 1.38,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.809
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 7.99,
        "heikin": 1.43,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.86
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 7.99,
        "heikin": 1.38,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.8
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 80.559,
        "saikou": 3.99,
        "heikin": 1.3,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.935
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 80.559,
        "saikou": 3.99,
        "heikin": 1.22,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.646
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 162.467,
        "saikou": 4.78,
        "heikin": 1.67,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.444
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 169.495,
        "saikou": 4.78,
        "heikin": 1.89,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.304
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 162.561,
        "saikou": 5.04,
        "heikin": 1.46,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.024
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 159.483,
        "saikou": 5.27,
        "heikin": 1.34,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.331
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 162.047,
        "saikou": 1.06,
        "heikin": 0.6,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.577
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 261.53,
        "saikou": 1.39,
        "heikin": 0.56,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.859
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 223.877,
        "saikou": 1.39,
        "heikin": 0.6,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.897
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 260.429,
        "saikou": 1.39,
        "heikin": 0.57,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.209
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 263.355,
        "saikou": 1.39,
        "heikin": 0.57,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.411
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 265.352,
        "saikou": 1.39,
        "heikin": 0.58,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.527
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 265.05,
        "saikou": 1.39,
        "heikin": 0.58,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 5.466
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 266.048,
        "saikou": 1.39,
        "heikin": 0.59,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 5.621
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 265.049,
        "saikou": 5.45,
        "heikin": 0.64,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 4.696
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 270.777,
        "saikou": 4.62,
        "heikin": 0.6,
        "boshuAvg30d": 174.4,
        "heikinAvg30d": 4.114
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 101.693,
        "saikou": 1.39,
        "heikin": 1.08,
        "boshuAvg30d": 174.4,
        "heikinAvg30d": 4.092
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 100.252,
        "saikou": 1.39,
        "heikin": 1.02,
        "boshuAvg30d": 174.4,
        "heikinAvg30d": 3.863
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 113.416,
        "saikou": 2.05,
        "heikin": 1.57,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 3.754
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 213.414,
        "saikou": 9.4,
        "heikin": 6.87,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 3.362
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 228.264,
        "saikou": 8.53,
        "heikin": 7.52,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.372
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 275.262,
        "saikou": 7.91,
        "heikin": 6.23,
        "boshuAvg30d": 180.4,
        "heikinAvg30d": 3.242
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 269.947,
        "saikou": 7.71,
        "heikin": 5.4,
        "boshuAvg30d": 180.4,
        "heikinAvg30d": 2.824
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 247.055,
        "saikou": 7.25,
        "heikin": 5.88,
        "boshuAvg30d": 180.4,
        "heikinAvg30d": 2.611
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 234.345,
        "saikou": 5.23,
        "heikin": 4.64,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 2.692
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 240.171,
        "saikou": 5.25,
        "heikin": 4.57,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 2.732
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 278.795,
        "saikou": 9.09,
        "heikin": 6.95,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 3.239
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 263.682,
        "saikou": 9.94,
        "heikin": 8.41,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 3.786
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 263.498,
        "saikou": 10,
        "heikin": 8.52,
        "boshuAvg30d": 178.4,
        "heikinAvg30d": 4.115
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 265.484,
        "saikou": 10,
        "heikin": 7.81,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 4.741
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 263.584,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 4.903
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 161.584,
        "saikou": 4.98,
        "heikin": 1.8,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 5.47
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 177.638,
        "saikou": 10,
        "heikin": 6.52,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 6.075
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 238.722,
        "saikou": 10,
        "heikin": 6.47,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 6.435
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 246.596,
        "saikou": 10,
        "heikin": 6.67,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 6.51
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 232.166,
        "saikou": 10,
        "heikin": 8.21,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 6.623
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 227.199,
        "saikou": 10,
        "heikin": 7.04,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.685
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 238.379,
        "saikou": 10,
        "heikin": 3.82,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.502
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 244.326,
        "saikou": 10,
        "heikin": 6.02,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.387
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 236.689,
        "saikou": 10,
        "heikin": 5.7,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.337
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 248.2,
        "saikou": 10,
        "heikin": 3.81,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 6.0
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 249.728,
        "saikou": 10,
        "heikin": 3.85,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 6.079
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 258.053,
        "saikou": 10,
        "heikin": 3.51,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 5.934
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 261.016,
        "saikou": 10,
        "heikin": 3.46,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.458
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 268.666,
        "saikou": 10,
        "heikin": 3.32,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.378
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 270.566,
        "saikou": 10,
        "heikin": 3.39,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.316
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 198.56,
        "saikou": 10,
        "heikin": 4.28,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 5.133
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 125.105,
        "saikou": 6.88,
        "heikin": 3.13,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 4.579
      }
    ]
  }
};
