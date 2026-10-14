// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/14〜2026/10/13）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-14",
  "fetchedAt": "2026-10-14",
  "avgWindowLabel": "過去30日平均（2026/09/14〜2026/10/13）",
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
      "boshu": 1086,
      "ouatsu": 1549.723,
      "saikou": 9.91,
      "heikin": 2.97,
      "boshuAvg30d": 1160.6,
      "heikinAvg30d": 2.768
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1624.209,
      "saikou": 9.91,
      "heikin": 3.31,
      "boshuAvg30d": 1160.6,
      "heikinAvg30d": 2.654
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1716.296,
      "saikou": 9.91,
      "heikin": 3.17,
      "boshuAvg30d": 1160.6,
      "heikinAvg30d": 2.68
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1722.353,
      "saikou": 9.9,
      "heikin": 2.88,
      "boshuAvg30d": 1160.6,
      "heikinAvg30d": 2.568
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1778.419,
      "saikou": 9.91,
      "heikin": 3.06,
      "boshuAvg30d": 1156.5,
      "heikinAvg30d": 2.584
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1747.105,
      "saikou": 9.9,
      "heikin": 2.83,
      "boshuAvg30d": 1155.5,
      "heikinAvg30d": 2.683
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1820.255,
      "saikou": 9.9,
      "heikin": 2.79,
      "boshuAvg30d": 1171.4,
      "heikinAvg30d": 2.812
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1785.905,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1172.8,
      "heikinAvg30d": 3.01
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1743.005,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1175.4,
      "heikinAvg30d": 3.084
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1783.893,
      "saikou": 9.91,
      "heikin": 3.18,
      "boshuAvg30d": 1175.8,
      "heikinAvg30d": 3.242
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1736.187,
      "saikou": 9.9,
      "heikin": 3.01,
      "boshuAvg30d": 1175.8,
      "heikinAvg30d": 3.316
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1769.45,
      "saikou": 9.9,
      "heikin": 3.02,
      "boshuAvg30d": 1175.8,
      "heikinAvg30d": 3.35
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 2099.037,
      "saikou": 9.91,
      "heikin": 3.03,
      "boshuAvg30d": 1239.2,
      "heikinAvg30d": 3.427
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1951.915,
      "saikou": 9.9,
      "heikin": 2.94,
      "boshuAvg30d": 1261.1,
      "heikinAvg30d": 3.184
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1824.583,
      "saikou": 9.91,
      "heikin": 2.9,
      "boshuAvg30d": 1283.2,
      "heikinAvg30d": 2.892
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1606.803,
      "saikou": 9.9,
      "heikin": 2.87,
      "boshuAvg30d": 1300.8,
      "heikinAvg30d": 2.741
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1757.223,
      "saikou": 9.91,
      "heikin": 3.07,
      "boshuAvg30d": 1301.3,
      "heikinAvg30d": 2.918
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1739.531,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1301.3,
      "heikinAvg30d": 2.964
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1223,
      "ouatsu": 1826.53,
      "saikou": 10,
      "heikin": 3.75,
      "boshuAvg30d": 1267.8,
      "heikinAvg30d": 3.139
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1226,
      "ouatsu": 1803.55,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1271.4,
      "heikinAvg30d": 3.146
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1145,
      "ouatsu": 1847.615,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1278.1,
      "heikinAvg30d": 3.203
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1145,
      "ouatsu": 1685.122,
      "saikou": 9.9,
      "heikin": 2.99,
      "boshuAvg30d": 1278.1,
      "heikinAvg30d": 3.122
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1142,
      "ouatsu": 1842.119,
      "saikou": 9.91,
      "heikin": 2.92,
      "boshuAvg30d": 1275.1,
      "heikinAvg30d": 3.113
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1141,
      "ouatsu": 1790.209,
      "saikou": 9.9,
      "heikin": 2.54,
      "boshuAvg30d": 1274.1,
      "heikinAvg30d": 3.032
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1121,
      "ouatsu": 1917.187,
      "saikou": 9.91,
      "heikin": 2.15,
      "boshuAvg30d": 1258.6,
      "heikinAvg30d": 2.967
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1121,
      "ouatsu": 1881.812,
      "saikou": 9.91,
      "heikin": 2.11,
      "boshuAvg30d": 1258.6,
      "heikinAvg30d": 2.972
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1121,
      "ouatsu": 1752.757,
      "saikou": 9.9,
      "heikin": 2.56,
      "boshuAvg30d": 1258.6,
      "heikinAvg30d": 3.056
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1119,
      "ouatsu": 1720.596,
      "saikou": 9.91,
      "heikin": 3.32,
      "boshuAvg30d": 1254.7,
      "heikinAvg30d": 3.12
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1116,
      "ouatsu": 1774.978,
      "saikou": 9.9,
      "heikin": 3.35,
      "boshuAvg30d": 1250.5,
      "heikinAvg30d": 3.117
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1110,
      "ouatsu": 1534.105,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1244.0,
      "heikinAvg30d": 3.235
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1591.697,
      "saikou": 9.9,
      "heikin": 3.3,
      "boshuAvg30d": 1279.1,
      "heikinAvg30d": 3.161
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1260.406,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1279.1,
      "heikinAvg30d": 3.375
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1324.612,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1279.5,
      "heikinAvg30d": 3.726
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1406.834,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1277.9,
      "heikinAvg30d": 4.026
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1617.615,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1270.6,
      "heikinAvg30d": 4.107
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1623.122,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1265.8,
      "heikinAvg30d": 4.184
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1609.905,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1259.1,
      "heikinAvg30d": 4.157
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1562.616,
      "saikou": 9.9,
      "heikin": 3.05,
      "boshuAvg30d": 1259.1,
      "heikinAvg30d": 4.054
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1699.279,
      "saikou": 9.96,
      "heikin": 3.47,
      "boshuAvg30d": 1259.3,
      "heikinAvg30d": 3.935
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1712.116,
      "saikou": 9.9,
      "heikin": 2.69,
      "boshuAvg30d": 1258.3,
      "heikinAvg30d": 3.744
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1739.587,
      "saikou": 9.91,
      "heikin": 3.4,
      "boshuAvg30d": 1252.0,
      "heikinAvg30d": 3.664
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1672.44,
      "saikou": 9.9,
      "heikin": 3.31,
      "boshuAvg30d": 1249.7,
      "heikinAvg30d": 3.577
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1065,
      "ouatsu": 1776.01,
      "saikou": 9.91,
      "heikin": 3.13,
      "boshuAvg30d": 1169.5,
      "heikinAvg30d": 3.43
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1068,
      "ouatsu": 1658.964,
      "saikou": 9.9,
      "heikin": 2.97,
      "boshuAvg30d": 1172.5,
      "heikinAvg30d": 3.531
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1069,
      "ouatsu": 1535.001,
      "saikou": 9.91,
      "heikin": 3.08,
      "boshuAvg30d": 1173.9,
      "heikinAvg30d": 3.416
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1064,
      "ouatsu": 1584.226,
      "saikou": 9.9,
      "heikin": 2.94,
      "boshuAvg30d": 1167.7,
      "heikinAvg30d": 3.266
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1055,
      "ouatsu": 1620.328,
      "saikou": 9.91,
      "heikin": 3.53,
      "boshuAvg30d": 1159.9,
      "heikinAvg30d": 3.244
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1048,
      "ouatsu": 1541.22,
      "saikou": 9.9,
      "heikin": 2.58,
      "boshuAvg30d": 1152.3,
      "heikinAvg30d": 2.952
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
        "ouatsu": 92.4,
        "saikou": 9.91,
        "heikin": 7.66,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.081
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 80.41,
        "saikou": 9.91,
        "heikin": 9.28,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.739
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 82.4,
        "saikou": 9.91,
        "heikin": 8.38,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.001
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 7.32,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.606
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 86.49,
        "saikou": 9.91,
        "heikin": 8.87,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.104
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 7.25,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.073
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 53.94,
        "saikou": 9.9,
        "heikin": 7.5,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.165
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 90.25,
        "saikou": 9.91,
        "heikin": 8.77,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.064
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 8.15,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.209
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 92.24,
        "saikou": 9.91,
        "heikin": 8.73,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.097
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 8.1,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.148
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 53.94,
        "saikou": 9.9,
        "heikin": 7.36,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 2.451
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 179.31,
        "saikou": 9.91,
        "heikin": 6.01,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.534
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 132.94,
        "saikou": 9.9,
        "heikin": 5.4,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.318
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 167.32,
        "saikou": 9.91,
        "heikin": 6.17,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.095
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 122.94,
        "saikou": 9.9,
        "heikin": 5.25,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.997
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 100.31,
        "saikou": 9.91,
        "heikin": 8.57,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.434
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 8.1,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.185
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 100.31,
        "saikou": 9.91,
        "heikin": 8.54,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.268
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 51.95,
        "saikou": 9.9,
        "heikin": 6.65,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.182
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 100.31,
        "saikou": 9.91,
        "heikin": 8.45,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.707
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 53.94,
        "saikou": 9.9,
        "heikin": 6.67,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.136
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 90.31,
        "saikou": 9.91,
        "heikin": 9.25,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.516
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 8.1,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.396
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 127.32,
        "saikou": 9.91,
        "heikin": 6.46,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.619
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 129.31,
        "saikou": 9.91,
        "heikin": 6.51,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.691
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 5.37,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.419
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 96.49,
        "saikou": 9.91,
        "heikin": 8.25,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.542
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 8.1,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 1.957
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 86.49,
        "saikou": 9.91,
        "heikin": 9.36,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.215
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 51.95,
        "saikou": 9.9,
        "heikin": 4.33,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.442
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 84.5,
        "saikou": 9.91,
        "heikin": 8.84,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 2.382
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 6.96,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 3.533
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 96.49,
        "saikou": 9.91,
        "heikin": 8.67,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 3.905
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 53.94,
        "saikou": 9.9,
        "heikin": 7.17,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 4.057
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 81.49,
        "saikou": 9.91,
        "heikin": 7.9,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 3.842
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 36.95,
        "saikou": 9.9,
        "heikin": 7.6,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 3.853
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 36.95,
        "saikou": 9.9,
        "heikin": 6.58,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 3.715
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 80.39,
        "saikou": 9.91,
        "heikin": 8.5,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 3.158
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 53.94,
        "saikou": 9.9,
        "heikin": 6.4,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 2.976
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 97.38,
        "saikou": 9.91,
        "heikin": 8.15,
        "boshuAvg30d": 55.6,
        "heikinAvg30d": 2.98
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 53.94,
        "saikou": 9.9,
        "heikin": 6.68,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 2.615
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 97.38,
        "saikou": 9.91,
        "heikin": 8.09,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 2.642
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 7.47,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.964
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 87.38,
        "saikou": 9.91,
        "heikin": 9.33,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.577
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 43.94,
        "saikou": 9.9,
        "heikin": 7.3,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.511
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 87.38,
        "saikou": 9.91,
        "heikin": 8.84,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.698
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 82.94,
        "saikou": 9.9,
        "heikin": 3.58,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.423
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 93.512,
        "saikou": 7,
        "heikin": 5.26,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 6.665
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 93.512,
        "saikou": 7,
        "heikin": 5.5,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 6.961
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 113.426,
        "saikou": 6.37,
        "heikin": 5.11,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 7.043
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 115.386,
        "saikou": 6.29,
        "heikin": 5.1,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 7.116
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 111.44,
        "saikou": 7,
        "heikin": 5.42,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 7.167
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 111.404,
        "saikou": 7,
        "heikin": 5.37,
        "boshuAvg30d": 133.1,
        "heikinAvg30d": 7.239
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 113.85,
        "saikou": 7,
        "heikin": 5.3,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 7.234
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 115.35,
        "saikou": 10,
        "heikin": 5.32,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 7.154
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 117.349,
        "saikou": 10,
        "heikin": 5.26,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 7.116
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 105.349,
        "saikou": 5.76,
        "heikin": 5.33,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 7.094
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 105.349,
        "saikou": 5.66,
        "heikin": 5.4,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 7.24
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 117.349,
        "saikou": 5.66,
        "heikin": 4.91,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 7.301
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 117.349,
        "saikou": 6.95,
        "heikin": 5.49,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 7.422
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 113.884,
        "saikou": 6.49,
        "heikin": 5.53,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 7.575
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 115.384,
        "saikou": 6.11,
        "heikin": 5.46,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 7.814
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 113.884,
        "saikou": 6.2,
        "heikin": 5.57,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 7.968
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 113.408,
        "saikou": 6.49,
        "heikin": 5.58,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 8.303
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 63.908,
        "saikou": 6.49,
        "heikin": 6.24,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 8.251
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 67.404,
        "saikou": 5.98,
        "heikin": 5.74,
        "boshuAvg30d": 126.9,
        "heikinAvg30d": 8.126
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 55.384,
        "saikou": 5.98,
        "heikin": 5.5,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 8.251
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 88.779,
        "saikou": 4.36,
        "heikin": 2.66,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 8.339
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 100.779,
        "saikou": 5.58,
        "heikin": 3.37,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 8.416
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 104.734,
        "saikou": 5.71,
        "heikin": 3.42,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 8.427
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 92.734,
        "saikou": 3.17,
        "heikin": 2.87,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 8.358
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 101.408,
        "saikou": 3.86,
        "heikin": 3.37,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 8.394
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 89.408,
        "saikou": 3.13,
        "heikin": 3.13,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 8.309
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 89.406,
        "saikou": 5.9,
        "heikin": 3.69,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 7.951
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 89.406,
        "saikou": 2.23,
        "heikin": 2.23,
        "boshuAvg30d": 125.4,
        "heikinAvg30d": 7.656
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 65.406,
        "saikou": 5.9,
        "heikin": 5.87,
        "boshuAvg30d": 124.3,
        "heikinAvg30d": 7.655
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 65.406,
        "saikou": 10,
        "heikin": 5.53,
        "boshuAvg30d": 120.6,
        "heikinAvg30d": 6.903
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 77.406,
        "saikou": 5.15,
        "heikin": 4.17,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 7.106
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 65.406,
        "saikou": 10,
        "heikin": 4.26,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 6.563
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 67.404,
        "saikou": 7.9,
        "heikin": 3.92,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 6.488
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 67.869,
        "saikou": 10,
        "heikin": 4.24,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 6.501
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 69.369,
        "saikou": 4.7,
        "heikin": 3.64,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 6.415
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 67.869,
        "saikou": 4,
        "heikin": 3.56,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 6.098
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 65.408,
        "saikou": 4,
        "heikin": 3.43,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 6.202
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 65.873,
        "saikou": 4.49,
        "heikin": 3.47,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 5.9
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 67.373,
        "saikou": 4,
        "heikin": 3.37,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 6.019
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 56.703,
        "saikou": 3.72,
        "heikin": 3.04,
        "boshuAvg30d": 162.3,
        "heikinAvg30d": 6.134
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 88.748,
        "saikou": 6.02,
        "heikin": 4.09,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 6.087
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 88.784,
        "saikou": 6.48,
        "heikin": 4.37,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 6.184
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 103.389,
        "saikou": 6.6,
        "heikin": 4.84,
        "boshuAvg30d": 83.8,
        "heikinAvg30d": 6.328
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 103.353,
        "saikou": 6.28,
        "heikin": 4.53,
        "boshuAvg30d": 83.8,
        "heikinAvg30d": 6.203
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 115.373,
        "saikou": 5.79,
        "heikin": 4.27,
        "boshuAvg30d": 83.8,
        "heikinAvg30d": 6.474
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 101.489,
        "saikou": 6.47,
        "heikin": 4.62,
        "boshuAvg30d": 82.8,
        "heikinAvg30d": 6.369
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 101.489,
        "saikou": 6.47,
        "heikin": 4.76,
        "boshuAvg30d": 81.3,
        "heikinAvg30d": 6.484
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 99.989,
        "saikou": 7.05,
        "heikin": 5.02,
        "boshuAvg30d": 80.8,
        "heikinAvg30d": 6.833
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 479.03,
        "saikou": 5.23,
        "heikin": 2.43,
        "boshuAvg30d": 359.5,
        "heikinAvg30d": 3.706
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 511.813,
        "saikou": 5.4,
        "heikin": 2.97,
        "boshuAvg30d": 359.5,
        "heikinAvg30d": 3.734
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 551.233,
        "saikou": 5.74,
        "heikin": 2.97,
        "boshuAvg30d": 359.5,
        "heikinAvg30d": 3.503
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 562.803,
        "saikou": 5.63,
        "heikin": 2.95,
        "boshuAvg30d": 359.5,
        "heikinAvg30d": 3.353
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 523.537,
        "saikou": 5.54,
        "heikin": 2.9,
        "boshuAvg30d": 357.9,
        "heikinAvg30d": 3.339
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 506.27,
        "saikou": 5.22,
        "heikin": 2.85,
        "boshuAvg30d": 357.5,
        "heikinAvg30d": 3.395
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 524.916,
        "saikou": 5.52,
        "heikin": 3,
        "boshuAvg30d": 356.0,
        "heikinAvg30d": 3.454
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 500.985,
        "saikou": 5.47,
        "heikin": 2.78,
        "boshuAvg30d": 357.5,
        "heikinAvg30d": 3.652
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 502.505,
        "saikou": 5.48,
        "heikin": 2.79,
        "boshuAvg30d": 358.0,
        "heikinAvg30d": 3.741
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 506.275,
        "saikou": 6.6,
        "heikin": 3.77,
        "boshuAvg30d": 358.5,
        "heikinAvg30d": 3.862
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 506.275,
        "saikou": 6.33,
        "heikin": 3.7,
        "boshuAvg30d": 358.5,
        "heikinAvg30d": 3.774
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 522.87,
        "saikou": 6.33,
        "heikin": 3.73,
        "boshuAvg30d": 358.5,
        "heikinAvg30d": 3.919
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 530.674,
        "saikou": 5.24,
        "heikin": 2.46,
        "boshuAvg30d": 378.6,
        "heikinAvg30d": 4.023
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 530.674,
        "saikou": 6.19,
        "heikin": 3.06,
        "boshuAvg30d": 386.6,
        "heikinAvg30d": 4.217
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 445.062,
        "saikou": 6.15,
        "heikin": 3.17,
        "boshuAvg30d": 391.6,
        "heikinAvg30d": 3.862
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 445.062,
        "saikou": 6.2,
        "heikin": 3.46,
        "boshuAvg30d": 396.6,
        "heikinAvg30d": 3.583
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 615.74,
        "saikou": 6.19,
        "heikin": 3.42,
        "boshuAvg30d": 396.6,
        "heikinAvg30d": 3.796
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 615.74,
        "saikou": 6.19,
        "heikin": 3.28,
        "boshuAvg30d": 396.6,
        "heikinAvg30d": 3.844
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 615.74,
        "saikou": 6.64,
        "heikin": 2.98,
        "boshuAvg30d": 391.0,
        "heikinAvg30d": 4.141
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 636.16,
        "saikou": 6.19,
        "heikin": 3.03,
        "boshuAvg30d": 391.0,
        "heikinAvg30d": 4.236
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 621.038,
        "saikou": 5.43,
        "heikin": 2.37,
        "boshuAvg30d": 391.0,
        "heikinAvg30d": 4.164
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 584.108,
        "saikou": 5.85,
        "heikin": 2.12,
        "boshuAvg30d": 390.0,
        "heikinAvg30d": 4.005
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 636.686,
        "saikou": 5.37,
        "heikin": 1.41,
        "boshuAvg30d": 387.5,
        "heikinAvg30d": 4.001
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 595.559,
        "saikou": 5.98,
        "heikin": 1.7,
        "boshuAvg30d": 387.5,
        "heikinAvg30d": 3.92
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 645.271,
        "saikou": 3.48,
        "heikin": 1.66,
        "boshuAvg30d": 385.6,
        "heikinAvg30d": 3.84
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 631.112,
        "saikou": 3.13,
        "heikin": 1.48,
        "boshuAvg30d": 385.6,
        "heikinAvg30d": 3.783
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 584.665,
        "saikou": 5.89,
        "heikin": 2.01,
        "boshuAvg30d": 385.6,
        "heikinAvg30d": 3.913
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 532.366,
        "saikou": 5.57,
        "heikin": 2.96,
        "boshuAvg30d": 385.4,
        "heikinAvg30d": 4.016
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 589.37,
        "saikou": 6.8,
        "heikin": 3.93,
        "boshuAvg30d": 384.4,
        "heikinAvg30d": 3.868
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 321.464,
        "saikou": 7.92,
        "heikin": 2.4,
        "boshuAvg30d": 383.9,
        "heikinAvg30d": 3.758
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 440.328,
        "saikou": 5.29,
        "heikin": 3.01,
        "boshuAvg30d": 382.5,
        "heikinAvg30d": 3.769
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 315.568,
        "saikou": 4,
        "heikin": 2.31,
        "boshuAvg30d": 382.5,
        "heikinAvg30d": 3.733
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 405.617,
        "saikou": 3.97,
        "heikin": 2.67,
        "boshuAvg30d": 382.5,
        "heikinAvg30d": 4.045
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 405.617,
        "saikou": 5.98,
        "heikin": 3.55,
        "boshuAvg30d": 382.4,
        "heikinAvg30d": 4.237
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 564.817,
        "saikou": 4.08,
        "heikin": 2.81,
        "boshuAvg30d": 378.3,
        "heikinAvg30d": 4.169
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 559.167,
        "saikou": 4.23,
        "heikin": 2.83,
        "boshuAvg30d": 377.9,
        "heikinAvg30d": 4.119
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 503.653,
        "saikou": 5.71,
        "heikin": 3.04,
        "boshuAvg30d": 380.4,
        "heikinAvg30d": 4.217
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 445.953,
        "saikou": 5.14,
        "heikin": 2.96,
        "boshuAvg30d": 380.4,
        "heikinAvg30d": 4.035
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 498.805,
        "saikou": 5.38,
        "heikin": 2.84,
        "boshuAvg30d": 380.6,
        "heikinAvg30d": 4.045
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 501.68,
        "saikou": 3.74,
        "heikin": 2.34,
        "boshuAvg30d": 380.6,
        "heikinAvg30d": 3.883
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 448.692,
        "saikou": 7.35,
        "heikin": 3.51,
        "boshuAvg30d": 378.6,
        "heikinAvg30d": 3.872
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 484.21,
        "saikou": 8.61,
        "heikin": 3.83,
        "boshuAvg30d": 378.6,
        "heikinAvg30d": 3.866
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 545.611,
        "saikou": 3.32,
        "heikin": 2.09,
        "boshuAvg30d": 378.0,
        "heikinAvg30d": 3.682
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 463.8,
        "saikou": 5.17,
        "heikin": 2.06,
        "boshuAvg30d": 378.0,
        "heikinAvg30d": 3.843
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 301.194,
        "saikou": 4.65,
        "heikin": 1.87,
        "boshuAvg30d": 378.4,
        "heikinAvg30d": 3.554
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 407.247,
        "saikou": 5.14,
        "heikin": 2.24,
        "boshuAvg30d": 376.4,
        "heikinAvg30d": 3.728
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 368.875,
        "saikou": 8.57,
        "heikin": 4.56,
        "boshuAvg30d": 374.4,
        "heikinAvg30d": 3.847
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 429.998,
        "saikou": 5.46,
        "heikin": 2.7,
        "boshuAvg30d": 373.4,
        "heikinAvg30d": 3.906
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 308.338,
        "saikou": 3.64,
        "heikin": 1.33,
        "boshuAvg30d": 79.4,
        "heikinAvg30d": 1.977
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 358.967,
        "saikou": 3.47,
        "heikin": 1.78,
        "boshuAvg30d": 79.4,
        "heikinAvg30d": 1.799
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 389.905,
        "saikou": 3.38,
        "heikin": 1.78,
        "boshuAvg30d": 79.4,
        "heikinAvg30d": 1.8
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 389.827,
        "saikou": 3.57,
        "heikin": 1.57,
        "boshuAvg30d": 79.4,
        "heikinAvg30d": 1.874
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 375.831,
        "saikou": 2.91,
        "heikin": 1.49,
        "boshuAvg30d": 78.4,
        "heikinAvg30d": 1.751
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 379.792,
        "saikou": 2.92,
        "heikin": 1.33,
        "boshuAvg30d": 78.4,
        "heikinAvg30d": 1.739
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 418.71,
        "saikou": 1.77,
        "heikin": 1.13,
        "boshuAvg30d": 77.9,
        "heikinAvg30d": 1.694
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 430.075,
        "saikou": 3.22,
        "heikin": 1.2,
        "boshuAvg30d": 77.9,
        "heikinAvg30d": 1.885
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 435.775,
        "saikou": 3.33,
        "heikin": 1.2,
        "boshuAvg30d": 78.4,
        "heikinAvg30d": 1.922
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 435.775,
        "saikou": 1.79,
        "heikin": 1.02,
        "boshuAvg30d": 78.4,
        "heikinAvg30d": 1.834
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 437.765,
        "saikou": 1.79,
        "heikin": 1.05,
        "boshuAvg30d": 78.4,
        "heikinAvg30d": 1.913
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 436.265,
        "saikou": 1.79,
        "heikin": 1.08,
        "boshuAvg30d": 78.4,
        "heikinAvg30d": 1.94
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 437.765,
        "saikou": 1.89,
        "heikin": 1.11,
        "boshuAvg30d": 87.9,
        "heikinAvg30d": 2.078
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 416.68,
        "saikou": 1.9,
        "heikin": 1.2,
        "boshuAvg30d": 91.4,
        "heikinAvg30d": 2.106
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 416.68,
        "saikou": 2,
        "heikin": 1.38,
        "boshuAvg30d": 94.4,
        "heikinAvg30d": 2.046
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 351.491,
        "saikou": 2.2,
        "heikin": 1.32,
        "boshuAvg30d": 96.4,
        "heikinAvg30d": 2.052
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 357.532,
        "saikou": 2.3,
        "heikin": 1.2,
        "boshuAvg30d": 96.4,
        "heikinAvg30d": 2.225
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 387.459,
        "saikou": 2.47,
        "heikin": 1.84,
        "boshuAvg30d": 96.4,
        "heikinAvg30d": 2.304
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 387.459,
        "saikou": 2.97,
        "heikin": 2.49,
        "boshuAvg30d": 100.8,
        "heikinAvg30d": 2.649
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 370.394,
        "saikou": 3.07,
        "heikin": 2.56,
        "boshuAvg30d": 100.8,
        "heikinAvg30d": 2.624
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 357.744,
        "saikou": 3.14,
        "heikin": 1.8,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 2.888
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 339.65,
        "saikou": 3.19,
        "heikin": 1.43,
        "boshuAvg30d": 100.8,
        "heikinAvg30d": 2.965
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 333.959,
        "saikou": 3.29,
        "heikin": 1.5,
        "boshuAvg30d": 99.8,
        "heikinAvg30d": 2.881
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 334.088,
        "saikou": 3.29,
        "heikin": 1.5,
        "boshuAvg30d": 98.8,
        "heikinAvg30d": 2.843
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 331.224,
        "saikou": 3.34,
        "heikin": 1.55,
        "boshuAvg30d": 95.4,
        "heikinAvg30d": 2.77
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 331.224,
        "saikou": 3.42,
        "heikin": 1.77,
        "boshuAvg30d": 95.4,
        "heikinAvg30d": 2.764
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 315.042,
        "saikou": 3.2,
        "heikin": 1.56,
        "boshuAvg30d": 95.4,
        "heikinAvg30d": 2.651
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 389.458,
        "saikou": 5.34,
        "heikin": 1.75,
        "boshuAvg30d": 94.9,
        "heikinAvg30d": 2.62
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 406.492,
        "saikou": 3,
        "heikin": 1.27,
        "boshuAvg30d": 94.4,
        "heikinAvg30d": 2.831
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 396.407,
        "saikou": 3.25,
        "heikin": 1.77,
        "boshuAvg30d": 94.4,
        "heikinAvg30d": 2.891
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 416.944,
        "saikou": 3.19,
        "heikin": 1.88,
        "boshuAvg30d": 92.9,
        "heikinAvg30d": 2.606
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 382.854,
        "saikou": 8.99,
        "heikin": 2.34,
        "boshuAvg30d": 92.9,
        "heikinAvg30d": 2.599
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 380.048,
        "saikou": 4.97,
        "heikin": 3.12,
        "boshuAvg30d": 92.9,
        "heikinAvg30d": 2.461
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 372.348,
        "saikou": 4.97,
        "heikin": 3.1,
        "boshuAvg30d": 92.9,
        "heikinAvg30d": 2.668
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 384.349,
        "saikou": 3.41,
        "heikin": 2.87,
        "boshuAvg30d": 92.9,
        "heikinAvg30d": 2.481
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 369.013,
        "saikou": 3.09,
        "heikin": 2.63,
        "boshuAvg30d": 92.5,
        "heikinAvg30d": 2.516
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 366.711,
        "saikou": 2.18,
        "heikin": 1.98,
        "boshuAvg30d": 90.5,
        "heikinAvg30d": 2.269
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 378.548,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 90.5,
        "heikinAvg30d": 2.18
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 380.547,
        "saikou": 1.9,
        "heikin": 1.62,
        "boshuAvg30d": 90.5,
        "heikinAvg30d": 2.011
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 384.349,
        "saikou": 1.8,
        "heikin": 1.01,
        "boshuAvg30d": 90.5,
        "heikinAvg30d": 2.074
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 394.421,
        "saikou": 1.9,
        "heikin": 1.22,
        "boshuAvg30d": 90.5,
        "heikinAvg30d": 2.017
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 332.693,
        "saikou": 1.87,
        "heikin": 1.14,
        "boshuAvg30d": 90.5,
        "heikinAvg30d": 2.061
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 336.619,
        "saikou": 1.89,
        "heikin": 1.17,
        "boshuAvg30d": 90.9,
        "heikinAvg30d": 1.836
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 354.86,
        "saikou": 3.06,
        "heikin": 1.95,
        "boshuAvg30d": 91.9,
        "heikinAvg30d": 2.077
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 334.043,
        "saikou": 3.54,
        "heikin": 1.63,
        "boshuAvg30d": 91.9,
        "heikinAvg30d": 2.111
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 352.133,
        "saikou": 3.12,
        "heikin": 2.05,
        "boshuAvg30d": 90.9,
        "heikinAvg30d": 2.089
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 352.133,
        "saikou": 1.79,
        "heikin": 1.13,
        "boshuAvg30d": 89.9,
        "heikinAvg30d": 2.037
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 350.633,
        "saikou": 1.89,
        "heikin": 1.39,
        "boshuAvg30d": 86.9,
        "heikinAvg30d": 2.109
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.65,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 0.834
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 0.951
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 16.92,
        "saikou": 2.86,
        "heikin": 2.59,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 0.967
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 21.546,
        "saikou": 1.85,
        "heikin": 1.34,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 1.08
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 9.72,
        "saikou": 2.86,
        "heikin": 2.3,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 1.096
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 20.326,
        "saikou": 2.89,
        "heikin": 2.62,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 0.92
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.92,
        "heikin": 2.92,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 1.121
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.89,
        "heikin": 2.72,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 1.335
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 18.724,
        "saikou": 2.92,
        "heikin": 2.81,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 1.16
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 18.542,
        "saikou": 3.01,
        "heikin": 3.01,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 1.237
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 21.12,
        "saikou": 2.17,
        "heikin": 2.17,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 1.453
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 18.59,
        "saikou": 2.27,
        "heikin": 2.27,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 1.458
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 16.878,
        "saikou": 2.72,
        "heikin": 2.72,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.71
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.591
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 47.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.469
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 47.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.523
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 7.012,
        "saikou": 7.7,
        "heikin": 7.7,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.846
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.915
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.43,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.39
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.44,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.237
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 3.434
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 8.69,
        "heikin": 8.69,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.688
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 7.74,
        "heikin": 7.74,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 3.066
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 7.34,
        "heikin": 7.34,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.717
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 28.928,
        "saikou": 3.1,
        "heikin": 0.59,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.502
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 28.928,
        "saikou": 3.35,
        "heikin": 0.61,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.52
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 28.928,
        "saikou": 7.26,
        "heikin": 7.26,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.663
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 26.998,
        "saikou": 8.28,
        "heikin": 7.87,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.472
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 18.938,
        "saikou": 5.72,
        "heikin": 5.72,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.58
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 10.258,
        "saikou": 5.53,
        "heikin": 5.18,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.942
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 5.53,
        "heikin": 5.53,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.856
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 7.52,
        "heikin": 7.27,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.314
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 18.718,
        "saikou": 6.79,
        "heikin": 6.14,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.517
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 2.95,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.239
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.073
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.056
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.488
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.556
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.552
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.721
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.99
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.691
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.698
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.792
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.48,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.987
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.561
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.371
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.112
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 137.024,
        "saikou": 1.94,
        "heikin": 1.19,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.885
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 135.174,
        "saikou": 1.94,
        "heikin": 1.1,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.59
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 120.201,
        "saikou": 1.73,
        "heikin": 1.05,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.476
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 144.652,
        "saikou": 1.73,
        "heikin": 1.01,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.408
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 135.15,
        "saikou": 1.73,
        "heikin": 0.96,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 1.346
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 145.374,
        "saikou": 1.73,
        "heikin": 1.03,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.477
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 144.898,
        "saikou": 1.94,
        "heikin": 1.2,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 1.633
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 105.327,
        "saikou": 1.99,
        "heikin": 1.61,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 1.776
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 105.327,
        "saikou": 1.99,
        "heikin": 1.59,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.696
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 105.327,
        "saikou": 1.98,
        "heikin": 1.59,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.786
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 103.329,
        "saikou": 1.94,
        "heikin": 1.51,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.709
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 105.327,
        "saikou": 1.94,
        "heikin": 1.53,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 1.593
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 240.326,
        "saikou": 3.56,
        "heikin": 2.22,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 1.752
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 173.941,
        "saikou": 7.04,
        "heikin": 3.61,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 1.654
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 99.341,
        "saikou": 2,
        "heikin": 1.62,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 1.766
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 99.341,
        "saikou": 2.2,
        "heikin": 1.75,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 1.768
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 99.341,
        "saikou": 2.22,
        "heikin": 1.79,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 1.984
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 107.324,
        "saikou": 3,
        "heikin": 2.15,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.228
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 105.337,
        "saikou": 3,
        "heikin": 2.56,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.426
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 105.337,
        "saikou": 3,
        "heikin": 2.68,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.334
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 101.361,
        "saikou": 3,
        "heikin": 2.6,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.613
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 101.909,
        "saikou": 3,
        "heikin": 2.69,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.609
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 103.894,
        "saikou": 3,
        "heikin": 2.8,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.62
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 105.337,
        "saikou": 3,
        "heikin": 2.77,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.391
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 105.337,
        "saikou": 3,
        "heikin": 2.55,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 2.288
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 92.207,
        "saikou": 2.95,
        "heikin": 2.37,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 2.346
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 107.207,
        "saikou": 2.5,
        "heikin": 2.48,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 2.61
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 124.951,
        "saikou": 3,
        "heikin": 2.39,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.416
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 105.337,
        "saikou": 2.5,
        "heikin": 2.36,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 2.362
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 105.337,
        "saikou": 2.79,
        "heikin": 2.53,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 2.269
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 152.47,
        "saikou": 3.95,
        "heikin": 1.78,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.342
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 107.207,
        "saikou": 3.95,
        "heikin": 2.77,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.528
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 107.207,
        "saikou": 3.95,
        "heikin": 2.48,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.495
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 84.778,
        "saikou": 2.67,
        "heikin": 2.22,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.507
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 103.752,
        "saikou": 2.5,
        "heikin": 2.18,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.519
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 105.195,
        "saikou": 2.67,
        "heikin": 2.26,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 2.613
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 103.235,
        "saikou": 2,
        "heikin": 1.83,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 2.348
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 99.368,
        "saikou": 1.97,
        "heikin": 1.83,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 2.388
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 107.314,
        "saikou": 1.94,
        "heikin": 1.74,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 2.399
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 152.577,
        "saikou": 1.73,
        "heikin": 1,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 2.37
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 148.125,
        "saikou": 1.9,
        "heikin": 1.02,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 2.286
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 150.592,
        "saikou": 1.73,
        "heikin": 0.99,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.269
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 107.314,
        "saikou": 1.73,
        "heikin": 1.51,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.192
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 107.314,
        "saikou": 2.05,
        "heikin": 1.75,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.279
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 107.314,
        "saikou": 2.05,
        "heikin": 1.74,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.309
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 144.544,
        "saikou": 1.99,
        "heikin": 1.33,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.267
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 126.928,
        "saikou": 1.73,
        "heikin": 1.3,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 1.784
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 105.871,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 1.857
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 193.409,
        "saikou": 3.63,
        "heikin": 2.78,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.535
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 193.409,
        "saikou": 5.1,
        "heikin": 3.31,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.554
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 193.409,
        "saikou": 3.91,
        "heikin": 2.78,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.634
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 195.399,
        "saikou": 3.42,
        "heikin": 2.54,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.546
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 195.399,
        "saikou": 3.42,
        "heikin": 2.66,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.48
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 197.199,
        "saikou": 3.91,
        "heikin": 2.89,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.64
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 214.058,
        "saikou": 4.53,
        "heikin": 2.95,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.83
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 214.058,
        "saikou": 5.1,
        "heikin": 3.21,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.108
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 214.058,
        "saikou": 5.12,
        "heikin": 3.22,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.263
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 214.058,
        "saikou": 5.22,
        "heikin": 3.27,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.672
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 214.058,
        "saikou": 4.37,
        "heikin": 2.84,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.867
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 214.058,
        "saikou": 4.47,
        "heikin": 2.88,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.863
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 214.058,
        "saikou": 5.06,
        "heikin": 3.17,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 3.125
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 198.191,
        "saikou": 2.29,
        "heikin": 1.94,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 2.188
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 198.191,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 1.614
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 121.47,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.271
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 196.193,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.487
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 196.193,
        "saikou": 2.29,
        "heikin": 1.52,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.589
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.27,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.673
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 194.35,
        "saikou": 2.29,
        "heikin": 1.12,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 1.627
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 194.35,
        "saikou": 1.56,
        "heikin": 0.69,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 1.812
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 122.666,
        "saikou": 1.56,
        "heikin": 1.16,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.661
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 194.35,
        "saikou": 1.56,
        "heikin": 0.68,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.683
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 194.35,
        "saikou": 1.56,
        "heikin": 0.68,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.585
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 194.35,
        "saikou": 1.56,
        "heikin": 0.68,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.43
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 194.35,
        "saikou": 1.56,
        "heikin": 0.68,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.474
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 194.35,
        "saikou": 1.56,
        "heikin": 0.68,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.76
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 95.904,
        "saikou": 2.7,
        "heikin": 1.6,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.626
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 178.483,
        "saikou": 1.56,
        "heikin": 0.63,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.597
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 185.583,
        "saikou": 1.56,
        "heikin": 0.7,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.743
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 80.159,
        "saikou": 2.7,
        "heikin": 1.86,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.15
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 32.431,
        "saikou": 2.7,
        "heikin": 1.69,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.484
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 88.166,
        "saikou": 2.76,
        "heikin": 1.89,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.843
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 64.292,
        "saikou": 2.29,
        "heikin": 1.93,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.55
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 127.76,
        "saikou": 4.71,
        "heikin": 3.38,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.001
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 127.76,
        "saikou": 4.67,
        "heikin": 3.38,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.199
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 212.049,
        "saikou": 5.05,
        "heikin": 3.71,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.34
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 212.049,
        "saikou": 5.05,
        "heikin": 3.71,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.396
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 229.933,
        "saikou": 7.17,
        "heikin": 5.18,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.033
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 231.923,
        "saikou": 6.35,
        "heikin": 4.59,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.543
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 231.923,
        "saikou": 7.17,
        "heikin": 5.14,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.553
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 231.923,
        "saikou": 7.12,
        "heikin": 5.11,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 3.246
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 231.923,
        "saikou": 7.17,
        "heikin": 5.49,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.587
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 231.923,
        "saikou": 7.17,
        "heikin": 5.75,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.432
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 231.923,
        "saikou": 6.67,
        "heikin": 5.36,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 3.307
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 230.123,
        "saikou": 5.45,
        "heikin": 4.38,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 2.776
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 230.123,
        "saikou": 4.68,
        "heikin": 3.46,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 2.714
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 198.389,
        "saikou": 2.37,
        "heikin": 2.03,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 1.748
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 94.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.905
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 3.12,
        "heikin": 1.83,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.858
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.851
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.83
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 96.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.836
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 96.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.839
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 61.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.843
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 51,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.862
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.916
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 48.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.951
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 48.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.916
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 48.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.847
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 96.543,
        "saikou": 1.7,
        "heikin": 1.64,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.888
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.03,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.868
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 94.543,
        "saikou": 2.31,
        "heikin": 1.19,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.852
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 123.543,
        "saikou": 1.7,
        "heikin": 0.65,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.813
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 148.043,
        "saikou": 1.6,
        "heikin": 0.55,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.86
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 101.5,
        "saikou": 1.6,
        "heikin": 0.98,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.096
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 123.5,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.033
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 123.5,
        "saikou": 1.6,
        "heikin": 1.3,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.056
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 123.5,
        "saikou": 1.7,
        "heikin": 1.3,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.005
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 123.5,
        "saikou": 1.6,
        "heikin": 1.31,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.077
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 157.5,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.089
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 157.5,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.197
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 157.5,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.183
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 157.5,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.114
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 123.5,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 1.12
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 123.5,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.126
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 123.5,
        "saikou": 1.6,
        "heikin": 0.96,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 1.075
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 100,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.07
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 84,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.088
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 47,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.16
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 47,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 1.228
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 58,
        "saikou": 2.45,
        "heikin": 1.64,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.357
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 58,
        "saikou": 2.55,
        "heikin": 1.64,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.384
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 69.543,
        "saikou": 2.1,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.342
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 69.543,
        "saikou": 1.95,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.413
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 70.543,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.309
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 68.543,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.294
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 70.543,
        "saikou": 1.7,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.265
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 70.543,
        "saikou": 1.7,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.247
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 89.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 88.543,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 92.543,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.935
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 91.543,
        "saikou": 1.7,
        "heikin": 1.58,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.92
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 104.543,
        "saikou": 1.7,
        "heikin": 1.65,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.947
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 1.18,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.956
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 147.539,
        "saikou": 7.97,
        "heikin": 4.97,
        "boshuAvg30d": 165.6,
        "heikinAvg30d": 4.103
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 151.453,
        "saikou": 7.96,
        "heikin": 4.92,
        "boshuAvg30d": 165.6,
        "heikinAvg30d": 3.572
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 153.259,
        "saikou": 7.73,
        "heikin": 4.79,
        "boshuAvg30d": 165.6,
        "heikinAvg30d": 3.278
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 153.257,
        "saikou": 7.75,
        "heikin": 4.8,
        "boshuAvg30d": 165.6,
        "heikinAvg30d": 3.06
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 244.309,
        "saikou": 7.82,
        "heikin": 3.03,
        "boshuAvg30d": 165.6,
        "heikinAvg30d": 2.99
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 246.257,
        "saikou": 7.96,
        "heikin": 3.1,
        "boshuAvg30d": 165.6,
        "heikinAvg30d": 3.356
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 265.412,
        "saikou": 7.96,
        "heikin": 2.49,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 3.672
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 255.932,
        "saikou": 7.96,
        "heikin": 2.56,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 4.12
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 257.784,
        "saikou": 7.96,
        "heikin": 2.51,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 4.375
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 257.784,
        "saikou": 8.13,
        "heikin": 2.55,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 4.839
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 255.808,
        "saikou": 7.96,
        "heikin": 3.02,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 5.072
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 252.508,
        "saikou": 7.96,
        "heikin": 3.03,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 4.934
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 266.134,
        "saikou": 8.02,
        "heikin": 3.01,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 4.466
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 267.134,
        "saikou": 7.96,
        "heikin": 2.94,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 3.641
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 239.134,
        "saikou": 7.7,
        "heikin": 3.23,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 2.727
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 210.144,
        "saikou": 7.48,
        "heikin": 4.43,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 2.687
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 144.144,
        "saikou": 9.31,
        "heikin": 4.81,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 2.902
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 147.996,
        "saikou": 9.51,
        "heikin": 4.9,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 3.119
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 237.547,
        "saikou": 9.47,
        "heikin": 6.94,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 3.114
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 237.547,
        "saikou": 9.1,
        "heikin": 6.68,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 2.955
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 231.605,
        "saikou": 8.3,
        "heikin": 6.15,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 2.809
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 229.642,
        "saikou": 8.21,
        "heikin": 6.15,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 2.853
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 225.758,
        "saikou": 7.52,
        "heikin": 6.13,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 2.768
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 237.773,
        "saikou": 6.37,
        "heikin": 5.2,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 2.742
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 225.849,
        "saikou": 2.57,
        "heikin": 2.2,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 2.319
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 227.773,
        "saikou": 2.57,
        "heikin": 2.2,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 2.533
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 231.719,
        "saikou": 6.77,
        "heikin": 5.55,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 2.87
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 241.523,
        "saikou": 7.87,
        "heikin": 5.79,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 3.477
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 243.512,
        "saikou": 8.21,
        "heikin": 6.03,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 3.722
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 239.66,
        "saikou": 9.2,
        "heikin": 7.42,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 4.196
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 243.512,
        "saikou": 9.08,
        "heikin": 6.76,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 4.401
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 159.512,
        "saikou": 9.38,
        "heikin": 5.51,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 5.098
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 166.512,
        "saikou": 10,
        "heikin": 6.19,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 5.925
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 264.512,
        "saikou": 10,
        "heikin": 3.91,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 6.316
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 251.7,
        "saikou": 10,
        "heikin": 3.83,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.344
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 250.7,
        "saikou": 10,
        "heikin": 1.13,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 6.551
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 248.428,
        "saikou": 10,
        "heikin": 1.04,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.596
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 250.404,
        "saikou": 9.81,
        "heikin": 3.77,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.456
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 260.446,
        "saikou": 9.96,
        "heikin": 3.81,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.204
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 258.473,
        "saikou": 8.26,
        "heikin": 3.25,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.754
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 255.827,
        "saikou": 8.07,
        "heikin": 3.06,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.718
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 255.827,
        "saikou": 7.67,
        "heikin": 2.93,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.516
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 260.303,
        "saikou": 7.67,
        "heikin": 2.97,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.398
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 261.303,
        "saikou": 7.69,
        "heikin": 2.32,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 5.353
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 261.303,
        "saikou": 7.67,
        "heikin": 2.31,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 5.469
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 209.279,
        "saikou": 7.46,
        "heikin": 3.64,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 5.033
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 244.929,
        "saikou": 7.41,
        "heikin": 3.11,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 4.879
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 174.929,
        "saikou": 6.63,
        "heikin": 4.11,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.001
      }
    ]
  }
};
