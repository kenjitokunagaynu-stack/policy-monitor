// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/24〜2026/09/22）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-23",
  "fetchedAt": "2026-09-23",
  "avgWindowLabel": "過去30日平均（2026/08/24〜2026/09/22）",
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
      "boshu": 1249,
      "ouatsu": 1362.863,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1398.5,
      "heikinAvg30d": 2.9
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1249,
      "ouatsu": 1320.466,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1398.5,
      "heikinAvg30d": 2.82
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1249,
      "ouatsu": 1427.776,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1398.5,
      "heikinAvg30d": 2.91
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1249,
      "ouatsu": 1524.887,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1397.9,
      "heikinAvg30d": 2.905
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1244,
      "ouatsu": 1488.753,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1392.9,
      "heikinAvg30d": 2.942
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1243,
      "ouatsu": 1620.916,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1391.7,
      "heikinAvg30d": 2.978
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1243,
      "ouatsu": 1815.172,
      "saikou": 9.4,
      "heikin": 3.05,
      "boshuAvg30d": 1399.7,
      "heikinAvg30d": 3.029
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1244,
      "ouatsu": 1719.139,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1400.7,
      "heikinAvg30d": 3.098
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1247,
      "ouatsu": 1708.337,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1404.0,
      "heikinAvg30d": 3.145
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1247,
      "ouatsu": 1683.445,
      "saikou": 10,
      "heikin": 3.73,
      "boshuAvg30d": 1404.3,
      "heikinAvg30d": 3.126
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1247,
      "ouatsu": 1863.036,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1404.3,
      "heikinAvg30d": 3.228
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1247,
      "ouatsu": 1849.436,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1404.3,
      "heikinAvg30d": 3.205
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1313,
      "ouatsu": 1846.311,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1469.5,
      "heikinAvg30d": 3.482
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1769.257,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1491.0,
      "heikinAvg30d": 3.388
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1357,
      "ouatsu": 1583.697,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1514.0,
      "heikinAvg30d": 3.407
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1375,
      "ouatsu": 1686.471,
      "saikou": 10,
      "heikin": 3.16,
      "boshuAvg30d": 1530.9,
      "heikinAvg30d": 3.41
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1376,
      "ouatsu": 1630.409,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1531.7,
      "heikinAvg30d": 3.641
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1376,
      "ouatsu": 1660.596,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1531.7,
      "heikinAvg30d": 3.847
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1313,
      "ouatsu": 1546.203,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1485.5,
      "heikinAvg30d": 3.84
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1317,
      "ouatsu": 1436.846,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1489.7,
      "heikinAvg30d": 3.745
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1325,
      "ouatsu": 1343.529,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1497.5,
      "heikinAvg30d": 3.726
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1325,
      "ouatsu": 1276.663,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1497.5,
      "heikinAvg30d": 3.756
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1322,
      "ouatsu": 1208.34,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1493.9,
      "heikinAvg30d": 3.689
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1321,
      "ouatsu": 1240.518,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1493.2,
      "heikinAvg30d": 3.672
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1314,
      "ouatsu": 1313.338,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1484.1,
      "heikinAvg30d": 3.498
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1314,
      "ouatsu": 1358.862,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1484.1,
      "heikinAvg30d": 3.482
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1314,
      "ouatsu": 1379.758,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1481.6,
      "heikinAvg30d": 3.793
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1308,
      "ouatsu": 1346.28,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1475.6,
      "heikinAvg30d": 4.001
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1303,
      "ouatsu": 1282.645,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1471.4,
      "heikinAvg30d": 4.101
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1296,
      "ouatsu": 1606.651,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1465.2,
      "heikinAvg30d": 4.14
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1353,
      "ouatsu": 1547.63,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1511.2,
      "heikinAvg30d": 4.127
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1353,
      "ouatsu": 1474.602,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1511.2,
      "heikinAvg30d": 4.386
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1353,
      "ouatsu": 1600.865,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1511.1,
      "heikinAvg30d": 4.431
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1351,
      "ouatsu": 1830.11,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1508.3,
      "heikinAvg30d": 4.619
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1347,
      "ouatsu": 1798.58,
      "saikou": 10,
      "heikin": 3.79,
      "boshuAvg30d": 1500.9,
      "heikinAvg30d": 4.684
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1343,
      "ouatsu": 1843.581,
      "saikou": 10,
      "heikin": 4,
      "boshuAvg30d": 1496.9,
      "heikinAvg30d": 4.645
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1335,
      "ouatsu": 1813.415,
      "saikou": 10,
      "heikin": 4.72,
      "boshuAvg30d": 1488.7,
      "heikinAvg30d": 4.664
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1335,
      "ouatsu": 1929.969,
      "saikou": 10,
      "heikin": 4.36,
      "boshuAvg30d": 1488.4,
      "heikinAvg30d": 4.556
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1336,
      "ouatsu": 1957.84,
      "saikou": 10,
      "heikin": 4.38,
      "boshuAvg30d": 1488.8,
      "heikinAvg30d": 4.385
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1335,
      "ouatsu": 2027.641,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1488.0,
      "heikinAvg30d": 4.196
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1330,
      "ouatsu": 1919.983,
      "saikou": 10,
      "heikin": 4.41,
      "boshuAvg30d": 1483.0,
      "heikinAvg30d": 3.964
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1326,
      "ouatsu": 1968.788,
      "saikou": 10,
      "heikin": 4.29,
      "boshuAvg30d": 1479.8,
      "heikinAvg30d": 3.781
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1233,
      "ouatsu": 1933.202,
      "saikou": 10,
      "heikin": 4.26,
      "boshuAvg30d": 1392.3,
      "heikinAvg30d": 3.45
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1236,
      "ouatsu": 1942.979,
      "saikou": 10,
      "heikin": 4.11,
      "boshuAvg30d": 1395.3,
      "heikinAvg30d": 3.899
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1237,
      "ouatsu": 1627.555,
      "saikou": 10,
      "heikin": 3.5,
      "boshuAvg30d": 1396.3,
      "heikinAvg30d": 3.634
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1230,
      "ouatsu": 1808.382,
      "saikou": 10,
      "heikin": 3.67,
      "boshuAvg30d": 1389.6,
      "heikinAvg30d": 3.469
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1223,
      "ouatsu": 1630.38,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1382.0,
      "heikinAvg30d": 3.471
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1215,
      "ouatsu": 1546.24,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1373.8,
      "heikinAvg30d": 3.275
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
        "boshu": 64,
        "ouatsu": 185.38,
        "saikou": 1.01,
        "heikin": 0.9,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.094
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 202.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.028
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 185.143,
        "saikou": 3.95,
        "heikin": 1.43,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.056
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 151.958,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.032
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 193.908,
        "saikou": 3.15,
        "heikin": 0.89,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.337
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 188.093,
        "saikou": 3.95,
        "heikin": 1.13,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.398
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 225.143,
        "saikou": 3.95,
        "heikin": 1.19,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.49
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.62
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 224.008,
        "saikou": 3.75,
        "heikin": 2.4,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.934
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 189.95,
        "saikou": 3.13,
        "heikin": 2.77,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.672
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 234.688,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.66
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 191.958,
        "saikou": 9.85,
        "heikin": 1.07,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.774
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 195.148,
        "saikou": 3.95,
        "heikin": 1.58,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.275
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 237.018,
        "saikou": 1.01,
        "heikin": 0.75,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.779
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.662
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 195.058,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.763
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.118
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 222.093,
        "saikou": 1.01,
        "heikin": 0.72,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.372
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.181
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 146.143,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 1.266
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 110.95,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 1.198
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 144.135,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 1.287
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 109,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 1.208
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 110.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 1.205
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 177.885,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.176
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 211.885,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.128
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 209.935,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 1.754
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 209.935,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 2.111
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 177.885,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.915
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.876
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 227.493,
        "saikou": 1,
        "heikin": 0.67,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.485
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.67,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.256
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.508
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 240.258,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.295
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 124.99,
        "saikou": 4.03,
        "heikin": 3.96,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.907
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 173.29,
        "saikou": 3.67,
        "heikin": 2.67,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.733
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 87.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.754
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 161.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.606
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.504
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 161.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.22
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 152.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.562
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 200.218,
        "saikou": 2.52,
        "heikin": 1.94,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.746
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.506
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 172.208,
        "saikou": 2.52,
        "heikin": 2.48,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.935
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 112.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.636
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 242.208,
        "saikou": 1.01,
        "heikin": 0.89,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.5
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.219
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 189.99,
        "saikou": 9.9,
        "heikin": 1.32,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 1.714
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 49.109,
        "saikou": 10,
        "heikin": 6.97,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 8.428
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 49.109,
        "saikou": 10,
        "heikin": 8.19,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 8.682
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 83.487,
        "saikou": 10,
        "heikin": 8.88,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 9.094
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 83.487,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 9.061
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 81.489,
        "saikou": 10,
        "heikin": 9.33,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 9.011
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 81.489,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 9.022
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 81.987,
        "saikou": 9.4,
        "heikin": 8.45,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 8.974
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 83.487,
        "saikou": 10,
        "heikin": 8.55,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 8.938
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 8.929
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 7.85,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 8.872
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 8.782
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 8.883
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.2,
        "boshuAvg30d": 181.4,
        "heikinAvg30d": 8.966
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.2,
        "boshuAvg30d": 186.7,
        "heikinAvg30d": 9.324
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.33,
        "boshuAvg30d": 192.4,
        "heikinAvg30d": 9.412
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.32,
        "boshuAvg30d": 196.1,
        "heikinAvg30d": 9.31
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.32,
        "boshuAvg30d": 196.1,
        "heikinAvg30d": 9.363
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.31,
        "boshuAvg30d": 196.1,
        "heikinAvg30d": 9.15
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 7.94,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 8.428
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 8.512
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 8.287
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 8.31
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 62.132,
        "saikou": 10,
        "heikin": 9.06,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 8.284
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 96.132,
        "saikou": 10,
        "heikin": 8.11,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 8.442
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 115.721,
        "saikou": 10,
        "heikin": 8.57,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 8.515
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 117.686,
        "saikou": 10,
        "heikin": 8.43,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 8.546
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 121.482,
        "saikou": 10,
        "heikin": 8.14,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 8.141
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 97.482,
        "saikou": 10,
        "heikin": 7.6,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 8.178
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 85.482,
        "saikou": 10,
        "heikin": 7.26,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 8.673
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 85.482,
        "saikou": 10,
        "heikin": 7.05,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 8.657
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 87.482,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 192.9,
        "heikinAvg30d": 8.856
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 87.482,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 192.9,
        "heikinAvg30d": 8.41
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 87.482,
        "saikou": 10,
        "heikin": 7.86,
        "boshuAvg30d": 192.9,
        "heikinAvg30d": 8.188
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 85.982,
        "saikou": 10,
        "heikin": 6.86,
        "boshuAvg30d": 191.7,
        "heikinAvg30d": 7.917
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 87.482,
        "saikou": 10,
        "heikin": 6.99,
        "boshuAvg30d": 189.7,
        "heikinAvg30d": 7.829
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 97.982,
        "saikou": 10,
        "heikin": 7.28,
        "boshuAvg30d": 187.7,
        "heikinAvg30d": 7.841
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 117.521,
        "saikou": 10,
        "heikin": 6.92,
        "boshuAvg30d": 186.4,
        "heikinAvg30d": 7.79
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 117.986,
        "saikou": 10,
        "heikin": 6.93,
        "boshuAvg30d": 186.4,
        "heikinAvg30d": 7.83
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 6.97,
        "boshuAvg30d": 186.4,
        "heikinAvg30d": 7.939
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 6.5,
        "boshuAvg30d": 185.7,
        "heikinAvg30d": 8.315
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 6.97,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 8.51
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 6.89,
        "boshuAvg30d": 185.7,
        "heikinAvg30d": 8.691
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.61,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 8.492
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 119.486,
        "saikou": 10,
        "heikin": 7.6,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 8.682
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.42,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 8.759
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.5,
        "boshuAvg30d": 100.4,
        "heikinAvg30d": 8.835
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 7.39,
        "boshuAvg30d": 99.4,
        "heikinAvg30d": 8.854
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 80.156,
        "saikou": 10,
        "heikin": 7.55,
        "boshuAvg30d": 98.4,
        "heikinAvg30d": 8.911
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 426,
        "ouatsu": 416.72,
        "saikou": 9.9,
        "heikin": 4.96,
        "boshuAvg30d": 514.5,
        "heikinAvg30d": 3.557
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 426,
        "ouatsu": 341.435,
        "saikou": 9.9,
        "heikin": 5.56,
        "boshuAvg30d": 514.5,
        "heikinAvg30d": 3.355
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 426,
        "ouatsu": 377.308,
        "saikou": 9.9,
        "heikin": 5.06,
        "boshuAvg30d": 514.5,
        "heikinAvg30d": 3.286
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 426,
        "ouatsu": 499.1,
        "saikou": 9.9,
        "heikin": 4.12,
        "boshuAvg30d": 514.3,
        "heikinAvg30d": 3.208
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 424,
        "ouatsu": 461.117,
        "saikou": 9.9,
        "heikin": 4.05,
        "boshuAvg30d": 512.3,
        "heikinAvg30d": 3.159
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 424,
        "ouatsu": 506.13,
        "saikou": 9.9,
        "heikin": 3.86,
        "boshuAvg30d": 512.3,
        "heikinAvg30d": 3.136
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 423,
        "ouatsu": 571.139,
        "saikou": 9.27,
        "heikin": 3.85,
        "boshuAvg30d": 511.0,
        "heikinAvg30d": 3.07
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 424,
        "ouatsu": 522.342,
        "saikou": 9.9,
        "heikin": 4.2,
        "boshuAvg30d": 512.0,
        "heikinAvg30d": 3.238
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 425,
        "ouatsu": 535.42,
        "saikou": 9.9,
        "heikin": 4.13,
        "boshuAvg30d": 513.0,
        "heikinAvg30d": 3.2
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 425,
        "ouatsu": 465.586,
        "saikou": 9.9,
        "heikin": 5.01,
        "boshuAvg30d": 513.3,
        "heikinAvg30d": 3.179
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 425,
        "ouatsu": 561.116,
        "saikou": 9.9,
        "heikin": 3.88,
        "boshuAvg30d": 513.3,
        "heikinAvg30d": 3.282
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 425,
        "ouatsu": 548.046,
        "saikou": 9.27,
        "heikin": 3.86,
        "boshuAvg30d": 513.3,
        "heikinAvg30d": 3.265
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 446,
        "ouatsu": 537.251,
        "saikou": 9.9,
        "heikin": 4.15,
        "boshuAvg30d": 534.3,
        "heikinAvg30d": 3.662
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 454,
        "ouatsu": 543.917,
        "saikou": 9.9,
        "heikin": 4.35,
        "boshuAvg30d": 542.3,
        "heikinAvg30d": 3.712
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 459,
        "ouatsu": 543.917,
        "saikou": 9.9,
        "heikin": 4.45,
        "boshuAvg30d": 547.8,
        "heikinAvg30d": 3.829
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 464,
        "ouatsu": 543.917,
        "saikou": 9.9,
        "heikin": 4.35,
        "boshuAvg30d": 552.5,
        "heikinAvg30d": 3.833
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 464,
        "ouatsu": 562.051,
        "saikou": 9.9,
        "heikin": 4.12,
        "boshuAvg30d": 552.5,
        "heikinAvg30d": 4.174
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 464,
        "ouatsu": 486.222,
        "saikou": 9.9,
        "heikin": 4.86,
        "boshuAvg30d": 552.5,
        "heikinAvg30d": 4.349
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 455,
        "ouatsu": 492.732,
        "saikou": 9.9,
        "heikin": 4.64,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 4.211
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 455,
        "ouatsu": 385.368,
        "saikou": 9.9,
        "heikin": 5.67,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 4.045
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 455,
        "ouatsu": 377.582,
        "saikou": 9.9,
        "heikin": 3.79,
        "boshuAvg30d": 546.3,
        "heikinAvg30d": 3.921
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 454,
        "ouatsu": 292.263,
        "saikou": 9.9,
        "heikin": 4.53,
        "boshuAvg30d": 545.3,
        "heikinAvg30d": 3.943
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 451,
        "ouatsu": 289.099,
        "saikou": 9.9,
        "heikin": 3.88,
        "boshuAvg30d": 542.3,
        "heikinAvg30d": 4.007
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 451,
        "ouatsu": 287.199,
        "saikou": 9.27,
        "heikin": 3.76,
        "boshuAvg30d": 542.3,
        "heikinAvg30d": 4.017
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 450,
        "ouatsu": 271.639,
        "saikou": 9.27,
        "heikin": 3.57,
        "boshuAvg30d": 541.3,
        "heikinAvg30d": 3.807
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 450,
        "ouatsu": 281.198,
        "saikou": 9.27,
        "heikin": 3.8,
        "boshuAvg30d": 541.3,
        "heikinAvg30d": 3.852
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 450,
        "ouatsu": 281.198,
        "saikou": 9.27,
        "heikin": 3.86,
        "boshuAvg30d": 538.7,
        "heikinAvg30d": 4.036
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 449,
        "ouatsu": 232.071,
        "saikou": 9.27,
        "heikin": 4.26,
        "boshuAvg30d": 537.7,
        "heikinAvg30d": 4.214
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 448,
        "ouatsu": 223.321,
        "saikou": 9.27,
        "heikin": 5.42,
        "boshuAvg30d": 537.0,
        "heikinAvg30d": 4.298
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 448,
        "ouatsu": 462.846,
        "saikou": 9.27,
        "heikin": 3.78,
        "boshuAvg30d": 537.0,
        "heikinAvg30d": 4.282
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 447,
        "ouatsu": 403.173,
        "saikou": 9.27,
        "heikin": 3.64,
        "boshuAvg30d": 536.0,
        "heikinAvg30d": 4.225
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 447,
        "ouatsu": 387.269,
        "saikou": 9.27,
        "heikin": 3.57,
        "boshuAvg30d": 536.0,
        "heikinAvg30d": 4.387
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 447,
        "ouatsu": 439.516,
        "saikou": 9.27,
        "heikin": 3.28,
        "boshuAvg30d": 535.5,
        "heikinAvg30d": 4.536
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 447,
        "ouatsu": 447.706,
        "saikou": 9.27,
        "heikin": 3.63,
        "boshuAvg30d": 535.5,
        "heikinAvg30d": 4.704
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 447,
        "ouatsu": 466.144,
        "saikou": 9.27,
        "heikin": 3.64,
        "boshuAvg30d": 531.7,
        "heikinAvg30d": 4.829
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 447,
        "ouatsu": 437.992,
        "saikou": 9.27,
        "heikin": 3.6,
        "boshuAvg30d": 531.7,
        "heikinAvg30d": 4.708
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 449,
        "ouatsu": 586.42,
        "saikou": 10,
        "heikin": 5.56,
        "boshuAvg30d": 533.9,
        "heikinAvg30d": 4.623
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 449,
        "ouatsu": 636.42,
        "saikou": 10,
        "heikin": 5.09,
        "boshuAvg30d": 533.7,
        "heikinAvg30d": 4.477
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 450,
        "ouatsu": 636.42,
        "saikou": 10,
        "heikin": 5.02,
        "boshuAvg30d": 534.0,
        "heikinAvg30d": 4.407
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 450,
        "ouatsu": 665.742,
        "saikou": 10,
        "heikin": 4.29,
        "boshuAvg30d": 534.0,
        "heikinAvg30d": 4.37
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 448,
        "ouatsu": 583.704,
        "saikou": 10,
        "heikin": 5.54,
        "boshuAvg30d": 532.3,
        "heikinAvg30d": 3.95
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 448,
        "ouatsu": 583.704,
        "saikou": 10,
        "heikin": 5.67,
        "boshuAvg30d": 532.3,
        "heikinAvg30d": 3.95
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 447,
        "ouatsu": 547.543,
        "saikou": 10,
        "heikin": 5.94,
        "boshuAvg30d": 531.6,
        "heikinAvg30d": 3.662
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 447,
        "ouatsu": 537.516,
        "saikou": 10,
        "heikin": 5.94,
        "boshuAvg30d": 531.6,
        "heikinAvg30d": 4.48
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 447,
        "ouatsu": 366.722,
        "saikou": 9.9,
        "heikin": 3.69,
        "boshuAvg30d": 531.6,
        "heikinAvg30d": 4.133
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 445,
        "ouatsu": 464.928,
        "saikou": 10,
        "heikin": 5.06,
        "boshuAvg30d": 529.6,
        "heikinAvg30d": 4.026
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 443,
        "ouatsu": 480.476,
        "saikou": 10,
        "heikin": 4.48,
        "boshuAvg30d": 527.3,
        "heikinAvg30d": 4.21
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 442,
        "ouatsu": 461.146,
        "saikou": 9.27,
        "heikin": 5.14,
        "boshuAvg30d": 526.0,
        "heikinAvg30d": 3.923
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 236.638,
        "saikou": 3.05,
        "heikin": 2.46,
        "boshuAvg30d": 124.3,
        "heikinAvg30d": 2.306
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 246.52,
        "saikou": 3.07,
        "heikin": 2.77,
        "boshuAvg30d": 124.3,
        "heikinAvg30d": 2.174
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 263.957,
        "saikou": 2.83,
        "heikin": 2.69,
        "boshuAvg30d": 124.3,
        "heikinAvg30d": 2.175
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 247.715,
        "saikou": 2.84,
        "heikin": 2.68,
        "boshuAvg30d": 124.3,
        "heikinAvg30d": 2.314
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 245.472,
        "saikou": 2.89,
        "heikin": 2.59,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 2.519
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 251.502,
        "saikou": 2.77,
        "heikin": 2.43,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 2.609
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 297.268,
        "saikou": 2.64,
        "heikin": 2.37,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 2.482
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 299.588,
        "saikou": 2.79,
        "heikin": 2.69,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 2.572
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 305.288,
        "saikou": 2.8,
        "heikin": 2.71,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 2.641
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 305.288,
        "saikou": 2.71,
        "heikin": 2.57,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 2.497
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 303.611,
        "saikou": 2.75,
        "heikin": 2.67,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 2.512
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 302.111,
        "saikou": 2.71,
        "heikin": 2.63,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 2.487
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 295.591,
        "saikou": 2.73,
        "heikin": 2.57,
        "boshuAvg30d": 132.7,
        "heikinAvg30d": 2.637
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 269.486,
        "saikou": 2.79,
        "heikin": 2.59,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.537
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 269.486,
        "saikou": 4.66,
        "heikin": 2.94,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 2.637
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 277.37,
        "saikou": 2.79,
        "heikin": 2.51,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.706
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 257.728,
        "saikou": 2.8,
        "heikin": 2.43,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.181
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 296.081,
        "saikou": 2.9,
        "heikin": 2.43,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 3.237
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 224.396,
        "saikou": 4.15,
        "heikin": 2.81,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.601
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 244.607,
        "saikou": 4.5,
        "heikin": 2.41,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.601
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 231.61,
        "saikou": 4.42,
        "heikin": 2.94,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 3.757
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 233.585,
        "saikou": 4.99,
        "heikin": 3.16,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.798
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 237.561,
        "saikou": 5.2,
        "heikin": 3.12,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.535
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 235.671,
        "saikou": 3.99,
        "heikin": 2.79,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 3.347
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 235.562,
        "saikou": 3.88,
        "heikin": 2.65,
        "boshuAvg30d": 139.2,
        "heikinAvg30d": 3.299
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 235.562,
        "saikou": 9.33,
        "heikin": 3.61,
        "boshuAvg30d": 139.2,
        "heikinAvg30d": 3.271
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 254.612,
        "saikou": 4.67,
        "heikin": 3.13,
        "boshuAvg30d": 139.2,
        "heikinAvg30d": 3.542
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 252.637,
        "saikou": 6.77,
        "heikin": 3.47,
        "boshuAvg30d": 139.2,
        "heikinAvg30d": 3.705
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 231.046,
        "saikou": 4.88,
        "heikin": 3.03,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 3.873
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 249.267,
        "saikou": 3.83,
        "heikin": 3.04,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 3.823
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 241.383,
        "saikou": 3.84,
        "heikin": 2.8,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 3.586
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 221.074,
        "saikou": 3.09,
        "heikin": 1.61,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 3.739
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 293.393,
        "saikou": 2.8,
        "heikin": 1.6,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 3.693
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 291.395,
        "saikou": 2.97,
        "heikin": 2.42,
        "boshuAvg30d": 137.7,
        "heikinAvg30d": 3.887
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 282.195,
        "saikou": 2.8,
        "heikin": 2.34,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 3.804
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 278.696,
        "saikou": 3.88,
        "heikin": 2.16,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 3.587
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 281.512,
        "saikou": 4.03,
        "heikin": 2.58,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 3.583
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 272.312,
        "saikou": 2.8,
        "heikin": 2.09,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 3.411
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 282.195,
        "saikou": 2.8,
        "heikin": 2.44,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 3.039
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 291.395,
        "saikou": 2.8,
        "heikin": 2.69,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 3.078
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 285.429,
        "saikou": 2.8,
        "heikin": 2.72,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 3.089
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 283.458,
        "saikou": 2.79,
        "heikin": 2.39,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.895
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 264.738,
        "saikou": 2.5,
        "heikin": 1.36,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.697
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 264.738,
        "saikou": 2.75,
        "heikin": 2.05,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 3.123
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 257.398,
        "saikou": 2.79,
        "heikin": 2.66,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.878
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 223.729,
        "saikou": 2.79,
        "heikin": 2.64,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 2.941
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 233.729,
        "saikou": 2.77,
        "heikin": 2.61,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 3.024
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 214.008,
        "saikou": 2.79,
        "heikin": 2.24,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 3.013
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.01,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.2
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.03,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.474
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 1.93,
        "saikou": 1.7,
        "heikin": 1.7,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.504
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.737
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.032
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 1.5,
        "heikin": 0.44,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.652
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.65,
        "heikin": 0.47,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.878
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.79,
        "heikin": 0.74,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.967
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.55,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.713
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2.55,
        "heikin": 0.52,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.54
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2,
        "heikin": 0.84,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.62
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 2,
        "heikin": 0.48,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.716
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 2,
        "heikin": 0.95,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 2.282
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 2.59,
        "heikin": 0.49,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.702
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.67,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 2.159
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.7,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.079
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 3.61,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 2.906
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.45,
        "boshuAvg30d": 59.7,
        "heikinAvg30d": 3.78
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 3.97,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.889
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.52,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.207
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.78,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.617
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 5.43,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.962
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.576
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 4.05,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.568
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.78,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.559
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 5.2,
        "heikin": 4.34,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.353
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 3.91,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.851
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.428
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 79.934,
        "saikou": 3.6,
        "heikin": 2.79,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.921
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 68.258,
        "saikou": 4.72,
        "heikin": 3.72,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.721
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 2.09,
        "heikin": 1.6,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 3.484
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 1.85,
        "heikin": 0.42,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 4.093
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 34.182,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.523
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.965
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.077
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.85,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.838
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.21,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.242
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.6,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.948
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.996
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 1.75,
        "heikin": 0.61,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.442
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 2.35,
        "heikin": 0.71,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.37
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.5,
        "heikin": 0.73,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.216
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 28.374,
        "saikou": 2.3,
        "heikin": 0.78,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.508
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 82.928,
        "saikou": 2.3,
        "heikin": 0.48,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.664
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.5,
        "heikin": 0.73,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.973
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.3,
        "heikin": 0.71,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.383
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 22.928,
        "saikou": 2.5,
        "heikin": 0.73,
        "boshuAvg30d": 57.7,
        "heikinAvg30d": 2.517
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 2.5,
        "heikin": 0.55,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.038
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 73.099,
        "saikou": 2.87,
        "heikin": 2.37,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 1.982
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 97.405,
        "saikou": 2.87,
        "heikin": 2.41,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 1.86
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 119.39,
        "saikou": 2.9,
        "heikin": 2.03,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 1.949
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 139.35,
        "saikou": 2.86,
        "heikin": 1.61,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 1.922
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 105.479,
        "saikou": 2.87,
        "heikin": 1.86,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.011
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 113.414,
        "saikou": 2.5,
        "heikin": 1.7,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 2.061
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.81,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.018
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 123.299,
        "saikou": 2.79,
        "heikin": 1.79,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.104
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.9,
        "heikin": 2.04,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 1.99
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.86,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 2.008
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.7,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 2.105
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.44,
        "heikin": 1.73,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 2.039
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 123.299,
        "saikou": 2.5,
        "heikin": 1.86,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 2.877
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 127.166,
        "saikou": 2.79,
        "heikin": 1.84,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.832
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 127.166,
        "saikou": 2.9,
        "heikin": 2.09,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 2.68
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 151.104,
        "saikou": 2.8,
        "heikin": 1.59,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 2.989
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 151.104,
        "saikou": 2.8,
        "heikin": 1.61,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 3.797
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 151.104,
        "saikou": 2.95,
        "heikin": 1.67,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 3.845
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 151.104,
        "saikou": 4,
        "heikin": 2.13,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 3.984
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 147.663,
        "saikou": 4.5,
        "heikin": 1.87,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.052
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 129.929,
        "saikou": 6.44,
        "heikin": 2.58,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.264
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 5.95,
        "heikin": 2.62,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 4.185
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 5.95,
        "heikin": 2.4,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 3.973
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 5.97,
        "heikin": 2.46,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 3.815
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 5.44,
        "heikin": 2.52,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 4.496
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 5.97,
        "heikin": 2.47,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 3.606
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 125.168,
        "saikou": 6.44,
        "heikin": 2.63,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 3.91
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 137.644,
        "saikou": 5.97,
        "heikin": 2.29,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 3.808
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 151.111,
        "saikou": 4.97,
        "heikin": 2.28,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 3.856
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 151.111,
        "saikou": 3.5,
        "heikin": 2,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 3.673
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 104.392,
        "saikou": 4,
        "heikin": 2.52,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.521
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 101.778,
        "saikou": 2.9,
        "heikin": 2.44,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.63
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 2.8,
        "heikin": 2.35,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.778
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 238.678,
        "saikou": 6.52,
        "heikin": 3.74,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.949
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 238.678,
        "saikou": 6.29,
        "heikin": 3.75,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.771
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 258.292,
        "saikou": 5.04,
        "heikin": 3.4,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 3.573
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 256.332,
        "saikou": 5.04,
        "heikin": 3.22,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 3.407
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 256.332,
        "saikou": 5.04,
        "heikin": 3.21,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 3.362
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 258.292,
        "saikou": 5.52,
        "heikin": 3.4,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 3.462
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 258.292,
        "saikou": 6.1,
        "heikin": 3.42,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 3.316
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 238.678,
        "saikou": 5.78,
        "heikin": 3.37,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 3.063
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 238.678,
        "saikou": 6.49,
        "heikin": 3.46,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 3.151
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 238.678,
        "saikou": 5.99,
        "heikin": 3.33,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.964
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 238.678,
        "saikou": 6.55,
        "heikin": 3.9,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.991
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 238.678,
        "saikou": 6.19,
        "heikin": 3.79,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.989
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 238.678,
        "saikou": 6.29,
        "heikin": 3.66,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 2.961
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 99.354,
        "saikou": 2.48,
        "heikin": 2.29,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.986
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 90.065,
        "saikou": 2.79,
        "heikin": 2.29,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.955
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.8,
        "heikin": 0.82,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.377
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.8,
        "heikin": 0.95,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.567
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.81,
        "heikin": 1.29,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.7
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.8,
        "heikin": 1.32,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.602
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.8,
        "heikin": 1.33,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.531
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 161.271,
        "saikou": 2.5,
        "heikin": 1.27,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.557
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.58,
        "heikin": 1.44,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.627
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.9,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.729
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.11,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.644
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.68,
        "heikin": 1.72,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.836
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.6,
        "heikin": 1.95,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.124
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.1,
        "heikin": 1.45,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.077
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 178.13,
        "saikou": 2.5,
        "heikin": 1.97,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 3.538
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 178.13,
        "saikou": 2.79,
        "heikin": 1.3,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.867
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.9,
        "heikin": 1.06,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.703
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.03,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.671
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 2.8,
        "heikin": 0.88,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.59
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 1.58,
        "heikin": 0.51,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.422
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 179.82,
        "saikou": 2.8,
        "heikin": 0.91,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.347
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 179.82,
        "saikou": 4.33,
        "heikin": 1.2,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.991
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 179.82,
        "saikou": 5.04,
        "heikin": 1.24,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.944
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 179.82,
        "saikou": 4.61,
        "heikin": 1.2,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.881
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 179.82,
        "saikou": 4.17,
        "heikin": 1.19,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.87
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 179.82,
        "saikou": 4.2,
        "heikin": 1.19,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.854
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 179.82,
        "saikou": 4.41,
        "heikin": 1.19,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.247
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 179.82,
        "saikou": 4.29,
        "heikin": 1.17,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.05
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 179.82,
        "saikou": 4.12,
        "heikin": 1.15,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.782
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 179.82,
        "saikou": 2.8,
        "heikin": 0.62,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.04
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 130.653,
        "saikou": 4,
        "heikin": 1.46,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.178
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 0.94,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 3.316
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 179.82,
        "saikou": 4,
        "heikin": 1.02,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 4.187
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 2.9,
        "heikin": 0.88,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.067
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 2.79,
        "heikin": 0.78,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 4.976
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 2.99,
        "heikin": 1.45,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.259
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.88,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.54
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 190.857,
        "saikou": 4.59,
        "heikin": 3.15,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.737
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 188.867,
        "saikou": 4.59,
        "heikin": 3.21,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.929
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 188.867,
        "saikou": 4.59,
        "heikin": 3.17,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 6.031
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 188.867,
        "saikou": 4,
        "heikin": 2.67,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.724
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 190.857,
        "saikou": 2.8,
        "heikin": 1.88,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.364
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 190.857,
        "saikou": 2.96,
        "heikin": 2.26,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 5.043
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 190.857,
        "saikou": 2.55,
        "heikin": 1.35,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 4.488
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 190.857,
        "saikou": 2.53,
        "heikin": 1.89,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 4.215
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 190.857,
        "saikou": 2,
        "heikin": 1.13,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 4.3
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 190.857,
        "saikou": 2.79,
        "heikin": 1.73,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.931
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 190.857,
        "saikou": 2.79,
        "heikin": 1.51,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.453
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 190.857,
        "saikou": 2.02,
        "heikin": 1.38,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 3.361
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 190.857,
        "saikou": 2.2,
        "heikin": 1.19,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.334
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 105.473,
        "saikou": 2.8,
        "heikin": 1.39,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.84
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 83.473,
        "saikou": 2.8,
        "heikin": 1.3,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.868
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 84.473,
        "saikou": 2.8,
        "heikin": 1.31,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.868
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 83.473,
        "saikou": 2.8,
        "heikin": 1.3,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.837
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 83.473,
        "saikou": 2.8,
        "heikin": 1.3,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.816
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 83.473,
        "saikou": 2.5,
        "heikin": 1.25,
        "boshuAvg30d": 39.7,
        "heikinAvg30d": 0.832
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 81.473,
        "saikou": 2.5,
        "heikin": 1.28,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.974
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 68.93,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.929
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 80.473,
        "saikou": 2.8,
        "heikin": 1.33,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 80.473,
        "saikou": 2.5,
        "heikin": 1.28,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.996
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 80.473,
        "saikou": 2.5,
        "heikin": 1.28,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.984
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 80.473,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.947
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 90.473,
        "saikou": 1.7,
        "heikin": 1.1,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.974
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 91.473,
        "saikou": 2.5,
        "heikin": 1.29,
        "boshuAvg30d": 43.7,
        "heikinAvg30d": 0.967
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 98.473,
        "saikou": 2.8,
        "heikin": 1.14,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.02
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 157.973,
        "saikou": 2.5,
        "heikin": 1.01,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.891
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 157.973,
        "saikou": 2.8,
        "heikin": 1.04,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.861
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 157.973,
        "saikou": 2.5,
        "heikin": 0.98,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.929
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 123.973,
        "saikou": 1.6,
        "heikin": 1.01,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 0.992
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 123.973,
        "saikou": 2.85,
        "heikin": 1.05,
        "boshuAvg30d": 46.7,
        "heikinAvg30d": 0.967
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 4.5,
        "heikin": 1.4,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.968
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 3.8,
        "heikin": 1.08,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.002
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 4.1,
        "heikin": 1.09,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.988
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 6.42,
        "heikin": 1.58,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 0.972
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 4.1,
        "heikin": 1.09,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.183
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 9.8,
        "heikin": 1.88,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.115
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 3.8,
        "heikin": 1.08,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.006
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 2.5,
        "heikin": 1.16,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.029
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 123.973,
        "saikou": 2.85,
        "heikin": 1.19,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.014
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 123.973,
        "saikou": 3.8,
        "heikin": 1.21,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.912
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 123.973,
        "saikou": 3,
        "heikin": 1.2,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.974
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 100.973,
        "saikou": 3,
        "heikin": 1.1,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.002
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 137.973,
        "saikou": 1.6,
        "heikin": 1.01,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.982
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 100.973,
        "saikou": 3,
        "heikin": 1.1,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 0.911
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 104.973,
        "saikou": 3.8,
        "heikin": 1.2,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.988
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 52.473,
        "saikou": 3.8,
        "heikin": 1.73,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.993
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 51.473,
        "saikou": 2.65,
        "heikin": 1.68,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.972
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 51.473,
        "saikou": 4.1,
        "heikin": 1.67,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.966
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 59.473,
        "saikou": 3.8,
        "heikin": 1.69,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 1.008
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 59.473,
        "saikou": 1.7,
        "heikin": 1.58,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.996
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 64.473,
        "saikou": 2.8,
        "heikin": 1.65,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.978
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 64.473,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.976
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 91.473,
        "saikou": 2.5,
        "heikin": 1.29,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.768
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 92.473,
        "saikou": 2.5,
        "heikin": 1.29,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.819
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 97.473,
        "saikou": 2.5,
        "heikin": 1.23,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.796
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 83.473,
        "saikou": 2.5,
        "heikin": 1.25,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.768
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 83.473,
        "saikou": 2.5,
        "heikin": 1.25,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.785
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.5,
        "heikin": 1.24,
        "boshuAvg30d": 41.7,
        "heikinAvg30d": 0.825
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 135.035,
        "saikou": 7.03,
        "heikin": 4.98,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 3.897
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 138.907,
        "saikou": 6.55,
        "heikin": 4.69,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 3.637
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 154.607,
        "saikou": 6.06,
        "heikin": 4.4,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 3.429
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 154.605,
        "saikou": 4.77,
        "heikin": 3.65,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 3.444
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 152.616,
        "saikou": 4.19,
        "heikin": 3.28,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 3.354
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 152.616,
        "saikou": 4.6,
        "heikin": 3.62,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 3.421
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 173.805,
        "saikou": 5.86,
        "heikin": 4.6,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 3.534
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 168.477,
        "saikou": 6.56,
        "heikin": 4.66,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 3.596
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 172.305,
        "saikou": 7.11,
        "heikin": 4.96,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.65
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 172.305,
        "saikou": 8.17,
        "heikin": 6.01,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.841
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 213.305,
        "saikou": 7.8,
        "heikin": 4.39,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.921
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 257.005,
        "saikou": 6.56,
        "heikin": 3.01,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.757
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 258.005,
        "saikou": 5.26,
        "heikin": 2.93,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 3.595
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 155.153,
        "saikou": 2.91,
        "heikin": 2.69,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 3.455
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 124.153,
        "saikou": 2.8,
        "heikin": 2.13,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 3.403
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 95.005,
        "saikou": 2.8,
        "heikin": 2.54,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 3.511
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 93.027,
        "saikou": 2.8,
        "heikin": 2.54,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 3.904
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 95.005,
        "saikou": 2.8,
        "heikin": 2.54,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 4.617
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 87.16,
        "saikou": 2.8,
        "heikin": 2.63,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 4.63
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 85.212,
        "saikou": 2.9,
        "heikin": 2.64,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 4.569
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 89.605,
        "saikou": 3.07,
        "heikin": 2.76,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.433
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 77.659,
        "saikou": 4,
        "heikin": 3.26,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.547
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 77.659,
        "saikou": 4.18,
        "heikin": 3.34,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 4.517
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 77.659,
        "saikou": 4.02,
        "heikin": 3.32,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 4.597
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 79.642,
        "saikou": 4,
        "heikin": 3.25,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.049
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 79.642,
        "saikou": 4,
        "heikin": 3.28,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.17
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 79.642,
        "saikou": 4,
        "heikin": 3.25,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.613
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 108.79,
        "saikou": 4.34,
        "heikin": 2.85,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 5.218
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 79.24,
        "saikou": 4.1,
        "heikin": 3.27,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 5.801
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 96.986,
        "saikou": 3.37,
        "heikin": 2.79,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 6.135
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 96.986,
        "saikou": 3.28,
        "heikin": 2.75,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 5.866
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 128.01,
        "saikou": 4.87,
        "heikin": 3.52,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.806
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 135.01,
        "saikou": 7.8,
        "heikin": 4.61,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.95
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 243.06,
        "saikou": 9.41,
        "heikin": 6.87,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 7.163
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 312.06,
        "saikou": 8.81,
        "heikin": 6.75,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 6.77
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 350.071,
        "saikou": 9.4,
        "heikin": 7.33,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.898
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 239.404,
        "saikou": 9.7,
        "heikin": 7.35,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 6.952
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 241.393,
        "saikou": 9.69,
        "heikin": 7.3,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 6.661
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 256.221,
        "saikou": 9.28,
        "heikin": 6.98,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 6.192
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 258.21,
        "saikou": 8.35,
        "heikin": 6.36,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 5.522
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 261.51,
        "saikou": 8.34,
        "heikin": 6.34,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.956
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 264.986,
        "saikou": 8.03,
        "heikin": 6.22,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.503
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 260.095,
        "saikou": 8.01,
        "heikin": 6.56,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.232
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 244.095,
        "saikou": 7.87,
        "heikin": 5.25,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.753
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 243.095,
        "saikou": 7.55,
        "heikin": 5.68,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.513
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 244.095,
        "saikou": 7.3,
        "heikin": 4.55,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 3.858
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 242.119,
        "saikou": 7.02,
        "heikin": 4.45,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 3.758
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 189.617,
        "saikou": 6.05,
        "heikin": 4.66,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 3.166
      }
    ]
  }
};
