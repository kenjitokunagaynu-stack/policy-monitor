// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/19〜2026/09/17）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-18",
  "fetchedAt": "2026-09-18",
  "avgWindowLabel": "過去30日平均（2026/08/19〜2026/09/17）",
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
      "boshu": 1246,
      "ouatsu": 1423.771,
      "saikou": 10,
      "heikin": 2.43,
      "boshuAvg30d": 1438.3,
      "heikinAvg30d": 3.045
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1246,
      "ouatsu": 1443.527,
      "saikou": 10,
      "heikin": 2.42,
      "boshuAvg30d": 1438.3,
      "heikinAvg30d": 3.002
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1246,
      "ouatsu": 1446.819,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1438.3,
      "heikinAvg30d": 3.077
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1246,
      "ouatsu": 1515.572,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1437.4,
      "heikinAvg30d": 3.069
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1241,
      "ouatsu": 1493.662,
      "saikou": 10,
      "heikin": 2.67,
      "boshuAvg30d": 1432.4,
      "heikinAvg30d": 3.119
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1240,
      "ouatsu": 1486.071,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1431.0,
      "heikinAvg30d": 3.147
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1240,
      "ouatsu": 1556.614,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1438.7,
      "heikinAvg30d": 3.186
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1241,
      "ouatsu": 1589.405,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1439.7,
      "heikinAvg30d": 3.227
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1244,
      "ouatsu": 1567.333,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1443.1,
      "heikinAvg30d": 3.281
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1244,
      "ouatsu": 1615.469,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1443.6,
      "heikinAvg30d": 3.262
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1244,
      "ouatsu": 1570.093,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1443.6,
      "heikinAvg30d": 3.375
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1244,
      "ouatsu": 1564.717,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1443.6,
      "heikinAvg30d": 3.311
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1310,
      "ouatsu": 1658.648,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1508.3,
      "heikinAvg30d": 3.652
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1331,
      "ouatsu": 1639.834,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1530.1,
      "heikinAvg30d": 3.629
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1354,
      "ouatsu": 1637.416,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1553.1,
      "heikinAvg30d": 3.653
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1372,
      "ouatsu": 1661.019,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1569.8,
      "heikinAvg30d": 3.629
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1373,
      "ouatsu": 1635.014,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1570.4,
      "heikinAvg30d": 3.893
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1373,
      "ouatsu": 1628.974,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1570.4,
      "heikinAvg30d": 4.14
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1310,
      "ouatsu": 1683.475,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1523.9,
      "heikinAvg30d": 4.096
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1314,
      "ouatsu": 1641.375,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1528.3,
      "heikinAvg30d": 3.998
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1322,
      "ouatsu": 1681.141,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1535.4,
      "heikinAvg30d": 3.867
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1322,
      "ouatsu": 1594.638,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1535.4,
      "heikinAvg30d": 3.899
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1319,
      "ouatsu": 1605.421,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1531.6,
      "heikinAvg30d": 3.835
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1318,
      "ouatsu": 1599.942,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1531.0,
      "heikinAvg30d": 3.834
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1311,
      "ouatsu": 1597.836,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1522.4,
      "heikinAvg30d": 3.615
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1311,
      "ouatsu": 1624.618,
      "saikou": 10,
      "heikin": 2.67,
      "boshuAvg30d": 1522.4,
      "heikinAvg30d": 3.63
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1311,
      "ouatsu": 1636.201,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1519.9,
      "heikinAvg30d": 3.898
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1305,
      "ouatsu": 1764.771,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1513.9,
      "heikinAvg30d": 4.134
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1300,
      "ouatsu": 1835.18,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1510.2,
      "heikinAvg30d": 4.341
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1293,
      "ouatsu": 1831.642,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1504.5,
      "heikinAvg30d": 4.416
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1350,
      "ouatsu": 1821.86,
      "saikou": 10,
      "heikin": 3.69,
      "boshuAvg30d": 1550.9,
      "heikinAvg30d": 4.362
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1350,
      "ouatsu": 1788.219,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1550.9,
      "heikinAvg30d": 4.726
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1350,
      "ouatsu": 1851.796,
      "saikou": 10,
      "heikin": 3.41,
      "boshuAvg30d": 1550.9,
      "heikinAvg30d": 4.736
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1348,
      "ouatsu": 1832.778,
      "saikou": 9.84,
      "heikin": 3.19,
      "boshuAvg30d": 1547.6,
      "heikinAvg30d": 5.021
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1344,
      "ouatsu": 1780.749,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1540.6,
      "heikinAvg30d": 5.064
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1340,
      "ouatsu": 1735.865,
      "saikou": 9.4,
      "heikin": 3.14,
      "boshuAvg30d": 1536.6,
      "heikinAvg30d": 4.999
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1332,
      "ouatsu": 1677.089,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1528.1,
      "heikinAvg30d": 5.031
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1332,
      "ouatsu": 1646.363,
      "saikou": 10,
      "heikin": 3.47,
      "boshuAvg30d": 1527.7,
      "heikinAvg30d": 4.923
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1333,
      "ouatsu": 1682.581,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1528.3,
      "heikinAvg30d": 4.736
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1332,
      "ouatsu": 1800.785,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1527.7,
      "heikinAvg30d": 4.461
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1327,
      "ouatsu": 1713.384,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1522.7,
      "heikinAvg30d": 4.191
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1323,
      "ouatsu": 1759.142,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1520.0,
      "heikinAvg30d": 3.928
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1230,
      "ouatsu": 1729.634,
      "saikou": 10,
      "heikin": 3.06,
      "boshuAvg30d": 1432.3,
      "heikinAvg30d": 3.546
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1233,
      "ouatsu": 1781.375,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1435.3,
      "heikinAvg30d": 4.169
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1234,
      "ouatsu": 1681.701,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1436.3,
      "heikinAvg30d": 3.821
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1227,
      "ouatsu": 1641.243,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1429.7,
      "heikinAvg30d": 3.539
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1220,
      "ouatsu": 1561.584,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1421.9,
      "heikinAvg30d": 3.584
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1212,
      "ouatsu": 1510.775,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1413.4,
      "heikinAvg30d": 3.44
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
        "ouatsu": 186.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.296
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 166.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.294
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 115.958,
        "saikou": 4,
        "heikin": 1.52,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 1.122
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 159.515,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.322
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 173.436,
        "saikou": 3.15,
        "heikin": 1.31,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.416
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 157.908,
        "saikou": 4.6,
        "heikin": 1.46,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.456
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 153.968,
        "saikou": 5.85,
        "heikin": 1.25,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.706
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 204.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.922
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 157.908,
        "saikou": 4,
        "heikin": 1.28,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.314
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 204.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.967
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 157.908,
        "saikou": 4,
        "heikin": 1.33,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.247
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 157.908,
        "saikou": 9.85,
        "heikin": 1.67,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.891
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 188.963,
        "saikou": 6.05,
        "heikin": 2.05,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.448
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 147.958,
        "saikou": 3.4,
        "heikin": 1.66,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.973
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 115.94,
        "saikou": 8.85,
        "heikin": 2.34,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.718
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 182.945,
        "saikou": 1.01,
        "heikin": 0.93,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.888
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 169.3,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.384
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 124.958,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 1.724
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 175.208,
        "saikou": 1,
        "heikin": 0.78,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.492
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 126.908,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 1.625
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 173.258,
        "saikou": 1,
        "heikin": 0.69,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 1.456
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 124.958,
        "saikou": 1.01,
        "heikin": 0.7,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 1.733
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 126.908,
        "saikou": 1.01,
        "heikin": 0.7,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 1.685
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 126.908,
        "saikou": 1.01,
        "heikin": 0.7,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 1.521
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 165.808,
        "saikou": 1,
        "heikin": 0.69,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.502
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 165.808,
        "saikou": 1.01,
        "heikin": 0.75,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.429
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 166.908,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.974
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 166.908,
        "saikou": 1.01,
        "heikin": 0.69,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.362
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 189.958,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.137
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 157.908,
        "saikou": 4,
        "heikin": 1.04,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.329
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 163.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 3.095
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 153.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.693
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 202.318,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.832
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 155.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.783
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 162.318,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 3.56
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 160.35,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 3.601
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 115.958,
        "saikou": 1.31,
        "heikin": 1.3,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 3.545
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 162.318,
        "saikou": 1.59,
        "heikin": 1.58,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 3.215
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 163.99,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 3.102
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 212.278,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.621
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 167.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 2.874
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 204.268,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.95
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 153.99,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.616
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 212.318,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.24
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 153.968,
        "saikou": 1.09,
        "heikin": 1.07,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.044
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 194.658,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.71
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 155.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.443
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 204.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.267
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 63.609,
        "saikou": 10,
        "heikin": 9.08,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 8.258
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 63.609,
        "saikou": 10,
        "heikin": 9.08,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 8.463
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 81.489,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 9.128
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 81.489,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 9.094
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 79.491,
        "saikou": 10,
        "heikin": 9.14,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 9.071
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 79.491,
        "saikou": 10,
        "heikin": 9.14,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 9.076
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 79.989,
        "saikou": 10,
        "heikin": 9.13,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 9.029
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 81.489,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 9.005
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 8.98
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 8.898
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 8.798
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 8.924
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 95.488,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 180.4,
        "heikinAvg30d": 9.109
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 105.988,
        "saikou": 10,
        "heikin": 8.55,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 9.524
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.73,
        "boshuAvg30d": 191.4,
        "heikinAvg30d": 9.719
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 105.988,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 195.0,
        "heikinAvg30d": 9.654
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 8.77,
        "boshuAvg30d": 195.0,
        "heikinAvg30d": 9.679
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 105.988,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 195.0,
        "heikinAvg30d": 9.423
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 106.136,
        "saikou": 10,
        "heikin": 8.62,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 8.713
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 106.136,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 8.819
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 7.67,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 8.615
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 7.64,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 8.687
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 7.71,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 8.612
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 116.136,
        "saikou": 10,
        "heikin": 7.99,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 8.797
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 115.523,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 8.806
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 115.523,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 8.837
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 119.484,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 8.332
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 119.484,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 8.27
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 109.484,
        "saikou": 10,
        "heikin": 8.62,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 8.961
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 109.484,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 9.064
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 109.484,
        "saikou": 10,
        "heikin": 8.5,
        "boshuAvg30d": 192.3,
        "heikinAvg30d": 9.156
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 109.484,
        "saikou": 10,
        "heikin": 8.16,
        "boshuAvg30d": 192.3,
        "heikinAvg30d": 8.781
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 109.484,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 192.3,
        "heikinAvg30d": 8.417
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 107.984,
        "saikou": 9.84,
        "heikin": 7.51,
        "boshuAvg30d": 190.8,
        "heikinAvg30d": 8.014
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 111.482,
        "saikou": 10,
        "heikin": 7.68,
        "boshuAvg30d": 188.8,
        "heikinAvg30d": 7.699
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 109.982,
        "saikou": 9.4,
        "heikin": 7.31,
        "boshuAvg30d": 186.8,
        "heikinAvg30d": 7.904
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 7.797
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 107.986,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 7.846
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 8.33,
        "boshuAvg30d": 185.4,
        "heikinAvg30d": 7.999
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 184.8,
        "heikinAvg30d": 8.296
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 8.33,
        "boshuAvg30d": 184.4,
        "heikinAvg30d": 8.502
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 184.8,
        "heikinAvg30d": 8.668
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.16,
        "boshuAvg30d": 100.6,
        "heikinAvg30d": 8.518
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.16,
        "boshuAvg30d": 100.6,
        "heikinAvg30d": 8.714
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 8.87,
        "boshuAvg30d": 100.6,
        "heikinAvg30d": 8.889
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 81.656,
        "saikou": 10,
        "heikin": 9.14,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 8.631
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 83.556,
        "saikou": 10,
        "heikin": 8.88,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 8.651
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9,
        "boshuAvg30d": 97.6,
        "heikinAvg30d": 8.837
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 423,
        "ouatsu": 346.519,
        "saikou": 9.39,
        "heikin": 2.26,
        "boshuAvg30d": 535.2,
        "heikinAvg30d": 3.734
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 423,
        "ouatsu": 321.794,
        "saikou": 9.39,
        "heikin": 2.49,
        "boshuAvg30d": 535.2,
        "heikinAvg30d": 3.492
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 423,
        "ouatsu": 323.774,
        "saikou": 9.39,
        "heikin": 2.43,
        "boshuAvg30d": 535.2,
        "heikinAvg30d": 3.418
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 423,
        "ouatsu": 369.765,
        "saikou": 9.38,
        "heikin": 2.69,
        "boshuAvg30d": 534.7,
        "heikinAvg30d": 3.301
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 421,
        "ouatsu": 355.797,
        "saikou": 9.38,
        "heikin": 2.66,
        "boshuAvg30d": 532.7,
        "heikinAvg30d": 3.256
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 421,
        "ouatsu": 357.793,
        "saikou": 9.8,
        "heikin": 2.65,
        "boshuAvg30d": 532.7,
        "heikinAvg30d": 3.236
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 420,
        "ouatsu": 369.817,
        "saikou": 9.38,
        "heikin": 2.61,
        "boshuAvg30d": 531.3,
        "heikinAvg30d": 3.157
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 421,
        "ouatsu": 366.377,
        "saikou": 9.38,
        "heikin": 2.6,
        "boshuAvg30d": 532.3,
        "heikinAvg30d": 3.299
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 422,
        "ouatsu": 367.897,
        "saikou": 9.38,
        "heikin": 2.54,
        "boshuAvg30d": 533.3,
        "heikinAvg30d": 3.265
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 422,
        "ouatsu": 371.667,
        "saikou": 9.38,
        "heikin": 2.52,
        "boshuAvg30d": 533.7,
        "heikinAvg30d": 3.239
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 422,
        "ouatsu": 371.667,
        "saikou": 9.38,
        "heikin": 2.52,
        "boshuAvg30d": 533.7,
        "heikinAvg30d": 3.369
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 422,
        "ouatsu": 369.767,
        "saikou": 9.38,
        "heikin": 2.48,
        "boshuAvg30d": 533.7,
        "heikinAvg30d": 3.293
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 443,
        "ouatsu": 432.19,
        "saikou": 9.39,
        "heikin": 2.85,
        "boshuAvg30d": 554.7,
        "heikinAvg30d": 3.691
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 451,
        "ouatsu": 450.627,
        "saikou": 9.39,
        "heikin": 3.01,
        "boshuAvg30d": 562.7,
        "heikinAvg30d": 3.811
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 456,
        "ouatsu": 478.727,
        "saikou": 9.39,
        "heikin": 3.29,
        "boshuAvg30d": 568.6,
        "heikinAvg30d": 3.922
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 461,
        "ouatsu": 480.627,
        "saikou": 9.8,
        "heikin": 3.41,
        "boshuAvg30d": 573.6,
        "heikinAvg30d": 3.884
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 461,
        "ouatsu": 480.693,
        "saikou": 9.5,
        "heikin": 3.1,
        "boshuAvg30d": 573.6,
        "heikinAvg30d": 4.249
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 461,
        "ouatsu": 482.593,
        "saikou": 9.5,
        "heikin": 2.99,
        "boshuAvg30d": 573.6,
        "heikinAvg30d": 4.443
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 452,
        "ouatsu": 515.584,
        "saikou": 9.39,
        "heikin": 2.62,
        "boshuAvg30d": 567.2,
        "heikinAvg30d": 4.364
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 452,
        "ouatsu": 517.312,
        "saikou": 9.39,
        "heikin": 2.7,
        "boshuAvg30d": 567.2,
        "heikinAvg30d": 4.195
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 452,
        "ouatsu": 505.916,
        "saikou": 9.4,
        "heikin": 2.48,
        "boshuAvg30d": 566.7,
        "heikinAvg30d": 3.88
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 451,
        "ouatsu": 487.479,
        "saikou": 9.4,
        "heikin": 2.58,
        "boshuAvg30d": 565.7,
        "heikinAvg30d": 3.9
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 448,
        "ouatsu": 498.838,
        "saikou": 9.4,
        "heikin": 2.95,
        "boshuAvg30d": 562.7,
        "heikinAvg30d": 3.997
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 448,
        "ouatsu": 478.445,
        "saikou": 10,
        "heikin": 3.12,
        "boshuAvg30d": 562.7,
        "heikinAvg30d": 4.029
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 447,
        "ouatsu": 466.882,
        "saikou": 10,
        "heikin": 2.94,
        "boshuAvg30d": 561.7,
        "heikinAvg30d": 3.807
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 447,
        "ouatsu": 464.982,
        "saikou": 10,
        "heikin": 2.94,
        "boshuAvg30d": 561.7,
        "heikinAvg30d": 3.86
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 447,
        "ouatsu": 524.044,
        "saikou": 9.4,
        "heikin": 3.16,
        "boshuAvg30d": 559.2,
        "heikinAvg30d": 3.964
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 446,
        "ouatsu": 622.13,
        "saikou": 9.4,
        "heikin": 3.2,
        "boshuAvg30d": 558.2,
        "heikinAvg30d": 4.144
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 445,
        "ouatsu": 620.173,
        "saikou": 9.39,
        "heikin": 3.14,
        "boshuAvg30d": 557.6,
        "heikinAvg30d": 4.402
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 445,
        "ouatsu": 581.558,
        "saikou": 9.39,
        "heikin": 3.49,
        "boshuAvg30d": 557.6,
        "heikinAvg30d": 4.386
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 444,
        "ouatsu": 607.323,
        "saikou": 9.39,
        "heikin": 3.36,
        "boshuAvg30d": 556.6,
        "heikinAvg30d": 4.255
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 444,
        "ouatsu": 582.896,
        "saikou": 9.39,
        "heikin": 3.17,
        "boshuAvg30d": 556.6,
        "heikinAvg30d": 4.62
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 444,
        "ouatsu": 582.896,
        "saikou": 9.39,
        "heikin": 3.23,
        "boshuAvg30d": 556.2,
        "heikinAvg30d": 4.701
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 444,
        "ouatsu": 626.839,
        "saikou": 9.39,
        "heikin": 2.82,
        "boshuAvg30d": 556.2,
        "heikinAvg30d": 4.9
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 444,
        "ouatsu": 568.565,
        "saikou": 9.39,
        "heikin": 3.29,
        "boshuAvg30d": 552.3,
        "heikinAvg30d": 5.031
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 444,
        "ouatsu": 571.791,
        "saikou": 9.39,
        "heikin": 2.9,
        "boshuAvg30d": 552.3,
        "heikinAvg30d": 4.952
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 446,
        "ouatsu": 490.664,
        "saikou": 9.39,
        "heikin": 3.17,
        "boshuAvg30d": 554.7,
        "heikinAvg30d": 4.809
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 446,
        "ouatsu": 441.573,
        "saikou": 9.39,
        "heikin": 3.24,
        "boshuAvg30d": 554.3,
        "heikinAvg30d": 4.652
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 447,
        "ouatsu": 462.318,
        "saikou": 9.39,
        "heikin": 2.58,
        "boshuAvg30d": 554.9,
        "heikinAvg30d": 4.65
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 447,
        "ouatsu": 456.087,
        "saikou": 9.8,
        "heikin": 2.94,
        "boshuAvg30d": 554.9,
        "heikinAvg30d": 4.43
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 445,
        "ouatsu": 489.378,
        "saikou": 9.39,
        "heikin": 2.99,
        "boshuAvg30d": 553.3,
        "heikinAvg30d": 3.963
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 445,
        "ouatsu": 458.569,
        "saikou": 9.39,
        "heikin": 3.49,
        "boshuAvg30d": 553.3,
        "heikinAvg30d": 3.977
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 444,
        "ouatsu": 407.597,
        "saikou": 9.39,
        "heikin": 3.24,
        "boshuAvg30d": 552.7,
        "heikinAvg30d": 3.62
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 444,
        "ouatsu": 412.707,
        "saikou": 9.39,
        "heikin": 3.11,
        "boshuAvg30d": 552.7,
        "heikinAvg30d": 4.611
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 444,
        "ouatsu": 356.78,
        "saikou": 9.39,
        "heikin": 3.12,
        "boshuAvg30d": 552.7,
        "heikinAvg30d": 4.134
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 442,
        "ouatsu": 316.075,
        "saikou": 9.39,
        "heikin": 3.78,
        "boshuAvg30d": 550.7,
        "heikinAvg30d": 3.888
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 440,
        "ouatsu": 367.646,
        "saikou": 9.39,
        "heikin": 3.56,
        "boshuAvg30d": 548.3,
        "heikinAvg30d": 4.167
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 439,
        "ouatsu": 382.073,
        "saikou": 9.39,
        "heikin": 3.29,
        "boshuAvg30d": 546.9,
        "heikinAvg30d": 4.016
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 201.134,
        "saikou": 3.1,
        "heikin": 2.72,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.429
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 247.248,
        "saikou": 2.88,
        "heikin": 1.83,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.302
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 246.684,
        "saikou": 2.89,
        "heikin": 1.9,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.356
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 248.574,
        "saikou": 7.79,
        "heikin": 2.83,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.413
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 228.718,
        "saikou": 8.8,
        "heikin": 3,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.693
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 234.659,
        "saikou": 2.89,
        "heikin": 1.88,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.801
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 252.616,
        "saikou": 2.89,
        "heikin": 1.9,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.643
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 252.616,
        "saikou": 7.38,
        "heikin": 2.77,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.644
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 258.316,
        "saikou": 2.89,
        "heikin": 2.07,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.779
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 258.316,
        "saikou": 2.89,
        "heikin": 2.02,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.667
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 260.306,
        "saikou": 2.89,
        "heikin": 2.05,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.559
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 258.806,
        "saikou": 2.88,
        "heikin": 2.44,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.671
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 260.306,
        "saikou": 2.8,
        "heikin": 2.32,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.904
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 252.422,
        "saikou": 5.88,
        "heikin": 2.86,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 2.89
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 252.422,
        "saikou": 2.89,
        "heikin": 2.04,
        "boshuAvg30d": 157.4,
        "heikinAvg30d": 3.144
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 260.306,
        "saikou": 9.96,
        "heikin": 3.16,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 3.142
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 260.306,
        "saikou": 6.75,
        "heikin": 3.36,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 3.598
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 258.496,
        "saikou": 3.88,
        "heikin": 2.39,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 3.753
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 223.264,
        "saikou": 6.54,
        "heikin": 4.07,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 4.021
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 219.734,
        "saikou": 6.24,
        "heikin": 3.26,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 3.978
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 226.956,
        "saikou": 6.44,
        "heikin": 3.65,
        "boshuAvg30d": 164.0,
        "heikinAvg30d": 4.176
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 223.068,
        "saikou": 6.28,
        "heikin": 3.82,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 4.178
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 221.558,
        "saikou": 4.93,
        "heikin": 3.58,
        "boshuAvg30d": 162.0,
        "heikinAvg30d": 3.86
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 223.533,
        "saikou": 4.75,
        "heikin": 3.41,
        "boshuAvg30d": 161.0,
        "heikinAvg30d": 3.71
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 227.01,
        "saikou": 6.59,
        "heikin": 3.36,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 3.605
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 227.01,
        "saikou": 3.88,
        "heikin": 2.71,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 3.64
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 221.894,
        "saikou": 5.1,
        "heikin": 2.96,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 3.924
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 254.232,
        "saikou": 3.88,
        "heikin": 2.94,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 4.053
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 252.372,
        "saikou": 3.88,
        "heikin": 3,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.216
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 252.372,
        "saikou": 5.1,
        "heikin": 3.16,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.127
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 246.388,
        "saikou": 5.1,
        "heikin": 3.21,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 3.817
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 228.167,
        "saikou": 5.1,
        "heikin": 2.36,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 4.034
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 269.394,
        "saikou": 5.1,
        "heikin": 2.37,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 3.96
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 295.259,
        "saikou": 7.19,
        "heikin": 2.78,
        "boshuAvg30d": 156.4,
        "heikinAvg30d": 4.075
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 255.651,
        "saikou": 6.68,
        "heikin": 3.03,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 3.937
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 249.985,
        "saikou": 3.99,
        "heikin": 2.87,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 3.751
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 292.46,
        "saikou": 4.36,
        "heikin": 3.3,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.871
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 221.369,
        "saikou": 5.37,
        "heikin": 2.83,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.754
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 236.692,
        "saikou": 2.89,
        "heikin": 2.13,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.304
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 317.768,
        "saikou": 3.17,
        "heikin": 2.45,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.277
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 300.703,
        "saikou": 3.15,
        "heikin": 2.52,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.312
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 300.703,
        "saikou": 2.8,
        "heikin": 2.39,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.035
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 296.723,
        "saikou": 2.74,
        "heikin": 2.03,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 2.807
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 298.583,
        "saikou": 2.8,
        "heikin": 2.66,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.426
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 289.383,
        "saikou": 2.88,
        "heikin": 2.71,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.098
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 269.557,
        "saikou": 2.69,
        "heikin": 2.46,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.043
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 248.74,
        "saikou": 2.8,
        "heikin": 2.57,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 3.211
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 210.929,
        "saikou": 2.86,
        "heikin": 2.48,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 3.179
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.43,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.261
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.108
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.079
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.43,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.274
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.48,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.976
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.43,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.567
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.302
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.084
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.209
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.954
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.153
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.407
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 3.158
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.59,
        "heikin": 2.47,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.087
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 3.536
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.65,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.36
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 1.65,
        "heikin": 1.65,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 4.147
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 43.64,
        "saikou": 4,
        "heikin": 0.63,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 5.159
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.937
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.485
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.71,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.536
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 1.35,
        "heikin": 1.35,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.212
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 3.95,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.469
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.451
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 2.9,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.598
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.585
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.55,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.763
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.38
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.15,
        "heikin": 2.15,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.507
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.87,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.729
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 3.66,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 3.948
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 5.8,
        "heikin": 4.33,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 4.361
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.09,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.933
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 2.97,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.298
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.5,
        "heikin": 4.06,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.302
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.098
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.21,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.011
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.04,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.607
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.415
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.65,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.199
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.003
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.603
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.25,
        "heikin": 2.25,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.841
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.25,
        "heikin": 2.25,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.172
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.514
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.25,
        "heikin": 2.25,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.761
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 2.883
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.417
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 108.774,
        "saikou": 3,
        "heikin": 1.89,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 1.835
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 125.217,
        "saikou": 2.9,
        "heikin": 1.87,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.037
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 145.752,
        "saikou": 2.95,
        "heikin": 1.62,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.081
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 119.279,
        "saikou": 2.95,
        "heikin": 1.8,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.098
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 117.281,
        "saikou": 2.95,
        "heikin": 1.91,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.189
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 117.281,
        "saikou": 2.97,
        "heikin": 1.9,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 2.246
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 127.166,
        "saikou": 2.89,
        "heikin": 1.78,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.175
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 127.166,
        "saikou": 3,
        "heikin": 1.9,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 2.279
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.9,
        "heikin": 1.81,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 1.99
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.9,
        "heikin": 1.81,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.064
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.89,
        "heikin": 1.76,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.233
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.87,
        "heikin": 1.69,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 2.138
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 151.109,
        "saikou": 2.8,
        "heikin": 1.27,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 3.365
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 151.109,
        "saikou": 2.89,
        "heikin": 1.49,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 3.333
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 151.109,
        "saikou": 3,
        "heikin": 1.77,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 3.085
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 103.221,
        "saikou": 2.95,
        "heikin": 2.37,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 3.384
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 103.221,
        "saikou": 2.97,
        "heikin": 2.34,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 4.267
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 103.221,
        "saikou": 4,
        "heikin": 2.57,
        "boshuAvg30d": 158.2,
        "heikinAvg30d": 4.73
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 4,
        "heikin": 2.65,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 4.53
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 2.89,
        "heikin": 2.07,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 4.624
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 6.45,
        "heikin": 3.06,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 4.779
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 6.45,
        "heikin": 3.04,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 4.642
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 97.356,
        "saikou": 5.97,
        "heikin": 3.1,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.478
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 112.243,
        "saikou": 5.95,
        "heikin": 2.42,
        "boshuAvg30d": 157.2,
        "heikinAvg30d": 4.385
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 111.655,
        "saikou": 5.47,
        "heikin": 2.12,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 5.179
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 143.337,
        "saikou": 3.5,
        "heikin": 1.52,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.291
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 95.913,
        "saikou": 6.45,
        "heikin": 3.13,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.366
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 97.911,
        "saikou": 3.97,
        "heikin": 2.32,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 4.338
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 138.576,
        "saikou": 3.97,
        "heikin": 1.66,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.412
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 118.968,
        "saikou": 4.95,
        "heikin": 2.53,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 4.058
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4.95,
        "heikin": 2.73,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 3.918
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 5.97,
        "heikin": 2.95,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 3.843
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4.95,
        "heikin": 2.73,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 3.945
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 3,
        "heikin": 2.23,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 4.232
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 3.47,
        "heikin": 2.18,
        "boshuAvg30d": 156.2,
        "heikinAvg30d": 3.997
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 99.354,
        "saikou": 3.47,
        "heikin": 2.33,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 3.847
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 4.95,
        "heikin": 2.32,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 3.744
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 117.008,
        "saikou": 5.45,
        "heikin": 2.33,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 3.689
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 106.819,
        "saikou": 2.8,
        "heikin": 1.88,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 3.788
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 97.911,
        "saikou": 2.8,
        "heikin": 2.09,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 3.629
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 99.354,
        "saikou": 2.8,
        "heikin": 2.07,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 3.318
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 97.911,
        "saikou": 2.52,
        "heikin": 2.08,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 3.379
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 162.521,
        "saikou": 2.45,
        "heikin": 1.21,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.093
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 186.464,
        "saikou": 2.34,
        "heikin": 1,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.206
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 186.464,
        "saikou": 1.89,
        "heikin": 0.92,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 3.047
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 186.464,
        "saikou": 1.89,
        "heikin": 0.92,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 2.995
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 170.867,
        "saikou": 2.48,
        "heikin": 1.23,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 3.165
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 95.564,
        "saikou": 2.8,
        "heikin": 2.03,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.146
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 155.483,
        "saikou": 2.89,
        "heikin": 1.62,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.778
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 155.483,
        "saikou": 2.89,
        "heikin": 1.7,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 3.051
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 155.483,
        "saikou": 2.89,
        "heikin": 1.61,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 3.068
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 159.273,
        "saikou": 2.89,
        "heikin": 1.48,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.935
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 159.273,
        "saikou": 2.8,
        "heikin": 1.5,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.942
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 159.273,
        "saikou": 2.89,
        "heikin": 1.64,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.974
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 2.89,
        "heikin": 1.75,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.041
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 2.89,
        "heikin": 1.64,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.084
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 2.89,
        "heikin": 1.83,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.061
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 2.89,
        "heikin": 2.18,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.22
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 3.63,
        "heikin": 2.8,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.458
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 176.132,
        "saikou": 3.63,
        "heikin": 2.79,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.458
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 176.132,
        "saikou": 3.72,
        "heikin": 2.83,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 3.746
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 176.132,
        "saikou": 2.89,
        "heikin": 1.81,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 3.207
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 176.132,
        "saikou": 3.06,
        "heikin": 2.4,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 3.044
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 176.132,
        "saikou": 2.89,
        "heikin": 1.58,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.923
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 162.206,
        "saikou": 2.89,
        "heikin": 1.47,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.899
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 162.206,
        "saikou": 3,
        "heikin": 1.5,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.78
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 176.132,
        "saikou": 4,
        "heikin": 1.97,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.632
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 176.132,
        "saikou": 2.89,
        "heikin": 2.02,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.279
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 176.132,
        "saikou": 5,
        "heikin": 1.93,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 3.031
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 176.132,
        "saikou": 4.25,
        "heikin": 1.92,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.014
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 176.132,
        "saikou": 4,
        "heikin": 1.87,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.971
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 176.132,
        "saikou": 4,
        "heikin": 1.84,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.906
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 176.132,
        "saikou": 4,
        "heikin": 1.69,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.241
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 176.132,
        "saikou": 3,
        "heikin": 1.47,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.136
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 176.132,
        "saikou": 2.89,
        "heikin": 2.12,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.855
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 176.132,
        "saikou": 2.89,
        "heikin": 2.28,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.153
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 176.132,
        "saikou": 3,
        "heikin": 2.36,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.391
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 176.132,
        "saikou": 4,
        "heikin": 2.51,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.674
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 176.132,
        "saikou": 6.97,
        "heikin": 3.16,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.6
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 195.139,
        "saikou": 6.97,
        "heikin": 3.87,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 5.766
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 195.139,
        "saikou": 5.18,
        "heikin": 3.71,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 5.89
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 193.157,
        "saikou": 5.5,
        "heikin": 3.76,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.49
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 193.157,
        "saikou": 5.32,
        "heikin": 3.67,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.979
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 193.157,
        "saikou": 5.37,
        "heikin": 3.69,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.989
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 191.167,
        "saikou": 4.96,
        "heikin": 3.58,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 7.294
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 193.149,
        "saikou": 4.71,
        "heikin": 3.42,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 7.402
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 191.349,
        "saikou": 4.69,
        "heikin": 3.38,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 7.111
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 193.339,
        "saikou": 3.53,
        "heikin": 2.68,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.651
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 195.139,
        "saikou": 4.71,
        "heikin": 3.39,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.348
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 195.139,
        "saikou": 4.71,
        "heikin": 3.3,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 5.703
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 195.139,
        "saikou": 4.73,
        "heikin": 3.37,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 5.228
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 195.139,
        "saikou": 4.69,
        "heikin": 3.34,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 4.949
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 208.942,
        "saikou": 6.38,
        "heikin": 3.59,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 4.317
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 195.139,
        "saikou": 3.62,
        "heikin": 2.71,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.914
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 195.139,
        "saikou": 3.53,
        "heikin": 2.66,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 3.737
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 195.139,
        "saikou": 2.8,
        "heikin": 1.57,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 2.733
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.763
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.791
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.798
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.751
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.731
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 39.6,
        "heikinAvg30d": 0.753
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.902
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 175.93,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.87
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.875
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.925
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.49,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.47,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.893
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 0.911
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 0.91
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.94
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.817
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.797
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.04,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.847
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 46.6,
        "heikinAvg30d": 0.956
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 46.6,
        "heikinAvg30d": 0.968
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.952
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.987
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.971
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.964
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.063
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.003
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.922
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.995
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 167.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.939
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 167.473,
        "saikou": 1.6,
        "heikin": 1.12,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.858
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.936
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.87
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.921
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.859
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.85
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.851
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 2.5,
        "heikin": 0.83,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.861
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 2.5,
        "heikin": 0.83,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.888
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 2.5,
        "heikin": 0.83,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.868
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 2.15,
        "heikin": 0.69,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.851
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.42,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.709
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 148.973,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.732
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 134.973,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.715
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 134.973,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.685
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 134.973,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.703
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 134.973,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.741
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 170.643,
        "saikou": 3.37,
        "heikin": 2.95,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 4.13
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 172.567,
        "saikou": 3.37,
        "heikin": 2.95,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.977
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 186.278,
        "saikou": 2.9,
        "heikin": 2.41,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.809
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 186.276,
        "saikou": 2.9,
        "heikin": 2.36,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.828
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 188.265,
        "saikou": 2.89,
        "heikin": 2.28,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 3.756
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 188.265,
        "saikou": 2.9,
        "heikin": 2.26,
        "boshuAvg30d": 163.9,
        "heikinAvg30d": 3.803
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 205.525,
        "saikou": 2.89,
        "heikin": 2.36,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 3.839
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 201.509,
        "saikou": 2.89,
        "heikin": 2.41,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 3.864
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 205.025,
        "saikou": 3.4,
        "heikin": 2.96,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 3.888
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 203.041,
        "saikou": 4.53,
        "heikin": 3.7,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.021
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 202.025,
        "saikou": 4.8,
        "heikin": 3.88,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 4.1
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 200.049,
        "saikou": 5.33,
        "heikin": 4.23,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 3.947
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 197.059,
        "saikou": 4.54,
        "heikin": 3.84,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 3.873
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 198.197,
        "saikou": 3.09,
        "heikin": 2.75,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 3.704
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 198.197,
        "saikou": 2.89,
        "heikin": 2.3,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 3.765
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 194.399,
        "saikou": 2.9,
        "heikin": 2,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 3.806
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 194.399,
        "saikou": 2.9,
        "heikin": 2.13,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 4.128
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 194.399,
        "saikou": 2.89,
        "heikin": 2.33,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 4.937
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 195.529,
        "saikou": 3,
        "heikin": 2.65,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 4.9
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 205.529,
        "saikou": 2.9,
        "heikin": 2.45,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 4.842
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 196.986,
        "saikou": 3.07,
        "heikin": 2.41,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.644
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 181.108,
        "saikou": 4,
        "heikin": 2.56,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.713
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 180.092,
        "saikou": 4.5,
        "heikin": 3.08,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 4.698
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 178.144,
        "saikou": 4.02,
        "heikin": 3.04,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 4.813
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 177.425,
        "saikou": 4.2,
        "heikin": 2.44,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.181
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 174.425,
        "saikou": 4.79,
        "heikin": 2.48,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.327
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 174.425,
        "saikou": 3.9,
        "heikin": 2.59,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.833
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 170.573,
        "saikou": 5.24,
        "heikin": 4.46,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 5.488
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 177.084,
        "saikou": 6.05,
        "heikin": 4.93,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 6.093
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 263.819,
        "saikou": 7.18,
        "heikin": 5.36,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 6.658
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 261.81,
        "saikou": 7.18,
        "heikin": 5.33,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 6.33
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 261.81,
        "saikou": 8.04,
        "heikin": 6.02,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 7.368
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 235.81,
        "saikou": 7.81,
        "heikin": 6.46,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 7.33
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 196.826,
        "saikou": 8.35,
        "heikin": 5.64,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 7.738
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 232.821,
        "saikou": 5.82,
        "heikin": 4.95,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 7.261
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 193.845,
        "saikou": 6.21,
        "heikin": 5.03,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 7.454
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 222.559,
        "saikou": 5.75,
        "heikin": 5.75,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 7.541
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 245.559,
        "saikou": 7.65,
        "heikin": 6.29,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 7.27
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 254.526,
        "saikou": 6.97,
        "heikin": 5.03,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 6.7
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 256.515,
        "saikou": 6.71,
        "heikin": 4.89,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.972
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 194.015,
        "saikou": 6.42,
        "heikin": 4.56,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.375
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 235.665,
        "saikou": 5.98,
        "heikin": 4.76,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.633
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 236.777,
        "saikou": 6.1,
        "heikin": 4.69,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.244
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 237.777,
        "saikou": 6,
        "heikin": 4.74,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.162
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 261.777,
        "saikou": 6.29,
        "heikin": 5.21,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.841
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 258.793,
        "saikou": 5.34,
        "heikin": 4.33,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.147
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 200.777,
        "saikou": 5.69,
        "heikin": 4.8,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.022
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 199.925,
        "saikou": 5.33,
        "heikin": 4.43,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 3.409
      }
    ]
  }
};
