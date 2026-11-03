// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/04〜2026/11/02）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-03",
  "fetchedAt": "2026-11-03",
  "avgWindowLabel": "過去30日平均（2026/10/04〜2026/11/02）",
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
      "ouatsu": 1519.72,
      "saikou": 8.44,
      "heikin": 2.12,
      "boshuAvg30d": 1043.5,
      "heikinAvg30d": 3.045
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1175,
      "ouatsu": 1614.156,
      "saikou": 8.15,
      "heikin": 2.4,
      "boshuAvg30d": 1043.5,
      "heikinAvg30d": 2.912
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1175,
      "ouatsu": 1656.973,
      "saikou": 10,
      "heikin": 2.15,
      "boshuAvg30d": 1043.5,
      "heikinAvg30d": 2.823
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1174,
      "ouatsu": 1715.386,
      "saikou": 10,
      "heikin": 1.69,
      "boshuAvg30d": 1043.4,
      "heikinAvg30d": 2.794
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1168,
      "ouatsu": 1721.305,
      "saikou": 10,
      "heikin": 1.76,
      "boshuAvg30d": 1040.2,
      "heikinAvg30d": 2.848
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1168,
      "ouatsu": 1710.429,
      "saikou": 9.57,
      "heikin": 2.31,
      "boshuAvg30d": 1039.3,
      "heikinAvg30d": 2.877
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1165,
      "ouatsu": 1955.72,
      "saikou": 9.08,
      "heikin": 2.21,
      "boshuAvg30d": 1039.1,
      "heikinAvg30d": 3.082
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1169,
      "ouatsu": 1964.877,
      "saikou": 9.82,
      "heikin": 2.61,
      "boshuAvg30d": 1041.3,
      "heikinAvg30d": 3.321
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1169,
      "ouatsu": 1908.579,
      "saikou": 9.95,
      "heikin": 2.68,
      "boshuAvg30d": 1043.1,
      "heikinAvg30d": 3.368
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1171,
      "ouatsu": 1941.588,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1044.2,
      "heikinAvg30d": 3.564
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1171,
      "ouatsu": 1908.207,
      "saikou": 9.96,
      "heikin": 2.63,
      "boshuAvg30d": 1044.2,
      "heikinAvg30d": 3.571
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1171,
      "ouatsu": 1875.705,
      "saikou": 9.98,
      "heikin": 2.69,
      "boshuAvg30d": 1044.2,
      "heikinAvg30d": 3.545
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1230,
      "ouatsu": 1853.313,
      "saikou": 9.98,
      "heikin": 2.8,
      "boshuAvg30d": 1104.1,
      "heikinAvg30d": 3.591
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1255,
      "ouatsu": 1767.122,
      "saikou": 9.91,
      "heikin": 3.26,
      "boshuAvg30d": 1127.3,
      "heikinAvg30d": 3.516
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1274,
      "ouatsu": 1683.928,
      "saikou": 10,
      "heikin": 3.69,
      "boshuAvg30d": 1148.1,
      "heikinAvg30d": 3.155
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1289,
      "ouatsu": 1714.628,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1165.3,
      "heikinAvg30d": 2.864
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1289,
      "ouatsu": 1794.62,
      "saikou": 10,
      "heikin": 2.42,
      "boshuAvg30d": 1165.7,
      "heikinAvg30d": 2.843
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1289,
      "ouatsu": 1854.431,
      "saikou": 10,
      "heikin": 3.13,
      "boshuAvg30d": 1169.5,
      "heikinAvg30d": 2.789
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1218,
      "ouatsu": 1747.543,
      "saikou": 10,
      "heikin": 1.88,
      "boshuAvg30d": 1125.7,
      "heikinAvg30d": 2.957
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1223,
      "ouatsu": 1778.946,
      "saikou": 10,
      "heikin": 2.01,
      "boshuAvg30d": 1128.8,
      "heikinAvg30d": 2.998
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1227,
      "ouatsu": 1704.621,
      "saikou": 10,
      "heikin": 2.23,
      "boshuAvg30d": 1131.5,
      "heikinAvg30d": 3.007
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1231,
      "ouatsu": 1735.035,
      "saikou": 9.91,
      "heikin": 1.67,
      "boshuAvg30d": 1131.8,
      "heikinAvg30d": 2.984
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1225,
      "ouatsu": 1643.147,
      "saikou": 9.49,
      "heikin": 1.58,
      "boshuAvg30d": 1128.6,
      "heikinAvg30d": 2.957
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1225,
      "ouatsu": 1630.963,
      "saikou": 10,
      "heikin": 2.14,
      "boshuAvg30d": 1127.7,
      "heikinAvg30d": 2.931
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1206,
      "ouatsu": 1701.84,
      "saikou": 10,
      "heikin": 1.79,
      "boshuAvg30d": 1107.4,
      "heikinAvg30d": 2.777
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1206,
      "ouatsu": 1711.224,
      "saikou": 10,
      "heikin": 1.84,
      "boshuAvg30d": 1107.4,
      "heikinAvg30d": 2.79
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1206,
      "ouatsu": 1768.827,
      "saikou": 10,
      "heikin": 2.38,
      "boshuAvg30d": 1107.4,
      "heikinAvg30d": 2.966
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1202,
      "ouatsu": 1768.474,
      "saikou": 10,
      "heikin": 2.08,
      "boshuAvg30d": 1104.9,
      "heikinAvg30d": 3.072
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1201,
      "ouatsu": 1809.696,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1102.1,
      "heikinAvg30d": 3.065
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1195,
      "ouatsu": 1788.916,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1096.1,
      "heikinAvg30d": 3.189
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1266,
      "ouatsu": 1882.499,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1145.2,
      "heikinAvg30d": 3.26
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1266,
      "ouatsu": 1526.294,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1144.9,
      "heikinAvg30d": 3.407
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1266,
      "ouatsu": 1736.591,
      "saikou": 10,
      "heikin": 3.06,
      "boshuAvg30d": 1145.5,
      "heikinAvg30d": 3.803
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1264,
      "ouatsu": 1705.103,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1144.4,
      "heikinAvg30d": 4.043
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1262,
      "ouatsu": 1642.63,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1136.1,
      "heikinAvg30d": 3.962
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1257,
      "ouatsu": 1756.578,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1131.1,
      "heikinAvg30d": 4.017
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1253,
      "ouatsu": 1785.429,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1125.2,
      "heikinAvg30d": 3.836
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1253,
      "ouatsu": 1787.22,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1125.2,
      "heikinAvg30d": 3.812
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1253,
      "ouatsu": 1895.027,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1125.2,
      "heikinAvg30d": 3.626
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1251,
      "ouatsu": 1900.763,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1124.5,
      "heikinAvg30d": 3.447
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1244,
      "ouatsu": 1919.325,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1116.5,
      "heikinAvg30d": 3.416
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1244,
      "ouatsu": 1815.533,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1116.5,
      "heikinAvg30d": 3.318
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1155,
      "ouatsu": 1889.583,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1038.1,
      "heikinAvg30d": 3.232
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1158,
      "ouatsu": 1894.879,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1041.1,
      "heikinAvg30d": 3.238
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1157,
      "ouatsu": 1964.209,
      "saikou": 10,
      "heikin": 3.01,
      "boshuAvg30d": 1044.9,
      "heikinAvg30d": 3.247
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1150,
      "ouatsu": 2023.653,
      "saikou": 9.45,
      "heikin": 3.16,
      "boshuAvg30d": 1036.8,
      "heikinAvg30d": 3.083
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1142,
      "ouatsu": 2040.697,
      "saikou": 8.76,
      "heikin": 2.68,
      "boshuAvg30d": 1028.2,
      "heikinAvg30d": 3.165
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1134,
      "ouatsu": 1693.012,
      "saikou": 10,
      "heikin": 1.64,
      "boshuAvg30d": 1020.5,
      "heikinAvg30d": 2.922
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
        "saikou": 2.5,
        "heikin": 2.44,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.158
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 117.908,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.12
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 113.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.027
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 139.558,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 3.905
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 117.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.255
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 113.968,
        "saikou": 4.22,
        "heikin": 1.15,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 3.916
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 165.718,
        "saikou": 2.38,
        "heikin": 2.35,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.187
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 256.458,
        "saikou": 3.88,
        "heikin": 3,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.276
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 218.408,
        "saikou": 3.88,
        "heikin": 3.11,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.338
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 254.468,
        "saikou": 3.88,
        "heikin": 3.05,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.19
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 218.408,
        "saikou": 3.88,
        "heikin": 3.03,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.451
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 216.458,
        "saikou": 3.88,
        "heikin": 3.1,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.559
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 255.408,
        "saikou": 3.89,
        "heikin": 3.45,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.348
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 152.468,
        "saikou": 9.91,
        "heikin": 4.35,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.42
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 165.408,
        "saikou": 8.67,
        "heikin": 3.63,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.884
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 193.458,
        "saikou": 9.91,
        "heikin": 4.68,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.884
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 153.908,
        "saikou": 9.44,
        "heikin": 3.18,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.03
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 188.468,
        "saikou": 9.91,
        "heikin": 4.57,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.315
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 153.908,
        "saikou": 6.95,
        "heikin": 2.68,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.492
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 151.458,
        "saikou": 9.91,
        "heikin": 4.97,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.399
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 114.908,
        "saikou": 6.5,
        "heikin": 2.86,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.984
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 153.968,
        "saikou": 9.91,
        "heikin": 4.85,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.05
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 112.918,
        "saikou": 7.2,
        "heikin": 3.05,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.95
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 110.968,
        "saikou": 7,
        "heikin": 2.93,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.783
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 161.258,
        "saikou": 9.91,
        "heikin": 5.36,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.626
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 198.268,
        "saikou": 9.91,
        "heikin": 4.68,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.576
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 168.768,
        "saikou": 9.91,
        "heikin": 3.36,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.31
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 149.968,
        "saikou": 9.44,
        "heikin": 2.87,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.84
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 192.318,
        "saikou": 9.91,
        "heikin": 3.59,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 3.882
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 163.958,
        "saikou": 6.99,
        "heikin": 2.67,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.863
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 154.708,
        "saikou": 9.91,
        "heikin": 4.16,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 4.057
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 128.968,
        "saikou": 8.79,
        "heikin": 1.93,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 4.997
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 201.908,
        "saikou": 5.01,
        "heikin": 4.89,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 6.095
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 194.99,
        "saikou": 6.26,
        "heikin": 6.19,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 6.233
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 141.908,
        "saikou": 5.42,
        "heikin": 5.29,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 5.692
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 186.29,
        "saikou": 5.42,
        "heikin": 5.36,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 5.901
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 164.918,
        "saikou": 5.42,
        "heikin": 5.29,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 5.555
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 173.958,
        "saikou": 3.75,
        "heikin": 3.65,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 5.668
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 234.208,
        "saikou": 3.75,
        "heikin": 3.65,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 5.443
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 208.958,
        "saikou": 3.75,
        "heikin": 3.67,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 5.313
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 238.218,
        "saikou": 3.75,
        "heikin": 3.65,
        "boshuAvg30d": 46.3,
        "heikinAvg30d": 5.021
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 161.968,
        "saikou": 3.75,
        "heikin": 3.65,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 4.446
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 206.908,
        "saikou": 3.88,
        "heikin": 2.46,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 4.606
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 193.958,
        "saikou": 4.58,
        "heikin": 4.37,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.633
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 230.138,
        "saikou": 3.88,
        "heikin": 2.31,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.742
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 191.968,
        "saikou": 3.88,
        "heikin": 3.21,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.342
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 242.218,
        "saikou": 3.8,
        "heikin": 2.64,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.611
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 115.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.057
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 42.95,
        "saikou": 7.92,
        "heikin": 4.71,
        "boshuAvg30d": 115.5,
        "heikinAvg30d": 5.547
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 42.95,
        "saikou": 7.89,
        "heikin": 4.61,
        "boshuAvg30d": 115.5,
        "heikinAvg30d": 5.674
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 74.828,
        "saikou": 10,
        "heikin": 5.04,
        "boshuAvg30d": 115.5,
        "heikinAvg30d": 5.665
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 75.438,
        "saikou": 10,
        "heikin": 5.31,
        "boshuAvg30d": 115.5,
        "heikinAvg30d": 5.624
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 73.49,
        "saikou": 10,
        "heikin": 5.08,
        "boshuAvg30d": 115.5,
        "heikinAvg30d": 5.593
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 62.82,
        "saikou": 9.57,
        "heikin": 5.04,
        "boshuAvg30d": 115.5,
        "heikinAvg30d": 5.552
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 89.788,
        "saikou": 7.89,
        "heikin": 6.3,
        "boshuAvg30d": 117.4,
        "heikinAvg30d": 5.492
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 91.288,
        "saikou": 7.85,
        "heikin": 5.23,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 5.416
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 95.286,
        "saikou": 7.81,
        "heikin": 4.79,
        "boshuAvg30d": 117.4,
        "heikinAvg30d": 5.218
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 107.286,
        "saikou": 7.63,
        "heikin": 4.78,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 5.232
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 107.286,
        "saikou": 7.85,
        "heikin": 5.66,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 5.493
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 107.286,
        "saikou": 7.75,
        "heikin": 5.04,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 5.588
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 107.286,
        "saikou": 7.45,
        "heikin": 4.44,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 5.866
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 105.786,
        "saikou": 7.89,
        "heikin": 4.85,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 5.966
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 107.286,
        "saikou": 10,
        "heikin": 6.28,
        "boshuAvg30d": 132.4,
        "heikinAvg30d": 6.268
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 105.786,
        "saikou": 10,
        "heikin": 6.45,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 6.385
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 107.286,
        "saikou": 10,
        "heikin": 4.8,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 6.461
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 105.786,
        "saikou": 10,
        "heikin": 5.58,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 6.504
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 110.612,
        "saikou": 10,
        "heikin": 4.28,
        "boshuAvg30d": 78.3,
        "heikinAvg30d": 6.384
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 106.782,
        "saikou": 10,
        "heikin": 4.79,
        "boshuAvg30d": 78.4,
        "heikinAvg30d": 6.532
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 102.927,
        "saikou": 10,
        "heikin": 4.85,
        "boshuAvg30d": 77.5,
        "heikinAvg30d": 6.547
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 89.477,
        "saikou": 7.17,
        "heikin": 5.3,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 6.692
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 92.781,
        "saikou": 7.41,
        "heikin": 5.08,
        "boshuAvg30d": 78.5,
        "heikinAvg30d": 6.685
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 104.781,
        "saikou": 10,
        "heikin": 5.73,
        "boshuAvg30d": 78.5,
        "heikinAvg30d": 6.695
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 119.285,
        "saikou": 10,
        "heikin": 7.01,
        "boshuAvg30d": 74.5,
        "heikinAvg30d": 6.656
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 104.786,
        "saikou": 10,
        "heikin": 7,
        "boshuAvg30d": 74.5,
        "heikinAvg30d": 6.622
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 110.612,
        "saikou": 10,
        "heikin": 5.25,
        "boshuAvg30d": 74.5,
        "heikinAvg30d": 6.011
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 106.782,
        "saikou": 10,
        "heikin": 5.51,
        "boshuAvg30d": 73.5,
        "heikinAvg30d": 5.952
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 106.782,
        "saikou": 10,
        "heikin": 5.23,
        "boshuAvg30d": 73.5,
        "heikinAvg30d": 6.021
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 106.782,
        "saikou": 10,
        "heikin": 4.58,
        "boshuAvg30d": 71.5,
        "heikinAvg30d": 5.342
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 85.282,
        "saikou": 3.26,
        "heikin": 2.59,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 5.324
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 85.282,
        "saikou": 10,
        "heikin": 4.54,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 4.534
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 85.282,
        "saikou": 5.11,
        "heikin": 3.48,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 4.32
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 105.781,
        "saikou": 3.87,
        "heikin": 2.53,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 4.351
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 109.282,
        "saikou": 4.99,
        "heikin": 3.3,
        "boshuAvg30d": 132.4,
        "heikinAvg30d": 4.39
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 107.782,
        "saikou": 4.7,
        "heikin": 2.57,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 4.189
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 107.286,
        "saikou": 4.7,
        "heikin": 2.44,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 3.928
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 105.786,
        "saikou": 3.93,
        "heikin": 2.31,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 3.483
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 105.285,
        "saikou": 3.56,
        "heikin": 2.4,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 3.477
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 107.286,
        "saikou": 4.43,
        "heikin": 2.38,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 3.803
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 103.331,
        "saikou": 4.7,
        "heikin": 2.53,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 3.769
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 103.331,
        "saikou": 4.7,
        "heikin": 2.52,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 3.97
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 95.286,
        "saikou": 1.99,
        "heikin": 1.82,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 4.204
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 80.786,
        "saikou": 5.53,
        "heikin": 4.05,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 4.069
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 91.456,
        "saikou": 6.4,
        "heikin": 4.88,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 4.055
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 80.786,
        "saikou": 7.13,
        "heikin": 5.57,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.401
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 95.286,
        "saikou": 7.78,
        "heikin": 6.2,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.428
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 79.22,
        "saikou": 10,
        "heikin": 7.13,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 5.011
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 283,
        "ouatsu": 461.354,
        "saikou": 2.19,
        "heikin": 1.44,
        "boshuAvg30d": 236.1,
        "heikinAvg30d": 3.517
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 283,
        "ouatsu": 509.682,
        "saikou": 7.09,
        "heikin": 3.02,
        "boshuAvg30d": 236.1,
        "heikinAvg30d": 3.394
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 283,
        "ouatsu": 531.955,
        "saikou": 6.91,
        "heikin": 2.44,
        "boshuAvg30d": 236.1,
        "heikinAvg30d": 3.23
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 283,
        "ouatsu": 541.277,
        "saikou": 6.21,
        "heikin": 1.64,
        "boshuAvg30d": 236.1,
        "heikinAvg30d": 3.274
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 281,
        "ouatsu": 546.4,
        "saikou": 6.25,
        "heikin": 1.88,
        "boshuAvg30d": 235.1,
        "heikinAvg30d": 3.298
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 281,
        "ouatsu": 562.14,
        "saikou": 7.24,
        "heikin": 2.07,
        "boshuAvg30d": 234.1,
        "heikinAvg30d": 3.086
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 279,
        "ouatsu": 548.255,
        "saikou": 3.2,
        "heikin": 1.27,
        "boshuAvg30d": 232.1,
        "heikinAvg30d": 3.369
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 281,
        "ouatsu": 548.682,
        "saikou": 3,
        "heikin": 1.62,
        "boshuAvg30d": 234.1,
        "heikinAvg30d": 3.513
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 281,
        "ouatsu": 531.846,
        "saikou": 7.21,
        "heikin": 1.63,
        "boshuAvg30d": 234.1,
        "heikinAvg30d": 3.482
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 282,
        "ouatsu": 526.902,
        "saikou": 2.95,
        "heikin": 1.01,
        "boshuAvg30d": 235.1,
        "heikinAvg30d": 3.688
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 282,
        "ouatsu": 527.591,
        "saikou": 3.12,
        "heikin": 1.43,
        "boshuAvg30d": 235.1,
        "heikinAvg30d": 3.496
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 282,
        "ouatsu": 505.799,
        "saikou": 7.22,
        "heikin": 1.67,
        "boshuAvg30d": 235.1,
        "heikinAvg30d": 3.699
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 302,
        "ouatsu": 461.053,
        "saikou": 6.44,
        "heikin": 2.01,
        "boshuAvg30d": 254.2,
        "heikinAvg30d": 3.722
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 310,
        "ouatsu": 475.435,
        "saikou": 7.45,
        "heikin": 3.06,
        "boshuAvg30d": 262.2,
        "heikinAvg30d": 3.995
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 314,
        "ouatsu": 430.755,
        "saikou": 10,
        "heikin": 5.13,
        "boshuAvg30d": 267.1,
        "heikinAvg30d": 3.593
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 319,
        "ouatsu": 454.339,
        "saikou": 7.09,
        "heikin": 2.61,
        "boshuAvg30d": 272.5,
        "heikinAvg30d": 3.226
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 319,
        "ouatsu": 473.436,
        "saikou": 8.05,
        "heikin": 1.97,
        "boshuAvg30d": 272.8,
        "heikinAvg30d": 3.059
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 319,
        "ouatsu": 521.929,
        "saikou": 10,
        "heikin": 3.78,
        "boshuAvg30d": 276.7,
        "heikinAvg30d": 3.08
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 309,
        "ouatsu": 516.083,
        "saikou": 5.65,
        "heikin": 1.42,
        "boshuAvg30d": 268.5,
        "heikinAvg30d": 3.052
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 309,
        "ouatsu": 504.319,
        "saikou": 3,
        "heikin": 1.5,
        "boshuAvg30d": 268.5,
        "heikinAvg30d": 3.135
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 309,
        "ouatsu": 465.873,
        "saikou": 10,
        "heikin": 2.65,
        "boshuAvg30d": 269.2,
        "heikinAvg30d": 3.102
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 309,
        "ouatsu": 465.873,
        "saikou": 1.49,
        "heikin": 0.77,
        "boshuAvg30d": 268.2,
        "heikinAvg30d": 3.105
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 306,
        "ouatsu": 438.908,
        "saikou": 3,
        "heikin": 1.29,
        "boshuAvg30d": 266.2,
        "heikinAvg30d": 3.114
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 306,
        "ouatsu": 427.456,
        "saikou": 10,
        "heikin": 3.06,
        "boshuAvg30d": 266.2,
        "heikinAvg30d": 3.092
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 304,
        "ouatsu": 457.659,
        "saikou": 5.2,
        "heikin": 0.68,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 2.929
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 304,
        "ouatsu": 465.509,
        "saikou": 5.2,
        "heikin": 1.23,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 2.892
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 304,
        "ouatsu": 467.67,
        "saikou": 10,
        "heikin": 2.92,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 3.102
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 304,
        "ouatsu": 458.362,
        "saikou": 7.15,
        "heikin": 1.26,
        "boshuAvg30d": 262.6,
        "heikinAvg30d": 3.141
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 303,
        "ouatsu": 473.739,
        "saikou": 7.36,
        "heikin": 3.25,
        "boshuAvg30d": 261.6,
        "heikinAvg30d": 2.999
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 303,
        "ouatsu": 546.92,
        "saikou": 7.13,
        "heikin": 3.55,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.851
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 301,
        "ouatsu": 541.016,
        "saikou": 6.56,
        "heikin": 2.26,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.821
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 301,
        "ouatsu": 451.755,
        "saikou": 6.98,
        "heikin": 2.82,
        "boshuAvg30d": 258.3,
        "heikinAvg30d": 2.8
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 301,
        "ouatsu": 543.612,
        "saikou": 7.11,
        "heikin": 2.72,
        "boshuAvg30d": 258.0,
        "heikinAvg30d": 2.798
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 301,
        "ouatsu": 548.846,
        "saikou": 5.88,
        "heikin": 1.86,
        "boshuAvg30d": 258.0,
        "heikinAvg30d": 2.799
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 301,
        "ouatsu": 524.064,
        "saikou": 6.64,
        "heikin": 2.43,
        "boshuAvg30d": 256.0,
        "heikinAvg30d": 2.667
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 301,
        "ouatsu": 560.725,
        "saikou": 6.64,
        "heikin": 2.42,
        "boshuAvg30d": 256.0,
        "heikinAvg30d": 2.675
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 303,
        "ouatsu": 589.616,
        "saikou": 6.65,
        "heikin": 2.44,
        "boshuAvg30d": 257.9,
        "heikinAvg30d": 2.881
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 303,
        "ouatsu": 587.994,
        "saikou": 6.51,
        "heikin": 2.39,
        "boshuAvg30d": 257.9,
        "heikinAvg30d": 2.662
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 303,
        "ouatsu": 578.76,
        "saikou": 5.24,
        "heikin": 1.57,
        "boshuAvg30d": 257.9,
        "heikinAvg30d": 2.747
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 303,
        "ouatsu": 590.087,
        "saikou": 6.64,
        "heikin": 2.48,
        "boshuAvg30d": 258.3,
        "heikinAvg30d": 2.517
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 302,
        "ouatsu": 580.384,
        "saikou": 6.67,
        "heikin": 2.38,
        "boshuAvg30d": 256.3,
        "heikinAvg30d": 2.496
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 302,
        "ouatsu": 575.281,
        "saikou": 6.67,
        "heikin": 2.35,
        "boshuAvg30d": 256.3,
        "heikinAvg30d": 2.694
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 301,
        "ouatsu": 543.702,
        "saikou": 6.67,
        "heikin": 2.4,
        "boshuAvg30d": 256.3,
        "heikinAvg30d": 2.403
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 301,
        "ouatsu": 547.22,
        "saikou": 6.48,
        "heikin": 2.35,
        "boshuAvg30d": 256.3,
        "heikinAvg30d": 2.463
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 301,
        "ouatsu": 583.491,
        "saikou": 6.64,
        "heikin": 2.57,
        "boshuAvg30d": 259.3,
        "heikinAvg30d": 2.422
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 299,
        "ouatsu": 667.165,
        "saikou": 6.69,
        "heikin": 2.9,
        "boshuAvg30d": 254.3,
        "heikinAvg30d": 2.514
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 297,
        "ouatsu": 584.431,
        "saikou": 6.47,
        "heikin": 2.21,
        "boshuAvg30d": 252.6,
        "heikinAvg30d": 3.048
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 296,
        "ouatsu": 517.363,
        "saikou": 2.53,
        "heikin": 1.04,
        "boshuAvg30d": 250.9,
        "heikinAvg30d": 3.139
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 181,
        "ouatsu": 221.451,
        "saikou": 4.88,
        "heikin": 1.5,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.653
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 181,
        "ouatsu": 247.692,
        "saikou": 4.88,
        "heikin": 1.9,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.513
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 181,
        "ouatsu": 268.903,
        "saikou": 5.02,
        "heikin": 2.05,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.537
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 180,
        "ouatsu": 278.809,
        "saikou": 4.88,
        "heikin": 2,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.595
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 180,
        "ouatsu": 286.786,
        "saikou": 4.88,
        "heikin": 1.77,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.571
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 179,
        "ouatsu": 284.802,
        "saikou": 5.16,
        "heikin": 1.99,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.546
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 178,
        "ouatsu": 306.779,
        "saikou": 4.88,
        "heikin": 1.64,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 1.426
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 178,
        "ouatsu": 281.491,
        "saikou": 4.88,
        "heikin": 1.95,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 1.492
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 178,
        "ouatsu": 285.207,
        "saikou": 3.03,
        "heikin": 1.42,
        "boshuAvg30d": 103.1,
        "heikinAvg30d": 1.459
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 178,
        "ouatsu": 273.137,
        "saikou": 8.88,
        "heikin": 1.9,
        "boshuAvg30d": 103.1,
        "heikinAvg30d": 1.432
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 178,
        "ouatsu": 275.127,
        "saikou": 8.88,
        "heikin": 1.9,
        "boshuAvg30d": 103.1,
        "heikinAvg30d": 1.413
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 178,
        "ouatsu": 271.643,
        "saikou": 3.13,
        "heikin": 1.29,
        "boshuAvg30d": 103.1,
        "heikinAvg30d": 1.363
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 188,
        "ouatsu": 275.127,
        "saikou": 3.37,
        "heikin": 1.89,
        "boshuAvg30d": 112.2,
        "heikinAvg30d": 1.595
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 193,
        "ouatsu": 275.127,
        "saikou": 8.88,
        "heikin": 1.95,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.647
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 196,
        "ouatsu": 267.023,
        "saikou": 8.88,
        "heikin": 3.09,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 1.895
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 267.507,
        "saikou": 9.06,
        "heikin": 3.38,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 1.981
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 187.452,
        "saikou": 8.88,
        "heikin": 2.15,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 2.036
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 183.474,
        "saikou": 8.88,
        "heikin": 2.25,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 2.186
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 203,
        "ouatsu": 162.154,
        "saikou": 9.49,
        "heikin": 1.97,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.667
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 203,
        "ouatsu": 164.054,
        "saikou": 9.49,
        "heikin": 1.97,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.688
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 203,
        "ouatsu": 152.165,
        "saikou": 9.49,
        "heikin": 2.07,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.811
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 203,
        "ouatsu": 157.484,
        "saikou": 9.49,
        "heikin": 2.05,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.802
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 202,
        "ouatsu": 156.283,
        "saikou": 9.49,
        "heikin": 1.98,
        "boshuAvg30d": 125.2,
        "heikinAvg30d": 2.658
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 201,
        "ouatsu": 147.425,
        "saikou": 9.49,
        "heikin": 1.99,
        "boshuAvg30d": 124.2,
        "heikinAvg30d": 2.697
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 197,
        "ouatsu": 140.682,
        "saikou": 9.49,
        "heikin": 2.48,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.611
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 197,
        "ouatsu": 123.527,
        "saikou": 9.49,
        "heikin": 2,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.569
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 197,
        "ouatsu": 159.376,
        "saikou": 9.49,
        "heikin": 1.97,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.638
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 197,
        "ouatsu": 186.745,
        "saikou": 9.49,
        "heikin": 1.81,
        "boshuAvg30d": 119.3,
        "heikinAvg30d": 2.724
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 197,
        "ouatsu": 168.554,
        "saikou": 9.49,
        "heikin": 2.02,
        "boshuAvg30d": 119.3,
        "heikinAvg30d": 2.956
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 197,
        "ouatsu": 186.691,
        "saikou": 9.38,
        "heikin": 2.38,
        "boshuAvg30d": 119.3,
        "heikinAvg30d": 2.864
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 195,
        "ouatsu": 224.177,
        "saikou": 9.38,
        "heikin": 2.78,
        "boshuAvg30d": 117.3,
        "heikinAvg30d": 2.741
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 195,
        "ouatsu": 163.145,
        "saikou": 9.38,
        "heikin": 3.23,
        "boshuAvg30d": 117.3,
        "heikinAvg30d": 2.876
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 195,
        "ouatsu": 224.778,
        "saikou": 9.38,
        "heikin": 2.53,
        "boshuAvg30d": 117.3,
        "heikinAvg30d": 2.759
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 194,
        "ouatsu": 203.393,
        "saikou": 9.38,
        "heikin": 2.81,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.772
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 194,
        "ouatsu": 206.193,
        "saikou": 9.38,
        "heikin": 2.32,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.615
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 193,
        "ouatsu": 211.814,
        "saikou": 9.38,
        "heikin": 2.18,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 2.514
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 191,
        "ouatsu": 237.188,
        "saikou": 9.38,
        "heikin": 1.97,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.126
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 191,
        "ouatsu": 242.167,
        "saikou": 9.38,
        "heikin": 2.04,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.045
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 191,
        "ouatsu": 259.884,
        "saikou": 9.38,
        "heikin": 1.91,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.741
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 191,
        "ouatsu": 277.563,
        "saikou": 9.38,
        "heikin": 1.93,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.604
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 191,
        "ouatsu": 274.654,
        "saikou": 9.42,
        "heikin": 1.85,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.501
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 191,
        "ouatsu": 271.476,
        "saikou": 9.42,
        "heikin": 1.8,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.546
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 193,
        "ouatsu": 280.385,
        "saikou": 9.42,
        "heikin": 1.81,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 1.485
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 193,
        "ouatsu": 283.385,
        "saikou": 9.42,
        "heikin": 1.95,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.744
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 193,
        "ouatsu": 317.822,
        "saikou": 9.42,
        "heikin": 2.2,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.7
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 337.632,
        "saikou": 9.42,
        "heikin": 2.43,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 1.77
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 190,
        "ouatsu": 334.432,
        "saikou": 4.88,
        "heikin": 2.2,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.659
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 187,
        "ouatsu": 336.369,
        "saikou": 3.49,
        "heikin": 1.77,
        "boshuAvg30d": 111.2,
        "heikinAvg30d": 1.779
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
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.272
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 2.05,
        "heikin": 0.49,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.255
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 61.93,
        "saikou": 1.85,
        "heikin": 0.44,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.266
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 61.93,
        "saikou": 2.25,
        "heikin": 0.45,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.144
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 63.928,
        "saikou": 1.75,
        "heikin": 0.46,
        "boshuAvg30d": 57.2,
        "heikinAvg30d": 1.306
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.329
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 1.83,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.747
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.93,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 2.1
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 1.963
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.5,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 2.014
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.07,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 2.094
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 57.3,
        "heikinAvg30d": 2.066
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.056
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.144
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.75,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.421
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.25,
        "heikin": 2.82,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.087
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 82.928,
        "saikou": 3.65,
        "heikin": 0.54,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.17
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 61.168,
        "saikou": 3.3,
        "heikin": 0.57,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.97
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 3.2,
        "heikin": 0.52,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.371
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 3.7,
        "heikin": 0.55,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.758
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 5.55,
        "heikin": 1.3,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 4.499
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 6.96,
        "heikin": 1.13,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 4.648
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 4.8,
        "heikin": 0.6,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 3.62
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 4.8,
        "heikin": 0.59,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 3.384
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 5.2,
        "heikin": 0.62,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.634
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 4.55,
        "heikin": 0.58,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.321
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 5.95,
        "heikin": 1.21,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.938
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 5.09,
        "heikin": 4.48,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.074
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 6,
        "heikin": 5.44,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.724
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 47.928,
        "saikou": 5.6,
        "heikin": 4.91,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.675
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 82.928,
        "saikou": 9.9,
        "heikin": 9.34,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 4.654
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 45.604,
        "saikou": 7.25,
        "heikin": 5.83,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 5.55
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 4.45,
        "heikin": 4.02,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 4.456
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 4.05,
        "heikin": 3.32,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 4.052
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 4.2,
        "heikin": 3.23,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 3.72
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 4.2,
        "heikin": 3.35,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 4.218
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.37,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.425
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.75,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 4.011
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.2,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.129
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.45,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.122
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.32,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.641
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 3.1,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.328
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.65,
        "heikin": 3.22,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.404
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 2.84,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.387
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.62,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.651
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.57,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.196
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.32,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.979
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.43,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.535
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 125,
        "ouatsu": 78.129,
        "saikou": 1.44,
        "heikin": 1.22,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 1.264
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 125,
        "ouatsu": 124.082,
        "saikou": 1.69,
        "heikin": 0.93,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 1.039
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 125,
        "ouatsu": 98.645,
        "saikou": 1.69,
        "heikin": 0.69,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 1.025
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 125,
        "ouatsu": 143.642,
        "saikou": 1.69,
        "heikin": 0.8,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 1.001
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 151.061,
        "saikou": 1.69,
        "heikin": 0.85,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 0.986
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 134.039,
        "saikou": 1.99,
        "heikin": 1.09,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.189
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 124,
        "ouatsu": 164.146,
        "saikou": 1.99,
        "heikin": 1,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.303
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 121.295,
        "saikou": 1.99,
        "heikin": 1.49,
        "boshuAvg30d": 131.1,
        "heikinAvg30d": 1.488
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 125,
        "ouatsu": 101.681,
        "saikou": 1.94,
        "heikin": 1.66,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 1.449
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 125,
        "ouatsu": 101.681,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 1.505
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 125,
        "ouatsu": 101.681,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 1.478
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 125,
        "ouatsu": 101.681,
        "saikou": 1.5,
        "heikin": 1.44,
        "boshuAvg30d": 132.1,
        "heikinAvg30d": 1.407
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 135,
        "ouatsu": 101.681,
        "saikou": 1.44,
        "heikin": 1.38,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.503
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 139,
        "ouatsu": 105.548,
        "saikou": 1.6,
        "heikin": 1.44,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 1.481
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 144,
        "ouatsu": 105.598,
        "saikou": 2,
        "heikin": 1.7,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.512
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 99.562,
        "saikou": 2.09,
        "heikin": 1.83,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 1.588
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 99.562,
        "saikou": 2.09,
        "heikin": 1.84,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 1.61
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 105.548,
        "saikou": 3.94,
        "heikin": 2.83,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.088
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 103.55,
        "saikou": 3,
        "heikin": 2.48,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 2.18
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 148,
        "ouatsu": 149.107,
        "saikou": 3.94,
        "heikin": 2.1,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 2.221
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 148,
        "ouatsu": 165.522,
        "saikou": 5.94,
        "heikin": 2.01,
        "boshuAvg30d": 159.4,
        "heikinAvg30d": 2.26
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 147,
        "ouatsu": 166.97,
        "saikou": 5.94,
        "heikin": 1.97,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 2.419
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 145,
        "ouatsu": 145.794,
        "saikou": 5.94,
        "heikin": 2.14,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 2.452
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 146,
        "ouatsu": 145.794,
        "saikou": 3,
        "heikin": 1.84,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 2.2
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 144,
        "ouatsu": 132.237,
        "saikou": 3,
        "heikin": 1.49,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 1.995
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 144,
        "ouatsu": 132.237,
        "saikou": 3,
        "heikin": 1.45,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.105
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 144,
        "ouatsu": 147.237,
        "saikou": 5.94,
        "heikin": 2.06,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.449
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 144,
        "ouatsu": 147.237,
        "saikou": 3,
        "heikin": 1.6,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.26
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 144,
        "ouatsu": 147.237,
        "saikou": 4.44,
        "heikin": 1.94,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.284
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 144,
        "ouatsu": 147.237,
        "saikou": 3,
        "heikin": 1.71,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.078
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 144,
        "ouatsu": 149.107,
        "saikou": 3.96,
        "heikin": 3.05,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 2.347
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 144,
        "ouatsu": 105.548,
        "saikou": 3.94,
        "heikin": 2.8,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 2.556
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 144,
        "ouatsu": 105.548,
        "saikou": 3.94,
        "heikin": 2.85,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 2.495
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 144,
        "ouatsu": 84.562,
        "saikou": 2.38,
        "heikin": 2.07,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 2.133
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 144,
        "ouatsu": 99.562,
        "saikou": 2.5,
        "heikin": 2.22,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.177
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 143,
        "ouatsu": 84.562,
        "saikou": 2.5,
        "heikin": 2.25,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 2.436
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 141,
        "ouatsu": 96.159,
        "saikou": 1.95,
        "heikin": 1.73,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 1.886
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 141,
        "ouatsu": 96.159,
        "saikou": 1.94,
        "heikin": 1.7,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 1.922
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 141,
        "ouatsu": 105.548,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 1.786
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 140,
        "ouatsu": 105.548,
        "saikou": 1.99,
        "heikin": 1.74,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 1.756
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 139,
        "ouatsu": 103.563,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.681
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 140,
        "ouatsu": 99.696,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.703
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 140,
        "ouatsu": 101.681,
        "saikou": 1.99,
        "heikin": 1.57,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.666
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 140,
        "ouatsu": 140.909,
        "saikou": 1.99,
        "heikin": 1.37,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.791
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 140,
        "ouatsu": 101.681,
        "saikou": 1.99,
        "heikin": 1.74,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.756
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 138,
        "ouatsu": 101.681,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 1.596
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 137,
        "ouatsu": 140.909,
        "saikou": 1.99,
        "heikin": 1.29,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.38
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 135,
        "ouatsu": 101.681,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 1.563
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 143,
        "ouatsu": 177.511,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.362
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 143,
        "ouatsu": 177.511,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.487
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 143,
        "ouatsu": 178.311,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.209
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 143,
        "ouatsu": 180.301,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.032
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 143,
        "ouatsu": 180.301,
        "saikou": 2.29,
        "heikin": 1.62,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.058
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 143,
        "ouatsu": 180.301,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.332
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 143,
        "ouatsu": 197.16,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.548
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 144,
        "ouatsu": 197.16,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.904
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 144,
        "ouatsu": 197.16,
        "saikou": 1.9,
        "heikin": 1.72,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 3.252
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 144,
        "ouatsu": 197.16,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 3.627
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 144,
        "ouatsu": 197.16,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 3.434
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 144,
        "ouatsu": 197.16,
        "saikou": 1.9,
        "heikin": 1.68,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 3.266
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 146,
        "ouatsu": 197.16,
        "saikou": 1.9,
        "heikin": 1.72,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 3.223
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 147,
        "ouatsu": 197.16,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.029
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 147,
        "ouatsu": 197.16,
        "saikou": 2.29,
        "heikin": 1.68,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 2.126
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 148,
        "ouatsu": 206.278,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.831
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 148,
        "ouatsu": 206.278,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.939
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 148,
        "ouatsu": 206.278,
        "saikou": 2.29,
        "heikin": 1.11,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.983
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 186.396,
        "saikou": 7.98,
        "heikin": 1.18,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.173
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 152,
        "ouatsu": 186.396,
        "saikou": 7.98,
        "heikin": 1.1,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.207
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 153,
        "ouatsu": 186.396,
        "saikou": 7.98,
        "heikin": 1.13,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 1.779
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 154,
        "ouatsu": 186.396,
        "saikou": 7.98,
        "heikin": 1.13,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 1.798
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 154,
        "ouatsu": 186.396,
        "saikou": 7.98,
        "heikin": 1.14,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 1.702
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 154,
        "ouatsu": 186.396,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 1.798
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 151,
        "ouatsu": 186.396,
        "saikou": 2.29,
        "heikin": 1.01,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.587
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 151,
        "ouatsu": 186.396,
        "saikou": 2.29,
        "heikin": 1.01,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.833
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 151,
        "ouatsu": 196.348,
        "saikou": 2.29,
        "heikin": 1.08,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.94
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 151,
        "ouatsu": 196.348,
        "saikou": 2.29,
        "heikin": 1.12,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.905
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 151,
        "ouatsu": 196.348,
        "saikou": 2.7,
        "heikin": 1.15,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.97
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 150,
        "ouatsu": 147.31,
        "saikou": 7.99,
        "heikin": 1.56,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.038
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 150,
        "ouatsu": 195.637,
        "saikou": 2.7,
        "heikin": 1.63,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.306
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 150,
        "ouatsu": 196.348,
        "saikou": 7.99,
        "heikin": 1.62,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.46
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 150,
        "ouatsu": 194.445,
        "saikou": 7.99,
        "heikin": 1.73,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.028
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 150,
        "ouatsu": 171.363,
        "saikou": 2.34,
        "heikin": 2.06,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.783
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 150,
        "ouatsu": 177.278,
        "saikou": 4.23,
        "heikin": 2.83,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.965
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 150,
        "ouatsu": 177.278,
        "saikou": 5.1,
        "heikin": 3.45,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 4.053
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 150,
        "ouatsu": 176.288,
        "saikou": 4.22,
        "heikin": 2.82,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 4.098
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 150,
        "ouatsu": 176.288,
        "saikou": 4.22,
        "heikin": 2.82,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 4.056
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 150,
        "ouatsu": 196.17,
        "saikou": 4.22,
        "heikin": 2.65,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.818
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 150,
        "ouatsu": 198.16,
        "saikou": 3.95,
        "heikin": 2.49,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.573
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 149,
        "ouatsu": 198.16,
        "saikou": 4.23,
        "heikin": 2.6,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.961
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 149,
        "ouatsu": 198.16,
        "saikou": 4.97,
        "heikin": 2.92,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.767
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 198.16,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.869
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 198.16,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.649
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 198.16,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.513
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 147,
        "ouatsu": 198.16,
        "saikou": 2.34,
        "heikin": 1.92,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 2.989
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 146,
        "ouatsu": 198.16,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.986
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 146,
        "ouatsu": 198.16,
        "saikou": 1.56,
        "heikin": 1.26,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.091
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.83
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.78
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.784
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.788
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.39,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.781
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 232.343,
        "saikou": 0.38,
        "heikin": 0.33,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.801
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 220.8,
        "saikou": 0.38,
        "heikin": 0.34,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.831
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 232.343,
        "saikou": 0.38,
        "heikin": 0.34,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.876
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 232.343,
        "saikou": 0.38,
        "heikin": 0.34,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.936
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 232.343,
        "saikou": 0.38,
        "heikin": 0.34,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.907
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 232.343,
        "saikou": 0.38,
        "heikin": 0.34,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.871
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 206.343,
        "saikou": 1.7,
        "heikin": 0.66,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.002
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 205.343,
        "saikou": 1.7,
        "heikin": 0.45,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 0.918
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 258.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.851
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 258.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.863
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 258.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.832
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 258.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.862
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.08,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.101
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.056
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.092
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.01
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.05
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.062
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.047
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.066
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.063
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.092
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.156
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.102
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 1.168
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 1.215
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 1.398
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 127.843,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.511
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 130.843,
        "saikou": 1.7,
        "heikin": 1.02,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.607
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.7,
        "heikin": 0.88,
        "boshuAvg30d": 42.9,
        "heikinAvg30d": 1.644
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 190.343,
        "saikou": 1.7,
        "heikin": 0.7,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.609
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 181.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.618
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 181.343,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.498
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 177.343,
        "saikou": 1.7,
        "heikin": 1.49,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.513
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 175.343,
        "saikou": 1.7,
        "heikin": 1.46,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.49
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 175.343,
        "saikou": 1.7,
        "heikin": 1.46,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.458
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.061
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 210.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.968
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.95
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.43,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.893
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.39,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.964
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.944
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 160.136,
        "saikou": 8.44,
        "heikin": 5.69,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.131
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 129.06,
        "saikou": 8.15,
        "heikin": 4.79,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.843
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 127.09,
        "saikou": 6.65,
        "heikin": 4.01,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.812
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 93.088,
        "saikou": 6.44,
        "heikin": 3.12,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.713
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 100.088,
        "saikou": 6.62,
        "heikin": 3.25,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.732
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 167.088,
        "saikou": 7.73,
        "heikin": 5.25,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.994
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 247.603,
        "saikou": 9.08,
        "heikin": 6.81,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.247
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 243.775,
        "saikou": 9.82,
        "heikin": 8.03,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.787
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 242.72,
        "saikou": 9.95,
        "heikin": 7.75,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.947
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 244.683,
        "saikou": 10,
        "heikin": 8.05,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.227
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 244.683,
        "saikou": 9.96,
        "heikin": 9.26,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.438
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 239.407,
        "saikou": 9.98,
        "heikin": 7.1,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.316
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 245.327,
        "saikou": 9.98,
        "heikin": 7.03,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 6.012
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 246.327,
        "saikou": 9.82,
        "heikin": 6.78,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 5.533
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 148.427,
        "saikou": 8.23,
        "heikin": 4.78,
        "boshuAvg30d": 174.9,
        "heikinAvg30d": 4.525
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 125.427,
        "saikou": 8.17,
        "heikin": 4.21,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 3.863
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 225.427,
        "saikou": 5.99,
        "heikin": 4.48,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 3.712
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 223.437,
        "saikou": 4.5,
        "heikin": 3.75,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 3.668
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 207.569,
        "saikou": 3.1,
        "heikin": 2.58,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.612
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 209.559,
        "saikou": 1.95,
        "heikin": 1.72,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.637
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 209.559,
        "saikou": 2.49,
        "heikin": 2.14,
        "boshuAvg30d": 180.9,
        "heikinAvg30d": 3.497
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 207.596,
        "saikou": 1.05,
        "heikin": 0.48,
        "boshuAvg30d": 181.9,
        "heikinAvg30d": 3.495
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 202.796,
        "saikou": 0.74,
        "heikin": 0.43,
        "boshuAvg30d": 181.9,
        "heikinAvg30d": 3.21
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 200.872,
        "saikou": 0.71,
        "heikin": 0.43,
        "boshuAvg30d": 181.9,
        "heikinAvg30d": 3.271
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 197.052,
        "saikou": 0.68,
        "heikin": 0.42,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 2.991
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 193.23,
        "saikou": 0.77,
        "heikin": 0.44,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.125
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 211.545,
        "saikou": 2.73,
        "heikin": 2.33,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.704
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 215.761,
        "saikou": 3.7,
        "heikin": 3.07,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 4.259
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 217.447,
        "saikou": 3.89,
        "heikin": 3.2,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 4.19
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 217.747,
        "saikou": 5.33,
        "heikin": 4.16,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.885
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 225.301,
        "saikou": 10,
        "heikin": 7.64,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 5.214
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 125.301,
        "saikou": 10,
        "heikin": 5.65,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 5.364
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 133.747,
        "saikou": 10,
        "heikin": 6.1,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 6.408
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 245.397,
        "saikou": 10,
        "heikin": 7.66,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 7.017
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 230.572,
        "saikou": 10,
        "heikin": 7.99,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 7.134
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 214.856,
        "saikou": 10,
        "heikin": 9.92,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 7.226
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 219.703,
        "saikou": 10,
        "heikin": 9.91,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.182
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 219.597,
        "saikou": 10,
        "heikin": 8.46,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.183
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 229.901,
        "saikou": 10,
        "heikin": 8.02,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.934
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 231.89,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.521
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 241.744,
        "saikou": 10,
        "heikin": 7.63,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.817
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 226.35,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.41
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 235.19,
        "saikou": 10,
        "heikin": 7.62,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.324
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 236.19,
        "saikou": 10,
        "heikin": 7.5,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.147
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 236.19,
        "saikou": 10,
        "heikin": 7.32,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.269
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 240.99,
        "saikou": 9.45,
        "heikin": 6.83,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.023
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 239.99,
        "saikou": 8.76,
        "heikin": 7.53,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 5.847
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 138.99,
        "saikou": 6.6,
        "heikin": 3.98,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 5.228
      }
    ]
  }
};
