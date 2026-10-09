// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/09〜2026/10/08）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-09",
  "fetchedAt": "2026-10-09",
  "avgWindowLabel": "過去30日平均（2026/09/09〜2026/10/08）",
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
      "ouatsu": 1569.306,
      "saikou": 7.17,
      "heikin": 2.6,
      "boshuAvg30d": 1205.8,
      "heikinAvg30d": 2.701
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1625.054,
      "saikou": 9.91,
      "heikin": 2.48,
      "boshuAvg30d": 1205.8,
      "heikinAvg30d": 2.582
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1637.486,
      "saikou": 6.91,
      "heikin": 2.39,
      "boshuAvg30d": 1205.8,
      "heikinAvg30d": 2.617
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1637.792,
      "saikou": 9.91,
      "heikin": 2.66,
      "boshuAvg30d": 1205.8,
      "heikinAvg30d": 2.578
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1600.206,
      "saikou": 9.91,
      "heikin": 2.64,
      "boshuAvg30d": 1201.3,
      "heikinAvg30d": 2.558
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1633.441,
      "saikou": 7.69,
      "heikin": 2.89,
      "boshuAvg30d": 1200.3,
      "heikinAvg30d": 2.64
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1730.277,
      "saikou": 9.91,
      "heikin": 3.32,
      "boshuAvg30d": 1219.6,
      "heikinAvg30d": 2.748
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1651.655,
      "saikou": 8.09,
      "heikin": 3.51,
      "boshuAvg30d": 1220.9,
      "heikinAvg30d": 2.906
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1687.574,
      "saikou": 8.22,
      "heikin": 3.63,
      "boshuAvg30d": 1223.6,
      "heikinAvg30d": 2.995
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1624.936,
      "saikou": 8.48,
      "heikin": 3.74,
      "boshuAvg30d": 1223.9,
      "heikinAvg30d": 3.088
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1704.346,
      "saikou": 8.15,
      "heikin": 3.58,
      "boshuAvg30d": 1223.9,
      "heikinAvg30d": 3.173
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1699.548,
      "saikou": 8.41,
      "heikin": 3.59,
      "boshuAvg30d": 1223.9,
      "heikinAvg30d": 3.225
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1671.539,
      "saikou": 8.16,
      "heikin": 3.6,
      "boshuAvg30d": 1288.3,
      "heikinAvg30d": 3.332
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1811.231,
      "saikou": 9.91,
      "heikin": 3.5,
      "boshuAvg30d": 1309.8,
      "heikinAvg30d": 3.137
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1590.243,
      "saikou": 7.2,
      "heikin": 2.47,
      "boshuAvg30d": 1332.3,
      "heikinAvg30d": 2.937
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1664.346,
      "saikou": 10,
      "heikin": 2.3,
      "boshuAvg30d": 1350.0,
      "heikinAvg30d": 2.82
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1556.103,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1350.7,
      "heikinAvg30d": 3.01
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1586.274,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1350.7,
      "heikinAvg30d": 3.083
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1223,
      "ouatsu": 1520.092,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1326.8,
      "heikinAvg30d": 3.265
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1226,
      "ouatsu": 1601.54,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1330.5,
      "heikinAvg30d": 3.269
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1231,
      "ouatsu": 1728.577,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1337.7,
      "heikinAvg30d": 3.304
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1231,
      "ouatsu": 1655.841,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1337.7,
      "heikinAvg30d": 3.253
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1228,
      "ouatsu": 1699.575,
      "saikou": 10,
      "heikin": 3.13,
      "boshuAvg30d": 1334.7,
      "heikinAvg30d": 3.208
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1227,
      "ouatsu": 1623.513,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1333.7,
      "heikinAvg30d": 3.129
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1207,
      "ouatsu": 1512.813,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1320.4,
      "heikinAvg30d": 3.022
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1207,
      "ouatsu": 1462.522,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1320.4,
      "heikinAvg30d": 3.035
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1207,
      "ouatsu": 1485.683,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1317.4,
      "heikinAvg30d": 3.172
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1205,
      "ouatsu": 1401.935,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1312.8,
      "heikinAvg30d": 3.203
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1202,
      "ouatsu": 1437.87,
      "saikou": 10,
      "heikin": 2.46,
      "boshuAvg30d": 1308.3,
      "heikinAvg30d": 3.234
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1196,
      "ouatsu": 1315.803,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1301.6,
      "heikinAvg30d": 3.3
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1379.116,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1329.5,
      "heikinAvg30d": 3.273
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1481.577,
      "saikou": 8.26,
      "heikin": 3.37,
      "boshuAvg30d": 1329.5,
      "heikinAvg30d": 3.443
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1624.532,
      "saikou": 9.41,
      "heikin": 3.73,
      "boshuAvg30d": 1329.7,
      "heikinAvg30d": 3.654
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1548.416,
      "saikou": 10,
      "heikin": 4.4,
      "boshuAvg30d": 1327.9,
      "heikinAvg30d": 3.913
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1589.996,
      "saikou": 10,
      "heikin": 4.23,
      "boshuAvg30d": 1320.3,
      "heikinAvg30d": 3.998
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1622.07,
      "saikou": 10,
      "heikin": 4.68,
      "boshuAvg30d": 1315.7,
      "heikinAvg30d": 4.04
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1684.759,
      "saikou": 10,
      "heikin": 4.42,
      "boshuAvg30d": 1308.5,
      "heikinAvg30d": 4.071
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1742.336,
      "saikou": 10,
      "heikin": 4.07,
      "boshuAvg30d": 1308.5,
      "heikinAvg30d": 4.002
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1752.166,
      "saikou": 9.46,
      "heikin": 3.89,
      "boshuAvg30d": 1308.9,
      "heikinAvg30d": 3.889
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1830.731,
      "saikou": 10,
      "heikin": 4.05,
      "boshuAvg30d": 1307.9,
      "heikinAvg30d": 3.724
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1790.336,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1302.1,
      "heikinAvg30d": 3.649
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1824.845,
      "saikou": 9.94,
      "heikin": 3.43,
      "boshuAvg30d": 1299.1,
      "heikinAvg30d": 3.57
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1065,
      "ouatsu": 2002.354,
      "saikou": 9.44,
      "heikin": 3.59,
      "boshuAvg30d": 1224.1,
      "heikinAvg30d": 3.395
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1068,
      "ouatsu": 1835.815,
      "saikou": 10,
      "heikin": 4.07,
      "boshuAvg30d": 1227.1,
      "heikinAvg30d": 3.513
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1069,
      "ouatsu": 1729.446,
      "saikou": 10,
      "heikin": 4.19,
      "boshuAvg30d": 1228.5,
      "heikinAvg30d": 3.363
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1064,
      "ouatsu": 1795.931,
      "saikou": 9.43,
      "heikin": 3.89,
      "boshuAvg30d": 1222.0,
      "heikinAvg30d": 3.239
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1055,
      "ouatsu": 1852.514,
      "saikou": 10,
      "heikin": 4.16,
      "boshuAvg30d": 1214.5,
      "heikinAvg30d": 3.215
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1048,
      "ouatsu": 1622.069,
      "saikou": 9.43,
      "heikin": 3.26,
      "boshuAvg30d": 1206.8,
      "heikinAvg30d": 2.97
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
        "ouatsu": 104.908,
        "saikou": 6.7,
        "heikin": 1.9,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.261
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 121.918,
        "saikou": 9.91,
        "heikin": 2.58,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.012
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 102.958,
        "saikou": 4.35,
        "heikin": 1.73,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.121
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 121.958,
        "saikou": 9.91,
        "heikin": 3.31,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 0.964
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 119.908,
        "saikou": 9.91,
        "heikin": 2.79,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.242
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 102.958,
        "saikou": 2.35,
        "heikin": 1.97,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.376
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 118.908,
        "saikou": 9.91,
        "heikin": 2.84,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.244
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 102.958,
        "saikou": 2.5,
        "heikin": 2.07,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.102
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 151.218,
        "saikou": 2.17,
        "heikin": 2.04,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.266
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 102.958,
        "saikou": 2.23,
        "heikin": 2.19,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.172
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 153.208,
        "saikou": 2.25,
        "heikin": 2.14,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.209
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 153.208,
        "saikou": 2.43,
        "heikin": 2.32,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.413
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 104.908,
        "saikou": 6.6,
        "heikin": 2.36,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.77
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 144.968,
        "saikou": 9.91,
        "heikin": 4.51,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.572
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 102.958,
        "saikou": 7.2,
        "heikin": 1.15,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.451
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 185.438,
        "saikou": 1.01,
        "heikin": 0.9,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.232
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 102.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 0.905
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 141.958,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 0.978
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 150.288,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 0.909
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 136.868,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 0.915
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 184.288,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.073
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 136.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 0.998
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 182.388,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 0.979
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 180.438,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.016
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 143.908,
        "saikou": 2.4,
        "heikin": 0.84,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.006
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 139.99,
        "saikou": 6.45,
        "heikin": 0.9,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.057
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 148.858,
        "saikou": 5.8,
        "heikin": 1.08,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.183
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 175.958,
        "saikou": 1.01,
        "heikin": 0.73,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.062
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 187.858,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.221
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 112.058,
        "saikou": 9.91,
        "heikin": 1.84,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.382
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 114.908,
        "saikou": 6.05,
        "heikin": 1.52,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.06
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 151.958,
        "saikou": 8.14,
        "heikin": 3.44,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.796
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 102.958,
        "saikou": 9.41,
        "heikin": 5.77,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.606
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 134.268,
        "saikou": 7.49,
        "heikin": 7.29,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.885
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 85.99,
        "saikou": 7.48,
        "heikin": 7.47,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.997
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 134.29,
        "saikou": 10,
        "heikin": 9.93,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.887
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 104.908,
        "saikou": 10,
        "heikin": 9.33,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.663
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 153.208,
        "saikou": 10,
        "heikin": 9.51,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.765
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 104.908,
        "saikou": 9.46,
        "heikin": 8.82,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.144
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 153.208,
        "saikou": 10,
        "heikin": 9.5,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.051
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 148.208,
        "saikou": 10,
        "heikin": 4.92,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.885
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 141.918,
        "saikou": 9.94,
        "heikin": 4.7,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.598
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 104.908,
        "saikou": 9.44,
        "heikin": 8.76,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.327
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 153.208,
        "saikou": 10,
        "heikin": 9.45,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.793
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 153.208,
        "saikou": 10,
        "heikin": 9.52,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.437
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 104.908,
        "saikou": 9.43,
        "heikin": 8.59,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.483
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 153.208,
        "saikou": 10,
        "heikin": 9.48,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.378
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 117.908,
        "saikou": 9.43,
        "heikin": 8.78,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.351
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 91.564,
        "saikou": 6.07,
        "heikin": 5.34,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 7.189
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 91.564,
        "saikou": 6.27,
        "heikin": 5.6,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 7.46
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 98.872,
        "saikou": 6.13,
        "heikin": 5.32,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 7.563
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 111.442,
        "saikou": 7,
        "heikin": 5.52,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 7.648
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 109.444,
        "saikou": 7,
        "heikin": 5.52,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 7.705
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 109.444,
        "saikou": 7,
        "heikin": 5.54,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 7.74
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 109.942,
        "saikou": 7,
        "heikin": 5.52,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 7.756
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 111.442,
        "saikou": 5.94,
        "heikin": 5.16,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 7.705
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 113.441,
        "saikou": 5.63,
        "heikin": 4.9,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 7.698
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 113.441,
        "saikou": 5.56,
        "heikin": 4.85,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 7.669
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 113.441,
        "saikou": 5.54,
        "heikin": 4.84,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 7.735
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 113.441,
        "saikou": 5.37,
        "heikin": 4.68,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 7.771
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 101.441,
        "saikou": 5.55,
        "heikin": 5.45,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 7.845
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 99.941,
        "saikou": 5.99,
        "heikin": 5.8,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 7.973
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 101.441,
        "saikou": 6.9,
        "heikin": 4.66,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 8.154
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 111.941,
        "saikou": 10,
        "heikin": 7.23,
        "boshuAvg30d": 180.9,
        "heikinAvg30d": 8.221
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 100.773,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 180.9,
        "heikinAvg30d": 8.475
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 99.273,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 180.9,
        "heikinAvg30d": 8.355
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 113.38,
        "saikou": 10,
        "heikin": 8.36,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 8.189
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 112.089,
        "saikou": 10,
        "heikin": 8.52,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 8.301
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 146,
        "ouatsu": 111.444,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 8.297
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 146,
        "ouatsu": 109.448,
        "saikou": 10,
        "heikin": 8.6,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 8.36
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 147,
        "ouatsu": 113.403,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 8.376
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 147,
        "ouatsu": 111.438,
        "saikou": 10,
        "heikin": 8.55,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 8.357
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 143,
        "ouatsu": 113.403,
        "saikou": 10,
        "heikin": 8.57,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 8.415
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 143,
        "ouatsu": 113.403,
        "saikou": 10,
        "heikin": 8.54,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 8.334
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 143,
        "ouatsu": 103.399,
        "saikou": 10,
        "heikin": 7.7,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 8.08
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 142,
        "ouatsu": 103.399,
        "saikou": 10,
        "heikin": 7.64,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 7.829
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 142,
        "ouatsu": 90.829,
        "saikou": 10,
        "heikin": 7.18,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 7.873
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 140,
        "ouatsu": 90.829,
        "saikou": 10,
        "heikin": 5.92,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 7.261
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 80.729,
        "saikou": 10,
        "heikin": 5.22,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 7.589
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 78.829,
        "saikou": 5.41,
        "heikin": 4.36,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 7.106
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 93.397,
        "saikou": 4.49,
        "heikin": 3.39,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 7.185
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 63.936,
        "saikou": 5.99,
        "heikin": 4.3,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 7.039
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 67.401,
        "saikou": 10,
        "heikin": 4.25,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 6.96
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 53.331,
        "saikou": 4.58,
        "heikin": 4.07,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 6.675
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 54.831,
        "saikou": 4.49,
        "heikin": 4.04,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 6.82
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 75.981,
        "saikou": 4.4,
        "heikin": 3.2,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 6.608
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 90.831,
        "saikou": 4.49,
        "heikin": 3.47,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 6.754
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 90.831,
        "saikou": 4.49,
        "heikin": 3.31,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.895
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 86.096,
        "saikou": 10,
        "heikin": 4.09,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 6.854
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 85.526,
        "saikou": 5.51,
        "heikin": 4.09,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 6.913
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 115.401,
        "saikou": 5.88,
        "heikin": 4.63,
        "boshuAvg30d": 99.0,
        "heikinAvg30d": 7.068
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 90.051,
        "saikou": 4.56,
        "heikin": 3.93,
        "boshuAvg30d": 99.0,
        "heikinAvg30d": 7.219
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 91.401,
        "saikou": 5.15,
        "heikin": 4.04,
        "boshuAvg30d": 99.0,
        "heikinAvg30d": 7.253
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 65.481,
        "saikou": 5.53,
        "heikin": 4.35,
        "boshuAvg30d": 98.0,
        "heikinAvg30d": 7.206
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 80.731,
        "saikou": 5.56,
        "heikin": 4.6,
        "boshuAvg30d": 96.7,
        "heikinAvg30d": 7.35
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 91.231,
        "saikou": 6.38,
        "heikin": 4.72,
        "boshuAvg30d": 96.0,
        "heikinAvg30d": 7.572
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 478.071,
        "saikou": 5.5,
        "heikin": 2.6,
        "boshuAvg30d": 405.3,
        "heikinAvg30d": 3.531
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 509.22,
        "saikou": 5.5,
        "heikin": 2.6,
        "boshuAvg30d": 405.3,
        "heikinAvg30d": 3.492
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 510.68,
        "saikou": 5.5,
        "heikin": 2.7,
        "boshuAvg30d": 405.3,
        "heikinAvg30d": 3.327
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 477.402,
        "saikou": 5.61,
        "heikin": 2.93,
        "boshuAvg30d": 405.3,
        "heikinAvg30d": 3.325
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 465.33,
        "saikou": 5.61,
        "heikin": 2.94,
        "boshuAvg30d": 403.6,
        "heikinAvg30d": 3.274
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 465.03,
        "saikou": 5.59,
        "heikin": 2.85,
        "boshuAvg30d": 403.3,
        "heikinAvg30d": 3.265
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 477.002,
        "saikou": 5.57,
        "heikin": 3.12,
        "boshuAvg30d": 402.0,
        "heikinAvg30d": 3.282
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 473.562,
        "saikou": 5.56,
        "heikin": 3.06,
        "boshuAvg30d": 403.3,
        "heikinAvg30d": 3.479
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 438.151,
        "saikou": 6.16,
        "heikin": 3.84,
        "boshuAvg30d": 404.0,
        "heikinAvg30d": 3.547
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 436.773,
        "saikou": 5.97,
        "heikin": 3.82,
        "boshuAvg30d": 404.3,
        "heikinAvg30d": 3.652
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 433.859,
        "saikou": 5.91,
        "heikin": 3.81,
        "boshuAvg30d": 404.3,
        "heikinAvg30d": 3.576
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 436.689,
        "saikou": 5.39,
        "heikin": 3.85,
        "boshuAvg30d": 404.3,
        "heikinAvg30d": 3.709
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 484.756,
        "saikou": 5.95,
        "heikin": 3.74,
        "boshuAvg30d": 424.8,
        "heikinAvg30d": 3.923
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 481.744,
        "saikou": 6.83,
        "heikin": 4.1,
        "boshuAvg30d": 432.8,
        "heikinAvg30d": 4.069
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 528.021,
        "saikou": 6.98,
        "heikin": 3.28,
        "boshuAvg30d": 437.8,
        "heikinAvg30d": 3.801
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 483.237,
        "saikou": 7,
        "heikin": 2.58,
        "boshuAvg30d": 442.8,
        "heikinAvg30d": 3.684
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 449.87,
        "saikou": 10,
        "heikin": 4.1,
        "boshuAvg30d": 442.8,
        "heikinAvg30d": 3.911
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 447.88,
        "saikou": 10,
        "heikin": 4.28,
        "boshuAvg30d": 442.8,
        "heikinAvg30d": 3.916
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 447.88,
        "saikou": 10,
        "heikin": 4.51,
        "boshuAvg30d": 440.0,
        "heikinAvg30d": 4.237
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 447.88,
        "saikou": 10,
        "heikin": 4.78,
        "boshuAvg30d": 440.0,
        "heikinAvg30d": 4.289
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 414.32,
        "saikou": 10,
        "heikin": 4.6,
        "boshuAvg30d": 440.0,
        "heikinAvg30d": 4.19
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 414.32,
        "saikou": 10,
        "heikin": 4.59,
        "boshuAvg30d": 439.0,
        "heikinAvg30d": 4.039
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 433.396,
        "saikou": 10,
        "heikin": 4.47,
        "boshuAvg30d": 436.3,
        "heikinAvg30d": 4.011
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 431.425,
        "saikou": 10,
        "heikin": 4.18,
        "boshuAvg30d": 436.3,
        "heikinAvg30d": 3.965
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 353.859,
        "saikou": 10,
        "heikin": 6.28,
        "boshuAvg30d": 434.8,
        "heikinAvg30d": 3.851
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 428.858,
        "saikou": 10,
        "heikin": 4.53,
        "boshuAvg30d": 434.8,
        "heikinAvg30d": 3.84
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 355.855,
        "saikou": 10,
        "heikin": 5.45,
        "boshuAvg30d": 431.8,
        "heikinAvg30d": 3.95
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 392.719,
        "saikou": 10,
        "heikin": 4.88,
        "boshuAvg30d": 431.4,
        "heikinAvg30d": 4.069
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 357.054,
        "saikou": 6.27,
        "heikin": 2.51,
        "boshuAvg30d": 430.4,
        "heikinAvg30d": 4.037
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 323.017,
        "saikou": 4.9,
        "heikin": 2.34,
        "boshuAvg30d": 430.1,
        "heikinAvg30d": 3.919
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 323.383,
        "saikou": 4.9,
        "heikin": 2.5,
        "boshuAvg30d": 428.8,
        "heikinAvg30d": 3.948
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 426.82,
        "saikou": 4.9,
        "heikin": 2.48,
        "boshuAvg30d": 428.8,
        "heikinAvg30d": 3.849
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 457.285,
        "saikou": 5.36,
        "heikin": 3.18,
        "boshuAvg30d": 428.8,
        "heikinAvg30d": 4.149
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 367.851,
        "saikou": 8.35,
        "heikin": 3.76,
        "boshuAvg30d": 428.8,
        "heikinAvg30d": 4.356
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 377.393,
        "saikou": 7.56,
        "heikin": 3.42,
        "boshuAvg30d": 424.6,
        "heikinAvg30d": 4.286
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 398.235,
        "saikou": 6.75,
        "heikin": 3.43,
        "boshuAvg30d": 424.3,
        "heikinAvg30d": 4.215
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 481.69,
        "saikou": 6.12,
        "heikin": 3.82,
        "boshuAvg30d": 426.5,
        "heikinAvg30d": 4.375
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 459.394,
        "saikou": 4.46,
        "heikin": 1.9,
        "boshuAvg30d": 426.5,
        "heikinAvg30d": 4.276
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 441.639,
        "saikou": 5.36,
        "heikin": 2.57,
        "boshuAvg30d": 426.9,
        "heikinAvg30d": 4.24
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 441.749,
        "saikou": 5.33,
        "heikin": 2.57,
        "boshuAvg30d": 426.9,
        "heikinAvg30d": 4.138
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 434.473,
        "saikou": 4.94,
        "heikin": 2.65,
        "boshuAvg30d": 424.9,
        "heikinAvg30d": 4.097
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 489.009,
        "saikou": 3.99,
        "heikin": 2.38,
        "boshuAvg30d": 424.9,
        "heikinAvg30d": 4.06
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 678.066,
        "saikou": 3.9,
        "heikin": 2.11,
        "boshuAvg30d": 424.2,
        "heikinAvg30d": 3.936
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 513.253,
        "saikou": 4.88,
        "heikin": 2.39,
        "boshuAvg30d": 424.2,
        "heikinAvg30d": 4.114
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 461.146,
        "saikou": 5,
        "heikin": 2.55,
        "boshuAvg30d": 424.5,
        "heikinAvg30d": 3.804
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 609.506,
        "saikou": 3.99,
        "heikin": 2.49,
        "boshuAvg30d": 422.5,
        "heikinAvg30d": 3.944
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 518.87,
        "saikou": 5.46,
        "heikin": 3.02,
        "boshuAvg30d": 420.5,
        "heikinAvg30d": 4.012
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 476.953,
        "saikou": 4.54,
        "heikin": 2.43,
        "boshuAvg30d": 419.5,
        "heikinAvg30d": 3.985
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 283.069,
        "saikou": 3.18,
        "heikin": 2.3,
        "boshuAvg30d": 70.4,
        "heikinAvg30d": 1.924
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 275.801,
        "saikou": 2.85,
        "heikin": 1.25,
        "boshuAvg30d": 70.4,
        "heikinAvg30d": 1.743
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 295.777,
        "saikou": 3.07,
        "heikin": 1.2,
        "boshuAvg30d": 70.4,
        "heikinAvg30d": 1.806
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 295.777,
        "saikou": 3.31,
        "heikin": 1.24,
        "boshuAvg30d": 70.4,
        "heikinAvg30d": 1.875
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 275.943,
        "saikou": 2.7,
        "heikin": 1.44,
        "boshuAvg30d": 69.4,
        "heikinAvg30d": 1.774
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 281.862,
        "saikou": 2.78,
        "heikin": 1.58,
        "boshuAvg30d": 69.4,
        "heikinAvg30d": 1.796
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 309.377,
        "saikou": 2.77,
        "heikin": 1.29,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 1.737
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 305.577,
        "saikou": 3,
        "heikin": 1.45,
        "boshuAvg30d": 69.2,
        "heikinAvg30d": 1.941
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 311.277,
        "saikou": 3.18,
        "heikin": 1.52,
        "boshuAvg30d": 69.4,
        "heikinAvg30d": 1.986
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 311.277,
        "saikou": 2.95,
        "heikin": 1.47,
        "boshuAvg30d": 69.4,
        "heikinAvg30d": 1.863
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 313.267,
        "saikou": 3.1,
        "heikin": 1.32,
        "boshuAvg30d": 69.4,
        "heikinAvg30d": 1.989
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 311.767,
        "saikou": 3.32,
        "heikin": 1.2,
        "boshuAvg30d": 69.4,
        "heikinAvg30d": 1.985
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 231.223,
        "saikou": 3.16,
        "heikin": 1.75,
        "boshuAvg30d": 79.2,
        "heikinAvg30d": 2.12
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 271.253,
        "saikou": 3.58,
        "heikin": 1.57,
        "boshuAvg30d": 82.4,
        "heikinAvg30d": 2.133
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 249.444,
        "saikou": 3.48,
        "heikin": 1.97,
        "boshuAvg30d": 85.4,
        "heikinAvg30d": 2.148
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 200.351,
        "saikou": 3.48,
        "heikin": 1.9,
        "boshuAvg30d": 87.4,
        "heikinAvg30d": 2.056
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 200.351,
        "saikou": 6.23,
        "heikin": 2.71,
        "boshuAvg30d": 87.4,
        "heikinAvg30d": 2.278
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 212.188,
        "saikou": 6.51,
        "heikin": 2.89,
        "boshuAvg30d": 87.4,
        "heikinAvg30d": 2.363
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 212.188,
        "saikou": 6.06,
        "heikin": 2.97,
        "boshuAvg30d": 91.7,
        "heikinAvg30d": 2.618
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 214.171,
        "saikou": 6.2,
        "heikin": 2.99,
        "boshuAvg30d": 91.7,
        "heikinAvg30d": 2.63
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 204.282,
        "saikou": 9.58,
        "heikin": 4.07,
        "boshuAvg30d": 92.4,
        "heikinAvg30d": 2.873
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 206.272,
        "saikou": 8.06,
        "heikin": 3.85,
        "boshuAvg30d": 91.7,
        "heikinAvg30d": 2.926
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 203.298,
        "saikou": 9.32,
        "heikin": 3.76,
        "boshuAvg30d": 90.7,
        "heikinAvg30d": 2.879
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 183.472,
        "saikou": 7.72,
        "heikin": 3.13,
        "boshuAvg30d": 89.7,
        "heikinAvg30d": 2.771
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 161.362,
        "saikou": 9.69,
        "heikin": 4.25,
        "boshuAvg30d": 86.4,
        "heikinAvg30d": 2.666
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 161.362,
        "saikou": 9.81,
        "heikin": 4.26,
        "boshuAvg30d": 86.4,
        "heikinAvg30d": 2.7
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 146.972,
        "saikou": 7.98,
        "heikin": 3.46,
        "boshuAvg30d": 86.4,
        "heikinAvg30d": 2.562
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 146.972,
        "saikou": 7.98,
        "heikin": 3.52,
        "boshuAvg30d": 86.2,
        "heikinAvg30d": 2.581
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 167.187,
        "saikou": 8.98,
        "heikin": 3.69,
        "boshuAvg30d": 85.4,
        "heikinAvg30d": 2.8
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 167.187,
        "saikou": 9.48,
        "heikin": 3.92,
        "boshuAvg30d": 85.4,
        "heikinAvg30d": 2.817
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 200.941,
        "saikou": 7.72,
        "heikin": 3.51,
        "boshuAvg30d": 84.2,
        "heikinAvg30d": 2.551
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 200.941,
        "saikou": 7.72,
        "heikin": 3.74,
        "boshuAvg30d": 84.2,
        "heikinAvg30d": 2.543
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 322.863,
        "saikou": 3.39,
        "heikin": 2,
        "boshuAvg30d": 84.2,
        "heikinAvg30d": 2.421
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 331.463,
        "saikou": 8.37,
        "heikin": 2.7,
        "boshuAvg30d": 84.2,
        "heikinAvg30d": 2.633
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 398.29,
        "saikou": 2.49,
        "heikin": 2.26,
        "boshuAvg30d": 84.2,
        "heikinAvg30d": 2.524
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 394.144,
        "saikou": 7.46,
        "heikin": 2.53,
        "boshuAvg30d": 83.9,
        "heikinAvg30d": 2.466
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 395.644,
        "saikou": 5.1,
        "heikin": 1.78,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.286
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 404.091,
        "saikou": 2.09,
        "heikin": 1.87,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.19
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 406.09,
        "saikou": 2.04,
        "heikin": 1.81,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.017
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 415.29,
        "saikou": 1.98,
        "heikin": 1.46,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.105
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 398.575,
        "saikou": 2.09,
        "heikin": 1.43,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.143
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 407.384,
        "saikou": 2.11,
        "heikin": 1.6,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.142
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 411.31,
        "saikou": 3.16,
        "heikin": 1.62,
        "boshuAvg30d": 82.2,
        "heikinAvg30d": 1.998
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 389.501,
        "saikou": 2.2,
        "heikin": 1.44,
        "boshuAvg30d": 83.2,
        "heikinAvg30d": 2.201
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 346.875,
        "saikou": 2.35,
        "heikin": 1.45,
        "boshuAvg30d": 83.2,
        "heikinAvg30d": 2.247
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 337.675,
        "saikou": 3.22,
        "heikin": 2.01,
        "boshuAvg30d": 82.2,
        "heikinAvg30d": 2.166
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 346.875,
        "saikou": 3.48,
        "heikin": 1.83,
        "boshuAvg30d": 81.2,
        "heikinAvg30d": 2.145
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 345.375,
        "saikou": 1.98,
        "heikin": 1.61,
        "boshuAvg30d": 78.2,
        "heikinAvg30d": 2.13
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.55,
        "heikin": 0.59,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 0.942
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2,
        "heikin": 0.67,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 1.042
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.7,
        "heikin": 0.61,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 1.028
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.85,
        "heikin": 0.64,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 1.158
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.5,
        "heikin": 0.58,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 1.195
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 0.944
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 1.162
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.92,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 1.453
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 1.312
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 1.387
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 18.988,
        "saikou": 2.47,
        "heikin": 2.36,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 1.593
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 18.988,
        "saikou": 2.47,
        "heikin": 2.37,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 1.58
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 2,
        "heikin": 1.97,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.76
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.639
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 2.55,
        "heikin": 0.75,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 1.597
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 2.4,
        "heikin": 0.73,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.553
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 28.2,
        "saikou": 5.5,
        "heikin": 3.59,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.906
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 19.026,
        "saikou": 3.44,
        "heikin": 3.32,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.007
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 19.9,
        "saikou": 3.59,
        "heikin": 3.35,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.451
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 19.076,
        "saikou": 4.1,
        "heikin": 3.42,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.353
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 22.032,
        "saikou": 5.55,
        "heikin": 2.17,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 3.345
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 18.984,
        "saikou": 6.96,
        "heikin": 3.18,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.52
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 24.68,
        "saikou": 3.85,
        "heikin": 2.14,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 3.268
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 24.33,
        "saikou": 3.9,
        "heikin": 1.74,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.915
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 38.928,
        "saikou": 4.3,
        "heikin": 0.72,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.226
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 38.928,
        "saikou": 3.35,
        "heikin": 0.69,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.488
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 38.928,
        "saikou": 5.55,
        "heikin": 0.91,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.418
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.222
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.5,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.301
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.5,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.823
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 38.928,
        "saikou": 5.91,
        "heikin": 5.83,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.358
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 38.928,
        "saikou": 7.18,
        "heikin": 7.02,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.925
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.542
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 2.95,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.478
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.442
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.97,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.026
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.646
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.451
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.73
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.854
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.205
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.962
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.25,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.857
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.997
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.47,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.986
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.679
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.552
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.3,
        "heikinAvg30d": 1.159
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 123.078,
        "saikou": 2.44,
        "heikin": 1.39,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.982
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 139.011,
        "saikou": 2.44,
        "heikin": 1.27,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.661
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 135.053,
        "saikou": 2.44,
        "heikin": 1.21,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.579
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 135.079,
        "saikou": 2.44,
        "heikin": 1.14,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.522
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 133.447,
        "saikou": 2.44,
        "heikin": 1.05,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.489
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 135.013,
        "saikou": 2.44,
        "heikin": 1.17,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 1.619
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 142.9,
        "saikou": 2.44,
        "heikin": 1.24,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.767
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.71,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.904
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.71,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.833
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.72,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.917
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.74,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.865
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.723
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.85,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 1.853
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.83,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 1.78
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 99.341,
        "saikou": 2.44,
        "heikin": 1.8,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 1.901
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 99.341,
        "saikou": 2.44,
        "heikin": 1.93,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 1.922
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 99.341,
        "saikou": 2.44,
        "heikin": 1.93,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 2.152
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 101.339,
        "saikou": 3.95,
        "heikin": 2.27,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 2.359
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 149.309,
        "saikou": 3.95,
        "heikin": 2.1,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 2.584
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 149.309,
        "saikou": 3.95,
        "heikin": 2.07,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 2.522
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 148.767,
        "saikou": 5.95,
        "heikin": 2.25,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 2.811
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 148.767,
        "saikou": 5.95,
        "heikin": 2.25,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 2.774
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 150.752,
        "saikou": 5.95,
        "heikin": 2.3,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.742
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 150.752,
        "saikou": 3.95,
        "heikin": 2.1,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.484
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 159.695,
        "saikou": 3,
        "heikin": 1.6,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.373
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 105.323,
        "saikou": 5.95,
        "heikin": 2.99,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.419
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 105.323,
        "saikou": 5.95,
        "heikin": 3.03,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.728
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 105.323,
        "saikou": 3,
        "heikin": 2.52,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.525
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 103.88,
        "saikou": 4.45,
        "heikin": 2.68,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.509
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 105.75,
        "saikou": 3.4,
        "heikin": 2.45,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.479
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 107.193,
        "saikou": 3.95,
        "heikin": 2.36,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.42
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 107.193,
        "saikou": 3.95,
        "heikin": 2.59,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.595
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 107.193,
        "saikou": 2.68,
        "heikin": 2.16,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.518
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 105.195,
        "saikou": 2.34,
        "heikin": 2.14,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.572
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 103.208,
        "saikou": 2.08,
        "heikin": 2.05,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.614
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 88.208,
        "saikou": 3.7,
        "heikin": 2.35,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.64
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 2.78,
        "heikin": 2.13,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.396
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 2.78,
        "heikin": 2,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.449
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 101.339,
        "saikou": 2.78,
        "heikin": 1.94,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.521
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 101.339,
        "saikou": 1.97,
        "heikin": 1.8,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.477
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 99.354,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 2.424
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 99.354,
        "saikou": 2.44,
        "heikin": 1.75,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.393
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.8,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.294
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.89,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.337
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 99.896,
        "saikou": 2.44,
        "heikin": 1.89,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 2.357
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 97.898,
        "saikou": 2.44,
        "heikin": 1.83,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.292
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 140.567,
        "saikou": 2.44,
        "heikin": 1.29,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 1.833
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 86.339,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.996
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 187.154,
        "saikou": 2.86,
        "heikin": 2.43,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.548
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 187.154,
        "saikou": 2.86,
        "heikin": 2.43,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.591
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 188.954,
        "saikou": 2.29,
        "heikin": 2.03,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.684
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 190.944,
        "saikou": 2.29,
        "heikin": 2.02,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.595
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 190.944,
        "saikou": 2.29,
        "heikin": 2.02,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.507
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 190.944,
        "saikou": 2.86,
        "heikin": 2.44,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.649
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 207.803,
        "saikou": 4.59,
        "heikin": 3.51,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.876
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 207.803,
        "saikou": 6.29,
        "heikin": 4.34,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.086
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 207.803,
        "saikou": 6.32,
        "heikin": 4.52,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.201
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 207.803,
        "saikou": 6.5,
        "heikin": 4.49,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.483
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 207.803,
        "saikou": 6.11,
        "heikin": 4.27,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.723
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 207.803,
        "saikou": 6.11,
        "heikin": 4.38,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.801
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 207.803,
        "saikou": 5.6,
        "heikin": 4.09,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 3.063
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 191.917,
        "saikou": 3.52,
        "heikin": 2.71,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 2.265
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 191.917,
        "saikou": 2.38,
        "heikin": 1.7,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 1.79
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.13,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.507
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 191.917,
        "saikou": 1.56,
        "heikin": 0.83,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.583
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 191.917,
        "saikou": 1.56,
        "heikin": 0.93,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.753
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.3,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.936
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.13,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.915
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 289.646,
        "saikou": 2.5,
        "heikin": 1.45,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 2.067
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 252.283,
        "saikou": 2.29,
        "heikin": 1.03,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.979
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.12,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.982
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.35,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.879
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 191.917,
        "saikou": 1.56,
        "heikin": 0.71,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.622
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.649
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 289.646,
        "saikou": 2.29,
        "heikin": 1.44,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.894
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 191.917,
        "saikou": 4,
        "heikin": 1.41,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.737
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 191.917,
        "saikou": 2.7,
        "heikin": 1.19,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.728
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 2.7,
        "heikin": 1.33,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.814
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 2.96,
        "heikin": 1.65,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.206
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 3.31,
        "heikin": 2.43,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.554
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 6.15,
        "heikin": 4.07,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.69
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 207.784,
        "saikou": 6.11,
        "heikin": 3.91,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.271
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 207.784,
        "saikou": 6.33,
        "heikin": 4.05,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.697
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 207.784,
        "saikou": 6.58,
        "heikin": 4.09,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.934
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 205.794,
        "saikou": 7.12,
        "heikin": 4.68,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 4.225
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 205.794,
        "saikou": 7.44,
        "heikin": 4.85,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 4.234
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 223.678,
        "saikou": 6.67,
        "heikin": 4.43,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.881
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 225.668,
        "saikou": 6.58,
        "heikin": 4.07,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.418
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 225.668,
        "saikou": 7.12,
        "heikin": 4.54,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.362
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 225.668,
        "saikou": 7.24,
        "heikin": 4.6,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 3.098
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 223.868,
        "saikou": 6.67,
        "heikin": 4.46,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.293
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 208.001,
        "saikou": 6.67,
        "heikin": 4.75,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.201
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 208.001,
        "saikou": 6.9,
        "heikin": 4.89,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.106
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 208.001,
        "saikou": 6.33,
        "heikin": 4.4,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.662
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 209.801,
        "saikou": 6.26,
        "heikin": 4.36,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.625
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 209.801,
        "saikou": 3.67,
        "heikin": 2.81,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.736
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 94.543,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.802
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 94.543,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.802
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 94.543,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.792
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 94.543,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.784
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 94.543,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.78
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 94.543,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.791
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 91.543,
        "saikou": 1.7,
        "heikin": 0.74,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.841
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 80,
        "saikou": 1.7,
        "heikin": 1.28,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.854
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 91.543,
        "saikou": 1.7,
        "heikin": 1.3,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.869
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 78.543,
        "saikou": 1.7,
        "heikin": 1.42,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.877
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 78.543,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.859
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 78.543,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.829
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 1.21,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.897
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 94.543,
        "saikou": 2.3,
        "heikin": 1.2,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.897
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 94.543,
        "saikou": 1.7,
        "heikin": 1.14,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.935
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 110.543,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.884
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 157.043,
        "saikou": 1.6,
        "heikin": 0.55,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.88
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 147.043,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.937
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 1,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.047
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.65,
        "heikin": 1.01,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.018
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 1.04,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.036
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 0.996
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.13,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.042
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.05
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.175
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 136.043,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.149
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.089
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 116.043,
        "saikou": 1.6,
        "heikin": 1.18,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.096
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.066
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.993
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.042
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 61.543,
        "saikou": 1.7,
        "heikin": 1.56,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.075
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 61.543,
        "saikou": 1.7,
        "heikin": 1.58,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.091
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 61.543,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.086
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 47.543,
        "saikou": 2.49,
        "heikin": 1.84,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.219
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 47.543,
        "saikou": 2.4,
        "heikin": 1.64,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.104
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.95,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.152
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.95,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.194
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.157
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.179
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.24,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.168
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.163
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.799
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 94.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.764
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 83,
        "saikou": 1.7,
        "heikin": 0.68,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.789
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 108.543,
        "saikou": 1.07,
        "heikin": 0.44,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.796
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.801
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.849
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 183.991,
        "saikou": 7.17,
        "heikin": 4.7,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 3.975
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 182.915,
        "saikou": 6.86,
        "heikin": 4.33,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 3.348
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 187.721,
        "saikou": 6.91,
        "heikin": 4.29,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 3.016
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 187.719,
        "saikou": 7.17,
        "heikin": 4.58,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 2.793
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 187.719,
        "saikou": 7.17,
        "heikin": 4.55,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 2.699
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 249.719,
        "saikou": 7.69,
        "heikin": 5.94,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 2.981
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 268.874,
        "saikou": 7.9,
        "heikin": 7.14,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.274
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 265.046,
        "saikou": 8.09,
        "heikin": 7.92,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.643
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 268.874,
        "saikou": 8.22,
        "heikin": 7.64,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 3.92
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 268.874,
        "saikou": 8.48,
        "heikin": 8.17,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 4.326
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 283.898,
        "saikou": 8.15,
        "heikin": 7.86,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 4.473
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 277.77,
        "saikou": 8.41,
        "heikin": 7.71,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 4.357
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 322.598,
        "saikou": 8.16,
        "heikin": 7.09,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 4.014
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 421.598,
        "saikou": 7.2,
        "heikin": 5.51,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 3.39
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 199.65,
        "saikou": 6.28,
        "heikin": 3.44,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 2.695
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 258.65,
        "saikou": 4.28,
        "heikin": 2.91,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 2.732
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 225.65,
        "saikou": 3.71,
        "heikin": 2.76,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 2.972
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 225.65,
        "saikou": 3.54,
        "heikin": 2.6,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 3.318
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 122.187,
        "saikou": 3.3,
        "heikin": 1.35,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 3.369
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 217.187,
        "saikou": 3.06,
        "heikin": 2.17,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 3.216
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 240.755,
        "saikou": 3.06,
        "heikin": 2.3,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 3.085
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 255.766,
        "saikou": 2.9,
        "heikin": 2.23,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 3.172
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 263.698,
        "saikou": 2.63,
        "heikin": 2.01,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 3.096
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 213.698,
        "saikou": 2.65,
        "heikin": 1.86,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 3.041
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 213.698,
        "saikou": 1.25,
        "heikin": 0.51,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 2.587
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 146.698,
        "saikou": 1.81,
        "heikin": 0.98,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 2.758
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 183.659,
        "saikou": 2.53,
        "heikin": 2.06,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 3.151
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 165.676,
        "saikou": 3.51,
        "heikin": 1.98,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 3.733
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 199.174,
        "saikou": 3.92,
        "heikin": 2.05,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 3.991
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 185.074,
        "saikou": 5.79,
        "heikin": 3.07,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 4.338
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 185.074,
        "saikou": 6.39,
        "heikin": 3.53,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 4.622
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 223.448,
        "saikou": 8.26,
        "heikin": 5.31,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.189
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 283.448,
        "saikou": 9.01,
        "heikin": 6.86,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.539
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 272.448,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.899
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 298.459,
        "saikou": 10,
        "heikin": 7.89,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.902
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 294.607,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 6.072
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 289.173,
        "saikou": 9.64,
        "heikin": 8.81,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 6.083
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 291.149,
        "saikou": 9.39,
        "heikin": 8.59,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.946
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 332.21,
        "saikou": 8.93,
        "heikin": 7.8,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.726
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 351.175,
        "saikou": 8.82,
        "heikin": 7.22,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.311
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 346.491,
        "saikou": 8.82,
        "heikin": 8.41,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.224
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 324.515,
        "saikou": 8.3,
        "heikin": 7.65,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.068
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 281.991,
        "saikou": 7.93,
        "heikin": 7.02,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.941
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 281.991,
        "saikou": 8.64,
        "heikin": 7.75,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 4.855
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 281.991,
        "saikou": 8.93,
        "heikin": 7.97,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 4.93
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 259.991,
        "saikou": 8.35,
        "heikin": 7.7,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.458
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 302.991,
        "saikou": 8.34,
        "heikin": 7.5,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.486
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 194.991,
        "saikou": 7.17,
        "heikin": 4.17,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 3.739
      }
    ]
  }
};
