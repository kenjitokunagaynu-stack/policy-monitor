// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/01〜2026/10/30）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-31",
  "fetchedAt": "2026-10-31",
  "avgWindowLabel": "過去30日平均（2026/10/01〜2026/10/30）",
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
      "boshu": 1073,
      "ouatsu": 1142.249,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1041.7,
      "heikinAvg30d": 3.065
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1073,
      "ouatsu": 1273.956,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1041.7,
      "heikinAvg30d": 2.964
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1073,
      "ouatsu": 1216.152,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1041.7,
      "heikinAvg30d": 2.842
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1073,
      "ouatsu": 1292.337,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1041.7,
      "heikinAvg30d": 2.815
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1070,
      "ouatsu": 1340.687,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1038.7,
      "heikinAvg30d": 2.872
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1069,
      "ouatsu": 1380.277,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1037.7,
      "heikinAvg30d": 2.89
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1066,
      "ouatsu": 1526.362,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1040.4,
      "heikinAvg30d": 3.099
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1068,
      "ouatsu": 1348.344,
      "saikou": 10,
      "heikin": 3.79,
      "boshuAvg30d": 1042.4,
      "heikinAvg30d": 3.32
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1070,
      "ouatsu": 1380.221,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1044.4,
      "heikinAvg30d": 3.407
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1071,
      "ouatsu": 1275.7,
      "saikou": 10,
      "heikin": 3.57,
      "boshuAvg30d": 1045.4,
      "heikinAvg30d": 3.61
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1071,
      "ouatsu": 1382.33,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1045.4,
      "heikinAvg30d": 3.632
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1071,
      "ouatsu": 1389.826,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1045.4,
      "heikinAvg30d": 3.604
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1131,
      "ouatsu": 1123.168,
      "saikou": 10,
      "heikin": 3.9,
      "boshuAvg30d": 1105.4,
      "heikinAvg30d": 3.61
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1154,
      "ouatsu": 1191.547,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1128.4,
      "heikinAvg30d": 3.501
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1175,
      "ouatsu": 1206.813,
      "saikou": 10,
      "heikin": 3.74,
      "boshuAvg30d": 1149.4,
      "heikinAvg30d": 3.089
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1192,
      "ouatsu": 1201.247,
      "saikou": 10,
      "heikin": 2.12,
      "boshuAvg30d": 1166.8,
      "heikinAvg30d": 2.844
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1192,
      "ouatsu": 1276.322,
      "saikou": 10,
      "heikin": 1.74,
      "boshuAvg30d": 1167.1,
      "heikinAvg30d": 2.824
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1192,
      "ouatsu": 1361.281,
      "saikou": 10,
      "heikin": 2.06,
      "boshuAvg30d": 1167.1,
      "heikinAvg30d": 2.759
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1124,
      "ouatsu": 1366.787,
      "saikou": 10,
      "heikin": 1.75,
      "boshuAvg30d": 1125.0,
      "heikinAvg30d": 2.975
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1127,
      "ouatsu": 1344.456,
      "saikou": 10,
      "heikin": 1.8,
      "boshuAvg30d": 1128.0,
      "heikinAvg30d": 3.027
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1132,
      "ouatsu": 1317.361,
      "saikou": 10,
      "heikin": 1.81,
      "boshuAvg30d": 1130.8,
      "heikinAvg30d": 3.026
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1132,
      "ouatsu": 1278.049,
      "saikou": 10,
      "heikin": 1.86,
      "boshuAvg30d": 1130.8,
      "heikinAvg30d": 3.004
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1129,
      "ouatsu": 1271.765,
      "saikou": 10,
      "heikin": 1.82,
      "boshuAvg30d": 1127.8,
      "heikinAvg30d": 2.991
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1128,
      "ouatsu": 1266.145,
      "saikou": 10,
      "heikin": 1.78,
      "boshuAvg30d": 1126.8,
      "heikinAvg30d": 2.95
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1108,
      "ouatsu": 1234.773,
      "saikou": 10,
      "heikin": 1.76,
      "boshuAvg30d": 1106.5,
      "heikinAvg30d": 2.804
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1108,
      "ouatsu": 1252.267,
      "saikou": 10,
      "heikin": 1.82,
      "boshuAvg30d": 1106.5,
      "heikinAvg30d": 2.821
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1108,
      "ouatsu": 1366.703,
      "saikou": 10,
      "heikin": 1.79,
      "boshuAvg30d": 1106.5,
      "heikinAvg30d": 2.981
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1106,
      "ouatsu": 1305.721,
      "saikou": 10,
      "heikin": 1.72,
      "boshuAvg30d": 1104.1,
      "heikinAvg30d": 3.059
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1103,
      "ouatsu": 1259.896,
      "saikou": 8.29,
      "heikin": 1.45,
      "boshuAvg30d": 1101.1,
      "heikinAvg30d": 3.047
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1097,
      "ouatsu": 1332.635,
      "saikou": 8.3,
      "heikin": 1.77,
      "boshuAvg30d": 1095.1,
      "heikinAvg30d": 3.182
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1163,
      "ouatsu": 1364.199,
      "saikou": 10,
      "heikin": 2.46,
      "boshuAvg30d": 1141.1,
      "heikinAvg30d": 3.189
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1163,
      "ouatsu": 1314.207,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1140.7,
      "heikinAvg30d": 3.376
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1164,
      "ouatsu": 1252.194,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1141.4,
      "heikinAvg30d": 3.789
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1163,
      "ouatsu": 1211.4,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1140.4,
      "heikinAvg30d": 4.107
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1161,
      "ouatsu": 1291.081,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1136.4,
      "heikinAvg30d": 4.013
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1156,
      "ouatsu": 1341.109,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1131.1,
      "heikinAvg30d": 4.086
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1151,
      "ouatsu": 1332.799,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1125.1,
      "heikinAvg30d": 3.883
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1151,
      "ouatsu": 1357.844,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1125.1,
      "heikinAvg30d": 3.845
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1151,
      "ouatsu": 1472.479,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1125.1,
      "heikinAvg30d": 3.655
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1150,
      "ouatsu": 1480.826,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1124.4,
      "heikinAvg30d": 3.442
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1142,
      "ouatsu": 1551.181,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1116.4,
      "heikinAvg30d": 3.393
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1142,
      "ouatsu": 1491.269,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1116.4,
      "heikinAvg30d": 3.314
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1052,
      "ouatsu": 1533.795,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1037.9,
      "heikinAvg30d": 3.241
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1055,
      "ouatsu": 1507.453,
      "saikou": 10,
      "heikin": 2.41,
      "boshuAvg30d": 1040.9,
      "heikinAvg30d": 3.285
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1056,
      "ouatsu": 1562.181,
      "saikou": 10,
      "heikin": 2.27,
      "boshuAvg30d": 1045.2,
      "heikinAvg30d": 3.291
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1051,
      "ouatsu": 1523.218,
      "saikou": 10,
      "heikin": 2.22,
      "boshuAvg30d": 1037.2,
      "heikinAvg30d": 3.109
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1042,
      "ouatsu": 1573.731,
      "saikou": 10,
      "heikin": 2.21,
      "boshuAvg30d": 1028.6,
      "heikinAvg30d": 3.198
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1035,
      "ouatsu": 1435.777,
      "saikou": 10,
      "heikin": 1.65,
      "boshuAvg30d": 1020.9,
      "heikinAvg30d": 2.95
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
        "ouatsu": 114.908,
        "saikou": 4.04,
        "heikin": 3.87,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.08
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 147.358,
        "saikou": 3.29,
        "heikin": 3.11,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 3.963
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 117.908,
        "saikou": 7.58,
        "heikin": 3.99,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 3.885
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 7.69,
        "heikin": 2.18,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 3.748
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 157.908,
        "saikou": 3.15,
        "heikin": 2.99,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.155
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 113.968,
        "saikou": 7.69,
        "heikin": 3.61,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 3.77
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 166.208,
        "saikou": 3.34,
        "heikin": 3.15,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.051
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 98.958,
        "saikou": 9.58,
        "heikin": 4.87,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.026
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 146.208,
        "saikou": 3.41,
        "heikin": 3.18,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.154
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 93.968,
        "saikou": 3.61,
        "heikin": 2.91,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 3.887
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 159.208,
        "saikou": 3.63,
        "heikin": 3.42,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.264
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 160.29,
        "saikou": 3.56,
        "heikin": 3.42,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.387
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 114.908,
        "saikou": 8.67,
        "heikin": 2.76,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.14
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 153.368,
        "saikou": 7.69,
        "heikin": 2.1,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.255
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 114.908,
        "saikou": 8.67,
        "heikin": 2.75,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.635
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 151.958,
        "saikou": 9.36,
        "heikin": 3.06,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.647
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 163.908,
        "saikou": 9.44,
        "heikin": 1.29,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.766
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 112.958,
        "saikou": 7.69,
        "heikin": 2.51,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.038
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 156.918,
        "saikou": 7.58,
        "heikin": 2.48,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.153
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 144.968,
        "saikou": 9.44,
        "heikin": 2.32,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.068
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 165.908,
        "saikou": 9.34,
        "heikin": 2.16,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.637
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 146.958,
        "saikou": 7.69,
        "heikin": 2.12,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 2.845
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 155.519,
        "saikou": 7.58,
        "heikin": 1.97,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.639
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 146.958,
        "saikou": 7.58,
        "heikin": 2.02,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.443
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 148.908,
        "saikou": 9.44,
        "heikin": 2.38,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.412
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 146.958,
        "saikou": 9.44,
        "heikin": 2.34,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.42
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 193.25,
        "saikou": 7.69,
        "heikin": 1.86,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.063
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 144.968,
        "saikou": 9.44,
        "heikin": 2.36,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.437
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 148.908,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.57
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 208.268,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.59
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 150.908,
        "saikou": 7.69,
        "heikin": 2.34,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 3.756
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 192.958,
        "saikou": 8.91,
        "heikin": 1.42,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 4.79
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 170.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.944
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 103.99,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 6.203
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 130.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.543
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 126.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.802
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 115.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.379
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 113.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.528
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 179.218,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.207
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 128.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.099
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 176.218,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 4.794
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 110.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 4.288
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 115.918,
        "saikou": 1.28,
        "heikin": 1.03,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 4.389
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 162.268,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.553
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 194.24,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.624
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 2.6,
        "heikin": 1.1,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.195
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 144.618,
        "saikou": 1.28,
        "heikin": 1.02,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.473
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 144.468,
        "saikou": 7.58,
        "heikin": 1.14,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.006
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 54.952,
        "saikou": 10,
        "heikin": 4.9,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 5.434
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 54.952,
        "saikou": 10,
        "heikin": 5.23,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 5.592
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 74.83,
        "saikou": 10,
        "heikin": 4.93,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 5.428
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 75.44,
        "saikou": 10,
        "heikin": 5.62,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 5.437
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 71.494,
        "saikou": 10,
        "heikin": 4.83,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 5.437
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 71.494,
        "saikou": 10,
        "heikin": 4.65,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 5.537
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 89.79,
        "saikou": 7.61,
        "heikin": 5.29,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.546
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 91.29,
        "saikou": 10,
        "heikin": 5.17,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.456
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 95.288,
        "saikou": 10,
        "heikin": 5.24,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.252
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 84.618,
        "saikou": 10,
        "heikin": 5.48,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.257
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 95.288,
        "saikou": 7.42,
        "heikin": 5.3,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.563
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 95.288,
        "saikou": 10,
        "heikin": 5.51,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.653
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 95.288,
        "saikou": 10,
        "heikin": 6.24,
        "boshuAvg30d": 124.0,
        "heikinAvg30d": 5.963
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 93.788,
        "saikou": 10,
        "heikin": 5.89,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 6.108
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 107.288,
        "saikou": 10,
        "heikin": 5.84,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 6.453
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 105.788,
        "saikou": 10,
        "heikin": 5.75,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 6.563
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 107.288,
        "saikou": 10,
        "heikin": 5.52,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 6.697
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 105.788,
        "saikou": 10,
        "heikin": 5.82,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 6.645
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 110.614,
        "saikou": 10,
        "heikin": 5.46,
        "boshuAvg30d": 80.9,
        "heikinAvg30d": 6.597
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 108.714,
        "saikou": 10,
        "heikin": 6.02,
        "boshuAvg30d": 80.9,
        "heikinAvg30d": 6.764
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 113.428,
        "saikou": 10,
        "heikin": 5.75,
        "boshuAvg30d": 80.1,
        "heikinAvg30d": 6.802
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 100.828,
        "saikou": 10,
        "heikin": 6.25,
        "boshuAvg30d": 80.1,
        "heikinAvg30d": 6.956
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 106.713,
        "saikou": 10,
        "heikin": 6.01,
        "boshuAvg30d": 81.1,
        "heikinAvg30d": 6.971
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 106.784,
        "saikou": 10,
        "heikin": 6.07,
        "boshuAvg30d": 81.1,
        "heikinAvg30d": 6.973
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 119.288,
        "saikou": 10,
        "heikin": 5.95,
        "boshuAvg30d": 77.1,
        "heikinAvg30d": 6.982
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 106.718,
        "saikou": 10,
        "heikin": 6.1,
        "boshuAvg30d": 77.1,
        "heikinAvg30d": 6.849
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 121.284,
        "saikou": 10,
        "heikin": 5.81,
        "boshuAvg30d": 77.1,
        "heikinAvg30d": 6.308
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 106.784,
        "saikou": 10,
        "heikin": 5.72,
        "boshuAvg30d": 76.1,
        "heikinAvg30d": 6.145
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 106.784,
        "saikou": 4.74,
        "heikin": 3.35,
        "boshuAvg30d": 76.1,
        "heikinAvg30d": 6.247
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 106.784,
        "saikou": 4.67,
        "heikin": 3.38,
        "boshuAvg30d": 74.1,
        "heikinAvg30d": 5.335
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 109.284,
        "saikou": 10,
        "heikin": 5.52,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 5.346
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 109.284,
        "saikou": 10,
        "heikin": 6.36,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 4.217
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 6.89,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 4.22
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 95.784,
        "saikou": 10,
        "heikin": 6.73,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 4.21
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 6.66,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 4.072
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 97.78,
        "saikou": 10,
        "heikin": 6.26,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 3.798
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 6.26,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 3.749
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 95.784,
        "saikou": 10,
        "heikin": 6.24,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 3.309
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 4.91,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 3.411
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 5.15,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 3.738
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 93.329,
        "saikou": 10,
        "heikin": 5.23,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 3.782
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 93.329,
        "saikou": 10,
        "heikin": 4.85,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 4.008
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 5.58,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.263
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 83.364,
        "saikou": 10,
        "heikin": 6.68,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.078
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 84.714,
        "saikou": 10,
        "heikin": 6.88,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.146
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 84.714,
        "saikou": 10,
        "heikin": 6.81,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.368
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 6.7,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.49
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 83.214,
        "saikou": 10,
        "heikin": 6.81,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.868
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 184,
        "ouatsu": 217.89,
        "saikou": 6.65,
        "heikin": 3.4,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 3.618
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 184,
        "ouatsu": 232.191,
        "saikou": 6.3,
        "heikin": 1.81,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 3.67
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 184,
        "ouatsu": 238.142,
        "saikou": 6.69,
        "heikin": 3.43,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 3.428
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 184,
        "ouatsu": 253.187,
        "saikou": 6.71,
        "heikin": 3.26,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 3.481
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 183,
        "ouatsu": 254.67,
        "saikou": 6.5,
        "heikin": 2.64,
        "boshuAvg30d": 241.3,
        "heikinAvg30d": 3.524
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 182,
        "ouatsu": 282.336,
        "saikou": 6.73,
        "heikin": 3.08,
        "boshuAvg30d": 240.3,
        "heikinAvg30d": 3.302
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 180,
        "ouatsu": 288.347,
        "saikou": 6.67,
        "heikin": 3.59,
        "boshuAvg30d": 238.3,
        "heikinAvg30d": 3.57
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 182,
        "ouatsu": 254.949,
        "saikou": 6.7,
        "heikin": 3.5,
        "boshuAvg30d": 240.3,
        "heikinAvg30d": 3.688
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 182,
        "ouatsu": 226.92,
        "saikou": 6.74,
        "heikin": 3.7,
        "boshuAvg30d": 240.3,
        "heikinAvg30d": 3.736
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 183,
        "ouatsu": 212.252,
        "saikou": 6.65,
        "heikin": 3.74,
        "boshuAvg30d": 241.3,
        "heikinAvg30d": 3.946
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 183,
        "ouatsu": 229.958,
        "saikou": 6.66,
        "heikin": 3.59,
        "boshuAvg30d": 241.3,
        "heikinAvg30d": 3.807
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 183,
        "ouatsu": 220.626,
        "saikou": 6.7,
        "heikin": 3.66,
        "boshuAvg30d": 241.3,
        "heikinAvg30d": 3.921
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 202,
        "ouatsu": 201.862,
        "saikou": 6.69,
        "heikin": 3.83,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 3.849
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 210,
        "ouatsu": 233.281,
        "saikou": 2.75,
        "heikin": 1.96,
        "boshuAvg30d": 268.3,
        "heikinAvg30d": 4.214
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 215,
        "ouatsu": 233.967,
        "saikou": 6.27,
        "heikin": 2.06,
        "boshuAvg30d": 273.3,
        "heikinAvg30d": 3.653
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 220,
        "ouatsu": 251.703,
        "saikou": 3,
        "heikin": 1.47,
        "boshuAvg30d": 278.6,
        "heikinAvg30d": 3.356
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 220,
        "ouatsu": 272.402,
        "saikou": 2.74,
        "heikin": 1.32,
        "boshuAvg30d": 278.9,
        "heikinAvg30d": 3.305
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 220,
        "ouatsu": 272.402,
        "saikou": 2.79,
        "heikin": 1.35,
        "boshuAvg30d": 278.9,
        "heikinAvg30d": 3.205
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 212,
        "ouatsu": 272.386,
        "saikou": 2.13,
        "heikin": 1.01,
        "boshuAvg30d": 273.9,
        "heikinAvg30d": 3.409
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 212,
        "ouatsu": 271.033,
        "saikou": 1.69,
        "heikin": 0.98,
        "boshuAvg30d": 273.9,
        "heikinAvg30d": 3.503
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 212,
        "ouatsu": 234.121,
        "saikou": 1.65,
        "heikin": 0.95,
        "boshuAvg30d": 274.6,
        "heikinAvg30d": 3.435
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 211,
        "ouatsu": 229.675,
        "saikou": 1.84,
        "heikin": 1.01,
        "boshuAvg30d": 273.6,
        "heikinAvg30d": 3.369
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 209,
        "ouatsu": 214.049,
        "saikou": 3.15,
        "heikin": 1.12,
        "boshuAvg30d": 271.6,
        "heikinAvg30d": 3.375
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 209,
        "ouatsu": 237.874,
        "saikou": 2.6,
        "heikin": 1.08,
        "boshuAvg30d": 271.6,
        "heikinAvg30d": 3.32
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 206,
        "ouatsu": 256.612,
        "saikou": 3.6,
        "heikin": 1.19,
        "boshuAvg30d": 268.2,
        "heikinAvg30d": 3.158
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 206,
        "ouatsu": 237.656,
        "saikou": 3.37,
        "heikin": 1.43,
        "boshuAvg30d": 268.2,
        "heikinAvg30d": 3.109
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 206,
        "ouatsu": 236.568,
        "saikou": 2.3,
        "heikin": 1.21,
        "boshuAvg30d": 268.2,
        "heikinAvg30d": 3.302
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 206,
        "ouatsu": 225.054,
        "saikou": 1.78,
        "heikin": 0.92,
        "boshuAvg30d": 267.9,
        "heikinAvg30d": 3.327
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 205,
        "ouatsu": 207.303,
        "saikou": 1.59,
        "heikin": 0.85,
        "boshuAvg30d": 266.9,
        "heikinAvg30d": 3.164
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 204,
        "ouatsu": 222.666,
        "saikou": 6.58,
        "heikin": 1.47,
        "boshuAvg30d": 265.9,
        "heikinAvg30d": 3.005
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 202,
        "ouatsu": 256.511,
        "saikou": 7.07,
        "heikin": 1.99,
        "boshuAvg30d": 263.9,
        "heikinAvg30d": 2.874
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 202,
        "ouatsu": 285.493,
        "saikou": 8.47,
        "heikin": 2.43,
        "boshuAvg30d": 263.6,
        "heikinAvg30d": 2.836
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 202,
        "ouatsu": 286.951,
        "saikou": 4.96,
        "heikin": 1.91,
        "boshuAvg30d": 263.3,
        "heikinAvg30d": 2.871
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 202,
        "ouatsu": 341.963,
        "saikou": 2.64,
        "heikin": 1.58,
        "boshuAvg30d": 263.3,
        "heikinAvg30d": 3.019
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 202,
        "ouatsu": 355.25,
        "saikou": 2.47,
        "heikin": 1.62,
        "boshuAvg30d": 261.3,
        "heikinAvg30d": 2.865
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 202,
        "ouatsu": 407.76,
        "saikou": 6.35,
        "heikin": 1.73,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 2.843
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 205,
        "ouatsu": 398.958,
        "saikou": 3.97,
        "heikin": 1.64,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 3.021
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 205,
        "ouatsu": 423.546,
        "saikou": 2.49,
        "heikin": 1.57,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 2.776
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 205,
        "ouatsu": 418.922,
        "saikou": 3.18,
        "heikin": 1.76,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 2.854
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 205,
        "ouatsu": 390.939,
        "saikou": 2.79,
        "heikin": 1.86,
        "boshuAvg30d": 263.2,
        "heikinAvg30d": 2.623
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 203,
        "ouatsu": 423.977,
        "saikou": 2.45,
        "heikin": 1.71,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.61
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 203,
        "ouatsu": 420.314,
        "saikou": 6.53,
        "heikin": 1.66,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.829
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 203,
        "ouatsu": 416.11,
        "saikou": 6.17,
        "heikin": 1.59,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.507
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 203,
        "ouatsu": 359.99,
        "saikou": 2.46,
        "heikin": 1.74,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.618
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 203,
        "ouatsu": 371.479,
        "saikou": 3.03,
        "heikin": 1.65,
        "boshuAvg30d": 264.6,
        "heikinAvg30d": 2.571
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 201,
        "ouatsu": 362.029,
        "saikou": 3.06,
        "heikin": 1.72,
        "boshuAvg30d": 259.6,
        "heikinAvg30d": 2.63
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 199,
        "ouatsu": 372.112,
        "saikou": 6.27,
        "heikin": 2.43,
        "boshuAvg30d": 257.9,
        "heikinAvg30d": 3.157
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 198,
        "ouatsu": 355.461,
        "saikou": 3.01,
        "heikin": 1.1,
        "boshuAvg30d": 256.3,
        "heikinAvg30d": 3.257
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 332.532,
        "saikou": 5.18,
        "heikin": 1.99,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.702
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 372.962,
        "saikou": 5.13,
        "heikin": 2.03,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.554
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 372.976,
        "saikou": 7.71,
        "heikin": 2.33,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.557
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 376.948,
        "saikou": 7.52,
        "heikin": 2.38,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.632
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 366.835,
        "saikou": 7.94,
        "heikin": 2.5,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.577
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 364.851,
        "saikou": 5.08,
        "heikin": 1.85,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.582
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 390.548,
        "saikou": 2.92,
        "heikin": 1.59,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 1.466
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 367.16,
        "saikou": 4.26,
        "heikin": 1.78,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 1.514
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 370.876,
        "saikou": 3.08,
        "heikin": 1.58,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.499
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 356.946,
        "saikou": 2.9,
        "heikin": 1.56,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.483
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 358.936,
        "saikou": 3.38,
        "heikin": 1.58,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.451
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 353.524,
        "saikou": 3.45,
        "heikin": 1.58,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.41
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 137.574,
        "saikou": 1.86,
        "heikin": 1.1,
        "boshuAvg30d": 112.2,
        "heikinAvg30d": 1.649
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 137.574,
        "saikou": 1.87,
        "heikin": 1.11,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.71
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 143.61,
        "saikou": 5.1,
        "heikin": 1.62,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 1.981
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 138.086,
        "saikou": 2.01,
        "heikin": 1.31,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 2.01
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 148.012,
        "saikou": 2.02,
        "heikin": 1.37,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 2.051
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 134.834,
        "saikou": 7.68,
        "heikin": 1.92,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 2.192
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 138.32,
        "saikou": 7.88,
        "heikin": 2.39,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.613
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 133.116,
        "saikou": 9.18,
        "heikin": 2.49,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.651
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 121.227,
        "saikou": 9.17,
        "heikin": 2.66,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.839
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 119.354,
        "saikou": 9.16,
        "heikin": 2.64,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.844
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 123.287,
        "saikou": 9.15,
        "heikin": 2.51,
        "boshuAvg30d": 125.2,
        "heikinAvg30d": 2.691
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 112.367,
        "saikou": 9.14,
        "heikin": 2.53,
        "boshuAvg30d": 124.2,
        "heikinAvg30d": 2.731
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 94.617,
        "saikou": 9.13,
        "heikin": 2.55,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.62
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 110.197,
        "saikou": 8.26,
        "heikin": 2.47,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.595
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 138.868,
        "saikou": 8.27,
        "heikin": 2.43,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.648
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 148.016,
        "saikou": 8.28,
        "heikin": 2.43,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 2.712
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 148.016,
        "saikou": 8.29,
        "heikin": 2.6,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 2.978
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 146.032,
        "saikou": 8.3,
        "heikin": 2.6,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 2.903
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 193.035,
        "saikou": 2.88,
        "heikin": 1.85,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.772
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 193.035,
        "saikou": 3.59,
        "heikin": 1.93,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.901
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 149.565,
        "saikou": 3.39,
        "heikin": 2.25,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.8
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 112.855,
        "saikou": 2.47,
        "heikin": 2.03,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.827
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 101.657,
        "saikou": 2.18,
        "heikin": 1.97,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.665
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 122.425,
        "saikou": 4.47,
        "heikin": 2.2,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 2.582
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 129.905,
        "saikou": 5.1,
        "heikin": 1.56,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.163
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 131.903,
        "saikou": 5.1,
        "heikin": 1.55,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.092
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 153.615,
        "saikou": 2.14,
        "heikin": 1.31,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.825
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 234.226,
        "saikou": 2.14,
        "heikin": 1.5,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.667
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 226.221,
        "saikou": 2.15,
        "heikin": 1.5,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.55
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 241.774,
        "saikou": 3.13,
        "heikin": 1.69,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.607
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 232.146,
        "saikou": 2.14,
        "heikin": 1.46,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 1.503
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 232.146,
        "saikou": 2.15,
        "heikin": 1.46,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.767
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 230.162,
        "saikou": 2.65,
        "heikin": 1.68,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.725
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 249.683,
        "saikou": 5.1,
        "heikin": 1.8,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 1.787
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 249.683,
        "saikou": 1.96,
        "heikin": 1.38,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.699
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 246.199,
        "saikou": 3.32,
        "heikin": 1.73,
        "boshuAvg30d": 111.2,
        "heikinAvg30d": 1.823
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 36.93,
        "saikou": 2.55,
        "heikin": 2.3,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.249
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 38.928,
        "saikou": 4.64,
        "heikin": 4.37,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.192
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 38.928,
        "saikou": 2.8,
        "heikin": 2.69,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.24
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 38.928,
        "saikou": 3.31,
        "heikin": 3.19,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.104
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 44.638,
        "saikou": 4.75,
        "heikin": 4.37,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.208
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 44.698,
        "saikou": 5.06,
        "heikin": 4.64,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.217
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 44.798,
        "saikou": 5.76,
        "heikin": 5.31,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.441
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 44.474,
        "saikou": 5.91,
        "heikin": 5.46,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.864
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 38.928,
        "saikou": 5.88,
        "heikin": 5.51,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.689
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 38.928,
        "saikou": 5.78,
        "heikin": 5.44,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.7
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 38.928,
        "saikou": 5.58,
        "heikin": 5.22,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.905
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 60.466,
        "saikou": 5.06,
        "heikin": 4.8,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.909
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 4.74,
        "heikin": 4.5,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.013
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 5.06,
        "heikin": 4.84,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.013
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 8.94,
        "heikin": 8.49,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.112
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 63.928,
        "saikou": 3.25,
        "heikin": 1.35,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.963
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 63.928,
        "saikou": 3.65,
        "heikin": 1.02,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 3.18
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 63.928,
        "saikou": 3.3,
        "heikin": 0.93,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.847
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 3.2,
        "heikin": 0.56,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.308
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 3.7,
        "heikin": 0.59,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.635
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 63.928,
        "saikou": 5.55,
        "heikin": 0.7,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 4.3
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 63.928,
        "saikou": 6.96,
        "heikin": 0.74,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 4.421
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 63.928,
        "saikou": 4.7,
        "heikin": 0.65,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.444
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 63.928,
        "saikou": 4.7,
        "heikin": 0.65,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.282
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 5.1,
        "heikin": 0.68,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.455
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 4.45,
        "heikin": 0.64,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.146
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 5.95,
        "heikin": 0.73,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.821
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 2.75,
        "heikin": 0.53,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.076
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 4.95,
        "heikin": 0.65,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.757
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 4.25,
        "heikin": 0.98,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.731
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 63.928,
        "saikou": 6.25,
        "heikin": 2,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 4.659
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 63.928,
        "saikou": 7.25,
        "heikin": 4.98,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 5.587
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 58.512,
        "saikou": 5.06,
        "heikin": 4.92,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.356
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 20.263,
        "saikou": 4.05,
        "heikin": 3.14,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 3.894
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4.1,
        "heikin": 3.95,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 3.574
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4.1,
        "heikin": 4.02,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.114
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.32,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.374
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.7,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.905
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.15,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.412
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.19,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.217
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.27,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.659
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.25,
        "heikin": 3.05,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.152
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.17,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.273
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 2.84,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.266
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 38.928,
        "saikou": 3.49,
        "heikin": 3.4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.564
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 38.928,
        "saikou": 2.8,
        "heikin": 2.78,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.188
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 38.928,
        "saikou": 1.58,
        "heikin": 1.58,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.942
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 42.672,
        "saikou": 2.45,
        "heikin": 0.58,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.517
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 257,
        "ouatsu": 75.787,
        "saikou": 1.44,
        "heikin": 1.27,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 1.319
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 257,
        "ouatsu": 83.777,
        "saikou": 1.44,
        "heikin": 1.28,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 1.08
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 257,
        "ouatsu": 27.774,
        "saikou": 1.4,
        "heikin": 1.36,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 1.011
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 257,
        "ouatsu": 78.345,
        "saikou": 1.69,
        "heikin": 1.17,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 1.003
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 256,
        "ouatsu": 91.611,
        "saikou": 1.69,
        "heikin": 1.21,
        "boshuAvg30d": 127.0,
        "heikinAvg30d": 0.965
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 256,
        "ouatsu": 97.399,
        "saikou": 1.99,
        "heikin": 1.46,
        "boshuAvg30d": 127.0,
        "heikinAvg30d": 1.188
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 256,
        "ouatsu": 105.286,
        "saikou": 1.99,
        "heikin": 1.42,
        "boshuAvg30d": 127.0,
        "heikinAvg30d": 1.327
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 256,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 127.0,
        "heikinAvg30d": 1.502
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 257,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 1.425
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 257,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 1.504
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 257,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 1.511
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 257,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.55,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 1.362
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 268,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.47,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 1.52
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 272,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.55,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.476
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 277,
        "ouatsu": 107.155,
        "saikou": 2,
        "heikin": 1.79,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.549
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 280,
        "ouatsu": 107.155,
        "saikou": 2.09,
        "heikin": 1.82,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 1.637
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 280,
        "ouatsu": 107.155,
        "saikou": 2.09,
        "heikin": 1.82,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 1.614
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 280,
        "ouatsu": 113.141,
        "saikou": 3.94,
        "heikin": 2.78,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.074
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 280,
        "ouatsu": 113.141,
        "saikou": 3,
        "heikin": 2.44,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.199
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 280,
        "ouatsu": 113.141,
        "saikou": 3.94,
        "heikin": 2.78,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.167
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 280,
        "ouatsu": 111.156,
        "saikou": 5.94,
        "heikin": 2.86,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.291
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 279,
        "ouatsu": 109.713,
        "saikou": 5.94,
        "heikin": 2.86,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 2.44
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 278,
        "ouatsu": 109.828,
        "saikou": 5.94,
        "heikin": 2.75,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.493
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 278,
        "ouatsu": 111.271,
        "saikou": 3,
        "heikin": 2.33,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.272
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 277,
        "ouatsu": 84.285,
        "saikou": 3,
        "heikin": 1.95,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.078
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 277,
        "ouatsu": 96.271,
        "saikou": 3,
        "heikin": 1.9,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.205
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 277,
        "ouatsu": 113.141,
        "saikou": 5.94,
        "heikin": 2.65,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.494
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 277,
        "ouatsu": 113.141,
        "saikou": 3,
        "heikin": 2.07,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.289
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 277,
        "ouatsu": 113.141,
        "saikou": 4.44,
        "heikin": 2.54,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.26
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 277,
        "ouatsu": 113.141,
        "saikou": 3,
        "heikin": 2.21,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.051
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 276,
        "ouatsu": 113.141,
        "saikou": 3.94,
        "heikin": 2.79,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.318
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 276,
        "ouatsu": 113.141,
        "saikou": 3.94,
        "heikin": 2.76,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.569
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 276,
        "ouatsu": 113.141,
        "saikou": 3.94,
        "heikin": 2.8,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.476
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 276,
        "ouatsu": 90.712,
        "saikou": 2.38,
        "heikin": 2.04,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.181
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 276,
        "ouatsu": 105.712,
        "saikou": 2.5,
        "heikin": 2.24,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.217
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 275,
        "ouatsu": 92.155,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.492
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 273,
        "ouatsu": 105.195,
        "saikou": 1.95,
        "heikin": 1.74,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 1.946
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 273,
        "ouatsu": 105.195,
        "saikou": 1.94,
        "heikin": 1.71,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 1.974
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 273,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.61,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 1.835
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 272,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.819
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 271,
        "ouatsu": 107.289,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.743
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 271,
        "ouatsu": 107.289,
        "saikou": 1.99,
        "heikin": 1.65,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.768
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 271,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.54,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.717
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 271,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.74,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.806
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 271,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.73,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.784
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 270,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.61,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 1.713
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 268,
        "ouatsu": 109.274,
        "saikou": 1.94,
        "heikin": 1.58,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 1.416
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 266,
        "ouatsu": 107.831,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 1.527
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 32.909,
        "saikou": 2.29,
        "heikin": 1.5,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.427
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 65.523,
        "saikou": 2.29,
        "heikin": 1.89,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.519
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 67.323,
        "saikou": 2.29,
        "heikin": 1.88,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.218
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 69.313,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.016
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 69.313,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.046
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 69.313,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.328
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 86.172,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.544
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 52.477,
        "saikou": 2,
        "heikin": 1.43,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.942
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 52.477,
        "saikou": 2,
        "heikin": 1.43,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.305
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 52.477,
        "saikou": 2,
        "heikin": 1.42,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.697
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 52.477,
        "saikou": 2,
        "heikin": 1.42,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.525
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 52.477,
        "saikou": 2,
        "heikin": 1.42,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.434
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 52.477,
        "saikou": 2,
        "heikin": 1.44,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 3.463
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 52.477,
        "saikou": 2,
        "heikin": 1.45,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.129
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 75,
        "saikou": 2.29,
        "heikin": 1.68,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.087
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 86.172,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 1.692
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 86.172,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 1.775
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 133.773,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 1.821
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 113.891,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.025
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 113.891,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.059
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 113.891,
        "saikou": 2.29,
        "heikin": 1.69,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.673
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 113.891,
        "saikou": 7.98,
        "heikin": 1.88,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.684
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 113.891,
        "saikou": 7.98,
        "heikin": 1.9,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.6
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 113.891,
        "saikou": 7.98,
        "heikin": 1.93,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.701
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 103.939,
        "saikou": 2.29,
        "heikin": 1.84,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.488
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 113.891,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.734
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.77,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.858
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 113.891,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.815
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 113.891,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.87
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 113.891,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.942
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.89,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.21
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.86,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.445
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 129.758,
        "saikou": 2.7,
        "heikin": 1.99,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.069
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 129.758,
        "saikou": 2.7,
        "heikin": 1.98,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.982
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 187.23,
        "saikou": 3.24,
        "heikin": 2.35,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.187
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 187.23,
        "saikou": 4.23,
        "heikin": 2.66,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.234
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 184.713,
        "saikou": 3.59,
        "heikin": 2.37,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.297
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 184.646,
        "saikou": 3.24,
        "heikin": 2.24,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.299
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 206.122,
        "saikou": 8,
        "heikin": 2.32,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.018
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 208.112,
        "saikou": 3.59,
        "heikin": 2.21,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.584
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 208.112,
        "saikou": 4.93,
        "heikin": 2.64,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.889
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 208.112,
        "saikou": 4.93,
        "heikin": 2.82,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.759
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 208.112,
        "saikou": 4.4,
        "heikin": 2.71,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 4.077
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 208.112,
        "saikou": 4.93,
        "heikin": 2.93,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.75
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 179.064,
        "saikou": 2.34,
        "heikin": 1.75,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.631
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 208.112,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.107
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 206.312,
        "saikou": 3,
        "heikin": 2.05,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.14
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 206.312,
        "saikou": 2.29,
        "heikin": 1.53,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.198
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 97.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.888
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 97.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.838
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 97.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.792
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 97.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.799
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 97.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.802
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 97.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.797
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 93.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.818
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 68.8,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.86
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.7,
        "heikin": 1.07,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.88
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 2.71,
        "heikin": 1.32,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.931
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 2.71,
        "heikin": 1.32,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.902
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 2.71,
        "heikin": 1.32,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.866
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 84.343,
        "saikou": 2.71,
        "heikin": 1.23,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.975
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 84.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.924
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 97.343,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.855
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.879
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 185.843,
        "saikou": 1.7,
        "heikin": 0.95,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.817
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 182.843,
        "saikou": 1,
        "heikin": 0.62,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.864
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 171.843,
        "saikou": 1.99,
        "heikin": 1.21,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.107
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 2.49,
        "heikin": 1.26,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.078
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 2.49,
        "heikin": 1.26,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.117
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.025
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.7,
        "heikin": 1.08,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.08
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.7,
        "heikin": 1.01,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.1
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.07
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.093
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.094
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.7,
        "heikin": 1.17,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.108
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 137.843,
        "saikou": 1.7,
        "heikin": 1.36,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.161
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 137.843,
        "saikou": 1.7,
        "heikin": 1.36,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.084
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.54,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.154
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.19,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.213
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 102.343,
        "saikou": 1.7,
        "heikin": 1.51,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.404
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 65.343,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.539
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 63.343,
        "saikou": 3.99,
        "heikin": 2.1,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.616
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 63.343,
        "saikou": 3.99,
        "heikin": 2.12,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.613
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 64.343,
        "saikou": 3.99,
        "heikin": 2.09,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.56
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 64.343,
        "saikou": 3.99,
        "heikin": 2.06,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.577
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 63.343,
        "saikou": 3.99,
        "heikin": 2.04,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.447
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 63.343,
        "saikou": 3.99,
        "heikin": 2.04,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.48
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 64.343,
        "saikou": 5.34,
        "heikin": 2.28,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.47
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 65.343,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.463
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 97.343,
        "saikou": 1.7,
        "heikin": 1.14,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.064
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 97.343,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.96
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 97.343,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.905
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 97.343,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.967
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 96.343,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.946
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 178.998,
        "saikou": 10,
        "heikin": 6.7,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.117
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 180.922,
        "saikou": 9.71,
        "heikin": 6.47,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.839
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 180.928,
        "saikou": 9.47,
        "heikin": 6.3,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.744
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 186.875,
        "saikou": 9.31,
        "heikin": 6.19,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.648
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 186.875,
        "saikou": 9.36,
        "heikin": 6.22,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.637
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 238.875,
        "saikou": 9.76,
        "heikin": 6.96,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.854
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 261.87,
        "saikou": 10,
        "heikin": 7.08,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.066
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 260.962,
        "saikou": 10,
        "heikin": 7.22,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.597
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 259.907,
        "saikou": 10,
        "heikin": 7.27,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.812
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 246.894,
        "saikou": 10,
        "heikin": 7.27,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.131
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 257.918,
        "saikou": 10,
        "heikin": 7.12,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.258
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 257.538,
        "saikou": 9.81,
        "heikin": 6.71,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.197
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 263.514,
        "saikou": 10,
        "heikin": 7.13,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 5.848
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 263.514,
        "saikou": 9.77,
        "heikin": 6.93,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 5.167
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 263.614,
        "saikou": 9.25,
        "heikin": 7,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 4.135
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 124.614,
        "saikou": 3.8,
        "heikin": 1.39,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.673
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 141.614,
        "saikou": 3.07,
        "heikin": 1.77,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.479
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 241.614,
        "saikou": 2.27,
        "heikin": 1.81,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.43
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 225.746,
        "saikou": 0.81,
        "heikin": 0.43,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.489
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 223.822,
        "saikou": 1,
        "heikin": 0.46,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.476
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 221.859,
        "saikou": 1.12,
        "heikin": 0.48,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 3.35
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 221.859,
        "saikou": 1.04,
        "heikin": 0.48,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 3.317
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 212.707,
        "saikou": 0.81,
        "heikin": 0.45,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 3.12
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 201.229,
        "saikou": 0.99,
        "heikin": 0.48,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 3.108
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 191.353,
        "saikou": 0.97,
        "heikin": 0.46,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 2.816
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 204.805,
        "saikou": 0.76,
        "heikin": 0.43,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 2.941
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 213.93,
        "saikou": 1.06,
        "heikin": 0.47,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.576
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 218.096,
        "saikou": 1.26,
        "heikin": 0.48,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 4.165
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 220.082,
        "saikou": 1.1,
        "heikin": 0.46,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 4.052
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 220.082,
        "saikou": 2.2,
        "heikin": 1.97,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.78
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 225.658,
        "saikou": 3.07,
        "heikin": 2.47,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 5.123
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 127.634,
        "saikou": 4.77,
        "heikin": 2.74,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 5.391
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 143.732,
        "saikou": 7.77,
        "heikin": 4.6,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 6.303
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 250.732,
        "saikou": 9.74,
        "heikin": 6.88,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 6.976
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 245.769,
        "saikou": 9.03,
        "heikin": 6.37,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 7.154
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 239.52,
        "saikou": 8.64,
        "heikin": 6.12,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 7.197
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 232.555,
        "saikou": 7.55,
        "heikin": 5.35,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.151
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 234.531,
        "saikou": 8.05,
        "heikin": 5.7,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.114
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 240.773,
        "saikou": 8.64,
        "heikin": 6.08,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.822
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 244.752,
        "saikou": 8.31,
        "heikin": 5.83,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.398
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 247.764,
        "saikou": 9.16,
        "heikin": 6.2,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.648
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 240.212,
        "saikou": 8.34,
        "heikin": 5.65,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.252
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 253.68,
        "saikou": 8.16,
        "heikin": 5.4,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.168
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 251.028,
        "saikou": 6.68,
        "heikin": 4.32,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 6.037
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 256.977,
        "saikou": 6.36,
        "heikin": 4.1,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 6.214
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 258.177,
        "saikou": 5.89,
        "heikin": 3.78,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 5.949
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 258.177,
        "saikou": 5.34,
        "heikin": 3.4,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 5.772
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 153.277,
        "saikou": 3.19,
        "heikin": 2.11,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 5.163
      }
    ]
  }
};
