// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/27〜2026/09/25）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-26",
  "fetchedAt": "2026-09-26",
  "avgWindowLabel": "過去30日平均（2026/08/27〜2026/09/25）",
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
      "ouatsu": 1596.744,
      "saikou": 10,
      "heikin": 2.53,
      "boshuAvg30d": 1375.6,
      "heikinAvg30d": 2.856
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1249,
      "ouatsu": 1594.88,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1375.6,
      "heikinAvg30d": 2.796
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1249,
      "ouatsu": 1673.904,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1375.6,
      "heikinAvg30d": 2.873
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1249,
      "ouatsu": 1710.023,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1375.2,
      "heikinAvg30d": 2.863
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1244,
      "ouatsu": 1736.183,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1370.2,
      "heikinAvg30d": 2.881
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1243,
      "ouatsu": 1667.034,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1369.1,
      "heikinAvg30d": 2.906
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1243,
      "ouatsu": 1684.585,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1374.5,
      "heikinAvg30d": 2.942
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1244,
      "ouatsu": 1690.698,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1375.5,
      "heikinAvg30d": 3.023
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1247,
      "ouatsu": 1830.627,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1378.6,
      "heikinAvg30d": 3.081
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1247,
      "ouatsu": 1796.295,
      "saikou": 10,
      "heikin": 3.06,
      "boshuAvg30d": 1378.8,
      "heikinAvg30d": 3.089
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1247,
      "ouatsu": 1747.742,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1378.8,
      "heikinAvg30d": 3.181
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1247,
      "ouatsu": 1752.553,
      "saikou": 10,
      "heikin": 3.01,
      "boshuAvg30d": 1378.8,
      "heikinAvg30d": 3.164
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1313,
      "ouatsu": 1712.682,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1444.3,
      "heikinAvg30d": 3.396
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1783.737,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1465.6,
      "heikinAvg30d": 3.286
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1357,
      "ouatsu": 1741.888,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1488.6,
      "heikinAvg30d": 3.308
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1375,
      "ouatsu": 1673.012,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1506.0,
      "heikinAvg30d": 3.27
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1376,
      "ouatsu": 1756.076,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1506.8,
      "heikinAvg30d": 3.519
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1376,
      "ouatsu": 1723.401,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1506.8,
      "heikinAvg30d": 3.736
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1313,
      "ouatsu": 1698.494,
      "saikou": 10,
      "heikin": 3.67,
      "boshuAvg30d": 1457.9,
      "heikinAvg30d": 3.776
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1317,
      "ouatsu": 1697.912,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1462.1,
      "heikinAvg30d": 3.686
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1325,
      "ouatsu": 1582.628,
      "saikou": 10,
      "heikin": 3.9,
      "boshuAvg30d": 1469.9,
      "heikinAvg30d": 3.688
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1325,
      "ouatsu": 1665.367,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1469.9,
      "heikinAvg30d": 3.719
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1322,
      "ouatsu": 1637.859,
      "saikou": 10,
      "heikin": 3.89,
      "boshuAvg30d": 1466.6,
      "heikinAvg30d": 3.62
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1321,
      "ouatsu": 1678.847,
      "saikou": 10,
      "heikin": 3.89,
      "boshuAvg30d": 1465.8,
      "heikinAvg30d": 3.584
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1314,
      "ouatsu": 1661.589,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1456.4,
      "heikinAvg30d": 3.439
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1314,
      "ouatsu": 1583.778,
      "saikou": 10,
      "heikin": 3.79,
      "boshuAvg30d": 1456.4,
      "heikinAvg30d": 3.44
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1314,
      "ouatsu": 1658.17,
      "saikou": 10,
      "heikin": 4,
      "boshuAvg30d": 1453.8,
      "heikinAvg30d": 3.634
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1308,
      "ouatsu": 1590.373,
      "saikou": 10,
      "heikin": 4.13,
      "boshuAvg30d": 1448.2,
      "heikinAvg30d": 3.812
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1303,
      "ouatsu": 1636.223,
      "saikou": 10,
      "heikin": 4.15,
      "boshuAvg30d": 1443.7,
      "heikinAvg30d": 3.894
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1296,
      "ouatsu": 1564.533,
      "saikou": 10,
      "heikin": 4.22,
      "boshuAvg30d": 1437.2,
      "heikinAvg30d": 3.895
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1353,
      "ouatsu": 1652.389,
      "saikou": 10,
      "heikin": 4.06,
      "boshuAvg30d": 1485.9,
      "heikinAvg30d": 3.855
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1353,
      "ouatsu": 1610.301,
      "saikou": 10,
      "heikin": 4.47,
      "boshuAvg30d": 1485.9,
      "heikinAvg30d": 4.01
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1353,
      "ouatsu": 1679.042,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1485.6,
      "heikinAvg30d": 4.04
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1351,
      "ouatsu": 1596.452,
      "saikou": 10,
      "heikin": 3.75,
      "boshuAvg30d": 1483.1,
      "heikinAvg30d": 4.203
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1347,
      "ouatsu": 1696.726,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1475.3,
      "heikinAvg30d": 4.312
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1343,
      "ouatsu": 1518.8,
      "saikou": 10,
      "heikin": 3.9,
      "boshuAvg30d": 1471.3,
      "heikinAvg30d": 4.253
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1335,
      "ouatsu": 1547.484,
      "saikou": 10,
      "heikin": 3.97,
      "boshuAvg30d": 1463.1,
      "heikinAvg30d": 4.324
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1335,
      "ouatsu": 1486.564,
      "saikou": 10,
      "heikin": 4.13,
      "boshuAvg30d": 1462.9,
      "heikinAvg30d": 4.234
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1336,
      "ouatsu": 1573.521,
      "saikou": 10,
      "heikin": 3.92,
      "boshuAvg30d": 1463.4,
      "heikinAvg30d": 4.117
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1335,
      "ouatsu": 1687.093,
      "saikou": 10,
      "heikin": 3.47,
      "boshuAvg30d": 1462.6,
      "heikinAvg30d": 3.983
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1330,
      "ouatsu": 1653.104,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1457.6,
      "heikinAvg30d": 3.883
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1326,
      "ouatsu": 1636.223,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1454.1,
      "heikinAvg30d": 3.81
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1233,
      "ouatsu": 1600.555,
      "saikou": 9.4,
      "heikin": 3.14,
      "boshuAvg30d": 1366.6,
      "heikinAvg30d": 3.514
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1236,
      "ouatsu": 1637.515,
      "saikou": 9.4,
      "heikin": 2.85,
      "boshuAvg30d": 1369.6,
      "heikinAvg30d": 3.716
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1237,
      "ouatsu": 1597.853,
      "saikou": 10,
      "heikin": 2.42,
      "boshuAvg30d": 1370.6,
      "heikinAvg30d": 3.492
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1230,
      "ouatsu": 1772.272,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1363.8,
      "heikinAvg30d": 3.451
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1223,
      "ouatsu": 1745.044,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1356.5,
      "heikinAvg30d": 3.456
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1215,
      "ouatsu": 1789.459,
      "saikou": 10,
      "heikin": 2.15,
      "boshuAvg30d": 1348.3,
      "heikinAvg30d": 3.266
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
        "ouatsu": 175.94,
        "saikou": 1.08,
        "heikin": 1.06,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.021
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 194.538,
        "saikou": 1.55,
        "heikin": 1.07,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 0.978
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 153.908,
        "saikou": 3.95,
        "heikin": 1.45,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.022
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 151.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 0.993
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 239.298,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.286
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 186.088,
        "saikou": 3.95,
        "heikin": 1.09,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.422
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 3.95,
        "heikin": 1.15,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.437
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.534
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 239.298,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.85
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 200.298,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.614
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 189.968,
        "saikou": 4,
        "heikin": 0.91,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.595
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 237.348,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.741
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 154.908,
        "saikou": 3.95,
        "heikin": 1.61,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.153
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.672
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 235.258,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.523
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 184.968,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.52
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.93,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 0.978
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 231.408,
        "saikou": 1.01,
        "heikin": 0.91,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.049
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 1.029
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 189.458,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 1.064
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 148.908,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 1.027
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 191.408,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 1.033
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 0.924
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 189.458,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 0.965
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 229.418,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 1.042
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 186.94,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 0.971
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 229.458,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 1.39
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 1.495
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 231.408,
        "saikou": 1.01,
        "heikin": 0.97,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.264
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 152.958,
        "saikou": 9.91,
        "heikin": 2.03,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.555
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.338
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 186.068,
        "saikou": 8.75,
        "heikin": 3.13,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.724
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 201.258,
        "saikou": 1.2,
        "heikin": 1.07,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.168
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 110.968,
        "saikou": 5.16,
        "heikin": 1.94,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.995
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 150.518,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.493
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 87.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.212
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 134.268,
        "saikou": 1.7,
        "heikin": 1.23,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.279
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 161.258,
        "saikou": 1.7,
        "heikin": 1.29,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.392
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 109,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.113
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 153.44,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.951
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 152.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.201
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 193.458,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.856
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 150.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.519
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.891
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 236.398,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.513
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 234.448,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.494
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.298
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 234.448,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.594
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 72.439,
        "saikou": 10,
        "heikin": 5.31,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 8.368
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 83.109,
        "saikou": 10,
        "heikin": 5.44,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 8.636
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 102.987,
        "saikou": 10,
        "heikin": 6.23,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 8.994
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 102.987,
        "saikou": 10,
        "heikin": 6.33,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 8.989
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 88.989,
        "saikou": 10,
        "heikin": 6.61,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 8.944
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 88.989,
        "saikou": 10,
        "heikin": 7.71,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 8.957
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 81.987,
        "saikou": 10,
        "heikin": 8.21,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 8.838
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 83.487,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 8.841
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 8.797
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 8.749
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 8.673
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 8.777
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.13,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 8.863
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 105.986,
        "saikou": 10,
        "heikin": 8.54,
        "boshuAvg30d": 187.2,
        "heikinAvg30d": 9.085
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 107.486,
        "saikou": 10,
        "heikin": 8.57,
        "boshuAvg30d": 193.0,
        "heikinAvg30d": 9.139
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 117.986,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 196.8,
        "heikinAvg30d": 9.058
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 9.13,
        "boshuAvg30d": 196.8,
        "heikinAvg30d": 9.119
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.11,
        "boshuAvg30d": 196.8,
        "heikinAvg30d": 8.943
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 86.132,
        "saikou": 10,
        "heikin": 9.03,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 8.307
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 108.132,
        "saikou": 10,
        "heikin": 8.45,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 8.362
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 108.132,
        "saikou": 10,
        "heikin": 8.58,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 8.207
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 8.62,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 8.251
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 120.132,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 8.246
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 130.167,
        "saikou": 10,
        "heikin": 8.08,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 8.343
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 105.686,
        "saikou": 10,
        "heikin": 8.52,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 8.418
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 105.686,
        "saikou": 10,
        "heikin": 8.53,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 8.421
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 97.482,
        "saikou": 10,
        "heikin": 8.4,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 8.12
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 75.482,
        "saikou": 10,
        "heikin": 8.98,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 8.208
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 75.482,
        "saikou": 10,
        "heikin": 8.98,
        "boshuAvg30d": 138.4,
        "heikinAvg30d": 8.466
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 63.482,
        "saikou": 10,
        "heikin": 8.78,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 8.422
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 63.482,
        "saikou": 10,
        "heikin": 8.83,
        "boshuAvg30d": 193.3,
        "heikinAvg30d": 8.745
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 63.482,
        "saikou": 10,
        "heikin": 8.83,
        "boshuAvg30d": 193.3,
        "heikinAvg30d": 8.364
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 63.482,
        "saikou": 10,
        "heikin": 8.83,
        "boshuAvg30d": 193.3,
        "heikinAvg30d": 8.015
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 61.982,
        "saikou": 10,
        "heikin": 8.8,
        "boshuAvg30d": 192.2,
        "heikinAvg30d": 7.663
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 63.482,
        "saikou": 10,
        "heikin": 8.83,
        "boshuAvg30d": 190.2,
        "heikinAvg30d": 7.639
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 73.982,
        "saikou": 10,
        "heikin": 8.18,
        "boshuAvg30d": 188.2,
        "heikinAvg30d": 7.652
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 73.486,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 187.0,
        "heikinAvg30d": 7.599
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 70.021,
        "saikou": 10,
        "heikin": 8.08,
        "boshuAvg30d": 187.0,
        "heikinAvg30d": 7.624
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 73.486,
        "saikou": 10,
        "heikin": 8.18,
        "boshuAvg30d": 187.0,
        "heikinAvg30d": 7.994
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.79,
        "boshuAvg30d": 186.2,
        "heikinAvg30d": 8.275
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.79,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 8.269
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.79,
        "boshuAvg30d": 186.2,
        "heikinAvg30d": 8.436
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 61.486,
        "saikou": 9.4,
        "heikin": 8.57,
        "boshuAvg30d": 101.9,
        "heikinAvg30d": 8.482
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 61.486,
        "saikou": 9.4,
        "heikin": 8.59,
        "boshuAvg30d": 101.9,
        "heikinAvg30d": 8.658
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.77,
        "boshuAvg30d": 101.9,
        "heikinAvg30d": 8.632
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 71.586,
        "saikou": 10,
        "heikin": 8.96,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 8.728
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 71.586,
        "saikou": 10,
        "heikin": 8.96,
        "boshuAvg30d": 99.9,
        "heikinAvg30d": 8.835
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 9.11,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 8.859
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 426,
        "ouatsu": 418.654,
        "saikou": 9.2,
        "heikin": 4.24,
        "boshuAvg30d": 502.3,
        "heikinAvg30d": 3.53
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 426,
        "ouatsu": 419.721,
        "saikou": 9.2,
        "heikin": 4.3,
        "boshuAvg30d": 502.3,
        "heikinAvg30d": 3.423
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 426,
        "ouatsu": 469.841,
        "saikou": 9.21,
        "heikin": 3.92,
        "boshuAvg30d": 502.3,
        "heikinAvg30d": 3.332
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 426,
        "ouatsu": 494.93,
        "saikou": 9.22,
        "heikin": 3.63,
        "boshuAvg30d": 502.2,
        "heikinAvg30d": 3.266
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 424,
        "ouatsu": 473.472,
        "saikou": 9.22,
        "heikin": 3.58,
        "boshuAvg30d": 500.2,
        "heikinAvg30d": 3.229
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 424,
        "ouatsu": 461.439,
        "saikou": 9.22,
        "heikin": 3.79,
        "boshuAvg30d": 500.2,
        "heikinAvg30d": 3.218
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 423,
        "ouatsu": 471.611,
        "saikou": 9.22,
        "heikin": 3.79,
        "boshuAvg30d": 499.0,
        "heikinAvg30d": 3.107
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 424,
        "ouatsu": 487.737,
        "saikou": 9.21,
        "heikin": 3.63,
        "boshuAvg30d": 500.0,
        "heikinAvg30d": 3.251
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 425,
        "ouatsu": 473.411,
        "saikou": 9.21,
        "heikin": 3.82,
        "boshuAvg30d": 501.0,
        "heikinAvg30d": 3.195
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 425,
        "ouatsu": 492.907,
        "saikou": 9.22,
        "heikin": 3.65,
        "boshuAvg30d": 501.2,
        "heikinAvg30d": 3.219
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 425,
        "ouatsu": 487.694,
        "saikou": 9.22,
        "heikin": 3.86,
        "boshuAvg30d": 501.2,
        "heikinAvg30d": 3.277
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 425,
        "ouatsu": 471.461,
        "saikou": 9.17,
        "heikin": 4.05,
        "boshuAvg30d": 501.2,
        "heikinAvg30d": 3.303
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 446,
        "ouatsu": 498.811,
        "saikou": 9.21,
        "heikin": 4.18,
        "boshuAvg30d": 522.2,
        "heikinAvg30d": 3.654
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 454,
        "ouatsu": 465.002,
        "saikou": 9.2,
        "heikin": 4.34,
        "boshuAvg30d": 530.2,
        "heikinAvg30d": 3.697
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 459,
        "ouatsu": 376.548,
        "saikou": 9.2,
        "heikin": 3.74,
        "boshuAvg30d": 535.5,
        "heikinAvg30d": 3.794
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 464,
        "ouatsu": 343.192,
        "saikou": 9.2,
        "heikin": 3.91,
        "boshuAvg30d": 540.3,
        "heikinAvg30d": 3.802
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 464,
        "ouatsu": 502.995,
        "saikou": 9.2,
        "heikin": 4.89,
        "boshuAvg30d": 540.3,
        "heikinAvg30d": 4.234
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 464,
        "ouatsu": 496.847,
        "saikou": 9.2,
        "heikin": 5.22,
        "boshuAvg30d": 540.3,
        "heikinAvg30d": 4.452
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 455,
        "ouatsu": 531.566,
        "saikou": 9.2,
        "heikin": 5.02,
        "boshuAvg30d": 534.2,
        "heikinAvg30d": 4.353
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 455,
        "ouatsu": 507.024,
        "saikou": 9.2,
        "heikin": 5.14,
        "boshuAvg30d": 534.2,
        "heikinAvg30d": 4.23
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 455,
        "ouatsu": 453.24,
        "saikou": 9.2,
        "heikin": 5.43,
        "boshuAvg30d": 534.2,
        "heikinAvg30d": 4.077
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 454,
        "ouatsu": 481.882,
        "saikou": 9.2,
        "heikin": 5.25,
        "boshuAvg30d": 533.2,
        "heikinAvg30d": 4.116
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 451,
        "ouatsu": 494.848,
        "saikou": 9.17,
        "heikin": 5.17,
        "boshuAvg30d": 530.2,
        "heikinAvg30d": 4.157
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 451,
        "ouatsu": 491.048,
        "saikou": 9.17,
        "heikin": 5.16,
        "boshuAvg30d": 530.2,
        "heikinAvg30d": 4.149
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 450,
        "ouatsu": 474.658,
        "saikou": 9.17,
        "heikin": 4.89,
        "boshuAvg30d": 529.2,
        "heikinAvg30d": 3.897
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 450,
        "ouatsu": 439.325,
        "saikou": 9.17,
        "heikin": 5.11,
        "boshuAvg30d": 529.2,
        "heikinAvg30d": 3.939
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 450,
        "ouatsu": 456.971,
        "saikou": 9.17,
        "heikin": 4.87,
        "boshuAvg30d": 526.6,
        "heikinAvg30d": 4.036
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 449,
        "ouatsu": 456.971,
        "saikou": 9.17,
        "heikin": 4.95,
        "boshuAvg30d": 525.9,
        "heikinAvg30d": 4.203
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 448,
        "ouatsu": 456.971,
        "saikou": 9.2,
        "heikin": 5.23,
        "boshuAvg30d": 525.1,
        "heikinAvg30d": 4.306
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 448,
        "ouatsu": 456.971,
        "saikou": 9.2,
        "heikin": 5.04,
        "boshuAvg30d": 525.1,
        "heikinAvg30d": 4.113
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 447,
        "ouatsu": 460.967,
        "saikou": 9.19,
        "heikin": 5.11,
        "boshuAvg30d": 524.1,
        "heikinAvg30d": 4.139
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 447,
        "ouatsu": 431.143,
        "saikou": 9.19,
        "heikin": 5.33,
        "boshuAvg30d": 524.1,
        "heikinAvg30d": 4.096
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 447,
        "ouatsu": 495.686,
        "saikou": 9.19,
        "heikin": 4.6,
        "boshuAvg30d": 523.7,
        "heikinAvg30d": 4.236
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 447,
        "ouatsu": 433.131,
        "saikou": 9.19,
        "heikin": 5.24,
        "boshuAvg30d": 523.6,
        "heikinAvg30d": 4.402
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 447,
        "ouatsu": 512.174,
        "saikou": 9.19,
        "heikin": 4.52,
        "boshuAvg30d": 519.5,
        "heikinAvg30d": 4.531
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 447,
        "ouatsu": 420.611,
        "saikou": 9.17,
        "heikin": 5.26,
        "boshuAvg30d": 519.5,
        "heikinAvg30d": 4.403
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 449,
        "ouatsu": 413.847,
        "saikou": 9.2,
        "heikin": 5.5,
        "boshuAvg30d": 521.6,
        "heikinAvg30d": 4.493
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 449,
        "ouatsu": 351.211,
        "saikou": 9.2,
        "heikin": 6.4,
        "boshuAvg30d": 521.5,
        "heikinAvg30d": 4.326
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 450,
        "ouatsu": 458.874,
        "saikou": 9.2,
        "heikin": 5.05,
        "boshuAvg30d": 521.9,
        "heikinAvg30d": 4.351
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 450,
        "ouatsu": 518.178,
        "saikou": 9.2,
        "heikin": 4.3,
        "boshuAvg30d": 521.9,
        "heikinAvg30d": 4.295
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 448,
        "ouatsu": 514.484,
        "saikou": 9.2,
        "heikin": 4.06,
        "boshuAvg30d": 520.1,
        "heikinAvg30d": 4.135
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 448,
        "ouatsu": 514.484,
        "saikou": 9.4,
        "heikin": 3.96,
        "boshuAvg30d": 520.1,
        "heikinAvg30d": 4.233
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 447,
        "ouatsu": 510.308,
        "saikou": 9.2,
        "heikin": 4.11,
        "boshuAvg30d": 519.3,
        "heikinAvg30d": 4.006
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 447,
        "ouatsu": 510.308,
        "saikou": 9.2,
        "heikin": 3.8,
        "boshuAvg30d": 519.3,
        "heikinAvg30d": 4.427
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 447,
        "ouatsu": 351.108,
        "saikou": 9.2,
        "heikin": 3.01,
        "boshuAvg30d": 519.3,
        "heikinAvg30d": 4.009
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 445,
        "ouatsu": 455.252,
        "saikou": 9.2,
        "heikin": 3.59,
        "boshuAvg30d": 517.3,
        "heikinAvg30d": 4.113
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 443,
        "ouatsu": 457.208,
        "saikou": 9.2,
        "heikin": 4.1,
        "boshuAvg30d": 515.1,
        "heikinAvg30d": 4.242
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 442,
        "ouatsu": 451.608,
        "saikou": 9.18,
        "heikin": 3.17,
        "boshuAvg30d": 513.9,
        "heikinAvg30d": 4.086
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 222.44,
        "saikou": 2.27,
        "heikin": 1.63,
        "boshuAvg30d": 110.8,
        "heikinAvg30d": 2.285
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 213.935,
        "saikou": 2.37,
        "heikin": 2.08,
        "boshuAvg30d": 110.8,
        "heikinAvg30d": 2.185
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 213.151,
        "saikou": 2.37,
        "heikin": 1.93,
        "boshuAvg30d": 110.8,
        "heikinAvg30d": 2.163
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 215.13,
        "saikou": 2.37,
        "heikin": 1.75,
        "boshuAvg30d": 110.8,
        "heikinAvg30d": 2.302
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 193.276,
        "saikou": 2.21,
        "heikin": 1.22,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.365
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 199.216,
        "saikou": 2.2,
        "heikin": 1.13,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.465
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 224.871,
        "saikou": 2.23,
        "heikin": 0.92,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.352
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 219.171,
        "saikou": 2,
        "heikin": 1.12,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.471
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 224.871,
        "saikou": 2.46,
        "heikin": 1.51,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.547
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 222.943,
        "saikou": 2.46,
        "heikin": 1.31,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.446
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 224.933,
        "saikou": 2.47,
        "heikin": 1.61,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.514
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 223.433,
        "saikou": 2.46,
        "heikin": 1.6,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.488
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 224.933,
        "saikou": 2.4,
        "heikin": 1.51,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 2.604
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 218.977,
        "saikou": 2.4,
        "heikin": 1.31,
        "boshuAvg30d": 122.5,
        "heikinAvg30d": 2.512
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 237.256,
        "saikou": 2.5,
        "heikin": 1.93,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 2.642
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 245.14,
        "saikou": 2.5,
        "heikin": 1.71,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 2.658
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 243.64,
        "saikou": 2.7,
        "heikin": 1.9,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 3.06
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 245.63,
        "saikou": 2.7,
        "heikin": 1.89,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 3.138
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 230.504,
        "saikou": 2.79,
        "heikin": 1.78,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 3.54
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 230.519,
        "saikou": 3.77,
        "heikin": 2.24,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 3.507
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 226.543,
        "saikou": 3.49,
        "heikin": 1.72,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 3.641
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 226.543,
        "saikou": 4.49,
        "heikin": 2.46,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 3.684
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 230.519,
        "saikou": 4.48,
        "heikin": 2.54,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 3.452
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 228.629,
        "saikou": 3.99,
        "heikin": 2.69,
        "boshuAvg30d": 129.3,
        "heikinAvg30d": 3.255
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 210.299,
        "saikou": 3.64,
        "heikin": 2.65,
        "boshuAvg30d": 126.1,
        "heikinAvg30d": 3.252
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 210.299,
        "saikou": 3.6,
        "heikin": 2.37,
        "boshuAvg30d": 126.1,
        "heikinAvg30d": 3.263
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 229.349,
        "saikou": 3.49,
        "heikin": 2.18,
        "boshuAvg30d": 126.1,
        "heikinAvg30d": 3.259
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 229.349,
        "saikou": 3.49,
        "heikin": 2.3,
        "boshuAvg30d": 126.1,
        "heikinAvg30d": 3.39
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 229.349,
        "saikou": 3.49,
        "heikin": 2.28,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 3.574
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 211.916,
        "saikou": 3.27,
        "heikin": 2.09,
        "boshuAvg30d": 125.3,
        "heikinAvg30d": 3.511
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 196.012,
        "saikou": 3.64,
        "heikin": 2.67,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 3.331
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 197.512,
        "saikou": 3.49,
        "heikin": 2.32,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 3.346
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 238.258,
        "saikou": 2.8,
        "heikin": 2.26,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 3.286
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 300.745,
        "saikou": 2.79,
        "heikin": 2.12,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 3.562
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 278.936,
        "saikou": 2.99,
        "heikin": 1.92,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 3.488
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 275.437,
        "saikou": 3.88,
        "heikin": 1.99,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 3.207
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 290.862,
        "saikou": 2.78,
        "heikin": 1.84,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 3.163
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 269.053,
        "saikou": 3.25,
        "heikin": 1.81,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.999
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 296.895,
        "saikou": 2.89,
        "heikin": 1.81,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.685
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 298.755,
        "saikou": 2.79,
        "heikin": 1.87,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.723
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 270.98,
        "saikou": 2.79,
        "heikin": 1.49,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.738
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 211.561,
        "saikou": 2.79,
        "heikin": 1.63,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.604
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 217.508,
        "saikou": 2.75,
        "heikin": 1.73,
        "boshuAvg30d": 122.5,
        "heikinAvg30d": 2.497
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 225.528,
        "saikou": 2.79,
        "heikin": 1.67,
        "boshuAvg30d": 123.6,
        "heikinAvg30d": 2.721
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 225.528,
        "saikou": 2.78,
        "heikin": 1.62,
        "boshuAvg30d": 123.6,
        "heikinAvg30d": 2.593
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 225.528,
        "saikou": 2.5,
        "heikin": 1.24,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 2.767
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 225.528,
        "saikou": 2.4,
        "heikin": 1.08,
        "boshuAvg30d": 121.6,
        "heikinAvg30d": 2.845
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 224.028,
        "saikou": 2.2,
        "heikin": 0.5,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 2.854
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 34.562,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.131
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 31.5,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.178
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 39.83,
        "saikou": 1.9,
        "heikin": 0.68,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.045
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 45.526,
        "saikou": 0.84,
        "heikin": 0.63,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.208
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 45.042,
        "saikou": 0.84,
        "heikin": 0.63,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.451
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 45.596,
        "saikou": 1.5,
        "heikin": 0.78,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.013
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 38.37,
        "saikou": 0.84,
        "heikin": 0.59,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.204
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 47.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.348
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 69.828,
        "saikou": 2.45,
        "heikin": 1.21,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.292
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 82.928,
        "saikou": 1.5,
        "heikin": 0.66,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.433
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 47.928,
        "saikou": 2.48,
        "heikin": 1.53,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.48
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 25.09,
        "saikou": 2.04,
        "heikin": 0.77,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.352
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 30.756,
        "saikou": 2,
        "heikin": 0.7,
        "boshuAvg30d": 56.8,
        "heikinAvg30d": 1.731
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 2.4,
        "heikin": 0.69,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.556
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 28.404,
        "saikou": 0.84,
        "heikin": 0.49,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.708
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.788
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.22
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.958
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.35,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.246
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.9,
        "heikin": 2.67,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 3.318
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.026
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.28
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 4.15,
        "heikin": 4,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.029
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.852
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.029
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.153
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.242
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.07,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.121
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.286
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.156
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 3.168
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 3.438
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.874
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.284
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.927
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.85,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.611
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.79
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.554
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.541
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.68,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.877
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.953
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.893
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.3,
        "heikin": 0.71,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.388
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 47.928,
        "saikou": 2.3,
        "heikin": 0.78,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.348
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 22.928,
        "saikou": 2.5,
        "heikin": 0.73,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.844
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 49.752,
        "saikou": 2.3,
        "heikin": 0.79,
        "boshuAvg30d": 58.8,
        "heikinAvg30d": 1.974
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 82.928,
        "saikou": 2.3,
        "heikin": 0.44,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.981
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.56
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 72.692,
        "saikou": 1.38,
        "heikin": 1.38,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.067
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 46.19,
        "saikou": 1.38,
        "heikin": 1.38,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 1.917
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 115.6,
        "saikou": 2.23,
        "heikin": 1.32,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.046
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 119.106,
        "saikou": 2.23,
        "heikin": 1.19,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.01
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 113.731,
        "saikou": 1.38,
        "heikin": 0.44,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 2.111
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 103.331,
        "saikou": 1.38,
        "heikin": 0.48,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 2.055
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 99.354,
        "saikou": 2,
        "heikin": 1.92,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 2.083
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 99.354,
        "saikou": 2,
        "heikin": 1.83,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 2.054
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.4,
        "heikin": 1.65,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.065
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.47,
        "heikin": 1.83,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.096
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 123.299,
        "saikou": 2.47,
        "heikin": 1.74,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 2.098
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 121.301,
        "saikou": 2.47,
        "heikin": 1.88,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 1.957
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 99.354,
        "saikou": 2.4,
        "heikin": 2.22,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.54
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 99.354,
        "saikou": 2.4,
        "heikin": 2.21,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.65
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 99.354,
        "saikou": 2.4,
        "heikin": 2.22,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 2.649
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 2.4,
        "heikin": 2.22,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 2.822
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 99.354,
        "saikou": 2.7,
        "heikin": 2.3,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 3.298
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 97.911,
        "saikou": 2.7,
        "heikin": 2.32,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 3.406
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 101.778,
        "saikou": 2.79,
        "heikin": 2.31,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.532
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 3.5,
        "heikin": 2.47,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.603
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 3.1,
        "heikin": 2.42,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.906
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 3.22,
        "heikin": 2.44,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.832
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 101.223,
        "saikou": 5.95,
        "heikin": 2.84,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.656
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 99.353,
        "saikou": 4,
        "heikin": 2.8,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 3.394
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 99.353,
        "saikou": 2.9,
        "heikin": 2.31,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.782
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 99.353,
        "saikou": 2.9,
        "heikin": 2.31,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.376
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 99.353,
        "saikou": 2.79,
        "heikin": 2.25,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.543
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 99.908,
        "saikou": 3.49,
        "heikin": 2.44,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 3.506
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 99.908,
        "saikou": 2.9,
        "heikin": 2.33,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.538
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 103.221,
        "saikou": 3.25,
        "heikin": 2.38,
        "boshuAvg30d": 155.7,
        "heikinAvg30d": 3.394
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 101.778,
        "saikou": 2.79,
        "heikin": 2.29,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.222
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 115.775,
        "saikou": 2.95,
        "heikin": 2.46,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.327
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 2.8,
        "heikin": 2.35,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.364
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 2.79,
        "heikin": 2.32,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.573
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 103.221,
        "saikou": 2.9,
        "heikin": 2.36,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.541
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 103.221,
        "saikou": 4.94,
        "heikin": 2.82,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 3.328
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 2.92,
        "heikin": 2.44,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 3.18
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 101.261,
        "saikou": 2.9,
        "heikin": 2.35,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 3.139
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 97.504,
        "saikou": 4,
        "heikin": 2.41,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 3.244
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 97.504,
        "saikou": 2.8,
        "heikin": 2.36,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 3.049
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 95.506,
        "saikou": 2.8,
        "heikin": 2.34,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 2.858
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 97.504,
        "saikou": 2.8,
        "heikin": 2.35,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.925
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 97.504,
        "saikou": 2.45,
        "heikin": 2.29,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.936
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 97.504,
        "saikou": 2.8,
        "heikin": 2.26,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.809
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 97.504,
        "saikou": 2.79,
        "heikin": 2.3,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.803
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 97.504,
        "saikou": 2.44,
        "heikin": 2.29,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.83
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 96.061,
        "saikou": 2.45,
        "heikin": 2.29,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.714
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 88.215,
        "saikou": 2.23,
        "heikin": 2.23,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 2.636
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 207.349,
        "saikou": 1.58,
        "heikin": 0.67,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.051
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 207.349,
        "saikou": 1.84,
        "heikin": 1.55,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.225
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 207.349,
        "saikou": 2.46,
        "heikin": 2.03,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.356
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 211.139,
        "saikou": 2.46,
        "heikin": 2.03,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.258
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 211.139,
        "saikou": 2.46,
        "heikin": 2.03,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.183
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 211.139,
        "saikou": 2.63,
        "heikin": 2.17,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.174
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 227.998,
        "saikou": 2.46,
        "heikin": 2.03,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.268
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 227.998,
        "saikou": 1.84,
        "heikin": 1.55,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.399
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 227.998,
        "saikou": 3.03,
        "heikin": 2.48,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.31
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 227.998,
        "saikou": 4.76,
        "heikin": 3.67,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.516
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 227.998,
        "saikou": 4.12,
        "heikin": 3.28,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.821
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 227.998,
        "saikou": 3.68,
        "heikin": 2.97,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.745
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 227.998,
        "saikou": 2.46,
        "heikin": 2.03,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 3.23
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 227.998,
        "saikou": 2.41,
        "heikin": 1.99,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 2.573
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 227.998,
        "saikou": 2.46,
        "heikin": 2.03,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.483
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 227.998,
        "saikou": 1.84,
        "heikin": 1.55,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.34
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 185.245,
        "saikou": 2.7,
        "heikin": 1.65,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.356
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 185.245,
        "saikou": 2.97,
        "heikin": 2.68,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.169
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 201.159,
        "saikou": 5.01,
        "heikin": 4.22,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.105
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 201.159,
        "saikou": 5.26,
        "heikin": 4.53,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.774
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 201.159,
        "saikou": 5.29,
        "heikin": 4.6,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.777
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 201.159,
        "saikou": 5.36,
        "heikin": 4.66,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.758
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 201.159,
        "saikou": 5.68,
        "heikin": 5.16,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.599
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 201.159,
        "saikou": 5.68,
        "heikin": 4.92,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.541
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 201.159,
        "saikou": 5.11,
        "heikin": 4.45,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.127
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 201.159,
        "saikou": 5.26,
        "heikin": 4.56,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 1.978
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 202.544,
        "saikou": 7.27,
        "heikin": 6.68,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.532
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 202.544,
        "saikou": 8.22,
        "heikin": 7.38,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.689
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 202.544,
        "saikou": 8.22,
        "heikin": 6.93,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.911
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 220.578,
        "saikou": 8.26,
        "heikin": 6.36,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.992
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 220.785,
        "saikou": 8.34,
        "heikin": 6.4,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.57
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 220.914,
        "saikou": 8.4,
        "heikin": 6.41,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.17
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 221.73,
        "saikou": 5.68,
        "heikin": 4.53,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.105
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 227.998,
        "saikou": 4.92,
        "heikin": 3.88,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.44
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 227.998,
        "saikou": 4.87,
        "heikin": 3.79,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.703
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 201.159,
        "saikou": 4.51,
        "heikin": 3.92,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.079
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 199.169,
        "saikou": 4.88,
        "heikin": 4.24,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.275
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 199.169,
        "saikou": 4.88,
        "heikin": 4.25,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.346
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 199.169,
        "saikou": 4.86,
        "heikin": 4.19,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.01
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 201.159,
        "saikou": 4.32,
        "heikin": 3.8,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.685
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 201.159,
        "saikou": 4.86,
        "heikin": 4.17,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.404
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 201.159,
        "saikou": 3.68,
        "heikin": 3.17,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 3.962
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 155.103,
        "saikou": 3.07,
        "heikin": 2.65,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.76
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 155.103,
        "saikou": 2.8,
        "heikin": 2.32,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.585
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 218.151,
        "saikou": 3.07,
        "heikin": 1.99,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.475
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 253.452,
        "saikou": 2.46,
        "heikin": 1.84,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.204
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 240.725,
        "saikou": 2.11,
        "heikin": 1.23,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 3.105
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 227.998,
        "saikou": 2.13,
        "heikin": 0.67,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.166
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.57,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.88
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.59,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.899
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.62,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.911
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.62,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.878
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.62,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.865
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.62,
        "boshuAvg30d": 39.8,
        "heikinAvg30d": 0.867
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.63,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 1.007
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 172.93,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.95
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 207.473,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.991
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.033
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.015
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.966
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 2.3,
        "heikin": 0.65,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 1.008
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 2.3,
        "heikin": 0.65,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 1.003
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 2.3,
        "heikin": 0.65,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 1.045
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 2.3,
        "heikin": 0.65,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.909
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 2.5,
        "heikin": 0.76,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.886
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 2.5,
        "heikin": 0.76,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.944
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 2.3,
        "heikin": 0.7,
        "boshuAvg30d": 46.8,
        "heikinAvg30d": 0.999
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 2.85,
        "heikin": 0.71,
        "boshuAvg30d": 46.8,
        "heikinAvg30d": 0.983
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 141.93,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.002
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.021
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.016
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.013
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.2
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.151
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.01
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.035
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 153.373,
        "saikou": 2.85,
        "heikin": 0.84,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.041
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.944
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.989
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.01
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.011
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.946
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.006
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.032
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.019
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.01
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.047
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.042
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.008
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.006
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.758
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.789
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.796
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.782
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.8
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.43,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.841
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 205.195,
        "saikou": 5.22,
        "heikin": 2.82,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 4.006
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 211.065,
        "saikou": 4.83,
        "heikin": 2.59,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 3.676
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 183.765,
        "saikou": 4.09,
        "heikin": 2.89,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 3.363
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 181.774,
        "saikou": 3.34,
        "heikin": 2.33,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 3.32
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 183.763,
        "saikou": 3.17,
        "heikin": 2.19,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 3.233
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 183.763,
        "saikou": 3.17,
        "heikin": 2.2,
        "boshuAvg30d": 163.3,
        "heikinAvg30d": 3.295
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 202.963,
        "saikou": 3.17,
        "heikin": 2.19,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.46
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 199.135,
        "saikou": 3.65,
        "heikin": 2.5,
        "boshuAvg30d": 164.3,
        "heikinAvg30d": 3.602
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 202.963,
        "saikou": 4.4,
        "heikin": 3.03,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.678
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 199.963,
        "saikou": 4.84,
        "heikin": 3.31,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.915
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 199.963,
        "saikou": 4.99,
        "heikin": 3.34,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.996
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 199.963,
        "saikou": 4.48,
        "heikin": 3,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 3.818
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 202.963,
        "saikou": 2.79,
        "heikin": 1.79,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 3.643
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 242.111,
        "saikou": 2.85,
        "heikin": 2.07,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 3.405
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 242.111,
        "saikou": 2.85,
        "heikin": 2.12,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 3.252
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 243.973,
        "saikou": 2.85,
        "heikin": 2.14,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 3.333
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 240.047,
        "saikou": 2.99,
        "heikin": 2.27,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 3.71
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 190.973,
        "saikou": 3.34,
        "heikin": 2.43,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 4.391
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 202.996,
        "saikou": 4.74,
        "heikin": 3.2,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 4.414
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 202.996,
        "saikou": 4.84,
        "heikin": 3.27,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 4.348
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 197.565,
        "saikou": 4.84,
        "heikin": 3.28,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 4.203
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 185.619,
        "saikou": 4.48,
        "heikin": 3.19,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 4.357
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 185.619,
        "saikou": 4.34,
        "heikin": 3.07,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.308
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 181.632,
        "saikou": 3.94,
        "heikin": 2.77,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.33
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 183.615,
        "saikou": 3.39,
        "heikin": 2.52,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 3.785
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 183.615,
        "saikou": 3.77,
        "heikin": 2.54,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 3.937
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 185.612,
        "saikou": 4.59,
        "heikin": 3.32,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 4.378
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 181.76,
        "saikou": 4.84,
        "heikin": 3.49,
        "boshuAvg30d": 176.7,
        "heikinAvg30d": 4.91
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 183.26,
        "saikou": 5.84,
        "heikin": 4.15,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 5.33
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 198.006,
        "saikou": 6,
        "heikin": 4,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 5.623
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 260.006,
        "saikou": 5.93,
        "heikin": 4.18,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 5.564
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 238.006,
        "saikou": 6.71,
        "heikin": 5.22,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.181
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 198.006,
        "saikou": 6.24,
        "heikin": 4.15,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.167
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 201.006,
        "saikou": 6.71,
        "heikin": 4.48,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 6.372
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 202.996,
        "saikou": 5.93,
        "heikin": 3.54,
        "boshuAvg30d": 169.3,
        "heikinAvg30d": 6.115
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 199.031,
        "saikou": 6.04,
        "heikin": 4.06,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.21
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 177.19,
        "saikou": 6.04,
        "heikin": 4.17,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 6.255
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 177.19,
        "saikou": 6.26,
        "heikin": 4.31,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 6.035
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 181.192,
        "saikou": 6.04,
        "heikin": 4.18,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 5.634
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 199.17,
        "saikou": 5.34,
        "heikin": 3.58,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 5.169
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 199.17,
        "saikou": 4.61,
        "heikin": 3.12,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 4.842
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 199.17,
        "saikou": 4.34,
        "heikin": 2.94,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 4.585
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 197.277,
        "saikou": 4.34,
        "heikin": 2.95,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 4.258
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 197.277,
        "saikou": 3.17,
        "heikin": 2.36,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.47
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 197.277,
        "saikou": 3.37,
        "heikin": 2.46,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.363
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 197.277,
        "saikou": 2.99,
        "heikin": 2.13,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 3.847
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 189.627,
        "saikou": 2.9,
        "heikin": 2.05,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 3.796
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 185.775,
        "saikou": 2.37,
        "heikin": 1.59,
        "boshuAvg30d": 167.3,
        "heikinAvg30d": 3.296
      }
    ]
  }
};
