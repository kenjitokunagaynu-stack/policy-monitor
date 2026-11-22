// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/23〜2026/11/21）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-22",
  "fetchedAt": "2026-11-22",
  "avgWindowLabel": "過去30日平均（2026/10/23〜2026/11/21）",
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
      "ouatsu": 1525.091,
      "saikou": 9.95,
      "heikin": 2.19,
      "boshuAvg30d": 1136.8,
      "heikinAvg30d": 2.505
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1017,
      "ouatsu": 1746.602,
      "saikou": 10,
      "heikin": 1.86,
      "boshuAvg30d": 1136.8,
      "heikinAvg30d": 2.487
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1017,
      "ouatsu": 1787.468,
      "saikou": 10,
      "heikin": 1.79,
      "boshuAvg30d": 1136.8,
      "heikinAvg30d": 2.458
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1016,
      "ouatsu": 1787.134,
      "saikou": 10,
      "heikin": 1.73,
      "boshuAvg30d": 1136.1,
      "heikinAvg30d": 2.338
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1010,
      "ouatsu": 1670.108,
      "saikou": 9.8,
      "heikin": 1.64,
      "boshuAvg30d": 1131.0,
      "heikinAvg30d": 2.396
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1010,
      "ouatsu": 1649.669,
      "saikou": 10,
      "heikin": 2.41,
      "boshuAvg30d": 1130.7,
      "heikinAvg30d": 2.515
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1007,
      "ouatsu": 1606.285,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1139.2,
      "heikinAvg30d": 2.586
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1011,
      "ouatsu": 1674.302,
      "saikou": 9.8,
      "heikin": 2.18,
      "boshuAvg30d": 1142.6,
      "heikinAvg30d": 2.838
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1011,
      "ouatsu": 1738.467,
      "saikou": 9.91,
      "heikin": 2.18,
      "boshuAvg30d": 1143.2,
      "heikinAvg30d": 2.906
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1013,
      "ouatsu": 1663.863,
      "saikou": 10,
      "heikin": 1.86,
      "boshuAvg30d": 1144.9,
      "heikinAvg30d": 2.92
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1013,
      "ouatsu": 1668.662,
      "saikou": 10,
      "heikin": 2.17,
      "boshuAvg30d": 1144.9,
      "heikinAvg30d": 2.989
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1013,
      "ouatsu": 1645.476,
      "saikou": 10,
      "heikin": 2.38,
      "boshuAvg30d": 1144.9,
      "heikinAvg30d": 2.999
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1072,
      "ouatsu": 1502.256,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1204.2,
      "heikinAvg30d": 3.135
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1097,
      "ouatsu": 1486.129,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1228.6,
      "heikinAvg30d": 3.22
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1116,
      "ouatsu": 1567.487,
      "saikou": 10,
      "heikin": 3.41,
      "boshuAvg30d": 1248.2,
      "heikinAvg30d": 3.178
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1131,
      "ouatsu": 1530.433,
      "saikou": 9.25,
      "heikin": 2.83,
      "boshuAvg30d": 1264.1,
      "heikinAvg30d": 2.999
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1131,
      "ouatsu": 1770.868,
      "saikou": 8.8,
      "heikin": 2.76,
      "boshuAvg30d": 1264.5,
      "heikinAvg30d": 2.802
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1131,
      "ouatsu": 1581.809,
      "saikou": 10,
      "heikin": 2.35,
      "boshuAvg30d": 1268.3,
      "heikinAvg30d": 2.856
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1060,
      "ouatsu": 1511.063,
      "saikou": 9.99,
      "heikin": 2.22,
      "boshuAvg30d": 1224.0,
      "heikinAvg30d": 2.788
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1065,
      "ouatsu": 1434.995,
      "saikou": 9.99,
      "heikin": 2.52,
      "boshuAvg30d": 1228.4,
      "heikinAvg30d": 2.728
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1069,
      "ouatsu": 1467.409,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1233.0,
      "heikinAvg30d": 2.689
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1073,
      "ouatsu": 1472.897,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1235.8,
      "heikinAvg30d": 2.73
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1067,
      "ouatsu": 1430.739,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1230.4,
      "heikinAvg30d": 2.74
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1067,
      "ouatsu": 1509.666,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1230.1,
      "heikinAvg30d": 2.803
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1048,
      "ouatsu": 1483.924,
      "saikou": 10,
      "heikin": 2.51,
      "boshuAvg30d": 1210.8,
      "heikinAvg30d": 2.658
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1048,
      "ouatsu": 1475.732,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1210.8,
      "heikinAvg30d": 2.696
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1048,
      "ouatsu": 1395.179,
      "saikou": 10,
      "heikin": 2.45,
      "boshuAvg30d": 1210.8,
      "heikinAvg30d": 2.792
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1044,
      "ouatsu": 1475.78,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1207.0,
      "heikinAvg30d": 2.864
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1043,
      "ouatsu": 1466.602,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1205.4,
      "heikinAvg30d": 2.944
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1037,
      "ouatsu": 1561.901,
      "saikou": 9.99,
      "heikin": 2.74,
      "boshuAvg30d": 1199.4,
      "heikinAvg30d": 3.065
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1108,
      "ouatsu": 1523.67,
      "saikou": 9.98,
      "heikin": 3.11,
      "boshuAvg30d": 1252.1,
      "heikinAvg30d": 3.217
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1108,
      "ouatsu": 1581.421,
      "saikou": 9.8,
      "heikin": 2.58,
      "boshuAvg30d": 1251.8,
      "heikinAvg30d": 3.359
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1108,
      "ouatsu": 1659.963,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1251.8,
      "heikinAvg30d": 3.59
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1106,
      "ouatsu": 1648.041,
      "saikou": 10,
      "heikin": 4.02,
      "boshuAvg30d": 1250.1,
      "heikinAvg30d": 3.721
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1104,
      "ouatsu": 1731.322,
      "saikou": 10,
      "heikin": 4.1,
      "boshuAvg30d": 1241.8,
      "heikinAvg30d": 3.674
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1099,
      "ouatsu": 1613.825,
      "saikou": 10,
      "heikin": 4.17,
      "boshuAvg30d": 1232.9,
      "heikinAvg30d": 3.633
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1095,
      "ouatsu": 1690.256,
      "saikou": 10,
      "heikin": 4.12,
      "boshuAvg30d": 1227.6,
      "heikinAvg30d": 3.475
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1095,
      "ouatsu": 1734.727,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1227.6,
      "heikinAvg30d": 3.436
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1095,
      "ouatsu": 1703.024,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1227.6,
      "heikinAvg30d": 3.309
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1093,
      "ouatsu": 1736.094,
      "saikou": 10,
      "heikin": 3.71,
      "boshuAvg30d": 1226.2,
      "heikinAvg30d": 3.232
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1086,
      "ouatsu": 1765.018,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1218.9,
      "heikinAvg30d": 3.167
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1086,
      "ouatsu": 1743.757,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1218.9,
      "heikinAvg30d": 3.127
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 997,
      "ouatsu": 1743.934,
      "saikou": 9.95,
      "heikin": 3.3,
      "boshuAvg30d": 1132.5,
      "heikinAvg30d": 3.037
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1000,
      "ouatsu": 1753.192,
      "saikou": 9.8,
      "heikin": 3.07,
      "boshuAvg30d": 1135.5,
      "heikinAvg30d": 2.955
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 999,
      "ouatsu": 1753.019,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1138.1,
      "heikinAvg30d": 2.992
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 992,
      "ouatsu": 1676.327,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1128.7,
      "heikinAvg30d": 2.918
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 984,
      "ouatsu": 1612.932,
      "saikou": 10,
      "heikin": 2.21,
      "boshuAvg30d": 1120.7,
      "heikinAvg30d": 2.893
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 976,
      "ouatsu": 1687.436,
      "saikou": 9.91,
      "heikin": 2.32,
      "boshuAvg30d": 1112.4,
      "heikinAvg30d": 2.661
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
        "ouatsu": 65.94,
        "saikou": 8.88,
        "heikin": 5.7,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 2.59
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 66.908,
        "saikou": 9.91,
        "heikin": 8.76,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 2.72
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 56.308,
        "saikou": 9.91,
        "heikin": 8.03,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 2.509
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 54.318,
        "saikou": 9.91,
        "heikin": 7.68,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 2.687
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 48.908,
        "saikou": 9.8,
        "heikin": 7.41,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 2.835
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 76.328,
        "saikou": 9.8,
        "heikin": 8.33,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 2.458
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 50.108,
        "saikou": 9.8,
        "heikin": 7.34,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 2.718
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 50.108,
        "saikou": 9.8,
        "heikin": 7.19,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.628
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 96.458,
        "saikou": 9.91,
        "heikin": 9,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.573
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 48.158,
        "saikou": 9.8,
        "heikin": 7.42,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.539
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 93.268,
        "saikou": 8.8,
        "heikin": 5.27,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.538
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 95.258,
        "saikou": 9.8,
        "heikin": 5.43,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.381
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 45.158,
        "saikou": 9.8,
        "heikin": 7.18,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 3.846
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 45.158,
        "saikou": 9.8,
        "heikin": 7.26,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 3.907
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 95.408,
        "saikou": 9.91,
        "heikin": 8.72,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.115
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 103.108,
        "saikou": 9,
        "heikin": 3.36,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.016
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 164.208,
        "saikou": 8.8,
        "heikin": 3.77,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.215
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 152.218,
        "saikou": 6.75,
        "heikin": 2.85,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.693
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 129.908,
        "saikou": 9.8,
        "heikin": 3.32,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.492
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 114.908,
        "saikou": 7.35,
        "heikin": 3.16,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 3.102
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 161.658,
        "saikou": 9.91,
        "heikin": 5.4,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 3.042
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 160.69,
        "saikou": 9.7,
        "heikin": 4.65,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 3.194
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 112.94,
        "saikou": 9.8,
        "heikin": 3.59,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 3.44
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 160.69,
        "saikou": 9.91,
        "heikin": 5.56,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 3.246
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 151.918,
        "saikou": 8.44,
        "heikin": 2.74,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.029
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 161.218,
        "saikou": 9.91,
        "heikin": 5.23,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 2.863
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 122.918,
        "saikou": 8.66,
        "heikin": 2.97,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.291
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 200.208,
        "saikou": 7.86,
        "heikin": 3.25,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 4.003
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 112.958,
        "saikou": 7.2,
        "heikin": 2.56,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 4.007
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 124.968,
        "saikou": 7.3,
        "heikin": 2.37,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.284
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 41.968,
        "saikou": 7.4,
        "heikin": 6.25,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.465
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 44.968,
        "saikou": 9.8,
        "heikin": 7.09,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 5.23
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 148.208,
        "saikou": 9.91,
        "heikin": 7.36,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 5.878
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 164.918,
        "saikou": 8.74,
        "heikin": 7.62,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 5.882
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 215.208,
        "saikou": 8.13,
        "heikin": 7.1,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 5.267
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 163.68,
        "saikou": 8.7,
        "heikin": 6.83,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 5.234
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 110.94,
        "saikou": 8.13,
        "heikin": 8.13,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.885
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 87.658,
        "saikou": 9.8,
        "heikin": 5.07,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.899
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 110.918,
        "saikou": 9.3,
        "heikin": 7.97,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.758
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 159.658,
        "saikou": 8.13,
        "heikin": 6.14,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.748
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 122.918,
        "saikou": 8.13,
        "heikin": 7.69,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.7
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 122.918,
        "saikou": 8.13,
        "heikin": 7.69,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.956
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 97.208,
        "saikou": 9.4,
        "heikin": 7.7,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.028
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 48.908,
        "saikou": 9.8,
        "heikin": 7.55,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.07
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 80.218,
        "saikou": 9.91,
        "heikin": 9.34,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 3.847
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 82.208,
        "saikou": 9.91,
        "heikin": 9.4,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.81
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.68,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 3.393
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 82.208,
        "saikou": 9.91,
        "heikin": 9.52,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.301
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 57.998,
        "saikou": 4.07,
        "heikin": 2.13,
        "boshuAvg30d": 110.7,
        "heikinAvg30d": 5.048
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 59.928,
        "saikou": 3.99,
        "heikin": 2.19,
        "boshuAvg30d": 110.7,
        "heikinAvg30d": 5.216
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 76.526,
        "saikou": 3.95,
        "heikin": 2.11,
        "boshuAvg30d": 110.7,
        "heikinAvg30d": 5.479
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 79.836,
        "saikou": 4.07,
        "heikin": 2.11,
        "boshuAvg30d": 110.7,
        "heikinAvg30d": 5.604
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 72.538,
        "saikou": 4.14,
        "heikin": 2.12,
        "boshuAvg30d": 110.7,
        "heikinAvg30d": 5.474
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 71.958,
        "saikou": 4.07,
        "heikin": 2.09,
        "boshuAvg30d": 110.7,
        "heikinAvg30d": 5.213
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 95.316,
        "saikou": 4.14,
        "heikin": 2.05,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 5.117
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 108.836,
        "saikou": 4.07,
        "heikin": 2.31,
        "boshuAvg30d": 121.9,
        "heikinAvg30d": 4.689
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 112.834,
        "saikou": 4.07,
        "heikin": 2.37,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 4.612
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 98.904,
        "saikou": 4.07,
        "heikin": 2.68,
        "boshuAvg30d": 121.9,
        "heikinAvg30d": 4.67
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 88.834,
        "saikou": 3.83,
        "heikin": 3.58,
        "boshuAvg30d": 121.9,
        "heikinAvg30d": 4.667
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 87.184,
        "saikou": 3.4,
        "heikin": 3.4,
        "boshuAvg30d": 121.9,
        "heikinAvg30d": 4.562
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 88.834,
        "saikou": 4.5,
        "heikin": 3.22,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 4.624
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 87.334,
        "saikou": 4.5,
        "heikin": 3.48,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 4.507
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 112.834,
        "saikou": 3.99,
        "heikin": 2.7,
        "boshuAvg30d": 136.2,
        "heikinAvg30d": 5.106
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 111.334,
        "saikou": 5.48,
        "heikin": 3.62,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 5.151
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 112.834,
        "saikou": 5.77,
        "heikin": 3.67,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 4.946
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 111.37,
        "saikou": 10,
        "heikin": 6.69,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 5.068
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 126.866,
        "saikou": 9.68,
        "heikin": 4.53,
        "boshuAvg30d": 78.0,
        "heikinAvg30d": 4.782
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 124.87,
        "saikou": 9.91,
        "heikin": 4.93,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 4.768
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 124.907,
        "saikou": 10,
        "heikin": 5.35,
        "boshuAvg30d": 80.7,
        "heikinAvg30d": 4.861
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 120.915,
        "saikou": 10,
        "heikin": 5.09,
        "boshuAvg30d": 81.4,
        "heikinAvg30d": 5.163
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 128.862,
        "saikou": 10,
        "heikin": 5.51,
        "boshuAvg30d": 81.7,
        "heikinAvg30d": 5.129
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 129.076,
        "saikou": 10,
        "heikin": 5.79,
        "boshuAvg30d": 81.7,
        "heikinAvg30d": 5.193
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 128.73,
        "saikou": 10,
        "heikin": 6.63,
        "boshuAvg30d": 77.0,
        "heikinAvg30d": 5.536
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 126.866,
        "saikou": 10,
        "heikin": 6.34,
        "boshuAvg30d": 77.0,
        "heikinAvg30d": 5.395
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 124.87,
        "saikou": 10,
        "heikin": 6.04,
        "boshuAvg30d": 77.0,
        "heikinAvg30d": 4.527
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 128.862,
        "saikou": 10,
        "heikin": 6.15,
        "boshuAvg30d": 76.0,
        "heikinAvg30d": 4.894
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 126.962,
        "saikou": 10,
        "heikin": 5.69,
        "boshuAvg30d": 76.0,
        "heikinAvg30d": 4.671
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 128.862,
        "saikou": 6.76,
        "heikin": 3.84,
        "boshuAvg30d": 74.7,
        "heikinAvg30d": 4.249
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 104.826,
        "saikou": 3.99,
        "heikin": 2.76,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 4.531
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 104.862,
        "saikou": 3.5,
        "heikin": 2.22,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 4.456
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 116.862,
        "saikou": 3.99,
        "heikin": 3.2,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 4.391
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 87.334,
        "saikou": 3.8,
        "heikin": 3.39,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 4.272
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 90.861,
        "saikou": 3.99,
        "heikin": 3.27,
        "boshuAvg30d": 136.2,
        "heikinAvg30d": 4.582
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 83.719,
        "saikou": 3.99,
        "heikin": 3.47,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 3.946
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 90.83,
        "saikou": 3.79,
        "heikin": 2.74,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.447
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 89.33,
        "saikou": 2.95,
        "heikin": 2.1,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.148
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 90.83,
        "saikou": 3.99,
        "heikin": 3.06,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 3.082
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 90.83,
        "saikou": 3.99,
        "heikin": 3.11,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 3.282
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 72.945,
        "saikou": 3.99,
        "heikin": 2.97,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 3.367
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 62.209,
        "saikou": 3.99,
        "heikin": 3.41,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 3.435
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 66.26,
        "saikou": 1.99,
        "heikin": 1.47,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 3.273
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 76.264,
        "saikou": 3.82,
        "heikin": 3.36,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 3.645
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 88.264,
        "saikou": 1.69,
        "heikin": 1.53,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 3.681
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 100.264,
        "saikou": 4.5,
        "heikin": 2.53,
        "boshuAvg30d": 46.1,
        "heikinAvg30d": 4.327
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 98.334,
        "saikou": 4.68,
        "heikin": 2.58,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 4.231
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 95.184,
        "saikou": 5.84,
        "heikin": 3.45,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 5.026
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 157,
        "ouatsu": 496.985,
        "saikou": 1.76,
        "heikin": 0.86,
        "boshuAvg30d": 231.9,
        "heikinAvg30d": 1.969
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 157,
        "ouatsu": 588.704,
        "saikou": 1.57,
        "heikin": 0.78,
        "boshuAvg30d": 231.9,
        "heikinAvg30d": 1.936
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 157,
        "ouatsu": 605.34,
        "saikou": 1.55,
        "heikin": 0.8,
        "boshuAvg30d": 231.9,
        "heikinAvg30d": 2.122
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 157,
        "ouatsu": 606.666,
        "saikou": 1.59,
        "heikin": 0.8,
        "boshuAvg30d": 231.9,
        "heikinAvg30d": 1.627
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 155,
        "ouatsu": 587.103,
        "saikou": 1.29,
        "heikin": 0.65,
        "boshuAvg30d": 230.2,
        "heikinAvg30d": 1.7
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 155,
        "ouatsu": 610.682,
        "saikou": 1.31,
        "heikin": 0.67,
        "boshuAvg30d": 229.9,
        "heikinAvg30d": 1.848
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 153,
        "ouatsu": 604.745,
        "saikou": 1.13,
        "heikin": 0.59,
        "boshuAvg30d": 227.9,
        "heikinAvg30d": 1.771
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 155,
        "ouatsu": 615.963,
        "saikou": 1.06,
        "heikin": 0.6,
        "boshuAvg30d": 229.9,
        "heikinAvg30d": 1.975
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 155,
        "ouatsu": 502.015,
        "saikou": 0.74,
        "heikin": 0.44,
        "boshuAvg30d": 229.9,
        "heikinAvg30d": 2.203
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 156,
        "ouatsu": 503.613,
        "saikou": 0.57,
        "heikin": 0.42,
        "boshuAvg30d": 230.9,
        "heikinAvg30d": 2.028
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 156,
        "ouatsu": 459.933,
        "saikou": 1.7,
        "heikin": 0.53,
        "boshuAvg30d": 230.9,
        "heikinAvg30d": 2.077
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 156,
        "ouatsu": 478.266,
        "saikou": 1.1,
        "heikin": 0.63,
        "boshuAvg30d": 230.9,
        "heikinAvg30d": 2.128
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 176,
        "ouatsu": 401.189,
        "saikou": 5.57,
        "heikin": 1.68,
        "boshuAvg30d": 250.6,
        "heikinAvg30d": 2.464
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 184,
        "ouatsu": 387.512,
        "saikou": 5.39,
        "heikin": 2.09,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.647
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 188,
        "ouatsu": 447.262,
        "saikou": 3.69,
        "heikin": 2.16,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 2.675
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 193,
        "ouatsu": 447.91,
        "saikou": 2.89,
        "heikin": 1.17,
        "boshuAvg30d": 268.3,
        "heikinAvg30d": 2.564
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 193,
        "ouatsu": 531.891,
        "saikou": 5.86,
        "heikin": 1.59,
        "boshuAvg30d": 268.6,
        "heikinAvg30d": 2.061
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 193,
        "ouatsu": 384.165,
        "saikou": 2.88,
        "heikin": 0.96,
        "boshuAvg30d": 272.5,
        "heikinAvg30d": 2.549
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 183,
        "ouatsu": 361.853,
        "saikou": 2.59,
        "heikin": 1.01,
        "boshuAvg30d": 263.1,
        "heikinAvg30d": 2.021
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 183,
        "ouatsu": 332.402,
        "saikou": 2.49,
        "heikin": 1.04,
        "boshuAvg30d": 263.1,
        "heikinAvg30d": 2.017
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 183,
        "ouatsu": 332.737,
        "saikou": 2.59,
        "heikin": 0.99,
        "boshuAvg30d": 263.4,
        "heikinAvg30d": 1.943
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 183,
        "ouatsu": 314.937,
        "saikou": 4.79,
        "heikin": 1.37,
        "boshuAvg30d": 263.1,
        "heikinAvg30d": 1.908
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 316.493,
        "saikou": 4.7,
        "heikin": 1.77,
        "boshuAvg30d": 260.0,
        "heikinAvg30d": 2.045
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 321.547,
        "saikou": 4.8,
        "heikin": 1.67,
        "boshuAvg30d": 260.0,
        "heikinAvg30d": 2.293
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 178,
        "ouatsu": 311.671,
        "saikou": 2.98,
        "heikin": 0.65,
        "boshuAvg30d": 257.7,
        "heikinAvg30d": 1.823
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 178,
        "ouatsu": 325.189,
        "saikou": 3.89,
        "heikin": 1.3,
        "boshuAvg30d": 257.7,
        "heikinAvg30d": 1.844
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 178,
        "ouatsu": 334.72,
        "saikou": 3.36,
        "heikin": 1.19,
        "boshuAvg30d": 257.7,
        "heikinAvg30d": 2.036
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 360.711,
        "saikou": 2.58,
        "heikin": 1.04,
        "boshuAvg30d": 257.4,
        "heikinAvg30d": 1.878
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 177,
        "ouatsu": 361.853,
        "saikou": 1.24,
        "heikin": 0.72,
        "boshuAvg30d": 256.4,
        "heikinAvg30d": 2.078
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 177,
        "ouatsu": 402.859,
        "saikou": 2.52,
        "heikin": 1.13,
        "boshuAvg30d": 256.1,
        "heikinAvg30d": 2.095
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 175,
        "ouatsu": 396.413,
        "saikou": 1.89,
        "heikin": 0.72,
        "boshuAvg30d": 254.4,
        "heikinAvg30d": 2.199
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 175,
        "ouatsu": 460.138,
        "saikou": 2.31,
        "heikin": 1.25,
        "boshuAvg30d": 254.1,
        "heikinAvg30d": 2.163
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 175,
        "ouatsu": 499.01,
        "saikou": 2.26,
        "heikin": 1.18,
        "boshuAvg30d": 253.8,
        "heikinAvg30d": 2.169
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 175,
        "ouatsu": 510.528,
        "saikou": 2.21,
        "heikin": 1.51,
        "boshuAvg30d": 253.8,
        "heikinAvg30d": 2.206
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 175,
        "ouatsu": 556.829,
        "saikou": 1.97,
        "heikin": 1.33,
        "boshuAvg30d": 251.8,
        "heikinAvg30d": 2.111
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 175,
        "ouatsu": 531.598,
        "saikou": 1.76,
        "heikin": 1.26,
        "boshuAvg30d": 247.9,
        "heikinAvg30d": 2.237
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 177,
        "ouatsu": 606.87,
        "saikou": 1.62,
        "heikin": 0.83,
        "boshuAvg30d": 249.2,
        "heikinAvg30d": 2.181
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 177,
        "ouatsu": 611.278,
        "saikou": 1.47,
        "heikin": 0.86,
        "boshuAvg30d": 249.2,
        "heikinAvg30d": 2.037
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 177,
        "ouatsu": 517.36,
        "saikou": 1.62,
        "heikin": 0.87,
        "boshuAvg30d": 249.2,
        "heikinAvg30d": 2.096
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 177,
        "ouatsu": 505.347,
        "saikou": 4.3,
        "heikin": 1.01,
        "boshuAvg30d": 249.6,
        "heikinAvg30d": 1.915
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 176,
        "ouatsu": 521.043,
        "saikou": 1.8,
        "heikin": 0.9,
        "boshuAvg30d": 248.3,
        "heikinAvg30d": 1.932
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 176,
        "ouatsu": 495.639,
        "saikou": 4.68,
        "heikin": 1.42,
        "boshuAvg30d": 248.3,
        "heikinAvg30d": 2.07
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 175,
        "ouatsu": 505.405,
        "saikou": 5.67,
        "heikin": 0.92,
        "boshuAvg30d": 247.6,
        "heikinAvg30d": 1.922
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 175,
        "ouatsu": 518.282,
        "saikou": 6.32,
        "heikin": 1.27,
        "boshuAvg30d": 247.6,
        "heikinAvg30d": 1.897
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 175,
        "ouatsu": 440.797,
        "saikou": 5.71,
        "heikin": 1.06,
        "boshuAvg30d": 250.6,
        "heikinAvg30d": 2.181
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 173,
        "ouatsu": 506.363,
        "saikou": 3.59,
        "heikin": 1.14,
        "boshuAvg30d": 245.6,
        "heikinAvg30d": 2.071
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 171,
        "ouatsu": 499.01,
        "saikou": 3.3,
        "heikin": 0.84,
        "boshuAvg30d": 243.9,
        "heikinAvg30d": 2.375
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 491.104,
        "saikou": 5.1,
        "heikin": 0.98,
        "boshuAvg30d": 242.2,
        "heikinAvg30d": 2.324
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 60,
        "ouatsu": 239.741,
        "saikou": 5.02,
        "heikin": 1.75,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 1.845
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 60,
        "ouatsu": 246.845,
        "saikou": 1.4,
        "heikin": 0.7,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 1.96
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 60,
        "ouatsu": 248.693,
        "saikou": 1.2,
        "heikin": 0.73,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 1.972
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 239.889,
        "saikou": 1,
        "heikin": 0.72,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 2.021
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 59,
        "ouatsu": 231.778,
        "saikou": 3.87,
        "heikin": 1.06,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.035
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 233.712,
        "saikou": 5.05,
        "heikin": 1.22,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.02
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 227.781,
        "saikou": 5,
        "heikin": 1.29,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.939
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 226.429,
        "saikou": 5.01,
        "heikin": 1.39,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.919
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 234.029,
        "saikou": 3.62,
        "heikin": 0.88,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.834
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 216.117,
        "saikou": 3.32,
        "heikin": 0.75,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.867
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 222.107,
        "saikou": 3.87,
        "heikin": 0.76,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.768
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 207.579,
        "saikou": 3.85,
        "heikin": 1.04,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.738
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 225.988,
        "saikou": 3.96,
        "heikin": 1.68,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 1.934
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 72,
        "ouatsu": 222.014,
        "saikou": 3.63,
        "heikin": 1.26,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 1.876
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 75,
        "ouatsu": 203.872,
        "saikou": 9.07,
        "heikin": 2.23,
        "boshuAvg30d": 162.0,
        "heikinAvg30d": 2.145
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 77,
        "ouatsu": 212.32,
        "saikou": 5.02,
        "heikin": 2.1,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 2.19
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 77,
        "ouatsu": 210.427,
        "saikou": 5.02,
        "heikin": 1.51,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 2.202
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 77,
        "ouatsu": 188.457,
        "saikou": 9.07,
        "heikin": 2.4,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 2.227
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 82,
        "ouatsu": 146.729,
        "saikou": 9.17,
        "heikin": 1.98,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 2.313
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 82,
        "ouatsu": 141.555,
        "saikou": 9.17,
        "heikin": 5.06,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 2.426
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 82,
        "ouatsu": 144.74,
        "saikou": 9.17,
        "heikin": 5.35,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 2.485
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 82,
        "ouatsu": 144.771,
        "saikou": 9.17,
        "heikin": 5.28,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 2.521
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 81,
        "ouatsu": 125.647,
        "saikou": 9.17,
        "heikin": 3.46,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 2.637
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 80,
        "ouatsu": 125.655,
        "saikou": 9.17,
        "heikin": 4.35,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 2.869
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 76,
        "ouatsu": 125.603,
        "saikou": 9.17,
        "heikin": 5.65,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 3.124
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 76,
        "ouatsu": 123.655,
        "saikou": 9.17,
        "heikin": 5.68,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 3.095
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 76,
        "ouatsu": 123.737,
        "saikou": 9.17,
        "heikin": 2.76,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 2.465
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 76,
        "ouatsu": 125.705,
        "saikou": 9.17,
        "heikin": 2.75,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 2.563
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 76,
        "ouatsu": 176.409,
        "saikou": 9.17,
        "heikin": 2.62,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 2.568
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 76,
        "ouatsu": 194.551,
        "saikou": 9.17,
        "heikin": 2.66,
        "boshuAvg30d": 162.7,
        "heikinAvg30d": 2.566
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 74,
        "ouatsu": 194.551,
        "saikou": 9.17,
        "heikin": 2.93,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 2.83
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 74,
        "ouatsu": 225.979,
        "saikou": 5.04,
        "heikin": 2.21,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 2.87
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 74,
        "ouatsu": 216.931,
        "saikou": 6.17,
        "heikin": 2.74,
        "boshuAvg30d": 160.7,
        "heikinAvg30d": 2.831
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 73,
        "ouatsu": 215.438,
        "saikou": 6.17,
        "heikin": 3.33,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 3.137
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 73,
        "ouatsu": 215.575,
        "saikou": 6.17,
        "heikin": 3.2,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 2.999
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 72,
        "ouatsu": 208.183,
        "saikou": 6.17,
        "heikin": 2.71,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 2.755
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 213.563,
        "saikou": 6.17,
        "heikin": 3.04,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.541
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 271.077,
        "saikou": 6.17,
        "heikin": 2.93,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.526
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 306.572,
        "saikou": 6.17,
        "heikin": 2.02,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.178
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 308.562,
        "saikou": 6.17,
        "heikin": 2.05,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.22
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 70,
        "ouatsu": 372.513,
        "saikou": 5.01,
        "heikin": 1.78,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 2.029
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 70,
        "ouatsu": 374.502,
        "saikou": 6.17,
        "heikin": 1.91,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 1.947
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 72,
        "ouatsu": 378.407,
        "saikou": 5.05,
        "heikin": 1.66,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 1.834
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 72,
        "ouatsu": 414.082,
        "saikou": 5.04,
        "heikin": 1.68,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 1.958
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 72,
        "ouatsu": 419.921,
        "saikou": 2,
        "heikin": 1.51,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 1.993
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 419.921,
        "saikou": 6.17,
        "heikin": 1.7,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 2.052
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 404.731,
        "saikou": 6.17,
        "heikin": 1.47,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 1.933
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 385.409,
        "saikou": 5.39,
        "heikin": 1.42,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 1.99
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 9.36,
        "heikin": 9.36,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 3.606
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 26.9,
        "saikou": 7.99,
        "heikin": 7.99,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 3.115
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 26.9,
        "saikou": 8.33,
        "heikin": 8.33,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.567
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 7.51,
        "heikin": 7.51,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.978
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 28.898,
        "saikou": 8.39,
        "heikin": 8.39,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 3.103
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 3.065
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.84,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 4.142
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 7.8,
        "heikin": 7.8,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 3.709
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 3.552
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 10.758,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 3.95
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 38.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 4.085
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 38.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 3.737
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 38.898,
        "saikou": 10,
        "heikin": 9.75,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 4.343
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 38.898,
        "saikou": 10,
        "heikin": 9.81,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.955
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 38.898,
        "saikou": 10,
        "heikin": 9.88,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 4.685
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 4.242
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 7.8,
        "heikin": 7.8,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 4.339
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.36,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 4.405
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 8.72,
        "saikou": 9.99,
        "heikin": 6.03,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 5.25
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 47.898,
        "saikou": 9.99,
        "heikin": 1.17,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 5.387
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 47.898,
        "saikou": 9.99,
        "heikin": 1.17,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 6.069
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 82.898,
        "saikou": 9.99,
        "heikin": 0.84,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 6.183
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 82.898,
        "saikou": 9.99,
        "heikin": 0.84,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 5.973
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 82.898,
        "saikou": 9.99,
        "heikin": 0.84,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 5.721
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 82.898,
        "saikou": 9.99,
        "heikin": 0.84,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 3.995
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 47.898,
        "saikou": 9.99,
        "heikin": 1.48,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 4.621
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 2.02,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 5.874
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 22.898,
        "saikou": 9.9,
        "heikin": 2.01,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 5.176
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 5.88,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 6.206
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 6.86,
        "boshuAvg30d": 67.8,
        "heikinAvg30d": 6.048
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 9.9,
        "heikin": 7.13,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 6.579
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 5.23,
        "heikin": 5.23,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 7.154
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 7.87,
        "heikin": 7.87,
        "boshuAvg30d": 69.1,
        "heikinAvg30d": 6.473
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 69.1,
        "heikinAvg30d": 6.056
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 69.1,
        "heikinAvg30d": 6.099
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 9.9,
        "boshuAvg30d": 69.1,
        "heikinAvg30d": 5.975
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 5.246
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 9.81,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 6.155
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 5.142
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 5.616
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 4.59
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 22.898,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 4.563
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 4.711
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 4.678
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 20.518,
        "saikou": 10,
        "heikin": 9.84,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 4.825
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.92,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 4.604
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 18.786,
        "saikou": 10,
        "heikin": 9.8,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 4.617
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 20.49,
        "saikou": 9.66,
        "heikin": 9.66,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.15
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 94.782,
        "saikou": 4.19,
        "heikin": 3.11,
        "boshuAvg30d": 203.3,
        "heikinAvg30d": 2.822
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 212.683,
        "saikou": 3.06,
        "heikin": 0.76,
        "boshuAvg30d": 203.3,
        "heikinAvg30d": 2.151
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 227.159,
        "saikou": 3.06,
        "heikin": 0.72,
        "boshuAvg30d": 203.3,
        "heikinAvg30d": 2.021
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 232.965,
        "saikou": 2.94,
        "heikin": 0.58,
        "boshuAvg30d": 203.3,
        "heikinAvg30d": 2.086
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 176.123,
        "saikou": 3.16,
        "heikin": 1.5,
        "boshuAvg30d": 202.3,
        "heikinAvg30d": 2.418
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 127.239,
        "saikou": 4.01,
        "heikin": 2.34,
        "boshuAvg30d": 202.3,
        "heikinAvg30d": 2.898
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 119.124,
        "saikou": 7.8,
        "heikin": 4.87,
        "boshuAvg30d": 202.3,
        "heikinAvg30d": 3.011
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 119.124,
        "saikou": 7.8,
        "heikin": 3.78,
        "boshuAvg30d": 202.3,
        "heikinAvg30d": 3.311
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 187.998,
        "saikou": 3.16,
        "heikin": 1.5,
        "boshuAvg30d": 203.3,
        "heikinAvg30d": 3.208
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 187.998,
        "saikou": 3.06,
        "heikin": 1.11,
        "boshuAvg30d": 203.3,
        "heikinAvg30d": 2.993
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 164.387,
        "saikou": 0.89,
        "heikin": 0.66,
        "boshuAvg30d": 203.3,
        "heikinAvg30d": 2.855
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 119.124,
        "saikou": 3.06,
        "heikin": 3.06,
        "boshuAvg30d": 203.3,
        "heikinAvg30d": 3.004
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 119.124,
        "saikou": 3.16,
        "heikin": 3.06,
        "boshuAvg30d": 213.6,
        "heikinAvg30d": 3.003
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 119.124,
        "saikou": 3.16,
        "heikin": 3.06,
        "boshuAvg30d": 217.6,
        "heikinAvg30d": 3.124
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 8.14,
        "heikin": 4.52,
        "boshuAvg30d": 222.6,
        "heikinAvg30d": 3.69
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 8.99,
        "heikin": 6.16,
        "boshuAvg30d": 224.9,
        "heikinAvg30d": 3.831
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 207.736,
        "saikou": 7.8,
        "heikin": 4.58,
        "boshuAvg30d": 224.9,
        "heikinAvg30d": 3.72
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 177.96,
        "saikou": 9.98,
        "heikin": 4.38,
        "boshuAvg30d": 224.9,
        "heikinAvg30d": 4.231
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 158.346,
        "saikou": 9.98,
        "heikin": 4.91,
        "boshuAvg30d": 234.9,
        "heikinAvg30d": 4.368
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 119.124,
        "saikou": 9.98,
        "heikin": 6.63,
        "boshuAvg30d": 234.9,
        "heikinAvg30d": 4.193
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 135.31,
        "saikou": 9.99,
        "heikin": 5.88,
        "boshuAvg30d": 234.9,
        "heikinAvg30d": 4.049
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 115.696,
        "saikou": 9.99,
        "heikin": 6.82,
        "boshuAvg30d": 233.9,
        "heikinAvg30d": 4.061
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 124.754,
        "saikou": 9.99,
        "heikin": 5.49,
        "boshuAvg30d": 232.2,
        "heikinAvg30d": 4.007
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 138.738,
        "saikou": 9.99,
        "heikin": 5.84,
        "boshuAvg30d": 232.9,
        "heikinAvg30d": 3.778
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 136.868,
        "saikou": 9.99,
        "heikin": 5.8,
        "boshuAvg30d": 231.2,
        "heikinAvg30d": 3.259
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 136.868,
        "saikou": 9.99,
        "heikin": 5.8,
        "boshuAvg30d": 231.2,
        "heikinAvg30d": 3.361
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.74,
        "boshuAvg30d": 231.2,
        "heikinAvg30d": 4.042
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.98,
        "heikin": 6.61,
        "boshuAvg30d": 231.2,
        "heikinAvg30d": 3.995
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.75,
        "boshuAvg30d": 231.2,
        "heikinAvg30d": 4.434
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.99,
        "heikin": 6.8,
        "boshuAvg30d": 231.2,
        "heikinAvg30d": 4.265
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 186.289,
        "saikou": 9.98,
        "heikin": 6,
        "boshuAvg30d": 230.9,
        "heikinAvg30d": 4.452
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 6.79,
        "heikin": 3.21,
        "boshuAvg30d": 230.9,
        "heikinAvg30d": 4.567
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 8.99,
        "heikin": 5.7,
        "boshuAvg30d": 230.9,
        "heikinAvg30d": 4.249
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 8.02,
        "heikin": 3.84,
        "boshuAvg30d": 230.9,
        "heikinAvg30d": 3.839
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 7.98,
        "heikin": 4.95,
        "boshuAvg30d": 226.6,
        "heikinAvg30d": 4.055
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 119.124,
        "saikou": 8.98,
        "heikin": 5.42,
        "boshuAvg30d": 225.6,
        "heikinAvg30d": 3.952
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 8.57,
        "heikin": 4.87,
        "boshuAvg30d": 223.6,
        "heikinAvg30d": 3.895
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 7.94,
        "heikin": 4.48,
        "boshuAvg30d": 223.6,
        "heikinAvg30d": 3.843
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 119.124,
        "saikou": 6.43,
        "heikin": 3.19,
        "boshuAvg30d": 223.6,
        "heikinAvg30d": 3.816
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 5.92,
        "heikin": 3.58,
        "boshuAvg30d": 222.6,
        "heikinAvg30d": 3.269
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 117.139,
        "saikou": 3.16,
        "heikin": 3.06,
        "boshuAvg30d": 221.6,
        "heikinAvg30d": 3.736
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 117.139,
        "saikou": 3.16,
        "heikin": 3.06,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 3.773
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 4.95,
        "heikin": 3.14,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 3.573
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 4.88,
        "heikin": 3.13,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 3.612
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 3.06,
        "heikin": 3.06,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 3.571
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 119.124,
        "saikou": 5,
        "heikin": 3.14,
        "boshuAvg30d": 220.6,
        "heikinAvg30d": 3.52
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 119.124,
        "saikou": 4.95,
        "heikin": 3.14,
        "boshuAvg30d": 219.3,
        "heikinAvg30d": 3.435
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 117.126,
        "saikou": 5.01,
        "heikin": 3.14,
        "boshuAvg30d": 217.3,
        "heikinAvg30d": 2.864
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 172.884,
        "saikou": 2.29,
        "heikin": 1.36,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 2.142
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 172.884,
        "saikou": 2.29,
        "heikin": 1.3,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 2.257
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 172.884,
        "saikou": 2.29,
        "heikin": 1.3,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 2.113
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 174.874,
        "saikou": 2.29,
        "heikin": 1.3,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 2.007
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 151.008,
        "saikou": 2.29,
        "heikin": 1.3,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 2.036
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 100.1,
        "saikou": 2.29,
        "heikin": 2.27,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 2.156
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 96.927,
        "saikou": 7.58,
        "heikin": 4.56,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 2.409
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 144.618,
        "saikou": 7.83,
        "heikin": 2.56,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.841
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 144.618,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.922
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 144.618,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.971
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 144.618,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 3.141
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 162.55,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 2.941
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 141.748,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 3.029
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 141.748,
        "saikou": 2.29,
        "heikin": 2.25,
        "boshuAvg30d": 130.1,
        "heikinAvg30d": 3.304
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 141.748,
        "saikou": 8.48,
        "heikin": 3.67,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 2.918
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 141.748,
        "saikou": 8.48,
        "heikin": 3.75,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 2.59
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 150.881,
        "saikou": 8.09,
        "heikin": 2.54,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 2.404
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 141.748,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 2.3
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 141.748,
        "saikou": 5.91,
        "heikin": 2.02,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 2.602
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 139.75,
        "saikou": 2.7,
        "heikin": 1.88,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.422
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 139.75,
        "saikou": 8.09,
        "heikin": 3.4,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 2.221
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 141.748,
        "saikou": 3.99,
        "heikin": 1.92,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 2.289
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 139.75,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 2.19
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 141.748,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 2.173
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 141.748,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 2.045
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 141.748,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 2.151
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 141.748,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 2.196
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 141.748,
        "saikou": 5.91,
        "heikin": 1.98,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 2.335
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 141.748,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 2.434
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 141.748,
        "saikou": 2.7,
        "heikin": 1.87,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 2.717
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 141.748,
        "saikou": 4.29,
        "heikin": 1.92,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 2.897
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 154.475,
        "saikou": 8.29,
        "heikin": 3.32,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.019
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 179.929,
        "saikou": 8.3,
        "heikin": 2.87,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.389
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 141.748,
        "saikou": 7.98,
        "heikin": 4.45,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.932
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 141.748,
        "saikou": 7,
        "heikin": 4.84,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 4.299
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 141.748,
        "saikou": 7,
        "heikin": 5.05,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 4.05
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 142.628,
        "saikou": 7.98,
        "heikin": 5.09,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.941
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 142.628,
        "saikou": 7,
        "heikin": 4.67,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.712
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 142.628,
        "saikou": 7,
        "heikin": 4.76,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.556
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 144.618,
        "saikou": 7,
        "heikin": 4.8,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.397
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 142.818,
        "saikou": 5.98,
        "heikin": 4.38,
        "boshuAvg30d": 132.4,
        "heikinAvg30d": 3.644
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 142.818,
        "saikou": 7.32,
        "heikin": 4.56,
        "boshuAvg30d": 132.4,
        "heikinAvg30d": 3.589
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 144.618,
        "saikou": 6.1,
        "heikin": 4.45,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 3.365
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 144.618,
        "saikou": 6,
        "heikin": 3.74,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 3.168
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 144.618,
        "saikou": 2.29,
        "heikin": 2.26,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 3.021
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 112.442,
        "saikou": 7,
        "heikin": 4.33,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 2.485
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 112.463,
        "saikou": 7.98,
        "heikin": 4.22,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 2.573
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 194.095,
        "saikou": 2.29,
        "heikin": 1.32,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 2.014
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.725
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.687
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.65
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.616
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.63
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.679
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 7.44,
        "heikin": 1.24,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.718
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 173.8,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.734
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.7,
        "heikin": 0.66,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.754
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.7,
        "heikin": 0.66,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.773
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.7,
        "heikin": 0.67,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.79
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.762
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 188.343,
        "saikou": 3.99,
        "heikin": 1,
        "boshuAvg30d": 42.6,
        "heikinAvg30d": 0.886
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 0.836
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 188.343,
        "saikou": 7.95,
        "heikin": 1.39,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 0.83
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 7.55,
        "heikin": 1.38,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.862
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 6.5,
        "heikin": 1.27,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.861
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.799
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.936
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.918
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.935
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 1.18,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.93
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.14,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.949
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.12,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.956
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.27,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.97
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.28,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.969
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.953
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 1.19,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.921
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.957
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 46.6,
        "heikinAvg30d": 0.952
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 1.036
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 168.343,
        "saikou": 3.99,
        "heikin": 0.91,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 1.008
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 1.06,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 1.141
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 1.33,
        "boshuAvg30d": 43.3,
        "heikinAvg30d": 1.112
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 6.6,
        "heikin": 0.79,
        "boshuAvg30d": 42.6,
        "heikinAvg30d": 1.135
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 142.8,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 42.3,
        "heikinAvg30d": 1.152
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.95,
        "heikin": 0.83,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.15
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.116
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.49,
        "heikin": 0.94,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.126
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 7.49,
        "heikin": 1.04,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.147
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.139
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 1.126
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 176.8,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.894
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 176.8,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.825
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.791
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 6.49,
        "heikin": 1.28,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.735
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 202.343,
        "saikou": 7.55,
        "heikin": 1.31,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 0.792
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 4.99,
        "heikin": 1.1,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.756
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 179.52,
        "saikou": 9.95,
        "heikin": 4.59,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.288
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 183.407,
        "saikou": 10,
        "heikin": 3.82,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.051
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 185.315,
        "saikou": 10,
        "heikin": 3.9,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.775
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 181.345,
        "saikou": 10,
        "heikin": 3.86,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.666
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 185.409,
        "saikou": 4.4,
        "heikin": 2.19,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 4.49
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 212.409,
        "saikou": 5.85,
        "heikin": 4.24,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 4.745
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 198.043,
        "saikou": 5.88,
        "heikin": 3.96,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.992
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 231.526,
        "saikou": 5.23,
        "heikin": 3.95,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.307
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 271.274,
        "saikou": 5,
        "heikin": 3.87,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.389
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 268.354,
        "saikou": 5.23,
        "heikin": 4.03,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.696
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 271.274,
        "saikou": 5.84,
        "heikin": 4.46,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.898
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 271.274,
        "saikou": 6,
        "heikin": 4.58,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.981
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 252.974,
        "saikou": 6.13,
        "heikin": 4.67,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 5.873
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 255.998,
        "saikou": 6.44,
        "heikin": 4.86,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 6.016
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 219.998,
        "saikou": 5.85,
        "heikin": 4.15,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 5.082
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 202.648,
        "saikou": 9.25,
        "heikin": 4.83,
        "boshuAvg30d": 174.6,
        "heikinAvg30d": 4.445
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 200.65,
        "saikou": 8.79,
        "heikin": 4.55,
        "boshuAvg30d": 174.6,
        "heikinAvg30d": 4.368
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 233.65,
        "saikou": 5.8,
        "heikin": 1.96,
        "boshuAvg30d": 174.6,
        "heikinAvg30d": 4.18
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 282.55,
        "saikou": 1.67,
        "heikin": 0.99,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.07
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 271.688,
        "saikou": 6.07,
        "heikin": 0.89,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 3.629
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 237.609,
        "saikou": 8.6,
        "heikin": 1.62,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.503
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 248.442,
        "saikou": 6,
        "heikin": 1.57,
        "boshuAvg30d": 180.6,
        "heikinAvg30d": 3.518
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 245.052,
        "saikou": 0.89,
        "heikin": 0.41,
        "boshuAvg30d": 180.6,
        "heikinAvg30d": 3.2
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 254.971,
        "saikou": 0.87,
        "heikin": 0.44,
        "boshuAvg30d": 180.6,
        "heikinAvg30d": 3.006
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 250.145,
        "saikou": 0.8,
        "heikin": 0.41,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.135
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 257.947,
        "saikou": 0.83,
        "heikin": 0.41,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.188
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 250.821,
        "saikou": 1.36,
        "heikin": 0.44,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.788
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 233.724,
        "saikou": 5.98,
        "heikin": 1.23,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 4.283
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 261.85,
        "saikou": 3.08,
        "heikin": 1.41,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 4.572
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 285.534,
        "saikou": 7.54,
        "heikin": 3,
        "boshuAvg30d": 176.6,
        "heikinAvg30d": 5.127
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 280.634,
        "saikou": 8.68,
        "heikin": 3.56,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 5.221
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 280.634,
        "saikou": 9.69,
        "heikin": 3.94,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 5.638
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 202.658,
        "saikou": 10,
        "heikin": 6.26,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 6.202
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 231.71,
        "saikou": 9.38,
        "heikin": 7.59,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 6.665
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 214.736,
        "saikou": 9.85,
        "heikin": 8.06,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 6.773
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 200.075,
        "saikou": 10,
        "heikin": 8.23,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 6.906
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 231.02,
        "saikou": 9.38,
        "heikin": 8.26,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.969
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 238.351,
        "saikou": 9.35,
        "heikin": 7.85,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.823
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 238.351,
        "saikou": 9.38,
        "heikin": 8,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.56
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 230.714,
        "saikou": 9.38,
        "heikin": 8.08,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.386
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 238.401,
        "saikou": 9.38,
        "heikin": 7.62,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.351
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 251.291,
        "saikou": 9.38,
        "heikin": 7.45,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.393
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 252.214,
        "saikou": 9.95,
        "heikin": 7.43,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.259
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 251.216,
        "saikou": 9.38,
        "heikin": 7.06,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.752
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 251.216,
        "saikou": 8.84,
        "heikin": 6.67,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.714
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 118.764,
        "saikou": 6.09,
        "heikin": 3.01,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.745
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 126.223,
        "saikou": 5.96,
        "heikin": 2.88,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 5.586
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 113.477,
        "saikou": 4.69,
        "heikin": 2.48,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 4.948
      }
    ]
  }
};
