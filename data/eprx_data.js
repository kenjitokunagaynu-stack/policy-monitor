// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/20〜2026/09/18）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-19",
  "fetchedAt": "2026-09-19",
  "avgWindowLabel": "過去30日平均（2026/08/20〜2026/09/18）",
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
      "ouatsu": 1211.085,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1430.3,
      "heikinAvg30d": 3.014
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1246,
      "ouatsu": 1260.504,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1430.3,
      "heikinAvg30d": 2.96
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1246,
      "ouatsu": 1313.573,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1430.3,
      "heikinAvg30d": 3.035
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1246,
      "ouatsu": 1305.332,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1429.5,
      "heikinAvg30d": 3.032
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1241,
      "ouatsu": 1376.18,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1424.5,
      "heikinAvg30d": 3.086
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1240,
      "ouatsu": 1370.726,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1423.1,
      "heikinAvg30d": 3.109
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1240,
      "ouatsu": 1483.29,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1430.9,
      "heikinAvg30d": 3.15
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1241,
      "ouatsu": 1454.994,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1431.9,
      "heikinAvg30d": 3.196
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1244,
      "ouatsu": 1501.578,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1435.3,
      "heikinAvg30d": 3.258
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1244,
      "ouatsu": 1504.025,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1435.7,
      "heikinAvg30d": 3.229
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1244,
      "ouatsu": 1554.029,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1435.7,
      "heikinAvg30d": 3.347
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1244,
      "ouatsu": 1543.006,
      "saikou": 10,
      "heikin": 3.64,
      "boshuAvg30d": 1435.7,
      "heikinAvg30d": 3.292
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1310,
      "ouatsu": 1638.341,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1500.5,
      "heikinAvg30d": 3.611
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1331,
      "ouatsu": 1591.79,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1522.3,
      "heikinAvg30d": 3.571
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1354,
      "ouatsu": 1575.409,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1545.3,
      "heikinAvg30d": 3.598
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1372,
      "ouatsu": 1518.863,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1562.1,
      "heikinAvg30d": 3.579
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1373,
      "ouatsu": 1515.555,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1562.7,
      "heikinAvg30d": 3.844
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1373,
      "ouatsu": 1376.572,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1562.7,
      "heikinAvg30d": 4.087
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1310,
      "ouatsu": 1433.439,
      "saikou": 10,
      "heikin": 3.01,
      "boshuAvg30d": 1516.2,
      "heikinAvg30d": 4.046
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1314,
      "ouatsu": 1463.121,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1520.6,
      "heikinAvg30d": 3.943
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1322,
      "ouatsu": 1379.378,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1527.8,
      "heikinAvg30d": 3.82
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1322,
      "ouatsu": 1356.086,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1527.8,
      "heikinAvg30d": 3.852
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1319,
      "ouatsu": 1458.127,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1524.0,
      "heikinAvg30d": 3.799
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1318,
      "ouatsu": 1434.376,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1523.4,
      "heikinAvg30d": 3.793
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1311,
      "ouatsu": 1331.348,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1514.7,
      "heikinAvg30d": 3.587
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1311,
      "ouatsu": 1351.848,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1514.7,
      "heikinAvg30d": 3.588
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1311,
      "ouatsu": 1530.715,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1512.2,
      "heikinAvg30d": 3.88
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1305,
      "ouatsu": 1610.8,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1506.2,
      "heikinAvg30d": 4.132
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1300,
      "ouatsu": 1522.361,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1502.4,
      "heikinAvg30d": 4.301
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1293,
      "ouatsu": 1449.185,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1496.6,
      "heikinAvg30d": 4.385
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1350,
      "ouatsu": 1544.56,
      "saikou": 10,
      "heikin": 2.67,
      "boshuAvg30d": 1542.9,
      "heikinAvg30d": 4.379
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1350,
      "ouatsu": 1474.518,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1542.9,
      "heikinAvg30d": 4.703
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1350,
      "ouatsu": 1524.546,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1542.9,
      "heikinAvg30d": 4.687
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1348,
      "ouatsu": 1426.433,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1539.7,
      "heikinAvg30d": 4.963
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1344,
      "ouatsu": 1456.686,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1532.6,
      "heikinAvg30d": 5.013
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1340,
      "ouatsu": 1458.696,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1528.6,
      "heikinAvg30d": 4.928
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1332,
      "ouatsu": 1402.712,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1520.2,
      "heikinAvg30d": 4.952
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1332,
      "ouatsu": 1482.177,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1519.8,
      "heikinAvg30d": 4.841
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1333,
      "ouatsu": 1481.882,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1520.4,
      "heikinAvg30d": 4.662
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1332,
      "ouatsu": 1470.771,
      "saikou": 10,
      "heikin": 3.47,
      "boshuAvg30d": 1519.8,
      "heikinAvg30d": 4.395
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1327,
      "ouatsu": 1507.105,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1514.8,
      "heikinAvg30d": 4.161
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1323,
      "ouatsu": 1486.081,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1512.0,
      "heikinAvg30d": 3.914
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1230,
      "ouatsu": 1512.59,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1424.3,
      "heikinAvg30d": 3.541
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1233,
      "ouatsu": 1645.862,
      "saikou": 9.5,
      "heikin": 3.54,
      "boshuAvg30d": 1427.3,
      "heikinAvg30d": 4.099
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1234,
      "ouatsu": 1608.972,
      "saikou": 9.5,
      "heikin": 3.35,
      "boshuAvg30d": 1428.3,
      "heikinAvg30d": 3.776
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1227,
      "ouatsu": 1679.785,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1421.7,
      "heikinAvg30d": 3.544
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1220,
      "ouatsu": 1512.383,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1413.9,
      "heikinAvg30d": 3.593
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1212,
      "ouatsu": 1533.901,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1405.5,
      "heikinAvg30d": 3.432
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
        "ouatsu": 148.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.257
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 157.464,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.248
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 112.958,
        "saikou": 4,
        "heikin": 1.67,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.112
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.293
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.4
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 154.908,
        "saikou": 4.6,
        "heikin": 1.7,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.435
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 5.85,
        "heikin": 2.07,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.683
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 197.926,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.889
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 154.908,
        "saikou": 3.8,
        "heikin": 1.66,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.294
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 161.218,
        "saikou": 1.1,
        "heikin": 1.05,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.937
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 161.258,
        "saikou": 1.4,
        "heikin": 1.31,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.227
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 161.008,
        "saikou": 9.85,
        "heikin": 3.12,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.883
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 154.908,
        "saikou": 8.25,
        "heikin": 2.59,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.483
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 114.908,
        "saikou": 7.4,
        "heikin": 2.47,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.994
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 147.05,
        "saikou": 8.85,
        "heikin": 4.3,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.759
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 152.958,
        "saikou": 7.95,
        "heikin": 2.55,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.885
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 196.818,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.377
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 154.908,
        "saikou": 4,
        "heikin": 1.66,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.715
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.485
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 1.62
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 154.908,
        "saikou": 9.91,
        "heikin": 2.85,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 1.451
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 114.908,
        "saikou": 9.91,
        "heikin": 2.98,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 1.725
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 147.781,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 1.677
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 147.781,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 1.513
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 110.99,
        "saikou": 4,
        "heikin": 1.9,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.491
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 147.781,
        "saikou": 4.9,
        "heikin": 1.51,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.422
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 152.958,
        "saikou": 8,
        "heikin": 2.46,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.97
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 187.781,
        "saikou": 8.85,
        "heikin": 1.97,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 2.352
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 152.958,
        "saikou": 8,
        "heikin": 2.58,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 2.132
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 152.958,
        "saikou": 9.91,
        "heikin": 2.92,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 2.331
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 200.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 3.096
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 152.958,
        "saikou": 8.85,
        "heikin": 1.49,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.693
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 198.99,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.753
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 150.968,
        "saikou": 5.16,
        "heikin": 1.14,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.677
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 136.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 3.437
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 134.29,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 3.439
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 87.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 3.391
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 147.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 3.082
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 150.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.958
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 150.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.477
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 187.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.814
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 152.958,
        "saikou": 4,
        "heikin": 1.04,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.919
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.593
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 152.958,
        "saikou": 8,
        "heikin": 1.49,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.108
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 199.268,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.946
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.667
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.43
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.267
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 175,
        "ouatsu": 38.439,
        "saikou": 10,
        "heikin": 9.89,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 8.325
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 175,
        "ouatsu": 38.439,
        "saikou": 10,
        "heikin": 9.89,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 8.534
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 175,
        "ouatsu": 80.987,
        "saikou": 10,
        "heikin": 9.19,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 9.157
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 175,
        "ouatsu": 80.987,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 9.122
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 175,
        "ouatsu": 78.989,
        "saikou": 10,
        "heikin": 9.12,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 9.103
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 175,
        "ouatsu": 78.989,
        "saikou": 10,
        "heikin": 9.14,
        "boshuAvg30d": 164.4,
        "heikinAvg30d": 9.112
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 93.987,
        "saikou": 10,
        "heikin": 9.02,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 9.063
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 95.487,
        "saikou": 10,
        "heikin": 9.08,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 9.037
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 9.01
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 8.928
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 8.829
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 9.18,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 8.954
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 180.6,
        "heikinAvg30d": 9.115
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 107.986,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 9.494
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 191.6,
        "heikinAvg30d": 9.676
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 107.986,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 195.2,
        "heikinAvg30d": 9.593
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 109.486,
        "saikou": 10,
        "heikin": 8.62,
        "boshuAvg30d": 195.2,
        "heikinAvg30d": 9.637
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 107.986,
        "saikou": 10,
        "heikin": 8.62,
        "boshuAvg30d": 195.2,
        "heikinAvg30d": 9.382
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 129,
        "ouatsu": 109.142,
        "saikou": 10,
        "heikin": 8.64,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 8.686
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 131,
        "ouatsu": 119.142,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 8.789
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 134,
        "ouatsu": 131.142,
        "saikou": 10,
        "heikin": 7.61,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 8.549
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 135,
        "ouatsu": 131.142,
        "saikou": 10,
        "heikin": 7.61,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 8.622
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 135,
        "ouatsu": 131.142,
        "saikou": 10,
        "heikin": 7.62,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 8.596
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 135,
        "ouatsu": 131.142,
        "saikou": 10,
        "heikin": 7.62,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 8.748
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 136,
        "ouatsu": 129.521,
        "saikou": 10,
        "heikin": 7.58,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 8.795
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 136,
        "ouatsu": 131.486,
        "saikou": 10,
        "heikin": 7.61,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 8.832
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 136,
        "ouatsu": 132.492,
        "saikou": 10,
        "heikin": 7.62,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 8.382
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 133,
        "ouatsu": 120.492,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 8.343
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 131,
        "ouatsu": 96.492,
        "saikou": 10,
        "heikin": 6.72,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 9.032
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 126,
        "ouatsu": 96.492,
        "saikou": 10,
        "heikin": 6.67,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 9.029
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 74.492,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 192.4,
        "heikinAvg30d": 9.156
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 96.492,
        "saikou": 10,
        "heikin": 7.08,
        "boshuAvg30d": 192.4,
        "heikinAvg30d": 8.781
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 96.492,
        "saikou": 10,
        "heikin": 7.09,
        "boshuAvg30d": 192.4,
        "heikinAvg30d": 8.371
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 82.992,
        "saikou": 10,
        "heikin": 7.56,
        "boshuAvg30d": 191.0,
        "heikinAvg30d": 7.977
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 84.492,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 189.0,
        "heikinAvg30d": 7.657
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 82.992,
        "saikou": 10,
        "heikin": 7.79,
        "boshuAvg30d": 187.0,
        "heikinAvg30d": 7.885
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 59.521,
        "saikou": 10,
        "heikin": 8.7,
        "boshuAvg30d": 185.6,
        "heikinAvg30d": 7.762
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 81.986,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 185.6,
        "heikinAvg30d": 7.823
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 185.6,
        "heikinAvg30d": 7.983
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 185.0,
        "heikinAvg30d": 8.279
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 184.6,
        "heikinAvg30d": 8.543
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 73.486,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 185.0,
        "heikinAvg30d": 8.696
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 100.7,
        "heikinAvg30d": 8.56
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 61.486,
        "saikou": 9.5,
        "heikin": 8.47,
        "boshuAvg30d": 100.7,
        "heikinAvg30d": 8.731
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 61.486,
        "saikou": 9.5,
        "heikin": 8.47,
        "boshuAvg30d": 100.7,
        "heikinAvg30d": 8.864
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 57.656,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 99.7,
        "heikinAvg30d": 8.754
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 57.656,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 98.7,
        "heikinAvg30d": 8.757
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 59.986,
        "saikou": 10,
        "heikin": 8.69,
        "boshuAvg30d": 97.7,
        "heikinAvg30d": 8.871
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 423,
        "ouatsu": 276.574,
        "saikou": 9.37,
        "heikin": 3.6,
        "boshuAvg30d": 531.0,
        "heikinAvg30d": 3.666
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 423,
        "ouatsu": 287.965,
        "saikou": 9.37,
        "heikin": 3.27,
        "boshuAvg30d": 531.0,
        "heikinAvg30d": 3.434
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 423,
        "ouatsu": 357.999,
        "saikou": 9.37,
        "heikin": 2.88,
        "boshuAvg30d": 531.0,
        "heikinAvg30d": 3.371
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 423,
        "ouatsu": 365.195,
        "saikou": 9.35,
        "heikin": 3.18,
        "boshuAvg30d": 530.6,
        "heikinAvg30d": 3.271
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 421,
        "ouatsu": 354.238,
        "saikou": 9.35,
        "heikin": 2.78,
        "boshuAvg30d": 528.6,
        "heikinAvg30d": 3.226
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 421,
        "ouatsu": 368.351,
        "saikou": 9.35,
        "heikin": 2.79,
        "boshuAvg30d": 528.6,
        "heikinAvg30d": 3.206
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 420,
        "ouatsu": 401.277,
        "saikou": 9.35,
        "heikin": 2.89,
        "boshuAvg30d": 527.2,
        "heikinAvg30d": 3.119
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 421,
        "ouatsu": 308.567,
        "saikou": 9.35,
        "heikin": 3.72,
        "boshuAvg30d": 528.2,
        "heikinAvg30d": 3.259
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 422,
        "ouatsu": 340.053,
        "saikou": 9.35,
        "heikin": 3.39,
        "boshuAvg30d": 529.2,
        "heikinAvg30d": 3.223
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 422,
        "ouatsu": 318.738,
        "saikou": 9.35,
        "heikin": 3.89,
        "boshuAvg30d": 529.6,
        "heikinAvg30d": 3.198
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 422,
        "ouatsu": 344.226,
        "saikou": 9.35,
        "heikin": 3.32,
        "boshuAvg30d": 529.6,
        "heikinAvg30d": 3.319
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 422,
        "ouatsu": 350.233,
        "saikou": 9.35,
        "heikin": 3.18,
        "boshuAvg30d": 529.6,
        "heikinAvg30d": 3.241
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 443,
        "ouatsu": 425.664,
        "saikou": 9.38,
        "heikin": 3.67,
        "boshuAvg30d": 550.6,
        "heikinAvg30d": 3.656
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 451,
        "ouatsu": 421.849,
        "saikou": 9.38,
        "heikin": 3.73,
        "boshuAvg30d": 558.6,
        "heikinAvg30d": 3.754
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 456,
        "ouatsu": 425.664,
        "saikou": 9.38,
        "heikin": 3.95,
        "boshuAvg30d": 564.4,
        "heikinAvg30d": 3.87
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 461,
        "ouatsu": 421.75,
        "saikou": 9.5,
        "heikin": 4.01,
        "boshuAvg30d": 569.4,
        "heikinAvg30d": 3.858
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 461,
        "ouatsu": 423.626,
        "saikou": 9.5,
        "heikin": 4.53,
        "boshuAvg30d": 569.4,
        "heikinAvg30d": 4.21
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 461,
        "ouatsu": 418.405,
        "saikou": 9.5,
        "heikin": 3.79,
        "boshuAvg30d": 569.4,
        "heikinAvg30d": 4.386
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 452,
        "ouatsu": 425.64,
        "saikou": 9.38,
        "heikin": 3.72,
        "boshuAvg30d": 563.0,
        "heikinAvg30d": 4.31
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 452,
        "ouatsu": 407.203,
        "saikou": 9.38,
        "heikin": 3.65,
        "boshuAvg30d": 563.0,
        "heikinAvg30d": 4.139
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 452,
        "ouatsu": 367.122,
        "saikou": 9.4,
        "heikin": 3.56,
        "boshuAvg30d": 562.6,
        "heikinAvg30d": 3.831
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 451,
        "ouatsu": 388.138,
        "saikou": 9.4,
        "heikin": 3.39,
        "boshuAvg30d": 561.6,
        "heikinAvg30d": 3.844
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 448,
        "ouatsu": 407.326,
        "saikou": 9.4,
        "heikin": 3.52,
        "boshuAvg30d": 558.6,
        "heikinAvg30d": 3.959
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 448,
        "ouatsu": 423.863,
        "saikou": 9.38,
        "heikin": 3.59,
        "boshuAvg30d": 558.6,
        "heikinAvg30d": 3.989
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 447,
        "ouatsu": 419.59,
        "saikou": 9.39,
        "heikin": 3.79,
        "boshuAvg30d": 557.6,
        "heikinAvg30d": 3.771
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 447,
        "ouatsu": 403.309,
        "saikou": 9.39,
        "heikin": 3.62,
        "boshuAvg30d": 557.6,
        "heikinAvg30d": 3.813
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 447,
        "ouatsu": 437.738,
        "saikou": 9.4,
        "heikin": 4.15,
        "boshuAvg30d": 555.0,
        "heikinAvg30d": 3.969
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 446,
        "ouatsu": 437.386,
        "saikou": 9.49,
        "heikin": 4.16,
        "boshuAvg30d": 554.0,
        "heikinAvg30d": 4.163
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 445,
        "ouatsu": 437.208,
        "saikou": 9.38,
        "heikin": 3.5,
        "boshuAvg30d": 553.4,
        "heikinAvg30d": 4.377
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 445,
        "ouatsu": 437.032,
        "saikou": 9.38,
        "heikin": 3.62,
        "boshuAvg30d": 553.4,
        "heikinAvg30d": 4.354
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 444,
        "ouatsu": 422.413,
        "saikou": 10,
        "heikin": 4.02,
        "boshuAvg30d": 552.4,
        "heikinAvg30d": 4.278
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 444,
        "ouatsu": 422.943,
        "saikou": 9.38,
        "heikin": 3.37,
        "boshuAvg30d": 552.4,
        "heikinAvg30d": 4.583
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 444,
        "ouatsu": 423.475,
        "saikou": 9.38,
        "heikin": 3.45,
        "boshuAvg30d": 552.0,
        "heikinAvg30d": 4.662
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 444,
        "ouatsu": 388.868,
        "saikou": 9.38,
        "heikin": 3.61,
        "boshuAvg30d": 552.0,
        "heikinAvg30d": 4.839
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 444,
        "ouatsu": 423.587,
        "saikou": 9.38,
        "heikin": 3.47,
        "boshuAvg30d": 548.1,
        "heikinAvg30d": 4.988
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 444,
        "ouatsu": 419.837,
        "saikou": 9.38,
        "heikin": 3.34,
        "boshuAvg30d": 548.1,
        "heikinAvg30d": 4.898
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 446,
        "ouatsu": 427.641,
        "saikou": 9.38,
        "heikin": 3.39,
        "boshuAvg30d": 550.5,
        "heikinAvg30d": 4.758
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 446,
        "ouatsu": 427.641,
        "saikou": 9.38,
        "heikin": 3.36,
        "boshuAvg30d": 550.1,
        "heikinAvg30d": 4.6
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 447,
        "ouatsu": 427.641,
        "saikou": 9.38,
        "heikin": 3.4,
        "boshuAvg30d": 550.7,
        "heikinAvg30d": 4.582
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 447,
        "ouatsu": 427.641,
        "saikou": 9.38,
        "heikin": 3.35,
        "boshuAvg30d": 550.7,
        "heikinAvg30d": 4.379
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 445,
        "ouatsu": 425.675,
        "saikou": 9.38,
        "heikin": 3.37,
        "boshuAvg30d": 549.1,
        "heikinAvg30d": 3.979
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 445,
        "ouatsu": 425.675,
        "saikou": 9.38,
        "heikin": 3.36,
        "boshuAvg30d": 549.1,
        "heikinAvg30d": 3.999
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 444,
        "ouatsu": 383.688,
        "saikou": 9.38,
        "heikin": 3.51,
        "boshuAvg30d": 548.5,
        "heikinAvg30d": 3.626
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 444,
        "ouatsu": 507.434,
        "saikou": 9.38,
        "heikin": 4.38,
        "boshuAvg30d": 548.5,
        "heikinAvg30d": 4.547
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 444,
        "ouatsu": 507.434,
        "saikou": 9.38,
        "heikin": 4.4,
        "boshuAvg30d": 548.5,
        "heikinAvg30d": 4.115
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 442,
        "ouatsu": 486.032,
        "saikou": 9.38,
        "heikin": 4.68,
        "boshuAvg30d": 546.5,
        "heikinAvg30d": 3.934
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 440,
        "ouatsu": 487.988,
        "saikou": 9.38,
        "heikin": 4.66,
        "boshuAvg30d": 544.1,
        "heikinAvg30d": 4.169
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 439,
        "ouatsu": 487.888,
        "saikou": 9.38,
        "heikin": 4.1,
        "boshuAvg30d": 542.7,
        "heikinAvg30d": 3.98
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 198.605,
        "saikou": 2.88,
        "heikin": 2.68,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.42
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 208.468,
        "saikou": 2.8,
        "heikin": 2.47,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.274
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 235.923,
        "saikou": 3.57,
        "heikin": 2.79,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.34
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 237.902,
        "saikou": 4.32,
        "heikin": 2.79,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.441
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 214.157,
        "saikou": 4.9,
        "heikin": 3.04,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.714
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 221.988,
        "saikou": 2.89,
        "heikin": 2.61,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.803
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 245.645,
        "saikou": 2.89,
        "heikin": 2.57,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.643
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 278.969,
        "saikou": 2.89,
        "heikin": 2.71,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.689
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 284.669,
        "saikou": 2.88,
        "heikin": 2.6,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.785
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 284.669,
        "saikou": 2.8,
        "heikin": 2.46,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.665
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 286.659,
        "saikou": 2.86,
        "heikin": 2.62,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.56
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 285.159,
        "saikou": 2.8,
        "heikin": 2.72,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.699
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 286.659,
        "saikou": 2.8,
        "heikin": 2.46,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.854
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 278.775,
        "saikou": 2.88,
        "heikin": 2.31,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.84
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 214.613,
        "saikou": 2.88,
        "heikin": 1.91,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 3.06
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 147.023,
        "saikou": 2.89,
        "heikin": 2.54,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.093
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 143.633,
        "saikou": 2.89,
        "heikin": 2.52,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.555
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 147.513,
        "saikou": 3.8,
        "heikin": 2.71,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.692
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 114.119,
        "saikou": 4.88,
        "heikin": 3.38,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 3.989
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 116.109,
        "saikou": 4.88,
        "heikin": 3.46,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 3.936
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 123.331,
        "saikou": 5.88,
        "heikin": 3.58,
        "boshuAvg30d": 160.3,
        "heikinAvg30d": 4.118
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 125.306,
        "saikou": 4.99,
        "heikin": 3.64,
        "boshuAvg30d": 159.3,
        "heikinAvg30d": 4.133
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 125.306,
        "saikou": 4,
        "heikin": 3.23,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 3.821
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 123.416,
        "saikou": 3.99,
        "heikin": 3.25,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 3.648
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 127.283,
        "saikou": 5.88,
        "heikin": 3.46,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 3.58
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 125.308,
        "saikou": 5.88,
        "heikin": 3.4,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 3.583
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 162.637,
        "saikou": 3.79,
        "heikin": 3.02,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 3.887
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 198.16,
        "saikou": 2.99,
        "heikin": 2.1,
        "boshuAvg30d": 153.9,
        "heikinAvg30d": 4.032
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 198.16,
        "saikou": 3.79,
        "heikin": 2.61,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 4.159
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 196.3,
        "saikou": 6.73,
        "heikin": 3.31,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 4.101
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 152.893,
        "saikou": 3.84,
        "heikin": 2.81,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 3.859
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 156.253,
        "saikou": 3.88,
        "heikin": 3.13,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 4.018
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 217.939,
        "saikou": 3.88,
        "heikin": 3.06,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 3.936
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 217.939,
        "saikou": 3.9,
        "heikin": 3.03,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 4.093
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 226.142,
        "saikou": 4,
        "heikin": 3.24,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 3.963
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 222.643,
        "saikou": 3.99,
        "heikin": 3.23,
        "boshuAvg30d": 153.1,
        "heikinAvg30d": 3.748
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 224.279,
        "saikou": 2.92,
        "heikin": 2.04,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 3.867
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 224.279,
        "saikou": 3.88,
        "heikin": 2.17,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 3.725
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 234.162,
        "saikou": 3.88,
        "heikin": 2.08,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 3.288
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 216.072,
        "saikou": 3.88,
        "heikin": 2.83,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 3.281
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 214.082,
        "saikou": 2.88,
        "heikin": 2.49,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 3.306
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 214.082,
        "saikou": 2.8,
        "heikin": 2.45,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 3.042
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 212.092,
        "saikou": 2.88,
        "heikin": 2.35,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.83
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 212.092,
        "saikou": 2.88,
        "heikin": 2.62,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 3.391
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 202.892,
        "saikou": 2.96,
        "heikin": 2.67,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 3.089
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 202.892,
        "saikou": 3.16,
        "heikin": 2.64,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 3.08
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 184.671,
        "saikou": 2.99,
        "heikin": 2.64,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 3.248
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 183.171,
        "saikou": 2.86,
        "heikin": 2.57,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.206
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 26.93,
        "saikou": 1.35,
        "heikin": 0.46,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.309
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 40.296,
        "saikou": 2.1,
        "heikin": 0.54,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.174
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.132
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.4,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.355
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.45,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.987
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.43,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.615
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.386
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2.79,
        "heikin": 2.65,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.172
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2.65,
        "heikin": 0.68,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.293
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 48.364,
        "saikou": 2.79,
        "heikin": 0.85,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.042
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.216
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 2.302
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.9,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 2.858
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.59,
        "heikin": 2.45,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.773
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 55.252,
        "saikou": 2.79,
        "heikin": 0.55,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 3.228
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 63.928,
        "saikou": 2.8,
        "heikin": 0.53,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.052
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 63.928,
        "saikou": 1.65,
        "heikin": 0.43,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 3.835
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.8,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 4.8
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 6,
        "heikin": 0.92,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.776
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 2.45,
        "heikin": 0.45,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 5.145
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.71,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.343
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 61.663,
        "saikou": 1.35,
        "heikin": 0.42,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.894
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 4.15,
        "heikin": 0.6,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.238
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 3.75,
        "heikin": 0.49,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.221
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 6,
        "heikin": 0.72,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.301
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 5.6,
        "heikin": 0.65,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.342
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.552
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 2.95,
        "heikin": 0.47,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.111
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 63.928,
        "saikou": 2.15,
        "heikin": 0.44,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.219
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.71,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 4.892
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 36.778,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 4.07
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 4.506
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.8,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.036
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.65,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.397
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4.5,
        "heikin": 4.28,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.438
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.21,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.178
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 5.118
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.55,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.708
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.482
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.65,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.254
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.076
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.682
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.916
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.247
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.01,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.514
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.836
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.38,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 2.962
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 37.804,
        "saikou": 2.5,
        "heikin": 0.6,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.496
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 84.276,
        "saikou": 2.87,
        "heikin": 2.26,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 1.857
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 101.272,
        "saikou": 2.8,
        "heikin": 2.22,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 1.988
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 123.257,
        "saikou": 2.95,
        "heikin": 1.99,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.006
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 109.454,
        "saikou": 2.86,
        "heikin": 1.9,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.013
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 129.396,
        "saikou": 2.87,
        "heikin": 1.56,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.122
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 117.281,
        "saikou": 2.86,
        "heikin": 1.88,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.157
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 127.166,
        "saikou": 2.89,
        "heikin": 1.91,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.117
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 127.166,
        "saikou": 2.89,
        "heikin": 1.96,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 2.221
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.86,
        "heikin": 1.9,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.003
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 127.166,
        "saikou": 2.8,
        "heikin": 1.8,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.034
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 151.104,
        "saikou": 2.86,
        "heikin": 1.52,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.201
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 151.104,
        "saikou": 2.8,
        "heikin": 1.53,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.141
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 151.104,
        "saikou": 2.8,
        "heikin": 1.61,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.254
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 151.104,
        "saikou": 2.86,
        "heikin": 1.62,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 3.155
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 151.104,
        "saikou": 2.86,
        "heikin": 1.62,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 2.914
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 151.104,
        "saikou": 2.89,
        "heikin": 1.69,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 3.234
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 115.898,
        "saikou": 2.89,
        "heikin": 1.93,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 4.115
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 127.166,
        "saikou": 4.97,
        "heikin": 2.32,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 4.587
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 125.723,
        "saikou": 4.97,
        "heikin": 2.44,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.431
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 76.3,
        "saikou": 6.44,
        "heikin": 2.65,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.465
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 121.301,
        "saikou": 6.97,
        "heikin": 3.01,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.653
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 73.161,
        "saikou": 6.95,
        "heikin": 3.48,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.517
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 118.892,
        "saikou": 3.5,
        "heikin": 1.91,
        "boshuAvg30d": 156.6,
        "heikinAvg30d": 4.353
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 116.442,
        "saikou": 4,
        "heikin": 2.36,
        "boshuAvg30d": 157.0,
        "heikinAvg30d": 4.238
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 121.301,
        "saikou": 5.44,
        "heikin": 2.62,
        "boshuAvg30d": 156.6,
        "heikinAvg30d": 5.019
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 121.301,
        "saikou": 5.97,
        "heikin": 2.47,
        "boshuAvg30d": 156.6,
        "heikinAvg30d": 4.111
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 145.239,
        "saikou": 3.5,
        "heikin": 1.55,
        "boshuAvg30d": 156.6,
        "heikinAvg30d": 4.242
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 171.182,
        "saikou": 3,
        "heikin": 1.17,
        "boshuAvg30d": 155.6,
        "heikinAvg30d": 4.188
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 147.244,
        "saikou": 3.5,
        "heikin": 1.51,
        "boshuAvg30d": 156.6,
        "heikinAvg30d": 4.24
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 166.858,
        "saikou": 4.97,
        "heikin": 1.96,
        "boshuAvg30d": 156.6,
        "heikinAvg30d": 4.024
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 210.409,
        "saikou": 2.8,
        "heikin": 0.91,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 3.891
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 138.576,
        "saikou": 4,
        "heikin": 1.59,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 3.824
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4.94,
        "heikin": 2.7,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 3.914
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 99.354,
        "saikou": 4.94,
        "heikin": 2.65,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 4.182
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 97.911,
        "saikou": 5.97,
        "heikin": 3.08,
        "boshuAvg30d": 156.0,
        "heikinAvg30d": 3.965
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 97.911,
        "saikou": 4.97,
        "heikin": 2.88,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 3.779
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 2.95,
        "heikin": 2.4,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.674
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 97.394,
        "saikou": 2.97,
        "heikin": 2.32,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.621
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 99.354,
        "saikou": 2.95,
        "heikin": 2.33,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.708
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 99.354,
        "saikou": 2.95,
        "heikin": 2.42,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.552
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 99.354,
        "saikou": 2.86,
        "heikin": 2.35,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 3.242
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 99.354,
        "saikou": 2.8,
        "heikin": 2.21,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.338
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 186.466,
        "saikou": 4.29,
        "heikin": 2.59,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 3.051
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 258.292,
        "saikou": 3.76,
        "heikin": 2.74,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 3.113
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 258.292,
        "saikou": 3.3,
        "heikin": 2.8,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 3.013
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 258.292,
        "saikou": 3.5,
        "heikin": 2.85,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.915
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 155.447,
        "saikou": 2.9,
        "heikin": 1.56,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 3.123
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 97.911,
        "saikou": 2.86,
        "heikin": 2.31,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.161
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 182.935,
        "saikou": 2.8,
        "heikin": 1.2,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.761
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 170.208,
        "saikou": 2.8,
        "heikin": 1.19,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.995
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 157.481,
        "saikou": 2.9,
        "heikin": 1.45,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 3.01
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 153.87,
        "saikou": 2.89,
        "heikin": 1.54,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.874
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 151.226,
        "saikou": 2.86,
        "heikin": 1.56,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.886
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 151.243,
        "saikou": 2.89,
        "heikin": 1.54,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 2.923
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 168.091,
        "saikou": 2.89,
        "heikin": 1.63,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.985
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 168.084,
        "saikou": 2.89,
        "heikin": 1.67,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.037
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.46,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.01
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.83,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.171
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 4.63,
        "heikin": 3.42,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.433
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 178.13,
        "saikou": 4.63,
        "heikin": 3.42,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.419
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 178.13,
        "saikou": 4.77,
        "heikin": 3.46,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 3.7
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.46,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 3.134
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 178.13,
        "saikou": 2.8,
        "heikin": 1.07,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 3.026
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 178.13,
        "saikou": 2.89,
        "heikin": 1.06,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.884
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 2.89,
        "heikin": 1.4,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.861
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 164.204,
        "saikou": 3,
        "heikin": 1.46,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.753
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.54,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.632
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 178.13,
        "saikou": 5.22,
        "heikin": 1.65,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 3.28
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 178.13,
        "saikou": 5,
        "heikin": 1.76,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 3.017
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 178.13,
        "saikou": 6.02,
        "heikin": 1.64,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 3.002
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.65,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.978
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 178.13,
        "saikou": 4.85,
        "heikin": 1.64,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.904
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 178.13,
        "saikou": 5.33,
        "heikin": 1.2,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.248
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 178.13,
        "saikou": 5.08,
        "heikin": 1.45,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.13
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 178.13,
        "saikou": 4,
        "heikin": 1.5,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.845
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 2.9,
        "heikin": 1.48,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.144
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 2.9,
        "heikin": 0.89,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.369
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 178.13,
        "saikou": 4.48,
        "heikin": 1.75,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.574
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 178.13,
        "saikou": 2.73,
        "heikin": 1.44,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 4.512
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 190.857,
        "saikou": 4,
        "heikin": 1.62,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 5.681
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 190.857,
        "saikou": 4,
        "heikin": 1.85,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 5.71
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 190.857,
        "saikou": 4,
        "heikin": 1.77,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.289
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 190.857,
        "saikou": 5.43,
        "heikin": 3.27,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.774
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 203.584,
        "saikou": 5.06,
        "heikin": 3.29,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.715
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 214.321,
        "saikou": 4.89,
        "heikin": 2.96,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 7.034
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 214.321,
        "saikou": 5.58,
        "heikin": 3.31,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 7.133
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 214.321,
        "saikou": 5.54,
        "heikin": 3.28,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.894
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 216.311,
        "saikou": 5.02,
        "heikin": 3.06,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.439
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 216.311,
        "saikou": 5.43,
        "heikin": 3.2,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 6.154
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 216.311,
        "saikou": 4.65,
        "heikin": 2.79,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 5.514
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 120.272,
        "saikou": 2.9,
        "heikin": 1.36,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 5.103
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 120.272,
        "saikou": 2.9,
        "heikin": 1.35,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 4.848
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 120.272,
        "saikou": 2.9,
        "heikin": 1.35,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 4.234
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 216.311,
        "saikou": 2.9,
        "heikin": 1.35,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.854
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 216.311,
        "saikou": 4.22,
        "heikin": 2.63,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 3.747
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 216.311,
        "saikou": 2.8,
        "heikin": 1.25,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 2.713
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.13,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.758
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.16,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.794
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.13,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.801
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.13,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.752
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.16,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.732
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.16,
        "boshuAvg30d": 39.6,
        "heikinAvg30d": 0.754
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 2.8,
        "heikin": 1.33,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.899
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 67.93,
        "saikou": 2.8,
        "heikin": 1.13,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.872
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 2.8,
        "heikin": 1.33,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.879
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 2.8,
        "heikin": 1.33,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.923
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 2.8,
        "heikin": 1.33,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.912
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 79.473,
        "saikou": 2.8,
        "heikin": 1.33,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.892
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 83.473,
        "saikou": 2.8,
        "heikin": 1.28,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 0.913
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 134.973,
        "saikou": 2.8,
        "heikin": 0.93,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 0.913
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 134.973,
        "saikou": 2.8,
        "heikin": 1.78,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.944
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 134.973,
        "saikou": 2.8,
        "heikin": 1.29,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.821
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 134.973,
        "saikou": 2.8,
        "heikin": 1.18,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.801
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.29,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.86
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 48.473,
        "saikou": 3.1,
        "heikin": 2.03,
        "boshuAvg30d": 46.6,
        "heikinAvg30d": 0.94
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 100.973,
        "saikou": 3.1,
        "heikin": 1.65,
        "boshuAvg30d": 46.6,
        "heikinAvg30d": 0.949
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.38,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.942
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.48,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.977
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.38,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.961
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.68,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.954
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 7.89,
        "heikin": 3.63,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.076
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 7.89,
        "heikin": 2.75,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.011
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.8,
        "heikin": 1.76,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.919
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 1.6,
        "heikin": 1.18,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.995
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 100.973,
        "saikou": 3.1,
        "heikin": 2.45,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.935
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 48.473,
        "saikou": 3.8,
        "heikin": 1.59,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.87
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 62.473,
        "saikou": 1.7,
        "heikin": 1.36,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 48.473,
        "saikou": 3.8,
        "heikin": 1.77,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 48.473,
        "saikou": 4.19,
        "heikin": 2.35,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.909
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 48.473,
        "saikou": 3.8,
        "heikin": 1.77,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.854
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 48.473,
        "saikou": 3.8,
        "heikin": 2.07,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.903
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 48.473,
        "saikou": 3.8,
        "heikin": 2.09,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.854
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 2.9,
        "heikin": 1.93,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.833
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 3.8,
        "heikin": 2.09,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.833
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 3.8,
        "heikin": 2.09,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.864
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 3.5,
        "heikin": 2.12,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.889
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 2.8,
        "heikin": 1.7,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.868
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 2.8,
        "heikin": 1.89,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.847
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 96.473,
        "saikou": 2.8,
        "heikin": 1.24,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.706
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.16,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.739
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.16,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.724
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.16,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.695
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.13,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.713
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 82.473,
        "saikou": 2.8,
        "heikin": 1.13,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.751
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 171.945,
        "saikou": 5.44,
        "heikin": 4.47,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 4.05
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 173.919,
        "saikou": 5.2,
        "heikin": 4.33,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.889
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 158.567,
        "saikou": 5.26,
        "heikin": 3.99,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.698
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 158.565,
        "saikou": 5.2,
        "heikin": 3.95,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.723
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 158.565,
        "saikou": 5.2,
        "heikin": 3.95,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 3.641
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 191.565,
        "saikou": 5.95,
        "heikin": 4.65,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 3.681
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 210.765,
        "saikou": 5.85,
        "heikin": 4.58,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 3.741
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 206.937,
        "saikou": 6.25,
        "heikin": 4.87,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 3.762
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 210.765,
        "saikou": 6.25,
        "heikin": 4.84,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.814
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 208.781,
        "saikou": 7.09,
        "heikin": 5.42,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.969
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 251.765,
        "saikou": 7.06,
        "heikin": 5.06,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 4.058
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 236.485,
        "saikou": 6.78,
        "heikin": 4.95,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.919
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 244.989,
        "saikou": 4.8,
        "heikin": 3.56,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 3.843
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 200.137,
        "saikou": 3.89,
        "heikin": 3.28,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 3.639
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 159.137,
        "saikou": 2.89,
        "heikin": 2.25,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 3.702
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 161.011,
        "saikou": 2.89,
        "heikin": 2.1,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 3.728
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 162.989,
        "saikou": 2.89,
        "heikin": 2.11,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 4.074
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 169.989,
        "saikou": 2.89,
        "heikin": 2.11,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 4.861
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 202.026,
        "saikou": 2.9,
        "heikin": 1.92,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 4.843
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 200.078,
        "saikou": 2.98,
        "heikin": 1.96,
        "boshuAvg30d": 176.6,
        "heikinAvg30d": 4.77
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 198.543,
        "saikou": 3.07,
        "heikin": 1.91,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 4.576
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 182.665,
        "saikou": 4,
        "heikin": 1.95,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 4.66
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 184.649,
        "saikou": 4.15,
        "heikin": 1.94,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 4.641
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 148.701,
        "saikou": 4.19,
        "heikin": 2.15,
        "boshuAvg30d": 178.2,
        "heikinAvg30d": 4.76
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 79.632,
        "saikou": 4,
        "heikin": 3.11,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 4.133
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 79.632,
        "saikou": 4,
        "heikin": 3.15,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 4.272
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 156.62,
        "saikou": 3.9,
        "heikin": 2.08,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 4.762
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 152.768,
        "saikou": 4.19,
        "heikin": 2.13,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 5.455
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 147.268,
        "saikou": 4.2,
        "heikin": 2.7,
        "boshuAvg30d": 176.6,
        "heikinAvg30d": 6.056
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 169.014,
        "saikou": 3.71,
        "heikin": 2.68,
        "boshuAvg30d": 175.6,
        "heikinAvg30d": 6.591
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 206.014,
        "saikou": 3.12,
        "heikin": 2.27,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 6.311
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 204.038,
        "saikou": 3.32,
        "heikin": 2.81,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 7.318
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 245.038,
        "saikou": 4.48,
        "heikin": 3.35,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 7.314
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 243.054,
        "saikou": 6.53,
        "heikin": 4.61,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 7.678
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 245.038,
        "saikou": 6.84,
        "heikin": 5.01,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 7.181
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 245.038,
        "saikou": 7.29,
        "heikin": 5.31,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 7.361
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 239.197,
        "saikou": 7.07,
        "heikin": 5.02,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 7.464
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 236.197,
        "saikou": 7.31,
        "heikin": 5.2,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 7.192
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 241.549,
        "saikou": 7.2,
        "heikin": 5.09,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 6.616
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 246.538,
        "saikou": 7.06,
        "heikin": 4.98,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.895
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 249.838,
        "saikou": 7.05,
        "heikin": 4.99,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.289
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 251.814,
        "saikou": 6.88,
        "heikin": 4.93,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.608
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 246.927,
        "saikou": 5.45,
        "heikin": 3.86,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.269
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 246.927,
        "saikou": 6.8,
        "heikin": 4.79,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.089
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 172.927,
        "saikou": 6.8,
        "heikin": 4.69,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.816
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 170.943,
        "saikou": 5.75,
        "heikin": 4.17,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.14
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 170.951,
        "saikou": 6.11,
        "heikin": 4.4,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.049
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 167.099,
        "saikou": 4.6,
        "heikin": 3.6,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 3.451
      }
    ]
  }
};
