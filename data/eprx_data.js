// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/05〜2026/10/04）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-05",
  "fetchedAt": "2026-10-05",
  "avgWindowLabel": "過去30日平均（2026/09/05〜2026/10/04）",
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
      "boshu": 1000,
      "ouatsu": 1433.931,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1247.5,
      "heikinAvg30d": 2.687
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1000,
      "ouatsu": 1375.286,
      "saikou": 10,
      "heikin": 2.34,
      "boshuAvg30d": 1247.5,
      "heikinAvg30d": 2.607
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1000,
      "ouatsu": 1550.067,
      "saikou": 10,
      "heikin": 2.34,
      "boshuAvg30d": 1247.5,
      "heikinAvg30d": 2.661
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1000,
      "ouatsu": 1508.244,
      "saikou": 10,
      "heikin": 2.39,
      "boshuAvg30d": 1247.5,
      "heikinAvg30d": 2.63
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 997,
      "ouatsu": 1497.239,
      "saikou": 10,
      "heikin": 2.33,
      "boshuAvg30d": 1242.8,
      "heikinAvg30d": 2.601
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 996,
      "ouatsu": 1456.006,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1241.8,
      "heikinAvg30d": 2.697
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1572.43,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1258.6,
      "heikinAvg30d": 2.802
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1594.109,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1259.7,
      "heikinAvg30d": 2.911
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1539.196,
      "saikou": 10,
      "heikin": 3.72,
      "boshuAvg30d": 1262.6,
      "heikinAvg30d": 2.97
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1643.269,
      "saikou": 10,
      "heikin": 4.07,
      "boshuAvg30d": 1262.7,
      "heikinAvg30d": 3.019
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1681.575,
      "saikou": 8.99,
      "heikin": 3.68,
      "boshuAvg30d": 1262.7,
      "heikinAvg30d": 3.123
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1593.329,
      "saikou": 8.86,
      "heikin": 3.78,
      "boshuAvg30d": 1262.7,
      "heikinAvg30d": 3.118
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1590.614,
      "saikou": 8.95,
      "heikin": 3.79,
      "boshuAvg30d": 1327.9,
      "heikinAvg30d": 3.268
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1696.661,
      "saikou": 9.45,
      "heikin": 4.16,
      "boshuAvg30d": 1349.2,
      "heikinAvg30d": 3.03
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1520.234,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1371.9,
      "heikinAvg30d": 2.976
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1553.97,
      "saikou": 9.99,
      "heikin": 3.02,
      "boshuAvg30d": 1389.8,
      "heikinAvg30d": 2.899
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1606.445,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1390.7,
      "heikinAvg30d": 3.099
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1625.549,
      "saikou": 8.45,
      "heikin": 3.79,
      "boshuAvg30d": 1390.7,
      "heikinAvg30d": 3.176
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1223,
      "ouatsu": 1567.228,
      "saikou": 8.98,
      "heikin": 4.48,
      "boshuAvg30d": 1355.9,
      "heikinAvg30d": 3.304
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1226,
      "ouatsu": 1609.763,
      "saikou": 9.89,
      "heikin": 4.43,
      "boshuAvg30d": 1359.8,
      "heikinAvg30d": 3.345
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1231,
      "ouatsu": 1756.119,
      "saikou": 10,
      "heikin": 4.5,
      "boshuAvg30d": 1367.4,
      "heikinAvg30d": 3.367
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1231,
      "ouatsu": 1680.304,
      "saikou": 10,
      "heikin": 4.31,
      "boshuAvg30d": 1367.4,
      "heikinAvg30d": 3.349
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1228,
      "ouatsu": 1695.017,
      "saikou": 10,
      "heikin": 4.05,
      "boshuAvg30d": 1364.4,
      "heikinAvg30d": 3.266
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1227,
      "ouatsu": 1792.339,
      "saikou": 10,
      "heikin": 4.07,
      "boshuAvg30d": 1363.4,
      "heikinAvg30d": 3.185
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1207,
      "ouatsu": 1714.221,
      "saikou": 10,
      "heikin": 3.67,
      "boshuAvg30d": 1351.8,
      "heikinAvg30d": 3.134
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1207,
      "ouatsu": 1707.855,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1351.8,
      "heikinAvg30d": 3.135
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1207,
      "ouatsu": 1660.22,
      "saikou": 10,
      "heikin": 4.13,
      "boshuAvg30d": 1348.8,
      "heikinAvg30d": 3.289
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1205,
      "ouatsu": 1480.166,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1343.7,
      "heikinAvg30d": 3.323
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1202,
      "ouatsu": 1397.907,
      "saikou": 8.59,
      "heikin": 3.15,
      "boshuAvg30d": 1338.9,
      "heikinAvg30d": 3.372
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1196,
      "ouatsu": 1449.638,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1332.1,
      "heikinAvg30d": 3.403
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1868.872,
      "saikou": 10,
      "heikin": 4.14,
      "boshuAvg30d": 1370.2,
      "heikinAvg30d": 3.288
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1743.59,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1370.2,
      "heikinAvg30d": 3.532
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1872.719,
      "saikou": 10,
      "heikin": 4,
      "boshuAvg30d": 1370.3,
      "heikinAvg30d": 3.636
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1806.037,
      "saikou": 10,
      "heikin": 4.23,
      "boshuAvg30d": 1368.4,
      "heikinAvg30d": 3.828
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1729.82,
      "saikou": 10,
      "heikin": 4.35,
      "boshuAvg30d": 1360.5,
      "heikinAvg30d": 3.91
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1772.7,
      "saikou": 10,
      "heikin": 4.15,
      "boshuAvg30d": 1356.0,
      "heikinAvg30d": 3.95
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1790.468,
      "saikou": 10,
      "heikin": 4.56,
      "boshuAvg30d": 1348.4,
      "heikinAvg30d": 3.993
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1822.667,
      "saikou": 10,
      "heikin": 4.33,
      "boshuAvg30d": 1348.4,
      "heikinAvg30d": 3.935
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1894.841,
      "saikou": 10,
      "heikin": 4.07,
      "boshuAvg30d": 1348.9,
      "heikinAvg30d": 3.868
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1895.664,
      "saikou": 10,
      "heikin": 3.88,
      "boshuAvg30d": 1347.9,
      "heikinAvg30d": 3.702
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1912.39,
      "saikou": 10,
      "heikin": 4.08,
      "boshuAvg30d": 1342.5,
      "heikinAvg30d": 3.676
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1941.563,
      "saikou": 9.89,
      "heikin": 3.86,
      "boshuAvg30d": 1339.1,
      "heikinAvg30d": 3.599
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1151,
      "ouatsu": 1935.672,
      "saikou": 9.17,
      "heikin": 3.91,
      "boshuAvg30d": 1252.2,
      "heikinAvg30d": 3.388
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1154,
      "ouatsu": 2078.809,
      "saikou": 8.47,
      "heikin": 3.6,
      "boshuAvg30d": 1255.2,
      "heikinAvg30d": 3.472
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1155,
      "ouatsu": 2031.189,
      "saikou": 8.59,
      "heikin": 3.26,
      "boshuAvg30d": 1256.6,
      "heikinAvg30d": 3.316
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1150,
      "ouatsu": 2117.8,
      "saikou": 8.11,
      "heikin": 3.13,
      "boshuAvg30d": 1249.8,
      "heikinAvg30d": 3.226
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1141,
      "ouatsu": 1875.121,
      "saikou": 8.11,
      "heikin": 3.33,
      "boshuAvg30d": 1242.6,
      "heikinAvg30d": 3.197
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1134,
      "ouatsu": 1830.83,
      "saikou": 6.88,
      "heikin": 2.93,
      "boshuAvg30d": 1234.7,
      "heikinAvg30d": 3.01
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
        "saikou": 7.23,
        "heikin": 2.4,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.131
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 114.908,
        "saikou": 5,
        "heikin": 1.13,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 0.982
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 200.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.096
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 151.958,
        "saikou": 5.82,
        "heikin": 1.43,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 0.962
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.25
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 152.958,
        "saikou": 3.5,
        "heikin": 1.54,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.447
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 154.908,
        "saikou": 3.95,
        "heikin": 1.58,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.272
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 195.697,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.111
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.361
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 171.558,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.151
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 203.208,
        "saikou": 1.13,
        "heikin": 1.07,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.278
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 203.208,
        "saikou": 1.17,
        "heikin": 1.1,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.425
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 154.908,
        "saikou": 4.2,
        "heikin": 1.75,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.825
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 197.461,
        "saikou": 6.87,
        "heikin": 1.38,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.408
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 191.958,
        "saikou": 8.85,
        "heikin": 2.1,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.27
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 234.511,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.311
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 191.958,
        "saikou": 9.8,
        "heikin": 0.97,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 0.903
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 234.511,
        "saikou": 1.01,
        "heikin": 0.91,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 0.977
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 0.917
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 183.878,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 0.94
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.0
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 151.958,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.012
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 184.828,
        "saikou": 1.01,
        "heikin": 0.92,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 0.913
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 143.878,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 0.942
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 150.808,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.018
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 179.778,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 0.966
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 193.908,
        "saikou": 8,
        "heikin": 1.23,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.308
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 222.878,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.23
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 193.908,
        "saikou": 8,
        "heikin": 1.12,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.256
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 152.958,
        "saikou": 9.8,
        "heikin": 1.38,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.434
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 234.963,
        "saikou": 2.25,
        "heikin": 0.88,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.085
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.863
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 155.963,
        "saikou": 2.9,
        "heikin": 2.86,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.275
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 154.013,
        "saikou": 6.4,
        "heikin": 5.6,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.252
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 89.908,
        "saikou": 6.92,
        "heikin": 6.56,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.254
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 127.045,
        "saikou": 7.35,
        "heikin": 6.03,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.164
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 87.94,
        "saikou": 6.95,
        "heikin": 6.71,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.163
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 152.045,
        "saikou": 6.96,
        "heikin": 5.22,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.342
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 114.908,
        "saikou": 5.26,
        "heikin": 4.71,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.81
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 150.7,
        "saikou": 4.58,
        "heikin": 3.28,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.714
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 193.908,
        "saikou": 3.52,
        "heikin": 3.2,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.834
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 234.508,
        "saikou": 2.99,
        "heikin": 2.21,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.623
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 154.908,
        "saikou": 2.69,
        "heikin": 2.39,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.243
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 195.508,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.728
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 193.908,
        "saikou": 3.7,
        "heikin": 0.94,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.294
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 234.508,
        "saikou": 2.77,
        "heikin": 2.08,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.343
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 154.908,
        "saikou": 2.68,
        "heikin": 2.3,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.232
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 195.508,
        "saikou": 1.85,
        "heikin": 1.52,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.298
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 32,
        "ouatsu": 67.564,
        "saikou": 7.9,
        "heikin": 7.33,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 7.503
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 32,
        "ouatsu": 67.564,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 7.749
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 32,
        "ouatsu": 99.442,
        "saikou": 8.14,
        "heikin": 7.24,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 7.968
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 32,
        "ouatsu": 98.092,
        "saikou": 8.06,
        "heikin": 7.22,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 8.013
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 32,
        "ouatsu": 96.094,
        "saikou": 8.06,
        "heikin": 7.2,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 8.053
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 32,
        "ouatsu": 97.444,
        "saikou": 8.06,
        "heikin": 7.22,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 8.094
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 97.942,
        "saikou": 7.56,
        "heikin": 6.75,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 8.115
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 99.442,
        "saikou": 7.48,
        "heikin": 6.71,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 8.069
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 101.441,
        "saikou": 7.44,
        "heikin": 6.69,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 8.066
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 101.441,
        "saikou": 7.14,
        "heikin": 6.56,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 8.057
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 101.441,
        "saikou": 7.99,
        "heikin": 6.72,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 8.094
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 101.441,
        "saikou": 7.99,
        "heikin": 6.75,
        "boshuAvg30d": 166.4,
        "heikinAvg30d": 8.098
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 113.441,
        "saikou": 8.04,
        "heikin": 6.57,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 8.235
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 111.941,
        "saikou": 9,
        "heikin": 7.1,
        "boshuAvg30d": 180.1,
        "heikinAvg30d": 8.341
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 113.441,
        "saikou": 10,
        "heikin": 7.42,
        "boshuAvg30d": 185.7,
        "heikinAvg30d": 8.445
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 111.941,
        "saikou": 9.99,
        "heikin": 7.33,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 8.436
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 99.443,
        "saikou": 7.14,
        "heikin": 6.94,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 8.686
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 97.943,
        "saikou": 7.38,
        "heikin": 6.39,
        "boshuAvg30d": 189.5,
        "heikinAvg30d": 8.627
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 135.439,
        "saikou": 8.04,
        "heikin": 6.24,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 8.321
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 135.439,
        "saikou": 9.89,
        "heikin": 7.38,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 8.316
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 146,
        "ouatsu": 131.484,
        "saikou": 10,
        "heikin": 7.97,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 8.336
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 146,
        "ouatsu": 131.484,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 8.346
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 147,
        "ouatsu": 135.439,
        "saikou": 10,
        "heikin": 8.13,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 8.359
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 147,
        "ouatsu": 135.439,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 8.376
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 143,
        "ouatsu": 129.678,
        "saikou": 9,
        "heikin": 6.94,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 8.511
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 143,
        "ouatsu": 119.643,
        "saikou": 7.8,
        "heikin": 5.48,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 8.467
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 143,
        "ouatsu": 111.439,
        "saikou": 5.44,
        "heikin": 3.32,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 8.26
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 142,
        "ouatsu": 63.509,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 8.163
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 142,
        "ouatsu": 63.509,
        "saikou": 4.49,
        "heikin": 4.49,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 8.151
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 140,
        "ouatsu": 83.609,
        "saikou": 5.5,
        "heikin": 4.4,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 7.635
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 89.439,
        "saikou": 4.49,
        "heikin": 2.4,
        "boshuAvg30d": 185.9,
        "heikinAvg30d": 8.115
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 89.439,
        "saikou": 4,
        "heikin": 2.3,
        "boshuAvg30d": 185.9,
        "heikinAvg30d": 7.582
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 65.439,
        "saikou": 4.49,
        "heikin": 4.05,
        "boshuAvg30d": 185.9,
        "heikinAvg30d": 7.65
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 63.939,
        "saikou": 4.49,
        "heikin": 4.05,
        "boshuAvg30d": 185.0,
        "heikinAvg30d": 7.456
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 65.439,
        "saikou": 6.49,
        "heikin": 5.49,
        "boshuAvg30d": 183.1,
        "heikinAvg30d": 7.332
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 60.109,
        "saikou": 6,
        "heikin": 4.64,
        "boshuAvg30d": 181.3,
        "heikinAvg30d": 7.104
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 61.478,
        "saikou": 4.7,
        "heikin": 4.36,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 7.26
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 46.093,
        "saikou": 4.49,
        "heikin": 4.05,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 7.111
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 94.263,
        "saikou": 3.69,
        "heikin": 2.27,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 7.334
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 60.163,
        "saikou": 4,
        "heikin": 3.86,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 7.448
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 82.138,
        "saikou": 3.99,
        "heikin": 2.96,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 7.5
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 95.488,
        "saikou": 4.78,
        "heikin": 4.72,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 7.514
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 126,
        "ouatsu": 99.443,
        "saikou": 5.09,
        "heikin": 4.74,
        "boshuAvg30d": 95.1,
        "heikinAvg30d": 7.655
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 126,
        "ouatsu": 99.443,
        "saikou": 5.03,
        "heikin": 4.69,
        "boshuAvg30d": 95.1,
        "heikinAvg30d": 7.827
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 126,
        "ouatsu": 99.443,
        "saikou": 6,
        "heikin": 4.54,
        "boshuAvg30d": 95.1,
        "heikinAvg30d": 7.832
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 125,
        "ouatsu": 99.443,
        "saikou": 4.99,
        "heikin": 4.67,
        "boshuAvg30d": 94.1,
        "heikinAvg30d": 7.794
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 123,
        "ouatsu": 99.443,
        "saikou": 5.09,
        "heikin": 4.73,
        "boshuAvg30d": 93.0,
        "heikinAvg30d": 7.928
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 123,
        "ouatsu": 97.943,
        "saikou": 6,
        "heikin": 5.56,
        "boshuAvg30d": 92.1,
        "heikinAvg30d": 8.074
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 354.094,
        "saikou": 10,
        "heikin": 4.86,
        "boshuAvg30d": 442.0,
        "heikinAvg30d": 3.511
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 362.683,
        "saikou": 10,
        "heikin": 4.78,
        "boshuAvg30d": 442.0,
        "heikinAvg30d": 3.482
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 364.633,
        "saikou": 10,
        "heikin": 4.48,
        "boshuAvg30d": 442.0,
        "heikinAvg30d": 3.347
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 374.074,
        "saikou": 10,
        "heikin": 4.36,
        "boshuAvg30d": 442.0,
        "heikinAvg30d": 3.375
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 362.031,
        "saikou": 10,
        "heikin": 4.37,
        "boshuAvg30d": 440.1,
        "heikinAvg30d": 3.296
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 362.031,
        "saikou": 10,
        "heikin": 4.37,
        "boshuAvg30d": 440.0,
        "heikinAvg30d": 3.332
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 374.003,
        "saikou": 10,
        "heikin": 4.73,
        "boshuAvg30d": 438.8,
        "heikinAvg30d": 3.321
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 370.634,
        "saikou": 10,
        "heikin": 4.9,
        "boshuAvg30d": 440.0,
        "heikinAvg30d": 3.475
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 372.154,
        "saikou": 10,
        "heikin": 4.9,
        "boshuAvg30d": 440.8,
        "heikinAvg30d": 3.504
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 375.924,
        "saikou": 10,
        "heikin": 4.91,
        "boshuAvg30d": 441.0,
        "heikinAvg30d": 3.506
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 375.924,
        "saikou": 8.99,
        "heikin": 4.75,
        "boshuAvg30d": 441.0,
        "heikinAvg30d": 3.435
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 368.338,
        "saikou": 8.86,
        "heikin": 5.07,
        "boshuAvg30d": 441.0,
        "heikinAvg30d": 3.486
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 378.012,
        "saikou": 8.95,
        "heikin": 5.4,
        "boshuAvg30d": 461.7,
        "heikinAvg30d": 3.806
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 363.264,
        "saikou": 9.45,
        "heikin": 5.92,
        "boshuAvg30d": 469.7,
        "heikinAvg30d": 3.774
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 257.235,
        "saikou": 7.8,
        "heikin": 4.64,
        "boshuAvg30d": 474.7,
        "heikinAvg30d": 3.812
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 310.328,
        "saikou": 7.8,
        "heikin": 4.07,
        "boshuAvg30d": 479.7,
        "heikinAvg30d": 3.76
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 499.045,
        "saikou": 10,
        "heikin": 4.67,
        "boshuAvg30d": 479.7,
        "heikinAvg30d": 4.13
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 475.299,
        "saikou": 7.96,
        "heikin": 5,
        "boshuAvg30d": 479.7,
        "heikinAvg30d": 4.111
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 456.424,
        "saikou": 8.14,
        "heikin": 5.51,
        "boshuAvg30d": 476.8,
        "heikinAvg30d": 4.316
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 458.473,
        "saikou": 8.29,
        "heikin": 5.2,
        "boshuAvg30d": 476.8,
        "heikinAvg30d": 4.339
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 501.098,
        "saikou": 9.65,
        "heikin": 5.04,
        "boshuAvg30d": 476.8,
        "heikinAvg30d": 4.209
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 482.269,
        "saikou": 9.68,
        "heikin": 5.26,
        "boshuAvg30d": 475.8,
        "heikinAvg30d": 4.125
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 538.264,
        "saikou": 9.14,
        "heikin": 5.05,
        "boshuAvg30d": 473.0,
        "heikinAvg30d": 4.122
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 536.364,
        "saikou": 9.14,
        "heikin": 4.77,
        "boshuAvg30d": 473.0,
        "heikinAvg30d": 4.108
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 526.368,
        "saikou": 10,
        "heikin": 4.5,
        "boshuAvg30d": 471.7,
        "heikinAvg30d": 3.957
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 546.859,
        "saikou": 10,
        "heikin": 4.26,
        "boshuAvg30d": 471.7,
        "heikinAvg30d": 4.006
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 620.996,
        "saikou": 5.9,
        "heikin": 4.03,
        "boshuAvg30d": 468.7,
        "heikinAvg30d": 4.104
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 659.852,
        "saikou": 4.6,
        "heikin": 3.1,
        "boshuAvg30d": 468.2,
        "heikinAvg30d": 4.188
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 684.88,
        "saikou": 4.6,
        "heikin": 3.36,
        "boshuAvg30d": 467.2,
        "heikinAvg30d": 4.252
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 704.561,
        "saikou": 5.85,
        "heikin": 3.67,
        "boshuAvg30d": 467.0,
        "heikinAvg30d": 4.094
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 702.269,
        "saikou": 5.23,
        "heikin": 3.22,
        "boshuAvg30d": 465.9,
        "heikinAvg30d": 4.005
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 680.163,
        "saikou": 5.13,
        "heikin": 3.37,
        "boshuAvg30d": 465.9,
        "heikinAvg30d": 3.913
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 702.677,
        "saikou": 5.96,
        "heikin": 3.75,
        "boshuAvg30d": 465.9,
        "heikinAvg30d": 4.151
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 614.888,
        "saikou": 6.74,
        "heikin": 3.5,
        "boshuAvg30d": 465.8,
        "heikinAvg30d": 4.314
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 651.761,
        "saikou": 6.83,
        "heikin": 3.25,
        "boshuAvg30d": 461.7,
        "heikinAvg30d": 4.225
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 625.761,
        "saikou": 5.99,
        "heikin": 2.52,
        "boshuAvg30d": 461.3,
        "heikinAvg30d": 4.189
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 655.886,
        "saikou": 6.66,
        "heikin": 3.66,
        "boshuAvg30d": 463.5,
        "heikinAvg30d": 4.315
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 629.813,
        "saikou": 6.34,
        "heikin": 3.17,
        "boshuAvg30d": 463.5,
        "heikinAvg30d": 4.225
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 650.149,
        "saikou": 4.98,
        "heikin": 3.23,
        "boshuAvg30d": 464.0,
        "heikinAvg30d": 4.263
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 646.854,
        "saikou": 5.33,
        "heikin": 3.24,
        "boshuAvg30d": 464.0,
        "heikinAvg30d": 4.166
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 589.726,
        "saikou": 5.32,
        "heikin": 3.17,
        "boshuAvg30d": 462.0,
        "heikinAvg30d": 4.185
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 604.967,
        "saikou": 5.32,
        "heikin": 3.38,
        "boshuAvg30d": 462.0,
        "heikinAvg30d": 4.16
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 608.028,
        "saikou": 5.36,
        "heikin": 3.71,
        "boshuAvg30d": 461.1,
        "heikinAvg30d": 3.995
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 671.244,
        "saikou": 5.5,
        "heikin": 3.33,
        "boshuAvg30d": 461.1,
        "heikinAvg30d": 4.16
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 515.478,
        "saikou": 5.99,
        "heikin": 3.04,
        "boshuAvg30d": 461.5,
        "heikinAvg30d": 3.858
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 582.545,
        "saikou": 5.28,
        "heikin": 3.12,
        "boshuAvg30d": 459.5,
        "heikinAvg30d": 4.015
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 528.694,
        "saikou": 5.19,
        "heikin": 3.65,
        "boshuAvg30d": 457.5,
        "heikinAvg30d": 4.056
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 554.679,
        "saikou": 5.99,
        "heikin": 3.98,
        "boshuAvg30d": 456.5,
        "heikinAvg30d": 4.021
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 209.04,
        "saikou": 2,
        "heikin": 1.54,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.846
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 209.04,
        "saikou": 1.99,
        "heikin": 1.2,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.752
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 228.878,
        "saikou": 1.99,
        "heikin": 1.58,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.793
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 228.878,
        "saikou": 1.99,
        "heikin": 1.71,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.9
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 209.044,
        "saikou": 2,
        "heikin": 1.41,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.798
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 214.963,
        "saikou": 1.99,
        "heikin": 1.42,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.838
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 240.618,
        "saikou": 1.98,
        "heikin": 1.6,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.795
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 234.918,
        "saikou": 1.98,
        "heikin": 1.67,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.994
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 260.567,
        "saikou": 1.98,
        "heikin": 1.69,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.032
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 284.236,
        "saikou": 1.99,
        "heikin": 1.59,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.93
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 267.947,
        "saikou": 2.12,
        "heikin": 1.75,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.059
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 287.532,
        "saikou": 2.1,
        "heikin": 1.73,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.035
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 305.451,
        "saikou": 2.27,
        "heikin": 1.89,
        "boshuAvg30d": 72.6,
        "heikinAvg30d": 2.071
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 297.311,
        "saikou": 2.79,
        "heikin": 1.7,
        "boshuAvg30d": 75.7,
        "heikinAvg30d": 2.042
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 297.311,
        "saikou": 2.98,
        "heikin": 1.82,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 2.158
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 249.822,
        "saikou": 2.98,
        "heikin": 1.87,
        "boshuAvg30d": 80.7,
        "heikinAvg30d": 2.055
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 234.112,
        "saikou": 3.73,
        "heikin": 2.81,
        "boshuAvg30d": 80.7,
        "heikinAvg30d": 2.294
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 241.991,
        "saikou": 3.61,
        "heikin": 2.6,
        "boshuAvg30d": 80.7,
        "heikinAvg30d": 2.367
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 267.832,
        "saikou": 4.07,
        "heikin": 3.1,
        "boshuAvg30d": 84.8,
        "heikinAvg30d": 2.67
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 300.724,
        "saikou": 4.08,
        "heikin": 3.18,
        "boshuAvg30d": 84.8,
        "heikinAvg30d": 2.806
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 274.939,
        "saikou": 4.05,
        "heikin": 2.98,
        "boshuAvg30d": 85.7,
        "heikinAvg30d": 3.056
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 180.346,
        "saikou": 4.35,
        "heikin": 2.21,
        "boshuAvg30d": 84.8,
        "heikinAvg30d": 3.147
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 184.322,
        "saikou": 3.78,
        "heikin": 1.96,
        "boshuAvg30d": 83.8,
        "heikinAvg30d": 2.938
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 225.049,
        "saikou": 3.5,
        "heikin": 2.12,
        "boshuAvg30d": 82.8,
        "heikinAvg30d": 2.668
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 234.29,
        "saikou": 3.49,
        "heikin": 3,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.72
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 198.627,
        "saikou": 3.72,
        "heikin": 2.69,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.675
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 220.795,
        "saikou": 4.02,
        "heikin": 3.27,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.597
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 134.878,
        "saikou": 3.49,
        "heikin": 3.07,
        "boshuAvg30d": 79.6,
        "heikinAvg30d": 2.574
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 100.061,
        "saikou": 3.49,
        "heikin": 3.14,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 2.729
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 110.061,
        "saikou": 4.27,
        "heikin": 3.3,
        "boshuAvg30d": 78.7,
        "heikinAvg30d": 2.738
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 266.56,
        "saikou": 4.27,
        "heikin": 2.44,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.492
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 358.164,
        "saikou": 5.1,
        "heikin": 2.26,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.499
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 361.883,
        "saikou": 2.37,
        "heikin": 2.06,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.505
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 361.883,
        "saikou": 2.76,
        "heikin": 2.38,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.7
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 359.984,
        "saikou": 2.77,
        "heikin": 2.27,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.594
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 380.455,
        "saikou": 3.66,
        "heikin": 2.33,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 2.5
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 389.955,
        "saikou": 7.45,
        "heikin": 2.28,
        "boshuAvg30d": 75.4,
        "heikinAvg30d": 2.31
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 418.999,
        "saikou": 7.51,
        "heikin": 2.22,
        "boshuAvg30d": 75.4,
        "heikinAvg30d": 2.217
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 418.998,
        "saikou": 2.47,
        "heikin": 1.59,
        "boshuAvg30d": 75.4,
        "heikinAvg30d": 2.056
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 420.088,
        "saikou": 2,
        "heikin": 1.32,
        "boshuAvg30d": 75.4,
        "heikinAvg30d": 2.108
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 414.122,
        "saikou": 2.22,
        "heikin": 1.32,
        "boshuAvg30d": 75.4,
        "heikinAvg30d": 2.209
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 414.122,
        "saikou": 2.19,
        "heikin": 1.28,
        "boshuAvg30d": 75.4,
        "heikinAvg30d": 2.213
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 416.108,
        "saikou": 1.99,
        "heikin": 1.24,
        "boshuAvg30d": 75.6,
        "heikinAvg30d": 2.061
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 393.706,
        "saikou": 3.58,
        "heikin": 1.97,
        "boshuAvg30d": 76.6,
        "heikinAvg30d": 2.189
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 372.889,
        "saikou": 4.42,
        "heikin": 1.78,
        "boshuAvg30d": 76.6,
        "heikinAvg30d": 2.217
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 362.7,
        "saikou": 3.31,
        "heikin": 2,
        "boshuAvg30d": 75.6,
        "heikinAvg30d": 2.177
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 354.7,
        "saikou": 2.1,
        "heikin": 1.37,
        "boshuAvg30d": 74.6,
        "heikinAvg30d": 2.157
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 387.619,
        "saikou": 3.07,
        "heikin": 1.85,
        "boshuAvg30d": 71.6,
        "heikinAvg30d": 2.142
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 1.55,
        "heikin": 0.44,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 0.938
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.1,
        "heikin": 0.65,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.054
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.7,
        "heikin": 0.61,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.024
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.85,
        "heikin": 0.52,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.15
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 8.072,
        "saikou": 1.45,
        "heikin": 0.73,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.235
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 7.822,
        "saikou": 1.5,
        "heikin": 0.94,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.024
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 10.098,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.208
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.433
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.29
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.397
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.61
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.97,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 1.54
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.95,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.689
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.495
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 1.569
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 1.585
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.8,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.634
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 1.93,
        "saikou": 2.6,
        "heikin": 2.6,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 2.018
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 1.93,
        "saikou": 2.35,
        "heikin": 2.35,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 2.552
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 1.93,
        "saikou": 3.5,
        "heikin": 3.5,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 2.478
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 1.93,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 3.439
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 1.93,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.801
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 1.93,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 3.227
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 1.93,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 3.012
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 1.93,
        "saikou": 3.4,
        "heikin": 3.4,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.124
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 1.93,
        "saikou": 3.35,
        "heikin": 3.35,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.406
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 1.93,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.271
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 1.93,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.199
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 1.93,
        "saikou": 3.45,
        "heikin": 3.45,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.098
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 1.93,
        "saikou": 3.45,
        "heikin": 3.45,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.661
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 1.93,
        "saikou": 5.1,
        "heikin": 5.1,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.943
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 1.93,
        "saikou": 5.6,
        "heikin": 5.6,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.456
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 26.93,
        "saikou": 4.7,
        "heikin": 4.7,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.054
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 26.93,
        "saikou": 5.6,
        "heikin": 5.4,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.323
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 1.93,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.34
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 1.93,
        "saikou": 4.4,
        "heikin": 4.4,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 3.22
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 1.93,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.781
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 1.93,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.457
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 8.91,
        "saikou": 5.87,
        "heikin": 5.87,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.605
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 1.93,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.915
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 1.93,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 2.03
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 1.93,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.136
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 1.93,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.938
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 1.93,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.934
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 1.93,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.868
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 1.93,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.67
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.772,
        "saikou": 2.95,
        "heikin": 2.95,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.61
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 26.93,
        "saikou": 2.45,
        "heikin": 0.54,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 1.255
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 116.91,
        "saikou": 1.98,
        "heikin": 1.15,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.134
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 140.855,
        "saikou": 2.01,
        "heikin": 0.71,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 1.796
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 119.281,
        "saikou": 2.44,
        "heikin": 1.09,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 1.711
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 115.303,
        "saikou": 1.78,
        "heikin": 0.99,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 1.653
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 111.405,
        "saikou": 1.77,
        "heikin": 0.98,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.627
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 113.403,
        "saikou": 1.84,
        "heikin": 0.99,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 1.743
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 142.804,
        "saikou": 2,
        "heikin": 1.07,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 1.906
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 142.804,
        "saikou": 2.44,
        "heikin": 1.31,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 2.011
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 1.98,
        "heikin": 1.22,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 1.968
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 1.98,
        "heikin": 1.42,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.037
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 142.804,
        "saikou": 2,
        "heikin": 0.97,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 1.963
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 1.98,
        "heikin": 1.62,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 1.771
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 118.859,
        "saikou": 2.1,
        "heikin": 1.7,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 1.919
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 123.655,
        "saikou": 2.4,
        "heikin": 1.49,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 1.873
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 143.26,
        "saikou": 2,
        "heikin": 0.72,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.024
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 108.083,
        "saikou": 2.44,
        "heikin": 1.22,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.037
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 51.916,
        "saikou": 2.7,
        "heikin": 2.25,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.209
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 45.958,
        "saikou": 3.95,
        "heikin": 2.67,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.402
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 45.958,
        "saikou": 3.95,
        "heikin": 3.04,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.589
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 65.566,
        "saikou": 3.95,
        "heikin": 2.36,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.67
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 196.71,
        "saikou": 5.95,
        "heikin": 2.97,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.934
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 195.267,
        "saikou": 5.95,
        "heikin": 2.96,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.944
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 197.252,
        "saikou": 5.95,
        "heikin": 2.89,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.835
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 198.695,
        "saikou": 3.5,
        "heikin": 2.9,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.501
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 203.111,
        "saikou": 4.45,
        "heikin": 2.95,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 2.341
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 144.993,
        "saikou": 5.13,
        "heikin": 2.93,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 2.287
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 45.958,
        "saikou": 5.95,
        "heikin": 3.6,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 2.715
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 45.958,
        "saikou": 2.93,
        "heikin": 2.5,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 2.576
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 45.958,
        "saikou": 4.45,
        "heikin": 2.97,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 2.599
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 45.958,
        "saikou": 3.4,
        "heikin": 2.62,
        "boshuAvg30d": 154.1,
        "heikinAvg30d": 2.519
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 45.958,
        "saikou": 3.95,
        "heikin": 2.66,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.414
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 45.958,
        "saikou": 3.95,
        "heikin": 2.86,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.614
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 45.958,
        "saikou": 2.3,
        "heikin": 1.98,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.539
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 44.515,
        "saikou": 2.67,
        "heikin": 2.3,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.621
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 44.515,
        "saikou": 2.5,
        "heikin": 2.25,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 2.714
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 45.958,
        "saikou": 4.45,
        "heikin": 2.51,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.683
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 89.261,
        "saikou": 3.44,
        "heikin": 1.36,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.482
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 42.001,
        "saikou": 3.7,
        "heikin": 2.39,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.447
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 45.861,
        "saikou": 2.19,
        "heikin": 1.98,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.536
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 45.861,
        "saikou": 2,
        "heikin": 1.92,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.479
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 40.008,
        "saikou": 1.98,
        "heikin": 1.9,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.447
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 42.006,
        "saikou": 1.98,
        "heikin": 1.9,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 2.433
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 43.991,
        "saikou": 2,
        "heikin": 1.96,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 2.362
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 132.605,
        "saikou": 4.64,
        "heikin": 2.95,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 2.293
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 222.543,
        "saikou": 3.98,
        "heikin": 3.32,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 2.353
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 222.543,
        "saikou": 2.8,
        "heikin": 2.03,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.294
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 131.103,
        "saikou": 1.98,
        "heikin": 0.64,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.933
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 27.548,
        "saikou": 2.8,
        "heikin": 1.89,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.032
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 226.136,
        "saikou": 1.76,
        "heikin": 1.67,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.631
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 214.049,
        "saikou": 2.29,
        "heikin": 1.68,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.697
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 236.582,
        "saikou": 2.2,
        "heikin": 1.63,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.804
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 238.948,
        "saikou": 2,
        "heikin": 1.63,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.726
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 238.948,
        "saikou": 2.2,
        "heikin": 1.63,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.633
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 238.948,
        "saikou": 2.38,
        "heikin": 2.13,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.807
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 253.839,
        "saikou": 3.14,
        "heikin": 2.29,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.003
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 253.839,
        "saikou": 6.13,
        "heikin": 3.19,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.153
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 222.105,
        "saikou": 6.35,
        "heikin": 5.28,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.099
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 222.105,
        "saikou": 6.75,
        "heikin": 5.48,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.391
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 222.105,
        "saikou": 4.83,
        "heikin": 3.99,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.706
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 222.105,
        "saikou": 6.26,
        "heikin": 4.95,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.664
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 224.073,
        "saikou": 4.83,
        "heikin": 3.82,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 2.941
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 208.159,
        "saikou": 6.26,
        "heikin": 4.95,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.128
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 208.159,
        "saikou": 3.6,
        "heikin": 3.11,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.832
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 239.893,
        "saikou": 2.66,
        "heikin": 2.34,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.583
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 239.893,
        "saikou": 6.46,
        "heikin": 4.2,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.572
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 239.893,
        "saikou": 8.45,
        "heikin": 5.19,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.789
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 208.159,
        "saikou": 8.98,
        "heikin": 6.85,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 1.975
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 208.159,
        "saikou": 8.92,
        "heikin": 6.83,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.021
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 239.893,
        "saikou": 8.92,
        "heikin": 6.13,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.22
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 239.893,
        "saikou": 8.68,
        "heikin": 4.25,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.074
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 239.893,
        "saikou": 8.92,
        "heikin": 5.5,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.017
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 239.893,
        "saikou": 8.55,
        "heikin": 4.27,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 1.981
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 239.893,
        "saikou": 7.07,
        "heikin": 3.66,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.781
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 239.893,
        "saikou": 6.33,
        "heikin": 4.14,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.749
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 208.159,
        "saikou": 8.52,
        "heikin": 6.51,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.967
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 96.026,
        "saikou": 3.26,
        "heikin": 2.52,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 1.93
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 96.026,
        "saikou": 4,
        "heikin": 2.57,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 1.931
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 96.026,
        "saikou": 4,
        "heikin": 2.65,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.156
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 208.159,
        "saikou": 9.1,
        "heikin": 6.94,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.343
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 96.026,
        "saikou": 4.54,
        "heikin": 2.97,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.894
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 6.33,
        "heikin": 4.19,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.715
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 7.24,
        "heikin": 4.65,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.261
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 190.331,
        "saikou": 6.4,
        "heikin": 5.34,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.663
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 190.331,
        "saikou": 6.4,
        "heikin": 5.31,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.977
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 188.341,
        "saikou": 8.85,
        "heikin": 7.16,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.227
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 188.341,
        "saikou": 7.85,
        "heikin": 6.4,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.197
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 204.255,
        "saikou": 7.5,
        "heikin": 5.86,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.974
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 198.967,
        "saikou": 7.24,
        "heikin": 5.85,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.562
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 224.073,
        "saikou": 8.92,
        "heikin": 6.5,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.36
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 224.073,
        "saikou": 7.5,
        "heikin": 5.6,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 2.98
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 239.94,
        "saikou": 7.24,
        "heikin": 5.73,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.086
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 224.073,
        "saikou": 6.32,
        "heikin": 4.77,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.002
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 271.674,
        "saikou": 5.19,
        "heikin": 2.79,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.867
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 255.807,
        "saikou": 4.39,
        "heikin": 2.66,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.526
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 234.551,
        "saikou": 4.55,
        "heikin": 3.8,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.58
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 234.653,
        "saikou": 2.8,
        "heikin": 1.75,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 1.781
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 107.473,
        "saikou": 1.7,
        "heikin": 0.89,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.786
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.805
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.809
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.797
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.791
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.802
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 86.473,
        "saikou": 1.7,
        "heikin": 1.12,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 84.93,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.882
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 95.473,
        "saikou": 1.7,
        "heikin": 1.5,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.897
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 96.473,
        "saikou": 1.7,
        "heikin": 1.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.933
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 95.473,
        "saikou": 1.7,
        "heikin": 1.23,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.915
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 94.473,
        "saikou": 1.7,
        "heikin": 1.46,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.861
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 98.473,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.949
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 97.473,
        "saikou": 2.3,
        "heikin": 1.22,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.929
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 98.473,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.988
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 99.473,
        "saikou": 1.7,
        "heikin": 1.17,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.904
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 82.473,
        "saikou": 2,
        "heikin": 1.18,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.892
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 82.473,
        "saikou": 2,
        "heikin": 1.68,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.912
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 61.473,
        "saikou": 4.97,
        "heikin": 2.27,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.962
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 2.48,
        "heikin": 1.77,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 0.964
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 2.5,
        "heikin": 1.76,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.982
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 2.5,
        "heikin": 1.76,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.955
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 4.97,
        "heikin": 2.23,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.953
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 2.99,
        "heikin": 1.86,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.972
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 2.99,
        "heikin": 1.86,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.13
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 61.473,
        "saikou": 2.99,
        "heikin": 1.86,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.096
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 58.43,
        "saikou": 3.49,
        "heikin": 1.87,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.031
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 58.43,
        "saikou": 3.49,
        "heikin": 1.87,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.036
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 58.43,
        "saikou": 3.49,
        "heikin": 1.87,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.001
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 58.43,
        "saikou": 3.49,
        "heikin": 1.87,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.925
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 61.473,
        "saikou": 2.49,
        "heikin": 1.77,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.957
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 61.473,
        "saikou": 7.14,
        "heikin": 2.64,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.964
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 75.473,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.988
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.975
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.006
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.003
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.043
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.055
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.058
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.081
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.061
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.07
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 1.65,
        "heikin": 0.98,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.71
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 95.473,
        "saikou": 1.7,
        "heikin": 0.68,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.724
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 109.473,
        "saikou": 1.7,
        "heikin": 1.03,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.737
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 95.473,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.754
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 95.473,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.764
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 95.473,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.821
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 189.878,
        "saikou": 2,
        "heikin": 1.34,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 3.842
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 160.786,
        "saikou": 2.15,
        "heikin": 1.3,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 3.216
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 195.592,
        "saikou": 2.12,
        "heikin": 1.33,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 2.855
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 195.59,
        "saikou": 2.13,
        "heikin": 1.37,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 2.687
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 185.964,
        "saikou": 2.19,
        "heikin": 1.52,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 2.57
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 185.964,
        "saikou": 3.36,
        "heikin": 2.64,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 2.807
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 211.745,
        "saikou": 5.75,
        "heikin": 4.09,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 3.06
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 207.917,
        "saikou": 6.06,
        "heikin": 4.33,
        "boshuAvg30d": 164.7,
        "heikinAvg30d": 3.344
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 209.761,
        "saikou": 6.38,
        "heikin": 4.49,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.596
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 268.745,
        "saikou": 7.43,
        "heikin": 6.17,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.931
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 268.745,
        "saikou": 7.22,
        "heikin": 5.73,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 4.128
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 193.445,
        "saikou": 7.47,
        "heikin": 5.26,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.963
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 193.469,
        "saikou": 7.48,
        "heikin": 5.26,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 3.653
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 293.469,
        "saikou": 7.37,
        "heikin": 5.4,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 3.089
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 206.469,
        "saikou": 6.31,
        "heikin": 4.5,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 2.648
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 195.991,
        "saikou": 6.38,
        "heikin": 4.6,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 2.792
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 203.677,
        "saikou": 6.66,
        "heikin": 4.72,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 3.005
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 205.551,
        "saikou": 7.18,
        "heikin": 5.04,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 3.316
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 196.105,
        "saikou": 7.37,
        "heikin": 5.13,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 3.447
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 194.121,
        "saikou": 7.3,
        "heikin": 5.09,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 3.405
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 193.684,
        "saikou": 9.65,
        "heikin": 5.79,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 3.286
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 235.684,
        "saikou": 9.61,
        "heikin": 6.48,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 3.38
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 151.616,
        "saikou": 6.86,
        "heikin": 4.37,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 3.342
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 249.618,
        "saikou": 9.58,
        "heikin": 6.49,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 3.25
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 166.67,
        "saikou": 8.61,
        "heikin": 4.46,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 2.897
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 214.659,
        "saikou": 8.61,
        "heikin": 5.42,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 3.026
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 198.605,
        "saikou": 10,
        "heikin": 5.95,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 3.351
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 196.705,
        "saikou": 10,
        "heikin": 6.34,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 3.81
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 153.205,
        "saikou": 8.59,
        "heikin": 5.41,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 4.143
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 196.105,
        "saikou": 10,
        "heikin": 6.96,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 4.334
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 258.121,
        "saikou": 10,
        "heikin": 8.44,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 4.446
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 257.479,
        "saikou": 10,
        "heikin": 8.39,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 5.241
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 246.479,
        "saikou": 10,
        "heikin": 8.18,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 5.34
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 299.479,
        "saikou": 10,
        "heikin": 7.74,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 5.712
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 277.479,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 5.68
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 292.638,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.8
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 267.204,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 5.825
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 294.972,
        "saikou": 10,
        "heikin": 7.71,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 5.699
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 309.024,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 5.439
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 322.628,
        "saikou": 10,
        "heikin": 8.56,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 5.02
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 318.012,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 4.914
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 275.996,
        "saikou": 9.89,
        "heikin": 7.69,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 4.799
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 288.851,
        "saikou": 9.17,
        "heikin": 7.71,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 4.595
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 264.827,
        "saikou": 8.47,
        "heikin": 6.64,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.441
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 243.851,
        "saikou": 8.59,
        "heikin": 6.73,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.495
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 262.851,
        "saikou": 8.11,
        "heikin": 5.96,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.091
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 272.477,
        "saikou": 8.11,
        "heikin": 6.48,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.096
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 210.477,
        "saikou": 6.88,
        "heikin": 4.95,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 3.542
      }
    ]
  }
};
